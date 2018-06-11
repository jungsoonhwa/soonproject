var slidemenu_X = 10; //상단 제한 값
	var slidemenu_Y = 700; //하단 제한 값


	var isDOM = (document.getElementById ? true : false);
	var isIE4 = ((document.all && !isDOM) ? true : false);
	var isNS4 = (document.layers ? true : false);
	var isNS = navigator.appName == "Netscape";
	 
	 
	function getRef(id) {
		if (isDOM) return document.getElementById(id);
		if (isIE4) return document.all[id];
		if (isNS4) return document.layers[id];
	}
	 
	function getSty(id) {
		x = getRef(id);
		return (isNS4 ? getRef(id) : getRef(id).style);
	}
	 
	function moveRightEdge() {
		var yMenuFrom, yMenuTo, yOffset, timeoutNextCheck;
	 
		if (isNS4) {
			yMenuFrom   = document.getElementById('divMenu').style.top;
			yMenuTo     = windows.pageYOffset + slidemenu_X;   // 위쪽 위치
		} else if (isDOM) {
			yMenuFrom   = parseInt (document.getElementById('divMenu').style.top, 10);
			yMenuTo     = (isNS ? window.pageYOffset : document.documentElement.scrollTop) + slidemenu_X; // 위쪽 위치
		}
		timeoutNextCheck = 30;

		divMenu_H = document.getElementById('divMenu');
		limit_H = (parseInt(document.documentElement.scrollHeight)-slidemenu_Y)-parseInt(divMenu_H.offsetHeight);
		divMenu_t = parseInt(document.getElementById('divMenu').style.top) ;
		if (yMenuFrom != yMenuTo) {
			yOffset = Math.ceil(Math.abs(yMenuTo - yMenuFrom) / 20);
			if (yMenuTo < yMenuFrom){
				yOffset = -yOffset;
			}
			if (isNS4){
				if(yOffset > 0){
					if ( divMenu_t < limit_H) {
						document.getElementById('divMenu').style.top += yOffset+"px";
					}
				}else{
					document.getElementById('divMenu').style.top += yOffset+"px";
				}
				
			}else if (isDOM){
				if(yOffset > 0){
					if ( divMenu_t < limit_H) {
						document.getElementById('divMenu').style.top = parseInt (document.getElementById('divMenu').style.top) + yOffset+"px";
					}
				}else{
					document.getElementById('divMenu').style.top = parseInt (document.getElementById('divMenu').style.top) + yOffset+"px";
				}
			}
			timeoutNextCheck = 10;
		}
	 
		setTimeout ("moveRightEdge()", timeoutNextCheck);
	}
	 
function quick_play(){	 
		if (isNS4) {    
			var divMenu = document["divMenu"];
			document.getElementById('divMenu').style.top = slidemenu_X+"px";
			document.getElementById('divMenu').style.visibility = "visible";
			moveRightEdge();
		} else if (isDOM) {
			var divMenu = getRef('divMenu');    
			document.getElementById('divMenu').style.top = slidemenu_X+"px";    
			document.getElementById('divMenu').style.visibility = "visible";    
			moveRightEdge();
		}
}