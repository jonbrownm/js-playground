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
					cwd: 'src/stylesheets',
					src: ['*.scss'],
					dest: 'src/stylesheets',
					ext: '.min.css'
				}]
			}
		},


		// --------------------------------------
		// Connect Configuration
		// --------------------------------------

		watch: {
			grunt: { files: ['Gruntfile.js'], tasks: ['default'] },

			sass: {
				files: 'src/stylesheets/**/*.scss',
				tasks: ['sass']
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
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');


	// -----------------------------------------
	// Register Grunt tasks
	// -----------------------------------------

	grunt.registerTask('default',  ['sass','connect','watch']);

};