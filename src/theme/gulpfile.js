/* eslint-disable require-jsdoc */
const {src, dest} = require('gulp')
const scss = require('gulp-sass')
// const autoprefixer = require('gulp-autoprefixer')
// const cssmin = require('gulp-cssmin')

function build() {
    return src('./test2.scss')
        .pipe(scss.sync())
        .pipe(dest('./dest'))
}

exports.build = build

