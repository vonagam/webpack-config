'use strict';

// mistadikay/strict-loader

var loaderUtils = require( 'loader-utils' );

var SourceMap = require( 'source-map' );


var SourceNode = SourceMap.SourceNode;

var SourceMapConsumer = SourceMap.SourceMapConsumer;


module.exports = function ( source, map ) {

  var callback = this.async();

  var query = loaderUtils.parseQuery( this.query );

  var path = loaderUtils.interpolateName( this, query.path, {} );


  this.resolve( this.context, path, function ( error, result ) {

    if ( error ) return callback( null, source, map );


    var prefix = 'require("' + path + '");\n\n';


    if ( ! map ) return callback( null, prefix + source );


    var currentRequest = loaderUtils.getCurrentRequest( this );

    var node = SourceNode.fromStringWithSourceMap( source, new SourceMapConsumer( map ) );


    node.prepend( prefix );


    var result = node.toStringWithSourceMap( { file: currentRequest } );


    callback( null, result.code, result.map.toJSON() );

  }.bind( this ) );

};
