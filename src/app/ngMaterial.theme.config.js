(function() {
  'use strict';

  var injections = ['$mdThemingProvider'];

  function configure($mdThemingProvider) {
    $mdThemingProvider.setDefaultTheme('cyan');
  }

  injections.push(configure);
  angular.module('ngMaterial').config(injections);
})();