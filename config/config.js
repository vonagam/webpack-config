var _ = require( 'lodash' );

var Property = require( './types/property' );

var Loader = require( './types/loader' );

var Plugin = require( './types/plugin' );

var Environment = require( './types/environment' );


var Config = function ( options ) {

  this.set( options || {} );


  _.each( Config.environments, _.bind( function ( environment ) {

    _.set( this.options, environment.spec.path, {} );

  }, this ) );

};


Config.items = [];

Config.environments = [];

var createPropertyMethod = function ( item, method ) {

  return function () {

    var options = this.options;

    var value;

    if ( arguments.length === 2 ) {

      var environment = arguments[ 0 ];

      options = _.get( options, 'environments.' + environment );

      value = arguments[ 1 ];

    } else {

      value = arguments[ 0 ];

    }

    item[ method ]( options, value );

  };

};

Config.add = function ( specs ) {

  _.each( specs, function ( spec ) {

    var item;

    if ( ! item && spec.loader ) {

      item = new Loader( spec );

    }

    if ( ! item && spec.plugin ) {

      item = new Plugin( spec );

    }

    if ( ! item && spec.environment ) {

      item = new Environment( spec );

      Config.environments.push( item );

    }

    if ( ! item ) {

      item = new Property( spec );

    }

    if ( item.hasSetMethod() ) {

      Config.prototype[ item.getSetMethodName() ] = createPropertyMethod( item, 'set' );

    }

    if ( item.hasAddMethod() ) {

      Config.prototype[ item.getAddMethodName() ] = createPropertyMethod( item, 'add' );

    }

    Config.items.push( item );

  } );

};


_.assign( Config.prototype, {

  set: function ( options ) {

    this.options = _.cloneDeep( options );

  },

  get: function () {

    var options = _.cloneDeep( this.options );

    var config = {};


    _.each( Config.environments, function ( environment ) {

      if ( ! environment.isIncluded( options ) ) return;

      environment.mergeEnvironmentOptions( options, Config.items );

    } );


    var items = _.filter( Config.items, function ( item ) {

      return item.isIncluded( options );

    } );


    _.each( items, function ( item ) {

      item.transferOptionsToConfig( options, config );

    } );


    _.each( items, function ( item ) {

      item.changeConfig( config, options );

    } );


    return config;

  },

} );


module.exports = Config;
