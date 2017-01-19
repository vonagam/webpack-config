var Config = require( '../../config' );

var Plugin = require( '../../types/plugin' );


Config.add( new Plugin( {

  path: 'plugins.html',

  plugin: 'html-webpack-plugin',

} ) );
