var _ = require( 'lodash' );


module.exports = function ( config, options ) {

  var value = options.get( 'devtool', 'source-map' );


  config.devtool = value;

};
