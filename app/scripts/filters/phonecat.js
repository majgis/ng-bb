'use strict';

angular.module('ngBbApp')
  .filter('phonecat', [function () {
    return function (input) {
      return 'phonecat filter: ' + input;
    };
  }]);
