/*==========================================
             HTML Alert Manager            
Options
    - Header Text (string) :
    - Footer Text (string) :
==========================================*/
(function($) {
    'use strict';
    $.fn.htmlalert = function(options) {
        //true added to deep merge as we are using objects as options
        var defaults = {
            headerCaption: "Header",
            footerCaption: "Footer",
            ButtonText: "Close"
        };
        var opts = $.extend(true, {}, defaults, options);
        init();
        return this.each(function(index, element) {
            // $(element).bind("click.htmlalert", function() {
            //     getContent(element);
            // });
        });

        function init() {
            //create "htmlalert" div container and add to "body" tag
            if ($('#htmlalert').length <= 0) {
                var $htmlalert = $('<div />').appendTo('body').attr('id', 'htmlalert').addClass('modal').hide();
                var $modal_content = $('<div />').appendTo($htmlalert).addClass('modal-content');
                //Header Section
                var $modal_header = $('<div />').appendTo($modal_content).addClass('modal-header');
                var $headerCaption = $('<h2 />').appendTo($modal_header).text(opts.headerCaption);
                //Content Section
                var $modal_body = $('<div />').appendTo($modal_content).addClass('modal-body').html("adas das d asd as da sdasd");

                //Footer Section
                var $modal_footer = $('<div />').appendTo($modal_content).addClass('modal-footer');
                var $footerCaption = $('<h4 />').appendTo($modal_footer).text(opts.footerCaption);
                var $modal_footer_controls = $('<div />').appendTo($modal_footer).addClass('modal-footer-controls');
                var $modal_footer_controls_open = $('<button />').appendTo($modal_footer_controls).addClass('btn btn-default').text(opts.ButtonText).attr('id', "modal_footer_open");
                containerCenter();
            }
        }


        /**
         * This function calculates and adjusts the screen position to center
         */

        function containerCenter() {
            $('#htmlalert').css("position", "absolute");
            $('body').addClass('overlay');
            $('#htmlalert').css("top", ($(window).height() / 2) - ($('#htmlalert').outerHeight() / 2));
            $('#htmlalert').css("left", ($(window).width() / 2) - ($('#htmlalert').outerWidth() / 2));
            $('#htmlalert').show();
        }
    };
}(jQuery));
