var Config = require( '../../config' );


Config.add( [

  {

    path: 'module.loaders.pug',

    loader: {

      test: /\.pug$/,

      loaders: [ 'pug' ],

      type: 'page',

    },

  },

] );
