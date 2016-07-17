module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine'],

    files: [
      'public/js/lib/angular.min.js',
      'public/js/lib/angular-route.js',
      'public/js/lib/angular-ui-router.js',
      'public/js/lib/angular-mocks.js',
      'public/js/**/*.js',
      'test/**/*.js'
    ],

    exclude: [
    ],

    preprocessors: {
    },

    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Chrome'],

    singleRun: false,

    concurrency: Infinity
  })
}
