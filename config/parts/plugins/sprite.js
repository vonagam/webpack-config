var Config = require( '../../config' );

var path = require( 'path' );


Config.add( [

  {

    path: 'plugins.sprite',

    plugin: 'webpack-spritesmith',

    trueValue: {

      src: {

        cwd: path.resolve( './sources/sprite' ),

        glob: '*.(png|jpg|jpeg)',

      },

      target: {

        image: path.resolve( './sources/sprite/build/sprite.png' ),

        css: path.resolve( './sources/sprite/build/sprite.styl' ),

      },

    },

  },

] );
