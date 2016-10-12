var Config = require( '../../config' );

var path = require( 'path' );


Config.add( [

  {

    path: 'plugins.assets',

    plugin: 'assets-webpack-plugin',

    trueValue: {

      filename: 'manifest.json',

      path: path.resolve( './build' ),

    },

  },

] );
