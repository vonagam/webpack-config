var Config = require( '../../config' );

var Plugin = require( '../../types/plugin' );

var _ = require( 'lodash' );


Config.add( new Plugin( {

  path: 'plugins.extractStyles',

  plugin: 'extract-text-webpack-plugin',

  trueValue: '[name].css',

  modifyConfig: function ( config, options ) {

    var inputs = this.getOptionValue( options );

    var plugins = this.state.value;

    var loaders = _.get( config, 'module.loaders' );

    _.each( plugins, function ( plugin, index ) {

      var input = inputs[ index ];

      var filter = _.get( input, 'filter', _.matches( { type: 'style' } ) );

      _.each( _.filter( loaders, filter ), function ( loader ) {

        loader.loader = plugin.extract( loader.loader || loader.loaders );

        delete loader.loaders;

      } );

    } );

  },

  extends: function ( that ) {

    _.update( that, 'createPlugin', function ( createPlugin ) {

      return function ( value ) {

        value = _.get( value, 'filename', value );

        return createPlugin.call( this, value );

      };

    } );

  },

} ) );
