$(window).ready(function(){
  var app = {

        init: function () {
            this.listen();
            //this.updateCSSResult();
        },

        listen: function () {
            $('#border-radius').on('change', $.proxy(this.changeBorderRadius, this));
            $('#border-size').on('change', $.proxy(this.changeBorderSize, this));
            $('#button-text').on('keyup', $.proxy(this.changeText, this));
        },

        preview: $('.button-preview'),

        //Changing border-radius
        changeBorderRadius: function() {
            var newBorderRadius = $('#border-radius').val();
            this.preview.css({
                'border-radius': newBorderRadius
            });
            //this.updateCSSResult();
        },

        //Changing border-size
      changeBorderSize: function() {
            var newBorderSize = $('#border-size').val();
            this.preview.css({
              'border-size': newBorderSize
            });
            //this.updateCSSResult();
        },

        //Changing text
      changeText: function() {
            this.preview.text($('#button-text').val());
            //this.updateHtmlArea();
        }

      //  //Update result
      //updateCSSResult: function() {
      //      var newText = $('#text').val();
      //      console.log(newText);
      //      //this.updateResult();
      //  }

    }

    app.init();
});
