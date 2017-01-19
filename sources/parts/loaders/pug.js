var Config = require( '../../config' );

var Loader = require( '../../types/loader' );


Config.add( new Loader( {

  path: 'module.loaders.pug',

  loader: {

    test: /\.pug$/,

    loaders: [ 'pug' ],

    type: 'page',

  },

} ) );
