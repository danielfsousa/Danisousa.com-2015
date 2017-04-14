$(function () {
    'use strict'

    /*============================
    VARS
    ============================*/
    var mobileWidth = 600; // Screen width  =>  screen.width


    /*============================
     DOM ELEMENTS
     ============================*/
    var $foto = $('#foto');
    var $hamburger = $('.hamburger');
    var $nav = $('nav');
    var $nav_ul = $nav.children('ul');
    var $links = $nav_ul.find('a');
    var $navFull = $nav.find('#nav-full');
    var $lis = $nav.find('#nav-full li');


    /*============================
     LOGO FADE ANIMATION

        fadeStart: 0 - 100
     ============================*/
    function fadeAnimate(element, fadeStart) {
        var offsetElement = element.offset().top;
        var elementHeight = element.height();
        var opacity = 1;

        $(window).scroll(function () {
            var offsetDocument = $(this).scrollTop();

            if (offsetDocument >= offsetElement - 60) {
                var opacity = (offsetElement - offsetDocument + fadeStart) / 100;
            } else {
                opacity = 1;
            }
            element.css("opacity", opacity);
        });
    }


    /*============================
     ARROW LOOP ANIMATION
     ============================*/
    function arrowLoop() {
        $("#arrow").animate({
            bottom: "20px"
        }, "slow");
        $("#arrow").animate({
            opacity: 1
        }, "slow");
        setTimeout(function () {
            $("#arrow").animate({
                bottom: "-20px",
                opacity: 0
            }, "slow", function () {
                arrowLoop();
            });
        }, 2500);
    }


    /*============================
     IMAGE REVEAL ANIMATION
     ============================*/
    function imageAnim() {
        $(window).on('scroll', function (event) {
            var pageOffset = $(this).scrollTop();
            var fotoOffset = $foto.offset().top - $(this).height();
            var fotoIsShown = false;

            if (pageOffset >= fotoOffset) {
                $foto.css('animation-play-state', 'running');
                $(this).off(event);
            }
        });
    }


    /*============================
     HIDE/SHOW HAMBURGER AND MENU
     ============================*/
    function _toggleNavContainer() {
        $hamburger.toggleClass('is-active');
        $navFull.toggleClass('is-shown');
    }

    function _toggleHamburger() {
        var offset = $(window).scrollTop();
        var hambIsShown = $hamburger.hasClass('is-shown');
        var navIsShown = $navFull.hasClass('is-shown');
        var showMenuOn = $nav_ul.height();

        if (offset > showMenuOn && !hambIsShown && !navIsShown) {
            // Fade-in
            $hamburger.addClass('is-shown');

        } else if (offset < showMenuOn && hambIsShown && !navIsShown) {
            // Fade-out
            $hamburger.removeClass('is-shown');
        }
    }

    function hamburgerMenuAnim() {
        if (screen.width <= mobileWidth) {
            $hamburger.addClass('is-shown');
        } else {
            $(window).on('scroll', _toggleHamburger);
        }

        $hamburger.on('click', _toggleNavContainer);
        $lis.on('click', _toggleNavContainer);
    }


    /*============================
     SMOOTH SCROOL TO ANCHOR
     ============================*/
    function smoothScroll() {
        $links.not('[href="#"]').click(function () {
            $('html,body').animate({
                scrollTop: $(this.hash).offset().top
            }, 800);
            return false;
        });
    }


    /*============================
     INIT
     ============================*/
    function init() {
        // Start Arrow Loop
        arrowLoop();

        // Start Header Opacity Animation
        fadeAnimate($("#call-to-action"), 73);

        // Hamburger and Menu show/hide animation
        hamburgerMenuAnim();

        // Smooth scroll on nav li click
        smoothScroll();

        // Photo reveal animation
        imageAnim();
    }

    init();
});