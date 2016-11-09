var Config = require( '../../config' );


Config.add( [

  {

    path: 'module.loaders.font',

    loader: {

      test: /\.(eot|svg|ttf|otf|woff)/,

      loaders: [ 'file?name=fonts/[name].[ext]' ],

      include: /fonts/,

      type: 'font',

    },

    add: 'concat',

  },

] );
