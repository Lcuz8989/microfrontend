const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const Dotenv = require('dotenv-webpack');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    entry: {index: path.resolve(__dirname, "src", "index.js")},
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].bundle.js',
        publicPath: "http://localhost:8082/",
    },
    resolve: {
      extensions: [".jsx", ".js", ".json"],
    },
    devServer: {
      host: '0.0.0.0',
      port: 8082,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
         },
      "proxy": {
        "/gateway": {
        "target": "http://192.168.71.62:8084",
        "pathRewrite": { '^/gateway': '' },
        "changeOrigin": true,
        "secure": false
        }
      }
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          }, {
            test: /\.js$/,
            exclude: [path.resolve(__dirname, 'node_modules')],
            loader: 'babel-loader',
          },
          {
            test: /\.vue$/,
            loader: 'vue-loader'
          },
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              'style-loader',
              // Translates CSS into CommonJS
              'css-loader',
              // Compiles Sass to CSS
              'sass-loader',
            ],
          }
        ],
      },
      /*resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
    },
    modules: [path.resolve(__dirname, 'node_modules')],
  },*/
  plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "index.html")
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new Dotenv(),
    new ModuleFederationPlugin({
      name: 'authenticate',
      filename: 'remoteEntry.js',
      exposes: {
        "./LoginPage": "./src/authenticateVue/Front-End/login.vue",
        "./SignupPage": "./src/authenticateVue/Front-End/signup.vue",
        "./RecoveryPage": "./src/authenticateVue/Front-End/resetPasswordUno.vue",
        "./Router": "./src/router/index.js",
      },
      shared: require("./package.json").dependencies,
    })
    ],
    devtool: 'source-map',
};