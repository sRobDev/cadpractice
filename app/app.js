'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('cadprac', ['ui.router', 'ui.grid']);
myApp.config(function($stateProvider) {

    var spotState = {
        name: 'Spots',
        url: '/spots',
        templateUrl: 'views/spotsview/spots-template.html',
        controller: 'spotsController',
        data: {pageTitle: 'Spots'}
    };

    var orderState = {
        name: 'Orders',
        url: '/orders',
        templateUrl: 'views/ordersview/orders-template.html',
        data: {pageTitle: 'Orders'}
    };

    var destinationState = {
        name: 'Destinations',
        url: '/destinations',
        templateUrl: 'views/destinationsview/destionations-template.html',
        data: {pageTitle: 'Destinations'}
    };

    var settingsState = {
        name: 'Settings',
        url: '/settings',
        template: '<h3>This is where the settings live!</h3>',
        data: {pageTitle: 'Settings'}
    };

    var supportState = {
        name: 'Support',
        url: '/support',
        template: '<h3>This is where the support lives!</h3>',
        data: {pageTitle: 'Support'}
    };

    var adminState = {
        name: 'Admin',
        url: '/admin',
        template: '<h3>This is where the admin panel lives!</h3>',
        data: {pageTitle: 'Admin'}
    };

    var homeState = {
        name: 'CTSHome',
        url: '/ctshome',
        template: '<h3>This is where the CTS home page lives!</h3>',
        data: {pageTitle: 'CTS Home'}
    };

    $stateProvider.state(spotState);
    $stateProvider.state(orderState);
    $stateProvider.state(destinationState);
    $stateProvider.state(settingsState);
    $stateProvider.state(supportState);
    $stateProvider.state(adminState);
    $stateProvider.state(homeState);

});

myApp.run([ '$rootScope', '$state', '$stateParams',
    function ($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }]);

myApp.controller('spotsController', ['$scope', function($scope){
    $scope.spotsData = [
        {
            "Spot #": '6176',
            "Length": "30s",
            "Sender": "NBCUniversal"
        },
        {
            "Spot #": '2368',
            "Length": "60s",
            "Sender": "SONY"
        },
        {
            "Spot #": '6510',
            "Length": "45s",
            "Sender": "LG"
        },
        {
            "Spot #": '9439',
            "Length": "30s",
            "Sender": "XFINITY"
        },
        {
            "Spot #": '1337',
            "Length": "120s",
            "Sender": "SCHMUCKS"
        }
    ]
}]);

myApp.controller('ordersController', ['$scope', function($scope){
    $scope.ordersData = [
        {
            "Order #": '6176',
            "# of Spots": "3",
            "Receiver": "NBCUniversal"
        },
        {
            "Order #": '2368',
            "# of Spots": "1",
            "Receiver": "SONY"
        },
        {
            "Order #": '6510',
            "# of Spots": "3",
            "Receiver": "LG"
        },
        {
            "Order #": '9439',
            "# of Spots": "3",
            "Receiver": "XFINITY"
        },
        {
            "Order #": '6626',
            "# of Spots": "7",
            "Receiver": "SCHMUCKS"
        }
    ]
}]);

myApp.controller('destinationsController', ['$scope', function($scope){
    $scope.destinationsData = [
        {
            "iDont": 'So it\'s',
            "KnowWhat": "3",
            "DataToPut": "NBCUniversal"
        },
        {
            "iDont": 'The',
            "KnowWhat": "1",
            "DataToPut": "SONY"
        },
        {
            "iDont": 'Same',
            "KnowWhat": "3",
            "DataToPut": "LG"
        },
        {
            "iDont": 'As',
            "KnowWhat": "3",
            "DataToPut": "XFINITY"
        },
        {
            "iDont": 'Orders',
            "KnowWhat": "7",
            "DataToPut": "SCHMUCKS"
        }
    ]
}]);
