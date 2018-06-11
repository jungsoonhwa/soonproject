
			
/*서브롤링,탭*/			
		$(function(){
			$('.owl-carousel').owlCarousel({
			    loop:true,
			    autoplay: true,
			    autoplayTimeout: 5000,
			    autoplayHoverPause: true,
			    mouseDrag: false,
			    touchDrag: false,
			    nav: true,
			    dots: true,
			    margin:0,
			    autoWidth: true,
			    items: 1
			});
		
			
		  $(".tab_content").hide();
			$(".tab_content:first").show();

			$("ul.tabs li").click(function () {
				$("ul.tabs li").removeClass("active").css("color", "#666");
				//$(this).addClass("active").css({"color": "darkred","font-weight": "bolder"});
				$(this).addClass("active").css("color", "#fff");
				$(".tab_content").hide()
				var activeTab = $(this).attr("rel");
				$("#" + activeTab).fadeIn()
			});
			/*상품클리후 페이지 전환*/
	//	jQuery(function($){
//			$('.layout-list>div img').click(function() {
//			var openNewWindow = window.open("about:blank");
//			var locationTarget = $(this).parent().parent().find('a').attr('href');
//		openNewWindow.location.href = locationTarget;
//	});
			
//});

/* 카테고리, 찜하기 토글*/
			jQuery(function($){
			$('.nav02>a').click(function(){
				$('.cate_view_all').toggleClass('cate_view_all_open');
			});

	
		$( "div.toggle" ).click(function() {
			  $( this ).toggleClass( "highlight" );
			});
});
/*메인롤링베너 메인*/
	$(window).load(function () {
				$('#JiSlider').JiSlider({color: '#222', start: 1, reverse: true}).addClass('ff')
			})
});

/*lnb 영역 서브메뉴오픈*/	
		$('#subnav2').Z_TMAIL_SIDER_V2();

		
/*drop*/

(function ($) {
    'use strict';

    $.fn.pulldown = function (option) {
        var elm = this,
            options,
            delaySpeed = 100;
			
        options = $.extend({
            slideSpeed:300
        }, option);

        elm.find('ul>li').hover(function () {
			
            $('>ul', $(this))
              .stop(true, false)
              .slideDown(options.slideSpeed);
			 
			  
        }, function (){

            $('>ul', $(this))
              .delay(delaySpeed)
              .slideUp(options.slideSpeed);
        });

      return this;
  }

})(jQuery);


