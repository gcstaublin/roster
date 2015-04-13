module.exports = function(grunt) {
	grunt.config('autoprefixer', {
		options: {
			// Task-specific options go here.
			browsers: ['last 2 version', 'ie 8', 'ie 9'],
			banner: '/*! "Testing prefix" <%= grunt.template.today("yyyy-mm-dd") %> */\n',
		},

		// prefix the specified file
		single_file: {
			options: {
			  // Target-specific options go here.
			},
			src: 'static/css/unprefix-screen.css',
			dest: 'static/css/screen.css'
		},
		sourcemap: {
			options: {
				map: true
			},
			src: 'static/css/screen.css',
			dest: 'static/css/screen.css.map'
		}
	});
	grunt.loadNpmTasks('grunt-autoprefixer');
};



