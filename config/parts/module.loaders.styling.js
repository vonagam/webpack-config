var _ = require( 'lodash' );


module.exports = function ( config, options ) {

  var value = options.get( 'module.styling', false, 'name=style.styl' );

  if ( ! value ) return;


  _.each( config.module.loaders, function ( loader ) {

    if ( loader.type == 'script' ) loader.loaders.push( 'neighbor?' + value );

  } );

};
