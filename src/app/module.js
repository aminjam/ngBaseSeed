(function() {
  'use strict';

  var app = angular.module('app', [

    'ngAnimate',
    'ui.router',
    'ngMaterial',

    'app.main',
  ]);

  app.value('_', ['$window', function($window) {
    //Mixin underscore.string into lodash
    return $window._;
  }]);

})();