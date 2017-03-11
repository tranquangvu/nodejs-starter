var gulp = require('gulp');
var plugins = require("gulp-load-plugins")({
  pattern: ['gulp-*', 'gulp.*'],
  replaceString: /\bgulp[\-.]/
});

var paths = {
  fontsSrc: 'public/fonts/',
  viewSrc:  'views/',
  sassSrc:  'public/sass/',
  jsSrc:    'public/js/',

  cssDest:  'public/css/',
  jsDest:   'public/js/'
};

var onError = function (err) {
  plugins.util.beep();
  plugins.util.log(plugins.util.colors.green(err));
};

var nodemonServerInit = function() {
  plugins.livereload.listen();
  plugins.nodemon({
    script: 'app.js',
    ext: 'js'
  }).on('restart', function(){
    gulp.src('app.js')
        .pipe(plugins.livereload())
        .pipe(plugins.notify('Reloading page, please wait...'));
  })
};

gulp.task('default', ['compile', 'watch']);

gulp.task('compile', ['js', 'sass', 'pug'], function (cb) {
  nodemonServerInit();
});

/*
  PUG Tasks
*/
gulp.task('pug', function() {
  return gulp.src(paths.viewSrc + '**/*.pug')
    .pipe(plugins.livereload());
});

/*
  CSS tasks
*/
gulp.task('sass', function () {
  return gulp.src(paths.sassSrc + '**/*.scss')
    .pipe(plugins.sass({
      includePaths: require('node-neat').includePaths,
      style: 'nested',
      onError: function(){
        console.log("Error in scss");
      }
    }))
    .pipe(plugins.plumber({ errorHandler: onError }))
    .pipe(plugins.minifyCss())
    .pipe(gulp.dest(paths.cssDest))
    .pipe(plugins.livereload());
});

/*
  JS Tasks
*/
gulp.task('js', function() {
  return gulp.src(paths.jsSrc + '**/*.js')
    .pipe(plugins.plumber({ errorHandler: onError }))
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('default'))
    .pipe(plugins.livereload());
});

/*
  Watch Tasks
*/
gulp.task('watch', function () {
  gulp.watch(['views/**/*.pug'], ['pug']);
  gulp.watch('public/sass/**/*.scss', ['sass']);
  gulp.watch('public/js/**/*.js', ['js']);
});
