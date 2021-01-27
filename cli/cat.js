const es = require('esbuild')
const { basename, extname } = require('path')

const ENTRY_FILE = './src/app.jsx'

let isDev = true
if (process.argv[2] === 'build') isDev = false

async function esBuild(file) {
    return es.build({
        entryPoints: [file],
        bundle: true,
        sourcemap: isDev,
        minify: !isDev,
        jsxFactory: 'Nerv.createElement',
        jsxFragment: 'Nerv.Fragment',
        define: {
            DEBUG: isDev,
            'process.env.NODE_ENV': isDev ? '\"development\"' : '\"production\"'
        },
        inject: ['./libs/nano.js'],
        outfile: (isDev ? '_cache/' : 'dist/') + `${basename(file, extname(file))}.js`
    })
}

if (isDev) {
    const bs = require('browser-sync').create()
    bs.watch('./src/*.jsx', async e => {
        if (e === 'change') {
            await esBuild(ENTRY_FILE)
            bs.reload()
        }
    })

    esBuild(ENTRY_FILE).then(() => bs.init({
        server: './_cache',
        open: false,
        ui: false
    }))
} else {
    const del = require('del')
    del(['dist']).then(async () => await esBuild(ENTRY_FILE))
}
