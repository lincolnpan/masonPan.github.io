//jquery特效开始
$(document).ready(function(){

if( $(window).width() > 748)
	{ 
	   $("#flash").show();
	   $("#mobileflash").hide();
	   //全屏轮换
	   TouchSlide({ 
		  slideCell:"#slideBox",
		  titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
		  mainCell:".bd ul", 
		  effect:"leftLoop", 
		  interTime:5000,
		  autoPlay:true,//自动播放
		  autoPage:true //自动分页
	   });
	}
	else
	{
		$("#flash").hide();
		$("#mobileflash").show();
		//中部轮换
		TouchSlide({ 
			slideCell:"#adBox",
			titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
			mainCell:".bd ul", 
			effect:"leftLoop", 
			interTime:5000,
			autoPlay:true,//自动播放
			autoPage:true //自动分页
		});
	}


						
});
//jquery 结束

