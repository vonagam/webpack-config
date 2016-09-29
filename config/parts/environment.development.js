var _ = require( 'lodash' );

var webpack = require( 'webpack' );

var path = require( 'path' );


module.exports = function ( config, options ) {

  var host = options.get( 'devServer.host', '0.0.0.0' );

  var port = options.get( 'devServer.port', 8888 );


  _.each( config.entry, function ( entry ) {

    entry.unshift( 'webpack-dev-server/client?http://localhost:' + port );

  } );


  config.output.path = options.get( 'development.output.path', path.resolve( './public' ) );

  config.output.filename = options.get( 'development.output.filename', '[name].js' );

  config.output.publicPath = options.get( 'development.output.publicPath', 'http://localhost:' + port + '/' );


  config.plugins.unshift( new webpack.NoErrorsPlugin() );


  _.each( config.module.loaders, function ( loader ) {

    if ( loader.type == 'style' ) loader.loaders.unshift( 'style' );

  } );


  config.debug = true;

  // https://webpack.github.io/docs/webpack-dev-server.html

  config.devServer = {

    contentBase: config.output.path,

    host: host,

    port: port,

    noInfo: true,

    inline: true,

    colors: true,

  };

};
