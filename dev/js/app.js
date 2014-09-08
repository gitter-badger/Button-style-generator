angular.module('app', ['control']);

var control = angular.module('control', ["ngTouch", "ngRoute"]);

control.controller('generatorOptions', function ($http, $scope, $filter, $routeParams) {

    $http.get('buttons.json')
        .then(function(res){
            $scope.buttonStyles = res.data;
    });

    if($routeParams.buttonId == undefined) {
        $scope.buttonId = 1;
    } else {
        $scope.buttonId = $routeParams.buttonId;
    }

});

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

//http://jsfiddle.net/MqM76/217/