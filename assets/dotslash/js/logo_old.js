/*global ScrollMagic, TimelineMax, TweenMax, Power1, Power2, Power3, Power4, Back, Expo */

/* Frontpage header animations */

// ScrollMagic
// ------------------------------------------

$(function () {
	
	// Helpers
	function pathPrepare($el) {
		var lineLength = $el[0].getTotalLength();
		$el.css("stroke-dasharray", lineLength);
		$el.css("stroke-dashoffset", lineLength);
	}
	
	// Header animation
	var $logowrap = $("body.home .header .logowrap");
	var $d = $("body.home .header svg#dotslash_logo path.d");
	var $o = $("body.home .header svg#dotslash_logo path.o");
	var $t = $("body.home .header svg#dotslash_logo path.t");
	var $slash = $("body.home .header svg#dotslash_logo #slash");
	//var $dot = $("body.home .header path.d, body.home .header path.o, body.home .header path.t"); // All of them
	var $o_sliced = $("body.home .header svg#dotslash_logo path.sliced");
	var $o_left = $("body.home .header svg#dotslash_logo .o_half.left");
	var $o_right = $("body.home .header svg#dotslash_logo .o_half.right");
	
	var $headerText = $("body.home .header h1, body.home .header h3");
	//var $h1 = $("body.home .header h1");
	//var $scrollIcon = $("body.home .header .scrolldown");
	
	//var $fillColor = "#1D1D1F";
	var $fillColor = "#fff";
	

	// prepare SVG
	pathPrepare($d);
	pathPrepare($o);
	pathPrepare($t);

	// Init controller
	var controller = new ScrollMagic.Controller();
	
	// Animate logo
	// --------------------------------------------------
	var headerLogoAnim = new TimelineMax();
	
	headerLogoAnim
		// Init, setup and hides
		.set([$logowrap, $o_sliced, $slash], {autoAlpha:0}, "init") // Hide and add init label
		.set($d, {x:7}, "init")
		.set($t, {x:-9}, "init")
		.set($logowrap, {autoAlpha:1, visibility:"visible"}, "init") // Initially hidden, now show
		
		// Animate logo in
		.staggerTo([$d, $o, $t], 0.9, {strokeDashoffset:0, delay:1.0, ease:Power1.easeOut}, 0.1, "logostroke") // Stroke
		.staggerTo([$d, $o, $t], 0.5, {fill:$fillColor, ease:Power4.easeOut, immediateRender:true}, 0.1, "logostroke+=1.5") // Fill
		.addLabel("slice+=0.5")
		.addLabel("move-=0.5")
		
		// Slash slices the O in half
		.set($slash, {autoAlpha: 1}, "slice")
		.fromTo($slash, 0.1, {height:0}, {height:137, ease:Expo.easeInOut}, "slice")
		
		// Move out to sides
		.set($o, {autoAlpha:0}, "move") // Switch with sliced O
		.to($o_left, 0.2, {autoAlpha:1, x:-9, ease:Back.easeOut.config(2)}, "move")
		.to($o_right, 0.2, {autoAlpha:1, x:8, ease:Back.easeOut.config(2)}, "move")
		.to($d, 0.2, {x:-7, ease:Back.easeOut.config(2)}, "move")
		.to($t, 0.2, {x:5, ease:Back.easeOut.config(2)}, "move")
		
		// DEV
		//.set([$d, $o_left, $o_right, $t], {x:0, y:0})
		
		/*
		// Show header texts
		.to($h1, 0, {visibility:"visible", autoAlpha: 1})
		.staggerFromTo($("body.home .header h1 span"), 0.2, {autoAlpha:0}, {delay:0.2, autoAlpha:1, ease:Power1.easeOut}, 0.1)
		.fromTo($("body.home .header h3"), 0.2, {y:-5, autoAlpha:0}, {y:0, autoAlpha: 1, ease:Power1.easeOut})
		*/
	
		/*
		// Scroll icon
		.to($scrollIcon, 0, {autoAlpha:1, visibility:"visible"})
		.fromTo($scrollIcon, 0.3, {y:-35}, {y:0, autoAlpha:1, ease:Power3.easeInOut}, "+=0.2")
		*/
		
		/*
		// Scroll to portfolio anchor
		.to(window, 1, {scrollTo:folioPos, delay:0.2, ease:Expo.easeInOut})
		.set($logowrap, {className:"+=pinned"}, "-=0.5")
		.set($logowrap, {className:"+=inv"}, "-=0.3");
		//.to($scrollIcon, 0.4, {autoAlpha: 0}, "-=0.5")
		*/
		
		.to($("body.home .header"), 0.7, {height:0, ease:Power2.easeIn}, "+=0.2")
		.set($logowrap, {className:"+=pinned"}, "+=0.0")
		.set($logowrap, {className:"+=inv"}, "+=0.0")
		.set($headerText, {autoAlpha:0});

	// build scene
	var scene1 = new ScrollMagic.Scene({
			//triggerElement:"#trigger", 
			offset:0,
			//duration:800, 
			tweenChanges:true
		})
		.setTween(headerLogoAnim)
		//.addIndicators({name:"logoAnim"}) // add indicators (requires plugin)
		.addTo(controller);
	
	/*
	// Wipe to portfolio
	// --------------------------------------------------
	var headerWipe = new TimelineMax();
	
	var folioAnchor = $("a[name=portfolio]"),
	folioPos = folioAnchor.offset().top;
	//console.log('folioAnchor scroll position: ' + folioPos);
	
	headerWipe
		.to($("body.home .header"), 0.1, {height:0, ease:Expo.easeIn})
		.set($logowrap, {className:"+=pinned"}, "+=0.8")
		.set($logowrap, {className:"+=inv"}, "+=0.1");
	
	// build scene
	var scene2 = new ScrollMagic.Scene({
			//triggerElement:"#trigger", 
			offset:0,
			//duration:800, 
			tweenChanges:true
		})
		.setTween(headerWipe)
		//.addIndicators({name:"logoAnim"}) // add indicators (requires plugin)
		.addTo(controller);
	*/
	
	// Case items stagger in
	// --------------------------------------------------
	var folioStaggerIn = new TimelineMax();
	folioStaggerIn
		//.set($("body.home .main .case_teaser a"), {className:"+=active"})
		.set("body.home .main ul.cases", {autoAlpha:1})
		.staggerFrom($("body.home .main ul.cases .case_teaser"), 0.3, {y:60, opacity:0, ease:Power1.easeOut}, 0.2);
	
	var scene3 = new ScrollMagic.Scene({
			triggerElement:"ul.cases", 
			//duration:300
		})
		.setTween(folioStaggerIn)
		//.addIndicators({name:"staggering"}) // add indicators (requires plugin)
		.addTo(controller);
		
		// DEV
		//headerLogoAnim.seek(4);

});


