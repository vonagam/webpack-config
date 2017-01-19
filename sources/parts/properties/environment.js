var Config = require( '../../config' );

var Property = require( '../../types/property' );


Config.add( [

  new Property( {

    path: 'environment',

    virtual: 'option',

  } ),

  new Property( {

    path: 'environments',

    add: 'merge',

    virtual: 'parent',

  } ),

] );
