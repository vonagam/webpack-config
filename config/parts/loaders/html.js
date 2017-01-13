var Config = require( '../../config' );

var Loader = require( '../../types/loader' );


Config.add( new Loader( {

  path: 'module.loaders.html',

  loader: {

    test: /\.html$/,

    loaders: [ 'html' ],

    type: 'page',

  },

} ) );
