var Config = require( '../config' );

var webpack = require( 'webpack' );

var _ = require( 'lodash' );


Config.add( [

  {

    path: 'environment',

    virtual: 'property',

  },

  {

    path: 'environments',

    add: 'merge',

    virtual: 'parent',

  },

] );
