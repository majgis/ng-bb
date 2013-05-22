'use strict';

angular.module('ngBbApp')
    .filter('checkmark', [
        function () {
            return function (input) {
                return input ? '\u2713' : '\u2718';
            };
        }
    ]);
