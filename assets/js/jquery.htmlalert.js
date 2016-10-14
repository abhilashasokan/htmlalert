/*==========================================
             HTML Alert Manager            
Options
    - Header Text (string) :
    - Footer Text (string) :
==========================================*/
(function($) {
    'use strict';
    $.fn.htmlAlert = function(options) {
        //true added to deep merge as we are using objects as options
        var defaults = {
            headerCaption: "Header",
            footerCaption: "Footer",
            buttonText: "Close",
            popupText: "Hello World!",
            themeName: "default",
            overlayColor: "#CCCCCC",
            popupAnimation: "",

        };
        var opts = $.extend(true, {}, defaults, options);
        init();
        return this.each(function(index, element) {
            $(element).bind("click.htmlalert", function() {
                containerCenter(element);
                $('#htmlalert').show();
            });
        });

        function init() {
            //create "htmlalert" div container and add to "body" tag
            if ($('#htmlalert').length <= 0) {
                var $htmlalert = $('<div />').appendTo('body').attr('id', 'htmlalert').addClass('modal').hide();
                var $modal_content = $('<div />').appendTo($htmlalert).addClass('modal-content');
                //Header Section
                var $modal_header = $('<div />').appendTo($modal_content).addClass('modal-header-' + opts.themeName);
                var $headerCaption = $('<h2 />').appendTo($modal_header).text(opts.headerCaption);
                //Content Section
                var $modal_body = $('<div />').appendTo($modal_content).addClass('modal-body-' + opts.themeName).html($.parseHTML(opts.popupText));
                //Footer Section
                var $modal_footer = $('<div />').appendTo($modal_content).addClass('modal-footer-' + opts.themeName);
                var $footerCaption = $('<h4 />').appendTo($modal_footer).text(opts.footerCaption);
                var $modal_footer_controls = $('<div />').appendTo($modal_footer).addClass('modal-footer-controls');
                var $modal_footer_controls_open = $('<button />').appendTo($modal_footer_controls).addClass('btn btn-default').text(opts.buttonText).attr('id', "modal_footer_button");

                $(".modal-content #modal_footer_button").click(function() {
                    $('#htmlalert').hide();
                    $('body').removeClass('overlay');
                });


            }
        }


        /**
         * This function calculates and adjusts the screen position to center
         */

        function containerCenter(element) {
            $('#htmlalert').css("position", "absolute");
            $('body').addClass('overlay').css("background-color", opts.overlayColor);
            $('#htmlalert').css("top", ($(window).height() / 2) - ($('#htmlalert').outerHeight() / 2));
            $('#htmlalert').css("left", ($(window).width() / 2) - ($('#htmlalert').outerWidth() / 2));
        }
    };
}(jQuery));
