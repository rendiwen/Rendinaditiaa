(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5488],{4856:function(e,n,t){"use strict";t.d(n,{jL:function(){return g},gS:function(){return d}});var r=t(67294);function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e){if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n)}return r}var o=function(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r},i=t(96630),l=t(21958),s=function(){return(s=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e}).apply(this,arguments)};function c(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>n.indexOf(r)&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>n.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t}var u={banner:"Banner-module_banner__216HZ",warning:"Banner-module_warning__1wLBE",critical:"Banner-module_critical__3kKnr",success:"Banner-module_success__1_22_",informational:"Banner-module_informational__DZdSC",bannerHead:"Banner-module_bannerHead__huuNs",bannerTitle:"Banner-module_bannerTitle__2_DlM",bannerTitleIcon:"Banner-module_bannerTitleIcon__OiWQJ",bannerCloseIcon:"Banner-module_bannerCloseIcon__TqvLm",bannerBody:"Banner-module_bannerBody__1j-Qe",noPadding:"Banner-module_noPadding__3QHdQ",bannerDescription:"Banner-module_bannerDescription__3gAKA",bannerAction:"Banner-module_bannerAction__eHD8j"};!function(e,n){void 0===n&&(n={});var t=n.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===t&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}(".Banner-module_banner__216HZ{display:block;padding:20px;border-radius:var(--size-border-radius-base);overflow:hidden;color:var(--color-text-default)}.Banner-module_banner__216HZ.Banner-module_warning__1wLBE{background-color:var(--color-surface-warning-subdued);border:.5px solid var(--color-warning)}.Banner-module_banner__216HZ.Banner-module_critical__3kKnr{background-color:var(--color-surface-critical-subdued);border:.5px solid var(--color-border-critical-default)}.Banner-module_banner__216HZ.Banner-module_success__1_22_{background-color:var(--color-surface-success-subdued);border:.5px solid var(--color-green-50)}.Banner-module_banner__216HZ.Banner-module_informational__DZdSC{background-color:var(--color-surface-subdued);border:.5px solid var(--color-text-disabled)}.Banner-module_bannerHead__huuNs{display:flex;align-items:flex-start;justify-content:space-between}.Banner-module_bannerTitle__2_DlM{font-weight:600;font-size:var(--size-font-heading-sm);line-height:var(--size-line-height-text-heading-sm);display:flex;align-items:center}.Banner-module_bannerTitleIcon__OiWQJ{margin-right:6px}.Banner-module_bannerCloseIcon__TqvLm{border:none;background:transparent;width:22px;height:22px;padding:0;margin-left:8px}.Banner-module_bannerCloseIcon__TqvLm:after{display:inline-block;width:22px;height:22px;content:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='22' height='22' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z' fill='%2345474A'/%3E%3C/svg%3E\")}.Banner-module_bannerCloseIcon__TqvLm:hover{cursor:pointer}.Banner-module_bannerBody__1j-Qe{margin-top:12px;padding-right:32px}.Banner-module_noPadding__3QHdQ{padding:0}.Banner-module_bannerAction__eHD8j,.Banner-module_bannerDescription__3gAKA{font-weight:400;font-size:var(--size-font-body-small);line-height:var(--size-line-height-text-body-small);color:var(--color-text-subdued)}.Banner-module_bannerAction__eHD8j{margin-top:16px}.Banner-module_banner__216HZ button{background-color:transparent}");var d=function(e){var n=e.className,t=e.children,a=c(e,["className","children"]);return r.createElement("div",s({className:o(u.bannerDescription,n)},a),t)},f={entering:{opacity:1},entered:{opacity:1},exiting:{opacity:0},exited:{opacity:0},unmounted:{opacity:0}},m={warning:"warning",critical:"warning",success:"check_circle",informational:"info"},p={success:"success",informational:"default",critical:"default",warning:"default"},g=function(e){var n=e.className,t=e.children,a=e.type,d=void 0===a?"informational":a,g=e.title,y=e.closable,v=void 0===y||y,h=e.onOpenStateChange,b=e.animationDuration,_=void 0===b?300:b,w=c(e,["className","children","type","title","closable","onOpenStateChange","animationDuration"]),E=r.useState(!0),x=E[0],B=E[1],C=r.useRef(!1);function P(e){"true"===e.target.dataset.toggleBanner&&B(!1)}r.useEffect(function(){C.current?null==h||h(x):C.current=!0},[x,h]);var A={transition:"opacity ".concat(_,"ms ease-in-out"),opacity:1};return r.createElement(i.ZP,{appear:!0,in:x,timeout:_,unmountOnExit:!0},function(e){return r.createElement("div",s({title:g,"data-banner-shown":x,className:o(u.banner,u[d],n),style:s(s({},A),f[e])},w),r.createElement("div",{className:o(u.bannerHead)},r.createElement("div",{className:u.bannerTitle},r.createElement(l.J,{color:p[d],fontSize:"small",className:u.bannerTitleIcon},m[d]),r.createElement("div",{className:o()},g)),v&&r.createElement("button",{"data-toggle-banner":"true","aria-label":"Close Banner",title:"Close Banner",onClick:P,className:o(u.bannerCloseIcon)})),r.createElement("div",{onClick:P,className:o(u.bannerBody,!v&&u.noPadding)},t))})}},49090:function(e){function n(e,n){e.onload=function(){this.onerror=this.onload=null,n(null,e)},e.onerror=function(){this.onerror=this.onload=null,n(Error("Failed to load "+this.src),e)}}function t(e,n){e.onreadystatechange=function(){("complete"==this.readyState||"loaded"==this.readyState)&&(this.onreadystatechange=null,n(null,e))}}e.exports=function(e,r,a){var o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");"function"==typeof r&&(a=r,r={}),r=r||{},a=a||function(){},i.type=r.type||"text/javascript",i.charset=r.charset||"utf8",i.async=!("async"in r)||!!r.async,i.src=e,r.attrs&&function(e,n){for(var t in n)e.setAttribute(t,n[t])}(i,r.attrs),r.text&&(i.text=""+r.text),("onload"in i?n:t)(i,a),i.onload||n(i,a),o.appendChild(i)}},97122:function(e,n,t){"use strict";function r(){return{enabled:Boolean(null==window?void 0:window.AnalyticsEventHandler),sendMoEngageEvent:function(e,n){var t,r;return null==window?void 0:null===(t=window.AnalyticsEventHandler)||void 0===t?void 0:null===(r=t.sendMoEngageEvent)||void 0===r?void 0:r.call(t,e,n)}}}t.d(n,{y:function(){return r}})},33988:function(e){"use strict";var n;/**
* @link https://github.com/gajus/sister for the canonical source repository
* @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
*/ n=function(){var e={},n={};return e.on=function(e,t){var r={name:e,handler:t};return n[e]=n[e]||[],n[e].unshift(r),r},e.off=function(e){var t=n[e.name].indexOf(e);-1!==t&&n[e.name].splice(t,1)},e.trigger=function(e,t){var r,a=n[e];if(a)for(r=a.length;r--;)a[r].handler(t)},e},e.exports=n},66006:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,a,o=(r=t(22275),r&&r.__esModule?r:{default:r});n.default={pauseVideo:{acceptableStates:[o.default.ENDED,o.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[o.default.ENDED,o.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[o.default.ENDED,o.default.PLAYING,o.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},e.exports=n.default},89125:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(9215),a=d(r),o=t(28255),i=d(o),l=t(65279),s=d(l),c=t(66006),u=d(c);function d(e){return e&&e.__esModule?e:{default:e}}var f=(0,a.default)("youtube-player"),m={};m.proxyEvents=function(e){var n={},t=function(t){var r="on"+t.slice(0,1).toUpperCase()+t.slice(1);n[r]=function(n){f('event "%s"',r,n),e.trigger(t,n)}},r=!0,a=!1,o=void 0;try{for(var i,l=s.default[Symbol.iterator]();!(r=(i=l.next()).done);r=!0){var c=i.value;t(c)}}catch(u){a=!0,o=u}finally{try{!r&&l.return&&l.return()}finally{if(a)throw o}}return n},m.promisifyPlayer=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t={},r=function(r){n&&u.default[r]?t[r]=function(){for(var n=arguments.length,t=Array(n),a=0;a<n;a++)t[a]=arguments[a];return e.then(function(e){var n=u.default[r],a=e.getPlayerState(),o=e[r].apply(e,t);return n.stateChangeRequired||Array.isArray(n.acceptableStates)&&-1===n.acceptableStates.indexOf(a)?new Promise(function(t){var r=function r(){var a=e.getPlayerState(),o=void 0;"number"==typeof n.timeout&&(o=setTimeout(function(){e.removeEventListener("onStateChange",r),t()},n.timeout)),Array.isArray(n.acceptableStates)&&-1!==n.acceptableStates.indexOf(a)&&(e.removeEventListener("onStateChange",r),clearTimeout(o),t())};e.addEventListener("onStateChange",r)}).then(function(){return o}):o})}:t[r]=function(){for(var n=arguments.length,t=Array(n),a=0;a<n;a++)t[a]=arguments[a];return e.then(function(e){return e[r].apply(e,t)})}},a=!0,o=!1,l=void 0;try{for(var s,c=i.default[Symbol.iterator]();!(a=(s=c.next()).done);a=!0){var d=s.value;r(d)}}catch(f){o=!0,l=f}finally{try{!a&&c.return&&c.return()}finally{if(o)throw l}}return t},n.default=m,e.exports=n.default},22275:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},e.exports=n.default},65279:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],e.exports=n.default},28255:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe"],e.exports=n.default},11062:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=t(33988),o=u(a),i=t(55900),l=u(i),s=t(89125),c=u(s);function u(e){return e&&e.__esModule?e:{default:e}}var d=void 0;n.default=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=(0,o.default)();if(d||(d=(0,l.default)(a)),n.events)throw Error("Event handlers cannot be overwritten.");if("string"==typeof e&&!document.getElementById(e))throw Error('Element "'+e+'" does not exist.');n.events=c.default.proxyEvents(a);var i=new Promise(function(t){(void 0===e?"undefined":r(e))==="object"&&e.playVideo instanceof Function?t(e):d.then(function(r){var o=new r.Player(e,n);return a.on("ready",function(){t(o)}),null})}),s=c.default.promisifyPlayer(i,t);return s.on=a.on,s.off=a.off,s},e.exports=n.default},55900:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,a,o=(r=t(49090),r&&r.__esModule?r:{default:r});n.default=function(e){return new Promise(function(n){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function){n(window.YT);return}var t="http:"===window.location.protocol?"http:":"https:";(0,o.default)(t+"//www.youtube.com/iframe_api",function(n){n&&e.trigger("error",n)});var r=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){r&&r(),n(window.YT)}})},e.exports=n.default},9215:function(e,n,t){var r=t(34155);function a(){var e;try{e=n.storage.debug}catch(t){}return!e&&void 0!==r&&"env"in r&&(e=r.env.DEBUG),e}(n=e.exports=t(55046)).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},n.formatArgs=function(e){var t=this.useColors;if(e[0]=(t?"%c":"")+this.namespace+(t?" %c":" ")+e[0]+(t?"%c ":" ")+"+"+n.humanize(this.diff),t){var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var a=0,o=0;e[0].replace(/%[a-zA-Z%]/g,function(e){"%%"!==e&&(a++,"%c"===e&&(o=a))}),e.splice(o,0,r)}},n.save=function(e){try{null==e?n.storage.removeItem("debug"):n.storage.debug=e}catch(t){}},n.load=a,n.useColors=function(){return"undefined"!=typeof window&&!!window.process&&"renderer"===window.process.type||"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},n.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),n.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],n.formatters.j=function(e){try{return JSON.stringify(e)}catch(n){return"[UnexpectedJSONParseError]: "+n.message}},n.enable(a())},55046:function(e,n,t){var r;function a(e){function t(){if(t.enabled){var e=t,a=+new Date,o=a-(r||a);e.diff=o,e.prev=r,e.curr=a,r=a;for(var i=Array(arguments.length),l=0;l<i.length;l++)i[l]=arguments[l];i[0]=n.coerce(i[0]),"string"!=typeof i[0]&&i.unshift("%O");var s=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,function(t,r){if("%%"===t)return t;s++;var a=n.formatters[r];if("function"==typeof a){var o=i[s];t=a.call(e,o),i.splice(s,1),s--}return t}),n.formatArgs.call(e,i),(t.log||n.log||console.log.bind(console)).apply(e,i)}}return t.namespace=e,t.enabled=n.enabled(e),t.useColors=n.useColors(),t.color=function(e){var t,r=0;for(t in e)r=(r<<5)-r+e.charCodeAt(t),r|=0;return n.colors[Math.abs(r)%n.colors.length]}(e),"function"==typeof n.init&&n.init(t),t}(n=e.exports=a.debug=a.default=a).coerce=function(e){return e instanceof Error?e.stack||e.message:e},n.disable=function(){n.enable("")},n.enable=function(e){n.save(e),n.names=[],n.skips=[];for(var t=("string"==typeof e?e:"").split(/[\s,]+/),r=t.length,a=0;a<r;a++)t[a]&&("-"===(e=t[a].replace(/\*/g,".*?"))[0]?n.skips.push(RegExp("^"+e.substr(1)+"$")):n.names.push(RegExp("^"+e+"$")))},n.enabled=function(e){var t,r;for(t=0,r=n.skips.length;t<r;t++)if(n.skips[t].test(e))return!1;for(t=0,r=n.names.length;t<r;t++)if(n.names[t].test(e))return!0;return!1},n.humanize=t(14680),n.names=[],n.skips=[],n.formatters={}},14680:function(e){var n=36e5,t=24*n,r=365.25*t;function a(e,n,t){return e<n?void 0:e<1.5*n?Math.floor(e/n)+" "+t:Math.ceil(e/n)+" "+t+"s"}e.exports=function(e,o){o=o||{};var i,l,s=typeof e;if("string"===s&&e.length>0)return function(e){if(!((e=String(e)).length>100)){var a=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(a){var o=parseFloat(a[1]),i=(a[2]||"ms").toLowerCase();switch(i){case"years":case"year":case"yrs":case"yr":case"y":return o*r;case"days":case"day":case"d":return o*t;case"hours":case"hour":case"hrs":case"hr":case"h":return o*n;case"minutes":case"minute":case"mins":case"min":case"m":return 6e4*o;case"seconds":case"second":case"secs":case"sec":case"s":return 1e3*o;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return o;default:return}}}}(e);if("number"===s&&!1===isNaN(e)){return o.long?(i=e,a(i,t,"day")||a(i,n,"hour")||a(i,6e4,"minute")||a(i,1e3,"second")||i+" ms"):(l=e,l>=t?Math.round(l/t)+"d":l>=n?Math.round(l/n)+"h":l>=6e4?Math.round(l/6e4)+"m":l>=1e3?Math.round(l/1e3)+"s":l+"ms")}throw Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}}}]);
//# sourceMappingURL=5488-8882c4bb73d9c186.js.map