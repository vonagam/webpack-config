var Config = require( '../../config' );

var Loader = require( '../../types/loader' );


Config.add( new Loader( {

  path: 'module.loaders.js',

  loader: {

    test: /\.js$/,

    loaders: [],

    type: 'script',

    resolve: '.js',

  },

  defaultValue: true,

} ) );
