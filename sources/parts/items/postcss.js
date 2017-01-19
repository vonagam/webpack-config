var Config = require( '../../config' );

var Item = require( '../../types/item' );

var _ = require( 'lodash' );


Config.add( new Item( {

  extends: function ( that ) {

    that.modifyConfig = function ( config, options ) {

      var hasPostCss = _.some( _.get( config, 'module.loaders' ), function ( loader ) {

        return _.includes( loader.loaders, 'postcss' );

      } );

      if ( ! hasPostCss ) return;

      config.postcss = _.constant( [

        require( 'autoprefixer' )

      ] );

    };

  },

} ) );
