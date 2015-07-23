var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

gulp.task('default', ['hello'], function() {
    console.log('All tasks complete!');
});

gulp.task('hello', function() {
    console.log('Hello again!');
});

gulp.task('sass', function() {
    return gulp.src('./*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('uglify', function() {
    return gulp.src('index.js')
        .pipe(uglify())
        .pipe(gulp.dest('bundle.js'));
});

gulp.task('watch-sass', function() {
    return gulp.watch(['./*.scss', 'index.js'], ['sass', 'uglify']);
})