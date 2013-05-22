'use strict';

angular.module('ngBbApp', ['ngResource'])
    .config([
        "$routeProvider",
        function ($routeProvider) {
            $routeProvider
                .when('/phones', {templateUrl: 'views/phone-list.html', controller: "PhoneListCtrl"})
                .when('/phones/:phoneId', {templateUrl: 'views/phone-detail.html', controller: "PhoneDetailCtrl"})
                .otherwise({redirectTo: '/phones'});
        }
    ]);
