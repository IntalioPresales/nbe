!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e:e(jQuery)}(function(e){function t(t){var s=t||window.event,a=h.call(arguments,1),r=0,f=0,d=0,w=0;if(t=e.event.fix(s),t.type="mousewheel","detail"in s&&(d=-1*s.detail),"wheelDelta"in s&&(d=s.wheelDelta),"wheelDeltaY"in s&&(d=s.wheelDeltaY),"wheelDeltaX"in s&&(f=-1*s.wheelDeltaX),"axis"in s&&s.axis===s.HORIZONTAL_AXIS&&(f=-1*d,d=0),r=0===d?f:d,"deltaY"in s&&(r=d=-1*s.deltaY),"deltaX"in s&&(f=s.deltaX,0===d&&(r=-1*f)),0!==d||0!==f){if(1===s.deltaMode){var c=e.data(this,"mousewheel-line-height");r*=c,d*=c,f*=c}else if(2===s.deltaMode){var m=e.data(this,"mousewheel-page-height");r*=m,d*=m,f*=m}if(w=Math.max(Math.abs(d),Math.abs(f)),(!l||w<l)&&(l=w,n(s,w)&&(l/=40)),n(s,w)&&(r/=40,f/=40,d/=40),r=Math[r>=1?"floor":"ceil"](r/l),f=Math[f>=1?"floor":"ceil"](f/l),d=Math[d>=1?"floor":"ceil"](d/l),u.settings.normalizeOffset&&this.getBoundingClientRect){var g=this.getBoundingClientRect();t.offsetX=t.clientX-g.left,t.offsetY=t.clientY-g.top}return t.deltaX=f,t.deltaY=d,t.deltaFactor=l,t.deltaMode=0,a.unshift(t,r,f,d),o&&window.clearTimeout(o),o=window.setTimeout(i,200),(e.event.dispatch||e.event.handle).apply(this,a)}}function i(){l=null}function n(e,t){return u.settings.adjustOldDeltas&&"mousewheel"===e.type&&t%120==0}var o,l,s=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],a="onwheel"in window.document||window.document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],h=Array.prototype.slice;if(e.event.fixHooks)for(var r=s.length;r;)e.event.fixHooks[s[--r]]=e.event.mouseHooks;var u=e.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var i=a.length;i;)this.addEventListener(a[--i],t,!1);else this.onmousewheel=t;e.data(this,"mousewheel-line-height",u.getLineHeight(this)),e.data(this,"mousewheel-page-height",u.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var i=a.length;i;)this.removeEventListener(a[--i],t,!1);else this.onmousewheel=null;e.removeData(this,"mousewheel-line-height"),e.removeData(this,"mousewheel-page-height")},getLineHeight:function(t){var i=e(t),n=i["offsetParent"in e.fn?"offsetParent":"parent"]();return n.length||(n=e("body")),parseInt(n.css("fontSize"),10)||parseInt(i.css("fontSize"),10)||16},getPageHeight:function(t){return e(t).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};e.fn.extend({mousewheel:function(e){return e?this.on("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.off("mousewheel",e)}})});