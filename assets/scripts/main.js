(function() {

    var app = {

        init: function () {
            this.listen();
            //this.updateResult();
        },

        listen: function () {
            $('#get').on('click', this.changeBorderRadius);

            $('#border-radius').on('change', this.changeBorderRadius);
        },

        //Changing border-radius
        changeBorderRadius: function() {
            console.log("sd");
        }

    }

    app.init();

}());