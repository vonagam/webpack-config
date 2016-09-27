var webpack = require( 'webpack' );

var _ = require( 'lodash' );

var path = require( 'path' );


var applyProductionConfig = function ( config, loaders, options ) {

  config.output = options.get( 'production.output' );


  if ( _.some( loaders, { type: 'style' } ) ) {

    var ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

    config.plugins.push( new ExtractTextPlugin( options.get( 'production.plugins.css' ) ) );

    _.each( loaders, function ( loader ) {

      if ( loader.type == 'style' ) {

        loader.loader = ExtractTextPlugin.extract( loader.loaders );

        delete loader.loaders;

      }

    } );

  }


  config.plugins.push( new webpack.DefinePlugin( { 'process.env.NODE_ENV': '"production"' } ) );

  config.plugins.push( new webpack.optimize.UglifyJsPlugin( { compress: { warnings: false } } ) );


  if ( config.development.plugins.assets ) {

    var AssetsPlugin = require( 'assets-webpack-plugin' );

    config.plugins.push( new AssetsPlugin( config.development.plugins.assets ) );

  }

};


module.exports = applyProductionConfig;
