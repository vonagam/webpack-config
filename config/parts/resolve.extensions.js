var _ = require( 'lodash' );


module.exports = function ( config, options ) {

  config.resolve.extensions = [ '' ];

  _.each( config.module.loaders, function ( loader ) {

    if ( loader.resolve ) config.resolve.extensions.push( loader.resolve );

  } );

};
