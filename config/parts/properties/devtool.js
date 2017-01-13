var Config = require( '../../config' );

var Property = require( '../../types/property' );


Config.add( [

  new Property( {

    path: 'devtool',

    defaultValue: 'source-map',

  } ),

] );
