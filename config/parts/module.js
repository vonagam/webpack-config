var Config = require( '../config' );

var path = require( 'path' );

var _ = require( 'lodash' );


Config.add( [

  {

    path: 'module',

    virtual: 'parent',

  },

  {

    path: 'module.loaders',

    add: 'merge',

    virtual: 'parent',

    changeConfig: function ( config ) {

      var loaders = _.flatten( _.values( _.get( config, 'module.loaders', {} ) ) );

      _.set( config, 'module.loaders', loaders );


      var extensions = _.get( config, 'resolve.extensions', [ '' ] );

      _.each( _.get( config, 'module.loaders' ), function ( loader ) {

        if ( loader.resolve ) extensions.push( loader.resolve );

      } );

      _.set( config, 'resolve.extensions', extensions );


      var hasPostcss = _.some( _.get( config, 'module.loaders' ), function ( loader ) {

        return _.includes( loader.loaders, 'postcss' );

      } );

      if ( hasPostcss ) {

        var autoprefixer = require( 'autoprefixer' );

        _.set( config, 'postcss', function () { return [ autoprefixer ]; } );

      }

    },

  },

  {

    path: 'module.loaders.other',

    add: 'concat',

  },

  {

    path: 'module.styling',

    trueValue: 'name=style.styl',

    virtual: 'property',

    changeConfig: function ( config, options ) {

      var query = _.get( options, 'module.styling' );

      var neighbor = path.join( __dirname, '../../loaders/neighbor' );

      _.each( _.get( config, 'module.loaders' ), function ( loader ) {

        if ( loader.type != 'script' ) return;

        loader.loaders.push( neighbor + '?' + query );

      } );

    },

  },

] );
