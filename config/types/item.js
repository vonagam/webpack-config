var _ = require( 'lodash' );


var Item = function ( spec ) {

  this.spec = _.clone( spec );

};


Item.prototype = _.create( Object.prototype, {

  hasSetMethod: _.constant( false ),

  hasAddMethod: _.constant( false ),

  isIncluded: function ( options ) {

    if ( this.spec.isIncluded ) return this.spec.isIncluded( options );

    return true;

  },

  transferOptionsToConfig: function ( options, config ) {

    if ( this.spec.transfer ) this.spec.transfer( options, config );

  },

  changeConfig: function ( config, options ) {

    if ( this.spec.changeConfig ) this.spec.changeConfig( config, options );

  },

} );


module.exports = Item;
