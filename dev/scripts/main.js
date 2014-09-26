$(window).ready(function(){
  var app = {

        init: function () {
            this.listen();
            this.updateCSSResult();
            this.updateHtmlResult();
        },

        listen: function () {
            $('#border-radius').on('change', $.proxy(this.changeBorderRadius, this));
            $('#border-width').on('change', $.proxy(this.changeBorderWidth, this));
            $('#button-text').on('keyup', $.proxy(this.changeText, this));
            $('#send-form').on('click', app.sendForm);
        },

        preview: $('.button-preview'),

        //Changing border-radius
        changeBorderRadius: function() {
            var newBorderRadius = $('#border-radius').val();
            this.preview.css(
                'border-radius', newBorderRadius + 'px'
            );
            this.updateCSSResult();
        },

        //Changing border-size
      changeBorderWidth: function() {
            var newBorderWidth = $('#border-width').val();
          this.preview.css(
              'border-width', newBorderWidth + 'px'
          );
          console.log(newBorderWidth);
            this.updateCSSResult();
        },

        //Changing text
      changeText: function() {
            this.preview.text($('#button-text').val());
            this.updateHtmlResult();
        },

        //Update result
      updateCSSResult: function() {
          var borderRadius = this.preview.css('border-top-left-radius'),
              borderWidth = this.preview.css('border-width'),
              cssResult = $('#cssResult');

          cssResult.text(
              '.button-preview {\n' +
              'border-width: '          + borderRadius + ';\n' +
              'border-size: '           + borderWidth + ';\n' +
              '};'
          );

        },

      //Динамическое изменение html textarea
      updateHtmlResult: function(){
          var htmlCodeResultArea = $('#htmlResult');

          htmlCodeResultArea.text(
              '<button class="button-preview">'+ $('#button-text').val() +'</button>'
          );
      },

      sendForm: function(){

        //Send form start
          var htmlResult = $('#htmlResult').html()+' ';
          var cssResult = $('#cssResult');
          var senderEmail = $('#sender-email');

          var data = 'htmlResult=' + encodeURIComponent(htmlResult) + '&cssResult=' + encodeURIComponent(cssResult.html()) + '&senderEmail=' + senderEmail.val();

          $.ajax({

              url: "send_email.php",
              type: "POST",
              data: data,
              cache: false,

              success: function(html) {
                  if (html == 1) {
                      alert('Messages sent.');
                  } else {
                      alert(html);
                  }
              }
          });

          return false;
        //Send form finish
      }

    }

    app.init();
});
