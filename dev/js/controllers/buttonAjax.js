control.controller('generatorOptions', function ($http, $scope, $filter, $routeParams) {

//    Get JSON data
    $http.get('buttons.json')
        .then(function(res){
            $scope.buttonStyles = res.data;
        });


//    $scope.parametres = getJsonfromId(id);
//    var getJsonfromId = function (id) {
//        // тут просто поиск json, который возвращает объект  parametres
//    }


//    On the main page ID should be always 1
    if($routeParams.buttonId == undefined) {
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