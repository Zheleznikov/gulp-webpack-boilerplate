exports.module = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

exports.module.webpackConfig =  {
  mode: isDev ? 'development' : 'production',
  module: {
    rules: [{
      test: /\.js$/,
      loader: "babel-loader",
      exclude: /node_modules/
    }]
  }
}

module.exports = {
  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
}

// export { IS_DEV, WEBPACK_CONFIG };

// exports.module = WEBPACK_CONFIG;
// exports.module = IS_DEV;