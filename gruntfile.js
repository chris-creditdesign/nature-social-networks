// Generated on 2014-07-24 using generator-polopoly-widget 0.0.0
module.exports = function(grunt){

	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

		cssc: {
		    build: {
		        options: {
		            consolidateViaDeclarations: true,
		            consolidateViaSelectors:    true,
		            consolidateMediaQueries:    true
		        },
		        files: {
		            'assets/css/index.css': 'assets/css/index.css'
		        }
		    }
		},

		cssmin: {
		    build: {
		        src: 'assets/css/index.css',
		        dest: 'assets/css/index.css'
		    }
		},

		sass: {
		    build: {
				options: {                       // Target options
					style: 'expanded'
				},
		        files: {
		            'assets/css/index.css': 'assets/sass/index.scss'
		        }
		    }
		},

		jshint: {
            files: {
                src : 'assets/js/*.js'
			},
		},

		uglify: {
			build: {
				files: {
					'assets/js/index.min.js': [	
												'assets/js/buildCheckboxes.js',	
												'assets/js/fadeOutArcs.js',	
												'assets/js/buildSVG.js',
												'assets/js/buildTicks.js',
												'assets/js/buildList.js',
												'assets/js/buildLabels.js',
												'assets/js/buildLines.js',
												'assets/js/buildScales.js',
												'assets/js/buildGraphic.js',
												'assets/js/buildDataSet.js',
												'assets/js/buildComments.js',
												'assets/js/updateComment.js',
												'assets/js/index.js']
				}
			}
		},

		concat: {
			buildIndex: {
				src: [	
						'assets/polopoly-header.html',
						'assets/concat/style-open.txt',
						'assets/css/index.css',
						'assets/concat/style-close.txt',
						'assets/widget.html',
						'assets/concat/script-open.txt',
						'assets/js/buildCheckboxes.js',
						'assets/js/fadeOutArcs.js',
						'assets/js/buildSVG.js',
						'assets/js/buildTicks.js',
						'assets/js/buildList.js',
						'assets/js/buildLabels.js',
						'assets/js/buildLines.js',
						'assets/js/buildScales.js',
						'assets/js/buildGraphic.js',
						'assets/js/buildDataSet.js',
						'assets/js/buildComments.js',
						'assets/js/updateComment.js',
						'assets/js/index.js',
						'assets/concat/script-close.txt',
						'assets/polopoly-footer.html'
						],
				dest: 'build/index.html'
			},
			distIndex: {
				src: [	
						'assets/concat/style-open.txt',
						'assets/css/index.css',
						'assets/concat/style-close.txt',
						'assets/widget.html',
						'assets/concat/script-open.txt',
						// 'assets/js/index.min.js',
						'assets/js/buildCheckboxes.js',
						'assets/js/buildSVG.js',
						'assets/js/buildTicks.js',
						'assets/js/buildList.js',
						'assets/js/buildLabels.js',
						'assets/js/buildLines.js',
						'assets/js/buildScales.js',
						'assets/js/buildGraphic.js',
						'assets/js/buildDataSet.js',
						'assets/js/buildComments.js',
						'assets/js/updateComment.js',
						'assets/js/index.js',
						'assets/concat/script-close.txt',
						],
				dest: 'dist/index.html'
			}
		},

		browser_sync: {

            files: {
                src : 'build/index.html'
            },
            options: {
				watchTask: true,
		        server: {
		            baseDir: "/build/"
		        }
            }

		},

		watch: {
		    css: {
		        files: ['assets/sass/**/*.scss'],
		        tasks: ['buildcss','concat']
		    },
			// uglify: {
			// 	files: ['assets/js/*.js'],
			// 	tasks: ['uglify','concat']
			// },
			concat: {
				files: ['assets/*','assets/js/*.js'],
				tasks: ['concat']
			}
		}

    });

    grunt.registerTask('default', ['watch']);
    // use build css for the final dist css
    grunt.registerTask('buildcss',  ['sass']);

};