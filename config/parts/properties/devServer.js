var Config = require( '../../config' );

var Property = require( '../../types/property' );

var path = require( 'path' );


Config.add( [

  new Property( {

    path: 'devServer',

    virtual: 'parent',

  } ),

  new Property( {

    path: 'devServer.contentBase',

    defaultValue: path.resolve( './public' ),

  } ),

  new Property( {

    path: 'devServer.host',

    defaultValue: '0.0.0.0',

  } ),

  new Property( {

    path: 'devServer.port',

    defaultValue: 8888,

  } ),

  new Property( {

    path: 'devServer.hot',

    defaultValue: false,

  } ),

  new Property( {

    path: 'devServer.noInfo',

    defaultValue: true,

  } ),

  new Property( {

    path: 'devServer.inline',

    defaultValue: true,

  } ),

  new Property( {

    path: 'devServer.colors',

    defaultValue: true,

  } ),

] );
