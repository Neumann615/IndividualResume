(function ($) {
"use strict";
/*-- 
	Preloader
------------------------*/
$(window).load(function() {
	$('#loading').delay(350).fadeOut('slow');
});
/*--
	In & Out Animation For Section Wrapper
-----------------------------------------------*/
$('.section-wrapper').addClass('fadeOutDown').removeClass('fadeInUp');
$('.home-section').find('.section-wrapper').addClass('fadeInUp').removeClass('fadeOutDown');
/*--
	Menu Functions
------------------------*/
$('.navigation ul li a').on('click', function (e){
	e.preventDefault();
	var activeSection = $(this).attr('href');
	var overlayChance = $(this).parent('li').attr('class');
	$('.section').removeClass('active');
	$('.section-wrapper ').removeClass('fadeInUp').addClass('fadeOutDown');
	$('.overlay').removeClass('home-overlay').addClass(overlayChance + '-overlay');
	$('.close-section').addClass('active');
	$(activeSection).addClass('active');
	$(activeSection).find('.section-wrapper').addClass('fadeInUp').removeClass('fadeOutDown');
	return false;
});
/*--
	Section Close Functions
------------------------*/
$('.close-section').on('click', function (e){
	var overlayCloseChance = $('.section.active').attr('id');
	$(this).removeClass('active');
	$('.section').removeClass('active');
	$('.section-wrapper').removeClass('fadeInUp').addClass('fadeOutDown');
	$('.overlay').removeClass(overlayCloseChance +'-overlay').addClass('home-overlay');
	$('.home-section').addClass('active');
	$('.home-section').find('.section-wrapper').removeClass('fadeOutDown').addClass('fadeInUp');
	return false;
});
/*--
	Skill Chart
------------------------*/
$('.chart').easyPieChart({
	barColor:'#fff',
	trackColor:'transparent',
	scaleColor:'transparent',
	lineCap: 'round',
	lineWidth: 3,
	size: 120,
	animate: {
			  duration:3000,
			  enabled:true
			}
});
/*--
	Skill Slider
------------------------*/
$(".skill-slider").owlCarousel({
	items: 3,
	autoplay: false,
	loop: true,
	nav: true,
	navText: ['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
	dots: false,
	responsive : {
		0 : {
			items : 2,
		},
		480 : {
			items : 3,
		},
		768 : {
			items : 4,
		},
		992 : {
			items : 3,
		}
	}
});
/*--
	Testimonial Slider
------------------------*/
$(".testimonial-slider").owlCarousel({
	items: 1,
	autoplay: false,
	loop: true,
	nav: true,
	margin: 0,
	navText: ['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
	dots: false,
});
/*--
	Perfect Scrollbar
------------------------*/
$('.section, .page').perfectScrollbar();
/*--
	Magnific Popup
------------------------*/
$('.portfolio-hover').magnificPopup({
	type:'image',
	mainClass: 'mfp-with-zoom',
});

})(jQuery);	