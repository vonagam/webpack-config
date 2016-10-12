var Config = require( '../config' );

var path = require( 'path' );


Config.add( [

  {

    path: 'output',

    virtual: 'parent',

  },

  {

    path: 'output.filename',

    defaultValue: '[name].js',

  },

  {

    path: 'output.path',

    defaultValue: path.resolve( './build' ),

  },

  {

    path: 'output.publicPath',

    defaultValue: '',

  },

  {

    path: 'output.library',

    defaultValue: '[name]',

  },

  {

    path: 'output.libraryTarget',

    defaultValue: 'umd',

  },

  {

    path: 'output.umdNamedDefine',

    defaultValue: true,

  },

  {

    path: 'output.sourcePrefix',

    defaultValue: '',

  },

] );
