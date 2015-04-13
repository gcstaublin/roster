module.exports = function(grunt) {
  grunt.config('notify', {

        options: {
          title: "Hudl", // defaults to the name in package.json, or will use project directory's name
          success: true, // whether successful grunt executions should be notified automatically
          duration: 3 // the duration of notification in seconds, for `notify-send only
        },

        watch: {
          options: {
            title: 'Task Complete',  // optional
            message: 'It worked out.', //required
          }
        },
  });
  grunt.loadNpmTasks('grunt-notify');
};




