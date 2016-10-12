var Config = require( '../../config' );

var webpack = require( 'webpack' );

var _ = require( 'lodash' );


Config.add( [

  {

    path: 'environments.production',

    environment: 'production',

    virtual: 'property',

    changeConfig: function ( config ) {

      _.update( config, 'plugins', function ( plugins ) {

        return [ new webpack.DefinePlugin( { 'process.env.NODE_ENV': '"production"' } ) ].concat( plugins || [] );

      } );

    },

  },

] );
