/*! modernizr 3.0.0-alpha.3 (Custom Build) | MIT *
 * http://v3.modernizr.com/download/#-apng-backgroundsize-bgpositionshorthand-bgsizecover-borderradius-boxsizing-cssanimations-cssfilters-csshyphens_softhyphens_softhyphensfind-cssmask-csspointerevents-cssremunit-cssscrollbar-csstransforms-csstransforms3d-csstransitions-cssvhunit-cssvmaxunit-cssvminunit-cssvwunit-flexbox-fontface-inlinesvg-mediaqueries-nthchild-objectfit-opacity-overflowscrolling-picture-rgba-shapes-srcset-supports-svg-svgasimg-svgclippaths-target-touchevents-video-videoautoplay-videoloop-videopreload-shiv !*/
!function(e,t,A){function n(e,t){return typeof e===t}function o(){var e,t,A,o,i,r,a;for(var s in y){if(e=[],t=y[s],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(A=0;A<t.options.aliases.length;A++)e.push(t.options.aliases[A].toLowerCase());for(o=n(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)r=e[i],a=r.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),b.push((o?"":"no-")+a.join("-"))}}function i(e){var t=x.className,A=Modernizr._config.classPrefix||"";if(Modernizr._config.enableJSClass){var n=new RegExp("(^|\\s)"+A+"no-js(\\s|$)");t=t.replace(n,"$1"+A+"js$2")}Modernizr._config.enableClasses&&(t+=" "+A+e.join(" "+A),x.className=t)}function r(e,t){return e-1===t||e===t||e+1===t}function a(e,t){if("object"==typeof e)for(var A in e)k(e,A)&&a(A,e[A]);else{e=e.toLowerCase();var n=e.split("."),o=Modernizr[n[0]];if(2==n.length&&(o=o[n[1]]),"undefined"!=typeof o)return Modernizr;t="function"==typeof t?t():t,1==n.length?Modernizr[n[0]]=t:(!Modernizr[n[0]]||Modernizr[n[0]]instanceof Boolean||(Modernizr[n[0]]=new Boolean(Modernizr[n[0]])),Modernizr[n[0]][n[1]]=t),i([(t&&0!=t?"":"no-")+n.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function s(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,A){return t+A.toUpperCase()}).replace(/^-/,"")}function l(){var e=t.body;return e||(e=C("body"),e.fake=!0),e}function d(e,t,A,n){var o,i,r,a,s="modernizr",d=C("div"),c=l();if(parseInt(A,10))for(;A--;)r=C("div"),r.id=n?n[A]:s+(A+1),d.appendChild(r);return o=["&#173;",'<style id="s',s,'">',e,"</style>"].join(""),d.id=s,(c.fake?c:d).innerHTML+=o,c.appendChild(d),c.fake&&(c.style.background="",c.style.overflow="hidden",a=x.style.overflow,x.style.overflow="hidden",x.appendChild(c)),i=t(d,e),c.fake?(c.parentNode.removeChild(c),x.style.overflow=a,x.offsetHeight):d.parentNode.removeChild(d),!!i}function c(e,t){return!!~(""+e).indexOf(t)}function u(e,t){return function(){return e.apply(t,arguments)}}function p(e,t,A){var o;for(var i in e)if(e[i]in t)return A===!1?e[i]:(o=t[e[i]],n(o,"function")?u(o,A||t):o);return!1}function f(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(t,n){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(f(t[o]),n))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+f(t[o])+":"+n+")");return i=i.join(" or "),d("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return A}function h(e,t,o,i){function r(){l&&(delete P.style,delete P.modElem)}if(i=n(i,"undefined")?!1:i,!n(o,"undefined")){var a=m(e,o);if(!n(a,"undefined"))return a}var l,d,u,p,f;for(P.style||(l=!0,P.modElem=C("modernizr"),P.style=P.modElem.style),u=e.length,d=0;u>d;d++)if(p=e[d],f=P.style[p],c(p,"-")&&(p=s(p)),P.style[p]!==A){if(i||n(o,"undefined"))return r(),"pfx"==t?p:!0;try{P.style[p]=o}catch(h){}if(P.style[p]!=f)return r(),"pfx"==t?p:!0}return r(),!1}function g(e,t,A,o,i){var r=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+Q.join(r+" ")+r).split(" ");return n(t,"string")||n(t,"undefined")?h(a,t,o,i):(a=(e+" "+V.join(r+" ")+r).split(" "),p(a,t,A))}function v(e,t,n){return g(e,A,A,t,n)}var b=[];!function(e,t){function A(e,t){var A=e.createElement("p"),n=e.getElementsByTagName("head")[0]||e.documentElement;return A.innerHTML="x<style>"+t+"</style>",n.insertBefore(A.lastChild,n.firstChild)}function n(){var e=b.elements;return"string"==typeof e?e.split(" "):e}function o(e,t){var A=b.elements;"string"!=typeof A&&(A=A.join(" ")),"string"!=typeof e&&(e=e.join(" ")),b.elements=A+" "+e,l(t)}function i(e){var t=v[e[h]];return t||(t={},g++,e[h]=g,v[g]=t),t}function r(e,A,n){if(A||(A=t),c)return A.createElement(e);n||(n=i(A));var o;return o=n.cache[e]?n.cache[e].cloneNode():m.test(e)?(n.cache[e]=n.createElem(e)).cloneNode():n.createElem(e),!o.canHaveChildren||f.test(e)||o.tagUrn?o:n.frag.appendChild(o)}function a(e,A){if(e||(e=t),c)return e.createDocumentFragment();A=A||i(e);for(var o=A.frag.cloneNode(),r=0,a=n(),s=a.length;s>r;r++)o.createElement(a[r]);return o}function s(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(A){return b.shivMethods?r(A,e,t):t.createElem(A)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+n().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(b,t.frag)}function l(e){e||(e=t);var n=i(e);return!b.shivCSS||d||n.hasCSS||(n.hasCSS=!!A(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),c||s(e,n),e}var d,c,u="3.7.2",p=e.html5||{},f=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,m=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",g=0,v={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",d="hidden"in e,c=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(A){d=!0,c=!0}}();var b={elements:p.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:u,shivCSS:p.shivCSS!==!1,supportsUnknownElements:c,shivMethods:p.shivMethods!==!1,type:"default",shivDocument:l,createElement:r,createDocumentFragment:a,addElements:o};e.html5=b,l(t)}(this,t);var y=[],w={_version:"3.0.0-alpha.3",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var A=this;setTimeout(function(){t(A[e])},0)},addTest:function(e,t,A){y.push({name:e,fn:t,options:A})},addAsyncTest:function(e){y.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=w,Modernizr=new Modernizr,Modernizr.addTest("target",function(){var t=e.document;if(!("querySelectorAll"in t))return!1;try{return t.querySelectorAll(":target"),!0}catch(A){return!1}});var E="CSS"in e&&"supports"in e.CSS,T="supportsCSS"in e;Modernizr.addTest("supports",E||T),Modernizr.addTest("picture","HTMLPictureElement"in e),Modernizr.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var x=t.documentElement,C=function(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):t.createElement.apply(t,arguments)};Modernizr.addTest("bgpositionshorthand",function(){var e=C("a"),t=e.style,A="right 10px bottom 10px";return t.cssText="background-position: "+A+";",t.backgroundPosition===A}),Modernizr.addTest("cssremunit",function(){var e=C("div");try{e.style.fontSize="3rem"}catch(t){}return/rem/.test(e.style.fontSize)}),Modernizr.addTest("csspointerevents",function(){var e=C("x");return e.style.cssText="pointer-events:auto","auto"===e.style.pointerEvents}),Modernizr.addTest("rgba",function(){var e=C("div"),t=e.style;return t.cssText="background-color:rgba(150,255,150,.5)",(""+t.backgroundColor).indexOf("rgba")>-1}),Modernizr.addTest("video",function(){var e=C("video"),t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),t.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),t.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(A){}return t}),Modernizr.addTest("inlinesvg",function(){var e=C("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==(e.firstChild&&e.firstChild.namespaceURI)}),Modernizr.addTest("srcset","srcset"in C("img")),Modernizr.addTest("videoloop","loop"in C("video")),Modernizr.addTest("videopreload","preload"in C("video")),Modernizr.addTest("canvas",function(){var e=C("canvas");return!(!e.getContext||!e.getContext("2d"))});var R=w._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];w._prefixes=R,Modernizr.addTest("cssfilters",function(){var n=C("div");if(n.style.cssText=R.join("filter:blur(2px); "),Modernizr.supports){var o="CSS"in e?e.CSS.supports("filter","url()"):e.supportsCSS("filter","url()");return o}return!!n.style.length&&(t.documentMode===A||t.documentMode>9)}),Modernizr.addTest("opacity",function(){var e=C("div"),t=e.style;return t.cssText=R.join("opacity:.55;"),/^0.55$/.test(t.opacity)});var B={}.toString;Modernizr.addTest("svgclippaths",function(){return!!t.createElementNS&&/SVGClipPath/.test(B.call(t.createElementNS("http://www.w3.org/2000/svg","clipPath")))});var k;!function(){var e={}.hasOwnProperty;k=n(e,"undefined")||n(e.call,"undefined")?function(e,t){return t in e&&n(e.constructor.prototype[t],"undefined")}:function(t,A){return e.call(t,A)}}(),w._l={},w.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},w._trigger=function(e,t){if(this._l[e]){var A=this._l[e];setTimeout(function(){var e,n;for(e=0;e<A.length;e++)(n=A[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){w.addTest=a}),Modernizr.addAsyncTest(function(){if(!Modernizr.canvas)return!1;var e=new Image,t=C("canvas"),A=t.getContext("2d");e.onload=function(){a("apng",function(){return"undefined"==typeof t.getContext?!1:(A.drawImage(e,0,0),0===A.getImageData(0,0,1,1).data[3])})},e.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACGFjVEwAAAABAAAAAcMq2TYAAAANSURBVAiZY2BgYPgPAAEEAQB9ssjfAAAAGmZjVEwAAAAAAAAAAQAAAAEAAAAAAAAAAAD6A+gBAbNU+2sAAAARZmRBVAAAAAEImWNgYGBgAAAABQAB6MzFdgAAAABJRU5ErkJggg=="}),Modernizr.addTest("svgasimg",t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")),Modernizr.addAsyncTest(function(){var e,t=300,A=C("video"),n=A.style,o=function(t){clearTimeout(e),A.removeEventListener("playing",o),a("videoautoplay",t&&"playing"===t.type||0!==A.currentTime),A.parentNode.removeChild(A)};if(!(Modernizr.video&&"autoplay"in A))return void a("videoautoplay",!1);n.position="absolute",n.height=0,n.width=0;try{if(Modernizr.video.ogg)A.src="data:video/ogg;base64,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";else{if(!Modernizr.video.h264)return void a("videoautoplay",!1);A.src="data:video/mp4;base64,AAAAHGZ0eXBtcDQyAAAAAG1wNDJpc29tYXZjMQAAAz5tb292AAAAbG12aGQAAAAAzaNacc2jWnEAAV+QAAFfkAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAGGlvZHMAAAAAEICAgAcAT////3//AAACQ3RyYWsAAABcdGtoZAAAAAHNo1pxzaNacQAAAAEAAAAAAAFfkAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAEAAAABAAAAAAAd9tZGlhAAAAIG1kaGQAAAAAzaNacc2jWnEAAV+QAAFfkFXEAAAAAAAhaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAAAAAAGWbWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAABVnN0YmwAAACpc3RzZAAAAAAAAAABAAAAmWF2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAEAAQAEgAAABIAAAAAAAAAAEOSlZUL0FWQyBDb2RpbmcAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAxYXZjQwH0AAr/4QAZZ/QACq609NQYBBkAAAMAAQAAAwAKjxImoAEABWjOAa8gAAAAEmNvbHJuY2xjAAYAAQAGAAAAGHN0dHMAAAAAAAAAAQAAAAUAAEZQAAAAKHN0c3oAAAAAAAAAAAAAAAUAAAIqAAAACAAAAAgAAAAIAAAACAAAAChzdHNjAAAAAAAAAAIAAAABAAAABAAAAAEAAAACAAAAAQAAAAEAAAAYc3RjbwAAAAAAAAACAAADYgAABaQAAAAUc3RzcwAAAAAAAAABAAAAAQAAABFzZHRwAAAAAAREREREAAAAb3VkdGEAAABnbWV0YQAAAAAAAAAhaGRscgAAAAAAAAAAbWRpcgAAAAAAAAAAAAAAAAAAAAA6aWxzdAAAADKpdG9vAAAAKmRhdGEAAAABAAAAAEhhbmRCcmFrZSAwLjkuOCAyMDEyMDcxODAwAAACUm1kYXQAAAHkBgX/4NxF6b3m2Ui3lizYINkj7u94MjY0IC0gY29yZSAxMjAgLSBILjI2NC9NUEVHLTQgQVZDIGNvZGVjIC0gQ29weWxlZnQgMjAwMy0yMDExIC0gaHR0cDovL3d3dy52aWRlb2xhbi5vcmcveDI2NC5odG1sIC0gb3B0aW9uczogY2FiYWM9MCByZWY9MSBkZWJsb2NrPTE6MDowIGFuYWx5c2U9MHgxOjAgbWU9ZXNhIHN1Ym1lPTkgcHN5PTAgbWl4ZWRfcmVmPTAgbWVfcmFuZ2U9NCBjaHJvbWFfbWU9MSB0cmVsbGlzPTAgOHg4ZGN0PTAgY3FtPTAgZGVhZHpvbmU9MjEsMTEgZmFzdF9wc2tpcD0wIGNocm9tYV9xcF9vZmZzZXQ9MCB0aHJlYWRzPTYgc2xpY2VkX3RocmVhZHM9MCBucj0wIGRlY2ltYXRlPTEgaW50ZXJsYWNlZD0wIGJsdXJheV9jb21wYXQ9MCBjb25zdHJhaW5lZF9pbnRyYT0wIGJmcmFtZXM9MCB3ZWlnaHRwPTAga2V5aW50PTUwIGtleWludF9taW49NSBzY2VuZWN1dD00MCBpbnRyYV9yZWZyZXNoPTAgcmM9Y3FwIG1idHJlZT0wIHFwPTAAgAAAAD5liISscR8A+E4ACAACFoAAITAAAgsAAPgYCoKgoC+L4vi+KAvi+L4YfAEAACMzgABF9AAEUGUgABDJiXnf4AAAAARBmiKUAAAABEGaQpQAAAAEQZpilAAAAARBmoKU"}}catch(i){return void a("videoautoplay",!1)}A.setAttribute("autoplay",""),A.style="display:none",x.appendChild(A),setTimeout(function(){A.addEventListener("playing",o),e=setTimeout(o,t)},0)});var S=w.testStyles=d,F=function(){var e=navigator.userAgent,t=e.match(/applewebkit\/([0-9]+)/gi)&&parseFloat(RegExp.$1),A=e.match(/w(eb)?osbrowser/gi),n=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9,o=533>t&&e.match(/android/gi);return A||o||n}();F?Modernizr.addTest("fontface",!1):S('@font-face {font-family:"font";src:url("https://")}',function(e,A){var n=t.getElementById("smodernizr"),o=n.sheet||n.styleSheet,i=o?o.cssRules&&o.cssRules[0]?o.cssRules[0].cssText:o.cssText||"":"",r=/src/i.test(i)&&0===i.indexOf(A.split(" ")[0]);Modernizr.addTest("fontface",r)}),S("#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}",function(e){Modernizr.addTest("nthchild",function(){for(var t=e.getElementsByTagName("div"),A=!0,n=0;5>n;n++)A=A&&t[n].offsetWidth===n%2+1;return A})},5),S("#modernizr{overflow: scroll; width: 40px; height: 40px; }#"+R.join("scrollbar{width:0px} #modernizr::").split("#").slice(1).join("#")+"scrollbar{width:0px}",function(e){Modernizr.addTest("cssscrollbar",40==e.scrollWidth)}),S("#modernizr { height: 50vh; }",function(t){var A=parseInt(e.innerHeight/2,10),n=parseInt((e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).height,10);Modernizr.addTest("cssvhunit",n==A)}),S("#modernizr1{width: 50vmax}#modernizr2{width:50px;height:50px;overflow:scroll}",function(){var A=t.getElementById("modernizr1"),n=t.getElementById("modernizr2"),o=parseInt((n.offsetWidth-n.clientWidth)/2,10),i=x.clientWidth/100,a=x.clientHeight/100,s=parseInt(50*Math.max(i,a),10),l=parseInt((e.getComputedStyle?getComputedStyle(A,null):A.currentStyle).width,10);Modernizr.addTest("cssvmaxunit",r(s,l)||r(s,l-o))},2),S("#modernizr1{width: 50vm;width:50vmin}#modernizr2{width:50px;height:50px;overflow:scroll}",function(){var A=t.getElementById("modernizr1"),n=t.getElementById("modernizr2"),o=parseInt((n.offsetWidth-n.clientWidth)/2,10),i=x.clientWidth/100,a=x.clientHeight/100,s=parseInt(50*Math.min(i,a),10),l=parseInt((e.getComputedStyle?getComputedStyle(A,null):A.currentStyle).width,10);Modernizr.addTest("cssvminunit",r(s,l)||r(s,l-o))},2),S("#modernizr { width: 50vw; }",function(t){var A=parseInt(e.innerWidth/2,10),n=parseInt((e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).width,10);Modernizr.addTest("cssvwunit",n==A)}),Modernizr.addTest("touchevents",function(){var A;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)A=!0;else{var n=["@media (",R.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");S(n,function(e){A=9===e.offsetTop})}return A});var U=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var A=t(e);return A&&A.matches||!1}:function(t){var A=!1;return d("@media "+t+" { #modernizr { position: absolute; } }",function(t){A="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),A}}(),G=w.mq=U;Modernizr.addTest("mediaqueries",G("only all"));var M="Moz O ms Webkit",Q=w._config.usePrefixes?M.split(" "):[];w._cssomPrefixes=Q;var I=function(t){var n,o=R.length,i=e.CSSRule;if("undefined"==typeof i)return A;if(!t)return!1;if(t=t.replace(/^@/,""),n=t.replace(/-/g,"_").toUpperCase()+"_RULE",n in i)return"@"+t;for(var r=0;o>r;r++){var a=R[r],s=a.toUpperCase()+"_"+n;if(s in i)return"@-"+a.toLowerCase()+"-"+t}return!1},V=w._config.usePrefixes?M.toLowerCase().split(" "):[];w._domPrefixes=V;var Y={elem:C("modernizr")};Modernizr._q.push(function(){delete Y.elem});var P={style:Y.elem.style};Modernizr._q.unshift(function(){delete P.style}),w.testAllProps=g,w.testAllProps=v,Modernizr.addTest("backgroundsize",v("backgroundSize","100%",!0)),Modernizr.addTest("bgsizecover",v("backgroundSize","cover")),Modernizr.addTest("borderradius",v("borderRadius","0px",!0)),Modernizr.addTest("boxsizing",v("boxSizing","border-box",!0)&&(t.documentMode===A||t.documentMode>7)),Modernizr.addTest("cssanimations",v("animationName","a",!0)),Modernizr.addAsyncTest(function(){function A(){function o(){try{var e=C("div"),A=C("span"),n=e.style,o=0,i=0,r=!1,a=t.body.firstElementChild||t.body.firstChild;return e.appendChild(A),A.innerHTML="Bacon ipsum dolor sit amet jerky velit in culpa hamburger et. Laborum dolor proident, enim dolore duis commodo et strip steak. Salami anim et, veniam consectetur dolore qui tenderloin jowl velit sirloin. Et ad culpa, fatback cillum jowl ball tip ham hock nulla short ribs pariatur aute. Pig pancetta ham bresaola, ut boudin nostrud commodo flank esse cow tongue culpa. Pork belly bresaola enim pig, ea consectetur nisi. Fugiat officia turkey, ea cow jowl pariatur ullamco proident do laborum velit sausage. Magna biltong sint tri-tip commodo sed bacon, esse proident aliquip. Ullamco ham sint fugiat, velit in enim sed mollit nulla cow ut adipisicing nostrud consectetur. Proident dolore beef ribs, laborum nostrud meatball ea laboris rump cupidatat labore culpa. Shankle minim beef, velit sint cupidatat fugiat tenderloin pig et ball tip. Ut cow fatback salami, bacon ball tip et in shank strip steak bresaola. In ut pork belly sed mollit tri-tip magna culpa veniam, short ribs qui in andouille ham consequat. Dolore bacon t-bone, velit short ribs enim strip steak nulla. Voluptate labore ut, biltong swine irure jerky. Cupidatat excepteur aliquip salami dolore. Ball tip strip steak in pork dolor. Ad in esse biltong. Dolore tenderloin exercitation ad pork loin t-bone, dolore in chicken ball tip qui pig. Ut culpa tongue, sint ribeye dolore ex shank voluptate hamburger. Jowl et tempor, boudin pork chop labore ham hock drumstick consectetur tri-tip elit swine meatball chicken ground round. Proident shankle mollit dolore. Shoulder ut duis t-bone quis reprehenderit. Meatloaf dolore minim strip steak, laboris ea aute bacon beef ribs elit shank in veniam drumstick qui. Ex laboris meatball cow tongue pork belly. Ea ball tip reprehenderit pig, sed fatback boudin dolore flank aliquip laboris eu quis. Beef ribs duis beef, cow corned beef adipisicing commodo nisi deserunt exercitation. Cillum dolor t-bone spare ribs, ham hock est sirloin. Brisket irure meatloaf in, boudin pork belly sirloin ball tip. Sirloin sint irure nisi nostrud aliqua. Nostrud nulla aute, enim officia culpa ham hock. Aliqua reprehenderit dolore sunt nostrud sausage, ea boudin pork loin ut t-bone ham tempor. Tri-tip et pancetta drumstick laborum. Ham hock magna do nostrud in proident. Ex ground round fatback, venison non ribeye in.",t.body.insertBefore(e,a),n.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;",o=A.offsetHeight,i=A.offsetWidth,n.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;"+R.join("hyphens:auto; "),r=A.offsetHeight!=o||A.offsetWidth!=i,t.body.removeChild(e),e.removeChild(A),r}catch(s){return!1}}function i(e,A){try{var n=C("div"),o=C("span"),i=n.style,r=0,a=!1,s=!1,l=!1,d=t.body.firstElementChild||t.body.firstChild;return i.cssText="position:absolute;top:0;left:0;overflow:visible;width:1.25em;",n.appendChild(o),t.body.insertBefore(n,d),o.innerHTML="mm",r=o.offsetHeight,o.innerHTML="m"+e+"m",s=o.offsetHeight>r,A?(o.innerHTML="m<br />m",r=o.offsetWidth,o.innerHTML="m"+e+"m",l=o.offsetWidth>r):l=!0,s===!0&&l===!0&&(a=!0),t.body.removeChild(n),n.removeChild(o),a}catch(c){return!1}}function r(A){try{var n,o=C("input"),i=C("div"),r="lebowski",a=!1,s=t.body.firstElementChild||t.body.firstChild;if(i.innerHTML=r+A+r,t.body.insertBefore(i,s),t.body.insertBefore(o,i),o.setSelectionRange?(o.focus(),o.setSelectionRange(0,0)):o.createTextRange&&(n=o.createTextRange(),n.collapse(!0),n.moveEnd("character",0),n.moveStart("character",0),n.select()),e.find)a=e.find(r+r);else try{n=e.self.document.body.createTextRange(),a=n.findText(r+r)}catch(l){a=!1}return t.body.removeChild(i),t.body.removeChild(o),a}catch(l){return!1}}return t.body||t.getElementsByTagName("body")[0]?(a("csshyphens",function(){if(!v("hyphens","auto",!0))return!1;try{return o()}catch(e){return!1}}),a("softhyphens",function(){try{return i("&#173;",!0)&&i("&#8203;",!1)}catch(e){return!1}}),void a("softhyphensfind",function(){try{return r("&#173;")&&r("&#8203;")}catch(e){return!1}})):void setTimeout(A,n)}var n=300;setTimeout(A,n)}),Modernizr.addTest("cssmask",v("maskRepeat","repeat-x",!0)),Modernizr.addTest("overflowscrolling",v("overflowScrolling","touch",!0)),Modernizr.addTest("shapes",v("shapeOutside","content-box",!0)),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&v("transform","scale(1)",!0)}),Modernizr.addTest("csstransforms3d",function(){var e=!!v("perspective","1px",!0),t=Modernizr._config.usePrefixes;if(e&&(!t||"webkitPerspective"in x.style)){var A;Modernizr.supports?A="@supports (perspective: 1px)":(A="@media (transform-3d)",t&&(A+=",(-webkit-transform-3d)")),A+="{#modernizr{left:9px;position:absolute;height:5px;margin:0;padding:0;border:0}}",S(A,function(t){e=9===t.offsetLeft&&5===t.offsetHeight})}return e}),Modernizr.addTest("csstransitions",v("transition","all",!0)),Modernizr.addTest("flexbox",v("flexBasis","1px",!0));var N=w.prefixed=function(e,t,A){return 0===e.indexOf("@")?I(e):(-1!=e.indexOf("-")&&(e=s(e)),t?g(e,t,A):g(e,"pfx"))};Modernizr.addTest("objectfit",!!N("objectFit"),{aliases:["object-fit"]}),o(),i(b),delete w.addTest,delete w.addAsyncTest;for(var H=0;H<Modernizr._q.length;H++)Modernizr._q[H]();e.Modernizr=Modernizr}(window,document);