module.exports = function (grunt) {

  require('jit-grunt')(grunt);
  require('time-grunt')(grunt);

  grunt.initConfig({

    clean: {
      all: ['./build']
    },

    sass: {
      options: {},
      all: {
        files: [
          {
            expand: true,
            cwd: './src/scss',
            src: '*.scss',
            dest: './build/css',
            ext: '.css'
          }
        ]
      }
    }
  });

  grunt.registerTask('default', ['clean', 'sass']);
};
