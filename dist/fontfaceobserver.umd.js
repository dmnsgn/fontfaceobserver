!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.FontFaceObserver=t()}(this,function(){"use strict";var n=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}(),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o={maxWidth:"none",display:"inline-block",position:"absolute",height:"100%",width:"100%",overflow:"scroll",fontSize:"16px"},l={display:"inline-block",height:"200%",width:"200%",fontSize:"16px",maxWidth:"none"},a={maxWidth:"none",minWidth:"20px",minHeight:"20px",display:"inline-block",overflow:"hidden",position:"absolute",width:"auto",margin:"0",padding:"0",top:"-999px",whiteSpace:"nowrap",fontSynthesis:"none"},b=function(){function t(e){n(this,t),this.element=document.createElement("div"),this.element.setAttribute("aria-hidden","true"),this.element.appendChild(document.createTextNode(e)),this.collapsible=document.createElement("span"),this.expandable=document.createElement("span"),this.collapsibleInner=document.createElement("span"),this.expandableInner=document.createElement("span"),this.lastOffsetWidth=-1,Object.assign(this.collapsible.style,o),Object.assign(this.expandable.style,o),Object.assign(this.expandableInner.style,o),Object.assign(this.collapsibleInner.style,l),this.collapsible.appendChild(this.collapsibleInner),this.expandable.appendChild(this.expandableInner),this.element.appendChild(this.collapsible),this.element.appendChild(this.expandable)}return e(t,[{key:"getElement",value:function(){return this.element}},{key:"setFont",value:function(e){Object.assign(this.element.style,i({},a,{font:e}))}},{key:"getWidth",value:function(){return this.element.offsetWidth}},{key:"setWidth",value:function(e){this.element.style.width=e+"px"}},{key:"reset",value:function(){var e=this.getWidth(),t=e+100;return this.expandableInner.style.width=t+"px",this.expandable.scrollLeft=t,this.collapsible.scrollLeft=this.collapsible.scrollWidth+100,this.lastOffsetWidth!==e&&(this.lastOffsetWidth=e,!0)}},{key:"onScroll",value:function(e){this.reset()&&null!==this.element.parentNode&&e(this.lastOffsetWidth)}},{key:"onResize",value:function(e){var t=this;function n(){t.onScroll(e)}this.collapsible.addEventListener("scroll",n),this.expandable.addEventListener("scroll",n),this.reset()}}]),t}();var t=function(){function S(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return n(this,S),this.family=e,this.style=t.style||"normal",this.weight=t.weight||"normal",this.stretch=t.stretch||"normal",this}return e(S,null,[{key:"getUserAgent",value:function(){return window.navigator.userAgent}},{key:"getNavigatorVendor",value:function(){return window.navigator.vendor}},{key:"hasWebKitFallbackBug",value:function(){if(null===S.HAS_WEBKIT_FALLBACK_BUG){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(S.getUserAgent());S.HAS_WEBKIT_FALLBACK_BUG=!!e&&(parseInt(e[1],10)<536||536===parseInt(e[1],10)&&parseInt(e[2],10)<=11)}return S.HAS_WEBKIT_FALLBACK_BUG}},{key:"hasSafari10Bug",value:function(){if(null===S.HAS_SAFARI_10_BUG)if(S.supportsNativeFontLoading()&&/Apple/.test(S.getNavigatorVendor())){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(S.getUserAgent());S.HAS_SAFARI_10_BUG=!!e&&parseInt(e[1],10)<603}else S.HAS_SAFARI_10_BUG=!1;return S.HAS_SAFARI_10_BUG}},{key:"supportsNativeFontLoading",value:function(){return null===S.SUPPORTS_NATIVE_FONT_LOADING&&(S.SUPPORTS_NATIVE_FONT_LOADING=!!document.fonts),S.SUPPORTS_NATIVE_FONT_LOADING}},{key:"supportStretch",value:function(){if(null===S.SUPPORTS_STRETCH){var e=document.createElement("div");try{e.style.font="condensed 100px sans-serif"}catch(e){}S.SUPPORTS_STRETCH=""!==e.style.font}return S.SUPPORTS_STRETCH}}]),e(S,[{key:"load",value:function(e,t){var p=this,m=e||"BESbswy",g=0,v=t||S.DEFAULT_TIMEOUT,y=p.getTime();return new Promise(function(h,f){if(S.supportsNativeFontLoading()&&!S.hasSafari10Bug()){var e=new Promise(function(n,i){!function t(){var e=p.getTime();v<=e-y?i():document.fonts.load(p.getStyle('"'+p.family+'"'),m).then(function(e){1<=e.length?n():setTimeout(t,25)},function(){i()})}()}),t=new Promise(function(e,t){g=setTimeout(t,v)});Promise.race([t,e]).then(function(){clearTimeout(g),h(p)},function(){f(p)})}else n=function(){var i=new b(m),o=new b(m),l=new b(m),a=-1,s=-1,r=-1,e=-1,t=-1,n=-1,u=document.createElement("div");function c(){null!==u.parentNode&&u.parentNode.removeChild(u)}function d(){if((-1!=a&&-1!=s||-1!=a&&-1!=r||-1!=s&&-1!=r)&&(a==s||a==r||s==r)){if(S.hasWebKitFallbackBug()&&(a==e&&s==e&&r==e||a==t&&s==t&&r==t||a==n&&s==n&&r==n))return;c(),clearTimeout(g),h(p)}}u.dir="ltr",i.setFont(p.getStyle("sans-serif")),o.setFont(p.getStyle("serif")),l.setFont(p.getStyle("monospace")),u.appendChild(i.getElement()),u.appendChild(o.getElement()),u.appendChild(l.getElement()),document.body.appendChild(u),e=i.getWidth(),t=o.getWidth(),n=l.getWidth(),function e(){var t=p.getTime();if(v<=t-y)c(),f(p);else{var n=document.hidden;!0!==n&&void 0!==n||(a=i.getWidth(),s=o.getWidth(),r=l.getWidth(),d()),g=setTimeout(e,50)}}(),i.onResize(function(e){a=e,d()}),i.setFont(p.getStyle('"'+p.family+'",sans-serif')),o.onResize(function(e){s=e,d()}),o.setFont(p.getStyle('"'+p.family+'",serif')),l.onResize(function(e){r=e,d()}),l.setFont(p.getStyle('"'+p.family+'",monospace'))},document.body?n():document.addEventListener?document.addEventListener("DOMContentLoaded",function e(){document.removeEventListener("DOMContentLoaded",e),n()}):document.attachEvent("onreadystatechange",function e(){"interactive"!=document.readyState&&"complete"!=document.readyState||(document.detachEvent("onreadystatechange",e),n())});var n})}},{key:"getStyle",value:function(e){return[this.style,this.weight,S.supportStretch()?this.stretch:"","100px",e].join(" ")}},{key:"getTime",value:function(){return(new Date).getTime()}}]),S}();return t.Ruler=b,t.HAS_WEBKIT_FALLBACK_BUG=null,t.HAS_SAFARI_10_BUG=null,t.SUPPORTS_STRETCH=null,t.SUPPORTS_NATIVE_FONT_LOADING=null,t.DEFAULT_TIMEOUT=3e3,t});