control.controller('navController', function ($http, $scope) {

//    Get JSON data for navigation
    $http.get('navigation.json')
        .then(function(res){
            $scope.navigation = res.data;
        });

});