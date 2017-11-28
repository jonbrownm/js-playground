module.exports = function(grunt){

	packageName = "<%= pkg.repoSlug %>";

	// -----------------------------------------
	// Start Grunt configuration
	// -----------------------------------------

	grunt.initConfig({

		// Load package.json file
		pkg: grunt.file.readJSON('package.json'),


		// --------------------------------------
		// FTP Configuration
		// --------------------------------------

        ftp_push: {
            your_target: {
                options: {
                    authKey: "grunt-dev",
                    host: "home245620893.1and1-data.host",
                    dest: "/" + packageName,
                    incrementalUpdates: false
                },
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**/*']
                }]
            }
        },


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
				files: 'src/css/**/*.scss',
				tasks: ['sass']
			},
			browserify: {
				files: 'src/js/**/*.js',
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

	grunt.loadNpmTasks('grunt-ftp-push');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');


	// -----------------------------------------
	// Register Grunt tasks
	// -----------------------------------------

	grunt.registerTask('default',  ['sass','browserify','connect','watch']);
	grunt.registerTask('prod',  ['sass','browserify','ftp_push']);

};