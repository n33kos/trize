!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("trize",[],e):"object"==typeof exports?exports.trize=e():t.trize=e()}(global,function(){return function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=26)}([function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();var o=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=e,this.y=i}return n(t,[{key:"toArray",value:function(){return[this.x,this.y]}},{key:"add",value:function(t){return"x"in t&&(this.x+=t.x),"y"in t&&(this.y+=t.y),"number"==typeof t&&(this.x+=t,this.y+=t),this}},{key:"subtract",value:function(t){return"x"in t&&(this.x-=t.x),"y"in t&&(this.y-=t.y),"number"==typeof t&&(this.x-=t,this.y-=t),this}},{key:"multiply",value:function(t){return"number"==typeof t&&(this.x*=t,this.y*=t),this}},{key:"divide",value:function(t){return"number"==typeof t&&(this.x/=t,this.y/=t),this}},{key:"clone",value:function(){return Object.assign(Object.create(Object.getPrototypeOf(this)),this)}}]),t}();e.default=o},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,o=i(0),r=(n=o)&&n.__esModule?n:{default:n};e.default=function(t,e){return new r.default(t.width/2+e.x*(t.width/2),t.height/2+-e.y*(t.height/2))}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return window.devicePixelRatio>1?2:1}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,o=i(0),r=(n=o)&&n.__esModule?n:{default:n};e.default=function(t,e){return new r.default(e.x/t.width*2-1,e.y/t.height*-2+1)}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){var i=t.x-e.x,n=t.y-e.y;return Math.sqrt(i*i+n*n)}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,o=i(0),r=(n=o)&&n.__esModule?n:{default:n};e.default=function(t,e){return new r.default(t.x+.5*(e.x-t.x),t.y+.5*(e.y-t.y))}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return 180*t/Math.PI}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,o=i(0),r=(n=o)&&n.__esModule?n:{default:n};e.default=function(t,e,i){return new r.default(e.x+i*Math.cos(t),e.y+i*Math.sin(t))}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,i){return Math.acos((Math.pow(i,2)-(Math.pow(e,2)+Math.pow(t,2)))/(-2*e*t))}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return t*Math.PI/180}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(i(2)),o=r(i(0));function r(t){return t&&t.__esModule?t:{default:t}}e.default=function t(e){var i=e.arc,r=void 0===i?{color:"black",width:0,radius:30}:i,s=e.side,a=void 0===s?{color:"black",width:1}:s,u=e.vertex,l=void 0===u?{color:"black",width:0}:u,c=e.position,f=void 0===c?new o.default:c;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.arc=r,this.side=a,this.vertex=l,this.position=f,this.arc.width=this.arc.width*(0,n.default)(),this.side.width=this.side.width*(0,n.default)(),this.vertex.width=this.vertex.width*(0,n.default)()}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=a(i(1)),r=a(i(2)),s=a(i(0));function a(t){return t&&t.__esModule?t:{default:t}}var u=function(){function t(e){var i=e.color,n=void 0===i?"black":i,o=e.end,a=void 0===o?new s.default:o,u=e.start,l=void 0===u?new s.default:u,c=e.width,f=void 0===c?1:c;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.color=n,this.end=a,this.start=l,this.width=f*(0,r.default)()}return n(t,[{key:"draw",value:function(t,e){var i=(0,o.default)(t,this.start),n=(0,o.default)(t,this.end);e.lineCap="round",e.strokeStyle=this.color,e.beginPath(),e.lineWidth=this.width,e.moveTo(i.x,i.y),e.lineTo(n.x,n.y),e.stroke()}}]),t}();e.default=u},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=a(i(1)),r=a(i(2)),s=a(i(0));function a(t){return t&&t.__esModule?t:{default:t}}var u=function(){function t(e){var i=e.color,n=void 0===i?"black":i,o=e.position,a=void 0===o?new s.default:o,u=e.width,l=void 0===u?1:u;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.color=n,this.position=a,this.width=l*(0,r.default)()}return n(t,[{key:"draw",value:function(t,e){var i=(0,o.default)(t,this.position);e.fillStyle=this.color,e.beginPath(),e.arc(i.x,i.y,this.width,0,2*Math.PI),e.fill()}}]),t}();e.default=u},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){if(!(""+t).indexOf("e")>=0)return+(Math.round(t+"e+"+e)+"e-"+e);var i=(""+t).split("e"),n="";return+i[1]+e>0&&(n="+"),+(Math.round(+i[0]+"e"+n+(+i[1]+e))+"e-"+e)}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=d(i(1)),r=(d(i(9)),d(i(4))),s=d(i(2)),a=d(i(8)),u=d(i(3)),l=d(i(10)),c=d(i(7)),f=(d(i(6)),d(i(5))),h=d(i(0));function d(t){return t&&t.__esModule?t:{default:t}}var v=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.geometry=e,e||(this.geometry=[new l.default({position:new h.default(0,-.75)}),new l.default({position:new h.default(-.75,.25)}),new l.default({position:new h.default(.75,.25)})]),this.sides=null,this.angles=null,this.arcBoundaries=null}return n(t,[{key:"getSideCenterPoint",value:function(t,e){return{x:t.x+.5*(e.x-t.x),y:t.y+.5*(e.y-t.y)}}},{key:"getSideLengths",value:function(t,e){return[(0,r.default)((0,o.default)(t,e[0].position),(0,o.default)(t,e[1].position)),(0,r.default)((0,o.default)(t,e[1].position),(0,o.default)(t,e[2].position)),(0,r.default)((0,o.default)(t,e[2].position),(0,o.default)(t,e[0].position))]}},{key:"getAngles",value:function(t){return[(0,a.default)(t[2],t[0],t[1]),(0,a.default)(t[0],t[1],t[2]),(0,a.default)(t[1],t[2],t[0])]}},{key:"getArcBoundaries",value:function(t){var e=this,i=[];return this.geometry.forEach(function(n,r){var s=e.geometry[0];r<e.geometry.length-1&&(s=e.geometry[r+1]);var a=e.geometry[e.geometry.length-1];r>0&&(a=e.geometry[r-1]);var u=(0,o.default)(t,n.position),l=(0,o.default)(t,s.position),c=(0,o.default)(t,a.position),f=c.x-u.x,h=c.y-u.y,d=l.x-u.x,v=l.y-u.y,p=Math.atan2(h,f),y=Math.atan2(v,d);if(f*v-h*d<0){var w=y;y=p,p=w}p<y&&(p+=2*Math.PI),i.push({start:p,end:y})}),i}},{key:"drawArc",value:function(t,e,i,n,r){var a=(0,o.default)(t,i.position);e.beginPath(),e.lineWidth=i.arc.width,e.strokeStyle=i.arc.color,e.arc(a.x,a.y,i.arc.radius*(0,s.default)(),r.start,r.end),e.stroke(),i.arc.label&&(i.arc.label.position=(0,u.default)(t,(0,c.default)(r.start+n/2,a,i.arc.radius)),i.arc.label.draw(t,e))}},{key:"drawLine",value:function(t,e,i,n){var r=(0,o.default)(t,i.position),s=(0,o.default)(t,n.position);e.lineCap="round",e.strokeStyle=i.side.color,e.beginPath(),e.lineWidth=i.side.width,e.moveTo(r.x,r.y),e.lineTo(s.x,s.y),e.stroke(),i.side.label&&(i.side.label.position=(0,f.default)(i.position,n.position),i.side.label.draw(t,e))}},{key:"drawVertex",value:function(t,e,i){var n=(0,o.default)(t,i.position);e.fillStyle=i.vertex.color,e.beginPath(),e.arc(n.x,n.y,i.vertex.width,0,2*Math.PI),e.fill(),i.vertex.label&&(i.vertex.label.position=i.position.clone(),i.vertex.label.draw(t,e))}},{key:"draw",value:function(t,e){this.sides=this.getSideLengths(t,this.geometry),this.angles=this.getAngles(this.sides),this.arcBoundaries=this.getArcBoundaries(t);for(var i=0;i<this.geometry.length;i++){var n=this.geometry[i],o=this.geometry[0];i<this.geometry.length-1&&(o=this.geometry[i+1]),n.arc.width>0&&this.drawArc(t,e,n,this.angles[i],this.arcBoundaries[i]),n.side.width>0&&this.drawLine(t,e,n,o),n.vertex.width>0&&this.drawVertex(t,e,n)}}}]),t}();e.default=v},function(t,e,i){"use strict";for(var n=[],o=0;o<256;++o)n[o]=(o+256).toString(16).substr(1);t.exports=function(t,e){var i=e||0,o=n;return[o[t[i++]],o[t[i++]],o[t[i++]],o[t[i++]],"-",o[t[i++]],o[t[i++]],"-",o[t[i++]],o[t[i++]],"-",o[t[i++]],o[t[i++]],"-",o[t[i++]],o[t[i++]],o[t[i++]],o[t[i++]],o[t[i++]],o[t[i++]]].join("")}},function(t,e){t.exports=require("crypto")},function(t,e,i){"use strict";var n=i(16);t.exports=function(){return n.randomBytes(16)}},function(t,e,i){"use strict";var n=i(17),o=i(15);t.exports=function(t,e,i){var r=e&&i||0;"string"==typeof t&&(e="binary"===t?new Array(16):null,t=null);var s=(t=t||{}).random||(t.rng||n)();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,e)for(var a=0;a<16;++a)e[r+a]=s[a];return e||o(s)}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();var o=i(18),r=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.objects=[]}return n(t,[{key:"add",value:function(t){t.uuid=o(),this.objects.push(t)}},{key:"remove",value:function(t){this.objects=this.objects.filter(function(e){return e.uuid!==t})}}]),t}();e.default=r},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();var o=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var n=document.getElementById(e),o=n.getContext("2d"),r=window.devicePixelRatio;n.width=n.offsetWidth*r,n.height=n.offsetHeight*r,this.canvas=n,this.ctx=o,this.cx=o.canvas.width/2,this.cy=o.canvas.height/2,this.pixelDensity=r,this.scene=i}return n(t,[{key:"resizeCanvas",value:function(){var t=this;this.canvas.width=this.canvas.offsetWidth*this.pixelDensity,this.canvas.height=this.canvas.offsetHeight*this.pixelDensity,this.cx=this.ctx.canvas.width/2,this.cy=this.ctx.canvas.height/2,this.scene.objects.forEach(function(e){"function"==typeof e.resize&&e.resize(t.canvas,t.ctx)})}},{key:"clear",value:function(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)}},{key:"render",value:function(){var t=this;this.clear(),this.scene.objects.forEach(function(e){e.draw(t.canvas,t.ctx)})}}]),t}();e.default=o},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=a(i(1)),r=a(i(2)),s=a(i(0));function a(t){return t&&t.__esModule?t:{default:t}}var u=function(){function t(e){var i=e.fillStyle,n=void 0===i?"#000000":i,o=e.font,a=void 0===o?"sans-serif":o,u=e.fontSize,l=void 0===u?"16":u,c=e.fontSizeType,f=void 0===c?"px":c,h=e.offset,d=void 0===h?new s.default:h,v=e.position,p=void 0===v?new s.default:v,y=e.rotation,w=void 0===y?0:y,b=e.shouldFill,g=void 0===b||b,x=e.shouldStroke,k=void 0!==x&&x,P=e.strokeStyle,_=void 0===P?"#000000":P,S=e.text,m=void 0===S?"Hello World":S,M=e.textAlign,j=void 0===M?"center":M;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.fillStyle=n,this.font=a,this.fontSize=l*(0,r.default)(),this.fontSizeType=f,this.offset=d,this.position=p,this.rotation=w,this.shouldFill=g,this.shouldStroke=k,this.strokeStyle=_,this.text=m,this.textAlign=j}return n(t,[{key:"draw",value:function(t,e){var i=(0,o.default)(t,this.position),n=new s.default(i.x+this.offset.x,i.y+this.offset.y);e.font=""+this.fontSize+this.fontSizeType+" "+this.font,e.textAlign=this.textAlign,e.translate(n.x,n.y),e.rotate(this.rotation),this.shouldFill&&(e.fillStyle=this.fillStyle,e.fillText(this.text,0,0)),this.shouldStroke&&(e.strokeStyle=this.strokeStyle,e.strokeText(this.text,0,0)),e.setTransform(1,0,0,1,0,0)}}]),t}();e.default=u},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=(s(i(3)),s(i(11)),s(i(0))),r=s(i(2));function s(t){return t&&t.__esModule?t:{default:t}}var a=function(){function t(e){var i=e.color,n=void 0===i?"rgba(0, 0, 0, 0.3)":i,o=e.originColor,r=void 0===o?"rgba(0, 0, 0, 1)":o,s=e.originLineWidth,a=void 0===s?1:s,u=e.size,l=void 0===u?50:u,c=e.width,f=void 0===c?1:c,h=e.canvas;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.color=n,this.originColor=r,this.originLineWidth=a,this.size=l,this.width=f,this.canvas=h,this.initLines()}return n(t,[{key:"initLines",value:function(){this.lines=[new trize.Line({color:this.originColor,end:new o.default(1,0),start:new o.default(-1,0),width:this.originLineWidth}),new trize.Line({color:this.originColor,end:new o.default(0,1),start:new o.default(0,-1),width:this.originLineWidth})],this.clipSpaceSize=new o.default(this.size/this.canvas.width*(0,r.default)(),this.size/this.canvas.height*(0,r.default)());for(var t=Math.ceil(this.canvas.height/this.size),e=1;e<t/2;e++)this.lines.push(new trize.Line({color:this.color,end:new o.default(1,e*this.clipSpaceSize.y),start:new o.default(-1,e*this.clipSpaceSize.y),width:this.width}),new trize.Line({color:this.color,end:new o.default(1,-e*this.clipSpaceSize.y),start:new o.default(-1,-e*this.clipSpaceSize.y),width:this.width}));for(var i=Math.ceil(this.canvas.width/this.size),n=1;n<i/2;n++)this.lines.push(new trize.Line({color:this.color,end:new o.default(n*this.clipSpaceSize.x,1),start:new o.default(n*this.clipSpaceSize.x,-1),width:this.width}),new trize.Line({color:this.color,end:new o.default(-n*this.clipSpaceSize.x,1),start:new o.default(-n*this.clipSpaceSize.x,-1),width:this.width}))}},{key:"resize",value:function(t,e){this.initLines()}},{key:"draw",value:function(t,e){this.lines.forEach(function(i){return i.draw(t,e)})}}]),t}();e.default=a},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=r(i(1));r(i(0));function r(t){return t&&t.__esModule?t:{default:t}}var s=function(){function t(e){var i=e.color,n=void 0===i?"rgba(0, 0, 0, 1)":i,o=e.points,r=e.lineWidth,s=void 0===r?1:r,a=e.canvas,u=e.tension,l=void 0===u?.5:u;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.color=n,this.lineWidth=s,this.tension=l,this.canvas=a,this.points=this.transformPoints(o),this.controlPoints=this.generateControlPoints()}return n(t,[{key:"transformPoints",value:function(t){var e=this,i=[];return t.forEach(function(t){var n=(0,o.default)(e.canvas,t);i.push(n.x,n.y)}),i}},{key:"controlPointsFunc",value:function(t,e,i,n,o,r){var s=this.va(this.points,0,2),a=this.distanceArray(this.points,0,1),u=this.distanceArray(this.points,1,2),l=a+u;return[i-s[0]*this.tension*a/l,n-s[1]*this.tension*a/l,i+s[0]*this.tension*u/l,n+s[1]*this.tension*u/l]}},{key:"generateControlPoints",value:function(){for(var t=[],e=0;e<this.points.length-2;e+=1)t=t.concat(this.controlPointsFunc(this.points[2*e],this.points[2*e+1],this.points[2*e+2],this.points[2*e+3],this.points[2*e+4],this.points[2*e+5]));return t}},{key:"distanceArray",value:function(t,e,i){return Math.sqrt(Math.pow(t[2*e]-t[2*i],2)+Math.pow(t[2*e+1]-t[2*i+1],2))}},{key:"va",value:function(t,e,i){return[t[2*i]-t[2*e],t[2*i+1]-t[2*e+1]]}},{key:"resize",value:function(t,e,i){this.points=this.transformPoints(i),this.controlPoints=this.generateControlPoints()}},{key:"draw",value:function(t,e){e.beginPath(),e.moveTo(this.points[0],this.points[1]),e.quadraticCurveTo(this.controlPoints[0],this.controlPoints[1],this.points[2],this.points[3]);for(var i=2;i<this.points.length-1;i++)e.bezierCurveTo(this.controlPoints[2*(2*(i-1)-1)],this.controlPoints[2*(2*(i-1)-1)+1],this.controlPoints[2*(i-1)*2],this.controlPoints[2*(i-1)*2+1],this.points[2*i],this.points[2*i+1]);e.quadraticCurveTo(this.controlPoints[2*(2*(this.points.length-1-1)-1)],this.controlPoints[2*(2*(this.points.length-1-1)-1)+1],this.points[2*(this.points.length-1)],this.points[2*(this.points.length-1)+1]),e.lineWidth=this.lineWidth,e.strokeStyle=this.color,e.stroke()}}]),t}();e.default=s},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=u(i(1)),r=u(i(0)),s=u(i(12)),a=u(i(23));function u(t){return t&&t.__esModule?t:{default:t}}var l=function(){function t(e){var i=e.canvas,n=e.condition,o=void 0===n?function(t){return t<10}:n,s=e.drawCurve,a=void 0===s||s,u=e.drawLines,l=void 0!==u&&u,c=e.drawPoints,f=void 0===c||c,h=e.func,d=void 0===h?function(t){return new r.default(t+1,t+1)}:h,v=e.graph,p=e.incrementExpression,y=void 0===p?function(t){return t+1}:p,w=e.initialValue,b=void 0===w?0:w,g=e.lineColor,x=void 0===g?"black":g,k=e.lineWidth,P=void 0===k?2:k,_=e.pointColor,S=void 0===_?"black":_,m=e.pointWidth,M=void 0===m?4:m;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.canvas=i,this.condition=o,this.drawCurve=a,this.drawLines=l,this.drawPoints=f,this.func=d,this.graph=v,this.incrementExpression=y,this.initialValue=b,this.lineColor=x,this.lineWidth=P,this.pointColor=S,this.pointWidth=M,this.plotPoints(),this.generateCurve()}return n(t,[{key:"plotPoints",value:function(){this.points=[],this.pointObjects=[];for(var t=this.initialValue;this.condition(t);t=this.incrementExpression(t)){var e=this.func(t),i=new r.default(e.x*this.graph.clipSpaceSize.x,e.y*this.graph.clipSpaceSize.y);this.points.push(i),this.pointObjects.push(new s.default({color:this.pointColor,position:i,width:this.pointWidth}))}}},{key:"generateCurve",value:function(){this.curve=new a.default({points:this.points,color:this.lineColor,lineWidth:this.lineWidth,canvas:this.canvas,tension:.5})}},{key:"drawStraightLines",value:function(t,e){var i=(0,o.default)(t,this.points[0]);e.moveTo(i.x,i.y),e.beginPath();for(var n=0;n<this.points.length;n++){var r=(0,o.default)(t,this.points[n]);e.lineTo(r.x,r.y),e.lineWidth=this.lineWidth,e.strokeStyle=this.lineColor,e.stroke()}}},{key:"resize",value:function(t,e){this.plotPoints(),this.curve.resize(t,e,this.points)}},{key:"draw",value:function(t,e){this.drawPoints&&this.pointObjects.forEach(function(i){return i.draw(t,e)}),this.drawCurve&&this.curve.draw(t,e),this.drawLines&&this.drawStraightLines(t,e)}}]),t}();e.default=l},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=u(i(1)),r=u(i(4)),s=u(i(2)),a=u(i(0));function u(t){return t&&t.__esModule?t:{default:t}}var l=function(){function t(e){var i=e.arcEnd,n=void 0===i?2*Math.PI:i,o=e.arcStart,r=void 0===o?0:o,u=e.clipRadius,l=void 0===u?null:u,c=e.fillStyle,f=void 0===c?"#000000":c,h=e.position,d=void 0===h?new a.default(0,0):h,v=e.radius,p=void 0===v?null:v,y=e.shouldFill,w=void 0===y||y,b=e.shouldStroke,g=void 0!==b&&b,x=e.strokeStyle,k=void 0===x?"#000000":x,P=e.strokeWidth,_=void 0===P?1:P;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.arcEnd=n,this.arcStart=r,this.clipRadius=l,this.fillStyle=f,this.position=d,this.radius=p*(0,s.default)(),this.shouldFill=w,this.shouldStroke=g,this.strokeStyle=k,this.strokeWidth=_*(0,s.default)()}return n(t,[{key:"getPixelRadiusFromClipRadius",value:function(t){return(0,r.default)((0,o.default)(t,new a.default(0,0)),(0,o.default)(t,new a.default(this.clipRadius,0)))}},{key:"draw",value:function(t,e){var i=(0,o.default)(t,this.position),n=this.radius;this.radius||(n=this.getPixelRadiusFromClipRadius(t)),this.shouldFill&&(e.fillStyle=this.fillStyle,e.beginPath(),e.arc(i.x,i.y,n,this.arcStart,this.arcEnd,!0),e.fill()),this.shouldStroke&&(e.strokeStyle=this.strokeStyle,e.lineWidth=this.strokeWidth*this.pixelDensity,e.beginPath(),e.arc(i.x,i.y,n,this.arcStart,this.arcEnd,!0),e.stroke())}}]),t}();e.default=l},function(t,e,i){"use strict";var n=_(i(25)),o=_(i(24)),r=_(i(22)),s=_(i(21)),a=_(i(11)),u=_(i(10)),l=_(i(20)),c=_(i(19)),f=_(i(14)),h=_(i(0)),d=_(i(12)),v=_(i(1)),p=_(i(9)),y=_(i(4)),w=_(i(8)),b=_(i(3)),g=_(i(7)),x=_(i(6)),k=_(i(13)),P=_(i(5));function _(t){return t&&t.__esModule?t:{default:t}}var S={Circle:n.default,Function:o.default,Graph:r.default,Label:s.default,Line:a.default,Point:u.default,Renderer:l.default,Scene:c.default,Triangle:f.default,Vector2:h.default,Vertex:d.default,clipSpaceToPixels:v.default,degToRad:p.default,distance:y.default,lawOfCosines:w.default,pixelsToClipSpace:b.default,pointOnCircle:g.default,radToDeg:x.default,round:k.default,sideCenterPoint:P.default};void 0!==t&&void 0!==t.exports?t.exports=S:window.trize=S}])});