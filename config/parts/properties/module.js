var Config = require( '../../config' );

var Property = require( '../../types/property' );

var path = require( 'path' );

var _ = require( 'lodash' );


Config.add( [

  new Property( {

    path: 'module',

    virtual: 'parent',

  } ),

  new Property( {

    path: 'module.loaders',

    add: 'merge',

    virtual: 'parent',

    modifyConfig: function ( config ) {

      _.update( config, 'module.loaders', function ( loaders ) {

        return _.flatten( _.values( loaders || {} ) );

      } );

    },

  } ),

  new Property( {

    path: 'module.loaders.other',

    add: 'concat',

  } ),

] );
