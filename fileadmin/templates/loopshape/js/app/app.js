// module dependencies
require(['foundation', 'mousewheel'], function(Foundation, Mousewheel) {
    'use strict';

    // Backbone definitions for App
    var App = Backbone.View.extend({

        ajax : function() {
            // currently no operation
            return;
        },

        render : function() {

            var item = this.page;

            var dx = 0;
            var dy = 0;
            var df = 0;

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

            $page = $('#page');
            $(window).bind('mousewheel', function(e) {

                $offy = $page.offset().top;

                if (e.originalEvent.wheelDelta > 0) {
                    $page.animate({
                        'top' : '+=6px'
                    }, 250);
                } else {
                    $page.animate({
                        'top' : '-=6px'
                    }, 250);
                }
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
