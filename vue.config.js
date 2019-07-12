module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ?
        '/vue-ts/' : '/',
    outputDir: 'vue-ts',
    devServer: {
        host: 'localhost',
        port: 3030, // 端口
        open: false, // 项目启动时是否自动打开浏览器
        proxy: {
            '/server': {
                target: 'https://pxh5.youlanw.com', // 服务器api地址
                changeOrigin: true, // 是否跨域
                ws: true, // proxy websockets
                pathRewrite: { // 重写路径
                    '^/server': '/server'
                }
            }
        }
    }
}