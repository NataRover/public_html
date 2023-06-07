/*---------------------------- start Hamburger_menu_mobile ------------------------*/

$(document).ready(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('open');
        $(".header__right").slideToggle("slow");
    });
});
/*---------------------------- start Send_message_Email_Ajax ------------------------*/

$(document).ready(function() {
    //E-mail Ajax Send
    $(".popup__formpricejs").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            setTimeout(function() {
                $(".popup").removeClass('show');
                window.open('http://apollogrouprussia.ru/krasnodar/thanks.html', '_self');
                th.trigger("reset");
            });
        });
        return false;
    });
});
// 
$(document).ready(function() {
    //E-mail Ajax Send
    $(".popup__formcallmeasurejs").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail1.php", //Change
            data: th.serialize()
        }).done(function() {
            setTimeout(function() {
                $(".popup").removeClass('show');
                window.open('http://apollogrouprussia.ru/krasnodar/thanks.html', '_self');
                th.trigger("reset");
            });
        });
        return false;
    });
});
// 
$(document).ready(function() {
    //E-mail Ajax Send
    $(".popup__formcallbackjs").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail2.php", //Change
            data: th.serialize()
        }).done(function() {
            setTimeout(function() {
                $(".popup").removeClass('show');
                window.open('http://apollogrouprussia.ru/krasnodar/thanks.html', '_self');
                th.trigger("reset");
            });
        });
        return false;
    });
});
// 
$(document).ready(function() {
    //E-mail Ajax Send
    $(".popup__formfaqjs").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail3.php", //Change
            data: th.serialize()
        }).done(function() {
            setTimeout(function() {
                $(".popup").removeClass('show');
                window.open('http://apollogrouprussia.ru/krasnodar/thanks.html', '_self');
                th.trigger("reset");
            });
        });
        return false;
    });
});
// 
$(document).ready(function() {
    //E-mail Ajax Send
    $(".popup__formclosejs").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail4.php", //Change
            data: th.serialize()
        }).done(function() {
            setTimeout(function() {
                $(".popup").removeClass('show');
                window.open('http://apollogrouprussia.ru/krasnodar/thanks.html', '_self');
                th.trigger("reset");
            });
        });
        return false;
    });
});
// 
$(document).ready(function() {
    //E-mail Ajax Send
    $(".aboutjs").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail5.php", //Change
            data: th.serialize()
        }).done(function() {
            setTimeout(function() {
                $(".popup").removeClass('show');
                window.open('http://apollogrouprussia.ru/krasnodar/thanks.html', '_self');
                th.trigger("reset");
            });
        });
        return false;
    });
});
// 
$(document).ready(function() {
    //E-mail Ajax Send
    $(".quizeformjs").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail6.php", //Change
            data: th.serialize()
        }).done(function() {
            setTimeout(function() {
                $(".popup").removeClass('show');
                window.open('http://apollogrouprussia.ru/krasnodar/thanks.html', '_self');
                th.trigger("reset");
            });
        });
        return false;
    });
});
/*---------------------------- start Slick_slider ------------------------*/
// portfolio__sliderjs
$('.portfolio__sliderjs').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    infinite: false,
    autoplaySpeed: 7000,
    arrows: true,
});
// reference__sliderjs
$('.reference__sliderjs').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 7000,
    arrows: true,
});


/*---------------------------- start modals work!!! ------------------------*/
$(".openpopup_callbackjs").click(function() {
    $(".popup_callbackjs").addClass('show');
});
// 
$(".openpopup_faqjs").click(function() {
    $(".popup_faqjs").addClass('show');
});
// 
$(".callmeasurejs").click(function() {
    $(".popup_callmeasurejs").addClass('show');
});
// 
$(".openpopuppricejs").click(function() {
    $(".popup_pricejs").addClass('show');
});
// 
$(".openpopupclosejs").click(function() {
    $(".popup_closejs").addClass('show');
});
// 
$(".firstins__polit a").click(function() {
    $(".popup_politjs").addClass('show');
});
// 
$("body").one("mouseleave", function(e) {
    if (e.clientY < 0) {
        $(".popup_closejs").addClass('show');
    }
});
$(".popup__close").click(function() {
    $('.popup').removeClass('show');
});
$(document).mouseup(function(e) {
    var container = $(".popup__center");

    if (!container.is(e.target) && container.has(e.target).length === 0) {
        $('.popup').removeClass('show');
    }
});

/*---------------------------- start Mask_input_telephone ------------------------*/
$(".teclass").mask("+7(999) 999-99-99");
/*---------------------------- start MagnificPopup ------------------------*/
$(document).ready(function() {
    $('.magnifjs').each(function() { // the containers for all your galleries
        $(this).magnificPopup({
            delegate: 'a', // the selector for gallery item
            type: 'image',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },
        });
    });
});
$(document).ready(function() {
    $('.magnifvideojs').each(function() { // the containers for all your galleries
        $(this).magnificPopup({
            delegate: 'a', // the selector for gallery item
            type: 'iframe',
            removalDelay: 160,
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },
        });
    });
});

/*---------------------------- start Scroll_To ------------------------*/

$(".firstins__scroll").click(function() {
    $('html, body').animate({
        scrollTop: $(".quize").offset().top + 100
    }, 500);
})
$(".steps__btn .openpopup").click(function() {
    $('html, body').animate({
        scrollTop: $(".about").offset().top + 60
    }, 500);
})


/*---------------------------- start Animate WOW ------------------------*/

new WOW().init();

