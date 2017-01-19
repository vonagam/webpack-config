var Config = require( '../../config' );

var Loader = require( '../../types/loader' );


Config.add( new Loader( {

  path: 'module.loaders.styl',

  loader: {

    test: /\.styl$/,

    loaders: [ 'css', 'postcss', 'stylus' ],

    type: 'style',

  },

} ) );
