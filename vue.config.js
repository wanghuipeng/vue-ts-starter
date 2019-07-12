module.exports = {
    devServer: {
        // proxy: {
        //     '/api': {
        //         target: 'http://www.example.org',
        //         changeOrigin: true,
        //         ws: true,
        //         pathRewrite: {
        //           '^/api': ''
        //         }
        //     }
        // }
    },
    publicPath: process.env.NODE_ENV === 'production' ?
        '/vue-ts/' : '/',
    outputDir: 'vue-ts',
    devServer: {
        port: '3030'
    }
}