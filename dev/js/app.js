angular.module('app', ['control']);

var control = angular.module('control', []);

control.controller('generatorOptions', function ($scope) {

    $scope.buttonStyle = {
        "width" : "50",
        "background" : "#ffffff",
        "border": "20"
    };

    $scope.updateButtonStyle = function(buttonStyle) {
        $scope.width = buttonStyle.width;
        $scope.background = buttonStyle.background;
        $scope.border = buttonStyle.border;
    };

});

control.controller('generatorResult', function ($scope) {

    $scope.buttonStyle = 'Yo yo yo!';

});

//http://codepen.io/TheSisb/full/ElLhn