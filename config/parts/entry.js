var _ = require( 'lodash' );

var path = require( 'path' );


module.exports = function ( config, options ) {

  var value = options.get( 'entry', {

    application: [ path.resolve( './sources/index' ) ]

  } );


  config.entry = value;

};
