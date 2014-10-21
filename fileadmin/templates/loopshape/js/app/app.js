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

            $('li.item27').on(function() {
                window.open($(this).find('a').prop('href'), '_blank');
            });

            // login slide on hover
            $('#page #header #login').css({
                'top' : -(($('#page #header #login').height() + 15) * 2) + 'px'
            });
            $(document).ready(function() {

                $('#headerNavi ul li').eq(3).find('a').attr('target', '_blank');

                $('#header').on('mouseover', function() {
                    $('#page #header #login').stop().show().animate({
                        'top' : '0' + 'px',
                        'opacity' : '0.99'
                    }, 1000);
                }).on('mouseout', function() {
                    $('#page #header #login').stop().animate({
                        'top' : -(($('#page #header #login').height() + 15) * 2) + 'px',
                        'opacity' : '0'
                    }, 1000, function() {
                        $(this).hide();
                    });
                });

                $('#page').css({
                    'padding-bottom' : ($('#footer').height() + 60) + 'px'
                });

                $('#headerNavi').css({
                    'height' : $('#headerNavi ul').innerHeight()
                });
                
                $('#teaser').show().find('#teaserImage').addClass('active').animate({
                    'max-height' : '+=' + ($('#teaserImage img').height() + 45) + 'px'
                }, 1000);

                /*
                var $page = $('#page');                
                $(window).bind('mousewheel', function(e) {

                    var $offy = $page.offset().top;

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
                */
               
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

    $(document).ready(function($) {
        var app = new App();
        return app;
    });

});
