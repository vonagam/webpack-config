var _ = require( 'lodash' );


module.exports = function ( config, options ) {

  var environment = options.get( 'environment' );

  if ( environment != 'development' ) return;


  var loaders = _.filter( config.module.loaders, { hot: true } );

  if ( _.isEmpty( loaders ) ) return;


  config.plugins.unshift( new webpack.HotModuleReplacementPlugin() );


  _.each( config.entry, function ( entry ) {

    entry.unshift( 'webpack/hot/only-dev-server' );

  } );


  _.each( loaders, function ( loader ) {

    loader.loaders.unshift( 'react-hot' );

  } );


  config.devServer.hot = true;

};
