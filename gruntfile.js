module.exports = function (grunt) {
  grunt.initConfig({
    cucumberjs: {
      src: 'Features',
      options: {
        steps: "Features"
      }
    }
  });

  grunt.loadNpmTasks('grunt-cucumber');
};