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

            var itemIndex = 1;
            $('#navi select option a').each(function() {
                if (itemIndex >= 3 && itemIndex <= 12)
                    $(this).attr('target', '_blank');
                itemIndex++;
            });

            if ($('#page').length != 0)
                $(window).bind('mousewheel', function(e) {

                    $page = $('#page');
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

            $('li.item27').on(function() {
                window.open($(this).find('a').prop('href'), '_blank');
            });

            setTimeout(function() {
                $('#teaser').show().find('#teaserImage').addClass('active').animate({
                    'max-height' : '+=' + ($('#teaserImage img').height() + 45) + 'px'
                }, 1000);
            }, 500);

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

    $(document).ready(function($) {
        var app = new App();
        return app;
    });

});
