/* global scrollReveal */

// ScrollReveal
$(function() {
	var config = {
		enter: 'bottom',
		move: '25px',
		scale: { direction: 'up', power: '0' },
		over: '0.6s',
		wait: '0s',
		easing: 'ease',
		reset: false,
		delay: 'once',
		vFactor:	0.10,
		/*
		complete: function( el ) {
			el.setAttribute('foo');
		}*/
	};
	window.sr = new scrollReveal( config );
	
});


// Header text and menu color change
$(function() {
	if ($("body").hasClass("dark")) {
		$(window).on("scrollstop", function() {
			//console.log('Scrollstop');
			if ($('header.header').visible( true )) {
				$("body").removeClass("light-override");
				$("body .header .dotslashlogo").addClass("inv");
			} else {
				$("body").addClass("light-override");
				$("body .header .dotslashlogo").removeClass("inv");
			}
		});
	}
});

/*
// Header height and background-image top-position
$(function() {
	//var height = $(window).outerHeight() - $('#header').outerHeight(true);
	var headerWidth = $(".header").outerWidth();
	var headerHeight = $(".header").outerHeight();
	console.log('Header: ' + headerWidth + 'x' + headerHeight);
	//$('.wrapper').css({"max-height":height+"px"});
});
*/

/*
function scrollToAnchor(aid){
	var aTag = $("a[name='"+ aid +"']");
	$('html,body').animate({scrollTop: aTag.offset().top},'slow');
}*/

//$("#link").click(function() {
//	scrollToAnchor('id3');
//});

/*
// Front header video
// Remember: http://www.html5rocks.com/en/tutorials/video/basics/
$(function() {
		
	var meVideo = $("body.home video#front_me_video").get(0);
	
	$(meVideo).on("canplaythrough", function() {
		//console.log('Video: canplaythrough');
		$(meVideo).addClass('ready');
		$(meVideo).get(0).load();
		//console.log('Current time: ' + $(meVideo).get(0).currentTime);
		$(meVideo).get(0).play();
		$(meVideo).off("canplaythrough");
	});
		
	$(meVideo).on("ended", function() {
		//console.log('Current time: ' + $(meVideo).get(0).currentTime);
		//console.log('Video: Ended');
		//console.log('ScrollPos: ' + $('body').scrollTop());
		var scrollPos = $('body').scrollTop();
		var viewPortHeight = $(window).height();
		if (scrollPos < (viewPortHeight/3)) {
			scrollToAnchor("portfolio");
		}
		$(meVideo).off("ended");
	});
	
	$("body.home header .headertext h3").on('click mouseover', function () {
		//console.log('Ryan activated');
		//$(meVideo).get(0).play();
		if ($(meVideo).get(0).paused) {
			$(meVideo).get(0).play();
		} else {
			//$(meVideo).get(0).pause();
		}
	});
});
*/