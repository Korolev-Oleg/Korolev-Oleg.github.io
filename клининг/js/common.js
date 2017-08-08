$(document).ready(function() {

	//parallax
	$(document).scroll(function(){
		$(".city").css({
			top: $(window).scrollTop()/2.8
		});
		$(".clouds").css({
			top: ($(window).scrollTop()/4)+141
		});
	});

	//resize header
	function heightDetect() {
		$(".main_head").css("height", $(window).height());
		$(".city").css("height", $(window).height()-24);
		$(".clouds").css("height", $(window).height());
	};

	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	//animation
	$(".anim1").animated("bounceIn", "fadeOutDown");
	$(".top_text").animated("fadeInLeft");

	// service hover price
	$(".service").hover(
		function(){
			$(this).find('.descr').css({height: 66});
		}, function() {
			$(this).find('.descr').css({height: 33});
		}
	);
});
$(window).load(function() {

	$(".loader").delay(200).fadeOut("slow");
	$(".loader_inner").delay(400).fadeOut();

	$(".logo").animated("jello", "fadeOutUp");
});