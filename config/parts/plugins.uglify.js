var _ = require( 'lodash' );


module.exports = function ( config, options ) {

  var environment = options.get( 'environment' );

  if ( environment != 'production' ) return;


  var value = options.get( 'production.plugins.uglify' );

  if ( ! value ) return;

  if ( value == true ) value = { compress: { warnings: false } };


  config.plugins.push( new webpack.optimize.UglifyJsPlugin( value ) );

};