// Logo hover
$(function() {
	//$("body .header .logowrap").hide();
	
	var logo = $("body .dotslashlogo a");
	var d = $("body .dotslashlogo #logodot_text #d");
	var o_full = $("body .dotslashlogo #logodot_text #o_full");
	var o_left = $("body .dotslashlogo #logodot_text #o_left");
	var o_right = $("body .dotslashlogo #logodot_text #o_right");
	var t = $("body .dotslashlogo #logodot_text #t");
	var slash = $("body .dotslashlogo #logoslash_line #slash");
	//var slashLength = slash[0].getTotalLength();
	//var slashLength = document.getElementById("body .dotslashlogo #logoslash_line #slash").getTotalLength();
	//var path = document.querySelector('#slash');
	//var length = path.getTotalLength();
	//console.log('SlashLength: ' + length);
	//console.log(slash.getBBox());
	
	//var slashLength = 137;
	//slash.css("stroke-dasharray", slashLength);
	//slash.css("stroke-dashoffset", slashLength);
	
	/*
	var	oFullWidth	=	30.3,
			oFullHeight	=	30.1,
			oLeftWidth	=	23.5,
			oLeftHeight	=	24.2,
			oRightWidth	=	24.2,
			oRightWidth	=	24.8;
	
	// Calculation notes
	o_full: 30.3 x 30.1

	o_left: 23.5 x 24.2
	o_right: 24.2 x 24.8

	o_left rotation center: (30.3/2)=15.15 (30.1/2)=15.05
	o_right rotation center: (24.2-15.15)=9.05 (24.8-15.05)=9.75
	*/
	
	//o_full.show();
	
	logoIn = function() {
		// console.log('Logo: IN');
		TweenMax.to(d, 0.1, {x:9, ease:Power1.easeIn})
		TweenMax.to(o_left, 0.1, {x:6, ease:Power1.easeIn})
		TweenMax.to(o_right, 0.1, {x:-4, ease:Power1.easeIn})
		TweenMax.to(t, 0.1, {x:-9, ease:Power1.easeIn})
		
		//TweenMax.set(o_full, {display:"block", fill:"yellow"}) // Just a helper
		TweenMax.to(slash, 0.1, {rotation:-43, transformOrigin:"50% 50%", ease:Power1.easeOut})
		TweenMax.to(o_left, 0.1, {rotation:-43, transformOrigin:"15.15 15.05", ease:Power1.easeOut})
		TweenMax.to(o_right, 0.1, {rotation:-43, transformOrigin:"9.05 9.75", ease:Power1.easeOut})
		
		//TweenMax.set(o_full, {display:"block", delay:0.1})
		//TweenMax.set([o_left, o_right], {autoAlpha:0, delay:0.1})
	};
	logoOut = function() {
		// console.log('Logo: OUT');
		TweenMax.to(slash, 0.1, {rotation:0, height:"100%", transformOrigin:"50% 50%", ease:Back.easeOut})
		TweenMax.to([d, o_left, o_right, t], 0.1, {x:0, ease:Back.easeOut})
		TweenMax.to([o_left, o_right], 0.1, {rotation:0, ease:Back.easeOut})
		TweenMax.set(o_full, {display:"none"})
		TweenMax.set([o_left, o_right], {autoAlpha:1})
	};
	
	logo.hover( logoIn, logoOut );
});

