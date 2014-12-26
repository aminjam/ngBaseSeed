(function() {
  'use strict';

  var ID = 'navSetting';
  var injections = [];

  function provider() {
    /* jshint validthis:true */
    var self = this;
    self.routes = {};

    self.$get = function() {
      var routes = self.routes;
      return {
        routes: routes
      };
    };

    self.addRoute = function(route) {
      self.routes[route.name] = {
        url: route.url,
        middlewares: route.middlewares,
        default: route.default,
        nav: route.nav,
        text: route.text
      };
    };

  }

  injections.push(provider);
  angular.module('app').provider(ID, injections);
})();