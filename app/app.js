'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('cadprac', ['ui.router']);
myApp.config(function($stateProvider) {

    var states = [
        {
            name: 'Spots',
            url: '/spots',
            templateUrl: 'views/spotsview/spots-template.html'
        },
        {
            name: 'Orders',
            url: '/orders',
            templateUrl: '/views/ordersview/orders-template.html'
        },

        {
            name: 'Destinations',
            url: '/destinations',
            templateUrl: '/views/destinationsview/destinations-template.html'
        },

        {
            name: 'Settings',
            url: '/settings',
            templateUrl: '/views/settingsview/settings-template.html'
        },

        {
            name: 'Support',
            url: '/support',
            templateUrl: '/views/supportview/support-template.html'
        },

        {
            name: 'Admin',
            url: '/admin',
            templateUrl: '/views/adminview/admin-template.html'
        },

        {
            name: 'CTSHome',
            url: '/ctshome',
            templateUrl: '/views/homeview/home-template.html'
        }
    ]

    states.forEach(function(state) {
        $stateProvider.state(state);
    });
});
