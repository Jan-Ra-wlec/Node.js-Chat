module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		jshint: {
		  files: ['gruntfile.js', 'server.js', 'public/js/client.js', 'public/js/simpleClock.js']
		},
		
		uglify: {
			options: {
				manage:false,
			},
			my_target: {
				files: 	[ 
					{'public/js/client.min.js': ['public/js/client.js'] },
					{'public/js/simpleClock.min.js': ['public/js/simpleClock.js'] }
				]
			}
		},

		cssmin: {
			target:{ 	
				files: [{	
					expand: true,
					cwd:'public/css/',	// dir to look in
					src: [ '*.css', '!*.min.css'],	// exclude already minified css files
					dest: 'public/css/',
					ext: '.min.css'
				}]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	//grunt.registerTask('default', ['jshint','cssmin','uglify']);
	grunt.registerTask('default', ['uglify']);
};
