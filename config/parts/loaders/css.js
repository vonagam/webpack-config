var Config = require( '../../config' );


Config.add( [

  {

    path: 'module.loaders.css',

    loader: {

      test: /\.css$/,

      loaders: [ 'css', 'postcss' ],

      type: 'style',

    },

  },

] );
