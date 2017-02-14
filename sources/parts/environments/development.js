var Config = require( '../../config' );

var Environment = require( '../../types/environment' );

var webpack = require( 'webpack' );

var _ = require( 'lodash' );


Config.add( new Environment( {

  environment: 'development',

  modifyConfig: function ( config ) {

    var host = _.get( config, 'devServer.host' );

    var port = _.get( config, 'devServer.port' );

    var path = _.get( config, 'output.publicPath' );


    var urlBase = 'http://' + host + ':' + port;

    var urlPath = path + ( /\/$/.test( path ) ? '' : '/' );


    _.each( _.get( config, 'entry' ), function ( entry ) {

      entry.unshift( 'webpack-dev-server/client?' + urlBase );

    } );


    _.set( config, 'output.publicPath', urlBase + urlPath );


    _.each( _.get( config, 'module.loaders' ), function ( loader ) {

      if ( loader.type === 'style' ) loader.loaders.unshift( 'style' );

    } );


    _.set( config, 'debug', true );


    _.update( config, 'plugins', function ( plugins ) {

      return [ new webpack.NoErrorsPlugin() ].concat( plugins || [] );

    } );

  },

} ) );
