// import a few things from the Gulp package
const { src, dest, watch, series } = require('gulp');

// import the gulp-sass plugin and pass the sass compiler as its parameter
const sass = require('gulp-sass')(require('sass'));

// create a function responsible for compiling sass into css 
function buildStyles() {
    // compile the src file into css file and pipe it into some destination folder 
    return src('*.scss') // repalce index.scss with *.scss to compile multiple scss files except the ones that start with an _ underscore
        .pipe(sass())
        .pipe(dest('css'))
}

// create a function to watch the chages
function watchTask() {
    // pass an array of files to watch and a function to run on file change 
    watch(['*.scss'], buildStyles) // repalce index.scss with *.scss to compile multiple scss files except the ones that start with an _ underscore
}

exports.default = series(buildStyles, watchTask);