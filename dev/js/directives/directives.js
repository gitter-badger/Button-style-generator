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

control.directive('pressEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });

                event.preventDefault();
            }
        });
    };
});


control.directive("contenteditable", function() {
    return {
        restrict: "A",
        require: "ngModel",
        link: function(scope, element, attrs, ngModel) {

            function read() {
                ngModel.$setViewValue(element.html());
            }

            ngModel.$render = function() {
                element.html(ngModel.$viewValue || "");
            };

            element.bind("blur keyup change", function() {
                scope.$apply(read);

                scope.updateButton(
//                    scope.button.id,
                    scope.key,
                    scope.data
                );

//                attrs.$observe('key', function(value) {
//                    console.log(value);
//                    console.log(scope.button.id);
//                    console.log(scope.key);
//                    scope.updateButton();
//                });
            });

        }
    };
});