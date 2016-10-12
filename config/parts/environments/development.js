var Config = require( '../../config' );

var webpack = require( 'webpack' );

var _ = require( 'lodash' );


Config.add( [

  {

    path: 'environments.development',

    environment: 'development',

    virtual: 'property',

    changeConfig: function ( config ) {

      var host = _.get( config, 'devServer.host' );

      var port = _.get( config, 'devServer.port' );


      _.each( _.get( config, 'entry' ), function ( entry ) {

        entry.unshift( 'webpack-dev-server/client?http://' + host + ':' + port );

      } );


      _.set( config, 'output.publicPath', 'http://' + host + ':' + port + '/' );


      _.each( _.get( config, 'module.loaders' ), function ( loader ) {

        if ( loader.type == 'style' ) loader.loaders.unshift( 'style' );

      } );


      _.set( config, 'debug', true );


      _.update( config, 'plugins', function ( plugins ) {

        return [ new webpack.NoErrorsPlugin() ].concat( plugins || [] );

      } );

    },

  },

] );
