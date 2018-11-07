export default {
    input: 'dist/public_api.js',
    output: {
        file: 'dist/bundles/blank.umd.js',
        format: 'umd',
        name: 'Blank',
        sourcemap: true
    },
};