import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            // 这里是将src目录配置别名为 /@ 方便在项目中导入src目录下的文件
            '/@': path.resolve('src')
        },
    },
    plugins: [vue()], // 配置需要使用的插件列表，这里将vue添加进去
    publicDir: 'public',

    // vite开发服务器配置
    server: {
        cors: true, // 默认启用并允许任何源
        host: 'localhost',
        port: 3000,
        open: true, // 服务器启动的时候自动打开在浏览器中的应用程序
        strictPort: false,
        https: false,

        /* 反向代理配置 -> 类似于nginx , rewrite写法看vite官方文档
         *  devServer中，proxy的changeOrigin是false：请求头中host仍然是浏览器发送过来的host；
         *  如果设置成true：发送请求头中host会设置成target。
         */
        // proxy: {
        //   '/admin': {
        //     target: 'http://api.vite-admin.com', //代理接口
        //     changeOrigin: true,
        //     rewrite: (path) => path.replace(/^\/admin/, '')
        //   },
        // }
    },

    // 生产模式打包配置
    build: {
      outDir: 'dist', // 指定输出路径
      assetsDir: 'assets', // 指定生成静态资源的存放路径
      minify: 'terser', // 混淆器，terser构建后文件体积更小
    }
})
