/* global console */

//;( function( $, window, document, undefined ) {
$(function () {
	'use strict';
	//console.log('StickyNav is here!');

	var elSelector	= '.autosticky',
		elClassHidden	= 'sticky-hidden',
		elClassNarrow	= 'sticky-shrink',
		elNarrowOffset	= 50,
		throttleTimeout	= 500,
		$element		= $( elSelector );

	if ( !$element.length ) {
		//console.log(elSelector);
		//console.log('.mainnav: ' + $(".mainnav").length);
		//console.log('Error: Element doesn\'t exist.');
		return true;
	}

	var $window			= $( window ),
		wHeight			= 0,
		wScrollCurrent	= 0,
		wScrollBefore	= 0,
		wScrollDiff		= 0,
		$document		= $( document ),
		dHeight			= 0,

	throttle = function( delay, fn ) {
			var last, deferTimer;
			return function() {
				var context = this, args = arguments, now = +new Date();
				if ( last && now < last + delay ) {
					clearTimeout( deferTimer );
					deferTimer = setTimeout( function(){ last = now; fn.apply( context, args ); }, delay );
				} else {
					last = now;
					fn.apply( context, args );
				}
			};
		};

		$window.on( 'scroll', throttle( throttleTimeout, function() {
		dHeight			= $document.height();
		wHeight			= $window.height();
		wScrollCurrent	= $window.scrollTop();
		wScrollDiff		= wScrollBefore - wScrollCurrent;

		$element.toggleClass( elClassNarrow, wScrollCurrent > elNarrowOffset ); // toggles "narrow" classname

		if ( wScrollCurrent <= 0 ) {
			//console.log('scrolled to the very top: element sticks to the top');
			$element.removeClass( elClassHidden );
		}
		
		/*else if ( wScrollDiff > 0 && $element.hasClass( elClassHidden ) ) {
			//console.log('scrolled up: element slides in');
			$element.removeClass( elClassHidden );
		}*/
		
		else if ( wScrollDiff > 0 && wScrollCurrent > 0 ) {
			//console.log('scrolled up + not top');
			$element.addClass( elClassHidden );
		}

		else if( wScrollDiff < 0 ) {
			// scrolled down
			if( wScrollCurrent + wHeight >= dHeight && $element.hasClass( elClassHidden ) ) {
				//console.log('scrolled to the very bottom: element slides in');
				//$element.removeClass( elClassHidden );
			}

			else {
				//console.log('scrolled down: element slides out');
				$element.addClass( elClassHidden );
			}
		}

		wScrollBefore = wScrollCurrent;
	}));

});
//})( jQuery, window, document );