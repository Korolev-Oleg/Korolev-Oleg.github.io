$(document).ready(function(){
  $("#item-ask").submit(function(){
    var _form = $(this);
    $.post( _form.attr("action"), _form.serialize(), function(data){
        $("#tabs-1").html(data);
    } );
    return false;
  });

  $("input[name='add']").remove();

  $(".item-unavailable").hide();

  /* товар в корзину */
  $(".send-to-basket").submit(function(){
      var _form = $(this);
      var basket_y = Math.ceil($("#cart-block").offset().top)+'px';
      var basket_x = Math.ceil($("#cart-block").offset().left)+'px';

      var item_id = $("#item-pic-"+ $(this).attr("itemid"));

      $(item_id)
              .clone()
              .css({'position' : 'absolute', 'z-index' : '100', top: Math.ceil($(item_id).offset().top)+'px', left: Math.ceil($(item_id).offset().left)+'px'})
              .appendTo($(this))
              .animate({opacity: 0.5,
                        top: basket_y,
                        left: basket_x,
                        width: 50,
                        height: 50}, 700, function() {
                    $(this).remove();
              });

      $.post("netcat/modules/default/ajaxbasket.html", _form.serialize(), function(data){
          $("#cart-open-body").html( data.content );
          set_cart_block_count(data.total);
          $("#button-send-basket").text("В корзине");
      }, "json");

      return false;
  });


  /* очистить корзину */
  $("body").on("click", "#clear-cart-button", function(){
       $.post("netcat/modules/default/ajaxbasket.html", {cart_clear: 1}, function(data){
           $("#cart-open-body").html( data.content );
           set_cart_block_count(data.total);
       }, "json");
       return false;
  });

  /* удалить товар  */
  $("body").on("click", ".cart-item-delete", function(){
       var cart = $(this).attr("cart");
       $.post("netcat/modules/default/ajaxbasket.html", cart +"=0", function(data){
           $("#cart-open-body").html( data.content );
           set_cart_block_count(data.total);
       }, "json");
       return false;
  });


  /* изменения кол-ва товара в корзине */
  $("body").on("keyup", ".cart-qty", function(){
       $.post("netcat/modules/default/ajaxbasket.html", $(this).attr("name") +"="+ $(this).val(), function(data){
           $("#cart-open-body").html( data.content );
           set_cart_block_count(data.total);
       }, "json");
       return false;
  });

  // проверка оформления заказа
  $("#order-form").submit(function(){
      var _form = $(this);
      var _contactname = _form.find("input[name='f_ContactName']");
      var _phone       = _form.find("input[name='f_Phone']");
      var _email       = _form.find("input[name='f_Email']");
      var _adress      = _form.find("input[name='f_Address']");

      var _errblock = $("#err-msg");
      var _errblock_text = _errblock.find("span");

      // Оплата
      if ( $("input[name='f_PaymentMethod']:checked", _form ).size() < 1){
          _errblock_text.text('Выберите способ оплаты');
          _errblock.addClass("err-show");
          return false;
      }

      // Доставка
      if ($("input[name='f_DeliveryMethod']:checked", _form ).size() < 1){
          _errblock_text.text('Выберите способ доставки');
          _errblock.addClass("err-show");
          return false;
      }

      // Имя
      if (_contactname.val().length < 1){
          _contactname.addClass("error-field");
          _errblock_text.text('Укажите Ваше имя');
          _errblock.addClass("err-show");
          _contactname.on("focus", function(){
              _contactname.removeClass("error-field");
              _errblock.removeClass("err-show");
          });
          return false;
      }

      // Email
      if ( !isEmail( _email.val() )){
          _email.addClass("error-field");
          _errblock_text.text('Укажите корректный E-mail');
          _errblock.addClass("err-show");
          _email.on("focus", function(){
              _email.removeClass("error-field");
              _errblock.removeClass("err-show");
          });
          return false;
      }

      // Phone
      if ( _phone.val().length < 1){
          _phone.addClass("error-field");
          _errblock_text.text('Укажите Ваш телефон');
          _errblock.addClass("err-show");
          _phone.on("focus", function(){
              _phone.removeClass("error-field");
              _errblock.removeClass("err-show");
          });
          return false;
      }

      // Доставка курьером - обязательно спросим адрес
      var _delivery_id = $("input[name='f_DeliveryMethod']:checked", _form ).val();
      if ((_delivery_id == 1 || _delivery_id == 3) && _adress.val().length < 3){
          _errblock_text.text('Укажите адрес доставки');
          _errblock.addClass("err-show");

          _adress.addClass("error-field");
          _adress.on("focus", function(){
              _adress.removeClass("error-field");
              _errblock.removeClass("err-show");
          });
          return false;
      }

  });


  // если самовывоз - скрываем поле адреса
  $(".delivery-methods").on("change", "input[name='f_DeliveryMethod']", function(){
      if ( $(this).val() == 2 )
        $("#adress-delivery-block").hide();
      else
        $("#adress-delivery-block").show();
  });


  // активация fancybox
//   $(".fancy").fancybox({
// 		maxWidth	: 800,
// 		fitToView	: false,
// 		width		: '70%',
//         height		: '70%',
// 		autoSize	: false,
// 		closeClick	: false,
// 		openEffect	: 'none',
// 		closeEffect	: 'none'
// 	});

//     $(".fancy-item").fancybox();

// });

function set_cart_block_count(total){
    $("#cart-block-count").text(total);

    if (total > 0){
        $("#cart-block-count").removeAttr("style");
    } else {
        $("#cart-block-count").hide();
    }
}

function isEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

