var _ = require( 'lodash' );


module.exports = function ( config, options ) {

  var value = options.get( 'plugins.typograf', false, { lang: 'en', mode: 'name' } );

  if ( ! value ) return;


  var TypografPlugin = require( '../../plugins/typograf-webpack-plugin' );

  config.plugins.push( new TypografPlugin( value ) );

};