/*
// Sticky logo
// ------------------------------------------

$(function() {
 
	var stickyLogo = function(){
		var scrollPos = $(window).scrollTop();
		var logoWrap = $("body.home .header .logowrap");
		var invPos = $("body.home .header").height() - (logoWrap.height() / 2);
		//var logoHeight = invPos - (logoWrap.height() / 2);
		
		//var logoPinPosition = 378;
		var logoPinPosition = logoWrap.offset().top;
		
		console.log('header height: ' + invPos);
		console.log(scrollPos + ' / ' + logoPinPosition);
		
		// Check for pin
		if (scrollPos > logoPinPosition) {
			logoWrap.addClass("pinned");
		} else {
			logoWrap.removeClass("pinned");
		}
		// Check for inv
		if (scrollPos > invPos) {
			logoWrap.addClass("inv");
		} else {
			logoWrap.removeClass("inv");
		}
	};
 
	// Run stickyLogo() on load
	//stickyLogo();
 
	// Run stickyLogo() on scroll
	$(window).scroll(function() {
		// var scrollPos = $(window).scrollTop();
		// var logoPinPosition = 285;
		// var separator = '';
		// if (scrollPos < logoPinPosition) {
		// 	separator = '<';
		// } else {
		// 	separator = '>';
		// }
		// console.log(scrollPos + separator + logoPinPosition);
		
		stickyLogo();
	});
	
	// From http://www.hnldesign.nl/work/code/debouncing-events-with-jquery/
	deBouncer(jQuery,'smartscroll', 'scroll', 100);
	$(window).smartscroll(function(e){
		stickyLogo();
	});
});
*/