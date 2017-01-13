var _ = require( 'lodash' );

var Property = require( './property' );


var Loader = function ( spec ) {

  spec = _.assign( {}, spec, {

    add: 'concat',

  } );

  Property.call( this, spec );

};


Loader.prototype = _.create( Property.prototype, {

  getSetMethodName: function () {

    return _.camelCase( this.spec.path.replace( /module\.loaders\.(\w+)/, 'set.$1.module.loader' ) );

  },

  getAddMethodName: function () {

    return _.camelCase( this.spec.path.replace( /module\.loaders\.(\w+)/, 'add.$1.module.loader' ) );

  },

  getConfigValue: function ( options ) {

    var value = Property.prototype.getConfigValue.call( this, options );

    value = _.map( value, _.bind( function ( value ) {

      return _.assign( {}, this.spec.loader, value );

    }, this ) )

    return value;

  },

} );


module.exports = Loader;
