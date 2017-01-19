var Config = require( '../../config' );

var Property = require( '../../types/property' );

var path = require( 'path' );


Config.add( [

  new Property( {

    path: 'entry',

    add: 'merge',

    defaultValue: { application: [ path.resolve( './sources/index' ) ] },

  } ),

] );
