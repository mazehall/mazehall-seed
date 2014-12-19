var gulp = require('gulp');
var usemin = require('gulp-usemin');
var watch = require('gulp-watch');
var minifyCss = require('gulp-minify-css');
var minifyJs = require('gulp-uglify');
var concat = require('gulp-concat');
var less = require('gulp-less');
var rename = require('gulp-rename');
var minifyHTML = require('gulp-minify-html');
var bower = require('gulp-bower');

var paths = {
  distRoot: 'public/dist',
  scripts: 'public/src/js/**/*.*',
  ieScripts: 'public/src/bower_components/json3/lib/json3.min.js',
  less: 'public/src/less/**/*.*',
  css: 'public/src/css/**/*.*',
  images: 'public/src/img/**/*.*',
  templates: 'public/src/templates/**/*.html',
  index: 'public/src/index.html',
  bower_fonts: 'public/src/bower_components/**/*.{ttf,woff,eof,svg}',
  fonts: 'public/src/fonts/**/*.{ttf,woff,eof,svg}'
};

/**
 * Handle index.html
 */
gulp.task('usemin', function() {
  return gulp.src(paths.index)
    .pipe(usemin({
      appJs: [minifyJs(), 'concat'],
      libJs: [minifyJs(), 'concat'],
      libCss: [minifyCss({keepSpecialComments: 0}), 'concat'],
      customCss: [minifyCss({keepSpecialComments: 0}), 'concat']
    }))
    .pipe(gulp.dest(paths.distRoot + '/'));
});

/**
 * Handle assets
 */
gulp.task('build-assets', ['copy-bower_fonts']);

gulp.task('copy-bower_fonts', function() {
  return gulp.src(paths.bower_fonts)
    .pipe(rename({
      dirname: '/fonts'
    }))
    .pipe(gulp.dest(paths.distRoot + '/lib'));
});

/**
 * Handle custom files
 */
gulp.task('build-custom', ['custom-images', 'custom-less', 'custom-templates', 'custom-fonts']);

gulp.task('custom-images', function() {
  return gulp.src(paths.images)
    .pipe(gulp.dest(paths.distRoot + '/img'));
});

gulp.task('custom-fonts', function() {
  return gulp.src(paths.fonts)
    .pipe(gulp.dest(paths.distRoot + '/fonts'));
});

gulp.task('custom-less', function() {
  return gulp.src(paths.less)
    .pipe(less())
    .pipe(gulp.dest(paths.distRoot + '/css'));
});

gulp.task('custom-templates', function() {
  return gulp.src(paths.templates)
    .pipe(minifyHTML())
    .pipe(gulp.dest(paths.distRoot + '/templates'));
});

/**
 * Watch custom files
 */
gulp.task('watch', function() {
  gulp.watch([paths.images], ['custom-images']);
  gulp.watch([paths.fonts], ['custom-fonts']);
  gulp.watch([paths.less], ['custom-less']);
  gulp.watch([paths.templates], ['custom-templates']);
  gulp.watch([paths.index, paths.css, paths.scripts], ['usemin']);
});


/**
 * Build tasks
 */
var runSequence = require('run-sequence');
gulp.task('build', function() {
  runSequence(
    'bower',
    ['usemin', 'build-assets', 'build-custom']
  )
});

gulp.task('bower', function() {
  return bower()
});

gulp.task('default', ['build']);
