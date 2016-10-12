var Config = require( '../../config' );

var webpack = require( 'webpack' );


Config.add( [

  {

    path: 'plugins.uglify',

    plugin: webpack.optimize.UglifyJsPlugin,

    trueValue: { compress: { warnings: false } },

  },

] );
