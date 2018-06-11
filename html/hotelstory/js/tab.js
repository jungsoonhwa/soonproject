		function chimg(k){
		var cc="";
		var menu=document.getElementById('btn100');
		var menu_num=menu.getElementsByTagName('img');
		for(i=0; i<menu_num.length; i++){
			if(k.src !=menu_num[i].src){
				menu_num[i].setAttribute("src",menu_num[i].getAttribute("src").replace("_ov.gif",".gif"));
			 }else{
				 if(menu_num[i].getAttribute("src").indexOf("_ov.gif")==-1){
					menu_num[i].setAttribute("src",menu_num[i].getAttribute("src").replace(".gif","_ov.gif"));
					}
			 }
		}
	}
	
	
	function chimg1(k){
		var cc="";
		var menu=document.getElementById('friend');
		var menu_num=menu.getElementsByTagName('img');
		for(i=0; i<menu_num.length; i++){
			if(k.src !=menu_num[i].src){
				menu_num[i].setAttribute("src",menu_num[i].getAttribute("src").replace("_over.jpg",".jpg"));
			 }else{
				 if(menu_num[i].getAttribute("src").indexOf("_over.jpg")==-1){
					menu_num[i].setAttribute("src",menu_num[i].getAttribute("src").replace(".jpg","_over.jpg"));
					}
			 }
		}
	}	
