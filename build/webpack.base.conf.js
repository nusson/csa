'use strict'

const webpack = require('webpack')
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: "./src/main.js",
    inlined: "./src/assets/styles/inlined/index.styl"
  },
  output: {
    path: config.build.assetsRoot,
    filename: "[name].js",
    publicPath:
      process.env.NODE_ENV === "production"
        ? config.build.assetsPublicPath
        : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      "@": resolve("src"),
      src: resolve("src"),
      assets: resolve("src/assets"),
      img: resolve("src/assets/img"),
      datas: resolve("src/assets/datas"),
      directives: resolve("src/directives"),
      components: resolve("src/components"),
      transitions: resolve("src/transitions"),
      cpt: resolve("src/components"),
      ui: resolve("src/components/Ui"),
      config: resolve("src/config"),
      utils: resolve("src/utils"),
      services: resolve("src/services"),
      vendors: resolve("src/vendors"),
      Settings: resolve("src/assets/js/Settings"),
      // to work with gsap, scrollmagic and our pro plugins
      gsapPlugins: resolve("node_modules/gsap/src/uncompressed/plugins"),
      TweenLite: resolve("node_modules/gsap/src/uncompressed/TweenLite.js"),
      TweenMax: resolve("node_modules/gsap/src/uncompressed/TweenMax.js"),
      TimelineLite: resolve("node_modules/gsap/src/uncompressed/TimelineLite.js"),
      TimelineMax: resolve("node_modules/gsap/src/uncompressed/TimelineMax.js"),
      ScrollMagic: resolve("node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js"),
      ScrollMagicPlugins: resolve("node_modules/scrollmagic/scrollmagic/uncompressed/plugins/")
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: "eslint-loader",
        enforce: "pre",
        exclude: /node_modules/,
        include: [resolve("src"), resolve("test")],
        options: {
          formatter: require("eslint-friendly-formatter"),
          fix: true
        }
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: [resolve("src"), resolve("test")]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: utils.assetsPath("img/[name].[hash:7].[ext]")
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|mov|wav|flac|aac)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: utils.assetsPath("media/[name].[hash:7].[ext]")
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: utils.assetsPath("fonts/[name].[hash:7].[ext]")
        }
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        stylus: {
          use: [require("kouto-swiss")()],
          import: [path.join(__dirname, "../src/assets/styles/config/index")],
          preferPathResolver: "webpack"
        }
      }
    })
  ]
};
