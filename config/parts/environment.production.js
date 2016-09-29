var _ = require( 'lodash' );

var webpack = require( 'webpack' );

var path = require( 'path' );


module.exports = function ( config, options ) {

  config.output.path = options.get( 'production.output.path', path.resolve( './build' ) );

  config.output.filename = options.get( 'production.output.filename', '[name].js' );

  config.output.publicPath = options.get( 'production.output.publicPath', '' );


  config.plugins.push( new webpack.DefinePlugin( { 'process.env.NODE_ENV': '"production"' } ) );

};
