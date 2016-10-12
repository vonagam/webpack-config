var Config = require( '../../config' );

var webpack = require( 'webpack' );


Config.add( [

  {

    path: 'plugins.define',

    plugin: webpack.DefinePlugin,

    add: 'merge',

  },

] );
