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
            
            $('#teaser').show().find('#teaserImage').addClass('active');

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
