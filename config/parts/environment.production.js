var _ = require( 'lodash' );

var webpack = require( 'webpack' );

var path = require( 'path' );


module.exports = function ( config, options ) {

  config.output.path = options.get( 'production.output.path', path.resolve( './build' ) );

  config.output.filename = options.get( 'production.output.filename', '[name].js' );

  config.output.publicPath = options.get( 'production.output.publicPath', '' );


  var library = options.get( 'production.output.library' );

  if ( library == true ) library = '[name]';

  if ( library ) {

    config.output.library = library;

    config.output.libraryTarget = options.get( 'production.output.libraryTarget', 'umd' );

    config.output.umdNamedDefine = options.get( 'production.output.umdNamedDefine', true );

  }


  config.plugins.push( new webpack.DefinePlugin( { 'process.env.NODE_ENV': '"production"' } ) );

};
