$("textarea[placeholder]").each(function () {
    $(this).attr("data-placeholder", this.placeholder);

    $(this).bind("focus", function () {
        this.placeholder = '';
    });
    $(this).bind("blur", function () {
        this.placeholder = $(this).attr("data-placeholder");
    });
});

$(document).ready(function () { 
	
	 $('.add-to-carts').on('click', function () {
	    var cart = $('#shopping-cart');
	    var imgtodrag = $("#to-cart-img").eq(0);
	    if (imgtodrag) {
	        var imgclone = imgtodrag.clone()
	            .offset({
	            top: imgtodrag.offset().top,
	            left: imgtodrag.offset().left
	        })
	            .css({
	            'opacity': '0.5',
	                'position': 'absolute',
	                'height': '402px',
	                'width': '402px',
	                'z-index': '9999',
	                'top': '196px'
	        })
	            .appendTo($('#product-modal'))
	            .animate({
	            	'top': "130px",
	                'left': cart.offset().left + 10,
	                'width': 75,
	                'height': 75
	        }, 1000, 'easeInOutExpo');
	 
	        
	 
	            imgclone.animate({
	                'width': 0,
	                'height': 0
	        }, function () {
	            $(this).detach()
	        });
	    }
	});
});



$(document).ready(function () { 
	
	 $('.add-to-cartsy').on('click', function () {
	    var cart = $('#shopping-carty');
	    var imgtodrag = $("#to-cart-img2").eq(0);
	    if (imgtodrag) {
	        var imgclone = imgtodrag.clone()
	            .offset({
	            top: imgtodrag.offset().top,
	            left: imgtodrag.offset().left
	        })
	            .css({
	            'opacity': '0.5',
	                'position': 'absolute',
	                'height': '80px',
	                'width': '80px',
	                'z-index': '9999',
	                'top': '181px'
	        })
	            .appendTo($('#modal-shop-fast'))
	            .animate({
	            	'top': "20px",
	                'left': cart.offset().left + 10,
	                'width': 75,
	                'height': 75
	        }, 1000, 'easeInOutExpo');
	 
	        
	 
	            imgclone.animate({
	                'width': 0,
	                'height': 0
	        }, function () {
	            $(this).detach()
	        });
	    }
	});
});



/**
 * Vertically center Bootstrap 3 modals so they aren't always stuck at the top
 */
$(function() {
    function reposition() {
        var modal = $(this),
            dialog = modal.find('.modal-dialog');
        modal.css('display', 'block');
        
        // Dividing by two centers the modal exactly, but dividing by three 
        // or four works better for larger screens.
        dialog.css("margin-top", Math.max(0, ($(window).height() - dialog.height()) / 2));
    }
    // Reposition when a modal is shown
    $('.modal').on('show.bs.modal', reposition);
    // Reposition when the window is resized
    $(window).on('resize', function() {
        $('.modal:visible').each(reposition);
    });
});





$('.bxslider').bxSlider({
  minSlides: 1,
  maxSlides: 1,
  slideWidth: 1000,
  slideMargin: 10
});




$('.bxslider2').bxSlider({
  pagerCustom: '#bx-pager'
});



$(function(){
    $('.modal-zoom').click(function(){
        $('.box-modal-container').addClass( "arrowss" );
         $('.box-modal-container').removeClass('arrows-no');
         $('html').css("overflow", "hidden");
    });
});

$(function(){
    $('.close-modal').click(function(){
        $('.box-modal-container').addClass( "arrows-no" );
        $('.box-modal-container').removeClass('arrowss');
        $('html').css("overflow", "visible");
    });
});


$(function(){
    $('.image-fly2').click(function(){
        $('.box-modal-container').addClass( "arrowss" );
         $('.box-modal-container').removeClass('arrows-no');
         $('html').css("overflow", "hidden");
    });
});



