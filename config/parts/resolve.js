var _ = require( 'lodash' );


module.exports = function ( config, options ) {

  config.resolve = {};


  require( './resolve.root' )( config, options );

  require( './resolve.extensions' )( config, options );

};
