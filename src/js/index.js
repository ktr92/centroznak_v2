function initFE() {
    mainSliderInit()
    menuSliderInit()
    productSliderInit()
    reviewsSliderInit()
    fixElement(false, 300, 'headermain', 'fixed')
    fixElement(false, false, 'headercontainer', 'fixed')
    closeByClickOutside('.mainmenu', '.mainmenubtn')
    limitText('.reviewcontent__text', 'Читать полностью')
    limitText('.text', 'Подробнее')
    detailsliderInit()
    fixElement(false, 750, 'mobpriceFixed', 'fixed')
    moreNewsSliderInit()

   /*  cardImagesSlider()
    menuInit()
    mainSliderInit()
    detailsliderInit()
    imgSliderInit()
    recipeSliderInit()
    productSliderInit()
    mobileAccordeon()
    closeByOutsideSelect()
    closeByClickOutside('.mainmenu', '.mainmenubtn')
    closeByClickOutside('.catalogpage__aside', '.js-mobilefilter')
   
    blockSliderInit()
    productListImgLisder()
    moreNewsSliderInit() */
  }



$(document).ready(function() {
    if ($(window).width() < 1024) {
        $('[href="#detailtabs"]').on('click', function(e) {
            e.preventDefault()
              
        
                $('#detailtabs h2').trigger('click');
                $('html,body').animate({
                    scrollTop: $("#detailtabs").offset().top - 200},
                    'slow');
           
          }) 
    } else {
        $('[href="#detailtabs"]').on('click', function(e) {
            e.preventDefault()
              
        
                $('.sitetab--reviews').trigger('click');
                $('html,body').animate({
                    scrollTop: $("#detailtabs").offset().top - 150},
                    'slow');
           
          }) 
    }   

    $(".youtubepopup").click(function () {
        var $this = $(this);
        var $iframe = $('<iframe frameborder="0" allow="autoplay; encrypted-media" class="iframe" id="Overlayvideo" allowfullscreen="true">').attr("src", $this.data("link")).css({"width": 600, "height": 400});
        var $title = '';
        $("#video-view").html($title).append($iframe);
        $("#video-popup").show();

        const element = "#video-view iframe"
        const button=".youtubepopup"
        $(document).click(function(event) {
            if (!$(event.target).closest(`${element},${button}`).length) {
                $(button).removeClass('active')
                $("#video-popup").hide()
                $("#video-view").html('')
            }
        });
        
        $(document).keyup(function(e) {
            if (e.key === "Escape") { // escape key maps to keycode `27`
                $(button).removeClass('active')
                $("#video-popup").hide()
                $("#video-view").html('')
            }
        });
    });
    $('#video-close').click(function () {
        $("#video-view").html('')
        $("#video-popup").hide()
    })


      



    
    if ($(window).width() < 1024) {
        $(".sliderarrows.onlyMobile .slider__arrow_left").click(function (e) {
            $(this).closest('[data-block="productslider"]').find(".slick-slider").slick("slickPrev");
        });
        $(".sliderarrows.onlyMobile .slider__arrow_right").click(function (e) {
            $(this).closest('[data-block="productslider"]').find(".slick-slider").slick("slickNext");
        });
     }
    
   

    flatpickr("#js-flatpickr", {
        minDate: "today",
    });

    document.querySelectorAll('[data-toggle="password"]').forEach(item => {
        item.addEventListener('click', event => {
            let inp = item.previousElementSibling
            if (inp.type === "password") {
                inp.type = "text";
            } else {
                inp.type = "password";
            }
        })
      })

   

    $(function() {
        $("iframe[data-src]").each(function() {
            $(this).Lazy();
        })
    });
  $('.js-mobilefilter').on('click', function(e) {
      e.preventDefault()
      $(this).toggleClass('active')
      $('.catalogpage__aside').toggleClass('active')
  })
 
 /*  $('.headermain__contacts').on('click', function(e) {
      e.preventDefault()
      $(this).toggleClass('active')
      $('.contacts__dropdown').slideToggle()
  }) */

  

  
  $('.jscatalog .js-toggler').on('click', function(e) {
      $(this).closest('.jscatalog').toggleClass('active')
      $(this).closest('.jscatalog').siblings('.mobilemenu__level2').toggleClass('active')
  })
  $('.mobilemenu__level2 .js-toggler').on('click', function(e) {
      $(this).closest('.mobilemenu__content').toggleClass('active')
      $(this).closest('.mobilemenu__item').find('.mobilemenu__level3').slideToggle()
  })

  $('.menubutton').on('click', function(e) {
      $(this).toggleClass('active')
      $('.mobilemenu').toggleClass('active')
      $('.jsbackdrop').toggleClass('active')
      $('.mobilemenu__level2').removeClass('active')
      $('.mobilemenu__content').removeClass('active')

  })
  $('.jsbackdrop').on('click', function(e) {
      $(this).removeClass('active')
      $('.mobilemenu').removeClass('active')
      $('.menubutton').removeClass('active')
      $('.mobilemenu__level2').removeClass('active')
      $('.mobilemenu__content').removeClass('active')

  })
  $('.haederbanner__close').on('click', function(e) {
        e.preventDefault();
      $(this).closest('.haederbanner').hide()
  })

  $('.productcard .cardrating').each(function() {
      $(this).find('span.stars-active').css('width', $(this).find('.cardrating__value').text() * 11.2);
  });
  $('.detailinfo__reviews .cardrating').each(function() {
      $(this).find('span.stars-active').css(
          'width',
          $(this).find('.cardrating__value').text() * ($(this).find('.fa-star').width() + 2.1)
      );
  });
  $('.reviewcontent').each(function() {
      $(this).find('span.stars-active').css(
          'width',
          $(this).find('.cardrating__value').text() * 18);
  });

  $("input[type=tel]").mask("7 (999) 999-99-99");

  lightbox.option({
    'resizeDuration': 0,
  })

  function incrementValue(e) {
      e.preventDefault();
      var fieldName = $(e.target).data('field');
      var parent = $(e.target).closest('div');
      var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

      if (!isNaN(currentVal)) {
          parent.find('input[name=' + fieldName + ']').val(currentVal + 1);
      } else {
          parent.find('input[name=' + fieldName + ']').val(1);
      }
  }

  function decrementValue(e) {
      e.preventDefault();
      var fieldName = $(e.target).data('field');
      var parent = $(e.target).closest('div');
      var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

      if (!isNaN(currentVal) && currentVal > 1) {
          parent.find('input[name=' + fieldName + ']').val(currentVal - 1);
      } else {
          parent.find('input[name=' + fieldName + ']').val(1);
      }
  }

  $('.quantity').on('click', '.quantity-plus', function(e) {
      incrementValue(e);
  });

  $('.quantity').on('click', '.quantity-minus', function(e) {
      decrementValue(e);
  });

  

(function($) {
  $(function() {

      $('.js-tabsheader').on('click', 'li:not(.active)', function() {
          $(this)
              .addClass('active').siblings().removeClass('active')
              .closest('div.js-tabs').find('div.js-tabscontent').removeClass('active').eq($(this).index()).addClass('active');
      });

  });
})(jQuery);

(function($) {
  $(function() {

      $('[data-headertabs]').on('click', 'li:not(.active)', function() {
          $(this)
              .addClass('active').siblings().removeClass('active')
              .closest('[data-tabs]').find('[data-contenttabs]').removeClass('active').eq($(this).index()).addClass('active');
            let sl =  $(this).closest('[data-tabs]').find('.slick-slider')
            if (sl.length) {
                sl.slick('refresh')
            }
             
            });

  });
})(jQuery);


(function($) {
  $(function() {

     

      if ($(window).width() > 719) {
		(function($) {
		$(function() {

            $('.sitetabs__header ul').on('click', 'li:not(.active)', function() {
                $(this)
                    .addClass('active').siblings().removeClass('active')
                    .closest('div.sitetabs').find('div.sitetabs__content').removeClass('active').eq($(this).index()).addClass('active');
            });

		});
		})(jQuery);
	}
	else {
		$('.sitetabs__content h2').click(function (event) {
		/* $(this).closest('.accordeon-js').find('.accordeon-contentjs').not($(this).next()).hide(300).removeClass('active'); */
		$(this).closest('.sitetabs__content').find('.sitetabs__main h2').not($(this)).removeClass('active');
		$(this).toggleClass('active');
		$(this).next('.sitetabs__main').slideToggle().toggleClass('active');
	});
	}

  });
})(jQuery);


});

