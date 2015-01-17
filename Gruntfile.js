module.exports = function(grunt) {

  // 任务配置
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    compass: {                  // Task
        dist: {                   // Target
          options: {              // Target options
            sassDir: 'sass/',
            cssDir: 'sass/css/',
            environment: 'development' //development or production
          }
        }
        // ,
        // dev: {                    // Another target
        //   options: {
        //     sassDir: 'sass',
        //     cssDir: 'html/style/'
        //   }
        // }
    },
    cssmin: {
         combine: {
            options: {
               report: 'gzip'
            }, 
            files: {
                'html/style/app.css': ['sass/css/*.css']
            }
         } 
    },
    watch: {
      scripts: {
        files: ['sass/*.scss','html/style/*.css'],
        tasks: ['compass','cssmin']
      }
    }
  });

  // 任务加载

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // 自定义任务
  grunt.registerTask('all-dev', ['compass','cssmin']);

};