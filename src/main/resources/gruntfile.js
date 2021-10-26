module.exports = function (grunt) {

    grunt.initConfig({
        concat: {
            options: {
                separator: ';\n'
            },
            dist: {
                src: ['client/bower_components/angular/angular.js',
                    'client/bower_components/js-xlsx/dist/xlsx.full.min.js',
                    'client/bower_components/angular-resource/angular-resource.js',
                    'client/bower_components/angular-route/angular-route.js',
                    'client/bower_components/angular-ui-router/release/angular-ui-router.js',
                    'client/bower_components/angular-bootstrap/ui-bootstrap.js',
                    'client/bower_components/angular-ui-grid/ui-grid.js',
                    'client/bower_components/angular-ui-grid/ui-grid.pagination.js',
                    'client/bower_components/angular-ui-grid/ui-grid.auto-resize.js',
                    'client/js/main.js',
                    'client/js/controllers/*.js',
                    'client/js/services/*.js'],
                dest: 'client/app.js'
            },
            css: {
                src: ['client/bower_components/angular-ui-grid/ui-grid.css'],
                dest: 'client/css/app.css'
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default', ['concat']);
};