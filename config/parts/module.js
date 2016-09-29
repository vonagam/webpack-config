var _ = require( 'lodash' );


module.exports = function ( config, options ) {

  config.module = {};


  require( './module.loaders' )( config, options );

  require( './module.loaders.styling' )( config, options );

  require( './module.loaders.postcss' )( config, options );

};
