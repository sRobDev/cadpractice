'use strict';

// Declare app level module which depends on views, and components
angular.module('cadpractice', [
  'ui-router'
]).
config(function($stateProvider) {
    var spotState = {
        name: 'Spots',
        url: 'spots',
        template: '<h3>This is where the spots live!</h3>'
    }

    var orderState = {
        name: 'Orders',
        url: 'orders',
        template: '<h3>This is where the orders live!</h3>'
    }

    var destinationState = {
        name: 'Destinations',
        url: 'destinations',
        template: '<h3>This is where the destinations live!</h3>'
    }

    var settingsState = {
        name: 'Settings',
        url: 'settings',
        template: '<h3>This is where the settings live!</h3>'
    }

    var supportState = {
        name: 'Support',
        url: 'support',
        template: '<h3>This is where the support lives!</h3>'
    }

    var adminState = {
        name: 'Admin',
        url: 'admin',
        template: '<h3>This is where the admin panel lives!</h3>'
    }

    var homeState = {
        name: 'Home',
        url: 'home',
        template: '<h3>This is where the CTS home page lives!</h3>'
    }
});
