var _ = require( 'lodash' );

var Property = require( './property' );


var Environment = function ( spec ) {

  Property.call( this, spec );

};


Environment.prototype = _.create( Property.prototype, {

  getSetMethodName: function () {

    return _.camelCase( this.spec.path.replace( /environments\.(\w+)/, 'set.$1.environment' ) );

  },

  isIncluded: function ( options ) {

    return _.get( options, 'environment' ) === this.spec.environment;

  },

  mergeEnvironmentOptions: function ( options, items ) {

    var values = this.getOptionValue( options );

    _.each( items, function ( item ) {

      if ( ! item.spec.path ) return;

      if ( item.spec.virtual === 'parent' ) return;

      if ( ! _.has( values, item.spec.path ) ) return;

      var value = _.get( values, item.spec.path );

      if ( item.hasAddMethod() ) {

        item.add( options, value );

      } else {

        item.set( options, value );

      }

    } );

  },

} );


module.exports = Environment;
