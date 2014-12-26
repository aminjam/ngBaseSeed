(function() {
  'use strict';

  var ID = 'BaseCtrl';
  var injections = ['$q'];

  // Define the controller on the module.
  // Inject the dependencies.
  // Point to the controller definition function.

  function ctrl($q) {
    /* jshint validthis:true */
    var vm = this;

    vm.fn = fn;

    function fn() {

    }

    function activate() {
      var promises = [];
      return $q.all(promises).then(function() {

      });
    }
    activate();
  }

  injections.push(ctrl);
  angular.module('app').controller(ID, injections);
})();