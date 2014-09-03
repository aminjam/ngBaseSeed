(function() {
  'use strict';

  // Controller name is handy for logging
  var ID = 'About.columnTwoCtrl';
  var injections = ['$scope', 'common'];

  // Define the controller on the module.
  // Inject the dependencies.
  // Point to the controller definition function.

  function instance($scope,common) {
    var log = common.log,

      scotches = [
          {
              name: 'Macallan 12',
              price: 50
          },
          {
              name: 'Chivas Regal Royal Salute',
              price: 10000
          },
          {
              name: 'Glenfiddich 1937',
              price: 20000
          }
      ];

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
    $scope.scotches = scotches;
    $scope.message = 'Hello';
  }
  injections.push(instance);
  angular.module('app').controller(ID, injections);
})();
