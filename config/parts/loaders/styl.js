var Config = require( '../../config' );


Config.add( [

  {

    path: 'module.loaders.styl',

    loader: {

      test: /\.styl$/,

      loaders: [ 'css', 'postcss', 'stylus' ],

      type: 'style',

    },

  },

] );
