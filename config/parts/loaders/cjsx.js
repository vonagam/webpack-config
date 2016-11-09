var Config = require( '../../config' );


Config.add( [

  {

    path: 'module.loaders.cjsx',

    loader: {

      test: /\.cjsx$/,

      loaders: [ 'coffee-react-void' ],

      type: 'script',

      resolve: '.cjsx',

      hot: true,

    },

    add: 'concat',

  },

] );
