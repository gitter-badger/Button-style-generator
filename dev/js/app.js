/*global angular */
(function (ng) {
    'use strict';

    var app = ng.module('ngLoadScript', []);

    app.directive('script', function() {
        return {
            restrict: 'E',
            scope: false,
            link: function(scope, elem, attr) {
                if (attr.type === 'text/javascript-lazy') {
                    var code = elem.text();
                    var f = new Function(code);
                    f();
                }
            }
        };
    });

}(angular));




angular.module('app', ['control']);

var control = angular.module('control', ["ngTouch", "ngRoute", "ngLoadScript"]);

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

control.directive('customAutocomplete', function () {
    return {
        link : function (scope, element, attrs) {
            var $element = angular.element(element),
                availableTutorials = [
                    "width",
                    "padding",
                    "margin",
                    "box-shadow",
                    "text-shadow"
                ];


            $element.autocomplete({
                source: availableTutorials,
                autoFocus:true,
                delay: 0
            });
        }
    };
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