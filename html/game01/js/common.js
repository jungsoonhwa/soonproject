$(document).ready(function(){
	$("#demosMenu").change(function(){
	  window.location.href = $(this).find("option:selected").attr("id") + '.html';
	});
});







		$(document).ready(function() {
			$('#fullpage').fullpage({
				//sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff', '#cc0dff'],
				anchors: ['section00','section01', 'section02','section03'],
				menu: '#menu',
			});

			    $('.bxslider').bxSlider({
              auto: true,
              pause: 7000,
              speed: 600
            });
            

		});

  





$(document).ready(function(){			
            
            $("#btn_app").click(function(){
            });
            
            $(".play_mv_pop").click(function(){
                
                  $("#mv_frame").attr("src","https://www.youtube.com/embed/CvtZylX_Fos?controls=0&amp;showinfo=0&autoplay=1&hl=ko_KR&wmode=opaque&rel=0&autohide=1");
                $("#movie_view").fadeIn(); 
            });
            
            $("#mv_pop_close").click(function(){
                $("#mv_frame").attr("src","");
                $("#movie_view").fadeOut(); 
            });
          
var slider = $("div#mySliderTabs").sliderTabs({
  autoplay: false,
  mousewheel: false,
  tabHeight:70,
});
var demo = $("div#demoSlider").sliderTabs({
  indicators: false,
  panelArrows: true,
  panelArrowsShowOnHover: false,
  tabs: true,
  classes: {
    panel: 'demoPanel'
  }
});
});


$(function(){
     $('.open-pop1').click(function(){
	$(' .layerPop1').show();
     });
     //닫기 버튼을 눌렀을 때
     $('.layerPop1 .close').click(function () {	       
	$('.layerPop1').hide();
     });
     $('.open-pop2').click(function(){
	$(' .layerPop2').show();
     });
     //닫기 버튼을 눌렀을 때
     $('.layerPop2 .close').click(function () {	       
	$('.layerPop2').hide();
     });
	
	     $('.open-pop3').click(function(){
	$(' .layerPop3').show();
     });
     //닫기 버튼을 눌렀을 때
     $('.layerPop3 .close').click(function () {	       
	$('.layerPop3').hide();
     });
     $('.open-pop4').click(function(){
	$(' .layerPop4').show();
     });
     //닫기 버튼을 눌렀을 때
     $('.layerPop4 .close').click(function () {	       
	$('.layerPop4').hide();
     });
	      $('.open-pop5').click(function(){
	$(' .layerPop5').show();
     });
     //닫기 버튼을 눌렀을 때
     $('.layerPop5 .close').click(function () {	       
	$('.layerPop5').hide();
     });
     $('.open-pop6').click(function(){
	$(' .layerPop6').show();
     });
     //닫기 버튼을 눌렀을 때
     $('.layerPop6 .close').click(function () {	       
	$('.layerPop6').hide();
     });
	      $('.open-pop7').click(function(){
	$(' .layerPop7').show();
     });
     //닫기 버튼을 눌렀을 때
     $('.layerPop7 .close').click(function () {	       
	$('.layerPop7').hide();
     });
   
});


jQuery(function($){
	
	// Common
	var select_root = $('div.select');
	var select_value = $('.my_value');
	var select_a = $('div.select>ul>li>a');
	var select_input = $('div.select>ul>li>input[type=radio]');
	var select_label = $('div.select>ul>li>label');
	
	// Radio Default Value
	$('div.my_value').each(function(){
		var default_value = $(this).next('.i_list').find('input[checked]').next('label').text();
		$(this).append(default_value);
	});
	
	// Line
	select_value.bind('focusin',function(){$(this).addClass('outLine')});
	select_value.bind('focusout',function(){$(this).removeClass('outLine')});
	select_input.bind('focusin',function(){$(this).parents('div.select').children('div.my_value').addClass('outLine')});
	select_input.bind('focusout',function(){$(this).parents('div.select').children('div.my_value').removeClass('outLine')});
	
	// Show
	function show_option(){
		$(this).parents('div.select:first').toggleClass('open');
	}
	
	// Hover
	function i_hover(){
		$(this).parents('ul:first').children('li').removeClass('hover');
		$(this).parents('li:first').toggleClass('hover');
	}
	
	// Hide
	function hide_option(){
		var t = $(this);
		setTimeout(function(){
			t.parents('div.select:first').removeClass('open');
		}, 1);
	}
	
	// Set Input
	function set_label(){
		var v = $(this).next('label').text();
		$(this).parents('ul:first').prev('.my_value').text('').append(v);
		$(this).parents('ul:first').prev('.my_value').addClass('selected');
	}
	
	// Set Anchor
	function set_anchor(){
		var v = $(this).text();
		$(this).parents('ul:first').prev('.my_value').text('').append(v);
		$(this).parents('ul:first').prev('.my_value').addClass('selected');
	}

	// Anchor Focus Out
	$('*:not("div.select a")').focus(function(){
		$('.a_list').parent('.select').removeClass('open');
	});
			
	select_value.click(show_option);
	select_root.removeClass('open');
	select_root.mouseleave(function(){$(this).removeClass('open')});
	select_a.click(set_anchor).click(hide_option).focus(i_hover).hover(i_hover);
	select_input.change(set_label).focus(set_label);
	select_label.hover(i_hover).click(hide_option);
	
});
