
var gulp = require( 'gulp' ),
    less = require( 'gulp-less' );

gulp.task( 'less', function () {
  return gulp
    .src( 'sample.less' )
    .pipe( less({
      strictImports: true,
    }))
    .pipe( gulp.dest( './' ) );
});

gulp.task( 'watch', function() {
  gulp.watch( 'sample.less', [ 'less' ] );
});

gulp.task( 'default', [ 'watch' ] );

