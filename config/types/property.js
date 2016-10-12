var _ = require( 'lodash' );

var Item = require( './item' );


var Property = function ( spec ) {

  Item.call( this, spec );

};


Property.prototype = _.create( Item.prototype, {

  hasSetMethod: function () {

    return true;

  },

  getSetMethodName: function () {

    return _.camelCase( 'set.' + this.spec.path );

  },

  set: function ( options, value ) {

    if ( this.spec.add === 'concat' ) {

      if ( ! _.isArray( value ) ) value = [ value ];

    }

    _.set( options, this.spec.path, value );

  },

  hasAddMethod: function () {

    return Boolean( this.spec.add );

  },

  getAddMethodName: function () {

    return _.camelCase( 'add.' + this.spec.path );

  },

  add: function ( options, value ) {

    if ( this.spec.add === 'merge' ) {

      var prevValue = this.getOptionValue( options ) || {};

      var nextValue = _.assign( {}, prevValue, value );

    }

    if ( this.spec.add === 'concat' ) {

      var prevValue = this.getOptionValue( options ) || [];

      var nextValue = _.concat( [], prevValue, value );

    }

    this.set( options, nextValue );

  },

  isIncluded: function ( options ) {

    return this.getOptionValue( options ) !== undefined;

  },

  transferOptionsToConfig: function ( options, config ) {

    if ( this.spec.virtual ) return;

    var value = this.getConfigValue( options );

    _.set( config, this.spec.path, value );

  },

  transformFromOptionToConfig: function ( value ) {

    if ( this.spec.transform ) return this.spec.transform( value );

    return value;

  },

  getOptionValue: function ( options ) {

    var value = _.get( options, this.spec.path, this.spec.defaultValue );

    if ( value === true && this.spec.trueValue ) value = this.spec.trueValue;

    return value;

  },

  getConfigValue: function ( options ) {

    var optionValue = this.getOptionValue( options );

    var configValue = this.transformFromOptionToConfig( optionValue );

    return configValue;

  },

} );


module.exports = Property;