// tabs steps
$(".steps__topitem1").click(function() {
    $(".steps__topitem").removeClass("active");
    $(this).addClass("active");
    $(".steps__bodyins").hide();
    $(".steps__bodyins1").show();
});
$(".steps__topitem2").click(function() {
    $(".steps__topitem").removeClass("active");
    $(this).addClass("active");
    $(".steps__bodyins").hide();
    $(".steps__bodyins2").show();
});
$(".steps__topitem3").click(function() {
    $(".steps__topitem").removeClass("active");
    $(this).addClass("active");
    $(".steps__bodyins").hide();
    $(".steps__bodyins3").show();
});
$(".steps__topitem4").click(function() {
    $(".steps__topitem").removeClass("active");
    $(this).addClass("active");
    $(".steps__bodyins").hide();
    $(".steps__bodyins4").show();
});
$(".steps__topitem5").click(function() {
    $(".steps__topitem").removeClass("active");
    $(this).addClass("active");
    $(".steps__bodyins").hide();
    $(".steps__bodyins5").show();
});

// faq
$(".faq__header").click(function() {
    $(this).toggleClass("active");
    $(this).next('.faq__body').slideToggle(500);
});


// 
$(".quizebl1 .quizebl__item").click(function() {
    $('.quizebl1 .quizebl__btns').addClass('hover');
});
$(".quizebl2 .quizebl__item").click(function() {
    $('.quizebl2 .quizebl__btns').addClass('hover');
});
$(".quizebl4 .quizebl__item").click(function() {
    $('.quizebl4 .quizebl__btns').addClass('hover');
});
$(".quizebl5 .quizebl__item").click(function() {
    $('.quizebl5 .quizebl__btns').addClass('hover');
});
$(".quizebl6 .quizebl__item").click(function() {
    $('.quizebl6 .quizebl__btns').addClass('hover');
});
// quize
$(".quize__next1").click(function() {
    $('.quizebl1').hide();
    $('.quizebl2').show();
    $('.quizebl__line').addClass('nextt');
    $('.numberquestions__single').removeClass('active');
    $('.numberquestions__single2').addClass('active');
});
$(".quize__next2").click(function() {
    $('.quizebl2').hide();
    $('.quizebl3').show();
    $('.quizebl__line').addClass('nextt2');
    $('.numberquestions__single').removeClass('active');
    $('.numberquestions__single3').addClass('active');
});
$(".quize__next3").click(function() {
    $('.quizebl3').hide();
    $('.quizebl4').show();
    $('.quizebl__line').addClass('nextt3');
    $('.numberquestions__single').removeClass('active');
    $('.numberquestions__single4').addClass('active');
});
$(".quize__next4").click(function() {
    $('.quizebl4').hide();
    $('.quizebl5').show();
    $('.quizebl__line').addClass('nextt4');
    $('.numberquestions__single').removeClass('active');
    $('.numberquestions__single5').addClass('active');
});
$(".quize__next5").click(function() {
    $('.quizebl5').hide();
    $('.quizebl7').show();
    $('.quize__right').hide();
    $('.quizebl__line').addClass('nextt5');
    $('.numberquestions__single').hide();
    $('.textlast').hide();
    $('.quize__left').addClass('lastv');


});
// $(".quize__next6").click(function() {
//     $('.quizebl6').hide();
//     $('.quizebl7').show();
//     $('.quizebl__line').addClass('nextt6');
// });
// 
$(".quize__prev2").click(function() {
    $('.quizebl2').hide();
    $('.quizebl1').show();
    $('.quizebl__line').removeClass('nextt');
    $('.numberquestions__single').removeClass('active');
    $('.numberquestions__single1').addClass('active');
});
$(".quize__prev3").click(function() {
    $('.quizebl3').hide();
    $('.quizebl2').show();
    $('.quizebl__line').removeClass('nextt2');
    $('.numberquestions__single').removeClass('active');
    $('.numberquestions__single2').addClass('active');
});
$(".quize__prev4").click(function() {
    $('.quizebl4').hide();
    $('.quizebl3').show();
    $('.quizebl__line').removeClass('nextt3');
    $('.numberquestions__single').removeClass('active');
    $('.numberquestions__single3').addClass('active');
});
$(".quize__prev5").click(function() {
    $('.quizebl5').hide();
    $('.quizebl4').show();
    $('.quizebl__line').removeClass('nextt4');
    $('.numberquestions__single').removeClass('active');
    $('.numberquestions__single4').addClass('active');
});
$(".quize__prev6").click(function() {
    $('.quizebl6').hide();
    $('.quizebl5').show();
    $('.quizebl__line').removeClass('nextt5');
    $('.quize__right').show();
    $('.numberquestions__single').removeClass('active');
    $('.numberquestions__single5').addClass('active');
});
//
// range
$(".rangeinput").ionRangeSlider({
    min: 40,
    max: 600,
    from: 65,
    step: 1
});


$(document).ready(function() {
    var zoom_percent = "100";

    function zoom(zoom_percent) {
        $(".mfp-figure figure").click(function() {
            switch (zoom_percent) {
                case "100":
                    zoom_percent = "120";
                    break;
                case "120":
                    zoom_percent = "150";
                    break;
                case "150":
                    zoom_percent = "200";
                    $(".mfp-figure figure").css("cursor", "zoom-out");
                    break;
                case "200":
                    zoom_percent = "100";
                    $(".mfp-figure figure").css("cursor", "zoom-in");
                    break;
            }
            $(this).css("zoom", zoom_percent + "%");
        });
    };
    $('.garanty__bottom').each(function() { // the containers for all your galleries
        $(this).magnificPopup({
            delegate: 'a', // the selector for gallery item
            type: 'image',
            callbacks: {
                open: function() {
                    $(".mfp-figure figure").css("cursor", "zoom-in");
                    zoom(zoom_percent);
                },
                close: function() {
                        // Will fire when popup is closed
                    }
                    // e.t.c.
            },
            gallery: {
                enabled: true,
                navigateByImgClick: false,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },


        });
    });
});