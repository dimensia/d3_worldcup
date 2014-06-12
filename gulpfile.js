
var gulp = require( 'gulp' ),
    less = require( 'gulp-less' );

gulp.task( 'less', function () {
  return gulp
    .src( 'worldcup.less' )
    .pipe( less({
      strictImports: true,
    }))
    .pipe( gulp.dest( './' ) );
});

gulp.task( 'watch', function() {
  gulp.watch( 'worldcup.less', [ 'less' ] );
});

gulp.task( 'default', [ 'watch' ] );

