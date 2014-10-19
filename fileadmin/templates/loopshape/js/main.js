// load bootstrap
console.log('\n\nLOOPSHAPE presents:\n\GRUNT+COMPOSER SKELETON\n');
console.log('Contact: webmaster@loopshape.com\n\n');
console.log('Starting App!\n');
// start the RJS config
require.config({

    baseUrl : './Templates/js/',
    // enter correct pathname for /server/frame

    paths : {
        // Require.JS/BACKBONE CoreFiles
        jquery : './../../bower_components/jquery/dist/jquery.min',
        migrate : './../../bower_components/jquery-migrate/jquery-migrate.min',
        underscore : './../../bower_components/underscore/underscore-min',
        backbone : './../../bower_components/backbone/backbone',
        lodash : './../../bower_components/lodash/dist/lodash.underscore.min',
        // Plugins / JS-Modules
        tweenmax : './../../bower_components/greensock/src/minified/TweenMax.min',
        timelinemax : './../../bower_components/greensock/src/minified/TimelineMax.min',
        sticky : './app/lib/garand-sticky-c199302/jquery.sticky',
        iframeautoheight : './app/lib/jquery-autoheight/jquery.iframe-auto-height.plugin.1.9.3.min',
        tooltipsy : './app/lib/tooltipsy-master/tooltipsy.min',
        pace : './app/lib/pace.min',
        foundation : './foundation.min',
        uniform : './../css/uniform/jquery.uniform.min',
        // Website Logic
        app : './app/app',
        template : './app/class/_template'
    },

    shim : {
        jquery : {
            exports : '$'
        },
        migrate : {
            deps : ['jquery']
        },
        underscore : {
            deps : ['jquery'],
            exports : '_'
        },
        backbone : {
            deps : ['underscore'],
            exports : 'Backbone'
        },
        tweenmax : {
            exports : 'TweenMax'
        },
        timelinemax : {
            exports : 'TimelineMax'
        },
        template : {
            deps : ['backbone'],
            exports : 'Template'
        },
        sticky : {
            deps : ['jquery'],
            exports : 'Sticky'
        },
        iframeautoheight : {
            deps : ['jquery'],
            exports : 'IframeAutoheight'
        },
        tooltipsy : {
            deps : ['jquery'],
            exports : 'Tooltipsy'
        },
        pace : {
            deps : ['jquery'],
            exports : 'Pace'
        },
        app : {
            deps : ['jquery', 'migrate', 'template', 'pace'],
            exports : 'App'
        }
    },

    waitSeconds : 0

}), define(["jquery", "underscore", "backbone", 'tweenmax', 'timelinemax', "app"]);