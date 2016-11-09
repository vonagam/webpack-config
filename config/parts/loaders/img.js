var Config = require( '../../config' );


Config.add( [

  {

    path: 'module.loaders.img',

    loader: {

      test: /\.(png|jpg|svg)$/,

      loaders: [ 'url?limit=3000&name=images/[name]-[hash].[ext]', 'image-webpack' ],

      exclude: /fonts/,

      type: 'image',

    },

    add: 'concat',

  },

] );
