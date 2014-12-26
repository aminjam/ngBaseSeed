(function() {
  'use strict';
  var ID, injections, instance;

  ID = 'navState';

  injections = ['$window'];

  instance = function($window) {
    var self = {
      middlewares: [],
      set: function(state) {
        var hasIt = $window._.contains(self.middlewares, state);
        if (!hasIt) {
          self.middlewares.push(state);
        }
      },
      unset: function(state) {
        self.middlewares = $window._.without(self.middlewares, state);
      }
    };
    return self;
  };

  injections.push(instance);

  angular.module('app').factory(ID, injections);

})();