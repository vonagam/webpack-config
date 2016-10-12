var Config = require( '../../config' );

var _ = require( 'lodash' );


Config.add( [

  {

    path: 'plugins.extractStyles',

    plugin: 'extract-text-webpack-plugin',

    trueValue: '[name].css',

    changeConfig: function ( config ) {

      var Plugin = require( 'extract-text-webpack-plugin' );

      var plugin = _.find( _.get( config, 'plugins' ), function ( plugin ) {

        return plugin instanceof Plugin;

      } );

      _.each( _.get( config, 'module.loaders' ), function ( loader ) {

        if ( loader.type !== 'style' ) return;

        loader.loader = plugin.extract( loader.loaders );

        delete loader.loaders;

      } );

    },

  },

] );
