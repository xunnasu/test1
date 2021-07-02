/*
 * @Author: suxunna
 * @Date: 2021-03-25 16:35:45
 * @LastEditTime: 2021-03-26 11:28:59
 * @LastEditors: dafengxiang
 * @Description: 配置
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: { '@': path.resolve(__dirname, './src'), },
    extensions: [ '.js','.vue']
  },
  server: {
    port: 8080,
    proxy: {
      '/^\/api/': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
      },
    }
  },
  plugins: [vue()]
})
