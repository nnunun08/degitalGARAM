

$(window).on('load', function(){

	// 사이드바 함수 선언
	$.toggleSidebar = () => {
		$('#main_map_wrap').toggleClass('open');
		$('.map_info_area').toggleClass('s_open');
	}
	$.openSidebar = () => {
		$('#main_map_wrap').addClass('open');
		$('.map_info_area').addClass('s_open');
	}
	$.closeSidebar = () => {
		$('#main_map_wrap').removeClass('open');
		$('.map_info_area').removeClass('s_open');
	}
	$.closeSubMenubar = () => {
		$('.ico_link .open_area.on').removeClass('on');
		$.closeFilter();
	}
	$.closeFilter = () => {
		$('.map_api_area .map_top.on ').removeClass('on');
		$('.map_api_area .map_bottom.on ').removeClass('on');
	}
	// 사이드바 함수 선언 끝


	// var left = $('.left_icons'),
	// 	right = $('.map_api_area'),
	// 	sub = $('.open_area'),
	// 	lh = left.outerHeight(true),
	// 	rh = right.outerHeight(true);
	// if(lh < rh){
	// 	left.css('height', rh);
	// 	sub.css('height', rh);
	// }else{
	// 	right.css('height', lh);
	// 	sub.css('height', lh);
	// }
	$('.top_ver .ico_link .link-b').on('click', function(){
			$(this).parent('.ico_link').siblings().children('.open_area').removeClass("on");
			$(this).parent('.ico_link').siblings().children('.link-b').removeClass("on");
			$(this).removeClass("on");
			$(this).addClass("on");
		$(this).next('.open_area').addClass('on');
		//$('.open_area').toggleClass('on');
		$('.map_top').addClass('on');
		$('.map_bottom').addClass('on');
	});
	$('.top_ver .ico_link > a').not('.link-b').on('click', function(){
			$(this).parent('.ico_link').siblings().children('.open_area').removeClass("on");
		$('.map_top').removeClass('on');
		$('.map_bottom').removeClass('on');
		$('.top_ver .ico_link .link-b').removeClass('on');

	});
	$(".snb > a").click(function() {
			$(this).next('ul').slideToggle();
			$(this).toggleClass('on');
	});
	$(".date_box .s_sch").click(function() {
		$(this).next('.formbox').toggleClass('on');
	});

	$(".open_area .close").click(function() {
		$('.open_area').removeClass('on');
		$('.map_top').removeClass('on');
		$('.map_bottom').removeClass('on');
		$('.top_ver .ico_link .link-b').removeClass('on');

	});

	$(".all_close_btn").click(function() {
		$('.map_info_area').toggleClass('s_open');
		$('#main_map_wrap').toggleClass('open');

	});

	// 1초뒤 좌측 사이드바 닫기
	setTimeout(()=>{ 
		$.closeSidebar();
		$.closeSubMenubar();
	},2500);

	// 좌측 사이드바 호버시 사이드바 자동열림
	$('.map_info_area').hover(() => {
		$.openSidebar();
	}, ()=>{
		$.closeSidebar();
		$.closeSubMenubar();
	});
	

});

