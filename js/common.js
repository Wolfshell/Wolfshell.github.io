function getStyle(obj, name)
{
	if(obj.currentStyle)
	{
		return obj.currentStyle[name];
	}
	else
	{
		return getComputedStyle(obj, false)[name];
	}
}

function startMove(obj, attr, iTarget)
{
	clearInterval(obj.timer);
	obj.timer=setInterval(function (){
		var cur=0;
		
		if(attr=='opacity')
		{
			cur=Math.round(parseFloat(getStyle(obj, attr))*100);
		}
		else
		{
			cur=parseInt(getStyle(obj, attr));
		}
		
		var speed=(iTarget-cur)/6;
		speed=speed>0?Math.ceil(speed):Math.floor(speed);
		
		if(cur==iTarget)
		{
			clearInterval(obj.timer);
		}
		else
		{
			if(attr=='opacity')
			{
				obj.style.filter='alpha(opacity:'+(cur+speed)+')';
				obj.style.opacity=(cur+speed)/100;
			}
			else
			{
				obj.style[attr]=cur+speed+'px';
			}
		}
	}, 30);
}

$(function(){
	//导航栏
	$("nav .nav-title").hover(function(){
		$(".nav-more").show();
	},function(){
		$(".nav-more").hide();
	});
	//二级导航栏
	$(".nav-subnav").find("li").each(function(){
		_this = $(this);
		_this.click(function(){
		$(this).find("a").addClass("active");
		$(this).siblings().find("a").removeClass("active");
	})
	})
	//回到顶部
	var backTop = document.getElementsByClassName('backtop')[0];
	var scrollTop = null;
	 // 置顶对象点击事件
    backTop.onclick = function() {
        var timer = setInterval(function() {
            window.scrollBy(0, -50);
            if (document.body.scrollTop == 0) {
                clearInterval(timer);
            };
        }, 8);
    }

    // 窗口滚动检测
    window.onscroll = function() {
    	scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        backTop.style.display = (document.body.scrollTop >= 500) ? "block" : "none";
    }
})