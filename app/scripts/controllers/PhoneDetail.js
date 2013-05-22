'use strict';

angular.module('ngBbApp')
    .controller('PhoneDetailCtrl', [
        "$scope", "$routeParams", "Phone",
        function ($scope, $routeParams, Phone) {

            $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function (phone) {
                $scope.mainImageUrl = phone.images[0];
            });

            $scope.setImage = function (imageUrl) {
                $scope.mainImageUrl = imageUrl;
            }

        }
    ]);
