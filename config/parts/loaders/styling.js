var Config = require( '../../config' );

var Loader = require( '../../types/loader' );

var path = require( 'path' );

var neighbor = path.join( __dirname, '../../../loaders/neighbor' );


Config.add( new Loader( {

  path: 'module.loaders.styling',

  loader: {

    test: /\.(js|cjsx)$/,

    loaders: [ neighbor + '?path=./[name].styl' ],

    include: path.resolve( './sources' ),

  },

} ) );
