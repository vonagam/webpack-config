var Config = require( '../../config' );

var Environment = require( '../../types/environment' );

var webpack = require( 'webpack' );

var _ = require( 'lodash' );


Config.add( new Environment( {

  environment: 'production',

  modifyConfig: function ( config ) {

    _.update( config, 'plugins', function ( plugins ) {

      return [ new webpack.DefinePlugin( { 'process.env.NODE_ENV': '"production"' } ) ].concat( plugins || [] );

    } );

  },

} ) );
