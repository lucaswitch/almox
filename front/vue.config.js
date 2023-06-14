const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  },

  devServer: {
    proxy: {
      '^/materials': {
        target: 'http://34.151.221.81:81', // Substitua pelo URL do servidor que você está acessando
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