$(function(){
    $('.a-clicks').click(function(){
        $('.modal-body').addClass( "spda" );
         $('.modal-body').removeClass('spda');
         
           $('html').css("overflow", "hidden");
    });
});





$(function(){

$('.dblb').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#hoverblock').offset().top }, 700);
  e.preventDefault();
});

});


$(function(){

$('.carst-scroll').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#myTabs-scroll').offset().top }, 700);
  e.preventDefault();
});

});






 function displ(ddd) { if (document.getElementById(ddd).style.display == 'none') {document.getElementById(ddd).style.display = 'block'} else {document.getElementById(ddd).style.display = 'none'} }






(function($) {
    $(function() {
      $('input, select').styler({
        selectSearch: true
      });
    });
    })(jQuery);


$(document).ready(function(){
  
   
  $(".show-more").on("click", function() {
    $(this).parent(".show-more-box").find(".show-more-block").css("height", "auto");
    $(this).hide();
  });
  
  $(".fancy-btn").fancybox();
  
  $(".selectbox").styler();

  $(".smooth-scroll").on("click", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 500);
  });
  
  
  $('#two').bind('inview', function(event, visible) {if (visible) { 
    $("[href=#two]").parent("li").addClass("active"); } else { 
      $("[href=#two]").parent("li").removeClass("active"); }});
      
  $('#three').bind('inview', function(event, visible) {if (visible) { 
    $("[href=#three]").parent("li").addClass("active"); } else { 
      $("[href=#three]").parent("li").removeClass("active"); }});
          
  $('#four').bind('inview', function(event, visible) {if (visible) { 
    $("[href=#four]").parent("li").addClass("active"); } else { 
      $("[href=#four]").parent("li").removeClass("active"); }});
          
  $('#five').bind('inview', function(event, visible) {if (visible) { 
    $("[href=#five]").parent("li").addClass("active"); } else { 
      $("[href=#five]").parent("li").removeClass("active"); }});
          
  $('#six').bind('inview', function(event, visible) {if (visible) { 
    $("[href=#six]").parent("li").addClass("active"); } else { 
      $("[href=#six]").parent("li").removeClass("active"); }});
          
  $('#seven').bind('inview', function(event, visible) {if (visible) { 
    $("[href=#seven]").parent("li").addClass("active"); } else { 
      $("[href=#seven]").parent("li").removeClass("active"); }});
      
          
  $('#eight').bind('inview', function(event, visible) {if (visible) { 
    $("[href=#eight]").parent("li").addClass("active"); } else { 
      $("[href=#eight]").parent("li").removeClass("active"); }});
          

  $('#nine').bind('inview', function(event, visible) {if (visible) { 
    $("[href=#nine]").parent("li").addClass("active"); } else { 
      $("[href=#nine]").parent("li").removeClass("active"); }});
          
  
});



$(function(){

$('.nbtn').on('click', function(e){
  $( "#nine" ).addClass( "displb" );
  $('html,body').stop().animate({ scrollTop: $('#nine').offset().top }, 700);
  e.preventDefault();
});

});


$(function(){

$('.dbl').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#hoverblock').offset().top }, 700);
  e.preventDefault();
});

});







$(function(){

$('.vsmodels').on('click', function(e){
  $( "#nine" ).addClass( "displb" );
  $('html,body').stop().animate({ scrollTop: $('#three').offset().top }, 700);
  e.preventDefault();
});

});



window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrolled > 140) {
    $(".fixed-nav").show();
  } else {
    $(".fixed-nav").hide();
  }
};    
  


$(function() {
    $( "#accordion" ).accordion({
      heightStyle: "content"
    });
  });
  
  
  
  

 $(function() {
    $( document ).tooltip({
      position: {
    my: "left center",
        at: "right+5 top-5",
        using: function( position, feedback ) {
          $( this ).css( position );
          $( "<div>" )
            .addClass( "arrow" )
            .addClass( feedback.vertical )
            .addClass( feedback.horizontal )
            .appendTo( this );
        }
      }
    });
  });




