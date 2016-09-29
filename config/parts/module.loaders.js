var _ = require( 'lodash' );


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


module.exports = function ( config, options ) {

  var value = options.get( 'module.loaders', { js: true } );


  config.module.loaders = _.map( value, function ( loader, key ) {

    return _.assign( {}, standartLoaders[ key ], loader );

  } );

};
