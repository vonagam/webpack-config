var _ = require( 'lodash' );

var Item = require( './item' );


var Property = function ( spec ) {

  Item.call( this, spec );

};


Property.prototype = _.create( Item.prototype, {

  hasAddMethod: function () {

    return Boolean( this.spec.add );

  },

  getSetMethodName: function () {

    return _.camelCase( 'set.' + this.spec.path );

  },

  getAddMethodName: function () {

    return _.camelCase( 'add.' + this.spec.path );

  },

  set: function ( options, value ) {

    _.set( options, this.spec.path, value );

  },

  add: function ( options, value ) {

    var type = this.spec.add;

    var nextValue;

    if ( type === 'merge' ) {

      var prevValue = this.getOptionValue( options ) || {};

      nextValue = _.assign( {}, prevValue, value );

    }

    if ( type === 'concat' ) {

      var prevValue = this.getOptionValue( options ) || [];

      nextValue = _.concat( [], prevValue, value );

    }

    this.set( options, nextValue );

  },

  mergeOptions: function ( oldOptions, newOptions, method ) {

    if ( this.spec.virtual === 'parent' ) return;

    if ( ! this.spec.path ) return;

    if ( ! _.has( newOptions, this.spec.path ) ) return;

    method = method === 'add' && this.hasAddMethod() ? 'add' : 'set';

    var newValue = this.getOptionValue( newOptions );

    this[ method ]( oldOptions, newValue );

  },

  getOptionValue: function ( options ) {

    var value = _.get( options, this.spec.path, this.spec.defaultValue );

    if ( value === true && this.spec.trueValue ) value = this.spec.trueValue;

    if ( value !== undefined && this.spec.add === 'concat' ) value = _.castArray( value );

    return value;

  },

  isIncluded: function ( options ) {

    return this.getOptionValue( options ) !== undefined;

  },

  transferOptionsToConfig: function ( options, config ) {

    if ( this.spec.virtual ) return;

    var value = this.getConfigValue( options );

    this.state.value = value;

    _.set( config, this.spec.path, value );

  },

  getConfigValue: function ( options ) {

    return this.getOptionValue( options );

  },

  modifyConfig: function ( config, options ) {

    if ( this.spec.modifyConfig ) this.spec.modifyConfig.call( this, config, options );

  },

} );


module.exports = Property;
