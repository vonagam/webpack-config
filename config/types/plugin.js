var _ = require( 'lodash' );

var Property = require( './property' );


var Plugin = function ( spec ) {

  Property.call( this, spec );

};


Plugin.prototype = _.create( Property.prototype, {

  getSetMethodName: function () {

    return _.camelCase( this.spec.path.replace( /plugins\.(\w+)/, 'set.$1.plugin' ) );

  },

  getAddMethodName: function () {

    return _.camelCase( this.spec.path.replace( /plugins\.(\w+)/, 'add.$1.plugin' ) );

  },

  transformFromOptionToConfig: function ( value ) {

    value = Property.prototype.transformFromOptionToConfig.call( this, value );

    if ( this.spec.add === 'concat' ) {

      return _.map( value, _.bind( this.createPlugin, this ) );

    } else {

      return this.createPlugin( value );

    }

  },

  createPlugin: function ( value ) {

    var Plugin = this.spec.plugin;

    if ( _.isString( Plugin ) ) Plugin = require( Plugin );

    var plugin = new Plugin( value );

    return plugin;

  },

} );


module.exports = Plugin;
