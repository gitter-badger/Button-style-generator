angular.module('app', ['control']);

var control = angular.module('control', []);

control.controller('generatorOptions', function ($scope) {

    console.log($scope.buttonStyle);

    $scope.buttonStyle = {
        "width" : "900px",
        "background" : "red"
    };

});

control.controller('generatorResult', function ($scope) {
//    $scope.greeting = 'Hola!';

    $scope.buttonStyle = 'Hol3a';

});


//<div ng-style="{ 'width' : width, 'background' : bgColor }"></div>
//And then in your controller:
//
//    $scope.width = '900px';
//$scope.bgColor = 'red';