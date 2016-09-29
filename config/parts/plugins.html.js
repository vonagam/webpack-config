var _ = require( 'lodash' );


module.exports = function ( config, options ) {

  var value = options.get( 'plugins.html' );

  if ( ! value ) return;


  var HtmlPlugin = require( 'html-webpack-plugin' );

  _.each( value, function ( html ) {

    config.plugins.push( new HtmlPlugin( html ) );

  } );

};