$(function(){
    $('.nnn').click(function(){
        $('.swiper-container').addClass( "arrowss" );
         $('.swiper-container').removeClass('arrows-no');
         $('html').css("overflow", "hidden");
    });
});

$(function(){
    $('.closer').click(function(){
        $('.swiper-container').addClass( "arrows-no" );
        $('.swiper-container').removeClass('arrowss');
        $('html').css("overflow", "visible");
    });
});



$(function(){
    $('.closer').click(function(){
        $('.swiper-container3').addClass( "arrows-no" );
        $('.swiper-container3').removeClass('arrowss');
        $('html').css("overflow", "visible");
    });
});




$(function(){
    $('#menu').hover(function(){
        $('.arrow-fxq').hide();
    });
});






$(document).ready(function() {
    $('.single-item').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1

    });
});





 // Как только будет загружен API и готов DOM, выполняем инициализацию
        ymaps.ready(init);

        function init () {
            var myMap = new ymaps.Map("map", {
                    center: [55.6696371, 37.5539116],
                    zoom: 14,
                    controls: ['zoomControl', 'typeSelector',  'fullscreenControl']
                });
                  myMap.behaviors.disable('scrollZoom');


                // Создаем метку и задаем изображение для ее иконки
                myPlacemark = new ymaps.Placemark([55.6696371, 37.5539116], {
                    balloonContent: 'г. Москва, Улица Профсоюзная 65, корпус 1 17342 '
                }, {
                    iconImageHref: 'http://api.yandex.ru/maps/doc/jsapi/2.x/examples/images/myIcon.gif', // картинка иконки
                    iconImageSize: [30, 42], // размеры картинки
                    iconImageOffset: [-3, -42] // смещение картинки
                });


            // Добавление метки на карту
            myMap.geoObjects.add(myPlacemark);
          
        }
        
        
        
        




