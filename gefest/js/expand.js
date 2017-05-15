$(function(){

	var _window = $(".models"),
		_item = $(".model", _window),
		_itemWidth = _item.outerWidth(true),
		oScripts = {
			lastItem: function(){
				var _windowWidth = _window.width(),
					_eq = Math.floor(_windowWidth/_itemWidth);

				_item.removeClass("last");
				if($(".models").length>0){
					$(".models .model:nth-child(" + _eq + "n + " + _eq + ")").addClass("last");
				}
				//$(".models .model:nth-child()").addClass("last");
			},
			destroyExpanded: function(){
				$(".expanded", ".models").remove();
			}
		}

	_item.on("click", function(){
		if( $(this).hasClass("expanded") ) return;

		oScripts.destroyExpanded();

		var _windowWidth = _window.width(),
			_eq = Math.floor(_windowWidth/_itemWidth),
			_expandedMargin = (_windowWidth - _eq * _itemWidth) + 20,

			_that = $(this),
			_insertPos = _that.nextAll(".model.last:first"),
			_expanded = $("<div class='expanded' style='margin-right: " + _expandedMargin + "px;'>" + _that.find(".hidden").html() + "</div>");

		_that.addClass("active").siblings().removeClass("active");

		if ( _that.hasClass("last") || _that.index() == (parseInt(_item.length) - 1).toString() ){
			_expanded.insertAfter(_that);
		} else {
			if ( _insertPos.length ){
				_expanded.insertAfter(_insertPos);
			} else {
				_expanded.insertAfter(_item.last());
			}
		}
	});

	$(window).on("resize", function(){
		oScripts.destroyExpanded();
		oScripts.lastItem();
	}).trigger("resize");

});