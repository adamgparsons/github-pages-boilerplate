var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
//Requires browserSync plugin
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('app/scss/**/*.scss', ['sass']);
  // Reloads the browser whenever HTML or JS files change
 gulp.watch('app/*.html', browserSync.reload);
 gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})

//Copy index.html from app to docs holder
gulp.task('copy-index-html', function() {
    gulp.src('app/index.html')
    // Perform minification tasks, etc here
    .pipe(gulp.dest('./docs'));
});

gulp.task('copy-styles-css', function() {
    gulp.src('app/css/styles.css')
    // Perform minification tasks, etc here
    .pipe(gulp.dest('./docs/css'));
});
