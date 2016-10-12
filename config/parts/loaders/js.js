var Config = require( '../../config' );


Config.add( [

  {

    path: 'module.loaders.js',

    loader: {

      test: /\.js$/,

      loaders: [],

      type: 'script',

      resolve: '.js',

    },

    defaultValue: true,

  },

] );
