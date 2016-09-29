var _ = require( 'lodash' );

var path = require( 'path' );


module.exports = function ( config, options ) {

  var value = options.get( 'plugins.sprite', false, {

    src: {

      cwd: path.resolve( './sources/sprite' ),

      glob: '*.(png|jpg|jpeg)',

    },

    target: {

      image: path.resolve( './sources/sprite/build/sprite.png' ),

      css: path.resolve( './sources/sprite/build/sprite.styl' ),

    },

  } );

  if ( ! value ) return;


  var SpritesmithPlugin = require( 'webpack-spritesmith' );

  config.plugins.push( new SpritesmithPlugin( value ) );

};
