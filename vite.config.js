export default {
    alias: {
        'react': 'nervjs',
        'react-dom': 'nervjs'
    },
    esbuild: {
        jsxFactory: 'Nerv.createElement',
        jsxFragment: 'Nerv.Fragment',
        jsxInject: 'import Nerv from "nervjs"'
    },
    server: {
        open: false
    }
}