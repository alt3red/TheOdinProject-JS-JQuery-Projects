(function($) {
	//configuration
	var speed = 5000,
	current = 1;

	//cache dom 
	var $slider = $('#slider'),
	prev = $('div.slidecontainer').find('#prev'),
	next = $('div.slidecontainer').find('#next'), 
	$img = $slider.find('img'),
	imgLen = $img.length, 
	imgWidth = $img[0].width,
	totalWidth = imgLen * imgWidth;


	var animateSlide = function() {
		var nav = $(this).data('nav');
		var loc = imgWidth;
		//update current value
		if (nav === 'next') {
			current++; 
		} 

		else if (nav === 'prev') {
			current--;
		} 

		else { 
			current++;
		} 

		// go to last slide 
		if (current === 0) {
			current = imgLen;
			loc = totalWidth - imgWidth; 
		}
		 //go to first slide 
		else if (current - 1 == imgLen) {
			 current = 1;
			 loc = 0; 
		}

		 transition( $slider,loc, nav );
	}

	 var transition = function(container, loc, nav) {
		var unit; // += or -=

			if (nav && loc !== 0) {
			unit = (nav === 'next') ? '-=' : '+='; 
		}

		container.animate({
		'margin-left': unit ? (unit + loc) : loc
		})
	};

	setInterval(function() { animateSlide() }, speed); 

	/* next.on('click', animateSlide());
	prev.on('click', animateSlide()); */


  })(jQuery);



