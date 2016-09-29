var _ = require( 'lodash' );


module.exports = function ( config, options ) {

  var environment = options.get( 'environment' );

  if ( environment != 'production' ) return;


  var value = options.get( 'production.plugins.assets', false, {

    path: config.output.path,

    filename: 'manifest.json',

  } );

  if ( ! value ) return;


  var AssetsPlugin = require( 'assets-webpack-plugin' );

  config.plugins.push( new AssetsPlugin( value ) );

};
