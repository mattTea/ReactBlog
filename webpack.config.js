var webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      NavHeader: 'app/components/NavHeader.jsx',
      Header: 'app/components/Header.jsx',
      Footer: 'app/components/Footer.jsx',
      Blog: 'app/components/Blog.jsx',
      BlogList: 'app/components/BlogList.jsx',
      SideProjects: 'app/components/SideProjects.jsx',
      About: 'app/components/About.jsx',
      Social: 'app/components/Social.jsx',
      cosmic: 'app/api/cosmic.jsx',
      applicationStyles: 'app/styles/app.scss'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }, {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }, {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
