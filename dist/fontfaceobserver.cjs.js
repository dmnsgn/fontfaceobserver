"use strict";var classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},createClass=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}(),_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},styles={maxWidth:"none",display:"inline-block",position:"absolute",height:"100%",width:"100%",overflow:"scroll",fontSize:"16px"},collapsibleInnerStyles={display:"inline-block",height:"200%",width:"200%",fontSize:"16px",maxWidth:"none"},fontStyle={maxWidth:"none",minWidth:"20px",minHeight:"20px",display:"inline-block",overflow:"hidden",position:"absolute",width:"auto",margin:"0",padding:"0",top:"-999px",whiteSpace:"nowrap",fontSynthesis:"none"},Ruler=function(){function t(e){classCallCheck(this,t),this.element=document.createElement("div"),this.element.setAttribute("aria-hidden","true"),this.element.appendChild(document.createTextNode(e)),this.collapsible=document.createElement("span"),this.expandable=document.createElement("span"),this.collapsibleInner=document.createElement("span"),this.expandableInner=document.createElement("span"),this.lastOffsetWidth=-1,Object.assign(this.collapsible.style,styles),Object.assign(this.expandable.style,styles),Object.assign(this.expandableInner.style,styles),Object.assign(this.collapsibleInner.style,collapsibleInnerStyles),this.collapsible.appendChild(this.collapsibleInner),this.expandable.appendChild(this.expandableInner),this.element.appendChild(this.collapsible),this.element.appendChild(this.expandable)}return createClass(t,[{key:"getElement",value:function(){return this.element}},{key:"setFont",value:function(e){Object.assign(this.element.style,_extends({},fontStyle,{font:e}))}},{key:"getWidth",value:function(){return this.element.offsetWidth}},{key:"setWidth",value:function(e){this.element.style.width=e+"px"}},{key:"reset",value:function(){var e=this.getWidth(),t=e+100;return this.expandableInner.style.width=t+"px",this.expandable.scrollLeft=t,this.collapsible.scrollLeft=this.collapsible.scrollWidth+100,this.lastOffsetWidth!==e&&(this.lastOffsetWidth=e,!0)}},{key:"onScroll",value:function(e){this.reset()&&null!==this.element.parentNode&&e(this.lastOffsetWidth)}},{key:"onResize",value:function(e){var t=this;function n(){t.onScroll(e)}this.collapsible.addEventListener("scroll",n),this.expandable.addEventListener("scroll",n),this.reset()}}]),t}();function onReady(t){document.body?t():document.addEventListener?document.addEventListener("DOMContentLoaded",function e(){document.removeEventListener("DOMContentLoaded",e),t()}):document.attachEvent("onreadystatechange",function e(){"interactive"!=document.readyState&&"complete"!=document.readyState||(document.detachEvent("onreadystatechange",e),t())})}var FontFaceObserver=function(){function S(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return classCallCheck(this,S),this.family=e,this.style=t.style||"normal",this.weight=t.weight||"normal",this.stretch=t.stretch||"normal",this}return createClass(S,null,[{key:"getUserAgent",value:function(){return window.navigator.userAgent}},{key:"getNavigatorVendor",value:function(){return window.navigator.vendor}},{key:"hasWebKitFallbackBug",value:function(){if(null===S.HAS_WEBKIT_FALLBACK_BUG){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(S.getUserAgent());S.HAS_WEBKIT_FALLBACK_BUG=!!e&&(parseInt(e[1],10)<536||536===parseInt(e[1],10)&&parseInt(e[2],10)<=11)}return S.HAS_WEBKIT_FALLBACK_BUG}},{key:"hasSafari10Bug",value:function(){if(null===S.HAS_SAFARI_10_BUG)if(S.supportsNativeFontLoading()&&/Apple/.test(S.getNavigatorVendor())){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(S.getUserAgent());S.HAS_SAFARI_10_BUG=!!e&&parseInt(e[1],10)<603}else S.HAS_SAFARI_10_BUG=!1;return S.HAS_SAFARI_10_BUG}},{key:"supportsNativeFontLoading",value:function(){return null===S.SUPPORTS_NATIVE_FONT_LOADING&&(S.SUPPORTS_NATIVE_FONT_LOADING=!!document.fonts),S.SUPPORTS_NATIVE_FONT_LOADING}},{key:"supportStretch",value:function(){if(null===S.SUPPORTS_STRETCH){var e=document.createElement("div");try{e.style.font="condensed 100px sans-serif"}catch(e){}S.SUPPORTS_STRETCH=""!==e.style.font}return S.SUPPORTS_STRETCH}}]),createClass(S,[{key:"load",value:function(e,t){var f=this,m=e||"BESbswy",v=0,y=t||S.DEFAULT_TIMEOUT,g=f.getTime();return new Promise(function(h,p){if(S.supportsNativeFontLoading()&&!S.hasSafari10Bug()){var e=new Promise(function(n,i){!function t(){var e=f.getTime();y<=e-g?i(new Error(y+"ms timeout exceeded")):document.fonts.load(f.getStyle('"'+f.family+'"'),m).then(function(e){1<=e.length?n():setTimeout(t,25)},i)}()}),t=new Promise(function(e,t){v=setTimeout(function(){t(new Error(y+"ms timeout exceeded"))},y)});Promise.race([t,e]).then(function(){clearTimeout(v),h(f)},p)}else onReady(function(){var i=new Ruler(m),l=new Ruler(m),s=new Ruler(m),a=-1,o=-1,r=-1,e=-1,t=-1,n=-1,c=document.createElement("div");function u(){null!==c.parentNode&&c.parentNode.removeChild(c)}function d(){if((-1!=a&&-1!=o||-1!=a&&-1!=r||-1!=o&&-1!=r)&&(a==o||a==r||o==r)){if(S.hasWebKitFallbackBug()&&(a==e&&o==e&&r==e||a==t&&o==t&&r==t||a==n&&o==n&&r==n))return;u(),clearTimeout(v),h(f)}}c.dir="ltr",i.setFont(f.getStyle("sans-serif")),l.setFont(f.getStyle("serif")),s.setFont(f.getStyle("monospace")),c.appendChild(i.getElement()),c.appendChild(l.getElement()),c.appendChild(s.getElement()),document.body.appendChild(c),e=i.getWidth(),t=l.getWidth(),n=s.getWidth(),function e(){var t=f.getTime();if(y<=t-g)u(),p(new Error(y+"ms timeout exceeded"));else{var n=document.hidden;!0!==n&&void 0!==n||(a=i.getWidth(),o=l.getWidth(),r=s.getWidth(),d()),v=setTimeout(e,50)}}(),i.onResize(function(e){a=e,d()}),i.setFont(f.getStyle('"'+f.family+'",sans-serif')),l.onResize(function(e){o=e,d()}),l.setFont(f.getStyle('"'+f.family+'",serif')),s.onResize(function(e){r=e,d()}),s.setFont(f.getStyle('"'+f.family+'",monospace'))})})}},{key:"getStyle",value:function(e){return[this.style,this.weight,S.supportStretch()?this.stretch:"","100px",e].join(" ")}},{key:"getTime",value:function(){return(new Date).getTime()}}]),S}();FontFaceObserver.Ruler=Ruler,FontFaceObserver.HAS_WEBKIT_FALLBACK_BUG=null,FontFaceObserver.HAS_SAFARI_10_BUG=null,FontFaceObserver.SUPPORTS_STRETCH=null,FontFaceObserver.SUPPORTS_NATIVE_FONT_LOADING=null,FontFaceObserver.DEFAULT_TIMEOUT=3e3,module.exports=FontFaceObserver;
