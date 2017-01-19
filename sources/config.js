var _ = require( 'lodash' );


var ITEMS = [];

var createItemMethod = function ( item, method ) {

  return function () {

    var options;

    var value;

    if ( arguments.length === 2 ) {

      var environment = arguments[ 0 ];

      var path = 'environments.' + environment;

      options = _.get( this.options, path );

      value = arguments[ 1 ];

      if ( ! options ) {

        options = {};

        _.set( this.options, path, options );

      }

    } else {

      options = this.options;

      value = arguments[ 0 ];

    }

    item[ method ]( options, value );

  };

};

var mergeOptions = function ( oldOptions, newOptions, method ) {

  _.each( ITEMS, function ( item ) {

    item.mergeOptions( oldOptions, newOptions, method );

  } );

};


var Config = function ( options ) {

  this.replace( options || {} );

};


_.assign( Config, {

  add: function ( items ) {

    _.each( _.castArray( items ), function ( item ) {

      ITEMS.push( item );

      if ( item.getSetMethodName() ) {

        Config.prototype[ item.getSetMethodName() ] = createItemMethod( item, 'set' );

      }

      if ( item.getAddMethodName() ) {

        Config.prototype[ item.getAddMethodName() ] = createItemMethod( item, 'add' );

      }

    } );

  }

} );


_.assign( Config.prototype, {

  set: function ( newOptions ) {

    mergeOptions( this.options, newOptions, 'set' );

  },

  add: function ( newOptions ) {

    mergeOptions( this.options, newOptions, 'add' );

  },

  replace: function ( newOptions ) {

    this.options = {};

    this.set( newOptions );

  },

  clone: function () {

    return new Config( this.options );

  },

  get: function () {

    var items = ITEMS;

    var options = _.cloneDeep( this.options );

    var config = {};


    // 1. Reset items

    _.each( items, function ( item ) {

      item.resetState();

    } );


    // 2. Merge environments options into resulted options

    var environments = _.castArray( _.get( options, 'environment', [] ) );

    _.each( environments, function ( environment ) {

      var environmentOptions = _.get( options, 'environments.' + environment );

      if ( environmentOptions ) mergeOptions( options, environmentOptions, 'add' );

    } );


    // 3. Filter items for included ones

    items = _.filter( items, function ( item ) {

      return item.isIncluded( options );

    } );


    // 4. Transfer options to config

    _.each( items, function ( item ) {

      item.transferOptionsToConfig( options, config );

    } );


    // 5. Post modify config

    _.each( items, function ( item ) {

      item.modifyConfig( config, options );

    } );


    return config;

  },

} );


module.exports = Config;