function menuSliderInit() {

    $('button.mainmenubtn').on('click', function(e) {
        $(this).toggleClass('active')
        $('.mainmenu').toggleClass('active')
        $('.jsbackdrop').toggleClass('active')
        $('.mainmenu__slider').find('.productslider__slider-menu').slick('refresh')
        setTimeout(showSlider, '300');
    })

    
    $('.productslider__slider-menu').each(function() {
        $(this).slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true
        });
    });

    function showSlider() {
		$('.productslider__slider-menu.slick-slider').css('opacity', '1');
	}

	/* function hideSlider() {
		$('.productslider__slider-menu.slick-slider').css('opacity', '0');
	} */

}






  function mainSliderInit() {
    $('.mainslider__slider').each(function() {
        $(this).slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            dots: true,
            fade: true,
            nextArrow: $(this).closest('.mainslider').find('.slider__arrow_right'),
            prevArrow: $(this).closest('.mainslider').find('.slider__arrow_left'),
         
        });
    });
}
  function reviewsSliderInit() {
    $('[data-reviews="slider"]').each(function() {
        $(this).slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            nextArrow: $(this).closest('[data-sliderblock="reviewsblock"]').find('.slider__arrow_right'),
            prevArrow: $(this).closest('[data-sliderblock="reviewsblock"]').find('.slider__arrow_left'),
            responsive: [{
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },

            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },

        ]
        });
    });

    

}




