$(function(){
	var a=0
	$("#box").click(function(){
		
		a++
		$("#ul").stop().slideToggle();
		if(a==1){
			$("#box").css("transform","rotate(180deg)")
		}else{
			$("#box").css("transform","rotate(360deg)")
			a=0
		}
		
		return false
	})
	$(window).click(function(){
		$("#ul").stop().slideUp();
		$("#ul1").stop().slideUp();
		$("#box").css("transform","rotate(360deg)")
		$("#box1").css("transform","rotate(360deg)")
		a=0
	})
	$("#ul li").hover(function(){
		$("#ul li").css("background","white");
		$("#ul li").eq($(this).index()).css("background","#B9DEF0");
	})
	
	$("#ul li").click(function(){
		var s=$("#ul li span").eq($(this).index()).first().text()
		var t=$("#ul li i").eq($(this).index()).first().text()
		$("#p").text(t)
		$("#inp").val(s)
	})
	$("#box1").click(function(){
		a++
		$("#ul1").stop().slideToggle();
		if(a==1){
			$("#box1").css("transform","rotate(180deg)")
		}else{
			$("#box1").css("transform","rotate(360deg)")
			a=0
		}
		return false
	})
	
		$("#ul1 li").hover(function(){
		$("#ul1 li").css("background","white");
		$("#ul1 li").eq($(this).index()).css("background","#B9DEF0");
	})
	
	$("#ul1 li").click(function(){
		var s=$("#ul1 li span").eq($(this).index()).first().text()
		var t=$("#ul1 li i").eq($(this).index()).first().text()
		$("#inp1").val(s)
		$("#p1").text(t)
	})
	
	
	
})
