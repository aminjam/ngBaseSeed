(function() {
  'use strict';
  var ID = 'appBase',
    injections = [];

  function instance() {
    return {
      restrict: 'E',
      templateUrl: ''
    };
  }

  injections.push(instance);
  angular.module('app').directive(ID, injections);
})();