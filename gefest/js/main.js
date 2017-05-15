$(document).ready(function() {

	$(".cabinet-page form .show-llc").click(function(){
    	$(".cabinet-page form .llc-data").toggleClass("hidden");
	});

	$(".top-header .top-menu .cart").mouseover(function(){
		$(".top-header .top-menu .cart .has-items").css("background-color", "#303030");
	});

	$(".top-header .top-menu .cart").mouseleave(function(){
		if ($(this).not("active")){$(".top-header .top-menu .cart .has-items").css("background-color", "#1673C0")};
		if ($(this).hasClass("active")){$(".top-header .top-menu .cart .has-items").css("background-color", "#303030")};
	});


	$('.payment-methods .non-cash-payment').click(function(){
		if($('input').is(':checked')) {
	        $(".for-llc").removeClass("hidden");
	        $(this).css("background-color","#0088cc");
	        $('.payment-methods label input:not(:checked)').parent().css("background-color","#f2f2f2");
	    }
    });

    $('.payment-methods .cash-payment').click(function(){
        if($('input').is(':checked')) {
            $(this).css("background-color","#0088cc");
            $('.payment-methods label input:not(:checked)').parent().css("background-color","#f2f2f2");
            $(".for-llc").addClass("hidden");
        }
    });


    $('.delivery-methods label').click(function(){
        if(!$(this).hasClass('no-click') ) {
        if($('input').is(':checked')) {
            $(this).css("background-color","#0088cc");
            $(this).children().css("color","#fff");
            $('.delivery-methods label input:not(:checked)').parent().css("background-color","#f2f2f2");
            $('.delivery-methods label input:not(:checked)').parent().children().css("color","#303030");
        }
        }
    });

	$('.menu-icon').click(function() {
		$('.big-menu ').slideToggle('fast');
		// var dermo =( $('li').hasClass('active big-menu') );
		 $('active big-menu').css("margin-top: -12px;");
	});

	$('.device-change .header').click(function(){
		$('.device-change ul li + li').slideToggle('fast');
	});

	$('.parts-change .header').click(function(){
		$('.parts-change ul li + li').slideToggle('fast');
	});

	$('body').click(function(event){
		if ($(event.target).closest('.search-form').length === 0) {
			$('.search-form').slideUp('fast');
			if ($('.search').hasClass('active')) $('.search').toggleClass('active');
		}
		if ($(event.target).closest('.profile-open').length === 0)  {
			$('.profile-open').fadeOut('fast');
			if ($('.profile').hasClass('active')) $('.profile').toggleClass('active');
		}
		if ($(event.target).closest('.cart-open').length === 0)  {
			$('.cart-open').fadeOut('fast');
			if ($('.cart').hasClass('active')) {
				$('.cart').toggleClass('active');
				$(".top-header .top-menu .cart .has-items").css("background-color", "#1673C0");
			};
		}
	});

	$('.main-menu .search').click(function(){
		$('.search-form').slideToggle('fast');
		$(this).toggleClass('active');
		$('.search-form input').focus();
		if ($('.profile').hasClass('active')) {
			$('.profile').toggleClass('active');
			$('.profile-open').fadeToggle('fast');
		};
		if ($('.cart').hasClass('active')) {
			$('.cart').toggleClass('active');
			$('.cart-open').fadeToggle('fast');
		};
		return false;
	});

	$('.main-menu .profile').click(function(){
		$('.profile-open').fadeToggle('fast');
		$(this).toggleClass('active');
		$('.input-login').focus();
		if ($('.search').hasClass('active')) {
			$('.search').toggleClass('active');
			$('.search-form').slideToggle('fast');
		};
		if ($('.cart').hasClass('active')) {
			$('.cart').toggleClass('active');
			$('.cart-open').fadeToggle('fast');
		};
		return false;
	});

	$('.main-menu .cart').click(function(){
		$('.cart-open').fadeToggle('fast');
		$(this).toggleClass('active');
		if ($('.search').hasClass('active')) {
			$('.search').toggleClass('active');
			$('.search-form').slideToggle('fast');
		};
		if ($('.profile').hasClass('active')) {
			$('.profile').toggleClass('active');
			$('.profile-open').fadeToggle('fast');
		};
		return false;
	});

	$('.show-info a').click(function(){
		$(this).parent().siblings('.hidden').slideToggle('fast');
		$(this).siblings('.fa').toggleClass('openClosed');
	});

	// $(function() {
	// 	$('#slides').slidesjs({
	// 		width: 460,
	// 		height: 340,
	// 		play: {
	// 			active: true,
	// 			auto: true,
	// 			interval: 4000,
	// 			swap: true
	// 		}
	// 	});
	// });

	// $(function() {
	// 	$( "#tabs" ).tabs();
	// });

    //скроллим наверх по клику на кнопку
    $('#scrollup').mouseover(function(){
        $(this).animate({opacity: 0.9},100);
    }).mouseout(function(){
        $(this).animate({opacity: 1},100);
    }).click(function(){
        window.scroll(0 ,0); 
        return false;
    });

    $(window).scroll(function(){
        if (($(document).scrollTop() > 0) && ($(document).width() > 1020))  {
            $('#scrollup').fadeIn('fast');
        } else {
            $('#scrollup').fadeOut('fast');
        }
    });
});