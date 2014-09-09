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

control.directive('inputWidth', function () {
    return function (scope, element, attrs) {
        $.fn.textWidth = function(text, font) {
            if (!$.fn.textWidth.fakeEl) $.fn.textWidth.fakeEl =      $('<span>').hide().appendTo(document.body);
            $.fn.textWidth.fakeEl.text(text || this.val() || this.text()).css('font', font || this.css('font'));
            return $.fn.textWidth.fakeEl.width();
        };

        $('#hiddenInput').on('input', function() {
            var padding = 10; //Works as a minimum width
            var valWidth = ($(this).textWidth() + padding) + 'px';
            $('#'+this.id+'-width').html(valWidth);
            $('#hiddenInput').css('width', valWidth);
        }).trigger('input');

        $('#hiddenInput2').on('input', function() {
            var padding = 10; //Works as a minimum width
            var valWidth = ($(this).textWidth() + padding) + 'px';
            $('#'+this.id+'-width').html(valWidth);
            $('#hiddenInput2').css('width', valWidth);
        }).trigger('input');
    };
});