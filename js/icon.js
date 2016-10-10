$(function(){	
	//icon图片轮播
	//左右按钮
	var slideMap = document.getElementsByClassName("slide-map")[0];
	var mapLeft = slideMap.getElementsByClassName("map-left")[0];
	var mapRight = slideMap.getElementsByClassName("map-right")[0];
	var slidePrev = slideMap.getElementsByClassName("slide-prev")[0];
	var slideNext = slideMap.getElementsByClassName("slide-next")[0];
	var widgetSlide = document.getElementsByClassName('widget-slide')[0];
	mapLeft.onmouseover=slidePrev.onmouseover=function(){
		startMove(slidePrev,'opacity',100);
//		slidePrev.style.opacity="100";
	};
	mapRight.onmouseover=slideNext.onmouseover=function(){
		startMove(slideNext,'opacity',100);
//		slideNext.style.opacity="100";
	};
	mapLeft.onmouseout=slidePrev.onmouseout=function(){
		startMove(slidePrev,'opacity',0);
//		slidePrev.style.opacity="0";
	};
	mapRight.onmouseout=slideNext.onmouseout=function(){
		startMove(slideNext,'opacity',0);
//		slideNext.style.opacity="0";
	};
	//圆点切换
	var slideMask = document.getElementsByClassName("slide-mask")[0];
	var aA = slideMask.getElementsByTagName("a");
	var slideWrapper = document.getElementsByClassName("slide-wrapper")[0];
	var aItem = slideWrapper.getElementsByClassName("slide-item");
	var baseWidth = aItem[0].offsetWidth;
	var iNow = 0;
	for(i=0;i<aA.length;i++){
		aA[i].index = i;
		aA[i].onclick = function(){
			iNow=this.index;
			tab();
		}
	}
	function tab(){
		for(i=0;i<aA.length;i++){
			aA[i].className = "";
		}
//		aItem[iNow].style.opacity=0;
//		startMove(aItem[iNow],'opacity',100);
		aA[iNow].className = "selected";
		startMove(slideWrapper,'left',-iNow*baseWidth);
	}
	slidePrev.onclick = function(){
		iNow--;
		if(iNow==-1){
			iNow = aA.length-1;
		}
		tab();
	}
	slideNext.onclick = function(){
		iNow++;
		if(iNow==aA.length){
			iNow = 0;
		}
		tab();
	}
	var toRun = setInterval(slideNext.onclick,3000);
	widgetSlide.onmouseover=function(){
		clearInterval(toRun);
	}
	widgetSlide.onmouseout=function(){
		toRun = setInterval(slideNext.onclick,3000);
	}
	
})


















































