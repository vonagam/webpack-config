var Config = require( '../../config' );

var Property = require( '../../types/property' );


Config.add( [

  new Property( {

    path: 'externals',

    add: 'concat',

  } ),

] );
