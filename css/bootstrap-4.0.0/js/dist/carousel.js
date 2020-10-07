function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}var Carousel=function(e){var t="carousel",i="bs.carousel",n="."+i,s=e.fn[t],r={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},a={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},l="next",o="prev",u="left",c="right",h={SLIDE:"slide"+n,SLID:"slid"+n,KEYDOWN:"keydown"+n,MOUSEENTER:"mouseenter"+n,MOUSELEAVE:"mouseleave"+n,TOUCHEND:"touchend"+n,LOAD_DATA_API:"load.bs.carousel.data-api",CLICK_DATA_API:"click.bs.carousel.data-api"},d="carousel",_="active",f="slide",m="carousel-item-right",v="carousel-item-left",g="carousel-item-next",p="carousel-item-prev",E=".active",I=".active.carousel-item",y=".carousel-item",C=".carousel-item-next, .carousel-item-prev",b=".carousel-indicators",x="[data-slide], [data-slide-to]",D='[data-ride="carousel"]',S=function(){function s(t,i){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(i),this._element=e(t)[0],this._indicatorsElement=e(this._element).find(b)[0],this._addEventListeners()}var x=s.prototype;return x.next=function(){this._isSliding||this._slide(l)},x.nextWhenVisible=function(){!document.hidden&&e(this._element).is(":visible")&&"hidden"!==e(this._element).css("visibility")&&this.next()},x.prev=function(){this._isSliding||this._slide(o)},x.pause=function(t){t||(this._isPaused=!0),e(this._element).find(C)[0]&&Util.supportsTransitionEnd()&&(Util.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},x.cycle=function(e){e||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},x.to=function(t){var i=this;this._activeElement=e(this._element).find(I)[0];var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)e(this._element).one(h.SLID,(function(){return i.to(t)}));else{if(n===t)return this.pause(),void this.cycle();var s=t>n?l:o;this._slide(s,this._items[t])}},x.dispose=function(){e(this._element).off(n),e.removeData(this._element,i),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},x._getConfig=function(e){return e=_extends({},r,e),Util.typeCheckConfig(t,e,a),e},x._addEventListeners=function(){var t=this;this._config.keyboard&&e(this._element).on(h.KEYDOWN,(function(e){return t._keydown(e)})),"hover"===this._config.pause&&(e(this._element).on(h.MOUSEENTER,(function(e){return t.pause(e)})).on(h.MOUSELEAVE,(function(e){return t.cycle(e)})),"ontouchstart"in document.documentElement&&e(this._element).on(h.TOUCHEND,(function(){t.pause(),t.touchTimeout&&clearTimeout(t.touchTimeout),t.touchTimeout=setTimeout((function(e){return t.cycle(e)}),500+t._config.interval)})))},x._keydown=function(e){if(!/input|textarea/i.test(e.target.tagName))switch(e.which){case 37:e.preventDefault(),this.prev();break;case 39:e.preventDefault(),this.next()}},x._getItemIndex=function(t){return this._items=e.makeArray(e(t).parent().find(y)),this._items.indexOf(t)},x._getItemByDirection=function(e,t){var i=e===l,n=e===o,s=this._getItemIndex(t),r=this._items.length-1;if((n&&0===s||i&&s===r)&&!this._config.wrap)return t;var a=(s+(e===o?-1:1))%this._items.length;return-1===a?this._items[this._items.length-1]:this._items[a]},x._triggerSlideEvent=function(t,i){var n=this._getItemIndex(t),s=this._getItemIndex(e(this._element).find(I)[0]),r=e.Event(h.SLIDE,{relatedTarget:t,direction:i,from:s,to:n});return e(this._element).trigger(r),r},x._setActiveIndicatorElement=function(t){if(this._indicatorsElement){e(this._indicatorsElement).find(E).removeClass(_);var i=this._indicatorsElement.children[this._getItemIndex(t)];i&&e(i).addClass(_)}},x._slide=function(t,i){var n,s,r,a=this,o=e(this._element).find(I)[0],d=this._getItemIndex(o),E=i||o&&this._getItemByDirection(t,o),y=this._getItemIndex(E),C=Boolean(this._interval);if(t===l?(n=v,s=g,r=u):(n=m,s=p,r=c),E&&e(E).hasClass(_))this._isSliding=!1;else if(!this._triggerSlideEvent(E,r).isDefaultPrevented()&&o&&E){this._isSliding=!0,C&&this.pause(),this._setActiveIndicatorElement(E);var b=e.Event(h.SLID,{relatedTarget:E,direction:r,from:d,to:y});Util.supportsTransitionEnd()&&e(this._element).hasClass(f)?(e(E).addClass(s),Util.reflow(E),e(o).addClass(n),e(E).addClass(n),e(o).one(Util.TRANSITION_END,(function(){e(E).removeClass(n+" "+s).addClass(_),e(o).removeClass(_+" "+s+" "+n),a._isSliding=!1,setTimeout((function(){return e(a._element).trigger(b)}),0)})).emulateTransitionEnd(600)):(e(o).removeClass(_),e(E).addClass(_),this._isSliding=!1,e(this._element).trigger(b)),C&&this.cycle()}},s._jQueryInterface=function(t){return this.each((function(){var n=e(this).data(i),a=_extends({},r,e(this).data());"object"==typeof t&&(a=_extends({},a,t));var l="string"==typeof t?t:a.slide;if(n||(n=new s(this,a),e(this).data(i,n)),"number"==typeof t)n.to(t);else if("string"==typeof l){if(void 0===n[l])throw new TypeError('No method named "'+l+'"');n[l]()}else a.interval&&(n.pause(),n.cycle())}))},s._dataApiClickHandler=function(t){var n=Util.getSelectorFromElement(this);if(n){var r=e(n)[0];if(r&&e(r).hasClass(d)){var a=_extends({},e(r).data(),e(this).data()),l=this.getAttribute("data-slide-to");l&&(a.interval=!1),s._jQueryInterface.call(e(r),a),l&&e(r).data(i).to(l),t.preventDefault()}}},_createClass(s,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return r}}]),s}();return e(document).on(h.CLICK_DATA_API,x,S._dataApiClickHandler),e(window).on(h.LOAD_DATA_API,(function(){e(D).each((function(){var t=e(this);S._jQueryInterface.call(t,t.data())}))})),e.fn[t]=S._jQueryInterface,e.fn[t].Constructor=S,e.fn[t].noConflict=function(){return e.fn[t]=s,S._jQueryInterface},S}($);
