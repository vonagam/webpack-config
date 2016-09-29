var _ = require( 'lodash' );

var path = require( 'path' );


module.exports = function ( config, options ) {

  var value = options.get( 'plugins.sprite' );

  if ( ! value ) return;

  if ( value == true ) value = {

    src: {

      cwd: path.resolve( './sources/sprite' ),

      glob: '*.(png|jpg|jpeg)',

    },

    target: {

      image: path.resolve( './sources/sprite/build/sprite.png' ),

      css: path.resolve( './sources/sprite/build/sprite.styl' ),

    },

  };


  var SpritesmithPlugin = require( 'webpack-spritesmith' );

  config.plugins.push( new SpritesmithPlugin( value ) );

};
