var Config = require( '../../config' );

var Plugin = require( '../../types/plugin' );

var path = require( 'path' );


Config.add( new Plugin( {

  path: 'plugins.assets',

  plugin: 'assets-webpack-plugin',

  trueValue: {

    filename: 'manifest.json',

    path: path.resolve( './build' ),

  },

} ) );
