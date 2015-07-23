var gulp = require('gulp');
var uglify = require('gulp-uglify');
var jsonServer = require('json-server');
var rename = require('gulp-rename');

gulp.task('uglify', function() {
  return gulp.src('index.js')
    .pipe(uglify())
    .pipe(rename('index.min.js'))
    .pipe(gulp.dest('./'))
});

var apiServer = jsonServer.create();
var router = jsonServer.router('data.json');

apiServer.use(jsonServer.defaults);
apiServer.use(router);

gulp.task('serve:api', function (cb) {
  apiServer.listen(3000);
  cb();
});

// Web Server
var serve = require('gulp-serve');

gulp.task('serve:web', serve({
  root: ['.'],
  port: 8000
}));

gulp.task('serve', ['serve:api', 'serve:web']);