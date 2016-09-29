var _ = require( 'lodash' );


module.exports = function ( config, options ) {

  var value = options.get( 'module.styling' );

  if ( ! value ) return;

  if ( value == true ) value = 'name=style.styl';


  _.each( config.module.loaders, function ( loader ) {

    if ( loader.type == 'script' ) loader.loaders.push( 'neighbor?' + value );

  } );

};
