var _ = require( 'lodash' );

var Property = require( './property' );


var Environment = function ( spec ) {

  spec = _.assign( {}, spec, {

    path: 'environments.' + spec.environment,

    add: 'merge',

    virtual: 'option',

  } );

  Property.call( this, spec );

};


Environment.prototype = _.create( Property.prototype, {

  getSetMethodName: function () {

    return _.camelCase( this.spec.path.replace( /environments\.(\w+)/, 'set.$1.environment' ) );

  },

  isIncluded: function ( options ) {

    var environments = _.castArray( _.get( options, 'environment', [] ) );

    var environment = this.spec.environment;

    return _.includes( environments, environment );

  },

} );


module.exports = Environment;
