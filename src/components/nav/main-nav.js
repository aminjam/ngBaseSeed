(function() {
  'use strict';

  var ID = 'mainNav';
  var injections = [];

  function instance() {
    return {
      restrict: 'E',
      templateUrl: '/components/nav/view.html'
    };
  }

  injections.push(instance);
  angular.module('app').directive(ID, injections);

})();