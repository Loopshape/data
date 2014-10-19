// module dependencies
require(['foundation'], function(Foundation) {
    'use strict';

    // Backbone definitions for App
    var App = Backbone.View.extend({

        ajax : function() {
            // currently no operation
            return;
        },

        render : function() {

            var item = this.page;

            /* DOCUMENT READY SCRIPT :: START */

            $('#teaser').show().find('#teaserImage').addClass('active').animate({
                'max-height' : '+=' + ($('#teaserImage img').height() + 45) + 'px'
            }, 1000);

            var itemIndex = 1;
            $('#navi select option a').each(function() {
                if (itemIndex >= 3 && itemIndex <= 12)
                    $(this).attr('target', '_blank');
                itemIndex++;
            });

            /* DOCUMENT READY SCRIPT :: FINISH */

            this.setElement(item);

            return;
        },

        events : {
            'click a[rel=ajax]' : 'ajax'
        },

        initialize : function() {

            Pace.start();
            this.windowWidth = $(window).width();

            _.bindAll(this, 'ajax');

            this.render();

        }
    });

    var app = new App();

});