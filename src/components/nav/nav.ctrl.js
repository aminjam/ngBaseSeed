(function() {
  'use strict';

  var ID = 'NavCtrl';
  var injections = ['$scope', '$q', '$rootScope', '$timeout', '$state',
    '$mdSidenav'
  ];

  function instance($scope, Q, $rootScope, $timeout, $state,
    $mdSidenav) {
    /* jshint validthis:true */
    var vm = this;

    vm.menu = function() {
      $mdSidenav('right').toggle();
    };

    function activate() {
      var promises = [];
      return Q.all(promises).then(function() {
        console.info('Activated Nav');
      });
    }
    activate();
  }

  injections.push(instance);
  angular.module('app').controller(ID, injections);
})();