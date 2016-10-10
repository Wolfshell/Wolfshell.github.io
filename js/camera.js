$(function(){	
//	//camera选项卡
//	var iconList = document.getElementsByClassName('icon-list')[0];
//	var uList = iconList.getElementsByClassName('ulist')[0];
//	var aLi = uList.getElementsByTagName('li');
//	var aImore = uList.getElementsByClassName('imore');
//	var aDiv = uList.getElementsByTagName('div');
//	for(i=0;i<aLi.length;i++){
//		aLi[i].index=i;
//		aLi[i].onmouseover=function(){
//			for(i=0;i<aLi.length;i++){
//			aLi[i].className='';
////			aImore[i].style.display='none';
//			}
//			this.className='lactive';
//			aImore[this.index].style.display='block';
//		};
//	}

	$(".ulist li").hover(function(){
		$(this).addClass("lactive");
		$(this).find(".imore").show();
	},function(){
		$(this).removeClass("lactive");
		$(this).find(".imore").hide();
	});
})


















































