<!-- 
/**
*		JQuery 파일
*/

var interval_index = 1;
function fadein(mode){
	$(".visual_interval"+interval_index).hide();
	if(mode=="prev"){
		interval_index--;
	} else if(mode=="next"){
		interval_index++;
	}

	if(interval_index<1){
		interval_index="4";
	}
	if(interval_index>"4"){interval_index="1";}
	$(".visual_interval"+interval_index).fadeIn(500);
}



//$(window).resize(function(){
//	/**
//	*		viewport
//	*/
//	var max_width;  //메인 서브 구별 너비
//	if($("#areaBox").length >0){ max_width=490; }
//	else { max_width = 460; }
//	var size = ($(window).width()/max_width)-0.1;
//	if($(window).width() <(max_width+1)){
//		$("#viewport").attr('content',"width=device-width, maximum-scale=1.0, minimum-scale="+size.toFixed(2)+", user-scalable=yes, initial-scale="+size.toFixed(2));
//	} else {
//		$("#viewport").attr('content',"width=device-width, maximum-scale=1.0, minimum-scale=1.0, user-scalable=yes, initial-scale=1.0");
//	}
//});

$(document).ready(function() {

	
	
	/**
	*		viewport
	*/
	var max_width; //메인 서브 구별 너비
	if($("#areaBox").length >0){ max_width=490; }
	else { max_width = 460; }
	var UserAgent = navigator.userAgent;
	if (UserAgent.match(/iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || UserAgent.match(/LG|SAMSUNG|Samsung/) != null)
	{
		if($(window).width() <(max_width+1)){
				sizez = ($(window).width()/max_width)-0.1;
				$("#viewport").attr('content',"width=device-width, maximum-scale=1.0, minimum-scale="+sizez.toFixed(2)+", user-scalable=yes, initial-scale="+sizez.toFixed(2));
			} else {
				sizez = (max_width/$(window).width())-0.2;
				$("#viewport").attr('content',"width=device-width, maximum-scale=1.0, minimum-scale="+sizez.toFixed(2)+", user-scalable=yes, initial-scale="+sizez.toFixed(2));alert(size);
			}
			
	}




	/**
	*		메뉴
	*/
	var allNav = false;
	var channelNav = false;
	var navMenu=false;
	var menuPrev, menuShow=false, menuIndex;
	var mobileProduct=false;
	//전체메뉴
	$(".allMenu_btn, .closeMenu_btn").click(function(){
		if(!allNav){
			$(".all_nav").removeClass("allNav_off");
			$(".allMenu_btn").hide();
			$(".closeMenu_btn").show();
			$(".all_nav").slideDown(function(){
				$(".all_nav").addClass("allNav_on");
			});
			allNav=true;
		} else {
			$(".all_nav").removeClass("allNav_on");
			$(".closeMenu_btn").hide();
			$(".allMenu_btn").show();
			$(".all_nav").slideUp(function(){
				$(".all_nav").addClass("allNav_off");
			});
			allNav=false;
		}
	});

	//채널
	$(".channel_open, .channel_close").click(function(){
		if(!channelNav){
			$(".channel_box").removeClass("channel_off");
			$(".channel_box").addClass("channel_on");
			channelNav = true;
		} else {
			$(".channel_box").removeClass("channel_on");
			$(".channel_box").addClass("channel_off");
			channelNav=false;
		}
	});

	$(window).resize(function(){
		if($(".nav_btn").css("display") !="none"){
			$("#depth01>li:eq("+menuIndex+")>ul>li>ul").each(function() {
				$(this).hide();
			});
		} else {
			$("#depth01>li:eq("+menuIndex+")>ul").children().children().each(function() {
				$(this).show();
				mobileProduct=false;
			});
		}
	}).resize();

	//gnb영역
	$(".depth01>li>strong>a").click(function(){
		menuIndex=$(this).parent().parent().index();
		$.menuShows();
	});

	//product mobile 메뉴
	$(".depth01>li>ul>li").click(function(){
		if($(".nav_btn").css("display") !="none"){
			if($(this).parent().index()==1){
				if($(this).find("ul").css("display") =="none"){
					$(this).find("ul").slideDown();
					mobileProduct=true;
				} else {
//					$(this).find("ul").hide();
					mobileProduct=false;
				}
			}
		}
	});

	//mobile gnb영역
	$(".nav_open, .nav_close").click(function(){
		if(!navMenu){
			$("#gnb nav").removeClass("nav_off");
			$("#gnb nav").addClass("nav_on");
			navMenu = true;
		} else {
			$("#gnb nav").removeClass("nav_on");
			$("#gnb nav").addClass("nav_off");
			navMenu=false;
		}
	});

	$.menuShows = function(){
		$('#depth01>li').each(function() {
			$("#depth01>li:eq("+$(this).index()+")").removeClass();
			$("#depth01>li:eq("+$(this).index()+")").addClass("off");
			$("#depth01>li:eq("+$(this).index()+")>ul").hide();
		});
		if(menuPrev != menuIndex){
			$("#depth01>li:eq("+menuIndex+")").removeClass("off");
			$("#depth01>li:eq("+menuIndex+")").addClass("on");
//			if(menuIndex==1){ //Product일때만 2차 하위
//				if($(".nav_btn").css("display") !="none"){
//					$("#depth01>li:eq("+menuIndex+")>ul>li>ul").each(function() {
//						$(this).hide();
//					});
//				} else {
//					$("#depth01>li:eq("+menuIndex+")>ul").children().children().each(function() {
//						$(this).show();
//					});
//				}
//				$(".product").slideDown();
//			} else {
				$("#depth01>li:eq("+menuIndex+") ul").slideDown();
			//}
			menuPrev = menuIndex;
		} else {
			menuPrev=null;
		}
	};





	/**
	*		index
	*/
	// 비쥬얼
//
	var main_interval = setInterval("fadein('next')",4000);
//
	$("#visual_interval1 div .prev, #visual_interval2 div .prev, #visual_interval3 div .prev ,#visual_interval4 div .prev").click(function(){
		clearInterval(main_interval);
		fadein('prev');
		main_interval = setInterval("fadein('prev')",4000);
	});
	$("#visual_interval1 div .next, #visual_interval2 div .next, #visual_interval3 div .next, #visual_interval4 div .next").click(function(){
		clearInterval(main_interval);
		fadein('next');
		main_interval = setInterval("fadein('next')",4000);
	});


	


	/**
	*		Cooking
	*/
	// How to cut
	c=1;
	$('.cut_tab > li').each(function(index){
		$(this).click(function(){
			$('.cut_tab > li > a').removeClass('on');
			$(this).find('a').attr('class','on');
			var i=$(this).index()+1;
			$("#menu0"+c).css('display','none');
			$("#menu0"+i).css('display','block');
			c=i;
		});
	});

	var tab_index = 0;
	var pr=5;

	//레시피 
	var recipe_arr = ["stuff", "kind", "season", "situation", "diff"];
	if($(".fruit_cata").length >0){
		var recipe_get = decodeURIComponent((new RegExp('[?|&]key=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'));

		if(recipe_get == "food_fruit"){
			tab_index = 0;
		} else if(recipe_get == "food_type"){
			tab_index = 1;
		} else if(recipe_get == "food_season"){
			tab_index = 2;
		} else if(recipe_get == "food_state"){
			tab_index = 3;
		} else if(recipe_get == "food_difficulty"){
			tab_index = 4;
		} else{
			tab_index = 0;
		}
	}
	
	mpr=[2,2,2,2,2];
	//과일, 채소레시피 mobile next
	$(".ty_mobile > .next").click(function(){
//		li_v=$(".ty_mobile > ul:eq("+tab_index+") > li").eq(0);
//		$(".ty_mobile > ul:eq("+tab_index+")").append(li_v);

		if($(".ty_mobile > ul:eq("+tab_index+") > li").size() > mpr[tab_index]){
			for(i=0;i<mpr[tab_index] ;i++ ){
				$(".ty_mobile > ul:eq("+tab_index+") > li").eq(i).css('display','none');
			}
			for(n=mpr[tab_index];n<$(".ty_mobile > ul:eq("+tab_index+") > li").size() ;n++ ){
				$(".ty_mobile > ul:eq("+tab_index+") > li").eq(n).css('display','block');
			}
			mpr[tab_index]+=2;
		}
	});

	
	//과일, 채소레시피 mobile prev
	$(".ty_mobile > .prev").click(function(){
//		li_v=$(".ty_mobile > ul > li").eq($(".ty_mobile > ul:eq("+tab_index+") > li").size()-1);
//		$(".ty_mobile > ul:eq("+tab_index+")").prepend(li_v);

		if(mpr[tab_index]>2){
			n=mpr[tab_index]-2;
			for(y=n;y<mpr[tab_index] ;y++ ){
				$(".ty_mobile > ul:eq("+tab_index+") > li").eq(y).css('display','none');
			}
			for(r=n-2;r<n ;r++ ){
				$(".ty_mobile > ul:eq("+tab_index+") > li").eq(r).css('display','block');
			}
			mpr[tab_index]=n;
		}

	});

	
	//과일, 채소이야기 web prev
	$(".ty_web > .prev").click(function(){
		if(pr>5){
			n=pr-5;
			for(y=n;y<pr ;y++ ){
				$('.ty_web > ul:eq('+tab_index+') > li').eq(y).css('display','none');
			}
			for(r=n-5;r<n ;r++ ){
				$('.ty_web > ul:eq('+tab_index+') > li').eq(r).css('display','block');
			}
			pr=n;
		}
	});

		//과일, 채소이야기 web next
	$(".ty_web > .next").click(function(){
		if($('.ty_web > ul:eq('+tab_index+') > li').size() > pr){
			for(i=0;i<pr ;i++ ){
				$('.ty_web > ul:eq('+tab_index+') > li').eq(i).css('display','none');
			}
			for(n=pr;n<$('.ty_web > ul:eq('+tab_index+') > li').size() ;n++ ){
				$('.ty_web > ul:eq('+tab_index+') > li').eq(n).css('display','block');
			}
			pr+=5;
		}
	});

	//과일, 채소레시피 탭
	$(".fruit_cata li").click(function(){

		$(".fruit_cata li a").each(function(){
			$(this).removeClass();
		})
		$(this).find("a").addClass("on");
	
		if($("#tab_mobile").css("display")=="none"){
			$("#tab_web").removeClass(recipe_arr[tab_index]);
			$("#tab_web ul:eq("+tab_index+")").hide();
			tab_index = $(this).index();
			$("#tab_web").addClass(recipe_arr[tab_index]);
			$("#tab_web ul:eq("+tab_index+")").show();
		} else {
			$("#tab_mobile").removeClass(recipe_arr[tab_index]);
			$("#tab_mobile ul:eq("+tab_index+")").hide();
			tab_index = $(this).index();
			$("#tab_mobile").addClass(recipe_arr[tab_index]);
			$("#tab_mobile ul:eq("+tab_index+")").show();
		}
	
	})



	/**
	*		Campaign
	*/
	// 굿모닝 바나나 참여하기
	$('#pop_open3').click(function(){
		$('#Query').val("re_insert");
		$('#Ridx').val("");
		$('#page').val("");
		$('#bana_content').html("");
		$('#sns').find('span').filter('.fb_on').attr('class','fb');
		$('#sns').find('span').filter('.tw_on').attr('class','tw');
		$('#sns').find('span').filter('.do_on').attr('class','do');
		$('#pop_v3').jqm().jqmShow();
	});
	$('#pop_close3').click(function(){
		$('#pop_v3').jqm().jqmHide();
	});
	// 참여하기 등록시 페이스북 로그인 되있을때 페이스북 아이콘선택
	$('#fb_rcom_ck2').click(function(){
		$('#sns').find('span').filter('.tw_on').attr('class','tw');
		$('#sns').find('span').filter('.do_on').attr('class','do');
		$('#sns').find('span').filter('.fb').attr('class','fb_on');
		$('#fb_tw').val('fb');
	});
	// 참여하기 등록시 돌코리아 아이콘 선택
	$('#dole_ck').click(function(){
		$('#sns').find('span').filter('.fb_on').attr('class','fb');
		$('#sns').find('span').filter('.tw_on').attr('class','tw');
		$('#sns').find('span').filter('.do').attr('class','do_on');		
		$('#fb_tw').val('do');
	});



	/**
	*		Service
	*/
	// PC 홍보관 탭메뉴 제어
	$('#h_prev').click(function(index){
		//alert($(".ty_web > ul > li").filter('#0').find('a').attr('href'));
		//alert($(".ty_web > ul > li").eq($(".ty_web > ul > li").size()-1).attr('id'));
		if(0 != $(".ty_web > ul > li").eq(0).attr('id')){
			li_v=$(".ty_web > ul > li").eq($(".ty_web > ul > li").size()-1);		
			$(".ty_web > ul").prepend(li_v);		
		}
		
	});
	$('#h_next').click(function(index){
		li_t=$(".ty_web > ul > li").size()-1;
		//alert($(".ty_web > ul > li").eq(7).attr('id'));
		if(li_t != $(".ty_web > ul > li").eq(6).attr('id')){
			li_v=$(".ty_web > ul > li").eq(0);
			$(".ty_web > ul").append(li_v);
		}		
	});
	// Mobile 홍보관 탭메뉴
	$('#m_h_prev').click(function(index){
		if(0 != $(".ty_mobile > ul > li").eq(0).attr('id')){
			li_v=$(".ty_mobile > ul > li").eq($(".ty_mobile > ul > li").size()-1);		
			$(".ty_mobile > ul").prepend(li_v);		
		}
		
	});
	$('#m_h_next').click(function(index){
		li_t=$(".ty_mobile > ul > li").size()-1;
		if(li_t != $(".ty_mobile > ul > li").eq(0).attr('id')){
			li_v=$(".ty_mobile > ul > li").eq(0);
			$(".ty_mobile > ul").append(li_v);
		}		
	});
	


	/**
	*		게시판
	*/

	//이미지 width 강제조절
	if($(".notice_con").length > 0){
		$(".notice_con img").each(function(){
			var resize_width=$(this).width();
			var resize_height=$(this).height(); //기본 지정값

			$(this).width("");
			var orign_width = $(this).width();
			var orign_height = $(this).height(); //이미지 본래의 값
			if($(window).width()-30 < orign_width || $(window).width()-30 < resize_width){
				$(this).width("100%");
				$(this).attr("height","");
				$(this).attr("max-width",$(window).width()-30);
			} else {
				$(this).width(resize_width);
				$(this).height(resize_height);
				$(this).attr("max-width","");
			}
		})
	}
	if($(".campain_con").length > 0){
		$(".campain_con img").each(function(){
			var resize_width=$(this).width();
			var resize_height=$(this).height(); //기본 지정값

			$(this).width("");
			var orign_width = $(this).width();
			var orign_height = $(this).height(); //이미지 본래의 값

			if($(window).width()-30 < orign_width || $(window).width()-30 < resize_width){
				$(this).width("100%");
				$(this).attr("height","");
				$(this).attr("max-width",$(window).width()-30);
			} else {
				$(this).width(resize_width);
				$(this).height(resize_height);
				$(this).attr("max-width","");
			}
		})
	}

	/**
	*		About Us
	*/
	// 연혁
	h=1;
	$('.history_cata > li').each(function(index){
		$(this).click(function(){
			$('.history_cata > li > a').removeClass('on');
			$(this).find('a').attr('class','on');
			var i=$(this).index()+1;
			$("#menu0"+h).css('display','none');
			$("#menu0"+i).css('display','block');
			h=i;
		});
	});

	// 인사채용
	e=1;
	$('.employ_cata > li').each(function(index){
		$(this).click(function(){
			$('.employ_cata > li > a').removeClass('on');
			$(this).find('a').attr('class','on');
			var i=$(this).index()+1;
			$("#menu0"+e).css('display','none');
			$("#menu0"+i).css('display','block');
			e=i;
		});
	});



	/**
	*		About Us
	*/
	// 이메일무단수집거부
	$('#pop_open4').click(function(){
		$('#pop_v4').jqm().jqmShow();
	});
	$('#pop_close4').click(function(){
		$('#pop_v4').jqm().jqmHide();
	});



	// 회원가입시 승인번호확인
	$('#confirmCk').click(function(){
		var frm=document.reg_frm;
		if(!frm.auth_number.value){
			alert("인증번호를 입력하세요.");frm.auth_number.focus();return;
		}
		$.ajax({
			type: 'POST',
			url: '../inc/ajax_check.php?checkName=sms_ck',
			data: {
				'indexNo': encodeURIComponent($('#indexNo').val()),
				'auth_number': encodeURIComponent($('#auth_number').val())
			},
			cache: false,
			async: false,
			success: function(result) {
				result = result.replace(/(^\s*)|(\s*$)/g, "");// 넘어오는값의 공백으로 인해 오작동
				switch(result) {
					case '10' : alert("인증번호를 입력하세요.");break;
					case '20' : alert("인증번호가 맞지 않습니다.");break;
					case 'ok' : alert("인증번호 확인되었습니다.");$('#confirm_ok').val(result);break;
					default : alert( '잘못된 접근입니다.'); break;
				}
			}
		});
	});
	
	// 아이디
	$('#id_chk').click(function () {
		$.ajax({
			type: 'POST',
			url: '../inc/ajax_check.php?checkName=id',
			data: {
				'user_id': encodeURIComponent($('#user_id').val())
			},
			cache: false,
			async: false,
			success: function(result) {
				var msg = $('#id_msg');			
				result = result.replace(/(^\s*)|(\s*$)/g, "");//넘어오는값의 공백으로 인해 오작동
				switch(result) {
					case '10' : msg.html("영문자, 숫자만 입력하세요.").css('color', 'red'); break;
					case '20' : msg.html("최소 4자이상 입력하세요.").css('color', 'red'); break;
					case '30' : msg.html("이미 사용중인 아이디 입니다.").css('color', 'red'); break;
					case 'ok' : msg.html("사용하셔도 좋은 아이디 입니다.").css('color', 'blue'); break;
					default : alert( '잘못된 접근입니다.\n\n' + result ); break;
				}
				$('#id_success').val(result);
				//$("input[name=id_success]").val(result);
			}
		});
	});

	// 닉네임
	$('#nick_name').keyup(function () {
		$.ajax({
			type: 'POST',
			url: '../inc/ajax_check.php?checkName=nick',
			data: {
				'nick_name': encodeURIComponent($('#nick_name').val())
			},
			cache: false,
			async: false,
			success: function(result) {
				var msg = $('#nick_msg');			
				result = result.replace(/(^\s*)|(\s*$)/g, "");	 //넘어오는값의 공백으로 인해 오작동
				switch(result) {
					case '10' : msg.html('한글, 영문, 숫자만 입력하세요.').css('color', 'red'); break;
					case '20' : msg.html('최소 2자이상 입력하세요.').css('color', 'red'); break;
					case '30' : msg.html('이미 사용중인 닉네임 입니다.').css('color', 'red'); break;
					case 'ok' : msg.html('사용하셔도 좋은 닉네임 입니다.').css('color', 'blue'); break;
					default : alert( '잘못된 접근입니다.\n\n' + result ); break;
				}
				$('#nick_success').val(result);
				//$("input[name=id_success]").val(result);
			}
		});
	});


});


// 굿모닝 바나나 수정시
function banaMod(Ridx,page) {

	$.ajax({
		type: 'POST',
		url: '../inc/ajax_check.php',
		data: {
			'checkName': "bana_modify",
			'Ridx': Ridx
		},
		cache: false,
		async: false,
		success: function(result) {
			result = result.replace(/(^\s*)|(\s*$)/g, "");// 넘어오는값의 공백으로 인해 오작동
			if(result==10){
				alert("세션이 종료되었습니다.\n다시 로그인 하세요");
			}else if(result==20){
				alert("해당글이 존재하지 않습니다.");
			}else {
				c_result=result.split('|!^$%#*@|');
				$('#Query').val("re_update");
				$('#Ridx').val(Ridx);
				$('#page').val(page);
				$('#fb_tw').val(c_result[0]);
				$('#bana_content').html(c_result[1]);
				if(c_result[0]){
					$('#sns').find('span').filter('.'+c_result[0]).attr('class',c_result[0]+'_on');
				}				
				$('#pop_v3').jqm().jqmShow();
			}
		}
	});

}


// 댓글 더보기
function comt_view(cm_g) {

	// 다음 댓글 확인
	$.ajax({
		type: 'POST',
		url: '../inc/ajax_check.php?checkName=recom_num',
		data: {
			'con_gb': cm_g,
			'tidx': $('#tidx').val(),
			'sidx': $('#sidx').val(),
			'b_idx': $('#b_idx').val(),
			'idx': $('#idx').val(),
			'Ctg': $('#Ctg').val(),
			'ct_idx': $('#ct_idx').val(),
			'tb_gubun': $('#tb_gubun').val(),
			'c_num': $('.viewlist > ul > li').size()
		},				
		cache: false,
		async: false,
		success: function(result) {
			if(result==10){$('.morebtn').attr('style','display:none;');}
		},
		error:function(error){console.log("error");	}
	});

	// 댓글 리스트 출력
	$.ajax({
		type: 'POST',
		url: '../inc/ajax_check.php?checkName=recom',
		data: {
			'con_gb': cm_g,
			'tidx': $('#tidx').val(),
			'sidx': $('#sidx').val(),
			'b_idx': $('#b_idx').val(),
			'idx': $('#idx').val(),
			'Ctg': $('#Ctg').val(),
			'ct_idx': $('#ct_idx').val(),
			'tb_gubun': $('#tb_gubun').val(),
			'c_num': $('.viewlist > ul > li').size()
		},				
		cache: false,
		async: false,
		success: function(result) {
			$('.viewlist > ul').append(result);
		},
		error:function(error){console.log("error");	}
	});

}


// 홍보관 탭메뉴 활성화
function pb_view(lno,Ctg) {

	$('.ty_web > ul > li').find('a').removeClass('on');
	$('.ty_web > ul > li').filter('#'+lno).find('a').attr('class','on');
	$('#pb_view').load("../_Html/service/publicize_list.html?Ctg="+Ctg);

}

// 홍보관 내용 불러오기
function pb_cnt(Ctg,idx) {

	$('#pb_view').load("../_Html/service/publicize_list.html?Ctg="+Ctg+"&idx="+idx);

}

// 뉴스레터
function news_view(idx) {

	$('.last_page > li > a').removeClass('on');
	$('#n'+idx).find('a').attr('class','on');


	$.ajax({
		type: 'POST',
		url: '../inc/ajax_check.php?checkName=newsletter',
		data: {
			'idx': idx
		},
		cache: false,
		async: false,
		success: function(result) {
			var msg = $('#nick_msg');			
			result = result.replace(/(^\s*)|(\s*$)/g, "");	 //넘어오는값의 공백으로 인해 오작동
			if(result=="10" || result=="20"){
				alert("정보가 없습니다.");			
			}else {
				$('.news_letter').load("../_Html/service/news/"+result);
			}
		}
	});

}




	/**
	*		게시판
	*/

	$( window ).resize(function() {
		//이미지 width 강제조절
		if($(".notice_con").length > 0){
			$(".notice_con img").each(function(){
				var resize_width=$(this).width();
				var resize_height=$(this).height(); //기본 지정값

				$(this).width("");
				var orign_width = $(this).width();
				var orign_height = $(this).height(); //이미지 본래의 값

				if($(window).width()-30 < orign_width || $(window).width()-30 < resize_width){
					$(this).width("100%");
					$(this).attr("height","");
					$(this).attr("max-width",$(window).width()-30);
				} else {
					$(this).width(resize_width);
					$(this).height(resize_height);
					$(this).attr("max-width","");
				}
			})
		}
		if($(".campain_con").length > 0){
			$(".campain_con img").each(function(){
				var resize_width=$(this).width();
				var resize_height=$(this).height(); //기본 지정값

				$(this).width("");
				var orign_width = $(this).width();
				var orign_height = $(this).height(); //이미지 본래의 값

				if($(window).width()-30 < orign_width || $(window).width()-30 < resize_width){
					$(this).width("100%");
					$(this).attr("height","");
					$(this).attr("max-width",$(window).width()-30);
				} else {
					$(this).width(resize_width);
					$(this).height(resize_height);
					$(this).attr("max-width","");
				}
			})
		}
	});
-->