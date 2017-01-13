var _ = require( 'lodash' );


var Item = function ( spec ) {

  this.spec = _.clone( spec );

  this.state = {};

  if ( this.spec.extends ) this.spec.extends( this );

};


Item.prototype = _.create( Object.prototype, {

  hasSetMethod: function () {

    return Boolean( this.getSetMethodName() );

  },

  hasAddMethod: function () {

    return Boolean( this.getAddMethodName() );

  },

  getSetMethodName: function () {

    return undefined;

  },

  getAddMethodName: function () {

    return undefined;

  },

  set: function ( options, value ) {

  },

  add: function ( options, value ) {

  },

  resetState: function () {

    this.state = {};

  },

  mergeOptions: function ( oldOptions, newOptions, method ) {

  },

  isIncluded: function ( options ) {

    return true;

  },

  transferOptionsToConfig: function ( options, config ) {

  },

  modifyConfig: function ( config, options ) {

  },

} );


module.exports = Item;
