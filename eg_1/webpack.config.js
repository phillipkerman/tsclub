var webpack = require('webpack');
//var HtmlWebpackPlugin = require('html-webpack-plugin');

var path = require('path');
var node_dir = path.join(__dirname,  "/node_modules");

var config = {


  entry: './app/index.tsx',

  output: {
    path: './build',
    publicPath: './build',
    filename: 'bundle.js'
  },


  module: {
     noParse: [],

    loaders: [

      //typescript
      { test: /\.(ts|tsx)$/,
        loader: 'ts-loader' },

          /*

            //templates
             { test: /\.html$/,
                loader: "raw"
            },


            //CSS
             { test: /\.css$/,
             loader: 'style!css!autoprefixer' },


             //JSX
             {test: /\.jsx$/,
             loader: 'jsx' },

             // LESS
             {test: /\.less$/,
              loader: 'style!css!less'},

             // SASS
             {test: /\.scss$/,
              loader: 'style!css!autoprefixer!sass'}
              */
    ]
  },


 addVendor: function (name, p_path) {
    this.resolve.alias[name] = p_path;
    this.module.noParse.push(new RegExp(p_path));
  },



  plugins: [

      /*
        new HtmlWebpackPlugin({
          title: "My Title",
          template: "index_template.html",

        }),
        */
        new webpack.ProvidePlugin({
           $: "jquery",
           jQuery: "jquery",
           "window.jQuery": "jquery"
       }),


    ],

  resolve: {
     alias: {},

     root: [path.join(__dirname, "./css/"), path.join(__dirname, "./js/")] ,

    extensions: ['', '.css', '.scss', '.png', '.webpack.js', '.web.js', '.js',  '.ts', '.json']
  },

    resolveLoader: {
        root: node_dir
    },

};

module.exports = config;
