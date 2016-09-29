var _ = require( 'lodash' );


module.exports = function ( config, options ) {

  var loaders = _.filter( config.module.loaders, function ( loader ) {

    return _.includes( loader.loaders, 'postcss' );

  } );

  if ( _.isEmpty( loaders ) ) return;


  var autoprefixer = require( 'autoprefixer' );

  config.postcss = function () { return [ autoprefixer ]; };

};
