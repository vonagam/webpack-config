var Config = require( '../../config' );

var Plugin = require( '../../types/plugin' );


Config.add( new Plugin( {

  path: 'plugins.typograf',

  plugin: '../../plugins/typograf-webpack-plugin',

  trueValue: { lang: 'en', mode: 'name' },

} ) );
