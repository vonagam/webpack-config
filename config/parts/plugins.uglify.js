var _ = require( 'lodash' );


module.exports = function ( config, options ) {

  var environment = options.get( 'environment' );

  if ( environment != 'production' ) return;


  var value = options.get( 'production.plugins.uglify', false, { compress: { warnings: false } } );

  if ( ! value ) return;


  config.plugins.push( new webpack.optimize.UglifyJsPlugin( value ) );

};
