'use strict';

angular.module('ngBbApp')
    .controller('PhoneListCtrl', [
        "$scope", "Phone",
        function ($scope, Phone) {
            $scope.phones = Phone.query();
            $scope.orderProp = 'age';
        }
    ]);
