var Config = require( '../../config' );

var Property = require( '../../types/property' );

var path = require( 'path' );

var _ = require( 'lodash' );


Config.add( [

  new Property( {

    path: 'resolve',

    virtual: 'parent',

  } ),

  new Property( {

    path: 'resolve.root',

    defaultValue: path.resolve( './sources' ),

  } ),

  new Property( {

    path: 'resolve.alias',

    add: 'merge',

    defaultValue: { '~': path.resolve( './sources' ) },

  } ),

  new Property( {

    path: 'resolve.extensions',

    add: 'concat',

    defaultValue: [ '' ],

    modifyConfig: function ( config ) {

      _.update( config, 'resolve.extensions', function ( extensions ) {

        var loaders = _.get( config, 'module.loaders' );

        _.each( loaders, function ( loader ) {

          if ( ! loader.resolve ) return;

          extensions = _.union( extensions, _.castArray( loader.resolve ) );

        } );

        return extensions;

      } );

    },

  } ),

] );
