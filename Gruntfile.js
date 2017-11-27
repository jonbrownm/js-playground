module.exports = function(grunt){

	// -----------------------------------------
	// Start Grunt configuration
	// -----------------------------------------

	grunt.initConfig({

		// Load package.json file
		pkg: grunt.file.readJSON('package.json'),


		// --------------------------------------
		// Sass Configuration
		// --------------------------------------

		sass: {
			dist: {
				options: {
					style: 'compressed',
                    sourcemap: 'none'
				},
				files: [{
					expand: true,
					cwd: 'src/css',
					src: ['*.scss'],
					dest: 'src/css',
					ext: '.min.css'
				}]
			}
		},


		// --------------------------------------
		// Browserify Configuration
		// --------------------------------------

		browserify: {
			dist: {
				options: {
					transform: [
						['babelify', {'presets': ['es2015']}]
					]
				},
				files: {
					'src/js/app.min.js': ['src/js/app.js']
				}
			}
		},


		// --------------------------------------
		// Connect Configuration
		// --------------------------------------

		watch: {
			grunt: { files: ['Gruntfile.js'], tasks: ['default'] },
			sass: {
				files: 'src/css/components/**/*.scss',
				tasks: ['sass']
			},
			browserify: {
				files: 'src/js/components/**/*.js',
				tasks: ['browserify']
			}
		},


		// --------------------------------------
		// Watch Configuration
		// --------------------------------------

		connect: {
            all: {
                options:{
                    port: 8080,
                    hostname: "0.0.0.0",
                    base: "src",
                    keepalive: false
                }
            }
        }

	});


	// -----------------------------------------
	// Load Grunt tasks
	// -----------------------------------------

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');


	// -----------------------------------------
	// Register Grunt tasks
	// -----------------------------------------

	grunt.registerTask('default',  ['sass','browserify','connect','watch']);

};