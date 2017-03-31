/*!
* Vue Material v0.7.1
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
!(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMaterial=t():e.VueMaterial=t()})(this,(function(){return (function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=409)})({0:function(e,t){e.exports=function(e,t,n,o){var r,i=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(r=e,i=e.default);var u="function"==typeof i?i.options:i;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),n&&(u._scopeId=n),o){var s=u.computed||(u.computed={});Object.keys(o).forEach((function(e){var t=o[e];s[e]=function(){return t}}))}return{esModule:r,exports:i,options:u}}},133:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(57),r=(function(e){return e&&e.__esModule?e:{default:e}})(o);t.default={props:{mdSrc:String},data:function(){return{loaded:!1,applyBlack:!0,imageElement:null}},watch:{mdSrc:function(){this.createImage()}},computed:{classes:function(){return{"md-loaded":this.loaded,"md-black-output":this.applyBlack}}},methods:{analyzeLightness:function(e){var t=this,n=function(){t.loaded=!0};(0,r.default)(e,(function(e){(100*Math.abs(256-e)/256+15)/100>=.7&&(t.applyBlack=!0),t.$nextTick(n)}),n)},createImage:function(){this.loaded=!1,this.applyBlack=!1,this.imageElement=null,this.mdSrc&&(this.imageElement=document.createElement("img"),this.imageElement.crossOrigin="",this.imageElement.src=this.mdSrc,this.analyzeLightness(this.imageElement))}},created:function(){this.createImage()}},e.exports=t.default},229:function(e,t){},243:function(e,t){e.exports=""},289:function(e,t,n){n(229);var o=n(0)(n(133),n(389),null,null);e.exports=o.exports},389:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("img",{staticClass:"md-image",class:e.classes,attrs:{src:e.mdSrc}})},staticRenderFns:[]}},409:function(e,t,n){e.exports=n(83)},57:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,t,n){var o=document.createElement("canvas");e.crossOrigin="Anonymous",e.onload=function(){var e=0,n=void 0,r=void 0,i=void 0,a=void 0,u=void 0,s=void 0,c=void 0;o.width=this.width,o.height=this.height,n=o.getContext("2d"),n.drawImage(this,0,0),r=n.getImageData(0,0,o.width,o.height),i=r.data;for(var d=0,l=i.length;d<l;d+=4)a=i[d],u=i[d+1],s=i[d+2],c=Math.floor((a+u+s)/3),e+=c;t(Math.floor(e/(this.width*this.height)))},e.onerror=n};t.default=o,e.exports=t.default},83:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){e.component("md-image",a.default),e.material.styles.push(s.default)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var i=n(289),a=o(i),u=n(243),s=o(u);e.exports=t.default}})}));