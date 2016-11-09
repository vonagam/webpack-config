var _ = require( 'lodash' );

var Property = require( './property' );


var Loader = function ( spec ) {

  Property.call( this, spec );

};


Loader.prototype = _.create( Property.prototype, {

  getSetMethodName: function () {

    return _.camelCase( this.spec.path.replace( /module\.loaders\.(\w+)/, 'set.$1.module.loader' ) );

  },

  getAddMethodName: function () {

    return _.camelCase( this.spec.path.replace( /module\.loaders\.(\w+)/, 'add.$1.module.loader' ) );

  },

  transformFromOptionToConfig: function ( value ) {

    value = Property.prototype.transformFromOptionToConfig.call( this, value );

    value = _.map( value, _.bind( function ( value ) {

      return _.assign( {}, this.spec.loader, value );

    }, this ) );

    return value;

  },

} );


module.exports = Loader;
