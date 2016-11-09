var Config = require( './config' );


require( './parts/environment' );

require( './parts/module' );

require( './parts/plugins' );


require( './parts/debug' );

require( './parts/devServer' );

require( './parts/devtool' );

require( './parts/entry' );

require( './parts/externals' );

require( './parts/output' );

require( './parts/resolve' );

require( './parts/target' );


require( './parts/environments/development' );

require( './parts/environments/production' );


require( './parts/loaders/cjsx' );

require( './parts/loaders/css' );

require( './parts/loaders/font' );

require( './parts/loaders/html' );

require( './parts/loaders/img' );

require( './parts/loaders/js' );

require( './parts/loaders/pug' );

require( './parts/loaders/styl' );

require( './parts/loaders/styling' );


require( './parts/plugins/assets' );

require( './parts/plugins/define' );

require( './parts/plugins/hot' );

require( './parts/plugins/html' );

require( './parts/plugins/provide' );

require( './parts/plugins/provideLodash' );

require( './parts/plugins/sprite' );

require( './parts/plugins/extractStyles' );

require( './parts/plugins/typograf' );

require( './parts/plugins/uglify' );


module.exports = Config;
