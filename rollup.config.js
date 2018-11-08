export default {
    input: './dist/public_api.js',
    output: {
        file: './dist/bundles/sheetbase-blank-server.umd.js',
        format: 'umd',
        name: 'Blank',
        sourcemap: true
    },
};