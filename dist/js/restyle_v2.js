$(document).ready((function(){$(".productslider__slider_v2").each((function(){$(this).slick({dots:!1,arrows:!0,infinite:!0,slidesToShow:4,slidesToScroll:1,nextArrow:$(this).closest(".productslider").find(".slider__arrow_right"),prevArrow:$(this).closest(".productslider").find(".slider__arrow_left"),responsive:[{breakpoint:767,settings:{slidesToShow:2,slidesToScroll:1}}]})})),$(".imgsliderblock__slider").each((function(){$(this).slick({dots:!1,arrows:!1,infinite:!0,slidesToShow:2,slidesToScroll:1,nextArrow:$(this).closest(".imgsliderblock").find(".slider__arrow_right"),prevArrow:$(this).closest(".imgsliderblock").find(".slider__arrow_left"),responsive:[{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1,dots:!0}}]})})),$(".homenews_v2").each((function(){$(this).slick({dots:!1,arrows:!1,infinite:!0,slidesToShow:4,slidesToScroll:1,gap:22,nextArrow:$(this).closest(".imgsliderblock").find(".slider__arrow_right"),prevArrow:$(this).closest(".imgsliderblock").find(".slider__arrow_left"),responsive:[{breakpoint:999,settings:{slidesToShow:3,slidesToScroll:1,dots:!0}},{breakpoint:767,settings:{slidesToShow:2,slidesToScroll:1,dots:!0}},{breakpoint:480,settings:{slidesToShow:1,fade:!0,slidesToScroll:1,dots:!0}}]})}));var s,i=(s=!1,function(){s||(s=!0,$(".stats__number span").each((function(){$(this).prop("Counter",0).animate({Counter:$(this).text()},{duration:2e3,easing:"swing",step:function(s){$(this).text(Math.ceil(s))}})})))});$(window).scroll((function(){if($(".stats").length){var s=$(".stats").offset().top,o=$(".stats").offset().top+$(".stats").outerHeight(),e=$(window).scrollTop()+$(window).innerHeight(),t=$(window).scrollTop();e>s&&t<o&&i()}}))}));