// vue.config.js for less-loader@6.0.0

const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#252851',
            'link-color': '#ec583a',
            'btn-border-radius-sm': '0px',
            //'btn-border-radius-base': '0px',还是有个圆角好看一点
            'card-radius': '10px',
          },
          javascriptEnabled: true,
        },
      },
    },
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
  },
};