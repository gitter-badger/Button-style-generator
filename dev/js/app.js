angular.module('app', ['control']);

var control = angular.module('control', ["ngTouch", "ngRoute"]);

control.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'views/container.html'
        })

        // route for the about page
        .when('/:buttonId', {
            templateUrl : 'views/container.html'
        })

        .otherwise({
            templateUrl : 'views/404.html'
        });
});