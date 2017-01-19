var Config = require( '../../config' );

var Property = require( '../../types/property' );

var _ = require( 'lodash' );


Config.add( [

  new Property( {

    path: 'plugins',

    add: 'merge',

    virtual: 'parent',

    modifyConfig: function ( config ) {

      _.update( config, 'plugins', function ( plugins ) {

        return _.flatten( _.values( plugins || {} ) );

      } );

    },

  } ),

  new Property( {

    path: 'plugins.other',

    add: 'concat',

  } ),

] );
