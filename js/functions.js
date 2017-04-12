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
     Hide/Show Hamburger
     ============================*/
    var $hamburger = $('.hamburger');
    var $nav = $('nav');
    var $links = $nav.children('ul').find('a');
    var $navFull = $nav.find('#nav-full');
    var $lis = $nav.find('#nav-full li');
    var navIsShown = false;
    var mobile = false;
    var numOffset = 60;

    if(screen.width < 600) {
        mobile = true;
        numOffset = -1;
        $hamburger.css('display', 'block');
    }

    $(window).scroll(function () {
        var offset = window.pageYOffset;
        var hambIsShown = $hamburger.hasClass('hidden');
        var navIsShown = $navFull.hasClass('hidden');

        if (offset > numOffset && !hambIsShown && !navIsShown) {
            $hamburger.animateCss('fadeInRightBig', 'show');
        } else if (offset < numOffset && hambIsShown && !navIsShown && !mobile) {
            $hamburger.animateCss('fadeOutRightBig', 'hide');
        }
    });

    /*============================
     Hamburger and Close animations
     ============================*/
     function toggleNavContainer() {
        $hamburger.toggleClass('is-active');
        $navFull.toggleClass('hidden');
     }
     
    $hamburger.on('click', toggleNavContainer);
    $lis.on('click', toggleNavContainer);

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

    // TweenLite.from("#sobre img", 1.5, {yoyo:true, opacity: 0, y: 100, width: 0, ease: Elastic.easeOut.config(1, 0.4)});

});
