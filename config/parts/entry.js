var Config = require( '../config' );

var path = require( 'path' );


Config.add( [

  {

    path: 'entry',

    add: 'merge',

    defaultValue: { application: [ path.resolve( './sources/index' ) ] },

  },

] );
