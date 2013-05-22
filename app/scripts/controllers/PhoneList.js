'use strict';

angular.module('ngBbApp')
    .controller('PhoneListCtrl', [
        "$scope",
        function ($scope) {
            $scope.phones = Phone.query();
            $scope.orderProp = 'age';
        }
    ]);
