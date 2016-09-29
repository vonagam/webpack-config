var _ = require( 'lodash' );


module.exports = function ( config, options ) {

  var value = options.get( 'plugins.provide' );

  if ( ! value ) return;


  config.plugins.push( new webpack.ProvidePlugin( value ) );

};
