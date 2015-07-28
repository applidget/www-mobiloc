module.exports = function(grunt) {
  
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    concat: {
      dist: {
        src: ['src/react.js', 'src/device-type.js', 'src/estimate.js', ],
        dest: 'src/app.js',
      },
    },
    babel: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'js/www-mobiloc.js': 'src/app.js'
        }
      }
    }
  });
  
  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-babel');
  grunt.registerTask("default", ["concat", "babel"]);
  
};