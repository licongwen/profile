

$(function () {
	$("#dowebok").fullpage({
		anchors:['page1','page2','page3','page4','page5'],
		scrollSpeed:400,
		menu:"#fullpageMenu",
		navigation:true,
		navigationPosition:'right',
		//navigationToltips:['page1','page2','page3','page4','page5'],
		css3:true,
		resize:true,
		loopBottom:true,
		verticalCentered:false,
		afterRender:function(){
			$("#home").css({display: 'block'}).addClass('home_zoom');
			$("aside").css({"top":($(".active").height()-$("aside").height())/2});
			//$("header").before("<div id="header" style="opacity:0"></div>");
			$("#home_head").css({"margin-top":"100px;"})
			$('header').animate({"opacity":"1"},1000,function(){
				$("#home_info1").fadeIn(700,function(){
					$(this).next().animate({"width":"800px"},700,function(){
						$("#home_info2").fadeIn(450,function(){
							$(this).next().fadeIn(450,function(){
								$(this).next().fadeIn(450,function(){
									$(this).next().fadeIn(450,function(){
										$("aside").fadeIn(300)
									});
								});
							});
						});
					});
				});
			});
			$("aside a").eq(0).addClass('selected').siblings().removeClass('selected');
		},
		afterLoad:function(anchorLink,index){
			if(index==1){

			}
			if(index==2){
				$("#about_content h1").after("<div class='title_en'><h2>. ABOUT ME .</h2></div>");
				$(".title_en").animate({"width":"130px;"},800,function(){
					$(".title_en h2").slideDown(400);
				});
			}
			if(index==3){
				$(".title h1").after("<div class='title_en'><h2>. SKILL .</h2></div>");
				$(".title_en").animate({"width":"130px;"},800,function(){
					$(".title_en h2").slideDown(400);
				});
			}
			if(index==4){
				$(".title h1").after("<div class='title_en'><h2>. MY WORKS .</h2></div>");
				$(".title_en").animate({"width":"130px;"},800,function(){
					$(".title_en h2").slideDown(400);
				});
			}
			if(index==5){
				$(".title h1").after("<div class='title_en'><h2>. CONTACT ME .</h2></div>");
				$(".title_en").animate({"width":"130px;"},800,function(){
					$(".title_en h2").slideDown(400);
				});
			}
		},
		onLeave:function(index,nextIndex,direction){
			if(index==2||index==3||index==4||index==5){
				$(".title_en").remove();
			}
		},
	});

	//顶部文字切换
	$('#header_p').mouseover(function(event) {
		$('#header_p1').html('Resume');
		$('#header_p2').html('前端工程师');
	}).mouseout(function(event) {
		$('#header_p1').html("F2E");
		$('#header_p2').html('个人简历');
	});


});