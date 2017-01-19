var Config = require( '../../config' );

var Loader = require( '../../types/loader' );


Config.add( new Loader( {

  path: 'module.loaders.font',

  loader: {

    test: /\.(eot|svg|ttf|otf|woff)/,

    loaders: [ 'file?name=fonts/[name].[ext]' ],

    include: /fonts/,

    type: 'font',

  },

} ) );
