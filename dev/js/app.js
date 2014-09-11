angular.module('app', ['control']);

var control = angular.module('control', ["ngTouch", "ngRoute"]);

control.config(function($routeProvider, $locationProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'views/editor/container.html'
        })

        // List of buttons
        .when('/gallery', {
            templateUrl : 'views/gallery/list.html'
        })

        // route for the about page
        .when('/:buttonId', {
            templateUrl : 'views/editor/container.html'
        })

        .otherwise({
            templateUrl : 'views/404.html'
        });

    $locationProvider.html5Mode(true);

});

control.run(function($rootScope, $templateCache) {
    $rootScope.$on('$viewContentLoaded', function() {
        $templateCache.removeAll();
    });
});