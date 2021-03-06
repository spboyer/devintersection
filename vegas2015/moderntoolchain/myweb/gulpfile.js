/// <binding Clean='clean' />
'use strict';
var gulp = require("gulp"),
  del = require("del"),
  project = require("./project.json"),
  $ = require('gulp-load-plugins')({ lazy: true });

var paths = {
  webroot: "./" + project.webroot + "/"
};

paths.js = paths.webroot + "js/**/*.js";
paths.minJs = paths.webroot + "js/**/*.min.js";
paths.css = paths.webroot + "css/**/*.css";
paths.minCss = paths.webroot + "css/**/*.min.css";
paths.concatJsDest = paths.webroot + "js/site.min.js";
paths.concatCssDest = paths.webroot + "css/site.min.css";
paths.lib = paths.wwwroot + 'lib';

/**
* List the available gulp tasks
*/
gulp.task('help', $.taskListing);
gulp.task('default', ['help']);

gulp.task("clean:js", function(cb) {
  del(paths.concatJsDest, cb);
});

gulp.task("clean:css", function(cb) {
  del(paths.concatCssDest, cb);
});

gulp.task("clean", ["clean:js", "clean:css"]);

gulp.task("min:js", function() {
  gulp.src([paths.js, "!" + paths.minJs], {
      base: "."
    })
    .pipe($.concat(paths.concatJsDest))
    .pipe($.uglify())
    .pipe(gulp.dest("."));
});

gulp.task("min:css", function() {
  gulp.src([paths.css, "!" + paths.minCss])
    .pipe($.concat(paths.concatCssDest))
    .pipe($.cssmin())
    .pipe(gulp.dest("."));
});

gulp.task("min", ["min:js", "min:css"]);

gulp.task('lib', ['lib:clean', 'lib:copy']);

gulp.task('lib:clean', function (cb) {
  del(paths.lib, cb);
});

gulp.task('lib:copy', function() {
    return gulp.src('./bower.json')
        .pipe($.mainBowerFiles())
        .pipe(gulp.dest(paths.lib));
});