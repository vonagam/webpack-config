var _ = require( 'lodash' );

var path = require( 'path' );


module.exports = function ( config, options ) {

  var value = options.get( 'resolve.root', path.resolve( './sources' ) );


  config.resolve.root = value;

};