$(function(){
  $('.thumbnails a').click(function(){                                 // При нажатиина миниатюру
    var images = $(this).find('img');
    var imgSrc = images.attr('src');
 
    $(".big-image img").attr({ src: imgSrc });                         // Подменяем адрес большого изображения на адрес выбранного
    $(this).siblings('a').removeClass('active');                       // Удаляем класс .active со ссылки чтоб убрать рамку
    images.parent().addClass('active');                                // Добавляем класс .active на выбранную миниатюру
    return false;
  });
 
  $('.next').click(function(){                                         // При нажатии на кнопку "вперед"
    var count = $('.thumbnails a').length;                             // Общее количество изображений
    var n = parseInt($('.thumbnails a').index($('.active')) + 1);      // Порядковый номер текущего изображения
    var activeImg = $('.thumbnails .active');                          // Активное на данный момент изображение
    var nextSrc;
 
    if (count != n){                                                   // - Если изображение не последнее
      nextSrc = activeImg.next().find('img').attr('src');              // В переменную записывается адрес следующего изображения
      $('.thumbnails .active').removeClass('active');                  // Удаляется класс .active с предыдущей миниатюры
      activeImg.next().addClass('active');                             // На миниатюру следующего изображения вешается класс .active
    }else{                                                             // - Если текущее изображение последнее в списке
      nextSrc = $('.thumbnails a').first().find('img').attr('src');    // В переменную записывается адрес первого изображения
      $('.thumbnails .active').removeClass('active');                  // Удаляется класс .active с предыдущей миниатюры
      $('.thumbnails a').first().addClass('active');                   // На первую миниатюру вешается класс .active
    }
    $('.big-image img').attr({ src: nextSrc });                        // Подменяем адрес большого изображения на адрес следующего
    return false;
  });
 
 
  $('.prev').click(function(){                                         // При нажатии на кнопку "назад"
    var count = $('.thumbnails a').length;                             // Общее количество изображений
    var n = parseInt($('.thumbnails a').index($('.active')) + 1);      // Порядковый номер текущего изображения
    var activeImg = $('.thumbnails .active');                          // Активное на данный момент изображение
    var prevSrc;
 
    if (n != 1){                                                       // - Если текущее изображение не первое
      prevSrc = activeImg.prev().find('img').attr('src');              // В переменную записывается адрес предыдущего изображения           
      $('.thumbnails .active').removeClass('active');                  // Удаляется класс .active активной до этого миниатюры
      activeImg.prev().addClass('active');                             // На миниатюру изображения слева вешается класс .active
    }else{                                                             // - Если текущее изображение первое
      prevSrc = $('.thumbnails a:last').find('img').attr('src');       // В переменную записывается адрес последнего изображения
      $('.thumbnails .active').removeClass('active');                  // Удаляется класс .active с предыдущей миниатюры
      $('.thumbnails a:last').addClass('active');                      // На последнюю миниатюру вешается класс .active
    }
    $('.big-image img').attr({ src: prevSrc });                        // Подменяется адрес большого изображения на адрес следующего
    return false;
  });
})



  
  
  
jQuery(document).ready(function($){
  // set up the options to be used for jqDock...
  var dockOptions =
    { align: 'top' // horizontal menu, with expansion DOWN from a fixed TOP edge
    , size: 90 //increase 'at rest' size to 60px
    , labels: true  // add labels (defaults to 'br')
    , setLabel: function(txt, i, el){
        //append a clone of the relevant sub-menu to the label, div.jqDockLabel...
        //Note that I don't need to add the inner wrapper - div.jqDockLabelText - 
        //because I can reposition the sub-menus within div.jqDockLabel itself
        $(el).append($('#submenus>li>ul').eq(i).clone(true))
          //...and intercept mousemoves to prevent propagation and stop
          //the dock resizing as the cursor moves over the sub-menus...
          .bind('mousemove', function(){ 
            return false; 
          })
          //put a one-off mouseenter on every sub-menu to (re)set
          //contained anchor widths...
          .find('ul').one('mouseenter', function(){
            $('>li>a', this).each(function(){
                $(this).width($(this).parent().width());
              });
            return false;
          }).end()
          //for this example, put a click handler on every sub-menu anchor
          //that simply toggles a class to change background colour...
          .find('a').click(function(){
            $(this).toggleClass('clicked');
            this.blur();
            return false;
          })
          //put a hover on any sub-menu LI that has a child menu, to show/hide
          //that child menu; and allow mouseleave to propagate up so that coming
          //completely off the sub-menu structure will still collapse the dock...
          .next('ul').parent().hover(function(ev){
            var mLeave = ev.type == 'mouseleave';
            $('>ul', this)[mLeave ? 'hide' : 'show']();
            return mLeave;
          })
          //add a visual indicator that a child menu exists...
          .find('>a').append("<"+"img src='images/submenu.gif' alt='' />");
        return false;
      }
    };
  // ...and apply...
  $('#menu').jqDock(dockOptions);
});



window.onload=function(){
$('.demo').css("display", "block");
}






  $(document).ready(function() {
  
      // Change title type, overlay closing speed
      $(".fancybox").fancybox({
        helpers: {
          title : {
            type : 'outside'
          },
          overlay : {
            speedOut : 0
          }
        }
      });



    });
    
    
    
    


$('.dvedk a').on( 'click', function() {
     var id = $(this).attr('data-tab-destination');
  
        $('.drbl a[href="#'+id+'"]').click();
    });




$(document).ready(function(){
$(".ss2").click(function () {
  $('html, body').animate({scrollTop:0}, '');
});

});







