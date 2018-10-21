'use strict';

var gulp = require('gulp');

gulp.task('copy-bootstrap-css', function() {
    gulp.src(['./node_modules/chosen-js/chosen-sprite*.png','./node_modules/bootstrap/dist/css/bootstrap.min.css*'])
        .pipe(gulp.dest('./css/'));
});

gulp.task('copy-bootstrap-js', function() {
    gulp.src(['./node_modules/bootstrap/dist/js/bootstrap.min.js*'])
        .pipe(gulp.dest('./js/'));
});

gulp.task('copy-jquery', function() {
    gulp.src(['./node_modules/jquery/dist/jquery.min.js'])
        .pipe(gulp.dest('./js/'));
});

gulp.task('copy-chosen-css', function() {
    gulp.src(['./node_modules/chosen-js/chosen-sprite*.png','./node_modules/chosen-js/chosen.min.css'])
        .pipe(gulp.dest('./css/'));
});

gulp.task('copy-chosen-js', function() {
    gulp.src(['./node_modules/chosen-js/chosen.jquery.min.js'])
        .pipe(gulp.dest('./js/'));
});

gulp.task('copy-chosen', [
              'copy-jquery',
              'copy-bootstrap-css', 
              'copy-bootstrap-js', 
              'copy-chosen-css',
              'copy-chosen-js'
          ], function() {  });

gulp.task('default', ['copy-chosen'], function () {  });