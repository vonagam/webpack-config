var Config = require( '../../config' );

var path = require( 'path' );

var neighbor = path.join( __dirname, '../../../loaders/neighbor' );


Config.add( [

  {

    path: 'module.loaders.styling',

    loader: {

      test: /\.(js|cjsx)$/,

      loaders: [ neighbor + '?path=./[name].styl' ],

      include: path.resolve( './sources' ),

    },

    add: 'concat',

  },

] );
