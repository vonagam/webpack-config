var Config = require( '../../config' );

var Plugin = require( '../../types/plugin' );

var webpack = require( 'webpack' );


Config.add( new Plugin( {

  path: 'plugins.provide',

  plugin: webpack.ProvidePlugin,

  add: 'merge',

} ) );
