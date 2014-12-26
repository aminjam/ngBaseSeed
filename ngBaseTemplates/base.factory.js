(function() {
  'use strict';

  var ID = 'appBase',
    injections = ['$q'];

  function instance(Q) {
    var self = {
      data: [],
      fn: fn
    };

    function fn() {
      var def = Q.defer();
      // this gets persisted
      // self.data.push('somthing')
      return def.promise;
    }
    return self;
  }

  injections.push(instance);
  angular.module('app').factory(ID, injections);
})();