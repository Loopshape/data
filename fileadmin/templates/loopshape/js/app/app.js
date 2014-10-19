// module dependencies
require([], function() {
    'use strict';

    // Backbone definitions for App
    var App = Backbone.View.extend({

        ajax : function() {
            // currently no operation
            return;
        },

        render : function() {

            var item = this.page;
            this.setElement(item);

            return;
        },

        events : {
            'click a[rel=ajax]' : 'ajax'
        },

        initialize : function() {
            
            Pace.start();
            this.windowWidth = $(window).width();
            
            $('body').find('a').each(function() {
                var linkBuffer = $(this).prop('href');
                $(this).hasClass('external').attr('target', '_blank');
            });
            
            setTimeout(function() {
                $('#teaser #teaserImage').slideDown('slow');
            }, 1000);
            
            _.bindAll(this, 'ajax');
            
            this.render();
            
        }
    });

    var app = new App();

});
