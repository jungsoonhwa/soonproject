$(function() {
	var phoneFieldCount = $(".addtel").length+1;
	
	$("#date_detail").hide();
	// 광고주 autoComplete
	$("#comp_nm").autocomplete({
		focus: function( event, ui ) {
				return false;
		},
		change: function(event, ui){
			if(!ui.item){
				$("#comp_nm").val("");
				$("#cust_id").val("");
				$("#owner_nm").val("");
				$("#campaign_nm").val("");
				$("#telnum1").val("");
			}
			return false;
		},
		source: function(request, response) {
		 	$.ajax({
				url: domain + "/admin/campaign/searchCompany.do",
			 	dataType: "json",
			 	type: "post",
			 	data: {
			 		"name": request.term
			 	},
			 	success: function(data) {
			 		response(data);
			 	},
		 	});
		},
	 	minLength: 2,
	 	select: function( event, ui ) {
	 		$("#comp_nm").val(ui.item.label);
	 		$("#campaign_nm").val(ui.item.label);
	 		$("#cust_id").val(ui.item.value);
	 		$("#owner_nm").val(ui.item.nm);
	 		$("#telnum1").val(ui.item.phone);
	 		return false;
		}
	});
	
	//영업 autoComplete
	$("#sales_nm").autocomplete({
		focus: function( event, ui ) {
				return false;
		},
		change: function(event, ui){
			if(!ui.item){
				$("#sales_nm").val("");
				$("#sales_id").val("");
			}
			return false;
		},
		source: function(request, response) {
		 	$.ajax({
				url: domain + "/admin/campaign/searchManager.do",
			 	dataType: "json",
			 	type: "post",
			 	data: {
			 		"name": request.term
			 	},
			 	success: function(data) {
			 		response(data);
			 	},
		 	});
		},
	 	minLength: 1,
	 	select: function( event, ui ) {
	 		$("#sales_nm").val(ui.item.label);
	 		$("#sales_id").val(ui.item.value);
	 		return false;	
		}
	});
	
	//운영 autoComplete
	$("#oper_nm").autocomplete({
		focus: function( event, ui ) {
				return false;
		},
		change: function(event, ui){
			if(!ui.item){
				$("#oper_id").val("");
				$("#oper_nm").val("");
			}
			return false;
		},
		source: function(request, response) {
		 	$.ajax({
				url: domain + "/admin/campaign/searchManager.do",
			 	dataType: "json",
			 	type: "post",
			 	data: {
			 		"name": request.term
			 	},
			 	success: function(data) {
			 		response(data);
			 	},
		 	});
		},
	 	minLength: 1,
	 	select: function( event, ui ) {
	 		$("#oper_nm").val(ui.item.label);
	 		$("#oper_id").val(ui.item.value);
	 		return false;
		}
	});
	
	$("#first_toggle_date").bind("click", function() {
		$("#date_detail").toggle();
	});
	
	$("#open_dt").datepicker({
		dateFormat: 'yy-mm-dd',
		prevText: '이전 달',
		nextText: '다음 달',
		monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		dayNames: ['일','월','화','수','목','금','토'],
		dayNamesShort: ['일','월','화','수','목','금','토'],
		dayNamesMin: ['일','월','화','수','목','금','토'],
		showMonthAfterYear: true,
		yearSuffix: '년'
	});
	
	$("#close_dt").datepicker({
		dateFormat: 'yy-mm-dd',
		prevText: '이전 달',
		nextText: '다음 달',
		monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		dayNames: ['일','월','화','수','목','금','토'],
		dayNamesShort: ['일','월','화','수','목','금','토'],
		dayNamesMin: ['일','월','화','수','목','금','토'],
		showMonthAfterYear: true,
		yearSuffix: '년'
	});
	
	var req_dates = $("#req_open_dt, #req_close_dt").datepicker({
		prevText: '이전 달',
		nextText: '다음 달',
		monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		dayNames: ['일','월','화','수','목','금','토'],
		dayNamesShort: ['일','월','화','수','목','금','토'],
		dayNamesMin: ['일','월','화','수','목','금','토'],
		dateFormat: 'yy-mm-dd',
		showMonthAfterYear: true,
		yearSuffix: '년',
		onSelect: function( selectedDate ) {
			var option = this.id == "req_open_dt" ? "minDate" : "maxDate",
			instance = $( this ).data( "datepicker" ),
			date = $.datepicker.parseDate(
			instance.settings.dateFormat ||
			$.datepicker._defaults.dateFormat,
			selectedDate, instance.settings );
			req_dates.not( this ).datepicker( "option", option, date );
		}
	});
	
	var review_dates = $("#review_open_dt, #review_close_dt").datepicker({
		prevText: '이전 달',
		nextText: '다음 달',
		monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		dayNames: ['일','월','화','수','목','금','토'],
		dayNamesShort: ['일','월','화','수','목','금','토'],
		dayNamesMin: ['일','월','화','수','목','금','토'],
		dateFormat: 'yy-mm-dd',
		showMonthAfterYear: true,
		yearSuffix: '년',
		onSelect: function( selectedDate ) {
			var option = this.id == "review_open_dt" ? "minDate" : "maxDate",
			instance = $( this ).data( "datepicker" ),
			date = $.datepicker.parseDate(
			instance.settings.dateFormat ||
			$.datepicker._defaults.dateFormat,
			selectedDate, instance.settings );
			review_dates.not( this ).datepicker( "option", option, date );
		}
	});
	
	$("#category").bind("change", function() {
		$.post(domain + "/admin/campaign/commonCodeJSON.do", { "id": this.value },    
			function(data){
				if(data){
					$("#category1").html("<option value=''>카테고리1</option>");
					$("#category2").html("<option value=''>카테고리2</option>");
					for(var i = 0 ; i < data.length; i++){
						$("#category1").append("<option value='" + data[i].CODE + "'>" + data[i].DESCRIPTION + "</option>");
					}
				}
			}, "json");
	});
	
	$("#category1").bind("change", function() {
		$.post(domain + "/admin/campaign/commonCodeJSON.do", { "id": this.value },    
			function(data){
				if(data){
					$("#category2").html("<option value=''>카테고리2</option>");
					for(var i = 0 ; i < data.length; i++){
						$("#category2").append("<option value='" + data[i].CODE + "'>" + data[i].DESCRIPTION + "</option>");
					}
				}
			}, "json");
	});
	
	$(".campType").bind("change", function() {
		var selected_value = $("input[name='separation']:checked").val();
		if(selected_value == "H"){
			halfType();
			return;
		}
		fullType();
	});
	
	
	$("#complete").click(function() {
		$("#blog_description").val(replaceEnterToBr($("#blog_description").val()));
		$("#mission").val(replaceEnterToBr($("#mission").val()));
		$("#required").val(replaceEnterToBr($("#required").val()));
		$("#keyword").val(replaceEnterToBar($("#keyword").val()));
		$("#comp_nm").attr("disabled",false);
		$("#owner_nm").attr("disabled",false);
		
		var formData = new FormData();
		
		if(!$("#uploadFile1").val() && !$("#uploadFile2").val()){
			$("#campaignForm").submit();
		}else{
			
			if($("#uploadFile1").val()){
				formData.append("uploadFile1", $("#uploadFile1")[0].files[0]);
			}
			if($("#uploadFile2").val()){
				formData.append("uploadFile2", $("#uploadFile2")[0].files[0]);
			}
			
			$.ajax({
				url: domain + '/admin/campaign/imgUpload.do',
				data: formData,
				processData: false,
				contentType: false,
				type: 'POST',
				success: function(data){
					if(data.file1){
						$("#file1").val(data.file1);
					}
					if(data.file2){
						$("#file2").val(data.file2);
					}
					 
					$("#campaignForm").submit();
				},
				error: function(data){
					alert("이미지 등록을 실패했습니다.");
				}
			});
			
		}
		
	});
	
	$("#delete").click(function(){
		$("#deleteForm").submit();
	});
	
	init();
	
});

