$(function() {
	/* begin scrolling the page */
	// $('a[href*=#]').on('click', function(e) {
	// 	e.preventDefault();
	// 	$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
	// });

	/* check if your browser is a mobile browser and initialize the carousel for small devices */
	/* i've called them separatelly in order to maintain the aspect of the carousels from the mockups. */
	if(/Mobi/i.test(navigator.userAgent) || /Android/i.test(navigator.userAgent) || $(window).width() < 767) {
		$('#workSlider').lightSlider({
	        item: 2.5,
	        // autoWidth: true,
	        keyPress: true,
	        controls: false,
	        prevHtml: '',
	        nextHtml: '',
	        lopp: false,
	 
	        pager: false,
	        gallery: false,
	 
	        enableTouch:true,
	        enableDrag:true,
	        freeMove:true,
	        swipeThreshold: 40
		}); 

		$('#cultureSlider').lightSlider({
	        item: 1.5,
	        // autoWidth: true,
	        keyPress: true,
	        controls: false,
	        prevHtml: '',
	        nextHtml: '',
	        lopp: false,
	 
	        pager: false,
	        gallery: false,
	 
	        enableTouch:true,
	        enableDrag:true,
	        freeMove:true,
	        swipeThreshold: 40
		}); 
	}
});