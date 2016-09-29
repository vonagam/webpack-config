var _ = require( 'lodash' );


module.exports = function ( config, options ) {

  var environment = options.get( 'environment' );

  if ( environment == 'development' ) require( './environment.development' )( config, options );

  if ( environment == 'production' ) require( './environment.production' )( config, options );

};
