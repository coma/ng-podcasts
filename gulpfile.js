var gulp = require('gulp'),
    del  = require('del'),
    npm  = require('./package.json'),
    dir  = {
        dist        : __dirname + '/dist',
        index       : __dirname + '/dist/index.html',
        src         : __dirname + '/src',
        app         : __dirname + '/src/app',
        style       : __dirname + '/src/style/app.styl',
        styles      : __dirname + '/src/style/**',
        assets      : __dirname + '/src/assets/**',
        logs        : __dirname + '/logs',
        server      : __dirname + '/run',
        dependencies: __dirname + '/node_modules',
        localhost   : 'http://localhost:' + npm.config.port
    };

gulp.task('clean', function (done) {

    del('dist/!(.gitkeep)', done);
});

gulp.task('assets', function () {

    return gulp
        .src(dir.assets)
        .pipe(gulp.dest(dir.dist));
});

gulp.task('deploy', function (done) {

    require('./gulp/deploy')(dir, done);
});

gulp.task('default', function (done) {

    require('./gulp/default')(dir, done);
});
