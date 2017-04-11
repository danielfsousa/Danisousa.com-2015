$(function () {

    /*============================
     FADE ANIMATION
     ============================*/
    //fadeStart: 0 - 100
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
        $("#arrow").animate({bottom: "20px"}, "slow");
        $("#arrow").animate({opacity: 1}, "slow");
        setTimeout(function () {
            $("#arrow").animate({bottom: "-20px", opacity: 0}, "slow", function () {
                arrowLoop();
            });
        }, 2500);
    }

    /*============================
     ANIMATE.CSS ANIMATION FUNCTION
     ============================*/
    $.fn.extend({
        animateCss: function (animationName, option) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

            if (option == 'show') {
                $(this).show();
            }

            $(this).addClass('animated ' + animationName).one(animationEnd, function () {

                $(this).removeClass('animated ' + animationName);

                if (option == 'hide') {
                    $(this).hide();
                }
            });
        }
    });

    /*============================
     Hide/Show Hamburger
     ============================*/
    var $nav = $('nav');
    var $links = $nav.children('ul').find('a');
    var $btns = $nav.find('img');
    var $hamburger = $nav.find('#hamburger');
    var $navFull = $nav.find('#nav-full');
    var $lis = $nav.find('#nav-full li');
    var hambIsShown = false;
    var navIsShown = false;
    var mobile = false;
    var numOffset = 80;

    if(screen.width < 600) {
        mobile = true;
        numOffset = -1;
        $hamburger.css('display', 'block');
    }

    $(window).scroll(function () {
        var offset = window.pageYOffset;
        var displayHamb = $hamburger.css('display');
        var displayNav = $navFull.css('display');

        if (typeof displayNav === typeof undefined || displayNav == 'none') {
            navIsShown = false;
        } else if (displayNav == 'block') {
            navIsShown = true;
        }

        if (typeof displayHamb === typeof undefined || displayHamb == 'none') {
            hambIsShown = false;
        } else if (displayHamb == 'block') {
            hambIsShown = true;
        }

        if (offset > numOffset && !hambIsShown && !navIsShown) {
            $hamburger.removeClass();
            $hamburger.animateCss('fadeInRightBig', 'show');
        } else if (offset < numOffset && hambIsShown && !navIsShown && !mobile) {
            $hamburger.removeClass();
            $hamburger.animateCss('fadeOutRightBig', 'hide');
        }
    });

    /*============================
     Hamburger and Close animations
     ============================*/
    $btns.on('mouseover', function () {
        $(this).animateCss('rubberBand');
    });

    //Hamburger
    $btns.eq(0).on('click', function (e) {
        e.preventDefault();
        $(this).removeClass('animated rubberBand');
        $(this).animateCss('fadeOutRightBig', 'hide');
        $navFull.animateCss('fadeInUpBig', 'show');
    });

    //Close
    $btns.eq(1).on('click', function (e) {
        e.preventDefault();
        $(this).removeClass('animated rubberBand');
        $navFull.animateCss('fadeOutDownBig', 'hide');
        if (window.pageYOffset > numOffset) {
            $btns.eq(0).animateCss('fadeInRightBig', 'show');
        }
    });

    //Click li
    $lis.on('click', function () {
        $navFull.animateCss('fadeOutDownBig', 'hide');
        setTimeout(function () {
            if (window.pageYOffset > numOffset) {
                $btns.eq(0).animateCss('fadeInRightBig', 'show');
            }
        }, 100);
    });

    /*============================
     SMOOTH SCROOL TO ANCHOR
     ============================*/
    $links.not('[href="#"]').click(function () {
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top
        }, 800);
        return false;
    });

    /*============================
     INIT
     ============================*/
    //Change copyright Date
    var year = new Date().getFullYear();
    $("#copyright").find("p").html("©" + year + " - Desenvolvido por: \<span\>Daniel Sousa\</span\>");

    //Start Arrow Loop
    arrowLoop();

    //Start Header Opacity Animation
    fadeAnimate($("#call-to-action"), 73);

    //Start Elements Scroll Animation
    // window.sr = ScrollReveal({reset: false, duration: 1000});
    //sr.reveal('h2');
    //sr.reveal('.separator');
    // sr.reveal('img');
    // sr.reveal('#quote-author');
    // sr.reveal('p');
    // sr.reveal('button');
    // sr.reveal('input');
    // sr.reveal('textarea');
    // sr.reveal('.thumb');

});
