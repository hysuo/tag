const { override, fixBabelImports, addWebpackAlias, addBabelPlugins } = require('customize-cra')
const path = require('path')

module.exports = override(
  ...addBabelPlugins(
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ]
  ),
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),

  addWebpackAlias({
    ['assets']: path.resolve(__dirname, 'src/assets'),
    ['styles']: path.resolve(__dirname, 'src/assets/styles'),
    ['pages']: path.resolve(__dirname, 'src/pages'),
    ['utils']: path.resolve(__dirname, 'src/utils'),
    ['images']: path.resolve(__dirname, 'src/assets/images'),
    ['components']: path.resolve(__dirname, 'src/components'),
    ['utils']: path.resolve(__dirname, 'src/utils'),
    ['msg']: path.resolve(__dirname, 'src/pages/index/msg'),
    ["img"]: path.resolve(__dirname, 'src/assets/img'),
  })
)