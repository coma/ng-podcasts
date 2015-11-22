require('babel-core/register')({
    presets: ['es2015']
});

process.env['NODE_PATH'] = __dirname + '/../src';
require('module').Module._initPaths();
