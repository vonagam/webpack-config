var Config = require( '../config' );

var _ = require( 'lodash' );


Config.add( [

  {

    path: 'plugins',

    add: 'merge',

    virtual: 'parent',

    changeConfig: function ( config ) {

      var plugins = _.flatten( _.values( _.get( config, 'plugins', {} ) ) );

      _.set( config, 'plugins', plugins );

    },

  },

  {

    path: 'plugins.other',

    add: 'concat',

  },

] );
