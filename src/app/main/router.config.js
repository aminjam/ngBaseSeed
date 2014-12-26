(function() {
  'use strict';

  var injections = ['$stateProvider', '$urlRouterProvider', 'navSettingProvider'];

  function configure($stateProvider, $urlRouterProvider, navSettingProvider) {
    var routes = [{
      name: 'main',
      url: '/',
      middlewares: ['!auth'],
      default: true,
      templateUrl: 'app/main/view.html',
      controller: 'MainCtrl',
      controllerAs: 'vm'
    }];

    routes.forEach(function(route) {
      navSettingProvider.addRoute(route);
      $stateProvider.state(route.name, {
        url: route.url,
        templateUrl: route.templateUrl,
        controller: route.controller
      });
    });
    $urlRouterProvider.otherwise('/');
  }

  injections.push(configure);
  angular.module('app').config(injections);
})();