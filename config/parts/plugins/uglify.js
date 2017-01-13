var Config = require( '../../config' );

var Plugin = require( '../../types/plugin' );

var webpack = require( 'webpack' );


Config.add( new Plugin( {

  path: 'plugins.uglify',

  plugin: webpack.optimize.UglifyJsPlugin,

  trueValue: { compress: { warnings: false } },

} ) );
