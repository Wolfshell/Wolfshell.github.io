$(function(){
	//index图片滚动
	if(!document.getElementsByClassName){
		document.getElementsByClassName = function(className){
			var children = document.getElementsByTagName('*');
			var elements = new Array();
			for (var i=0; i<children.length; i++){
				var child = children[i];
				var classNames = child.className.split(' ');
				for (var j=0; j<classNames.length; j++){
					if (classNames[j] == className){ 
						elements.push(child);
						break;
					}
				}
			} 
			return elements;
		};
	}
	var Roll = document.getElementsByClassName('roll')[0];
	var Roll1 = document.getElementsByClassName('roll1')[0];
	var aLi =document.getElementsByTagName('li');
	var speed = -2;
	var R1inner = Roll1.innerHTML;
	Roll1.innerHTML=R1inner+R1inner;
	
	function move(){
		if(Roll1.offsetLeft<-Roll1.offsetWidth/2){
			Roll1.style.left=0;
		}
		if(Roll1.offsetLeft>0){
			Roll1.style.left=-Roll1.offsetWidth/2+'px';
		}
		Roll1.style.left=Roll1.offsetLeft+speed+'px';
	}
	
	var timer = setInterval(move,30)
	
	Roll1.onmouseover=function(){
		clearInterval(timer);
	}
	Roll1.onmouseout=function(){
		timer = setInterval(move,30);
	}
	var btnL = document.getElementsByClassName('btn_left')[0];
	var btnR = document.getElementsByClassName('btn_right')[0];
	btnL.onclick=function(){
		speed=-2;
	}
	btnR.onclick=function(){
		speed=2;
	}
	$(".icon-like").each(function(){
		_this = $(this);
		_this.click(function(){
			str = $(this).next().html();
			// alert(str);
			if($(this).hasClass("icon-like2")){
				str--;
				$(this).next().html(str);
				$(this).removeClass("icon-like2");
			}else{
				str++;
				$(this).next().html(str);
				$(this).addClass("icon-like2");	
			}
			
		})
	})
})


















