replaceEnterToBar = function(str){
	var re = /\r/gm;
    var value = str.replace(re, "");
    re = /\n/gm;
    return value.replace(re, "|");
}

replaceBarToEnter = function(str){
	var re = /\|/g;
    return str.replace(re, "\r\n");
}

replaceEnterToBr = function(str){
	var re = /\r/gm;
    var value = str.replace(re, "");
    re = /\n/gm;
    return value.replace(re, "<br>");
}

replaceBrToEnter = function(str){
	var re = /<br\>/gm;
    return str.replace(re, "\r\n");
}

init = function(){
	if(document.location.href.indexOf("insertCampaign.do") > 0){
		halfType();
		$("#degree_idx").val("1");
		$("#degree_cnt").val("6");
		$("#degree_idx").attr("disabled",false);
		$("#degree_cnt").attr("disabled",false);
		$("#campaignForm").attr('action', domain + '/admin/campaign/insertCampaign.do');
		$("#delete").hide();
	}else if(document.location.href.indexOf("selectCampaign.do") > 0){
		$("#campaignForm").attr('action', domain + '/admin/campaign/updateCampaign.do');
		$("#comp_nm").attr("disabled",true);
		$("#owner_nm").attr("disabled",true);
	}else if(document.location.href.indexOf("rebuy.do") > 0){
		$("#campaignForm").attr('action', domain + '/admin/campaign/insertCampaign.do');
		$("#comp_nm").attr("disabled",true);
		$("#owner_nm").attr("disabled",true);
		halfType();
		$("#degree_idx").val("1");
		$("#degree_cnt").val("6");
		$("#degree_idx").attr("disabled",false);
		$("#degree_cnt").attr("disabled",false);
		$("#delete").hide();
	}
	if($("#category").val() == "선택"){
		$("#category option:eq(2)").attr("selected","selected");
	}
	
	if(!$("#blog_description").val()){
		$("#blog_description").val("방문안내 : 11:30~22:00 / 주말,공휴일 방문 불가\r\n예약안내 : 하루 전 예약 전화 후 매장과 방문시간 조율 필수\r\n예약 후에 변경 어려우니 신중한 예약 부탁드리오며 예약시간 엄수해주세요.")
	}else{
		$("#blog_description").val(replaceBrToEnter($("#blog_description").val()));
	}
	
	if(!$("#mission").val()){
		$("#mission").val("1. 리뷰에 매장 지도를 넣어주세요.\r\n2. 리뷰에 매장번호를 안내해주세요.");
	}else{
		$("#mission").val(replaceBrToEnter($("#mission").val()));
	}
	
	if(!$("#required").val()){
		$("#required").val("※ 당일 예약 불가하며 예약없이 방문 시 체험 불가합니다.\r\n※ 휴대폰 카메라로 촬영 시 체험이 불가합니다.");
	}else{
		$("#required").val(replaceBrToEnter($("#required").val()));
	}
	
	if($("#keyword").val()){
		$("#keyword").val(replaceBarToEnter($("#keyword").val()));
	}
	
	if(!$("#oper_nm").val()){
		$("#oper_nm").val("루니");
		$("#oper_id").val("lunikim");
	}
	
	if(!$("#sales_nm").val()){
		$("#sales_nm").val("루니");
		$("#sales_id").val("lunikim");
	}
	
};