function limitText(el, caption) {
    $(el).each(function() {
        const content = $(this).find('[data-limit]')
        
        if (content) {
            const height = content.data('limit')
            if (content.height() >= height) {
                content.css('height', height)
                content.addClass('texthidden')
                $(this).append(`<span data-toggle="fulltext" class="link">${caption}</span>`)
            }
        }
    })

    $(el).on('click', '[data-toggle="fulltext"]', function(e) {
        e.preventDefault()

        let text = $(this).text()
        let content = $(this).siblings('[data-limit]')
 
        $(this).siblings('[data-limit]').toggleClass('texthidden')

        if (content.height() == content.data('limit')) {
            $(this).siblings('[data-limit]').css('height', 'initial')
        } else {
            $(this).siblings('[data-limit]').css('height', content.data('limit'))
        }
        
        $(this).text(
            text == caption ? "Скрыть" : caption
        )
    })
    


}



function detailsliderInit() {
    if (window.innerWidth >= 1023) {
        
    }
    const swiper = new Swiper(".detailswiperpreview", {
        spaceBetween: 9,
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
        slidesPerView: "auto",
        mousewheel: true,
        direction: 'vertical',
        freeMode: true,
        watchSlidesProgress: true,

    });

    const swiper2 = new Swiper(".detailswiper", {
        
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
        pagination: {
            el: ".detailslider-pagination",
            clickable: true
        },

    });

}


function productSliderInit() {



    $('.productslider__slider').each(function() {
        $(this).slick({
            dots: false,
            arrows: true,
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1,
          /*   autoplay: true,
            autoplaySpeed: 3000, */
            nextArrow: $(this).closest('.productslider').find('.slider__arrow_right'),
            prevArrow: $(this).closest('.productslider').find('.slider__arrow_left'),
            responsive: [{
                    breakpoint: 1530,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    }
                },

                {
                    breakpoint: 1023,
                    settings: {
                        variableWidth: true
                    },
                },

            ]
        })
    })
    $('.productslider__modalslider').each(function() {
        $(this).slick({
            dots: false,
            arrows: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            
            autoplay: true,
            autoplaySpeed: 3000,
            swipe: false,
            nextArrow: $(this).closest('.productslider').find('.sliderarrows__right'),
            prevArrow: $(this).closest('.productslider').find('.sliderarrows__left'),
            responsive: [

                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                    }
                },

            ]
        })
    })


}

