var Config = require( '../../config' );

var Plugin = require( '../../types/plugin' );

var webpack = require( 'webpack' );

var _ = require( 'lodash' );


Config.add( new Plugin( {

  path: 'plugins.hot',

  plugin: webpack.HotModuleReplacementPlugin,

  trueValue: {},

  modifyConfig: function ( config ) {

    _.each( _.get( config, 'entry' ), function ( entry ) {

      entry.unshift( 'webpack/hot/only-dev-server' );

    } );

    _.each( _.get( config, 'module.loaders' ), function ( loader ) {

      if ( ! loader.hot ) return;

      loader.loaders.unshift( 'react-hot' );

    } );

    _.set( config, 'devServer.hot', true );

  },

} ) );
