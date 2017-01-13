var Config = require( '../../config' );

var Loader = require( '../../types/loader' );


Config.add( new Loader( {

  path: 'module.loaders.css',

  loader: {

    test: /\.css$/,

    loaders: [ 'css', 'postcss' ],

    type: 'style',

  },

} ) );
