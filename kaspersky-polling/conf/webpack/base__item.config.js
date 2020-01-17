const {resolve} = require('path');
const customLoaders = require('./custom-loaders');

module.exports = (config) => ({
  entry: {
    ...config.app.transpile && { polyfills: '@babel/polyfill' },
    app: resolve(__dirname, '../../src/app/' + process.env.BUILD_PATH),
  },
  output: {
    filename: '[name].js',
    path: resolve(__dirname, '../..', config.outputDir),
  },
  resolveLoader: {
    // You can add your own custom loaders inside the `custom-loaders` directory
    // you don't need to include them anywhere, as they will automatically be included
    // e.g. The `minify-template.loader.js` is automatically loaded as `minify-template-loader`
    alias: customLoaders,
  },
  resolve: {
    extensions: ['.ts', '.js', '.scss', '.sass', '.html'],
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: 'to-string-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: resolve(__dirname, '../postcss.config.js'),
                ctx: config,
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        use: 'base64-inline-loader?&name=[name].[ext]'
      }
      // {
      //   test: /\.(png|jpg|gif|svg)$/,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         limit: 8192
      //       }
      //     },
      //     // {
      //     //   loader: 'image-webpack-loader',
      //     //   options: {
      //     //     bypassOnDebug: true,
      //     //     mozjpeg: {
      //     //       quality: 65,
      //     //     },
      //     //     pngquant:{
      //     //       quality: "65-90",
      //     //       speed: 4
      //     //     },
      //     //     svgo:{
      //     //       plugins: [
      //     //         {
      //     //           removeViewBox: false
      //     //         },
      //     //         {
      //     //           removeEmptyAttrs: false
      //     //         }
      //     //       ]
      //     //     },
      //     //     gifsicle: {
      //     //       interlaced: false,
      //     //       optimizationLevel: 3,
      //     //     },
      //     //     optipng: {
      //     //       optimizationLevel: 7,
      //     //     },
      //     //   },
      //     // },
      //   ]
      // },
    ],
  },
});
