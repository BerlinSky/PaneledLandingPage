"use strict";

var gulp = require('gulp');
var sass = require('gulp-sass');
var util = require('gulp-util');

// Postcss definitions:
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

var config = {
	port: 53,
	devBaseUrl: '',
	path: {
		sass: '../src/sass/**/*.scss',
		css: [
			''
		],
		font: [
			''
  	],
  	jslib: [
  		''
  	],
		src: './src',
		dist: './dist',
		target: '../dist/css'
	}
};

gulp.task('sass', function () {
	log('sass task starts');

	var processors = [
		autoprefixer
	 ];

  gulp.src(config.path.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(processors))
		.pipe(gulp.dest(config.path.target));

	log('sass task ends');
});

gulp.task('watch', function() {
	log('watch task starts');

	gulp.watch(config.path.sass, ['sass']);

	log('watch task ends');
});

gulp.task('default', ['sass', 'watch']);

///////////
function log(msg) {
	if (typeof(msg) === 'object') {
		for (var item in msg) {
			if (msg.hasOwnProperty(item)) {
				util.log(util.colors.blue(msg[item]));
			}
		}
	}
	else {
		util.log(util.colors.blue(msg));
	}
}

