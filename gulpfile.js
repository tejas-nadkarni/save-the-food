var gulp = require('gulp'),
		$ = require('gulp-load-plugins')(),
		saasPaths = ['public/bower_components/foundation-sites/scss', 'public/bower_components/motion-ui/src']

gulp.task('sass', function () {
	return gulp.src('src/scss/app.scss')
    .pipe($.sass({
      includePaths: saasPaths
    })
      .on('error', $.sass.logError))
      .pipe($.autoprefixer({
        browsers: ['last 3 versions']
      }))
    .pipe(gulp.dest('public/css'));
});

gulp.task('default', ['sass'], function() {
  gulp.watch(['src/scss/**/*.scss'], ['sass']);
});