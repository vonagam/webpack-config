var Config = require( '../../config' );

var webpack = require( 'webpack' );


Config.add( [

  {

    path: 'plugins.provide',

    plugin: webpack.ProvidePlugin,

    add: 'merge',

  },

] );
