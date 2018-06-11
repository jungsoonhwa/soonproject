function overImage(){
	overMouse=false;
}
 
function outImage(){
	overMouse=true;
}
 
function showAlimpanDiv(seq){		
	loop = seq;
	var objName = "alimpan_img" + loop;
	var viewObjName = "alimpan_div" + loop;
 
	var obj = document.getElementById(objName);
	var viewObj = document.getElementById(viewObjName);
 
	viewObj.style.display = '';
	obj.src = "images/btn_num0"+loop+"_ov.gif"	//해당 이미지 위치시 버튼 변환
	
	for(var i = 1; i <= LoopCnt; i++){
		if(i == loop) continue;
 
		var tmpobjName = "alimpan_img" + i;
		var tmpviewObjName = "alimpan_div" + i;
		
		var tmpobj = document.getElementById(tmpobjName);
		var tmpviewObj = document.getElementById(tmpviewObjName);
		
		tmpviewObj.style.display = 'none';
		tmpobj.src = "images/btn_num0"+i+".gif"	//해당 이미지 위치시 버튼 변환전 이미지
	}
 
	if(LoopCnt < seq)
		loop=1;
	else 
		loop=seq;
}
 
function scrolling(){
	if(overMouse && n_pre_process){
		var objName = "alimpan_img" + loop;
		var viewObjName = "alimpan_div" + loop;
 
		var obj = document.getElementById(objName);
		var viewObj = document.getElementById(viewObjName);
		if(viewObj != null ){
			viewObj.style.display = '';
			obj.src = "images/btn_num0"+loop+"_ov.gif"	
			
			for(var i = 1; i <= LoopCnt; i++){
				if(i == loop) continue;
		
				var tmpobjName = "alimpan_img" + i;
				var tmpviewObjName = "alimpan_div" + i;
				
				var tmpobj = document.getElementById(tmpobjName);
				var tmpviewObj = document.getElementById(tmpviewObjName);
				
				tmpviewObj.style.display = 'none';
				tmpobj.src = "images/btn_num0"+i+".gif"	
			} 
			
			var show_1 = document.getElementById("showHide_1");
			var show_2 = document.getElementById("showHide_2");
			
			loop++;
			if(loop > LoopCnt) loop = 1;
		}
	}
}
 
function pop_start(){
	n_pre_process = true;
	//document.getElementById('p_play').src='/image/main/pop_btn_pause.gif';
}
 
function pop_stop(){
	n_pre_process = false;
	//document.getElementById('p_play').src='/image/main/pop_btn_play.gif';
}