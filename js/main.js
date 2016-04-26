$(document).ready(function () {

	var menu = $('.right-nav-items ul');

	$('.nav-bar-icon').click(function() {
		menu.slideToggle();

	});

	// find a elements in nav bar when visible and close after click event
	var menuItems = menu.find('a');

	menuItems.click(function() {
		menu.slideToggle();
	})

	// only call stellar js on desktop because it looks weird on mobile
	var width = $(window).width();

		if (width > 768) {
			$.stellar();
		}

	// call onePageNav function
	$('.nav-wrapper').onePageNav();


	// call slider function
	$('.my-slider').unslider({
		speed: 1200,
		dots: true,
        arrows: true,
	});

	var scripts = [
	'http://stephband.info/jquery.event.move/js/jquery.event.move.js',
	'http://stephband.info/jquery.event.swipe/js/jquery.event.swipe.js'
	];


	$.getScript(scripts[0]);

	//  Once our script is loaded, we can initSwipe to add swipe support
	$.getScript(scripts[1], function() {
		$('.sliderman').unslider('initSwipe');
	});

});


