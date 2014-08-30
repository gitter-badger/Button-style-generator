angular.module('app', ['control']);

var control = angular.module('control', []);

control.controller('GreetingController', function ($scope) {
    $scope.greeting = 'Hola!';
});