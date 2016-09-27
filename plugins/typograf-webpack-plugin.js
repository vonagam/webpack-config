var Typograf = require( 'typograf' );


var TypografPlugin = function ( options ) {

  this.typograf = new Typograf( options );

}

TypografPlugin.prototype.apply = function ( compiler ) {

  var typograf = this.typograf;


  compiler.plugin( 'compilation', function ( compilation ) {

    compilation.plugin( 'html-webpack-plugin-after-html-processing', function ( data, callback ) {

      data.html = typograf.execute( data.html );

      callback( null, data );

    } );

  } );

}


module.exports = TypografPlugin;
