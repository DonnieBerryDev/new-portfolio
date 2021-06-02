const {
    src,
    dest,
    watch,
    series,
    gulp
} = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const GulpClient = require('gulp');


// SASS Task

function scssTask() {
    return src('assets/scss/*.scss', {
            sourcemaps: true
        })
        .pipe(sass())
        .pipe(postcss([cssnano()]))
        .pipe(dest('dist', {
            sourcemaps: '.'
        }));
}


function watchTask() {
    watch('assets/scss/*.scss', series(scssTask));
}


// Default Gulp Task
exports.default = series(
    scssTask,
    watchTask
)