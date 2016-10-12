var Config = require( '../config' );

var path = require( 'path' );


Config.add( [

  {

    path: 'devServer',

    virtual: 'parent',

  },

  {

    path: 'devServer.contentBase',

    defaultValue: path.resolve( './public' ),

  },

  {

    path: 'devServer.host',

    defaultValue: '0.0.0.0',

  },

  {

    path: 'devServer.port',

    defaultValue: 8888,

  },

  {

    path: 'devServer.hot',

    defaultValue: false,

  },

  {

    path: 'devServer.noInfo',

    defaultValue: true,

  },

  {

    path: 'devServer.inline',

    defaultValue: true,

  },

  {

    path: 'devServer.colors',

    defaultValue: true,

  },

] );
