module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

  uglify: {
        options: {
            mangle: false
        },
        my_target: {
          files: {
            'public/build/output.min.js':
            [
                'public/js/**/*.js',
                '!public/js/lib/*.js'
            ]
          }
        }
  },
  nodemon: {
    dev: {
      script: 'app.js'
    }
  }
  });
   grunt.registerTask('default', ['uglify', 'nodemon']);
};