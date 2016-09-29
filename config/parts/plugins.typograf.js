var _ = require( 'lodash' );


module.exports = function ( config, options ) {

  var value = options.get( 'plugins.typograf' );

  if ( ! value ) return;

  if ( value == true ) value = { lang: 'en', mode: 'name' };


  var TypografPlugin = require( '../../plugins/typograf-webpack-plugin' );

  config.plugins.push( new TypografPlugin( value ) );

};
