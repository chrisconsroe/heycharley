$(document).ready(function () {

	var menu = $('.right-nav-items ul');
	var width = $(window).width();

	$('.nav-bar-icon').click(function() {
		menu.slideToggle();

	});

	var menuItems = menu.find('a');

	menuItems.click(function() {

		if (menu.css('display') === 'block') {
			menu.slideToggle();
		} else {
			return
		}
	})

	// only call stellar js on desktop because it looks weird on mobile
	if (width > 768) {
		$.stellar();
	}

	// call onePageNav function
	$('.nav-wrapper').onePageNav();


	// call slider function
	$('.my-slider').unslider({
		speed: 800,
	});

});