function recipeSliderInit() {
    $('.recipeslider__slider').each(function() {
        $(this).slick({
            dots: false,
            arrows: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            
            autoplay: true,
            autoplaySpeed: 3000,
            infinite: true,
            swipe: false,
            nextArrow: $(this).closest('.recipeslider').find('.sliderarrows__right'),
            prevArrow: $(this).closest('.recipeslider').find('.sliderarrows__left'),
            responsive: [{
                    breakpoint: 1530,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        })
    })

}
function moreNewsSliderInit() {
    $('.morenews__slider').each(function() {
        $(this).slick({
            dots: false,
            arrows: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            
            autoplay: true,
            autoplaySpeed: 3000,
            infinite: true,
            swipe: false,
            nextArrow: $(this).closest('.morenewsslider').find('.slider__arrow_right'),
            prevArrow: $(this).closest('.morenewsslider').find('.slider__arrow_left'),
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        })
    })

}

function imgSliderInit() {
    $('.imgslider__slider').each(function() {
        $(this).slick({
            dots: false,
            arrows: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            
            autoplay: true,
            autoplaySpeed: 3000,
            infinite: true,
            nextArrow: $(this).closest('.imgslider').find('.beyond-button-next'),
            prevArrow: $(this).closest('.imgslider').find('.beyond-button-prev'),
            responsive: [{
                    breakpoint: 1530,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        dots: true,
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                }
            ]
        })
    })
}



function fixElement(topDesktop, topMobile, elementId, className) {
  if (document.getElementById(elementId)) {
  if (window.innerWidth >= 1023) {
    if (topDesktop === 0) {
        document.getElementById(elementId).classList.add(className)
    } else {
        if(topDesktop) {
            window.addEventListener('scroll', (event) => {
            scroll = window.scrollY
            if (scroll >= topDesktop) {
                document.getElementById(elementId).classList.add(className)
            } else {
                document.getElementById(elementId).classList.remove(className)
            }
        
            });
        }
    }
   
    } else {
        if (topMobile === 0) {
           document.getElementById(elementId).classList.add(className)
        } else {
            if (topMobile) {
                window.addEventListener('scroll', (event) => {
                    scroll = window.scrollY
                    if (scroll >= topMobile) {
                      document.getElementById(elementId).classList.add(className)
                    } else {
                      document.getElementById(elementId).classList.remove(className)
                    }
              
                  });
            }
        }
    
     
    }
  }
}

function blockSliderInit() {
    const blockslider =
        new Swiper('.blockslider__container', {
            pagination: {
                el: ".blockslider-pagination",
                clickable: true
            },
            navigation: {
                nextEl: ".blockslider-button-next",
                prevEl: ".blockslider-button-prev",
            },
        })

   
}





function mobileAccordeon() {
  if ($(window).width() < 1024) {
      $('.infobadge__main').on('click', function() {
          $(this).toggleClass('active')
          $(this).closest('.infobadge').find('.infobadge__accordeon').slideToggle()
      })
  }
}

function cardImagesSlider() {
    hoverSlider.init({});
}

function menuInit() {
    $(function() {
        if (window.innerWidth > 1023) {
            $(window).resize();
        }
    });

    if ($(window).width() > 1023) {
        $('#dmenu').dmenu({
            menu: {
                align: 'left'
            },
            item: {
                bg: false,
                border: false,
                subindicator: true,

                fit: [{
                        items: null,
                        fitter: 'icon-hide',
                        order: 'all'
                    },
                    {
                        items: null,
                        fitter: 'icon-only',
                        order: 'all'
                    },
                    {
                        items: ':not(.dm-item_align-right)',
                        fitter: 'submenu',
                        order: 'rtl'
                    },
                    {
                        items: ':not(.dm-item_align-right)',
                        fitter: 'hide',
                        order: 'rtl'
                    }
                ]
            },
            submenu: {
                arrow: false,
                border: false,
                shadow: true
            },
            subitem: {
                bg: true,
                border: false
            }

        });
    } else {
        $('.arrowmenu').click(function() {
            $(".headermenu__wrapper").animate({
                scrollLeft: '+=126px'
            });
        });
    }

}




// close select

/**/



function closeByClickOutside(element, button) {
  $(document).click(function(event) {
      if (!$(event.target).closest(`${element},${button}`).length) {
          $(button).removeClass('active')
          $(element).removeClass('active')
      }
  });
  
  $(document).keyup(function(e) {
      if (e.key === "Escape") { // escape key maps to keycode `27`
          $(button).removeClass('active')
          $(element).removeClass('active')
      }
  });
}

function closeByOutsideSelect() {
  $(document).click(function(event) {
      if (!$(event.target).closest(`.dropdown-select__list,.dropdown-select__title`).length) {
          $('.dropdown-select__list').hide()
         
      }
  });
  
  $(document).keyup(function(e) {
      if (e.key === "Escape") { // escape key maps to keycode `27`
          $('.dropdown-select__list').hide()
      }
  });
}

/* function productListImgLisder() {
    if ($(window).width() < 1024) {
        $('.productcard__images_mobile .productcard__img').each(function(e) {
          $(this).slick({
              dots: true,
              arrows: false,
              slidesToShow: 1,
              slidesToScroll: 1,
          })
        })
    }
  } */

   
   
window.addEventListener('load', function () {
    initFE()
});


