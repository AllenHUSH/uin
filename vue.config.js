module.exports = {
  devServer: {
    port: 3000,
  },

  pluginOptions: {
    windicss: {
      // see https://github.com/windicss/vite-plugin-windicss/blob/main/packages/plugin-utils/src/options.ts
    },
  },

  pwa: {
    name: 'UIN 有音',
    themeColor: '#3880ff'
  }
};
