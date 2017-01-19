var Config = require( '../../config' );

var Loader = require( '../../types/loader' );


Config.add( new Loader( {

  path: 'module.loaders.cjsx',

  loader: {

    test: /\.cjsx$/,

    loaders: [ 'coffee-react-void' ],

    type: 'script',

    resolve: '.cjsx',

    hot: true,

  },

} ) );
