$(document).ready(function() {

	// $("#portfolio_grid").mixItUp();

	// $(".s_portfolio li").click(function() {
	// 	$(".s_portfolio li").removeClass("active");
	// 	$(this).addClass("active");
	// });

	$(".popup").magnificPopup({
		type: "image"
	});
	$(".popup_content").magnificPopup({
		type: "inline",
		midClick: true
	});

	$(".section_animate").animated("fadeInDown", "fadeOutDown");

	$(".animation_1").animated("flipInY", "fadeOutDown");
	$(".animation_2").animated("rotateInUpRight", "zoomOutLeft");
	$(".animation_3").animated("rotateInUpLeft", "zoomOutRight");

	$(".left .resume_item").animated("zoomInLeft", "fadeOutDown");
	$(".right .resume_item").animated("zoomInRight", "fadeOutDown");

	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	$("input, select, textarea").jqBootstrapValidation();

	$(".top_mnu ul a").mPageScroll2id();
	mineHight = $(window).height();

	//hover requisites
	$(".requisites").hover(
		function() {
			$(this).append($("<span class=\"fadein\"> реквезиты </span>"));
			$(".fadein").animated("fadeIn");
		},
		function() {
			$(".fadein").animated("fadeOutDown", "fadeInDown");
			$(this).find("span:last").remove();
		}
	);
});
$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(0).fadeOut("slow");
	$(".logo").animated("fadeInDown", "fadeOutUp");

});

// GoogleMap API
var map;
var myVar = 0;

function initMap() {
	var myLatlng = {
		lat: 55.544392,
		lng: 37.725466
	};
	var styles = [{
		elementType: 'geometry',
		stylers: [{
			color: '#E7DABA'
		}]
	}, {
		"featureType": "landscape.man_made",
		"elementType": "geometry.stroke",
		"stylers": [{
			"color": "#999999"
		}]
	}, {
		elementType: 'labels.text.fill',
		stylers: [{
			color: '#523735'
		}]
	}, {
		elementType: 'labels.text.stroke',
		stylers: [{
			color: '#f5f1e6'
		}]
	}, {
		featureType: 'administrative',
		elementType: 'geometry.stroke',
		stylers: [{
			color: '#c9b2a6'
		}]
	}, {
		featureType: 'administrative.land_parcel',
		elementType: 'geometry.stroke',
		stylers: [{
			color: '#dcd2be'
		}]
	}, {
		featureType: 'administrative.land_parcel',
		elementType: 'labels.text.fill',
		stylers: [{
			color: '#ae9e90'
		}]
	}, {
		featureType: 'landscape.natural',
		elementType: 'geometry',
		stylers: [{
			color: '#E4D19F'
		}]
	}, {
		featureType: 'poi',
		elementType: 'geometry',
		stylers: [{
			color: '#dfd2ae'
		}]
	}, {
		featureType: 'poi',
		elementType: 'labels.text.fill',
		stylers: [{
			color: '#93817c'
		}]
	}, {
		featureType: 'poi.park',
		elementType: 'geometry.fill',
		stylers: [{
			color: '#66B076'
		}]
	}, {
		featureType: 'poi.park',
		elementType: 'labels.text.fill',
		stylers: [{
			color: '#447530'
		}]
	}, {
		featureType: 'road',
		elementType: 'geometry',
		stylers: [{
			color: '#f5f1e6'
		}]
	}, {
		featureType: 'road.arterial',
		elementType: 'geometry',
		stylers: [{
			color: '#fdfcf8'
		}]
	}, {
		featureType: 'road.highway',
		elementType: 'geometry',
		stylers: [{
			color: '#f8c967'
		}]
	}, {
		featureType: 'road.highway',
		elementType: 'geometry.stroke',
		stylers: [{
			color: '#e9bc62'
		}]
	}, {
		featureType: 'road.highway.controlled_access',
		elementType: 'geometry',
		stylers: [{
			color: '#e98d58'
		}]
	}, {
		featureType: 'road.highway.controlled_access',
		elementType: 'geometry.stroke',
		stylers: [{
			color: '#db8555'
		}]
	}, {
		featureType: 'road.local',
		elementType: 'labels.text.fill',
		stylers: [{
			color: '#806b63'
		}]
	}, {
		featureType: 'transit.line',
		elementType: 'geometry',
		stylers: [{
			color: '#dfd2ae'
		}]
	}, {
		featureType: 'transit.line',
		elementType: 'labels.text.fill',
		stylers: [{
			color: '#8f7d77'
		}]
	}, {
		featureType: 'transit.line',
		elementType: 'labels.text.stroke',
		stylers: [{
			color: '#ebe3cd'
		}]
	}, {
		featureType: 'transit.station',
		elementType: 'geometry',
		stylers: [{
			color: '#dfd2ae'
		}]
	}, {
		featureType: 'water',
		elementType: 'geometry.fill',
		stylers: [{
			color: '#8CD3C2'
		}]
	}, {
		featureType: 'water',
		elementType: 'labels.text.fill',
		stylers: [{
			color: '#92998d'
		}]
	}];

	var styledMap = new google.maps.StyledMapType(styles, {
		name: "Styled Map"
	});

	map = new google.maps.Map(document.getElementById('map'), {
		scrollwheel: false,
		center: myLatlng,
		zoom: 15,
		disableDefaultUI: true,
		zoomControl: true

	});
	var image = 'img/gmarker.png';
	var beachMarker = new google.maps.Marker({

		position: myLatlng,
		map: map,
		icon: image,
		title: 'Click to zoom'

	});
	map.mapTypes.set('map_style', styledMap);
	map.setMapTypeId('map_style');
}
// GoogleMaps API