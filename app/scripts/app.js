'use strict';

angular.module('ngBbApp', [])
    .config([
        "$routeProvider", "PhoneListCtrl", "PhoneDetailCtrl",
        function ($routeProvider, PhoneListCtrl, PhoneDetailCtrl) {
            $routeProvider
                .when('/phones', {templateUrl: 'partials/phone-list.html', controller: PhoneListCtrl})
                .when('/phones/:phoneId', {templateUrl: 'partials/phone-detail.html', controller: PhoneDetailCtrl})
                .otherwise({redirectTo: '/phones'});
        }
    ]);
