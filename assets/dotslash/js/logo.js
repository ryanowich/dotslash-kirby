/*
global TweenMax, Power1, Back, 
$frontHeader, $logoWrap, $logoLink, $headerText, 
$strokeColor, $fillColor, $strokeColorInv, $fillColorInv, $navHoverColor, 
$d, $o, $o_left, $o_right, $t, $slash, $slash_rect, 
logoIn, logoOut
*/

// Declare global variables
//––––––––––––––––––––––––––––––––––––––––––––––––––
$(function () {
	$frontHeader = $("body.home .header");
	$logoWrap = $("body.home .header .dotslashlogo");
	$logoLink = $("body .dotslashlogo a");
	
	$d = $("body .dotslashlogo #logodot_text #d");
	$o = $("body .dotslashlogo #logodot_text #o_full");
	$o_left = $("body .dotslashlogo #logodot_text #o_left");
	$o_right = $("body .dotslashlogo #logodot_text #o_right");
	$t = $("body .dotslashlogo #logodot_text #t");
	$slash = $("body .dotslashlogo #logoslash_line #slash");
	$slash_rect = $("body .dotslashlogo #logoslash_line #slash_rect");
	
	$headerText = $("body.home .header h1, body.home .header h3");
	$strokeColor = '#1D1D1F';
	$fillColor = "#1D1D1F";
	$strokeColorInv = "#fff";
	$fillColorInv = "#fff";
	$navHoverColor = "#2098d1";
});




// Logo hover
$(function() {
	//$("body .header .logowrap").hide();
	
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
	//TweenMax.to($slash_rect, 0.1, {x:62.9, y:-12.3})
	//TweenMax.to($slash_rect, 0.1, {x:32, y:12, rotation:43, transformOrigin:"50% 50%"})
	//TweenMax.to($slash_rect, 0.1, {x:0, y:0, rotation:43, transformOrigin:"50% 50%"})
	//TweenMax.to($slash_rect, 0.1, {x:"0", y:0, rotation:0, height:"50%", transformOrigin:"50% 50%"})
	//TweenMax.to($slash_rect, 0.1, {x:0, y:0+(93/2/2), rotation:0, height:(93/2), transformOrigin:"50% 50%"})
	
	logoIn = function() {
		
		$logoWrap.removeClass('inv');
		
		// console.log('Logo: IN');
		TweenMax.to($d, 0.1, {x:9, ease:Power1.easeIn});
		TweenMax.to($o_left, 0.1, {x:5, ease:Power1.easeIn});
		TweenMax.to($o_right, 0.1, {x:-3, ease:Power1.easeIn});
		TweenMax.to($t, 0.1, {x:-9, ease:Power1.easeIn});
		
		// V1 Rotate on hover
		//TweenMax.set(o_full, {display:"block", fill:"yellow"}); // Just a helper
		TweenMax.to($slash, 0.1, {x:1, rotation:-43, transformOrigin:"50% 50%", ease:Power1.easeOut});
		//TweenMax.to($slash, 0.1, {x:1, rotation:-43, transformOrigin:"50% 50%", className:"+=hover", ease:Power1.easeOut});
		//TweenMax.to($slash, 0.1, {x:1, rotation:-43, transformOrigin:"50% 50%", stroke:"#2098d1", ease:Power1.easeOut});
		TweenMax.to($o_left, 0.1, {rotation:-43, transformOrigin:"15.15 15.05", ease:Power1.easeOut});
		TweenMax.to($o_right, 0.1, {rotation:-43, transformOrigin:"9.05 9.75", ease:Power1.easeOut});
		
		// V2 Rotate less on hover
		// TweenMax.to($slash, 0.1, {x:1, rotation:-90, transformOrigin:"50% 50%", ease:Power1.easeOut});
		// TweenMax.to($o_left, 0.1, {rotation:-90, transformOrigin:"15.15 15.05", ease:Power1.easeOut});
		// TweenMax.to($o_right, 0.1, {rotation:-90, transformOrigin:"9.05 9.75", ease:Power1.easeOut});
		
		//TweenMax.to($slash_rect, 0.1, {height:"50%", transformOrigin:"62.9px -12.3px"})
		//TweenMax.to($slash_rect, 0.1, {x:1, y:0, rotation:0, transformOrigin:"50% 50%"})
		//TweenMax.to($slash_rect, 0.1, {x:1, y:26, height:(93*0.45), transformOrigin:"50% 50%"})
		
		//TweenMax.set(o_full, {display:"block", delay:0.1});
		//TweenMax.set([o_left, o_right], {autoAlpha:0, delay:0.1});
	};
	logoOut = function() {
		// console.log('Logo: OUT');
		TweenMax.to($slash, 0.1, {x:0, rotation:0, transformOrigin:"50% 50%", ease:Back.easeOut});
		//TweenMax.to($slash, 0.1, {x:0, rotation:0, transformOrigin:"50% 50%", className:"-=hover", ease:Back.easeOut});
		TweenMax.to([$d, $o_left, $o_right, $t], 0.1, {x:0, ease:Back.easeOut});
		TweenMax.to([$o_left, $o_right], 0.1, {rotation:0, ease:Back.easeOut});
		TweenMax.set($o, {display:"none"});
		TweenMax.set([$o_left, $o_right], {autoAlpha:1});
		
		//TweenMax.to($slash_rect, 0.1, {height:"100%", x:62.9, y:12.3, height:93})
		//TweenMax.to($slash_rect, 0.1, {height:"100%", x:0, y:0})
		//TweenMax.to($slash_rect, 0.1, {x:32/2+2, y:5, rotation:43, height:80, transformOrigin:"50% 50%"})
	};
	
	$logoLink.hover( logoIn, logoOut );
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