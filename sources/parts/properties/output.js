var Config = require( '../../config' );

var Property = require( '../../types/property' );

var path = require( 'path' );


Config.add( [

  new Property( {

    path: 'output',

    virtual: 'parent',

  } ),

  new Property( {

    path: 'output.filename',

    defaultValue: '[name].js',

  } ),

  new Property( {

    path: 'output.path',

    defaultValue: path.resolve( './build' ),

  } ),

  new Property( {

    path: 'output.publicPath',

    defaultValue: '',

  } ),

  new Property( {

    path: 'output.library',

    defaultValue: '[name]',

  } ),

  new Property( {

    path: 'output.libraryTarget',

    defaultValue: 'umd',

  } ),

  new Property( {

    path: 'output.umdNamedDefine',

    defaultValue: true,

  } ),

  new Property( {

    path: 'output.sourcePrefix',

    defaultValue: '',

  } ),

] );
