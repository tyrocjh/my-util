!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.tUtil=e():t.tUtil=e()}(this,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=11)}([function(t,e){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},function(t,e,n){var r=n(7),o=n(4),i=n(5),u=n(8);t.exports=function(t){return r(t)||o(t)||i(t)||u()}},function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e,n){var r=n(9),o=n(4),i=n(5),u=n(10);t.exports=function(t){return r(t)||o(t)||i(t)||u()}},function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},function(t,e,n){var r=n(6);t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(t,e,n){var r=n(6);t.exports=function(t){if(Array.isArray(t))return r(t)}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,n,r){"use strict";r.r(n);var o={};r.r(o),r.d(o,"isEmail",(function(){return O})),r.d(o,"isLetter",(function(){return x})),r.d(o,"isChinese",(function(){return j})),r.d(o,"isPhoneNum",(function(){return M})),r.d(o,"isLandline",(function(){return T})),r.d(o,"isIdCard",(function(){return E})),r.d(o,"isUrl",(function(){return A})),r.d(o,"isValidPwd",(function(){return D})),r.d(o,"isColor",(function(){return S})),r.d(o,"filterNum",(function(){return C})),r.d(o,"filterCENum",(function(){return P})),r.d(o,"filterENum",(function(){return $})),r.d(o,"filterFloate",(function(){return I})),r.d(o,"escapeHTML",(function(){return R}));var u={};r.r(u),r.d(u,"getQueryString",(function(){return k})),r.d(u,"parseQueryToObj",(function(){return L})),r.d(u,"httpsRedirect",(function(){return N}));var c={};r.r(c),r.d(c,"dayOfYear",(function(){return z})),r.d(c,"getDaysDiffBetweenDates",(function(){return U})),r.d(c,"timeLeft",(function(){return F})),r.d(c,"formatPassTime",(function(){return q})),r.d(c,"formatRemainTime",(function(){return H})),r.d(c,"isSameDay",(function(){return B})),r.d(c,"isLeapYear",(function(){return V}));var a={};r.r(a),r.d(a,"unique",(function(){return G})),r.d(a,"steamroller",(function(){return K})),r.d(a,"toTreeData",(function(){return W})),r.d(a,"arrayEqual",(function(){return X})),r.d(a,"sample",(function(){return J})),r.d(a,"shuffle",(function(){return tt})),r.d(a,"countOccurrences",(function(){return et})),r.d(a,"allEqual",(function(){return nt})),r.d(a,"average",(function(){return rt})),r.d(a,"sum",(function(){return ot})),r.d(a,"intersection",(function(){return it}));var f={};r.r(f),r.d(f,"trim",(function(){return ut})),r.d(f,"isNumber",(function(){return ct})),r.d(f,"leftPad",(function(){return at})),r.d(f,"fNumberWithComma",(function(){return ft})),r.d(f,"fNumber",(function(){return dt})),r.d(f,"capitalize",(function(){return st})),r.d(f,"capitalizeEveryWord",(function(){return lt})),r.d(f,"decapitalize",(function(){return pt})),r.d(f,"reverseString",(function(){return mt})),r.d(f,"stripHTMLTags",(function(){return gt})),r.d(f,"byteSize",(function(){return vt})),r.d(f,"rgbToHex",(function(){return ht}));var d={};r.r(d),r.d(d,"getCookie",(function(){return bt})),r.d(d,"setCookie",(function(){return yt})),r.d(d,"removeCookie",(function(){return wt}));var s={};r.r(s),r.d(s,"hasClass",(function(){return Ot})),r.d(s,"addClass",(function(){return xt})),r.d(s,"removeClass",(function(){return jt}));var l={};r.r(l),r.d(l,"hasClass",(function(){return Mt})),r.d(l,"elementContains",(function(){return Tt})),r.d(l,"bottomVisible",(function(){return Et})),r.d(l,"getRect",(function(){return At})),r.d(l,"offset",(function(){return Dt})),r.d(l,"getScrollTop",(function(){return St})),r.d(l,"setScrollTop",(function(){return Ct})),r.d(l,"scrollTo",(function(){return $t})),r.d(l,"windowResize",(function(){return It}));var p={};r.r(p),r.d(p,"isObject",(function(){return zt})),r.d(p,"mergeObject",(function(){return Ut})),r.d(p,"equals",(function(){return Ft})),r.d(p,"isEmptyObject",(function(){return qt})),r.d(p,"deepClone",(function(){return Ht}));var m={};r.r(m),r.d(m,"throttle",(function(){return Bt})),r.d(m,"debounce",(function(){return Vt})),r.d(m,"once",(function(){return _t})),r.d(m,"timeTaken",(function(){return Yt}));var g={};r.r(g),r.d(g,"uuid",(function(){return Zt})),r.d(g,"randomIntegerInRange",(function(){return Qt})),r.d(g,"randomNumberInRange",(function(){return Gt})),r.d(g,"shuffle",(function(){return Kt})),r.d(g,"randomColor",(function(){return Wt}));var v={};r.r(v),r.d(v,"getVersion",(function(){return Xt})),r.d(v,"getExplore",(function(){return Jt})),r.d(v,"getOS",(function(){return te}));var h={};r.r(h),r.d(h,"numToCN",(function(){return ee}));var b={};r.r(b),r.d(b,"htmlEncode",(function(){return ne})),r.d(b,"htmlDecode",(function(){return re})),r.d(b,"htmlEncodeByRegExp",(function(){return oe})),r.d(b,"htmlDecodeByRegExp",(function(){return ie}));var y=r(2),w=r.n(y),O=function(t){return/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(t)},x=function(t){return/^[a-zA-Z]*$/.test(t)},j=function(t){return/^[\u4e00-\u9fa5]+$/gi.test(t)},M=function(t){return/^(13[0-9]|14[0-9]|15[0-9]|16[0-9]|18[0-9]|19[0-9]|17[0-9])([0-9]{8})$/.test(t)},T=function(t){return/^\d{3,4}-\d{7,8}(-\d{3,4})?$/.test(t)},E=function(t){return/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(t)},A=function(t){return/[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(t)},D=function(t){return/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{6,25}$/.test(t)},S=function(t){return/^(#([0-9a-fA-F]{3}){1,2}|[rR][gG][Bb](\((\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*,){2}\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*\)|[Aa]\((\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*,){3}\s*([01]|0\.\d+)\s*\)))$/.test(t)},C=function(t){return t?t=t.replace(/[^\d]/g,""):t},P=function(t){return t?t=t.replace(/[^a-zA-Z\d\u4e00-\u9fa5]/g,""):t},$=function(t){return t?t=t.replace(/[^a-zA-Z\d]/g,""):t},I=function(t){return t?t=(t=t.replace(/[^\d.]/g,"")).replace(/(\.\d*)(\.\d*)/g,"$1"):t},R=function(t){return t.replace(/[&<>'"]/g,(function(t){return{"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[t]||t}))},k=function(t,e){var n=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),r=e||window.location.search,o=r.substr(r.indexOf("?")+1).match(n);return null!=o?decodeURIComponent(o[2]):""},L=function(t){if(-1===(t=t||window.location.href).indexOf("?"))return{};var e="?"===t[0]?t.substr(1):t.substring(t.lastIndexOf("?")+1);if(""===e)return{};e=e.split("&");for(var n={},r=0;r<e.length;r++){var o=e[r].split("=");n[decodeURIComponent(o[0])]=decodeURIComponent(o[1]||"")}return n},N=function(){"https:"!==location.protocol&&location.replace("https://"+location.href.split("//")[1])},z=function(t){return Math.floor((t-new Date(t.getFullYear(),0,0))/1e3/60/60/24)},U=function(t,e){return(e-t)/864e5},F=function(t,e){if(t&&e){var n;n=t instanceof Date?t:new Date(t.replace(/-/g,"/"));var r=(e instanceof Date?e:new Date(e.replace(/-/g,"/"))).getTime()-n.getTime(),o=0,i=0,u=0,c=0;return r>=0&&(o=Math.floor(r/1e3/3600/24),i=Math.floor(r/1e3/60/60%24),u=Math.floor(r/1e3/60%60),c=Math.floor(r/1e3%60)),{d:o,h:i,m:u,s:c}}},q=function(t){var e=Date.parse(new Date)-t,n=parseInt(e/864e5),r=parseInt(e/36e5),o=parseInt(e/6e4),i=parseInt(n/30),u=parseInt(i/12);return u?u+"年前":i?i+"个月前":n?n+"天前":r?r+"小时前":o?o+"分钟前":"刚刚"},H=function(t){var e=new Date,n=new Date(t).getTime()-e.getTime(),r=0,o=0,i=0,u=0;return n>=0&&(r=Math.floor(n/1e3/3600/24),o=Math.floor(n/1e3/60/60%24),i=Math.floor(n/1e3/60%60),u=Math.floor(n/1e3%60)),r+"天 "+o+"小时 "+i+"分钟 "+u+"秒"},B=function(t,e){e||(e=new Date);var n=t.getFullYear(),r=t.getMonth()+1,o=t.getDate(),i=e.getFullYear(),u=e.getMonth()+1;return o===e.getDate()&&r===u&&n===i},V=function(t){return 0==t%4&&(t%100!=0||t%400==0)},_=r(1),Y=r.n(_),Z=r(3),Q=r.n(Z),G=function(t){var e=new Set(t);return Array.from(e)},K=function(t){for(;t.some((function(t){return Array.isArray(t)}));){var e;t=(e=[]).concat.apply(e,Q()(t))}return t};function W(t,e){return function e(n){var r=[];return t.filter((function(t){return t.parentId===n})).forEach((function(t){r.push({id:t.id,name:t.name,parentId:t.parentId,children:e(t.id)})})),r}(e)}var X=function(t,e){if(t===e)return!0;if(t.length!=e.length)return!1;for(var n=0;n<t.length;++n)if(t[n]!==e[n])return!1;return!0},J=function(t){return t[Math.floor(Math.random()*t.length)]},tt=function(t){for(var e=Y()(t).slice(0),n=e.length;n;){var r=Math.floor(Math.random()*n--),o=[e[r],e[n]];e[n]=o[0],e[r]=o[1]}return e},et=function(t,e){return t.reduce((function(t,n){return n===e?t+1:t}),0)},nt=function(t){return t.every((function(e){return e===t[0]}))},rt=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.reduce((function(t,e){return t+e}),0)/e.length},ot=function(t){return t.reduce((function(t,e){return t+e}),0)},it=function(t,e){var n=new Set(e);return t.filter((function(t){return n.has(t)}))},ut=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"both";return"both"==e?t.replace(/^\s+|\s+$/g,""):"left"==e?t.replace(/^\s*/,""):"right"==e?t.replace(/(\s*$)/g,""):"all"==e?t.replace(/\s+/g,""):t},ct=function(t){return!isNaN(parseFloat(t))&&isFinite(t)&&Number(t)==t},at=function(t,e){var n=(e=e||2)-(t+="").length;return n>0&&(t=new Array(n+1).join("0")+t),t},ft=function(t){if(!/^(\+|-)?(\d+)(\.\d+)?$/.test(t))return t;for(var e=RegExp.$1,n=RegExp.$2,r=RegExp.$3,o=new RegExp("(\\d)(\\d{3})(,|$)");o.test(n);)n=n.replace(o,"$1,$2$3");return e+""+n+r},dt=function(e,n){n=n>0&&n<=10?n:2;var r=(e=parseFloat((e+"").replace(/[^\d\.-]/g,"")).toFixed(n)+"").split(".")[0].split("").reverse(),o=e.split(".")[1];for(t="",i=0;i<r.length;i++)t+=r[i]+((i+1)%3==0&&i+1!==r.length?",":"");return t.split("").reverse().join("")+"."+o},st=function(t){var e=Y()(t),n=e[0],r=e.slice(1);return n.toUpperCase()+r.join("")},lt=function(t){return t.replace(/\b[a-z]/g,(function(t){return t.toUpperCase()}))},pt=function(t){var e=Y()(t),n=e[0],r=e.slice(1);return n.toLowerCase()+r.join("")},mt=function(t){return Q()(t).reverse().join("")},gt=function(t){return t.replace(/<[^>]*>/g,"")},vt=function(t){return new Blob([t]).size},ht=function(t,e,n){return((t<<16)+(e<<8)+n).toString(16).padStart(6,"0")},bt=function(t){for(var e=document.cookie.replace(/\s/g,"").split(";"),n=0;n<e.length;n++){var r=e[n].split("=");if(r[0]==t)return decodeURIComponent(r[1])}return""},yt=function(t,e,n){var r=new Date;r.setDate(r.getDate()+n),document.cookie=t+"="+e+";expires="+r},wt=function(t){yt(t,"1",-1)},Ot=function(t,e){return new RegExp("(\\s|^)"+e+"(\\s|$)").test(t.className)},xt=function(t,e){Ot(t,e)||(t.className+=" "+e)},jt=function(t,e){if(Ot(t,e)){var n=new RegExp("(\\s|^)"+e+"(\\s|$)");t.className=t.className.replace(n," ")}},Mt=function(t,e){return t.classList.contains(e)},Tt=function(t,e){return t!==e&&t.contains(e)},Et=function(){return document.documentElement.clientHeight+window.scrollY>=(document.documentElement.scrollHeight||document.documentElement.clientHeight)},At=function(t){var e=t.getBoundingClientRect(),n=document.documentElement.clientTop,r=document.documentElement.clientLeft;return{top:e.top-n,bottom:e.bottom-n,left:e.left-r,right:e.right-r,width:e.width,height:e.height}},Dt=function(t){for(var e={left:0,top:0};t;)e.left+=t.offsetLeft,e.top+=t.offsetTop,t=t.offsetParent;return e},St=function(){return document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop},Ct=function(t){return window.scrollTo(0,t),t},Pt=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)},$t=function t(e,n){if(n<0)Ct(e);else{var r=e-St();if(0!==r){var o=r/n*10;Pt((function(){Math.abs(o)>Math.abs(r)?Ct(St()+r):(Ct(St()+o),r>0&&St()>=e||r<0&&St()<=e||t(e,n-16))}))}}},It=function(t,e){var n=window.innerHeight;t="function"==typeof t?t:function(){},e="function"==typeof e?e:function(){},window.addEventListener("resize",(function(){var r=window.innerHeight;r===n&&t(),r<n&&e()}))},Rt=r(0),kt=r.n(Rt);function Lt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Nt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Lt(Object(n),!0).forEach((function(e){w()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Lt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var zt=function(t){var e=kt()(t);return null!==t&&("object"===e||"function"===e)},Ut=function t(e,n){return zt(e)&&zt(n)?Object.keys(Nt(Nt({},e),n)).reduce((function(r,o){return r[o]=t(e[o],n[o]),r}),Array.isArray(e)?[]:{}):void 0===n?e:n},Ft=function t(e,n){if(e===n)return!0;if(e instanceof Date&&n instanceof Date)return e.getTime()===n.getTime();if(!e||!n||"object"!==kt()(e)&&"object"!==kt()(n))return e===n;if(e.prototype!==n.prototype)return!1;var r=Object.keys(e);return r.length===Object.keys(n).length&&r.every((function(r){return t(e[r],n[r])}))},qt=function(t){return!(!t||"object"!==kt()(t)||Array.isArray(t))&&!Object.keys(t).length},Ht=function t(e){var n;if(null==e||"object"!=kt()(e))return e;if(e instanceof Date)return(n=new Date).setTime(e.getTime()),n;if(e instanceof Array){n=[];for(var r=0,o=e.length;r<o;r++)n[r]=t(e[r]);return n}if(e instanceof Object){for(var i in n={},e)e.hasOwnProperty(i)&&(n[i]=t(e[i]));return n}throw new Error("Unable to copy values! Its type isn't supported.")},Bt=function(t,e,n,r){var o,i=0;return"boolean"!=typeof e&&(r=n,n=e,e=void 0),function(){var u=this,c=Number(new Date)-i,a=arguments;function f(){i=Number(new Date),n.apply(u,a)}function d(){o=void 0}r&&!o&&f(),o&&clearTimeout(o),void 0===r&&c>t?f():!0!==e&&(o=setTimeout(r?d:f,void 0===r?t-c:t))}},Vt=function(t,e,n){return void 0===n?Bt(t,e,!1):Bt(t,n,!1!==e)},_t=function(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}},Yt=function(t){console.time("timeTaken");var e=t();return console.timeEnd("timeTaken"),e},Zt=function(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(function(t){return(t^crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)}))},Qt=function(t,e){return Math.floor(Math.random()*(e-t+1))+t},Gt=function(t,e){return Math.random()*(e-t)+t},Kt=function(t){return t.sort((function(){return Math.random()-.5}))},Wt=function(){return"#"+("00000"+(16777216*Math.random()<<0).toString(16)).slice(-6)},Xt=function(){var t=navigator.userAgent,e=navigator.appVersion;return{ios:!!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:!!t.match(/Android*/i),webApp:!!t.match(/Safari*/i),weixin:!!t.match(/MicroMessenger*/i),alipay:!!t.match(/alipay*/i),dd:!!(t.indexOf("DingTalk")>-1),uc:!!t.match(/UCBrowser*/i),qq:!!t.match(/MQQBrowser*/i),iPad:!!(t.indexOf("iPad")>-1),appVersion:e,trident:!!(t.indexOf("Trident")>-1),presto:!!(t.indexOf("Presto")>-1),webKit:!!(t.indexOf("AppleWebKit")>-1),gecko:!!(t.indexOf("Gecko")>-1)&&-1==t.indexOf("KHTML")}},Jt=function(){var t,e={},n=navigator.userAgent.toLowerCase();return(t=n.match(/rv:([\d.]+)\) like gecko/))||(t=n.match(/msie ([\d\.]+)/))?e.ie=t[1]:(t=n.match(/edge\/([\d\.]+)/))?e.edge=t[1]:(t=n.match(/firefox\/([\d\.]+)/))?e.firefox=t[1]:(t=n.match(/(?:opera|opr).([\d\.]+)/))?e.opera=t[1]:(t=n.match(/chrome\/([\d\.]+)/))?e.chrome=t[1]:(t=n.match(/version\/([\d\.]+).*safari/))&&(e.safari=t[1]),e.ie?"IE: "+e.ie:e.edge?"EDGE: "+e.edge:e.firefox?"Firefox: "+e.firefox:e.chrome?"Chrome: "+e.chrome:e.opera?"Opera: "+e.opera:e.safari?"Safari: "+e.safari:"Unkonwn"},te=function(){var t="navigator"in window&&"userAgent"in navigator&&navigator.userAgent.toLowerCase()||"",e=("navigator"in window&&"vendor"in navigator&&navigator.vendor.toLowerCase(),"navigator"in window&&"appVersion"in navigator&&navigator.appVersion.toLowerCase()||"");return/iphone/i.test(t)||/ipad/i.test(t)||/ipod/i.test(t)?"ios":/android/i.test(t)?"android":/win/i.test(e)&&/phone/i.test(t)?"windowsPhone":/mac/i.test(e)?"MacOSX":/win/i.test(e)?"windows":/linux/i.test(e)?"linux":void 0},ee=function(t){var e=["角","分"],n=["零","壹","贰","叁","肆","伍","陆","柒","捌","玖"],r=[["元","万","亿"],["","拾","佰","仟"]],o=t<0?"欠":"";t=Math.abs(t);for(var i="",u=0;u<e.length;u++)i+=(n[Math.floor(10*t*Math.pow(10,u))%10]+e[u]).replace(/零./,"");i=i||"整",t=Math.floor(t);for(u=0;u<r[0].length&&t>0;u++){for(var c="",a=0;a<r[1].length&&t>0;a++)c=n[t%10]+r[1][a]+c,t=Math.floor(t/10);i=c.replace(/(零.)*零$/,"").replace(/^$/,"零")+r[0][u]+i}return o+i.replace(/(零.)*零元/,"元").replace(/(零.)+/g,"零").replace(/^整$/,"零元整")},ne=function(t){var e=document.createElement("div");null!=e.textContent?e.textContent=t:e.innerText=t;var n=e.innerHTML;return e=null,n},re=function(t){var e=document.createElement("div");e.innerHTML=t;var n=e.innerText||e.textContent;return e=null,n},oe=function(t){return 0==t.length?"":t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/ /g,"&nbsp;").replace(/\'/g,"&#39;").replace(/\"/g,"&quot;")},ie=function(t){return 0==t.length?"":t.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&nbsp;/g," ").replace(/&#39;/g,"'").replace(/&quot;/g,'"')};function ue(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function ce(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ue(Object(n),!0).forEach((function(e){w()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ue(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}n.default=ce(ce(ce(ce(ce(ce(ce(ce(ce(ce(ce(ce(ce(ce({},o),u),c),a),f),d),s),l),p),m),g),v),h),b)}]).default}));