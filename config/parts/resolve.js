var Config = require( '../config' );

var path = require( 'path' );


Config.add( [

  {

    path: 'resolve',

    virtual: 'parent',

  },

  {

    path: 'resolve.root',

    defaultValue: path.resolve( './sources' ),

  },

  {

    path: 'resolve.alias',

    add: 'merge',

    defaultValue: { '~': path.resolve( './sources' ) },

  },

  {

    path: 'resolve.extensions',

    add: 'concat',

  },

] );
