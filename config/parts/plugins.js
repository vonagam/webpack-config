var _ = require( 'lodash' );


module.exports = function ( config, options ) {

  require( './plugins.assets' )( config, options );

  require( './plugins.hot' )( config, options );

  require( './plugins.html' )( config, options );

  require( './plugins.provide' )( config, options );

  require( './plugins.sprite' )( config, options );

  require( './plugins.styles' )( config, options );

  require( './plugins.typograf' )( config, options );

  require( './plugins.uglify' )( config, options );

};
