$(document).ready(function() {

	$(window).load(function() {
		initParallaxImg();
		initCarusel();
		initPrice();
	});

	//приветствие
	greeting_close.onclick = function(){
		$(".greeting").animate({
		    opacity: 'toggle',
		    height: 'toggle',
		}, {
		    duration: 200, 
		    specialEasing: {
		      opacity: 'linear',
		      height: 'swing'
		    }
		});
	};

	// Transition при скроллинге в шапке 
	$(document).scroll(function() {
		if ($(window).scrollTop() > 80) {
			$(".header").addClass("shrink");
			$(".search").addClass("shrink");
		} else {
			$(".header").removeClass("shrink");
			$(".search").removeClass("shrink");
		}
	});

	// parallax в .carousel
	var $parallax = $('.carousel .parallax');
	var gamePach = [];
	var $itemLength = $("div.item_capsul").length;
	var $shopLength = $("div.shop_game_count").length;

	function initParallaxImg() {
		for (var i = 0; i < $itemLength; i++) {
			$(".parallax").append($("<img class=\"para_img\">"));
			gamePach[i] = $(".item_capsul").eq(i).attr("id");
			$(".parallax").find("img").eq(i).attr("src", "img/data_image/" + gamePach[i] + "/paralax_bg.png");
			$(".item_capsul").eq(i).find(".image_game_count").find("img").attr("src", "img/data_image/" + gamePach[i] + "/game_image.jpg");
		}

		$(".parallax").find("img").eq(-1).remove();

		$(document).scroll(function() {
			var $img = $parallax.find('.para_img.focus');
			var imgParentHeight = $parallax.height();
			var imgHeight = $img.height();
			var imgStartPos = parseInt($('.carousel').css('margin-top'));
			var q = (imgParentHeight - imgHeight - 50) / (imgParentHeight + imgStartPos);
			// console.clear();
			// console.log($(window).scrollTop());

			if ($(window).scrollTop() < 460) {
				$img.css({
					top: q * $(window).scrollTop()
				});
			}
		});
	}

	//price
	function initPrice(){
		// -45%-27%-90%-50%
		var color = [];
		price = $(".sale_shop").text();
		j = 1;
		priceNum = [];
		for (var i = 0; i < $shopLength; i++) {
			priceNum[i]=price[j];
			priceNum[i]+=price[j+1];
			j+=4;
			color[i] = (parseInt(priceNum[i], 10) >= 40) ? 'red': 
				(parseInt(priceNum[i], 10) >= 30) ? 'orange' : 'yellow';

			console.log(color[i]);
		}
		$(document).ready(function() {
			$(".shop_game_count").eq(i).find("sale_shop").attr("dawd","dawdawd"); //css({'backgroundColor': color});
		});
	};

	//карусель 
	var roll = 0
	var caruItemsLenght = $("div.item_capsul").length - 1

	$(document).on('click', ".arrow.right", function() {
		var carusel = $(this).parents('.carousel');
		right_carusel(carusel);
		return false;
	});

	$(document).on('click', ".arrow.left", function() {
		var carusel = $(this).parents('.carousel');
		left_carusel(carusel);
		return false;
	});

	//левая
	function left_carusel(carusel) {
		//прокрутка
		roll -= 1;
		if (roll < 0) roll = caruItemsLenght;
		$(carusel).find(".carousel_items .item_capsul").removeClass("focus");
		$(carusel).find(".carousel_items .item_capsul").eq(roll).addClass("focus");
		//фон в parallax
		$(".parallax").find("img").removeClass("focus");
		$(".parallax").find("img").eq(roll).addClass("focus");
		$('.para_img.focus').css("top", "0px");
		//навигация
		$(".carousel_thumbs").find("div").removeClass("focus");
		$(".carousel_thumbs").find("div").eq(roll).addClass("focus");
	}

	//правая
	function right_carusel(carusel) {
		//прокрутка
		roll += 1;
		if (roll > caruItemsLenght) roll = 0;
		$(carusel).find(".carousel_items .item_capsul").removeClass("focus");
		$(carusel).find(".carousel_items .item_capsul").eq(roll).addClass("focus");
		//фон в parallax
		$(".parallax").find("img").removeClass("focus");
		$(".parallax").find("img").eq(roll).addClass("focus");
		$('.para_img.focus').css("top", "0px");
		//навигация
		$(".carousel_thumbs").find("div").removeClass("focus");
		$(".carousel_thumbs").find("div").eq(roll).addClass("focus");
	}

	//навигация
	function initCarusel() {
		for (var i = 0; i < caruItemsLenght + 1; i++) {
			$(".carousel_thumbs").find("div").eq(0).clone().appendTo(".carousel_thumbs");
		}
		$(".carousel_thumbs").find("div").eq(0).remove();
		$(".carousel_thumbs").find("div").eq(0).addClass("focus");

		$(".carousel_thumbs div").hover(function() {
			var idx = $(".carousel_thumbs div").index(this);
			//прокрутка
			  $(".item_capsul").removeClass("focus");
			  $(".item_capsul").eq(idx).addClass("focus");

			//навигация
			  $(".carousel_thumbs").find("div").removeClass("focus");
			  $(".carousel_thumbs").find("div").eq(idx).addClass("focus");

			//фон в parallax
			  $(".parallax").find("img").removeClass("focus");
			  $(".parallax").find("img").eq(idx).addClass("focus");
			  $('.para_img.focus').css("top", "0px");
		});
	};

	// Автоматическая прокрутка
	$(function() {
		auto_right('.carousel:first');
	})

	function auto_right(carusel) {
		setInterval(function() {
			if (!$(carusel).is('.hover'))
				right_carusel(carusel);
		}, 4500)
	}

	$(document).on('mouseenter', '.carousel_container', function() {
		$(".carousel").addClass('hover')
	})
	$(document).on('mouseleave', '.carousel_container', function() {
		$(".carousel").removeClass('hover')
	})

	//Shop>
	$(".shop_game_count").hover(function(){
		$(".shop_game_count").removeClass("focus");
		$(this).addClass("focus");
	}, function(){
		// $(this).removeClass("focus");
	});
	//shop.
});

$(window).load(function() {

	//preloader

});