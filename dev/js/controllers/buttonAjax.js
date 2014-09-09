control.controller('generatorOptions', function ($http, $scope, $filter, $routeParams) {

//    Get JSON data
    $http.get('buttons.json')
        .then(function(res){
            $scope.buttonStyles = res.data;
    });

//    Get JSON Data for each of button - if you know what i mean
    $scope.getButtonFromID = function(id) {
        angular.forEach( $scope.buttonStyles, function(value) {
            if(value.id == $scope.buttonId) {
                $scope.eachButton = value.parametres;
            }
        })
    };

//    On the main page ID should be always 1
    if(!$routeParams.buttonId) {
        $scope.buttonId = 1;
    } else {
        $scope.buttonId = $routeParams.buttonId;
    }


//    Save new button ang generating URL for it
    $scope.saveButton = function() {
        $scope.buttonStyles.push({})
    };

//    Update already existed parametres of button
    $scope.updateButton = function() {

    };

//    Remove button from Data
    $scope.removeButton = function() {

    };

});

//http://jsfiddle.net/icoxfog417/nLC3g/