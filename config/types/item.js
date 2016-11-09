var _ = require( 'lodash' );


var Item = function ( spec ) {

  this.spec = _.clone( spec );

};


Item.prototype = _.create( Object.prototype, {

  hasSetMethod: _.constant( false ),

  hasAddMethod: _.constant( false ),

  isIncluded: function ( options ) {

    if ( this.spec.isIncluded ) return this.spec.isIncluded.call( this, options );

    return true;

  },

  transferOptionsToConfig: function ( options, config ) {

    if ( this.spec.transfer ) this.spec.transfer.call( this, options, config );

  },

  changeConfig: function ( config, options ) {

    if ( this.spec.changeConfig ) this.spec.changeConfig.call( this, config, options );

  },

} );


module.exports = Item;
