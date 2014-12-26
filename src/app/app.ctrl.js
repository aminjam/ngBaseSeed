(function() {
  'use strict';

  var ID = 'AppCtrl';
  var injections = ['$q'];

  // Define the controller on the module.
  // Inject the dependencies.
  // Point to the controller definition function.

  function ctrl(Q) {
    /* jshint validthis:true */
    var vm = this;

    vm.fn = fn;

    function fn() {

    }

    function activate() {
      var promises = [];
      return Q.all(promises).then(function() {

      });
    }
    activate();
  }

  injections.push(ctrl);
  angular.module('app').controller(ID, injections);
})();