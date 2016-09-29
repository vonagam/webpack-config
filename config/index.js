var _ = require( 'lodash' );

var path = require( 'path' );


var createConfig = function ( options ) {

  var options = _( options );

  var config = {};


  config.plugins = [];


  require( './parts/entry' )( config, options );

  require( './parts/output' )( config, options );

  require( './parts/module' )( config, options );

  require( './parts/resolve' )( config, options );

  require( './parts/devtool' )( config, options );

  require( './parts/environment' )( config, options );

  require( './parts/plugins' )( config, options );


  _.set( config, 'resolveLoader.alias.neighbor', path.join( __dirname, '../loaders/neighbor' ) );


  return config;

};


module.exports = createConfig;
