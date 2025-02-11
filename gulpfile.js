const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const maps = require('gulp-sourcemaps')
const imagemin = require('gulp-imagemin')


function compSass(){
    return gulp.src('./src/styles/*main.scss')
    .pipe(maps.init())
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(maps.write('./maps'))
    .pipe(gulp.dest('./dist/styles'))
}

function images(){
    return gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'))
}

exports.default = gulp.parallel(compSass, images)
exports.watch = function(){
    gulp.watch ('./src/styles/*.scss', gulp.parallel(compSass))
}

