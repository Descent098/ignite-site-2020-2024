var Util=function(t){var e=!1;function n(e){var n=this,i=!1;return t(this).one(r.TRANSITION_END,(function(){i=!0})),setTimeout((function(){i||r.triggerTransitionEnd(n)}),e),this}var r={TRANSITION_END:"bsTransitionEnd",getUID:function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},getSelectorFromElement:function(e){var n=e.getAttribute("data-target");n&&"#"!==n||(n=e.getAttribute("href")||""),"#"===n.charAt(0)&&(n=function(e){return"function"==typeof t.escapeSelector?t.escapeSelector(e).substr(1):e.replace(/(:|\.|\[|\]|,|=|@)/g,"\\$1")}(n));try{return t(document).find(n).length>0?n:null}catch(t){return null}},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(n){t(n).trigger(e.end)},supportsTransitionEnd:function(){return Boolean(e)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],a=e[i],u=a&&r.isElement(a)?"element":(c=a,{}.toString.call(c).match(/\s([a-zA-Z]+)/)[1].toLowerCase());if(!new RegExp(o).test(u))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+u+'" but expected type "'+o+'".')}var c}};return e=("undefined"==typeof window||!window.QUnit)&&{end:"transitionend"},t.fn.emulateTransitionEnd=n,r.supportsTransitionEnd()&&(t.event.special[r.TRANSITION_END]={bindType:e.end,delegateType:e.end,handle:function(e){if(t(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}}),r}($);
