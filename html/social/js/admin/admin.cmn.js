var domain = location.protocol + "//" + location.host;

$(function(){
	
	if(document.location.href.indexOf("/admin/campaign/") != -1){
		$("#lnb li").eq(0).attr("class","active");
	}else if(document.location.href.indexOf("/admin/mycampaign/") != -1){
		$("#lnb li").eq(1).attr("class","active");
	}else if(document.location.href.indexOf("/admin/qna/") != -1){
		$("#lnb li").eq(2).attr("class","active");
	}else if(document.location.href.indexOf("/admin/mail/") != -1){
		$("#lnb li").eq(3).attr("class","active");
	}else if(document.location.href.indexOf("/admin/mms/") != -1){
		$("#lnb li").eq(4).attr("class","active");
	}else if(document.location.href.indexOf("/admin/ad/") != -1){
		$("#lnb li").eq(5).attr("class","active");
	}else if(document.location.href.indexOf("/admin/report/") != -1){
		$("#lnb li").eq(6).attr("class","active");
	}
});