(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(645),i=t.n(r)()((function(e){return e[1]}));i.push([e.id,'body,\nhtml {\n  background: linear-gradient(\n    90deg,\n    hsla(88, 38%, 15%, 1) 0%,\n    hsla(74, 32%, 32%, 1) 100%\n  );\n  font-family: "PT Sans", sans-serif;\n}\n\n#content {\n  background: #fefae0;\n  width: 1200px;\n  margin: 0 auto;\n  display: grid;\n  align-items: center;\n  justify-items: center;\n}\n\nh1 {\n  font-family: "Sarina", cursive;\n  color: #000;\n  font-size: 6vmin;\n}\n\nheader {\n  background: #bc6c25;\n  display: grid;\n  grid-template-columns: auto auto;\n  align-items: center;\n  justify-items: flex-start;\n  padding: 5%;\n}\n\nheader > img {\n  width: 60%;\n  margin: 5%;\n}\n\nmain {\n  padding: 5%;\n}\n\n@media only screen and (max-width: 1500px) {\n  #content {\n    width: 80%;\n  }\n}\n',""]);const o=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&i[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},379:(e,n,t)=>{var r,i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),o=[];function a(e){for(var n=-1,t=0;t<o.length;t++)if(o[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},r=[],i=0;i<e.length;i++){var c=e[i],s=n.base?c[0]+n.base:c[0],l=t[s]||0,d="".concat(s," ").concat(l);t[s]=l+1;var u=a(d),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(o[u].references++,o[u].updater(f)):o.push({identifier:d,updater:m(f,n),references:1}),r.push(d)}return r}function s(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var l,d=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function u(e,n,t,r){var i=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(n,i);else{var o=document.createTextNode(i),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(o,a[n]):e.appendChild(o)}}function f(e,n,t){var r=t.css,i=t.media,o=t.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,h=0;function m(e,n){var t,r,i;if(n.singleton){var o=h++;t=p||(p=s(n)),r=u.bind(null,t,o,!1),i=u.bind(null,t,o,!0)}else t=s(n),r=f.bind(null,t,n),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else i()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var i=a(t[r]);o[i].references--}for(var s=c(e,n),l=0;l<t.length;l++){var d=a(t[l]);0===o[d].references&&(o[d].updater(),o.splice(d,1))}t=s}}}},368:(e,n,t)=>{e.exports=t.p+"3625284f91bd235a3353.svg"}},n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{var e=t(368);(()=>{const n=document.querySelector("#content"),t=document.createElement("header");n.appendChild(t);const r=new Image;r.src=e,t.appendChild(r);const i=document.createElement("h1");i.textContent="The Jasmine Dragon",t.appendChild(i)})(),(()=>{const e=document.querySelector("#content"),n=document.createElement("main"),t=document.createElement("p");t.textContent="The Jasmine Dragon is a traditional tea shop in the Upper Ring of Ba Sing Se; due to its location, its clientele mostly consists of the upper class citizens of the Earth Kingdom capital. It was once a failing business but was completely revived after Iroh took over.",n.appendChild(t),e.appendChild(n)})();var n=t(379),r=t.n(n),i=t(426);r()(i.Z,{insert:"head",singleton:!1}),i.Z.locals})()})();