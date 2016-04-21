$(document).ready(function () {

	var menu = $('.right-nav-items ul');

	$('.nav-bar-icon').click(function() {
		menu.slideToggle();
	});

	//Fix bug where menu is still hidden at larger page widths
	$(window).resize(function() {
		var width = $(window).width();

	// if width is greater than 768 pixels and has style  attribute hidden
		if (width > 768 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	})

	// call onePageNav function
	$('.nav-wrapper').onePageNav();

	// call stellar.js function
	$.stellar();

	// call boxslider function
	$('.bxslider').bxSlider();

});


