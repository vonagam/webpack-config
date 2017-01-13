var Config = require( '../../config' );

var Loader = require( '../../types/loader' );


Config.add( new Loader( {

  path: 'module.loaders.img',

  loader: {

    test: /\.(png|jpg|svg)$/,

    loaders: [ 'url?limit=3000&name=images/[name]-[hash].[ext]', 'image-webpack' ],

    exclude: /fonts/,

    type: 'image',

  },

} ) );
