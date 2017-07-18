/*
global ScrollMagic, TimelineMax, pathPrepare, Power1, Power2, Power4, Back, Expo, 
$frontHeader, $logoWrap, $strokeColorInv, $fillColorInv, 
$d, $o, $o_left, $o_right, $t, $slash, $slash_rect, 
urlHash, addHash
*/

/* Frontpage header animations */

// ScrollMagic
// ------------------------------------------

$(function () {
	
	// Remember variables first in logo.js
	
	// Init controller
	var controller = new ScrollMagic.Controller();
	
	// IE Proof - URL Hash Grab - returns complete hash value
	// From http://www.sitepoint.com/hash-urls/
	//function = urlHash() {
	urlHash = function() {
		return document.URL.substr(document.URL.indexOf('#')+1);
	};
	//console.log(urlHash());
	
	// Add #hash
	addHash = function() {
		if(history.pushState) {
			history.pushState(null, null, '#portfolio');
		}
		else {
			location.hash = '#portfolio';
		}
		
		// var el = document.getElementById('portfolio');
		// var id = el.id;
		// el.removeAttribute('id');
		// location.hash = 'portfolio';
		// el.setAttribute('id',id);
		
		//console.log('headerLogoAnim complete');
	};
	
	// Helpers
	//function pathPrepare($el) {
	pathPrepare = function($el) {
		var lineLength = $el[0].getTotalLength();
		//var lineLength = 100;
		$el.css("stroke-dasharray", lineLength);
		$el.css("stroke-dashoffset", lineLength);
	};
	
	if (urlHash() !== 'portfolio') {
		
		// prepare SVG
		pathPrepare($d);
		pathPrepare($o);
		pathPrepare($t);
	
		// Animate logo
		// --------------------------------------------------
		var headerLogoAnim = new TimelineMax({
			onComplete: addHash
		});
	
		headerLogoAnim
			// Init, setup and hides
			.set([$logoWrap, $o, $o_left, $o_right, $slash], {autoAlpha:0}, "init") // Hide and add init label
			.set($frontHeader, {height:"100%"})
			.set($logoWrap, {className:"+=inv"})
			.set($logoWrap, {className:"-=pinned"})
			.set([$d, $o, $t], {stroke:$strokeColorInv, fill:"transparent"})
			.set([$o_left, $o_right, $slash], {stroke:$strokeColorInv, fill:$fillColorInv})
			// .set($d, {x:7}, "init")
			// .set($t, {x:-9}, "init")
			.set($o_left, {x:9}, "init")
			.set($o_right, {x:-8}, "init")
			.set($d, {x:9}, "init")
			.set($t, {x:-8}, "init")
			.set([$o, $logoWrap], {autoAlpha:1, visibility:"visible", display:"block"}, "init") // Initially hidden, now show
		
			// Animate logo in
			.staggerTo([$d, $o, $t], 0.9, {strokeDashoffset:0, delay:1.0, ease:Power1.easeOut}, 0.1, "logostroke") // Stroke
			.staggerTo([$d, $o, $t], 0.5, {fill:$fillColorInv, ease:Power4.easeOut, immediateRender:true}, 0.1, "logostroke+=1.5") // 'Animate fill
			.addLabel("slice+=0.5")
			.addLabel("move-=0.5")
		
			// Slash slices the O in half
			.set($slash, {autoAlpha: 1}, "slice")
			.fromTo($slash, 0.1, {height:0}, {height:137, ease:Expo.easeInOut}, "slice")
		
			// Move out to sides
			.set($o, {autoAlpha:0}, "move") // Switch with sliced O
			// .to($o_left, 0.2, {autoAlpha:1, x:-9, ease:Back.easeOut.config(2)}, "move")
			// .to($o_right, 0.2, {autoAlpha:1, x:8, ease:Back.easeOut.config(2)}, "move")
			// .to($d, 0.2, {x:-7, ease:Back.easeOut.config(2)}, "move")
			// .to($t, 0.2, {x:5, ease:Back.easeOut.config(2)}, "move")
		
			.to($o_left, 0.1, {autoAlpha:1, x:0, ease:Back.easeOut.config(2)}, "move")
			.to($o_right, 0.1, {autoAlpha:1, x:0, ease:Back.easeOut.config(2)}, "move")
			.to($d, 0.1, {x:0, ease:Back.easeOut.config(2)}, "move")
			.to($t, 0.1, {x:0, ease:Back.easeOut.config(2)}, "move")
		
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
			.set($logoWrap, {className:"+=pinned"}, "-=0.5")
			.set($logoWrap, {className:"+=inv"}, "-=0.3");
			//.to($scrollIcon, 0.4, {autoAlpha: 0}, "-=0.5")
			*/
		
			//.set($headerText, {autoAlpha:0}) // Hide H1 and H3
			.set($logoWrap, {className:"-=autosticky"})
			.to($frontHeader, 0.6, {height:0, ease:Power2.easeIn}, "+=0.2") // Shrink header
			//.to($frontHeader, 0.6, {height:"15%", ease:Power2.easeIn}, "+=0.2") // Shrink header
			.set($logoWrap, {className:"+=pinned"}, "-=0.0")
			.set($logoWrap, {className:"-=inv"}, "+=0.0")
			//.set($frontHeader, {height:0}) // Shrink header to 0
			.set($logoWrap, {className:"+=autosticky"})
			.addLabel("headerLogoAnimDone")
			.set([$d, $o_left, $o_right, $t, $slash, $slash_rect], {clearProps:"all"});
		
		// build scene
		var scene1 = new ScrollMagic.Scene({
				//triggerElement:$headerText, 
				//triggerElement: "body.home .header h1",
				triggerElement: "body.home .logoanimtrigger",
				//triggerHook: "onLeave",
				//offset:-50,
				//duration:800, 
				//tweenChanges:true
			})
			.setTween(headerLogoAnim)
			//.addIndicators({name:"logoAnim"}) // add indicators (requires plugin)
			.addTo(controller);
	
	} // Endif
	
	/*
	// Wipe to portfolio
	// --------------------------------------------------
	var headerWipe = new TimelineMax();
	
	var folioAnchor = $("a[name=portfolio]"),
	folioPos = folioAnchor.offset().top;
	//console.log('folioAnchor scroll position: ' + folioPos);
	
	headerWipe
		.to($("body.home .header"), 0.1, {height:0, ease:Expo.easeIn})
		.set($logoWrap, {className:"+=pinned"}, "+=0.8")
		.set($logoWrap, {className:"-=inv"}, "+=0.1");
	
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
			//duration:300,
			//onStart:forceCompleteAnim()
		})
		.setTween(folioStaggerIn)
		//.addIndicators({name:"portfolio"})
		.addTo(controller);

});