var _ = require( 'lodash' );


module.exports = function ( config, options ) {

  config.output = {};

  config.output.sourcePrefix = options.get( 'output.sourcePrefix', '' );

};
