var webpack = require( 'webpack' );

var _ = require( 'lodash' );

var path = require( 'path' );


var applyProductionConfig = function ( config, loaders, options ) {

  config.output.path = options.get( 'production.output.path' );

  config.output.filename = options.get( 'production.output.filename' );

  config.output.publicPath = options.get( 'production.output.publicPath' );

  if ( options.get( 'production.output.library' ) ) {

    config.output.library = options.get( 'production.output.library' );

    config.output.libraryTarget = 'umd';

    config.output.umdNamedDefine = true;

  }


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


  if ( options.get( 'production.plugins.uglify' ) ) {

    config.plugins.push( new webpack.optimize.UglifyJsPlugin( { compress: { warnings: false } } ) );

  }


  if ( options.get( 'production.plugins.assets' ) ) {

    var AssetsPlugin = require( 'assets-webpack-plugin' );

    config.plugins.push( new AssetsPlugin( options.get( 'production.plugins.assets' ) ) );

  }

};


module.exports = applyProductionConfig;
