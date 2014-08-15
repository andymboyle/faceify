(function($){
    HomeView = Backbone.View.extend({
        initialize: function(){
            this.render();
        },
        render: function(){
            // Compile the template using underscore
            var template = _.template( $("#home-template").html(), {} );
            // Load the compiled HTML into the Backbone "el"
            this.$el.html( template );
        },
        events: {
            // Listen for someone clicking the upload button
            "click #uploader": "doUpload"
        },

        doUpload: function(){
            var upload_view = new UploadView({ el: $("#upload-container") });
        }
    });

    UploadView = Backbone.View.extend({
        initialize: function(){
            $('#home-container').hide();
            this.render();
        },
        render: function(){
            // Compile the template using underscore
            var template = _.template( $("#upload-template").html(), {} );
            // Load the compiled HTML into the Backbone "el"
            this.$el.html( template );
            $("#progressbar").progressbar({
              value: false
            });
            setTimeout(function(){
              // load the Match view
              var match_view = new MatchView({ el: $("#match-container") });
            }, 3000);
        }
    });

    MatchView = Backbone.View.extend({
        initialize: function(){
            $("#upload-container").hide();
            this.render();
        },

        render: function(){
            // Compile the template using underscore
            var template = _.template( $("#match-template").html(), {} );
            // Load the compiled HTML into the Backbone "el"
            this.$el.html( template );
            !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
        },

        events: {
            // Listen for someone clicking the refresh button
            "click #refresh": "doRefresh"
        },

        doRefresh: function(){
            location.reload();
        }
    });

    var home_view = new HomeView({ el: $("#home-container") });
})(jQuery);
