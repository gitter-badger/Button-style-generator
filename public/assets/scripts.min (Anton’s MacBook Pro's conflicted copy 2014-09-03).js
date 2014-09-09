angular.module('app', ['control']);

var control = angular.module('control', []);

control.controller('generatorOptions', function ($http, $scope) {

    $http.get('buttons.json')
        .then(function(res){
            $scope.buttonStyles = res.data;
    });

});

control.directive('options', function() {
    return {
        templateUrl: 'views/parametres.html'
    };
});