halfType = function(){
	$("#open_dt").val(adddate(0));
	$("#req_open_dt").val(adddate(0));
	$("#mail1_dt").val(adddate(5));
	$("#req_close_dt").val(adddate(6));
	$("#review_open_dt").val(adddate(7));
	$("#mail2_dt").val(adddate(14));
	$("#review_close_dt").val(adddate(13));
	$("#close_dt").val(adddate(15));
	$("#reviewer_cnt").val(5);
};

fullType = function(){
	$("#open_dt").val(adddate(0));
	$("#req_open_dt").val(adddate(0));
	$("#mail1_dt").val(adddate(12));
	$("#req_close_dt").val(adddate(13));
	$("#review_open_dt").val(adddate(14));
	$("#mail2_dt").val(adddate(27));
	$("#review_close_dt").val(adddate(27));
	$("#close_dt").val(adddate(29));
	$("#reviewer_cnt").val(10);
};

adddate = function(day){

	var caledmonth, caledday, caledYear;
	var loadDt = new Date();
	var v = new Date(Date.parse(loadDt) + day*1000*60*60*24);

	caledYear = v.getFullYear();

	if( v.getMonth() < 9 ){
		 caledmonth = '0'+(v.getMonth()+1);
	}else{
		caledmonth = v.getMonth()+1;
	}
	if( v.getDate() < 9 ){
		 caledday = '0'+v.getDate();
	}else{
		 caledday = v.getDate();
	}
	return caledYear+'-'+caledmonth+'-'+caledday;
};