$(document).ready(function() {
    $('.single-item').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $('.multiple-items').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    });
    $('.variable-width').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
    });
    $('.data').slick();
    $('.one-time').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true
    });
    $('.uneven').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
    });
    $('.responsive').slick({
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    $('.center').slick({
        centerMode: true,
        infinite: true,
        centerPadding: '60px',
        slidesToShow: 3,
        speed: 500,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }]
    });
    $('.lazy').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500
    });
    $('.autoplay').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    });

    $('.fade').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        slide: 'div',
        cssEase: 'linear'
    });

    $('.add-remove').slick({
        dots: true,
        slidesToShow: 3,
        speed: 500,
        slidesToScroll: 3
    });
    var slideIndex = 1;
    $('.js-add-slide').on('click', function() {
        slideIndex++;
        $('.add-remove').slick('slickAdd','<div><h3>' + slideIndex + '</h3></div>');
    });

    $('.js-remove-slide').on('click', function() {
        $('.add-remove').slick('slickRemove',slideIndex - 1);
        if (slideIndex !== 0){
            slideIndex--;
        }
    });

    $('.filtering').slick({
        dots: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
    });
    var filtered = false;
    $('.js-filter').on('click', function() {
        if (filtered === false) {
            $('.filtering').slick('slickFilter',':even');
            $(this).text('Unfilter Slides');
            filtered = true;
        } else {
            $('.filtering').slick('slickUnfilter');
            $(this).text('Filter Slides');
            filtered = false;
        }
    });

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
   $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
      
        variableWidth: true,
        speed: 500,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        slide: 'div'
    });


     $('.slider-for2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        arrows: true,
        fade: true,
        asNavFor: '.slider-nav2'
    });
    $('.slider-nav2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
      
        variableWidth: true,
        speed: 500,
        asNavFor: '.slider-for2',
        dots: true,
        centerMode: false,
        focusOnSelect: true,
        slide: 'div'
    });


    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 166) {
            $('.fixed-header').show();
        } else {
            $('.fixed-header').hide();
        }
    });

    $('ul.nav a').on('click', function(event) {
        event.preventDefault();
        var targetID = $(this).attr('href');
        var targetST = $(targetID).offset().top - 48;
        $('body, html').animate({
            scrollTop: targetST + 'px'
        }, 300);
    });

    $('.single-item-rtl').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        rtl: true
    });
    $('.multiple-items-rtl').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        speed: 500,
        slidesToScroll: 3,
        rtl: true
    });
    
  
    

});


 $(document).ready(function () {
 $('input,textarea').focus(function(){
   $(this).data('placeholder',$(this).attr('placeholder'))
   $(this).attr('placeholder','');
 });
 $('input,textarea').blur(function(){
   $(this).attr('placeholder',$(this).data('placeholder'));
 });
 });


function displ(ddd) { if (document.getElementById(ddd).style.display == 'none') {document.getElementById(ddd).style.display = 'block'} else {document.getElementById(ddd).style.display = 'none'} }



$(document).ready(function() {
	//Tooltips
	$(".tip_trigger").hover(function(){
		tip = $(this).find('.tip');
		tip.show(); //Show tooltip
	}, function() {
		tip.hide(); //Hide tooltip		  
	}).mousemove(function(e) {
		var mousex = e.pageX + 20; //Get X coodrinates
		var mousey = e.pageY + 20; //Get Y coordinates
		var tipWidth = tip.width(); //Find width of tooltip
		var tipHeight = tip.height(); //Find height of tooltip
		
		//Distance of element from the right edge of viewport
		var tipVisX = $(window).width() - (mousex + tipWidth);
		//Distance of element from the bottom of viewport
		var tipVisY = $(window).height() - (mousey + tipHeight);
		  
		if ( tipVisX < 20 ) { //If tooltip exceeds the X coordinate of viewport
			mousex = e.pageX - tipWidth - 20;
		} if ( tipVisY < 20 ) { //If tooltip exceeds the Y coordinate of viewport
			mousey = e.pageY - tipHeight - 20;
		} 
		tip.css({  top: mousey, left: mousex });
	});
});
