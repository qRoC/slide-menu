!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=63)}([function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(26)("wks"),i=n(12),o=n(0).Symbol,a="function"==typeof o;(t.exports=function(t){return r[t]||(r[t]=a&&o[t]||(a?o:i)("Symbol."+t))}).store=r},function(t,e,n){t.exports=!n(6)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(7),i=n(21);t.exports=n(2)?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(8);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var r=n(0),i=n(13),o=n(3),a=n(9),u=n(37),c=function(t,e,n){var s,l,f,p,v=t&c.F,d=t&c.G,h=t&c.S,m=t&c.P,y=t&c.B,g=d?r:h?r[e]||(r[e]={}):(r[e]||{}).prototype,E=d?i:i[e]||(i[e]={}),S=E.prototype||(E.prototype={});for(s in d&&(n=e),n)f=((l=!v&&g&&void 0!==g[s])?g:n)[s],p=y&&l?u(f,r):m&&"function"==typeof f?u(Function.call,f):f,g&&a(g,s,f,t&c.U),E[s]!=f&&o(E,s,p),m&&S[s]!=f&&(S[s]=f)};r.core=i,c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(4),i=n(34),o=n(35),a=Object.defineProperty;e.f=n(2)?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(0),i=n(3),o=n(10),a=n(12)("src"),u=Function.toString,c=(""+u).split("toString");n(13).inspectSource=function(t){return u.call(t)},(t.exports=function(t,e,n,u){var s="function"==typeof n;s&&(o(n,"name")||i(n,"name",e)),t[e]!==n&&(s&&(o(n,a)||i(n,a,t[e]?""+t[e]:c.join(String(e)))),t===r?t[e]=n:u?t[e]?t[e]=n:i(t,e,n):(delete t[e],i(t,e,n)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[a]||u.call(this)})},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){var n=t.exports={version:"2.6.3"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(23),i=n(11);t.exports=function(t){return r(i(t))}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e){t.exports={}},function(t,e,n){var r=n(54),i=n(28);t.exports=Object.keys||function(t){return r(t,i)}},function(t,e,n){var r=n(26)("keys"),i=n(12);t.exports=function(t){return r[t]||(r[t]=i(t))}},function(t,e,n){var r=n(8),i=n(0).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,e,n){"use strict";var r=n(4);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(14),i=n(39),o=n(40);t.exports=function(t){return function(e,n,a){var u,c=r(e),s=i(c.length),l=o(a,s);if(t&&n!=n){for(;s>l;)if((u=c[l++])!=u)return!0}else for(;s>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}}},function(t,e,n){var r=n(24);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(1)("unscopables"),i=Array.prototype;null==i[r]&&n(3)(i,r,{}),t.exports=function(t){i[r][t]=!0}},function(t,e,n){var r=n(13),i=n(0),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(27)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e){t.exports=!1},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(7).f,i=n(10),o=n(1)("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,o)&&r(t,o,{configurable:!0,value:e})}},function(t,e,n){var r=n(11);t.exports=function(t){return Object(r(t))}},function(t,e){!function(){if("undefined"!=typeof window)try{var t=new window.CustomEvent("test",{cancelable:!0});if(t.preventDefault(),!0!==t.defaultPrevented)throw new Error("Could not prevent default")}catch(t){var e=function(t,e){var n,r;return e=e||{bubbles:!1,cancelable:!1,detail:void 0},(n=document.createEvent("CustomEvent")).initCustomEvent(t,e.bubbles,e.cancelable,e.detail),r=n.preventDefault,n.preventDefault=function(){r.call(this);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(t){this.defaultPrevented=!0}},n};e.prototype=window.Event.prototype,window.CustomEvent=e}}()},function(t,e,n){"use strict";n(33);var r=n(4),i=n(20),o=n(2),a=/./.toString,u=function(t){n(9)(RegExp.prototype,"toString",t,!0)};n(6)(function(){return"/a/b"!=a.call({source:"a",flags:"b"})})?u(function(){var t=r(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?i.call(t):void 0)}):"toString"!=a.name&&u(function(){return a.call(this)})},function(t,e,n){n(2)&&"g"!=/./g.flags&&n(7).f(RegExp.prototype,"flags",{configurable:!0,get:n(20)})},function(t,e,n){t.exports=!n(2)&&!n(6)(function(){return 7!=Object.defineProperty(n(19)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(8);t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){"use strict";var r=n(5),i=n(22)(!0);r(r.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n(25)("includes")},function(t,e,n){var r=n(38);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(15),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,e,n){var r=n(15),i=Math.max,o=Math.min;t.exports=function(t,e){return(t=r(t))<0?i(t+e,0):o(t,e)}},function(t,e,n){"use strict";var r=n(5),i=n(42);r(r.P+r.F*n(44)("includes"),"String",{includes:function(t){return!!~i(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},function(t,e,n){var r=n(43),i=n(11);t.exports=function(t,e,n){if(r(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(i(t))}},function(t,e,n){var r=n(8),i=n(24),o=n(1)("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==i(t))}},function(t,e,n){var r=n(1)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,!"/./"[t](e)}catch(t){}}return!0}},function(t,e,n){var r=n(5);r(r.P,"String",{repeat:n(46)})},function(t,e,n){"use strict";var r=n(15),i=n(11);t.exports=function(t){var e=String(i(this)),n="",o=r(t);if(o<0||o==1/0)throw RangeError("Count can't be negative");for(;o>0;(o>>>=1)&&(e+=e))1&o&&(n+=e);return n}},function(t,e,n){for(var r=n(48),i=n(17),o=n(9),a=n(0),u=n(3),c=n(16),s=n(1),l=s("iterator"),f=s("toStringTag"),p=c.Array,v={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},d=i(v),h=0;h<d.length;h++){var m,y=d[h],g=v[y],E=a[y],S=E&&E.prototype;if(S&&(S[l]||u(S,l,p),S[f]||u(S,f,y),c[y]=p,g))for(m in r)S[m]||o(S,m,r[m],!0)}},function(t,e,n){"use strict";var r=n(25),i=n(49),o=n(16),a=n(14);t.exports=n(50)(Array,"Array",function(t,e){this._t=a(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,i(1)):i(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),o.Arguments=o.Array,r("keys"),r("values"),r("entries")},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){"use strict";var r=n(27),i=n(5),o=n(9),a=n(3),u=n(16),c=n(51),s=n(29),l=n(56),f=n(1)("iterator"),p=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,e,n,d,h,m,y){c(n,e,d);var g,E,S,b=function(t){if(!p&&t in L)return L[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},w=e+" Iterator",k="values"==h,A=!1,L=t.prototype,x=L[f]||L["@@iterator"]||h&&L[h],_=x||b(h),M=h?k?b("entries"):_:void 0,C="Array"==e&&L.entries||x;if(C&&(S=l(C.call(new t)))!==Object.prototype&&S.next&&(s(S,w,!0),r||"function"==typeof S[f]||a(S,f,v)),k&&x&&"values"!==x.name&&(A=!0,_=function(){return x.call(this)}),r&&!y||!p&&!A&&L[f]||a(L,f,_),u[e]=_,u[w]=v,h)if(g={values:k?_:b("values"),keys:m?_:b("keys"),entries:M},y)for(E in g)E in L||o(L,E,g[E]);else i(i.P+i.F*(p||A),e,g);return g}},function(t,e,n){"use strict";var r=n(52),i=n(21),o=n(29),a={};n(3)(a,n(1)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(a,{next:i(1,n)}),o(t,e+" Iterator")}},function(t,e,n){var r=n(4),i=n(53),o=n(28),a=n(18)("IE_PROTO"),u=function(){},c=function(){var t,e=n(19)("iframe"),r=o.length;for(e.style.display="none",n(55).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;r--;)delete c.prototype[o[r]];return c()};t.exports=Object.create||function(t,e){var n;return null!==t?(u.prototype=r(t),n=new u,u.prototype=null,n[a]=t):n=c(),void 0===e?n:i(n,e)}},function(t,e,n){var r=n(7),i=n(4),o=n(17);t.exports=n(2)?Object.defineProperties:function(t,e){i(t);for(var n,a=o(e),u=a.length,c=0;u>c;)r.f(t,n=a[c++],e[n]);return t}},function(t,e,n){var r=n(10),i=n(14),o=n(22)(!1),a=n(18)("IE_PROTO");t.exports=function(t,e){var n,u=i(t),c=0,s=[];for(n in u)n!=a&&r(u,n)&&s.push(n);for(;e.length>c;)r(u,n=e[c++])&&(~o(s,n)||s.push(n));return s}},function(t,e,n){var r=n(0).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(10),i=n(30),o=n(18)("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,e,n){var r=n(5);r(r.S+r.F,"Object",{assign:n(58)})},function(t,e,n){"use strict";var r=n(17),i=n(59),o=n(60),a=n(30),u=n(23),c=Object.assign;t.exports=!c||n(6)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=c({},t)[n]||Object.keys(c({},e)).join("")!=r})?function(t,e){for(var n=a(t),c=arguments.length,s=1,l=i.f,f=o.f;c>s;)for(var p,v=u(arguments[s++]),d=l?r(v).concat(l(v)):r(v),h=d.length,m=0;h>m;)f.call(v,p=d[m++])&&(n[p]=v[p]);return n}:c},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){(t.exports=n(62)(!1)).push([t.i,".slide-menu{position:fixed;width:320px;max-width:100%;height:auto;top:0;bottom:0;right:0;display:none;overflow:hidden;box-sizing:border-box;transform:translateX(100%);z-index:1000}.slide-menu,.slide-menu .slide-menu__slider{transition:transform .3s ease-in-out;will-change:transform}.slide-menu .slide-menu__slider{width:100%;height:100%;transform:translateX(0)}.slide-menu ul{position:relative;width:100%;margin:0;padding-left:0;list-style:none;height:100%}.slide-menu ul ul{position:absolute;top:0;left:100%;display:none}.slide-menu ul a{display:block}.slide-menu a{cursor:pointer}",""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),o=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(o).concat([i]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];null!=a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){"use strict";n.r(e);n(31);Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector);var r,i,o;n(32),n(36),n(41),n(45),n(47),n(57),n(61);function a(t,e,n){for(var r=[];null!==t.parentElement||void 0!==n&&r.length<n;)t instanceof HTMLElement&&t.matches(e)&&r.push(t),t=t.parentElement;return r}function u(t,e){var n=a(t,e,1);return n.length?n[0]:null}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}!function(t){t[t.Backward=-1]="Backward",t[t.Forward=1]="Forward"}(r||(r={})),function(t){t.Left="left",t.Right="right"}(i||(i={})),function(t){t.Back="back",t.Close="close",t.Forward="forward",t.Navigate="navigate",t.Open="open"}(o||(o={}));var s={backLinkAfter:"",backLinkBefore:"",keyClose:"",keyOpen:"",position:"right",showBackLink:!0,submenuLinkAfter:"",submenuLinkBefore:""},l=function(){function t(e,n){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),null===e)throw new Error("Argument `elem` must be a valid HTML node");this.options=Object.assign({},s,n),this.menuElem=e,this.wrapperElem=document.createElement("div"),this.wrapperElem.classList.add(t.CLASS_NAMES.wrapper);var r=this.menuElem.querySelector("ul");r&&function(t,e){if(null===t.parentElement)throw Error("`elem` has no parentElement");t.parentElement.insertBefore(e,t),e.appendChild(t)}(r,this.wrapperElem),this.level=0,this.isOpen=!1,this.isAnimating=!1,this.lastAction=null,this.initMenu(),this.initSubmenus(),this.initEventHandlers(),this.menuElem._slideMenu=this}var e,n,l;return e=t,(n=[{key:"toggle",value:function(t){var e,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(void 0===t)return this.isOpen?this.close(n):this.open(n);if(e=t?0:this.options.position===i.Left?"-100%":"100%",this.isOpen=t,n)this.moveSlider(this.menuElem,e);else{var r=this.moveSlider.bind(this,this.menuElem,e);this.runWithoutAnimation(r)}}},{key:"open",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.triggerEvent(o.Open),this.toggle(!0,t)}},{key:"close",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.triggerEvent(o.Close),this.toggle(!1,t)}},{key:"back",value:function(){this.navigate(r.Backward)}},{key:"destroy",value:function(){var e=this.options,n=e.submenuLinkAfter,r=e.submenuLinkBefore,i=e.showBackLink;(n||r)&&this.wrapperElem.querySelectorAll(".".concat(t.CLASS_NAMES.decorator)).forEach(function(t){t.parentElement&&t.parentElement.removeChild(t)}),i&&this.wrapperElem.querySelectorAll(".".concat(t.CLASS_NAMES.control)).forEach(function(t){var e=u(t,"li");e&&e.parentElement&&e.parentElement.removeChild(e)}),function(t){var e=t.parentElement;if(null===e)throw Error("`elem` has no parentElement");for(;t.firstChild;)e.insertBefore(t.firstChild,t);e.removeChild(t)}(this.wrapperElem),this.menuElem.style.cssText="",this.menuElem.querySelectorAll("ul").forEach(function(t){return t.style.cssText=""}),delete this.menuElem._slideMenu}},{key:"navigateTo",value:function(e){if(this.triggerEvent(o.Navigate),"string"==typeof e){var n=document.querySelector(e);if(!(n instanceof HTMLElement))throw new Error("Invalid parameter `target`. A valid query selector is required.");e=n}this.wrapperElem.querySelectorAll(".".concat(t.CLASS_NAMES.active)).forEach(function(e){e.style.display="none",e.classList.remove(t.CLASS_NAMES.active)});var r=a(e,"ul"),i=r.length-1;i>-1&&i!==this.level&&(this.level=i,this.moveSlider(this.wrapperElem,100*-this.level)),r.forEach(function(e){e.style.display="block",e.classList.add(t.CLASS_NAMES.active)})}},{key:"initEventHandlers",value:function(){var t=this;this.menuElem.querySelectorAll("a").forEach(function(e){return e.addEventListener("click",function(e){var n=e.target,i=n.matches("a")?n:u(n,"a");i&&t.navigate(r.Forward,i)})}),this.menuElem.addEventListener("transitionend",this.onTransitionEnd.bind(this)),this.wrapperElem.addEventListener("transitionend",this.onTransitionEnd.bind(this)),this.initKeybindings(),this.initSubmenuVisibility()}},{key:"onTransitionEnd",value:function(t){t.target!==this.menuElem&&t.target!==this.wrapperElem||(this.isAnimating=!1,this.lastAction&&this.triggerEvent(this.lastAction,!0))}},{key:"initKeybindings",value:function(){var t=this;document.addEventListener("keydown",function(e){switch(e.key){case t.options.keyClose:t.close();break;case t.options.keyOpen:t.open();break;default:return}e.preventDefault()})}},{key:"initSubmenuVisibility",value:function(){var e=this;this.menuElem.addEventListener("sm.back-after",function(){var n=".".concat(t.CLASS_NAMES.active," ").repeat(e.level+1),r=e.menuElem.querySelector("ul ".concat(n));r&&(r.style.display="none",r.style.overflow="visible",r.classList.remove(t.CLASS_NAMES.active));var i=".".concat(t.CLASS_NAMES.active," ").repeat(e.level),o=e.menuElem.querySelector("ul ".concat(i));o&&(o.style.overflowY="auto")}),this.menuElem.addEventListener("sm.forward-after",function(){var n=".".concat(t.CLASS_NAMES.active," ").repeat(e.level-1),r=e.menuElem.querySelector("ul ".concat(n));r&&(r.style.overflowY="visible");var i=".".concat(t.CLASS_NAMES.active," ").repeat(e.level),o=e.menuElem.querySelector("ul ".concat(i));o&&(o.style.overflowY="auto")})}},{key:"triggerEvent",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.lastAction=t;var n="sm.".concat(t).concat(e?"-after":""),r=new CustomEvent(n);this.menuElem.dispatchEvent(r)}},{key:"navigate",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.Forward,n=arguments.length>1?arguments[1]:void 0;if(!(this.isAnimating||e===r.Backward&&0===this.level)){var i=-100*(this.level+e);if(n&&null!==n.parentElement&&e===r.Forward){var a=n.parentElement.querySelector("ul");if(!a)return;a.classList.add(t.CLASS_NAMES.active),a.style.display="block"}var u=e===r.Forward?o.Forward:o.Back;this.triggerEvent(u),this.level=this.level+e,this.moveSlider(this.wrapperElem,i)}}},{key:"moveSlider",value:function(t,e){e.toString().includes("%")||(e+="%"),t.style.transform="translateX(".concat(e,")"),this.isAnimating=!0}},{key:"initMenu",value:function(){var t=this;this.runWithoutAnimation(function(){switch(t.options.position){case i.Left:Object.assign(t.menuElem.style,{left:0,right:"auto",transform:"translateX(-100%)"});break;default:Object.assign(t.menuElem.style,{left:"auto",right:0})}t.menuElem.style.display="block"})}},{key:"runWithoutAnimation",value:function(t){var e=[this.menuElem,this.wrapperElem];e.forEach(function(t){return t.style.transition="none"}),t(),this.menuElem.offsetHeight,e.forEach(function(t){return t.style.removeProperty("transition")}),this.isAnimating=!1}},{key:"initSubmenus",value:function(){var e=this;this.menuElem.querySelectorAll("a").forEach(function(n){if(null!==n.parentElement){var r=n.parentElement.querySelector("ul");if(r){n.addEventListener("click",function(t){t.preventDefault()});var i=n.textContent;if(e.addLinkDecorators(n),e.options.showBackLink){var a=e.options,u=a.backLinkBefore,c=a.backLinkAfter,s=document.createElement("a");s.innerHTML=u+i+c,s.classList.add(t.CLASS_NAMES.backlink,t.CLASS_NAMES.control),s.setAttribute("data-action",o.Back);var l=document.createElement("li");l.appendChild(s),r.insertBefore(l,r.firstChild)}}}})}},{key:"addLinkDecorators",value:function(e){var n=this.options,r=n.submenuLinkBefore,i=n.submenuLinkAfter;if(r){var o=document.createElement("span");o.classList.add(t.CLASS_NAMES.decorator),o.innerHTML=r,e.insertBefore(o,e.firstChild)}if(i){var a=document.createElement("span");a.classList.add(t.CLASS_NAMES.decorator),a.innerHTML=i,e.appendChild(a)}return e}}])&&c(e.prototype,n),l&&c(e,l),t}();l.NAMESPACE="slide-menu",l.CLASS_NAMES={active:"".concat(l.NAMESPACE,"__submenu--active"),backlink:"".concat(l.NAMESPACE,"__backlink"),control:"".concat(l.NAMESPACE,"__control"),decorator:"".concat(l.NAMESPACE,"__decorator"),wrapper:"".concat(l.NAMESPACE,"__slider")},document.addEventListener("click",function(t){var e=t.target;if(e.className.includes("".concat(l.CLASS_NAMES.control))){var n=e.getAttribute("data-target"),r=n&&"this"!==n?document.getElementById(n):u(e,".".concat(l.NAMESPACE));if(!r)throw new Error("Unable to find menu ".concat(n));var i=r._slideMenu,o=e.getAttribute("data-action"),a=e.getAttribute("data-arg");i&&o&&"function"==typeof i[o]&&(a?i[o](a):i[o]())}}),window.SlideMenu=l}]);