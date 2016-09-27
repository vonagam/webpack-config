var webpack = require( 'webpack' );

var _ = require( 'lodash' );

var path = require( 'path' );


var applyDevelopmentConfig = require( './development' );

var applyProductionConfig = require( './production' );


var standartLoaders = {

  js: { test: /\.js$/, type: 'script', resolve: '.js', loaders: [ 'strict' ] },

  cjsx: { test: /\.cjsx$/, type: 'script', resolve: '.cjsx', loaders: [ 'coffee-react-void' ] },

  css: { test: /\.css$/, type: 'style', loaders: [ 'css', 'postcss' ] },

  styl: { test: /\.styl$/, type: 'style', loaders: [ 'css', 'postcss', 'stylus' ] },

  html: { test: /\.html$/, type: 'page', loaders: [ 'html' ] },

  pug: { test: /\.pug$/, type: 'page', loaders: [ 'pug' ] },

  fonts: { test: /\.(eot|svg|ttf|otf|woff)/, include: /fonts/, type: 'font', loaders: [ 'file?name=fonts/[name].[ext]' ] },

  img: { test: /\.(png|jpg|svg)$/, exclude: /fonts/, type: 'image', loaders: [ 'url?limit=3000&name=images/[name]-[hash].[ext]', 'image-webpack' ] },

};


var createConfig = function ( options ) {

  var config = {};

  var loaders = {};


  _.each( options.module.loaders, function ( loader, key ) {

    loaders[ key ] = _.assign( {}, standartLoaders[ key ], loader );

  } );


  config.entry = options.entry;


  config.output = {};


  config.plugins = [];

  if ( options.plugins.html ) {

    var HtmlPlugin = require( 'html-webpack-plugin' );

    _.each( options.plugins.html, function ( html ) {

      config.plugins.push( new HtmlPlugin( html ) );

    } );

    if ( options.plugins.typograf ) {

      var TypografPlugin = require( '../plugins/typograf-webpack-plugin' );

      config.plugins.push( new TypografPlugin( options.plugins.typograf ) );

    }

  }

  if ( options.plugins.sprite ) {

    var SpritesmithPlugin = require( 'webpack-spritesmith' );

    config.plugins.push( new SpritesmithPlugin( options.plugins.sprite ) );

  }


  config.resolve = {};

  config.resolve.root = options.resolve.root;

  config.resolve.extensions = [ '' ];

  _.each( loaders, function ( loader ) {

    if ( loader.resolve ) {

      config.resolve.extensions.push( loader.resolve );

    }

  } );


  config.resolveLoader = {};

  config.resolveLoader.alias = {};

  config.resolveLoader.alias.neighbor = path.join( __dirname, '../loaders/neighbor' );


  config.module = {};

  config.module.loaders = _.values( loaders );

  if ( _.some( loaders, function ( loader ) { return _.includes( loader.loaders, 'postcss' ); } ) ) {

    var autoprefixer = require( 'autoprefixer' );

    config.postcss = function () { return [ autoprefixer ]; };

  }

  if ( options.module.styling ) {

    _.each( loaders, function ( loader ) {

      if ( loader.type == 'script' ) loader.loaders.push( 'neighbor?' + options.module.styling );

    } );

  }


  if ( options.environment == 'development' ) {

    applyDevelopmentConfig( config, loaders, options );

  }

  if ( options.environment == 'production' ) {

    applyProductionConfig( config, loaders, options );

  }


  return config;

};


module.exports = createConfig;
