'use strict';

angular.module('ngBbApp')
    .filter('checkmarkFilter', [
        function () {
            return function (input) {
                return 'phonecat filter: ' + input;
            };
        }
    ]);
