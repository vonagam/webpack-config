var _ = require( 'lodash' );


var Options = function ( options ) {

  this.options = _( options );

};


Options.prototype.get = function ( path, defaultValue, defaultTrueValue ) {

  var value = this.options.get( path, defaultValue );

  if ( value == true && defaultTrueValue != undefined ) value = defaultTrueValue;

  return value;

};


module.exports = Options;
