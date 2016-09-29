var _ = require( 'lodash' );


module.exports = function ( config, options ) {

  config.output = {};

  config.output.sourcePrefix = options.get( 'output.sourcePrefix', '' );


  var library = options.get( 'output.library', false, '[name]' );

  if ( library ) {

    config.output.library = library;

    config.output.libraryTarget = options.get( 'output.libraryTarget', 'umd' );

    config.output.umdNamedDefine = options.get( 'output.umdNamedDefine', true );

  }

};
