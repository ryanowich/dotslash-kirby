/* global console */

/* ME scripts */

$(function() {
	
	$.fn.animateLevelBars = function () {
		$('progress').each(function() {
			var progressbar = $(this),
			level = progressbar.attr('value');
			// Reset
			progressbar.val(0);
			//console.log('Max: ' + level);
		
			progressbar.animate({ value: level }, 1000);
		
		});
	};

	/****** Animate when in view ******/

	$('.skills.pro').one('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if (isInView) {
			//console.log("It's in view");
			// element is now visible in the viewport
			$(this).animateLevelBars();
			if (visiblePartY === 'top') {
				// top part of element is visible
				//console.log("Level bars: In view");
				//$('.skills').animateLevelBars();
				//$(this).animateLevelBars();
				//animateLevelBars();
	
			} else if (visiblePartY === 'bottom') {
				// bottom part of element is visible
			} else {
				// whole part of element is visible
			}
		} else {
			// element has gone out of viewport
			//console.log("Level bars: Out of view");
		}
	});


	/****** Workstatus animate change ******/
	/*
	$(".workstatus p .rotate").textrotator({
		animation: "flipUp",
		speed: 2150
	});
	*/
	
	$(function(){
		var rotatorText = $(".workstatus p .rotate");
		var classes = ['colorA','colorB','colorC'], currentClass = 0;
		
		rotatorText.typed({
			strings: ["freelance opgaver", "faste opgaver", "en uforpligtende snak"],
			typeSpeed: 0,
			startDelay: 500,
			backDelay: 1000,
			loop: true,
			preStringTyped: function() {
				/*
				var colorA = "#2EAADA";
				var colorB = "#56A666";
				var colorC = "#9856A6";
				$(".workstatus p .rotate").css({color: colorA});
				*/
				
				rotatorText.removeClass(classes[currentClass]);
				if (currentClass + 1 < classes.length) {
					currentClass += 1;
				} else {
					currentClass = 0;
				}
				rotatorText.addClass(classes[currentClass]);
			}
		});
	});

	/****** CV carousel ******/
	//$(".owl-carousel").owlCarousel();
	
	$("#cv_carousel").owlCarousel({
		loop: false,
		margin: 10,
		//stagePadding: 2,
		//autoHeight: true,
		nav: true,
		//navText: [&#x27;next&#x27;,&#x27;prev&#x27;],
		dots: true,
		//dotsEach: true,
		//autoplay: true,
		//autoplayHoverPause: true,
		//autoWidth: true,
		responsive: {
			0:{ items: 1 },
			//400:{ items: 1 },
			550:{ items: 2 },
			750:{ items: 3 },
			1000:{ items: 4 },
			//1420:{ items: 4 }
		}
	});

});