var webpack = require( 'webpack' );

var _ = require( 'lodash' );

var path = require( 'path' );


var applyDevelopmentConfig = function ( config, loaders, options ) {

  var hot = _.some( loaders, 'react' );

  var host = '0.0.0.0';

  var port = 8888;


  _.each( config.entry, function ( entry ) {

    if ( hot ) entry.unshift( 'webpack/hot/only-dev-server' );

    entry.unshift( 'webpack-dev-server/client?http://localhost:' + port );

  } );


  config.output.path = options.development.output.path;

  config.output.filename = '[name].js';

  config.output.publicPath = "http://localhost:#{ port }/";


  config.plugins.unshift( new webpack.NoErrorsPlugin() );

  if ( hot ) config.plugins.unshift( new webpack.HotModuleReplacementPlugin() );


  _.each( loaders, function ( loader ) {

    if ( loader.react ) loader.loaders.unshift( 'react-hot' );

    if ( loader.type == 'style' ) loader.loaders.unshift( 'style' );

  } );


  config.debug = true;

  config.devtool = 'source-map';

  // https://webpack.github.io/docs/webpack-dev-server.html

  config.devServer = {

    contentBase: config.output.path,

    hot: hot,

    host: host,

    port: port,

    noInfo: true,

    inline: true,

    colors: true,

  };

};


module.exports = applyDevelopmentConfig;
