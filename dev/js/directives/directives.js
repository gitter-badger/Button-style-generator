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

control.directive('ngEnter', function () {
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