let mix = require("laravel-mix").mix

mix.webpackConfig({
  "module": {
    "rules": [
      {
        "test": /jsx$/,
        "exclude": /node_modules/,
        "loader": "babel-loader" + mix.config.babelConfig(),
        "query": {
          "presets": ["react", "es2015"]
        }
      }
    ]
  }
})

mix.setPublicPath("dist")

mix.js("src/js/main.jsx", "dist/js/main.js")
mix.sass("src/css/main.scss", "dist/css/main.css")
