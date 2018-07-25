const gulp = require('gulp');
const minify_css = require('gulp-clean-css');
const rename = require('gulp-rename');

gulp.task('minify-css', () => {
    gulp.src('content/styles/*.css')
        .pipe(minify_css())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('content/styles'));
});