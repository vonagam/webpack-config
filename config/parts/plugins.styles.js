var _ = require( 'lodash' );


module.exports = function ( config, options ) {

  var environment = options.get( 'environment' );

  if ( environment != 'production' ) return;


  var loaders = _.filter( config.module.loaders, { type: 'style' } );

  if ( _.isEmpty( loaders ) ) return;


  var value = options.get( 'production.plugins.styles', '[name].css' );


  var ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

  config.plugins.push( new ExtractTextPlugin( value ) );


  _.each( loaders, function ( loader ) {

    loader.loader = ExtractTextPlugin.extract( loader.loaders );

    delete loader.loaders;

  } );

};
