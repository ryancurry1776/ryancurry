module.exports = function (grunt) {
    "use strict";

    grunt.initConfig({
        banner:
            '/*!\n' +
            ' * Lightbox for Bootstrap by @ashleydw\n' +
            ' * https://github.com/ashleydw/lightbox\n' +
            ' *\n' +
            ' * License: https://github.com/ashleydw/lightbox/blob/master/LICENSE\n' +
            ' */',

	    less: {
		    dist: {
			    files: {
				    'js/ekko-lightbox.css': 'ekko-lightbox.less'
			    }
		    }
	    },
	    babel: {
		    options: {
			    sourceMap: true,
			    modules: 'ignore'
		    },
		    dist: {
			    files: {
				    'js/ekko-lightbox.js': 'ekko-lightbox.js',
			    }
		    }
	    },
        uglify: {
	        options: {
		        sourceMap: true,
	        },
            js: {
                files: {
                    'js/ekko-lightbox.min.js': 'js/ekko-lightbox.js'
                }
            }
        },
	    postcss: {
		    options: {
			    map: true,
			    processors: [
				    require('autoprefixer')({
					    browsers: ['last 2 versions']
				    }),
					require('cssnano')()
			    ]
		    },
		    dist: {
			    src: 'css/*.css'
		    }
	    },
	    stamp: {
		    options: {
			    banner: '<%= banner %>\n+function ($) {\n',
			    footer: '\n}(jQuery);'
		    },
		    lightbox: {
			    files: {
				    src: ['js/ekko-lightbox.js', 'js/ekko-lightbox.min.js']
			    }
		    }
	    },
        watch: {
            babel: {
                files: ['ekko-lightbox.js', 'ekko-lightbox.less'],
                tasks: ['dev']
            }
        }
    });

	grunt.loadNpmTasks('grunt-stamp');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-postcss');

    grunt.registerTask('dev', ['babel', 'less']);
    grunt.registerTask('dist', ['babel', 'less', 'stamp', 'postcss:dist', 'uglify']);
    grunt.registerTask('default', ['dist']);
};