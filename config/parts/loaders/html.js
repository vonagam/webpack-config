var Config = require( '../../config' );


Config.add( [

  {

    path: 'module.loaders.html',

    loader: {

      test: /\.html$/,

      loaders: [ 'html' ],

      type: 'page',

    },

    add: 'concat',

  },

] );
