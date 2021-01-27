const bs = require('browser-sync').create()
const es = require('esbuild')
const { basename, extname } = require('path')

const ENTRY_FILE = './src/app.jsx'

async function esBuild(file) {
    return es.build({
        entryPoints: [file],
        bundle: true,
        sourcemap: true,
        jsxFactory: 'Nerv.createElement',
        jsxFragment: 'Nerv.Fragment',
        define: {
            DEBUG: true,
            'process.env.NODE_ENV': '\"development\"'
        },
        inject: ['./libs/nano.js'],
        outfile: `_cache/${basename(file, extname(file))}.js`
    })
}

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
