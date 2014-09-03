(function() {
  'use strict';

  // name is handy for logging
  var injections = ['$stateProvider', '$urlRouterProvider'];

  // Define the factory on the module.
  // Inject the dependencies.

  function instance($stateProvider,$urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
      // HOME STATES AND NESTED VIEWS ========================================
      .state('home', {
          url: '/home',
          templateUrl: 'components/home/partials/home.html'
      })
      // nested list with custom controller
      .state('home.list', {
            url: '/list',
            templateUrl: 'components/home/partials/home.list.html',
            controller: 'Home.listCtrl'
        })

      // nested list with just some random string data
        .state('home.paragraph', {
            url: '/paragraph',
            template: 'I could sure use a drink right now.'
        })

        .state('about', {
          url: '/about',
          views: {

              // the main template will be placed here (relatively named)
              '': { templateUrl: 'components/about/partials/about.html' },

              // the child views will be defined here (absolutely named)
              'columnOne@about': { template: 'Look I am a column!' },

              // for column two, we'll define a separate controller
              'columnTwo@about': {
                  templateUrl: 'components/about/partials/table-data.html',
                  controller: 'About.columnTwoCtrl'
              }
          }

      });
    }

  injections.push(instance);
  angular.module('app').config(injections);
})();
