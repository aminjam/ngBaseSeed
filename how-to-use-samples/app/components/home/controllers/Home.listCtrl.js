(function() {
  'use strict';

  // Controller name is handy for logging
  var ID = 'Home.listCtrl';
  var injections = ['$scope', 'common'];

  // Define the controller on the module.
  // Inject the dependencies.
  // Point to the controller definition function.

  function instance($scope,common) {
    var log = common.log,
    dogs = ['Bernese', 'Husky', 'Goldendoodle'];

    function activate() {

      //Add Functions for the set of promises
      var promises = [];
      common.activate(promises, ID)
        .then(function() {
          log.success('Activated ' + ID);
        });
    }
    activate();

    //#region Exposed Methods

    //#endregion

    //#region Internal Methods

    //#endregion

    $scope.dogs = dogs;
  }
  injections.push(instance);
  angular.module('app').controller(ID, injections);
})();
