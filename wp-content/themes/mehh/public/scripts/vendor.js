(self["webpackChunksage"] = self["webpackChunksage"] || []).push([["/scripts/vendor"],{

/***/ "./node_modules/@fancyapps/ui/dist/index.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/@fancyapps/ui/dist/index.esm.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Carousel": function() { return /* binding */ _; },
/* harmony export */   "Fancybox": function() { return /* binding */ xt; },
/* harmony export */   "Panzoom": function() { return /* binding */ T; }
/* harmony export */ });
const t=(t,e=1e4)=>(t=parseFloat(t+"")||0,Math.round((t+Number.EPSILON)*e)/e),e=function(t){if(!(t&&t instanceof Element&&t.offsetParent))return!1;const e=t.scrollHeight>t.clientHeight,i=window.getComputedStyle(t).overflowY,n=-1!==i.indexOf("hidden"),s=-1!==i.indexOf("visible");return e&&!n&&!s},i=function(t,n){return!(!t||t===document.body||n&&t===n)&&(e(t)?t:i(t.parentElement,n))},n=function(t){var e=(new DOMParser).parseFromString(t,"text/html").body;if(e.childElementCount>1){for(var i=document.createElement("div");e.firstChild;)i.appendChild(e.firstChild);return i}return e.firstChild},s=t=>`${t||""}`.split(" ").filter((t=>!!t)),o=(t,e,i)=>{s(e).forEach((e=>{t&&t.classList.toggle(e,i||!1)}))};class a{constructor(t){Object.defineProperty(this,"pageX",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"pageY",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"clientX",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"clientY",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"id",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"time",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"nativePointer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.nativePointer=t,this.pageX=t.pageX,this.pageY=t.pageY,this.clientX=t.clientX,this.clientY=t.clientY,this.id=self.Touch&&t instanceof Touch?t.identifier:-1,this.time=Date.now()}}const r={passive:!1};class l{constructor(t,{start:e=(()=>!0),move:i=(()=>{}),end:n=(()=>{})}){Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"startCallback",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"moveCallback",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"endCallback",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"currentPointers",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"startPointers",{enumerable:!0,configurable:!0,writable:!0,value:[]}),this.element=t,this.startCallback=e,this.moveCallback=i,this.endCallback=n;for(const t of["onPointerStart","onTouchStart","onMove","onTouchEnd","onPointerEnd","onWindowBlur"])this[t]=this[t].bind(this);this.element.addEventListener("mousedown",this.onPointerStart,r),this.element.addEventListener("touchstart",this.onTouchStart,r),this.element.addEventListener("touchmove",this.onMove,r),this.element.addEventListener("touchend",this.onTouchEnd),this.element.addEventListener("touchcancel",this.onTouchEnd)}onPointerStart(t){if(!t.buttons||0!==t.button)return;const e=new a(t);this.currentPointers.some((t=>t.id===e.id))||this.triggerPointerStart(e,t)&&(window.addEventListener("mousemove",this.onMove),window.addEventListener("mouseup",this.onPointerEnd),window.addEventListener("blur",this.onWindowBlur))}onTouchStart(t){for(const e of Array.from(t.changedTouches||[]))this.triggerPointerStart(new a(e),t);window.addEventListener("blur",this.onWindowBlur)}onMove(t){const e=this.currentPointers.slice(),i="changedTouches"in t?Array.from(t.changedTouches||[]).map((t=>new a(t))):[new a(t)],n=[];for(const t of i){const e=this.currentPointers.findIndex((e=>e.id===t.id));e<0||(n.push(t),this.currentPointers[e]=t)}n.length&&this.moveCallback(t,this.currentPointers.slice(),e)}onPointerEnd(t){t.buttons>0&&0!==t.button||(this.triggerPointerEnd(t,new a(t)),window.removeEventListener("mousemove",this.onMove),window.removeEventListener("mouseup",this.onPointerEnd),window.removeEventListener("blur",this.onWindowBlur))}onTouchEnd(t){for(const e of Array.from(t.changedTouches||[]))this.triggerPointerEnd(t,new a(e))}triggerPointerStart(t,e){return!!this.startCallback(e,t,this.currentPointers.slice())&&(this.currentPointers.push(t),this.startPointers.push(t),!0)}triggerPointerEnd(t,e){const i=this.currentPointers.findIndex((t=>t.id===e.id));i<0||(this.currentPointers.splice(i,1),this.startPointers.splice(i,1),this.endCallback(t,e,this.currentPointers.slice()))}onWindowBlur(){this.clear()}clear(){for(;this.currentPointers.length;){const t=this.currentPointers[this.currentPointers.length-1];this.currentPointers.splice(this.currentPointers.length-1,1),this.startPointers.splice(this.currentPointers.length-1,1),this.endCallback(new Event("touchend",{bubbles:!0,cancelable:!0,clientX:t.clientX,clientY:t.clientY}),t,this.currentPointers.slice())}}stop(){this.element.removeEventListener("mousedown",this.onPointerStart,r),this.element.removeEventListener("touchstart",this.onTouchStart,r),this.element.removeEventListener("touchmove",this.onMove,r),this.element.removeEventListener("touchend",this.onTouchEnd),this.element.removeEventListener("touchcancel",this.onTouchEnd),window.removeEventListener("mousemove",this.onMove),window.removeEventListener("mouseup",this.onPointerEnd),window.removeEventListener("blur",this.onWindowBlur)}}function c(t,e){return e?Math.sqrt(Math.pow(e.clientX-t.clientX,2)+Math.pow(e.clientY-t.clientY,2)):0}function h(t,e){return e?{clientX:(t.clientX+e.clientX)/2,clientY:(t.clientY+e.clientY)/2}:t}const d=t=>"object"==typeof t&&null!==t&&t.constructor===Object&&"[object Object]"===Object.prototype.toString.call(t),u=(t,...e)=>{const i=e.length;for(let n=0;n<i;n++){const i=e[n]||{};Object.entries(i).forEach((([e,i])=>{const n=Array.isArray(i)?[]:{};t[e]||Object.assign(t,{[e]:n}),d(i)?Object.assign(t[e],u(n,i)):Array.isArray(i)?Object.assign(t,{[e]:[...i]}):Object.assign(t,{[e]:i})}))}return t},p=function(t,e){return t.split(".").reduce(((t,e)=>"object"==typeof t?t[e]:void 0),e)};class f{constructor(t={}){Object.defineProperty(this,"options",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"events",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),this.setOptions(t);for(const t of Object.getOwnPropertyNames(Object.getPrototypeOf(this)))t.startsWith("on")&&"function"==typeof this[t]&&(this[t]=this[t].bind(this))}setOptions(t){this.options=t?u({},this.constructor.defaults,t):{};for(const[t,e]of Object.entries(this.option("on")||{}))this.on(t,e)}option(t,...e){let i=p(t,this.options);return i&&"function"==typeof i&&(i=i.call(this,this,...e)),i}optionFor(t,e,i,...n){let s=p(e,t);var o;"string"!=typeof(o=s)||isNaN(o)||isNaN(parseFloat(o))||(s=parseFloat(s)),"true"===s&&(s=!0),"false"===s&&(s=!1),s&&"function"==typeof s&&(s=s.call(this,this,t,...n));let a=p(e,this.options);return a&&"function"==typeof a?s=a.call(this,this,t,...n,s):void 0===s&&(s=a),void 0===s?i:s}cn(t){const e=this.options.classes;return e&&e[t]||""}localize(t,e=[]){t=String(t).replace(/\{\{(\w+).?(\w+)?\}\}/g,((t,e,i)=>{let n="";return i?n=this.option(`${e[0]+e.toLowerCase().substring(1)}.l10n.${i}`):e&&(n=this.option(`l10n.${e}`)),n||(n=t),n}));for(let i=0;i<e.length;i++)t=t.split(e[i][0]).join(e[i][1]);return t=t.replace(/\{\{(.*?)\}\}/g,((t,e)=>e))}on(t,e){let i=[];"string"==typeof t?i=t.split(" "):Array.isArray(t)&&(i=t),this.events||(this.events=new Map),i.forEach((t=>{let i=this.events.get(t);i||(this.events.set(t,[]),i=[]),i.includes(e)||i.push(e),this.events.set(t,i)}))}off(t,e){let i=[];"string"==typeof t?i=t.split(" "):Array.isArray(t)&&(i=t),i.forEach((t=>{const i=this.events.get(t);if(Array.isArray(i)){const t=i.indexOf(e);t>-1&&i.splice(t,1)}}))}emit(t,...e){[...this.events.get(t)||[]].forEach((t=>t(this,...e))),"*"!==t&&this.emit("*",t,...e)}}Object.defineProperty(f,"version",{enumerable:!0,configurable:!0,writable:!0,value:"5.0.15"}),Object.defineProperty(f,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:{}});class m extends f{constructor(t={}){super(t),Object.defineProperty(this,"plugins",{enumerable:!0,configurable:!0,writable:!0,value:{}})}attachPlugins(t={}){const e=new Map;for(const[i,n]of Object.entries(t)){const t=this.option(i),s=this.plugins[i];s||!1===t?s&&!1===t&&(s.detach(),delete this.plugins[i]):e.set(i,new n(this,t||{}))}for(const[t,i]of e)this.plugins[t]=i,i.attach();this.emit("attachPlugins")}detachPlugins(t){t=t||Object.keys(this.plugins);for(const e of t){const t=this.plugins[e];t&&t.detach(),delete this.plugins[e]}return this.emit("detachPlugins"),this}}var g;!function(t){t[t.Init=0]="Init",t[t.Error=1]="Error",t[t.Ready=2]="Ready",t[t.Panning=3]="Panning",t[t.Mousemove=4]="Mousemove",t[t.Destroy=5]="Destroy"}(g||(g={}));const b=["a","b","c","d","e","f"],v={PANUP:"Move up",PANDOWN:"Move down",PANLEFT:"Move left",PANRIGHT:"Move right",ZOOMIN:"Zoom in",ZOOMOUT:"Zoom out",TOGGLEZOOM:"Toggle zoom level",TOGGLE1TO1:"Toggle zoom level",ITERATEZOOM:"Toggle zoom level",ROTATECCW:"Rotate counterclockwise",ROTATECW:"Rotate clockwise",FLIPX:"Flip horizontally",FLIPY:"Flip vertically",FITX:"Fit horizontally",FITY:"Fit vertically",RESET:"Reset",TOGGLEFS:"Toggle fullscreen"},y={content:null,width:"auto",height:"auto",panMode:"drag",touch:!0,dragMinThreshold:3,lockAxis:!1,mouseMoveFactor:1,mouseMoveFriction:.12,zoom:!0,pinchToZoom:!0,panOnlyZoomed:"auto",minScale:1,maxScale:2,friction:.25,dragFriction:.35,decelFriction:.05,click:"toggleZoom",dblClick:!1,wheel:"zoom",wheelLimit:7,spinner:!0,bounds:"auto",infinite:!1,rubberband:!0,bounce:!0,maxVelocity:75,transformParent:!1,classes:{content:"f-panzoom__content",isLoading:"is-loading",canZoomIn:"can-zoom_in",canZoomOut:"can-zoom_out",isDraggable:"is-draggable",isDragging:"is-dragging",inFullscreen:"in-fullscreen",htmlHasFullscreen:"with-panzoom-in-fullscreen"},l10n:v},w='<div class="f-spinner"><svg viewBox="0 0 50 50"><circle cx="25" cy="25" r="20"></circle><circle cx="25" cy="25" r="20"></circle></svg></div>',x=t=>t&&null!==t&&t instanceof Element&&"nodeType"in t,E=(t,e)=>{t&&s(e).forEach((e=>{t.classList.remove(e)}))},S=(t,e)=>{t&&s(e).forEach((e=>{t.classList.add(e)}))},P={a:1,b:0,c:0,d:1,e:0,f:0};let C=null,M=null;class T extends m{get isTouchDevice(){return null===M&&(M=window.matchMedia("(hover: none)").matches),M}get isMobile(){return null===C&&(C=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)),C}get panMode(){return"mousemove"!==this.options.panMode||this.isTouchDevice?"drag":"mousemove"}get panOnlyZoomed(){const t=this.options.panOnlyZoomed;return"auto"===t?this.isTouchDevice:t}get isInfinite(){return this.option("infinite")}get angle(){return 180*Math.atan2(this.current.b,this.current.a)/Math.PI||0}get targetAngle(){return 180*Math.atan2(this.target.b,this.target.a)/Math.PI||0}get scale(){const{a:t,b:e}=this.current;return Math.sqrt(t*t+e*e)||1}get targetScale(){const{a:t,b:e}=this.target;return Math.sqrt(t*t+e*e)||1}get minScale(){return this.option("minScale")||1}get fullScale(){const{contentRect:t}=this;return t.fullWidth/t.fitWidth||1}get maxScale(){return this.fullScale*(this.option("maxScale")||1)||1}get coverScale(){const{containerRect:t,contentRect:e}=this,i=Math.max(t.height/e.fitHeight,t.width/e.fitWidth)||1;return Math.min(this.fullScale,i)}get isScaling(){return Math.abs(this.targetScale-this.scale)>1e-5&&!this.isResting}get isContentLoading(){const t=this.content;return!!(t&&t instanceof HTMLImageElement)&&!t.complete}get isResting(){if(this.isBouncingX||this.isBouncingY)return!1;for(const t of b){const e="e"==t||"f"===t?.001:1e-5;if(Math.abs(this.target[t]-this.current[t])>e)return!1}return!(!this.ignoreBounds&&!this.checkBounds().inBounds)}constructor(t,e={},i={}){var s;if(super(e),Object.defineProperty(this,"pointerTracker",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"resizeObserver",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"updateTimer",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"clickTimer",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"rAF",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"isTicking",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"friction",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"ignoreBounds",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"isBouncingX",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"isBouncingY",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"clicks",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"trackingPoints",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"pwt",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"cwd",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"pmme",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"state",{enumerable:!0,configurable:!0,writable:!0,value:g.Init}),Object.defineProperty(this,"isDragging",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"container",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"content",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"spinner",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"containerRect",{enumerable:!0,configurable:!0,writable:!0,value:{width:0,height:0,innerWidth:0,innerHeight:0}}),Object.defineProperty(this,"contentRect",{enumerable:!0,configurable:!0,writable:!0,value:{top:0,right:0,bottom:0,left:0,fullWidth:0,fullHeight:0,fitWidth:0,fitHeight:0,width:0,height:0}}),Object.defineProperty(this,"dragStart",{enumerable:!0,configurable:!0,writable:!0,value:{x:0,y:0,top:0,left:0,time:0}}),Object.defineProperty(this,"dragOffset",{enumerable:!0,configurable:!0,writable:!0,value:{x:0,y:0,time:0}}),Object.defineProperty(this,"current",{enumerable:!0,configurable:!0,writable:!0,value:Object.assign({},P)}),Object.defineProperty(this,"target",{enumerable:!0,configurable:!0,writable:!0,value:Object.assign({},P)}),Object.defineProperty(this,"velocity",{enumerable:!0,configurable:!0,writable:!0,value:{a:0,b:0,c:0,d:0,e:0,f:0}}),Object.defineProperty(this,"lockedAxis",{enumerable:!0,configurable:!0,writable:!0,value:!1}),!t)throw new Error("Container Element Not Found");this.container=t,this.initContent(),this.attachPlugins(Object.assign(Object.assign({},T.Plugins),i)),this.emit("init");const o=this.content;if(o.addEventListener("load",this.onLoad),o.addEventListener("error",this.onError),this.isContentLoading){if(this.option("spinner")){t.classList.add(this.cn("isLoading"));const e=n(w);!t.contains(o)||o.parentElement instanceof HTMLPictureElement?this.spinner=t.appendChild(e):this.spinner=(null===(s=o.parentElement)||void 0===s?void 0:s.insertBefore(e,o))||null}this.emit("beforeLoad")}else queueMicrotask((()=>{this.enable()}))}initContent(){const{container:t}=this,e=this.cn("content");let i=this.option("content")||t.querySelector(`.${e}`);if(i||(i=t.querySelector("img,picture")||t.firstElementChild,i&&S(i,e)),i instanceof HTMLPictureElement&&(i=i.querySelector("img")),!i)throw new Error("No content found");this.content=i}onLoad(){this.spinner&&(this.spinner.remove(),this.spinner=null),this.option("spinner")&&this.container.classList.remove(this.cn("isLoading")),this.emit("afterLoad"),this.state===g.Init?this.enable():this.updateMetrics()}onError(){this.state!==g.Destroy&&(this.spinner&&(this.spinner.remove(),this.spinner=null),this.stop(),this.detachEvents(),this.state=g.Error,this.emit("error"))}attachObserver(){var t;const e=()=>Math.abs(this.containerRect.width-this.container.getBoundingClientRect().width)>.1||Math.abs(this.containerRect.height-this.container.getBoundingClientRect().height)>.1;this.resizeObserver||void 0===window.ResizeObserver||(this.resizeObserver=new ResizeObserver((()=>{this.updateTimer||(e()?(this.onResize(),this.isMobile&&(this.updateTimer=setTimeout((()=>{e()&&this.onResize(),this.updateTimer=null}),500))):this.updateTimer&&(clearTimeout(this.updateTimer),this.updateTimer=null))}))),null===(t=this.resizeObserver)||void 0===t||t.observe(this.container)}detachObserver(){var t;null===(t=this.resizeObserver)||void 0===t||t.disconnect()}attachEvents(){const{container:t}=this;t.addEventListener("click",this.onClick,{passive:!1,capture:!1}),t.addEventListener("wheel",this.onWheel,{passive:!1}),this.pointerTracker=new l(t,{start:this.onPointerDown,move:this.onPointerMove,end:this.onPointerUp}),document.addEventListener("mousemove",this.onMouseMove)}detachEvents(){var t;const{container:e}=this;e.removeEventListener("click",this.onClick,{passive:!1,capture:!1}),e.removeEventListener("wheel",this.onWheel,{passive:!1}),null===(t=this.pointerTracker)||void 0===t||t.stop(),this.pointerTracker=null,document.removeEventListener("mousemove",this.onMouseMove),document.removeEventListener("keydown",this.onKeydown,!0),this.clickTimer&&(clearTimeout(this.clickTimer),this.clickTimer=null),this.updateTimer&&(clearTimeout(this.updateTimer),this.updateTimer=null)}animate(){const t=this.friction;this.setTargetForce();const e=this.option("maxVelocity");for(const i of b)t?(this.velocity[i]*=1-t,e&&!this.isScaling&&(this.velocity[i]=Math.max(Math.min(this.velocity[i],e),-1*e)),this.current[i]+=this.velocity[i]):this.current[i]=this.target[i];this.setTransform(),this.setEdgeForce(),!this.isResting||this.isDragging?this.rAF=requestAnimationFrame((()=>this.animate())):this.stop("current")}setTargetForce(){for(const t of b)"e"===t&&this.isBouncingX||"f"===t&&this.isBouncingY||(this.velocity[t]=(1/(1-this.friction)-1)*(this.target[t]-this.current[t]))}checkBounds(t=0,e=0){const{current:i}=this,n=i.e+t,s=i.f+e,o=this.getBounds(),{x:a,y:r}=o,l=a.min,c=a.max,h=r.min,d=r.max;let u=0,p=0;return l!==1/0&&n<l?u=l-n:c!==1/0&&n>c&&(u=c-n),h!==1/0&&s<h?p=h-s:d!==1/0&&s>d&&(p=d-s),Math.abs(u)<.001&&(u=0),Math.abs(p)<.001&&(p=0),Object.assign(Object.assign({},o),{xDiff:u,yDiff:p,inBounds:!u&&!p})}clampTargetBounds(){const{target:t}=this,{x:e,y:i}=this.getBounds();e.min!==1/0&&(t.e=Math.max(t.e,e.min)),e.max!==1/0&&(t.e=Math.min(t.e,e.max)),i.min!==1/0&&(t.f=Math.max(t.f,i.min)),i.max!==1/0&&(t.f=Math.min(t.f,i.max))}calculateContentDim(t=this.current){const{content:e,contentRect:i}=this,{fitWidth:n,fitHeight:s,fullWidth:o,fullHeight:a}=i;let r=o,l=a;if(this.option("zoom")||0!==this.angle){const i=!(e instanceof HTMLImageElement)&&("none"===window.getComputedStyle(e).maxWidth||"none"===window.getComputedStyle(e).maxHeight),c=i?o:n,h=i?a:s,d=this.getMatrix(t),u=new DOMPoint(0,0).matrixTransform(d),p=new DOMPoint(0+c,0).matrixTransform(d),f=new DOMPoint(0+c,0+h).matrixTransform(d),m=new DOMPoint(0,0+h).matrixTransform(d),g=Math.abs(f.x-u.x),b=Math.abs(f.y-u.y),v=Math.abs(m.x-p.x),y=Math.abs(m.y-p.y);r=Math.max(g,v),l=Math.max(b,y)}return{contentWidth:r,contentHeight:l}}setEdgeForce(){if(this.ignoreBounds||this.isDragging||"mousemove"===this.panMode||this.targetScale<this.scale)return this.isBouncingX=!1,void(this.isBouncingY=!1);const{target:t}=this,{x:e,y:i,xDiff:n,yDiff:s}=this.checkBounds();const o=this.option("maxVelocity");let a=this.velocity.e,r=this.velocity.f;0!==n?(this.isBouncingX=!0,n*a<=0?a+=.14*n:(a=.14*n,e.min!==1/0&&(this.target.e=Math.max(t.e,e.min)),e.max!==1/0&&(this.target.e=Math.min(t.e,e.max))),o&&(a=Math.max(Math.min(a,o),-1*o))):this.isBouncingX=!1,0!==s?(this.isBouncingY=!0,s*r<=0?r+=.14*s:(r=.14*s,i.min!==1/0&&(this.target.f=Math.max(t.f,i.min)),i.max!==1/0&&(this.target.f=Math.min(t.f,i.max))),o&&(r=Math.max(Math.min(r,o),-1*o))):this.isBouncingY=!1,this.isBouncingX&&(this.velocity.e=a),this.isBouncingY&&(this.velocity.f=r)}enable(){const{content:t}=this,e=new DOMMatrixReadOnly(window.getComputedStyle(t).transform);for(const t of b)this.current[t]=this.target[t]=e[t];this.updateMetrics(),this.attachObserver(),this.attachEvents(),this.state=g.Ready,this.emit("ready")}onClick(t){var e;this.isDragging&&(null===(e=this.pointerTracker)||void 0===e||e.clear(),this.trackingPoints=[],this.startDecelAnim());const i=t.target;if(!i||t.defaultPrevented)return;if(i&&i.hasAttribute("disabled"))return t.preventDefault(),void t.stopPropagation();if((()=>{const t=window.getSelection();return t&&"Range"===t.type})()&&!i.closest("button"))return;const n=i.closest("[data-panzoom-action]"),s=i.closest("[data-panzoom-change]"),o=n||s,a=o&&x(o)?o.dataset:null;if(a){const e=a.panzoomChange,i=a.panzoomAction;if((e||i)&&t.preventDefault(),e){let t={};try{t=JSON.parse(e)}catch(t){console&&console.warn("The given data was not valid JSON")}return void this.applyChange(t)}if(i)return void(this[i]&&this[i]())}if(Math.abs(this.dragOffset.x)>3||Math.abs(this.dragOffset.y)>3)return t.preventDefault(),void t.stopPropagation();const r=this.content.getBoundingClientRect();if(this.dragStart.time&&!this.canZoomOut()&&(Math.abs(r.x-this.dragStart.x)>2||Math.abs(r.y-this.dragStart.y)>2))return;this.dragStart.time=0;const l=e=>{this.option("zoom")&&e&&"string"==typeof e&&/(iterateZoom)|(toggle(Zoom|Full|Cover|Max)|(zoomTo(Fit|Cover|Max)))/.test(e)&&"function"==typeof this[e]&&(t.preventDefault(),this[e]({event:t}))},c=this.option("click",t),h=this.option("dblClick",t);h?(this.clicks++,1==this.clicks&&(this.clickTimer=setTimeout((()=>{1===this.clicks?(this.emit("click",t),!t.defaultPrevented&&c&&l(c)):(this.emit("dblClick",t),t.defaultPrevented||l(h)),this.clicks=0,this.clickTimer=null}),350))):(this.emit("click",t),!t.defaultPrevented&&c&&l(c))}addTrackingPoint(t){const e=this.trackingPoints.filter((t=>t.time>Date.now()-100));e.push(t),this.trackingPoints=e}onPointerDown(t,e,i){var n;this.pwt=0,this.dragOffset={x:0,y:0,time:0},this.trackingPoints=[];const s=this.content.getBoundingClientRect();if(this.dragStart={x:s.x,y:s.y,top:s.top,left:s.left,time:Date.now()},this.clickTimer)return!1;if("mousemove"===this.panMode&&this.targetScale>1)return t.preventDefault(),t.stopPropagation(),!1;if(!i.length){const e=t.composedPath()[0];if(["A","TEXTAREA","OPTION","INPUT","SELECT","VIDEO"].includes(e.nodeName)||e.closest("[contenteditable]")||e.closest("[data-selectable]")||e.closest("[data-panzoom-change]")||e.closest("[data-panzoom-action]"))return!1;null===(n=window.getSelection())||void 0===n||n.removeAllRanges()}if("mousedown"===t.type)t.preventDefault();else if(Math.abs(this.velocity.a)>.3)return!1;return this.target.e=this.current.e,this.target.f=this.current.f,this.stop(),this.isDragging||(this.isDragging=!0,this.addTrackingPoint(e),this.emit("touchStart",t)),!0}onPointerMove(e,n,s){if(!1===this.option("touch",e))return;if(!this.isDragging)return;if(n.length<2&&this.panOnlyZoomed&&t(this.targetScale)<=t(this.minScale))return;if(this.emit("touchMove",e),e.defaultPrevented)return;this.addTrackingPoint(n[0]);const{content:o}=this,a=h(s[0],s[1]),r=h(n[0],n[1]);let l=0,d=0;if(n.length>1){const t=o.getBoundingClientRect();l=a.clientX-t.left-.5*t.width,d=a.clientY-t.top-.5*t.height}const u=c(s[0],s[1]),p=c(n[0],n[1]);let f=u?p/u:1,m=r.clientX-a.clientX,g=r.clientY-a.clientY;this.dragOffset.x+=m,this.dragOffset.y+=g,this.dragOffset.time=Date.now()-this.dragStart.time;let b=t(this.targetScale)===t(this.minScale)&&this.option("lockAxis");if(b&&!this.lockedAxis)if("xy"===b||"y"===b||"touchmove"===e.type){if(Math.abs(this.dragOffset.x)<6&&Math.abs(this.dragOffset.y)<6)return void e.preventDefault();const t=Math.abs(180*Math.atan2(this.dragOffset.y,this.dragOffset.x)/Math.PI);this.lockedAxis=t>45&&t<135?"y":"x",this.dragOffset.x=0,this.dragOffset.y=0,m=0,g=0}else this.lockedAxis=b;if(i(e.target,this.content)&&(b="x",this.dragOffset.y=0),b&&"xy"!==b&&this.lockedAxis!==b&&t(this.targetScale)===t(this.minScale))return;e.cancelable&&e.preventDefault(),this.container.classList.add(this.cn("isDragging"));const v=this.checkBounds(m,g);this.option("rubberband")?("x"!==this.isInfinite&&(v.xDiff>0&&m<0||v.xDiff<0&&m>0)&&(m*=Math.max(0,.5-Math.abs(.75/this.contentRect.fitWidth*v.xDiff))),"y"!==this.isInfinite&&(v.yDiff>0&&g<0||v.yDiff<0&&g>0)&&(g*=Math.max(0,.5-Math.abs(.75/this.contentRect.fitHeight*v.yDiff)))):(v.xDiff&&(m=0),v.yDiff&&(g=0));const y=this.targetScale,w=this.minScale,x=this.maxScale;y<.5*w&&(f=Math.max(f,w)),y>1.5*x&&(f=Math.min(f,x)),"y"===this.lockedAxis&&t(y)===t(w)&&(m=0),"x"===this.lockedAxis&&t(y)===t(w)&&(g=0),this.applyChange({originX:l,originY:d,panX:m,panY:g,scale:f,friction:this.option("dragFriction"),ignoreBounds:!0})}onPointerUp(t,e,n){if(n.length)return this.dragOffset.x=0,this.dragOffset.y=0,void(this.trackingPoints=[]);this.container.classList.remove(this.cn("isDragging")),this.isDragging&&(this.addTrackingPoint(e),this.panOnlyZoomed&&this.contentRect.width-this.contentRect.fitWidth<1&&this.contentRect.height-this.contentRect.fitHeight<1&&(this.trackingPoints=[]),i(t.target,this.content)&&"y"===this.lockedAxis&&(this.trackingPoints=[]),this.emit("touchEnd",t),this.isDragging=!1,this.lockedAxis=!1,this.state!==g.Destroy&&(t.defaultPrevented||this.startDecelAnim()))}startDecelAnim(){const e=this.isScaling;this.rAF&&(cancelAnimationFrame(this.rAF),this.rAF=null),this.isBouncingX=!1,this.isBouncingY=!1;for(const t of b)this.velocity[t]=0;this.target.e=this.current.e,this.target.f=this.current.f,E(this.container,"is-scaling"),E(this.container,"is-animating"),this.isTicking=!1;const{trackingPoints:i}=this,n=i[0],s=i[i.length-1];let o=0,a=0,r=0;s&&n&&(o=s.clientX-n.clientX,a=s.clientY-n.clientY,r=s.time-n.time);let l=0,c=0,h=0,d=0,u=this.option("decelFriction");const p=this.targetScale;if(r>0){h=Math.abs(o)>3?o/(r/30):0,d=Math.abs(a)>3?a/(r/30):0;const t=this.option("maxVelocity");t&&(h=Math.max(Math.min(h,t),-1*t),d=Math.max(Math.min(d,t),-1*t))}h&&(l=h/(1/(1-u)-1)),d&&(c=d/(1/(1-u)-1)),("y"===this.option("lockAxis")||"xy"===this.option("lockAxis")&&"y"===this.lockedAxis&&t(p)===this.minScale)&&(l=h=0),("x"===this.option("lockAxis")||"xy"===this.option("lockAxis")&&"x"===this.lockedAxis&&t(p)===this.minScale)&&(c=d=0);const f=this.dragOffset.x,m=this.dragOffset.y,g=this.option("dragMinThreshold")||0;Math.abs(f)<g&&Math.abs(m)<g&&(l=c=0,h=d=0),(p<this.minScale-1e-5||p>this.maxScale+1e-5||e&&!l&&!c)&&(u=.35),this.applyChange({panX:l,panY:c,friction:u}),this.emit("decel",h,d,f,m)}onWheel(t){var e=[-t.deltaX||0,-t.deltaY||0,-t.detail||0].reduce((function(t,e){return Math.abs(e)>Math.abs(t)?e:t}));const i=Math.max(-1,Math.min(1,e));if(this.emit("wheel",t,i),"mousemove"===this.panMode)return;if(t.defaultPrevented)return;const n=this.option("wheel");"pan"===n?(t.preventDefault(),this.panOnlyZoomed&&!this.canZoomOut()||this.applyChange({panX:2*-t.deltaX,panY:2*-t.deltaY,bounce:!1})):"zoom"===n&&!1!==this.option("zoom")&&this.zoomWithWheel(t)}onMouseMove(t){this.panWithMouse(t)}onKeydown(t){"Escape"===t.key&&this.toggleFS()}onResize(){this.updateMetrics(),this.checkBounds().inBounds||this.requestTick()}setTransform(){this.emit("beforeTransform");const{current:e,target:i,content:n,contentRect:s}=this,o=Object.assign({},P);for(const n of b){const s="e"==n||"f"===n?1e3:1e5;o[n]=t(e[n],s),Math.abs(i[n]-e[n])<("e"==n||"f"===n?.51:.001)&&(e[n]=i[n])}let{a:a,b:r,c:l,d:c,e:h,f:d}=o,u=`matrix(${a}, ${r}, ${l}, ${c}, ${h}, ${d})`,p=n.parentElement instanceof HTMLPictureElement?n.parentElement:n;if(this.option("transformParent")&&(p=p.parentElement||p),p.style.transform===u)return;p.style.transform=u;const{contentWidth:f,contentHeight:m}=this.calculateContentDim();s.width=f,s.height=m,this.emit("afterTransform")}updateMetrics(e=!1){if(!this||this.state===g.Destroy)return;if(this.isContentLoading)return;const{container:i,content:n}=this,s=n instanceof HTMLImageElement,o=i.getBoundingClientRect(),a=getComputedStyle(this.container),r=o.width,l=o.height,c=parseFloat(a.paddingTop)+parseFloat(a.paddingBottom),h=r-(parseFloat(a.paddingLeft)+parseFloat(a.paddingRight)),d=l-c;this.containerRect={width:r,height:l,innerWidth:h,innerHeight:d};let u=this.option("width")||"auto",p=this.option("height")||"auto";"auto"===u&&(u=parseFloat(n.dataset.width||"")||(t=>{let e=0;return e=t instanceof HTMLImageElement?t.naturalWidth:t instanceof SVGElement?t.width.baseVal.value:Math.max(t.offsetWidth,t.scrollWidth),e||0})(n)),"auto"===p&&(p=parseFloat(n.dataset.height||"")||(t=>{let e=0;return e=t instanceof HTMLImageElement?t.naturalHeight:t instanceof SVGElement?t.height.baseVal.value:Math.max(t.offsetHeight,t.scrollHeight),e||0})(n));let f=n.parentElement instanceof HTMLPictureElement?n.parentElement:n;this.option("transformParent")&&(f=f.parentElement||f);const m=f.getAttribute("style")||"";f.style.setProperty("transform","none","important"),s&&(f.style.width="",f.style.height=""),f.offsetHeight;const b=n.getBoundingClientRect();let v=b.width,y=b.height,w=0,x=0;s&&(Math.abs(u-v)>1||Math.abs(p-y)>1)&&({width:v,height:y,top:w,left:x}=((t,e,i,n)=>{const s=i/n;return s>t/e?(i=t,n=t/s):(i=e*s,n=e),{width:i,height:n,top:.5*(e-n),left:.5*(t-i)}})(v,y,u,p)),this.contentRect=Object.assign(Object.assign({},this.contentRect),{top:b.top-o.top+w,bottom:o.bottom-b.bottom+w,left:b.left-o.left+x,right:o.right-b.right+x,fitWidth:v,fitHeight:y,width:v,height:y,fullWidth:u,fullHeight:p}),f.style.cssText=m,s&&(f.style.width=`${v}px`,f.style.height=`${y}px`),this.setTransform(),!0!==e&&this.emit("refresh"),this.ignoreBounds||(t(this.targetScale)<t(this.minScale)?this.zoomTo(this.minScale,{friction:0}):this.targetScale>this.maxScale?this.zoomTo(this.maxScale,{friction:0}):this.state===g.Init||this.checkBounds().inBounds||this.requestTick()),this.updateControls()}getBounds(){const e=this.option("bounds");if("auto"!==e)return e;const{contentWidth:i,contentHeight:n}=this.calculateContentDim(this.target);let s=0,o=0,a=0,r=0;const l=this.option("infinite");if(!0===l||this.lockedAxis&&l===this.lockedAxis)s=-1/0,a=1/0,o=-1/0,r=1/0;else{let{containerRect:e,contentRect:l}=this,c=t(this.contentRect.fitWidth*this.targetScale,1e3),h=t(this.contentRect.fitHeight*this.targetScale,1e3),{innerWidth:d,innerHeight:u}=e;if(this.containerRect.width===c&&(d=e.width),this.containerRect.width===h&&(u=e.height),i>d){a=.5*(i-d),s=-1*a;let t=.5*(l.right-l.left);s+=t,a+=t}if(this.contentRect.fitWidth>d&&i<d&&(s-=.5*(this.contentRect.fitWidth-d),a-=.5*(this.contentRect.fitWidth-d)),n>u){r=.5*(n-u),o=-1*r;let t=.5*(l.bottom-l.top);o+=t,r+=t}this.contentRect.fitHeight>u&&n<u&&(s-=.5*(this.contentRect.fitHeight-u),a-=.5*(this.contentRect.fitHeight-u))}return{x:{min:s,max:a},y:{min:o,max:r}}}updateControls(){const e=this,i=e.container,{panMode:n,contentRect:s,fullScale:a,targetScale:r,coverScale:l,maxScale:c,minScale:h}=e;let d={toggleMax:r-h<.5*(c-h)?c:h,toggleCover:r-h<.5*(l-h)?l:h,toggleZoom:r-h<.5*(a-h)?a:h}[e.option("click")||""]||h,u=e.canZoomIn(),p=e.canZoomOut(),f=p&&"drag"===n;t(r)<t(h)&&!this.panOnlyZoomed&&(f=!0),(t(s.width,1)>t(s.fitWidth,1)||t(s.height,1)>t(s.fitHeight,1))&&(f=!0),t(s.width*r,1)<t(s.fitWidth,1)&&(f=!1),"mousemove"===n&&(f=!1);let m=u&&t(d)>t(r),g=!m&&!f&&p&&t(d)<t(r);o(i,this.cn("canZoomIn"),m),o(i,this.cn("canZoomOut"),g),o(i,this.cn("isDraggable"),f);for(const t of i.querySelectorAll('[data-panzoom-action="zoomIn"]'))u?(t.removeAttribute("disabled"),t.removeAttribute("tabindex")):(t.setAttribute("disabled",""),t.setAttribute("tabindex","-1"));for(const t of i.querySelectorAll('[data-panzoom-action="zoomOut"]'))p?(t.removeAttribute("disabled"),t.removeAttribute("tabindex")):(t.setAttribute("disabled",""),t.setAttribute("tabindex","-1"));for(const t of i.querySelectorAll('[data-panzoom-action="toggleZoom"],[data-panzoom-action="iterateZoom"]')){u||p?(t.removeAttribute("disabled"),t.removeAttribute("tabindex")):(t.setAttribute("disabled",""),t.setAttribute("tabindex","-1"));const e=t.querySelector("g");e&&(e.style.display=u?"":"none")}}panTo({x:t=this.target.e,y:e=this.target.f,scale:i=this.targetScale,friction:n=this.option("friction"),angle:s=0,originX:o=0,originY:a=0,flipX:r=!1,flipY:l=!1,ignoreBounds:c=!1}){this.state!==g.Destroy&&this.applyChange({panX:t-this.target.e,panY:e-this.target.f,scale:i/this.targetScale,angle:s,originX:o,originY:a,friction:n,flipX:r,flipY:l,ignoreBounds:c})}applyChange({panX:e=0,panY:i=0,scale:n=1,angle:s=0,originX:o=-this.current.e,originY:a=-this.current.f,friction:r=this.option("friction"),flipX:l=!1,flipY:c=!1,ignoreBounds:h=!1,bounce:d=this.option("bounce")}){if(this.state===g.Destroy)return;this.rAF&&(cancelAnimationFrame(this.rAF),this.rAF=null),this.friction=r||0,this.ignoreBounds=h;const{current:u}=this,p=u.e,f=u.f,m=this.getMatrix(this.target);let v=(new DOMMatrix).translate(p,f).translate(o,a).translate(e,i);if(this.option("zoom")){if(!h){const t=this.targetScale,e=this.minScale,i=this.maxScale;t*n<e&&(n=e/t),t*n>i&&(n=i/t)}v=v.scale(n)}v=v.translate(-o,-a).translate(-p,-f).multiply(m),s&&(v=v.rotate(s)),l&&(v=v.scale(-1,1)),c&&(v=v.scale(1,-1));for(const e of b)"e"!==e&&"f"!==e&&(v[e]>this.minScale+1e-5||v[e]<this.minScale-1e-5)?this.target[e]=v[e]:this.target[e]=t(v[e],1e3);(this.targetScale<this.scale||Math.abs(n-1)>.1||"mousemove"===this.panMode||!1===d)&&!h&&this.clampTargetBounds(),this.isResting||(this.state=g.Panning,this.requestTick())}stop(t=!1){if(this.state===g.Init||this.state===g.Destroy)return;const e=this.isTicking;this.rAF&&(cancelAnimationFrame(this.rAF),this.rAF=null),this.isBouncingX=!1,this.isBouncingY=!1;for(const e of b)this.velocity[e]=0,"current"===t?this.current[e]=this.target[e]:"target"===t&&(this.target[e]=this.current[e]);this.setTransform(),E(this.container,"is-scaling"),E(this.container,"is-animating"),this.isTicking=!1,this.state=g.Ready,e&&(this.emit("endAnimation"),this.updateControls())}requestTick(){this.isTicking||(this.emit("startAnimation"),this.updateControls(),S(this.container,"is-animating"),this.isScaling&&S(this.container,"is-scaling")),this.isTicking=!0,this.rAF||(this.rAF=requestAnimationFrame((()=>this.animate())))}panWithMouse(e,i=this.option("mouseMoveFriction")){if(this.pmme=e,"mousemove"!==this.panMode||!e)return;if(t(this.targetScale)<=t(this.minScale))return;this.emit("mouseMove",e);const{container:n,containerRect:s,contentRect:o}=this,a=s.width,r=s.height,l=n.getBoundingClientRect(),c=(e.clientX||0)-l.left,h=(e.clientY||0)-l.top;let{contentWidth:d,contentHeight:u}=this.calculateContentDim(this.target);const p=this.option("mouseMoveFactor");p>1&&(d!==a&&(d*=p),u!==r&&(u*=p));let f=.5*(d-a)-c/a*100/100*(d-a);f+=.5*(o.right-o.left);let m=.5*(u-r)-h/r*100/100*(u-r);m+=.5*(o.bottom-o.top),this.applyChange({panX:f-this.target.e,panY:m-this.target.f,friction:i})}zoomWithWheel(e){if(this.state===g.Destroy||this.state===g.Init)return;const i=Date.now();if(i-this.pwt<45)return void e.preventDefault();this.pwt=i;var n=[-e.deltaX||0,-e.deltaY||0,-e.detail||0].reduce((function(t,e){return Math.abs(e)>Math.abs(t)?e:t}));const s=Math.max(-1,Math.min(1,n)),{targetScale:o,maxScale:a,minScale:r}=this;let l=o*(100+45*s)/100;t(l)<t(r)&&t(o)<=t(r)?(this.cwd+=Math.abs(s),l=r):t(l)>t(a)&&t(o)>=t(a)?(this.cwd+=Math.abs(s),l=a):(this.cwd=0,l=Math.max(Math.min(l,a),r)),this.cwd>this.option("wheelLimit")||(e.preventDefault(),t(l)!==t(o)&&this.zoomTo(l,{event:e}))}canZoomIn(){return this.option("zoom")&&(t(this.contentRect.width,1)<t(this.contentRect.fitWidth,1)||t(this.targetScale)<t(this.maxScale))}canZoomOut(){return this.option("zoom")&&t(this.targetScale)>t(this.minScale)}zoomIn(t=1.25,e){this.zoomTo(this.targetScale*t,e)}zoomOut(t=.8,e){this.zoomTo(this.targetScale*t,e)}zoomToFit(t){this.zoomTo("fit",t)}zoomToCover(t){this.zoomTo("cover",t)}zoomToFull(t){this.zoomTo("full",t)}zoomToMax(t){this.zoomTo("max",t)}toggleZoom(t){this.zoomTo(this.targetScale-this.minScale<.5*(this.fullScale-this.minScale)?"full":"fit",t)}toggleMax(t){this.zoomTo(this.targetScale-this.minScale<.5*(this.maxScale-this.minScale)?"max":"fit",t)}toggleCover(t){this.zoomTo(this.targetScale-this.minScale<.5*(this.coverScale-this.minScale)?"cover":"fit",t)}iterateZoom(t){this.zoomTo("next",t)}zoomTo(t=1,{friction:e="auto",originX:i=0,originY:n=0,event:s}={}){if(this.isContentLoading||this.state===g.Destroy)return;const{targetScale:o}=this;this.stop();let a=1;if("mousemove"===this.panMode&&(s=this.pmme||s),s){const t=this.content.getBoundingClientRect(),e=s.clientX||0,o=s.clientY||0;i=e-t.left-.5*t.width,n=o-t.top-.5*t.height}const r=this.fullScale,l=this.maxScale;let c=this.coverScale;"number"==typeof t?a=t/o:("next"===t&&(r-c<.2&&(c=r),t=o<r-1e-5?"full":o<l-1e-5?"max":"fit"),a="full"===t?r/o||1:"cover"===t?c/o||1:"max"===t?l/o||1:1/o||1),e="auto"===e?a>1?.15:.25:e,this.applyChange({scale:a,originX:i,originY:n,friction:e}),s&&"mousemove"===this.panMode&&this.panWithMouse(s,e)}rotateCCW(){this.applyChange({angle:-90})}rotateCW(){this.applyChange({angle:90})}flipX(){this.applyChange({flipX:!0})}flipY(){this.applyChange({flipY:!0})}fitX(){this.stop("target");const{containerRect:t,contentRect:e,target:i}=this;this.applyChange({panX:.5*t.width-(e.left+.5*e.fitWidth)-i.e,panY:.5*t.height-(e.top+.5*e.fitHeight)-i.f,scale:t.width/e.fitWidth/this.targetScale,originX:0,originY:0,ignoreBounds:!0})}fitY(){this.stop("target");const{containerRect:t,contentRect:e,target:i}=this;this.applyChange({panX:.5*t.width-(e.left+.5*e.fitWidth)-i.e,panY:.5*t.innerHeight-(e.top+.5*e.fitHeight)-i.f,scale:t.height/e.fitHeight/this.targetScale,originX:0,originY:0,ignoreBounds:!0})}toggleFS(){const{container:t}=this,e=this.cn("inFullscreen"),i=this.cn("htmlHasFullscreen");t.classList.toggle(e);const n=t.classList.contains(e);n?(document.documentElement.classList.add(i),document.addEventListener("keydown",this.onKeydown,!0)):(document.documentElement.classList.remove(i),document.removeEventListener("keydown",this.onKeydown,!0)),this.updateMetrics(),this.emit(n?"enterFS":"exitFS")}getMatrix(t=this.current){const{a:e,b:i,c:n,d:s,e:o,f:a}=t;return new DOMMatrix([e,i,n,s,o,a])}reset(t){if(this.state!==g.Init&&this.state!==g.Destroy){this.stop("current");for(const t of b)this.target[t]=P[t];this.target.a=this.minScale,this.target.d=this.minScale,this.clampTargetBounds(),this.isResting||(this.friction=void 0===t?this.option("friction"):t,this.state=g.Panning,this.requestTick())}}destroy(){this.stop(),this.state=g.Destroy,this.detachEvents(),this.detachObserver();const{container:t,content:e}=this,i=this.option("classes")||{};for(const e of Object.values(i))t.classList.remove(e+"");e&&(e.removeEventListener("load",this.onLoad),e.removeEventListener("error",this.onError)),this.detachPlugins()}}Object.defineProperty(T,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:y}),Object.defineProperty(T,"Plugins",{enumerable:!0,configurable:!0,writable:!0,value:{}});const O=function(t,e){let i=!0;return(...n)=>{i&&(i=!1,t(...n),setTimeout((()=>{i=!0}),e))}},A=(t,e)=>{let i=[];return t.childNodes.forEach((t=>{t.nodeType!==Node.ELEMENT_NODE||e&&!t.matches(e)||i.push(t)})),i},z={viewport:null,track:null,enabled:!0,slides:[],axis:"x",transition:"fade",preload:1,slidesPerPage:"auto",initialPage:0,friction:.12,Panzoom:{decelFriction:.12},center:!0,infinite:!0,fill:!0,dragFree:!1,adaptiveHeight:!1,direction:"ltr",classes:{container:"f-carousel",viewport:"f-carousel__viewport",track:"f-carousel__track",slide:"f-carousel__slide",isLTR:"is-ltr",isRTL:"is-rtl",isHorizontal:"is-horizontal",isVertical:"is-vertical",inTransition:"in-transition",isSelected:"is-selected"},l10n:{NEXT:"Next slide",PREV:"Previous slide",GOTO:"Go to slide #%d"}};var L;!function(t){t[t.Init=0]="Init",t[t.Ready=1]="Ready",t[t.Destroy=2]="Destroy"}(L||(L={}));const R=t=>{if("string"==typeof t&&(t={html:t}),!(t instanceof String||t instanceof HTMLElement)){const e=t.thumb;void 0!==e&&("string"==typeof e&&(t.thumbSrc=e),e instanceof HTMLImageElement&&(t.thumbEl=e,t.thumbElSrc=e.src,t.thumbSrc=e.src),delete t.thumb)}return Object.assign({html:"",el:null,isDom:!1,class:"",index:-1,dim:0,gap:0,pos:0,transition:!1},t)},k=(t={})=>Object.assign({index:-1,slides:[],dim:0,pos:-1},t);class I extends f{constructor(t,e){super(e),Object.defineProperty(this,"instance",{enumerable:!0,configurable:!0,writable:!0,value:t})}attach(){}detach(){}}const D={classes:{list:"f-carousel__dots",isDynamic:"is-dynamic",hasDots:"has-dots",dot:"f-carousel__dot",isBeforePrev:"is-before-prev",isPrev:"is-prev",isCurrent:"is-current",isNext:"is-next",isAfterNext:"is-after-next"},dotTpl:'<button type="button" data-carousel-page="%i" aria-label="{{GOTO}}"><span class="f-carousel__dot" aria-hidden="true"></span></button>',dynamicFrom:11,maxCount:1/0,minCount:2};class F extends I{constructor(){super(...arguments),Object.defineProperty(this,"isDynamic",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"list",{enumerable:!0,configurable:!0,writable:!0,value:null})}onRefresh(){this.refresh()}build(){let t=this.list;return t||(t=document.createElement("ul"),S(t,this.cn("list")),t.setAttribute("role","tablist"),this.instance.container.appendChild(t),S(this.instance.container,this.cn("hasDots")),this.list=t),t}refresh(){var t;const e=this.instance.pages.length,i=Math.min(2,this.option("minCount")),n=Math.max(2e3,this.option("maxCount")),s=this.option("dynamicFrom");if(e<i||e>n)return void this.cleanup();const a="number"==typeof s&&e>5&&e>=s,r=!this.list||this.isDynamic!==a||this.list.children.length!==e;r&&this.cleanup();const l=this.build();if(o(l,this.cn("isDynamic"),!!a),r)for(let t=0;t<e;t++)l.append(this.createItem(t));let c,h=0;for(const e of[...l.children]){const i=h===this.instance.page;i&&(c=e),o(e,this.cn("isCurrent"),i),null===(t=e.children[0])||void 0===t||t.setAttribute("aria-selected",i?"true":"false");for(const t of["isBeforePrev","isPrev","isNext","isAfterNext"])E(e,this.cn(t));h++}if(c=c||l.firstChild,a&&c){const t=c.previousElementSibling,e=t&&t.previousElementSibling;S(t,this.cn("isPrev")),S(e,this.cn("isBeforePrev"));const i=c.nextElementSibling,n=i&&i.nextElementSibling;S(i,this.cn("isNext")),S(n,this.cn("isAfterNext"))}this.isDynamic=a}createItem(t=0){var e;const i=document.createElement("li");i.setAttribute("role","presentation");const s=n(this.instance.localize(this.option("dotTpl"),[["%d",t+1]]).replace(/\%i/g,t+""));return i.appendChild(s),null===(e=i.children[0])||void 0===e||e.setAttribute("role","tab"),i}cleanup(){this.list&&(this.list.remove(),this.list=null),this.isDynamic=!1,E(this.instance.container,this.cn("hasDots"))}attach(){this.instance.on(["refresh","change"],this.onRefresh)}detach(){this.instance.off(["refresh","change"],this.onRefresh),this.cleanup()}}Object.defineProperty(F,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:D});class j extends I{constructor(){super(...arguments),Object.defineProperty(this,"container",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"prev",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"next",{enumerable:!0,configurable:!0,writable:!0,value:null})}onRefresh(){const t=this.instance,e=t.pages.length,i=t.page;if(e<2)return void this.cleanup();this.build();let n=this.prev,s=this.next;n&&s&&(n.removeAttribute("disabled"),s.removeAttribute("disabled"),t.isInfinite||(i<=0&&n.setAttribute("disabled",""),i>=e-1&&s.setAttribute("disabled","")))}createButton(t){const e=this.instance,i=document.createElement("button");i.setAttribute("tabindex","0"),i.setAttribute("title",e.localize(`{{${t.toUpperCase()}}}`)),S(i,this.cn("button")+" "+this.cn("next"===t?"isNext":"isPrev"));const n=e.isRTL?"next"===t?"prev":"next":t;var s;return i.innerHTML=e.localize(this.option(`${n}Tpl`)),i.dataset[`carousel${s=t,s?s.match("^[a-z]")?s.charAt(0).toUpperCase()+s.substring(1):s:""}`]="true",i}build(){let t=this.container;t||(this.container=t=document.createElement("div"),S(t,this.cn("container")),this.instance.container.appendChild(t)),this.next||(this.next=t.appendChild(this.createButton("next"))),this.prev||(this.prev=t.appendChild(this.createButton("prev")))}cleanup(){this.prev&&this.prev.remove(),this.next&&this.next.remove(),this.container&&this.container.remove(),this.prev=null,this.next=null,this.container=null}attach(){this.instance.on(["refresh","change"],this.onRefresh)}detach(){this.instance.off(["refresh","change"],this.onRefresh),this.cleanup()}}Object.defineProperty(j,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:{classes:{container:"f-carousel__nav",button:"f-button",isNext:"is-next",isPrev:"is-prev"},nextTpl:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>',prevTpl:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>'}});class H extends I{constructor(){super(...arguments),Object.defineProperty(this,"selectedIndex",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"target",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"nav",{enumerable:!0,configurable:!0,writable:!0,value:null})}addAsTargetFor(t){this.target=this.instance,this.nav=t,this.attachEvents()}addAsNavFor(t){this.nav=this.instance,this.target=t,this.attachEvents()}attachEvents(){this.nav&&this.target&&(this.nav.options.initialSlide=this.target.options.initialPage,this.nav.on("ready",this.onNavReady),this.nav.state===L.Ready&&this.onNavReady(this.nav),this.target.on("ready",this.onTargetReady),this.target.state===L.Ready&&this.onTargetReady(this.target))}onNavReady(t){t.on("createSlide",this.onNavCreateSlide),t.on("Panzoom.click",this.onNavClick),t.on("Panzoom.touchEnd",this.onNavTouch),this.onTargetChange()}onTargetReady(t){t.on("change",this.onTargetChange),t.on("Panzoom.refresh",this.onTargetChange),this.onTargetChange()}onNavClick(t,e,i){i.pointerType||this.onNavTouch(t,t.panzoom,i)}onNavTouch(t,e,i){var n,s;if(Math.abs(e.dragOffset.x)>3||Math.abs(e.dragOffset.y)>3)return;const o=i.target,{nav:a,target:r}=this;if(!a||!r||!o)return;const l=o.closest("[data-index]");if(i.stopPropagation(),i.preventDefault(),!l)return;const c=parseInt(l.dataset.index||"",10)||0,h=r.getPageForSlide(c),d=a.getPageForSlide(c);a.slideTo(d),r.slideTo(h,{friction:null===(s=null===(n=this.nav)||void 0===n?void 0:n.plugins)||void 0===s?void 0:s.Sync.option("friction")}),this.markSelectedSlide(c)}onNavCreateSlide(t,e){e.index===this.selectedIndex&&this.markSelectedSlide(e.index)}onTargetChange(){const{target:t,nav:e}=this;if(!t||!e)return;if(e.state!==L.Ready||t.state!==L.Ready)return;const i=t.pages[t.page].slides[0].index,n=e.getPageForSlide(i);this.markSelectedSlide(i),e.slideTo(n)}markSelectedSlide(t){const{nav:e}=this;e&&e.state===L.Ready&&(this.selectedIndex=t,[...e.slides].map((e=>{e.el&&e.el.classList[e.index===t?"add":"remove"]("is-nav-selected")})))}attach(){let t=this.options.target,e=this.options.nav;t?this.addAsNavFor(t):e&&this.addAsTargetFor(e)}detach(){this.nav&&(this.nav.off("ready",this.onNavReady),this.nav.off("createSlide",this.onNavCreateSlide),this.nav.off("Panzoom.click",this.onNavClick),this.nav.off("Panzoom.touchEnd",this.onNavTouch)),this.nav=null,this.target&&(this.target.off("ready",this.onTargetReady),this.target.off("refresh",this.onTargetChange),this.target.off("change",this.onTargetChange)),this.target=null}}Object.defineProperty(H,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:{friction:.35}});const B={Navigation:j,Dots:F,Sync:H};class _ extends m{get axis(){return this.isHorizontal?"e":"f"}get isEnabled(){return this.state===L.Ready}get isInfinite(){let t=!1;const e=this.contentDim,i=this.viewportDim;return this.pages.length>=2&&e>1.5*i&&(t=this.option("infinite")),t}get isRTL(){return"rtl"===this.option("direction")}get isHorizontal(){return"x"===this.option("axis")}constructor(t,e={},i={}){if(super(),Object.defineProperty(this,"userOptions",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"userPlugins",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"bp",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"lp",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"state",{enumerable:!0,configurable:!0,writable:!0,value:L.Init}),Object.defineProperty(this,"page",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"prevPage",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"container",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"viewport",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"track",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"slides",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"pages",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"panzoom",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"inTransition",{enumerable:!0,configurable:!0,writable:!0,value:new Set}),Object.defineProperty(this,"contentDim",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"viewportDim",{enumerable:!0,configurable:!0,writable:!0,value:0}),"string"==typeof t&&(t=document.querySelector(t)),!t||!x(t))throw new Error("No Element found");this.container=t,this.slideNext=O(this.slideNext.bind(this),150),this.slidePrev=O(this.slidePrev.bind(this),150),this.userOptions=e,this.userPlugins=i,queueMicrotask((()=>{this.processOptions()}))}processOptions(){const t=u({},_.defaults,this.userOptions);let e="";const i=t.breakpoints;if(i&&d(i))for(const[n,s]of Object.entries(i))window.matchMedia(n).matches&&d(s)&&(e+=n,u(t,s));e===this.bp&&this.state!==L.Init||(this.bp=e,this.state===L.Ready&&(t.initialSlide=this.pages[this.page].slides[0].index),this.state!==L.Init&&this.destroy(),super.setOptions(t),!1===this.option("enabled")?this.attachEvents():setTimeout((()=>{this.init()}),0))}init(){this.state=L.Init,this.emit("init"),this.attachPlugins(Object.assign(Object.assign({},_.Plugins),this.userPlugins)),this.initLayout(),this.initSlides(),this.updateMetrics(),this.setInitialPosition(),this.initPanzoom(),this.attachEvents(),this.state=L.Ready,this.emit("ready")}initLayout(){const{container:t}=this,e=this.option("classes");S(t,this.cn("container")),o(t,e.isLTR,!this.isRTL),o(t,e.isRTL,this.isRTL),o(t,e.isVertical,!this.isHorizontal),o(t,e.isHorizontal,this.isHorizontal);let i=this.option("viewport")||t.querySelector(`.${e.viewport}`);i||(i=document.createElement("div"),S(i,e.viewport),i.append(...A(t,`.${e.slide}`)),t.prepend(i));let n=this.option("track")||t.querySelector(`.${e.track}`);n||(n=document.createElement("div"),S(n,e.track),n.append(...Array.from(i.childNodes))),n.setAttribute("aria-live","polite"),i.contains(n)||i.prepend(n),this.viewport=i,this.track=n,this.emit("initLayout")}initSlides(){const{track:t}=this;if(t){this.slides=[],[...A(t,`.${this.cn("slide")}`)].forEach((t=>{if(x(t)){const e=R({el:t,isDom:!0,index:this.slides.length});this.slides.push(e),this.emit("initSlide",e,this.slides.length)}}));for(let t of this.option("slides",[])){const e=R(t);e.index=this.slides.length,this.slides.push(e),this.emit("initSlide",e,this.slides.length)}this.emit("initSlides")}}setInitialPage(){let t=0;const e=this.option("initialSlide");t="number"==typeof e?this.getPageForSlide(e):parseInt(this.option("initialPage",0)+"",10)||0,this.page=t}setInitialPosition(){if(!this.track||!this.pages.length)return;const t=this.isHorizontal;let e=this.page;this.pages[e]||(this.page=e=0);const i=this.pages[e].pos*(this.isRTL&&t?1:-1),n=t?`${i}px`:"0",s=t?"0":`${i}px`;this.track.style.transform=`translate3d(${n}, ${s}, 0) scale(1)`,this.option("adaptiveHeight")&&this.setViewportHeight()}initPanzoom(){this.panzoom&&(this.panzoom.destroy(),this.panzoom=null);const t=this.option("Panzoom")||{};this.panzoom=new T(this.viewport,u({},{content:this.track,zoom:!1,panOnlyZoomed:!1,lockAxis:this.isHorizontal?"x":"y",infinite:this.isInfinite,click:!1,dblClick:!1,touch:t=>!(this.pages.length<2&&!t.options.infinite),bounds:()=>this.getBounds(),maxVelocity:t=>Math.abs(t.target[this.axis]-t.current[this.axis])<2*this.viewportDim?100:0},t)),this.panzoom.on("*",((t,e,...i)=>{this.emit(`Panzoom.${e}`,t,...i)})),this.panzoom.on("decel",this.onDecel),this.panzoom.on("refresh",this.onRefresh),this.panzoom.on("beforeTransform",this.onBeforeTransform),this.panzoom.on("endAnimation",this.onEndAnimation)}attachEvents(){const t=this.container;t&&(t.addEventListener("click",this.onClick,{passive:!1,capture:!1}),t.addEventListener("slideTo",this.onSlideTo)),window.addEventListener("resize",this.onResize)}createPages(){let t=[];const{contentDim:e,viewportDim:i}=this,n=this.option("slidesPerPage");if("number"==typeof n&&e>i){for(let e=0;e<this.slides.length;e+=n)t.push(k({index:e,slides:this.slides.slice(e,e+n)}));return t}let s=0,o=0;for(const e of this.slides)(!t.length||o+e.dim>i)&&(t.push(k()),s=t.length-1,o=0),o+=e.dim+e.gap,t[s].slides.push(e);return t}processPages(){const e=this.pages,{contentDim:i,viewportDim:n}=this,s=this.option("center"),o=this.option("fill"),a=o&&s&&i>n&&!this.isInfinite;if(e.forEach(((t,e)=>{t.index=e,t.pos=t.slides[0].pos,t.dim=0;for(const[e,i]of t.slides.entries())t.dim+=i.dim,e<t.slides.length-1&&(t.dim+=i.gap);a&&t.pos+.5*t.dim<.5*n?t.pos=0:a&&t.pos+.5*t.dim>=i-.5*n?t.pos=i-n:s&&(t.pos+=-.5*(n-t.dim))})),e.forEach(((e,s)=>{o&&!this.isInfinite&&i>n&&(e.pos=Math.max(e.pos,0),e.pos=Math.min(e.pos,i-n)),e.pos=t(e.pos,1e3),e.dim=t(e.dim,1e3),e.pos<.1&&e.pos>-.1&&(e.pos=0)})),this.isInfinite)return e;const r=[];let l;return e.forEach((t=>{const e=Object.assign({},t);l&&e.pos===l.pos?(l.dim+=e.dim,l.slides=[...l.slides,...e.slides]):(e.index=r.length,l=e,r.push(e))})),r}getPageFromIndex(t=0){const e=this.pages.length;let i;return t=parseInt((t||0).toString())||0,i=this.isInfinite?(t%e+e)%e:Math.max(Math.min(t,e-1),0),i}getSlideMetrics(e){const i=this.isHorizontal?"width":"height";let n=0,s=0,o=e.el;o?n=parseFloat(o.dataset[i]||"")||0:(o=document.createElement("div"),o.style.visibility="hidden",S(o,this.cn("slide")+" "+e.class),(this.track||document.body).prepend(o)),n?(o.style[i]=`${n}px`,o.style["width"===i?"height":"width"]=""):n=o.getBoundingClientRect()[i];const a=getComputedStyle(o);return"content-box"===a.boxSizing&&(this.isHorizontal?(n+=parseFloat(a.paddingLeft)||0,n+=parseFloat(a.paddingRight)||0):(n+=parseFloat(a.paddingTop)||0,n+=parseFloat(a.paddingBottom)||0)),s=parseFloat(a[this.isHorizontal?"marginRight":"marginBottom"])||0,this.isHorizontal,e.el||o.remove(),{dim:t(n,1e3),gap:t(s,1e3)}}getBounds(){let t={min:0,max:0};if(this.isInfinite)t={min:-1/0,max:1/0};else if(this.pages.length){const e=this.pages[0].pos,i=this.pages[this.pages.length-1].pos;t=this.isRTL&&this.isHorizontal?{min:e,max:i}:{min:-1*i,max:-1*e}}return{x:this.isHorizontal?t:{min:0,max:0},y:this.isHorizontal?{min:0,max:0}:t}}repositionSlides(){let e,{viewport:i,viewportDim:n,contentDim:s,page:o,pages:a}=this,r=0,l=0,c=0,h=0;this.panzoom?h=-1*this.panzoom.current[this.axis]:a[o]&&(h=a[o].pos||0),e=this.isHorizontal?this.isRTL?"right":"left":"top",this.isRTL&&this.isHorizontal&&(h*=-1);for(const i of this.slides)i.el?("top"===e?(i.el.style.right="",i.el.style.left=""):i.el.style.top="",i.index!==r?i.el.style[e]=0===l?"":`${t(l,1e3)}px`:i.el.style[e]="",c+=i.dim+i.gap,r++):l+=i.dim+i.gap;if(this.isInfinite&&c&&i){const o=this.isHorizontal;let a=getComputedStyle(i),r="padding",d=o?"Right":"Bottom",u=parseFloat(a[r+(o?"Left":"Top")]);h-=u,n+=u,n+=parseFloat(a[r+d]);for(const i of this.slides)i.el&&(t(i.pos)<t(n)&&t(i.pos+i.dim+i.gap)<t(h)&&t(h)>t(s-n)&&(i.el.style[e]=`${t(l+c,1e3)}px`),t(i.pos+i.gap)>=t(s-n)&&t(i.pos)>t(h+n)&&t(h)<t(n)&&(i.el.style[e]=`-${t(c,1e3)}px`))}let d,u,p=[...this.inTransition];if(p.length>1&&(d=this.pages[p[0]],u=this.pages[p[1]]),d&&u){let i=0;for(const n of this.slides)n.el?this.inTransition.has(n.index)&&d.slides.indexOf(n)<0&&(n.el.style[e]=`${t(i+(d.pos-u.pos),1e3)}px`):i+=n.dim+n.gap}}createSlideEl(t){if(!this.track||!t)return;if(t.el)return;const e=document.createElement("div");S(e,this.cn("slide")),S(e,t.class),S(e,t.customClass),t.html&&(e.innerHTML=t.html);const i=[];this.slides.forEach(((t,e)=>{t.el&&i.push(e)}));const n=t.index;let s=null;if(i.length){let t=i.reduce(((t,e)=>Math.abs(e-n)<Math.abs(t-n)?e:t));s=this.slides[t]}const o=s&&s.el?s.index<t.index?s.el.nextSibling:s.el:null;this.track.insertBefore(e,this.track.contains(o)?o:null),t.el=e,this.emit("createSlide",t)}removeSlideEl(t,e=!1){const i=t.el;if(!i)return;if(E(i,this.cn("isSelected")),t.isDom&&!e)return i.removeAttribute("aria-hidden"),i.removeAttribute("data-index"),E(i,this.cn("isSelected")),void(i.style.left="");this.emit("removeSlide",t);const n=new CustomEvent("animationend");i.dispatchEvent(n),t.el&&t.el.remove(),t.el=null}transitionTo(e=0,i=this.option("transition")){if(!i)return!1;const{pages:n,panzoom:s}=this;e=parseInt((e||0).toString())||0;const o=this.getPageFromIndex(e);if(!s||!n[o]||n.length<2||n[this.page].slides[0].dim<this.viewportDim)return!1;const a=e>this.page?1:-1,r=this.pages[o].pos*(this.isRTL?1:-1);if(this.page===o&&t(r,1e3)===t(s.target[this.axis],1e3))return!1;this.clearTransitions();const l=s.isResting;S(this.container,this.cn("inTransition"));const c=this.pages[this.page].slides[0],h=this.pages[o].slides[0];this.inTransition.add(h.index),this.createSlideEl(h);let d=c.el,u=h.el;l||"slide"===i||(i="fadeFast",d=null);const p=this.isRTL?"next":"prev",f=this.isRTL?"prev":"next";return d&&(this.inTransition.add(c.index),c.transition=i,d.addEventListener("animationend",this.onAnimationEnd),d.classList.add(`f-${i}Out`,`to-${a>0?f:p}`)),u&&(h.transition=i,u.addEventListener("animationend",this.onAnimationEnd),u.classList.add(`f-${i}In`,`from-${a>0?p:f}`)),s.panTo({x:this.isHorizontal?r:0,y:this.isHorizontal?0:r,friction:0}),this.onChange(o),!0}manageSlideVisiblity(){const t=new Set,e=new Set,i=this.getVisibleSlides(parseFloat(this.option("preload",0)+"")||0);for(const n of this.slides)i.has(n)?t.add(n):e.add(n);for(const e of this.inTransition)t.add(this.slides[e]);for(const e of t)this.createSlideEl(e),this.lazyLoadSlide(e);for(const i of e)t.has(i)||this.removeSlideEl(i);this.markSelectedSlides(),this.repositionSlides()}markSelectedSlides(){if(!this.pages[this.page]||!this.pages[this.page].slides)return;const t="aria-hidden";let e=this.cn("isSelected");if(e)for(const i of this.slides)i.el&&(i.el.dataset.index=`${i.index}`,this.pages[this.page].slides.includes(i)?(i.el.classList.contains(e)||(S(i.el,e),this.emit("selectSlide",i)),i.el.removeAttribute(t)):(i.el.classList.contains(e)&&(E(i.el,e),this.emit("unselectSlide",i)),i.el.setAttribute(t,"true")))}flipInfiniteTrack(){const t=this.panzoom;if(!t||!this.isInfinite)return;const e="x"===this.option("axis")?"e":"f",{viewportDim:i,contentDim:n}=this;let s=t.current[e],o=t.target[e]-s,a=0,r=.5*i,l=n;this.isRTL&&this.isHorizontal?(s<-r&&(a=-1,s+=l),s>l-r&&(a=1,s-=l)):(s>r&&(a=1,s-=l),s<-l+r&&(a=-1,s+=l)),a&&(t.current[e]=s,t.target[e]=s+o)}lazyLoadSlide(t){const e=this,i=t&&t.el;if(!i)return;const s=new Set,o="f-fadeIn";i.querySelectorAll("[data-lazy-srcset]").forEach((t=>{t instanceof HTMLImageElement&&s.add(t)}));let a=Array.from(i.querySelectorAll("[data-lazy-src]"));i.dataset.lazySrc&&a.push(i),a.map((t=>{t instanceof HTMLImageElement?s.add(t):x(t)&&(t.style.backgroundImage=`url('${t.dataset.lazySrc||""}')`,delete t.dataset.lazySrc)}));const r=(t,i,n)=>{n&&(n.remove(),n=null),i.complete&&(i.classList.add(o),setTimeout((()=>{i.classList.remove(o)}),350),i.style.display=""),this.option("adaptiveHeight")&&t.el&&this.pages[this.page].slides.indexOf(t)>-1&&(e.updateMetrics(),e.setViewportHeight()),this.emit("load",t)};for(const e of s){let i=null;e.src=e.dataset.lazySrcset||e.dataset.lazySrc||"",delete e.dataset.lazySrc,delete e.dataset.lazySrcset,e.style.display="none",e.addEventListener("error",(()=>{r(t,e,i)})),e.addEventListener("load",(()=>{r(t,e,i)})),setTimeout((()=>{e.parentNode&&t.el&&(e.complete?r(t,e,i):(i=n(w),e.parentNode.insertBefore(i,e)))}),300)}}onAnimationEnd(t){var e;const i=t.target,n=i?parseInt(i.dataset.index||"",10)||0:-1,s=this.slides[n],o=t.animationName;if(!i||!s||!o)return;const a=!!this.inTransition.has(n)&&s.transition;a&&o.substring(0,a.length+2)===`f-${a}`&&this.inTransition.delete(n),this.inTransition.size||this.clearTransitions(),n===this.page&&(null===(e=this.panzoom)||void 0===e?void 0:e.isResting)&&this.emit("settle")}onDecel(t,e=0,i=0){const{isRTL:n,isHorizontal:s,axis:o,pages:a}=this,r=a.length,l=Math.abs(Math.atan2(i,e)/(Math.PI/180));let c=0;if(c=l>45&&l<135?s?0:i:s?e:0,!r)return;const h=this.option("dragFree");let d=this.page,u=n&&s?1:-1;const p=t.target[o]*u,f=t.current[o]*u;let{pageIndex:m}=this.getPageFromPosition(p),{pageIndex:g}=this.getPageFromPosition(f);h?this.onChange(m):(d=g,Math.abs(c)>5&&(d=n&&s?c<0?d-1:d+1:c<0?d+1:d-1),this.slideTo(d,{transition:!1,friction:t.option("decelFriction")}))}onClick(t){const e=t.target,i=e&&x(e)?e.dataset:null;let n,s;i&&(void 0!==i.carouselPage?(s="slideTo",n=i.carouselPage):void 0!==i.carouselNext?s="slideNext":void 0!==i.carouselPrev&&(s="slidePrev")),s?(t.preventDefault(),t.stopPropagation(),e&&!e.hasAttribute("disabled")&&this[s](n)):this.emit("click",t)}onSlideTo(t){const e=t.detail||0;this.slideTo(this.getPageForSlide(e),{friction:0})}onChange(t,e=0){const i=this.page;this.prevPage=i,this.page=t,this.option("adaptiveHeight")&&this.setViewportHeight(),t!==i&&(this.markSelectedSlides(),this.emit("change",t,i,e))}onRefresh(){let t=this.contentDim,e=this.viewportDim;this.updateMetrics(),this.contentDim===t&&this.viewportDim===e||this.slideTo(this.page,{friction:0,transition:!1})}onResize(){this.option("breakpoints")&&this.processOptions()}onBeforeTransform(t){this.lp!==t.current[this.axis]&&(this.flipInfiniteTrack(),this.manageSlideVisiblity()),this.lp=t.current.e}onEndAnimation(){this.inTransition.size||this.emit("settle")}reInit(t=null,e=null){this.destroy(),this.state=L.Init,this.userOptions=t||this.userOptions,this.userPlugins=e||this.userPlugins,this.processOptions()}slideTo(t=0,{friction:e=this.option("friction"),transition:i=this.option("transition")}={}){if(this.state===L.Destroy)return;const{axis:n,isHorizontal:s,isRTL:o,pages:a,panzoom:r}=this,l=a.length,c=o&&s?1:-1;if(!r||!l)return;if(this.transitionTo(t,i))return;const h=this.getPageFromIndex(t);let d=a[h].pos;if(this.isInfinite){const e=this.contentDim,i=r.target[n]*c;if(2===l)d+=e*Math.floor(parseFloat(t+"")/2);else{const t=i;d=[d,d-e,d+e].reduce((function(e,i){return Math.abs(i-t)<Math.abs(e-t)?i:e}))}}d*=c,Math.abs(r.target[n]-d)<.1||(r.panTo({x:s?d:0,y:s?0:d,friction:e}),this.onChange(h))}slideToClosest(t){if(this.panzoom){const{pageIndex:e}=this.getPageFromPosition(this.panzoom.current[this.isHorizontal?"e":"f"]);this.slideTo(e,t)}}slideNext(){this.slideTo(this.page+1)}slidePrev(){this.slideTo(this.page-1)}clearTransitions(){this.inTransition.clear(),E(this.container,this.cn("inTransition"));const t=["to-prev","to-next","from-prev","from-next"];for(const e of this.slides){const i=e.el;if(i){i.removeEventListener("animationend",this.onAnimationEnd),i.classList.remove(...t);const n=e.transition;n&&i.classList.remove(`f-${n}Out`,`f-${n}In`)}}this.manageSlideVisiblity()}prependSlide(t){var e,i;let n=Array.isArray(t)?t:[t];for(const t of n.reverse())this.slides.unshift(R(t));for(let t=0;t<this.slides.length;t++)this.slides[t].index=t;const s=(null===(e=this.pages[this.page])||void 0===e?void 0:e.pos)||0;this.page+=n.length,this.updateMetrics();const o=(null===(i=this.pages[this.page])||void 0===i?void 0:i.pos)||0;if(this.panzoom){const t=this.isRTL?s-o:o-s;this.panzoom.target.e-=t,this.panzoom.current.e-=t,this.panzoom.requestTick()}}appendSlide(t){let e=Array.isArray(t)?t:[t];for(const t of e){const e=R(t);e.index=this.slides.length,this.slides.push(e),this.emit("initSlide",t,this.slides.length)}this.updateMetrics()}removeSlide(t){const e=this.slides.length;t=(t%e+e)%e,this.removeSlideEl(this.slides[t],!0),this.slides.splice(t,1);for(let t=0;t<this.slides.length;t++)this.slides[t].index=t;this.updateMetrics(),this.slideTo(this.page,{friction:0,transition:!1})}updateMetrics(){const{panzoom:e,viewport:i,track:n,isHorizontal:s}=this;if(!n)return;const o=s?"width":"height";if(i){let e=t(i.getBoundingClientRect()[o],1e3),n=getComputedStyle(i),a="padding",r=s?"Right":"Bottom";e-=parseFloat(n[a+(s?"Left":"Top")])+parseFloat(n[a+r]),this.viewportDim=e}let a,r=this.pages.length,l=0;for(const[e,i]of this.slides.entries()){let n=0,s=0;!i.el&&a?(n=a.dim,s=a.gap):(({dim:n,gap:s}=this.getSlideMetrics(i)),a=i),n=t(n,1e3),s=t(s,1e3),i.dim=n,i.gap=s,i.pos=l,l+=n,(this.isInfinite||e<this.slides.length-1)&&(l+=s)}const c=this.contentDim;l=t(l,1e3),this.contentDim=l,e&&(e.contentRect[o]=l,e.contentRect["e"===this.axis?"fullWidth":"fullHeight"]=l),this.pages=this.createPages(),this.pages=this.processPages(),this.state===L.Init&&this.setInitialPage(),this.page=Math.max(0,Math.min(this.page,this.pages.length-1)),e&&r===this.pages.length&&Math.abs(l-c)>.5&&(e.target[this.axis]=-1*this.pages[this.page].pos,e.current[this.axis]=-1*this.pages[this.page].pos,e.stop()),this.manageSlideVisiblity(),this.emit("refresh")}getProgress(e,i=!1){void 0===e&&(e=this.page);const n=this,s=n.panzoom,o=n.pages[e]||0;if(!o||!s)return 0;let a=-1*s.current.e,r=n.contentDim;var l=[t((a-o.pos)/(1*o.dim),1e3),t((a+r-o.pos)/(1*o.dim),1e3),t((a-r-o.pos)/(1*o.dim),1e3)].reduce((function(t,e){return Math.abs(e)<Math.abs(t)?e:t}));return i?l:Math.max(-1,Math.min(1,l))}setViewportHeight(){const{page:t,pages:e,viewport:i,isHorizontal:n}=this;if(!i||!e[t])return;let s=0;n&&this.track&&(this.track.style.height="auto",e[t].slides.forEach((t=>{t.el&&(s=Math.max(s,t.el.offsetHeight))}))),i.style.height=s?`${s}px`:""}getPageForSlide(t){for(const e of this.pages)for(const i of e.slides)if(i.index===t)return e.index;return-1}getVisibleSlides(t=0){var e;const i=new Set;let{contentDim:n,viewportDim:s,pages:o,page:a}=this;n=n+(null===(e=this.slides[this.slides.length-1])||void 0===e?void 0:e.gap)||0;let r=0;r=this.panzoom?-1*this.panzoom.current[this.axis]:o[a]&&o[a].pos||0,this.isInfinite&&(r-=Math.floor(r/n)*n),this.isRTL&&this.isHorizontal&&(r*=-1);const l=r-s*t,c=r+s*(t+1),h=this.isInfinite?[-1,0,1]:[0];for(const t of this.slides)for(const e of h){const s=t.pos+e*n,o=t.pos+t.dim+t.gap+e*n;s<c&&o>l&&i.add(t)}return i}getPageFromPosition(t){const{viewportDim:e,contentDim:i}=this,n=this.pages.length,s=this.slides.length,o=this.slides[s-1];let a=0,r=0,l=0;const c=this.option("center");c&&(t+=.5*e),this.isInfinite||(t=Math.max(this.slides[0].pos,Math.min(t,o.pos)));const h=i+o.gap;l=Math.floor(t/h)||0,t-=l*h;let d=o,u=this.slides.find((e=>{const i=t+(d&&!c?.5*d.dim:0);return d=e,e.pos<=i&&e.pos+e.dim+e.gap>i}));return u||(u=o),r=this.getPageForSlide(u.index),a=r+l*n,{page:a,pageIndex:r}}destroy(){if([L.Destroy].includes(this.state))return;this.state=L.Destroy;const{container:t,viewport:e,track:i,slides:n,panzoom:s}=this,o=this.option("classes");t.removeEventListener("click",this.onClick,{passive:!1,capture:!1}),t.removeEventListener("slideTo",this.onSlideTo),window.removeEventListener("resize",this.onResize),s&&(s.destroy(),this.panzoom=null),n&&n.forEach((t=>{this.removeSlideEl(t)})),this.detachPlugins(),e&&e.offsetParent&&i&&i.offsetParent&&e.replaceWith(...i.childNodes);for(const[e,i]of Object.entries(o))"container"!==e&&i&&t.classList.remove(i);this.track=null,this.viewport=null,this.page=0,this.slides=[];const a=this.events.get("ready");this.events=new Map,a&&this.events.set("ready",a)}}Object.defineProperty(_,"Panzoom",{enumerable:!0,configurable:!0,writable:!0,value:T}),Object.defineProperty(_,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:z}),Object.defineProperty(_,"Plugins",{enumerable:!0,configurable:!0,writable:!0,value:B});const N=function(t){const e=window.pageYOffset,i=window.pageYOffset+window.innerHeight;if(!x(t))return 0;const n=t.getBoundingClientRect(),s=n.y+window.pageYOffset,o=n.y+n.height+window.pageYOffset;if(e>o||i<s)return 0;if(e<s&&i>o)return 100;if(s<e&&o>i)return 100;let a=n.height;s<e&&(a-=window.pageYOffset-s),o>i&&(a-=o-i);const r=a/window.innerHeight*100;return Math.round(r)},W=!("undefined"==typeof window||!window.document||!window.document.createElement);let $;const X=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden]):not(.fancybox-focus-guard)","iframe","object","embed","video","audio","[contenteditable]",'[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])'].join(","),Y=t=>{if(t&&W){void 0===$&&document.createElement("div").focus({get preventScroll(){return $=!0,!1}});try{if($)t.focus({preventScroll:!0});else{const e=window.pageXOffset||document.body.scrollTop,i=window.pageYOffset||document.body.scrollLeft;t.focus(),document.body.scrollTo({top:e,left:i,behavior:"auto"})}}catch(t){}}},q={dragToClose:!0,hideScrollbar:!0,Carousel:{classes:{container:"fancybox__carousel",viewport:"fancybox__viewport",track:"fancybox__track",slide:"fancybox__slide"}},contentClick:"toggleZoom",contentDblClick:!1,backdropClick:"close",animated:!0,idle:3500,showClass:"f-zoomInUp",hideClass:"f-fadeOut",commonCaption:!1,parentEl:null,startIndex:0,l10n:Object.assign(Object.assign({},v),{CLOSE:"Close",NEXT:"Next",PREV:"Previous",MODAL:"You can close this modal content with the ESC key",ERROR:"Something Went Wrong, Please Try Again Later",IMAGE_ERROR:"Image Not Found",ELEMENT_NOT_FOUND:"HTML Element Not Found",AJAX_NOT_FOUND:"Error Loading AJAX : Not Found",AJAX_FORBIDDEN:"Error Loading AJAX : Forbidden",IFRAME_ERROR:"Error Loading Page",TOGGLE_ZOOM:"Toggle zoom level",TOGGLE_THUMBS:"Toggle thumbnails",TOGGLE_SLIDESHOW:"Toggle slideshow",TOGGLE_FULLSCREEN:"Toggle full-screen mode",DOWNLOAD:"Download"}),tpl:{closeButton:'<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg></button>',main:'<div class="fancybox__container" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">\n    <div class="fancybox__backdrop"></div>\n    <div class="fancybox__carousel"></div>\n    <div class="fancybox__footer"></div>\n  </div>'},groupAll:!1,groupAttr:"data-fancybox",defaultType:"image",defaultDisplay:"block",autoFocus:!0,trapFocus:!0,placeFocusBack:!0,closeButton:"auto",keyboard:{Escape:"close",Delete:"close",Backspace:"close",PageUp:"next",PageDown:"prev",ArrowUp:"prev",ArrowDown:"next",ArrowRight:"next",ArrowLeft:"prev"},Fullscreen:{autoStart:!1},compact:()=>window.matchMedia("(max-width: 578px), (max-height: 578px)").matches,wheel:"zoom"};var Z,V;!function(t){t[t.Init=0]="Init",t[t.Ready=1]="Ready",t[t.Closing=2]="Closing",t[t.CustomClosing=3]="CustomClosing",t[t.Destroy=4]="Destroy"}(Z||(Z={})),function(t){t[t.Loading=0]="Loading",t[t.Opening=1]="Opening",t[t.Ready=2]="Ready",t[t.Closing=3]="Closing"}(V||(V={}));const G=()=>{queueMicrotask((()=>{(()=>{const{slug:t,index:e}=U.parseURL(),i=xt.getInstance();if(i&&!1!==i.option("Hash")){const n=i.carousel;if(t&&n){for(let e of n.slides)if(e.slug&&e.slug===t)return n.slideTo(e.index);if(t===i.option("slug"))return n.slideTo(e-1);const s=i.getSlide(),o=s&&s.triggerEl&&s.triggerEl.dataset;if(o&&o.fancybox===t)return n.slideTo(e-1)}U.hasSilentClose=!0,i.close()}U.startFromUrl()})()}))};class U extends I{constructor(){super(...arguments),Object.defineProperty(this,"origHash",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"timer",{enumerable:!0,configurable:!0,writable:!0,value:null})}onChange(){const t=this.instance,e=t.carousel;this.timer&&clearTimeout(this.timer);const i=t.getSlide();if(!e||!i)return;const n=t.isOpeningSlide(i),s=new URL(document.URL).hash;let o,a=i.slug||void 0;o=a||this.instance.option("slug"),!o&&i.triggerEl&&i.triggerEl.dataset&&(o=i.triggerEl.dataset.fancybox);let r="";o&&"true"!==o&&(r="#"+o+(!a&&e.slides.length>1?"-"+(i.index+1):"")),n&&(this.origHash=s!==r?s:""),r&&s!==r&&(this.timer=setTimeout((()=>{try{window.history[n?"pushState":"replaceState"]({},document.title,window.location.pathname+window.location.search+r)}catch(t){}}),300))}onClose(){if(this.timer&&clearTimeout(this.timer),!0!==U.hasSilentClose)try{window.history.replaceState({},document.title,window.location.pathname+window.location.search+(this.origHash||""))}catch(t){}}attach(){this.instance.on("Carousel.ready",this.onChange),this.instance.on("Carousel.change",this.onChange),this.instance.on("close",this.onClose)}detach(){this.instance.off("Carousel.ready",this.onChange),this.instance.off("Carousel.change",this.onChange),this.instance.off("close",this.onClose)}static parseURL(){const t=window.location.hash.slice(1),e=t.split("-"),i=e[e.length-1],n=i&&/^\+?\d+$/.test(i)&&parseInt(e.pop()||"1",10)||1;return{hash:t,slug:e.join("-"),index:n}}static startFromUrl(){if(U.hasSilentClose=!1,xt.getInstance()||!1===xt.defaults.Hash)return;const{hash:t,slug:e,index:i}=U.parseURL();if(!e)return;let n=document.querySelector(`[data-slug="${t}"]`);if(n&&n.dispatchEvent(new CustomEvent("click",{bubbles:!0,cancelable:!0})),xt.getInstance())return;const s=document.querySelectorAll(`[data-fancybox="${e}"]`);s.length&&(n=s[i-1],n&&n.dispatchEvent(new CustomEvent("click",{bubbles:!0,cancelable:!0})))}static destroy(){window.removeEventListener("hashchange",G,!1)}}function K(){window.addEventListener("hashchange",G,!1),setTimeout((()=>{U.startFromUrl()}),500)}Object.defineProperty(U,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(U,"hasSilentClose",{enumerable:!0,configurable:!0,writable:!0,value:!1}),W&&(/complete|interactive|loaded/.test(document.readyState)?K():document.addEventListener("DOMContentLoaded",K));class J extends I{onCreateSlide(t,e,i){const n=this.instance,s=n.optionFor(i,"src")||"",{el:o,type:a}=i;o&&"image"===a&&"string"==typeof s&&this.setContent(i,s).then((t=>{const e=i.contentEl,s=i.imageEl,a=i.thumbElSrc;if(n.isClosing()||!e||!s)return;e.offsetHeight;const r=!!n.isOpeningSlide(i)&&this.getZoomInfo(i);if(this.option("protected")){o.addEventListener("contextmenu",(t=>{t.preventDefault()}));const t=document.createElement("div");S(t,"fancybox-protected"),e.appendChild(t)}if(a&&r){const s=t.contentRect,o=Math.max(s.fullWidth,s.fullHeight);let c=null;!r.opacity&&o>1200&&(c=document.createElement("img"),S(c,"fancybox-ghost"),c.src=a,e.appendChild(c));const h=()=>{c&&(S(c,"f-fadeFastOut"),setTimeout((()=>{c&&(c.remove(),c=null)}),200))};(l=a,new Promise(((t,e)=>{const i=new Image;i.onload=t,i.onerror=e,i.src=l}))).then((()=>{i.state=V.Opening,this.instance.emit("reveal",i),this.zoomIn(i).then((()=>{h(),this.instance.done(i)}),(()=>{n.hideLoading(i)})),c&&setTimeout((()=>{h()}),o>2500?800:200)}),(()=>{n.hideLoading(i),n.revealContent(i)}))}else{const e=this.optionFor(i,"initialSize"),s=this.optionFor(i,"zoom"),o={event:n.prevMouseMoveEvent||n.options.event,friction:s?.12:0};let a=n.optionFor(i,"showClass")||void 0,r=!0;n.isOpeningSlide(i)&&("full"===e?t.zoomToFull(o):"cover"===e?t.zoomToCover(o):"max"===e?t.zoomToMax(o):r=!1,t.stop("current")),r&&a&&(a=t.isDragging?"f-fadeIn":""),n.revealContent(i,a)}var l}),(()=>{n.setError(i,"{{IMAGE_ERROR}}")}))}onRemoveSlide(t,e,i){i.panzoom&&i.panzoom.destroy(),i.panzoom=void 0,i.imageEl=void 0}onChange(t,e,i,n){for(const t of e.slides){const e=t.panzoom;e&&t.index!==i&&e.reset(.35)}}onClose(){const t=this.instance,e=t.container,i=t.getSlide();if(!e||!e.parentElement||!i)return;const{el:n,contentEl:s,panzoom:o}=i,a=i.thumbElSrc;if(!n||!a||!s||!o||o.isContentLoading||o.state===g.Init||o.state===g.Destroy)return;o.updateMetrics();let r=this.getZoomInfo(i);if(!r)return;this.instance.state=Z.CustomClosing,e.classList.remove("is-zooming-in"),e.classList.add("is-zooming-out"),s.style.backgroundImage=`url('${a}')`;const l=e.getBoundingClientRect();Object.assign(e.style,{position:"absolute",top:`${window.pageYOffset}px`,left:`${window.pageXOffset}px`,bottom:"auto",right:"auto",width:`${l.width}px`,height:`${l.height}px`,overflow:"hidden"});const{x:c,y:h,scale:d,opacity:u}=r;if(u){const t=((t,e,i,n)=>{const s=e-t,o=n-i;return e=>i+((e-t)/s*o||0)})(o.scale,d,1,0);o.on("afterTransform",(()=>{s.style.opacity=t(o.scale)+""}))}o.on("endAnimation",(()=>{t.destroy()})),o.target.a=d,o.target.b=0,o.target.c=0,o.target.d=d,o.panTo({x:c,y:h,scale:d,friction:u?.2:.33,ignoreBounds:!0}),o.isResting&&t.destroy()}setContent(t,e){return new Promise(((i,s)=>{var o,a;const r=this.instance,l=t.el;if(!l)return void s();r.showLoading(t);let c=this.optionFor(t,"content");"string"==typeof c&&(c=n(c)),c&&x(c)||(c=document.createElement("img"),c instanceof HTMLImageElement&&(c.src=e||"",c.alt=(null===(o=t.caption)||void 0===o?void 0:o.replace(/<[^>]+>/gi,"").substring(0,1e3))||`Image ${t.index+1} of ${null===(a=r.carousel)||void 0===a?void 0:a.pages.length}`,c.draggable=!1,t.srcset&&c.setAttribute("srcset",t.srcset)),t.sizes&&c.setAttribute("sizes",t.sizes)),c.classList.add("fancybox-image"),t.imageEl=c,r.setContent(t,c,!1);t.panzoom=new T(l,u({},this.option("Panzoom")||{},{content:c,width:r.optionFor(t,"width","auto"),height:r.optionFor(t,"height","auto"),wheel:()=>{const t=r.option("wheel");return("zoom"===t||"pan"==t)&&t},click:(e,i)=>{var n,s;if(r.isCompact||r.isClosing())return!1;if(t.index!==(null===(n=r.getSlide())||void 0===n?void 0:n.index))return!1;let o=!i||i.target&&(null===(s=t.contentEl)||void 0===s?void 0:s.contains(i.target));return r.option(o?"contentClick":"backdropClick")||!1},dblClick:()=>r.isCompact?"toggleZoom":r.option("contentDblClick")||!1,spinner:!1,panOnlyZoomed:!0,wheelLimit:1/0,transformParent:!0,on:{ready:t=>{i(t)},error:()=>{s()},destroy:()=>{s()}}}))}))}zoomIn(t){return new Promise(((e,i)=>{const n=this.instance,s=n.container,{panzoom:o,contentEl:a,el:r}=t;o&&o.updateMetrics();const l=this.getZoomInfo(t);if(!(l&&r&&a&&o&&s))return void i();const{x:c,y:h,scale:d,opacity:u}=l,p=()=>{t.state!==V.Closing&&(u&&(a.style.opacity=Math.max(Math.min(1,1-(1-o.scale)/(1-d)),0)+""),o.scale>=1&&o.scale>o.targetScale-.1&&e(o))},f=t=>{t.scale<.99||t.scale>1.01||(a.style.opacity="",E(s,"is-zooming-in"),t.off("endAnimation",f),t.off("touchStart",f),t.off("afterTransform",p),e(t))};o.on("endAnimation",f),o.on("touchStart",f),o.on("afterTransform",p),o.on(["error","destroy"],(()=>{i()})),o.panTo({x:c,y:h,scale:d,friction:0,ignoreBounds:!0}),o.stop("current");const m={event:"mousemove"===o.panMode?n.prevMouseMoveEvent||n.options.event:void 0},g=this.optionFor(t,"initialSize");S(s,"is-zooming-in"),n.hideLoading(t),"full"===g?o.zoomToFull(m):"cover"===g?o.zoomToCover(m):"max"===g?o.zoomToMax(m):o.reset(.172)}))}getZoomInfo(t){const{el:e,imageEl:i,thumbEl:n,panzoom:s}=t;if(!e||!i||!n||!s||N(n)<3||!this.optionFor(t,"zoom")||this.instance.state===Z.Destroy)return!1;const{top:o,left:a,width:r,height:l}=n.getBoundingClientRect();let{top:c,left:h,fitWidth:d,fitHeight:u}=s.contentRect;if(!(r&&l&&d&&u))return!1;const p=r/d,f=s.container.getBoundingClientRect();c+=f.top,h+=f.left;const m=-1*(h+.5*d-(a+.5*r)),g=-1*(c+.5*u-(o+.5*l));let b=this.option("zoomOpacity")||!1;return"auto"===b&&(b=Math.abs(r/l-d/u)>.1),{x:m,y:g,scale:p,opacity:b}}attach(){this.instance.on("Carousel.change",this.onChange),this.instance.on("Carousel.createSlide",this.onCreateSlide),this.instance.on("Carousel.removeSlide",this.onRemoveSlide),this.instance.on("close",this.onClose)}detach(){this.instance.off("Carousel.change",this.onChange),this.instance.off("Carousel.createSlide",this.onCreateSlide),this.instance.off("Carousel.removeSlide",this.onRemoveSlide),this.instance.off("close",this.onClose)}}Object.defineProperty(J,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:{initialSize:"fit",Panzoom:{maxScale:1},protected:!1,zoom:!0,zoomOpacity:"auto"}});const Q=(t,e={})=>{const i=new URL(t),n=new URLSearchParams(i.search),s=new URLSearchParams;for(const[t,i]of[...n,...Object.entries(e)]){let e=i.toString();"t"===t?s.set("start",parseInt(e).toString()):s.set(t,e)}let o=s.toString(),a=t.match(/#t=((.*)?\d+s)/);return a&&(o+=`#t=${a[1]}`),o},tt={ajax:null,autoSize:!0,preload:!0,videoAutoplay:!0,videoRatio:16/9,videoTpl:'<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">\n  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos.</video>',videoFormat:"",vimeo:{byline:1,color:"00adef",controls:1,dnt:1,muted:0},youtube:{controls:1,enablejsapi:1,nocookie:1,rel:0,fs:1}},et=["image","html","ajax","inline","clone","iframe","map","pdf","html5video","youtube","vimeo","video"];class it extends I{onInitSlide(t,e,i){this.processType(i)}onCreateSlide(t,e,i){this.setContent(i)}onRemoveSlide(t,e,i){i.closeBtnEl&&(i.closeBtnEl.remove(),i.closeBtnEl=void 0),i.xhr&&(i.xhr.abort(),i.xhr=null),i.iframeEl&&(i.iframeEl.onload=i.iframeEl.onerror=null,i.iframeEl.src="//about:blank",i.iframeEl=null);const n=i.contentEl,s=i.placeholderEl;if("inline"===i.type&&n&&s)n.classList.remove("fancybox__content"),"none"!==n.style.display&&(n.style.display="none"),s.parentNode&&s.parentNode.insertBefore(n,s),s.remove(),i.placeholderEl=null;else for(;i.el&&i.el.firstChild;)i.el.removeChild(i.el.firstChild)}onSelectSlide(t,e,i){i.state===V.Ready&&this.playVideo()}onUnselectSlide(t,e,i){var n,s;if("html5video"===i.type){try{null===(s=null===(n=i.el)||void 0===n?void 0:n.querySelector("video"))||void 0===s||s.pause()}catch(t){}return}let o;"vimeo"===i.type?o={method:"pause",value:"true"}:"youtube"===i.type&&(o={event:"command",func:"pauseVideo"}),o&&i.iframeEl&&i.iframeEl.contentWindow&&i.iframeEl.contentWindow.postMessage(JSON.stringify(o),"*"),i.poller&&clearTimeout(i.poller)}onDone(t,e){t.isCurrentSlide(e)&&!t.isClosing()&&this.playVideo()}onRefresh(t,e){e.slides.forEach((t=>{t.el&&(this.setAspectRatio(t),this.resizeIframe(t))}))}onMessage(t){try{let e=JSON.parse(t.data);if("https://player.vimeo.com"===t.origin){if("ready"===e.event)for(let e of Array.from(document.getElementsByClassName("fancybox__iframe")))e instanceof HTMLIFrameElement&&e.contentWindow===t.source&&(e.dataset.ready="true")}else if(t.origin.match(/^https:\/\/(www.)?youtube(-nocookie)?.com$/)&&"onReady"===e.event){const t=document.getElementById(e.id);t&&(t.dataset.ready="true")}}catch(t){}}loadAjaxContent(t){const e=this.instance.optionFor(t,"src")||"";this.instance.showLoading(t);const i=this.instance,n=new XMLHttpRequest;i.showLoading(t),n.onreadystatechange=function(){n.readyState===XMLHttpRequest.DONE&&i.state===Z.Ready&&(i.hideLoading(t),200===n.status?i.setContent(t,n.responseText):i.setError(t,404===n.status?"{{AJAX_NOT_FOUND}}":"{{AJAX_FORBIDDEN}}"))};const s=t.ajax||null;n.open(s?"POST":"GET",e+""),n.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),n.setRequestHeader("X-Requested-With","XMLHttpRequest"),n.send(s),t.xhr=n}setInlineContent(t){let e=null;if(x(t.src))e=t.src;else if("string"==typeof t.src){const i=t.src.split("#",2).pop();e=i?document.getElementById(i):null}if(e){if("clone"===t.type||e.closest(".fancybox__slide")){e=e.cloneNode(!0);const i=e.dataset.animationName;i&&(e.classList.remove(i),delete e.dataset.animationName);let n=e.getAttribute("id");n=n?`${n}--clone`:`clone-${this.instance.id}-${t.index}`,e.setAttribute("id",n)}else if(e.parentNode){const i=document.createElement("div");i.classList.add("fancybox-placeholder"),e.parentNode.insertBefore(i,e),t.placeholderEl=i}this.instance.setContent(t,e)}else this.instance.setError(t,"{{ELEMENT_NOT_FOUND}}")}setIframeContent(t){const{src:e,el:i}=t;if(!e||"string"!=typeof e||!i)return;const n=this.instance,s=document.createElement("iframe");s.className="fancybox__iframe",s.setAttribute("id",`fancybox__iframe_${n.id}_${t.index}`),s.setAttribute("allow","autoplay; fullscreen"),s.setAttribute("scrolling","auto"),s.onerror=()=>{n.setError(t,"{{IFRAME_ERROR}}")},t.iframeEl=s;const o=this.optionFor(t,"preload");if(i.classList.add("is-loading"),"iframe"!==t.type||!1===o)return s.setAttribute("src",t.src+""),this.resizeIframe(t),void n.setContent(t,s);n.showLoading(t),s.onload=()=>{if(!s.src.length)return;const e="true"!==s.dataset.ready;s.dataset.ready="true",this.resizeIframe(t),e?n.revealContent(t):n.hideLoading(t)},s.setAttribute("src",e),n.setContent(t,s,!1)}resizeIframe(t){const e=t.iframeEl,i=null==e?void 0:e.parentElement;if(!e||!i)return;let n=t.autoSize,s=t.width||0,o=t.height||0;s&&o&&(n=!1);const a=i&&i.style;if(!1!==t.preload&&!1!==n&&a)try{const t=window.getComputedStyle(i),n=parseFloat(t.paddingLeft)+parseFloat(t.paddingRight),r=parseFloat(t.paddingTop)+parseFloat(t.paddingBottom),l=e.contentWindow;if(l){const t=l.document,e=t.getElementsByTagName("html")[0],i=t.body;a.width="",i.style.overflow="hidden",s=s||e.scrollWidth+n,a.width=`${s}px`,i.style.overflow="",a.flex="0 0 auto",a.height=`${i.scrollHeight}px`,o=e.scrollHeight+r}}catch(t){}if(s||o){const t={flex:"0 1 auto",width:"",height:""};s&&(t.width=`${s}px`),o&&(t.height=`${o}px`),Object.assign(a,t)}}playVideo(){const t=this.instance.getSlide();if(!t)return;const{el:e}=t;if(!e||!e.offsetParent)return;if(!this.optionFor(t,"videoAutoplay"))return;if("html5video"===t.type)try{const t=e.querySelector("video");if(t){const e=t.play();void 0!==e&&e.then((()=>{})).catch((e=>{t.muted=!0,t.play()}))}}catch(t){}if("youtube"!==t.type&&"vimeo"!==t.type)return;const i=()=>{if(t.iframeEl&&t.iframeEl.contentWindow){let e;if("true"===t.iframeEl.dataset.ready)return e="youtube"===t.type?{event:"command",func:"playVideo"}:{method:"play",value:"true"},e&&t.iframeEl.contentWindow.postMessage(JSON.stringify(e),"*"),void(t.poller=void 0);"youtube"===t.type&&(e={event:"listening",id:t.iframeEl.getAttribute("id")},t.iframeEl.contentWindow.postMessage(JSON.stringify(e),"*"))}t.poller=setTimeout(i,250)};i()}processType(t){if(t.html)return t.type="html",t.src=t.html,void(t.html="");const e=this.instance.optionFor(t,"src","");if(!e||"string"!=typeof e)return;let i=t.type,n=null;if(n=e.match(/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i)){const s=this.optionFor(t,"youtube"),{nocookie:o}=s,a=function(t,e){var i={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(i[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(t);s<n.length;s++)e.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(t,n[s])&&(i[n[s]]=t[n[s]])}return i}(s,["nocookie"]),r=`www.youtube${o?"-nocookie":""}.com`,l=Q(e,a),c=encodeURIComponent(n[2]);t.videoId=c,t.src=`https://${r}/embed/${c}?${l}`,t.thumbSrc=t.thumbSrc||`https://i.ytimg.com/vi/${c}/mqdefault.jpg`,i="youtube"}else if(n=e.match(/^.+vimeo.com\/(?:\/)?([\d]+)((\/|\?h=)([a-z0-9]+))?(.*)?/)){const s=Q(e,this.optionFor(t,"vimeo")),o=encodeURIComponent(n[1]),a=n[4]||"";t.videoId=o,t.src=`https://player.vimeo.com/video/${o}?${a?`h=${a}${s?"&":""}`:""}${s}`,i="vimeo"}if(!i&&t.triggerEl){const e=t.triggerEl.dataset.type;et.includes(e)&&(i=e)}i||"string"==typeof e&&("#"===e.charAt(0)?i="inline":(n=e.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))?(i="html5video",t.videoFormat=t.videoFormat||"video/"+("ogv"===n[1]?"ogg":n[1])):e.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?i="image":e.match(/\.(pdf)((\?|#).*)?$/i)?i="pdf":(n=e.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i))?(t.src=`https://maps.google.${n[1]}/?ll=${(n[2]?n[2]+"&z="+Math.floor(parseFloat(n[3]))+(n[4]?n[4].replace(/^\//,"&"):""):n[4]+"").replace(/\?/,"&")}&output=${n[4]&&n[4].indexOf("layer=c")>0?"svembed":"embed"}`,i="map"):(n=e.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i))&&(t.src=`https://maps.google.${n[1]}/maps?q=${n[2].replace("query=","q=").replace("api=1","")}&output=embed`,i="map")),i=i||this.instance.option("defaultType"),t.type=i,"image"===i&&(t.thumbSrc=t.thumbSrc||t.src)}setContent(t){const e=this.instance.optionFor(t,"src")||"";if(t&&t.type&&e){switch(t.type){case"html":this.instance.setContent(t,e);break;case"html5video":const i=this.option("videoTpl");i&&this.instance.setContent(t,i.replace(/\{\{src\}\}/gi,e+"").replace(/\{\{format\}\}/gi,this.optionFor(t,"videoFormat")||"").replace(/\{\{poster\}\}/gi,t.poster||t.thumbSrc||""));break;case"inline":case"clone":this.setInlineContent(t);break;case"ajax":this.loadAjaxContent(t);break;case"pdf":case"map":case"youtube":case"vimeo":t.preload=!1;case"iframe":this.setIframeContent(t)}this.setAspectRatio(t)}}setAspectRatio(t){var e;const i=t.contentEl,n=this.optionFor(t,"videoRatio"),s=null===(e=t.el)||void 0===e?void 0:e.getBoundingClientRect();if(!(i&&s&&n&&1!==n&&t.type&&["video","youtube","vimeo","html5video"].includes(t.type)))return;const o=s.width,a=s.height;i.style.aspectRatio=n+"",i.style.width=o/a>n?"auto":"",i.style.height=o/a>n?"":"auto"}attach(){this.instance.on("Carousel.initSlide",this.onInitSlide),this.instance.on("Carousel.createSlide",this.onCreateSlide),this.instance.on("Carousel.removeSlide",this.onRemoveSlide),this.instance.on("Carousel.selectSlide",this.onSelectSlide),this.instance.on("Carousel.unselectSlide",this.onUnselectSlide),this.instance.on("Carousel.Panzoom.refresh",this.onRefresh),this.instance.on("done",this.onDone),window.addEventListener("message",this.onMessage)}detach(){this.instance.off("Carousel.initSlide",this.onInitSlide),this.instance.off("Carousel.createSlide",this.onCreateSlide),this.instance.off("Carousel.removeSlide",this.onRemoveSlide),this.instance.off("Carousel.selectSlide",this.onSelectSlide),this.instance.off("Carousel.unselectSlide",this.onUnselectSlide),this.instance.off("Carousel.Panzoom.refresh",this.onRefresh),this.instance.off("done",this.onDone),window.removeEventListener("message",this.onMessage)}}Object.defineProperty(it,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:tt});class nt extends I{constructor(){super(...arguments),Object.defineProperty(this,"state",{enumerable:!0,configurable:!0,writable:!0,value:"ready"}),Object.defineProperty(this,"inHover",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"timer",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"progressBar",{enumerable:!0,configurable:!0,writable:!0,value:null})}get isActive(){return"ready"!==this.state}onReady(t){this.option("autoStart")&&(t.isInfinite||t.page<t.pages.length-1)&&this.start()}onChange(){var t;(null===(t=this.instance.panzoom)||void 0===t?void 0:t.isResting)||(this.removeProgressBar(),this.pause())}onSettle(){this.resume()}onVisibilityChange(){"visible"===document.visibilityState?this.resume():this.pause()}onMouseEnter(){this.inHover=!0,this.pause()}onMouseLeave(){var t;this.inHover=!1,(null===(t=this.instance.panzoom)||void 0===t?void 0:t.isResting)&&this.resume()}onTimerEnd(){"play"===this.state&&(this.instance.isInfinite||this.instance.page!==this.instance.pages.length-1?this.instance.slideNext():this.instance.slideTo(0))}removeProgressBar(){this.progressBar&&(this.progressBar.remove(),this.progressBar=null)}createProgressBar(){var t;if(!this.option("showProgress"))return null;this.removeProgressBar();const e=this.instance,i=(null===(t=e.pages[e.page])||void 0===t?void 0:t.slides)||[];let n=this.option("progressParentEl");if(n||(n=(1===i.length?i[0].el:null)||e.viewport),!n)return null;const s=document.createElement("div");return S(s,"f-progress"),n.prepend(s),this.progressBar=s,s.offsetHeight,s}set(){if(this.instance.pages.length<2)return;if(this.progressBar)return;const t=this.option("timeout");this.state="play",S(this.instance.container,"has-autoplay");let e=this.createProgressBar();e&&(e.style.transitionDuration=`${t}ms`,e.style.transform="scaleX(1)"),this.timer=setTimeout((()=>{this.timer=null,this.inHover||this.onTimerEnd()}),t),this.emit("set")}clear(){this.timer&&(clearTimeout(this.timer),this.timer=null),this.removeProgressBar()}start(){if(this.set(),this.option("pauseOnHover")){const t=this.instance.container;t.addEventListener("mouseenter",this.onMouseEnter,!1),t.addEventListener("mouseleave",this.onMouseLeave,!1)}document.addEventListener("visibilitychange",this.onVisibilityChange,!1)}stop(){const t=this.instance.container;this.clear(),this.state="ready",t.removeEventListener("mouseenter",this.onMouseEnter,!1),t.removeEventListener("mouseleave",this.onMouseLeave,!1),document.removeEventListener("visibilitychange",this.onVisibilityChange,!1),E(t,"has-autoplay"),this.emit("stop")}pause(){"play"===this.state&&(this.state="pause",this.clear(),this.emit("pause"))}resume(){const t=this.instance;if(t.isInfinite||t.page!==t.pages.length-1)if("play"!==this.state){if("pause"===this.state&&!this.inHover){const t=new Event("resume",{bubbles:!0,cancelable:!0});this.emit("resume",event),t.defaultPrevented||this.set()}}else this.set();else this.stop()}toggle(){"play"===this.state||"pause"===this.state?this.stop():this.set()}attach(){this.instance.on("ready",this.onReady),this.instance.on("Panzoom.startAnimation",this.onChange),this.instance.on("Panzoom.endAnimation",this.onSettle),this.instance.on("Panzoom.touchMove",this.onChange)}detach(){this.instance.off("ready",this.onReady),this.instance.off("Panzoom.startAnimation",this.onChange),this.instance.off("Panzoom.endAnimation",this.onSettle),this.instance.off("Panzoom.touchMove",this.onChange),this.stop()}}Object.defineProperty(nt,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:{autoStart:!0,pauseOnHover:!0,progressParentEl:null,showProgress:!0,timeout:3e3}});class st extends I{constructor(){super(...arguments),Object.defineProperty(this,"ref",{enumerable:!0,configurable:!0,writable:!0,value:null})}onPrepare(t){const e=t.carousel;if(!e)return;const i=t.container;i&&(e.options.Autoplay=u(this.option("Autoplay")||{},{pauseOnHover:!1,autoStart:!1,timeout:this.option("timeout"),progressParentEl:()=>i.querySelector(".fancybox__toolbar [data-fancybox-toggle-slideshow]")||i,on:{set:e=>{var n;i.classList.add("has-slideshow"),(null===(n=t.getSlide())||void 0===n?void 0:n.state)!==V.Ready&&e.pause()},stop:()=>{i.classList.remove("has-slideshow"),t.isCompact||t.endIdle()},resume:(e,i)=>{var n,s,o;!i||!i.cancelable||(null===(n=t.getSlide())||void 0===n?void 0:n.state)===V.Ready&&(null===(o=null===(s=t.carousel)||void 0===s?void 0:s.panzoom)||void 0===o?void 0:o.isResting)||i.preventDefault()}}}),e.attachPlugins({Autoplay:nt}),this.ref=e.plugins.Autoplay)}onReady(t){const e=t.carousel,i=this.ref;e&&i&&this.option("playOnStart")&&(e.isInfinite||e.page<e.pages.length-1)&&i.start()}onDone(t,e){const i=this.ref;if(!i)return;const n=e.panzoom;n&&n.on("startAnimation",(()=>{t.isCurrentSlide(e)&&i.stop()})),t.isCurrentSlide(e)&&i.resume()}onKeydown(t,e){var i;const n=this.ref;n&&e===this.option("key")&&"BUTTON"!==(null===(i=document.activeElement)||void 0===i?void 0:i.nodeName)&&n.toggle()}attach(){this.instance.on("Carousel.init",this.onPrepare),this.instance.on("Carousel.ready",this.onReady),this.instance.on("done",this.onDone),this.instance.on("keydown",this.onKeydown)}detach(){this.instance.off("Carousel.init",this.onPrepare),this.instance.off("Carousel.ready",this.onReady),this.instance.off("done",this.onDone),this.instance.off("keydown",this.onKeydown)}}Object.defineProperty(st,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:{key:" ",playOnStart:!1,timeout:3e3}});const ot={classes:{container:"f-thumbs f-carousel__thumbs",viewport:"f-thumbs__viewport",track:"f-thumbs__track",slide:"f-thumbs__slide",isResting:"is-resting",isSelected:"is-selected",isLoading:"is-loading",hasThumbs:"has-thumbs"},minCount:2,parentEl:null,thumbTpl:'<button class="f-thumbs__slide__button" tabindex="0" type="button" aria-label="{{GOTO}}" data-carousel-index="%i"><img class="f-thumbs__slide__img" data-lazy-src="{{%s}}" alt="" /></button>',type:"modern"};var at;!function(t){t[t.Init=0]="Init",t[t.Ready=1]="Ready",t[t.Hidden=2]="Hidden",t[t.Disabled=3]="Disabled"}(at||(at={}));let rt=class extends I{constructor(){super(...arguments),Object.defineProperty(this,"type",{enumerable:!0,configurable:!0,writable:!0,value:"modern"}),Object.defineProperty(this,"container",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"track",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"carousel",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"panzoom",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"thumbWidth",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"thumbClipWidth",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"thumbHeight",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"thumbGap",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"thumbExtraGap",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"shouldCenter",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.defineProperty(this,"state",{enumerable:!0,configurable:!0,writable:!0,value:at.Init})}formatThumb(t,e){return this.instance.localize(e,[["%i",t.index],["%d",t.index+1],["%s",t.thumbSrc||"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"]])}getSlides(){const t=[],e=this.option("thumbTpl")||"";if(e)for(const i of this.instance.slides||[]){let n="";i.type&&(n=`for-${i.type}`,i.type&&["video","youtube","vimeo","html5video"].includes(i.type)&&(n+=" for-video")),t.push({html:this.formatThumb(i,e),customClass:n})}return t}onInitSlide(t,e){const i=e.el;i&&(e.thumbSrc=i.dataset.thumbSrc||e.thumbSrc||"",e.thumbClipWidth=parseFloat(i.dataset.thumbClipWidth||"")||e.thumbClipWidth||0,e.thumbHeight=parseFloat(i.dataset.thumbHeight||"")||e.thumbHeight||0)}onInitSlides(){this.state===at.Init&&this.build()}onRefreshM(){this.refreshModern()}onChangeM(){"modern"===this.type&&(this.shouldCenter=!0,this.centerModern())}onClickModern(t){t.preventDefault(),t.stopPropagation();const e=this.instance,i=e.page,n=t=>{if(t){const e=t.closest("[data-carousel-index]");if(e)return parseInt(e.dataset.carouselIndex||"",10)||0}return-1},s=(t,e)=>{const i=document.elementFromPoint(t,e);return i?n(i):-1};let o=n(t.target);o<0&&(o=s(t.clientX+this.thumbGap,t.clientY),o===i&&(o=i-1)),o<0&&(o=s(t.clientX-this.thumbGap,t.clientY),o===i&&(o=i+1)),o<0&&(o=(e=>{let n=s(t.clientX-e,t.clientY),a=s(t.clientX+e,t.clientY);return o<0&&n===i&&(o=i+1),o<0&&a===i&&(o=i-1),o})(this.thumbExtraGap)),o===i?this.centerModern():o>-1&&o<e.pages.length&&e.slideTo(o)}onTransformM(){if("modern"!==this.type)return;const{instance:t,container:e,track:i}=this,n=t.panzoom;if(!(e&&i&&n&&this.panzoom))return;o(e,this.cn("isResting"),n.state!==g.Init&&n.isResting);const s=this.thumbGap,a=this.thumbExtraGap,r=this.thumbClipWidth;let l=0,c=0,h=0;for(const e of t.slides){let i=e.index,n=e.thumbSlideEl;if(!n)continue;o(n,this.cn("isSelected"),i===t.page),c=1-Math.abs(t.getProgress(i)),n.style.setProperty("--progress",c?c+"":"");const d=.5*((e.thumbWidth||0)-r);l+=s,l+=d,c&&(l-=c*(d+a)),n.style.setProperty("--shift",l-s+""),l+=d,c&&(l-=c*(d+a)),l-=s,0===i&&(h=a*c)}i&&(i.style.setProperty("--left",h+""),i.style.setProperty("--width",l+h+s+a*c+"")),this.shouldCenter&&this.centerModern()}buildClassic(){const{container:t,track:e}=this,i=this.getSlides();if(!t||!e||!i)return;const n=new this.instance.constructor(t,u({track:e,infinite:!1,center:!0,fill:!0,dragFree:!0,slidesPerPage:1,transition:!1,Dots:!1,Navigation:!1,Sync:{},classes:{container:"f-thumbs",viewport:"f-thumbs__viewport",track:"f-thumbs__track",slide:"f-thumbs__slide"}},this.option("Carousel")||{},{Sync:{target:this.instance},slides:i}));this.carousel=n,this.track=e,n.on("ready",(()=>{this.emit("ready")}))}buildModern(){if("modern"!==this.type)return;const{container:t,track:e,instance:i}=this,s=this.option("thumbTpl")||"";if(!t||!e||!s)return;S(t,"is-horizontal"),this.updateModern();for(const t of i.slides||[]){const i=document.createElement("div");if(S(i,this.cn("slide")),t.type){let e=`for-${t.type}`;["video","youtube","vimeo","html5video"].includes(t.type)&&(e+=" for-video"),S(i,e)}i.appendChild(n(this.formatThumb(t,s))),t.thumbSlideEl=i,e.appendChild(i),this.resizeModernSlide(t)}const o=new i.constructor.Panzoom(t,{content:e,lockAxis:"x",zoom:!1,panOnlyZoomed:!1,bounds:()=>{let t=0,e=0,n=i.slides[0],s=i.slides[i.slides.length-1],o=i.slides[i.page];return n&&s&&o&&(e=-1*this.getModernThumbPos(0),0!==i.page&&(e+=.5*(n.thumbWidth||0)),t=-1*this.getModernThumbPos(i.slides.length-1),i.page!==i.slides.length-1&&(t+=(s.thumbWidth||0)-(o.thumbWidth||0)-.5*(s.thumbWidth||0))),{x:{min:t,max:e},y:{min:0,max:0}}}});o.on("touchStart",((t,e)=>{this.shouldCenter=!1})),o.on("click",((t,e)=>this.onClickModern(e))),o.on("ready",(()=>{this.centerModern(),this.emit("ready")})),o.on(["afterTransform","refresh"],(t=>{this.lazyLoadModern()})),this.panzoom=o,this.refreshModern()}updateModern(){if("modern"!==this.type)return;const{container:t}=this;t&&(this.thumbGap=parseFloat(getComputedStyle(t).getPropertyValue("--f-thumb-gap"))||0,this.thumbExtraGap=parseFloat(getComputedStyle(t).getPropertyValue("--f-thumb-extra-gap"))||0,this.thumbWidth=parseFloat(getComputedStyle(t).getPropertyValue("--f-thumb-width"))||40,this.thumbClipWidth=parseFloat(getComputedStyle(t).getPropertyValue("--f-thumb-clip-width"))||40,this.thumbHeight=parseFloat(getComputedStyle(t).getPropertyValue("--f-thumb-height"))||40)}refreshModern(){var t;if("modern"===this.type){this.updateModern();for(const t of this.instance.slides||[])this.resizeModernSlide(t);this.onTransformM(),null===(t=this.panzoom)||void 0===t||t.updateMetrics(!0),this.centerModern(0)}}centerModern(e){const i=this.instance,{container:n,panzoom:s}=this;if(!n||!s||s.state===g.Init)return;const o=i.page;let a=this.getModernThumbPos(o),r=a;for(let t=i.page-3;t<i.page+3;t++){if(t<0||t>i.pages.length-1||t===i.page)continue;const e=1-Math.abs(i.getProgress(t));e>0&&e<1&&(r+=e*(this.getModernThumbPos(t)-a))}let l=100;void 0===e&&(e=.2,i.inTransition.size>0&&(e=.12),Math.abs(-1*s.current.e-r)>s.containerRect.width&&(e=.5,l=0)),s.options.maxVelocity=l,s.applyChange({panX:t(-1*r-s.target.e,1e3),friction:null===i.prevPage?0:e})}lazyLoadModern(){const{instance:t,panzoom:e}=this;if(!e)return;const i=-1*e.current.e||0;let s=this.getModernThumbPos(t.page);if(e.state!==g.Init||0===s)for(const s of t.slides||[]){const t=s.thumbSlideEl;if(!t)continue;const o=t.querySelector("img[data-lazy-src]"),a=s.index,r=this.getModernThumbPos(a),l=i-.5*e.containerRect.innerWidth,c=l+e.containerRect.innerWidth;if(!o||r<l||r>c)continue;let h=o.dataset.lazySrc;if(!h||!h.length)continue;if(delete o.dataset.lazySrc,o.src=h,o.complete)continue;S(t,this.cn("isLoading"));const d=n(w);t.appendChild(d),o.addEventListener("load",(()=>{t.offsetParent&&(t.classList.remove(this.cn("isLoading")),d.remove())}),!1)}}resizeModernSlide(t){if("modern"!==this.type)return;if(!t.thumbSlideEl)return;const e=t.thumbClipWidth&&t.thumbHeight?Math.round(this.thumbHeight*(t.thumbClipWidth/t.thumbHeight)):this.thumbWidth;t.thumbWidth=e}getModernThumbPos(e){const i=this.instance.slides[e],n=this.panzoom;if(!n||!n.contentRect.fitWidth)return 0;let s=n.containerRect.innerWidth,o=n.contentRect.width;2===this.instance.slides.length&&(e-=1,o=2*this.thumbClipWidth);let a=e*(this.thumbClipWidth+this.thumbGap)+this.thumbExtraGap+.5*(i.thumbWidth||0);return a-=o>s?.5*s:.5*o,t(a||0,1)}build(){const t=this.instance,e=t.container,i=this.option("minCount")||0;if(i){let e=0;for(const i of t.slides||[])i.thumbSrc&&e++;if(e<i)return this.cleanup(),void(this.state=at.Disabled)}const n=this.option("type");if(["modern","classic"].indexOf(n)<0)return void(this.state=at.Disabled);this.type=n;const s=document.createElement("div");S(s,this.cn("container")),S(s,`is-${n}`);const o=this.option("parentEl");o?o.appendChild(s):e.after(s),this.container=s,S(e,this.cn("hasThumbs"));const a=document.createElement("div");S(a,this.cn("track")),s.appendChild(a),this.track=a,"classic"===n?this.buildClassic():this.buildModern(),this.state=at.Ready,s.addEventListener("click",(e=>{setTimeout((()=>{var e;null===(e=null==s?void 0:s.querySelector(`[data-carousel-index="${t.page}"]`))||void 0===e||e.focus()}),100)}))}cleanup(){this.carousel&&this.carousel.destroy(),this.carousel=null,this.panzoom&&this.panzoom.destroy(),this.panzoom=null,this.container&&this.container.remove(),this.container=null,this.track=null,this.state=at.Init,E(this.instance.container,this.cn("hasThumbs"))}attach(){const{instance:t}=this;t.on("initSlide",this.onInitSlide),t.state===L.Init?t.on("initSlides",this.onInitSlides):this.onInitSlides(),t.on("Panzoom.afterTransform",this.onTransformM),t.on("Panzoom.refresh",this.onRefreshM),t.on("change",this.onChangeM)}detach(){const{instance:t}=this;t.off("initSlide",this.onInitSlide),t.off("initSlides",this.onInitSlides),t.off("Panzoom.afterTransform",this.onTransformM),t.off("Panzoom.refresh",this.onRefreshM),t.off("change",this.onChangeM),this.cleanup()}};Object.defineProperty(rt,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:ot});const lt=Object.assign(Object.assign({},ot),{key:"t",showOnStart:!0,parentEl:null});class ct extends I{constructor(){super(...arguments),Object.defineProperty(this,"ref",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"hidden",{enumerable:!0,configurable:!0,writable:!0,value:!1})}get isEnabled(){const t=this.ref;return t&&t.state!==at.Disabled}get isHidden(){return this.hidden}onInit(){const t=this.instance,e=t.carousel;if(this.ref||!e)return;const i=this.option("parentEl")||t.footer||t.container;i&&(e.options.Thumbs=u({},this.options,{parentEl:i,classes:{container:"f-thumbs fancybox__thumbs"},Carousel:{Sync:{friction:t.option("Carousel.friction")},on:{click:(t,e)=>{e.stopPropagation()}}},on:{ready:t=>{const e=t.container;e&&this.hidden&&(this.refresh(),e.style.transition="none",this.hide(),e.offsetHeight,queueMicrotask((()=>{e.style.transition="",this.show()})))}}}),e.attachPlugins({Thumbs:rt}),this.ref=e.plugins.Thumbs,this.option("showOnStart")||(this.ref.state=at.Hidden,this.hidden=!0))}onResize(){var t;const e=null===(t=this.ref)||void 0===t?void 0:t.container;e&&(e.style.maxHeight="")}onKeydown(t,e){const i=this.option("key");i&&i===e&&this.toggle()}toggle(){const t=this.ref;t&&t.state!==at.Disabled&&(t.state!==at.Hidden?this.hidden?this.show():this.hide():t.build())}show(){const t=this.ref,e=t&&t.state!==at.Disabled&&t.container;e&&(this.refresh(),e.offsetHeight,e.removeAttribute("aria-hidden"),e.classList.remove("is-hidden"),this.hidden=!1)}hide(){const t=this.ref,e=t&&t.container;e&&(this.refresh(),e.offsetHeight,e.classList.add("is-hidden"),e.setAttribute("aria-hidden","true")),this.hidden=!0}refresh(){const t=this.ref;if(!t||t.state===at.Disabled)return;const e=t.container,i=(null==e?void 0:e.firstChild)||null;e&&i&&i.childNodes.length&&(e.style.maxHeight=`${i.getBoundingClientRect().height}px`)}attach(){this.instance.state===Z.Init?this.instance.on("Carousel.init",this.onInit):this.onInit(),this.instance.on("resize",this.onResize),this.instance.on("keydown",this.onKeydown)}detach(){var t;this.instance.off("Carousel.init",this.onInit),this.instance.off("resize",this.onResize),this.instance.off("keydown",this.onKeydown),null===(t=this.instance.carousel)||void 0===t||t.detachPlugins(["Thumbs"]),this.ref=null}}Object.defineProperty(ct,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:lt});const ht={panLeft:{icon:'<svg><path d="M5 12h14M5 12l6 6M5 12l6-6"/></svg>',change:{panX:-100}},panRight:{icon:'<svg><path d="M5 12h14M13 18l6-6M13 6l6 6"/></svg>',change:{panX:100}},panUp:{icon:'<svg><path d="M12 5v14M18 11l-6-6M6 11l6-6"/></svg>',change:{panY:-100}},panDown:{icon:'<svg><path d="M12 5v14M18 13l-6 6M6 13l6 6"/></svg>',change:{panY:100}},zoomIn:{icon:'<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/></svg>',action:"zoomIn"},zoomOut:{icon:'<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',action:"zoomOut"},toggle1to1:{icon:'<svg><path d="M3.51 3.07c5.74.02 11.48-.02 17.22.02 1.37.1 2.34 1.64 2.18 3.13 0 4.08.02 8.16 0 12.23-.1 1.54-1.47 2.64-2.79 2.46-5.61-.01-11.24.02-16.86-.01-1.36-.12-2.33-1.65-2.17-3.14 0-4.07-.02-8.16 0-12.23.1-1.36 1.22-2.48 2.42-2.46Z"/><path d="M5.65 8.54h1.49v6.92m8.94-6.92h1.49v6.92M11.5 9.4v.02m0 5.18v0"/></svg>',action:"toggleZoom"},toggleZoom:{icon:'<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',action:"toggleZoom"},iterateZoom:{icon:'<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',action:"iterateZoom"},rotateCCW:{icon:'<svg><path d="M15 4.55a8 8 0 0 0-6 14.9M9 15v5H4M18.37 7.16v.01M13 19.94v.01M16.84 18.37v.01M19.37 15.1v.01M19.94 11v.01"/></svg>',action:"rotateCCW"},rotateCW:{icon:'<svg><path d="M9 4.55a8 8 0 0 1 6 14.9M15 15v5h5M5.63 7.16v.01M4.06 11v.01M4.63 15.1v.01M7.16 18.37v.01M11 19.94v.01"/></svg>',action:"rotateCW"},flipX:{icon:'<svg style="stroke-width: 1.3"><path d="M12 3v18M16 7v10h5L16 7M8 7v10H3L8 7"/></svg>',action:"flipX"},flipY:{icon:'<svg style="stroke-width: 1.3"><path d="M3 12h18M7 16h10L7 21v-5M7 8h10L7 3v5"/></svg>',action:"flipY"},fitX:{icon:'<svg><path d="M4 12V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6M10 18H3M21 18h-7M6 15l-3 3 3 3M18 15l3 3-3 3"/></svg>',action:"fitX"},fitY:{icon:'<svg><path d="M12 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6M18 14v7M18 3v7M15 18l3 3 3-3M15 6l3-3 3 3"/></svg>',action:"fitY"},reset:{icon:'<svg><path d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/></svg>',action:"reset"},toggleFS:{icon:'<svg><g><path d="M14.5 9.5 21 3m0 0h-6m6 0v6M3 21l6.5-6.5M3 21v-6m0 6h6"/></g><g><path d="m14 10 7-7m-7 7h6m-6 0V4M3 21l7-7m0 0v6m0-6H4"/></g></svg>',action:"toggleFS"}};var dt;!function(t){t[t.Init=0]="Init",t[t.Ready=1]="Ready",t[t.Disabled=2]="Disabled"}(dt||(dt={}));const ut={absolute:"auto",display:{left:["infobar"],middle:[],right:["iterateZoom","slideshow","fullscreen","thumbs","close"]},enabled:"auto",items:{infobar:{tpl:'<div class="fancybox__infobar" tabindex="-1"><span data-fancybox-current-index></span>/<span data-fancybox-count></span></div>'},download:{tpl:'<a class="f-button" title="{{DOWNLOAD}}" data-fancybox-download href="javasript:;"><svg><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5 5-5M12 4v12"/></svg></a>'},prev:{tpl:'<button class="f-button" title="{{PREV}}" data-fancybox-prev><svg><path d="m15 6-6 6 6 6"/></svg></button>'},next:{tpl:'<button class="f-button" title="{{NEXT}}" data-fancybox-next><svg><path d="m9 6 6 6-6 6"/></svg></button>'},slideshow:{tpl:'<button class="f-button" title="{{TOGGLE_SLIDESHOW}}" data-fancybox-toggle-slideshow><svg><g><path d="M8 4v16l13 -8z"></path></g><g><path d="M8 4v15M17 4v15"/></g></svg></button>'},fullscreen:{tpl:'<button class="f-button" title="{{TOGGLE_FULLSCREEN}}" data-fancybox-toggle-fullscreen><svg><g><path d="M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2M16 4h2a2 2 0 0 1 2 2v2M16 20h2a2 2 0 0 0 2-2v-2"/></g><g><path d="M15 19v-2a2 2 0 0 1 2-2h2M15 5v2a2 2 0 0 0 2 2h2M5 15h2a2 2 0 0 1 2 2v2M5 9h2a2 2 0 0 0 2-2V5"/></g></svg></button>'},thumbs:{tpl:'<button class="f-button" title="{{TOGGLE_THUMBS}}" data-fancybox-toggle-thumbs><svg><circle cx="5.5" cy="5.5" r="1"/><circle cx="12" cy="5.5" r="1"/><circle cx="18.5" cy="5.5" r="1"/><circle cx="5.5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="18.5" cy="12" r="1"/><circle cx="5.5" cy="18.5" r="1"/><circle cx="12" cy="18.5" r="1"/><circle cx="18.5" cy="18.5" r="1"/></svg></button>'},close:{tpl:'<button class="f-button" title="{{CLOSE}}" data-fancybox-close><svg><path d="m19.5 4.5-15 15M4.5 4.5l15 15"/></svg></button>'}},parentEl:null},pt={tabindex:"-1",width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"};class ft extends I{constructor(){super(...arguments),Object.defineProperty(this,"state",{enumerable:!0,configurable:!0,writable:!0,value:dt.Init}),Object.defineProperty(this,"container",{enumerable:!0,configurable:!0,writable:!0,value:null})}onReady(t){var e;if(!t.carousel)return;let i=this.option("display"),n=this.option("absolute"),s=this.option("enabled");if("auto"===s){const t=this.instance.carousel;let e=0;if(t)for(const i of t.slides)(i.panzoom||"image"===i.type)&&e++;e||(s=!1)}s||(i=void 0);let o=0;const a={left:[],middle:[],right:[]};if(i)for(const t of["left","middle","right"])for(const n of i[t]){const i=this.createEl(n);i&&(null===(e=a[t])||void 0===e||e.push(i),o++)}let r=null;if(o&&(r=this.createContainer()),r){for(const[t,e]of Object.entries(a)){const i=document.createElement("div");S(i,"fancybox__toolbar__column is-"+t);for(const t of e)i.appendChild(t);"auto"!==n||"middle"!==t||e.length||(n=!0),r.appendChild(i)}!0===n&&S(r,"is-absolute"),this.state=dt.Ready,this.onRefresh()}else this.state=dt.Disabled}onClick(t){var e,i;const n=this.instance,s=n.getSlide(),o=null==s?void 0:s.panzoom,a=t.target,r=a&&x(a)?a.dataset:null;if(!r)return;if(void 0!==r.fancyboxToggleThumbs)return t.preventDefault(),t.stopPropagation(),void(null===(e=n.plugins.Thumbs)||void 0===e||e.toggle());if(void 0!==r.fancyboxToggleFullscreen)return t.preventDefault(),t.stopPropagation(),void this.instance.toggleFullscreen();if(void 0!==r.fancyboxToggleSlideshow){t.preventDefault(),t.stopPropagation();const e=null===(i=n.carousel)||void 0===i?void 0:i.plugins.Autoplay;let s=e.isActive;return o&&"mousemove"===o.panMode&&!s&&o.reset(),void(s?e.stop():e.start())}const l=r.panzoomAction,c=r.panzoomChange;if((c||l)&&(t.preventDefault(),t.stopPropagation()),c){let t={};try{t=JSON.parse(c)}catch(t){}o&&o.applyChange(t)}else l&&o&&o[l]&&o[l]()}onChange(){this.onRefresh()}onRefresh(){if(this.instance.isClosing())return;const t=this.container;if(!t)return;const e=this.instance.getSlide();if(!e||e.state!==V.Ready)return;const i=e&&!e.error&&e.panzoom;for(const e of t.querySelectorAll("[data-panzoom-action]"))i?(e.removeAttribute("disabled"),e.removeAttribute("tabindex")):(e.setAttribute("disabled",""),e.setAttribute("tabindex","-1"));let n=i&&i.canZoomIn(),s=i&&i.canZoomOut();for(const e of t.querySelectorAll('[data-panzoom-action="zoomIn"]'))n?(e.removeAttribute("disabled"),e.removeAttribute("tabindex")):(e.setAttribute("disabled",""),e.setAttribute("tabindex","-1"));for(const e of t.querySelectorAll('[data-panzoom-action="zoomOut"]'))s?(e.removeAttribute("disabled"),e.removeAttribute("tabindex")):(e.setAttribute("disabled",""),e.setAttribute("tabindex","-1"));for(const e of t.querySelectorAll('[data-panzoom-action="toggleZoom"],[data-panzoom-action="iterateZoom"]')){s||n?(e.removeAttribute("disabled"),e.removeAttribute("tabindex")):(e.setAttribute("disabled",""),e.setAttribute("tabindex","-1"));const t=e.querySelector("g");t&&(t.style.display=n?"":"none")}}onDone(t,e){var i;null===(i=e.panzoom)||void 0===i||i.on("afterTransform",(()=>{this.instance.isCurrentSlide(e)&&this.onRefresh()})),this.instance.isCurrentSlide(e)&&this.onRefresh()}createContainer(){const t=this.instance.container;if(!t)return null;const e=this.option("parentEl")||t,i=document.createElement("div");return S(i,"fancybox__toolbar"),e.prepend(i),i.addEventListener("click",this.onClick,{passive:!1,capture:!0}),t&&S(t,"has-toolbar"),this.container=i,i}createEl(t){var e;const i=this.instance.carousel;if(!i)return null;if("toggleFS"===t)return null;if("fullscreen"===t&&!this.instance.fsAPI)return null;let s=null;const o=i.slides.length||0;let a=0,r=0;for(const t of i.slides)(t.panzoom||"image"===t.type)&&a++,("image"===t.type||t.downloadSrc)&&r++;if(o<2&&["infobar","prev","next"].includes(t))return s;if(void 0!==ht[t]&&!a)return null;if("download"===t&&!r)return null;if("thumbs"===t){const t=this.instance.plugins.Thumbs;if(!t||!t.isEnabled)return null}if("slideshow"===t){if(!(null===(e=this.instance.carousel)||void 0===e?void 0:e.plugins.Autoplay)||o<2)return null}if(void 0!==ht[t]){const e=ht[t];s=document.createElement("button"),s.setAttribute("title",this.instance.localize(`{{${t.toUpperCase()}}}`)),S(s,"f-button"),e.action&&(s.dataset.panzoomAction=e.action),e.change&&(s.dataset.panzoomChange=JSON.stringify(e.change)),s.appendChild(n(this.instance.localize(e.icon)))}else{const e=(this.option("items")||[])[t];e&&(s=n(this.instance.localize(e.tpl)),"function"==typeof e.click&&s.addEventListener("click",(t=>{t.preventDefault(),t.stopPropagation(),"function"==typeof e.click&&e.click.call(this,this,t)})))}const l=null==s?void 0:s.querySelector("svg");if(l)for(const[t,e]of Object.entries(pt))l.getAttribute(t)||l.setAttribute(t,String(e));return s}removeContainer(){const t=this.container;t&&t.remove(),this.container=null,this.state=dt.Disabled;const e=this.instance.container;e&&E(e,"has-toolbar")}attach(){const t=this,{instance:e}=t;e.on("Carousel.initSlides",t.onReady),e.on("done",t.onDone),e.on("reveal",t.onChange),e.on("Carousel.change",t.onChange),t.onReady(t.instance)}detach(){const t=this,{instance:e}=t;e.off("Carousel.initSlides",t.onReady),e.off("done",t.onDone),e.off("reveal",t.onChange),e.off("Carousel.change",t.onChange),t.removeContainer()}}Object.defineProperty(ft,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:ut});const mt={Hash:U,Html:it,Images:J,Slideshow:st,Thumbs:ct,Toolbar:ft},gt=function(){var t=window.getSelection();return t&&"Range"===t.type};let bt=null,vt=null;const yt=new Map;let wt=0;class xt extends m{get isIdle(){return this.idle}get isCompact(){return this.option("compact")}constructor(t=[],e={},i={}){super(e),Object.defineProperty(this,"userSlides",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"userPlugins",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"idle",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"idleTimer",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"clickTimer",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"pwt",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"ignoreFocusChange",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"state",{enumerable:!0,configurable:!0,writable:!0,value:Z.Init}),Object.defineProperty(this,"id",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"container",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"footer",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"caption",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"carousel",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"lastFocus",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"prevMouseMoveEvent",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"fsAPI",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.fsAPI=(()=>{let t,e="",i="",n="";return document.fullscreenEnabled?(e="requestFullscreen",i="exitFullscreen",n="fullscreenElement"):document.webkitFullscreenEnabled&&(e="webkitRequestFullscreen",i="webkitExitFullscreen",n="webkitFullscreenElement"),e&&(t={request:function(t){return"webkitRequestFullscreen"===e?t[e](Element.ALLOW_KEYBOARD_INPUT):t[e]()},exit:function(){return document[n]&&document[i]()},isFullscreen:function(){return document[n]}}),t})(),this.id=e.id||++wt,yt.set(this.id,this),this.userSlides=t,this.userPlugins=i,queueMicrotask((()=>{this.init()}))}init(){if(this.state===Z.Destroy)return;this.state=Z.Init,this.attachPlugins(Object.assign(Object.assign({},xt.Plugins),this.userPlugins)),this.emit("init"),!0===this.option("hideScrollbar")&&(()=>{if(!W)return;const t=document.body;if(t.classList.contains("hide-scrollbar"))return;const e=window.innerWidth-document.documentElement.getBoundingClientRect().width,i=t.currentStyle||window.getComputedStyle(t),n=parseFloat(i.marginRight);document.documentElement.style.setProperty("--fancybox-scrollbar-compensate",`${e}px`),n&&t.style.setProperty("--fancybox-body-margin",`${n}px`),t.classList.add("hide-scrollbar")})(),this.initLayout();const t=()=>{this.initCarousel(this.userSlides),this.state=Z.Ready,this.attachEvents(),this.emit("ready"),setTimeout((()=>{this.container&&this.container.setAttribute("aria-hidden","false")}),16)};this.option("Fullscreen.autoStart")&&this.fsAPI&&!this.fsAPI.isFullscreen()?this.fsAPI.request(this.container).then((()=>t())).catch((()=>t())):t()}initLayout(){var t,e;const i=this.option("parentEl")||document.body,s=n(this.localize(this.option("tpl.main")||""));s&&(s.setAttribute("id",`fancybox-${this.id}`),s.setAttribute("aria-label",this.localize("{{MODAL}}")),s.classList.toggle("is-compact",this.isCompact),S(s,this.option("mainClass")||""),this.container=s,this.footer=s.querySelector(".fancybox__footer"),i.appendChild(s),S(document.documentElement,"with-fancybox"),bt&&vt||(bt=document.createElement("span"),S(bt,"fancybox-focus-guard"),bt.setAttribute("tabindex","0"),bt.setAttribute("aria-hidden","true"),bt.setAttribute("aria-label","Focus guard"),vt=bt.cloneNode(),null===(t=s.parentElement)||void 0===t||t.insertBefore(bt,s),null===(e=s.parentElement)||void 0===e||e.append(vt)),this.option("animated")&&(S(s,"is-animated"),setTimeout((()=>{this.isClosing()||E(s,"is-animated")}),350)),this.emit("initLayout"))}initCarousel(t){const i=this.container;if(!i)return;const n=i.querySelector(".fancybox__carousel");if(!n)return;const s=this.carousel=new _(n,u({},{slides:t,transition:"fade",Panzoom:{lockAxis:this.option("dragToClose")?"xy":"x",infinite:!!this.option("dragToClose")&&"y"},Dots:!1,Navigation:{classes:{container:"fancybox__nav",button:"f-button",isNext:"is-next",isPrev:"is-prev"}},initialPage:this.option("startIndex"),l10n:this.option("l10n")},this.option("Carousel")||{}));s.on("*",((t,e,...i)=>{this.emit(`Carousel.${e}`,t,...i)})),s.on(["ready","change"],(()=>{var t;const e=this.getSlide();e&&(null===(t=e.panzoom)||void 0===t||t.updateControls()),this.manageCaption(e)})),s.on("removeSlide",((t,e)=>{e.closeBtnEl&&e.closeBtnEl.remove(),e.closeBtnEl=void 0,e.captionEl&&e.captionEl.remove(),e.captionEl=void 0,e.spinnerEl&&e.spinnerEl.remove(),e.spinnerEl=void 0,e.state=void 0})),s.on("Panzoom.touchStart",(()=>{this.isCompact||this.endIdle()})),s.on("settle",(()=>{this.idleTimer||this.isCompact||!this.option("idle")||this.setIdle(),this.option("autoFocus")&&this.checkFocus()})),this.option("dragToClose")&&(s.on("Panzoom.afterTransform",((t,i)=>{const n=this.getSlide();if(n&&e(n.el))return;const s=this.container;if(s){const t=Math.abs(i.current.f),e=t<1?"":Math.max(.5,Math.min(1,1-t/i.contentRect.fitHeight*1.5));s.style.setProperty("--fancybox-ts",e?"0s":""),s.style.setProperty("--fancybox-opacity",e+"")}})),s.on("Panzoom.touchEnd",((t,i,n)=>{var s;const o=this.getSlide();if(o&&e(o.el))return;if(i.isMobile&&document.activeElement&&-1!==["TEXTAREA","INPUT"].indexOf(null===(s=document.activeElement)||void 0===s?void 0:s.nodeName))return;const a=Math.abs(i.dragOffset.y);"y"===i.lockedAxis&&(a>=200||a>=50&&i.dragOffset.time<300)&&(n&&n.cancelable&&n.preventDefault(),this.close(n,"f-throwOut"+(i.current.f<0?"Up":"Down")))}))),s.on(["change"],(t=>{var e;let i=null===(e=this.getSlide())||void 0===e?void 0:e.triggerEl;if(i){const e=new CustomEvent("slideTo",{bubbles:!0,cancelable:!0,detail:t.page});i.dispatchEvent(e)}})),s.on(["refresh","change"],(t=>{const e=this.container;if(!e)return;for(const i of e.querySelectorAll("[data-fancybox-current-index]"))i.innerHTML=t.page+1;for(const i of e.querySelectorAll("[data-fancybox-count]"))i.innerHTML=t.pages.length;if(!t.isInfinite){for(const i of e.querySelectorAll("[data-fancybox-next]"))t.page<t.pages.length-1?(i.removeAttribute("disabled"),i.removeAttribute("tabindex")):(i.setAttribute("disabled",""),i.setAttribute("tabindex","-1"));for(const i of e.querySelectorAll("[data-fancybox-prev]"))t.page>0?(i.removeAttribute("disabled"),i.removeAttribute("tabindex")):(i.setAttribute("disabled",""),i.setAttribute("tabindex","-1"))}const i=this.getSlide();if(!i)return;let n=i.downloadSrc||"";n||"image"!==i.type||i.error||"string"!=typeof i.src||(n=i.src);for(const t of e.querySelectorAll("[data-fancybox-download]")){const e=i.downloadFilename;n?(t.removeAttribute("disabled"),t.removeAttribute("tabindex"),t.setAttribute("href",n),t.setAttribute("download",e||n),t.setAttribute("target","_blank")):(t.setAttribute("disabled",""),t.setAttribute("tabindex","-1"),t.removeAttribute("href"),t.removeAttribute("download"))}})),this.emit("initCarousel")}attachEvents(){const t=this.container;t&&(t.addEventListener("click",this.onClick,{passive:!1,capture:!1}),t.addEventListener("wheel",this.onWheel,{passive:!1,capture:!1}),document.addEventListener("keydown",this.onKeydown,{passive:!1,capture:!0}),document.addEventListener("visibilitychange",this.onVisibilityChange,!1),document.addEventListener("mousemove",this.onMousemove),this.option("trapFocus")&&document.addEventListener("focus",this.onFocus,!0),window.addEventListener("resize",this.onResize))}detachEvents(){const t=this.container;t&&(document.removeEventListener("keydown",this.onKeydown,{passive:!1,capture:!0}),t.removeEventListener("wheel",this.onWheel,{passive:!1,capture:!1}),t.removeEventListener("click",this.onClick,{passive:!1,capture:!1}),document.removeEventListener("mousemove",this.onMousemove),window.removeEventListener("resize",this.onResize),document.removeEventListener("visibilitychange",this.onVisibilityChange,!1),document.removeEventListener("focus",this.onFocus,!0))}onClick(t){var e,i;const{container:n,isCompact:s}=this;if(!n||this.isClosing())return;!s&&this.option("idle")&&this.resetIdle();const o=document.activeElement;if(gt()&&o&&n.contains(o))return;const a=t.composedPath()[0];if(a===(null===(e=this.carousel)||void 0===e?void 0:e.container))return;if(a.closest(".f-spinner")||a.closest("[data-fancybox-close]"))return t.preventDefault(),void this.close(t);if(a.closest("[data-fancybox-prev]"))return t.preventDefault(),void this.prev();if(a.closest("[data-fancybox-next]"))return t.preventDefault(),void this.next();if(s&&"image"===(null===(i=this.getSlide())||void 0===i?void 0:i.type))return void(this.clickTimer?(clearTimeout(this.clickTimer),this.clickTimer=null):this.clickTimer=setTimeout((()=>{this.toggleIdle(),this.clickTimer=null}),350));if(this.emit("click",t),t.defaultPrevented)return;let r=!1;if(a.closest(".fancybox__content")){if(o){if(o.closest("[contenteditable]"))return;a.matches(X)||o.blur()}if(gt())return;r=this.option("contentClick")}else a.closest(".fancybox__carousel")&&!a.matches(X)&&(r=this.option("backdropClick"));"close"===r?(t.preventDefault(),this.close(t)):"next"===r?(t.preventDefault(),this.next()):"prev"===r&&(t.preventDefault(),this.prev())}onWheel(t){const e=this.option("wheel",t),i="slide"===e,n=[-t.deltaX||0,-t.deltaY||0,-t.detail||0].reduce((function(t,e){return Math.abs(e)>Math.abs(t)?e:t})),s=Math.max(-1,Math.min(1,n)),o=Date.now();this.pwt&&o-this.pwt<300?i&&t.preventDefault():(this.pwt=o,this.emit("wheel",t),t.defaultPrevented||("close"===e?(t.preventDefault(),this.close(t)):"slide"===e&&(t.preventDefault(),this[s>0?"prev":"next"]())))}onKeydown(t){if(!this.isTopmost())return;this.isCompact||!this.option("idle")||this.isClosing()||this.resetIdle();const e=t.key,i=this.option("keyboard");if(!i||t.ctrlKey||t.altKey||t.shiftKey)return;const n=t.composedPath()[0],s=document.activeElement&&document.activeElement.classList,o=s&&s.contains("f-button")||n.dataset.carouselPage||n.dataset.carouselIndex;if("Escape"!==e&&!o&&x(n)){if(n.isContentEditable||-1!==["TEXTAREA","OPTION","INPUT","SELECT","VIDEO"].indexOf(n.nodeName))return}this.emit("keydown",e,t);const a=i[e];"function"==typeof this[a]&&(t.preventDefault(),this[a]())}onResize(){const t=this.container;if(!t)return;const e=this.isCompact;t.classList.toggle("is-compact",e),this.manageCaption(this.getSlide()),this.isCompact?this.clearIdle():this.endIdle(),this.emit("resize")}onFocus(t){this.isTopmost()&&this.checkFocus(t)}onMousemove(t){this.prevMouseMoveEvent=t,!this.isCompact&&this.option("idle")&&this.resetIdle()}onVisibilityChange(){"visible"===document.visibilityState?this.checkFocus():this.endIdle()}manageCloseBtn(t){const e=this.optionFor(t,"closeButton")||!1;if("auto"===e){const t=this.plugins.Toolbar;if(t&&t.state===dt.Ready)return}if(!e)return;if(!t.contentEl||t.closeBtnEl)return;const i=this.option("tpl.closeButton");if(i){const e=n(this.localize(i));t.closeBtnEl=t.contentEl.appendChild(e),t.el&&S(t.el,"has-close-btn")}}manageCaption(t){var e,i;const n="fancybox__caption",s="has-caption",o=this.container;if(!o)return;const a=this.isCompact||this.option("commonCaption"),r=!a;if(this.caption&&this.stop(this.caption),r&&this.caption&&(this.caption.remove(),this.caption=null),a&&!this.caption)for(const t of(null===(e=this.carousel)||void 0===e?void 0:e.slides)||[])t.captionEl&&(t.captionEl.remove(),t.captionEl=void 0,E(t.el,s),null===(i=t.el)||void 0===i||i.removeAttribute("aria-labelledby"));if(t||(t=this.getSlide()),!t||a&&!this.isCurrentSlide(t))return;const l=t.el;let c=this.optionFor(t,"caption","");if("string"!=typeof c||!c.length)return void(a&&this.caption&&this.animate(this.caption,"f-fadeOut",(()=>{var t;null===(t=this.caption)||void 0===t||t.remove(),this.caption=null})));let h=null;if(r){if(h=t.captionEl||null,l&&!h){const e=`fancybox__caption_${this.id}_${t.index}`;h=document.createElement("div"),S(h,n),h.setAttribute("id",e),t.captionEl=l.appendChild(h),S(l,s),l.setAttribute("aria-labelledby",e)}}else{if(h=this.caption,h||(h=o.querySelector("."+n)),!h){h=document.createElement("div"),h.dataset.fancyboxCaption="",S(h,n),h.innerHTML=c;(this.footer||o).prepend(h)}S(o,s),this.caption=h}h&&(h.innerHTML=c)}checkFocus(t){var e;const i=document.activeElement||null;i&&(null===(e=this.container)||void 0===e?void 0:e.contains(i))||this.focus(t)}focus(t){var e;if(this.ignoreFocusChange)return;const i=document.activeElement||null,n=(null==t?void 0:t.target)||null,s=this.container,o=this.getSlide();if(!s||!(null===(e=this.carousel)||void 0===e?void 0:e.viewport))return;if(!t&&i&&s.contains(i))return;const a=o&&o.state===V.Ready?o.el:null;if(!a||a.contains(i)||s===i)return;t&&t.cancelable&&t.preventDefault(),this.ignoreFocusChange=!0;const r=Array.from(s.querySelectorAll(X));let l=[],c=null;for(let t of r){const e=!t.offsetParent||t.closest('[aria-hidden="true"]'),i=a&&a.contains(t),n=!this.carousel.viewport.contains(t);t===s||(i||n)&&!e?(l.push(t),void 0!==t.dataset.origTabindex&&(t.tabIndex=parseFloat(t.dataset.origTabindex)),t.removeAttribute("data-orig-tabindex"),!t.hasAttribute("autoFocus")&&c||(c=t)):(t.dataset.origTabindex=void 0===t.dataset.origTabindex?t.getAttribute("tabindex")||void 0:t.dataset.origTabindex,t.tabIndex=-1)}let h=null;t?(!n||l.indexOf(n)<0)&&(h=c||s,l.length&&(i===vt?h=l[0]:this.lastFocus!==s&&i!==bt||(h=l[l.length-1]))):h=o&&"image"===o.type?s:c||s,h&&Y(h),this.lastFocus=document.activeElement,this.ignoreFocusChange=!1}next(){const t=this.carousel;t&&t.pages.length>1&&t.slideNext()}prev(){const t=this.carousel;t&&t.pages.length>1&&t.slidePrev()}jumpTo(...t){this.carousel&&this.carousel.slideTo(...t)}isTopmost(){var t;return(null===(t=xt.getInstance())||void 0===t?void 0:t.id)==this.id}animate(t=null,e="",i){if(!t||!e)return void(i&&i());this.stop(t);const n=s=>{s.target===t&&t.dataset.animationName&&(t.removeEventListener("animationend",n),delete t.dataset.animationName,i&&i(),E(t,e))};t.dataset.animationName=e,t.addEventListener("animationend",n),S(t,e)}stop(t){t&&t.dispatchEvent(new CustomEvent("animationend",{bubbles:!1,cancelable:!0,currentTarget:t}))}setContent(t,e="",i=!0){if(this.isClosing())return;const s=t.el;if(!s)return;let o=null;if(x(e)?o=e:(o=n(e+""),x(o)||(o=document.createElement("div"),o.innerHTML=e+"")),["img","picture","iframe","video","audio"].includes(o.nodeName.toLowerCase())){const t=document.createElement("div");t.appendChild(o),o=t}x(o)&&t.filter&&!t.error&&(o=o.querySelector(t.filter)),o&&x(o)?(S(o,"fancybox__content"),t.id&&o.setAttribute("id",t.id),"none"!==o.style.display&&"none"!==getComputedStyle(o).getPropertyValue("display")||(o.style.display=t.display||this.option("defaultDisplay")||"flex"),s.classList.add(`has-${t.error?"error":t.type||"unknown"}`),s.prepend(o),t.contentEl=o,i&&this.revealContent(t),this.manageCloseBtn(t),this.manageCaption(t)):this.setError(t,"{{ELEMENT_NOT_FOUND}}")}revealContent(t,e){const i=t.el,n=t.contentEl;i&&n&&(this.emit("reveal",t),this.hideLoading(t),t.state=V.Opening,(e=this.isOpeningSlide(t)?void 0===e?this.optionFor(t,"showClass"):e:"f-fadeIn")?this.animate(n,e,(()=>{this.done(t)})):this.done(t))}done(t){this.isClosing()||(t.state=V.Ready,this.emit("done",t),S(t.el,"is-done"),this.isCurrentSlide(t)&&this.option("autoFocus")&&queueMicrotask((()=>{this.option("autoFocus")&&(this.option("autoFocus")?this.focus():this.checkFocus())})),this.isOpeningSlide(t)&&!this.isCompact&&this.option("idle")&&this.setIdle())}isCurrentSlide(t){const e=this.getSlide();return!(!t||!e)&&e.index===t.index}isOpeningSlide(t){var e,i;return null===(null===(e=this.carousel)||void 0===e?void 0:e.prevPage)&&t.index===(null===(i=this.getSlide())||void 0===i?void 0:i.index)}showLoading(t){t.state=V.Loading;const e=t.el;if(!e)return;S(e,"is-loading"),this.emit("loading",t),t.spinnerEl||setTimeout((()=>{if(!this.isClosing()&&!t.spinnerEl&&t.state===V.Loading){let i=n(w);t.spinnerEl=i,e.prepend(i),this.animate(i,"f-fadeIn")}}),250)}hideLoading(t){const e=t.el;if(!e)return;const i=t.spinnerEl;this.isClosing()?null==i||i.remove():(E(e,"is-loading"),i&&this.animate(i,"f-fadeOut",(()=>{i.remove()})),t.state===V.Loading&&(this.emit("loaded",t),t.state=V.Ready))}setError(t,e){if(this.isClosing())return;this.emit("error"),t.error=e,this.hideLoading(t),this.clearContent(t);const i=document.createElement("div");i.classList.add("fancybox-error"),i.innerHTML=this.localize(e||"<p>{{ERROR}}</p>"),this.setContent(t,i)}clearContent(t){var e;null===(e=this.carousel)||void 0===e||e.emit("removeSlide",t),t.contentEl&&(t.contentEl.remove(),t.contentEl=void 0),t.closeBtnEl&&(t.closeBtnEl.remove(),t.closeBtnEl=void 0);const i=t.el;i&&(E(i,"is-loading"),E(i,"has-error"),E(i,"has-unknown"),E(i,`has-${t.type||"unknown"}`))}getSlide(){var t;const e=this.carousel;return(null===(t=null==e?void 0:e.pages[null==e?void 0:e.page])||void 0===t?void 0:t.slides[0])||void 0}close(t,e){if(this.isClosing())return;const i=new Event("shouldClose",{bubbles:!0,cancelable:!0});if(this.emit("shouldClose",i,t),i.defaultPrevented)return;t&&t.cancelable&&(t.preventDefault(),t.stopPropagation());const n=this.fsAPI,s=()=>{this.proceedClose(t,e)};n&&n.isFullscreen()?Promise.resolve(n.exit()).then((()=>s())):s()}clearIdle(){this.idleTimer&&clearTimeout(this.idleTimer),this.idleTimer=null}setIdle(t=!1){const e=()=>{this.clearIdle(),this.idle=!0,S(this.container,"is-idle"),this.emit("setIdle")};if(this.clearIdle(),!this.isClosing())if(t)e();else{const t=this.option("idle");t&&(this.idleTimer=setTimeout(e,t))}}endIdle(){this.clearIdle(),this.idle&&!this.isClosing()&&(this.idle=!1,E(this.container,"is-idle"),this.emit("endIdle"))}resetIdle(){this.endIdle(),this.setIdle()}toggleIdle(){this.idle?this.endIdle():this.setIdle(!0)}toggleFullscreen(){const t=this.fsAPI;t&&(t.isFullscreen()?t.exit():this.container&&t.request(this.container))}isClosing(){return[Z.Closing,Z.CustomClosing,Z.Destroy].includes(this.state)}proceedClose(t,e){var i;this.state=Z.Closing,this.clearIdle(),this.detachEvents();const n=this.container,s=this.carousel,o=this.getSlide(),a=o&&this.option("placeFocusBack")?o.triggerEl||this.option("trigger"):null;if(a&&(N(a)?Y(a):a.focus()),n&&(S(n,"is-closing"),n.setAttribute("aria-hidden","true"),this.option("animated")&&S(n,"is-animated"),n.style.pointerEvents="none"),s){s.clearTransitions(),null===(i=s.panzoom)||void 0===i||i.destroy();for(const t of s.slides){t.state=V.Closing,this.hideLoading(t);const e=t.contentEl;e&&this.stop(e);const i=null==t?void 0:t.panzoom;i&&(i.stop(),i.detachEvents(),i.detachObserver()),this.isCurrentSlide(t)||s.emit("removeSlide",t)}}this.emit("close",t),this.state!==Z.CustomClosing?(void 0===e&&o&&(e=this.optionFor(o,"hideClass")),e&&o?(this.animate(o.contentEl,e,(()=>{s&&s.emit("removeSlide",o)})),setTimeout((()=>{this.destroy()}),500)):this.destroy()):setTimeout((()=>{this.destroy()}),500)}destroy(){var t;if(this.state===Z.Destroy)return;this.state=Z.Destroy,null===(t=this.carousel)||void 0===t||t.destroy();const e=this.container;e&&e.remove(),yt.delete(this.id);const i=xt.getInstance();i?i.focus():(bt&&(bt.remove(),bt=null),vt&&(vt.remove(),vt=null),E(document.documentElement,"with-fancybox"),(()=>{if(!W)return;const t=document,e=t.body;e.classList.remove("hide-scrollbar"),e.style.setProperty("--fancybox-body-margin",""),t.documentElement.style.setProperty("--fancybox-scrollbar-compensate","")})(),this.emit("destroy"))}static bind(t,e,i){if(!W)return;let n,s="",o={};if(void 0===t?n=document.body:"string"==typeof t?(n=document.body,s=t,"object"==typeof e&&(o=e||{})):(n=t,"string"==typeof e&&(s=e),"object"==typeof i&&(o=i||{})),!n||!x(n))return;s=s||"[data-fancybox]";const a=xt.openers.get(n)||new Map;a.set(s,o),xt.openers.set(n,a),1===a.size&&n.addEventListener("click",xt.fromEvent)}static unbind(t,e){let i,n="";if("string"==typeof t?(i=document.body,n=t):(i=t,"string"==typeof e&&(n=e)),!i)return;const s=xt.openers.get(i);s&&n&&s.delete(n),n&&s||(xt.openers.delete(i),i.removeEventListener("click",xt.fromEvent))}static destroy(){let t;for(;t=xt.getInstance();)t.destroy();for(const t of xt.openers.keys())t.removeEventListener("click",xt.fromEvent);xt.openers=new Map}static fromEvent(t){if(t.defaultPrevented)return;if(t.button&&0!==t.button)return;if(t.ctrlKey||t.metaKey||t.shiftKey)return;let e=t.composedPath()[0];const i=e.closest("[data-fancybox-trigger]");if(i){const t=i.dataset.fancyboxTrigger||"",n=document.querySelectorAll(`[data-fancybox="${t}"]`),s=parseInt(i.dataset.fancyboxIndex||"",10)||0;e=n[s]||e}if(!(e&&e instanceof Element))return;let n,s,o,a;if([...xt.openers].reverse().find((([t,i])=>!(!t.contains(e)||![...i].reverse().find((([i,r])=>{let l=e.closest(i);return!!l&&(n=t,s=i,o=l,a=r,!0)}))))),!n||!s||!o)return;a=a||{},t.preventDefault(),e=o;let r=[],l=u({},q,a);l.event=t,l.trigger=e,l.delegate=i;const c=l.groupAll,h=l.groupAttr,d=h&&e?e.getAttribute(`${h}`):"";if((!e||d||c)&&(r=[].slice.call(n.querySelectorAll(s))),e&&!c&&(r=d?r.filter((t=>t.getAttribute(`${h}`)===d)):[e]),!r.length)return;const p=xt.getInstance();return p&&p.options.trigger&&r.indexOf(p.options.trigger)>-1?void 0:(e&&(l.startIndex=r.indexOf(e)),xt.fromNodes(r,l))}static fromSelector(t,e){let i=null,n="";if("string"==typeof t?(i=document.body,n=t):t instanceof HTMLElement&&"string"==typeof e&&(i=t,n=e),!i||!n)return!1;const s=xt.openers.get(i);if(!s)return!1;const o=s.get(n);return!!o&&xt.fromNodes(Array.from(i.querySelectorAll(n)),o)}static fromNodes(t,e){e=u({},q,e);const i=[];for(const n of t){const t=n.dataset||{},s=t.src||n.getAttribute("href")||n.getAttribute("currentSrc")||n.getAttribute("src")||void 0;let o;const a=e.delegate;let r;a&&i.length===e.startIndex&&(o=a instanceof HTMLImageElement?a:a.querySelector("img:not([aria-hidden])")),o||(o=n instanceof HTMLImageElement?n:n.querySelector("img:not([aria-hidden])")),o&&(r=o.currentSrc||o.src||void 0,!r&&o.dataset&&(r=o.dataset.lazySrc||o.dataset.src||void 0));const l={src:s,triggerEl:n,thumbEl:o,thumbElSrc:r,thumbSrc:r};for(const e in t)"fancybox"!==e&&(l[e]=t[e]+"");i.push(l)}return new xt(i,e)}static getInstance(t){if(t)return yt.get(t);return Array.from(yt.values()).reverse().find((t=>!t.isClosing()&&t))||null}static getSlide(){var t;return(null===(t=xt.getInstance())||void 0===t?void 0:t.getSlide())||null}static show(t=[],e={}){return new xt(t,e)}static next(){const t=xt.getInstance();t&&t.next()}static prev(){const t=xt.getInstance();t&&t.prev()}static close(t=!0,...e){if(t)for(const t of yt.values())t.close(...e);else{const t=xt.getInstance();t&&t.close(...e)}}}Object.defineProperty(xt,"version",{enumerable:!0,configurable:!0,writable:!0,value:"5.0.15"}),Object.defineProperty(xt,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:q}),Object.defineProperty(xt,"Plugins",{enumerable:!0,configurable:!0,writable:!0,value:mt}),Object.defineProperty(xt,"openers",{enumerable:!0,configurable:!0,writable:!0,value:new Map});


/***/ }),

/***/ "./node_modules/@popperjs/core/lib/createPopper.js":
/*!*********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/createPopper.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPopper": function() { return /* binding */ createPopper; },
/* harmony export */   "detectOverflow": function() { return /* reexport safe */ _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_8__["default"]; },
/* harmony export */   "popperGenerator": function() { return /* binding */ popperGenerator; }
/* harmony export */ });
/* harmony import */ var _dom_utils_getCompositeRect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom-utils/getCompositeRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js");
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dom-utils/getLayoutRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js");
/* harmony import */ var _dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-utils/listScrollParents.js */ "./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dom-utils/getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _utils_orderModifiers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/orderModifiers.js */ "./node_modules/@popperjs/core/lib/utils/orderModifiers.js");
/* harmony import */ var _utils_debounce_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/debounce.js */ "./node_modules/@popperjs/core/lib/utils/debounce.js");
/* harmony import */ var _utils_mergeByName_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/mergeByName.js */ "./node_modules/@popperjs/core/lib/utils/mergeByName.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-utils/instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");









var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(setOptionsAction) {
        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: (0,_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isElement)(reference) ? (0,_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_1__["default"])(reference) : reference.contextElement ? (0,_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_1__["default"])(reference.contextElement) : [],
          popper: (0,_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_1__["default"])(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = (0,_utils_orderModifiers_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_utils_mergeByName_js__WEBPACK_IMPORTED_MODULE_3__["default"])([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: (0,_dom_utils_getCompositeRect_js__WEBPACK_IMPORTED_MODULE_4__["default"])(reference, (0,_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_5__["default"])(popper), state.options.strategy === 'fixed'),
          popper: (0,_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_6__["default"])(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: (0,_utils_debounce_js__WEBPACK_IMPORTED_MODULE_7__["default"])(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref) {
        var name = _ref.name,
            _ref$options = _ref.options,
            options = _ref$options === void 0 ? {} : _ref$options,
            effect = _ref.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}
var createPopper = /*#__PURE__*/popperGenerator(); // eslint-disable-next-line import/no-unused-modules



/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/contains.js":
/*!***************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/contains.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ contains; }
/* harmony export */ });
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isShadowRoot)(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getBoundingClientRect; }
/* harmony export */ });
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _isLayoutViewport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isLayoutViewport.js */ "./node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js");




function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }

  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }

  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;

  if (includeScale && (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element)) {
    scaleX = element.offsetWidth > 0 ? (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_1__.round)(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_1__.round)(clientRect.height) / element.offsetHeight || 1 : 1;
  }

  var _ref = (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isElement)(element) ? (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element) : window,
      visualViewport = _ref.visualViewport;

  var addVisualOffsets = !(0,_isLayoutViewport_js__WEBPACK_IMPORTED_MODULE_3__["default"])() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width: width,
    height: height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x: x,
    y: y
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getClippingRect; }
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _getViewportRect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getViewportRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js");
/* harmony import */ var _getDocumentRect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getDocumentRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js");
/* harmony import */ var _listScrollParents_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./listScrollParents.js */ "./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js");
/* harmony import */ var _getOffsetParent_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _contains_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contains.js */ "./node_modules/@popperjs/core/lib/dom-utils/contains.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/rectToClientRect.js */ "./node_modules/@popperjs/core/lib/utils/rectToClientRect.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");















function getInnerBoundingClientRect(element, strategy) {
  var rect = (0,_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element, false, strategy === 'fixed');
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === _enums_js__WEBPACK_IMPORTED_MODULE_1__.viewport ? (0,_utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_getViewportRect_js__WEBPACK_IMPORTED_MODULE_3__["default"])(element, strategy)) : (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__.isElement)(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : (0,_utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_getDocumentRect_js__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_6__["default"])(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = (0,_listScrollParents_js__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_getParentNode_js__WEBPACK_IMPORTED_MODULE_8__["default"])(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf((0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_9__["default"])(element).position) >= 0;
  var clipperElement = canEscapeClipping && (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__.isHTMLElement)(element) ? (0,_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_10__["default"])(element) : element;

  if (!(0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__.isElement)(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__.isElement)(clippingParent) && (0,_contains_js__WEBPACK_IMPORTED_MODULE_11__["default"])(clippingParent, clipperElement) && (0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_12__["default"])(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_13__.max)(rect.top, accRect.top);
    accRect.right = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_13__.min)(rect.right, accRect.right);
    accRect.bottom = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_13__.min)(rect.bottom, accRect.bottom);
    accRect.left = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_13__.max)(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getCompositeRect; }
/* harmony export */ });
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _getNodeScroll_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getNodeScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isScrollParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");









function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_0__.round)(rect.width) / element.offsetWidth || 1;
  var scaleY = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_0__.round)(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.


function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var isOffsetParentAnElement = (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__.isHTMLElement)(offsetParent);
  var offsetParentIsScaled = (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__.isHTMLElement)(offsetParent) && isElementScaled(offsetParent);
  var documentElement = (0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(offsetParent);
  var rect = (0,_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_3__["default"])(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if ((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_4__["default"])(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    (0,_isScrollParent_js__WEBPACK_IMPORTED_MODULE_5__["default"])(documentElement)) {
      scroll = (0,_getNodeScroll_js__WEBPACK_IMPORTED_MODULE_6__["default"])(offsetParent);
    }

    if ((0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__.isHTMLElement)(offsetParent)) {
      offsets = (0,_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_3__["default"])(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = (0,_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_7__["default"])(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getComputedStyle; }
/* harmony export */ });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");

function getComputedStyle(element) {
  return (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element).getComputedStyle(element);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getDocumentElement; }
/* harmony export */ });
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return (((0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isElement)(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getDocumentRect; }
/* harmony export */ });
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js");
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWindowScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");




 // Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = (0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  var winScroll = (0,_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_2__.max)(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_2__.max)(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + (0,_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_3__["default"])(element);
  var y = -winScroll.scrollTop;

  if ((0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__["default"])(body || html).direction === 'rtl') {
    x += (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_2__.max)(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getHTMLElementScroll; }
/* harmony export */ });
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getLayoutRect; }
/* harmony export */ });
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
 // Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = (0,_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js":
/*!******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getNodeName; }
/* harmony export */ });
function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getNodeScroll; }
/* harmony export */ });
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindowScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js");
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _getHTMLElementScroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getHTMLElementScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js");




function getNodeScroll(node) {
  if (node === (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node) || !(0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__.isHTMLElement)(node)) {
    return (0,_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__["default"])(node);
  } else {
    return (0,_getHTMLElementScroll_js__WEBPACK_IMPORTED_MODULE_3__["default"])(node);
  }
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getOffsetParent; }
/* harmony export */ });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _isTableElement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isTableElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js");
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _utils_userAgent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/userAgent.js */ "./node_modules/@popperjs/core/lib/utils/userAgent.js");








function getTrueOffsetParent(element) {
  if (!(0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element) || // https://github.com/popperjs/popper-core/issues/837
  (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = /firefox/i.test((0,_utils_userAgent_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
  var isIE = /Trident/i.test((0,_utils_userAgent_js__WEBPACK_IMPORTED_MODULE_2__["default"])());

  if (isIE && (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = (0,_getParentNode_js__WEBPACK_IMPORTED_MODULE_3__["default"])(element);

  if ((0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isShadowRoot)(currentNode)) {
    currentNode = currentNode.host;
  }

  while ((0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(currentNode) && ['html', 'body'].indexOf((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_4__["default"])(currentNode)) < 0) {
    var css = (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_5__["default"])(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && (0,_isTableElement_js__WEBPACK_IMPORTED_MODULE_6__["default"])(offsetParent) && (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && ((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_4__["default"])(offsetParent) === 'html' || (0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_4__["default"])(offsetParent) === 'body' && (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getParentNode; }
/* harmony export */ });
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");



function getParentNode(element) {
  if ((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__.isShadowRoot)(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    (0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element) // fallback

  );
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getScrollParent; }
/* harmony export */ });
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isScrollParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");




function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if ((0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__.isHTMLElement)(node) && (0,_isScrollParent_js__WEBPACK_IMPORTED_MODULE_2__["default"])(node)) {
    return node;
  }

  return getScrollParent((0,_getParentNode_js__WEBPACK_IMPORTED_MODULE_3__["default"])(node));
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getViewportRect; }
/* harmony export */ });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js");
/* harmony import */ var _isLayoutViewport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isLayoutViewport.js */ "./node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js");




function getViewportRect(element, strategy) {
  var win = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  var html = (0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = (0,_isLayoutViewport_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

    if (layoutViewport || !layoutViewport && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + (0,_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_3__["default"])(element),
    y: y
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js":
/*!****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getWindow.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getWindow; }
/* harmony export */ });
function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getWindowScroll; }
/* harmony export */ });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");

function getWindowScroll(node) {
  var win = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getWindowScrollBarX; }
/* harmony export */ });
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindowScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js");



function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return (0,_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element)).left + (0,_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element).scrollLeft;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isElement": function() { return /* binding */ isElement; },
/* harmony export */   "isHTMLElement": function() { return /* binding */ isHTMLElement; },
/* harmony export */   "isShadowRoot": function() { return /* binding */ isShadowRoot; }
/* harmony export */ });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");


function isElement(node) {
  var OwnElement = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}



/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ isLayoutViewport; }
/* harmony export */ });
/* harmony import */ var _utils_userAgent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/userAgent.js */ "./node_modules/@popperjs/core/lib/utils/userAgent.js");

function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test((0,_utils_userAgent_js__WEBPACK_IMPORTED_MODULE_0__["default"])());
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ isScrollParent; }
/* harmony export */ });
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ isTableElement; }
/* harmony export */ });
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element)) >= 0;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js":
/*!************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ listScrollParents; }
/* harmony export */ });
/* harmony import */ var _getScrollParent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getScrollParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js");
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isScrollParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js");




/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = (0,_getScrollParent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], (0,_isScrollParent_js__WEBPACK_IMPORTED_MODULE_2__["default"])(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents((0,_getParentNode_js__WEBPACK_IMPORTED_MODULE_3__["default"])(target)));
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/enums.js":
/*!**************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/enums.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "afterMain": function() { return /* binding */ afterMain; },
/* harmony export */   "afterRead": function() { return /* binding */ afterRead; },
/* harmony export */   "afterWrite": function() { return /* binding */ afterWrite; },
/* harmony export */   "auto": function() { return /* binding */ auto; },
/* harmony export */   "basePlacements": function() { return /* binding */ basePlacements; },
/* harmony export */   "beforeMain": function() { return /* binding */ beforeMain; },
/* harmony export */   "beforeRead": function() { return /* binding */ beforeRead; },
/* harmony export */   "beforeWrite": function() { return /* binding */ beforeWrite; },
/* harmony export */   "bottom": function() { return /* binding */ bottom; },
/* harmony export */   "clippingParents": function() { return /* binding */ clippingParents; },
/* harmony export */   "end": function() { return /* binding */ end; },
/* harmony export */   "left": function() { return /* binding */ left; },
/* harmony export */   "main": function() { return /* binding */ main; },
/* harmony export */   "modifierPhases": function() { return /* binding */ modifierPhases; },
/* harmony export */   "placements": function() { return /* binding */ placements; },
/* harmony export */   "popper": function() { return /* binding */ popper; },
/* harmony export */   "read": function() { return /* binding */ read; },
/* harmony export */   "reference": function() { return /* binding */ reference; },
/* harmony export */   "right": function() { return /* binding */ right; },
/* harmony export */   "start": function() { return /* binding */ start; },
/* harmony export */   "top": function() { return /* binding */ top; },
/* harmony export */   "variationPlacements": function() { return /* binding */ variationPlacements; },
/* harmony export */   "viewport": function() { return /* binding */ viewport; },
/* harmony export */   "write": function() { return /* binding */ write; }
/* harmony export */ });
var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "afterMain": function() { return /* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.afterMain; },
/* harmony export */   "afterRead": function() { return /* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.afterRead; },
/* harmony export */   "afterWrite": function() { return /* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.afterWrite; },
/* harmony export */   "applyStyles": function() { return /* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.applyStyles; },
/* harmony export */   "arrow": function() { return /* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.arrow; },
/* harmony export */   "auto": function() { return /* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.auto; },
/* harmony export */   "basePlacements": function() { return /* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.basePlacements; },
/* harmony export */   "beforeMain": function() { return /* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.beforeMain; },
/* harmony export */   "beforeRead": function() { return /* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.beforeRead; },
/* harmony export */   "beforeWrite": function() { return /* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.beforeWrite; },
/* harmony export */   "bottom": function() { return /* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.bottom; },
/* harmony export */   "clippingParents": function() { return /* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.clippingParents; },
/* harmony export */   "computeStyles": function() { return /* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.computeStyles; },
/* harmony export */   "createPopper": function() { return /* reexport safe */ _popper_js__WEBPACK_IMPORTED_MODULE_4__.createPopper; },
/* harmony export */   "createPopperBase": function() { return /* reexport safe */ _createPopper_js__WEBPACK_IMPORTED_MODULE_2__.createPopper; },
/* harmony export */   "createPopperLite": function() { return /* reexport safe */ _popper_lite_js__WEBPACK_IMPORTED_MODULE_5__.createPopper; },
/* harmony export */   "detectOverflow": function() { return /* reexport safe */ _createPopper_js__WEBPACK_IMPORTED_MODULE_3__["default"]; },
/* harmony export */   "end": function() { return /* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.end; },
/* harmony export */   "eventListeners": function() { return /* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.eventListeners; },
/* harmony export */   "flip": function() { return /* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.flip; },
/* harmony export */   "hide": function() { return /* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.hide; },
/* harmony export */   "left": function() { return /* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.left; },
/* harmony export */   "main": function() { return /* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.main; },
/* harmony export */   "modifierPhases": function() { return /* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.modifierPhases; },
/* harmony export */   "offset": function() { return /* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.offset; },
/* harmony export */   "placements": function() { return /* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.placements; },
/* harmony export */   "popper": function() { return /* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper; },
/* harmony export */   "popperGenerator": function() { return /* reexport safe */ _createPopper_js__WEBPACK_IMPORTED_MODULE_2__.popperGenerator; },
/* harmony export */   "popperOffsets": function() { return /* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.popperOffsets; },
/* harmony export */   "preventOverflow": function() { return /* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.preventOverflow; },
/* harmony export */   "read": function() { return /* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.read; },
/* harmony export */   "reference": function() { return /* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.reference; },
/* harmony export */   "right": function() { return /* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.right; },
/* harmony export */   "start": function() { return /* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.start; },
/* harmony export */   "top": function() { return /* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.top; },
/* harmony export */   "variationPlacements": function() { return /* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.variationPlacements; },
/* harmony export */   "viewport": function() { return /* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.viewport; },
/* harmony export */   "write": function() { return /* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.write; }
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers/index.js */ "./node_modules/@popperjs/core/lib/modifiers/index.js");
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/@popperjs/core/lib/createPopper.js");
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _popper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popper.js */ "./node_modules/@popperjs/core/lib/popper.js");
/* harmony import */ var _popper_lite_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popper-lite.js */ "./node_modules/@popperjs/core/lib/popper-lite.js");

 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules



/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/applyStyles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/applyStyles.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-utils/getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-utils/instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");

 // This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!(0,_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element) || !(0,_dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!(0,_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element) || !(0,_dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect,
  requires: ['computeStyles']
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/arrow.js":
/*!************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/arrow.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom-utils/getLayoutRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js");
/* harmony import */ var _dom_utils_contains_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dom-utils/contains.js */ "./node_modules/@popperjs/core/lib/dom-utils/contains.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getMainAxisFromPlacement.js */ "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
/* harmony import */ var _utils_within_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/within.js */ "./node_modules/@popperjs/core/lib/utils/within.js");
/* harmony import */ var _utils_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/mergePaddingObject.js */ "./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js");
/* harmony import */ var _utils_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/expandToHashMap.js */ "./node_modules/@popperjs/core/lib/utils/expandToHashMap.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");








 // eslint-disable-next-line import/no-unused-modules

var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return (0,_utils_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(typeof padding !== 'number' ? padding : (0,_utils_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_1__["default"])(padding, _enums_js__WEBPACK_IMPORTED_MODULE_2__.basePlacements));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(state.placement);
  var axis = (0,_utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_4__["default"])(basePlacement);
  var isVertical = [_enums_js__WEBPACK_IMPORTED_MODULE_2__.left, _enums_js__WEBPACK_IMPORTED_MODULE_2__.right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = (0,_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_5__["default"])(arrowElement);
  var minProp = axis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_2__.top : _enums_js__WEBPACK_IMPORTED_MODULE_2__.left;
  var maxProp = axis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_2__.bottom : _enums_js__WEBPACK_IMPORTED_MODULE_2__.right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = (0,_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_6__["default"])(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = (0,_utils_within_js__WEBPACK_IMPORTED_MODULE_7__.within)(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (!(0,_dom_utils_contains_js__WEBPACK_IMPORTED_MODULE_8__["default"])(state.elements.popper, arrowElement)) {
    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/computeStyles.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mapToStyles": function() { return /* binding */ mapToStyles; }
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom-utils/getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dom-utils/getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom-utils/getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_getVariation_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");







 // eslint-disable-next-line import/no-unused-modules

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref, win) {
  var x = _ref.x,
      y = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_0__.round)(x * dpr) / dpr || 0,
    y: (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_0__.round)(y * dpr) / dpr || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      variation = _ref2.variation,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets,
      isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x,
      x = _offsets$x === void 0 ? 0 : _offsets$x,
      _offsets$y = offsets.y,
      y = _offsets$y === void 0 ? 0 : _offsets$y;

  var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
    x: x,
    y: y
  }) : {
    x: x,
    y: y
  };

  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = _enums_js__WEBPACK_IMPORTED_MODULE_1__.left;
  var sideY = _enums_js__WEBPACK_IMPORTED_MODULE_1__.top;
  var win = window;

  if (adaptive) {
    var offsetParent = (0,_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_2__["default"])(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === (0,_dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_3__["default"])(popper)) {
      offsetParent = (0,_dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_4__["default"])(popper);

      if ((0,_dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_5__["default"])(offsetParent).position !== 'static' && position === 'absolute') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === _enums_js__WEBPACK_IMPORTED_MODULE_1__.top || (placement === _enums_js__WEBPACK_IMPORTED_MODULE_1__.left || placement === _enums_js__WEBPACK_IMPORTED_MODULE_1__.right) && variation === _enums_js__WEBPACK_IMPORTED_MODULE_1__.end) {
      sideY = _enums_js__WEBPACK_IMPORTED_MODULE_1__.bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : // $FlowFixMe[prop-missing]
      offsetParent[heightProp];
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === _enums_js__WEBPACK_IMPORTED_MODULE_1__.left || (placement === _enums_js__WEBPACK_IMPORTED_MODULE_1__.top || placement === _enums_js__WEBPACK_IMPORTED_MODULE_1__.bottom) && variation === _enums_js__WEBPACK_IMPORTED_MODULE_1__.end) {
      sideX = _enums_js__WEBPACK_IMPORTED_MODULE_1__.right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : // $FlowFixMe[prop-missing]
      offsetParent[widthProp];
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x: x,
    y: y
  }, (0,_dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_3__["default"])(popper)) : {
    x: x,
    y: y
  };

  x = _ref4.x;
  y = _ref4.y;

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref5) {
  var state = _ref5.state,
      options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_6__["default"])(state.placement),
    variation: (0,_utils_getVariation_js__WEBPACK_IMPORTED_MODULE_7__["default"])(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration,
    isFixed: state.options.strategy === 'fixed'
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/eventListeners.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-utils/getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
 // eslint-disable-next-line import/no-unused-modules

var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = (0,_dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/flip.js":
/*!***********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/flip.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getOppositePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getOppositeVariationPlacement.js */ "./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _utils_computeAutoPlacement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/computeAutoPlacement.js */ "./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _utils_getVariation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");






 // eslint-disable-next-line import/no-unused-modules

function getExpandedFallbackPlacements(placement) {
  if ((0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_1__.auto) {
    return [];
  }

  var oppositePlacement = (0,_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(placement);
  return [(0,_utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(placement), oppositePlacement, (0,_utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [(0,_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat((0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_1__.auto ? (0,_utils_computeAutoPlacement_js__WEBPACK_IMPORTED_MODULE_4__["default"])(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement);

    var isStartVariation = (0,_utils_getVariation_js__WEBPACK_IMPORTED_MODULE_5__["default"])(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_1__.start;
    var isVertical = [_enums_js__WEBPACK_IMPORTED_MODULE_1__.top, _enums_js__WEBPACK_IMPORTED_MODULE_1__.bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = (0,_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_6__["default"])(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? _enums_js__WEBPACK_IMPORTED_MODULE_1__.right : _enums_js__WEBPACK_IMPORTED_MODULE_1__.left : isStartVariation ? _enums_js__WEBPACK_IMPORTED_MODULE_1__.bottom : _enums_js__WEBPACK_IMPORTED_MODULE_1__.top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = (0,_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(mainVariationSide);
    }

    var altVariationSide = (0,_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/hide.js":
/*!***********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/hide.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");



function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [_enums_js__WEBPACK_IMPORTED_MODULE_0__.top, _enums_js__WEBPACK_IMPORTED_MODULE_0__.right, _enums_js__WEBPACK_IMPORTED_MODULE_0__.bottom, _enums_js__WEBPACK_IMPORTED_MODULE_0__.left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = (0,_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = (0,_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/index.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyStyles": function() { return /* reexport safe */ _applyStyles_js__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   "arrow": function() { return /* reexport safe */ _arrow_js__WEBPACK_IMPORTED_MODULE_1__["default"]; },
/* harmony export */   "computeStyles": function() { return /* reexport safe */ _computeStyles_js__WEBPACK_IMPORTED_MODULE_2__["default"]; },
/* harmony export */   "eventListeners": function() { return /* reexport safe */ _eventListeners_js__WEBPACK_IMPORTED_MODULE_3__["default"]; },
/* harmony export */   "flip": function() { return /* reexport safe */ _flip_js__WEBPACK_IMPORTED_MODULE_4__["default"]; },
/* harmony export */   "hide": function() { return /* reexport safe */ _hide_js__WEBPACK_IMPORTED_MODULE_5__["default"]; },
/* harmony export */   "offset": function() { return /* reexport safe */ _offset_js__WEBPACK_IMPORTED_MODULE_6__["default"]; },
/* harmony export */   "popperOffsets": function() { return /* reexport safe */ _popperOffsets_js__WEBPACK_IMPORTED_MODULE_7__["default"]; },
/* harmony export */   "preventOverflow": function() { return /* reexport safe */ _preventOverflow_js__WEBPACK_IMPORTED_MODULE_8__["default"]; }
/* harmony export */ });
/* harmony import */ var _applyStyles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./applyStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/applyStyles.js");
/* harmony import */ var _arrow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrow.js */ "./node_modules/@popperjs/core/lib/modifiers/arrow.js");
/* harmony import */ var _computeStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./computeStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js");
/* harmony import */ var _eventListeners_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventListeners.js */ "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js");
/* harmony import */ var _flip_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./flip.js */ "./node_modules/@popperjs/core/lib/modifiers/flip.js");
/* harmony import */ var _hide_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hide.js */ "./node_modules/@popperjs/core/lib/modifiers/hide.js");
/* harmony import */ var _offset_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offset.js */ "./node_modules/@popperjs/core/lib/modifiers/offset.js");
/* harmony import */ var _popperOffsets_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./popperOffsets.js */ "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js");
/* harmony import */ var _preventOverflow_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./preventOverflow.js */ "./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js");










/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/offset.js":
/*!*************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/offset.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "distanceAndSkiddingToXY": function() { return /* binding */ distanceAndSkiddingToXY; }
/* harmony export */ });
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");

 // eslint-disable-next-line import/no-unused-modules

function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement);
  var invertDistance = [_enums_js__WEBPACK_IMPORTED_MODULE_1__.left, _enums_js__WEBPACK_IMPORTED_MODULE_1__.top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [_enums_js__WEBPACK_IMPORTED_MODULE_1__.left, _enums_js__WEBPACK_IMPORTED_MODULE_1__.right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = _enums_js__WEBPACK_IMPORTED_MODULE_1__.placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_computeOffsets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/computeOffsets.js */ "./node_modules/@popperjs/core/lib/utils/computeOffsets.js");


function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = (0,_utils_computeOffsets_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getMainAxisFromPlacement.js */ "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
/* harmony import */ var _utils_getAltAxis_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getAltAxis.js */ "./node_modules/@popperjs/core/lib/utils/getAltAxis.js");
/* harmony import */ var _utils_within_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/within.js */ "./node_modules/@popperjs/core/lib/utils/within.js");
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom-utils/getLayoutRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _utils_getVariation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _utils_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/getFreshSideObject.js */ "./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");












function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = (0,_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state.placement);
  var variation = (0,_utils_getVariation_js__WEBPACK_IMPORTED_MODULE_2__["default"])(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = (0,_utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(basePlacement);
  var altAxis = (0,_utils_getAltAxis_js__WEBPACK_IMPORTED_MODULE_4__["default"])(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis) {
    var _offsetModifierState$;

    var mainSide = mainAxis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_5__.top : _enums_js__WEBPACK_IMPORTED_MODULE_5__.left;
    var altSide = mainAxis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_5__.bottom : _enums_js__WEBPACK_IMPORTED_MODULE_5__.right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min = offset + overflow[mainSide];
    var max = offset - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === _enums_js__WEBPACK_IMPORTED_MODULE_5__.start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === _enums_js__WEBPACK_IMPORTED_MODULE_5__.start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? (0,_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_6__["default"])(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : (0,_utils_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_7__["default"])();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = (0,_utils_within_js__WEBPACK_IMPORTED_MODULE_8__.within)(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && (0,_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_9__["default"])(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset + maxOffset - offsetModifierValue;
    var preventedOffset = (0,_utils_within_js__WEBPACK_IMPORTED_MODULE_8__.within)(tether ? (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_10__.min)(min, tetherMin) : min, offset, tether ? (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_10__.max)(max, tetherMax) : max);
    popperOffsets[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset;
  }

  if (checkAltAxis) {
    var _offsetModifierState$2;

    var _mainSide = mainAxis === 'x' ? _enums_js__WEBPACK_IMPORTED_MODULE_5__.top : _enums_js__WEBPACK_IMPORTED_MODULE_5__.left;

    var _altSide = mainAxis === 'x' ? _enums_js__WEBPACK_IMPORTED_MODULE_5__.bottom : _enums_js__WEBPACK_IMPORTED_MODULE_5__.right;

    var _offset = popperOffsets[altAxis];

    var _len = altAxis === 'y' ? 'height' : 'width';

    var _min = _offset + overflow[_mainSide];

    var _max = _offset - overflow[_altSide];

    var isOriginSide = [_enums_js__WEBPACK_IMPORTED_MODULE_5__.top, _enums_js__WEBPACK_IMPORTED_MODULE_5__.left].indexOf(basePlacement) !== -1;

    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;

    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;

    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;

    var _preventedOffset = tether && isOriginSide ? (0,_utils_within_js__WEBPACK_IMPORTED_MODULE_8__.withinMaxClamp)(_tetherMin, _offset, _tetherMax) : (0,_utils_within_js__WEBPACK_IMPORTED_MODULE_8__.within)(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);

    popperOffsets[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/popper-lite.js":
/*!********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/popper-lite.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPopper": function() { return /* binding */ createPopper; },
/* harmony export */   "defaultModifiers": function() { return /* binding */ defaultModifiers; },
/* harmony export */   "detectOverflow": function() { return /* reexport safe */ _createPopper_js__WEBPACK_IMPORTED_MODULE_5__["default"]; },
/* harmony export */   "popperGenerator": function() { return /* reexport safe */ _createPopper_js__WEBPACK_IMPORTED_MODULE_4__.popperGenerator; }
/* harmony export */ });
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/@popperjs/core/lib/createPopper.js");
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modifiers/eventListeners.js */ "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js");
/* harmony import */ var _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers/popperOffsets.js */ "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js");
/* harmony import */ var _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modifiers/computeStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js");
/* harmony import */ var _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modifiers/applyStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/applyStyles.js");





var defaultModifiers = [_modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__["default"], _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_1__["default"], _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_2__["default"], _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_3__["default"]];
var createPopper = /*#__PURE__*/(0,_createPopper_js__WEBPACK_IMPORTED_MODULE_4__.popperGenerator)({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules



/***/ }),

/***/ "./node_modules/@popperjs/core/lib/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/popper.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyStyles": function() { return /* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.applyStyles; },
/* harmony export */   "arrow": function() { return /* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.arrow; },
/* harmony export */   "computeStyles": function() { return /* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.computeStyles; },
/* harmony export */   "createPopper": function() { return /* binding */ createPopper; },
/* harmony export */   "createPopperLite": function() { return /* reexport safe */ _popper_lite_js__WEBPACK_IMPORTED_MODULE_11__.createPopper; },
/* harmony export */   "defaultModifiers": function() { return /* binding */ defaultModifiers; },
/* harmony export */   "detectOverflow": function() { return /* reexport safe */ _createPopper_js__WEBPACK_IMPORTED_MODULE_10__["default"]; },
/* harmony export */   "eventListeners": function() { return /* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.eventListeners; },
/* harmony export */   "flip": function() { return /* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.flip; },
/* harmony export */   "hide": function() { return /* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.hide; },
/* harmony export */   "offset": function() { return /* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.offset; },
/* harmony export */   "popperGenerator": function() { return /* reexport safe */ _createPopper_js__WEBPACK_IMPORTED_MODULE_9__.popperGenerator; },
/* harmony export */   "popperOffsets": function() { return /* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.popperOffsets; },
/* harmony export */   "preventOverflow": function() { return /* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.preventOverflow; }
/* harmony export */ });
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/@popperjs/core/lib/createPopper.js");
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modifiers/eventListeners.js */ "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js");
/* harmony import */ var _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers/popperOffsets.js */ "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js");
/* harmony import */ var _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modifiers/computeStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js");
/* harmony import */ var _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modifiers/applyStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/applyStyles.js");
/* harmony import */ var _modifiers_offset_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modifiers/offset.js */ "./node_modules/@popperjs/core/lib/modifiers/offset.js");
/* harmony import */ var _modifiers_flip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modifiers/flip.js */ "./node_modules/@popperjs/core/lib/modifiers/flip.js");
/* harmony import */ var _modifiers_preventOverflow_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modifiers/preventOverflow.js */ "./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js");
/* harmony import */ var _modifiers_arrow_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modifiers/arrow.js */ "./node_modules/@popperjs/core/lib/modifiers/arrow.js");
/* harmony import */ var _modifiers_hide_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modifiers/hide.js */ "./node_modules/@popperjs/core/lib/modifiers/hide.js");
/* harmony import */ var _popper_lite_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./popper-lite.js */ "./node_modules/@popperjs/core/lib/popper-lite.js");
/* harmony import */ var _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modifiers/index.js */ "./node_modules/@popperjs/core/lib/modifiers/index.js");










var defaultModifiers = [_modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__["default"], _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_1__["default"], _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_2__["default"], _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_3__["default"], _modifiers_offset_js__WEBPACK_IMPORTED_MODULE_4__["default"], _modifiers_flip_js__WEBPACK_IMPORTED_MODULE_5__["default"], _modifiers_preventOverflow_js__WEBPACK_IMPORTED_MODULE_6__["default"], _modifiers_arrow_js__WEBPACK_IMPORTED_MODULE_7__["default"], _modifiers_hide_js__WEBPACK_IMPORTED_MODULE_8__["default"]];
var createPopper = /*#__PURE__*/(0,_createPopper_js__WEBPACK_IMPORTED_MODULE_9__.popperGenerator)({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules



/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ computeAutoPlacement; }
/* harmony export */ });
/* harmony import */ var _getVariation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _detectOverflow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");




function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.placements : _options$allowedAutoP;
  var variation = (0,_getVariation_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement);
  var placements = variation ? flipVariations ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.variationPlacements : _enums_js__WEBPACK_IMPORTED_MODULE_0__.variationPlacements.filter(function (placement) {
    return (0,_getVariation_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement) === variation;
  }) : _enums_js__WEBPACK_IMPORTED_MODULE_0__.basePlacements;
  var allowedPlacements = placements.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements;
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = (0,_detectOverflow_js__WEBPACK_IMPORTED_MODULE_2__["default"])(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[(0,_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/computeOffsets.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/computeOffsets.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ computeOffsets; }
/* harmony export */ });
/* harmony import */ var _getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _getVariation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getMainAxisFromPlacement.js */ "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");




function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? (0,_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement) : null;
  var variation = placement ? (0,_getVariation_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case _enums_js__WEBPACK_IMPORTED_MODULE_2__.top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case _enums_js__WEBPACK_IMPORTED_MODULE_2__.bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case _enums_js__WEBPACK_IMPORTED_MODULE_2__.right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case _enums_js__WEBPACK_IMPORTED_MODULE_2__.left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? (0,_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case _enums_js__WEBPACK_IMPORTED_MODULE_2__.start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case _enums_js__WEBPACK_IMPORTED_MODULE_2__.end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;

      default:
    }
  }

  return offsets;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/debounce.js":
/*!***********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/debounce.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ debounce; }
/* harmony export */ });
function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/detectOverflow.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ detectOverflow; }
/* harmony export */ });
/* harmony import */ var _dom_utils_getClippingRect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom-utils/getClippingRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js");
/* harmony import */ var _dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom-utils/getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _dom_utils_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom-utils/getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _computeOffsets_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./computeOffsets.js */ "./node_modules/@popperjs/core/lib/utils/computeOffsets.js");
/* harmony import */ var _rectToClientRect_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rectToClientRect.js */ "./node_modules/@popperjs/core/lib/utils/rectToClientRect.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dom-utils/instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mergePaddingObject.js */ "./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js");
/* harmony import */ var _expandToHashMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expandToHashMap.js */ "./node_modules/@popperjs/core/lib/utils/expandToHashMap.js");








 // eslint-disable-next-line import/no-unused-modules

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$strategy = _options.strategy,
      strategy = _options$strategy === void 0 ? state.strategy : _options$strategy,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = (0,_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_1__["default"])(typeof padding !== 'number' ? padding : (0,_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_2__["default"])(padding, _enums_js__WEBPACK_IMPORTED_MODULE_0__.basePlacements));
  var altContext = elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.reference : _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = (0,_dom_utils_getClippingRect_js__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__.isElement)(element) ? element : element.contextElement || (0,_dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = (0,_dom_utils_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_6__["default"])(state.elements.reference);
  var popperOffsets = (0,_computeOffsets_js__WEBPACK_IMPORTED_MODULE_7__["default"])({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = (0,_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_8__["default"])(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [_enums_js__WEBPACK_IMPORTED_MODULE_0__.right, _enums_js__WEBPACK_IMPORTED_MODULE_0__.bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [_enums_js__WEBPACK_IMPORTED_MODULE_0__.top, _enums_js__WEBPACK_IMPORTED_MODULE_0__.bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/expandToHashMap.js":
/*!******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/expandToHashMap.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ expandToHashMap; }
/* harmony export */ });
function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getAltAxis.js":
/*!*************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getAltAxis.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getAltAxis; }
/* harmony export */ });
function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getBasePlacement.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getBasePlacement; }
/* harmony export */ });

function getBasePlacement(placement) {
  return placement.split('-')[0];
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getFreshSideObject; }
/* harmony export */ });
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getMainAxisFromPlacement; }
/* harmony export */ });
function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getOppositePlacement; }
/* harmony export */ });
var hash = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getOppositeVariationPlacement; }
/* harmony export */ });
var hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getVariation.js":
/*!***************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getVariation.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getVariation; }
/* harmony export */ });
function getVariation(placement) {
  return placement.split('-')[1];
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/math.js":
/*!*******************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/math.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "max": function() { return /* binding */ max; },
/* harmony export */   "min": function() { return /* binding */ min; },
/* harmony export */   "round": function() { return /* binding */ round; }
/* harmony export */ });
var max = Math.max;
var min = Math.min;
var round = Math.round;

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/mergeByName.js":
/*!**************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/mergeByName.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ mergeByName; }
/* harmony export */ });
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ mergePaddingObject; }
/* harmony export */ });
/* harmony import */ var _getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getFreshSideObject.js */ "./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js");

function mergePaddingObject(paddingObject) {
  return Object.assign({}, (0,_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(), paddingObject);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/orderModifiers.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/orderModifiers.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ orderModifiers; }
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
 // source: https://stackoverflow.com/questions/49875255

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return _enums_js__WEBPACK_IMPORTED_MODULE_0__.modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/rectToClientRect.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/rectToClientRect.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ rectToClientRect; }
/* harmony export */ });
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/userAgent.js":
/*!************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/userAgent.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getUAString; }
/* harmony export */ });
function getUAString() {
  var uaData = navigator.userAgentData;

  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function (item) {
      return item.brand + "/" + item.version;
    }).join(' ');
  }

  return navigator.userAgent;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/within.js":
/*!*********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/within.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "within": function() { return /* binding */ within; },
/* harmony export */   "withinMaxClamp": function() { return /* binding */ withinMaxClamp; }
/* harmony export */ });
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");

function within(min, value, max) {
  return (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.max)(min, (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.min)(value, max));
}
function withinMaxClamp(min, value, max) {
  var v = within(min, value, max);
  return v > max ? max : v;
}

/***/ }),

/***/ "./node_modules/bootstrap/js/dist/base-component.js":
/*!**********************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/base-component.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap base-component.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ./dom/data */ "./node_modules/bootstrap/js/dist/dom/data.js"), __webpack_require__(/*! ./util/index */ "./node_modules/bootstrap/js/dist/util/index.js"), __webpack_require__(/*! ./dom/event-handler */ "./node_modules/bootstrap/js/dist/dom/event-handler.js"), __webpack_require__(/*! ./util/config */ "./node_modules/bootstrap/js/dist/util/config.js")) :
  0;
})(this, (function (Data, index, EventHandler, Config) { 'use strict';

  const _interopDefaultLegacy = e => e && typeof e === 'object' && 'default' in e ? e : { default: e };

  const Data__default = /*#__PURE__*/_interopDefaultLegacy(Data);
  const EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);
  const Config__default = /*#__PURE__*/_interopDefaultLegacy(Config);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): base-component.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const VERSION = '5.2.3';
  /**
   * Class definition
   */

  class BaseComponent extends Config__default.default {
    constructor(element, config) {
      super();
      element = index.getElement(element);

      if (!element) {
        return;
      }

      this._element = element;
      this._config = this._getConfig(config);
      Data__default.default.set(this._element, this.constructor.DATA_KEY, this);
    } // Public


    dispose() {
      Data__default.default.remove(this._element, this.constructor.DATA_KEY);
      EventHandler__default.default.off(this._element, this.constructor.EVENT_KEY);

      for (const propertyName of Object.getOwnPropertyNames(this)) {
        this[propertyName] = null;
      }
    }

    _queueCallback(callback, element, isAnimated = true) {
      index.executeAfterTransition(callback, element, isAnimated);
    }

    _getConfig(config) {
      config = this._mergeConfigObj(config, this._element);
      config = this._configAfterMerge(config);

      this._typeCheckConfig(config);

      return config;
    } // Static


    static getInstance(element) {
      return Data__default.default.get(index.getElement(element), this.DATA_KEY);
    }

    static getOrCreateInstance(element, config = {}) {
      return this.getInstance(element) || new this(element, typeof config === 'object' ? config : null);
    }

    static get VERSION() {
      return VERSION;
    }

    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }

    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }

    static eventName(name) {
      return `${name}${this.EVENT_KEY}`;
    }

  }

  return BaseComponent;

}));
//# sourceMappingURL=base-component.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/button.js":
/*!**************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/button.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap button.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ./util/index */ "./node_modules/bootstrap/js/dist/util/index.js"), __webpack_require__(/*! ./dom/event-handler */ "./node_modules/bootstrap/js/dist/dom/event-handler.js"), __webpack_require__(/*! ./base-component */ "./node_modules/bootstrap/js/dist/base-component.js")) :
  0;
})(this, (function (index, EventHandler, BaseComponent) { 'use strict';

  const _interopDefaultLegacy = e => e && typeof e === 'object' && 'default' in e ? e : { default: e };

  const EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);
  const BaseComponent__default = /*#__PURE__*/_interopDefaultLegacy(BaseComponent);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): button.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const NAME = 'button';
  const DATA_KEY = 'bs.button';
  const EVENT_KEY = `.${DATA_KEY}`;
  const DATA_API_KEY = '.data-api';
  const CLASS_NAME_ACTIVE = 'active';
  const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="button"]';
  const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
  /**
   * Class definition
   */

  class Button extends BaseComponent__default.default {
    // Getters
    static get NAME() {
      return NAME;
    } // Public


    toggle() {
      // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
      this._element.setAttribute('aria-pressed', this._element.classList.toggle(CLASS_NAME_ACTIVE));
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = Button.getOrCreateInstance(this);

        if (config === 'toggle') {
          data[config]();
        }
      });
    }

  }
  /**
   * Data API implementation
   */


  EventHandler__default.default.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, event => {
    event.preventDefault();
    const button = event.target.closest(SELECTOR_DATA_TOGGLE);
    const data = Button.getOrCreateInstance(button);
    data.toggle();
  });
  /**
   * jQuery
   */

  index.defineJQueryPlugin(Button);

  return Button;

}));
//# sourceMappingURL=button.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/carousel.js":
/*!****************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/carousel.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap carousel.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ./util/index */ "./node_modules/bootstrap/js/dist/util/index.js"), __webpack_require__(/*! ./dom/event-handler */ "./node_modules/bootstrap/js/dist/dom/event-handler.js"), __webpack_require__(/*! ./dom/manipulator */ "./node_modules/bootstrap/js/dist/dom/manipulator.js"), __webpack_require__(/*! ./dom/selector-engine */ "./node_modules/bootstrap/js/dist/dom/selector-engine.js"), __webpack_require__(/*! ./util/swipe */ "./node_modules/bootstrap/js/dist/util/swipe.js"), __webpack_require__(/*! ./base-component */ "./node_modules/bootstrap/js/dist/base-component.js")) :
  0;
})(this, (function (index, EventHandler, Manipulator, SelectorEngine, Swipe, BaseComponent) { 'use strict';

  const _interopDefaultLegacy = e => e && typeof e === 'object' && 'default' in e ? e : { default: e };

  const EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);
  const Manipulator__default = /*#__PURE__*/_interopDefaultLegacy(Manipulator);
  const SelectorEngine__default = /*#__PURE__*/_interopDefaultLegacy(SelectorEngine);
  const Swipe__default = /*#__PURE__*/_interopDefaultLegacy(Swipe);
  const BaseComponent__default = /*#__PURE__*/_interopDefaultLegacy(BaseComponent);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): carousel.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const NAME = 'carousel';
  const DATA_KEY = 'bs.carousel';
  const EVENT_KEY = `.${DATA_KEY}`;
  const DATA_API_KEY = '.data-api';
  const ARROW_LEFT_KEY = 'ArrowLeft';
  const ARROW_RIGHT_KEY = 'ArrowRight';
  const TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  const ORDER_NEXT = 'next';
  const ORDER_PREV = 'prev';
  const DIRECTION_LEFT = 'left';
  const DIRECTION_RIGHT = 'right';
  const EVENT_SLIDE = `slide${EVENT_KEY}`;
  const EVENT_SLID = `slid${EVENT_KEY}`;
  const EVENT_KEYDOWN = `keydown${EVENT_KEY}`;
  const EVENT_MOUSEENTER = `mouseenter${EVENT_KEY}`;
  const EVENT_MOUSELEAVE = `mouseleave${EVENT_KEY}`;
  const EVENT_DRAG_START = `dragstart${EVENT_KEY}`;
  const EVENT_LOAD_DATA_API = `load${EVENT_KEY}${DATA_API_KEY}`;
  const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
  const CLASS_NAME_CAROUSEL = 'carousel';
  const CLASS_NAME_ACTIVE = 'active';
  const CLASS_NAME_SLIDE = 'slide';
  const CLASS_NAME_END = 'carousel-item-end';
  const CLASS_NAME_START = 'carousel-item-start';
  const CLASS_NAME_NEXT = 'carousel-item-next';
  const CLASS_NAME_PREV = 'carousel-item-prev';
  const SELECTOR_ACTIVE = '.active';
  const SELECTOR_ITEM = '.carousel-item';
  const SELECTOR_ACTIVE_ITEM = SELECTOR_ACTIVE + SELECTOR_ITEM;
  const SELECTOR_ITEM_IMG = '.carousel-item img';
  const SELECTOR_INDICATORS = '.carousel-indicators';
  const SELECTOR_DATA_SLIDE = '[data-bs-slide], [data-bs-slide-to]';
  const SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
  const KEY_TO_DIRECTION = {
    [ARROW_LEFT_KEY]: DIRECTION_RIGHT,
    [ARROW_RIGHT_KEY]: DIRECTION_LEFT
  };
  const Default = {
    interval: 5000,
    keyboard: true,
    pause: 'hover',
    ride: false,
    touch: true,
    wrap: true
  };
  const DefaultType = {
    interval: '(number|boolean)',
    // TODO:v6 remove boolean support
    keyboard: 'boolean',
    pause: '(string|boolean)',
    ride: '(boolean|string)',
    touch: 'boolean',
    wrap: 'boolean'
  };
  /**
   * Class definition
   */

  class Carousel extends BaseComponent__default.default {
    constructor(element, config) {
      super(element, config);
      this._interval = null;
      this._activeElement = null;
      this._isSliding = false;
      this.touchTimeout = null;
      this._swipeHelper = null;
      this._indicatorsElement = SelectorEngine__default.default.findOne(SELECTOR_INDICATORS, this._element);

      this._addEventListeners();

      if (this._config.ride === CLASS_NAME_CAROUSEL) {
        this.cycle();
      }
    } // Getters


    static get Default() {
      return Default;
    }

    static get DefaultType() {
      return DefaultType;
    }

    static get NAME() {
      return NAME;
    } // Public


    next() {
      this._slide(ORDER_NEXT);
    }

    nextWhenVisible() {
      // FIXME TODO use `document.visibilityState`
      // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible
      if (!document.hidden && index.isVisible(this._element)) {
        this.next();
      }
    }

    prev() {
      this._slide(ORDER_PREV);
    }

    pause() {
      if (this._isSliding) {
        index.triggerTransitionEnd(this._element);
      }

      this._clearInterval();
    }

    cycle() {
      this._clearInterval();

      this._updateInterval();

      this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
    }

    _maybeEnableCycle() {
      if (!this._config.ride) {
        return;
      }

      if (this._isSliding) {
        EventHandler__default.default.one(this._element, EVENT_SLID, () => this.cycle());
        return;
      }

      this.cycle();
    }

    to(index) {
      const items = this._getItems();

      if (index > items.length - 1 || index < 0) {
        return;
      }

      if (this._isSliding) {
        EventHandler__default.default.one(this._element, EVENT_SLID, () => this.to(index));
        return;
      }

      const activeIndex = this._getItemIndex(this._getActive());

      if (activeIndex === index) {
        return;
      }

      const order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;

      this._slide(order, items[index]);
    }

    dispose() {
      if (this._swipeHelper) {
        this._swipeHelper.dispose();
      }

      super.dispose();
    } // Private


    _configAfterMerge(config) {
      config.defaultInterval = config.interval;
      return config;
    }

    _addEventListeners() {
      if (this._config.keyboard) {
        EventHandler__default.default.on(this._element, EVENT_KEYDOWN, event => this._keydown(event));
      }

      if (this._config.pause === 'hover') {
        EventHandler__default.default.on(this._element, EVENT_MOUSEENTER, () => this.pause());
        EventHandler__default.default.on(this._element, EVENT_MOUSELEAVE, () => this._maybeEnableCycle());
      }

      if (this._config.touch && Swipe__default.default.isSupported()) {
        this._addTouchEventListeners();
      }
    }

    _addTouchEventListeners() {
      for (const img of SelectorEngine__default.default.find(SELECTOR_ITEM_IMG, this._element)) {
        EventHandler__default.default.on(img, EVENT_DRAG_START, event => event.preventDefault());
      }

      const endCallBack = () => {
        if (this._config.pause !== 'hover') {
          return;
        } // If it's a touch-enabled device, mouseenter/leave are fired as
        // part of the mouse compatibility events on first tap - the carousel
        // would stop cycling until user tapped out of it;
        // here, we listen for touchend, explicitly pause the carousel
        // (as if it's the second time we tap on it, mouseenter compat event
        // is NOT fired) and after a timeout (to allow for mouse compatibility
        // events to fire) we explicitly restart cycling


        this.pause();

        if (this.touchTimeout) {
          clearTimeout(this.touchTimeout);
        }

        this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), TOUCHEVENT_COMPAT_WAIT + this._config.interval);
      };

      const swipeConfig = {
        leftCallback: () => this._slide(this._directionToOrder(DIRECTION_LEFT)),
        rightCallback: () => this._slide(this._directionToOrder(DIRECTION_RIGHT)),
        endCallback: endCallBack
      };
      this._swipeHelper = new Swipe__default.default(this._element, swipeConfig);
    }

    _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }

      const direction = KEY_TO_DIRECTION[event.key];

      if (direction) {
        event.preventDefault();

        this._slide(this._directionToOrder(direction));
      }
    }

    _getItemIndex(element) {
      return this._getItems().indexOf(element);
    }

    _setActiveIndicatorElement(index) {
      if (!this._indicatorsElement) {
        return;
      }

      const activeIndicator = SelectorEngine__default.default.findOne(SELECTOR_ACTIVE, this._indicatorsElement);
      activeIndicator.classList.remove(CLASS_NAME_ACTIVE);
      activeIndicator.removeAttribute('aria-current');
      const newActiveIndicator = SelectorEngine__default.default.findOne(`[data-bs-slide-to="${index}"]`, this._indicatorsElement);

      if (newActiveIndicator) {
        newActiveIndicator.classList.add(CLASS_NAME_ACTIVE);
        newActiveIndicator.setAttribute('aria-current', 'true');
      }
    }

    _updateInterval() {
      const element = this._activeElement || this._getActive();

      if (!element) {
        return;
      }

      const elementInterval = Number.parseInt(element.getAttribute('data-bs-interval'), 10);
      this._config.interval = elementInterval || this._config.defaultInterval;
    }

    _slide(order, element = null) {
      if (this._isSliding) {
        return;
      }

      const activeElement = this._getActive();

      const isNext = order === ORDER_NEXT;
      const nextElement = element || index.getNextActiveElement(this._getItems(), activeElement, isNext, this._config.wrap);

      if (nextElement === activeElement) {
        return;
      }

      const nextElementIndex = this._getItemIndex(nextElement);

      const triggerEvent = eventName => {
        return EventHandler__default.default.trigger(this._element, eventName, {
          relatedTarget: nextElement,
          direction: this._orderToDirection(order),
          from: this._getItemIndex(activeElement),
          to: nextElementIndex
        });
      };

      const slideEvent = triggerEvent(EVENT_SLIDE);

      if (slideEvent.defaultPrevented) {
        return;
      }

      if (!activeElement || !nextElement) {
        // Some weirdness is happening, so we bail
        // todo: change tests that use empty divs to avoid this check
        return;
      }

      const isCycling = Boolean(this._interval);
      this.pause();
      this._isSliding = true;

      this._setActiveIndicatorElement(nextElementIndex);

      this._activeElement = nextElement;
      const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
      const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;
      nextElement.classList.add(orderClassName);
      index.reflow(nextElement);
      activeElement.classList.add(directionalClassName);
      nextElement.classList.add(directionalClassName);

      const completeCallBack = () => {
        nextElement.classList.remove(directionalClassName, orderClassName);
        nextElement.classList.add(CLASS_NAME_ACTIVE);
        activeElement.classList.remove(CLASS_NAME_ACTIVE, orderClassName, directionalClassName);
        this._isSliding = false;
        triggerEvent(EVENT_SLID);
      };

      this._queueCallback(completeCallBack, activeElement, this._isAnimated());

      if (isCycling) {
        this.cycle();
      }
    }

    _isAnimated() {
      return this._element.classList.contains(CLASS_NAME_SLIDE);
    }

    _getActive() {
      return SelectorEngine__default.default.findOne(SELECTOR_ACTIVE_ITEM, this._element);
    }

    _getItems() {
      return SelectorEngine__default.default.find(SELECTOR_ITEM, this._element);
    }

    _clearInterval() {
      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }
    }

    _directionToOrder(direction) {
      if (index.isRTL()) {
        return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
      }

      return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
    }

    _orderToDirection(order) {
      if (index.isRTL()) {
        return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
      }

      return order === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = Carousel.getOrCreateInstance(this, config);

        if (typeof config === 'number') {
          data.to(config);
          return;
        }

        if (typeof config === 'string') {
          if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
            throw new TypeError(`No method named "${config}"`);
          }

          data[config]();
        }
      });
    }

  }
  /**
   * Data API implementation
   */


  EventHandler__default.default.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_SLIDE, function (event) {
    const target = index.getElementFromSelector(this);

    if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
      return;
    }

    event.preventDefault();
    const carousel = Carousel.getOrCreateInstance(target);
    const slideIndex = this.getAttribute('data-bs-slide-to');

    if (slideIndex) {
      carousel.to(slideIndex);

      carousel._maybeEnableCycle();

      return;
    }

    if (Manipulator__default.default.getDataAttribute(this, 'slide') === 'next') {
      carousel.next();

      carousel._maybeEnableCycle();

      return;
    }

    carousel.prev();

    carousel._maybeEnableCycle();
  });
  EventHandler__default.default.on(window, EVENT_LOAD_DATA_API, () => {
    const carousels = SelectorEngine__default.default.find(SELECTOR_DATA_RIDE);

    for (const carousel of carousels) {
      Carousel.getOrCreateInstance(carousel);
    }
  });
  /**
   * jQuery
   */

  index.defineJQueryPlugin(Carousel);

  return Carousel;

}));
//# sourceMappingURL=carousel.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/collapse.js":
/*!****************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/collapse.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap collapse.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ./util/index */ "./node_modules/bootstrap/js/dist/util/index.js"), __webpack_require__(/*! ./dom/event-handler */ "./node_modules/bootstrap/js/dist/dom/event-handler.js"), __webpack_require__(/*! ./dom/selector-engine */ "./node_modules/bootstrap/js/dist/dom/selector-engine.js"), __webpack_require__(/*! ./base-component */ "./node_modules/bootstrap/js/dist/base-component.js")) :
  0;
})(this, (function (index, EventHandler, SelectorEngine, BaseComponent) { 'use strict';

  const _interopDefaultLegacy = e => e && typeof e === 'object' && 'default' in e ? e : { default: e };

  const EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);
  const SelectorEngine__default = /*#__PURE__*/_interopDefaultLegacy(SelectorEngine);
  const BaseComponent__default = /*#__PURE__*/_interopDefaultLegacy(BaseComponent);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): collapse.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const NAME = 'collapse';
  const DATA_KEY = 'bs.collapse';
  const EVENT_KEY = `.${DATA_KEY}`;
  const DATA_API_KEY = '.data-api';
  const EVENT_SHOW = `show${EVENT_KEY}`;
  const EVENT_SHOWN = `shown${EVENT_KEY}`;
  const EVENT_HIDE = `hide${EVENT_KEY}`;
  const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
  const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
  const CLASS_NAME_SHOW = 'show';
  const CLASS_NAME_COLLAPSE = 'collapse';
  const CLASS_NAME_COLLAPSING = 'collapsing';
  const CLASS_NAME_COLLAPSED = 'collapsed';
  const CLASS_NAME_DEEPER_CHILDREN = `:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`;
  const CLASS_NAME_HORIZONTAL = 'collapse-horizontal';
  const WIDTH = 'width';
  const HEIGHT = 'height';
  const SELECTOR_ACTIVES = '.collapse.show, .collapse.collapsing';
  const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="collapse"]';
  const Default = {
    parent: null,
    toggle: true
  };
  const DefaultType = {
    parent: '(null|element)',
    toggle: 'boolean'
  };
  /**
   * Class definition
   */

  class Collapse extends BaseComponent__default.default {
    constructor(element, config) {
      super(element, config);
      this._isTransitioning = false;
      this._triggerArray = [];
      const toggleList = SelectorEngine__default.default.find(SELECTOR_DATA_TOGGLE);

      for (const elem of toggleList) {
        const selector = index.getSelectorFromElement(elem);
        const filterElement = SelectorEngine__default.default.find(selector).filter(foundElement => foundElement === this._element);

        if (selector !== null && filterElement.length) {
          this._triggerArray.push(elem);
        }
      }

      this._initializeChildren();

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
      }

      if (this._config.toggle) {
        this.toggle();
      }
    } // Getters


    static get Default() {
      return Default;
    }

    static get DefaultType() {
      return DefaultType;
    }

    static get NAME() {
      return NAME;
    } // Public


    toggle() {
      if (this._isShown()) {
        this.hide();
      } else {
        this.show();
      }
    }

    show() {
      if (this._isTransitioning || this._isShown()) {
        return;
      }

      let activeChildren = []; // find active children

      if (this._config.parent) {
        activeChildren = this._getFirstLevelChildren(SELECTOR_ACTIVES).filter(element => element !== this._element).map(element => Collapse.getOrCreateInstance(element, {
          toggle: false
        }));
      }

      if (activeChildren.length && activeChildren[0]._isTransitioning) {
        return;
      }

      const startEvent = EventHandler__default.default.trigger(this._element, EVENT_SHOW);

      if (startEvent.defaultPrevented) {
        return;
      }

      for (const activeInstance of activeChildren) {
        activeInstance.hide();
      }

      const dimension = this._getDimension();

      this._element.classList.remove(CLASS_NAME_COLLAPSE);

      this._element.classList.add(CLASS_NAME_COLLAPSING);

      this._element.style[dimension] = 0;

      this._addAriaAndCollapsedClass(this._triggerArray, true);

      this._isTransitioning = true;

      const complete = () => {
        this._isTransitioning = false;

        this._element.classList.remove(CLASS_NAME_COLLAPSING);

        this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW);

        this._element.style[dimension] = '';
        EventHandler__default.default.trigger(this._element, EVENT_SHOWN);
      };

      const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      const scrollSize = `scroll${capitalizedDimension}`;

      this._queueCallback(complete, this._element, true);

      this._element.style[dimension] = `${this._element[scrollSize]}px`;
    }

    hide() {
      if (this._isTransitioning || !this._isShown()) {
        return;
      }

      const startEvent = EventHandler__default.default.trigger(this._element, EVENT_HIDE);

      if (startEvent.defaultPrevented) {
        return;
      }

      const dimension = this._getDimension();

      this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
      index.reflow(this._element);

      this._element.classList.add(CLASS_NAME_COLLAPSING);

      this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW);

      for (const trigger of this._triggerArray) {
        const element = index.getElementFromSelector(trigger);

        if (element && !this._isShown(element)) {
          this._addAriaAndCollapsedClass([trigger], false);
        }
      }

      this._isTransitioning = true;

      const complete = () => {
        this._isTransitioning = false;

        this._element.classList.remove(CLASS_NAME_COLLAPSING);

        this._element.classList.add(CLASS_NAME_COLLAPSE);

        EventHandler__default.default.trigger(this._element, EVENT_HIDDEN);
      };

      this._element.style[dimension] = '';

      this._queueCallback(complete, this._element, true);
    }

    _isShown(element = this._element) {
      return element.classList.contains(CLASS_NAME_SHOW);
    } // Private


    _configAfterMerge(config) {
      config.toggle = Boolean(config.toggle); // Coerce string values

      config.parent = index.getElement(config.parent);
      return config;
    }

    _getDimension() {
      return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
    }

    _initializeChildren() {
      if (!this._config.parent) {
        return;
      }

      const children = this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE);

      for (const element of children) {
        const selected = index.getElementFromSelector(element);

        if (selected) {
          this._addAriaAndCollapsedClass([element], this._isShown(selected));
        }
      }
    }

    _getFirstLevelChildren(selector) {
      const children = SelectorEngine__default.default.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent); // remove children if greater depth

      return SelectorEngine__default.default.find(selector, this._config.parent).filter(element => !children.includes(element));
    }

    _addAriaAndCollapsedClass(triggerArray, isOpen) {
      if (!triggerArray.length) {
        return;
      }

      for (const element of triggerArray) {
        element.classList.toggle(CLASS_NAME_COLLAPSED, !isOpen);
        element.setAttribute('aria-expanded', isOpen);
      }
    } // Static


    static jQueryInterface(config) {
      const _config = {};

      if (typeof config === 'string' && /show|hide/.test(config)) {
        _config.toggle = false;
      }

      return this.each(function () {
        const data = Collapse.getOrCreateInstance(this, _config);

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError(`No method named "${config}"`);
          }

          data[config]();
        }
      });
    }

  }
  /**
   * Data API implementation
   */


  EventHandler__default.default.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.target.tagName === 'A' || event.delegateTarget && event.delegateTarget.tagName === 'A') {
      event.preventDefault();
    }

    const selector = index.getSelectorFromElement(this);
    const selectorElements = SelectorEngine__default.default.find(selector);

    for (const element of selectorElements) {
      Collapse.getOrCreateInstance(element, {
        toggle: false
      }).toggle();
    }
  });
  /**
   * jQuery
   */

  index.defineJQueryPlugin(Collapse);

  return Collapse;

}));
//# sourceMappingURL=collapse.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/dom/data.js":
/*!****************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/dom/data.js ***!
  \****************************************************/
/***/ (function(module) {

/*!
  * Bootstrap data.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory() :
  0;
})(this, (function () { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): dom/data.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * Constants
   */
  const elementMap = new Map();
  const data = {
    set(element, key, instance) {
      if (!elementMap.has(element)) {
        elementMap.set(element, new Map());
      }

      const instanceMap = elementMap.get(element); // make it clear we only want one instance per element
      // can be removed later when multiple key/instances are fine to be used

      if (!instanceMap.has(key) && instanceMap.size !== 0) {
        // eslint-disable-next-line no-console
        console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
        return;
      }

      instanceMap.set(key, instance);
    },

    get(element, key) {
      if (elementMap.has(element)) {
        return elementMap.get(element).get(key) || null;
      }

      return null;
    },

    remove(element, key) {
      if (!elementMap.has(element)) {
        return;
      }

      const instanceMap = elementMap.get(element);
      instanceMap.delete(key); // free up element references if there are no instances left for an element

      if (instanceMap.size === 0) {
        elementMap.delete(element);
      }
    }

  };

  return data;

}));
//# sourceMappingURL=data.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/dom/event-handler.js":
/*!*************************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/dom/event-handler.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap event-handler.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ../util/index */ "./node_modules/bootstrap/js/dist/util/index.js")) :
  0;
})(this, (function (index) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): dom/event-handler.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const namespaceRegex = /[^.]*(?=\..*)\.|.*/;
  const stripNameRegex = /\..*/;
  const stripUidRegex = /::\d+$/;
  const eventRegistry = {}; // Events storage

  let uidEvent = 1;
  const customEvents = {
    mouseenter: 'mouseover',
    mouseleave: 'mouseout'
  };
  const nativeEvents = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']);
  /**
   * Private methods
   */

  function makeEventUid(element, uid) {
    return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
  }

  function getElementEvents(element) {
    const uid = makeEventUid(element);
    element.uidEvent = uid;
    eventRegistry[uid] = eventRegistry[uid] || {};
    return eventRegistry[uid];
  }

  function bootstrapHandler(element, fn) {
    return function handler(event) {
      hydrateObj(event, {
        delegateTarget: element
      });

      if (handler.oneOff) {
        EventHandler.off(element, event.type, fn);
      }

      return fn.apply(element, [event]);
    };
  }

  function bootstrapDelegationHandler(element, selector, fn) {
    return function handler(event) {
      const domElements = element.querySelectorAll(selector);

      for (let {
        target
      } = event; target && target !== this; target = target.parentNode) {
        for (const domElement of domElements) {
          if (domElement !== target) {
            continue;
          }

          hydrateObj(event, {
            delegateTarget: target
          });

          if (handler.oneOff) {
            EventHandler.off(element, event.type, selector, fn);
          }

          return fn.apply(target, [event]);
        }
      }
    };
  }

  function findHandler(events, callable, delegationSelector = null) {
    return Object.values(events).find(event => event.callable === callable && event.delegationSelector === delegationSelector);
  }

  function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
    const isDelegated = typeof handler === 'string'; // todo: tooltip passes `false` instead of selector, so we need to check

    const callable = isDelegated ? delegationFunction : handler || delegationFunction;
    let typeEvent = getTypeEvent(originalTypeEvent);

    if (!nativeEvents.has(typeEvent)) {
      typeEvent = originalTypeEvent;
    }

    return [isDelegated, callable, typeEvent];
  }

  function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
    if (typeof originalTypeEvent !== 'string' || !element) {
      return;
    }

    let [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction); // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
    // this prevents the handler from being dispatched the same way as mouseover or mouseout does

    if (originalTypeEvent in customEvents) {
      const wrapFunction = fn => {
        return function (event) {
          if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
            return fn.call(this, event);
          }
        };
      };

      callable = wrapFunction(callable);
    }

    const events = getElementEvents(element);
    const handlers = events[typeEvent] || (events[typeEvent] = {});
    const previousFunction = findHandler(handlers, callable, isDelegated ? handler : null);

    if (previousFunction) {
      previousFunction.oneOff = previousFunction.oneOff && oneOff;
      return;
    }

    const uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ''));
    const fn = isDelegated ? bootstrapDelegationHandler(element, handler, callable) : bootstrapHandler(element, callable);
    fn.delegationSelector = isDelegated ? handler : null;
    fn.callable = callable;
    fn.oneOff = oneOff;
    fn.uidEvent = uid;
    handlers[uid] = fn;
    element.addEventListener(typeEvent, fn, isDelegated);
  }

  function removeHandler(element, events, typeEvent, handler, delegationSelector) {
    const fn = findHandler(events[typeEvent], handler, delegationSelector);

    if (!fn) {
      return;
    }

    element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
    delete events[typeEvent][fn.uidEvent];
  }

  function removeNamespacedHandlers(element, events, typeEvent, namespace) {
    const storeElementEvent = events[typeEvent] || {};

    for (const handlerKey of Object.keys(storeElementEvent)) {
      if (handlerKey.includes(namespace)) {
        const event = storeElementEvent[handlerKey];
        removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
      }
    }
  }

  function getTypeEvent(event) {
    // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
    event = event.replace(stripNameRegex, '');
    return customEvents[event] || event;
  }

  const EventHandler = {
    on(element, event, handler, delegationFunction) {
      addHandler(element, event, handler, delegationFunction, false);
    },

    one(element, event, handler, delegationFunction) {
      addHandler(element, event, handler, delegationFunction, true);
    },

    off(element, originalTypeEvent, handler, delegationFunction) {
      if (typeof originalTypeEvent !== 'string' || !element) {
        return;
      }

      const [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
      const inNamespace = typeEvent !== originalTypeEvent;
      const events = getElementEvents(element);
      const storeElementEvent = events[typeEvent] || {};
      const isNamespace = originalTypeEvent.startsWith('.');

      if (typeof callable !== 'undefined') {
        // Simplest case: handler is passed, remove that listener ONLY.
        if (!Object.keys(storeElementEvent).length) {
          return;
        }

        removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);
        return;
      }

      if (isNamespace) {
        for (const elementEvent of Object.keys(events)) {
          removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
        }
      }

      for (const keyHandlers of Object.keys(storeElementEvent)) {
        const handlerKey = keyHandlers.replace(stripUidRegex, '');

        if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
          const event = storeElementEvent[keyHandlers];
          removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
        }
      }
    },

    trigger(element, event, args) {
      if (typeof event !== 'string' || !element) {
        return null;
      }

      const $ = index.getjQuery();
      const typeEvent = getTypeEvent(event);
      const inNamespace = event !== typeEvent;
      let jQueryEvent = null;
      let bubbles = true;
      let nativeDispatch = true;
      let defaultPrevented = false;

      if (inNamespace && $) {
        jQueryEvent = $.Event(event, args);
        $(element).trigger(jQueryEvent);
        bubbles = !jQueryEvent.isPropagationStopped();
        nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
        defaultPrevented = jQueryEvent.isDefaultPrevented();
      }

      let evt = new Event(event, {
        bubbles,
        cancelable: true
      });
      evt = hydrateObj(evt, args);

      if (defaultPrevented) {
        evt.preventDefault();
      }

      if (nativeDispatch) {
        element.dispatchEvent(evt);
      }

      if (evt.defaultPrevented && jQueryEvent) {
        jQueryEvent.preventDefault();
      }

      return evt;
    }

  };

  function hydrateObj(obj, meta) {
    for (const [key, value] of Object.entries(meta || {})) {
      try {
        obj[key] = value;
      } catch (_unused) {
        Object.defineProperty(obj, key, {
          configurable: true,

          get() {
            return value;
          }

        });
      }
    }

    return obj;
  }

  return EventHandler;

}));
//# sourceMappingURL=event-handler.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/dom/manipulator.js":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/dom/manipulator.js ***!
  \***********************************************************/
/***/ (function(module) {

/*!
  * Bootstrap manipulator.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory() :
  0;
})(this, (function () { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): dom/manipulator.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  function normalizeData(value) {
    if (value === 'true') {
      return true;
    }

    if (value === 'false') {
      return false;
    }

    if (value === Number(value).toString()) {
      return Number(value);
    }

    if (value === '' || value === 'null') {
      return null;
    }

    if (typeof value !== 'string') {
      return value;
    }

    try {
      return JSON.parse(decodeURIComponent(value));
    } catch (_unused) {
      return value;
    }
  }

  function normalizeDataKey(key) {
    return key.replace(/[A-Z]/g, chr => `-${chr.toLowerCase()}`);
  }

  const Manipulator = {
    setDataAttribute(element, key, value) {
      element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
    },

    removeDataAttribute(element, key) {
      element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
    },

    getDataAttributes(element) {
      if (!element) {
        return {};
      }

      const attributes = {};
      const bsKeys = Object.keys(element.dataset).filter(key => key.startsWith('bs') && !key.startsWith('bsConfig'));

      for (const key of bsKeys) {
        let pureKey = key.replace(/^bs/, '');
        pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
        attributes[pureKey] = normalizeData(element.dataset[key]);
      }

      return attributes;
    },

    getDataAttribute(element, key) {
      return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
    }

  };

  return Manipulator;

}));
//# sourceMappingURL=manipulator.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/dom/selector-engine.js":
/*!***************************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/dom/selector-engine.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap selector-engine.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ../util/index */ "./node_modules/bootstrap/js/dist/util/index.js")) :
  0;
})(this, (function (index) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): dom/selector-engine.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const SelectorEngine = {
    find(selector, element = document.documentElement) {
      return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
    },

    findOne(selector, element = document.documentElement) {
      return Element.prototype.querySelector.call(element, selector);
    },

    children(element, selector) {
      return [].concat(...element.children).filter(child => child.matches(selector));
    },

    parents(element, selector) {
      const parents = [];
      let ancestor = element.parentNode.closest(selector);

      while (ancestor) {
        parents.push(ancestor);
        ancestor = ancestor.parentNode.closest(selector);
      }

      return parents;
    },

    prev(element, selector) {
      let previous = element.previousElementSibling;

      while (previous) {
        if (previous.matches(selector)) {
          return [previous];
        }

        previous = previous.previousElementSibling;
      }

      return [];
    },

    // TODO: this is now unused; remove later along with prev()
    next(element, selector) {
      let next = element.nextElementSibling;

      while (next) {
        if (next.matches(selector)) {
          return [next];
        }

        next = next.nextElementSibling;
      }

      return [];
    },

    focusableChildren(element) {
      const focusables = ['a', 'button', 'input', 'textarea', 'select', 'details', '[tabindex]', '[contenteditable="true"]'].map(selector => `${selector}:not([tabindex^="-"])`).join(',');
      return this.find(focusables, element).filter(el => !index.isDisabled(el) && index.isVisible(el));
    }

  };

  return SelectorEngine;

}));
//# sourceMappingURL=selector-engine.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/dropdown.js":
/*!****************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/dropdown.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap dropdown.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! @popperjs/core */ "./node_modules/@popperjs/core/lib/index.js"), __webpack_require__(/*! ./util/index */ "./node_modules/bootstrap/js/dist/util/index.js"), __webpack_require__(/*! ./dom/event-handler */ "./node_modules/bootstrap/js/dist/dom/event-handler.js"), __webpack_require__(/*! ./dom/manipulator */ "./node_modules/bootstrap/js/dist/dom/manipulator.js"), __webpack_require__(/*! ./dom/selector-engine */ "./node_modules/bootstrap/js/dist/dom/selector-engine.js"), __webpack_require__(/*! ./base-component */ "./node_modules/bootstrap/js/dist/base-component.js")) :
  0;
})(this, (function (Popper, index, EventHandler, Manipulator, SelectorEngine, BaseComponent) { 'use strict';

  const _interopDefaultLegacy = e => e && typeof e === 'object' && 'default' in e ? e : { default: e };

  function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    const n = Object.create(null, { [Symbol.toStringTag]: { value: 'Module' } });
    if (e) {
      for (const k in e) {
        if (k !== 'default') {
          const d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: () => e[k]
          });
        }
      }
    }
    n.default = e;
    return Object.freeze(n);
  }

  const Popper__namespace = /*#__PURE__*/_interopNamespace(Popper);
  const EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);
  const Manipulator__default = /*#__PURE__*/_interopDefaultLegacy(Manipulator);
  const SelectorEngine__default = /*#__PURE__*/_interopDefaultLegacy(SelectorEngine);
  const BaseComponent__default = /*#__PURE__*/_interopDefaultLegacy(BaseComponent);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): dropdown.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const NAME = 'dropdown';
  const DATA_KEY = 'bs.dropdown';
  const EVENT_KEY = `.${DATA_KEY}`;
  const DATA_API_KEY = '.data-api';
  const ESCAPE_KEY = 'Escape';
  const TAB_KEY = 'Tab';
  const ARROW_UP_KEY = 'ArrowUp';
  const ARROW_DOWN_KEY = 'ArrowDown';
  const RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button

  const EVENT_HIDE = `hide${EVENT_KEY}`;
  const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
  const EVENT_SHOW = `show${EVENT_KEY}`;
  const EVENT_SHOWN = `shown${EVENT_KEY}`;
  const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
  const EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY}${DATA_API_KEY}`;
  const EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY}${DATA_API_KEY}`;
  const CLASS_NAME_SHOW = 'show';
  const CLASS_NAME_DROPUP = 'dropup';
  const CLASS_NAME_DROPEND = 'dropend';
  const CLASS_NAME_DROPSTART = 'dropstart';
  const CLASS_NAME_DROPUP_CENTER = 'dropup-center';
  const CLASS_NAME_DROPDOWN_CENTER = 'dropdown-center';
  const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)';
  const SELECTOR_DATA_TOGGLE_SHOWN = `${SELECTOR_DATA_TOGGLE}.${CLASS_NAME_SHOW}`;
  const SELECTOR_MENU = '.dropdown-menu';
  const SELECTOR_NAVBAR = '.navbar';
  const SELECTOR_NAVBAR_NAV = '.navbar-nav';
  const SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
  const PLACEMENT_TOP = index.isRTL() ? 'top-end' : 'top-start';
  const PLACEMENT_TOPEND = index.isRTL() ? 'top-start' : 'top-end';
  const PLACEMENT_BOTTOM = index.isRTL() ? 'bottom-end' : 'bottom-start';
  const PLACEMENT_BOTTOMEND = index.isRTL() ? 'bottom-start' : 'bottom-end';
  const PLACEMENT_RIGHT = index.isRTL() ? 'left-start' : 'right-start';
  const PLACEMENT_LEFT = index.isRTL() ? 'right-start' : 'left-start';
  const PLACEMENT_TOPCENTER = 'top';
  const PLACEMENT_BOTTOMCENTER = 'bottom';
  const Default = {
    autoClose: true,
    boundary: 'clippingParents',
    display: 'dynamic',
    offset: [0, 2],
    popperConfig: null,
    reference: 'toggle'
  };
  const DefaultType = {
    autoClose: '(boolean|string)',
    boundary: '(string|element)',
    display: 'string',
    offset: '(array|string|function)',
    popperConfig: '(null|object|function)',
    reference: '(string|element|object)'
  };
  /**
   * Class definition
   */

  class Dropdown extends BaseComponent__default.default {
    constructor(element, config) {
      super(element, config);
      this._popper = null;
      this._parent = this._element.parentNode; // dropdown wrapper
      // todo: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.2/forms/input-group/

      this._menu = SelectorEngine__default.default.next(this._element, SELECTOR_MENU)[0] || SelectorEngine__default.default.prev(this._element, SELECTOR_MENU)[0] || SelectorEngine__default.default.findOne(SELECTOR_MENU, this._parent);
      this._inNavbar = this._detectNavbar();
    } // Getters


    static get Default() {
      return Default;
    }

    static get DefaultType() {
      return DefaultType;
    }

    static get NAME() {
      return NAME;
    } // Public


    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }

    show() {
      if (index.isDisabled(this._element) || this._isShown()) {
        return;
      }

      const relatedTarget = {
        relatedTarget: this._element
      };
      const showEvent = EventHandler__default.default.trigger(this._element, EVENT_SHOW, relatedTarget);

      if (showEvent.defaultPrevented) {
        return;
      }

      this._createPopper(); // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement && !this._parent.closest(SELECTOR_NAVBAR_NAV)) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler__default.default.on(element, 'mouseover', index.noop);
        }
      }

      this._element.focus();

      this._element.setAttribute('aria-expanded', true);

      this._menu.classList.add(CLASS_NAME_SHOW);

      this._element.classList.add(CLASS_NAME_SHOW);

      EventHandler__default.default.trigger(this._element, EVENT_SHOWN, relatedTarget);
    }

    hide() {
      if (index.isDisabled(this._element) || !this._isShown()) {
        return;
      }

      const relatedTarget = {
        relatedTarget: this._element
      };

      this._completeHide(relatedTarget);
    }

    dispose() {
      if (this._popper) {
        this._popper.destroy();
      }

      super.dispose();
    }

    update() {
      this._inNavbar = this._detectNavbar();

      if (this._popper) {
        this._popper.update();
      }
    } // Private


    _completeHide(relatedTarget) {
      const hideEvent = EventHandler__default.default.trigger(this._element, EVENT_HIDE, relatedTarget);

      if (hideEvent.defaultPrevented) {
        return;
      } // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support


      if ('ontouchstart' in document.documentElement) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler__default.default.off(element, 'mouseover', index.noop);
        }
      }

      if (this._popper) {
        this._popper.destroy();
      }

      this._menu.classList.remove(CLASS_NAME_SHOW);

      this._element.classList.remove(CLASS_NAME_SHOW);

      this._element.setAttribute('aria-expanded', 'false');

      Manipulator__default.default.removeDataAttribute(this._menu, 'popper');
      EventHandler__default.default.trigger(this._element, EVENT_HIDDEN, relatedTarget);
    }

    _getConfig(config) {
      config = super._getConfig(config);

      if (typeof config.reference === 'object' && !index.isElement(config.reference) && typeof config.reference.getBoundingClientRect !== 'function') {
        // Popper virtual elements require a getBoundingClientRect method
        throw new TypeError(`${NAME.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
      }

      return config;
    }

    _createPopper() {
      if (typeof Popper__namespace === 'undefined') {
        throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');
      }

      let referenceElement = this._element;

      if (this._config.reference === 'parent') {
        referenceElement = this._parent;
      } else if (index.isElement(this._config.reference)) {
        referenceElement = index.getElement(this._config.reference);
      } else if (typeof this._config.reference === 'object') {
        referenceElement = this._config.reference;
      }

      const popperConfig = this._getPopperConfig();

      this._popper = Popper__namespace.createPopper(referenceElement, this._menu, popperConfig);
    }

    _isShown() {
      return this._menu.classList.contains(CLASS_NAME_SHOW);
    }

    _getPlacement() {
      const parentDropdown = this._parent;

      if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
        return PLACEMENT_RIGHT;
      }

      if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
        return PLACEMENT_LEFT;
      }

      if (parentDropdown.classList.contains(CLASS_NAME_DROPUP_CENTER)) {
        return PLACEMENT_TOPCENTER;
      }

      if (parentDropdown.classList.contains(CLASS_NAME_DROPDOWN_CENTER)) {
        return PLACEMENT_BOTTOMCENTER;
      } // We need to trim the value because custom properties can also include spaces


      const isEnd = getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() === 'end';

      if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
        return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
      }

      return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
    }

    _detectNavbar() {
      return this._element.closest(SELECTOR_NAVBAR) !== null;
    }

    _getOffset() {
      const {
        offset
      } = this._config;

      if (typeof offset === 'string') {
        return offset.split(',').map(value => Number.parseInt(value, 10));
      }

      if (typeof offset === 'function') {
        return popperData => offset(popperData, this._element);
      }

      return offset;
    }

    _getPopperConfig() {
      const defaultBsPopperConfig = {
        placement: this._getPlacement(),
        modifiers: [{
          name: 'preventOverflow',
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: 'offset',
          options: {
            offset: this._getOffset()
          }
        }]
      }; // Disable Popper if we have a static display or Dropdown is in Navbar

      if (this._inNavbar || this._config.display === 'static') {
        Manipulator__default.default.setDataAttribute(this._menu, 'popper', 'static'); // todo:v6 remove

        defaultBsPopperConfig.modifiers = [{
          name: 'applyStyles',
          enabled: false
        }];
      }

      return { ...defaultBsPopperConfig,
        ...(typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig)
      };
    }

    _selectMenuItem({
      key,
      target
    }) {
      const items = SelectorEngine__default.default.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter(element => index.isVisible(element));

      if (!items.length) {
        return;
      } // if target isn't included in items (e.g. when expanding the dropdown)
      // allow cycling to get the last item in case key equals ARROW_UP_KEY


      index.getNextActiveElement(items, target, key === ARROW_DOWN_KEY, !items.includes(target)).focus();
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = Dropdown.getOrCreateInstance(this, config);

        if (typeof config !== 'string') {
          return;
        }

        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config]();
      });
    }

    static clearMenus(event) {
      if (event.button === RIGHT_MOUSE_BUTTON || event.type === 'keyup' && event.key !== TAB_KEY) {
        return;
      }

      const openToggles = SelectorEngine__default.default.find(SELECTOR_DATA_TOGGLE_SHOWN);

      for (const toggle of openToggles) {
        const context = Dropdown.getInstance(toggle);

        if (!context || context._config.autoClose === false) {
          continue;
        }

        const composedPath = event.composedPath();
        const isMenuTarget = composedPath.includes(context._menu);

        if (composedPath.includes(context._element) || context._config.autoClose === 'inside' && !isMenuTarget || context._config.autoClose === 'outside' && isMenuTarget) {
          continue;
        } // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu


        if (context._menu.contains(event.target) && (event.type === 'keyup' && event.key === TAB_KEY || /input|select|option|textarea|form/i.test(event.target.tagName))) {
          continue;
        }

        const relatedTarget = {
          relatedTarget: context._element
        };

        if (event.type === 'click') {
          relatedTarget.clickEvent = event;
        }

        context._completeHide(relatedTarget);
      }
    }

    static dataApiKeydownHandler(event) {
      // If not an UP | DOWN | ESCAPE key => not a dropdown command
      // If input/textarea && if key is other than ESCAPE => not a dropdown command
      const isInput = /input|textarea/i.test(event.target.tagName);
      const isEscapeEvent = event.key === ESCAPE_KEY;
      const isUpOrDownEvent = [ARROW_UP_KEY, ARROW_DOWN_KEY].includes(event.key);

      if (!isUpOrDownEvent && !isEscapeEvent) {
        return;
      }

      if (isInput && !isEscapeEvent) {
        return;
      }

      event.preventDefault(); // todo: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.2/forms/input-group/

      const getToggleButton = this.matches(SELECTOR_DATA_TOGGLE) ? this : SelectorEngine__default.default.prev(this, SELECTOR_DATA_TOGGLE)[0] || SelectorEngine__default.default.next(this, SELECTOR_DATA_TOGGLE)[0] || SelectorEngine__default.default.findOne(SELECTOR_DATA_TOGGLE, event.delegateTarget.parentNode);
      const instance = Dropdown.getOrCreateInstance(getToggleButton);

      if (isUpOrDownEvent) {
        event.stopPropagation();
        instance.show();

        instance._selectMenuItem(event);

        return;
      }

      if (instance._isShown()) {
        // else is escape and we check if it is shown
        event.stopPropagation();
        instance.hide();
        getToggleButton.focus();
      }
    }

  }
  /**
   * Data API implementation
   */


  EventHandler__default.default.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE, Dropdown.dataApiKeydownHandler);
  EventHandler__default.default.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
  EventHandler__default.default.on(document, EVENT_CLICK_DATA_API, Dropdown.clearMenus);
  EventHandler__default.default.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
  EventHandler__default.default.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    event.preventDefault();
    Dropdown.getOrCreateInstance(this).toggle();
  });
  /**
   * jQuery
   */

  index.defineJQueryPlugin(Dropdown);

  return Dropdown;

}));
//# sourceMappingURL=dropdown.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/util/config.js":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/util/config.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap config.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ./index */ "./node_modules/bootstrap/js/dist/util/index.js"), __webpack_require__(/*! ../dom/manipulator */ "./node_modules/bootstrap/js/dist/dom/manipulator.js")) :
  0;
})(this, (function (index, Manipulator) { 'use strict';

  const _interopDefaultLegacy = e => e && typeof e === 'object' && 'default' in e ? e : { default: e };

  const Manipulator__default = /*#__PURE__*/_interopDefaultLegacy(Manipulator);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): util/config.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Class definition
   */

  class Config {
    // Getters
    static get Default() {
      return {};
    }

    static get DefaultType() {
      return {};
    }

    static get NAME() {
      throw new Error('You have to implement the static method "NAME", for each component!');
    }

    _getConfig(config) {
      config = this._mergeConfigObj(config);
      config = this._configAfterMerge(config);

      this._typeCheckConfig(config);

      return config;
    }

    _configAfterMerge(config) {
      return config;
    }

    _mergeConfigObj(config, element) {
      const jsonConfig = index.isElement(element) ? Manipulator__default.default.getDataAttribute(element, 'config') : {}; // try to parse

      return { ...this.constructor.Default,
        ...(typeof jsonConfig === 'object' ? jsonConfig : {}),
        ...(index.isElement(element) ? Manipulator__default.default.getDataAttributes(element) : {}),
        ...(typeof config === 'object' ? config : {})
      };
    }

    _typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
      for (const property of Object.keys(configTypes)) {
        const expectedTypes = configTypes[property];
        const value = config[property];
        const valueType = index.isElement(value) ? 'element' : index.toType(value);

        if (!new RegExp(expectedTypes).test(valueType)) {
          throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
        }
      }
    }

  }

  return Config;

}));
//# sourceMappingURL=config.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/util/index.js":
/*!******************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/util/index.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports) {

/*!
  * Bootstrap index.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? factory(exports) :
  0;
})(this, (function (exports) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): util/index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  const MAX_UID = 1000000;
  const MILLISECONDS_MULTIPLIER = 1000;
  const TRANSITION_END = 'transitionend'; // Shout-out Angus Croll (https://goo.gl/pxwQGp)

  const toType = object => {
    if (object === null || object === undefined) {
      return `${object}`;
    }

    return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
  };
  /**
   * Public Util API
   */


  const getUID = prefix => {
    do {
      prefix += Math.floor(Math.random() * MAX_UID);
    } while (document.getElementById(prefix));

    return prefix;
  };

  const getSelector = element => {
    let selector = element.getAttribute('data-bs-target');

    if (!selector || selector === '#') {
      let hrefAttribute = element.getAttribute('href'); // The only valid content that could double as a selector are IDs or classes,
      // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
      // `document.querySelector` will rightfully complain it is invalid.
      // See https://github.com/twbs/bootstrap/issues/32273

      if (!hrefAttribute || !hrefAttribute.includes('#') && !hrefAttribute.startsWith('.')) {
        return null;
      } // Just in case some CMS puts out a full URL with the anchor appended


      if (hrefAttribute.includes('#') && !hrefAttribute.startsWith('#')) {
        hrefAttribute = `#${hrefAttribute.split('#')[1]}`;
      }

      selector = hrefAttribute && hrefAttribute !== '#' ? hrefAttribute.trim() : null;
    }

    return selector;
  };

  const getSelectorFromElement = element => {
    const selector = getSelector(element);

    if (selector) {
      return document.querySelector(selector) ? selector : null;
    }

    return null;
  };

  const getElementFromSelector = element => {
    const selector = getSelector(element);
    return selector ? document.querySelector(selector) : null;
  };

  const getTransitionDurationFromElement = element => {
    if (!element) {
      return 0;
    } // Get transition-duration of the element


    let {
      transitionDuration,
      transitionDelay
    } = window.getComputedStyle(element);
    const floatTransitionDuration = Number.parseFloat(transitionDuration);
    const floatTransitionDelay = Number.parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

    if (!floatTransitionDuration && !floatTransitionDelay) {
      return 0;
    } // If multiple durations are defined, take the first


    transitionDuration = transitionDuration.split(',')[0];
    transitionDelay = transitionDelay.split(',')[0];
    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
  };

  const triggerTransitionEnd = element => {
    element.dispatchEvent(new Event(TRANSITION_END));
  };

  const isElement = object => {
    if (!object || typeof object !== 'object') {
      return false;
    }

    if (typeof object.jquery !== 'undefined') {
      object = object[0];
    }

    return typeof object.nodeType !== 'undefined';
  };

  const getElement = object => {
    // it's a jQuery object or a node element
    if (isElement(object)) {
      return object.jquery ? object[0] : object;
    }

    if (typeof object === 'string' && object.length > 0) {
      return document.querySelector(object);
    }

    return null;
  };

  const isVisible = element => {
    if (!isElement(element) || element.getClientRects().length === 0) {
      return false;
    }

    const elementIsVisible = getComputedStyle(element).getPropertyValue('visibility') === 'visible'; // Handle `details` element as its content may falsie appear visible when it is closed

    const closedDetails = element.closest('details:not([open])');

    if (!closedDetails) {
      return elementIsVisible;
    }

    if (closedDetails !== element) {
      const summary = element.closest('summary');

      if (summary && summary.parentNode !== closedDetails) {
        return false;
      }

      if (summary === null) {
        return false;
      }
    }

    return elementIsVisible;
  };

  const isDisabled = element => {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      return true;
    }

    if (element.classList.contains('disabled')) {
      return true;
    }

    if (typeof element.disabled !== 'undefined') {
      return element.disabled;
    }

    return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false';
  };

  const findShadowRoot = element => {
    if (!document.documentElement.attachShadow) {
      return null;
    } // Can find the shadow root otherwise it'll return the document


    if (typeof element.getRootNode === 'function') {
      const root = element.getRootNode();
      return root instanceof ShadowRoot ? root : null;
    }

    if (element instanceof ShadowRoot) {
      return element;
    } // when we don't find a shadow root


    if (!element.parentNode) {
      return null;
    }

    return findShadowRoot(element.parentNode);
  };

  const noop = () => {};
  /**
   * Trick to restart an element's animation
   *
   * @param {HTMLElement} element
   * @return void
   *
   * @see https://www.charistheo.io/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation
   */


  const reflow = element => {
    element.offsetHeight; // eslint-disable-line no-unused-expressions
  };

  const getjQuery = () => {
    if (window.jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
      return window.jQuery;
    }

    return null;
  };

  const DOMContentLoadedCallbacks = [];

  const onDOMContentLoaded = callback => {
    if (document.readyState === 'loading') {
      // add listener on the first call when the document is in loading state
      if (!DOMContentLoadedCallbacks.length) {
        document.addEventListener('DOMContentLoaded', () => {
          for (const callback of DOMContentLoadedCallbacks) {
            callback();
          }
        });
      }

      DOMContentLoadedCallbacks.push(callback);
    } else {
      callback();
    }
  };

  const isRTL = () => document.documentElement.dir === 'rtl';

  const defineJQueryPlugin = plugin => {
    onDOMContentLoaded(() => {
      const $ = getjQuery();
      /* istanbul ignore if */

      if ($) {
        const name = plugin.NAME;
        const JQUERY_NO_CONFLICT = $.fn[name];
        $.fn[name] = plugin.jQueryInterface;
        $.fn[name].Constructor = plugin;

        $.fn[name].noConflict = () => {
          $.fn[name] = JQUERY_NO_CONFLICT;
          return plugin.jQueryInterface;
        };
      }
    });
  };

  const execute = callback => {
    if (typeof callback === 'function') {
      callback();
    }
  };

  const executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
    if (!waitForTransition) {
      execute(callback);
      return;
    }

    const durationPadding = 5;
    const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
    let called = false;

    const handler = ({
      target
    }) => {
      if (target !== transitionElement) {
        return;
      }

      called = true;
      transitionElement.removeEventListener(TRANSITION_END, handler);
      execute(callback);
    };

    transitionElement.addEventListener(TRANSITION_END, handler);
    setTimeout(() => {
      if (!called) {
        triggerTransitionEnd(transitionElement);
      }
    }, emulatedDuration);
  };
  /**
   * Return the previous/next element of a list.
   *
   * @param {array} list    The list of elements
   * @param activeElement   The active element
   * @param shouldGetNext   Choose to get next or previous element
   * @param isCycleAllowed
   * @return {Element|elem} The proper element
   */


  const getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {
    const listLength = list.length;
    let index = list.indexOf(activeElement); // if the element does not exist in the list return an element
    // depending on the direction and if cycle is allowed

    if (index === -1) {
      return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];
    }

    index += shouldGetNext ? 1 : -1;

    if (isCycleAllowed) {
      index = (index + listLength) % listLength;
    }

    return list[Math.max(0, Math.min(index, listLength - 1))];
  };

  exports.defineJQueryPlugin = defineJQueryPlugin;
  exports.execute = execute;
  exports.executeAfterTransition = executeAfterTransition;
  exports.findShadowRoot = findShadowRoot;
  exports.getElement = getElement;
  exports.getElementFromSelector = getElementFromSelector;
  exports.getNextActiveElement = getNextActiveElement;
  exports.getSelectorFromElement = getSelectorFromElement;
  exports.getTransitionDurationFromElement = getTransitionDurationFromElement;
  exports.getUID = getUID;
  exports.getjQuery = getjQuery;
  exports.isDisabled = isDisabled;
  exports.isElement = isElement;
  exports.isRTL = isRTL;
  exports.isVisible = isVisible;
  exports.noop = noop;
  exports.onDOMContentLoaded = onDOMContentLoaded;
  exports.reflow = reflow;
  exports.toType = toType;
  exports.triggerTransitionEnd = triggerTransitionEnd;

  Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

}));
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/util/swipe.js":
/*!******************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/util/swipe.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap swipe.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ./config */ "./node_modules/bootstrap/js/dist/util/config.js"), __webpack_require__(/*! ../dom/event-handler */ "./node_modules/bootstrap/js/dist/dom/event-handler.js"), __webpack_require__(/*! ./index */ "./node_modules/bootstrap/js/dist/util/index.js")) :
  0;
})(this, (function (Config, EventHandler, index) { 'use strict';

  const _interopDefaultLegacy = e => e && typeof e === 'object' && 'default' in e ? e : { default: e };

  const Config__default = /*#__PURE__*/_interopDefaultLegacy(Config);
  const EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): util/swipe.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const NAME = 'swipe';
  const EVENT_KEY = '.bs.swipe';
  const EVENT_TOUCHSTART = `touchstart${EVENT_KEY}`;
  const EVENT_TOUCHMOVE = `touchmove${EVENT_KEY}`;
  const EVENT_TOUCHEND = `touchend${EVENT_KEY}`;
  const EVENT_POINTERDOWN = `pointerdown${EVENT_KEY}`;
  const EVENT_POINTERUP = `pointerup${EVENT_KEY}`;
  const POINTER_TYPE_TOUCH = 'touch';
  const POINTER_TYPE_PEN = 'pen';
  const CLASS_NAME_POINTER_EVENT = 'pointer-event';
  const SWIPE_THRESHOLD = 40;
  const Default = {
    endCallback: null,
    leftCallback: null,
    rightCallback: null
  };
  const DefaultType = {
    endCallback: '(function|null)',
    leftCallback: '(function|null)',
    rightCallback: '(function|null)'
  };
  /**
   * Class definition
   */

  class Swipe extends Config__default.default {
    constructor(element, config) {
      super();
      this._element = element;

      if (!element || !Swipe.isSupported()) {
        return;
      }

      this._config = this._getConfig(config);
      this._deltaX = 0;
      this._supportPointerEvents = Boolean(window.PointerEvent);

      this._initEvents();
    } // Getters


    static get Default() {
      return Default;
    }

    static get DefaultType() {
      return DefaultType;
    }

    static get NAME() {
      return NAME;
    } // Public


    dispose() {
      EventHandler__default.default.off(this._element, EVENT_KEY);
    } // Private


    _start(event) {
      if (!this._supportPointerEvents) {
        this._deltaX = event.touches[0].clientX;
        return;
      }

      if (this._eventIsPointerPenTouch(event)) {
        this._deltaX = event.clientX;
      }
    }

    _end(event) {
      if (this._eventIsPointerPenTouch(event)) {
        this._deltaX = event.clientX - this._deltaX;
      }

      this._handleSwipe();

      index.execute(this._config.endCallback);
    }

    _move(event) {
      this._deltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this._deltaX;
    }

    _handleSwipe() {
      const absDeltaX = Math.abs(this._deltaX);

      if (absDeltaX <= SWIPE_THRESHOLD) {
        return;
      }

      const direction = absDeltaX / this._deltaX;
      this._deltaX = 0;

      if (!direction) {
        return;
      }

      index.execute(direction > 0 ? this._config.rightCallback : this._config.leftCallback);
    }

    _initEvents() {
      if (this._supportPointerEvents) {
        EventHandler__default.default.on(this._element, EVENT_POINTERDOWN, event => this._start(event));
        EventHandler__default.default.on(this._element, EVENT_POINTERUP, event => this._end(event));

        this._element.classList.add(CLASS_NAME_POINTER_EVENT);
      } else {
        EventHandler__default.default.on(this._element, EVENT_TOUCHSTART, event => this._start(event));
        EventHandler__default.default.on(this._element, EVENT_TOUCHMOVE, event => this._move(event));
        EventHandler__default.default.on(this._element, EVENT_TOUCHEND, event => this._end(event));
      }
    }

    _eventIsPointerPenTouch(event) {
      return this._supportPointerEvents && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH);
    } // Static


    static isSupported() {
      return 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
    }

  }

  return Swipe;

}));
//# sourceMappingURL=swipe.js.map


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7O0FBR047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTs7O0FBR047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNOzs7QUFHTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsK0ZBQStGLE1BQU07O0FBRXJHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNOzs7QUFHTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9EQUFvRCxPQUFPO0FBQzNEOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7O0FDdGRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsS0FBNEQsNEJB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QTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7QUMzUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxLQUE0RDtBQUM5RCxFQUFFLENBQzBHO0FBQzVHLENBQUMsdUJBQXVCOztBQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMsa0JB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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07OztBQUdOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtCQUErQixtQkFBbUI7QUFDbEQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTs7O0FBR1I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7O0FBRVI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsU0FBUzs7QUFFVDtBQUNBLHVGQUF1Rjs7QUFFdkY7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7OztBQUdBO0FBQ0EsTUFBTTs7O0FBR047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRCxPQUFPO0FBQ3pEOztBQUVBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7OztBQUdWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw4QkFBOEI7O0FBRTlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7O0FDeGRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsS0FBNEQsNEJBQTRCLG1CQUFPLENBQUMsK0RBQVMsR0FBRyxtQkFBTyxDQUFDLCtFQUFvQjtBQUMxSSxFQUFFLENBQ3FJO0FBQ3ZJLENBQUMseUNBQXlDOztBQUUxQywwRkFBMEY7O0FBRTFGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkhBQTJIOztBQUUzSCxlQUFlO0FBQ2YsNERBQTREO0FBQzVELG1HQUFtRztBQUNuRyxvREFBb0Q7QUFDcEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDLG9DQUFvQyxZQUFZLFNBQVMsbUJBQW1CLFVBQVUsdUJBQXVCLGNBQWM7QUFDNUo7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7QUMvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxLQUE0RDtBQUM5RCxFQUFFLENBQ3NHO0FBQ3hHLENBQUMsOEJBQThCOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDOztBQUUxQztBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFROzs7QUFHUjtBQUNBLDRCQUE0Qiw0QkFBNEI7QUFDeEQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7O0FBR047QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EscUVBQXFFOztBQUVyRTtBQUNBO0FBQ0EsTUFBTTs7O0FBR047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUdBQXFHOztBQUVyRzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7O0FBR047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07OztBQUdOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxhQUFhO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLDBCQUEwQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0EsY0FBYyxjQUFjO0FBQzVCOzs7QUFHQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQyxjQUFjLGFBQWEsMEJBQTBCLG1CQUFtQjs7QUFFN0csQ0FBQztBQUNEOzs7Ozs7Ozs7OztBQzlWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLEtBQTRELDRCQUE0QixtQkFBTyxDQUFDLGlFQUFVLEdBQUcsbUJBQU8sQ0FBQyxtRkFBc0IsR0FBRyxtQkFBTyxDQUFDLCtEQUFTO0FBQ2pLLEVBQUUsQ0FDb0o7QUFDdEosQ0FBQyxrREFBa0Q7O0FBRW5ELDBGQUEwRjs7QUFFMUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxVQUFVO0FBQ2xELHNDQUFzQyxVQUFVO0FBQ2hELG9DQUFvQyxVQUFVO0FBQzlDLDBDQUEwQyxVQUFVO0FBQ3BELHNDQUFzQyxVQUFVO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07OztBQUdOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07OztBQUdOO0FBQ0E7QUFDQSxNQUFNOzs7QUFHTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTs7O0FBR047QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLENBQUM7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3NhZ2UvLi9ub2RlX21vZHVsZXMvQGZhbmN5YXBwcy91aS9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9jcmVhdGVQb3BwZXIuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2NvbnRhaW5zLmpzIiwid2VicGFjazovL3NhZ2UvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldENsaXBwaW5nUmVjdC5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0Q29tcG9zaXRlUmVjdC5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0Q29tcHV0ZWRTdHlsZS5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0RG9jdW1lbnRFbGVtZW50LmpzIiwid2VicGFjazovL3NhZ2UvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXREb2N1bWVudFJlY3QuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldEhUTUxFbGVtZW50U2Nyb2xsLmpzIiwid2VicGFjazovL3NhZ2UvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRMYXlvdXRSZWN0LmpzIiwid2VicGFjazovL3NhZ2UvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXROb2RlTmFtZS5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0Tm9kZVNjcm9sbC5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0T2Zmc2V0UGFyZW50LmpzIiwid2VicGFjazovL3NhZ2UvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRQYXJlbnROb2RlLmpzIiwid2VicGFjazovL3NhZ2UvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRTY3JvbGxQYXJlbnQuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFZpZXdwb3J0UmVjdC5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0V2luZG93LmpzIiwid2VicGFjazovL3NhZ2UvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRXaW5kb3dTY3JvbGwuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFdpbmRvd1Njcm9sbEJhclguanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2luc3RhbmNlT2YuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2lzTGF5b3V0Vmlld3BvcnQuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2lzU2Nyb2xsUGFyZW50LmpzIiwid2VicGFjazovL3NhZ2UvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9pc1RhYmxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvbGlzdFNjcm9sbFBhcmVudHMuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZW51bXMuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2FwcGx5U3R5bGVzLmpzIiwid2VicGFjazovL3NhZ2UvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9hcnJvdy5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvY29tcHV0ZVN0eWxlcy5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvZXZlbnRMaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2ZsaXAuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2hpZGUuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2luZGV4LmpzIiwid2VicGFjazovL3NhZ2UvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9vZmZzZXQuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL3BvcHBlck9mZnNldHMuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL3ByZXZlbnRPdmVyZmxvdy5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9wb3BwZXItbGl0ZS5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9wb3BwZXIuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvY29tcHV0ZUF1dG9QbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvY29tcHV0ZU9mZnNldHMuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZGVib3VuY2UuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZGV0ZWN0T3ZlcmZsb3cuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZXhwYW5kVG9IYXNoTWFwLmpzIiwid2VicGFjazovL3NhZ2UvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldEFsdEF4aXMuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRGcmVzaFNpZGVPYmplY3QuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50LmpzIiwid2VicGFjazovL3NhZ2UvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldE9wcG9zaXRlUGxhY2VtZW50LmpzIiwid2VicGFjazovL3NhZ2UvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50LmpzIiwid2VicGFjazovL3NhZ2UvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldFZhcmlhdGlvbi5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9tYXRoLmpzIiwid2VicGFjazovL3NhZ2UvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL21lcmdlQnlOYW1lLmpzIiwid2VicGFjazovL3NhZ2UvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL21lcmdlUGFkZGluZ09iamVjdC5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9vcmRlck1vZGlmaWVycy5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9yZWN0VG9DbGllbnRSZWN0LmpzIiwid2VicGFjazovL3NhZ2UvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL3VzZXJBZ2VudC5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy93aXRoaW4uanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvZGlzdC9iYXNlLWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9qcy9kaXN0L2J1dHRvbi5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9qcy9kaXN0L2Nhcm91c2VsLmpzIiwid2VicGFjazovL3NhZ2UvLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL2pzL2Rpc3QvY29sbGFwc2UuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvZGlzdC9kb20vZGF0YS5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9qcy9kaXN0L2RvbS9ldmVudC1oYW5kbGVyLmpzIiwid2VicGFjazovL3NhZ2UvLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL2pzL2Rpc3QvZG9tL21hbmlwdWxhdG9yLmpzIiwid2VicGFjazovL3NhZ2UvLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL2pzL2Rpc3QvZG9tL3NlbGVjdG9yLWVuZ2luZS5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9qcy9kaXN0L2Ryb3Bkb3duLmpzIiwid2VicGFjazovL3NhZ2UvLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL2pzL2Rpc3QvdXRpbC9jb25maWcuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvZGlzdC91dGlsL2luZGV4LmpzIiwid2VicGFjazovL3NhZ2UvLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL2pzL2Rpc3QvdXRpbC9zd2lwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0PSh0LGU9MWU0KT0+KHQ9cGFyc2VGbG9hdCh0K1wiXCIpfHwwLE1hdGgucm91bmQoKHQrTnVtYmVyLkVQU0lMT04pKmUpL2UpLGU9ZnVuY3Rpb24odCl7aWYoISh0JiZ0IGluc3RhbmNlb2YgRWxlbWVudCYmdC5vZmZzZXRQYXJlbnQpKXJldHVybiExO2NvbnN0IGU9dC5zY3JvbGxIZWlnaHQ+dC5jbGllbnRIZWlnaHQsaT13aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0KS5vdmVyZmxvd1ksbj0tMSE9PWkuaW5kZXhPZihcImhpZGRlblwiKSxzPS0xIT09aS5pbmRleE9mKFwidmlzaWJsZVwiKTtyZXR1cm4gZSYmIW4mJiFzfSxpPWZ1bmN0aW9uKHQsbil7cmV0dXJuISghdHx8dD09PWRvY3VtZW50LmJvZHl8fG4mJnQ9PT1uKSYmKGUodCk/dDppKHQucGFyZW50RWxlbWVudCxuKSl9LG49ZnVuY3Rpb24odCl7dmFyIGU9KG5ldyBET01QYXJzZXIpLnBhcnNlRnJvbVN0cmluZyh0LFwidGV4dC9odG1sXCIpLmJvZHk7aWYoZS5jaGlsZEVsZW1lbnRDb3VudD4xKXtmb3IodmFyIGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtlLmZpcnN0Q2hpbGQ7KWkuYXBwZW5kQ2hpbGQoZS5maXJzdENoaWxkKTtyZXR1cm4gaX1yZXR1cm4gZS5maXJzdENoaWxkfSxzPXQ9PmAke3R8fFwiXCJ9YC5zcGxpdChcIiBcIikuZmlsdGVyKCh0PT4hIXQpKSxvPSh0LGUsaSk9PntzKGUpLmZvckVhY2goKGU9Pnt0JiZ0LmNsYXNzTGlzdC50b2dnbGUoZSxpfHwhMSl9KSl9O2NsYXNzIGF7Y29uc3RydWN0b3IodCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJwYWdlWFwiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTp2b2lkIDB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInBhZ2VZXCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOnZvaWQgMH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiY2xpZW50WFwiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTp2b2lkIDB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcImNsaWVudFlcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6dm9pZCAwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJpZFwiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTp2b2lkIDB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInRpbWVcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6dm9pZCAwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJuYXRpdmVQb2ludGVyXCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOnZvaWQgMH0pLHRoaXMubmF0aXZlUG9pbnRlcj10LHRoaXMucGFnZVg9dC5wYWdlWCx0aGlzLnBhZ2VZPXQucGFnZVksdGhpcy5jbGllbnRYPXQuY2xpZW50WCx0aGlzLmNsaWVudFk9dC5jbGllbnRZLHRoaXMuaWQ9c2VsZi5Ub3VjaCYmdCBpbnN0YW5jZW9mIFRvdWNoP3QuaWRlbnRpZmllcjotMSx0aGlzLnRpbWU9RGF0ZS5ub3coKX19Y29uc3Qgcj17cGFzc2l2ZTohMX07Y2xhc3MgbHtjb25zdHJ1Y3Rvcih0LHtzdGFydDplPSgoKT0+ITApLG1vdmU6aT0oKCk9Pnt9KSxlbmQ6bj0oKCk9Pnt9KX0pe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiZWxlbWVudFwiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTp2b2lkIDB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInN0YXJ0Q2FsbGJhY2tcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6dm9pZCAwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJtb3ZlQ2FsbGJhY2tcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6dm9pZCAwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJlbmRDYWxsYmFja1wiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTp2b2lkIDB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcImN1cnJlbnRQb2ludGVyc1wiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpbXX0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwic3RhcnRQb2ludGVyc1wiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpbXX0pLHRoaXMuZWxlbWVudD10LHRoaXMuc3RhcnRDYWxsYmFjaz1lLHRoaXMubW92ZUNhbGxiYWNrPWksdGhpcy5lbmRDYWxsYmFjaz1uO2Zvcihjb25zdCB0IG9mW1wib25Qb2ludGVyU3RhcnRcIixcIm9uVG91Y2hTdGFydFwiLFwib25Nb3ZlXCIsXCJvblRvdWNoRW5kXCIsXCJvblBvaW50ZXJFbmRcIixcIm9uV2luZG93Qmx1clwiXSl0aGlzW3RdPXRoaXNbdF0uYmluZCh0aGlzKTt0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLHRoaXMub25Qb2ludGVyU3RhcnQsciksdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsdGhpcy5vblRvdWNoU3RhcnQsciksdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIix0aGlzLm9uTW92ZSxyKSx0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsdGhpcy5vblRvdWNoRW5kKSx0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoY2FuY2VsXCIsdGhpcy5vblRvdWNoRW5kKX1vblBvaW50ZXJTdGFydCh0KXtpZighdC5idXR0b25zfHwwIT09dC5idXR0b24pcmV0dXJuO2NvbnN0IGU9bmV3IGEodCk7dGhpcy5jdXJyZW50UG9pbnRlcnMuc29tZSgodD0+dC5pZD09PWUuaWQpKXx8dGhpcy50cmlnZ2VyUG9pbnRlclN0YXJ0KGUsdCkmJih3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLHRoaXMub25Nb3ZlKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIix0aGlzLm9uUG9pbnRlckVuZCksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsdGhpcy5vbldpbmRvd0JsdXIpKX1vblRvdWNoU3RhcnQodCl7Zm9yKGNvbnN0IGUgb2YgQXJyYXkuZnJvbSh0LmNoYW5nZWRUb3VjaGVzfHxbXSkpdGhpcy50cmlnZ2VyUG9pbnRlclN0YXJ0KG5ldyBhKGUpLHQpO3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLHRoaXMub25XaW5kb3dCbHVyKX1vbk1vdmUodCl7Y29uc3QgZT10aGlzLmN1cnJlbnRQb2ludGVycy5zbGljZSgpLGk9XCJjaGFuZ2VkVG91Y2hlc1wiaW4gdD9BcnJheS5mcm9tKHQuY2hhbmdlZFRvdWNoZXN8fFtdKS5tYXAoKHQ9Pm5ldyBhKHQpKSk6W25ldyBhKHQpXSxuPVtdO2Zvcihjb25zdCB0IG9mIGkpe2NvbnN0IGU9dGhpcy5jdXJyZW50UG9pbnRlcnMuZmluZEluZGV4KChlPT5lLmlkPT09dC5pZCkpO2U8MHx8KG4ucHVzaCh0KSx0aGlzLmN1cnJlbnRQb2ludGVyc1tlXT10KX1uLmxlbmd0aCYmdGhpcy5tb3ZlQ2FsbGJhY2sodCx0aGlzLmN1cnJlbnRQb2ludGVycy5zbGljZSgpLGUpfW9uUG9pbnRlckVuZCh0KXt0LmJ1dHRvbnM+MCYmMCE9PXQuYnV0dG9ufHwodGhpcy50cmlnZ2VyUG9pbnRlckVuZCh0LG5ldyBhKHQpKSx3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLHRoaXMub25Nb3ZlKSx3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIix0aGlzLm9uUG9pbnRlckVuZCksd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJibHVyXCIsdGhpcy5vbldpbmRvd0JsdXIpKX1vblRvdWNoRW5kKHQpe2Zvcihjb25zdCBlIG9mIEFycmF5LmZyb20odC5jaGFuZ2VkVG91Y2hlc3x8W10pKXRoaXMudHJpZ2dlclBvaW50ZXJFbmQodCxuZXcgYShlKSl9dHJpZ2dlclBvaW50ZXJTdGFydCh0LGUpe3JldHVybiEhdGhpcy5zdGFydENhbGxiYWNrKGUsdCx0aGlzLmN1cnJlbnRQb2ludGVycy5zbGljZSgpKSYmKHRoaXMuY3VycmVudFBvaW50ZXJzLnB1c2godCksdGhpcy5zdGFydFBvaW50ZXJzLnB1c2godCksITApfXRyaWdnZXJQb2ludGVyRW5kKHQsZSl7Y29uc3QgaT10aGlzLmN1cnJlbnRQb2ludGVycy5maW5kSW5kZXgoKHQ9PnQuaWQ9PT1lLmlkKSk7aTwwfHwodGhpcy5jdXJyZW50UG9pbnRlcnMuc3BsaWNlKGksMSksdGhpcy5zdGFydFBvaW50ZXJzLnNwbGljZShpLDEpLHRoaXMuZW5kQ2FsbGJhY2sodCxlLHRoaXMuY3VycmVudFBvaW50ZXJzLnNsaWNlKCkpKX1vbldpbmRvd0JsdXIoKXt0aGlzLmNsZWFyKCl9Y2xlYXIoKXtmb3IoO3RoaXMuY3VycmVudFBvaW50ZXJzLmxlbmd0aDspe2NvbnN0IHQ9dGhpcy5jdXJyZW50UG9pbnRlcnNbdGhpcy5jdXJyZW50UG9pbnRlcnMubGVuZ3RoLTFdO3RoaXMuY3VycmVudFBvaW50ZXJzLnNwbGljZSh0aGlzLmN1cnJlbnRQb2ludGVycy5sZW5ndGgtMSwxKSx0aGlzLnN0YXJ0UG9pbnRlcnMuc3BsaWNlKHRoaXMuY3VycmVudFBvaW50ZXJzLmxlbmd0aC0xLDEpLHRoaXMuZW5kQ2FsbGJhY2sobmV3IEV2ZW50KFwidG91Y2hlbmRcIix7YnViYmxlczohMCxjYW5jZWxhYmxlOiEwLGNsaWVudFg6dC5jbGllbnRYLGNsaWVudFk6dC5jbGllbnRZfSksdCx0aGlzLmN1cnJlbnRQb2ludGVycy5zbGljZSgpKX19c3RvcCgpe3RoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsdGhpcy5vblBvaW50ZXJTdGFydCxyKSx0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIix0aGlzLm9uVG91Y2hTdGFydCxyKSx0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLHRoaXMub25Nb3ZlLHIpLHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIix0aGlzLm9uVG91Y2hFbmQpLHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hjYW5jZWxcIix0aGlzLm9uVG91Y2hFbmQpLHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsdGhpcy5vbk1vdmUpLHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLHRoaXMub25Qb2ludGVyRW5kKSx3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImJsdXJcIix0aGlzLm9uV2luZG93Qmx1cil9fWZ1bmN0aW9uIGModCxlKXtyZXR1cm4gZT9NYXRoLnNxcnQoTWF0aC5wb3coZS5jbGllbnRYLXQuY2xpZW50WCwyKStNYXRoLnBvdyhlLmNsaWVudFktdC5jbGllbnRZLDIpKTowfWZ1bmN0aW9uIGgodCxlKXtyZXR1cm4gZT97Y2xpZW50WDoodC5jbGllbnRYK2UuY2xpZW50WCkvMixjbGllbnRZOih0LmNsaWVudFkrZS5jbGllbnRZKS8yfTp0fWNvbnN0IGQ9dD0+XCJvYmplY3RcIj09dHlwZW9mIHQmJm51bGwhPT10JiZ0LmNvbnN0cnVjdG9yPT09T2JqZWN0JiZcIltvYmplY3QgT2JqZWN0XVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHQpLHU9KHQsLi4uZSk9Pntjb25zdCBpPWUubGVuZ3RoO2ZvcihsZXQgbj0wO248aTtuKyspe2NvbnN0IGk9ZVtuXXx8e307T2JqZWN0LmVudHJpZXMoaSkuZm9yRWFjaCgoKFtlLGldKT0+e2NvbnN0IG49QXJyYXkuaXNBcnJheShpKT9bXTp7fTt0W2VdfHxPYmplY3QuYXNzaWduKHQse1tlXTpufSksZChpKT9PYmplY3QuYXNzaWduKHRbZV0sdShuLGkpKTpBcnJheS5pc0FycmF5KGkpP09iamVjdC5hc3NpZ24odCx7W2VdOlsuLi5pXX0pOk9iamVjdC5hc3NpZ24odCx7W2VdOml9KX0pKX1yZXR1cm4gdH0scD1mdW5jdGlvbih0LGUpe3JldHVybiB0LnNwbGl0KFwiLlwiKS5yZWR1Y2UoKCh0LGUpPT5cIm9iamVjdFwiPT10eXBlb2YgdD90W2VdOnZvaWQgMCksZSl9O2NsYXNzIGZ7Y29uc3RydWN0b3IodD17fSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJvcHRpb25zXCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOnR9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcImV2ZW50c1wiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpuZXcgTWFwfSksdGhpcy5zZXRPcHRpb25zKHQpO2Zvcihjb25zdCB0IG9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKSkpdC5zdGFydHNXaXRoKFwib25cIikmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHRoaXNbdF0mJih0aGlzW3RdPXRoaXNbdF0uYmluZCh0aGlzKSl9c2V0T3B0aW9ucyh0KXt0aGlzLm9wdGlvbnM9dD91KHt9LHRoaXMuY29uc3RydWN0b3IuZGVmYXVsdHMsdCk6e307Zm9yKGNvbnN0W3QsZV1vZiBPYmplY3QuZW50cmllcyh0aGlzLm9wdGlvbihcIm9uXCIpfHx7fSkpdGhpcy5vbih0LGUpfW9wdGlvbih0LC4uLmUpe2xldCBpPXAodCx0aGlzLm9wdGlvbnMpO3JldHVybiBpJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBpJiYoaT1pLmNhbGwodGhpcyx0aGlzLC4uLmUpKSxpfW9wdGlvbkZvcih0LGUsaSwuLi5uKXtsZXQgcz1wKGUsdCk7dmFyIG87XCJzdHJpbmdcIiE9dHlwZW9mKG89cyl8fGlzTmFOKG8pfHxpc05hTihwYXJzZUZsb2F0KG8pKXx8KHM9cGFyc2VGbG9hdChzKSksXCJ0cnVlXCI9PT1zJiYocz0hMCksXCJmYWxzZVwiPT09cyYmKHM9ITEpLHMmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHMmJihzPXMuY2FsbCh0aGlzLHRoaXMsdCwuLi5uKSk7bGV0IGE9cChlLHRoaXMub3B0aW9ucyk7cmV0dXJuIGEmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGE/cz1hLmNhbGwodGhpcyx0aGlzLHQsLi4ubixzKTp2b2lkIDA9PT1zJiYocz1hKSx2b2lkIDA9PT1zP2k6c31jbih0KXtjb25zdCBlPXRoaXMub3B0aW9ucy5jbGFzc2VzO3JldHVybiBlJiZlW3RdfHxcIlwifWxvY2FsaXplKHQsZT1bXSl7dD1TdHJpbmcodCkucmVwbGFjZSgvXFx7XFx7KFxcdyspLj8oXFx3Kyk/XFx9XFx9L2csKCh0LGUsaSk9PntsZXQgbj1cIlwiO3JldHVybiBpP249dGhpcy5vcHRpb24oYCR7ZVswXStlLnRvTG93ZXJDYXNlKCkuc3Vic3RyaW5nKDEpfS5sMTBuLiR7aX1gKTplJiYobj10aGlzLm9wdGlvbihgbDEwbi4ke2V9YCkpLG58fChuPXQpLG59KSk7Zm9yKGxldCBpPTA7aTxlLmxlbmd0aDtpKyspdD10LnNwbGl0KGVbaV1bMF0pLmpvaW4oZVtpXVsxXSk7cmV0dXJuIHQ9dC5yZXBsYWNlKC9cXHtcXHsoLio/KVxcfVxcfS9nLCgodCxlKT0+ZSkpfW9uKHQsZSl7bGV0IGk9W107XCJzdHJpbmdcIj09dHlwZW9mIHQ/aT10LnNwbGl0KFwiIFwiKTpBcnJheS5pc0FycmF5KHQpJiYoaT10KSx0aGlzLmV2ZW50c3x8KHRoaXMuZXZlbnRzPW5ldyBNYXApLGkuZm9yRWFjaCgodD0+e2xldCBpPXRoaXMuZXZlbnRzLmdldCh0KTtpfHwodGhpcy5ldmVudHMuc2V0KHQsW10pLGk9W10pLGkuaW5jbHVkZXMoZSl8fGkucHVzaChlKSx0aGlzLmV2ZW50cy5zZXQodCxpKX0pKX1vZmYodCxlKXtsZXQgaT1bXTtcInN0cmluZ1wiPT10eXBlb2YgdD9pPXQuc3BsaXQoXCIgXCIpOkFycmF5LmlzQXJyYXkodCkmJihpPXQpLGkuZm9yRWFjaCgodD0+e2NvbnN0IGk9dGhpcy5ldmVudHMuZ2V0KHQpO2lmKEFycmF5LmlzQXJyYXkoaSkpe2NvbnN0IHQ9aS5pbmRleE9mKGUpO3Q+LTEmJmkuc3BsaWNlKHQsMSl9fSkpfWVtaXQodCwuLi5lKXtbLi4udGhpcy5ldmVudHMuZ2V0KHQpfHxbXV0uZm9yRWFjaCgodD0+dCh0aGlzLC4uLmUpKSksXCIqXCIhPT10JiZ0aGlzLmVtaXQoXCIqXCIsdCwuLi5lKX19T2JqZWN0LmRlZmluZVByb3BlcnR5KGYsXCJ2ZXJzaW9uXCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOlwiNS4wLjE1XCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZixcImRlZmF1bHRzXCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOnt9fSk7Y2xhc3MgbSBleHRlbmRzIGZ7Y29uc3RydWN0b3IodD17fSl7c3VwZXIodCksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJwbHVnaW5zXCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOnt9fSl9YXR0YWNoUGx1Z2lucyh0PXt9KXtjb25zdCBlPW5ldyBNYXA7Zm9yKGNvbnN0W2ksbl1vZiBPYmplY3QuZW50cmllcyh0KSl7Y29uc3QgdD10aGlzLm9wdGlvbihpKSxzPXRoaXMucGx1Z2luc1tpXTtzfHwhMT09PXQ/cyYmITE9PT10JiYocy5kZXRhY2goKSxkZWxldGUgdGhpcy5wbHVnaW5zW2ldKTplLnNldChpLG5ldyBuKHRoaXMsdHx8e30pKX1mb3IoY29uc3RbdCxpXW9mIGUpdGhpcy5wbHVnaW5zW3RdPWksaS5hdHRhY2goKTt0aGlzLmVtaXQoXCJhdHRhY2hQbHVnaW5zXCIpfWRldGFjaFBsdWdpbnModCl7dD10fHxPYmplY3Qua2V5cyh0aGlzLnBsdWdpbnMpO2Zvcihjb25zdCBlIG9mIHQpe2NvbnN0IHQ9dGhpcy5wbHVnaW5zW2VdO3QmJnQuZGV0YWNoKCksZGVsZXRlIHRoaXMucGx1Z2luc1tlXX1yZXR1cm4gdGhpcy5lbWl0KFwiZGV0YWNoUGx1Z2luc1wiKSx0aGlzfX12YXIgZzshZnVuY3Rpb24odCl7dFt0LkluaXQ9MF09XCJJbml0XCIsdFt0LkVycm9yPTFdPVwiRXJyb3JcIix0W3QuUmVhZHk9Ml09XCJSZWFkeVwiLHRbdC5QYW5uaW5nPTNdPVwiUGFubmluZ1wiLHRbdC5Nb3VzZW1vdmU9NF09XCJNb3VzZW1vdmVcIix0W3QuRGVzdHJveT01XT1cIkRlc3Ryb3lcIn0oZ3x8KGc9e30pKTtjb25zdCBiPVtcImFcIixcImJcIixcImNcIixcImRcIixcImVcIixcImZcIl0sdj17UEFOVVA6XCJNb3ZlIHVwXCIsUEFORE9XTjpcIk1vdmUgZG93blwiLFBBTkxFRlQ6XCJNb3ZlIGxlZnRcIixQQU5SSUdIVDpcIk1vdmUgcmlnaHRcIixaT09NSU46XCJab29tIGluXCIsWk9PTU9VVDpcIlpvb20gb3V0XCIsVE9HR0xFWk9PTTpcIlRvZ2dsZSB6b29tIGxldmVsXCIsVE9HR0xFMVRPMTpcIlRvZ2dsZSB6b29tIGxldmVsXCIsSVRFUkFURVpPT006XCJUb2dnbGUgem9vbSBsZXZlbFwiLFJPVEFURUNDVzpcIlJvdGF0ZSBjb3VudGVyY2xvY2t3aXNlXCIsUk9UQVRFQ1c6XCJSb3RhdGUgY2xvY2t3aXNlXCIsRkxJUFg6XCJGbGlwIGhvcml6b250YWxseVwiLEZMSVBZOlwiRmxpcCB2ZXJ0aWNhbGx5XCIsRklUWDpcIkZpdCBob3Jpem9udGFsbHlcIixGSVRZOlwiRml0IHZlcnRpY2FsbHlcIixSRVNFVDpcIlJlc2V0XCIsVE9HR0xFRlM6XCJUb2dnbGUgZnVsbHNjcmVlblwifSx5PXtjb250ZW50Om51bGwsd2lkdGg6XCJhdXRvXCIsaGVpZ2h0OlwiYXV0b1wiLHBhbk1vZGU6XCJkcmFnXCIsdG91Y2g6ITAsZHJhZ01pblRocmVzaG9sZDozLGxvY2tBeGlzOiExLG1vdXNlTW92ZUZhY3RvcjoxLG1vdXNlTW92ZUZyaWN0aW9uOi4xMix6b29tOiEwLHBpbmNoVG9ab29tOiEwLHBhbk9ubHlab29tZWQ6XCJhdXRvXCIsbWluU2NhbGU6MSxtYXhTY2FsZToyLGZyaWN0aW9uOi4yNSxkcmFnRnJpY3Rpb246LjM1LGRlY2VsRnJpY3Rpb246LjA1LGNsaWNrOlwidG9nZ2xlWm9vbVwiLGRibENsaWNrOiExLHdoZWVsOlwiem9vbVwiLHdoZWVsTGltaXQ6NyxzcGlubmVyOiEwLGJvdW5kczpcImF1dG9cIixpbmZpbml0ZTohMSxydWJiZXJiYW5kOiEwLGJvdW5jZTohMCxtYXhWZWxvY2l0eTo3NSx0cmFuc2Zvcm1QYXJlbnQ6ITEsY2xhc3Nlczp7Y29udGVudDpcImYtcGFuem9vbV9fY29udGVudFwiLGlzTG9hZGluZzpcImlzLWxvYWRpbmdcIixjYW5ab29tSW46XCJjYW4tem9vbV9pblwiLGNhblpvb21PdXQ6XCJjYW4tem9vbV9vdXRcIixpc0RyYWdnYWJsZTpcImlzLWRyYWdnYWJsZVwiLGlzRHJhZ2dpbmc6XCJpcy1kcmFnZ2luZ1wiLGluRnVsbHNjcmVlbjpcImluLWZ1bGxzY3JlZW5cIixodG1sSGFzRnVsbHNjcmVlbjpcIndpdGgtcGFuem9vbS1pbi1mdWxsc2NyZWVuXCJ9LGwxMG46dn0sdz0nPGRpdiBjbGFzcz1cImYtc3Bpbm5lclwiPjxzdmcgdmlld0JveD1cIjAgMCA1MCA1MFwiPjxjaXJjbGUgY3g9XCIyNVwiIGN5PVwiMjVcIiByPVwiMjBcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVwiMjVcIiBjeT1cIjI1XCIgcj1cIjIwXCI+PC9jaXJjbGU+PC9zdmc+PC9kaXY+Jyx4PXQ9PnQmJm51bGwhPT10JiZ0IGluc3RhbmNlb2YgRWxlbWVudCYmXCJub2RlVHlwZVwiaW4gdCxFPSh0LGUpPT57dCYmcyhlKS5mb3JFYWNoKChlPT57dC5jbGFzc0xpc3QucmVtb3ZlKGUpfSkpfSxTPSh0LGUpPT57dCYmcyhlKS5mb3JFYWNoKChlPT57dC5jbGFzc0xpc3QuYWRkKGUpfSkpfSxQPXthOjEsYjowLGM6MCxkOjEsZTowLGY6MH07bGV0IEM9bnVsbCxNPW51bGw7Y2xhc3MgVCBleHRlbmRzIG17Z2V0IGlzVG91Y2hEZXZpY2UoKXtyZXR1cm4gbnVsbD09PU0mJihNPXdpbmRvdy5tYXRjaE1lZGlhKFwiKGhvdmVyOiBub25lKVwiKS5tYXRjaGVzKSxNfWdldCBpc01vYmlsZSgpe3JldHVybiBudWxsPT09QyYmKEM9L2lQaG9uZXxpUGFkfGlQb2R8QW5kcm9pZC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpLEN9Z2V0IHBhbk1vZGUoKXtyZXR1cm5cIm1vdXNlbW92ZVwiIT09dGhpcy5vcHRpb25zLnBhbk1vZGV8fHRoaXMuaXNUb3VjaERldmljZT9cImRyYWdcIjpcIm1vdXNlbW92ZVwifWdldCBwYW5Pbmx5Wm9vbWVkKCl7Y29uc3QgdD10aGlzLm9wdGlvbnMucGFuT25seVpvb21lZDtyZXR1cm5cImF1dG9cIj09PXQ/dGhpcy5pc1RvdWNoRGV2aWNlOnR9Z2V0IGlzSW5maW5pdGUoKXtyZXR1cm4gdGhpcy5vcHRpb24oXCJpbmZpbml0ZVwiKX1nZXQgYW5nbGUoKXtyZXR1cm4gMTgwKk1hdGguYXRhbjIodGhpcy5jdXJyZW50LmIsdGhpcy5jdXJyZW50LmEpL01hdGguUEl8fDB9Z2V0IHRhcmdldEFuZ2xlKCl7cmV0dXJuIDE4MCpNYXRoLmF0YW4yKHRoaXMudGFyZ2V0LmIsdGhpcy50YXJnZXQuYSkvTWF0aC5QSXx8MH1nZXQgc2NhbGUoKXtjb25zdHthOnQsYjplfT10aGlzLmN1cnJlbnQ7cmV0dXJuIE1hdGguc3FydCh0KnQrZSplKXx8MX1nZXQgdGFyZ2V0U2NhbGUoKXtjb25zdHthOnQsYjplfT10aGlzLnRhcmdldDtyZXR1cm4gTWF0aC5zcXJ0KHQqdCtlKmUpfHwxfWdldCBtaW5TY2FsZSgpe3JldHVybiB0aGlzLm9wdGlvbihcIm1pblNjYWxlXCIpfHwxfWdldCBmdWxsU2NhbGUoKXtjb25zdHtjb250ZW50UmVjdDp0fT10aGlzO3JldHVybiB0LmZ1bGxXaWR0aC90LmZpdFdpZHRofHwxfWdldCBtYXhTY2FsZSgpe3JldHVybiB0aGlzLmZ1bGxTY2FsZSoodGhpcy5vcHRpb24oXCJtYXhTY2FsZVwiKXx8MSl8fDF9Z2V0IGNvdmVyU2NhbGUoKXtjb25zdHtjb250YWluZXJSZWN0OnQsY29udGVudFJlY3Q6ZX09dGhpcyxpPU1hdGgubWF4KHQuaGVpZ2h0L2UuZml0SGVpZ2h0LHQud2lkdGgvZS5maXRXaWR0aCl8fDE7cmV0dXJuIE1hdGgubWluKHRoaXMuZnVsbFNjYWxlLGkpfWdldCBpc1NjYWxpbmcoKXtyZXR1cm4gTWF0aC5hYnModGhpcy50YXJnZXRTY2FsZS10aGlzLnNjYWxlKT4xZS01JiYhdGhpcy5pc1Jlc3Rpbmd9Z2V0IGlzQ29udGVudExvYWRpbmcoKXtjb25zdCB0PXRoaXMuY29udGVudDtyZXR1cm4hISh0JiZ0IGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCkmJiF0LmNvbXBsZXRlfWdldCBpc1Jlc3RpbmcoKXtpZih0aGlzLmlzQm91bmNpbmdYfHx0aGlzLmlzQm91bmNpbmdZKXJldHVybiExO2Zvcihjb25zdCB0IG9mIGIpe2NvbnN0IGU9XCJlXCI9PXR8fFwiZlwiPT09dD8uMDAxOjFlLTU7aWYoTWF0aC5hYnModGhpcy50YXJnZXRbdF0tdGhpcy5jdXJyZW50W3RdKT5lKXJldHVybiExfXJldHVybiEoIXRoaXMuaWdub3JlQm91bmRzJiYhdGhpcy5jaGVja0JvdW5kcygpLmluQm91bmRzKX1jb25zdHJ1Y3Rvcih0LGU9e30saT17fSl7dmFyIHM7aWYoc3VwZXIoZSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJwb2ludGVyVHJhY2tlclwiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpudWxsfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJyZXNpemVPYnNlcnZlclwiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpudWxsfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJ1cGRhdGVUaW1lclwiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpudWxsfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJjbGlja1RpbWVyXCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOm51bGx9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInJBRlwiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpudWxsfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJpc1RpY2tpbmdcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6ITF9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcImZyaWN0aW9uXCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOjB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcImlnbm9yZUJvdW5kc1wiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTohMX0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiaXNCb3VuY2luZ1hcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6ITF9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcImlzQm91bmNpbmdZXCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOiExfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJjbGlja3NcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6MH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwidHJhY2tpbmdQb2ludHNcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6W119KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInB3dFwiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTowfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJjd2RcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6MH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwicG1tZVwiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTp2b2lkIDB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInN0YXRlXCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOmcuSW5pdH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiaXNEcmFnZ2luZ1wiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTohMX0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiY29udGFpbmVyXCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOnZvaWQgMH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiY29udGVudFwiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTp2b2lkIDB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInNwaW5uZXJcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6bnVsbH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiY29udGFpbmVyUmVjdFwiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTp7d2lkdGg6MCxoZWlnaHQ6MCxpbm5lcldpZHRoOjAsaW5uZXJIZWlnaHQ6MH19KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcImNvbnRlbnRSZWN0XCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOnt0b3A6MCxyaWdodDowLGJvdHRvbTowLGxlZnQ6MCxmdWxsV2lkdGg6MCxmdWxsSGVpZ2h0OjAsZml0V2lkdGg6MCxmaXRIZWlnaHQ6MCx3aWR0aDowLGhlaWdodDowfX0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiZHJhZ1N0YXJ0XCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOnt4OjAseTowLHRvcDowLGxlZnQ6MCx0aW1lOjB9fSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJkcmFnT2Zmc2V0XCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOnt4OjAseTowLHRpbWU6MH19KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcImN1cnJlbnRcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6T2JqZWN0LmFzc2lnbih7fSxQKX0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwidGFyZ2V0XCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOk9iamVjdC5hc3NpZ24oe30sUCl9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInZlbG9jaXR5XCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOnthOjAsYjowLGM6MCxkOjAsZTowLGY6MH19KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcImxvY2tlZEF4aXNcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6ITF9KSwhdCl0aHJvdyBuZXcgRXJyb3IoXCJDb250YWluZXIgRWxlbWVudCBOb3QgRm91bmRcIik7dGhpcy5jb250YWluZXI9dCx0aGlzLmluaXRDb250ZW50KCksdGhpcy5hdHRhY2hQbHVnaW5zKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxULlBsdWdpbnMpLGkpKSx0aGlzLmVtaXQoXCJpbml0XCIpO2NvbnN0IG89dGhpcy5jb250ZW50O2lmKG8uYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIix0aGlzLm9uTG9hZCksby5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIix0aGlzLm9uRXJyb3IpLHRoaXMuaXNDb250ZW50TG9hZGluZyl7aWYodGhpcy5vcHRpb24oXCJzcGlubmVyXCIpKXt0LmNsYXNzTGlzdC5hZGQodGhpcy5jbihcImlzTG9hZGluZ1wiKSk7Y29uc3QgZT1uKHcpOyF0LmNvbnRhaW5zKG8pfHxvLnBhcmVudEVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MUGljdHVyZUVsZW1lbnQ/dGhpcy5zcGlubmVyPXQuYXBwZW5kQ2hpbGQoZSk6dGhpcy5zcGlubmVyPShudWxsPT09KHM9by5wYXJlbnRFbGVtZW50KXx8dm9pZCAwPT09cz92b2lkIDA6cy5pbnNlcnRCZWZvcmUoZSxvKSl8fG51bGx9dGhpcy5lbWl0KFwiYmVmb3JlTG9hZFwiKX1lbHNlIHF1ZXVlTWljcm90YXNrKCgoKT0+e3RoaXMuZW5hYmxlKCl9KSl9aW5pdENvbnRlbnQoKXtjb25zdHtjb250YWluZXI6dH09dGhpcyxlPXRoaXMuY24oXCJjb250ZW50XCIpO2xldCBpPXRoaXMub3B0aW9uKFwiY29udGVudFwiKXx8dC5xdWVyeVNlbGVjdG9yKGAuJHtlfWApO2lmKGl8fChpPXQucXVlcnlTZWxlY3RvcihcImltZyxwaWN0dXJlXCIpfHx0LmZpcnN0RWxlbWVudENoaWxkLGkmJlMoaSxlKSksaSBpbnN0YW5jZW9mIEhUTUxQaWN0dXJlRWxlbWVudCYmKGk9aS5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpKSwhaSl0aHJvdyBuZXcgRXJyb3IoXCJObyBjb250ZW50IGZvdW5kXCIpO3RoaXMuY29udGVudD1pfW9uTG9hZCgpe3RoaXMuc3Bpbm5lciYmKHRoaXMuc3Bpbm5lci5yZW1vdmUoKSx0aGlzLnNwaW5uZXI9bnVsbCksdGhpcy5vcHRpb24oXCJzcGlubmVyXCIpJiZ0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY24oXCJpc0xvYWRpbmdcIikpLHRoaXMuZW1pdChcImFmdGVyTG9hZFwiKSx0aGlzLnN0YXRlPT09Zy5Jbml0P3RoaXMuZW5hYmxlKCk6dGhpcy51cGRhdGVNZXRyaWNzKCl9b25FcnJvcigpe3RoaXMuc3RhdGUhPT1nLkRlc3Ryb3kmJih0aGlzLnNwaW5uZXImJih0aGlzLnNwaW5uZXIucmVtb3ZlKCksdGhpcy5zcGlubmVyPW51bGwpLHRoaXMuc3RvcCgpLHRoaXMuZGV0YWNoRXZlbnRzKCksdGhpcy5zdGF0ZT1nLkVycm9yLHRoaXMuZW1pdChcImVycm9yXCIpKX1hdHRhY2hPYnNlcnZlcigpe3ZhciB0O2NvbnN0IGU9KCk9Pk1hdGguYWJzKHRoaXMuY29udGFpbmVyUmVjdC53aWR0aC10aGlzLmNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCk+LjF8fE1hdGguYWJzKHRoaXMuY29udGFpbmVyUmVjdC5oZWlnaHQtdGhpcy5jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0KT4uMTt0aGlzLnJlc2l6ZU9ic2VydmVyfHx2b2lkIDA9PT13aW5kb3cuUmVzaXplT2JzZXJ2ZXJ8fCh0aGlzLnJlc2l6ZU9ic2VydmVyPW5ldyBSZXNpemVPYnNlcnZlcigoKCk9Pnt0aGlzLnVwZGF0ZVRpbWVyfHwoZSgpPyh0aGlzLm9uUmVzaXplKCksdGhpcy5pc01vYmlsZSYmKHRoaXMudXBkYXRlVGltZXI9c2V0VGltZW91dCgoKCk9PntlKCkmJnRoaXMub25SZXNpemUoKSx0aGlzLnVwZGF0ZVRpbWVyPW51bGx9KSw1MDApKSk6dGhpcy51cGRhdGVUaW1lciYmKGNsZWFyVGltZW91dCh0aGlzLnVwZGF0ZVRpbWVyKSx0aGlzLnVwZGF0ZVRpbWVyPW51bGwpKX0pKSksbnVsbD09PSh0PXRoaXMucmVzaXplT2JzZXJ2ZXIpfHx2b2lkIDA9PT10fHx0Lm9ic2VydmUodGhpcy5jb250YWluZXIpfWRldGFjaE9ic2VydmVyKCl7dmFyIHQ7bnVsbD09PSh0PXRoaXMucmVzaXplT2JzZXJ2ZXIpfHx2b2lkIDA9PT10fHx0LmRpc2Nvbm5lY3QoKX1hdHRhY2hFdmVudHMoKXtjb25zdHtjb250YWluZXI6dH09dGhpczt0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHRoaXMub25DbGljayx7cGFzc2l2ZTohMSxjYXB0dXJlOiExfSksdC5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIix0aGlzLm9uV2hlZWwse3Bhc3NpdmU6ITF9KSx0aGlzLnBvaW50ZXJUcmFja2VyPW5ldyBsKHQse3N0YXJ0OnRoaXMub25Qb2ludGVyRG93bixtb3ZlOnRoaXMub25Qb2ludGVyTW92ZSxlbmQ6dGhpcy5vblBvaW50ZXJVcH0pLGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIix0aGlzLm9uTW91c2VNb3ZlKX1kZXRhY2hFdmVudHMoKXt2YXIgdDtjb25zdHtjb250YWluZXI6ZX09dGhpcztlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHRoaXMub25DbGljayx7cGFzc2l2ZTohMSxjYXB0dXJlOiExfSksZS5yZW1vdmVFdmVudExpc3RlbmVyKFwid2hlZWxcIix0aGlzLm9uV2hlZWwse3Bhc3NpdmU6ITF9KSxudWxsPT09KHQ9dGhpcy5wb2ludGVyVHJhY2tlcil8fHZvaWQgMD09PXR8fHQuc3RvcCgpLHRoaXMucG9pbnRlclRyYWNrZXI9bnVsbCxkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsdGhpcy5vbk1vdXNlTW92ZSksZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIix0aGlzLm9uS2V5ZG93biwhMCksdGhpcy5jbGlja1RpbWVyJiYoY2xlYXJUaW1lb3V0KHRoaXMuY2xpY2tUaW1lciksdGhpcy5jbGlja1RpbWVyPW51bGwpLHRoaXMudXBkYXRlVGltZXImJihjbGVhclRpbWVvdXQodGhpcy51cGRhdGVUaW1lciksdGhpcy51cGRhdGVUaW1lcj1udWxsKX1hbmltYXRlKCl7Y29uc3QgdD10aGlzLmZyaWN0aW9uO3RoaXMuc2V0VGFyZ2V0Rm9yY2UoKTtjb25zdCBlPXRoaXMub3B0aW9uKFwibWF4VmVsb2NpdHlcIik7Zm9yKGNvbnN0IGkgb2YgYil0Pyh0aGlzLnZlbG9jaXR5W2ldKj0xLXQsZSYmIXRoaXMuaXNTY2FsaW5nJiYodGhpcy52ZWxvY2l0eVtpXT1NYXRoLm1heChNYXRoLm1pbih0aGlzLnZlbG9jaXR5W2ldLGUpLC0xKmUpKSx0aGlzLmN1cnJlbnRbaV0rPXRoaXMudmVsb2NpdHlbaV0pOnRoaXMuY3VycmVudFtpXT10aGlzLnRhcmdldFtpXTt0aGlzLnNldFRyYW5zZm9ybSgpLHRoaXMuc2V0RWRnZUZvcmNlKCksIXRoaXMuaXNSZXN0aW5nfHx0aGlzLmlzRHJhZ2dpbmc/dGhpcy5yQUY9cmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgoKT0+dGhpcy5hbmltYXRlKCkpKTp0aGlzLnN0b3AoXCJjdXJyZW50XCIpfXNldFRhcmdldEZvcmNlKCl7Zm9yKGNvbnN0IHQgb2YgYilcImVcIj09PXQmJnRoaXMuaXNCb3VuY2luZ1h8fFwiZlwiPT09dCYmdGhpcy5pc0JvdW5jaW5nWXx8KHRoaXMudmVsb2NpdHlbdF09KDEvKDEtdGhpcy5mcmljdGlvbiktMSkqKHRoaXMudGFyZ2V0W3RdLXRoaXMuY3VycmVudFt0XSkpfWNoZWNrQm91bmRzKHQ9MCxlPTApe2NvbnN0e2N1cnJlbnQ6aX09dGhpcyxuPWkuZSt0LHM9aS5mK2Usbz10aGlzLmdldEJvdW5kcygpLHt4OmEseTpyfT1vLGw9YS5taW4sYz1hLm1heCxoPXIubWluLGQ9ci5tYXg7bGV0IHU9MCxwPTA7cmV0dXJuIGwhPT0xLzAmJm48bD91PWwtbjpjIT09MS8wJiZuPmMmJih1PWMtbiksaCE9PTEvMCYmczxoP3A9aC1zOmQhPT0xLzAmJnM+ZCYmKHA9ZC1zKSxNYXRoLmFicyh1KTwuMDAxJiYodT0wKSxNYXRoLmFicyhwKTwuMDAxJiYocD0wKSxPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sbykse3hEaWZmOnUseURpZmY6cCxpbkJvdW5kczohdSYmIXB9KX1jbGFtcFRhcmdldEJvdW5kcygpe2NvbnN0e3RhcmdldDp0fT10aGlzLHt4OmUseTppfT10aGlzLmdldEJvdW5kcygpO2UubWluIT09MS8wJiYodC5lPU1hdGgubWF4KHQuZSxlLm1pbikpLGUubWF4IT09MS8wJiYodC5lPU1hdGgubWluKHQuZSxlLm1heCkpLGkubWluIT09MS8wJiYodC5mPU1hdGgubWF4KHQuZixpLm1pbikpLGkubWF4IT09MS8wJiYodC5mPU1hdGgubWluKHQuZixpLm1heCkpfWNhbGN1bGF0ZUNvbnRlbnREaW0odD10aGlzLmN1cnJlbnQpe2NvbnN0e2NvbnRlbnQ6ZSxjb250ZW50UmVjdDppfT10aGlzLHtmaXRXaWR0aDpuLGZpdEhlaWdodDpzLGZ1bGxXaWR0aDpvLGZ1bGxIZWlnaHQ6YX09aTtsZXQgcj1vLGw9YTtpZih0aGlzLm9wdGlvbihcInpvb21cIil8fDAhPT10aGlzLmFuZ2xlKXtjb25zdCBpPSEoZSBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQpJiYoXCJub25lXCI9PT13aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlKS5tYXhXaWR0aHx8XCJub25lXCI9PT13aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlKS5tYXhIZWlnaHQpLGM9aT9vOm4saD1pP2E6cyxkPXRoaXMuZ2V0TWF0cml4KHQpLHU9bmV3IERPTVBvaW50KDAsMCkubWF0cml4VHJhbnNmb3JtKGQpLHA9bmV3IERPTVBvaW50KDArYywwKS5tYXRyaXhUcmFuc2Zvcm0oZCksZj1uZXcgRE9NUG9pbnQoMCtjLDAraCkubWF0cml4VHJhbnNmb3JtKGQpLG09bmV3IERPTVBvaW50KDAsMCtoKS5tYXRyaXhUcmFuc2Zvcm0oZCksZz1NYXRoLmFicyhmLngtdS54KSxiPU1hdGguYWJzKGYueS11LnkpLHY9TWF0aC5hYnMobS54LXAueCkseT1NYXRoLmFicyhtLnktcC55KTtyPU1hdGgubWF4KGcsdiksbD1NYXRoLm1heChiLHkpfXJldHVybntjb250ZW50V2lkdGg6cixjb250ZW50SGVpZ2h0Omx9fXNldEVkZ2VGb3JjZSgpe2lmKHRoaXMuaWdub3JlQm91bmRzfHx0aGlzLmlzRHJhZ2dpbmd8fFwibW91c2Vtb3ZlXCI9PT10aGlzLnBhbk1vZGV8fHRoaXMudGFyZ2V0U2NhbGU8dGhpcy5zY2FsZSlyZXR1cm4gdGhpcy5pc0JvdW5jaW5nWD0hMSx2b2lkKHRoaXMuaXNCb3VuY2luZ1k9ITEpO2NvbnN0e3RhcmdldDp0fT10aGlzLHt4OmUseTppLHhEaWZmOm4seURpZmY6c309dGhpcy5jaGVja0JvdW5kcygpO2NvbnN0IG89dGhpcy5vcHRpb24oXCJtYXhWZWxvY2l0eVwiKTtsZXQgYT10aGlzLnZlbG9jaXR5LmUscj10aGlzLnZlbG9jaXR5LmY7MCE9PW4/KHRoaXMuaXNCb3VuY2luZ1g9ITAsbiphPD0wP2ErPS4xNCpuOihhPS4xNCpuLGUubWluIT09MS8wJiYodGhpcy50YXJnZXQuZT1NYXRoLm1heCh0LmUsZS5taW4pKSxlLm1heCE9PTEvMCYmKHRoaXMudGFyZ2V0LmU9TWF0aC5taW4odC5lLGUubWF4KSkpLG8mJihhPU1hdGgubWF4KE1hdGgubWluKGEsbyksLTEqbykpKTp0aGlzLmlzQm91bmNpbmdYPSExLDAhPT1zPyh0aGlzLmlzQm91bmNpbmdZPSEwLHMqcjw9MD9yKz0uMTQqczoocj0uMTQqcyxpLm1pbiE9PTEvMCYmKHRoaXMudGFyZ2V0LmY9TWF0aC5tYXgodC5mLGkubWluKSksaS5tYXghPT0xLzAmJih0aGlzLnRhcmdldC5mPU1hdGgubWluKHQuZixpLm1heCkpKSxvJiYocj1NYXRoLm1heChNYXRoLm1pbihyLG8pLC0xKm8pKSk6dGhpcy5pc0JvdW5jaW5nWT0hMSx0aGlzLmlzQm91bmNpbmdYJiYodGhpcy52ZWxvY2l0eS5lPWEpLHRoaXMuaXNCb3VuY2luZ1kmJih0aGlzLnZlbG9jaXR5LmY9cil9ZW5hYmxlKCl7Y29uc3R7Y29udGVudDp0fT10aGlzLGU9bmV3IERPTU1hdHJpeFJlYWRPbmx5KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHQpLnRyYW5zZm9ybSk7Zm9yKGNvbnN0IHQgb2YgYil0aGlzLmN1cnJlbnRbdF09dGhpcy50YXJnZXRbdF09ZVt0XTt0aGlzLnVwZGF0ZU1ldHJpY3MoKSx0aGlzLmF0dGFjaE9ic2VydmVyKCksdGhpcy5hdHRhY2hFdmVudHMoKSx0aGlzLnN0YXRlPWcuUmVhZHksdGhpcy5lbWl0KFwicmVhZHlcIil9b25DbGljayh0KXt2YXIgZTt0aGlzLmlzRHJhZ2dpbmcmJihudWxsPT09KGU9dGhpcy5wb2ludGVyVHJhY2tlcil8fHZvaWQgMD09PWV8fGUuY2xlYXIoKSx0aGlzLnRyYWNraW5nUG9pbnRzPVtdLHRoaXMuc3RhcnREZWNlbEFuaW0oKSk7Y29uc3QgaT10LnRhcmdldDtpZighaXx8dC5kZWZhdWx0UHJldmVudGVkKXJldHVybjtpZihpJiZpLmhhc0F0dHJpYnV0ZShcImRpc2FibGVkXCIpKXJldHVybiB0LnByZXZlbnREZWZhdWx0KCksdm9pZCB0LnN0b3BQcm9wYWdhdGlvbigpO2lmKCgoKT0+e2NvbnN0IHQ9d2luZG93LmdldFNlbGVjdGlvbigpO3JldHVybiB0JiZcIlJhbmdlXCI9PT10LnR5cGV9KSgpJiYhaS5jbG9zZXN0KFwiYnV0dG9uXCIpKXJldHVybjtjb25zdCBuPWkuY2xvc2VzdChcIltkYXRhLXBhbnpvb20tYWN0aW9uXVwiKSxzPWkuY2xvc2VzdChcIltkYXRhLXBhbnpvb20tY2hhbmdlXVwiKSxvPW58fHMsYT1vJiZ4KG8pP28uZGF0YXNldDpudWxsO2lmKGEpe2NvbnN0IGU9YS5wYW56b29tQ2hhbmdlLGk9YS5wYW56b29tQWN0aW9uO2lmKChlfHxpKSYmdC5wcmV2ZW50RGVmYXVsdCgpLGUpe2xldCB0PXt9O3RyeXt0PUpTT04ucGFyc2UoZSl9Y2F0Y2godCl7Y29uc29sZSYmY29uc29sZS53YXJuKFwiVGhlIGdpdmVuIGRhdGEgd2FzIG5vdCB2YWxpZCBKU09OXCIpfXJldHVybiB2b2lkIHRoaXMuYXBwbHlDaGFuZ2UodCl9aWYoaSlyZXR1cm4gdm9pZCh0aGlzW2ldJiZ0aGlzW2ldKCkpfWlmKE1hdGguYWJzKHRoaXMuZHJhZ09mZnNldC54KT4zfHxNYXRoLmFicyh0aGlzLmRyYWdPZmZzZXQueSk+MylyZXR1cm4gdC5wcmV2ZW50RGVmYXVsdCgpLHZvaWQgdC5zdG9wUHJvcGFnYXRpb24oKTtjb25zdCByPXRoaXMuY29udGVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtpZih0aGlzLmRyYWdTdGFydC50aW1lJiYhdGhpcy5jYW5ab29tT3V0KCkmJihNYXRoLmFicyhyLngtdGhpcy5kcmFnU3RhcnQueCk+Mnx8TWF0aC5hYnMoci55LXRoaXMuZHJhZ1N0YXJ0LnkpPjIpKXJldHVybjt0aGlzLmRyYWdTdGFydC50aW1lPTA7Y29uc3QgbD1lPT57dGhpcy5vcHRpb24oXCJ6b29tXCIpJiZlJiZcInN0cmluZ1wiPT10eXBlb2YgZSYmLyhpdGVyYXRlWm9vbSl8KHRvZ2dsZShab29tfEZ1bGx8Q292ZXJ8TWF4KXwoem9vbVRvKEZpdHxDb3ZlcnxNYXgpKSkvLnRlc3QoZSkmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHRoaXNbZV0mJih0LnByZXZlbnREZWZhdWx0KCksdGhpc1tlXSh7ZXZlbnQ6dH0pKX0sYz10aGlzLm9wdGlvbihcImNsaWNrXCIsdCksaD10aGlzLm9wdGlvbihcImRibENsaWNrXCIsdCk7aD8odGhpcy5jbGlja3MrKywxPT10aGlzLmNsaWNrcyYmKHRoaXMuY2xpY2tUaW1lcj1zZXRUaW1lb3V0KCgoKT0+ezE9PT10aGlzLmNsaWNrcz8odGhpcy5lbWl0KFwiY2xpY2tcIix0KSwhdC5kZWZhdWx0UHJldmVudGVkJiZjJiZsKGMpKToodGhpcy5lbWl0KFwiZGJsQ2xpY2tcIix0KSx0LmRlZmF1bHRQcmV2ZW50ZWR8fGwoaCkpLHRoaXMuY2xpY2tzPTAsdGhpcy5jbGlja1RpbWVyPW51bGx9KSwzNTApKSk6KHRoaXMuZW1pdChcImNsaWNrXCIsdCksIXQuZGVmYXVsdFByZXZlbnRlZCYmYyYmbChjKSl9YWRkVHJhY2tpbmdQb2ludCh0KXtjb25zdCBlPXRoaXMudHJhY2tpbmdQb2ludHMuZmlsdGVyKCh0PT50LnRpbWU+RGF0ZS5ub3coKS0xMDApKTtlLnB1c2godCksdGhpcy50cmFja2luZ1BvaW50cz1lfW9uUG9pbnRlckRvd24odCxlLGkpe3ZhciBuO3RoaXMucHd0PTAsdGhpcy5kcmFnT2Zmc2V0PXt4OjAseTowLHRpbWU6MH0sdGhpcy50cmFja2luZ1BvaW50cz1bXTtjb25zdCBzPXRoaXMuY29udGVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtpZih0aGlzLmRyYWdTdGFydD17eDpzLngseTpzLnksdG9wOnMudG9wLGxlZnQ6cy5sZWZ0LHRpbWU6RGF0ZS5ub3coKX0sdGhpcy5jbGlja1RpbWVyKXJldHVybiExO2lmKFwibW91c2Vtb3ZlXCI9PT10aGlzLnBhbk1vZGUmJnRoaXMudGFyZ2V0U2NhbGU+MSlyZXR1cm4gdC5wcmV2ZW50RGVmYXVsdCgpLHQuc3RvcFByb3BhZ2F0aW9uKCksITE7aWYoIWkubGVuZ3RoKXtjb25zdCBlPXQuY29tcG9zZWRQYXRoKClbMF07aWYoW1wiQVwiLFwiVEVYVEFSRUFcIixcIk9QVElPTlwiLFwiSU5QVVRcIixcIlNFTEVDVFwiLFwiVklERU9cIl0uaW5jbHVkZXMoZS5ub2RlTmFtZSl8fGUuY2xvc2VzdChcIltjb250ZW50ZWRpdGFibGVdXCIpfHxlLmNsb3Nlc3QoXCJbZGF0YS1zZWxlY3RhYmxlXVwiKXx8ZS5jbG9zZXN0KFwiW2RhdGEtcGFuem9vbS1jaGFuZ2VdXCIpfHxlLmNsb3Nlc3QoXCJbZGF0YS1wYW56b29tLWFjdGlvbl1cIikpcmV0dXJuITE7bnVsbD09PShuPXdpbmRvdy5nZXRTZWxlY3Rpb24oKSl8fHZvaWQgMD09PW58fG4ucmVtb3ZlQWxsUmFuZ2VzKCl9aWYoXCJtb3VzZWRvd25cIj09PXQudHlwZSl0LnByZXZlbnREZWZhdWx0KCk7ZWxzZSBpZihNYXRoLmFicyh0aGlzLnZlbG9jaXR5LmEpPi4zKXJldHVybiExO3JldHVybiB0aGlzLnRhcmdldC5lPXRoaXMuY3VycmVudC5lLHRoaXMudGFyZ2V0LmY9dGhpcy5jdXJyZW50LmYsdGhpcy5zdG9wKCksdGhpcy5pc0RyYWdnaW5nfHwodGhpcy5pc0RyYWdnaW5nPSEwLHRoaXMuYWRkVHJhY2tpbmdQb2ludChlKSx0aGlzLmVtaXQoXCJ0b3VjaFN0YXJ0XCIsdCkpLCEwfW9uUG9pbnRlck1vdmUoZSxuLHMpe2lmKCExPT09dGhpcy5vcHRpb24oXCJ0b3VjaFwiLGUpKXJldHVybjtpZighdGhpcy5pc0RyYWdnaW5nKXJldHVybjtpZihuLmxlbmd0aDwyJiZ0aGlzLnBhbk9ubHlab29tZWQmJnQodGhpcy50YXJnZXRTY2FsZSk8PXQodGhpcy5taW5TY2FsZSkpcmV0dXJuO2lmKHRoaXMuZW1pdChcInRvdWNoTW92ZVwiLGUpLGUuZGVmYXVsdFByZXZlbnRlZClyZXR1cm47dGhpcy5hZGRUcmFja2luZ1BvaW50KG5bMF0pO2NvbnN0e2NvbnRlbnQ6b309dGhpcyxhPWgoc1swXSxzWzFdKSxyPWgoblswXSxuWzFdKTtsZXQgbD0wLGQ9MDtpZihuLmxlbmd0aD4xKXtjb25zdCB0PW8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7bD1hLmNsaWVudFgtdC5sZWZ0LS41KnQud2lkdGgsZD1hLmNsaWVudFktdC50b3AtLjUqdC5oZWlnaHR9Y29uc3QgdT1jKHNbMF0sc1sxXSkscD1jKG5bMF0sblsxXSk7bGV0IGY9dT9wL3U6MSxtPXIuY2xpZW50WC1hLmNsaWVudFgsZz1yLmNsaWVudFktYS5jbGllbnRZO3RoaXMuZHJhZ09mZnNldC54Kz1tLHRoaXMuZHJhZ09mZnNldC55Kz1nLHRoaXMuZHJhZ09mZnNldC50aW1lPURhdGUubm93KCktdGhpcy5kcmFnU3RhcnQudGltZTtsZXQgYj10KHRoaXMudGFyZ2V0U2NhbGUpPT09dCh0aGlzLm1pblNjYWxlKSYmdGhpcy5vcHRpb24oXCJsb2NrQXhpc1wiKTtpZihiJiYhdGhpcy5sb2NrZWRBeGlzKWlmKFwieHlcIj09PWJ8fFwieVwiPT09Ynx8XCJ0b3VjaG1vdmVcIj09PWUudHlwZSl7aWYoTWF0aC5hYnModGhpcy5kcmFnT2Zmc2V0LngpPDYmJk1hdGguYWJzKHRoaXMuZHJhZ09mZnNldC55KTw2KXJldHVybiB2b2lkIGUucHJldmVudERlZmF1bHQoKTtjb25zdCB0PU1hdGguYWJzKDE4MCpNYXRoLmF0YW4yKHRoaXMuZHJhZ09mZnNldC55LHRoaXMuZHJhZ09mZnNldC54KS9NYXRoLlBJKTt0aGlzLmxvY2tlZEF4aXM9dD40NSYmdDwxMzU/XCJ5XCI6XCJ4XCIsdGhpcy5kcmFnT2Zmc2V0Lng9MCx0aGlzLmRyYWdPZmZzZXQueT0wLG09MCxnPTB9ZWxzZSB0aGlzLmxvY2tlZEF4aXM9YjtpZihpKGUudGFyZ2V0LHRoaXMuY29udGVudCkmJihiPVwieFwiLHRoaXMuZHJhZ09mZnNldC55PTApLGImJlwieHlcIiE9PWImJnRoaXMubG9ja2VkQXhpcyE9PWImJnQodGhpcy50YXJnZXRTY2FsZSk9PT10KHRoaXMubWluU2NhbGUpKXJldHVybjtlLmNhbmNlbGFibGUmJmUucHJldmVudERlZmF1bHQoKSx0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHRoaXMuY24oXCJpc0RyYWdnaW5nXCIpKTtjb25zdCB2PXRoaXMuY2hlY2tCb3VuZHMobSxnKTt0aGlzLm9wdGlvbihcInJ1YmJlcmJhbmRcIik/KFwieFwiIT09dGhpcy5pc0luZmluaXRlJiYodi54RGlmZj4wJiZtPDB8fHYueERpZmY8MCYmbT4wKSYmKG0qPU1hdGgubWF4KDAsLjUtTWF0aC5hYnMoLjc1L3RoaXMuY29udGVudFJlY3QuZml0V2lkdGgqdi54RGlmZikpKSxcInlcIiE9PXRoaXMuaXNJbmZpbml0ZSYmKHYueURpZmY+MCYmZzwwfHx2LnlEaWZmPDAmJmc+MCkmJihnKj1NYXRoLm1heCgwLC41LU1hdGguYWJzKC43NS90aGlzLmNvbnRlbnRSZWN0LmZpdEhlaWdodCp2LnlEaWZmKSkpKToodi54RGlmZiYmKG09MCksdi55RGlmZiYmKGc9MCkpO2NvbnN0IHk9dGhpcy50YXJnZXRTY2FsZSx3PXRoaXMubWluU2NhbGUseD10aGlzLm1heFNjYWxlO3k8LjUqdyYmKGY9TWF0aC5tYXgoZix3KSkseT4xLjUqeCYmKGY9TWF0aC5taW4oZix4KSksXCJ5XCI9PT10aGlzLmxvY2tlZEF4aXMmJnQoeSk9PT10KHcpJiYobT0wKSxcInhcIj09PXRoaXMubG9ja2VkQXhpcyYmdCh5KT09PXQodykmJihnPTApLHRoaXMuYXBwbHlDaGFuZ2Uoe29yaWdpblg6bCxvcmlnaW5ZOmQscGFuWDptLHBhblk6ZyxzY2FsZTpmLGZyaWN0aW9uOnRoaXMub3B0aW9uKFwiZHJhZ0ZyaWN0aW9uXCIpLGlnbm9yZUJvdW5kczohMH0pfW9uUG9pbnRlclVwKHQsZSxuKXtpZihuLmxlbmd0aClyZXR1cm4gdGhpcy5kcmFnT2Zmc2V0Lng9MCx0aGlzLmRyYWdPZmZzZXQueT0wLHZvaWQodGhpcy50cmFja2luZ1BvaW50cz1bXSk7dGhpcy5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNuKFwiaXNEcmFnZ2luZ1wiKSksdGhpcy5pc0RyYWdnaW5nJiYodGhpcy5hZGRUcmFja2luZ1BvaW50KGUpLHRoaXMucGFuT25seVpvb21lZCYmdGhpcy5jb250ZW50UmVjdC53aWR0aC10aGlzLmNvbnRlbnRSZWN0LmZpdFdpZHRoPDEmJnRoaXMuY29udGVudFJlY3QuaGVpZ2h0LXRoaXMuY29udGVudFJlY3QuZml0SGVpZ2h0PDEmJih0aGlzLnRyYWNraW5nUG9pbnRzPVtdKSxpKHQudGFyZ2V0LHRoaXMuY29udGVudCkmJlwieVwiPT09dGhpcy5sb2NrZWRBeGlzJiYodGhpcy50cmFja2luZ1BvaW50cz1bXSksdGhpcy5lbWl0KFwidG91Y2hFbmRcIix0KSx0aGlzLmlzRHJhZ2dpbmc9ITEsdGhpcy5sb2NrZWRBeGlzPSExLHRoaXMuc3RhdGUhPT1nLkRlc3Ryb3kmJih0LmRlZmF1bHRQcmV2ZW50ZWR8fHRoaXMuc3RhcnREZWNlbEFuaW0oKSkpfXN0YXJ0RGVjZWxBbmltKCl7Y29uc3QgZT10aGlzLmlzU2NhbGluZzt0aGlzLnJBRiYmKGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuckFGKSx0aGlzLnJBRj1udWxsKSx0aGlzLmlzQm91bmNpbmdYPSExLHRoaXMuaXNCb3VuY2luZ1k9ITE7Zm9yKGNvbnN0IHQgb2YgYil0aGlzLnZlbG9jaXR5W3RdPTA7dGhpcy50YXJnZXQuZT10aGlzLmN1cnJlbnQuZSx0aGlzLnRhcmdldC5mPXRoaXMuY3VycmVudC5mLEUodGhpcy5jb250YWluZXIsXCJpcy1zY2FsaW5nXCIpLEUodGhpcy5jb250YWluZXIsXCJpcy1hbmltYXRpbmdcIiksdGhpcy5pc1RpY2tpbmc9ITE7Y29uc3R7dHJhY2tpbmdQb2ludHM6aX09dGhpcyxuPWlbMF0scz1pW2kubGVuZ3RoLTFdO2xldCBvPTAsYT0wLHI9MDtzJiZuJiYobz1zLmNsaWVudFgtbi5jbGllbnRYLGE9cy5jbGllbnRZLW4uY2xpZW50WSxyPXMudGltZS1uLnRpbWUpO2xldCBsPTAsYz0wLGg9MCxkPTAsdT10aGlzLm9wdGlvbihcImRlY2VsRnJpY3Rpb25cIik7Y29uc3QgcD10aGlzLnRhcmdldFNjYWxlO2lmKHI+MCl7aD1NYXRoLmFicyhvKT4zP28vKHIvMzApOjAsZD1NYXRoLmFicyhhKT4zP2EvKHIvMzApOjA7Y29uc3QgdD10aGlzLm9wdGlvbihcIm1heFZlbG9jaXR5XCIpO3QmJihoPU1hdGgubWF4KE1hdGgubWluKGgsdCksLTEqdCksZD1NYXRoLm1heChNYXRoLm1pbihkLHQpLC0xKnQpKX1oJiYobD1oLygxLygxLXUpLTEpKSxkJiYoYz1kLygxLygxLXUpLTEpKSwoXCJ5XCI9PT10aGlzLm9wdGlvbihcImxvY2tBeGlzXCIpfHxcInh5XCI9PT10aGlzLm9wdGlvbihcImxvY2tBeGlzXCIpJiZcInlcIj09PXRoaXMubG9ja2VkQXhpcyYmdChwKT09PXRoaXMubWluU2NhbGUpJiYobD1oPTApLChcInhcIj09PXRoaXMub3B0aW9uKFwibG9ja0F4aXNcIil8fFwieHlcIj09PXRoaXMub3B0aW9uKFwibG9ja0F4aXNcIikmJlwieFwiPT09dGhpcy5sb2NrZWRBeGlzJiZ0KHApPT09dGhpcy5taW5TY2FsZSkmJihjPWQ9MCk7Y29uc3QgZj10aGlzLmRyYWdPZmZzZXQueCxtPXRoaXMuZHJhZ09mZnNldC55LGc9dGhpcy5vcHRpb24oXCJkcmFnTWluVGhyZXNob2xkXCIpfHwwO01hdGguYWJzKGYpPGcmJk1hdGguYWJzKG0pPGcmJihsPWM9MCxoPWQ9MCksKHA8dGhpcy5taW5TY2FsZS0xZS01fHxwPnRoaXMubWF4U2NhbGUrMWUtNXx8ZSYmIWwmJiFjKSYmKHU9LjM1KSx0aGlzLmFwcGx5Q2hhbmdlKHtwYW5YOmwscGFuWTpjLGZyaWN0aW9uOnV9KSx0aGlzLmVtaXQoXCJkZWNlbFwiLGgsZCxmLG0pfW9uV2hlZWwodCl7dmFyIGU9Wy10LmRlbHRhWHx8MCwtdC5kZWx0YVl8fDAsLXQuZGV0YWlsfHwwXS5yZWR1Y2UoKGZ1bmN0aW9uKHQsZSl7cmV0dXJuIE1hdGguYWJzKGUpPk1hdGguYWJzKHQpP2U6dH0pKTtjb25zdCBpPU1hdGgubWF4KC0xLE1hdGgubWluKDEsZSkpO2lmKHRoaXMuZW1pdChcIndoZWVsXCIsdCxpKSxcIm1vdXNlbW92ZVwiPT09dGhpcy5wYW5Nb2RlKXJldHVybjtpZih0LmRlZmF1bHRQcmV2ZW50ZWQpcmV0dXJuO2NvbnN0IG49dGhpcy5vcHRpb24oXCJ3aGVlbFwiKTtcInBhblwiPT09bj8odC5wcmV2ZW50RGVmYXVsdCgpLHRoaXMucGFuT25seVpvb21lZCYmIXRoaXMuY2FuWm9vbU91dCgpfHx0aGlzLmFwcGx5Q2hhbmdlKHtwYW5YOjIqLXQuZGVsdGFYLHBhblk6MiotdC5kZWx0YVksYm91bmNlOiExfSkpOlwiem9vbVwiPT09biYmITEhPT10aGlzLm9wdGlvbihcInpvb21cIikmJnRoaXMuem9vbVdpdGhXaGVlbCh0KX1vbk1vdXNlTW92ZSh0KXt0aGlzLnBhbldpdGhNb3VzZSh0KX1vbktleWRvd24odCl7XCJFc2NhcGVcIj09PXQua2V5JiZ0aGlzLnRvZ2dsZUZTKCl9b25SZXNpemUoKXt0aGlzLnVwZGF0ZU1ldHJpY3MoKSx0aGlzLmNoZWNrQm91bmRzKCkuaW5Cb3VuZHN8fHRoaXMucmVxdWVzdFRpY2soKX1zZXRUcmFuc2Zvcm0oKXt0aGlzLmVtaXQoXCJiZWZvcmVUcmFuc2Zvcm1cIik7Y29uc3R7Y3VycmVudDplLHRhcmdldDppLGNvbnRlbnQ6bixjb250ZW50UmVjdDpzfT10aGlzLG89T2JqZWN0LmFzc2lnbih7fSxQKTtmb3IoY29uc3QgbiBvZiBiKXtjb25zdCBzPVwiZVwiPT1ufHxcImZcIj09PW4/MWUzOjFlNTtvW25dPXQoZVtuXSxzKSxNYXRoLmFicyhpW25dLWVbbl0pPChcImVcIj09bnx8XCJmXCI9PT1uPy41MTouMDAxKSYmKGVbbl09aVtuXSl9bGV0e2E6YSxiOnIsYzpsLGQ6YyxlOmgsZjpkfT1vLHU9YG1hdHJpeCgke2F9LCAke3J9LCAke2x9LCAke2N9LCAke2h9LCAke2R9KWAscD1uLnBhcmVudEVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MUGljdHVyZUVsZW1lbnQ/bi5wYXJlbnRFbGVtZW50Om47aWYodGhpcy5vcHRpb24oXCJ0cmFuc2Zvcm1QYXJlbnRcIikmJihwPXAucGFyZW50RWxlbWVudHx8cCkscC5zdHlsZS50cmFuc2Zvcm09PT11KXJldHVybjtwLnN0eWxlLnRyYW5zZm9ybT11O2NvbnN0e2NvbnRlbnRXaWR0aDpmLGNvbnRlbnRIZWlnaHQ6bX09dGhpcy5jYWxjdWxhdGVDb250ZW50RGltKCk7cy53aWR0aD1mLHMuaGVpZ2h0PW0sdGhpcy5lbWl0KFwiYWZ0ZXJUcmFuc2Zvcm1cIil9dXBkYXRlTWV0cmljcyhlPSExKXtpZighdGhpc3x8dGhpcy5zdGF0ZT09PWcuRGVzdHJveSlyZXR1cm47aWYodGhpcy5pc0NvbnRlbnRMb2FkaW5nKXJldHVybjtjb25zdHtjb250YWluZXI6aSxjb250ZW50Om59PXRoaXMscz1uIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCxvPWkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksYT1nZXRDb21wdXRlZFN0eWxlKHRoaXMuY29udGFpbmVyKSxyPW8ud2lkdGgsbD1vLmhlaWdodCxjPXBhcnNlRmxvYXQoYS5wYWRkaW5nVG9wKStwYXJzZUZsb2F0KGEucGFkZGluZ0JvdHRvbSksaD1yLShwYXJzZUZsb2F0KGEucGFkZGluZ0xlZnQpK3BhcnNlRmxvYXQoYS5wYWRkaW5nUmlnaHQpKSxkPWwtYzt0aGlzLmNvbnRhaW5lclJlY3Q9e3dpZHRoOnIsaGVpZ2h0OmwsaW5uZXJXaWR0aDpoLGlubmVySGVpZ2h0OmR9O2xldCB1PXRoaXMub3B0aW9uKFwid2lkdGhcIil8fFwiYXV0b1wiLHA9dGhpcy5vcHRpb24oXCJoZWlnaHRcIil8fFwiYXV0b1wiO1wiYXV0b1wiPT09dSYmKHU9cGFyc2VGbG9hdChuLmRhdGFzZXQud2lkdGh8fFwiXCIpfHwodD0+e2xldCBlPTA7cmV0dXJuIGU9dCBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQ/dC5uYXR1cmFsV2lkdGg6dCBpbnN0YW5jZW9mIFNWR0VsZW1lbnQ/dC53aWR0aC5iYXNlVmFsLnZhbHVlOk1hdGgubWF4KHQub2Zmc2V0V2lkdGgsdC5zY3JvbGxXaWR0aCksZXx8MH0pKG4pKSxcImF1dG9cIj09PXAmJihwPXBhcnNlRmxvYXQobi5kYXRhc2V0LmhlaWdodHx8XCJcIil8fCh0PT57bGV0IGU9MDtyZXR1cm4gZT10IGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudD90Lm5hdHVyYWxIZWlnaHQ6dCBpbnN0YW5jZW9mIFNWR0VsZW1lbnQ/dC5oZWlnaHQuYmFzZVZhbC52YWx1ZTpNYXRoLm1heCh0Lm9mZnNldEhlaWdodCx0LnNjcm9sbEhlaWdodCksZXx8MH0pKG4pKTtsZXQgZj1uLnBhcmVudEVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MUGljdHVyZUVsZW1lbnQ/bi5wYXJlbnRFbGVtZW50Om47dGhpcy5vcHRpb24oXCJ0cmFuc2Zvcm1QYXJlbnRcIikmJihmPWYucGFyZW50RWxlbWVudHx8Zik7Y29uc3QgbT1mLmdldEF0dHJpYnV0ZShcInN0eWxlXCIpfHxcIlwiO2Yuc3R5bGUuc2V0UHJvcGVydHkoXCJ0cmFuc2Zvcm1cIixcIm5vbmVcIixcImltcG9ydGFudFwiKSxzJiYoZi5zdHlsZS53aWR0aD1cIlwiLGYuc3R5bGUuaGVpZ2h0PVwiXCIpLGYub2Zmc2V0SGVpZ2h0O2NvbnN0IGI9bi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtsZXQgdj1iLndpZHRoLHk9Yi5oZWlnaHQsdz0wLHg9MDtzJiYoTWF0aC5hYnModS12KT4xfHxNYXRoLmFicyhwLXkpPjEpJiYoe3dpZHRoOnYsaGVpZ2h0OnksdG9wOncsbGVmdDp4fT0oKHQsZSxpLG4pPT57Y29uc3Qgcz1pL247cmV0dXJuIHM+dC9lPyhpPXQsbj10L3MpOihpPWUqcyxuPWUpLHt3aWR0aDppLGhlaWdodDpuLHRvcDouNSooZS1uKSxsZWZ0Oi41Kih0LWkpfX0pKHYseSx1LHApKSx0aGlzLmNvbnRlbnRSZWN0PU9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSx0aGlzLmNvbnRlbnRSZWN0KSx7dG9wOmIudG9wLW8udG9wK3csYm90dG9tOm8uYm90dG9tLWIuYm90dG9tK3csbGVmdDpiLmxlZnQtby5sZWZ0K3gscmlnaHQ6by5yaWdodC1iLnJpZ2h0K3gsZml0V2lkdGg6dixmaXRIZWlnaHQ6eSx3aWR0aDp2LGhlaWdodDp5LGZ1bGxXaWR0aDp1LGZ1bGxIZWlnaHQ6cH0pLGYuc3R5bGUuY3NzVGV4dD1tLHMmJihmLnN0eWxlLndpZHRoPWAke3Z9cHhgLGYuc3R5bGUuaGVpZ2h0PWAke3l9cHhgKSx0aGlzLnNldFRyYW5zZm9ybSgpLCEwIT09ZSYmdGhpcy5lbWl0KFwicmVmcmVzaFwiKSx0aGlzLmlnbm9yZUJvdW5kc3x8KHQodGhpcy50YXJnZXRTY2FsZSk8dCh0aGlzLm1pblNjYWxlKT90aGlzLnpvb21Ubyh0aGlzLm1pblNjYWxlLHtmcmljdGlvbjowfSk6dGhpcy50YXJnZXRTY2FsZT50aGlzLm1heFNjYWxlP3RoaXMuem9vbVRvKHRoaXMubWF4U2NhbGUse2ZyaWN0aW9uOjB9KTp0aGlzLnN0YXRlPT09Zy5Jbml0fHx0aGlzLmNoZWNrQm91bmRzKCkuaW5Cb3VuZHN8fHRoaXMucmVxdWVzdFRpY2soKSksdGhpcy51cGRhdGVDb250cm9scygpfWdldEJvdW5kcygpe2NvbnN0IGU9dGhpcy5vcHRpb24oXCJib3VuZHNcIik7aWYoXCJhdXRvXCIhPT1lKXJldHVybiBlO2NvbnN0e2NvbnRlbnRXaWR0aDppLGNvbnRlbnRIZWlnaHQ6bn09dGhpcy5jYWxjdWxhdGVDb250ZW50RGltKHRoaXMudGFyZ2V0KTtsZXQgcz0wLG89MCxhPTAscj0wO2NvbnN0IGw9dGhpcy5vcHRpb24oXCJpbmZpbml0ZVwiKTtpZighMD09PWx8fHRoaXMubG9ja2VkQXhpcyYmbD09PXRoaXMubG9ja2VkQXhpcylzPS0xLzAsYT0xLzAsbz0tMS8wLHI9MS8wO2Vsc2V7bGV0e2NvbnRhaW5lclJlY3Q6ZSxjb250ZW50UmVjdDpsfT10aGlzLGM9dCh0aGlzLmNvbnRlbnRSZWN0LmZpdFdpZHRoKnRoaXMudGFyZ2V0U2NhbGUsMWUzKSxoPXQodGhpcy5jb250ZW50UmVjdC5maXRIZWlnaHQqdGhpcy50YXJnZXRTY2FsZSwxZTMpLHtpbm5lcldpZHRoOmQsaW5uZXJIZWlnaHQ6dX09ZTtpZih0aGlzLmNvbnRhaW5lclJlY3Qud2lkdGg9PT1jJiYoZD1lLndpZHRoKSx0aGlzLmNvbnRhaW5lclJlY3Qud2lkdGg9PT1oJiYodT1lLmhlaWdodCksaT5kKXthPS41KihpLWQpLHM9LTEqYTtsZXQgdD0uNSoobC5yaWdodC1sLmxlZnQpO3MrPXQsYSs9dH1pZih0aGlzLmNvbnRlbnRSZWN0LmZpdFdpZHRoPmQmJmk8ZCYmKHMtPS41Kih0aGlzLmNvbnRlbnRSZWN0LmZpdFdpZHRoLWQpLGEtPS41Kih0aGlzLmNvbnRlbnRSZWN0LmZpdFdpZHRoLWQpKSxuPnUpe3I9LjUqKG4tdSksbz0tMSpyO2xldCB0PS41KihsLmJvdHRvbS1sLnRvcCk7bys9dCxyKz10fXRoaXMuY29udGVudFJlY3QuZml0SGVpZ2h0PnUmJm48dSYmKHMtPS41Kih0aGlzLmNvbnRlbnRSZWN0LmZpdEhlaWdodC11KSxhLT0uNSoodGhpcy5jb250ZW50UmVjdC5maXRIZWlnaHQtdSkpfXJldHVybnt4OnttaW46cyxtYXg6YX0seTp7bWluOm8sbWF4OnJ9fX11cGRhdGVDb250cm9scygpe2NvbnN0IGU9dGhpcyxpPWUuY29udGFpbmVyLHtwYW5Nb2RlOm4sY29udGVudFJlY3Q6cyxmdWxsU2NhbGU6YSx0YXJnZXRTY2FsZTpyLGNvdmVyU2NhbGU6bCxtYXhTY2FsZTpjLG1pblNjYWxlOmh9PWU7bGV0IGQ9e3RvZ2dsZU1heDpyLWg8LjUqKGMtaCk/YzpoLHRvZ2dsZUNvdmVyOnItaDwuNSoobC1oKT9sOmgsdG9nZ2xlWm9vbTpyLWg8LjUqKGEtaCk/YTpofVtlLm9wdGlvbihcImNsaWNrXCIpfHxcIlwiXXx8aCx1PWUuY2FuWm9vbUluKCkscD1lLmNhblpvb21PdXQoKSxmPXAmJlwiZHJhZ1wiPT09bjt0KHIpPHQoaCkmJiF0aGlzLnBhbk9ubHlab29tZWQmJihmPSEwKSwodChzLndpZHRoLDEpPnQocy5maXRXaWR0aCwxKXx8dChzLmhlaWdodCwxKT50KHMuZml0SGVpZ2h0LDEpKSYmKGY9ITApLHQocy53aWR0aCpyLDEpPHQocy5maXRXaWR0aCwxKSYmKGY9ITEpLFwibW91c2Vtb3ZlXCI9PT1uJiYoZj0hMSk7bGV0IG09dSYmdChkKT50KHIpLGc9IW0mJiFmJiZwJiZ0KGQpPHQocik7byhpLHRoaXMuY24oXCJjYW5ab29tSW5cIiksbSksbyhpLHRoaXMuY24oXCJjYW5ab29tT3V0XCIpLGcpLG8oaSx0aGlzLmNuKFwiaXNEcmFnZ2FibGVcIiksZik7Zm9yKGNvbnN0IHQgb2YgaS5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1wYW56b29tLWFjdGlvbj1cInpvb21JblwiXScpKXU/KHQucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIiksdC5yZW1vdmVBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKSk6KHQuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIixcIlwiKSx0LnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsXCItMVwiKSk7Zm9yKGNvbnN0IHQgb2YgaS5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1wYW56b29tLWFjdGlvbj1cInpvb21PdXRcIl0nKSlwPyh0LnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpLHQucmVtb3ZlQXR0cmlidXRlKFwidGFiaW5kZXhcIikpOih0LnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsXCJcIiksdC5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLFwiLTFcIikpO2Zvcihjb25zdCB0IG9mIGkucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcGFuem9vbS1hY3Rpb249XCJ0b2dnbGVab29tXCJdLFtkYXRhLXBhbnpvb20tYWN0aW9uPVwiaXRlcmF0ZVpvb21cIl0nKSl7dXx8cD8odC5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKSx0LnJlbW92ZUF0dHJpYnV0ZShcInRhYmluZGV4XCIpKToodC5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLFwiXCIpLHQuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIixcIi0xXCIpKTtjb25zdCBlPXQucXVlcnlTZWxlY3RvcihcImdcIik7ZSYmKGUuc3R5bGUuZGlzcGxheT11P1wiXCI6XCJub25lXCIpfX1wYW5Ubyh7eDp0PXRoaXMudGFyZ2V0LmUseTplPXRoaXMudGFyZ2V0LmYsc2NhbGU6aT10aGlzLnRhcmdldFNjYWxlLGZyaWN0aW9uOm49dGhpcy5vcHRpb24oXCJmcmljdGlvblwiKSxhbmdsZTpzPTAsb3JpZ2luWDpvPTAsb3JpZ2luWTphPTAsZmxpcFg6cj0hMSxmbGlwWTpsPSExLGlnbm9yZUJvdW5kczpjPSExfSl7dGhpcy5zdGF0ZSE9PWcuRGVzdHJveSYmdGhpcy5hcHBseUNoYW5nZSh7cGFuWDp0LXRoaXMudGFyZ2V0LmUscGFuWTplLXRoaXMudGFyZ2V0LmYsc2NhbGU6aS90aGlzLnRhcmdldFNjYWxlLGFuZ2xlOnMsb3JpZ2luWDpvLG9yaWdpblk6YSxmcmljdGlvbjpuLGZsaXBYOnIsZmxpcFk6bCxpZ25vcmVCb3VuZHM6Y30pfWFwcGx5Q2hhbmdlKHtwYW5YOmU9MCxwYW5ZOmk9MCxzY2FsZTpuPTEsYW5nbGU6cz0wLG9yaWdpblg6bz0tdGhpcy5jdXJyZW50LmUsb3JpZ2luWTphPS10aGlzLmN1cnJlbnQuZixmcmljdGlvbjpyPXRoaXMub3B0aW9uKFwiZnJpY3Rpb25cIiksZmxpcFg6bD0hMSxmbGlwWTpjPSExLGlnbm9yZUJvdW5kczpoPSExLGJvdW5jZTpkPXRoaXMub3B0aW9uKFwiYm91bmNlXCIpfSl7aWYodGhpcy5zdGF0ZT09PWcuRGVzdHJveSlyZXR1cm47dGhpcy5yQUYmJihjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnJBRiksdGhpcy5yQUY9bnVsbCksdGhpcy5mcmljdGlvbj1yfHwwLHRoaXMuaWdub3JlQm91bmRzPWg7Y29uc3R7Y3VycmVudDp1fT10aGlzLHA9dS5lLGY9dS5mLG09dGhpcy5nZXRNYXRyaXgodGhpcy50YXJnZXQpO2xldCB2PShuZXcgRE9NTWF0cml4KS50cmFuc2xhdGUocCxmKS50cmFuc2xhdGUobyxhKS50cmFuc2xhdGUoZSxpKTtpZih0aGlzLm9wdGlvbihcInpvb21cIikpe2lmKCFoKXtjb25zdCB0PXRoaXMudGFyZ2V0U2NhbGUsZT10aGlzLm1pblNjYWxlLGk9dGhpcy5tYXhTY2FsZTt0Km48ZSYmKG49ZS90KSx0Km4+aSYmKG49aS90KX12PXYuc2NhbGUobil9dj12LnRyYW5zbGF0ZSgtbywtYSkudHJhbnNsYXRlKC1wLC1mKS5tdWx0aXBseShtKSxzJiYodj12LnJvdGF0ZShzKSksbCYmKHY9di5zY2FsZSgtMSwxKSksYyYmKHY9di5zY2FsZSgxLC0xKSk7Zm9yKGNvbnN0IGUgb2YgYilcImVcIiE9PWUmJlwiZlwiIT09ZSYmKHZbZV0+dGhpcy5taW5TY2FsZSsxZS01fHx2W2VdPHRoaXMubWluU2NhbGUtMWUtNSk/dGhpcy50YXJnZXRbZV09dltlXTp0aGlzLnRhcmdldFtlXT10KHZbZV0sMWUzKTsodGhpcy50YXJnZXRTY2FsZTx0aGlzLnNjYWxlfHxNYXRoLmFicyhuLTEpPi4xfHxcIm1vdXNlbW92ZVwiPT09dGhpcy5wYW5Nb2RlfHwhMT09PWQpJiYhaCYmdGhpcy5jbGFtcFRhcmdldEJvdW5kcygpLHRoaXMuaXNSZXN0aW5nfHwodGhpcy5zdGF0ZT1nLlBhbm5pbmcsdGhpcy5yZXF1ZXN0VGljaygpKX1zdG9wKHQ9ITEpe2lmKHRoaXMuc3RhdGU9PT1nLkluaXR8fHRoaXMuc3RhdGU9PT1nLkRlc3Ryb3kpcmV0dXJuO2NvbnN0IGU9dGhpcy5pc1RpY2tpbmc7dGhpcy5yQUYmJihjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnJBRiksdGhpcy5yQUY9bnVsbCksdGhpcy5pc0JvdW5jaW5nWD0hMSx0aGlzLmlzQm91bmNpbmdZPSExO2Zvcihjb25zdCBlIG9mIGIpdGhpcy52ZWxvY2l0eVtlXT0wLFwiY3VycmVudFwiPT09dD90aGlzLmN1cnJlbnRbZV09dGhpcy50YXJnZXRbZV06XCJ0YXJnZXRcIj09PXQmJih0aGlzLnRhcmdldFtlXT10aGlzLmN1cnJlbnRbZV0pO3RoaXMuc2V0VHJhbnNmb3JtKCksRSh0aGlzLmNvbnRhaW5lcixcImlzLXNjYWxpbmdcIiksRSh0aGlzLmNvbnRhaW5lcixcImlzLWFuaW1hdGluZ1wiKSx0aGlzLmlzVGlja2luZz0hMSx0aGlzLnN0YXRlPWcuUmVhZHksZSYmKHRoaXMuZW1pdChcImVuZEFuaW1hdGlvblwiKSx0aGlzLnVwZGF0ZUNvbnRyb2xzKCkpfXJlcXVlc3RUaWNrKCl7dGhpcy5pc1RpY2tpbmd8fCh0aGlzLmVtaXQoXCJzdGFydEFuaW1hdGlvblwiKSx0aGlzLnVwZGF0ZUNvbnRyb2xzKCksUyh0aGlzLmNvbnRhaW5lcixcImlzLWFuaW1hdGluZ1wiKSx0aGlzLmlzU2NhbGluZyYmUyh0aGlzLmNvbnRhaW5lcixcImlzLXNjYWxpbmdcIikpLHRoaXMuaXNUaWNraW5nPSEwLHRoaXMuckFGfHwodGhpcy5yQUY9cmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgoKT0+dGhpcy5hbmltYXRlKCkpKSl9cGFuV2l0aE1vdXNlKGUsaT10aGlzLm9wdGlvbihcIm1vdXNlTW92ZUZyaWN0aW9uXCIpKXtpZih0aGlzLnBtbWU9ZSxcIm1vdXNlbW92ZVwiIT09dGhpcy5wYW5Nb2RlfHwhZSlyZXR1cm47aWYodCh0aGlzLnRhcmdldFNjYWxlKTw9dCh0aGlzLm1pblNjYWxlKSlyZXR1cm47dGhpcy5lbWl0KFwibW91c2VNb3ZlXCIsZSk7Y29uc3R7Y29udGFpbmVyOm4sY29udGFpbmVyUmVjdDpzLGNvbnRlbnRSZWN0Om99PXRoaXMsYT1zLndpZHRoLHI9cy5oZWlnaHQsbD1uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLGM9KGUuY2xpZW50WHx8MCktbC5sZWZ0LGg9KGUuY2xpZW50WXx8MCktbC50b3A7bGV0e2NvbnRlbnRXaWR0aDpkLGNvbnRlbnRIZWlnaHQ6dX09dGhpcy5jYWxjdWxhdGVDb250ZW50RGltKHRoaXMudGFyZ2V0KTtjb25zdCBwPXRoaXMub3B0aW9uKFwibW91c2VNb3ZlRmFjdG9yXCIpO3A+MSYmKGQhPT1hJiYoZCo9cCksdSE9PXImJih1Kj1wKSk7bGV0IGY9LjUqKGQtYSktYy9hKjEwMC8xMDAqKGQtYSk7Zis9LjUqKG8ucmlnaHQtby5sZWZ0KTtsZXQgbT0uNSoodS1yKS1oL3IqMTAwLzEwMCoodS1yKTttKz0uNSooby5ib3R0b20tby50b3ApLHRoaXMuYXBwbHlDaGFuZ2Uoe3Bhblg6Zi10aGlzLnRhcmdldC5lLHBhblk6bS10aGlzLnRhcmdldC5mLGZyaWN0aW9uOml9KX16b29tV2l0aFdoZWVsKGUpe2lmKHRoaXMuc3RhdGU9PT1nLkRlc3Ryb3l8fHRoaXMuc3RhdGU9PT1nLkluaXQpcmV0dXJuO2NvbnN0IGk9RGF0ZS5ub3coKTtpZihpLXRoaXMucHd0PDQ1KXJldHVybiB2b2lkIGUucHJldmVudERlZmF1bHQoKTt0aGlzLnB3dD1pO3ZhciBuPVstZS5kZWx0YVh8fDAsLWUuZGVsdGFZfHwwLC1lLmRldGFpbHx8MF0ucmVkdWNlKChmdW5jdGlvbih0LGUpe3JldHVybiBNYXRoLmFicyhlKT5NYXRoLmFicyh0KT9lOnR9KSk7Y29uc3Qgcz1NYXRoLm1heCgtMSxNYXRoLm1pbigxLG4pKSx7dGFyZ2V0U2NhbGU6byxtYXhTY2FsZTphLG1pblNjYWxlOnJ9PXRoaXM7bGV0IGw9byooMTAwKzQ1KnMpLzEwMDt0KGwpPHQocikmJnQobyk8PXQocik/KHRoaXMuY3dkKz1NYXRoLmFicyhzKSxsPXIpOnQobCk+dChhKSYmdChvKT49dChhKT8odGhpcy5jd2QrPU1hdGguYWJzKHMpLGw9YSk6KHRoaXMuY3dkPTAsbD1NYXRoLm1heChNYXRoLm1pbihsLGEpLHIpKSx0aGlzLmN3ZD50aGlzLm9wdGlvbihcIndoZWVsTGltaXRcIil8fChlLnByZXZlbnREZWZhdWx0KCksdChsKSE9PXQobykmJnRoaXMuem9vbVRvKGwse2V2ZW50OmV9KSl9Y2FuWm9vbUluKCl7cmV0dXJuIHRoaXMub3B0aW9uKFwiem9vbVwiKSYmKHQodGhpcy5jb250ZW50UmVjdC53aWR0aCwxKTx0KHRoaXMuY29udGVudFJlY3QuZml0V2lkdGgsMSl8fHQodGhpcy50YXJnZXRTY2FsZSk8dCh0aGlzLm1heFNjYWxlKSl9Y2FuWm9vbU91dCgpe3JldHVybiB0aGlzLm9wdGlvbihcInpvb21cIikmJnQodGhpcy50YXJnZXRTY2FsZSk+dCh0aGlzLm1pblNjYWxlKX16b29tSW4odD0xLjI1LGUpe3RoaXMuem9vbVRvKHRoaXMudGFyZ2V0U2NhbGUqdCxlKX16b29tT3V0KHQ9LjgsZSl7dGhpcy56b29tVG8odGhpcy50YXJnZXRTY2FsZSp0LGUpfXpvb21Ub0ZpdCh0KXt0aGlzLnpvb21UbyhcImZpdFwiLHQpfXpvb21Ub0NvdmVyKHQpe3RoaXMuem9vbVRvKFwiY292ZXJcIix0KX16b29tVG9GdWxsKHQpe3RoaXMuem9vbVRvKFwiZnVsbFwiLHQpfXpvb21Ub01heCh0KXt0aGlzLnpvb21UbyhcIm1heFwiLHQpfXRvZ2dsZVpvb20odCl7dGhpcy56b29tVG8odGhpcy50YXJnZXRTY2FsZS10aGlzLm1pblNjYWxlPC41Kih0aGlzLmZ1bGxTY2FsZS10aGlzLm1pblNjYWxlKT9cImZ1bGxcIjpcImZpdFwiLHQpfXRvZ2dsZU1heCh0KXt0aGlzLnpvb21Ubyh0aGlzLnRhcmdldFNjYWxlLXRoaXMubWluU2NhbGU8LjUqKHRoaXMubWF4U2NhbGUtdGhpcy5taW5TY2FsZSk/XCJtYXhcIjpcImZpdFwiLHQpfXRvZ2dsZUNvdmVyKHQpe3RoaXMuem9vbVRvKHRoaXMudGFyZ2V0U2NhbGUtdGhpcy5taW5TY2FsZTwuNSoodGhpcy5jb3ZlclNjYWxlLXRoaXMubWluU2NhbGUpP1wiY292ZXJcIjpcImZpdFwiLHQpfWl0ZXJhdGVab29tKHQpe3RoaXMuem9vbVRvKFwibmV4dFwiLHQpfXpvb21Ubyh0PTEse2ZyaWN0aW9uOmU9XCJhdXRvXCIsb3JpZ2luWDppPTAsb3JpZ2luWTpuPTAsZXZlbnQ6c309e30pe2lmKHRoaXMuaXNDb250ZW50TG9hZGluZ3x8dGhpcy5zdGF0ZT09PWcuRGVzdHJveSlyZXR1cm47Y29uc3R7dGFyZ2V0U2NhbGU6b309dGhpczt0aGlzLnN0b3AoKTtsZXQgYT0xO2lmKFwibW91c2Vtb3ZlXCI9PT10aGlzLnBhbk1vZGUmJihzPXRoaXMucG1tZXx8cykscyl7Y29uc3QgdD10aGlzLmNvbnRlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksZT1zLmNsaWVudFh8fDAsbz1zLmNsaWVudFl8fDA7aT1lLXQubGVmdC0uNSp0LndpZHRoLG49by10LnRvcC0uNSp0LmhlaWdodH1jb25zdCByPXRoaXMuZnVsbFNjYWxlLGw9dGhpcy5tYXhTY2FsZTtsZXQgYz10aGlzLmNvdmVyU2NhbGU7XCJudW1iZXJcIj09dHlwZW9mIHQ/YT10L286KFwibmV4dFwiPT09dCYmKHItYzwuMiYmKGM9ciksdD1vPHItMWUtNT9cImZ1bGxcIjpvPGwtMWUtNT9cIm1heFwiOlwiZml0XCIpLGE9XCJmdWxsXCI9PT10P3Ivb3x8MTpcImNvdmVyXCI9PT10P2Mvb3x8MTpcIm1heFwiPT09dD9sL298fDE6MS9vfHwxKSxlPVwiYXV0b1wiPT09ZT9hPjE/LjE1Oi4yNTplLHRoaXMuYXBwbHlDaGFuZ2Uoe3NjYWxlOmEsb3JpZ2luWDppLG9yaWdpblk6bixmcmljdGlvbjplfSkscyYmXCJtb3VzZW1vdmVcIj09PXRoaXMucGFuTW9kZSYmdGhpcy5wYW5XaXRoTW91c2UocyxlKX1yb3RhdGVDQ1coKXt0aGlzLmFwcGx5Q2hhbmdlKHthbmdsZTotOTB9KX1yb3RhdGVDVygpe3RoaXMuYXBwbHlDaGFuZ2Uoe2FuZ2xlOjkwfSl9ZmxpcFgoKXt0aGlzLmFwcGx5Q2hhbmdlKHtmbGlwWDohMH0pfWZsaXBZKCl7dGhpcy5hcHBseUNoYW5nZSh7ZmxpcFk6ITB9KX1maXRYKCl7dGhpcy5zdG9wKFwidGFyZ2V0XCIpO2NvbnN0e2NvbnRhaW5lclJlY3Q6dCxjb250ZW50UmVjdDplLHRhcmdldDppfT10aGlzO3RoaXMuYXBwbHlDaGFuZ2Uoe3Bhblg6LjUqdC53aWR0aC0oZS5sZWZ0Ky41KmUuZml0V2lkdGgpLWkuZSxwYW5ZOi41KnQuaGVpZ2h0LShlLnRvcCsuNSplLmZpdEhlaWdodCktaS5mLHNjYWxlOnQud2lkdGgvZS5maXRXaWR0aC90aGlzLnRhcmdldFNjYWxlLG9yaWdpblg6MCxvcmlnaW5ZOjAsaWdub3JlQm91bmRzOiEwfSl9Zml0WSgpe3RoaXMuc3RvcChcInRhcmdldFwiKTtjb25zdHtjb250YWluZXJSZWN0OnQsY29udGVudFJlY3Q6ZSx0YXJnZXQ6aX09dGhpczt0aGlzLmFwcGx5Q2hhbmdlKHtwYW5YOi41KnQud2lkdGgtKGUubGVmdCsuNSplLmZpdFdpZHRoKS1pLmUscGFuWTouNSp0LmlubmVySGVpZ2h0LShlLnRvcCsuNSplLmZpdEhlaWdodCktaS5mLHNjYWxlOnQuaGVpZ2h0L2UuZml0SGVpZ2h0L3RoaXMudGFyZ2V0U2NhbGUsb3JpZ2luWDowLG9yaWdpblk6MCxpZ25vcmVCb3VuZHM6ITB9KX10b2dnbGVGUygpe2NvbnN0e2NvbnRhaW5lcjp0fT10aGlzLGU9dGhpcy5jbihcImluRnVsbHNjcmVlblwiKSxpPXRoaXMuY24oXCJodG1sSGFzRnVsbHNjcmVlblwiKTt0LmNsYXNzTGlzdC50b2dnbGUoZSk7Y29uc3Qgbj10LmNsYXNzTGlzdC5jb250YWlucyhlKTtuPyhkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChpKSxkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLHRoaXMub25LZXlkb3duLCEwKSk6KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGkpLGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsdGhpcy5vbktleWRvd24sITApKSx0aGlzLnVwZGF0ZU1ldHJpY3MoKSx0aGlzLmVtaXQobj9cImVudGVyRlNcIjpcImV4aXRGU1wiKX1nZXRNYXRyaXgodD10aGlzLmN1cnJlbnQpe2NvbnN0e2E6ZSxiOmksYzpuLGQ6cyxlOm8sZjphfT10O3JldHVybiBuZXcgRE9NTWF0cml4KFtlLGksbixzLG8sYV0pfXJlc2V0KHQpe2lmKHRoaXMuc3RhdGUhPT1nLkluaXQmJnRoaXMuc3RhdGUhPT1nLkRlc3Ryb3kpe3RoaXMuc3RvcChcImN1cnJlbnRcIik7Zm9yKGNvbnN0IHQgb2YgYil0aGlzLnRhcmdldFt0XT1QW3RdO3RoaXMudGFyZ2V0LmE9dGhpcy5taW5TY2FsZSx0aGlzLnRhcmdldC5kPXRoaXMubWluU2NhbGUsdGhpcy5jbGFtcFRhcmdldEJvdW5kcygpLHRoaXMuaXNSZXN0aW5nfHwodGhpcy5mcmljdGlvbj12b2lkIDA9PT10P3RoaXMub3B0aW9uKFwiZnJpY3Rpb25cIik6dCx0aGlzLnN0YXRlPWcuUGFubmluZyx0aGlzLnJlcXVlc3RUaWNrKCkpfX1kZXN0cm95KCl7dGhpcy5zdG9wKCksdGhpcy5zdGF0ZT1nLkRlc3Ryb3ksdGhpcy5kZXRhY2hFdmVudHMoKSx0aGlzLmRldGFjaE9ic2VydmVyKCk7Y29uc3R7Y29udGFpbmVyOnQsY29udGVudDplfT10aGlzLGk9dGhpcy5vcHRpb24oXCJjbGFzc2VzXCIpfHx7fTtmb3IoY29uc3QgZSBvZiBPYmplY3QudmFsdWVzKGkpKXQuY2xhc3NMaXN0LnJlbW92ZShlK1wiXCIpO2UmJihlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsdGhpcy5vbkxvYWQpLGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsdGhpcy5vbkVycm9yKSksdGhpcy5kZXRhY2hQbHVnaW5zKCl9fU9iamVjdC5kZWZpbmVQcm9wZXJ0eShULFwiZGVmYXVsdHNcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6eX0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShULFwiUGx1Z2luc1wiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTp7fX0pO2NvbnN0IE89ZnVuY3Rpb24odCxlKXtsZXQgaT0hMDtyZXR1cm4oLi4ubik9PntpJiYoaT0hMSx0KC4uLm4pLHNldFRpbWVvdXQoKCgpPT57aT0hMH0pLGUpKX19LEE9KHQsZSk9PntsZXQgaT1bXTtyZXR1cm4gdC5jaGlsZE5vZGVzLmZvckVhY2goKHQ9Pnt0Lm5vZGVUeXBlIT09Tm9kZS5FTEVNRU5UX05PREV8fGUmJiF0Lm1hdGNoZXMoZSl8fGkucHVzaCh0KX0pKSxpfSx6PXt2aWV3cG9ydDpudWxsLHRyYWNrOm51bGwsZW5hYmxlZDohMCxzbGlkZXM6W10sYXhpczpcInhcIix0cmFuc2l0aW9uOlwiZmFkZVwiLHByZWxvYWQ6MSxzbGlkZXNQZXJQYWdlOlwiYXV0b1wiLGluaXRpYWxQYWdlOjAsZnJpY3Rpb246LjEyLFBhbnpvb206e2RlY2VsRnJpY3Rpb246LjEyfSxjZW50ZXI6ITAsaW5maW5pdGU6ITAsZmlsbDohMCxkcmFnRnJlZTohMSxhZGFwdGl2ZUhlaWdodDohMSxkaXJlY3Rpb246XCJsdHJcIixjbGFzc2VzOntjb250YWluZXI6XCJmLWNhcm91c2VsXCIsdmlld3BvcnQ6XCJmLWNhcm91c2VsX192aWV3cG9ydFwiLHRyYWNrOlwiZi1jYXJvdXNlbF9fdHJhY2tcIixzbGlkZTpcImYtY2Fyb3VzZWxfX3NsaWRlXCIsaXNMVFI6XCJpcy1sdHJcIixpc1JUTDpcImlzLXJ0bFwiLGlzSG9yaXpvbnRhbDpcImlzLWhvcml6b250YWxcIixpc1ZlcnRpY2FsOlwiaXMtdmVydGljYWxcIixpblRyYW5zaXRpb246XCJpbi10cmFuc2l0aW9uXCIsaXNTZWxlY3RlZDpcImlzLXNlbGVjdGVkXCJ9LGwxMG46e05FWFQ6XCJOZXh0IHNsaWRlXCIsUFJFVjpcIlByZXZpb3VzIHNsaWRlXCIsR09UTzpcIkdvIHRvIHNsaWRlICMlZFwifX07dmFyIEw7IWZ1bmN0aW9uKHQpe3RbdC5Jbml0PTBdPVwiSW5pdFwiLHRbdC5SZWFkeT0xXT1cIlJlYWR5XCIsdFt0LkRlc3Ryb3k9Ml09XCJEZXN0cm95XCJ9KEx8fChMPXt9KSk7Y29uc3QgUj10PT57aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQmJih0PXtodG1sOnR9KSwhKHQgaW5zdGFuY2VvZiBTdHJpbmd8fHQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpe2NvbnN0IGU9dC50aHVtYjt2b2lkIDAhPT1lJiYoXCJzdHJpbmdcIj09dHlwZW9mIGUmJih0LnRodW1iU3JjPWUpLGUgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50JiYodC50aHVtYkVsPWUsdC50aHVtYkVsU3JjPWUuc3JjLHQudGh1bWJTcmM9ZS5zcmMpLGRlbGV0ZSB0LnRodW1iKX1yZXR1cm4gT2JqZWN0LmFzc2lnbih7aHRtbDpcIlwiLGVsOm51bGwsaXNEb206ITEsY2xhc3M6XCJcIixpbmRleDotMSxkaW06MCxnYXA6MCxwb3M6MCx0cmFuc2l0aW9uOiExfSx0KX0saz0odD17fSk9Pk9iamVjdC5hc3NpZ24oe2luZGV4Oi0xLHNsaWRlczpbXSxkaW06MCxwb3M6LTF9LHQpO2NsYXNzIEkgZXh0ZW5kcyBme2NvbnN0cnVjdG9yKHQsZSl7c3VwZXIoZSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJpbnN0YW5jZVwiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTp0fSl9YXR0YWNoKCl7fWRldGFjaCgpe319Y29uc3QgRD17Y2xhc3Nlczp7bGlzdDpcImYtY2Fyb3VzZWxfX2RvdHNcIixpc0R5bmFtaWM6XCJpcy1keW5hbWljXCIsaGFzRG90czpcImhhcy1kb3RzXCIsZG90OlwiZi1jYXJvdXNlbF9fZG90XCIsaXNCZWZvcmVQcmV2OlwiaXMtYmVmb3JlLXByZXZcIixpc1ByZXY6XCJpcy1wcmV2XCIsaXNDdXJyZW50OlwiaXMtY3VycmVudFwiLGlzTmV4dDpcImlzLW5leHRcIixpc0FmdGVyTmV4dDpcImlzLWFmdGVyLW5leHRcIn0sZG90VHBsOic8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBkYXRhLWNhcm91c2VsLXBhZ2U9XCIlaVwiIGFyaWEtbGFiZWw9XCJ7e0dPVE99fVwiPjxzcGFuIGNsYXNzPVwiZi1jYXJvdXNlbF9fZG90XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPjwvYnV0dG9uPicsZHluYW1pY0Zyb206MTEsbWF4Q291bnQ6MS8wLG1pbkNvdW50OjJ9O2NsYXNzIEYgZXh0ZW5kcyBJe2NvbnN0cnVjdG9yKCl7c3VwZXIoLi4uYXJndW1lbnRzKSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcImlzRHluYW1pY1wiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTohMX0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwibGlzdFwiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpudWxsfSl9b25SZWZyZXNoKCl7dGhpcy5yZWZyZXNoKCl9YnVpbGQoKXtsZXQgdD10aGlzLmxpc3Q7cmV0dXJuIHR8fCh0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKSxTKHQsdGhpcy5jbihcImxpc3RcIikpLHQuc2V0QXR0cmlidXRlKFwicm9sZVwiLFwidGFibGlzdFwiKSx0aGlzLmluc3RhbmNlLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0KSxTKHRoaXMuaW5zdGFuY2UuY29udGFpbmVyLHRoaXMuY24oXCJoYXNEb3RzXCIpKSx0aGlzLmxpc3Q9dCksdH1yZWZyZXNoKCl7dmFyIHQ7Y29uc3QgZT10aGlzLmluc3RhbmNlLnBhZ2VzLmxlbmd0aCxpPU1hdGgubWluKDIsdGhpcy5vcHRpb24oXCJtaW5Db3VudFwiKSksbj1NYXRoLm1heCgyZTMsdGhpcy5vcHRpb24oXCJtYXhDb3VudFwiKSkscz10aGlzLm9wdGlvbihcImR5bmFtaWNGcm9tXCIpO2lmKGU8aXx8ZT5uKXJldHVybiB2b2lkIHRoaXMuY2xlYW51cCgpO2NvbnN0IGE9XCJudW1iZXJcIj09dHlwZW9mIHMmJmU+NSYmZT49cyxyPSF0aGlzLmxpc3R8fHRoaXMuaXNEeW5hbWljIT09YXx8dGhpcy5saXN0LmNoaWxkcmVuLmxlbmd0aCE9PWU7ciYmdGhpcy5jbGVhbnVwKCk7Y29uc3QgbD10aGlzLmJ1aWxkKCk7aWYobyhsLHRoaXMuY24oXCJpc0R5bmFtaWNcIiksISFhKSxyKWZvcihsZXQgdD0wO3Q8ZTt0KyspbC5hcHBlbmQodGhpcy5jcmVhdGVJdGVtKHQpKTtsZXQgYyxoPTA7Zm9yKGNvbnN0IGUgb2ZbLi4ubC5jaGlsZHJlbl0pe2NvbnN0IGk9aD09PXRoaXMuaW5zdGFuY2UucGFnZTtpJiYoYz1lKSxvKGUsdGhpcy5jbihcImlzQ3VycmVudFwiKSxpKSxudWxsPT09KHQ9ZS5jaGlsZHJlblswXSl8fHZvaWQgMD09PXR8fHQuc2V0QXR0cmlidXRlKFwiYXJpYS1zZWxlY3RlZFwiLGk/XCJ0cnVlXCI6XCJmYWxzZVwiKTtmb3IoY29uc3QgdCBvZltcImlzQmVmb3JlUHJldlwiLFwiaXNQcmV2XCIsXCJpc05leHRcIixcImlzQWZ0ZXJOZXh0XCJdKUUoZSx0aGlzLmNuKHQpKTtoKyt9aWYoYz1jfHxsLmZpcnN0Q2hpbGQsYSYmYyl7Y29uc3QgdD1jLnByZXZpb3VzRWxlbWVudFNpYmxpbmcsZT10JiZ0LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7Uyh0LHRoaXMuY24oXCJpc1ByZXZcIikpLFMoZSx0aGlzLmNuKFwiaXNCZWZvcmVQcmV2XCIpKTtjb25zdCBpPWMubmV4dEVsZW1lbnRTaWJsaW5nLG49aSYmaS5uZXh0RWxlbWVudFNpYmxpbmc7UyhpLHRoaXMuY24oXCJpc05leHRcIikpLFMobix0aGlzLmNuKFwiaXNBZnRlck5leHRcIikpfXRoaXMuaXNEeW5hbWljPWF9Y3JlYXRlSXRlbSh0PTApe3ZhciBlO2NvbnN0IGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO2kuc2V0QXR0cmlidXRlKFwicm9sZVwiLFwicHJlc2VudGF0aW9uXCIpO2NvbnN0IHM9bih0aGlzLmluc3RhbmNlLmxvY2FsaXplKHRoaXMub3B0aW9uKFwiZG90VHBsXCIpLFtbXCIlZFwiLHQrMV1dKS5yZXBsYWNlKC9cXCVpL2csdCtcIlwiKSk7cmV0dXJuIGkuYXBwZW5kQ2hpbGQocyksbnVsbD09PShlPWkuY2hpbGRyZW5bMF0pfHx2b2lkIDA9PT1lfHxlLnNldEF0dHJpYnV0ZShcInJvbGVcIixcInRhYlwiKSxpfWNsZWFudXAoKXt0aGlzLmxpc3QmJih0aGlzLmxpc3QucmVtb3ZlKCksdGhpcy5saXN0PW51bGwpLHRoaXMuaXNEeW5hbWljPSExLEUodGhpcy5pbnN0YW5jZS5jb250YWluZXIsdGhpcy5jbihcImhhc0RvdHNcIikpfWF0dGFjaCgpe3RoaXMuaW5zdGFuY2Uub24oW1wicmVmcmVzaFwiLFwiY2hhbmdlXCJdLHRoaXMub25SZWZyZXNoKX1kZXRhY2goKXt0aGlzLmluc3RhbmNlLm9mZihbXCJyZWZyZXNoXCIsXCJjaGFuZ2VcIl0sdGhpcy5vblJlZnJlc2gpLHRoaXMuY2xlYW51cCgpfX1PYmplY3QuZGVmaW5lUHJvcGVydHkoRixcImRlZmF1bHRzXCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOkR9KTtjbGFzcyBqIGV4dGVuZHMgSXtjb25zdHJ1Y3Rvcigpe3N1cGVyKC4uLmFyZ3VtZW50cyksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJjb250YWluZXJcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6bnVsbH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwicHJldlwiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpudWxsfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJuZXh0XCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOm51bGx9KX1vblJlZnJlc2goKXtjb25zdCB0PXRoaXMuaW5zdGFuY2UsZT10LnBhZ2VzLmxlbmd0aCxpPXQucGFnZTtpZihlPDIpcmV0dXJuIHZvaWQgdGhpcy5jbGVhbnVwKCk7dGhpcy5idWlsZCgpO2xldCBuPXRoaXMucHJldixzPXRoaXMubmV4dDtuJiZzJiYobi5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKSxzLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpLHQuaXNJbmZpbml0ZXx8KGk8PTAmJm4uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIixcIlwiKSxpPj1lLTEmJnMuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIixcIlwiKSkpfWNyZWF0ZUJ1dHRvbih0KXtjb25zdCBlPXRoaXMuaW5zdGFuY2UsaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO2kuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIixcIjBcIiksaS5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiLGUubG9jYWxpemUoYHt7JHt0LnRvVXBwZXJDYXNlKCl9fX1gKSksUyhpLHRoaXMuY24oXCJidXR0b25cIikrXCIgXCIrdGhpcy5jbihcIm5leHRcIj09PXQ/XCJpc05leHRcIjpcImlzUHJldlwiKSk7Y29uc3Qgbj1lLmlzUlRMP1wibmV4dFwiPT09dD9cInByZXZcIjpcIm5leHRcIjp0O3ZhciBzO3JldHVybiBpLmlubmVySFRNTD1lLmxvY2FsaXplKHRoaXMub3B0aW9uKGAke259VHBsYCkpLGkuZGF0YXNldFtgY2Fyb3VzZWwke3M9dCxzP3MubWF0Y2goXCJeW2Etel1cIik/cy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStzLnN1YnN0cmluZygxKTpzOlwiXCJ9YF09XCJ0cnVlXCIsaX1idWlsZCgpe2xldCB0PXRoaXMuY29udGFpbmVyO3R8fCh0aGlzLmNvbnRhaW5lcj10PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksUyh0LHRoaXMuY24oXCJjb250YWluZXJcIikpLHRoaXMuaW5zdGFuY2UuY29udGFpbmVyLmFwcGVuZENoaWxkKHQpKSx0aGlzLm5leHR8fCh0aGlzLm5leHQ9dC5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUJ1dHRvbihcIm5leHRcIikpKSx0aGlzLnByZXZ8fCh0aGlzLnByZXY9dC5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUJ1dHRvbihcInByZXZcIikpKX1jbGVhbnVwKCl7dGhpcy5wcmV2JiZ0aGlzLnByZXYucmVtb3ZlKCksdGhpcy5uZXh0JiZ0aGlzLm5leHQucmVtb3ZlKCksdGhpcy5jb250YWluZXImJnRoaXMuY29udGFpbmVyLnJlbW92ZSgpLHRoaXMucHJldj1udWxsLHRoaXMubmV4dD1udWxsLHRoaXMuY29udGFpbmVyPW51bGx9YXR0YWNoKCl7dGhpcy5pbnN0YW5jZS5vbihbXCJyZWZyZXNoXCIsXCJjaGFuZ2VcIl0sdGhpcy5vblJlZnJlc2gpfWRldGFjaCgpe3RoaXMuaW5zdGFuY2Uub2ZmKFtcInJlZnJlc2hcIixcImNoYW5nZVwiXSx0aGlzLm9uUmVmcmVzaCksdGhpcy5jbGVhbnVwKCl9fU9iamVjdC5kZWZpbmVQcm9wZXJ0eShqLFwiZGVmYXVsdHNcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6e2NsYXNzZXM6e2NvbnRhaW5lcjpcImYtY2Fyb3VzZWxfX25hdlwiLGJ1dHRvbjpcImYtYnV0dG9uXCIsaXNOZXh0OlwiaXMtbmV4dFwiLGlzUHJldjpcImlzLXByZXZcIn0sbmV4dFRwbDonPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHRhYmluZGV4PVwiLTFcIj48cGF0aCBkPVwiTTkgM2w5IDktOSA5XCIvPjwvc3ZnPicscHJldlRwbDonPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHRhYmluZGV4PVwiLTFcIj48cGF0aCBkPVwiTTE1IDNsLTkgOSA5IDlcIi8+PC9zdmc+J319KTtjbGFzcyBIIGV4dGVuZHMgSXtjb25zdHJ1Y3Rvcigpe3N1cGVyKC4uLmFyZ3VtZW50cyksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJzZWxlY3RlZEluZGV4XCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOm51bGx9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInRhcmdldFwiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpudWxsfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJuYXZcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6bnVsbH0pfWFkZEFzVGFyZ2V0Rm9yKHQpe3RoaXMudGFyZ2V0PXRoaXMuaW5zdGFuY2UsdGhpcy5uYXY9dCx0aGlzLmF0dGFjaEV2ZW50cygpfWFkZEFzTmF2Rm9yKHQpe3RoaXMubmF2PXRoaXMuaW5zdGFuY2UsdGhpcy50YXJnZXQ9dCx0aGlzLmF0dGFjaEV2ZW50cygpfWF0dGFjaEV2ZW50cygpe3RoaXMubmF2JiZ0aGlzLnRhcmdldCYmKHRoaXMubmF2Lm9wdGlvbnMuaW5pdGlhbFNsaWRlPXRoaXMudGFyZ2V0Lm9wdGlvbnMuaW5pdGlhbFBhZ2UsdGhpcy5uYXYub24oXCJyZWFkeVwiLHRoaXMub25OYXZSZWFkeSksdGhpcy5uYXYuc3RhdGU9PT1MLlJlYWR5JiZ0aGlzLm9uTmF2UmVhZHkodGhpcy5uYXYpLHRoaXMudGFyZ2V0Lm9uKFwicmVhZHlcIix0aGlzLm9uVGFyZ2V0UmVhZHkpLHRoaXMudGFyZ2V0LnN0YXRlPT09TC5SZWFkeSYmdGhpcy5vblRhcmdldFJlYWR5KHRoaXMudGFyZ2V0KSl9b25OYXZSZWFkeSh0KXt0Lm9uKFwiY3JlYXRlU2xpZGVcIix0aGlzLm9uTmF2Q3JlYXRlU2xpZGUpLHQub24oXCJQYW56b29tLmNsaWNrXCIsdGhpcy5vbk5hdkNsaWNrKSx0Lm9uKFwiUGFuem9vbS50b3VjaEVuZFwiLHRoaXMub25OYXZUb3VjaCksdGhpcy5vblRhcmdldENoYW5nZSgpfW9uVGFyZ2V0UmVhZHkodCl7dC5vbihcImNoYW5nZVwiLHRoaXMub25UYXJnZXRDaGFuZ2UpLHQub24oXCJQYW56b29tLnJlZnJlc2hcIix0aGlzLm9uVGFyZ2V0Q2hhbmdlKSx0aGlzLm9uVGFyZ2V0Q2hhbmdlKCl9b25OYXZDbGljayh0LGUsaSl7aS5wb2ludGVyVHlwZXx8dGhpcy5vbk5hdlRvdWNoKHQsdC5wYW56b29tLGkpfW9uTmF2VG91Y2godCxlLGkpe3ZhciBuLHM7aWYoTWF0aC5hYnMoZS5kcmFnT2Zmc2V0LngpPjN8fE1hdGguYWJzKGUuZHJhZ09mZnNldC55KT4zKXJldHVybjtjb25zdCBvPWkudGFyZ2V0LHtuYXY6YSx0YXJnZXQ6cn09dGhpcztpZighYXx8IXJ8fCFvKXJldHVybjtjb25zdCBsPW8uY2xvc2VzdChcIltkYXRhLWluZGV4XVwiKTtpZihpLnN0b3BQcm9wYWdhdGlvbigpLGkucHJldmVudERlZmF1bHQoKSwhbClyZXR1cm47Y29uc3QgYz1wYXJzZUludChsLmRhdGFzZXQuaW5kZXh8fFwiXCIsMTApfHwwLGg9ci5nZXRQYWdlRm9yU2xpZGUoYyksZD1hLmdldFBhZ2VGb3JTbGlkZShjKTthLnNsaWRlVG8oZCksci5zbGlkZVRvKGgse2ZyaWN0aW9uOm51bGw9PT0ocz1udWxsPT09KG49dGhpcy5uYXYpfHx2b2lkIDA9PT1uP3ZvaWQgMDpuLnBsdWdpbnMpfHx2b2lkIDA9PT1zP3ZvaWQgMDpzLlN5bmMub3B0aW9uKFwiZnJpY3Rpb25cIil9KSx0aGlzLm1hcmtTZWxlY3RlZFNsaWRlKGMpfW9uTmF2Q3JlYXRlU2xpZGUodCxlKXtlLmluZGV4PT09dGhpcy5zZWxlY3RlZEluZGV4JiZ0aGlzLm1hcmtTZWxlY3RlZFNsaWRlKGUuaW5kZXgpfW9uVGFyZ2V0Q2hhbmdlKCl7Y29uc3R7dGFyZ2V0OnQsbmF2OmV9PXRoaXM7aWYoIXR8fCFlKXJldHVybjtpZihlLnN0YXRlIT09TC5SZWFkeXx8dC5zdGF0ZSE9PUwuUmVhZHkpcmV0dXJuO2NvbnN0IGk9dC5wYWdlc1t0LnBhZ2VdLnNsaWRlc1swXS5pbmRleCxuPWUuZ2V0UGFnZUZvclNsaWRlKGkpO3RoaXMubWFya1NlbGVjdGVkU2xpZGUoaSksZS5zbGlkZVRvKG4pfW1hcmtTZWxlY3RlZFNsaWRlKHQpe2NvbnN0e25hdjplfT10aGlzO2UmJmUuc3RhdGU9PT1MLlJlYWR5JiYodGhpcy5zZWxlY3RlZEluZGV4PXQsWy4uLmUuc2xpZGVzXS5tYXAoKGU9PntlLmVsJiZlLmVsLmNsYXNzTGlzdFtlLmluZGV4PT09dD9cImFkZFwiOlwicmVtb3ZlXCJdKFwiaXMtbmF2LXNlbGVjdGVkXCIpfSkpKX1hdHRhY2goKXtsZXQgdD10aGlzLm9wdGlvbnMudGFyZ2V0LGU9dGhpcy5vcHRpb25zLm5hdjt0P3RoaXMuYWRkQXNOYXZGb3IodCk6ZSYmdGhpcy5hZGRBc1RhcmdldEZvcihlKX1kZXRhY2goKXt0aGlzLm5hdiYmKHRoaXMubmF2Lm9mZihcInJlYWR5XCIsdGhpcy5vbk5hdlJlYWR5KSx0aGlzLm5hdi5vZmYoXCJjcmVhdGVTbGlkZVwiLHRoaXMub25OYXZDcmVhdGVTbGlkZSksdGhpcy5uYXYub2ZmKFwiUGFuem9vbS5jbGlja1wiLHRoaXMub25OYXZDbGljayksdGhpcy5uYXYub2ZmKFwiUGFuem9vbS50b3VjaEVuZFwiLHRoaXMub25OYXZUb3VjaCkpLHRoaXMubmF2PW51bGwsdGhpcy50YXJnZXQmJih0aGlzLnRhcmdldC5vZmYoXCJyZWFkeVwiLHRoaXMub25UYXJnZXRSZWFkeSksdGhpcy50YXJnZXQub2ZmKFwicmVmcmVzaFwiLHRoaXMub25UYXJnZXRDaGFuZ2UpLHRoaXMudGFyZ2V0Lm9mZihcImNoYW5nZVwiLHRoaXMub25UYXJnZXRDaGFuZ2UpKSx0aGlzLnRhcmdldD1udWxsfX1PYmplY3QuZGVmaW5lUHJvcGVydHkoSCxcImRlZmF1bHRzXCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOntmcmljdGlvbjouMzV9fSk7Y29uc3QgQj17TmF2aWdhdGlvbjpqLERvdHM6RixTeW5jOkh9O2NsYXNzIF8gZXh0ZW5kcyBte2dldCBheGlzKCl7cmV0dXJuIHRoaXMuaXNIb3Jpem9udGFsP1wiZVwiOlwiZlwifWdldCBpc0VuYWJsZWQoKXtyZXR1cm4gdGhpcy5zdGF0ZT09PUwuUmVhZHl9Z2V0IGlzSW5maW5pdGUoKXtsZXQgdD0hMTtjb25zdCBlPXRoaXMuY29udGVudERpbSxpPXRoaXMudmlld3BvcnREaW07cmV0dXJuIHRoaXMucGFnZXMubGVuZ3RoPj0yJiZlPjEuNSppJiYodD10aGlzLm9wdGlvbihcImluZmluaXRlXCIpKSx0fWdldCBpc1JUTCgpe3JldHVyblwicnRsXCI9PT10aGlzLm9wdGlvbihcImRpcmVjdGlvblwiKX1nZXQgaXNIb3Jpem9udGFsKCl7cmV0dXJuXCJ4XCI9PT10aGlzLm9wdGlvbihcImF4aXNcIil9Y29uc3RydWN0b3IodCxlPXt9LGk9e30pe2lmKHN1cGVyKCksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJ1c2VyT3B0aW9uc1wiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTp7fX0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwidXNlclBsdWdpbnNcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6e319KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcImJwXCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOlwiXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcImxwXCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOjB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInN0YXRlXCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOkwuSW5pdH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwicGFnZVwiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTowfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJwcmV2UGFnZVwiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpudWxsfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJjb250YWluZXJcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6dm9pZCAwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJ2aWV3cG9ydFwiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpudWxsfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJ0cmFja1wiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpudWxsfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJzbGlkZXNcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6W119KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInBhZ2VzXCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOltdfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJwYW56b29tXCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOm51bGx9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcImluVHJhbnNpdGlvblwiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpuZXcgU2V0fSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJjb250ZW50RGltXCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOjB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInZpZXdwb3J0RGltXCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOjB9KSxcInN0cmluZ1wiPT10eXBlb2YgdCYmKHQ9ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0KSksIXR8fCF4KHQpKXRocm93IG5ldyBFcnJvcihcIk5vIEVsZW1lbnQgZm91bmRcIik7dGhpcy5jb250YWluZXI9dCx0aGlzLnNsaWRlTmV4dD1PKHRoaXMuc2xpZGVOZXh0LmJpbmQodGhpcyksMTUwKSx0aGlzLnNsaWRlUHJldj1PKHRoaXMuc2xpZGVQcmV2LmJpbmQodGhpcyksMTUwKSx0aGlzLnVzZXJPcHRpb25zPWUsdGhpcy51c2VyUGx1Z2lucz1pLHF1ZXVlTWljcm90YXNrKCgoKT0+e3RoaXMucHJvY2Vzc09wdGlvbnMoKX0pKX1wcm9jZXNzT3B0aW9ucygpe2NvbnN0IHQ9dSh7fSxfLmRlZmF1bHRzLHRoaXMudXNlck9wdGlvbnMpO2xldCBlPVwiXCI7Y29uc3QgaT10LmJyZWFrcG9pbnRzO2lmKGkmJmQoaSkpZm9yKGNvbnN0W24sc11vZiBPYmplY3QuZW50cmllcyhpKSl3aW5kb3cubWF0Y2hNZWRpYShuKS5tYXRjaGVzJiZkKHMpJiYoZSs9bix1KHQscykpO2U9PT10aGlzLmJwJiZ0aGlzLnN0YXRlIT09TC5Jbml0fHwodGhpcy5icD1lLHRoaXMuc3RhdGU9PT1MLlJlYWR5JiYodC5pbml0aWFsU2xpZGU9dGhpcy5wYWdlc1t0aGlzLnBhZ2VdLnNsaWRlc1swXS5pbmRleCksdGhpcy5zdGF0ZSE9PUwuSW5pdCYmdGhpcy5kZXN0cm95KCksc3VwZXIuc2V0T3B0aW9ucyh0KSwhMT09PXRoaXMub3B0aW9uKFwiZW5hYmxlZFwiKT90aGlzLmF0dGFjaEV2ZW50cygpOnNldFRpbWVvdXQoKCgpPT57dGhpcy5pbml0KCl9KSwwKSl9aW5pdCgpe3RoaXMuc3RhdGU9TC5Jbml0LHRoaXMuZW1pdChcImluaXRcIiksdGhpcy5hdHRhY2hQbHVnaW5zKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxfLlBsdWdpbnMpLHRoaXMudXNlclBsdWdpbnMpKSx0aGlzLmluaXRMYXlvdXQoKSx0aGlzLmluaXRTbGlkZXMoKSx0aGlzLnVwZGF0ZU1ldHJpY3MoKSx0aGlzLnNldEluaXRpYWxQb3NpdGlvbigpLHRoaXMuaW5pdFBhbnpvb20oKSx0aGlzLmF0dGFjaEV2ZW50cygpLHRoaXMuc3RhdGU9TC5SZWFkeSx0aGlzLmVtaXQoXCJyZWFkeVwiKX1pbml0TGF5b3V0KCl7Y29uc3R7Y29udGFpbmVyOnR9PXRoaXMsZT10aGlzLm9wdGlvbihcImNsYXNzZXNcIik7Uyh0LHRoaXMuY24oXCJjb250YWluZXJcIikpLG8odCxlLmlzTFRSLCF0aGlzLmlzUlRMKSxvKHQsZS5pc1JUTCx0aGlzLmlzUlRMKSxvKHQsZS5pc1ZlcnRpY2FsLCF0aGlzLmlzSG9yaXpvbnRhbCksbyh0LGUuaXNIb3Jpem9udGFsLHRoaXMuaXNIb3Jpem9udGFsKTtsZXQgaT10aGlzLm9wdGlvbihcInZpZXdwb3J0XCIpfHx0LnF1ZXJ5U2VsZWN0b3IoYC4ke2Uudmlld3BvcnR9YCk7aXx8KGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxTKGksZS52aWV3cG9ydCksaS5hcHBlbmQoLi4uQSh0LGAuJHtlLnNsaWRlfWApKSx0LnByZXBlbmQoaSkpO2xldCBuPXRoaXMub3B0aW9uKFwidHJhY2tcIil8fHQucXVlcnlTZWxlY3RvcihgLiR7ZS50cmFja31gKTtufHwobj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFMobixlLnRyYWNrKSxuLmFwcGVuZCguLi5BcnJheS5mcm9tKGkuY2hpbGROb2RlcykpKSxuLnNldEF0dHJpYnV0ZShcImFyaWEtbGl2ZVwiLFwicG9saXRlXCIpLGkuY29udGFpbnMobil8fGkucHJlcGVuZChuKSx0aGlzLnZpZXdwb3J0PWksdGhpcy50cmFjaz1uLHRoaXMuZW1pdChcImluaXRMYXlvdXRcIil9aW5pdFNsaWRlcygpe2NvbnN0e3RyYWNrOnR9PXRoaXM7aWYodCl7dGhpcy5zbGlkZXM9W10sWy4uLkEodCxgLiR7dGhpcy5jbihcInNsaWRlXCIpfWApXS5mb3JFYWNoKCh0PT57aWYoeCh0KSl7Y29uc3QgZT1SKHtlbDp0LGlzRG9tOiEwLGluZGV4OnRoaXMuc2xpZGVzLmxlbmd0aH0pO3RoaXMuc2xpZGVzLnB1c2goZSksdGhpcy5lbWl0KFwiaW5pdFNsaWRlXCIsZSx0aGlzLnNsaWRlcy5sZW5ndGgpfX0pKTtmb3IobGV0IHQgb2YgdGhpcy5vcHRpb24oXCJzbGlkZXNcIixbXSkpe2NvbnN0IGU9Uih0KTtlLmluZGV4PXRoaXMuc2xpZGVzLmxlbmd0aCx0aGlzLnNsaWRlcy5wdXNoKGUpLHRoaXMuZW1pdChcImluaXRTbGlkZVwiLGUsdGhpcy5zbGlkZXMubGVuZ3RoKX10aGlzLmVtaXQoXCJpbml0U2xpZGVzXCIpfX1zZXRJbml0aWFsUGFnZSgpe2xldCB0PTA7Y29uc3QgZT10aGlzLm9wdGlvbihcImluaXRpYWxTbGlkZVwiKTt0PVwibnVtYmVyXCI9PXR5cGVvZiBlP3RoaXMuZ2V0UGFnZUZvclNsaWRlKGUpOnBhcnNlSW50KHRoaXMub3B0aW9uKFwiaW5pdGlhbFBhZ2VcIiwwKStcIlwiLDEwKXx8MCx0aGlzLnBhZ2U9dH1zZXRJbml0aWFsUG9zaXRpb24oKXtpZighdGhpcy50cmFja3x8IXRoaXMucGFnZXMubGVuZ3RoKXJldHVybjtjb25zdCB0PXRoaXMuaXNIb3Jpem9udGFsO2xldCBlPXRoaXMucGFnZTt0aGlzLnBhZ2VzW2VdfHwodGhpcy5wYWdlPWU9MCk7Y29uc3QgaT10aGlzLnBhZ2VzW2VdLnBvcyoodGhpcy5pc1JUTCYmdD8xOi0xKSxuPXQ/YCR7aX1weGA6XCIwXCIscz10P1wiMFwiOmAke2l9cHhgO3RoaXMudHJhY2suc3R5bGUudHJhbnNmb3JtPWB0cmFuc2xhdGUzZCgke259LCAke3N9LCAwKSBzY2FsZSgxKWAsdGhpcy5vcHRpb24oXCJhZGFwdGl2ZUhlaWdodFwiKSYmdGhpcy5zZXRWaWV3cG9ydEhlaWdodCgpfWluaXRQYW56b29tKCl7dGhpcy5wYW56b29tJiYodGhpcy5wYW56b29tLmRlc3Ryb3koKSx0aGlzLnBhbnpvb209bnVsbCk7Y29uc3QgdD10aGlzLm9wdGlvbihcIlBhbnpvb21cIil8fHt9O3RoaXMucGFuem9vbT1uZXcgVCh0aGlzLnZpZXdwb3J0LHUoe30se2NvbnRlbnQ6dGhpcy50cmFjayx6b29tOiExLHBhbk9ubHlab29tZWQ6ITEsbG9ja0F4aXM6dGhpcy5pc0hvcml6b250YWw/XCJ4XCI6XCJ5XCIsaW5maW5pdGU6dGhpcy5pc0luZmluaXRlLGNsaWNrOiExLGRibENsaWNrOiExLHRvdWNoOnQ9PiEodGhpcy5wYWdlcy5sZW5ndGg8MiYmIXQub3B0aW9ucy5pbmZpbml0ZSksYm91bmRzOigpPT50aGlzLmdldEJvdW5kcygpLG1heFZlbG9jaXR5OnQ9Pk1hdGguYWJzKHQudGFyZ2V0W3RoaXMuYXhpc10tdC5jdXJyZW50W3RoaXMuYXhpc10pPDIqdGhpcy52aWV3cG9ydERpbT8xMDA6MH0sdCkpLHRoaXMucGFuem9vbS5vbihcIipcIiwoKHQsZSwuLi5pKT0+e3RoaXMuZW1pdChgUGFuem9vbS4ke2V9YCx0LC4uLmkpfSkpLHRoaXMucGFuem9vbS5vbihcImRlY2VsXCIsdGhpcy5vbkRlY2VsKSx0aGlzLnBhbnpvb20ub24oXCJyZWZyZXNoXCIsdGhpcy5vblJlZnJlc2gpLHRoaXMucGFuem9vbS5vbihcImJlZm9yZVRyYW5zZm9ybVwiLHRoaXMub25CZWZvcmVUcmFuc2Zvcm0pLHRoaXMucGFuem9vbS5vbihcImVuZEFuaW1hdGlvblwiLHRoaXMub25FbmRBbmltYXRpb24pfWF0dGFjaEV2ZW50cygpe2NvbnN0IHQ9dGhpcy5jb250YWluZXI7dCYmKHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdGhpcy5vbkNsaWNrLHtwYXNzaXZlOiExLGNhcHR1cmU6ITF9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJzbGlkZVRvXCIsdGhpcy5vblNsaWRlVG8pKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHRoaXMub25SZXNpemUpfWNyZWF0ZVBhZ2VzKCl7bGV0IHQ9W107Y29uc3R7Y29udGVudERpbTplLHZpZXdwb3J0RGltOml9PXRoaXMsbj10aGlzLm9wdGlvbihcInNsaWRlc1BlclBhZ2VcIik7aWYoXCJudW1iZXJcIj09dHlwZW9mIG4mJmU+aSl7Zm9yKGxldCBlPTA7ZTx0aGlzLnNsaWRlcy5sZW5ndGg7ZSs9bil0LnB1c2goayh7aW5kZXg6ZSxzbGlkZXM6dGhpcy5zbGlkZXMuc2xpY2UoZSxlK24pfSkpO3JldHVybiB0fWxldCBzPTAsbz0wO2Zvcihjb25zdCBlIG9mIHRoaXMuc2xpZGVzKSghdC5sZW5ndGh8fG8rZS5kaW0+aSkmJih0LnB1c2goaygpKSxzPXQubGVuZ3RoLTEsbz0wKSxvKz1lLmRpbStlLmdhcCx0W3NdLnNsaWRlcy5wdXNoKGUpO3JldHVybiB0fXByb2Nlc3NQYWdlcygpe2NvbnN0IGU9dGhpcy5wYWdlcyx7Y29udGVudERpbTppLHZpZXdwb3J0RGltOm59PXRoaXMscz10aGlzLm9wdGlvbihcImNlbnRlclwiKSxvPXRoaXMub3B0aW9uKFwiZmlsbFwiKSxhPW8mJnMmJmk+biYmIXRoaXMuaXNJbmZpbml0ZTtpZihlLmZvckVhY2goKCh0LGUpPT57dC5pbmRleD1lLHQucG9zPXQuc2xpZGVzWzBdLnBvcyx0LmRpbT0wO2Zvcihjb25zdFtlLGldb2YgdC5zbGlkZXMuZW50cmllcygpKXQuZGltKz1pLmRpbSxlPHQuc2xpZGVzLmxlbmd0aC0xJiYodC5kaW0rPWkuZ2FwKTthJiZ0LnBvcysuNSp0LmRpbTwuNSpuP3QucG9zPTA6YSYmdC5wb3MrLjUqdC5kaW0+PWktLjUqbj90LnBvcz1pLW46cyYmKHQucG9zKz0tLjUqKG4tdC5kaW0pKX0pKSxlLmZvckVhY2goKChlLHMpPT57byYmIXRoaXMuaXNJbmZpbml0ZSYmaT5uJiYoZS5wb3M9TWF0aC5tYXgoZS5wb3MsMCksZS5wb3M9TWF0aC5taW4oZS5wb3MsaS1uKSksZS5wb3M9dChlLnBvcywxZTMpLGUuZGltPXQoZS5kaW0sMWUzKSxlLnBvczwuMSYmZS5wb3M+LS4xJiYoZS5wb3M9MCl9KSksdGhpcy5pc0luZmluaXRlKXJldHVybiBlO2NvbnN0IHI9W107bGV0IGw7cmV0dXJuIGUuZm9yRWFjaCgodD0+e2NvbnN0IGU9T2JqZWN0LmFzc2lnbih7fSx0KTtsJiZlLnBvcz09PWwucG9zPyhsLmRpbSs9ZS5kaW0sbC5zbGlkZXM9Wy4uLmwuc2xpZGVzLC4uLmUuc2xpZGVzXSk6KGUuaW5kZXg9ci5sZW5ndGgsbD1lLHIucHVzaChlKSl9KSkscn1nZXRQYWdlRnJvbUluZGV4KHQ9MCl7Y29uc3QgZT10aGlzLnBhZ2VzLmxlbmd0aDtsZXQgaTtyZXR1cm4gdD1wYXJzZUludCgodHx8MCkudG9TdHJpbmcoKSl8fDAsaT10aGlzLmlzSW5maW5pdGU/KHQlZStlKSVlOk1hdGgubWF4KE1hdGgubWluKHQsZS0xKSwwKSxpfWdldFNsaWRlTWV0cmljcyhlKXtjb25zdCBpPXRoaXMuaXNIb3Jpem9udGFsP1wid2lkdGhcIjpcImhlaWdodFwiO2xldCBuPTAscz0wLG89ZS5lbDtvP249cGFyc2VGbG9hdChvLmRhdGFzZXRbaV18fFwiXCIpfHwwOihvPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksby5zdHlsZS52aXNpYmlsaXR5PVwiaGlkZGVuXCIsUyhvLHRoaXMuY24oXCJzbGlkZVwiKStcIiBcIitlLmNsYXNzKSwodGhpcy50cmFja3x8ZG9jdW1lbnQuYm9keSkucHJlcGVuZChvKSksbj8oby5zdHlsZVtpXT1gJHtufXB4YCxvLnN0eWxlW1wid2lkdGhcIj09PWk/XCJoZWlnaHRcIjpcIndpZHRoXCJdPVwiXCIpOm49by5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVtpXTtjb25zdCBhPWdldENvbXB1dGVkU3R5bGUobyk7cmV0dXJuXCJjb250ZW50LWJveFwiPT09YS5ib3hTaXppbmcmJih0aGlzLmlzSG9yaXpvbnRhbD8obis9cGFyc2VGbG9hdChhLnBhZGRpbmdMZWZ0KXx8MCxuKz1wYXJzZUZsb2F0KGEucGFkZGluZ1JpZ2h0KXx8MCk6KG4rPXBhcnNlRmxvYXQoYS5wYWRkaW5nVG9wKXx8MCxuKz1wYXJzZUZsb2F0KGEucGFkZGluZ0JvdHRvbSl8fDApKSxzPXBhcnNlRmxvYXQoYVt0aGlzLmlzSG9yaXpvbnRhbD9cIm1hcmdpblJpZ2h0XCI6XCJtYXJnaW5Cb3R0b21cIl0pfHwwLHRoaXMuaXNIb3Jpem9udGFsLGUuZWx8fG8ucmVtb3ZlKCkse2RpbTp0KG4sMWUzKSxnYXA6dChzLDFlMyl9fWdldEJvdW5kcygpe2xldCB0PXttaW46MCxtYXg6MH07aWYodGhpcy5pc0luZmluaXRlKXQ9e21pbjotMS8wLG1heDoxLzB9O2Vsc2UgaWYodGhpcy5wYWdlcy5sZW5ndGgpe2NvbnN0IGU9dGhpcy5wYWdlc1swXS5wb3MsaT10aGlzLnBhZ2VzW3RoaXMucGFnZXMubGVuZ3RoLTFdLnBvczt0PXRoaXMuaXNSVEwmJnRoaXMuaXNIb3Jpem9udGFsP3ttaW46ZSxtYXg6aX06e21pbjotMSppLG1heDotMSplfX1yZXR1cm57eDp0aGlzLmlzSG9yaXpvbnRhbD90OnttaW46MCxtYXg6MH0seTp0aGlzLmlzSG9yaXpvbnRhbD97bWluOjAsbWF4OjB9OnR9fXJlcG9zaXRpb25TbGlkZXMoKXtsZXQgZSx7dmlld3BvcnQ6aSx2aWV3cG9ydERpbTpuLGNvbnRlbnREaW06cyxwYWdlOm8scGFnZXM6YX09dGhpcyxyPTAsbD0wLGM9MCxoPTA7dGhpcy5wYW56b29tP2g9LTEqdGhpcy5wYW56b29tLmN1cnJlbnRbdGhpcy5heGlzXTphW29dJiYoaD1hW29dLnBvc3x8MCksZT10aGlzLmlzSG9yaXpvbnRhbD90aGlzLmlzUlRMP1wicmlnaHRcIjpcImxlZnRcIjpcInRvcFwiLHRoaXMuaXNSVEwmJnRoaXMuaXNIb3Jpem9udGFsJiYoaCo9LTEpO2Zvcihjb25zdCBpIG9mIHRoaXMuc2xpZGVzKWkuZWw/KFwidG9wXCI9PT1lPyhpLmVsLnN0eWxlLnJpZ2h0PVwiXCIsaS5lbC5zdHlsZS5sZWZ0PVwiXCIpOmkuZWwuc3R5bGUudG9wPVwiXCIsaS5pbmRleCE9PXI/aS5lbC5zdHlsZVtlXT0wPT09bD9cIlwiOmAke3QobCwxZTMpfXB4YDppLmVsLnN0eWxlW2VdPVwiXCIsYys9aS5kaW0raS5nYXAscisrKTpsKz1pLmRpbStpLmdhcDtpZih0aGlzLmlzSW5maW5pdGUmJmMmJmkpe2NvbnN0IG89dGhpcy5pc0hvcml6b250YWw7bGV0IGE9Z2V0Q29tcHV0ZWRTdHlsZShpKSxyPVwicGFkZGluZ1wiLGQ9bz9cIlJpZ2h0XCI6XCJCb3R0b21cIix1PXBhcnNlRmxvYXQoYVtyKyhvP1wiTGVmdFwiOlwiVG9wXCIpXSk7aC09dSxuKz11LG4rPXBhcnNlRmxvYXQoYVtyK2RdKTtmb3IoY29uc3QgaSBvZiB0aGlzLnNsaWRlcylpLmVsJiYodChpLnBvcyk8dChuKSYmdChpLnBvcytpLmRpbStpLmdhcCk8dChoKSYmdChoKT50KHMtbikmJihpLmVsLnN0eWxlW2VdPWAke3QobCtjLDFlMyl9cHhgKSx0KGkucG9zK2kuZ2FwKT49dChzLW4pJiZ0KGkucG9zKT50KGgrbikmJnQoaCk8dChuKSYmKGkuZWwuc3R5bGVbZV09YC0ke3QoYywxZTMpfXB4YCkpfWxldCBkLHUscD1bLi4udGhpcy5pblRyYW5zaXRpb25dO2lmKHAubGVuZ3RoPjEmJihkPXRoaXMucGFnZXNbcFswXV0sdT10aGlzLnBhZ2VzW3BbMV1dKSxkJiZ1KXtsZXQgaT0wO2Zvcihjb25zdCBuIG9mIHRoaXMuc2xpZGVzKW4uZWw/dGhpcy5pblRyYW5zaXRpb24uaGFzKG4uaW5kZXgpJiZkLnNsaWRlcy5pbmRleE9mKG4pPDAmJihuLmVsLnN0eWxlW2VdPWAke3QoaSsoZC5wb3MtdS5wb3MpLDFlMyl9cHhgKTppKz1uLmRpbStuLmdhcH19Y3JlYXRlU2xpZGVFbCh0KXtpZighdGhpcy50cmFja3x8IXQpcmV0dXJuO2lmKHQuZWwpcmV0dXJuO2NvbnN0IGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtTKGUsdGhpcy5jbihcInNsaWRlXCIpKSxTKGUsdC5jbGFzcyksUyhlLHQuY3VzdG9tQ2xhc3MpLHQuaHRtbCYmKGUuaW5uZXJIVE1MPXQuaHRtbCk7Y29uc3QgaT1bXTt0aGlzLnNsaWRlcy5mb3JFYWNoKCgodCxlKT0+e3QuZWwmJmkucHVzaChlKX0pKTtjb25zdCBuPXQuaW5kZXg7bGV0IHM9bnVsbDtpZihpLmxlbmd0aCl7bGV0IHQ9aS5yZWR1Y2UoKCh0LGUpPT5NYXRoLmFicyhlLW4pPE1hdGguYWJzKHQtbik/ZTp0KSk7cz10aGlzLnNsaWRlc1t0XX1jb25zdCBvPXMmJnMuZWw/cy5pbmRleDx0LmluZGV4P3MuZWwubmV4dFNpYmxpbmc6cy5lbDpudWxsO3RoaXMudHJhY2suaW5zZXJ0QmVmb3JlKGUsdGhpcy50cmFjay5jb250YWlucyhvKT9vOm51bGwpLHQuZWw9ZSx0aGlzLmVtaXQoXCJjcmVhdGVTbGlkZVwiLHQpfXJlbW92ZVNsaWRlRWwodCxlPSExKXtjb25zdCBpPXQuZWw7aWYoIWkpcmV0dXJuO2lmKEUoaSx0aGlzLmNuKFwiaXNTZWxlY3RlZFwiKSksdC5pc0RvbSYmIWUpcmV0dXJuIGkucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiksaS5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIpLEUoaSx0aGlzLmNuKFwiaXNTZWxlY3RlZFwiKSksdm9pZChpLnN0eWxlLmxlZnQ9XCJcIik7dGhpcy5lbWl0KFwicmVtb3ZlU2xpZGVcIix0KTtjb25zdCBuPW5ldyBDdXN0b21FdmVudChcImFuaW1hdGlvbmVuZFwiKTtpLmRpc3BhdGNoRXZlbnQobiksdC5lbCYmdC5lbC5yZW1vdmUoKSx0LmVsPW51bGx9dHJhbnNpdGlvblRvKGU9MCxpPXRoaXMub3B0aW9uKFwidHJhbnNpdGlvblwiKSl7aWYoIWkpcmV0dXJuITE7Y29uc3R7cGFnZXM6bixwYW56b29tOnN9PXRoaXM7ZT1wYXJzZUludCgoZXx8MCkudG9TdHJpbmcoKSl8fDA7Y29uc3Qgbz10aGlzLmdldFBhZ2VGcm9tSW5kZXgoZSk7aWYoIXN8fCFuW29dfHxuLmxlbmd0aDwyfHxuW3RoaXMucGFnZV0uc2xpZGVzWzBdLmRpbTx0aGlzLnZpZXdwb3J0RGltKXJldHVybiExO2NvbnN0IGE9ZT50aGlzLnBhZ2U/MTotMSxyPXRoaXMucGFnZXNbb10ucG9zKih0aGlzLmlzUlRMPzE6LTEpO2lmKHRoaXMucGFnZT09PW8mJnQociwxZTMpPT09dChzLnRhcmdldFt0aGlzLmF4aXNdLDFlMykpcmV0dXJuITE7dGhpcy5jbGVhclRyYW5zaXRpb25zKCk7Y29uc3QgbD1zLmlzUmVzdGluZztTKHRoaXMuY29udGFpbmVyLHRoaXMuY24oXCJpblRyYW5zaXRpb25cIikpO2NvbnN0IGM9dGhpcy5wYWdlc1t0aGlzLnBhZ2VdLnNsaWRlc1swXSxoPXRoaXMucGFnZXNbb10uc2xpZGVzWzBdO3RoaXMuaW5UcmFuc2l0aW9uLmFkZChoLmluZGV4KSx0aGlzLmNyZWF0ZVNsaWRlRWwoaCk7bGV0IGQ9Yy5lbCx1PWguZWw7bHx8XCJzbGlkZVwiPT09aXx8KGk9XCJmYWRlRmFzdFwiLGQ9bnVsbCk7Y29uc3QgcD10aGlzLmlzUlRMP1wibmV4dFwiOlwicHJldlwiLGY9dGhpcy5pc1JUTD9cInByZXZcIjpcIm5leHRcIjtyZXR1cm4gZCYmKHRoaXMuaW5UcmFuc2l0aW9uLmFkZChjLmluZGV4KSxjLnRyYW5zaXRpb249aSxkLmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIix0aGlzLm9uQW5pbWF0aW9uRW5kKSxkLmNsYXNzTGlzdC5hZGQoYGYtJHtpfU91dGAsYHRvLSR7YT4wP2Y6cH1gKSksdSYmKGgudHJhbnNpdGlvbj1pLHUuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLHRoaXMub25BbmltYXRpb25FbmQpLHUuY2xhc3NMaXN0LmFkZChgZi0ke2l9SW5gLGBmcm9tLSR7YT4wP3A6Zn1gKSkscy5wYW5Ubyh7eDp0aGlzLmlzSG9yaXpvbnRhbD9yOjAseTp0aGlzLmlzSG9yaXpvbnRhbD8wOnIsZnJpY3Rpb246MH0pLHRoaXMub25DaGFuZ2UobyksITB9bWFuYWdlU2xpZGVWaXNpYmxpdHkoKXtjb25zdCB0PW5ldyBTZXQsZT1uZXcgU2V0LGk9dGhpcy5nZXRWaXNpYmxlU2xpZGVzKHBhcnNlRmxvYXQodGhpcy5vcHRpb24oXCJwcmVsb2FkXCIsMCkrXCJcIil8fDApO2Zvcihjb25zdCBuIG9mIHRoaXMuc2xpZGVzKWkuaGFzKG4pP3QuYWRkKG4pOmUuYWRkKG4pO2Zvcihjb25zdCBlIG9mIHRoaXMuaW5UcmFuc2l0aW9uKXQuYWRkKHRoaXMuc2xpZGVzW2VdKTtmb3IoY29uc3QgZSBvZiB0KXRoaXMuY3JlYXRlU2xpZGVFbChlKSx0aGlzLmxhenlMb2FkU2xpZGUoZSk7Zm9yKGNvbnN0IGkgb2YgZSl0LmhhcyhpKXx8dGhpcy5yZW1vdmVTbGlkZUVsKGkpO3RoaXMubWFya1NlbGVjdGVkU2xpZGVzKCksdGhpcy5yZXBvc2l0aW9uU2xpZGVzKCl9bWFya1NlbGVjdGVkU2xpZGVzKCl7aWYoIXRoaXMucGFnZXNbdGhpcy5wYWdlXXx8IXRoaXMucGFnZXNbdGhpcy5wYWdlXS5zbGlkZXMpcmV0dXJuO2NvbnN0IHQ9XCJhcmlhLWhpZGRlblwiO2xldCBlPXRoaXMuY24oXCJpc1NlbGVjdGVkXCIpO2lmKGUpZm9yKGNvbnN0IGkgb2YgdGhpcy5zbGlkZXMpaS5lbCYmKGkuZWwuZGF0YXNldC5pbmRleD1gJHtpLmluZGV4fWAsdGhpcy5wYWdlc1t0aGlzLnBhZ2VdLnNsaWRlcy5pbmNsdWRlcyhpKT8oaS5lbC5jbGFzc0xpc3QuY29udGFpbnMoZSl8fChTKGkuZWwsZSksdGhpcy5lbWl0KFwic2VsZWN0U2xpZGVcIixpKSksaS5lbC5yZW1vdmVBdHRyaWJ1dGUodCkpOihpLmVsLmNsYXNzTGlzdC5jb250YWlucyhlKSYmKEUoaS5lbCxlKSx0aGlzLmVtaXQoXCJ1bnNlbGVjdFNsaWRlXCIsaSkpLGkuZWwuc2V0QXR0cmlidXRlKHQsXCJ0cnVlXCIpKSl9ZmxpcEluZmluaXRlVHJhY2soKXtjb25zdCB0PXRoaXMucGFuem9vbTtpZighdHx8IXRoaXMuaXNJbmZpbml0ZSlyZXR1cm47Y29uc3QgZT1cInhcIj09PXRoaXMub3B0aW9uKFwiYXhpc1wiKT9cImVcIjpcImZcIix7dmlld3BvcnREaW06aSxjb250ZW50RGltOm59PXRoaXM7bGV0IHM9dC5jdXJyZW50W2VdLG89dC50YXJnZXRbZV0tcyxhPTAscj0uNSppLGw9bjt0aGlzLmlzUlRMJiZ0aGlzLmlzSG9yaXpvbnRhbD8oczwtciYmKGE9LTEscys9bCkscz5sLXImJihhPTEscy09bCkpOihzPnImJihhPTEscy09bCksczwtbCtyJiYoYT0tMSxzKz1sKSksYSYmKHQuY3VycmVudFtlXT1zLHQudGFyZ2V0W2VdPXMrbyl9bGF6eUxvYWRTbGlkZSh0KXtjb25zdCBlPXRoaXMsaT10JiZ0LmVsO2lmKCFpKXJldHVybjtjb25zdCBzPW5ldyBTZXQsbz1cImYtZmFkZUluXCI7aS5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtbGF6eS1zcmNzZXRdXCIpLmZvckVhY2goKHQ9Pnt0IGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCYmcy5hZGQodCl9KSk7bGV0IGE9QXJyYXkuZnJvbShpLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1sYXp5LXNyY11cIikpO2kuZGF0YXNldC5sYXp5U3JjJiZhLnB1c2goaSksYS5tYXAoKHQ9Pnt0IGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudD9zLmFkZCh0KTp4KHQpJiYodC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9YHVybCgnJHt0LmRhdGFzZXQubGF6eVNyY3x8XCJcIn0nKWAsZGVsZXRlIHQuZGF0YXNldC5sYXp5U3JjKX0pKTtjb25zdCByPSh0LGksbik9PntuJiYobi5yZW1vdmUoKSxuPW51bGwpLGkuY29tcGxldGUmJihpLmNsYXNzTGlzdC5hZGQobyksc2V0VGltZW91dCgoKCk9PntpLmNsYXNzTGlzdC5yZW1vdmUobyl9KSwzNTApLGkuc3R5bGUuZGlzcGxheT1cIlwiKSx0aGlzLm9wdGlvbihcImFkYXB0aXZlSGVpZ2h0XCIpJiZ0LmVsJiZ0aGlzLnBhZ2VzW3RoaXMucGFnZV0uc2xpZGVzLmluZGV4T2YodCk+LTEmJihlLnVwZGF0ZU1ldHJpY3MoKSxlLnNldFZpZXdwb3J0SGVpZ2h0KCkpLHRoaXMuZW1pdChcImxvYWRcIix0KX07Zm9yKGNvbnN0IGUgb2Ygcyl7bGV0IGk9bnVsbDtlLnNyYz1lLmRhdGFzZXQubGF6eVNyY3NldHx8ZS5kYXRhc2V0LmxhenlTcmN8fFwiXCIsZGVsZXRlIGUuZGF0YXNldC5sYXp5U3JjLGRlbGV0ZSBlLmRhdGFzZXQubGF6eVNyY3NldCxlLnN0eWxlLmRpc3BsYXk9XCJub25lXCIsZS5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwoKCk9PntyKHQsZSxpKX0pKSxlLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsKCgpPT57cih0LGUsaSl9KSksc2V0VGltZW91dCgoKCk9PntlLnBhcmVudE5vZGUmJnQuZWwmJihlLmNvbXBsZXRlP3IodCxlLGkpOihpPW4odyksZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShpLGUpKSl9KSwzMDApfX1vbkFuaW1hdGlvbkVuZCh0KXt2YXIgZTtjb25zdCBpPXQudGFyZ2V0LG49aT9wYXJzZUludChpLmRhdGFzZXQuaW5kZXh8fFwiXCIsMTApfHwwOi0xLHM9dGhpcy5zbGlkZXNbbl0sbz10LmFuaW1hdGlvbk5hbWU7aWYoIWl8fCFzfHwhbylyZXR1cm47Y29uc3QgYT0hIXRoaXMuaW5UcmFuc2l0aW9uLmhhcyhuKSYmcy50cmFuc2l0aW9uO2EmJm8uc3Vic3RyaW5nKDAsYS5sZW5ndGgrMik9PT1gZi0ke2F9YCYmdGhpcy5pblRyYW5zaXRpb24uZGVsZXRlKG4pLHRoaXMuaW5UcmFuc2l0aW9uLnNpemV8fHRoaXMuY2xlYXJUcmFuc2l0aW9ucygpLG49PT10aGlzLnBhZ2UmJihudWxsPT09KGU9dGhpcy5wYW56b29tKXx8dm9pZCAwPT09ZT92b2lkIDA6ZS5pc1Jlc3RpbmcpJiZ0aGlzLmVtaXQoXCJzZXR0bGVcIil9b25EZWNlbCh0LGU9MCxpPTApe2NvbnN0e2lzUlRMOm4saXNIb3Jpem9udGFsOnMsYXhpczpvLHBhZ2VzOmF9PXRoaXMscj1hLmxlbmd0aCxsPU1hdGguYWJzKE1hdGguYXRhbjIoaSxlKS8oTWF0aC5QSS8xODApKTtsZXQgYz0wO2lmKGM9bD40NSYmbDwxMzU/cz8wOmk6cz9lOjAsIXIpcmV0dXJuO2NvbnN0IGg9dGhpcy5vcHRpb24oXCJkcmFnRnJlZVwiKTtsZXQgZD10aGlzLnBhZ2UsdT1uJiZzPzE6LTE7Y29uc3QgcD10LnRhcmdldFtvXSp1LGY9dC5jdXJyZW50W29dKnU7bGV0e3BhZ2VJbmRleDptfT10aGlzLmdldFBhZ2VGcm9tUG9zaXRpb24ocCkse3BhZ2VJbmRleDpnfT10aGlzLmdldFBhZ2VGcm9tUG9zaXRpb24oZik7aD90aGlzLm9uQ2hhbmdlKG0pOihkPWcsTWF0aC5hYnMoYyk+NSYmKGQ9biYmcz9jPDA/ZC0xOmQrMTpjPDA/ZCsxOmQtMSksdGhpcy5zbGlkZVRvKGQse3RyYW5zaXRpb246ITEsZnJpY3Rpb246dC5vcHRpb24oXCJkZWNlbEZyaWN0aW9uXCIpfSkpfW9uQ2xpY2sodCl7Y29uc3QgZT10LnRhcmdldCxpPWUmJngoZSk/ZS5kYXRhc2V0Om51bGw7bGV0IG4scztpJiYodm9pZCAwIT09aS5jYXJvdXNlbFBhZ2U/KHM9XCJzbGlkZVRvXCIsbj1pLmNhcm91c2VsUGFnZSk6dm9pZCAwIT09aS5jYXJvdXNlbE5leHQ/cz1cInNsaWRlTmV4dFwiOnZvaWQgMCE9PWkuY2Fyb3VzZWxQcmV2JiYocz1cInNsaWRlUHJldlwiKSkscz8odC5wcmV2ZW50RGVmYXVsdCgpLHQuc3RvcFByb3BhZ2F0aW9uKCksZSYmIWUuaGFzQXR0cmlidXRlKFwiZGlzYWJsZWRcIikmJnRoaXNbc10obikpOnRoaXMuZW1pdChcImNsaWNrXCIsdCl9b25TbGlkZVRvKHQpe2NvbnN0IGU9dC5kZXRhaWx8fDA7dGhpcy5zbGlkZVRvKHRoaXMuZ2V0UGFnZUZvclNsaWRlKGUpLHtmcmljdGlvbjowfSl9b25DaGFuZ2UodCxlPTApe2NvbnN0IGk9dGhpcy5wYWdlO3RoaXMucHJldlBhZ2U9aSx0aGlzLnBhZ2U9dCx0aGlzLm9wdGlvbihcImFkYXB0aXZlSGVpZ2h0XCIpJiZ0aGlzLnNldFZpZXdwb3J0SGVpZ2h0KCksdCE9PWkmJih0aGlzLm1hcmtTZWxlY3RlZFNsaWRlcygpLHRoaXMuZW1pdChcImNoYW5nZVwiLHQsaSxlKSl9b25SZWZyZXNoKCl7bGV0IHQ9dGhpcy5jb250ZW50RGltLGU9dGhpcy52aWV3cG9ydERpbTt0aGlzLnVwZGF0ZU1ldHJpY3MoKSx0aGlzLmNvbnRlbnREaW09PT10JiZ0aGlzLnZpZXdwb3J0RGltPT09ZXx8dGhpcy5zbGlkZVRvKHRoaXMucGFnZSx7ZnJpY3Rpb246MCx0cmFuc2l0aW9uOiExfSl9b25SZXNpemUoKXt0aGlzLm9wdGlvbihcImJyZWFrcG9pbnRzXCIpJiZ0aGlzLnByb2Nlc3NPcHRpb25zKCl9b25CZWZvcmVUcmFuc2Zvcm0odCl7dGhpcy5scCE9PXQuY3VycmVudFt0aGlzLmF4aXNdJiYodGhpcy5mbGlwSW5maW5pdGVUcmFjaygpLHRoaXMubWFuYWdlU2xpZGVWaXNpYmxpdHkoKSksdGhpcy5scD10LmN1cnJlbnQuZX1vbkVuZEFuaW1hdGlvbigpe3RoaXMuaW5UcmFuc2l0aW9uLnNpemV8fHRoaXMuZW1pdChcInNldHRsZVwiKX1yZUluaXQodD1udWxsLGU9bnVsbCl7dGhpcy5kZXN0cm95KCksdGhpcy5zdGF0ZT1MLkluaXQsdGhpcy51c2VyT3B0aW9ucz10fHx0aGlzLnVzZXJPcHRpb25zLHRoaXMudXNlclBsdWdpbnM9ZXx8dGhpcy51c2VyUGx1Z2lucyx0aGlzLnByb2Nlc3NPcHRpb25zKCl9c2xpZGVUbyh0PTAse2ZyaWN0aW9uOmU9dGhpcy5vcHRpb24oXCJmcmljdGlvblwiKSx0cmFuc2l0aW9uOmk9dGhpcy5vcHRpb24oXCJ0cmFuc2l0aW9uXCIpfT17fSl7aWYodGhpcy5zdGF0ZT09PUwuRGVzdHJveSlyZXR1cm47Y29uc3R7YXhpczpuLGlzSG9yaXpvbnRhbDpzLGlzUlRMOm8scGFnZXM6YSxwYW56b29tOnJ9PXRoaXMsbD1hLmxlbmd0aCxjPW8mJnM/MTotMTtpZighcnx8IWwpcmV0dXJuO2lmKHRoaXMudHJhbnNpdGlvblRvKHQsaSkpcmV0dXJuO2NvbnN0IGg9dGhpcy5nZXRQYWdlRnJvbUluZGV4KHQpO2xldCBkPWFbaF0ucG9zO2lmKHRoaXMuaXNJbmZpbml0ZSl7Y29uc3QgZT10aGlzLmNvbnRlbnREaW0saT1yLnRhcmdldFtuXSpjO2lmKDI9PT1sKWQrPWUqTWF0aC5mbG9vcihwYXJzZUZsb2F0KHQrXCJcIikvMik7ZWxzZXtjb25zdCB0PWk7ZD1bZCxkLWUsZCtlXS5yZWR1Y2UoKGZ1bmN0aW9uKGUsaSl7cmV0dXJuIE1hdGguYWJzKGktdCk8TWF0aC5hYnMoZS10KT9pOmV9KSl9fWQqPWMsTWF0aC5hYnMoci50YXJnZXRbbl0tZCk8LjF8fChyLnBhblRvKHt4OnM/ZDowLHk6cz8wOmQsZnJpY3Rpb246ZX0pLHRoaXMub25DaGFuZ2UoaCkpfXNsaWRlVG9DbG9zZXN0KHQpe2lmKHRoaXMucGFuem9vbSl7Y29uc3R7cGFnZUluZGV4OmV9PXRoaXMuZ2V0UGFnZUZyb21Qb3NpdGlvbih0aGlzLnBhbnpvb20uY3VycmVudFt0aGlzLmlzSG9yaXpvbnRhbD9cImVcIjpcImZcIl0pO3RoaXMuc2xpZGVUbyhlLHQpfX1zbGlkZU5leHQoKXt0aGlzLnNsaWRlVG8odGhpcy5wYWdlKzEpfXNsaWRlUHJldigpe3RoaXMuc2xpZGVUbyh0aGlzLnBhZ2UtMSl9Y2xlYXJUcmFuc2l0aW9ucygpe3RoaXMuaW5UcmFuc2l0aW9uLmNsZWFyKCksRSh0aGlzLmNvbnRhaW5lcix0aGlzLmNuKFwiaW5UcmFuc2l0aW9uXCIpKTtjb25zdCB0PVtcInRvLXByZXZcIixcInRvLW5leHRcIixcImZyb20tcHJldlwiLFwiZnJvbS1uZXh0XCJdO2Zvcihjb25zdCBlIG9mIHRoaXMuc2xpZGVzKXtjb25zdCBpPWUuZWw7aWYoaSl7aS5yZW1vdmVFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsdGhpcy5vbkFuaW1hdGlvbkVuZCksaS5jbGFzc0xpc3QucmVtb3ZlKC4uLnQpO2NvbnN0IG49ZS50cmFuc2l0aW9uO24mJmkuY2xhc3NMaXN0LnJlbW92ZShgZi0ke259T3V0YCxgZi0ke259SW5gKX19dGhpcy5tYW5hZ2VTbGlkZVZpc2libGl0eSgpfXByZXBlbmRTbGlkZSh0KXt2YXIgZSxpO2xldCBuPUFycmF5LmlzQXJyYXkodCk/dDpbdF07Zm9yKGNvbnN0IHQgb2Ygbi5yZXZlcnNlKCkpdGhpcy5zbGlkZXMudW5zaGlmdChSKHQpKTtmb3IobGV0IHQ9MDt0PHRoaXMuc2xpZGVzLmxlbmd0aDt0KyspdGhpcy5zbGlkZXNbdF0uaW5kZXg9dDtjb25zdCBzPShudWxsPT09KGU9dGhpcy5wYWdlc1t0aGlzLnBhZ2VdKXx8dm9pZCAwPT09ZT92b2lkIDA6ZS5wb3MpfHwwO3RoaXMucGFnZSs9bi5sZW5ndGgsdGhpcy51cGRhdGVNZXRyaWNzKCk7Y29uc3Qgbz0obnVsbD09PShpPXRoaXMucGFnZXNbdGhpcy5wYWdlXSl8fHZvaWQgMD09PWk/dm9pZCAwOmkucG9zKXx8MDtpZih0aGlzLnBhbnpvb20pe2NvbnN0IHQ9dGhpcy5pc1JUTD9zLW86by1zO3RoaXMucGFuem9vbS50YXJnZXQuZS09dCx0aGlzLnBhbnpvb20uY3VycmVudC5lLT10LHRoaXMucGFuem9vbS5yZXF1ZXN0VGljaygpfX1hcHBlbmRTbGlkZSh0KXtsZXQgZT1BcnJheS5pc0FycmF5KHQpP3Q6W3RdO2Zvcihjb25zdCB0IG9mIGUpe2NvbnN0IGU9Uih0KTtlLmluZGV4PXRoaXMuc2xpZGVzLmxlbmd0aCx0aGlzLnNsaWRlcy5wdXNoKGUpLHRoaXMuZW1pdChcImluaXRTbGlkZVwiLHQsdGhpcy5zbGlkZXMubGVuZ3RoKX10aGlzLnVwZGF0ZU1ldHJpY3MoKX1yZW1vdmVTbGlkZSh0KXtjb25zdCBlPXRoaXMuc2xpZGVzLmxlbmd0aDt0PSh0JWUrZSklZSx0aGlzLnJlbW92ZVNsaWRlRWwodGhpcy5zbGlkZXNbdF0sITApLHRoaXMuc2xpZGVzLnNwbGljZSh0LDEpO2ZvcihsZXQgdD0wO3Q8dGhpcy5zbGlkZXMubGVuZ3RoO3QrKyl0aGlzLnNsaWRlc1t0XS5pbmRleD10O3RoaXMudXBkYXRlTWV0cmljcygpLHRoaXMuc2xpZGVUbyh0aGlzLnBhZ2Use2ZyaWN0aW9uOjAsdHJhbnNpdGlvbjohMX0pfXVwZGF0ZU1ldHJpY3MoKXtjb25zdHtwYW56b29tOmUsdmlld3BvcnQ6aSx0cmFjazpuLGlzSG9yaXpvbnRhbDpzfT10aGlzO2lmKCFuKXJldHVybjtjb25zdCBvPXM/XCJ3aWR0aFwiOlwiaGVpZ2h0XCI7aWYoaSl7bGV0IGU9dChpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpW29dLDFlMyksbj1nZXRDb21wdXRlZFN0eWxlKGkpLGE9XCJwYWRkaW5nXCIscj1zP1wiUmlnaHRcIjpcIkJvdHRvbVwiO2UtPXBhcnNlRmxvYXQoblthKyhzP1wiTGVmdFwiOlwiVG9wXCIpXSkrcGFyc2VGbG9hdChuW2Ercl0pLHRoaXMudmlld3BvcnREaW09ZX1sZXQgYSxyPXRoaXMucGFnZXMubGVuZ3RoLGw9MDtmb3IoY29uc3RbZSxpXW9mIHRoaXMuc2xpZGVzLmVudHJpZXMoKSl7bGV0IG49MCxzPTA7IWkuZWwmJmE/KG49YS5kaW0scz1hLmdhcCk6KCh7ZGltOm4sZ2FwOnN9PXRoaXMuZ2V0U2xpZGVNZXRyaWNzKGkpKSxhPWkpLG49dChuLDFlMykscz10KHMsMWUzKSxpLmRpbT1uLGkuZ2FwPXMsaS5wb3M9bCxsKz1uLCh0aGlzLmlzSW5maW5pdGV8fGU8dGhpcy5zbGlkZXMubGVuZ3RoLTEpJiYobCs9cyl9Y29uc3QgYz10aGlzLmNvbnRlbnREaW07bD10KGwsMWUzKSx0aGlzLmNvbnRlbnREaW09bCxlJiYoZS5jb250ZW50UmVjdFtvXT1sLGUuY29udGVudFJlY3RbXCJlXCI9PT10aGlzLmF4aXM/XCJmdWxsV2lkdGhcIjpcImZ1bGxIZWlnaHRcIl09bCksdGhpcy5wYWdlcz10aGlzLmNyZWF0ZVBhZ2VzKCksdGhpcy5wYWdlcz10aGlzLnByb2Nlc3NQYWdlcygpLHRoaXMuc3RhdGU9PT1MLkluaXQmJnRoaXMuc2V0SW5pdGlhbFBhZ2UoKSx0aGlzLnBhZ2U9TWF0aC5tYXgoMCxNYXRoLm1pbih0aGlzLnBhZ2UsdGhpcy5wYWdlcy5sZW5ndGgtMSkpLGUmJnI9PT10aGlzLnBhZ2VzLmxlbmd0aCYmTWF0aC5hYnMobC1jKT4uNSYmKGUudGFyZ2V0W3RoaXMuYXhpc109LTEqdGhpcy5wYWdlc1t0aGlzLnBhZ2VdLnBvcyxlLmN1cnJlbnRbdGhpcy5heGlzXT0tMSp0aGlzLnBhZ2VzW3RoaXMucGFnZV0ucG9zLGUuc3RvcCgpKSx0aGlzLm1hbmFnZVNsaWRlVmlzaWJsaXR5KCksdGhpcy5lbWl0KFwicmVmcmVzaFwiKX1nZXRQcm9ncmVzcyhlLGk9ITEpe3ZvaWQgMD09PWUmJihlPXRoaXMucGFnZSk7Y29uc3Qgbj10aGlzLHM9bi5wYW56b29tLG89bi5wYWdlc1tlXXx8MDtpZighb3x8IXMpcmV0dXJuIDA7bGV0IGE9LTEqcy5jdXJyZW50LmUscj1uLmNvbnRlbnREaW07dmFyIGw9W3QoKGEtby5wb3MpLygxKm8uZGltKSwxZTMpLHQoKGErci1vLnBvcykvKDEqby5kaW0pLDFlMyksdCgoYS1yLW8ucG9zKS8oMSpvLmRpbSksMWUzKV0ucmVkdWNlKChmdW5jdGlvbih0LGUpe3JldHVybiBNYXRoLmFicyhlKTxNYXRoLmFicyh0KT9lOnR9KSk7cmV0dXJuIGk/bDpNYXRoLm1heCgtMSxNYXRoLm1pbigxLGwpKX1zZXRWaWV3cG9ydEhlaWdodCgpe2NvbnN0e3BhZ2U6dCxwYWdlczplLHZpZXdwb3J0OmksaXNIb3Jpem9udGFsOm59PXRoaXM7aWYoIWl8fCFlW3RdKXJldHVybjtsZXQgcz0wO24mJnRoaXMudHJhY2smJih0aGlzLnRyYWNrLnN0eWxlLmhlaWdodD1cImF1dG9cIixlW3RdLnNsaWRlcy5mb3JFYWNoKCh0PT57dC5lbCYmKHM9TWF0aC5tYXgocyx0LmVsLm9mZnNldEhlaWdodCkpfSkpKSxpLnN0eWxlLmhlaWdodD1zP2Ake3N9cHhgOlwiXCJ9Z2V0UGFnZUZvclNsaWRlKHQpe2Zvcihjb25zdCBlIG9mIHRoaXMucGFnZXMpZm9yKGNvbnN0IGkgb2YgZS5zbGlkZXMpaWYoaS5pbmRleD09PXQpcmV0dXJuIGUuaW5kZXg7cmV0dXJuLTF9Z2V0VmlzaWJsZVNsaWRlcyh0PTApe3ZhciBlO2NvbnN0IGk9bmV3IFNldDtsZXR7Y29udGVudERpbTpuLHZpZXdwb3J0RGltOnMscGFnZXM6byxwYWdlOmF9PXRoaXM7bj1uKyhudWxsPT09KGU9dGhpcy5zbGlkZXNbdGhpcy5zbGlkZXMubGVuZ3RoLTFdKXx8dm9pZCAwPT09ZT92b2lkIDA6ZS5nYXApfHwwO2xldCByPTA7cj10aGlzLnBhbnpvb20/LTEqdGhpcy5wYW56b29tLmN1cnJlbnRbdGhpcy5heGlzXTpvW2FdJiZvW2FdLnBvc3x8MCx0aGlzLmlzSW5maW5pdGUmJihyLT1NYXRoLmZsb29yKHIvbikqbiksdGhpcy5pc1JUTCYmdGhpcy5pc0hvcml6b250YWwmJihyKj0tMSk7Y29uc3QgbD1yLXMqdCxjPXIrcyoodCsxKSxoPXRoaXMuaXNJbmZpbml0ZT9bLTEsMCwxXTpbMF07Zm9yKGNvbnN0IHQgb2YgdGhpcy5zbGlkZXMpZm9yKGNvbnN0IGUgb2YgaCl7Y29uc3Qgcz10LnBvcytlKm4sbz10LnBvcyt0LmRpbSt0LmdhcCtlKm47czxjJiZvPmwmJmkuYWRkKHQpfXJldHVybiBpfWdldFBhZ2VGcm9tUG9zaXRpb24odCl7Y29uc3R7dmlld3BvcnREaW06ZSxjb250ZW50RGltOml9PXRoaXMsbj10aGlzLnBhZ2VzLmxlbmd0aCxzPXRoaXMuc2xpZGVzLmxlbmd0aCxvPXRoaXMuc2xpZGVzW3MtMV07bGV0IGE9MCxyPTAsbD0wO2NvbnN0IGM9dGhpcy5vcHRpb24oXCJjZW50ZXJcIik7YyYmKHQrPS41KmUpLHRoaXMuaXNJbmZpbml0ZXx8KHQ9TWF0aC5tYXgodGhpcy5zbGlkZXNbMF0ucG9zLE1hdGgubWluKHQsby5wb3MpKSk7Y29uc3QgaD1pK28uZ2FwO2w9TWF0aC5mbG9vcih0L2gpfHwwLHQtPWwqaDtsZXQgZD1vLHU9dGhpcy5zbGlkZXMuZmluZCgoZT0+e2NvbnN0IGk9dCsoZCYmIWM/LjUqZC5kaW06MCk7cmV0dXJuIGQ9ZSxlLnBvczw9aSYmZS5wb3MrZS5kaW0rZS5nYXA+aX0pKTtyZXR1cm4gdXx8KHU9bykscj10aGlzLmdldFBhZ2VGb3JTbGlkZSh1LmluZGV4KSxhPXIrbCpuLHtwYWdlOmEscGFnZUluZGV4OnJ9fWRlc3Ryb3koKXtpZihbTC5EZXN0cm95XS5pbmNsdWRlcyh0aGlzLnN0YXRlKSlyZXR1cm47dGhpcy5zdGF0ZT1MLkRlc3Ryb3k7Y29uc3R7Y29udGFpbmVyOnQsdmlld3BvcnQ6ZSx0cmFjazppLHNsaWRlczpuLHBhbnpvb206c309dGhpcyxvPXRoaXMub3B0aW9uKFwiY2xhc3Nlc1wiKTt0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHRoaXMub25DbGljayx7cGFzc2l2ZTohMSxjYXB0dXJlOiExfSksdC5yZW1vdmVFdmVudExpc3RlbmVyKFwic2xpZGVUb1wiLHRoaXMub25TbGlkZVRvKSx3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHRoaXMub25SZXNpemUpLHMmJihzLmRlc3Ryb3koKSx0aGlzLnBhbnpvb209bnVsbCksbiYmbi5mb3JFYWNoKCh0PT57dGhpcy5yZW1vdmVTbGlkZUVsKHQpfSkpLHRoaXMuZGV0YWNoUGx1Z2lucygpLGUmJmUub2Zmc2V0UGFyZW50JiZpJiZpLm9mZnNldFBhcmVudCYmZS5yZXBsYWNlV2l0aCguLi5pLmNoaWxkTm9kZXMpO2Zvcihjb25zdFtlLGldb2YgT2JqZWN0LmVudHJpZXMobykpXCJjb250YWluZXJcIiE9PWUmJmkmJnQuY2xhc3NMaXN0LnJlbW92ZShpKTt0aGlzLnRyYWNrPW51bGwsdGhpcy52aWV3cG9ydD1udWxsLHRoaXMucGFnZT0wLHRoaXMuc2xpZGVzPVtdO2NvbnN0IGE9dGhpcy5ldmVudHMuZ2V0KFwicmVhZHlcIik7dGhpcy5ldmVudHM9bmV3IE1hcCxhJiZ0aGlzLmV2ZW50cy5zZXQoXCJyZWFkeVwiLGEpfX1PYmplY3QuZGVmaW5lUHJvcGVydHkoXyxcIlBhbnpvb21cIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6VH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfLFwiZGVmYXVsdHNcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6en0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfLFwiUGx1Z2luc1wiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpCfSk7Y29uc3QgTj1mdW5jdGlvbih0KXtjb25zdCBlPXdpbmRvdy5wYWdlWU9mZnNldCxpPXdpbmRvdy5wYWdlWU9mZnNldCt3aW5kb3cuaW5uZXJIZWlnaHQ7aWYoIXgodCkpcmV0dXJuIDA7Y29uc3Qgbj10LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLHM9bi55K3dpbmRvdy5wYWdlWU9mZnNldCxvPW4ueStuLmhlaWdodCt3aW5kb3cucGFnZVlPZmZzZXQ7aWYoZT5vfHxpPHMpcmV0dXJuIDA7aWYoZTxzJiZpPm8pcmV0dXJuIDEwMDtpZihzPGUmJm8+aSlyZXR1cm4gMTAwO2xldCBhPW4uaGVpZ2h0O3M8ZSYmKGEtPXdpbmRvdy5wYWdlWU9mZnNldC1zKSxvPmkmJihhLT1vLWkpO2NvbnN0IHI9YS93aW5kb3cuaW5uZXJIZWlnaHQqMTAwO3JldHVybiBNYXRoLnJvdW5kKHIpfSxXPSEoXCJ1bmRlZmluZWRcIj09dHlwZW9mIHdpbmRvd3x8IXdpbmRvdy5kb2N1bWVudHx8IXdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KTtsZXQgJDtjb25zdCBYPVtcImFbaHJlZl1cIixcImFyZWFbaHJlZl1cIiwnaW5wdXQ6bm90KFtkaXNhYmxlZF0pOm5vdChbdHlwZT1cImhpZGRlblwiXSk6bm90KFthcmlhLWhpZGRlbl0pJyxcInNlbGVjdDpub3QoW2Rpc2FibGVkXSk6bm90KFthcmlhLWhpZGRlbl0pXCIsXCJ0ZXh0YXJlYTpub3QoW2Rpc2FibGVkXSk6bm90KFthcmlhLWhpZGRlbl0pXCIsXCJidXR0b246bm90KFtkaXNhYmxlZF0pOm5vdChbYXJpYS1oaWRkZW5dKTpub3QoLmZhbmN5Ym94LWZvY3VzLWd1YXJkKVwiLFwiaWZyYW1lXCIsXCJvYmplY3RcIixcImVtYmVkXCIsXCJ2aWRlb1wiLFwiYXVkaW9cIixcIltjb250ZW50ZWRpdGFibGVdXCIsJ1t0YWJpbmRleF06bm90KFt0YWJpbmRleF49XCItXCJdKTpub3QoW2Rpc2FibGVkXSk6bm90KFthcmlhLWhpZGRlbl0pJ10uam9pbihcIixcIiksWT10PT57aWYodCYmVyl7dm9pZCAwPT09JCYmZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKS5mb2N1cyh7Z2V0IHByZXZlbnRTY3JvbGwoKXtyZXR1cm4gJD0hMCwhMX19KTt0cnl7aWYoJCl0LmZvY3VzKHtwcmV2ZW50U2Nyb2xsOiEwfSk7ZWxzZXtjb25zdCBlPXdpbmRvdy5wYWdlWE9mZnNldHx8ZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AsaT13aW5kb3cucGFnZVlPZmZzZXR8fGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdDt0LmZvY3VzKCksZG9jdW1lbnQuYm9keS5zY3JvbGxUbyh7dG9wOmUsbGVmdDppLGJlaGF2aW9yOlwiYXV0b1wifSl9fWNhdGNoKHQpe319fSxxPXtkcmFnVG9DbG9zZTohMCxoaWRlU2Nyb2xsYmFyOiEwLENhcm91c2VsOntjbGFzc2VzOntjb250YWluZXI6XCJmYW5jeWJveF9fY2Fyb3VzZWxcIix2aWV3cG9ydDpcImZhbmN5Ym94X192aWV3cG9ydFwiLHRyYWNrOlwiZmFuY3lib3hfX3RyYWNrXCIsc2xpZGU6XCJmYW5jeWJveF9fc2xpZGVcIn19LGNvbnRlbnRDbGljazpcInRvZ2dsZVpvb21cIixjb250ZW50RGJsQ2xpY2s6ITEsYmFja2Ryb3BDbGljazpcImNsb3NlXCIsYW5pbWF0ZWQ6ITAsaWRsZTozNTAwLHNob3dDbGFzczpcImYtem9vbUluVXBcIixoaWRlQ2xhc3M6XCJmLWZhZGVPdXRcIixjb21tb25DYXB0aW9uOiExLHBhcmVudEVsOm51bGwsc3RhcnRJbmRleDowLGwxMG46T2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LHYpLHtDTE9TRTpcIkNsb3NlXCIsTkVYVDpcIk5leHRcIixQUkVWOlwiUHJldmlvdXNcIixNT0RBTDpcIllvdSBjYW4gY2xvc2UgdGhpcyBtb2RhbCBjb250ZW50IHdpdGggdGhlIEVTQyBrZXlcIixFUlJPUjpcIlNvbWV0aGluZyBXZW50IFdyb25nLCBQbGVhc2UgVHJ5IEFnYWluIExhdGVyXCIsSU1BR0VfRVJST1I6XCJJbWFnZSBOb3QgRm91bmRcIixFTEVNRU5UX05PVF9GT1VORDpcIkhUTUwgRWxlbWVudCBOb3QgRm91bmRcIixBSkFYX05PVF9GT1VORDpcIkVycm9yIExvYWRpbmcgQUpBWCA6IE5vdCBGb3VuZFwiLEFKQVhfRk9SQklEREVOOlwiRXJyb3IgTG9hZGluZyBBSkFYIDogRm9yYmlkZGVuXCIsSUZSQU1FX0VSUk9SOlwiRXJyb3IgTG9hZGluZyBQYWdlXCIsVE9HR0xFX1pPT006XCJUb2dnbGUgem9vbSBsZXZlbFwiLFRPR0dMRV9USFVNQlM6XCJUb2dnbGUgdGh1bWJuYWlsc1wiLFRPR0dMRV9TTElERVNIT1c6XCJUb2dnbGUgc2xpZGVzaG93XCIsVE9HR0xFX0ZVTExTQ1JFRU46XCJUb2dnbGUgZnVsbC1zY3JlZW4gbW9kZVwiLERPV05MT0FEOlwiRG93bmxvYWRcIn0pLHRwbDp7Y2xvc2VCdXR0b246JzxidXR0b24gZGF0YS1mYW5jeWJveC1jbG9zZSBjbGFzcz1cImYtYnV0dG9uIGlzLWNsb3NlLWJ0blwiIHRpdGxlPVwie3tDTE9TRX19XCI+PHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHRhYmluZGV4PVwiLTFcIj48cGF0aCBkPVwiTTIwIDIwTDQgNG0xNiAwTDQgMjBcIi8+PC9zdmc+PC9idXR0b24+JyxtYWluOic8ZGl2IGNsYXNzPVwiZmFuY3lib3hfX2NvbnRhaW5lclwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLW1vZGFsPVwidHJ1ZVwiIGFyaWEtbGFiZWw9XCJ7e01PREFMfX1cIiB0YWJpbmRleD1cIi0xXCI+XFxuICAgIDxkaXYgY2xhc3M9XCJmYW5jeWJveF9fYmFja2Ryb3BcIj48L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cImZhbmN5Ym94X19jYXJvdXNlbFwiPjwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVwiZmFuY3lib3hfX2Zvb3RlclwiPjwvZGl2PlxcbiAgPC9kaXY+J30sZ3JvdXBBbGw6ITEsZ3JvdXBBdHRyOlwiZGF0YS1mYW5jeWJveFwiLGRlZmF1bHRUeXBlOlwiaW1hZ2VcIixkZWZhdWx0RGlzcGxheTpcImJsb2NrXCIsYXV0b0ZvY3VzOiEwLHRyYXBGb2N1czohMCxwbGFjZUZvY3VzQmFjazohMCxjbG9zZUJ1dHRvbjpcImF1dG9cIixrZXlib2FyZDp7RXNjYXBlOlwiY2xvc2VcIixEZWxldGU6XCJjbG9zZVwiLEJhY2tzcGFjZTpcImNsb3NlXCIsUGFnZVVwOlwibmV4dFwiLFBhZ2VEb3duOlwicHJldlwiLEFycm93VXA6XCJwcmV2XCIsQXJyb3dEb3duOlwibmV4dFwiLEFycm93UmlnaHQ6XCJuZXh0XCIsQXJyb3dMZWZ0OlwicHJldlwifSxGdWxsc2NyZWVuOnthdXRvU3RhcnQ6ITF9LGNvbXBhY3Q6KCk9PndpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogNTc4cHgpLCAobWF4LWhlaWdodDogNTc4cHgpXCIpLm1hdGNoZXMsd2hlZWw6XCJ6b29tXCJ9O3ZhciBaLFY7IWZ1bmN0aW9uKHQpe3RbdC5Jbml0PTBdPVwiSW5pdFwiLHRbdC5SZWFkeT0xXT1cIlJlYWR5XCIsdFt0LkNsb3Npbmc9Ml09XCJDbG9zaW5nXCIsdFt0LkN1c3RvbUNsb3Npbmc9M109XCJDdXN0b21DbG9zaW5nXCIsdFt0LkRlc3Ryb3k9NF09XCJEZXN0cm95XCJ9KFp8fChaPXt9KSksZnVuY3Rpb24odCl7dFt0LkxvYWRpbmc9MF09XCJMb2FkaW5nXCIsdFt0Lk9wZW5pbmc9MV09XCJPcGVuaW5nXCIsdFt0LlJlYWR5PTJdPVwiUmVhZHlcIix0W3QuQ2xvc2luZz0zXT1cIkNsb3NpbmdcIn0oVnx8KFY9e30pKTtjb25zdCBHPSgpPT57cXVldWVNaWNyb3Rhc2soKCgpPT57KCgpPT57Y29uc3R7c2x1Zzp0LGluZGV4OmV9PVUucGFyc2VVUkwoKSxpPXh0LmdldEluc3RhbmNlKCk7aWYoaSYmITEhPT1pLm9wdGlvbihcIkhhc2hcIikpe2NvbnN0IG49aS5jYXJvdXNlbDtpZih0JiZuKXtmb3IobGV0IGUgb2Ygbi5zbGlkZXMpaWYoZS5zbHVnJiZlLnNsdWc9PT10KXJldHVybiBuLnNsaWRlVG8oZS5pbmRleCk7aWYodD09PWkub3B0aW9uKFwic2x1Z1wiKSlyZXR1cm4gbi5zbGlkZVRvKGUtMSk7Y29uc3Qgcz1pLmdldFNsaWRlKCksbz1zJiZzLnRyaWdnZXJFbCYmcy50cmlnZ2VyRWwuZGF0YXNldDtpZihvJiZvLmZhbmN5Ym94PT09dClyZXR1cm4gbi5zbGlkZVRvKGUtMSl9VS5oYXNTaWxlbnRDbG9zZT0hMCxpLmNsb3NlKCl9VS5zdGFydEZyb21VcmwoKX0pKCl9KSl9O2NsYXNzIFUgZXh0ZW5kcyBJe2NvbnN0cnVjdG9yKCl7c3VwZXIoLi4uYXJndW1lbnRzKSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcIm9yaWdIYXNoXCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOlwiXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInRpbWVyXCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOm51bGx9KX1vbkNoYW5nZSgpe2NvbnN0IHQ9dGhpcy5pbnN0YW5jZSxlPXQuY2Fyb3VzZWw7dGhpcy50aW1lciYmY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO2NvbnN0IGk9dC5nZXRTbGlkZSgpO2lmKCFlfHwhaSlyZXR1cm47Y29uc3Qgbj10LmlzT3BlbmluZ1NsaWRlKGkpLHM9bmV3IFVSTChkb2N1bWVudC5VUkwpLmhhc2g7bGV0IG8sYT1pLnNsdWd8fHZvaWQgMDtvPWF8fHRoaXMuaW5zdGFuY2Uub3B0aW9uKFwic2x1Z1wiKSwhbyYmaS50cmlnZ2VyRWwmJmkudHJpZ2dlckVsLmRhdGFzZXQmJihvPWkudHJpZ2dlckVsLmRhdGFzZXQuZmFuY3lib3gpO2xldCByPVwiXCI7byYmXCJ0cnVlXCIhPT1vJiYocj1cIiNcIitvKyghYSYmZS5zbGlkZXMubGVuZ3RoPjE/XCItXCIrKGkuaW5kZXgrMSk6XCJcIikpLG4mJih0aGlzLm9yaWdIYXNoPXMhPT1yP3M6XCJcIiksciYmcyE9PXImJih0aGlzLnRpbWVyPXNldFRpbWVvdXQoKCgpPT57dHJ5e3dpbmRvdy5oaXN0b3J5W24/XCJwdXNoU3RhdGVcIjpcInJlcGxhY2VTdGF0ZVwiXSh7fSxkb2N1bWVudC50aXRsZSx3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUrd2luZG93LmxvY2F0aW9uLnNlYXJjaCtyKX1jYXRjaCh0KXt9fSksMzAwKSl9b25DbG9zZSgpe2lmKHRoaXMudGltZXImJmNsZWFyVGltZW91dCh0aGlzLnRpbWVyKSwhMCE9PVUuaGFzU2lsZW50Q2xvc2UpdHJ5e3dpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh7fSxkb2N1bWVudC50aXRsZSx3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUrd2luZG93LmxvY2F0aW9uLnNlYXJjaCsodGhpcy5vcmlnSGFzaHx8XCJcIikpfWNhdGNoKHQpe319YXR0YWNoKCl7dGhpcy5pbnN0YW5jZS5vbihcIkNhcm91c2VsLnJlYWR5XCIsdGhpcy5vbkNoYW5nZSksdGhpcy5pbnN0YW5jZS5vbihcIkNhcm91c2VsLmNoYW5nZVwiLHRoaXMub25DaGFuZ2UpLHRoaXMuaW5zdGFuY2Uub24oXCJjbG9zZVwiLHRoaXMub25DbG9zZSl9ZGV0YWNoKCl7dGhpcy5pbnN0YW5jZS5vZmYoXCJDYXJvdXNlbC5yZWFkeVwiLHRoaXMub25DaGFuZ2UpLHRoaXMuaW5zdGFuY2Uub2ZmKFwiQ2Fyb3VzZWwuY2hhbmdlXCIsdGhpcy5vbkNoYW5nZSksdGhpcy5pbnN0YW5jZS5vZmYoXCJjbG9zZVwiLHRoaXMub25DbG9zZSl9c3RhdGljIHBhcnNlVVJMKCl7Y29uc3QgdD13aW5kb3cubG9jYXRpb24uaGFzaC5zbGljZSgxKSxlPXQuc3BsaXQoXCItXCIpLGk9ZVtlLmxlbmd0aC0xXSxuPWkmJi9eXFwrP1xcZCskLy50ZXN0KGkpJiZwYXJzZUludChlLnBvcCgpfHxcIjFcIiwxMCl8fDE7cmV0dXJue2hhc2g6dCxzbHVnOmUuam9pbihcIi1cIiksaW5kZXg6bn19c3RhdGljIHN0YXJ0RnJvbVVybCgpe2lmKFUuaGFzU2lsZW50Q2xvc2U9ITEseHQuZ2V0SW5zdGFuY2UoKXx8ITE9PT14dC5kZWZhdWx0cy5IYXNoKXJldHVybjtjb25zdHtoYXNoOnQsc2x1ZzplLGluZGV4Oml9PVUucGFyc2VVUkwoKTtpZighZSlyZXR1cm47bGV0IG49ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtc2x1Zz1cIiR7dH1cIl1gKTtpZihuJiZuLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2xpY2tcIix7YnViYmxlczohMCxjYW5jZWxhYmxlOiEwfSkpLHh0LmdldEluc3RhbmNlKCkpcmV0dXJuO2NvbnN0IHM9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtZmFuY3lib3g9XCIke2V9XCJdYCk7cy5sZW5ndGgmJihuPXNbaS0xXSxuJiZuLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2xpY2tcIix7YnViYmxlczohMCxjYW5jZWxhYmxlOiEwfSkpKX1zdGF0aWMgZGVzdHJveSgpe3dpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiaGFzaGNoYW5nZVwiLEcsITEpfX1mdW5jdGlvbiBLKCl7d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsRywhMSksc2V0VGltZW91dCgoKCk9PntVLnN0YXJ0RnJvbVVybCgpfSksNTAwKX1PYmplY3QuZGVmaW5lUHJvcGVydHkoVSxcImRlZmF1bHRzXCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOnt9fSksT2JqZWN0LmRlZmluZVByb3BlcnR5KFUsXCJoYXNTaWxlbnRDbG9zZVwiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTohMX0pLFcmJigvY29tcGxldGV8aW50ZXJhY3RpdmV8bG9hZGVkLy50ZXN0KGRvY3VtZW50LnJlYWR5U3RhdGUpP0soKTpkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLEspKTtjbGFzcyBKIGV4dGVuZHMgSXtvbkNyZWF0ZVNsaWRlKHQsZSxpKXtjb25zdCBuPXRoaXMuaW5zdGFuY2Uscz1uLm9wdGlvbkZvcihpLFwic3JjXCIpfHxcIlwiLHtlbDpvLHR5cGU6YX09aTtvJiZcImltYWdlXCI9PT1hJiZcInN0cmluZ1wiPT10eXBlb2YgcyYmdGhpcy5zZXRDb250ZW50KGkscykudGhlbigodD0+e2NvbnN0IGU9aS5jb250ZW50RWwscz1pLmltYWdlRWwsYT1pLnRodW1iRWxTcmM7aWYobi5pc0Nsb3NpbmcoKXx8IWV8fCFzKXJldHVybjtlLm9mZnNldEhlaWdodDtjb25zdCByPSEhbi5pc09wZW5pbmdTbGlkZShpKSYmdGhpcy5nZXRab29tSW5mbyhpKTtpZih0aGlzLm9wdGlvbihcInByb3RlY3RlZFwiKSl7by5hZGRFdmVudExpc3RlbmVyKFwiY29udGV4dG1lbnVcIiwodD0+e3QucHJldmVudERlZmF1bHQoKX0pKTtjb25zdCB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7Uyh0LFwiZmFuY3lib3gtcHJvdGVjdGVkXCIpLGUuYXBwZW5kQ2hpbGQodCl9aWYoYSYmcil7Y29uc3Qgcz10LmNvbnRlbnRSZWN0LG89TWF0aC5tYXgocy5mdWxsV2lkdGgscy5mdWxsSGVpZ2h0KTtsZXQgYz1udWxsOyFyLm9wYWNpdHkmJm8+MTIwMCYmKGM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKSxTKGMsXCJmYW5jeWJveC1naG9zdFwiKSxjLnNyYz1hLGUuYXBwZW5kQ2hpbGQoYykpO2NvbnN0IGg9KCk9PntjJiYoUyhjLFwiZi1mYWRlRmFzdE91dFwiKSxzZXRUaW1lb3V0KCgoKT0+e2MmJihjLnJlbW92ZSgpLGM9bnVsbCl9KSwyMDApKX07KGw9YSxuZXcgUHJvbWlzZSgoKHQsZSk9Pntjb25zdCBpPW5ldyBJbWFnZTtpLm9ubG9hZD10LGkub25lcnJvcj1lLGkuc3JjPWx9KSkpLnRoZW4oKCgpPT57aS5zdGF0ZT1WLk9wZW5pbmcsdGhpcy5pbnN0YW5jZS5lbWl0KFwicmV2ZWFsXCIsaSksdGhpcy56b29tSW4oaSkudGhlbigoKCk9PntoKCksdGhpcy5pbnN0YW5jZS5kb25lKGkpfSksKCgpPT57bi5oaWRlTG9hZGluZyhpKX0pKSxjJiZzZXRUaW1lb3V0KCgoKT0+e2goKX0pLG8+MjUwMD84MDA6MjAwKX0pLCgoKT0+e24uaGlkZUxvYWRpbmcoaSksbi5yZXZlYWxDb250ZW50KGkpfSkpfWVsc2V7Y29uc3QgZT10aGlzLm9wdGlvbkZvcihpLFwiaW5pdGlhbFNpemVcIikscz10aGlzLm9wdGlvbkZvcihpLFwiem9vbVwiKSxvPXtldmVudDpuLnByZXZNb3VzZU1vdmVFdmVudHx8bi5vcHRpb25zLmV2ZW50LGZyaWN0aW9uOnM/LjEyOjB9O2xldCBhPW4ub3B0aW9uRm9yKGksXCJzaG93Q2xhc3NcIil8fHZvaWQgMCxyPSEwO24uaXNPcGVuaW5nU2xpZGUoaSkmJihcImZ1bGxcIj09PWU/dC56b29tVG9GdWxsKG8pOlwiY292ZXJcIj09PWU/dC56b29tVG9Db3ZlcihvKTpcIm1heFwiPT09ZT90Lnpvb21Ub01heChvKTpyPSExLHQuc3RvcChcImN1cnJlbnRcIikpLHImJmEmJihhPXQuaXNEcmFnZ2luZz9cImYtZmFkZUluXCI6XCJcIiksbi5yZXZlYWxDb250ZW50KGksYSl9dmFyIGx9KSwoKCk9PntuLnNldEVycm9yKGksXCJ7e0lNQUdFX0VSUk9SfX1cIil9KSl9b25SZW1vdmVTbGlkZSh0LGUsaSl7aS5wYW56b29tJiZpLnBhbnpvb20uZGVzdHJveSgpLGkucGFuem9vbT12b2lkIDAsaS5pbWFnZUVsPXZvaWQgMH1vbkNoYW5nZSh0LGUsaSxuKXtmb3IoY29uc3QgdCBvZiBlLnNsaWRlcyl7Y29uc3QgZT10LnBhbnpvb207ZSYmdC5pbmRleCE9PWkmJmUucmVzZXQoLjM1KX19b25DbG9zZSgpe2NvbnN0IHQ9dGhpcy5pbnN0YW5jZSxlPXQuY29udGFpbmVyLGk9dC5nZXRTbGlkZSgpO2lmKCFlfHwhZS5wYXJlbnRFbGVtZW50fHwhaSlyZXR1cm47Y29uc3R7ZWw6bixjb250ZW50RWw6cyxwYW56b29tOm99PWksYT1pLnRodW1iRWxTcmM7aWYoIW58fCFhfHwhc3x8IW98fG8uaXNDb250ZW50TG9hZGluZ3x8by5zdGF0ZT09PWcuSW5pdHx8by5zdGF0ZT09PWcuRGVzdHJveSlyZXR1cm47by51cGRhdGVNZXRyaWNzKCk7bGV0IHI9dGhpcy5nZXRab29tSW5mbyhpKTtpZighcilyZXR1cm47dGhpcy5pbnN0YW5jZS5zdGF0ZT1aLkN1c3RvbUNsb3NpbmcsZS5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtem9vbWluZy1pblwiKSxlLmNsYXNzTGlzdC5hZGQoXCJpcy16b29taW5nLW91dFwiKSxzLnN0eWxlLmJhY2tncm91bmRJbWFnZT1gdXJsKCcke2F9JylgO2NvbnN0IGw9ZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtPYmplY3QuYXNzaWduKGUuc3R5bGUse3Bvc2l0aW9uOlwiYWJzb2x1dGVcIix0b3A6YCR7d2luZG93LnBhZ2VZT2Zmc2V0fXB4YCxsZWZ0OmAke3dpbmRvdy5wYWdlWE9mZnNldH1weGAsYm90dG9tOlwiYXV0b1wiLHJpZ2h0OlwiYXV0b1wiLHdpZHRoOmAke2wud2lkdGh9cHhgLGhlaWdodDpgJHtsLmhlaWdodH1weGAsb3ZlcmZsb3c6XCJoaWRkZW5cIn0pO2NvbnN0e3g6Yyx5Omgsc2NhbGU6ZCxvcGFjaXR5OnV9PXI7aWYodSl7Y29uc3QgdD0oKHQsZSxpLG4pPT57Y29uc3Qgcz1lLXQsbz1uLWk7cmV0dXJuIGU9PmkrKChlLXQpL3Mqb3x8MCl9KShvLnNjYWxlLGQsMSwwKTtvLm9uKFwiYWZ0ZXJUcmFuc2Zvcm1cIiwoKCk9PntzLnN0eWxlLm9wYWNpdHk9dChvLnNjYWxlKStcIlwifSkpfW8ub24oXCJlbmRBbmltYXRpb25cIiwoKCk9Pnt0LmRlc3Ryb3koKX0pKSxvLnRhcmdldC5hPWQsby50YXJnZXQuYj0wLG8udGFyZ2V0LmM9MCxvLnRhcmdldC5kPWQsby5wYW5Ubyh7eDpjLHk6aCxzY2FsZTpkLGZyaWN0aW9uOnU/LjI6LjMzLGlnbm9yZUJvdW5kczohMH0pLG8uaXNSZXN0aW5nJiZ0LmRlc3Ryb3koKX1zZXRDb250ZW50KHQsZSl7cmV0dXJuIG5ldyBQcm9taXNlKCgoaSxzKT0+e3ZhciBvLGE7Y29uc3Qgcj10aGlzLmluc3RhbmNlLGw9dC5lbDtpZighbClyZXR1cm4gdm9pZCBzKCk7ci5zaG93TG9hZGluZyh0KTtsZXQgYz10aGlzLm9wdGlvbkZvcih0LFwiY29udGVudFwiKTtcInN0cmluZ1wiPT10eXBlb2YgYyYmKGM9bihjKSksYyYmeChjKXx8KGM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKSxjIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCYmKGMuc3JjPWV8fFwiXCIsYy5hbHQ9KG51bGw9PT0obz10LmNhcHRpb24pfHx2b2lkIDA9PT1vP3ZvaWQgMDpvLnJlcGxhY2UoLzxbXj5dKz4vZ2ksXCJcIikuc3Vic3RyaW5nKDAsMWUzKSl8fGBJbWFnZSAke3QuaW5kZXgrMX0gb2YgJHtudWxsPT09KGE9ci5jYXJvdXNlbCl8fHZvaWQgMD09PWE/dm9pZCAwOmEucGFnZXMubGVuZ3RofWAsYy5kcmFnZ2FibGU9ITEsdC5zcmNzZXQmJmMuc2V0QXR0cmlidXRlKFwic3Jjc2V0XCIsdC5zcmNzZXQpKSx0LnNpemVzJiZjLnNldEF0dHJpYnV0ZShcInNpemVzXCIsdC5zaXplcykpLGMuY2xhc3NMaXN0LmFkZChcImZhbmN5Ym94LWltYWdlXCIpLHQuaW1hZ2VFbD1jLHIuc2V0Q29udGVudCh0LGMsITEpO3QucGFuem9vbT1uZXcgVChsLHUoe30sdGhpcy5vcHRpb24oXCJQYW56b29tXCIpfHx7fSx7Y29udGVudDpjLHdpZHRoOnIub3B0aW9uRm9yKHQsXCJ3aWR0aFwiLFwiYXV0b1wiKSxoZWlnaHQ6ci5vcHRpb25Gb3IodCxcImhlaWdodFwiLFwiYXV0b1wiKSx3aGVlbDooKT0+e2NvbnN0IHQ9ci5vcHRpb24oXCJ3aGVlbFwiKTtyZXR1cm4oXCJ6b29tXCI9PT10fHxcInBhblwiPT10KSYmdH0sY2xpY2s6KGUsaSk9Pnt2YXIgbixzO2lmKHIuaXNDb21wYWN0fHxyLmlzQ2xvc2luZygpKXJldHVybiExO2lmKHQuaW5kZXghPT0obnVsbD09PShuPXIuZ2V0U2xpZGUoKSl8fHZvaWQgMD09PW4/dm9pZCAwOm4uaW5kZXgpKXJldHVybiExO2xldCBvPSFpfHxpLnRhcmdldCYmKG51bGw9PT0ocz10LmNvbnRlbnRFbCl8fHZvaWQgMD09PXM/dm9pZCAwOnMuY29udGFpbnMoaS50YXJnZXQpKTtyZXR1cm4gci5vcHRpb24obz9cImNvbnRlbnRDbGlja1wiOlwiYmFja2Ryb3BDbGlja1wiKXx8ITF9LGRibENsaWNrOigpPT5yLmlzQ29tcGFjdD9cInRvZ2dsZVpvb21cIjpyLm9wdGlvbihcImNvbnRlbnREYmxDbGlja1wiKXx8ITEsc3Bpbm5lcjohMSxwYW5Pbmx5Wm9vbWVkOiEwLHdoZWVsTGltaXQ6MS8wLHRyYW5zZm9ybVBhcmVudDohMCxvbjp7cmVhZHk6dD0+e2kodCl9LGVycm9yOigpPT57cygpfSxkZXN0cm95OigpPT57cygpfX19KSl9KSl9em9vbUluKHQpe3JldHVybiBuZXcgUHJvbWlzZSgoKGUsaSk9Pntjb25zdCBuPXRoaXMuaW5zdGFuY2Uscz1uLmNvbnRhaW5lcix7cGFuem9vbTpvLGNvbnRlbnRFbDphLGVsOnJ9PXQ7byYmby51cGRhdGVNZXRyaWNzKCk7Y29uc3QgbD10aGlzLmdldFpvb21JbmZvKHQpO2lmKCEobCYmciYmYSYmbyYmcykpcmV0dXJuIHZvaWQgaSgpO2NvbnN0e3g6Yyx5Omgsc2NhbGU6ZCxvcGFjaXR5OnV9PWwscD0oKT0+e3Quc3RhdGUhPT1WLkNsb3NpbmcmJih1JiYoYS5zdHlsZS5vcGFjaXR5PU1hdGgubWF4KE1hdGgubWluKDEsMS0oMS1vLnNjYWxlKS8oMS1kKSksMCkrXCJcIiksby5zY2FsZT49MSYmby5zY2FsZT5vLnRhcmdldFNjYWxlLS4xJiZlKG8pKX0sZj10PT57dC5zY2FsZTwuOTl8fHQuc2NhbGU+MS4wMXx8KGEuc3R5bGUub3BhY2l0eT1cIlwiLEUocyxcImlzLXpvb21pbmctaW5cIiksdC5vZmYoXCJlbmRBbmltYXRpb25cIixmKSx0Lm9mZihcInRvdWNoU3RhcnRcIixmKSx0Lm9mZihcImFmdGVyVHJhbnNmb3JtXCIscCksZSh0KSl9O28ub24oXCJlbmRBbmltYXRpb25cIixmKSxvLm9uKFwidG91Y2hTdGFydFwiLGYpLG8ub24oXCJhZnRlclRyYW5zZm9ybVwiLHApLG8ub24oW1wiZXJyb3JcIixcImRlc3Ryb3lcIl0sKCgpPT57aSgpfSkpLG8ucGFuVG8oe3g6Yyx5Omgsc2NhbGU6ZCxmcmljdGlvbjowLGlnbm9yZUJvdW5kczohMH0pLG8uc3RvcChcImN1cnJlbnRcIik7Y29uc3QgbT17ZXZlbnQ6XCJtb3VzZW1vdmVcIj09PW8ucGFuTW9kZT9uLnByZXZNb3VzZU1vdmVFdmVudHx8bi5vcHRpb25zLmV2ZW50OnZvaWQgMH0sZz10aGlzLm9wdGlvbkZvcih0LFwiaW5pdGlhbFNpemVcIik7UyhzLFwiaXMtem9vbWluZy1pblwiKSxuLmhpZGVMb2FkaW5nKHQpLFwiZnVsbFwiPT09Zz9vLnpvb21Ub0Z1bGwobSk6XCJjb3ZlclwiPT09Zz9vLnpvb21Ub0NvdmVyKG0pOlwibWF4XCI9PT1nP28uem9vbVRvTWF4KG0pOm8ucmVzZXQoLjE3Mil9KSl9Z2V0Wm9vbUluZm8odCl7Y29uc3R7ZWw6ZSxpbWFnZUVsOmksdGh1bWJFbDpuLHBhbnpvb206c309dDtpZighZXx8IWl8fCFufHwhc3x8TihuKTwzfHwhdGhpcy5vcHRpb25Gb3IodCxcInpvb21cIil8fHRoaXMuaW5zdGFuY2Uuc3RhdGU9PT1aLkRlc3Ryb3kpcmV0dXJuITE7Y29uc3R7dG9wOm8sbGVmdDphLHdpZHRoOnIsaGVpZ2h0Omx9PW4uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7bGV0e3RvcDpjLGxlZnQ6aCxmaXRXaWR0aDpkLGZpdEhlaWdodDp1fT1zLmNvbnRlbnRSZWN0O2lmKCEociYmbCYmZCYmdSkpcmV0dXJuITE7Y29uc3QgcD1yL2QsZj1zLmNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtjKz1mLnRvcCxoKz1mLmxlZnQ7Y29uc3QgbT0tMSooaCsuNSpkLShhKy41KnIpKSxnPS0xKihjKy41KnUtKG8rLjUqbCkpO2xldCBiPXRoaXMub3B0aW9uKFwiem9vbU9wYWNpdHlcIil8fCExO3JldHVyblwiYXV0b1wiPT09YiYmKGI9TWF0aC5hYnMoci9sLWQvdSk+LjEpLHt4Om0seTpnLHNjYWxlOnAsb3BhY2l0eTpifX1hdHRhY2goKXt0aGlzLmluc3RhbmNlLm9uKFwiQ2Fyb3VzZWwuY2hhbmdlXCIsdGhpcy5vbkNoYW5nZSksdGhpcy5pbnN0YW5jZS5vbihcIkNhcm91c2VsLmNyZWF0ZVNsaWRlXCIsdGhpcy5vbkNyZWF0ZVNsaWRlKSx0aGlzLmluc3RhbmNlLm9uKFwiQ2Fyb3VzZWwucmVtb3ZlU2xpZGVcIix0aGlzLm9uUmVtb3ZlU2xpZGUpLHRoaXMuaW5zdGFuY2Uub24oXCJjbG9zZVwiLHRoaXMub25DbG9zZSl9ZGV0YWNoKCl7dGhpcy5pbnN0YW5jZS5vZmYoXCJDYXJvdXNlbC5jaGFuZ2VcIix0aGlzLm9uQ2hhbmdlKSx0aGlzLmluc3RhbmNlLm9mZihcIkNhcm91c2VsLmNyZWF0ZVNsaWRlXCIsdGhpcy5vbkNyZWF0ZVNsaWRlKSx0aGlzLmluc3RhbmNlLm9mZihcIkNhcm91c2VsLnJlbW92ZVNsaWRlXCIsdGhpcy5vblJlbW92ZVNsaWRlKSx0aGlzLmluc3RhbmNlLm9mZihcImNsb3NlXCIsdGhpcy5vbkNsb3NlKX19T2JqZWN0LmRlZmluZVByb3BlcnR5KEosXCJkZWZhdWx0c1wiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTp7aW5pdGlhbFNpemU6XCJmaXRcIixQYW56b29tOnttYXhTY2FsZToxfSxwcm90ZWN0ZWQ6ITEsem9vbTohMCx6b29tT3BhY2l0eTpcImF1dG9cIn19KTtjb25zdCBRPSh0LGU9e30pPT57Y29uc3QgaT1uZXcgVVJMKHQpLG49bmV3IFVSTFNlYXJjaFBhcmFtcyhpLnNlYXJjaCkscz1uZXcgVVJMU2VhcmNoUGFyYW1zO2Zvcihjb25zdFt0LGldb2ZbLi4ubiwuLi5PYmplY3QuZW50cmllcyhlKV0pe2xldCBlPWkudG9TdHJpbmcoKTtcInRcIj09PXQ/cy5zZXQoXCJzdGFydFwiLHBhcnNlSW50KGUpLnRvU3RyaW5nKCkpOnMuc2V0KHQsZSl9bGV0IG89cy50b1N0cmluZygpLGE9dC5tYXRjaCgvI3Q9KCguKik/XFxkK3MpLyk7cmV0dXJuIGEmJihvKz1gI3Q9JHthWzFdfWApLG99LHR0PXthamF4Om51bGwsYXV0b1NpemU6ITAscHJlbG9hZDohMCx2aWRlb0F1dG9wbGF5OiEwLHZpZGVvUmF0aW86MTYvOSx2aWRlb1RwbDonPHZpZGVvIGNsYXNzPVwiZmFuY3lib3hfX2h0bWw1dmlkZW9cIiBwbGF5c2lubGluZSBjb250cm9scyBjb250cm9sc0xpc3Q9XCJub2Rvd25sb2FkXCIgcG9zdGVyPVwie3twb3N0ZXJ9fVwiPlxcbiAgPHNvdXJjZSBzcmM9XCJ7e3NyY319XCIgdHlwZT1cInt7Zm9ybWF0fX1cIiAvPlNvcnJ5LCB5b3VyIGJyb3dzZXIgZG9lc25cXCd0IHN1cHBvcnQgZW1iZWRkZWQgdmlkZW9zLjwvdmlkZW8+Jyx2aWRlb0Zvcm1hdDpcIlwiLHZpbWVvOntieWxpbmU6MSxjb2xvcjpcIjAwYWRlZlwiLGNvbnRyb2xzOjEsZG50OjEsbXV0ZWQ6MH0seW91dHViZTp7Y29udHJvbHM6MSxlbmFibGVqc2FwaToxLG5vY29va2llOjEscmVsOjAsZnM6MX19LGV0PVtcImltYWdlXCIsXCJodG1sXCIsXCJhamF4XCIsXCJpbmxpbmVcIixcImNsb25lXCIsXCJpZnJhbWVcIixcIm1hcFwiLFwicGRmXCIsXCJodG1sNXZpZGVvXCIsXCJ5b3V0dWJlXCIsXCJ2aW1lb1wiLFwidmlkZW9cIl07Y2xhc3MgaXQgZXh0ZW5kcyBJe29uSW5pdFNsaWRlKHQsZSxpKXt0aGlzLnByb2Nlc3NUeXBlKGkpfW9uQ3JlYXRlU2xpZGUodCxlLGkpe3RoaXMuc2V0Q29udGVudChpKX1vblJlbW92ZVNsaWRlKHQsZSxpKXtpLmNsb3NlQnRuRWwmJihpLmNsb3NlQnRuRWwucmVtb3ZlKCksaS5jbG9zZUJ0bkVsPXZvaWQgMCksaS54aHImJihpLnhoci5hYm9ydCgpLGkueGhyPW51bGwpLGkuaWZyYW1lRWwmJihpLmlmcmFtZUVsLm9ubG9hZD1pLmlmcmFtZUVsLm9uZXJyb3I9bnVsbCxpLmlmcmFtZUVsLnNyYz1cIi8vYWJvdXQ6YmxhbmtcIixpLmlmcmFtZUVsPW51bGwpO2NvbnN0IG49aS5jb250ZW50RWwscz1pLnBsYWNlaG9sZGVyRWw7aWYoXCJpbmxpbmVcIj09PWkudHlwZSYmbiYmcyluLmNsYXNzTGlzdC5yZW1vdmUoXCJmYW5jeWJveF9fY29udGVudFwiKSxcIm5vbmVcIiE9PW4uc3R5bGUuZGlzcGxheSYmKG4uc3R5bGUuZGlzcGxheT1cIm5vbmVcIikscy5wYXJlbnROb2RlJiZzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG4scykscy5yZW1vdmUoKSxpLnBsYWNlaG9sZGVyRWw9bnVsbDtlbHNlIGZvcig7aS5lbCYmaS5lbC5maXJzdENoaWxkOylpLmVsLnJlbW92ZUNoaWxkKGkuZWwuZmlyc3RDaGlsZCl9b25TZWxlY3RTbGlkZSh0LGUsaSl7aS5zdGF0ZT09PVYuUmVhZHkmJnRoaXMucGxheVZpZGVvKCl9b25VbnNlbGVjdFNsaWRlKHQsZSxpKXt2YXIgbixzO2lmKFwiaHRtbDV2aWRlb1wiPT09aS50eXBlKXt0cnl7bnVsbD09PShzPW51bGw9PT0obj1pLmVsKXx8dm9pZCAwPT09bj92b2lkIDA6bi5xdWVyeVNlbGVjdG9yKFwidmlkZW9cIikpfHx2b2lkIDA9PT1zfHxzLnBhdXNlKCl9Y2F0Y2godCl7fXJldHVybn1sZXQgbztcInZpbWVvXCI9PT1pLnR5cGU/bz17bWV0aG9kOlwicGF1c2VcIix2YWx1ZTpcInRydWVcIn06XCJ5b3V0dWJlXCI9PT1pLnR5cGUmJihvPXtldmVudDpcImNvbW1hbmRcIixmdW5jOlwicGF1c2VWaWRlb1wifSksbyYmaS5pZnJhbWVFbCYmaS5pZnJhbWVFbC5jb250ZW50V2luZG93JiZpLmlmcmFtZUVsLmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2UoSlNPTi5zdHJpbmdpZnkobyksXCIqXCIpLGkucG9sbGVyJiZjbGVhclRpbWVvdXQoaS5wb2xsZXIpfW9uRG9uZSh0LGUpe3QuaXNDdXJyZW50U2xpZGUoZSkmJiF0LmlzQ2xvc2luZygpJiZ0aGlzLnBsYXlWaWRlbygpfW9uUmVmcmVzaCh0LGUpe2Uuc2xpZGVzLmZvckVhY2goKHQ9Pnt0LmVsJiYodGhpcy5zZXRBc3BlY3RSYXRpbyh0KSx0aGlzLnJlc2l6ZUlmcmFtZSh0KSl9KSl9b25NZXNzYWdlKHQpe3RyeXtsZXQgZT1KU09OLnBhcnNlKHQuZGF0YSk7aWYoXCJodHRwczovL3BsYXllci52aW1lby5jb21cIj09PXQub3JpZ2luKXtpZihcInJlYWR5XCI9PT1lLmV2ZW50KWZvcihsZXQgZSBvZiBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJmYW5jeWJveF9faWZyYW1lXCIpKSllIGluc3RhbmNlb2YgSFRNTElGcmFtZUVsZW1lbnQmJmUuY29udGVudFdpbmRvdz09PXQuc291cmNlJiYoZS5kYXRhc2V0LnJlYWR5PVwidHJ1ZVwiKX1lbHNlIGlmKHQub3JpZ2luLm1hdGNoKC9eaHR0cHM6XFwvXFwvKHd3dy4pP3lvdXR1YmUoLW5vY29va2llKT8uY29tJC8pJiZcIm9uUmVhZHlcIj09PWUuZXZlbnQpe2NvbnN0IHQ9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZS5pZCk7dCYmKHQuZGF0YXNldC5yZWFkeT1cInRydWVcIil9fWNhdGNoKHQpe319bG9hZEFqYXhDb250ZW50KHQpe2NvbnN0IGU9dGhpcy5pbnN0YW5jZS5vcHRpb25Gb3IodCxcInNyY1wiKXx8XCJcIjt0aGlzLmluc3RhbmNlLnNob3dMb2FkaW5nKHQpO2NvbnN0IGk9dGhpcy5pbnN0YW5jZSxuPW5ldyBYTUxIdHRwUmVxdWVzdDtpLnNob3dMb2FkaW5nKHQpLG4ub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7bi5yZWFkeVN0YXRlPT09WE1MSHR0cFJlcXVlc3QuRE9ORSYmaS5zdGF0ZT09PVouUmVhZHkmJihpLmhpZGVMb2FkaW5nKHQpLDIwMD09PW4uc3RhdHVzP2kuc2V0Q29udGVudCh0LG4ucmVzcG9uc2VUZXh0KTppLnNldEVycm9yKHQsNDA0PT09bi5zdGF0dXM/XCJ7e0FKQVhfTk9UX0ZPVU5EfX1cIjpcInt7QUpBWF9GT1JCSURERU59fVwiKSl9O2NvbnN0IHM9dC5hamF4fHxudWxsO24ub3BlbihzP1wiUE9TVFwiOlwiR0VUXCIsZStcIlwiKSxuLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIixcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKSxuLnNldFJlcXVlc3RIZWFkZXIoXCJYLVJlcXVlc3RlZC1XaXRoXCIsXCJYTUxIdHRwUmVxdWVzdFwiKSxuLnNlbmQocyksdC54aHI9bn1zZXRJbmxpbmVDb250ZW50KHQpe2xldCBlPW51bGw7aWYoeCh0LnNyYykpZT10LnNyYztlbHNlIGlmKFwic3RyaW5nXCI9PXR5cGVvZiB0LnNyYyl7Y29uc3QgaT10LnNyYy5zcGxpdChcIiNcIiwyKS5wb3AoKTtlPWk/ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaSk6bnVsbH1pZihlKXtpZihcImNsb25lXCI9PT10LnR5cGV8fGUuY2xvc2VzdChcIi5mYW5jeWJveF9fc2xpZGVcIikpe2U9ZS5jbG9uZU5vZGUoITApO2NvbnN0IGk9ZS5kYXRhc2V0LmFuaW1hdGlvbk5hbWU7aSYmKGUuY2xhc3NMaXN0LnJlbW92ZShpKSxkZWxldGUgZS5kYXRhc2V0LmFuaW1hdGlvbk5hbWUpO2xldCBuPWUuZ2V0QXR0cmlidXRlKFwiaWRcIik7bj1uP2Ake259LS1jbG9uZWA6YGNsb25lLSR7dGhpcy5pbnN0YW5jZS5pZH0tJHt0LmluZGV4fWAsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLG4pfWVsc2UgaWYoZS5wYXJlbnROb2RlKXtjb25zdCBpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7aS5jbGFzc0xpc3QuYWRkKFwiZmFuY3lib3gtcGxhY2Vob2xkZXJcIiksZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShpLGUpLHQucGxhY2Vob2xkZXJFbD1pfXRoaXMuaW5zdGFuY2Uuc2V0Q29udGVudCh0LGUpfWVsc2UgdGhpcy5pbnN0YW5jZS5zZXRFcnJvcih0LFwie3tFTEVNRU5UX05PVF9GT1VORH19XCIpfXNldElmcmFtZUNvbnRlbnQodCl7Y29uc3R7c3JjOmUsZWw6aX09dDtpZighZXx8XCJzdHJpbmdcIiE9dHlwZW9mIGV8fCFpKXJldHVybjtjb25zdCBuPXRoaXMuaW5zdGFuY2Uscz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO3MuY2xhc3NOYW1lPVwiZmFuY3lib3hfX2lmcmFtZVwiLHMuc2V0QXR0cmlidXRlKFwiaWRcIixgZmFuY3lib3hfX2lmcmFtZV8ke24uaWR9XyR7dC5pbmRleH1gKSxzLnNldEF0dHJpYnV0ZShcImFsbG93XCIsXCJhdXRvcGxheTsgZnVsbHNjcmVlblwiKSxzLnNldEF0dHJpYnV0ZShcInNjcm9sbGluZ1wiLFwiYXV0b1wiKSxzLm9uZXJyb3I9KCk9PntuLnNldEVycm9yKHQsXCJ7e0lGUkFNRV9FUlJPUn19XCIpfSx0LmlmcmFtZUVsPXM7Y29uc3Qgbz10aGlzLm9wdGlvbkZvcih0LFwicHJlbG9hZFwiKTtpZihpLmNsYXNzTGlzdC5hZGQoXCJpcy1sb2FkaW5nXCIpLFwiaWZyYW1lXCIhPT10LnR5cGV8fCExPT09bylyZXR1cm4gcy5zZXRBdHRyaWJ1dGUoXCJzcmNcIix0LnNyYytcIlwiKSx0aGlzLnJlc2l6ZUlmcmFtZSh0KSx2b2lkIG4uc2V0Q29udGVudCh0LHMpO24uc2hvd0xvYWRpbmcodCkscy5vbmxvYWQ9KCk9PntpZighcy5zcmMubGVuZ3RoKXJldHVybjtjb25zdCBlPVwidHJ1ZVwiIT09cy5kYXRhc2V0LnJlYWR5O3MuZGF0YXNldC5yZWFkeT1cInRydWVcIix0aGlzLnJlc2l6ZUlmcmFtZSh0KSxlP24ucmV2ZWFsQ29udGVudCh0KTpuLmhpZGVMb2FkaW5nKHQpfSxzLnNldEF0dHJpYnV0ZShcInNyY1wiLGUpLG4uc2V0Q29udGVudCh0LHMsITEpfXJlc2l6ZUlmcmFtZSh0KXtjb25zdCBlPXQuaWZyYW1lRWwsaT1udWxsPT1lP3ZvaWQgMDplLnBhcmVudEVsZW1lbnQ7aWYoIWV8fCFpKXJldHVybjtsZXQgbj10LmF1dG9TaXplLHM9dC53aWR0aHx8MCxvPXQuaGVpZ2h0fHwwO3MmJm8mJihuPSExKTtjb25zdCBhPWkmJmkuc3R5bGU7aWYoITEhPT10LnByZWxvYWQmJiExIT09biYmYSl0cnl7Y29uc3QgdD13aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShpKSxuPXBhcnNlRmxvYXQodC5wYWRkaW5nTGVmdCkrcGFyc2VGbG9hdCh0LnBhZGRpbmdSaWdodCkscj1wYXJzZUZsb2F0KHQucGFkZGluZ1RvcCkrcGFyc2VGbG9hdCh0LnBhZGRpbmdCb3R0b20pLGw9ZS5jb250ZW50V2luZG93O2lmKGwpe2NvbnN0IHQ9bC5kb2N1bWVudCxlPXQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJodG1sXCIpWzBdLGk9dC5ib2R5O2Eud2lkdGg9XCJcIixpLnN0eWxlLm92ZXJmbG93PVwiaGlkZGVuXCIscz1zfHxlLnNjcm9sbFdpZHRoK24sYS53aWR0aD1gJHtzfXB4YCxpLnN0eWxlLm92ZXJmbG93PVwiXCIsYS5mbGV4PVwiMCAwIGF1dG9cIixhLmhlaWdodD1gJHtpLnNjcm9sbEhlaWdodH1weGAsbz1lLnNjcm9sbEhlaWdodCtyfX1jYXRjaCh0KXt9aWYoc3x8byl7Y29uc3QgdD17ZmxleDpcIjAgMSBhdXRvXCIsd2lkdGg6XCJcIixoZWlnaHQ6XCJcIn07cyYmKHQud2lkdGg9YCR7c31weGApLG8mJih0LmhlaWdodD1gJHtvfXB4YCksT2JqZWN0LmFzc2lnbihhLHQpfX1wbGF5VmlkZW8oKXtjb25zdCB0PXRoaXMuaW5zdGFuY2UuZ2V0U2xpZGUoKTtpZighdClyZXR1cm47Y29uc3R7ZWw6ZX09dDtpZighZXx8IWUub2Zmc2V0UGFyZW50KXJldHVybjtpZighdGhpcy5vcHRpb25Gb3IodCxcInZpZGVvQXV0b3BsYXlcIikpcmV0dXJuO2lmKFwiaHRtbDV2aWRlb1wiPT09dC50eXBlKXRyeXtjb25zdCB0PWUucXVlcnlTZWxlY3RvcihcInZpZGVvXCIpO2lmKHQpe2NvbnN0IGU9dC5wbGF5KCk7dm9pZCAwIT09ZSYmZS50aGVuKCgoKT0+e30pKS5jYXRjaCgoZT0+e3QubXV0ZWQ9ITAsdC5wbGF5KCl9KSl9fWNhdGNoKHQpe31pZihcInlvdXR1YmVcIiE9PXQudHlwZSYmXCJ2aW1lb1wiIT09dC50eXBlKXJldHVybjtjb25zdCBpPSgpPT57aWYodC5pZnJhbWVFbCYmdC5pZnJhbWVFbC5jb250ZW50V2luZG93KXtsZXQgZTtpZihcInRydWVcIj09PXQuaWZyYW1lRWwuZGF0YXNldC5yZWFkeSlyZXR1cm4gZT1cInlvdXR1YmVcIj09PXQudHlwZT97ZXZlbnQ6XCJjb21tYW5kXCIsZnVuYzpcInBsYXlWaWRlb1wifTp7bWV0aG9kOlwicGxheVwiLHZhbHVlOlwidHJ1ZVwifSxlJiZ0LmlmcmFtZUVsLmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2UoSlNPTi5zdHJpbmdpZnkoZSksXCIqXCIpLHZvaWQodC5wb2xsZXI9dm9pZCAwKTtcInlvdXR1YmVcIj09PXQudHlwZSYmKGU9e2V2ZW50OlwibGlzdGVuaW5nXCIsaWQ6dC5pZnJhbWVFbC5nZXRBdHRyaWJ1dGUoXCJpZFwiKX0sdC5pZnJhbWVFbC5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKEpTT04uc3RyaW5naWZ5KGUpLFwiKlwiKSl9dC5wb2xsZXI9c2V0VGltZW91dChpLDI1MCl9O2koKX1wcm9jZXNzVHlwZSh0KXtpZih0Lmh0bWwpcmV0dXJuIHQudHlwZT1cImh0bWxcIix0LnNyYz10Lmh0bWwsdm9pZCh0Lmh0bWw9XCJcIik7Y29uc3QgZT10aGlzLmluc3RhbmNlLm9wdGlvbkZvcih0LFwic3JjXCIsXCJcIik7aWYoIWV8fFwic3RyaW5nXCIhPXR5cGVvZiBlKXJldHVybjtsZXQgaT10LnR5cGUsbj1udWxsO2lmKG49ZS5tYXRjaCgvKHlvdXR1YmVcXC5jb218eW91dHVcXC5iZXx5b3V0dWJlXFwtbm9jb29raWVcXC5jb20pXFwvKD86d2F0Y2hcXD8oPzouKiYpP3Y9fHZcXC98dVxcL3xlbWJlZFxcLz8pPyh2aWRlb3Nlcmllc1xcP2xpc3Q9KD86LiopfFtcXHctXXsxMX18XFw/bGlzdFR5cGU9KD86LiopJmxpc3Q9KD86LiopKSg/Oi4qKS9pKSl7Y29uc3Qgcz10aGlzLm9wdGlvbkZvcih0LFwieW91dHViZVwiKSx7bm9jb29raWU6b309cyxhPWZ1bmN0aW9uKHQsZSl7dmFyIGk9e307Zm9yKHZhciBuIGluIHQpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsbikmJmUuaW5kZXhPZihuKTwwJiYoaVtuXT10W25dKTtpZihudWxsIT10JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgcz0wO2ZvcihuPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModCk7czxuLmxlbmd0aDtzKyspZS5pbmRleE9mKG5bc10pPDAmJk9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh0LG5bc10pJiYoaVtuW3NdXT10W25bc11dKX1yZXR1cm4gaX0ocyxbXCJub2Nvb2tpZVwiXSkscj1gd3d3LnlvdXR1YmUke28/XCItbm9jb29raWVcIjpcIlwifS5jb21gLGw9UShlLGEpLGM9ZW5jb2RlVVJJQ29tcG9uZW50KG5bMl0pO3QudmlkZW9JZD1jLHQuc3JjPWBodHRwczovLyR7cn0vZW1iZWQvJHtjfT8ke2x9YCx0LnRodW1iU3JjPXQudGh1bWJTcmN8fGBodHRwczovL2kueXRpbWcuY29tL3ZpLyR7Y30vbXFkZWZhdWx0LmpwZ2AsaT1cInlvdXR1YmVcIn1lbHNlIGlmKG49ZS5tYXRjaCgvXi4rdmltZW8uY29tXFwvKD86XFwvKT8oW1xcZF0rKSgoXFwvfFxcP2g9KShbYS16MC05XSspKT8oLiopPy8pKXtjb25zdCBzPVEoZSx0aGlzLm9wdGlvbkZvcih0LFwidmltZW9cIikpLG89ZW5jb2RlVVJJQ29tcG9uZW50KG5bMV0pLGE9bls0XXx8XCJcIjt0LnZpZGVvSWQ9byx0LnNyYz1gaHR0cHM6Ly9wbGF5ZXIudmltZW8uY29tL3ZpZGVvLyR7b30/JHthP2BoPSR7YX0ke3M/XCImXCI6XCJcIn1gOlwiXCJ9JHtzfWAsaT1cInZpbWVvXCJ9aWYoIWkmJnQudHJpZ2dlckVsKXtjb25zdCBlPXQudHJpZ2dlckVsLmRhdGFzZXQudHlwZTtldC5pbmNsdWRlcyhlKSYmKGk9ZSl9aXx8XCJzdHJpbmdcIj09dHlwZW9mIGUmJihcIiNcIj09PWUuY2hhckF0KDApP2k9XCJpbmxpbmVcIjoobj1lLm1hdGNoKC9cXC4obXA0fG1vdnxvZ3Z8d2VibSkoKFxcP3wjKS4qKT8kL2kpKT8oaT1cImh0bWw1dmlkZW9cIix0LnZpZGVvRm9ybWF0PXQudmlkZW9Gb3JtYXR8fFwidmlkZW8vXCIrKFwib2d2XCI9PT1uWzFdP1wib2dnXCI6blsxXSkpOmUubWF0Y2goLyheZGF0YTppbWFnZVxcL1thLXowLTkrXFwvPV0qLCl8KFxcLihqcChlfGd8ZWcpfGdpZnxwbmd8Ym1wfHdlYnB8c3ZnfGljbykoKFxcP3wjKS4qKT8kKS9pKT9pPVwiaW1hZ2VcIjplLm1hdGNoKC9cXC4ocGRmKSgoXFw/fCMpLiopPyQvaSk/aT1cInBkZlwiOihuPWUubWF0Y2goLyg/Om1hcHNcXC4pP2dvb2dsZVxcLihbYS16XXsyLDN9KD86XFwuW2Etel17Mn0pPylcXC8oPzooPzooPzptYXBzXFwvKD86cGxhY2VcXC8oPzouKilcXC8pP1xcQCguKiksKFxcZCsuP1xcZCs/KXopKXwoPzpcXD9sbD0pKSguKik/L2kpKT8odC5zcmM9YGh0dHBzOi8vbWFwcy5nb29nbGUuJHtuWzFdfS8/bGw9JHsoblsyXT9uWzJdK1wiJno9XCIrTWF0aC5mbG9vcihwYXJzZUZsb2F0KG5bM10pKSsobls0XT9uWzRdLnJlcGxhY2UoL15cXC8vLFwiJlwiKTpcIlwiKTpuWzRdK1wiXCIpLnJlcGxhY2UoL1xcPy8sXCImXCIpfSZvdXRwdXQ9JHtuWzRdJiZuWzRdLmluZGV4T2YoXCJsYXllcj1jXCIpPjA/XCJzdmVtYmVkXCI6XCJlbWJlZFwifWAsaT1cIm1hcFwiKToobj1lLm1hdGNoKC8oPzptYXBzXFwuKT9nb29nbGVcXC4oW2Etel17MiwzfSg/OlxcLlthLXpdezJ9KT8pXFwvKD86bWFwc1xcL3NlYXJjaFxcLykoLiopL2kpKSYmKHQuc3JjPWBodHRwczovL21hcHMuZ29vZ2xlLiR7blsxXX0vbWFwcz9xPSR7blsyXS5yZXBsYWNlKFwicXVlcnk9XCIsXCJxPVwiKS5yZXBsYWNlKFwiYXBpPTFcIixcIlwiKX0mb3V0cHV0PWVtYmVkYCxpPVwibWFwXCIpKSxpPWl8fHRoaXMuaW5zdGFuY2Uub3B0aW9uKFwiZGVmYXVsdFR5cGVcIiksdC50eXBlPWksXCJpbWFnZVwiPT09aSYmKHQudGh1bWJTcmM9dC50aHVtYlNyY3x8dC5zcmMpfXNldENvbnRlbnQodCl7Y29uc3QgZT10aGlzLmluc3RhbmNlLm9wdGlvbkZvcih0LFwic3JjXCIpfHxcIlwiO2lmKHQmJnQudHlwZSYmZSl7c3dpdGNoKHQudHlwZSl7Y2FzZVwiaHRtbFwiOnRoaXMuaW5zdGFuY2Uuc2V0Q29udGVudCh0LGUpO2JyZWFrO2Nhc2VcImh0bWw1dmlkZW9cIjpjb25zdCBpPXRoaXMub3B0aW9uKFwidmlkZW9UcGxcIik7aSYmdGhpcy5pbnN0YW5jZS5zZXRDb250ZW50KHQsaS5yZXBsYWNlKC9cXHtcXHtzcmNcXH1cXH0vZ2ksZStcIlwiKS5yZXBsYWNlKC9cXHtcXHtmb3JtYXRcXH1cXH0vZ2ksdGhpcy5vcHRpb25Gb3IodCxcInZpZGVvRm9ybWF0XCIpfHxcIlwiKS5yZXBsYWNlKC9cXHtcXHtwb3N0ZXJcXH1cXH0vZ2ksdC5wb3N0ZXJ8fHQudGh1bWJTcmN8fFwiXCIpKTticmVhaztjYXNlXCJpbmxpbmVcIjpjYXNlXCJjbG9uZVwiOnRoaXMuc2V0SW5saW5lQ29udGVudCh0KTticmVhaztjYXNlXCJhamF4XCI6dGhpcy5sb2FkQWpheENvbnRlbnQodCk7YnJlYWs7Y2FzZVwicGRmXCI6Y2FzZVwibWFwXCI6Y2FzZVwieW91dHViZVwiOmNhc2VcInZpbWVvXCI6dC5wcmVsb2FkPSExO2Nhc2VcImlmcmFtZVwiOnRoaXMuc2V0SWZyYW1lQ29udGVudCh0KX10aGlzLnNldEFzcGVjdFJhdGlvKHQpfX1zZXRBc3BlY3RSYXRpbyh0KXt2YXIgZTtjb25zdCBpPXQuY29udGVudEVsLG49dGhpcy5vcHRpb25Gb3IodCxcInZpZGVvUmF0aW9cIikscz1udWxsPT09KGU9dC5lbCl8fHZvaWQgMD09PWU/dm9pZCAwOmUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7aWYoIShpJiZzJiZuJiYxIT09biYmdC50eXBlJiZbXCJ2aWRlb1wiLFwieW91dHViZVwiLFwidmltZW9cIixcImh0bWw1dmlkZW9cIl0uaW5jbHVkZXModC50eXBlKSkpcmV0dXJuO2NvbnN0IG89cy53aWR0aCxhPXMuaGVpZ2h0O2kuc3R5bGUuYXNwZWN0UmF0aW89bitcIlwiLGkuc3R5bGUud2lkdGg9by9hPm4/XCJhdXRvXCI6XCJcIixpLnN0eWxlLmhlaWdodD1vL2E+bj9cIlwiOlwiYXV0b1wifWF0dGFjaCgpe3RoaXMuaW5zdGFuY2Uub24oXCJDYXJvdXNlbC5pbml0U2xpZGVcIix0aGlzLm9uSW5pdFNsaWRlKSx0aGlzLmluc3RhbmNlLm9uKFwiQ2Fyb3VzZWwuY3JlYXRlU2xpZGVcIix0aGlzLm9uQ3JlYXRlU2xpZGUpLHRoaXMuaW5zdGFuY2Uub24oXCJDYXJvdXNlbC5yZW1vdmVTbGlkZVwiLHRoaXMub25SZW1vdmVTbGlkZSksdGhpcy5pbnN0YW5jZS5vbihcIkNhcm91c2VsLnNlbGVjdFNsaWRlXCIsdGhpcy5vblNlbGVjdFNsaWRlKSx0aGlzLmluc3RhbmNlLm9uKFwiQ2Fyb3VzZWwudW5zZWxlY3RTbGlkZVwiLHRoaXMub25VbnNlbGVjdFNsaWRlKSx0aGlzLmluc3RhbmNlLm9uKFwiQ2Fyb3VzZWwuUGFuem9vbS5yZWZyZXNoXCIsdGhpcy5vblJlZnJlc2gpLHRoaXMuaW5zdGFuY2Uub24oXCJkb25lXCIsdGhpcy5vbkRvbmUpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLHRoaXMub25NZXNzYWdlKX1kZXRhY2goKXt0aGlzLmluc3RhbmNlLm9mZihcIkNhcm91c2VsLmluaXRTbGlkZVwiLHRoaXMub25Jbml0U2xpZGUpLHRoaXMuaW5zdGFuY2Uub2ZmKFwiQ2Fyb3VzZWwuY3JlYXRlU2xpZGVcIix0aGlzLm9uQ3JlYXRlU2xpZGUpLHRoaXMuaW5zdGFuY2Uub2ZmKFwiQ2Fyb3VzZWwucmVtb3ZlU2xpZGVcIix0aGlzLm9uUmVtb3ZlU2xpZGUpLHRoaXMuaW5zdGFuY2Uub2ZmKFwiQ2Fyb3VzZWwuc2VsZWN0U2xpZGVcIix0aGlzLm9uU2VsZWN0U2xpZGUpLHRoaXMuaW5zdGFuY2Uub2ZmKFwiQ2Fyb3VzZWwudW5zZWxlY3RTbGlkZVwiLHRoaXMub25VbnNlbGVjdFNsaWRlKSx0aGlzLmluc3RhbmNlLm9mZihcIkNhcm91c2VsLlBhbnpvb20ucmVmcmVzaFwiLHRoaXMub25SZWZyZXNoKSx0aGlzLmluc3RhbmNlLm9mZihcImRvbmVcIix0aGlzLm9uRG9uZSksd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsdGhpcy5vbk1lc3NhZ2UpfX1PYmplY3QuZGVmaW5lUHJvcGVydHkoaXQsXCJkZWZhdWx0c1wiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTp0dH0pO2NsYXNzIG50IGV4dGVuZHMgSXtjb25zdHJ1Y3Rvcigpe3N1cGVyKC4uLmFyZ3VtZW50cyksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJzdGF0ZVwiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpcInJlYWR5XCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcImluSG92ZXJcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6ITF9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInRpbWVyXCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOm51bGx9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInByb2dyZXNzQmFyXCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOm51bGx9KX1nZXQgaXNBY3RpdmUoKXtyZXR1cm5cInJlYWR5XCIhPT10aGlzLnN0YXRlfW9uUmVhZHkodCl7dGhpcy5vcHRpb24oXCJhdXRvU3RhcnRcIikmJih0LmlzSW5maW5pdGV8fHQucGFnZTx0LnBhZ2VzLmxlbmd0aC0xKSYmdGhpcy5zdGFydCgpfW9uQ2hhbmdlKCl7dmFyIHQ7KG51bGw9PT0odD10aGlzLmluc3RhbmNlLnBhbnpvb20pfHx2b2lkIDA9PT10P3ZvaWQgMDp0LmlzUmVzdGluZyl8fCh0aGlzLnJlbW92ZVByb2dyZXNzQmFyKCksdGhpcy5wYXVzZSgpKX1vblNldHRsZSgpe3RoaXMucmVzdW1lKCl9b25WaXNpYmlsaXR5Q2hhbmdlKCl7XCJ2aXNpYmxlXCI9PT1kb2N1bWVudC52aXNpYmlsaXR5U3RhdGU/dGhpcy5yZXN1bWUoKTp0aGlzLnBhdXNlKCl9b25Nb3VzZUVudGVyKCl7dGhpcy5pbkhvdmVyPSEwLHRoaXMucGF1c2UoKX1vbk1vdXNlTGVhdmUoKXt2YXIgdDt0aGlzLmluSG92ZXI9ITEsKG51bGw9PT0odD10aGlzLmluc3RhbmNlLnBhbnpvb20pfHx2b2lkIDA9PT10P3ZvaWQgMDp0LmlzUmVzdGluZykmJnRoaXMucmVzdW1lKCl9b25UaW1lckVuZCgpe1wicGxheVwiPT09dGhpcy5zdGF0ZSYmKHRoaXMuaW5zdGFuY2UuaXNJbmZpbml0ZXx8dGhpcy5pbnN0YW5jZS5wYWdlIT09dGhpcy5pbnN0YW5jZS5wYWdlcy5sZW5ndGgtMT90aGlzLmluc3RhbmNlLnNsaWRlTmV4dCgpOnRoaXMuaW5zdGFuY2Uuc2xpZGVUbygwKSl9cmVtb3ZlUHJvZ3Jlc3NCYXIoKXt0aGlzLnByb2dyZXNzQmFyJiYodGhpcy5wcm9ncmVzc0Jhci5yZW1vdmUoKSx0aGlzLnByb2dyZXNzQmFyPW51bGwpfWNyZWF0ZVByb2dyZXNzQmFyKCl7dmFyIHQ7aWYoIXRoaXMub3B0aW9uKFwic2hvd1Byb2dyZXNzXCIpKXJldHVybiBudWxsO3RoaXMucmVtb3ZlUHJvZ3Jlc3NCYXIoKTtjb25zdCBlPXRoaXMuaW5zdGFuY2UsaT0obnVsbD09PSh0PWUucGFnZXNbZS5wYWdlXSl8fHZvaWQgMD09PXQ/dm9pZCAwOnQuc2xpZGVzKXx8W107bGV0IG49dGhpcy5vcHRpb24oXCJwcm9ncmVzc1BhcmVudEVsXCIpO2lmKG58fChuPSgxPT09aS5sZW5ndGg/aVswXS5lbDpudWxsKXx8ZS52aWV3cG9ydCksIW4pcmV0dXJuIG51bGw7Y29uc3Qgcz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3JldHVybiBTKHMsXCJmLXByb2dyZXNzXCIpLG4ucHJlcGVuZChzKSx0aGlzLnByb2dyZXNzQmFyPXMscy5vZmZzZXRIZWlnaHQsc31zZXQoKXtpZih0aGlzLmluc3RhbmNlLnBhZ2VzLmxlbmd0aDwyKXJldHVybjtpZih0aGlzLnByb2dyZXNzQmFyKXJldHVybjtjb25zdCB0PXRoaXMub3B0aW9uKFwidGltZW91dFwiKTt0aGlzLnN0YXRlPVwicGxheVwiLFModGhpcy5pbnN0YW5jZS5jb250YWluZXIsXCJoYXMtYXV0b3BsYXlcIik7bGV0IGU9dGhpcy5jcmVhdGVQcm9ncmVzc0JhcigpO2UmJihlLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbj1gJHt0fW1zYCxlLnN0eWxlLnRyYW5zZm9ybT1cInNjYWxlWCgxKVwiKSx0aGlzLnRpbWVyPXNldFRpbWVvdXQoKCgpPT57dGhpcy50aW1lcj1udWxsLHRoaXMuaW5Ib3Zlcnx8dGhpcy5vblRpbWVyRW5kKCl9KSx0KSx0aGlzLmVtaXQoXCJzZXRcIil9Y2xlYXIoKXt0aGlzLnRpbWVyJiYoY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpLHRoaXMudGltZXI9bnVsbCksdGhpcy5yZW1vdmVQcm9ncmVzc0JhcigpfXN0YXJ0KCl7aWYodGhpcy5zZXQoKSx0aGlzLm9wdGlvbihcInBhdXNlT25Ib3ZlclwiKSl7Y29uc3QgdD10aGlzLmluc3RhbmNlLmNvbnRhaW5lcjt0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsdGhpcy5vbk1vdXNlRW50ZXIsITEpLHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIix0aGlzLm9uTW91c2VMZWF2ZSwhMSl9ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIix0aGlzLm9uVmlzaWJpbGl0eUNoYW5nZSwhMSl9c3RvcCgpe2NvbnN0IHQ9dGhpcy5pbnN0YW5jZS5jb250YWluZXI7dGhpcy5jbGVhcigpLHRoaXMuc3RhdGU9XCJyZWFkeVwiLHQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIix0aGlzLm9uTW91c2VFbnRlciwhMSksdC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLHRoaXMub25Nb3VzZUxlYXZlLCExKSxkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidmlzaWJpbGl0eWNoYW5nZVwiLHRoaXMub25WaXNpYmlsaXR5Q2hhbmdlLCExKSxFKHQsXCJoYXMtYXV0b3BsYXlcIiksdGhpcy5lbWl0KFwic3RvcFwiKX1wYXVzZSgpe1wicGxheVwiPT09dGhpcy5zdGF0ZSYmKHRoaXMuc3RhdGU9XCJwYXVzZVwiLHRoaXMuY2xlYXIoKSx0aGlzLmVtaXQoXCJwYXVzZVwiKSl9cmVzdW1lKCl7Y29uc3QgdD10aGlzLmluc3RhbmNlO2lmKHQuaXNJbmZpbml0ZXx8dC5wYWdlIT09dC5wYWdlcy5sZW5ndGgtMSlpZihcInBsYXlcIiE9PXRoaXMuc3RhdGUpe2lmKFwicGF1c2VcIj09PXRoaXMuc3RhdGUmJiF0aGlzLmluSG92ZXIpe2NvbnN0IHQ9bmV3IEV2ZW50KFwicmVzdW1lXCIse2J1YmJsZXM6ITAsY2FuY2VsYWJsZTohMH0pO3RoaXMuZW1pdChcInJlc3VtZVwiLGV2ZW50KSx0LmRlZmF1bHRQcmV2ZW50ZWR8fHRoaXMuc2V0KCl9fWVsc2UgdGhpcy5zZXQoKTtlbHNlIHRoaXMuc3RvcCgpfXRvZ2dsZSgpe1wicGxheVwiPT09dGhpcy5zdGF0ZXx8XCJwYXVzZVwiPT09dGhpcy5zdGF0ZT90aGlzLnN0b3AoKTp0aGlzLnNldCgpfWF0dGFjaCgpe3RoaXMuaW5zdGFuY2Uub24oXCJyZWFkeVwiLHRoaXMub25SZWFkeSksdGhpcy5pbnN0YW5jZS5vbihcIlBhbnpvb20uc3RhcnRBbmltYXRpb25cIix0aGlzLm9uQ2hhbmdlKSx0aGlzLmluc3RhbmNlLm9uKFwiUGFuem9vbS5lbmRBbmltYXRpb25cIix0aGlzLm9uU2V0dGxlKSx0aGlzLmluc3RhbmNlLm9uKFwiUGFuem9vbS50b3VjaE1vdmVcIix0aGlzLm9uQ2hhbmdlKX1kZXRhY2goKXt0aGlzLmluc3RhbmNlLm9mZihcInJlYWR5XCIsdGhpcy5vblJlYWR5KSx0aGlzLmluc3RhbmNlLm9mZihcIlBhbnpvb20uc3RhcnRBbmltYXRpb25cIix0aGlzLm9uQ2hhbmdlKSx0aGlzLmluc3RhbmNlLm9mZihcIlBhbnpvb20uZW5kQW5pbWF0aW9uXCIsdGhpcy5vblNldHRsZSksdGhpcy5pbnN0YW5jZS5vZmYoXCJQYW56b29tLnRvdWNoTW92ZVwiLHRoaXMub25DaGFuZ2UpLHRoaXMuc3RvcCgpfX1PYmplY3QuZGVmaW5lUHJvcGVydHkobnQsXCJkZWZhdWx0c1wiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTp7YXV0b1N0YXJ0OiEwLHBhdXNlT25Ib3ZlcjohMCxwcm9ncmVzc1BhcmVudEVsOm51bGwsc2hvd1Byb2dyZXNzOiEwLHRpbWVvdXQ6M2UzfX0pO2NsYXNzIHN0IGV4dGVuZHMgSXtjb25zdHJ1Y3Rvcigpe3N1cGVyKC4uLmFyZ3VtZW50cyksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJyZWZcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6bnVsbH0pfW9uUHJlcGFyZSh0KXtjb25zdCBlPXQuY2Fyb3VzZWw7aWYoIWUpcmV0dXJuO2NvbnN0IGk9dC5jb250YWluZXI7aSYmKGUub3B0aW9ucy5BdXRvcGxheT11KHRoaXMub3B0aW9uKFwiQXV0b3BsYXlcIil8fHt9LHtwYXVzZU9uSG92ZXI6ITEsYXV0b1N0YXJ0OiExLHRpbWVvdXQ6dGhpcy5vcHRpb24oXCJ0aW1lb3V0XCIpLHByb2dyZXNzUGFyZW50RWw6KCk9PmkucXVlcnlTZWxlY3RvcihcIi5mYW5jeWJveF9fdG9vbGJhciBbZGF0YS1mYW5jeWJveC10b2dnbGUtc2xpZGVzaG93XVwiKXx8aSxvbjp7c2V0OmU9Pnt2YXIgbjtpLmNsYXNzTGlzdC5hZGQoXCJoYXMtc2xpZGVzaG93XCIpLChudWxsPT09KG49dC5nZXRTbGlkZSgpKXx8dm9pZCAwPT09bj92b2lkIDA6bi5zdGF0ZSkhPT1WLlJlYWR5JiZlLnBhdXNlKCl9LHN0b3A6KCk9PntpLmNsYXNzTGlzdC5yZW1vdmUoXCJoYXMtc2xpZGVzaG93XCIpLHQuaXNDb21wYWN0fHx0LmVuZElkbGUoKX0scmVzdW1lOihlLGkpPT57dmFyIG4scyxvOyFpfHwhaS5jYW5jZWxhYmxlfHwobnVsbD09PShuPXQuZ2V0U2xpZGUoKSl8fHZvaWQgMD09PW4/dm9pZCAwOm4uc3RhdGUpPT09Vi5SZWFkeSYmKG51bGw9PT0obz1udWxsPT09KHM9dC5jYXJvdXNlbCl8fHZvaWQgMD09PXM/dm9pZCAwOnMucGFuem9vbSl8fHZvaWQgMD09PW8/dm9pZCAwOm8uaXNSZXN0aW5nKXx8aS5wcmV2ZW50RGVmYXVsdCgpfX19KSxlLmF0dGFjaFBsdWdpbnMoe0F1dG9wbGF5Om50fSksdGhpcy5yZWY9ZS5wbHVnaW5zLkF1dG9wbGF5KX1vblJlYWR5KHQpe2NvbnN0IGU9dC5jYXJvdXNlbCxpPXRoaXMucmVmO2UmJmkmJnRoaXMub3B0aW9uKFwicGxheU9uU3RhcnRcIikmJihlLmlzSW5maW5pdGV8fGUucGFnZTxlLnBhZ2VzLmxlbmd0aC0xKSYmaS5zdGFydCgpfW9uRG9uZSh0LGUpe2NvbnN0IGk9dGhpcy5yZWY7aWYoIWkpcmV0dXJuO2NvbnN0IG49ZS5wYW56b29tO24mJm4ub24oXCJzdGFydEFuaW1hdGlvblwiLCgoKT0+e3QuaXNDdXJyZW50U2xpZGUoZSkmJmkuc3RvcCgpfSkpLHQuaXNDdXJyZW50U2xpZGUoZSkmJmkucmVzdW1lKCl9b25LZXlkb3duKHQsZSl7dmFyIGk7Y29uc3Qgbj10aGlzLnJlZjtuJiZlPT09dGhpcy5vcHRpb24oXCJrZXlcIikmJlwiQlVUVE9OXCIhPT0obnVsbD09PShpPWRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpfHx2b2lkIDA9PT1pP3ZvaWQgMDppLm5vZGVOYW1lKSYmbi50b2dnbGUoKX1hdHRhY2goKXt0aGlzLmluc3RhbmNlLm9uKFwiQ2Fyb3VzZWwuaW5pdFwiLHRoaXMub25QcmVwYXJlKSx0aGlzLmluc3RhbmNlLm9uKFwiQ2Fyb3VzZWwucmVhZHlcIix0aGlzLm9uUmVhZHkpLHRoaXMuaW5zdGFuY2Uub24oXCJkb25lXCIsdGhpcy5vbkRvbmUpLHRoaXMuaW5zdGFuY2Uub24oXCJrZXlkb3duXCIsdGhpcy5vbktleWRvd24pfWRldGFjaCgpe3RoaXMuaW5zdGFuY2Uub2ZmKFwiQ2Fyb3VzZWwuaW5pdFwiLHRoaXMub25QcmVwYXJlKSx0aGlzLmluc3RhbmNlLm9mZihcIkNhcm91c2VsLnJlYWR5XCIsdGhpcy5vblJlYWR5KSx0aGlzLmluc3RhbmNlLm9mZihcImRvbmVcIix0aGlzLm9uRG9uZSksdGhpcy5pbnN0YW5jZS5vZmYoXCJrZXlkb3duXCIsdGhpcy5vbktleWRvd24pfX1PYmplY3QuZGVmaW5lUHJvcGVydHkoc3QsXCJkZWZhdWx0c1wiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTp7a2V5OlwiIFwiLHBsYXlPblN0YXJ0OiExLHRpbWVvdXQ6M2UzfX0pO2NvbnN0IG90PXtjbGFzc2VzOntjb250YWluZXI6XCJmLXRodW1icyBmLWNhcm91c2VsX190aHVtYnNcIix2aWV3cG9ydDpcImYtdGh1bWJzX192aWV3cG9ydFwiLHRyYWNrOlwiZi10aHVtYnNfX3RyYWNrXCIsc2xpZGU6XCJmLXRodW1ic19fc2xpZGVcIixpc1Jlc3Rpbmc6XCJpcy1yZXN0aW5nXCIsaXNTZWxlY3RlZDpcImlzLXNlbGVjdGVkXCIsaXNMb2FkaW5nOlwiaXMtbG9hZGluZ1wiLGhhc1RodW1iczpcImhhcy10aHVtYnNcIn0sbWluQ291bnQ6MixwYXJlbnRFbDpudWxsLHRodW1iVHBsOic8YnV0dG9uIGNsYXNzPVwiZi10aHVtYnNfX3NsaWRlX19idXR0b25cIiB0YWJpbmRleD1cIjBcIiB0eXBlPVwiYnV0dG9uXCIgYXJpYS1sYWJlbD1cInt7R09UT319XCIgZGF0YS1jYXJvdXNlbC1pbmRleD1cIiVpXCI+PGltZyBjbGFzcz1cImYtdGh1bWJzX19zbGlkZV9faW1nXCIgZGF0YS1sYXp5LXNyYz1cInt7JXN9fVwiIGFsdD1cIlwiIC8+PC9idXR0b24+Jyx0eXBlOlwibW9kZXJuXCJ9O3ZhciBhdDshZnVuY3Rpb24odCl7dFt0LkluaXQ9MF09XCJJbml0XCIsdFt0LlJlYWR5PTFdPVwiUmVhZHlcIix0W3QuSGlkZGVuPTJdPVwiSGlkZGVuXCIsdFt0LkRpc2FibGVkPTNdPVwiRGlzYWJsZWRcIn0oYXR8fChhdD17fSkpO2xldCBydD1jbGFzcyBleHRlbmRzIEl7Y29uc3RydWN0b3IoKXtzdXBlciguLi5hcmd1bWVudHMpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwidHlwZVwiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpcIm1vZGVyblwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJjb250YWluZXJcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6bnVsbH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwidHJhY2tcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6bnVsbH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiY2Fyb3VzZWxcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6bnVsbH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwicGFuem9vbVwiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpudWxsfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJ0aHVtYldpZHRoXCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOjB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInRodW1iQ2xpcFdpZHRoXCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOjB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInRodW1iSGVpZ2h0XCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOjB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInRodW1iR2FwXCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOjB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInRodW1iRXh0cmFHYXBcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6MH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwic2hvdWxkQ2VudGVyXCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOiEwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJzdGF0ZVwiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTphdC5Jbml0fSl9Zm9ybWF0VGh1bWIodCxlKXtyZXR1cm4gdGhpcy5pbnN0YW5jZS5sb2NhbGl6ZShlLFtbXCIlaVwiLHQuaW5kZXhdLFtcIiVkXCIsdC5pbmRleCsxXSxbXCIlc1wiLHQudGh1bWJTcmN8fFwiZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95SDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUJSQUE3XCJdXSl9Z2V0U2xpZGVzKCl7Y29uc3QgdD1bXSxlPXRoaXMub3B0aW9uKFwidGh1bWJUcGxcIil8fFwiXCI7aWYoZSlmb3IoY29uc3QgaSBvZiB0aGlzLmluc3RhbmNlLnNsaWRlc3x8W10pe2xldCBuPVwiXCI7aS50eXBlJiYobj1gZm9yLSR7aS50eXBlfWAsaS50eXBlJiZbXCJ2aWRlb1wiLFwieW91dHViZVwiLFwidmltZW9cIixcImh0bWw1dmlkZW9cIl0uaW5jbHVkZXMoaS50eXBlKSYmKG4rPVwiIGZvci12aWRlb1wiKSksdC5wdXNoKHtodG1sOnRoaXMuZm9ybWF0VGh1bWIoaSxlKSxjdXN0b21DbGFzczpufSl9cmV0dXJuIHR9b25Jbml0U2xpZGUodCxlKXtjb25zdCBpPWUuZWw7aSYmKGUudGh1bWJTcmM9aS5kYXRhc2V0LnRodW1iU3JjfHxlLnRodW1iU3JjfHxcIlwiLGUudGh1bWJDbGlwV2lkdGg9cGFyc2VGbG9hdChpLmRhdGFzZXQudGh1bWJDbGlwV2lkdGh8fFwiXCIpfHxlLnRodW1iQ2xpcFdpZHRofHwwLGUudGh1bWJIZWlnaHQ9cGFyc2VGbG9hdChpLmRhdGFzZXQudGh1bWJIZWlnaHR8fFwiXCIpfHxlLnRodW1iSGVpZ2h0fHwwKX1vbkluaXRTbGlkZXMoKXt0aGlzLnN0YXRlPT09YXQuSW5pdCYmdGhpcy5idWlsZCgpfW9uUmVmcmVzaE0oKXt0aGlzLnJlZnJlc2hNb2Rlcm4oKX1vbkNoYW5nZU0oKXtcIm1vZGVyblwiPT09dGhpcy50eXBlJiYodGhpcy5zaG91bGRDZW50ZXI9ITAsdGhpcy5jZW50ZXJNb2Rlcm4oKSl9b25DbGlja01vZGVybih0KXt0LnByZXZlbnREZWZhdWx0KCksdC5zdG9wUHJvcGFnYXRpb24oKTtjb25zdCBlPXRoaXMuaW5zdGFuY2UsaT1lLnBhZ2Usbj10PT57aWYodCl7Y29uc3QgZT10LmNsb3Nlc3QoXCJbZGF0YS1jYXJvdXNlbC1pbmRleF1cIik7aWYoZSlyZXR1cm4gcGFyc2VJbnQoZS5kYXRhc2V0LmNhcm91c2VsSW5kZXh8fFwiXCIsMTApfHwwfXJldHVybi0xfSxzPSh0LGUpPT57Y29uc3QgaT1kb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHQsZSk7cmV0dXJuIGk/bihpKTotMX07bGV0IG89bih0LnRhcmdldCk7bzwwJiYobz1zKHQuY2xpZW50WCt0aGlzLnRodW1iR2FwLHQuY2xpZW50WSksbz09PWkmJihvPWktMSkpLG88MCYmKG89cyh0LmNsaWVudFgtdGhpcy50aHVtYkdhcCx0LmNsaWVudFkpLG89PT1pJiYobz1pKzEpKSxvPDAmJihvPShlPT57bGV0IG49cyh0LmNsaWVudFgtZSx0LmNsaWVudFkpLGE9cyh0LmNsaWVudFgrZSx0LmNsaWVudFkpO3JldHVybiBvPDAmJm49PT1pJiYobz1pKzEpLG88MCYmYT09PWkmJihvPWktMSksb30pKHRoaXMudGh1bWJFeHRyYUdhcCkpLG89PT1pP3RoaXMuY2VudGVyTW9kZXJuKCk6bz4tMSYmbzxlLnBhZ2VzLmxlbmd0aCYmZS5zbGlkZVRvKG8pfW9uVHJhbnNmb3JtTSgpe2lmKFwibW9kZXJuXCIhPT10aGlzLnR5cGUpcmV0dXJuO2NvbnN0e2luc3RhbmNlOnQsY29udGFpbmVyOmUsdHJhY2s6aX09dGhpcyxuPXQucGFuem9vbTtpZighKGUmJmkmJm4mJnRoaXMucGFuem9vbSkpcmV0dXJuO28oZSx0aGlzLmNuKFwiaXNSZXN0aW5nXCIpLG4uc3RhdGUhPT1nLkluaXQmJm4uaXNSZXN0aW5nKTtjb25zdCBzPXRoaXMudGh1bWJHYXAsYT10aGlzLnRodW1iRXh0cmFHYXAscj10aGlzLnRodW1iQ2xpcFdpZHRoO2xldCBsPTAsYz0wLGg9MDtmb3IoY29uc3QgZSBvZiB0LnNsaWRlcyl7bGV0IGk9ZS5pbmRleCxuPWUudGh1bWJTbGlkZUVsO2lmKCFuKWNvbnRpbnVlO28obix0aGlzLmNuKFwiaXNTZWxlY3RlZFwiKSxpPT09dC5wYWdlKSxjPTEtTWF0aC5hYnModC5nZXRQcm9ncmVzcyhpKSksbi5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tcHJvZ3Jlc3NcIixjP2MrXCJcIjpcIlwiKTtjb25zdCBkPS41KigoZS50aHVtYldpZHRofHwwKS1yKTtsKz1zLGwrPWQsYyYmKGwtPWMqKGQrYSkpLG4uc3R5bGUuc2V0UHJvcGVydHkoXCItLXNoaWZ0XCIsbC1zK1wiXCIpLGwrPWQsYyYmKGwtPWMqKGQrYSkpLGwtPXMsMD09PWkmJihoPWEqYyl9aSYmKGkuc3R5bGUuc2V0UHJvcGVydHkoXCItLWxlZnRcIixoK1wiXCIpLGkuc3R5bGUuc2V0UHJvcGVydHkoXCItLXdpZHRoXCIsbCtoK3MrYSpjK1wiXCIpKSx0aGlzLnNob3VsZENlbnRlciYmdGhpcy5jZW50ZXJNb2Rlcm4oKX1idWlsZENsYXNzaWMoKXtjb25zdHtjb250YWluZXI6dCx0cmFjazplfT10aGlzLGk9dGhpcy5nZXRTbGlkZXMoKTtpZighdHx8IWV8fCFpKXJldHVybjtjb25zdCBuPW5ldyB0aGlzLmluc3RhbmNlLmNvbnN0cnVjdG9yKHQsdSh7dHJhY2s6ZSxpbmZpbml0ZTohMSxjZW50ZXI6ITAsZmlsbDohMCxkcmFnRnJlZTohMCxzbGlkZXNQZXJQYWdlOjEsdHJhbnNpdGlvbjohMSxEb3RzOiExLE5hdmlnYXRpb246ITEsU3luYzp7fSxjbGFzc2VzOntjb250YWluZXI6XCJmLXRodW1ic1wiLHZpZXdwb3J0OlwiZi10aHVtYnNfX3ZpZXdwb3J0XCIsdHJhY2s6XCJmLXRodW1ic19fdHJhY2tcIixzbGlkZTpcImYtdGh1bWJzX19zbGlkZVwifX0sdGhpcy5vcHRpb24oXCJDYXJvdXNlbFwiKXx8e30se1N5bmM6e3RhcmdldDp0aGlzLmluc3RhbmNlfSxzbGlkZXM6aX0pKTt0aGlzLmNhcm91c2VsPW4sdGhpcy50cmFjaz1lLG4ub24oXCJyZWFkeVwiLCgoKT0+e3RoaXMuZW1pdChcInJlYWR5XCIpfSkpfWJ1aWxkTW9kZXJuKCl7aWYoXCJtb2Rlcm5cIiE9PXRoaXMudHlwZSlyZXR1cm47Y29uc3R7Y29udGFpbmVyOnQsdHJhY2s6ZSxpbnN0YW5jZTppfT10aGlzLHM9dGhpcy5vcHRpb24oXCJ0aHVtYlRwbFwiKXx8XCJcIjtpZighdHx8IWV8fCFzKXJldHVybjtTKHQsXCJpcy1ob3Jpem9udGFsXCIpLHRoaXMudXBkYXRlTW9kZXJuKCk7Zm9yKGNvbnN0IHQgb2YgaS5zbGlkZXN8fFtdKXtjb25zdCBpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7aWYoUyhpLHRoaXMuY24oXCJzbGlkZVwiKSksdC50eXBlKXtsZXQgZT1gZm9yLSR7dC50eXBlfWA7W1widmlkZW9cIixcInlvdXR1YmVcIixcInZpbWVvXCIsXCJodG1sNXZpZGVvXCJdLmluY2x1ZGVzKHQudHlwZSkmJihlKz1cIiBmb3ItdmlkZW9cIiksUyhpLGUpfWkuYXBwZW5kQ2hpbGQobih0aGlzLmZvcm1hdFRodW1iKHQscykpKSx0LnRodW1iU2xpZGVFbD1pLGUuYXBwZW5kQ2hpbGQoaSksdGhpcy5yZXNpemVNb2Rlcm5TbGlkZSh0KX1jb25zdCBvPW5ldyBpLmNvbnN0cnVjdG9yLlBhbnpvb20odCx7Y29udGVudDplLGxvY2tBeGlzOlwieFwiLHpvb206ITEscGFuT25seVpvb21lZDohMSxib3VuZHM6KCk9PntsZXQgdD0wLGU9MCxuPWkuc2xpZGVzWzBdLHM9aS5zbGlkZXNbaS5zbGlkZXMubGVuZ3RoLTFdLG89aS5zbGlkZXNbaS5wYWdlXTtyZXR1cm4gbiYmcyYmbyYmKGU9LTEqdGhpcy5nZXRNb2Rlcm5UaHVtYlBvcygwKSwwIT09aS5wYWdlJiYoZSs9LjUqKG4udGh1bWJXaWR0aHx8MCkpLHQ9LTEqdGhpcy5nZXRNb2Rlcm5UaHVtYlBvcyhpLnNsaWRlcy5sZW5ndGgtMSksaS5wYWdlIT09aS5zbGlkZXMubGVuZ3RoLTEmJih0Kz0ocy50aHVtYldpZHRofHwwKS0oby50aHVtYldpZHRofHwwKS0uNSoocy50aHVtYldpZHRofHwwKSkpLHt4OnttaW46dCxtYXg6ZX0seTp7bWluOjAsbWF4OjB9fX19KTtvLm9uKFwidG91Y2hTdGFydFwiLCgodCxlKT0+e3RoaXMuc2hvdWxkQ2VudGVyPSExfSkpLG8ub24oXCJjbGlja1wiLCgodCxlKT0+dGhpcy5vbkNsaWNrTW9kZXJuKGUpKSksby5vbihcInJlYWR5XCIsKCgpPT57dGhpcy5jZW50ZXJNb2Rlcm4oKSx0aGlzLmVtaXQoXCJyZWFkeVwiKX0pKSxvLm9uKFtcImFmdGVyVHJhbnNmb3JtXCIsXCJyZWZyZXNoXCJdLCh0PT57dGhpcy5sYXp5TG9hZE1vZGVybigpfSkpLHRoaXMucGFuem9vbT1vLHRoaXMucmVmcmVzaE1vZGVybigpfXVwZGF0ZU1vZGVybigpe2lmKFwibW9kZXJuXCIhPT10aGlzLnR5cGUpcmV0dXJuO2NvbnN0e2NvbnRhaW5lcjp0fT10aGlzO3QmJih0aGlzLnRodW1iR2FwPXBhcnNlRmxvYXQoZ2V0Q29tcHV0ZWRTdHlsZSh0KS5nZXRQcm9wZXJ0eVZhbHVlKFwiLS1mLXRodW1iLWdhcFwiKSl8fDAsdGhpcy50aHVtYkV4dHJhR2FwPXBhcnNlRmxvYXQoZ2V0Q29tcHV0ZWRTdHlsZSh0KS5nZXRQcm9wZXJ0eVZhbHVlKFwiLS1mLXRodW1iLWV4dHJhLWdhcFwiKSl8fDAsdGhpcy50aHVtYldpZHRoPXBhcnNlRmxvYXQoZ2V0Q29tcHV0ZWRTdHlsZSh0KS5nZXRQcm9wZXJ0eVZhbHVlKFwiLS1mLXRodW1iLXdpZHRoXCIpKXx8NDAsdGhpcy50aHVtYkNsaXBXaWR0aD1wYXJzZUZsb2F0KGdldENvbXB1dGVkU3R5bGUodCkuZ2V0UHJvcGVydHlWYWx1ZShcIi0tZi10aHVtYi1jbGlwLXdpZHRoXCIpKXx8NDAsdGhpcy50aHVtYkhlaWdodD1wYXJzZUZsb2F0KGdldENvbXB1dGVkU3R5bGUodCkuZ2V0UHJvcGVydHlWYWx1ZShcIi0tZi10aHVtYi1oZWlnaHRcIikpfHw0MCl9cmVmcmVzaE1vZGVybigpe3ZhciB0O2lmKFwibW9kZXJuXCI9PT10aGlzLnR5cGUpe3RoaXMudXBkYXRlTW9kZXJuKCk7Zm9yKGNvbnN0IHQgb2YgdGhpcy5pbnN0YW5jZS5zbGlkZXN8fFtdKXRoaXMucmVzaXplTW9kZXJuU2xpZGUodCk7dGhpcy5vblRyYW5zZm9ybU0oKSxudWxsPT09KHQ9dGhpcy5wYW56b29tKXx8dm9pZCAwPT09dHx8dC51cGRhdGVNZXRyaWNzKCEwKSx0aGlzLmNlbnRlck1vZGVybigwKX19Y2VudGVyTW9kZXJuKGUpe2NvbnN0IGk9dGhpcy5pbnN0YW5jZSx7Y29udGFpbmVyOm4scGFuem9vbTpzfT10aGlzO2lmKCFufHwhc3x8cy5zdGF0ZT09PWcuSW5pdClyZXR1cm47Y29uc3Qgbz1pLnBhZ2U7bGV0IGE9dGhpcy5nZXRNb2Rlcm5UaHVtYlBvcyhvKSxyPWE7Zm9yKGxldCB0PWkucGFnZS0zO3Q8aS5wYWdlKzM7dCsrKXtpZih0PDB8fHQ+aS5wYWdlcy5sZW5ndGgtMXx8dD09PWkucGFnZSljb250aW51ZTtjb25zdCBlPTEtTWF0aC5hYnMoaS5nZXRQcm9ncmVzcyh0KSk7ZT4wJiZlPDEmJihyKz1lKih0aGlzLmdldE1vZGVyblRodW1iUG9zKHQpLWEpKX1sZXQgbD0xMDA7dm9pZCAwPT09ZSYmKGU9LjIsaS5pblRyYW5zaXRpb24uc2l6ZT4wJiYoZT0uMTIpLE1hdGguYWJzKC0xKnMuY3VycmVudC5lLXIpPnMuY29udGFpbmVyUmVjdC53aWR0aCYmKGU9LjUsbD0wKSkscy5vcHRpb25zLm1heFZlbG9jaXR5PWwscy5hcHBseUNoYW5nZSh7cGFuWDp0KC0xKnItcy50YXJnZXQuZSwxZTMpLGZyaWN0aW9uOm51bGw9PT1pLnByZXZQYWdlPzA6ZX0pfWxhenlMb2FkTW9kZXJuKCl7Y29uc3R7aW5zdGFuY2U6dCxwYW56b29tOmV9PXRoaXM7aWYoIWUpcmV0dXJuO2NvbnN0IGk9LTEqZS5jdXJyZW50LmV8fDA7bGV0IHM9dGhpcy5nZXRNb2Rlcm5UaHVtYlBvcyh0LnBhZ2UpO2lmKGUuc3RhdGUhPT1nLkluaXR8fDA9PT1zKWZvcihjb25zdCBzIG9mIHQuc2xpZGVzfHxbXSl7Y29uc3QgdD1zLnRodW1iU2xpZGVFbDtpZighdCljb250aW51ZTtjb25zdCBvPXQucXVlcnlTZWxlY3RvcihcImltZ1tkYXRhLWxhenktc3JjXVwiKSxhPXMuaW5kZXgscj10aGlzLmdldE1vZGVyblRodW1iUG9zKGEpLGw9aS0uNSplLmNvbnRhaW5lclJlY3QuaW5uZXJXaWR0aCxjPWwrZS5jb250YWluZXJSZWN0LmlubmVyV2lkdGg7aWYoIW98fHI8bHx8cj5jKWNvbnRpbnVlO2xldCBoPW8uZGF0YXNldC5sYXp5U3JjO2lmKCFofHwhaC5sZW5ndGgpY29udGludWU7aWYoZGVsZXRlIG8uZGF0YXNldC5sYXp5U3JjLG8uc3JjPWgsby5jb21wbGV0ZSljb250aW51ZTtTKHQsdGhpcy5jbihcImlzTG9hZGluZ1wiKSk7Y29uc3QgZD1uKHcpO3QuYXBwZW5kQ2hpbGQoZCksby5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCgoKT0+e3Qub2Zmc2V0UGFyZW50JiYodC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY24oXCJpc0xvYWRpbmdcIikpLGQucmVtb3ZlKCkpfSksITEpfX1yZXNpemVNb2Rlcm5TbGlkZSh0KXtpZihcIm1vZGVyblwiIT09dGhpcy50eXBlKXJldHVybjtpZighdC50aHVtYlNsaWRlRWwpcmV0dXJuO2NvbnN0IGU9dC50aHVtYkNsaXBXaWR0aCYmdC50aHVtYkhlaWdodD9NYXRoLnJvdW5kKHRoaXMudGh1bWJIZWlnaHQqKHQudGh1bWJDbGlwV2lkdGgvdC50aHVtYkhlaWdodCkpOnRoaXMudGh1bWJXaWR0aDt0LnRodW1iV2lkdGg9ZX1nZXRNb2Rlcm5UaHVtYlBvcyhlKXtjb25zdCBpPXRoaXMuaW5zdGFuY2Uuc2xpZGVzW2VdLG49dGhpcy5wYW56b29tO2lmKCFufHwhbi5jb250ZW50UmVjdC5maXRXaWR0aClyZXR1cm4gMDtsZXQgcz1uLmNvbnRhaW5lclJlY3QuaW5uZXJXaWR0aCxvPW4uY29udGVudFJlY3Qud2lkdGg7Mj09PXRoaXMuaW5zdGFuY2Uuc2xpZGVzLmxlbmd0aCYmKGUtPTEsbz0yKnRoaXMudGh1bWJDbGlwV2lkdGgpO2xldCBhPWUqKHRoaXMudGh1bWJDbGlwV2lkdGgrdGhpcy50aHVtYkdhcCkrdGhpcy50aHVtYkV4dHJhR2FwKy41KihpLnRodW1iV2lkdGh8fDApO3JldHVybiBhLT1vPnM/LjUqczouNSpvLHQoYXx8MCwxKX1idWlsZCgpe2NvbnN0IHQ9dGhpcy5pbnN0YW5jZSxlPXQuY29udGFpbmVyLGk9dGhpcy5vcHRpb24oXCJtaW5Db3VudFwiKXx8MDtpZihpKXtsZXQgZT0wO2Zvcihjb25zdCBpIG9mIHQuc2xpZGVzfHxbXSlpLnRodW1iU3JjJiZlKys7aWYoZTxpKXJldHVybiB0aGlzLmNsZWFudXAoKSx2b2lkKHRoaXMuc3RhdGU9YXQuRGlzYWJsZWQpfWNvbnN0IG49dGhpcy5vcHRpb24oXCJ0eXBlXCIpO2lmKFtcIm1vZGVyblwiLFwiY2xhc3NpY1wiXS5pbmRleE9mKG4pPDApcmV0dXJuIHZvaWQodGhpcy5zdGF0ZT1hdC5EaXNhYmxlZCk7dGhpcy50eXBlPW47Y29uc3Qgcz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1Mocyx0aGlzLmNuKFwiY29udGFpbmVyXCIpKSxTKHMsYGlzLSR7bn1gKTtjb25zdCBvPXRoaXMub3B0aW9uKFwicGFyZW50RWxcIik7bz9vLmFwcGVuZENoaWxkKHMpOmUuYWZ0ZXIocyksdGhpcy5jb250YWluZXI9cyxTKGUsdGhpcy5jbihcImhhc1RodW1ic1wiKSk7Y29uc3QgYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1MoYSx0aGlzLmNuKFwidHJhY2tcIikpLHMuYXBwZW5kQ2hpbGQoYSksdGhpcy50cmFjaz1hLFwiY2xhc3NpY1wiPT09bj90aGlzLmJ1aWxkQ2xhc3NpYygpOnRoaXMuYnVpbGRNb2Rlcm4oKSx0aGlzLnN0YXRlPWF0LlJlYWR5LHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKGU9PntzZXRUaW1lb3V0KCgoKT0+e3ZhciBlO251bGw9PT0oZT1udWxsPT1zP3ZvaWQgMDpzLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNhcm91c2VsLWluZGV4PVwiJHt0LnBhZ2V9XCJdYCkpfHx2b2lkIDA9PT1lfHxlLmZvY3VzKCl9KSwxMDApfSkpfWNsZWFudXAoKXt0aGlzLmNhcm91c2VsJiZ0aGlzLmNhcm91c2VsLmRlc3Ryb3koKSx0aGlzLmNhcm91c2VsPW51bGwsdGhpcy5wYW56b29tJiZ0aGlzLnBhbnpvb20uZGVzdHJveSgpLHRoaXMucGFuem9vbT1udWxsLHRoaXMuY29udGFpbmVyJiZ0aGlzLmNvbnRhaW5lci5yZW1vdmUoKSx0aGlzLmNvbnRhaW5lcj1udWxsLHRoaXMudHJhY2s9bnVsbCx0aGlzLnN0YXRlPWF0LkluaXQsRSh0aGlzLmluc3RhbmNlLmNvbnRhaW5lcix0aGlzLmNuKFwiaGFzVGh1bWJzXCIpKX1hdHRhY2goKXtjb25zdHtpbnN0YW5jZTp0fT10aGlzO3Qub24oXCJpbml0U2xpZGVcIix0aGlzLm9uSW5pdFNsaWRlKSx0LnN0YXRlPT09TC5Jbml0P3Qub24oXCJpbml0U2xpZGVzXCIsdGhpcy5vbkluaXRTbGlkZXMpOnRoaXMub25Jbml0U2xpZGVzKCksdC5vbihcIlBhbnpvb20uYWZ0ZXJUcmFuc2Zvcm1cIix0aGlzLm9uVHJhbnNmb3JtTSksdC5vbihcIlBhbnpvb20ucmVmcmVzaFwiLHRoaXMub25SZWZyZXNoTSksdC5vbihcImNoYW5nZVwiLHRoaXMub25DaGFuZ2VNKX1kZXRhY2goKXtjb25zdHtpbnN0YW5jZTp0fT10aGlzO3Qub2ZmKFwiaW5pdFNsaWRlXCIsdGhpcy5vbkluaXRTbGlkZSksdC5vZmYoXCJpbml0U2xpZGVzXCIsdGhpcy5vbkluaXRTbGlkZXMpLHQub2ZmKFwiUGFuem9vbS5hZnRlclRyYW5zZm9ybVwiLHRoaXMub25UcmFuc2Zvcm1NKSx0Lm9mZihcIlBhbnpvb20ucmVmcmVzaFwiLHRoaXMub25SZWZyZXNoTSksdC5vZmYoXCJjaGFuZ2VcIix0aGlzLm9uQ2hhbmdlTSksdGhpcy5jbGVhbnVwKCl9fTtPYmplY3QuZGVmaW5lUHJvcGVydHkocnQsXCJkZWZhdWx0c1wiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpvdH0pO2NvbnN0IGx0PU9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxvdCkse2tleTpcInRcIixzaG93T25TdGFydDohMCxwYXJlbnRFbDpudWxsfSk7Y2xhc3MgY3QgZXh0ZW5kcyBJe2NvbnN0cnVjdG9yKCl7c3VwZXIoLi4uYXJndW1lbnRzKSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInJlZlwiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpudWxsfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJoaWRkZW5cIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6ITF9KX1nZXQgaXNFbmFibGVkKCl7Y29uc3QgdD10aGlzLnJlZjtyZXR1cm4gdCYmdC5zdGF0ZSE9PWF0LkRpc2FibGVkfWdldCBpc0hpZGRlbigpe3JldHVybiB0aGlzLmhpZGRlbn1vbkluaXQoKXtjb25zdCB0PXRoaXMuaW5zdGFuY2UsZT10LmNhcm91c2VsO2lmKHRoaXMucmVmfHwhZSlyZXR1cm47Y29uc3QgaT10aGlzLm9wdGlvbihcInBhcmVudEVsXCIpfHx0LmZvb3Rlcnx8dC5jb250YWluZXI7aSYmKGUub3B0aW9ucy5UaHVtYnM9dSh7fSx0aGlzLm9wdGlvbnMse3BhcmVudEVsOmksY2xhc3Nlczp7Y29udGFpbmVyOlwiZi10aHVtYnMgZmFuY3lib3hfX3RodW1ic1wifSxDYXJvdXNlbDp7U3luYzp7ZnJpY3Rpb246dC5vcHRpb24oXCJDYXJvdXNlbC5mcmljdGlvblwiKX0sb246e2NsaWNrOih0LGUpPT57ZS5zdG9wUHJvcGFnYXRpb24oKX19fSxvbjp7cmVhZHk6dD0+e2NvbnN0IGU9dC5jb250YWluZXI7ZSYmdGhpcy5oaWRkZW4mJih0aGlzLnJlZnJlc2goKSxlLnN0eWxlLnRyYW5zaXRpb249XCJub25lXCIsdGhpcy5oaWRlKCksZS5vZmZzZXRIZWlnaHQscXVldWVNaWNyb3Rhc2soKCgpPT57ZS5zdHlsZS50cmFuc2l0aW9uPVwiXCIsdGhpcy5zaG93KCl9KSkpfX19KSxlLmF0dGFjaFBsdWdpbnMoe1RodW1iczpydH0pLHRoaXMucmVmPWUucGx1Z2lucy5UaHVtYnMsdGhpcy5vcHRpb24oXCJzaG93T25TdGFydFwiKXx8KHRoaXMucmVmLnN0YXRlPWF0LkhpZGRlbix0aGlzLmhpZGRlbj0hMCkpfW9uUmVzaXplKCl7dmFyIHQ7Y29uc3QgZT1udWxsPT09KHQ9dGhpcy5yZWYpfHx2b2lkIDA9PT10P3ZvaWQgMDp0LmNvbnRhaW5lcjtlJiYoZS5zdHlsZS5tYXhIZWlnaHQ9XCJcIil9b25LZXlkb3duKHQsZSl7Y29uc3QgaT10aGlzLm9wdGlvbihcImtleVwiKTtpJiZpPT09ZSYmdGhpcy50b2dnbGUoKX10b2dnbGUoKXtjb25zdCB0PXRoaXMucmVmO3QmJnQuc3RhdGUhPT1hdC5EaXNhYmxlZCYmKHQuc3RhdGUhPT1hdC5IaWRkZW4/dGhpcy5oaWRkZW4/dGhpcy5zaG93KCk6dGhpcy5oaWRlKCk6dC5idWlsZCgpKX1zaG93KCl7Y29uc3QgdD10aGlzLnJlZixlPXQmJnQuc3RhdGUhPT1hdC5EaXNhYmxlZCYmdC5jb250YWluZXI7ZSYmKHRoaXMucmVmcmVzaCgpLGUub2Zmc2V0SGVpZ2h0LGUucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiksZS5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtaGlkZGVuXCIpLHRoaXMuaGlkZGVuPSExKX1oaWRlKCl7Y29uc3QgdD10aGlzLnJlZixlPXQmJnQuY29udGFpbmVyO2UmJih0aGlzLnJlZnJlc2goKSxlLm9mZnNldEhlaWdodCxlLmNsYXNzTGlzdC5hZGQoXCJpcy1oaWRkZW5cIiksZS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLFwidHJ1ZVwiKSksdGhpcy5oaWRkZW49ITB9cmVmcmVzaCgpe2NvbnN0IHQ9dGhpcy5yZWY7aWYoIXR8fHQuc3RhdGU9PT1hdC5EaXNhYmxlZClyZXR1cm47Y29uc3QgZT10LmNvbnRhaW5lcixpPShudWxsPT1lP3ZvaWQgMDplLmZpcnN0Q2hpbGQpfHxudWxsO2UmJmkmJmkuY2hpbGROb2Rlcy5sZW5ndGgmJihlLnN0eWxlLm1heEhlaWdodD1gJHtpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodH1weGApfWF0dGFjaCgpe3RoaXMuaW5zdGFuY2Uuc3RhdGU9PT1aLkluaXQ/dGhpcy5pbnN0YW5jZS5vbihcIkNhcm91c2VsLmluaXRcIix0aGlzLm9uSW5pdCk6dGhpcy5vbkluaXQoKSx0aGlzLmluc3RhbmNlLm9uKFwicmVzaXplXCIsdGhpcy5vblJlc2l6ZSksdGhpcy5pbnN0YW5jZS5vbihcImtleWRvd25cIix0aGlzLm9uS2V5ZG93bil9ZGV0YWNoKCl7dmFyIHQ7dGhpcy5pbnN0YW5jZS5vZmYoXCJDYXJvdXNlbC5pbml0XCIsdGhpcy5vbkluaXQpLHRoaXMuaW5zdGFuY2Uub2ZmKFwicmVzaXplXCIsdGhpcy5vblJlc2l6ZSksdGhpcy5pbnN0YW5jZS5vZmYoXCJrZXlkb3duXCIsdGhpcy5vbktleWRvd24pLG51bGw9PT0odD10aGlzLmluc3RhbmNlLmNhcm91c2VsKXx8dm9pZCAwPT09dHx8dC5kZXRhY2hQbHVnaW5zKFtcIlRodW1ic1wiXSksdGhpcy5yZWY9bnVsbH19T2JqZWN0LmRlZmluZVByb3BlcnR5KGN0LFwiZGVmYXVsdHNcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6bHR9KTtjb25zdCBodD17cGFuTGVmdDp7aWNvbjonPHN2Zz48cGF0aCBkPVwiTTUgMTJoMTRNNSAxMmw2IDZNNSAxMmw2LTZcIi8+PC9zdmc+JyxjaGFuZ2U6e3Bhblg6LTEwMH19LHBhblJpZ2h0OntpY29uOic8c3ZnPjxwYXRoIGQ9XCJNNSAxMmgxNE0xMyAxOGw2LTZNMTMgNmw2IDZcIi8+PC9zdmc+JyxjaGFuZ2U6e3Bhblg6MTAwfX0scGFuVXA6e2ljb246Jzxzdmc+PHBhdGggZD1cIk0xMiA1djE0TTE4IDExbC02LTZNNiAxMWw2LTZcIi8+PC9zdmc+JyxjaGFuZ2U6e3Bhblk6LTEwMH19LHBhbkRvd246e2ljb246Jzxzdmc+PHBhdGggZD1cIk0xMiA1djE0TTE4IDEzbC02IDZNNiAxM2w2IDZcIi8+PC9zdmc+JyxjaGFuZ2U6e3Bhblk6MTAwfX0sem9vbUluOntpY29uOic8c3ZnPjxjaXJjbGUgY3g9XCIxMVwiIGN5PVwiMTFcIiByPVwiNy41XCIvPjxwYXRoIGQ9XCJtMjEgMjEtNC4zNS00LjM1TTExIDh2Nk04IDExaDZcIi8+PC9zdmc+JyxhY3Rpb246XCJ6b29tSW5cIn0sem9vbU91dDp7aWNvbjonPHN2Zz48Y2lyY2xlIGN4PVwiMTFcIiBjeT1cIjExXCIgcj1cIjcuNVwiLz48cGF0aCBkPVwibTIxIDIxLTQuMzUtNC4zNU04IDExaDZcIi8+PC9zdmc+JyxhY3Rpb246XCJ6b29tT3V0XCJ9LHRvZ2dsZTF0bzE6e2ljb246Jzxzdmc+PHBhdGggZD1cIk0zLjUxIDMuMDdjNS43NC4wMiAxMS40OC0uMDIgMTcuMjIuMDIgMS4zNy4xIDIuMzQgMS42NCAyLjE4IDMuMTMgMCA0LjA4LjAyIDguMTYgMCAxMi4yMy0uMSAxLjU0LTEuNDcgMi42NC0yLjc5IDIuNDYtNS42MS0uMDEtMTEuMjQuMDItMTYuODYtLjAxLTEuMzYtLjEyLTIuMzMtMS42NS0yLjE3LTMuMTQgMC00LjA3LS4wMi04LjE2IDAtMTIuMjMuMS0xLjM2IDEuMjItMi40OCAyLjQyLTIuNDZaXCIvPjxwYXRoIGQ9XCJNNS42NSA4LjU0aDEuNDl2Ni45Mm04Ljk0LTYuOTJoMS40OXY2LjkyTTExLjUgOS40di4wMm0wIDUuMTh2MFwiLz48L3N2Zz4nLGFjdGlvbjpcInRvZ2dsZVpvb21cIn0sdG9nZ2xlWm9vbTp7aWNvbjonPHN2Zz48Zz48bGluZSB4MT1cIjExXCIgeTE9XCI4XCIgeDI9XCIxMVwiIHkyPVwiMTRcIj48L2xpbmU+PC9nPjxjaXJjbGUgY3g9XCIxMVwiIGN5PVwiMTFcIiByPVwiNy41XCIvPjxwYXRoIGQ9XCJtMjEgMjEtNC4zNS00LjM1TTggMTFoNlwiLz48L3N2Zz4nLGFjdGlvbjpcInRvZ2dsZVpvb21cIn0saXRlcmF0ZVpvb206e2ljb246Jzxzdmc+PGc+PGxpbmUgeDE9XCIxMVwiIHkxPVwiOFwiIHgyPVwiMTFcIiB5Mj1cIjE0XCI+PC9saW5lPjwvZz48Y2lyY2xlIGN4PVwiMTFcIiBjeT1cIjExXCIgcj1cIjcuNVwiLz48cGF0aCBkPVwibTIxIDIxLTQuMzUtNC4zNU04IDExaDZcIi8+PC9zdmc+JyxhY3Rpb246XCJpdGVyYXRlWm9vbVwifSxyb3RhdGVDQ1c6e2ljb246Jzxzdmc+PHBhdGggZD1cIk0xNSA0LjU1YTggOCAwIDAgMC02IDE0LjlNOSAxNXY1SDRNMTguMzcgNy4xNnYuMDFNMTMgMTkuOTR2LjAxTTE2Ljg0IDE4LjM3di4wMU0xOS4zNyAxNS4xdi4wMU0xOS45NCAxMXYuMDFcIi8+PC9zdmc+JyxhY3Rpb246XCJyb3RhdGVDQ1dcIn0scm90YXRlQ1c6e2ljb246Jzxzdmc+PHBhdGggZD1cIk05IDQuNTVhOCA4IDAgMCAxIDYgMTQuOU0xNSAxNXY1aDVNNS42MyA3LjE2di4wMU00LjA2IDExdi4wMU00LjYzIDE1LjF2LjAxTTcuMTYgMTguMzd2LjAxTTExIDE5Ljk0di4wMVwiLz48L3N2Zz4nLGFjdGlvbjpcInJvdGF0ZUNXXCJ9LGZsaXBYOntpY29uOic8c3ZnIHN0eWxlPVwic3Ryb2tlLXdpZHRoOiAxLjNcIj48cGF0aCBkPVwiTTEyIDN2MThNMTYgN3YxMGg1TDE2IDdNOCA3djEwSDNMOCA3XCIvPjwvc3ZnPicsYWN0aW9uOlwiZmxpcFhcIn0sZmxpcFk6e2ljb246Jzxzdmcgc3R5bGU9XCJzdHJva2Utd2lkdGg6IDEuM1wiPjxwYXRoIGQ9XCJNMyAxMmgxOE03IDE2aDEwTDcgMjF2LTVNNyA4aDEwTDcgM3Y1XCIvPjwvc3ZnPicsYWN0aW9uOlwiZmxpcFlcIn0sZml0WDp7aWNvbjonPHN2Zz48cGF0aCBkPVwiTTQgMTJWNmEyIDIgMCAwIDEgMi0yaDEyYTIgMiAwIDAgMSAyIDJ2Nk0xMCAxOEgzTTIxIDE4aC03TTYgMTVsLTMgMyAzIDNNMTggMTVsMyAzLTMgM1wiLz48L3N2Zz4nLGFjdGlvbjpcImZpdFhcIn0sZml0WTp7aWNvbjonPHN2Zz48cGF0aCBkPVwiTTEyIDIwSDZhMiAyIDAgMCAxLTItMlY2YTIgMiAwIDAgMSAyLTJoNk0xOCAxNHY3TTE4IDN2N00xNSAxOGwzIDMgMy0zTTE1IDZsMy0zIDMgM1wiLz48L3N2Zz4nLGFjdGlvbjpcImZpdFlcIn0scmVzZXQ6e2ljb246Jzxzdmc+PHBhdGggZD1cIk0yMCAxMUE4LjEgOC4xIDAgMCAwIDQuNSA5TTQgNXY0aDRNNCAxM2E4LjEgOC4xIDAgMCAwIDE1LjUgMm0uNSA0di00aC00XCIvPjwvc3ZnPicsYWN0aW9uOlwicmVzZXRcIn0sdG9nZ2xlRlM6e2ljb246Jzxzdmc+PGc+PHBhdGggZD1cIk0xNC41IDkuNSAyMSAzbTAgMGgtNm02IDB2Nk0zIDIxbDYuNS02LjVNMyAyMXYtNm0wIDZoNlwiLz48L2c+PGc+PHBhdGggZD1cIm0xNCAxMCA3LTdtLTcgN2g2bS02IDBWNE0zIDIxbDctN20wIDB2Nm0wLTZINFwiLz48L2c+PC9zdmc+JyxhY3Rpb246XCJ0b2dnbGVGU1wifX07dmFyIGR0OyFmdW5jdGlvbih0KXt0W3QuSW5pdD0wXT1cIkluaXRcIix0W3QuUmVhZHk9MV09XCJSZWFkeVwiLHRbdC5EaXNhYmxlZD0yXT1cIkRpc2FibGVkXCJ9KGR0fHwoZHQ9e30pKTtjb25zdCB1dD17YWJzb2x1dGU6XCJhdXRvXCIsZGlzcGxheTp7bGVmdDpbXCJpbmZvYmFyXCJdLG1pZGRsZTpbXSxyaWdodDpbXCJpdGVyYXRlWm9vbVwiLFwic2xpZGVzaG93XCIsXCJmdWxsc2NyZWVuXCIsXCJ0aHVtYnNcIixcImNsb3NlXCJdfSxlbmFibGVkOlwiYXV0b1wiLGl0ZW1zOntpbmZvYmFyOnt0cGw6JzxkaXYgY2xhc3M9XCJmYW5jeWJveF9faW5mb2JhclwiIHRhYmluZGV4PVwiLTFcIj48c3BhbiBkYXRhLWZhbmN5Ym94LWN1cnJlbnQtaW5kZXg+PC9zcGFuPi88c3BhbiBkYXRhLWZhbmN5Ym94LWNvdW50Pjwvc3Bhbj48L2Rpdj4nfSxkb3dubG9hZDp7dHBsOic8YSBjbGFzcz1cImYtYnV0dG9uXCIgdGl0bGU9XCJ7e0RPV05MT0FEfX1cIiBkYXRhLWZhbmN5Ym94LWRvd25sb2FkIGhyZWY9XCJqYXZhc3JpcHQ6O1wiPjxzdmc+PHBhdGggZD1cIk00IDE3djJhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0ydi0yTTcgMTFsNSA1IDUtNU0xMiA0djEyXCIvPjwvc3ZnPjwvYT4nfSxwcmV2Ont0cGw6JzxidXR0b24gY2xhc3M9XCJmLWJ1dHRvblwiIHRpdGxlPVwie3tQUkVWfX1cIiBkYXRhLWZhbmN5Ym94LXByZXY+PHN2Zz48cGF0aCBkPVwibTE1IDYtNiA2IDYgNlwiLz48L3N2Zz48L2J1dHRvbj4nfSxuZXh0Ont0cGw6JzxidXR0b24gY2xhc3M9XCJmLWJ1dHRvblwiIHRpdGxlPVwie3tORVhUfX1cIiBkYXRhLWZhbmN5Ym94LW5leHQ+PHN2Zz48cGF0aCBkPVwibTkgNiA2IDYtNiA2XCIvPjwvc3ZnPjwvYnV0dG9uPid9LHNsaWRlc2hvdzp7dHBsOic8YnV0dG9uIGNsYXNzPVwiZi1idXR0b25cIiB0aXRsZT1cInt7VE9HR0xFX1NMSURFU0hPV319XCIgZGF0YS1mYW5jeWJveC10b2dnbGUtc2xpZGVzaG93Pjxzdmc+PGc+PHBhdGggZD1cIk04IDR2MTZsMTMgLTh6XCI+PC9wYXRoPjwvZz48Zz48cGF0aCBkPVwiTTggNHYxNU0xNyA0djE1XCIvPjwvZz48L3N2Zz48L2J1dHRvbj4nfSxmdWxsc2NyZWVuOnt0cGw6JzxidXR0b24gY2xhc3M9XCJmLWJ1dHRvblwiIHRpdGxlPVwie3tUT0dHTEVfRlVMTFNDUkVFTn19XCIgZGF0YS1mYW5jeWJveC10b2dnbGUtZnVsbHNjcmVlbj48c3ZnPjxnPjxwYXRoIGQ9XCJNNCA4VjZhMiAyIDAgMCAxIDItMmgyTTQgMTZ2MmEyIDIgMCAwIDAgMiAyaDJNMTYgNGgyYTIgMiAwIDAgMSAyIDJ2Mk0xNiAyMGgyYTIgMiAwIDAgMCAyLTJ2LTJcIi8+PC9nPjxnPjxwYXRoIGQ9XCJNMTUgMTl2LTJhMiAyIDAgMCAxIDItMmgyTTE1IDV2MmEyIDIgMCAwIDAgMiAyaDJNNSAxNWgyYTIgMiAwIDAgMSAyIDJ2Mk01IDloMmEyIDIgMCAwIDAgMi0yVjVcIi8+PC9nPjwvc3ZnPjwvYnV0dG9uPid9LHRodW1iczp7dHBsOic8YnV0dG9uIGNsYXNzPVwiZi1idXR0b25cIiB0aXRsZT1cInt7VE9HR0xFX1RIVU1CU319XCIgZGF0YS1mYW5jeWJveC10b2dnbGUtdGh1bWJzPjxzdmc+PGNpcmNsZSBjeD1cIjUuNVwiIGN5PVwiNS41XCIgcj1cIjFcIi8+PGNpcmNsZSBjeD1cIjEyXCIgY3k9XCI1LjVcIiByPVwiMVwiLz48Y2lyY2xlIGN4PVwiMTguNVwiIGN5PVwiNS41XCIgcj1cIjFcIi8+PGNpcmNsZSBjeD1cIjUuNVwiIGN5PVwiMTJcIiByPVwiMVwiLz48Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjFcIi8+PGNpcmNsZSBjeD1cIjE4LjVcIiBjeT1cIjEyXCIgcj1cIjFcIi8+PGNpcmNsZSBjeD1cIjUuNVwiIGN5PVwiMTguNVwiIHI9XCIxXCIvPjxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTguNVwiIHI9XCIxXCIvPjxjaXJjbGUgY3g9XCIxOC41XCIgY3k9XCIxOC41XCIgcj1cIjFcIi8+PC9zdmc+PC9idXR0b24+J30sY2xvc2U6e3RwbDonPGJ1dHRvbiBjbGFzcz1cImYtYnV0dG9uXCIgdGl0bGU9XCJ7e0NMT1NFfX1cIiBkYXRhLWZhbmN5Ym94LWNsb3NlPjxzdmc+PHBhdGggZD1cIm0xOS41IDQuNS0xNSAxNU00LjUgNC41bDE1IDE1XCIvPjwvc3ZnPjwvYnV0dG9uPid9fSxwYXJlbnRFbDpudWxsfSxwdD17dGFiaW5kZXg6XCItMVwiLHdpZHRoOlwiMjRcIixoZWlnaHQ6XCIyNFwiLHZpZXdCb3g6XCIwIDAgMjQgMjRcIix4bWxuczpcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJ9O2NsYXNzIGZ0IGV4dGVuZHMgSXtjb25zdHJ1Y3Rvcigpe3N1cGVyKC4uLmFyZ3VtZW50cyksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJzdGF0ZVwiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpkdC5Jbml0fSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJjb250YWluZXJcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6bnVsbH0pfW9uUmVhZHkodCl7dmFyIGU7aWYoIXQuY2Fyb3VzZWwpcmV0dXJuO2xldCBpPXRoaXMub3B0aW9uKFwiZGlzcGxheVwiKSxuPXRoaXMub3B0aW9uKFwiYWJzb2x1dGVcIikscz10aGlzLm9wdGlvbihcImVuYWJsZWRcIik7aWYoXCJhdXRvXCI9PT1zKXtjb25zdCB0PXRoaXMuaW5zdGFuY2UuY2Fyb3VzZWw7bGV0IGU9MDtpZih0KWZvcihjb25zdCBpIG9mIHQuc2xpZGVzKShpLnBhbnpvb218fFwiaW1hZ2VcIj09PWkudHlwZSkmJmUrKztlfHwocz0hMSl9c3x8KGk9dm9pZCAwKTtsZXQgbz0wO2NvbnN0IGE9e2xlZnQ6W10sbWlkZGxlOltdLHJpZ2h0OltdfTtpZihpKWZvcihjb25zdCB0IG9mW1wibGVmdFwiLFwibWlkZGxlXCIsXCJyaWdodFwiXSlmb3IoY29uc3QgbiBvZiBpW3RdKXtjb25zdCBpPXRoaXMuY3JlYXRlRWwobik7aSYmKG51bGw9PT0oZT1hW3RdKXx8dm9pZCAwPT09ZXx8ZS5wdXNoKGkpLG8rKyl9bGV0IHI9bnVsbDtpZihvJiYocj10aGlzLmNyZWF0ZUNvbnRhaW5lcigpKSxyKXtmb3IoY29uc3RbdCxlXW9mIE9iamVjdC5lbnRyaWVzKGEpKXtjb25zdCBpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7UyhpLFwiZmFuY3lib3hfX3Rvb2xiYXJfX2NvbHVtbiBpcy1cIit0KTtmb3IoY29uc3QgdCBvZiBlKWkuYXBwZW5kQ2hpbGQodCk7XCJhdXRvXCIhPT1ufHxcIm1pZGRsZVwiIT09dHx8ZS5sZW5ndGh8fChuPSEwKSxyLmFwcGVuZENoaWxkKGkpfSEwPT09biYmUyhyLFwiaXMtYWJzb2x1dGVcIiksdGhpcy5zdGF0ZT1kdC5SZWFkeSx0aGlzLm9uUmVmcmVzaCgpfWVsc2UgdGhpcy5zdGF0ZT1kdC5EaXNhYmxlZH1vbkNsaWNrKHQpe3ZhciBlLGk7Y29uc3Qgbj10aGlzLmluc3RhbmNlLHM9bi5nZXRTbGlkZSgpLG89bnVsbD09cz92b2lkIDA6cy5wYW56b29tLGE9dC50YXJnZXQscj1hJiZ4KGEpP2EuZGF0YXNldDpudWxsO2lmKCFyKXJldHVybjtpZih2b2lkIDAhPT1yLmZhbmN5Ym94VG9nZ2xlVGh1bWJzKXJldHVybiB0LnByZXZlbnREZWZhdWx0KCksdC5zdG9wUHJvcGFnYXRpb24oKSx2b2lkKG51bGw9PT0oZT1uLnBsdWdpbnMuVGh1bWJzKXx8dm9pZCAwPT09ZXx8ZS50b2dnbGUoKSk7aWYodm9pZCAwIT09ci5mYW5jeWJveFRvZ2dsZUZ1bGxzY3JlZW4pcmV0dXJuIHQucHJldmVudERlZmF1bHQoKSx0LnN0b3BQcm9wYWdhdGlvbigpLHZvaWQgdGhpcy5pbnN0YW5jZS50b2dnbGVGdWxsc2NyZWVuKCk7aWYodm9pZCAwIT09ci5mYW5jeWJveFRvZ2dsZVNsaWRlc2hvdyl7dC5wcmV2ZW50RGVmYXVsdCgpLHQuc3RvcFByb3BhZ2F0aW9uKCk7Y29uc3QgZT1udWxsPT09KGk9bi5jYXJvdXNlbCl8fHZvaWQgMD09PWk/dm9pZCAwOmkucGx1Z2lucy5BdXRvcGxheTtsZXQgcz1lLmlzQWN0aXZlO3JldHVybiBvJiZcIm1vdXNlbW92ZVwiPT09by5wYW5Nb2RlJiYhcyYmby5yZXNldCgpLHZvaWQocz9lLnN0b3AoKTplLnN0YXJ0KCkpfWNvbnN0IGw9ci5wYW56b29tQWN0aW9uLGM9ci5wYW56b29tQ2hhbmdlO2lmKChjfHxsKSYmKHQucHJldmVudERlZmF1bHQoKSx0LnN0b3BQcm9wYWdhdGlvbigpKSxjKXtsZXQgdD17fTt0cnl7dD1KU09OLnBhcnNlKGMpfWNhdGNoKHQpe31vJiZvLmFwcGx5Q2hhbmdlKHQpfWVsc2UgbCYmbyYmb1tsXSYmb1tsXSgpfW9uQ2hhbmdlKCl7dGhpcy5vblJlZnJlc2goKX1vblJlZnJlc2goKXtpZih0aGlzLmluc3RhbmNlLmlzQ2xvc2luZygpKXJldHVybjtjb25zdCB0PXRoaXMuY29udGFpbmVyO2lmKCF0KXJldHVybjtjb25zdCBlPXRoaXMuaW5zdGFuY2UuZ2V0U2xpZGUoKTtpZighZXx8ZS5zdGF0ZSE9PVYuUmVhZHkpcmV0dXJuO2NvbnN0IGk9ZSYmIWUuZXJyb3ImJmUucGFuem9vbTtmb3IoY29uc3QgZSBvZiB0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1wYW56b29tLWFjdGlvbl1cIikpaT8oZS5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKSxlLnJlbW92ZUF0dHJpYnV0ZShcInRhYmluZGV4XCIpKTooZS5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLFwiXCIpLGUuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIixcIi0xXCIpKTtsZXQgbj1pJiZpLmNhblpvb21JbigpLHM9aSYmaS5jYW5ab29tT3V0KCk7Zm9yKGNvbnN0IGUgb2YgdC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1wYW56b29tLWFjdGlvbj1cInpvb21JblwiXScpKW4/KGUucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIiksZS5yZW1vdmVBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKSk6KGUuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIixcIlwiKSxlLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsXCItMVwiKSk7Zm9yKGNvbnN0IGUgb2YgdC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1wYW56b29tLWFjdGlvbj1cInpvb21PdXRcIl0nKSlzPyhlLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpLGUucmVtb3ZlQXR0cmlidXRlKFwidGFiaW5kZXhcIikpOihlLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsXCJcIiksZS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLFwiLTFcIikpO2Zvcihjb25zdCBlIG9mIHQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcGFuem9vbS1hY3Rpb249XCJ0b2dnbGVab29tXCJdLFtkYXRhLXBhbnpvb20tYWN0aW9uPVwiaXRlcmF0ZVpvb21cIl0nKSl7c3x8bj8oZS5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKSxlLnJlbW92ZUF0dHJpYnV0ZShcInRhYmluZGV4XCIpKTooZS5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLFwiXCIpLGUuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIixcIi0xXCIpKTtjb25zdCB0PWUucXVlcnlTZWxlY3RvcihcImdcIik7dCYmKHQuc3R5bGUuZGlzcGxheT1uP1wiXCI6XCJub25lXCIpfX1vbkRvbmUodCxlKXt2YXIgaTtudWxsPT09KGk9ZS5wYW56b29tKXx8dm9pZCAwPT09aXx8aS5vbihcImFmdGVyVHJhbnNmb3JtXCIsKCgpPT57dGhpcy5pbnN0YW5jZS5pc0N1cnJlbnRTbGlkZShlKSYmdGhpcy5vblJlZnJlc2goKX0pKSx0aGlzLmluc3RhbmNlLmlzQ3VycmVudFNsaWRlKGUpJiZ0aGlzLm9uUmVmcmVzaCgpfWNyZWF0ZUNvbnRhaW5lcigpe2NvbnN0IHQ9dGhpcy5pbnN0YW5jZS5jb250YWluZXI7aWYoIXQpcmV0dXJuIG51bGw7Y29uc3QgZT10aGlzLm9wdGlvbihcInBhcmVudEVsXCIpfHx0LGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtyZXR1cm4gUyhpLFwiZmFuY3lib3hfX3Rvb2xiYXJcIiksZS5wcmVwZW5kKGkpLGkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdGhpcy5vbkNsaWNrLHtwYXNzaXZlOiExLGNhcHR1cmU6ITB9KSx0JiZTKHQsXCJoYXMtdG9vbGJhclwiKSx0aGlzLmNvbnRhaW5lcj1pLGl9Y3JlYXRlRWwodCl7dmFyIGU7Y29uc3QgaT10aGlzLmluc3RhbmNlLmNhcm91c2VsO2lmKCFpKXJldHVybiBudWxsO2lmKFwidG9nZ2xlRlNcIj09PXQpcmV0dXJuIG51bGw7aWYoXCJmdWxsc2NyZWVuXCI9PT10JiYhdGhpcy5pbnN0YW5jZS5mc0FQSSlyZXR1cm4gbnVsbDtsZXQgcz1udWxsO2NvbnN0IG89aS5zbGlkZXMubGVuZ3RofHwwO2xldCBhPTAscj0wO2Zvcihjb25zdCB0IG9mIGkuc2xpZGVzKSh0LnBhbnpvb218fFwiaW1hZ2VcIj09PXQudHlwZSkmJmErKywoXCJpbWFnZVwiPT09dC50eXBlfHx0LmRvd25sb2FkU3JjKSYmcisrO2lmKG88MiYmW1wiaW5mb2JhclwiLFwicHJldlwiLFwibmV4dFwiXS5pbmNsdWRlcyh0KSlyZXR1cm4gcztpZih2b2lkIDAhPT1odFt0XSYmIWEpcmV0dXJuIG51bGw7aWYoXCJkb3dubG9hZFwiPT09dCYmIXIpcmV0dXJuIG51bGw7aWYoXCJ0aHVtYnNcIj09PXQpe2NvbnN0IHQ9dGhpcy5pbnN0YW5jZS5wbHVnaW5zLlRodW1icztpZighdHx8IXQuaXNFbmFibGVkKXJldHVybiBudWxsfWlmKFwic2xpZGVzaG93XCI9PT10KXtpZighKG51bGw9PT0oZT10aGlzLmluc3RhbmNlLmNhcm91c2VsKXx8dm9pZCAwPT09ZT92b2lkIDA6ZS5wbHVnaW5zLkF1dG9wbGF5KXx8bzwyKXJldHVybiBudWxsfWlmKHZvaWQgMCE9PWh0W3RdKXtjb25zdCBlPWh0W3RdO3M9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKSxzLnNldEF0dHJpYnV0ZShcInRpdGxlXCIsdGhpcy5pbnN0YW5jZS5sb2NhbGl6ZShge3ske3QudG9VcHBlckNhc2UoKX19fWApKSxTKHMsXCJmLWJ1dHRvblwiKSxlLmFjdGlvbiYmKHMuZGF0YXNldC5wYW56b29tQWN0aW9uPWUuYWN0aW9uKSxlLmNoYW5nZSYmKHMuZGF0YXNldC5wYW56b29tQ2hhbmdlPUpTT04uc3RyaW5naWZ5KGUuY2hhbmdlKSkscy5hcHBlbmRDaGlsZChuKHRoaXMuaW5zdGFuY2UubG9jYWxpemUoZS5pY29uKSkpfWVsc2V7Y29uc3QgZT0odGhpcy5vcHRpb24oXCJpdGVtc1wiKXx8W10pW3RdO2UmJihzPW4odGhpcy5pbnN0YW5jZS5sb2NhbGl6ZShlLnRwbCkpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGUuY2xpY2smJnMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKHQ9Pnt0LnByZXZlbnREZWZhdWx0KCksdC5zdG9wUHJvcGFnYXRpb24oKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLmNsaWNrJiZlLmNsaWNrLmNhbGwodGhpcyx0aGlzLHQpfSkpKX1jb25zdCBsPW51bGw9PXM/dm9pZCAwOnMucXVlcnlTZWxlY3RvcihcInN2Z1wiKTtpZihsKWZvcihjb25zdFt0LGVdb2YgT2JqZWN0LmVudHJpZXMocHQpKWwuZ2V0QXR0cmlidXRlKHQpfHxsLnNldEF0dHJpYnV0ZSh0LFN0cmluZyhlKSk7cmV0dXJuIHN9cmVtb3ZlQ29udGFpbmVyKCl7Y29uc3QgdD10aGlzLmNvbnRhaW5lcjt0JiZ0LnJlbW92ZSgpLHRoaXMuY29udGFpbmVyPW51bGwsdGhpcy5zdGF0ZT1kdC5EaXNhYmxlZDtjb25zdCBlPXRoaXMuaW5zdGFuY2UuY29udGFpbmVyO2UmJkUoZSxcImhhcy10b29sYmFyXCIpfWF0dGFjaCgpe2NvbnN0IHQ9dGhpcyx7aW5zdGFuY2U6ZX09dDtlLm9uKFwiQ2Fyb3VzZWwuaW5pdFNsaWRlc1wiLHQub25SZWFkeSksZS5vbihcImRvbmVcIix0Lm9uRG9uZSksZS5vbihcInJldmVhbFwiLHQub25DaGFuZ2UpLGUub24oXCJDYXJvdXNlbC5jaGFuZ2VcIix0Lm9uQ2hhbmdlKSx0Lm9uUmVhZHkodC5pbnN0YW5jZSl9ZGV0YWNoKCl7Y29uc3QgdD10aGlzLHtpbnN0YW5jZTplfT10O2Uub2ZmKFwiQ2Fyb3VzZWwuaW5pdFNsaWRlc1wiLHQub25SZWFkeSksZS5vZmYoXCJkb25lXCIsdC5vbkRvbmUpLGUub2ZmKFwicmV2ZWFsXCIsdC5vbkNoYW5nZSksZS5vZmYoXCJDYXJvdXNlbC5jaGFuZ2VcIix0Lm9uQ2hhbmdlKSx0LnJlbW92ZUNvbnRhaW5lcigpfX1PYmplY3QuZGVmaW5lUHJvcGVydHkoZnQsXCJkZWZhdWx0c1wiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTp1dH0pO2NvbnN0IG10PXtIYXNoOlUsSHRtbDppdCxJbWFnZXM6SixTbGlkZXNob3c6c3QsVGh1bWJzOmN0LFRvb2xiYXI6ZnR9LGd0PWZ1bmN0aW9uKCl7dmFyIHQ9d2luZG93LmdldFNlbGVjdGlvbigpO3JldHVybiB0JiZcIlJhbmdlXCI9PT10LnR5cGV9O2xldCBidD1udWxsLHZ0PW51bGw7Y29uc3QgeXQ9bmV3IE1hcDtsZXQgd3Q9MDtjbGFzcyB4dCBleHRlbmRzIG17Z2V0IGlzSWRsZSgpe3JldHVybiB0aGlzLmlkbGV9Z2V0IGlzQ29tcGFjdCgpe3JldHVybiB0aGlzLm9wdGlvbihcImNvbXBhY3RcIil9Y29uc3RydWN0b3IodD1bXSxlPXt9LGk9e30pe3N1cGVyKGUpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwidXNlclNsaWRlc1wiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpbXX0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwidXNlclBsdWdpbnNcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6e319KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcImlkbGVcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6ITF9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcImlkbGVUaW1lclwiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpudWxsfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJjbGlja1RpbWVyXCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOm51bGx9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInB3dFwiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTowfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJpZ25vcmVGb2N1c0NoYW5nZVwiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTohMX0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwic3RhdGVcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6Wi5Jbml0fSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJpZFwiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTowfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJjb250YWluZXJcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6bnVsbH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiZm9vdGVyXCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOm51bGx9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcImNhcHRpb25cIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6bnVsbH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiY2Fyb3VzZWxcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6bnVsbH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwibGFzdEZvY3VzXCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOm51bGx9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInByZXZNb3VzZU1vdmVFdmVudFwiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTp2b2lkIDB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcImZzQVBJXCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOnZvaWQgMH0pLHRoaXMuZnNBUEk9KCgpPT57bGV0IHQsZT1cIlwiLGk9XCJcIixuPVwiXCI7cmV0dXJuIGRvY3VtZW50LmZ1bGxzY3JlZW5FbmFibGVkPyhlPVwicmVxdWVzdEZ1bGxzY3JlZW5cIixpPVwiZXhpdEZ1bGxzY3JlZW5cIixuPVwiZnVsbHNjcmVlbkVsZW1lbnRcIik6ZG9jdW1lbnQud2Via2l0RnVsbHNjcmVlbkVuYWJsZWQmJihlPVwid2Via2l0UmVxdWVzdEZ1bGxzY3JlZW5cIixpPVwid2Via2l0RXhpdEZ1bGxzY3JlZW5cIixuPVwid2Via2l0RnVsbHNjcmVlbkVsZW1lbnRcIiksZSYmKHQ9e3JlcXVlc3Q6ZnVuY3Rpb24odCl7cmV0dXJuXCJ3ZWJraXRSZXF1ZXN0RnVsbHNjcmVlblwiPT09ZT90W2VdKEVsZW1lbnQuQUxMT1dfS0VZQk9BUkRfSU5QVVQpOnRbZV0oKX0sZXhpdDpmdW5jdGlvbigpe3JldHVybiBkb2N1bWVudFtuXSYmZG9jdW1lbnRbaV0oKX0saXNGdWxsc2NyZWVuOmZ1bmN0aW9uKCl7cmV0dXJuIGRvY3VtZW50W25dfX0pLHR9KSgpLHRoaXMuaWQ9ZS5pZHx8Kyt3dCx5dC5zZXQodGhpcy5pZCx0aGlzKSx0aGlzLnVzZXJTbGlkZXM9dCx0aGlzLnVzZXJQbHVnaW5zPWkscXVldWVNaWNyb3Rhc2soKCgpPT57dGhpcy5pbml0KCl9KSl9aW5pdCgpe2lmKHRoaXMuc3RhdGU9PT1aLkRlc3Ryb3kpcmV0dXJuO3RoaXMuc3RhdGU9Wi5Jbml0LHRoaXMuYXR0YWNoUGx1Z2lucyhPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30seHQuUGx1Z2lucyksdGhpcy51c2VyUGx1Z2lucykpLHRoaXMuZW1pdChcImluaXRcIiksITA9PT10aGlzLm9wdGlvbihcImhpZGVTY3JvbGxiYXJcIikmJigoKT0+e2lmKCFXKXJldHVybjtjb25zdCB0PWRvY3VtZW50LmJvZHk7aWYodC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlLXNjcm9sbGJhclwiKSlyZXR1cm47Y29uc3QgZT13aW5kb3cuaW5uZXJXaWR0aC1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgsaT10LmN1cnJlbnRTdHlsZXx8d2luZG93LmdldENvbXB1dGVkU3R5bGUodCksbj1wYXJzZUZsb2F0KGkubWFyZ2luUmlnaHQpO2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tZmFuY3lib3gtc2Nyb2xsYmFyLWNvbXBlbnNhdGVcIixgJHtlfXB4YCksbiYmdC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tZmFuY3lib3gtYm9keS1tYXJnaW5cIixgJHtufXB4YCksdC5jbGFzc0xpc3QuYWRkKFwiaGlkZS1zY3JvbGxiYXJcIil9KSgpLHRoaXMuaW5pdExheW91dCgpO2NvbnN0IHQ9KCk9Pnt0aGlzLmluaXRDYXJvdXNlbCh0aGlzLnVzZXJTbGlkZXMpLHRoaXMuc3RhdGU9Wi5SZWFkeSx0aGlzLmF0dGFjaEV2ZW50cygpLHRoaXMuZW1pdChcInJlYWR5XCIpLHNldFRpbWVvdXQoKCgpPT57dGhpcy5jb250YWluZXImJnRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsXCJmYWxzZVwiKX0pLDE2KX07dGhpcy5vcHRpb24oXCJGdWxsc2NyZWVuLmF1dG9TdGFydFwiKSYmdGhpcy5mc0FQSSYmIXRoaXMuZnNBUEkuaXNGdWxsc2NyZWVuKCk/dGhpcy5mc0FQSS5yZXF1ZXN0KHRoaXMuY29udGFpbmVyKS50aGVuKCgoKT0+dCgpKSkuY2F0Y2goKCgpPT50KCkpKTp0KCl9aW5pdExheW91dCgpe3ZhciB0LGU7Y29uc3QgaT10aGlzLm9wdGlvbihcInBhcmVudEVsXCIpfHxkb2N1bWVudC5ib2R5LHM9bih0aGlzLmxvY2FsaXplKHRoaXMub3B0aW9uKFwidHBsLm1haW5cIil8fFwiXCIpKTtzJiYocy5zZXRBdHRyaWJ1dGUoXCJpZFwiLGBmYW5jeWJveC0ke3RoaXMuaWR9YCkscy5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsdGhpcy5sb2NhbGl6ZShcInt7TU9EQUx9fVwiKSkscy5jbGFzc0xpc3QudG9nZ2xlKFwiaXMtY29tcGFjdFwiLHRoaXMuaXNDb21wYWN0KSxTKHMsdGhpcy5vcHRpb24oXCJtYWluQ2xhc3NcIil8fFwiXCIpLHRoaXMuY29udGFpbmVyPXMsdGhpcy5mb290ZXI9cy5xdWVyeVNlbGVjdG9yKFwiLmZhbmN5Ym94X19mb290ZXJcIiksaS5hcHBlbmRDaGlsZChzKSxTKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcIndpdGgtZmFuY3lib3hcIiksYnQmJnZ0fHwoYnQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIiksUyhidCxcImZhbmN5Ym94LWZvY3VzLWd1YXJkXCIpLGJ0LnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsXCIwXCIpLGJ0LnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsXCJ0cnVlXCIpLGJ0LnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIixcIkZvY3VzIGd1YXJkXCIpLHZ0PWJ0LmNsb25lTm9kZSgpLG51bGw9PT0odD1zLnBhcmVudEVsZW1lbnQpfHx2b2lkIDA9PT10fHx0Lmluc2VydEJlZm9yZShidCxzKSxudWxsPT09KGU9cy5wYXJlbnRFbGVtZW50KXx8dm9pZCAwPT09ZXx8ZS5hcHBlbmQodnQpKSx0aGlzLm9wdGlvbihcImFuaW1hdGVkXCIpJiYoUyhzLFwiaXMtYW5pbWF0ZWRcIiksc2V0VGltZW91dCgoKCk9Pnt0aGlzLmlzQ2xvc2luZygpfHxFKHMsXCJpcy1hbmltYXRlZFwiKX0pLDM1MCkpLHRoaXMuZW1pdChcImluaXRMYXlvdXRcIikpfWluaXRDYXJvdXNlbCh0KXtjb25zdCBpPXRoaXMuY29udGFpbmVyO2lmKCFpKXJldHVybjtjb25zdCBuPWkucXVlcnlTZWxlY3RvcihcIi5mYW5jeWJveF9fY2Fyb3VzZWxcIik7aWYoIW4pcmV0dXJuO2NvbnN0IHM9dGhpcy5jYXJvdXNlbD1uZXcgXyhuLHUoe30se3NsaWRlczp0LHRyYW5zaXRpb246XCJmYWRlXCIsUGFuem9vbTp7bG9ja0F4aXM6dGhpcy5vcHRpb24oXCJkcmFnVG9DbG9zZVwiKT9cInh5XCI6XCJ4XCIsaW5maW5pdGU6ISF0aGlzLm9wdGlvbihcImRyYWdUb0Nsb3NlXCIpJiZcInlcIn0sRG90czohMSxOYXZpZ2F0aW9uOntjbGFzc2VzOntjb250YWluZXI6XCJmYW5jeWJveF9fbmF2XCIsYnV0dG9uOlwiZi1idXR0b25cIixpc05leHQ6XCJpcy1uZXh0XCIsaXNQcmV2OlwiaXMtcHJldlwifX0saW5pdGlhbFBhZ2U6dGhpcy5vcHRpb24oXCJzdGFydEluZGV4XCIpLGwxMG46dGhpcy5vcHRpb24oXCJsMTBuXCIpfSx0aGlzLm9wdGlvbihcIkNhcm91c2VsXCIpfHx7fSkpO3Mub24oXCIqXCIsKCh0LGUsLi4uaSk9Pnt0aGlzLmVtaXQoYENhcm91c2VsLiR7ZX1gLHQsLi4uaSl9KSkscy5vbihbXCJyZWFkeVwiLFwiY2hhbmdlXCJdLCgoKT0+e3ZhciB0O2NvbnN0IGU9dGhpcy5nZXRTbGlkZSgpO2UmJihudWxsPT09KHQ9ZS5wYW56b29tKXx8dm9pZCAwPT09dHx8dC51cGRhdGVDb250cm9scygpKSx0aGlzLm1hbmFnZUNhcHRpb24oZSl9KSkscy5vbihcInJlbW92ZVNsaWRlXCIsKCh0LGUpPT57ZS5jbG9zZUJ0bkVsJiZlLmNsb3NlQnRuRWwucmVtb3ZlKCksZS5jbG9zZUJ0bkVsPXZvaWQgMCxlLmNhcHRpb25FbCYmZS5jYXB0aW9uRWwucmVtb3ZlKCksZS5jYXB0aW9uRWw9dm9pZCAwLGUuc3Bpbm5lckVsJiZlLnNwaW5uZXJFbC5yZW1vdmUoKSxlLnNwaW5uZXJFbD12b2lkIDAsZS5zdGF0ZT12b2lkIDB9KSkscy5vbihcIlBhbnpvb20udG91Y2hTdGFydFwiLCgoKT0+e3RoaXMuaXNDb21wYWN0fHx0aGlzLmVuZElkbGUoKX0pKSxzLm9uKFwic2V0dGxlXCIsKCgpPT57dGhpcy5pZGxlVGltZXJ8fHRoaXMuaXNDb21wYWN0fHwhdGhpcy5vcHRpb24oXCJpZGxlXCIpfHx0aGlzLnNldElkbGUoKSx0aGlzLm9wdGlvbihcImF1dG9Gb2N1c1wiKSYmdGhpcy5jaGVja0ZvY3VzKCl9KSksdGhpcy5vcHRpb24oXCJkcmFnVG9DbG9zZVwiKSYmKHMub24oXCJQYW56b29tLmFmdGVyVHJhbnNmb3JtXCIsKCh0LGkpPT57Y29uc3Qgbj10aGlzLmdldFNsaWRlKCk7aWYobiYmZShuLmVsKSlyZXR1cm47Y29uc3Qgcz10aGlzLmNvbnRhaW5lcjtpZihzKXtjb25zdCB0PU1hdGguYWJzKGkuY3VycmVudC5mKSxlPXQ8MT9cIlwiOk1hdGgubWF4KC41LE1hdGgubWluKDEsMS10L2kuY29udGVudFJlY3QuZml0SGVpZ2h0KjEuNSkpO3Muc3R5bGUuc2V0UHJvcGVydHkoXCItLWZhbmN5Ym94LXRzXCIsZT9cIjBzXCI6XCJcIikscy5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tZmFuY3lib3gtb3BhY2l0eVwiLGUrXCJcIil9fSkpLHMub24oXCJQYW56b29tLnRvdWNoRW5kXCIsKCh0LGksbik9Pnt2YXIgcztjb25zdCBvPXRoaXMuZ2V0U2xpZGUoKTtpZihvJiZlKG8uZWwpKXJldHVybjtpZihpLmlzTW9iaWxlJiZkb2N1bWVudC5hY3RpdmVFbGVtZW50JiYtMSE9PVtcIlRFWFRBUkVBXCIsXCJJTlBVVFwiXS5pbmRleE9mKG51bGw9PT0ocz1kb2N1bWVudC5hY3RpdmVFbGVtZW50KXx8dm9pZCAwPT09cz92b2lkIDA6cy5ub2RlTmFtZSkpcmV0dXJuO2NvbnN0IGE9TWF0aC5hYnMoaS5kcmFnT2Zmc2V0LnkpO1wieVwiPT09aS5sb2NrZWRBeGlzJiYoYT49MjAwfHxhPj01MCYmaS5kcmFnT2Zmc2V0LnRpbWU8MzAwKSYmKG4mJm4uY2FuY2VsYWJsZSYmbi5wcmV2ZW50RGVmYXVsdCgpLHRoaXMuY2xvc2UobixcImYtdGhyb3dPdXRcIisoaS5jdXJyZW50LmY8MD9cIlVwXCI6XCJEb3duXCIpKSl9KSkpLHMub24oW1wiY2hhbmdlXCJdLCh0PT57dmFyIGU7bGV0IGk9bnVsbD09PShlPXRoaXMuZ2V0U2xpZGUoKSl8fHZvaWQgMD09PWU/dm9pZCAwOmUudHJpZ2dlckVsO2lmKGkpe2NvbnN0IGU9bmV3IEN1c3RvbUV2ZW50KFwic2xpZGVUb1wiLHtidWJibGVzOiEwLGNhbmNlbGFibGU6ITAsZGV0YWlsOnQucGFnZX0pO2kuZGlzcGF0Y2hFdmVudChlKX19KSkscy5vbihbXCJyZWZyZXNoXCIsXCJjaGFuZ2VcIl0sKHQ9Pntjb25zdCBlPXRoaXMuY29udGFpbmVyO2lmKCFlKXJldHVybjtmb3IoY29uc3QgaSBvZiBlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1mYW5jeWJveC1jdXJyZW50LWluZGV4XVwiKSlpLmlubmVySFRNTD10LnBhZ2UrMTtmb3IoY29uc3QgaSBvZiBlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1mYW5jeWJveC1jb3VudF1cIikpaS5pbm5lckhUTUw9dC5wYWdlcy5sZW5ndGg7aWYoIXQuaXNJbmZpbml0ZSl7Zm9yKGNvbnN0IGkgb2YgZS5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtZmFuY3lib3gtbmV4dF1cIikpdC5wYWdlPHQucGFnZXMubGVuZ3RoLTE/KGkucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIiksaS5yZW1vdmVBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKSk6KGkuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIixcIlwiKSxpLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsXCItMVwiKSk7Zm9yKGNvbnN0IGkgb2YgZS5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtZmFuY3lib3gtcHJldl1cIikpdC5wYWdlPjA/KGkucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIiksaS5yZW1vdmVBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKSk6KGkuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIixcIlwiKSxpLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsXCItMVwiKSl9Y29uc3QgaT10aGlzLmdldFNsaWRlKCk7aWYoIWkpcmV0dXJuO2xldCBuPWkuZG93bmxvYWRTcmN8fFwiXCI7bnx8XCJpbWFnZVwiIT09aS50eXBlfHxpLmVycm9yfHxcInN0cmluZ1wiIT10eXBlb2YgaS5zcmN8fChuPWkuc3JjKTtmb3IoY29uc3QgdCBvZiBlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1mYW5jeWJveC1kb3dubG9hZF1cIikpe2NvbnN0IGU9aS5kb3dubG9hZEZpbGVuYW1lO24/KHQucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIiksdC5yZW1vdmVBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKSx0LnNldEF0dHJpYnV0ZShcImhyZWZcIixuKSx0LnNldEF0dHJpYnV0ZShcImRvd25sb2FkXCIsZXx8biksdC5zZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIixcIl9ibGFua1wiKSk6KHQuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIixcIlwiKSx0LnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsXCItMVwiKSx0LnJlbW92ZUF0dHJpYnV0ZShcImhyZWZcIiksdC5yZW1vdmVBdHRyaWJ1dGUoXCJkb3dubG9hZFwiKSl9fSkpLHRoaXMuZW1pdChcImluaXRDYXJvdXNlbFwiKX1hdHRhY2hFdmVudHMoKXtjb25zdCB0PXRoaXMuY29udGFpbmVyO3QmJih0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHRoaXMub25DbGljayx7cGFzc2l2ZTohMSxjYXB0dXJlOiExfSksdC5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIix0aGlzLm9uV2hlZWwse3Bhc3NpdmU6ITEsY2FwdHVyZTohMX0pLGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsdGhpcy5vbktleWRvd24se3Bhc3NpdmU6ITEsY2FwdHVyZTohMH0pLGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsdGhpcy5vblZpc2liaWxpdHlDaGFuZ2UsITEpLGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIix0aGlzLm9uTW91c2Vtb3ZlKSx0aGlzLm9wdGlvbihcInRyYXBGb2N1c1wiKSYmZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsdGhpcy5vbkZvY3VzLCEwKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHRoaXMub25SZXNpemUpKX1kZXRhY2hFdmVudHMoKXtjb25zdCB0PXRoaXMuY29udGFpbmVyO3QmJihkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLHRoaXMub25LZXlkb3duLHtwYXNzaXZlOiExLGNhcHR1cmU6ITB9KSx0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLHRoaXMub25XaGVlbCx7cGFzc2l2ZTohMSxjYXB0dXJlOiExfSksdC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIix0aGlzLm9uQ2xpY2sse3Bhc3NpdmU6ITEsY2FwdHVyZTohMX0pLGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIix0aGlzLm9uTW91c2Vtb3ZlKSx3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHRoaXMub25SZXNpemUpLGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsdGhpcy5vblZpc2liaWxpdHlDaGFuZ2UsITEpLGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLHRoaXMub25Gb2N1cywhMCkpfW9uQ2xpY2sodCl7dmFyIGUsaTtjb25zdHtjb250YWluZXI6bixpc0NvbXBhY3Q6c309dGhpcztpZighbnx8dGhpcy5pc0Nsb3NpbmcoKSlyZXR1cm47IXMmJnRoaXMub3B0aW9uKFwiaWRsZVwiKSYmdGhpcy5yZXNldElkbGUoKTtjb25zdCBvPWRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7aWYoZ3QoKSYmbyYmbi5jb250YWlucyhvKSlyZXR1cm47Y29uc3QgYT10LmNvbXBvc2VkUGF0aCgpWzBdO2lmKGE9PT0obnVsbD09PShlPXRoaXMuY2Fyb3VzZWwpfHx2b2lkIDA9PT1lP3ZvaWQgMDplLmNvbnRhaW5lcikpcmV0dXJuO2lmKGEuY2xvc2VzdChcIi5mLXNwaW5uZXJcIil8fGEuY2xvc2VzdChcIltkYXRhLWZhbmN5Ym94LWNsb3NlXVwiKSlyZXR1cm4gdC5wcmV2ZW50RGVmYXVsdCgpLHZvaWQgdGhpcy5jbG9zZSh0KTtpZihhLmNsb3Nlc3QoXCJbZGF0YS1mYW5jeWJveC1wcmV2XVwiKSlyZXR1cm4gdC5wcmV2ZW50RGVmYXVsdCgpLHZvaWQgdGhpcy5wcmV2KCk7aWYoYS5jbG9zZXN0KFwiW2RhdGEtZmFuY3lib3gtbmV4dF1cIikpcmV0dXJuIHQucHJldmVudERlZmF1bHQoKSx2b2lkIHRoaXMubmV4dCgpO2lmKHMmJlwiaW1hZ2VcIj09PShudWxsPT09KGk9dGhpcy5nZXRTbGlkZSgpKXx8dm9pZCAwPT09aT92b2lkIDA6aS50eXBlKSlyZXR1cm4gdm9pZCh0aGlzLmNsaWNrVGltZXI/KGNsZWFyVGltZW91dCh0aGlzLmNsaWNrVGltZXIpLHRoaXMuY2xpY2tUaW1lcj1udWxsKTp0aGlzLmNsaWNrVGltZXI9c2V0VGltZW91dCgoKCk9Pnt0aGlzLnRvZ2dsZUlkbGUoKSx0aGlzLmNsaWNrVGltZXI9bnVsbH0pLDM1MCkpO2lmKHRoaXMuZW1pdChcImNsaWNrXCIsdCksdC5kZWZhdWx0UHJldmVudGVkKXJldHVybjtsZXQgcj0hMTtpZihhLmNsb3Nlc3QoXCIuZmFuY3lib3hfX2NvbnRlbnRcIikpe2lmKG8pe2lmKG8uY2xvc2VzdChcIltjb250ZW50ZWRpdGFibGVdXCIpKXJldHVybjthLm1hdGNoZXMoWCl8fG8uYmx1cigpfWlmKGd0KCkpcmV0dXJuO3I9dGhpcy5vcHRpb24oXCJjb250ZW50Q2xpY2tcIil9ZWxzZSBhLmNsb3Nlc3QoXCIuZmFuY3lib3hfX2Nhcm91c2VsXCIpJiYhYS5tYXRjaGVzKFgpJiYocj10aGlzLm9wdGlvbihcImJhY2tkcm9wQ2xpY2tcIikpO1wiY2xvc2VcIj09PXI/KHQucHJldmVudERlZmF1bHQoKSx0aGlzLmNsb3NlKHQpKTpcIm5leHRcIj09PXI/KHQucHJldmVudERlZmF1bHQoKSx0aGlzLm5leHQoKSk6XCJwcmV2XCI9PT1yJiYodC5wcmV2ZW50RGVmYXVsdCgpLHRoaXMucHJldigpKX1vbldoZWVsKHQpe2NvbnN0IGU9dGhpcy5vcHRpb24oXCJ3aGVlbFwiLHQpLGk9XCJzbGlkZVwiPT09ZSxuPVstdC5kZWx0YVh8fDAsLXQuZGVsdGFZfHwwLC10LmRldGFpbHx8MF0ucmVkdWNlKChmdW5jdGlvbih0LGUpe3JldHVybiBNYXRoLmFicyhlKT5NYXRoLmFicyh0KT9lOnR9KSkscz1NYXRoLm1heCgtMSxNYXRoLm1pbigxLG4pKSxvPURhdGUubm93KCk7dGhpcy5wd3QmJm8tdGhpcy5wd3Q8MzAwP2kmJnQucHJldmVudERlZmF1bHQoKToodGhpcy5wd3Q9byx0aGlzLmVtaXQoXCJ3aGVlbFwiLHQpLHQuZGVmYXVsdFByZXZlbnRlZHx8KFwiY2xvc2VcIj09PWU/KHQucHJldmVudERlZmF1bHQoKSx0aGlzLmNsb3NlKHQpKTpcInNsaWRlXCI9PT1lJiYodC5wcmV2ZW50RGVmYXVsdCgpLHRoaXNbcz4wP1wicHJldlwiOlwibmV4dFwiXSgpKSkpfW9uS2V5ZG93bih0KXtpZighdGhpcy5pc1RvcG1vc3QoKSlyZXR1cm47dGhpcy5pc0NvbXBhY3R8fCF0aGlzLm9wdGlvbihcImlkbGVcIil8fHRoaXMuaXNDbG9zaW5nKCl8fHRoaXMucmVzZXRJZGxlKCk7Y29uc3QgZT10LmtleSxpPXRoaXMub3B0aW9uKFwia2V5Ym9hcmRcIik7aWYoIWl8fHQuY3RybEtleXx8dC5hbHRLZXl8fHQuc2hpZnRLZXkpcmV0dXJuO2NvbnN0IG49dC5jb21wb3NlZFBhdGgoKVswXSxzPWRvY3VtZW50LmFjdGl2ZUVsZW1lbnQmJmRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LG89cyYmcy5jb250YWlucyhcImYtYnV0dG9uXCIpfHxuLmRhdGFzZXQuY2Fyb3VzZWxQYWdlfHxuLmRhdGFzZXQuY2Fyb3VzZWxJbmRleDtpZihcIkVzY2FwZVwiIT09ZSYmIW8mJngobikpe2lmKG4uaXNDb250ZW50RWRpdGFibGV8fC0xIT09W1wiVEVYVEFSRUFcIixcIk9QVElPTlwiLFwiSU5QVVRcIixcIlNFTEVDVFwiLFwiVklERU9cIl0uaW5kZXhPZihuLm5vZGVOYW1lKSlyZXR1cm59dGhpcy5lbWl0KFwia2V5ZG93blwiLGUsdCk7Y29uc3QgYT1pW2VdO1wiZnVuY3Rpb25cIj09dHlwZW9mIHRoaXNbYV0mJih0LnByZXZlbnREZWZhdWx0KCksdGhpc1thXSgpKX1vblJlc2l6ZSgpe2NvbnN0IHQ9dGhpcy5jb250YWluZXI7aWYoIXQpcmV0dXJuO2NvbnN0IGU9dGhpcy5pc0NvbXBhY3Q7dC5jbGFzc0xpc3QudG9nZ2xlKFwiaXMtY29tcGFjdFwiLGUpLHRoaXMubWFuYWdlQ2FwdGlvbih0aGlzLmdldFNsaWRlKCkpLHRoaXMuaXNDb21wYWN0P3RoaXMuY2xlYXJJZGxlKCk6dGhpcy5lbmRJZGxlKCksdGhpcy5lbWl0KFwicmVzaXplXCIpfW9uRm9jdXModCl7dGhpcy5pc1RvcG1vc3QoKSYmdGhpcy5jaGVja0ZvY3VzKHQpfW9uTW91c2Vtb3ZlKHQpe3RoaXMucHJldk1vdXNlTW92ZUV2ZW50PXQsIXRoaXMuaXNDb21wYWN0JiZ0aGlzLm9wdGlvbihcImlkbGVcIikmJnRoaXMucmVzZXRJZGxlKCl9b25WaXNpYmlsaXR5Q2hhbmdlKCl7XCJ2aXNpYmxlXCI9PT1kb2N1bWVudC52aXNpYmlsaXR5U3RhdGU/dGhpcy5jaGVja0ZvY3VzKCk6dGhpcy5lbmRJZGxlKCl9bWFuYWdlQ2xvc2VCdG4odCl7Y29uc3QgZT10aGlzLm9wdGlvbkZvcih0LFwiY2xvc2VCdXR0b25cIil8fCExO2lmKFwiYXV0b1wiPT09ZSl7Y29uc3QgdD10aGlzLnBsdWdpbnMuVG9vbGJhcjtpZih0JiZ0LnN0YXRlPT09ZHQuUmVhZHkpcmV0dXJufWlmKCFlKXJldHVybjtpZighdC5jb250ZW50RWx8fHQuY2xvc2VCdG5FbClyZXR1cm47Y29uc3QgaT10aGlzLm9wdGlvbihcInRwbC5jbG9zZUJ1dHRvblwiKTtpZihpKXtjb25zdCBlPW4odGhpcy5sb2NhbGl6ZShpKSk7dC5jbG9zZUJ0bkVsPXQuY29udGVudEVsLmFwcGVuZENoaWxkKGUpLHQuZWwmJlModC5lbCxcImhhcy1jbG9zZS1idG5cIil9fW1hbmFnZUNhcHRpb24odCl7dmFyIGUsaTtjb25zdCBuPVwiZmFuY3lib3hfX2NhcHRpb25cIixzPVwiaGFzLWNhcHRpb25cIixvPXRoaXMuY29udGFpbmVyO2lmKCFvKXJldHVybjtjb25zdCBhPXRoaXMuaXNDb21wYWN0fHx0aGlzLm9wdGlvbihcImNvbW1vbkNhcHRpb25cIikscj0hYTtpZih0aGlzLmNhcHRpb24mJnRoaXMuc3RvcCh0aGlzLmNhcHRpb24pLHImJnRoaXMuY2FwdGlvbiYmKHRoaXMuY2FwdGlvbi5yZW1vdmUoKSx0aGlzLmNhcHRpb249bnVsbCksYSYmIXRoaXMuY2FwdGlvbilmb3IoY29uc3QgdCBvZihudWxsPT09KGU9dGhpcy5jYXJvdXNlbCl8fHZvaWQgMD09PWU/dm9pZCAwOmUuc2xpZGVzKXx8W10pdC5jYXB0aW9uRWwmJih0LmNhcHRpb25FbC5yZW1vdmUoKSx0LmNhcHRpb25FbD12b2lkIDAsRSh0LmVsLHMpLG51bGw9PT0oaT10LmVsKXx8dm9pZCAwPT09aXx8aS5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsbGVkYnlcIikpO2lmKHR8fCh0PXRoaXMuZ2V0U2xpZGUoKSksIXR8fGEmJiF0aGlzLmlzQ3VycmVudFNsaWRlKHQpKXJldHVybjtjb25zdCBsPXQuZWw7bGV0IGM9dGhpcy5vcHRpb25Gb3IodCxcImNhcHRpb25cIixcIlwiKTtpZihcInN0cmluZ1wiIT10eXBlb2YgY3x8IWMubGVuZ3RoKXJldHVybiB2b2lkKGEmJnRoaXMuY2FwdGlvbiYmdGhpcy5hbmltYXRlKHRoaXMuY2FwdGlvbixcImYtZmFkZU91dFwiLCgoKT0+e3ZhciB0O251bGw9PT0odD10aGlzLmNhcHRpb24pfHx2b2lkIDA9PT10fHx0LnJlbW92ZSgpLHRoaXMuY2FwdGlvbj1udWxsfSkpKTtsZXQgaD1udWxsO2lmKHIpe2lmKGg9dC5jYXB0aW9uRWx8fG51bGwsbCYmIWgpe2NvbnN0IGU9YGZhbmN5Ym94X19jYXB0aW9uXyR7dGhpcy5pZH1fJHt0LmluZGV4fWA7aD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFMoaCxuKSxoLnNldEF0dHJpYnV0ZShcImlkXCIsZSksdC5jYXB0aW9uRWw9bC5hcHBlbmRDaGlsZChoKSxTKGwscyksbC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsbGVkYnlcIixlKX19ZWxzZXtpZihoPXRoaXMuY2FwdGlvbixofHwoaD1vLnF1ZXJ5U2VsZWN0b3IoXCIuXCIrbikpLCFoKXtoPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksaC5kYXRhc2V0LmZhbmN5Ym94Q2FwdGlvbj1cIlwiLFMoaCxuKSxoLmlubmVySFRNTD1jOyh0aGlzLmZvb3Rlcnx8bykucHJlcGVuZChoKX1TKG8scyksdGhpcy5jYXB0aW9uPWh9aCYmKGguaW5uZXJIVE1MPWMpfWNoZWNrRm9jdXModCl7dmFyIGU7Y29uc3QgaT1kb2N1bWVudC5hY3RpdmVFbGVtZW50fHxudWxsO2kmJihudWxsPT09KGU9dGhpcy5jb250YWluZXIpfHx2b2lkIDA9PT1lP3ZvaWQgMDplLmNvbnRhaW5zKGkpKXx8dGhpcy5mb2N1cyh0KX1mb2N1cyh0KXt2YXIgZTtpZih0aGlzLmlnbm9yZUZvY3VzQ2hhbmdlKXJldHVybjtjb25zdCBpPWRvY3VtZW50LmFjdGl2ZUVsZW1lbnR8fG51bGwsbj0obnVsbD09dD92b2lkIDA6dC50YXJnZXQpfHxudWxsLHM9dGhpcy5jb250YWluZXIsbz10aGlzLmdldFNsaWRlKCk7aWYoIXN8fCEobnVsbD09PShlPXRoaXMuY2Fyb3VzZWwpfHx2b2lkIDA9PT1lP3ZvaWQgMDplLnZpZXdwb3J0KSlyZXR1cm47aWYoIXQmJmkmJnMuY29udGFpbnMoaSkpcmV0dXJuO2NvbnN0IGE9byYmby5zdGF0ZT09PVYuUmVhZHk/by5lbDpudWxsO2lmKCFhfHxhLmNvbnRhaW5zKGkpfHxzPT09aSlyZXR1cm47dCYmdC5jYW5jZWxhYmxlJiZ0LnByZXZlbnREZWZhdWx0KCksdGhpcy5pZ25vcmVGb2N1c0NoYW5nZT0hMDtjb25zdCByPUFycmF5LmZyb20ocy5xdWVyeVNlbGVjdG9yQWxsKFgpKTtsZXQgbD1bXSxjPW51bGw7Zm9yKGxldCB0IG9mIHIpe2NvbnN0IGU9IXQub2Zmc2V0UGFyZW50fHx0LmNsb3Nlc3QoJ1thcmlhLWhpZGRlbj1cInRydWVcIl0nKSxpPWEmJmEuY29udGFpbnModCksbj0hdGhpcy5jYXJvdXNlbC52aWV3cG9ydC5jb250YWlucyh0KTt0PT09c3x8KGl8fG4pJiYhZT8obC5wdXNoKHQpLHZvaWQgMCE9PXQuZGF0YXNldC5vcmlnVGFiaW5kZXgmJih0LnRhYkluZGV4PXBhcnNlRmxvYXQodC5kYXRhc2V0Lm9yaWdUYWJpbmRleCkpLHQucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1vcmlnLXRhYmluZGV4XCIpLCF0Lmhhc0F0dHJpYnV0ZShcImF1dG9Gb2N1c1wiKSYmY3x8KGM9dCkpOih0LmRhdGFzZXQub3JpZ1RhYmluZGV4PXZvaWQgMD09PXQuZGF0YXNldC5vcmlnVGFiaW5kZXg/dC5nZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKXx8dm9pZCAwOnQuZGF0YXNldC5vcmlnVGFiaW5kZXgsdC50YWJJbmRleD0tMSl9bGV0IGg9bnVsbDt0Pyghbnx8bC5pbmRleE9mKG4pPDApJiYoaD1jfHxzLGwubGVuZ3RoJiYoaT09PXZ0P2g9bFswXTp0aGlzLmxhc3RGb2N1cyE9PXMmJmkhPT1idHx8KGg9bFtsLmxlbmd0aC0xXSkpKTpoPW8mJlwiaW1hZ2VcIj09PW8udHlwZT9zOmN8fHMsaCYmWShoKSx0aGlzLmxhc3RGb2N1cz1kb2N1bWVudC5hY3RpdmVFbGVtZW50LHRoaXMuaWdub3JlRm9jdXNDaGFuZ2U9ITF9bmV4dCgpe2NvbnN0IHQ9dGhpcy5jYXJvdXNlbDt0JiZ0LnBhZ2VzLmxlbmd0aD4xJiZ0LnNsaWRlTmV4dCgpfXByZXYoKXtjb25zdCB0PXRoaXMuY2Fyb3VzZWw7dCYmdC5wYWdlcy5sZW5ndGg+MSYmdC5zbGlkZVByZXYoKX1qdW1wVG8oLi4udCl7dGhpcy5jYXJvdXNlbCYmdGhpcy5jYXJvdXNlbC5zbGlkZVRvKC4uLnQpfWlzVG9wbW9zdCgpe3ZhciB0O3JldHVybihudWxsPT09KHQ9eHQuZ2V0SW5zdGFuY2UoKSl8fHZvaWQgMD09PXQ/dm9pZCAwOnQuaWQpPT10aGlzLmlkfWFuaW1hdGUodD1udWxsLGU9XCJcIixpKXtpZighdHx8IWUpcmV0dXJuIHZvaWQoaSYmaSgpKTt0aGlzLnN0b3AodCk7Y29uc3Qgbj1zPT57cy50YXJnZXQ9PT10JiZ0LmRhdGFzZXQuYW5pbWF0aW9uTmFtZSYmKHQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLG4pLGRlbGV0ZSB0LmRhdGFzZXQuYW5pbWF0aW9uTmFtZSxpJiZpKCksRSh0LGUpKX07dC5kYXRhc2V0LmFuaW1hdGlvbk5hbWU9ZSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIixuKSxTKHQsZSl9c3RvcCh0KXt0JiZ0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiYW5pbWF0aW9uZW5kXCIse2J1YmJsZXM6ITEsY2FuY2VsYWJsZTohMCxjdXJyZW50VGFyZ2V0OnR9KSl9c2V0Q29udGVudCh0LGU9XCJcIixpPSEwKXtpZih0aGlzLmlzQ2xvc2luZygpKXJldHVybjtjb25zdCBzPXQuZWw7aWYoIXMpcmV0dXJuO2xldCBvPW51bGw7aWYoeChlKT9vPWU6KG89bihlK1wiXCIpLHgobyl8fChvPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksby5pbm5lckhUTUw9ZStcIlwiKSksW1wiaW1nXCIsXCJwaWN0dXJlXCIsXCJpZnJhbWVcIixcInZpZGVvXCIsXCJhdWRpb1wiXS5pbmNsdWRlcyhvLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpKXtjb25zdCB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7dC5hcHBlbmRDaGlsZChvKSxvPXR9eChvKSYmdC5maWx0ZXImJiF0LmVycm9yJiYobz1vLnF1ZXJ5U2VsZWN0b3IodC5maWx0ZXIpKSxvJiZ4KG8pPyhTKG8sXCJmYW5jeWJveF9fY29udGVudFwiKSx0LmlkJiZvLnNldEF0dHJpYnV0ZShcImlkXCIsdC5pZCksXCJub25lXCIhPT1vLnN0eWxlLmRpc3BsYXkmJlwibm9uZVwiIT09Z2V0Q29tcHV0ZWRTdHlsZShvKS5nZXRQcm9wZXJ0eVZhbHVlKFwiZGlzcGxheVwiKXx8KG8uc3R5bGUuZGlzcGxheT10LmRpc3BsYXl8fHRoaXMub3B0aW9uKFwiZGVmYXVsdERpc3BsYXlcIil8fFwiZmxleFwiKSxzLmNsYXNzTGlzdC5hZGQoYGhhcy0ke3QuZXJyb3I/XCJlcnJvclwiOnQudHlwZXx8XCJ1bmtub3duXCJ9YCkscy5wcmVwZW5kKG8pLHQuY29udGVudEVsPW8saSYmdGhpcy5yZXZlYWxDb250ZW50KHQpLHRoaXMubWFuYWdlQ2xvc2VCdG4odCksdGhpcy5tYW5hZ2VDYXB0aW9uKHQpKTp0aGlzLnNldEVycm9yKHQsXCJ7e0VMRU1FTlRfTk9UX0ZPVU5EfX1cIil9cmV2ZWFsQ29udGVudCh0LGUpe2NvbnN0IGk9dC5lbCxuPXQuY29udGVudEVsO2kmJm4mJih0aGlzLmVtaXQoXCJyZXZlYWxcIix0KSx0aGlzLmhpZGVMb2FkaW5nKHQpLHQuc3RhdGU9Vi5PcGVuaW5nLChlPXRoaXMuaXNPcGVuaW5nU2xpZGUodCk/dm9pZCAwPT09ZT90aGlzLm9wdGlvbkZvcih0LFwic2hvd0NsYXNzXCIpOmU6XCJmLWZhZGVJblwiKT90aGlzLmFuaW1hdGUobixlLCgoKT0+e3RoaXMuZG9uZSh0KX0pKTp0aGlzLmRvbmUodCkpfWRvbmUodCl7dGhpcy5pc0Nsb3NpbmcoKXx8KHQuc3RhdGU9Vi5SZWFkeSx0aGlzLmVtaXQoXCJkb25lXCIsdCksUyh0LmVsLFwiaXMtZG9uZVwiKSx0aGlzLmlzQ3VycmVudFNsaWRlKHQpJiZ0aGlzLm9wdGlvbihcImF1dG9Gb2N1c1wiKSYmcXVldWVNaWNyb3Rhc2soKCgpPT57dGhpcy5vcHRpb24oXCJhdXRvRm9jdXNcIikmJih0aGlzLm9wdGlvbihcImF1dG9Gb2N1c1wiKT90aGlzLmZvY3VzKCk6dGhpcy5jaGVja0ZvY3VzKCkpfSkpLHRoaXMuaXNPcGVuaW5nU2xpZGUodCkmJiF0aGlzLmlzQ29tcGFjdCYmdGhpcy5vcHRpb24oXCJpZGxlXCIpJiZ0aGlzLnNldElkbGUoKSl9aXNDdXJyZW50U2xpZGUodCl7Y29uc3QgZT10aGlzLmdldFNsaWRlKCk7cmV0dXJuISghdHx8IWUpJiZlLmluZGV4PT09dC5pbmRleH1pc09wZW5pbmdTbGlkZSh0KXt2YXIgZSxpO3JldHVybiBudWxsPT09KG51bGw9PT0oZT10aGlzLmNhcm91c2VsKXx8dm9pZCAwPT09ZT92b2lkIDA6ZS5wcmV2UGFnZSkmJnQuaW5kZXg9PT0obnVsbD09PShpPXRoaXMuZ2V0U2xpZGUoKSl8fHZvaWQgMD09PWk/dm9pZCAwOmkuaW5kZXgpfXNob3dMb2FkaW5nKHQpe3Quc3RhdGU9Vi5Mb2FkaW5nO2NvbnN0IGU9dC5lbDtpZighZSlyZXR1cm47UyhlLFwiaXMtbG9hZGluZ1wiKSx0aGlzLmVtaXQoXCJsb2FkaW5nXCIsdCksdC5zcGlubmVyRWx8fHNldFRpbWVvdXQoKCgpPT57aWYoIXRoaXMuaXNDbG9zaW5nKCkmJiF0LnNwaW5uZXJFbCYmdC5zdGF0ZT09PVYuTG9hZGluZyl7bGV0IGk9bih3KTt0LnNwaW5uZXJFbD1pLGUucHJlcGVuZChpKSx0aGlzLmFuaW1hdGUoaSxcImYtZmFkZUluXCIpfX0pLDI1MCl9aGlkZUxvYWRpbmcodCl7Y29uc3QgZT10LmVsO2lmKCFlKXJldHVybjtjb25zdCBpPXQuc3Bpbm5lckVsO3RoaXMuaXNDbG9zaW5nKCk/bnVsbD09aXx8aS5yZW1vdmUoKTooRShlLFwiaXMtbG9hZGluZ1wiKSxpJiZ0aGlzLmFuaW1hdGUoaSxcImYtZmFkZU91dFwiLCgoKT0+e2kucmVtb3ZlKCl9KSksdC5zdGF0ZT09PVYuTG9hZGluZyYmKHRoaXMuZW1pdChcImxvYWRlZFwiLHQpLHQuc3RhdGU9Vi5SZWFkeSkpfXNldEVycm9yKHQsZSl7aWYodGhpcy5pc0Nsb3NpbmcoKSlyZXR1cm47dGhpcy5lbWl0KFwiZXJyb3JcIiksdC5lcnJvcj1lLHRoaXMuaGlkZUxvYWRpbmcodCksdGhpcy5jbGVhckNvbnRlbnQodCk7Y29uc3QgaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2kuY2xhc3NMaXN0LmFkZChcImZhbmN5Ym94LWVycm9yXCIpLGkuaW5uZXJIVE1MPXRoaXMubG9jYWxpemUoZXx8XCI8cD57e0VSUk9SfX08L3A+XCIpLHRoaXMuc2V0Q29udGVudCh0LGkpfWNsZWFyQ29udGVudCh0KXt2YXIgZTtudWxsPT09KGU9dGhpcy5jYXJvdXNlbCl8fHZvaWQgMD09PWV8fGUuZW1pdChcInJlbW92ZVNsaWRlXCIsdCksdC5jb250ZW50RWwmJih0LmNvbnRlbnRFbC5yZW1vdmUoKSx0LmNvbnRlbnRFbD12b2lkIDApLHQuY2xvc2VCdG5FbCYmKHQuY2xvc2VCdG5FbC5yZW1vdmUoKSx0LmNsb3NlQnRuRWw9dm9pZCAwKTtjb25zdCBpPXQuZWw7aSYmKEUoaSxcImlzLWxvYWRpbmdcIiksRShpLFwiaGFzLWVycm9yXCIpLEUoaSxcImhhcy11bmtub3duXCIpLEUoaSxgaGFzLSR7dC50eXBlfHxcInVua25vd25cIn1gKSl9Z2V0U2xpZGUoKXt2YXIgdDtjb25zdCBlPXRoaXMuY2Fyb3VzZWw7cmV0dXJuKG51bGw9PT0odD1udWxsPT1lP3ZvaWQgMDplLnBhZ2VzW251bGw9PWU/dm9pZCAwOmUucGFnZV0pfHx2b2lkIDA9PT10P3ZvaWQgMDp0LnNsaWRlc1swXSl8fHZvaWQgMH1jbG9zZSh0LGUpe2lmKHRoaXMuaXNDbG9zaW5nKCkpcmV0dXJuO2NvbnN0IGk9bmV3IEV2ZW50KFwic2hvdWxkQ2xvc2VcIix7YnViYmxlczohMCxjYW5jZWxhYmxlOiEwfSk7aWYodGhpcy5lbWl0KFwic2hvdWxkQ2xvc2VcIixpLHQpLGkuZGVmYXVsdFByZXZlbnRlZClyZXR1cm47dCYmdC5jYW5jZWxhYmxlJiYodC5wcmV2ZW50RGVmYXVsdCgpLHQuc3RvcFByb3BhZ2F0aW9uKCkpO2NvbnN0IG49dGhpcy5mc0FQSSxzPSgpPT57dGhpcy5wcm9jZWVkQ2xvc2UodCxlKX07biYmbi5pc0Z1bGxzY3JlZW4oKT9Qcm9taXNlLnJlc29sdmUobi5leGl0KCkpLnRoZW4oKCgpPT5zKCkpKTpzKCl9Y2xlYXJJZGxlKCl7dGhpcy5pZGxlVGltZXImJmNsZWFyVGltZW91dCh0aGlzLmlkbGVUaW1lciksdGhpcy5pZGxlVGltZXI9bnVsbH1zZXRJZGxlKHQ9ITEpe2NvbnN0IGU9KCk9Pnt0aGlzLmNsZWFySWRsZSgpLHRoaXMuaWRsZT0hMCxTKHRoaXMuY29udGFpbmVyLFwiaXMtaWRsZVwiKSx0aGlzLmVtaXQoXCJzZXRJZGxlXCIpfTtpZih0aGlzLmNsZWFySWRsZSgpLCF0aGlzLmlzQ2xvc2luZygpKWlmKHQpZSgpO2Vsc2V7Y29uc3QgdD10aGlzLm9wdGlvbihcImlkbGVcIik7dCYmKHRoaXMuaWRsZVRpbWVyPXNldFRpbWVvdXQoZSx0KSl9fWVuZElkbGUoKXt0aGlzLmNsZWFySWRsZSgpLHRoaXMuaWRsZSYmIXRoaXMuaXNDbG9zaW5nKCkmJih0aGlzLmlkbGU9ITEsRSh0aGlzLmNvbnRhaW5lcixcImlzLWlkbGVcIiksdGhpcy5lbWl0KFwiZW5kSWRsZVwiKSl9cmVzZXRJZGxlKCl7dGhpcy5lbmRJZGxlKCksdGhpcy5zZXRJZGxlKCl9dG9nZ2xlSWRsZSgpe3RoaXMuaWRsZT90aGlzLmVuZElkbGUoKTp0aGlzLnNldElkbGUoITApfXRvZ2dsZUZ1bGxzY3JlZW4oKXtjb25zdCB0PXRoaXMuZnNBUEk7dCYmKHQuaXNGdWxsc2NyZWVuKCk/dC5leGl0KCk6dGhpcy5jb250YWluZXImJnQucmVxdWVzdCh0aGlzLmNvbnRhaW5lcikpfWlzQ2xvc2luZygpe3JldHVybltaLkNsb3NpbmcsWi5DdXN0b21DbG9zaW5nLFouRGVzdHJveV0uaW5jbHVkZXModGhpcy5zdGF0ZSl9cHJvY2VlZENsb3NlKHQsZSl7dmFyIGk7dGhpcy5zdGF0ZT1aLkNsb3NpbmcsdGhpcy5jbGVhcklkbGUoKSx0aGlzLmRldGFjaEV2ZW50cygpO2NvbnN0IG49dGhpcy5jb250YWluZXIscz10aGlzLmNhcm91c2VsLG89dGhpcy5nZXRTbGlkZSgpLGE9byYmdGhpcy5vcHRpb24oXCJwbGFjZUZvY3VzQmFja1wiKT9vLnRyaWdnZXJFbHx8dGhpcy5vcHRpb24oXCJ0cmlnZ2VyXCIpOm51bGw7aWYoYSYmKE4oYSk/WShhKTphLmZvY3VzKCkpLG4mJihTKG4sXCJpcy1jbG9zaW5nXCIpLG4uc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIixcInRydWVcIiksdGhpcy5vcHRpb24oXCJhbmltYXRlZFwiKSYmUyhuLFwiaXMtYW5pbWF0ZWRcIiksbi5zdHlsZS5wb2ludGVyRXZlbnRzPVwibm9uZVwiKSxzKXtzLmNsZWFyVHJhbnNpdGlvbnMoKSxudWxsPT09KGk9cy5wYW56b29tKXx8dm9pZCAwPT09aXx8aS5kZXN0cm95KCk7Zm9yKGNvbnN0IHQgb2Ygcy5zbGlkZXMpe3Quc3RhdGU9Vi5DbG9zaW5nLHRoaXMuaGlkZUxvYWRpbmcodCk7Y29uc3QgZT10LmNvbnRlbnRFbDtlJiZ0aGlzLnN0b3AoZSk7Y29uc3QgaT1udWxsPT10P3ZvaWQgMDp0LnBhbnpvb207aSYmKGkuc3RvcCgpLGkuZGV0YWNoRXZlbnRzKCksaS5kZXRhY2hPYnNlcnZlcigpKSx0aGlzLmlzQ3VycmVudFNsaWRlKHQpfHxzLmVtaXQoXCJyZW1vdmVTbGlkZVwiLHQpfX10aGlzLmVtaXQoXCJjbG9zZVwiLHQpLHRoaXMuc3RhdGUhPT1aLkN1c3RvbUNsb3Npbmc/KHZvaWQgMD09PWUmJm8mJihlPXRoaXMub3B0aW9uRm9yKG8sXCJoaWRlQ2xhc3NcIikpLGUmJm8/KHRoaXMuYW5pbWF0ZShvLmNvbnRlbnRFbCxlLCgoKT0+e3MmJnMuZW1pdChcInJlbW92ZVNsaWRlXCIsbyl9KSksc2V0VGltZW91dCgoKCk9Pnt0aGlzLmRlc3Ryb3koKX0pLDUwMCkpOnRoaXMuZGVzdHJveSgpKTpzZXRUaW1lb3V0KCgoKT0+e3RoaXMuZGVzdHJveSgpfSksNTAwKX1kZXN0cm95KCl7dmFyIHQ7aWYodGhpcy5zdGF0ZT09PVouRGVzdHJveSlyZXR1cm47dGhpcy5zdGF0ZT1aLkRlc3Ryb3ksbnVsbD09PSh0PXRoaXMuY2Fyb3VzZWwpfHx2b2lkIDA9PT10fHx0LmRlc3Ryb3koKTtjb25zdCBlPXRoaXMuY29udGFpbmVyO2UmJmUucmVtb3ZlKCkseXQuZGVsZXRlKHRoaXMuaWQpO2NvbnN0IGk9eHQuZ2V0SW5zdGFuY2UoKTtpP2kuZm9jdXMoKTooYnQmJihidC5yZW1vdmUoKSxidD1udWxsKSx2dCYmKHZ0LnJlbW92ZSgpLHZ0PW51bGwpLEUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFwid2l0aC1mYW5jeWJveFwiKSwoKCk9PntpZighVylyZXR1cm47Y29uc3QgdD1kb2N1bWVudCxlPXQuYm9keTtlLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlLXNjcm9sbGJhclwiKSxlLnN0eWxlLnNldFByb3BlcnR5KFwiLS1mYW5jeWJveC1ib2R5LW1hcmdpblwiLFwiXCIpLHQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwiLS1mYW5jeWJveC1zY3JvbGxiYXItY29tcGVuc2F0ZVwiLFwiXCIpfSkoKSx0aGlzLmVtaXQoXCJkZXN0cm95XCIpKX1zdGF0aWMgYmluZCh0LGUsaSl7aWYoIVcpcmV0dXJuO2xldCBuLHM9XCJcIixvPXt9O2lmKHZvaWQgMD09PXQ/bj1kb2N1bWVudC5ib2R5Olwic3RyaW5nXCI9PXR5cGVvZiB0PyhuPWRvY3VtZW50LmJvZHkscz10LFwib2JqZWN0XCI9PXR5cGVvZiBlJiYobz1lfHx7fSkpOihuPXQsXCJzdHJpbmdcIj09dHlwZW9mIGUmJihzPWUpLFwib2JqZWN0XCI9PXR5cGVvZiBpJiYobz1pfHx7fSkpLCFufHwheChuKSlyZXR1cm47cz1zfHxcIltkYXRhLWZhbmN5Ym94XVwiO2NvbnN0IGE9eHQub3BlbmVycy5nZXQobil8fG5ldyBNYXA7YS5zZXQocyxvKSx4dC5vcGVuZXJzLnNldChuLGEpLDE9PT1hLnNpemUmJm4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIseHQuZnJvbUV2ZW50KX1zdGF0aWMgdW5iaW5kKHQsZSl7bGV0IGksbj1cIlwiO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0PyhpPWRvY3VtZW50LmJvZHksbj10KTooaT10LFwic3RyaW5nXCI9PXR5cGVvZiBlJiYobj1lKSksIWkpcmV0dXJuO2NvbnN0IHM9eHQub3BlbmVycy5nZXQoaSk7cyYmbiYmcy5kZWxldGUobiksbiYmc3x8KHh0Lm9wZW5lcnMuZGVsZXRlKGkpLGkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIseHQuZnJvbUV2ZW50KSl9c3RhdGljIGRlc3Ryb3koKXtsZXQgdDtmb3IoO3Q9eHQuZ2V0SW5zdGFuY2UoKTspdC5kZXN0cm95KCk7Zm9yKGNvbnN0IHQgb2YgeHQub3BlbmVycy5rZXlzKCkpdC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIix4dC5mcm9tRXZlbnQpO3h0Lm9wZW5lcnM9bmV3IE1hcH1zdGF0aWMgZnJvbUV2ZW50KHQpe2lmKHQuZGVmYXVsdFByZXZlbnRlZClyZXR1cm47aWYodC5idXR0b24mJjAhPT10LmJ1dHRvbilyZXR1cm47aWYodC5jdHJsS2V5fHx0Lm1ldGFLZXl8fHQuc2hpZnRLZXkpcmV0dXJuO2xldCBlPXQuY29tcG9zZWRQYXRoKClbMF07Y29uc3QgaT1lLmNsb3Nlc3QoXCJbZGF0YS1mYW5jeWJveC10cmlnZ2VyXVwiKTtpZihpKXtjb25zdCB0PWkuZGF0YXNldC5mYW5jeWJveFRyaWdnZXJ8fFwiXCIsbj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1mYW5jeWJveD1cIiR7dH1cIl1gKSxzPXBhcnNlSW50KGkuZGF0YXNldC5mYW5jeWJveEluZGV4fHxcIlwiLDEwKXx8MDtlPW5bc118fGV9aWYoIShlJiZlIGluc3RhbmNlb2YgRWxlbWVudCkpcmV0dXJuO2xldCBuLHMsbyxhO2lmKFsuLi54dC5vcGVuZXJzXS5yZXZlcnNlKCkuZmluZCgoKFt0LGldKT0+ISghdC5jb250YWlucyhlKXx8IVsuLi5pXS5yZXZlcnNlKCkuZmluZCgoKFtpLHJdKT0+e2xldCBsPWUuY2xvc2VzdChpKTtyZXR1cm4hIWwmJihuPXQscz1pLG89bCxhPXIsITApfSkpKSkpLCFufHwhc3x8IW8pcmV0dXJuO2E9YXx8e30sdC5wcmV2ZW50RGVmYXVsdCgpLGU9bztsZXQgcj1bXSxsPXUoe30scSxhKTtsLmV2ZW50PXQsbC50cmlnZ2VyPWUsbC5kZWxlZ2F0ZT1pO2NvbnN0IGM9bC5ncm91cEFsbCxoPWwuZ3JvdXBBdHRyLGQ9aCYmZT9lLmdldEF0dHJpYnV0ZShgJHtofWApOlwiXCI7aWYoKCFlfHxkfHxjKSYmKHI9W10uc2xpY2UuY2FsbChuLnF1ZXJ5U2VsZWN0b3JBbGwocykpKSxlJiYhYyYmKHI9ZD9yLmZpbHRlcigodD0+dC5nZXRBdHRyaWJ1dGUoYCR7aH1gKT09PWQpKTpbZV0pLCFyLmxlbmd0aClyZXR1cm47Y29uc3QgcD14dC5nZXRJbnN0YW5jZSgpO3JldHVybiBwJiZwLm9wdGlvbnMudHJpZ2dlciYmci5pbmRleE9mKHAub3B0aW9ucy50cmlnZ2VyKT4tMT92b2lkIDA6KGUmJihsLnN0YXJ0SW5kZXg9ci5pbmRleE9mKGUpKSx4dC5mcm9tTm9kZXMocixsKSl9c3RhdGljIGZyb21TZWxlY3Rvcih0LGUpe2xldCBpPW51bGwsbj1cIlwiO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0PyhpPWRvY3VtZW50LmJvZHksbj10KTp0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQmJlwic3RyaW5nXCI9PXR5cGVvZiBlJiYoaT10LG49ZSksIWl8fCFuKXJldHVybiExO2NvbnN0IHM9eHQub3BlbmVycy5nZXQoaSk7aWYoIXMpcmV0dXJuITE7Y29uc3Qgbz1zLmdldChuKTtyZXR1cm4hIW8mJnh0LmZyb21Ob2RlcyhBcnJheS5mcm9tKGkucXVlcnlTZWxlY3RvckFsbChuKSksbyl9c3RhdGljIGZyb21Ob2Rlcyh0LGUpe2U9dSh7fSxxLGUpO2NvbnN0IGk9W107Zm9yKGNvbnN0IG4gb2YgdCl7Y29uc3QgdD1uLmRhdGFzZXR8fHt9LHM9dC5zcmN8fG4uZ2V0QXR0cmlidXRlKFwiaHJlZlwiKXx8bi5nZXRBdHRyaWJ1dGUoXCJjdXJyZW50U3JjXCIpfHxuLmdldEF0dHJpYnV0ZShcInNyY1wiKXx8dm9pZCAwO2xldCBvO2NvbnN0IGE9ZS5kZWxlZ2F0ZTtsZXQgcjthJiZpLmxlbmd0aD09PWUuc3RhcnRJbmRleCYmKG89YSBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQ/YTphLnF1ZXJ5U2VsZWN0b3IoXCJpbWc6bm90KFthcmlhLWhpZGRlbl0pXCIpKSxvfHwobz1uIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudD9uOm4ucXVlcnlTZWxlY3RvcihcImltZzpub3QoW2FyaWEtaGlkZGVuXSlcIikpLG8mJihyPW8uY3VycmVudFNyY3x8by5zcmN8fHZvaWQgMCwhciYmby5kYXRhc2V0JiYocj1vLmRhdGFzZXQubGF6eVNyY3x8by5kYXRhc2V0LnNyY3x8dm9pZCAwKSk7Y29uc3QgbD17c3JjOnMsdHJpZ2dlckVsOm4sdGh1bWJFbDpvLHRodW1iRWxTcmM6cix0aHVtYlNyYzpyfTtmb3IoY29uc3QgZSBpbiB0KVwiZmFuY3lib3hcIiE9PWUmJihsW2VdPXRbZV0rXCJcIik7aS5wdXNoKGwpfXJldHVybiBuZXcgeHQoaSxlKX1zdGF0aWMgZ2V0SW5zdGFuY2UodCl7aWYodClyZXR1cm4geXQuZ2V0KHQpO3JldHVybiBBcnJheS5mcm9tKHl0LnZhbHVlcygpKS5yZXZlcnNlKCkuZmluZCgodD0+IXQuaXNDbG9zaW5nKCkmJnQpKXx8bnVsbH1zdGF0aWMgZ2V0U2xpZGUoKXt2YXIgdDtyZXR1cm4obnVsbD09PSh0PXh0LmdldEluc3RhbmNlKCkpfHx2b2lkIDA9PT10P3ZvaWQgMDp0LmdldFNsaWRlKCkpfHxudWxsfXN0YXRpYyBzaG93KHQ9W10sZT17fSl7cmV0dXJuIG5ldyB4dCh0LGUpfXN0YXRpYyBuZXh0KCl7Y29uc3QgdD14dC5nZXRJbnN0YW5jZSgpO3QmJnQubmV4dCgpfXN0YXRpYyBwcmV2KCl7Y29uc3QgdD14dC5nZXRJbnN0YW5jZSgpO3QmJnQucHJldigpfXN0YXRpYyBjbG9zZSh0PSEwLC4uLmUpe2lmKHQpZm9yKGNvbnN0IHQgb2YgeXQudmFsdWVzKCkpdC5jbG9zZSguLi5lKTtlbHNle2NvbnN0IHQ9eHQuZ2V0SW5zdGFuY2UoKTt0JiZ0LmNsb3NlKC4uLmUpfX19T2JqZWN0LmRlZmluZVByb3BlcnR5KHh0LFwidmVyc2lvblwiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpcIjUuMC4xNVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHh0LFwiZGVmYXVsdHNcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6cX0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh4dCxcIlBsdWdpbnNcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6bXR9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoeHQsXCJvcGVuZXJzXCIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOm5ldyBNYXB9KTtleHBvcnR7XyBhcyBDYXJvdXNlbCx4dCBhcyBGYW5jeWJveCxUIGFzIFBhbnpvb219O1xuIiwiaW1wb3J0IGdldENvbXBvc2l0ZVJlY3QgZnJvbSBcIi4vZG9tLXV0aWxzL2dldENvbXBvc2l0ZVJlY3QuanNcIjtcbmltcG9ydCBnZXRMYXlvdXRSZWN0IGZyb20gXCIuL2RvbS11dGlscy9nZXRMYXlvdXRSZWN0LmpzXCI7XG5pbXBvcnQgbGlzdFNjcm9sbFBhcmVudHMgZnJvbSBcIi4vZG9tLXV0aWxzL2xpc3RTY3JvbGxQYXJlbnRzLmpzXCI7XG5pbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gXCIuL2RvbS11dGlscy9nZXRPZmZzZXRQYXJlbnQuanNcIjtcbmltcG9ydCBvcmRlck1vZGlmaWVycyBmcm9tIFwiLi91dGlscy9vcmRlck1vZGlmaWVycy5qc1wiO1xuaW1wb3J0IGRlYm91bmNlIGZyb20gXCIuL3V0aWxzL2RlYm91bmNlLmpzXCI7XG5pbXBvcnQgbWVyZ2VCeU5hbWUgZnJvbSBcIi4vdXRpbHMvbWVyZ2VCeU5hbWUuanNcIjtcbmltcG9ydCBkZXRlY3RPdmVyZmxvdyBmcm9tIFwiLi91dGlscy9kZXRlY3RPdmVyZmxvdy5qc1wiO1xuaW1wb3J0IHsgaXNFbGVtZW50IH0gZnJvbSBcIi4vZG9tLXV0aWxzL2luc3RhbmNlT2YuanNcIjtcbnZhciBERUZBVUxUX09QVElPTlMgPSB7XG4gIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gIG1vZGlmaWVyczogW10sXG4gIHN0cmF0ZWd5OiAnYWJzb2x1dGUnXG59O1xuXG5mdW5jdGlvbiBhcmVWYWxpZEVsZW1lbnRzKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuICFhcmdzLnNvbWUoZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gIShlbGVtZW50ICYmIHR5cGVvZiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCA9PT0gJ2Z1bmN0aW9uJyk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9wcGVyR2VuZXJhdG9yKGdlbmVyYXRvck9wdGlvbnMpIHtcbiAgaWYgKGdlbmVyYXRvck9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIGdlbmVyYXRvck9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHZhciBfZ2VuZXJhdG9yT3B0aW9ucyA9IGdlbmVyYXRvck9wdGlvbnMsXG4gICAgICBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYgPSBfZ2VuZXJhdG9yT3B0aW9ucy5kZWZhdWx0TW9kaWZpZXJzLFxuICAgICAgZGVmYXVsdE1vZGlmaWVycyA9IF9nZW5lcmF0b3JPcHRpb25zJGRlZiA9PT0gdm9pZCAwID8gW10gOiBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYsXG4gICAgICBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyID0gX2dlbmVyYXRvck9wdGlvbnMuZGVmYXVsdE9wdGlvbnMsXG4gICAgICBkZWZhdWx0T3B0aW9ucyA9IF9nZW5lcmF0b3JPcHRpb25zJGRlZjIgPT09IHZvaWQgMCA/IERFRkFVTFRfT1BUSU9OUyA6IF9nZW5lcmF0b3JPcHRpb25zJGRlZjI7XG4gIHJldHVybiBmdW5jdGlvbiBjcmVhdGVQb3BwZXIocmVmZXJlbmNlLCBwb3BwZXIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0gZGVmYXVsdE9wdGlvbnM7XG4gICAgfVxuXG4gICAgdmFyIHN0YXRlID0ge1xuICAgICAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgICAgIG9yZGVyZWRNb2RpZmllcnM6IFtdLFxuICAgICAgb3B0aW9uczogT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9PUFRJT05TLCBkZWZhdWx0T3B0aW9ucyksXG4gICAgICBtb2RpZmllcnNEYXRhOiB7fSxcbiAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgIHJlZmVyZW5jZTogcmVmZXJlbmNlLFxuICAgICAgICBwb3BwZXI6IHBvcHBlclxuICAgICAgfSxcbiAgICAgIGF0dHJpYnV0ZXM6IHt9LFxuICAgICAgc3R5bGVzOiB7fVxuICAgIH07XG4gICAgdmFyIGVmZmVjdENsZWFudXBGbnMgPSBbXTtcbiAgICB2YXIgaXNEZXN0cm95ZWQgPSBmYWxzZTtcbiAgICB2YXIgaW5zdGFuY2UgPSB7XG4gICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICBzZXRPcHRpb25zOiBmdW5jdGlvbiBzZXRPcHRpb25zKHNldE9wdGlvbnNBY3Rpb24pIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2V0T3B0aW9uc0FjdGlvbiA9PT0gJ2Z1bmN0aW9uJyA/IHNldE9wdGlvbnNBY3Rpb24oc3RhdGUub3B0aW9ucykgOiBzZXRPcHRpb25zQWN0aW9uO1xuICAgICAgICBjbGVhbnVwTW9kaWZpZXJFZmZlY3RzKCk7XG4gICAgICAgIHN0YXRlLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgc3RhdGUub3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgIHN0YXRlLnNjcm9sbFBhcmVudHMgPSB7XG4gICAgICAgICAgcmVmZXJlbmNlOiBpc0VsZW1lbnQocmVmZXJlbmNlKSA/IGxpc3RTY3JvbGxQYXJlbnRzKHJlZmVyZW5jZSkgOiByZWZlcmVuY2UuY29udGV4dEVsZW1lbnQgPyBsaXN0U2Nyb2xsUGFyZW50cyhyZWZlcmVuY2UuY29udGV4dEVsZW1lbnQpIDogW10sXG4gICAgICAgICAgcG9wcGVyOiBsaXN0U2Nyb2xsUGFyZW50cyhwb3BwZXIpXG4gICAgICAgIH07IC8vIE9yZGVycyB0aGUgbW9kaWZpZXJzIGJhc2VkIG9uIHRoZWlyIGRlcGVuZGVuY2llcyBhbmQgYHBoYXNlYFxuICAgICAgICAvLyBwcm9wZXJ0aWVzXG5cbiAgICAgICAgdmFyIG9yZGVyZWRNb2RpZmllcnMgPSBvcmRlck1vZGlmaWVycyhtZXJnZUJ5TmFtZShbXS5jb25jYXQoZGVmYXVsdE1vZGlmaWVycywgc3RhdGUub3B0aW9ucy5tb2RpZmllcnMpKSk7IC8vIFN0cmlwIG91dCBkaXNhYmxlZCBtb2RpZmllcnNcblxuICAgICAgICBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzID0gb3JkZXJlZE1vZGlmaWVycy5maWx0ZXIoZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICByZXR1cm4gbS5lbmFibGVkO1xuICAgICAgICB9KTtcbiAgICAgICAgcnVuTW9kaWZpZXJFZmZlY3RzKCk7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZS51cGRhdGUoKTtcbiAgICAgIH0sXG4gICAgICAvLyBTeW5jIHVwZGF0ZSDigJMgaXQgd2lsbCBhbHdheXMgYmUgZXhlY3V0ZWQsIGV2ZW4gaWYgbm90IG5lY2Vzc2FyeS4gVGhpc1xuICAgICAgLy8gaXMgdXNlZnVsIGZvciBsb3cgZnJlcXVlbmN5IHVwZGF0ZXMgd2hlcmUgc3luYyBiZWhhdmlvciBzaW1wbGlmaWVzIHRoZVxuICAgICAgLy8gbG9naWMuXG4gICAgICAvLyBGb3IgaGlnaCBmcmVxdWVuY3kgdXBkYXRlcyAoZS5nLiBgcmVzaXplYCBhbmQgYHNjcm9sbGAgZXZlbnRzKSwgYWx3YXlzXG4gICAgICAvLyBwcmVmZXIgdGhlIGFzeW5jIFBvcHBlciN1cGRhdGUgbWV0aG9kXG4gICAgICBmb3JjZVVwZGF0ZTogZnVuY3Rpb24gZm9yY2VVcGRhdGUoKSB7XG4gICAgICAgIGlmIChpc0Rlc3Ryb3llZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBfc3RhdGUkZWxlbWVudHMgPSBzdGF0ZS5lbGVtZW50cyxcbiAgICAgICAgICAgIHJlZmVyZW5jZSA9IF9zdGF0ZSRlbGVtZW50cy5yZWZlcmVuY2UsXG4gICAgICAgICAgICBwb3BwZXIgPSBfc3RhdGUkZWxlbWVudHMucG9wcGVyOyAvLyBEb24ndCBwcm9jZWVkIGlmIGByZWZlcmVuY2VgIG9yIGBwb3BwZXJgIGFyZSBub3QgdmFsaWQgZWxlbWVudHNcbiAgICAgICAgLy8gYW55bW9yZVxuXG4gICAgICAgIGlmICghYXJlVmFsaWRFbGVtZW50cyhyZWZlcmVuY2UsIHBvcHBlcikpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gLy8gU3RvcmUgdGhlIHJlZmVyZW5jZSBhbmQgcG9wcGVyIHJlY3RzIHRvIGJlIHJlYWQgYnkgbW9kaWZpZXJzXG5cblxuICAgICAgICBzdGF0ZS5yZWN0cyA9IHtcbiAgICAgICAgICByZWZlcmVuY2U6IGdldENvbXBvc2l0ZVJlY3QocmVmZXJlbmNlLCBnZXRPZmZzZXRQYXJlbnQocG9wcGVyKSwgc3RhdGUub3B0aW9ucy5zdHJhdGVneSA9PT0gJ2ZpeGVkJyksXG4gICAgICAgICAgcG9wcGVyOiBnZXRMYXlvdXRSZWN0KHBvcHBlcilcbiAgICAgICAgfTsgLy8gTW9kaWZpZXJzIGhhdmUgdGhlIGFiaWxpdHkgdG8gcmVzZXQgdGhlIGN1cnJlbnQgdXBkYXRlIGN5Y2xlLiBUaGVcbiAgICAgICAgLy8gbW9zdCBjb21tb24gdXNlIGNhc2UgZm9yIHRoaXMgaXMgdGhlIGBmbGlwYCBtb2RpZmllciBjaGFuZ2luZyB0aGVcbiAgICAgICAgLy8gcGxhY2VtZW50LCB3aGljaCB0aGVuIG5lZWRzIHRvIHJlLXJ1biBhbGwgdGhlIG1vZGlmaWVycywgYmVjYXVzZSB0aGVcbiAgICAgICAgLy8gbG9naWMgd2FzIHByZXZpb3VzbHkgcmFuIGZvciB0aGUgcHJldmlvdXMgcGxhY2VtZW50IGFuZCBpcyB0aGVyZWZvcmVcbiAgICAgICAgLy8gc3RhbGUvaW5jb3JyZWN0XG5cbiAgICAgICAgc3RhdGUucmVzZXQgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUucGxhY2VtZW50ID0gc3RhdGUub3B0aW9ucy5wbGFjZW1lbnQ7IC8vIE9uIGVhY2ggdXBkYXRlIGN5Y2xlLCB0aGUgYG1vZGlmaWVyc0RhdGFgIHByb3BlcnR5IGZvciBlYWNoIG1vZGlmaWVyXG4gICAgICAgIC8vIGlzIGZpbGxlZCB3aXRoIHRoZSBpbml0aWFsIGRhdGEgc3BlY2lmaWVkIGJ5IHRoZSBtb2RpZmllci4gVGhpcyBtZWFuc1xuICAgICAgICAvLyBpdCBkb2Vzbid0IHBlcnNpc3QgYW5kIGlzIGZyZXNoIG9uIGVhY2ggdXBkYXRlLlxuICAgICAgICAvLyBUbyBlbnN1cmUgcGVyc2lzdGVudCBkYXRhLCB1c2UgYCR7bmFtZX0jcGVyc2lzdGVudGBcblxuICAgICAgICBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgICAgICAgcmV0dXJuIHN0YXRlLm1vZGlmaWVyc0RhdGFbbW9kaWZpZXIubmFtZV0gPSBPYmplY3QuYXNzaWduKHt9LCBtb2RpZmllci5kYXRhKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHN0YXRlLm9yZGVyZWRNb2RpZmllcnMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgaWYgKHN0YXRlLnJlc2V0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBzdGF0ZS5yZXNldCA9IGZhbHNlO1xuICAgICAgICAgICAgaW5kZXggPSAtMTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBfc3RhdGUkb3JkZXJlZE1vZGlmaWUgPSBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzW2luZGV4XSxcbiAgICAgICAgICAgICAgZm4gPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUuZm4sXG4gICAgICAgICAgICAgIF9zdGF0ZSRvcmRlcmVkTW9kaWZpZTIgPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUub3B0aW9ucyxcbiAgICAgICAgICAgICAgX29wdGlvbnMgPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUyID09PSB2b2lkIDAgPyB7fSA6IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZTIsXG4gICAgICAgICAgICAgIG5hbWUgPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUubmFtZTtcblxuICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHN0YXRlID0gZm4oe1xuICAgICAgICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgICAgICAgIG9wdGlvbnM6IF9vcHRpb25zLFxuICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICBpbnN0YW5jZTogaW5zdGFuY2VcbiAgICAgICAgICAgIH0pIHx8IHN0YXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIEFzeW5jIGFuZCBvcHRpbWlzdGljYWxseSBvcHRpbWl6ZWQgdXBkYXRlIOKAkyBpdCB3aWxsIG5vdCBiZSBleGVjdXRlZCBpZlxuICAgICAgLy8gbm90IG5lY2Vzc2FyeSAoZGVib3VuY2VkIHRvIHJ1biBhdCBtb3N0IG9uY2UtcGVyLXRpY2spXG4gICAgICB1cGRhdGU6IGRlYm91bmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgaW5zdGFuY2UuZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgICByZXNvbHZlKHN0YXRlKTtcbiAgICAgICAgfSk7XG4gICAgICB9KSxcbiAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgIGNsZWFudXBNb2RpZmllckVmZmVjdHMoKTtcbiAgICAgICAgaXNEZXN0cm95ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoIWFyZVZhbGlkRWxlbWVudHMocmVmZXJlbmNlLCBwb3BwZXIpKSB7XG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgaW5zdGFuY2Uuc2V0T3B0aW9ucyhvcHRpb25zKS50aGVuKGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgaWYgKCFpc0Rlc3Ryb3llZCAmJiBvcHRpb25zLm9uRmlyc3RVcGRhdGUpIHtcbiAgICAgICAgb3B0aW9ucy5vbkZpcnN0VXBkYXRlKHN0YXRlKTtcbiAgICAgIH1cbiAgICB9KTsgLy8gTW9kaWZpZXJzIGhhdmUgdGhlIGFiaWxpdHkgdG8gZXhlY3V0ZSBhcmJpdHJhcnkgY29kZSBiZWZvcmUgdGhlIGZpcnN0XG4gICAgLy8gdXBkYXRlIGN5Y2xlIHJ1bnMuIFRoZXkgd2lsbCBiZSBleGVjdXRlZCBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgdXBkYXRlXG4gICAgLy8gY3ljbGUuIFRoaXMgaXMgdXNlZnVsIHdoZW4gYSBtb2RpZmllciBhZGRzIHNvbWUgcGVyc2lzdGVudCBkYXRhIHRoYXRcbiAgICAvLyBvdGhlciBtb2RpZmllcnMgbmVlZCB0byB1c2UsIGJ1dCB0aGUgbW9kaWZpZXIgaXMgcnVuIGFmdGVyIHRoZSBkZXBlbmRlbnRcbiAgICAvLyBvbmUuXG5cbiAgICBmdW5jdGlvbiBydW5Nb2RpZmllckVmZmVjdHMoKSB7XG4gICAgICBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgdmFyIG5hbWUgPSBfcmVmLm5hbWUsXG4gICAgICAgICAgICBfcmVmJG9wdGlvbnMgPSBfcmVmLm9wdGlvbnMsXG4gICAgICAgICAgICBvcHRpb25zID0gX3JlZiRvcHRpb25zID09PSB2b2lkIDAgPyB7fSA6IF9yZWYkb3B0aW9ucyxcbiAgICAgICAgICAgIGVmZmVjdCA9IF9yZWYuZWZmZWN0O1xuXG4gICAgICAgIGlmICh0eXBlb2YgZWZmZWN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdmFyIGNsZWFudXBGbiA9IGVmZmVjdCh7XG4gICAgICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgaW5zdGFuY2U6IGluc3RhbmNlLFxuICAgICAgICAgICAgb3B0aW9uczogb3B0aW9uc1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdmFyIG5vb3BGbiA9IGZ1bmN0aW9uIG5vb3BGbigpIHt9O1xuXG4gICAgICAgICAgZWZmZWN0Q2xlYW51cEZucy5wdXNoKGNsZWFudXBGbiB8fCBub29wRm4pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhbnVwTW9kaWZpZXJFZmZlY3RzKCkge1xuICAgICAgZWZmZWN0Q2xlYW51cEZucy5mb3JFYWNoKGZ1bmN0aW9uIChmbikge1xuICAgICAgICByZXR1cm4gZm4oKTtcbiAgICAgIH0pO1xuICAgICAgZWZmZWN0Q2xlYW51cEZucyA9IFtdO1xuICAgIH1cblxuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfTtcbn1cbmV4cG9ydCB2YXIgY3JlYXRlUG9wcGVyID0gLyojX19QVVJFX18qL3BvcHBlckdlbmVyYXRvcigpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCB7IGRldGVjdE92ZXJmbG93IH07IiwiaW1wb3J0IHsgaXNTaGFkb3dSb290IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFpbnMocGFyZW50LCBjaGlsZCkge1xuICB2YXIgcm9vdE5vZGUgPSBjaGlsZC5nZXRSb290Tm9kZSAmJiBjaGlsZC5nZXRSb290Tm9kZSgpOyAvLyBGaXJzdCwgYXR0ZW1wdCB3aXRoIGZhc3RlciBuYXRpdmUgbWV0aG9kXG5cbiAgaWYgKHBhcmVudC5jb250YWlucyhjaGlsZCkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyB0aGVuIGZhbGxiYWNrIHRvIGN1c3RvbSBpbXBsZW1lbnRhdGlvbiB3aXRoIFNoYWRvdyBET00gc3VwcG9ydFxuICBlbHNlIGlmIChyb290Tm9kZSAmJiBpc1NoYWRvd1Jvb3Qocm9vdE5vZGUpKSB7XG4gICAgICB2YXIgbmV4dCA9IGNoaWxkO1xuXG4gICAgICBkbyB7XG4gICAgICAgIGlmIChuZXh0ICYmIHBhcmVudC5pc1NhbWVOb2RlKG5leHQpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddOiBuZWVkIGEgYmV0dGVyIHdheSB0byBoYW5kbGUgdGhpcy4uLlxuXG5cbiAgICAgICAgbmV4dCA9IG5leHQucGFyZW50Tm9kZSB8fCBuZXh0Lmhvc3Q7XG4gICAgICB9IHdoaWxlIChuZXh0KTtcbiAgICB9IC8vIEdpdmUgdXAsIHRoZSByZXN1bHQgaXMgZmFsc2VcblxuXG4gIHJldHVybiBmYWxzZTtcbn0iLCJpbXBvcnQgeyBpc0VsZW1lbnQsIGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5pbXBvcnQgeyByb3VuZCB9IGZyb20gXCIuLi91dGlscy9tYXRoLmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuaW1wb3J0IGlzTGF5b3V0Vmlld3BvcnQgZnJvbSBcIi4vaXNMYXlvdXRWaWV3cG9ydC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQsIGluY2x1ZGVTY2FsZSwgaXNGaXhlZFN0cmF0ZWd5KSB7XG4gIGlmIChpbmNsdWRlU2NhbGUgPT09IHZvaWQgMCkge1xuICAgIGluY2x1ZGVTY2FsZSA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKGlzRml4ZWRTdHJhdGVneSA9PT0gdm9pZCAwKSB7XG4gICAgaXNGaXhlZFN0cmF0ZWd5ID0gZmFsc2U7XG4gIH1cblxuICB2YXIgY2xpZW50UmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHZhciBzY2FsZVggPSAxO1xuICB2YXIgc2NhbGVZID0gMTtcblxuICBpZiAoaW5jbHVkZVNjYWxlICYmIGlzSFRNTEVsZW1lbnQoZWxlbWVudCkpIHtcbiAgICBzY2FsZVggPSBlbGVtZW50Lm9mZnNldFdpZHRoID4gMCA/IHJvdW5kKGNsaWVudFJlY3Qud2lkdGgpIC8gZWxlbWVudC5vZmZzZXRXaWR0aCB8fCAxIDogMTtcbiAgICBzY2FsZVkgPSBlbGVtZW50Lm9mZnNldEhlaWdodCA+IDAgPyByb3VuZChjbGllbnRSZWN0LmhlaWdodCkgLyBlbGVtZW50Lm9mZnNldEhlaWdodCB8fCAxIDogMTtcbiAgfVxuXG4gIHZhciBfcmVmID0gaXNFbGVtZW50KGVsZW1lbnQpID8gZ2V0V2luZG93KGVsZW1lbnQpIDogd2luZG93LFxuICAgICAgdmlzdWFsVmlld3BvcnQgPSBfcmVmLnZpc3VhbFZpZXdwb3J0O1xuXG4gIHZhciBhZGRWaXN1YWxPZmZzZXRzID0gIWlzTGF5b3V0Vmlld3BvcnQoKSAmJiBpc0ZpeGVkU3RyYXRlZ3k7XG4gIHZhciB4ID0gKGNsaWVudFJlY3QubGVmdCArIChhZGRWaXN1YWxPZmZzZXRzICYmIHZpc3VhbFZpZXdwb3J0ID8gdmlzdWFsVmlld3BvcnQub2Zmc2V0TGVmdCA6IDApKSAvIHNjYWxlWDtcbiAgdmFyIHkgPSAoY2xpZW50UmVjdC50b3AgKyAoYWRkVmlzdWFsT2Zmc2V0cyAmJiB2aXN1YWxWaWV3cG9ydCA/IHZpc3VhbFZpZXdwb3J0Lm9mZnNldFRvcCA6IDApKSAvIHNjYWxlWTtcbiAgdmFyIHdpZHRoID0gY2xpZW50UmVjdC53aWR0aCAvIHNjYWxlWDtcbiAgdmFyIGhlaWdodCA9IGNsaWVudFJlY3QuaGVpZ2h0IC8gc2NhbGVZO1xuICByZXR1cm4ge1xuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICB0b3A6IHksXG4gICAgcmlnaHQ6IHggKyB3aWR0aCxcbiAgICBib3R0b206IHkgKyBoZWlnaHQsXG4gICAgbGVmdDogeCxcbiAgICB4OiB4LFxuICAgIHk6IHlcbiAgfTtcbn0iLCJpbXBvcnQgeyB2aWV3cG9ydCB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IGdldFZpZXdwb3J0UmVjdCBmcm9tIFwiLi9nZXRWaWV3cG9ydFJlY3QuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudFJlY3QgZnJvbSBcIi4vZ2V0RG9jdW1lbnRSZWN0LmpzXCI7XG5pbXBvcnQgbGlzdFNjcm9sbFBhcmVudHMgZnJvbSBcIi4vbGlzdFNjcm9sbFBhcmVudHMuanNcIjtcbmltcG9ydCBnZXRPZmZzZXRQYXJlbnQgZnJvbSBcIi4vZ2V0T2Zmc2V0UGFyZW50LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSBcIi4vZ2V0Q29tcHV0ZWRTdHlsZS5qc1wiO1xuaW1wb3J0IHsgaXNFbGVtZW50LCBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tIFwiLi9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanNcIjtcbmltcG9ydCBnZXRQYXJlbnROb2RlIGZyb20gXCIuL2dldFBhcmVudE5vZGUuanNcIjtcbmltcG9ydCBjb250YWlucyBmcm9tIFwiLi9jb250YWlucy5qc1wiO1xuaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5pbXBvcnQgcmVjdFRvQ2xpZW50UmVjdCBmcm9tIFwiLi4vdXRpbHMvcmVjdFRvQ2xpZW50UmVjdC5qc1wiO1xuaW1wb3J0IHsgbWF4LCBtaW4gfSBmcm9tIFwiLi4vdXRpbHMvbWF0aC5qc1wiO1xuXG5mdW5jdGlvbiBnZXRJbm5lckJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50LCBzdHJhdGVneSkge1xuICB2YXIgcmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50LCBmYWxzZSwgc3RyYXRlZ3kgPT09ICdmaXhlZCcpO1xuICByZWN0LnRvcCA9IHJlY3QudG9wICsgZWxlbWVudC5jbGllbnRUb3A7XG4gIHJlY3QubGVmdCA9IHJlY3QubGVmdCArIGVsZW1lbnQuY2xpZW50TGVmdDtcbiAgcmVjdC5ib3R0b20gPSByZWN0LnRvcCArIGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICByZWN0LnJpZ2h0ID0gcmVjdC5sZWZ0ICsgZWxlbWVudC5jbGllbnRXaWR0aDtcbiAgcmVjdC53aWR0aCA9IGVsZW1lbnQuY2xpZW50V2lkdGg7XG4gIHJlY3QuaGVpZ2h0ID0gZWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gIHJlY3QueCA9IHJlY3QubGVmdDtcbiAgcmVjdC55ID0gcmVjdC50b3A7XG4gIHJldHVybiByZWN0O1xufVxuXG5mdW5jdGlvbiBnZXRDbGllbnRSZWN0RnJvbU1peGVkVHlwZShlbGVtZW50LCBjbGlwcGluZ1BhcmVudCwgc3RyYXRlZ3kpIHtcbiAgcmV0dXJuIGNsaXBwaW5nUGFyZW50ID09PSB2aWV3cG9ydCA/IHJlY3RUb0NsaWVudFJlY3QoZ2V0Vmlld3BvcnRSZWN0KGVsZW1lbnQsIHN0cmF0ZWd5KSkgOiBpc0VsZW1lbnQoY2xpcHBpbmdQYXJlbnQpID8gZ2V0SW5uZXJCb3VuZGluZ0NsaWVudFJlY3QoY2xpcHBpbmdQYXJlbnQsIHN0cmF0ZWd5KSA6IHJlY3RUb0NsaWVudFJlY3QoZ2V0RG9jdW1lbnRSZWN0KGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSkpO1xufSAvLyBBIFwiY2xpcHBpbmcgcGFyZW50XCIgaXMgYW4gb3ZlcmZsb3dhYmxlIGNvbnRhaW5lciB3aXRoIHRoZSBjaGFyYWN0ZXJpc3RpYyBvZlxuLy8gY2xpcHBpbmcgKG9yIGhpZGluZykgb3ZlcmZsb3dpbmcgZWxlbWVudHMgd2l0aCBhIHBvc2l0aW9uIGRpZmZlcmVudCBmcm9tXG4vLyBgaW5pdGlhbGBcblxuXG5mdW5jdGlvbiBnZXRDbGlwcGluZ1BhcmVudHMoZWxlbWVudCkge1xuICB2YXIgY2xpcHBpbmdQYXJlbnRzID0gbGlzdFNjcm9sbFBhcmVudHMoZ2V0UGFyZW50Tm9kZShlbGVtZW50KSk7XG4gIHZhciBjYW5Fc2NhcGVDbGlwcGluZyA9IFsnYWJzb2x1dGUnLCAnZml4ZWQnXS5pbmRleE9mKGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkucG9zaXRpb24pID49IDA7XG4gIHZhciBjbGlwcGVyRWxlbWVudCA9IGNhbkVzY2FwZUNsaXBwaW5nICYmIGlzSFRNTEVsZW1lbnQoZWxlbWVudCkgPyBnZXRPZmZzZXRQYXJlbnQoZWxlbWVudCkgOiBlbGVtZW50O1xuXG4gIGlmICghaXNFbGVtZW50KGNsaXBwZXJFbGVtZW50KSkge1xuICAgIHJldHVybiBbXTtcbiAgfSAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmxvdy9pc3N1ZXMvMTQxNFxuXG5cbiAgcmV0dXJuIGNsaXBwaW5nUGFyZW50cy5maWx0ZXIoZnVuY3Rpb24gKGNsaXBwaW5nUGFyZW50KSB7XG4gICAgcmV0dXJuIGlzRWxlbWVudChjbGlwcGluZ1BhcmVudCkgJiYgY29udGFpbnMoY2xpcHBpbmdQYXJlbnQsIGNsaXBwZXJFbGVtZW50KSAmJiBnZXROb2RlTmFtZShjbGlwcGluZ1BhcmVudCkgIT09ICdib2R5JztcbiAgfSk7XG59IC8vIEdldHMgdGhlIG1heGltdW0gYXJlYSB0aGF0IHRoZSBlbGVtZW50IGlzIHZpc2libGUgaW4gZHVlIHRvIGFueSBudW1iZXIgb2Zcbi8vIGNsaXBwaW5nIHBhcmVudHNcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDbGlwcGluZ1JlY3QoZWxlbWVudCwgYm91bmRhcnksIHJvb3RCb3VuZGFyeSwgc3RyYXRlZ3kpIHtcbiAgdmFyIG1haW5DbGlwcGluZ1BhcmVudHMgPSBib3VuZGFyeSA9PT0gJ2NsaXBwaW5nUGFyZW50cycgPyBnZXRDbGlwcGluZ1BhcmVudHMoZWxlbWVudCkgOiBbXS5jb25jYXQoYm91bmRhcnkpO1xuICB2YXIgY2xpcHBpbmdQYXJlbnRzID0gW10uY29uY2F0KG1haW5DbGlwcGluZ1BhcmVudHMsIFtyb290Qm91bmRhcnldKTtcbiAgdmFyIGZpcnN0Q2xpcHBpbmdQYXJlbnQgPSBjbGlwcGluZ1BhcmVudHNbMF07XG4gIHZhciBjbGlwcGluZ1JlY3QgPSBjbGlwcGluZ1BhcmVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2NSZWN0LCBjbGlwcGluZ1BhcmVudCkge1xuICAgIHZhciByZWN0ID0gZ2V0Q2xpZW50UmVjdEZyb21NaXhlZFR5cGUoZWxlbWVudCwgY2xpcHBpbmdQYXJlbnQsIHN0cmF0ZWd5KTtcbiAgICBhY2NSZWN0LnRvcCA9IG1heChyZWN0LnRvcCwgYWNjUmVjdC50b3ApO1xuICAgIGFjY1JlY3QucmlnaHQgPSBtaW4ocmVjdC5yaWdodCwgYWNjUmVjdC5yaWdodCk7XG4gICAgYWNjUmVjdC5ib3R0b20gPSBtaW4ocmVjdC5ib3R0b20sIGFjY1JlY3QuYm90dG9tKTtcbiAgICBhY2NSZWN0LmxlZnQgPSBtYXgocmVjdC5sZWZ0LCBhY2NSZWN0LmxlZnQpO1xuICAgIHJldHVybiBhY2NSZWN0O1xuICB9LCBnZXRDbGllbnRSZWN0RnJvbU1peGVkVHlwZShlbGVtZW50LCBmaXJzdENsaXBwaW5nUGFyZW50LCBzdHJhdGVneSkpO1xuICBjbGlwcGluZ1JlY3Qud2lkdGggPSBjbGlwcGluZ1JlY3QucmlnaHQgLSBjbGlwcGluZ1JlY3QubGVmdDtcbiAgY2xpcHBpbmdSZWN0LmhlaWdodCA9IGNsaXBwaW5nUmVjdC5ib3R0b20gLSBjbGlwcGluZ1JlY3QudG9wO1xuICBjbGlwcGluZ1JlY3QueCA9IGNsaXBwaW5nUmVjdC5sZWZ0O1xuICBjbGlwcGluZ1JlY3QueSA9IGNsaXBwaW5nUmVjdC50b3A7XG4gIHJldHVybiBjbGlwcGluZ1JlY3Q7XG59IiwiaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tIFwiLi9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanNcIjtcbmltcG9ydCBnZXROb2RlU2Nyb2xsIGZyb20gXCIuL2dldE5vZGVTY3JvbGwuanNcIjtcbmltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xuaW1wb3J0IHsgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmltcG9ydCBnZXRXaW5kb3dTY3JvbGxCYXJYIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbEJhclguanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgaXNTY3JvbGxQYXJlbnQgZnJvbSBcIi4vaXNTY3JvbGxQYXJlbnQuanNcIjtcbmltcG9ydCB7IHJvdW5kIH0gZnJvbSBcIi4uL3V0aWxzL21hdGguanNcIjtcblxuZnVuY3Rpb24gaXNFbGVtZW50U2NhbGVkKGVsZW1lbnQpIHtcbiAgdmFyIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB2YXIgc2NhbGVYID0gcm91bmQocmVjdC53aWR0aCkgLyBlbGVtZW50Lm9mZnNldFdpZHRoIHx8IDE7XG4gIHZhciBzY2FsZVkgPSByb3VuZChyZWN0LmhlaWdodCkgLyBlbGVtZW50Lm9mZnNldEhlaWdodCB8fCAxO1xuICByZXR1cm4gc2NhbGVYICE9PSAxIHx8IHNjYWxlWSAhPT0gMTtcbn0gLy8gUmV0dXJucyB0aGUgY29tcG9zaXRlIHJlY3Qgb2YgYW4gZWxlbWVudCByZWxhdGl2ZSB0byBpdHMgb2Zmc2V0UGFyZW50LlxuLy8gQ29tcG9zaXRlIG1lYW5zIGl0IHRha2VzIGludG8gYWNjb3VudCB0cmFuc2Zvcm1zIGFzIHdlbGwgYXMgbGF5b3V0LlxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldENvbXBvc2l0ZVJlY3QoZWxlbWVudE9yVmlydHVhbEVsZW1lbnQsIG9mZnNldFBhcmVudCwgaXNGaXhlZCkge1xuICBpZiAoaXNGaXhlZCA9PT0gdm9pZCAwKSB7XG4gICAgaXNGaXhlZCA9IGZhbHNlO1xuICB9XG5cbiAgdmFyIGlzT2Zmc2V0UGFyZW50QW5FbGVtZW50ID0gaXNIVE1MRWxlbWVudChvZmZzZXRQYXJlbnQpO1xuICB2YXIgb2Zmc2V0UGFyZW50SXNTY2FsZWQgPSBpc0hUTUxFbGVtZW50KG9mZnNldFBhcmVudCkgJiYgaXNFbGVtZW50U2NhbGVkKG9mZnNldFBhcmVudCk7XG4gIHZhciBkb2N1bWVudEVsZW1lbnQgPSBnZXREb2N1bWVudEVsZW1lbnQob2Zmc2V0UGFyZW50KTtcbiAgdmFyIHJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudE9yVmlydHVhbEVsZW1lbnQsIG9mZnNldFBhcmVudElzU2NhbGVkLCBpc0ZpeGVkKTtcbiAgdmFyIHNjcm9sbCA9IHtcbiAgICBzY3JvbGxMZWZ0OiAwLFxuICAgIHNjcm9sbFRvcDogMFxuICB9O1xuICB2YXIgb2Zmc2V0cyA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDBcbiAgfTtcblxuICBpZiAoaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgfHwgIWlzT2Zmc2V0UGFyZW50QW5FbGVtZW50ICYmICFpc0ZpeGVkKSB7XG4gICAgaWYgKGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgIT09ICdib2R5JyB8fCAvLyBodHRwczovL2dpdGh1Yi5jb20vcG9wcGVyanMvcG9wcGVyLWNvcmUvaXNzdWVzLzEwNzhcbiAgICBpc1Njcm9sbFBhcmVudChkb2N1bWVudEVsZW1lbnQpKSB7XG4gICAgICBzY3JvbGwgPSBnZXROb2RlU2Nyb2xsKG9mZnNldFBhcmVudCk7XG4gICAgfVxuXG4gICAgaWYgKGlzSFRNTEVsZW1lbnQob2Zmc2V0UGFyZW50KSkge1xuICAgICAgb2Zmc2V0cyA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChvZmZzZXRQYXJlbnQsIHRydWUpO1xuICAgICAgb2Zmc2V0cy54ICs9IG9mZnNldFBhcmVudC5jbGllbnRMZWZ0O1xuICAgICAgb2Zmc2V0cy55ICs9IG9mZnNldFBhcmVudC5jbGllbnRUb3A7XG4gICAgfSBlbHNlIGlmIChkb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIG9mZnNldHMueCA9IGdldFdpbmRvd1Njcm9sbEJhclgoZG9jdW1lbnRFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHg6IHJlY3QubGVmdCArIHNjcm9sbC5zY3JvbGxMZWZ0IC0gb2Zmc2V0cy54LFxuICAgIHk6IHJlY3QudG9wICsgc2Nyb2xsLnNjcm9sbFRvcCAtIG9mZnNldHMueSxcbiAgICB3aWR0aDogcmVjdC53aWR0aCxcbiAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0XG4gIH07XG59IiwiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkge1xuICByZXR1cm4gZ2V0V2luZG93KGVsZW1lbnQpLmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG59IiwiaW1wb3J0IHsgaXNFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpIHtcbiAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtcmV0dXJuXTogYXNzdW1lIGJvZHkgaXMgYWx3YXlzIGF2YWlsYWJsZVxuICByZXR1cm4gKChpc0VsZW1lbnQoZWxlbWVudCkgPyBlbGVtZW50Lm93bmVyRG9jdW1lbnQgOiAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cbiAgZWxlbWVudC5kb2N1bWVudCkgfHwgd2luZG93LmRvY3VtZW50KS5kb2N1bWVudEVsZW1lbnQ7XG59IiwiaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRDb21wdXRlZFN0eWxlIGZyb20gXCIuL2dldENvbXB1dGVkU3R5bGUuanNcIjtcbmltcG9ydCBnZXRXaW5kb3dTY3JvbGxCYXJYIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbEJhclguanNcIjtcbmltcG9ydCBnZXRXaW5kb3dTY3JvbGwgZnJvbSBcIi4vZ2V0V2luZG93U2Nyb2xsLmpzXCI7XG5pbXBvcnQgeyBtYXggfSBmcm9tIFwiLi4vdXRpbHMvbWF0aC5qc1wiOyAvLyBHZXRzIHRoZSBlbnRpcmUgc2l6ZSBvZiB0aGUgc2Nyb2xsYWJsZSBkb2N1bWVudCBhcmVhLCBldmVuIGV4dGVuZGluZyBvdXRzaWRlXG4vLyBvZiB0aGUgYDxodG1sPmAgYW5kIGA8Ym9keT5gIHJlY3QgYm91bmRzIGlmIGhvcml6b250YWxseSBzY3JvbGxhYmxlXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERvY3VtZW50UmVjdChlbGVtZW50KSB7XG4gIHZhciBfZWxlbWVudCRvd25lckRvY3VtZW47XG5cbiAgdmFyIGh0bWwgPSBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCk7XG4gIHZhciB3aW5TY3JvbGwgPSBnZXRXaW5kb3dTY3JvbGwoZWxlbWVudCk7XG4gIHZhciBib2R5ID0gKF9lbGVtZW50JG93bmVyRG9jdW1lbiA9IGVsZW1lbnQub3duZXJEb2N1bWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9lbGVtZW50JG93bmVyRG9jdW1lbi5ib2R5O1xuICB2YXIgd2lkdGggPSBtYXgoaHRtbC5zY3JvbGxXaWR0aCwgaHRtbC5jbGllbnRXaWR0aCwgYm9keSA/IGJvZHkuc2Nyb2xsV2lkdGggOiAwLCBib2R5ID8gYm9keS5jbGllbnRXaWR0aCA6IDApO1xuICB2YXIgaGVpZ2h0ID0gbWF4KGh0bWwuc2Nyb2xsSGVpZ2h0LCBodG1sLmNsaWVudEhlaWdodCwgYm9keSA/IGJvZHkuc2Nyb2xsSGVpZ2h0IDogMCwgYm9keSA/IGJvZHkuY2xpZW50SGVpZ2h0IDogMCk7XG4gIHZhciB4ID0gLXdpblNjcm9sbC5zY3JvbGxMZWZ0ICsgZ2V0V2luZG93U2Nyb2xsQmFyWChlbGVtZW50KTtcbiAgdmFyIHkgPSAtd2luU2Nyb2xsLnNjcm9sbFRvcDtcblxuICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShib2R5IHx8IGh0bWwpLmRpcmVjdGlvbiA9PT0gJ3J0bCcpIHtcbiAgICB4ICs9IG1heChodG1sLmNsaWVudFdpZHRoLCBib2R5ID8gYm9keS5jbGllbnRXaWR0aCA6IDApIC0gd2lkdGg7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICB4OiB4LFxuICAgIHk6IHlcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRIVE1MRWxlbWVudFNjcm9sbChlbGVtZW50KSB7XG4gIHJldHVybiB7XG4gICAgc2Nyb2xsTGVmdDogZWxlbWVudC5zY3JvbGxMZWZ0LFxuICAgIHNjcm9sbFRvcDogZWxlbWVudC5zY3JvbGxUb3BcbiAgfTtcbn0iLCJpbXBvcnQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGZyb20gXCIuL2dldEJvdW5kaW5nQ2xpZW50UmVjdC5qc1wiOyAvLyBSZXR1cm5zIHRoZSBsYXlvdXQgcmVjdCBvZiBhbiBlbGVtZW50IHJlbGF0aXZlIHRvIGl0cyBvZmZzZXRQYXJlbnQuIExheW91dFxuLy8gbWVhbnMgaXQgZG9lc24ndCB0YWtlIGludG8gYWNjb3VudCB0cmFuc2Zvcm1zLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRMYXlvdXRSZWN0KGVsZW1lbnQpIHtcbiAgdmFyIGNsaWVudFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCk7IC8vIFVzZSB0aGUgY2xpZW50UmVjdCBzaXplcyBpZiBpdCdzIG5vdCBiZWVuIHRyYW5zZm9ybWVkLlxuICAvLyBGaXhlcyBodHRwczovL2dpdGh1Yi5jb20vcG9wcGVyanMvcG9wcGVyLWNvcmUvaXNzdWVzLzEyMjNcblxuICB2YXIgd2lkdGggPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xuICB2YXIgaGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG5cbiAgaWYgKE1hdGguYWJzKGNsaWVudFJlY3Qud2lkdGggLSB3aWR0aCkgPD0gMSkge1xuICAgIHdpZHRoID0gY2xpZW50UmVjdC53aWR0aDtcbiAgfVxuXG4gIGlmIChNYXRoLmFicyhjbGllbnRSZWN0LmhlaWdodCAtIGhlaWdodCkgPD0gMSkge1xuICAgIGhlaWdodCA9IGNsaWVudFJlY3QuaGVpZ2h0O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB4OiBlbGVtZW50Lm9mZnNldExlZnQsXG4gICAgeTogZWxlbWVudC5vZmZzZXRUb3AsXG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Tm9kZU5hbWUoZWxlbWVudCkge1xuICByZXR1cm4gZWxlbWVudCA/IChlbGVtZW50Lm5vZGVOYW1lIHx8ICcnKS50b0xvd2VyQ2FzZSgpIDogbnVsbDtcbn0iLCJpbXBvcnQgZ2V0V2luZG93U2Nyb2xsIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbC5qc1wiO1xuaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmltcG9ydCB7IGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5pbXBvcnQgZ2V0SFRNTEVsZW1lbnRTY3JvbGwgZnJvbSBcIi4vZ2V0SFRNTEVsZW1lbnRTY3JvbGwuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE5vZGVTY3JvbGwobm9kZSkge1xuICBpZiAobm9kZSA9PT0gZ2V0V2luZG93KG5vZGUpIHx8ICFpc0hUTUxFbGVtZW50KG5vZGUpKSB7XG4gICAgcmV0dXJuIGdldFdpbmRvd1Njcm9sbChub2RlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZ2V0SFRNTEVsZW1lbnRTY3JvbGwobm9kZSk7XG4gIH1cbn0iLCJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5pbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tIFwiLi9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50LCBpc1NoYWRvd1Jvb3QgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5pbXBvcnQgaXNUYWJsZUVsZW1lbnQgZnJvbSBcIi4vaXNUYWJsZUVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRQYXJlbnROb2RlIGZyb20gXCIuL2dldFBhcmVudE5vZGUuanNcIjtcbmltcG9ydCBnZXRVQVN0cmluZyBmcm9tIFwiLi4vdXRpbHMvdXNlckFnZW50LmpzXCI7XG5cbmZ1bmN0aW9uIGdldFRydWVPZmZzZXRQYXJlbnQoZWxlbWVudCkge1xuICBpZiAoIWlzSFRNTEVsZW1lbnQoZWxlbWVudCkgfHwgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BvcHBlcmpzL3BvcHBlci1jb3JlL2lzc3Vlcy84MzdcbiAgZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0UGFyZW50O1xufSAvLyBgLm9mZnNldFBhcmVudGAgcmVwb3J0cyBgbnVsbGAgZm9yIGZpeGVkIGVsZW1lbnRzLCB3aGlsZSBhYnNvbHV0ZSBlbGVtZW50c1xuLy8gcmV0dXJuIHRoZSBjb250YWluaW5nIGJsb2NrXG5cblxuZnVuY3Rpb24gZ2V0Q29udGFpbmluZ0Jsb2NrKGVsZW1lbnQpIHtcbiAgdmFyIGlzRmlyZWZveCA9IC9maXJlZm94L2kudGVzdChnZXRVQVN0cmluZygpKTtcbiAgdmFyIGlzSUUgPSAvVHJpZGVudC9pLnRlc3QoZ2V0VUFTdHJpbmcoKSk7XG5cbiAgaWYgKGlzSUUgJiYgaXNIVE1MRWxlbWVudChlbGVtZW50KSkge1xuICAgIC8vIEluIElFIDksIDEwIGFuZCAxMSBmaXhlZCBlbGVtZW50cyBjb250YWluaW5nIGJsb2NrIGlzIGFsd2F5cyBlc3RhYmxpc2hlZCBieSB0aGUgdmlld3BvcnRcbiAgICB2YXIgZWxlbWVudENzcyA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG5cbiAgICBpZiAoZWxlbWVudENzcy5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgdmFyIGN1cnJlbnROb2RlID0gZ2V0UGFyZW50Tm9kZShlbGVtZW50KTtcblxuICBpZiAoaXNTaGFkb3dSb290KGN1cnJlbnROb2RlKSkge1xuICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUuaG9zdDtcbiAgfVxuXG4gIHdoaWxlIChpc0hUTUxFbGVtZW50KGN1cnJlbnROb2RlKSAmJiBbJ2h0bWwnLCAnYm9keSddLmluZGV4T2YoZ2V0Tm9kZU5hbWUoY3VycmVudE5vZGUpKSA8IDApIHtcbiAgICB2YXIgY3NzID0gZ2V0Q29tcHV0ZWRTdHlsZShjdXJyZW50Tm9kZSk7IC8vIFRoaXMgaXMgbm9uLWV4aGF1c3RpdmUgYnV0IGNvdmVycyB0aGUgbW9zdCBjb21tb24gQ1NTIHByb3BlcnRpZXMgdGhhdFxuICAgIC8vIGNyZWF0ZSBhIGNvbnRhaW5pbmcgYmxvY2suXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL0NvbnRhaW5pbmdfYmxvY2sjaWRlbnRpZnlpbmdfdGhlX2NvbnRhaW5pbmdfYmxvY2tcblxuICAgIGlmIChjc3MudHJhbnNmb3JtICE9PSAnbm9uZScgfHwgY3NzLnBlcnNwZWN0aXZlICE9PSAnbm9uZScgfHwgY3NzLmNvbnRhaW4gPT09ICdwYWludCcgfHwgWyd0cmFuc2Zvcm0nLCAncGVyc3BlY3RpdmUnXS5pbmRleE9mKGNzcy53aWxsQ2hhbmdlKSAhPT0gLTEgfHwgaXNGaXJlZm94ICYmIGNzcy53aWxsQ2hhbmdlID09PSAnZmlsdGVyJyB8fCBpc0ZpcmVmb3ggJiYgY3NzLmZpbHRlciAmJiBjc3MuZmlsdGVyICE9PSAnbm9uZScpIHtcbiAgICAgIHJldHVybiBjdXJyZW50Tm9kZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufSAvLyBHZXRzIHRoZSBjbG9zZXN0IGFuY2VzdG9yIHBvc2l0aW9uZWQgZWxlbWVudC4gSGFuZGxlcyBzb21lIGVkZ2UgY2FzZXMsXG4vLyBzdWNoIGFzIHRhYmxlIGFuY2VzdG9ycyBhbmQgY3Jvc3MgYnJvd3NlciBidWdzLlxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE9mZnNldFBhcmVudChlbGVtZW50KSB7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coZWxlbWVudCk7XG4gIHZhciBvZmZzZXRQYXJlbnQgPSBnZXRUcnVlT2Zmc2V0UGFyZW50KGVsZW1lbnQpO1xuXG4gIHdoaWxlIChvZmZzZXRQYXJlbnQgJiYgaXNUYWJsZUVsZW1lbnQob2Zmc2V0UGFyZW50KSAmJiBnZXRDb21wdXRlZFN0eWxlKG9mZnNldFBhcmVudCkucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG4gICAgb2Zmc2V0UGFyZW50ID0gZ2V0VHJ1ZU9mZnNldFBhcmVudChvZmZzZXRQYXJlbnQpO1xuICB9XG5cbiAgaWYgKG9mZnNldFBhcmVudCAmJiAoZ2V0Tm9kZU5hbWUob2Zmc2V0UGFyZW50KSA9PT0gJ2h0bWwnIHx8IGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgPT09ICdib2R5JyAmJiBnZXRDb21wdXRlZFN0eWxlKG9mZnNldFBhcmVudCkucG9zaXRpb24gPT09ICdzdGF0aWMnKSkge1xuICAgIHJldHVybiB3aW5kb3c7XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0UGFyZW50IHx8IGdldENvbnRhaW5pbmdCbG9jayhlbGVtZW50KSB8fCB3aW5kb3c7XG59IiwiaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IHsgaXNTaGFkb3dSb290IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0UGFyZW50Tm9kZShlbGVtZW50KSB7XG4gIGlmIChnZXROb2RlTmFtZShlbGVtZW50KSA9PT0gJ2h0bWwnKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICByZXR1cm4gKC8vIHRoaXMgaXMgYSBxdWlja2VyIChidXQgbGVzcyB0eXBlIHNhZmUpIHdheSB0byBzYXZlIHF1aXRlIHNvbWUgYnl0ZXMgZnJvbSB0aGUgYnVuZGxlXG4gICAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtcmV0dXJuXVxuICAgIC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuICAgIGVsZW1lbnQuYXNzaWduZWRTbG90IHx8IC8vIHN0ZXAgaW50byB0aGUgc2hhZG93IERPTSBvZiB0aGUgcGFyZW50IG9mIGEgc2xvdHRlZCBub2RlXG4gICAgZWxlbWVudC5wYXJlbnROb2RlIHx8ICggLy8gRE9NIEVsZW1lbnQgZGV0ZWN0ZWRcbiAgICBpc1NoYWRvd1Jvb3QoZWxlbWVudCkgPyBlbGVtZW50Lmhvc3QgOiBudWxsKSB8fCAvLyBTaGFkb3dSb290IGRldGVjdGVkXG4gICAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtY2FsbF06IEhUTUxFbGVtZW50IGlzIGEgTm9kZVxuICAgIGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSAvLyBmYWxsYmFja1xuXG4gICk7XG59IiwiaW1wb3J0IGdldFBhcmVudE5vZGUgZnJvbSBcIi4vZ2V0UGFyZW50Tm9kZS5qc1wiO1xuaW1wb3J0IGlzU2Nyb2xsUGFyZW50IGZyb20gXCIuL2lzU2Nyb2xsUGFyZW50LmpzXCI7XG5pbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcbmltcG9ydCB7IGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRTY3JvbGxQYXJlbnQobm9kZSkge1xuICBpZiAoWydodG1sJywgJ2JvZHknLCAnI2RvY3VtZW50J10uaW5kZXhPZihnZXROb2RlTmFtZShub2RlKSkgPj0gMCkge1xuICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl06IGFzc3VtZSBib2R5IGlzIGFsd2F5cyBhdmFpbGFibGVcbiAgICByZXR1cm4gbm9kZS5vd25lckRvY3VtZW50LmJvZHk7XG4gIH1cblxuICBpZiAoaXNIVE1MRWxlbWVudChub2RlKSAmJiBpc1Njcm9sbFBhcmVudChub2RlKSkge1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgcmV0dXJuIGdldFNjcm9sbFBhcmVudChnZXRQYXJlbnROb2RlKG5vZGUpKTtcbn0iLCJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRXaW5kb3dTY3JvbGxCYXJYIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbEJhclguanNcIjtcbmltcG9ydCBpc0xheW91dFZpZXdwb3J0IGZyb20gXCIuL2lzTGF5b3V0Vmlld3BvcnQuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFZpZXdwb3J0UmVjdChlbGVtZW50LCBzdHJhdGVneSkge1xuICB2YXIgd2luID0gZ2V0V2luZG93KGVsZW1lbnQpO1xuICB2YXIgaHRtbCA9IGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KTtcbiAgdmFyIHZpc3VhbFZpZXdwb3J0ID0gd2luLnZpc3VhbFZpZXdwb3J0O1xuICB2YXIgd2lkdGggPSBodG1sLmNsaWVudFdpZHRoO1xuICB2YXIgaGVpZ2h0ID0gaHRtbC5jbGllbnRIZWlnaHQ7XG4gIHZhciB4ID0gMDtcbiAgdmFyIHkgPSAwO1xuXG4gIGlmICh2aXN1YWxWaWV3cG9ydCkge1xuICAgIHdpZHRoID0gdmlzdWFsVmlld3BvcnQud2lkdGg7XG4gICAgaGVpZ2h0ID0gdmlzdWFsVmlld3BvcnQuaGVpZ2h0O1xuICAgIHZhciBsYXlvdXRWaWV3cG9ydCA9IGlzTGF5b3V0Vmlld3BvcnQoKTtcblxuICAgIGlmIChsYXlvdXRWaWV3cG9ydCB8fCAhbGF5b3V0Vmlld3BvcnQgJiYgc3RyYXRlZ3kgPT09ICdmaXhlZCcpIHtcbiAgICAgIHggPSB2aXN1YWxWaWV3cG9ydC5vZmZzZXRMZWZ0O1xuICAgICAgeSA9IHZpc3VhbFZpZXdwb3J0Lm9mZnNldFRvcDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICB4OiB4ICsgZ2V0V2luZG93U2Nyb2xsQmFyWChlbGVtZW50KSxcbiAgICB5OiB5XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0V2luZG93KG5vZGUpIHtcbiAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgIHJldHVybiB3aW5kb3c7XG4gIH1cblxuICBpZiAobm9kZS50b1N0cmluZygpICE9PSAnW29iamVjdCBXaW5kb3ddJykge1xuICAgIHZhciBvd25lckRvY3VtZW50ID0gbm9kZS5vd25lckRvY3VtZW50O1xuICAgIHJldHVybiBvd25lckRvY3VtZW50ID8gb3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyB8fCB3aW5kb3cgOiB3aW5kb3c7XG4gIH1cblxuICByZXR1cm4gbm9kZTtcbn0iLCJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0V2luZG93U2Nyb2xsKG5vZGUpIHtcbiAgdmFyIHdpbiA9IGdldFdpbmRvdyhub2RlKTtcbiAgdmFyIHNjcm9sbExlZnQgPSB3aW4ucGFnZVhPZmZzZXQ7XG4gIHZhciBzY3JvbGxUb3AgPSB3aW4ucGFnZVlPZmZzZXQ7XG4gIHJldHVybiB7XG4gICAgc2Nyb2xsTGVmdDogc2Nyb2xsTGVmdCxcbiAgICBzY3JvbGxUb3A6IHNjcm9sbFRvcFxuICB9O1xufSIsImltcG9ydCBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZnJvbSBcIi4vZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGdldFdpbmRvd1Njcm9sbCBmcm9tIFwiLi9nZXRXaW5kb3dTY3JvbGwuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCkge1xuICAvLyBJZiA8aHRtbD4gaGFzIGEgQ1NTIHdpZHRoIGdyZWF0ZXIgdGhhbiB0aGUgdmlld3BvcnQsIHRoZW4gdGhpcyB3aWxsIGJlXG4gIC8vIGluY29ycmVjdCBmb3IgUlRMLlxuICAvLyBQb3BwZXIgMSBpcyBicm9rZW4gaW4gdGhpcyBjYXNlIGFuZCBuZXZlciBoYWQgYSBidWcgcmVwb3J0IHNvIGxldCdzIGFzc3VtZVxuICAvLyBpdCdzIG5vdCBhbiBpc3N1ZS4gSSBkb24ndCB0aGluayBhbnlvbmUgZXZlciBzcGVjaWZpZXMgd2lkdGggb24gPGh0bWw+XG4gIC8vIGFueXdheS5cbiAgLy8gQnJvd3NlcnMgd2hlcmUgdGhlIGxlZnQgc2Nyb2xsYmFyIGRvZXNuJ3QgY2F1c2UgYW4gaXNzdWUgcmVwb3J0IGAwYCBmb3JcbiAgLy8gdGhpcyAoZS5nLiBFZGdlIDIwMTksIElFMTEsIFNhZmFyaSlcbiAgcmV0dXJuIGdldEJvdW5kaW5nQ2xpZW50UmVjdChnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkpLmxlZnQgKyBnZXRXaW5kb3dTY3JvbGwoZWxlbWVudCkuc2Nyb2xsTGVmdDtcbn0iLCJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuXG5mdW5jdGlvbiBpc0VsZW1lbnQobm9kZSkge1xuICB2YXIgT3duRWxlbWVudCA9IGdldFdpbmRvdyhub2RlKS5FbGVtZW50O1xuICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIE93bkVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGlzSFRNTEVsZW1lbnQobm9kZSkge1xuICB2YXIgT3duRWxlbWVudCA9IGdldFdpbmRvdyhub2RlKS5IVE1MRWxlbWVudDtcbiAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBPd25FbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gaXNTaGFkb3dSb290KG5vZGUpIHtcbiAgLy8gSUUgMTEgaGFzIG5vIFNoYWRvd1Jvb3RcbiAgaWYgKHR5cGVvZiBTaGFkb3dSb290ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBPd25FbGVtZW50ID0gZ2V0V2luZG93KG5vZGUpLlNoYWRvd1Jvb3Q7XG4gIHJldHVybiBub2RlIGluc3RhbmNlb2YgT3duRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgU2hhZG93Um9vdDtcbn1cblxuZXhwb3J0IHsgaXNFbGVtZW50LCBpc0hUTUxFbGVtZW50LCBpc1NoYWRvd1Jvb3QgfTsiLCJpbXBvcnQgZ2V0VUFTdHJpbmcgZnJvbSBcIi4uL3V0aWxzL3VzZXJBZ2VudC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNMYXlvdXRWaWV3cG9ydCgpIHtcbiAgcmV0dXJuICEvXigoPyFjaHJvbWV8YW5kcm9pZCkuKSpzYWZhcmkvaS50ZXN0KGdldFVBU3RyaW5nKCkpO1xufSIsImltcG9ydCBnZXRDb21wdXRlZFN0eWxlIGZyb20gXCIuL2dldENvbXB1dGVkU3R5bGUuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2Nyb2xsUGFyZW50KGVsZW1lbnQpIHtcbiAgLy8gRmlyZWZveCB3YW50cyB1cyB0byBjaGVjayBgLXhgIGFuZCBgLXlgIHZhcmlhdGlvbnMgYXMgd2VsbFxuICB2YXIgX2dldENvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLFxuICAgICAgb3ZlcmZsb3cgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5vdmVyZmxvdyxcbiAgICAgIG92ZXJmbG93WCA9IF9nZXRDb21wdXRlZFN0eWxlLm92ZXJmbG93WCxcbiAgICAgIG92ZXJmbG93WSA9IF9nZXRDb21wdXRlZFN0eWxlLm92ZXJmbG93WTtcblxuICByZXR1cm4gL2F1dG98c2Nyb2xsfG92ZXJsYXl8aGlkZGVuLy50ZXN0KG92ZXJmbG93ICsgb3ZlcmZsb3dZICsgb3ZlcmZsb3dYKTtcbn0iLCJpbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVGFibGVFbGVtZW50KGVsZW1lbnQpIHtcbiAgcmV0dXJuIFsndGFibGUnLCAndGQnLCAndGgnXS5pbmRleE9mKGdldE5vZGVOYW1lKGVsZW1lbnQpKSA+PSAwO1xufSIsImltcG9ydCBnZXRTY3JvbGxQYXJlbnQgZnJvbSBcIi4vZ2V0U2Nyb2xsUGFyZW50LmpzXCI7XG5pbXBvcnQgZ2V0UGFyZW50Tm9kZSBmcm9tIFwiLi9nZXRQYXJlbnROb2RlLmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuaW1wb3J0IGlzU2Nyb2xsUGFyZW50IGZyb20gXCIuL2lzU2Nyb2xsUGFyZW50LmpzXCI7XG4vKlxuZ2l2ZW4gYSBET00gZWxlbWVudCwgcmV0dXJuIHRoZSBsaXN0IG9mIGFsbCBzY3JvbGwgcGFyZW50cywgdXAgdGhlIGxpc3Qgb2YgYW5jZXNvcnNcbnVudGlsIHdlIGdldCB0byB0aGUgdG9wIHdpbmRvdyBvYmplY3QuIFRoaXMgbGlzdCBpcyB3aGF0IHdlIGF0dGFjaCBzY3JvbGwgbGlzdGVuZXJzXG50bywgYmVjYXVzZSBpZiBhbnkgb2YgdGhlc2UgcGFyZW50IGVsZW1lbnRzIHNjcm9sbCwgd2UnbGwgbmVlZCB0byByZS1jYWxjdWxhdGUgdGhlXG5yZWZlcmVuY2UgZWxlbWVudCdzIHBvc2l0aW9uLlxuKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGlzdFNjcm9sbFBhcmVudHMoZWxlbWVudCwgbGlzdCkge1xuICB2YXIgX2VsZW1lbnQkb3duZXJEb2N1bWVuO1xuXG4gIGlmIChsaXN0ID09PSB2b2lkIDApIHtcbiAgICBsaXN0ID0gW107XG4gIH1cblxuICB2YXIgc2Nyb2xsUGFyZW50ID0gZ2V0U2Nyb2xsUGFyZW50KGVsZW1lbnQpO1xuICB2YXIgaXNCb2R5ID0gc2Nyb2xsUGFyZW50ID09PSAoKF9lbGVtZW50JG93bmVyRG9jdW1lbiA9IGVsZW1lbnQub3duZXJEb2N1bWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9lbGVtZW50JG93bmVyRG9jdW1lbi5ib2R5KTtcbiAgdmFyIHdpbiA9IGdldFdpbmRvdyhzY3JvbGxQYXJlbnQpO1xuICB2YXIgdGFyZ2V0ID0gaXNCb2R5ID8gW3dpbl0uY29uY2F0KHdpbi52aXN1YWxWaWV3cG9ydCB8fCBbXSwgaXNTY3JvbGxQYXJlbnQoc2Nyb2xsUGFyZW50KSA/IHNjcm9sbFBhcmVudCA6IFtdKSA6IHNjcm9sbFBhcmVudDtcbiAgdmFyIHVwZGF0ZWRMaXN0ID0gbGlzdC5jb25jYXQodGFyZ2V0KTtcbiAgcmV0dXJuIGlzQm9keSA/IHVwZGF0ZWRMaXN0IDogLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtY2FsbF06IGlzQm9keSB0ZWxscyB1cyB0YXJnZXQgd2lsbCBiZSBhbiBIVE1MRWxlbWVudCBoZXJlXG4gIHVwZGF0ZWRMaXN0LmNvbmNhdChsaXN0U2Nyb2xsUGFyZW50cyhnZXRQYXJlbnROb2RlKHRhcmdldCkpKTtcbn0iLCJleHBvcnQgdmFyIHRvcCA9ICd0b3AnO1xuZXhwb3J0IHZhciBib3R0b20gPSAnYm90dG9tJztcbmV4cG9ydCB2YXIgcmlnaHQgPSAncmlnaHQnO1xuZXhwb3J0IHZhciBsZWZ0ID0gJ2xlZnQnO1xuZXhwb3J0IHZhciBhdXRvID0gJ2F1dG8nO1xuZXhwb3J0IHZhciBiYXNlUGxhY2VtZW50cyA9IFt0b3AsIGJvdHRvbSwgcmlnaHQsIGxlZnRdO1xuZXhwb3J0IHZhciBzdGFydCA9ICdzdGFydCc7XG5leHBvcnQgdmFyIGVuZCA9ICdlbmQnO1xuZXhwb3J0IHZhciBjbGlwcGluZ1BhcmVudHMgPSAnY2xpcHBpbmdQYXJlbnRzJztcbmV4cG9ydCB2YXIgdmlld3BvcnQgPSAndmlld3BvcnQnO1xuZXhwb3J0IHZhciBwb3BwZXIgPSAncG9wcGVyJztcbmV4cG9ydCB2YXIgcmVmZXJlbmNlID0gJ3JlZmVyZW5jZSc7XG5leHBvcnQgdmFyIHZhcmlhdGlvblBsYWNlbWVudHMgPSAvKiNfX1BVUkVfXyovYmFzZVBsYWNlbWVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICByZXR1cm4gYWNjLmNvbmNhdChbcGxhY2VtZW50ICsgXCItXCIgKyBzdGFydCwgcGxhY2VtZW50ICsgXCItXCIgKyBlbmRdKTtcbn0sIFtdKTtcbmV4cG9ydCB2YXIgcGxhY2VtZW50cyA9IC8qI19fUFVSRV9fKi9bXS5jb25jYXQoYmFzZVBsYWNlbWVudHMsIFthdXRvXSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICByZXR1cm4gYWNjLmNvbmNhdChbcGxhY2VtZW50LCBwbGFjZW1lbnQgKyBcIi1cIiArIHN0YXJ0LCBwbGFjZW1lbnQgKyBcIi1cIiArIGVuZF0pO1xufSwgW10pOyAvLyBtb2RpZmllcnMgdGhhdCBuZWVkIHRvIHJlYWQgdGhlIERPTVxuXG5leHBvcnQgdmFyIGJlZm9yZVJlYWQgPSAnYmVmb3JlUmVhZCc7XG5leHBvcnQgdmFyIHJlYWQgPSAncmVhZCc7XG5leHBvcnQgdmFyIGFmdGVyUmVhZCA9ICdhZnRlclJlYWQnOyAvLyBwdXJlLWxvZ2ljIG1vZGlmaWVyc1xuXG5leHBvcnQgdmFyIGJlZm9yZU1haW4gPSAnYmVmb3JlTWFpbic7XG5leHBvcnQgdmFyIG1haW4gPSAnbWFpbic7XG5leHBvcnQgdmFyIGFmdGVyTWFpbiA9ICdhZnRlck1haW4nOyAvLyBtb2RpZmllciB3aXRoIHRoZSBwdXJwb3NlIHRvIHdyaXRlIHRvIHRoZSBET00gKG9yIHdyaXRlIGludG8gYSBmcmFtZXdvcmsgc3RhdGUpXG5cbmV4cG9ydCB2YXIgYmVmb3JlV3JpdGUgPSAnYmVmb3JlV3JpdGUnO1xuZXhwb3J0IHZhciB3cml0ZSA9ICd3cml0ZSc7XG5leHBvcnQgdmFyIGFmdGVyV3JpdGUgPSAnYWZ0ZXJXcml0ZSc7XG5leHBvcnQgdmFyIG1vZGlmaWVyUGhhc2VzID0gW2JlZm9yZVJlYWQsIHJlYWQsIGFmdGVyUmVhZCwgYmVmb3JlTWFpbiwgbWFpbiwgYWZ0ZXJNYWluLCBiZWZvcmVXcml0ZSwgd3JpdGUsIGFmdGVyV3JpdGVdOyIsImV4cG9ydCAqIGZyb20gXCIuL2VudW1zLmpzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9tb2RpZmllcnMvaW5kZXguanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgeyBwb3BwZXJHZW5lcmF0b3IsIGRldGVjdE92ZXJmbG93LCBjcmVhdGVQb3BwZXIgYXMgY3JlYXRlUG9wcGVyQmFzZSB9IGZyb20gXCIuL2NyZWF0ZVBvcHBlci5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCB7IGNyZWF0ZVBvcHBlciB9IGZyb20gXCIuL3BvcHBlci5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCB7IGNyZWF0ZVBvcHBlciBhcyBjcmVhdGVQb3BwZXJMaXRlIH0gZnJvbSBcIi4vcG9wcGVyLWxpdGUuanNcIjsiLCJpbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4uL2RvbS11dGlscy9nZXROb2RlTmFtZS5qc1wiO1xuaW1wb3J0IHsgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuLi9kb20tdXRpbHMvaW5zdGFuY2VPZi5qc1wiOyAvLyBUaGlzIG1vZGlmaWVyIHRha2VzIHRoZSBzdHlsZXMgcHJlcGFyZWQgYnkgdGhlIGBjb21wdXRlU3R5bGVzYCBtb2RpZmllclxuLy8gYW5kIGFwcGxpZXMgdGhlbSB0byB0aGUgSFRNTEVsZW1lbnRzIHN1Y2ggYXMgcG9wcGVyIGFuZCBhcnJvd1xuXG5mdW5jdGlvbiBhcHBseVN0eWxlcyhfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGU7XG4gIE9iamVjdC5rZXlzKHN0YXRlLmVsZW1lbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIHN0eWxlID0gc3RhdGUuc3R5bGVzW25hbWVdIHx8IHt9O1xuICAgIHZhciBhdHRyaWJ1dGVzID0gc3RhdGUuYXR0cmlidXRlc1tuYW1lXSB8fCB7fTtcbiAgICB2YXIgZWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzW25hbWVdOyAvLyBhcnJvdyBpcyBvcHRpb25hbCArIHZpcnR1YWwgZWxlbWVudHNcblxuICAgIGlmICghaXNIVE1MRWxlbWVudChlbGVtZW50KSB8fCAhZ2V0Tm9kZU5hbWUoZWxlbWVudCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIEZsb3cgZG9lc24ndCBzdXBwb3J0IHRvIGV4dGVuZCB0aGlzIHByb3BlcnR5LCBidXQgaXQncyB0aGUgbW9zdFxuICAgIC8vIGVmZmVjdGl2ZSB3YXkgdG8gYXBwbHkgc3R5bGVzIHRvIGFuIEhUTUxFbGVtZW50XG4gICAgLy8gJEZsb3dGaXhNZVtjYW5ub3Qtd3JpdGVdXG5cblxuICAgIE9iamVjdC5hc3NpZ24oZWxlbWVudC5zdHlsZSwgc3R5bGUpO1xuICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGF0dHJpYnV0ZXNbbmFtZV07XG5cbiAgICAgIGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSA9PT0gdHJ1ZSA/ICcnIDogdmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZWZmZWN0KF9yZWYyKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYyLnN0YXRlO1xuICB2YXIgaW5pdGlhbFN0eWxlcyA9IHtcbiAgICBwb3BwZXI6IHtcbiAgICAgIHBvc2l0aW9uOiBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5LFxuICAgICAgbGVmdDogJzAnLFxuICAgICAgdG9wOiAnMCcsXG4gICAgICBtYXJnaW46ICcwJ1xuICAgIH0sXG4gICAgYXJyb3c6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gICAgfSxcbiAgICByZWZlcmVuY2U6IHt9XG4gIH07XG4gIE9iamVjdC5hc3NpZ24oc3RhdGUuZWxlbWVudHMucG9wcGVyLnN0eWxlLCBpbml0aWFsU3R5bGVzLnBvcHBlcik7XG4gIHN0YXRlLnN0eWxlcyA9IGluaXRpYWxTdHlsZXM7XG5cbiAgaWYgKHN0YXRlLmVsZW1lbnRzLmFycm93KSB7XG4gICAgT2JqZWN0LmFzc2lnbihzdGF0ZS5lbGVtZW50cy5hcnJvdy5zdHlsZSwgaW5pdGlhbFN0eWxlcy5hcnJvdyk7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIE9iamVjdC5rZXlzKHN0YXRlLmVsZW1lbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzW25hbWVdO1xuICAgICAgdmFyIGF0dHJpYnV0ZXMgPSBzdGF0ZS5hdHRyaWJ1dGVzW25hbWVdIHx8IHt9O1xuICAgICAgdmFyIHN0eWxlUHJvcGVydGllcyA9IE9iamVjdC5rZXlzKHN0YXRlLnN0eWxlcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSA/IHN0YXRlLnN0eWxlc1tuYW1lXSA6IGluaXRpYWxTdHlsZXNbbmFtZV0pOyAvLyBTZXQgYWxsIHZhbHVlcyB0byBhbiBlbXB0eSBzdHJpbmcgdG8gdW5zZXQgdGhlbVxuXG4gICAgICB2YXIgc3R5bGUgPSBzdHlsZVByb3BlcnRpZXMucmVkdWNlKGZ1bmN0aW9uIChzdHlsZSwgcHJvcGVydHkpIHtcbiAgICAgICAgc3R5bGVbcHJvcGVydHldID0gJyc7XG4gICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgIH0sIHt9KTsgLy8gYXJyb3cgaXMgb3B0aW9uYWwgKyB2aXJ0dWFsIGVsZW1lbnRzXG5cbiAgICAgIGlmICghaXNIVE1MRWxlbWVudChlbGVtZW50KSB8fCAhZ2V0Tm9kZU5hbWUoZWxlbWVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBPYmplY3QuYXNzaWduKGVsZW1lbnQuc3R5bGUsIHN0eWxlKTtcbiAgICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYnV0ZSkge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdhcHBseVN0eWxlcycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnd3JpdGUnLFxuICBmbjogYXBwbHlTdHlsZXMsXG4gIGVmZmVjdDogZWZmZWN0LFxuICByZXF1aXJlczogWydjb21wdXRlU3R5bGVzJ11cbn07IiwiaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRMYXlvdXRSZWN0IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0TGF5b3V0UmVjdC5qc1wiO1xuaW1wb3J0IGNvbnRhaW5zIGZyb20gXCIuLi9kb20tdXRpbHMvY29udGFpbnMuanNcIjtcbmltcG9ydCBnZXRPZmZzZXRQYXJlbnQgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRPZmZzZXRQYXJlbnQuanNcIjtcbmltcG9ydCBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldE1haW5BeGlzRnJvbVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IHsgd2l0aGluIH0gZnJvbSBcIi4uL3V0aWxzL3dpdGhpbi5qc1wiO1xuaW1wb3J0IG1lcmdlUGFkZGluZ09iamVjdCBmcm9tIFwiLi4vdXRpbHMvbWVyZ2VQYWRkaW5nT2JqZWN0LmpzXCI7XG5pbXBvcnQgZXhwYW5kVG9IYXNoTWFwIGZyb20gXCIuLi91dGlscy9leHBhbmRUb0hhc2hNYXAuanNcIjtcbmltcG9ydCB7IGxlZnQsIHJpZ2h0LCBiYXNlUGxhY2VtZW50cywgdG9wLCBib3R0b20gfSBmcm9tIFwiLi4vZW51bXMuanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG52YXIgdG9QYWRkaW5nT2JqZWN0ID0gZnVuY3Rpb24gdG9QYWRkaW5nT2JqZWN0KHBhZGRpbmcsIHN0YXRlKSB7XG4gIHBhZGRpbmcgPSB0eXBlb2YgcGFkZGluZyA9PT0gJ2Z1bmN0aW9uJyA/IHBhZGRpbmcoT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUucmVjdHMsIHtcbiAgICBwbGFjZW1lbnQ6IHN0YXRlLnBsYWNlbWVudFxuICB9KSkgOiBwYWRkaW5nO1xuICByZXR1cm4gbWVyZ2VQYWRkaW5nT2JqZWN0KHR5cGVvZiBwYWRkaW5nICE9PSAnbnVtYmVyJyA/IHBhZGRpbmcgOiBleHBhbmRUb0hhc2hNYXAocGFkZGluZywgYmFzZVBsYWNlbWVudHMpKTtcbn07XG5cbmZ1bmN0aW9uIGFycm93KF9yZWYpIHtcbiAgdmFyIF9zdGF0ZSRtb2RpZmllcnNEYXRhJDtcblxuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnM7XG4gIHZhciBhcnJvd0VsZW1lbnQgPSBzdGF0ZS5lbGVtZW50cy5hcnJvdztcbiAgdmFyIHBvcHBlck9mZnNldHMgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHM7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChzdGF0ZS5wbGFjZW1lbnQpO1xuICB2YXIgYXhpcyA9IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChiYXNlUGxhY2VtZW50KTtcbiAgdmFyIGlzVmVydGljYWwgPSBbbGVmdCwgcmlnaHRdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPj0gMDtcbiAgdmFyIGxlbiA9IGlzVmVydGljYWwgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG5cbiAgaWYgKCFhcnJvd0VsZW1lbnQgfHwgIXBvcHBlck9mZnNldHMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgcGFkZGluZ09iamVjdCA9IHRvUGFkZGluZ09iamVjdChvcHRpb25zLnBhZGRpbmcsIHN0YXRlKTtcbiAgdmFyIGFycm93UmVjdCA9IGdldExheW91dFJlY3QoYXJyb3dFbGVtZW50KTtcbiAgdmFyIG1pblByb3AgPSBheGlzID09PSAneScgPyB0b3AgOiBsZWZ0O1xuICB2YXIgbWF4UHJvcCA9IGF4aXMgPT09ICd5JyA/IGJvdHRvbSA6IHJpZ2h0O1xuICB2YXIgZW5kRGlmZiA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZVtsZW5dICsgc3RhdGUucmVjdHMucmVmZXJlbmNlW2F4aXNdIC0gcG9wcGVyT2Zmc2V0c1theGlzXSAtIHN0YXRlLnJlY3RzLnBvcHBlcltsZW5dO1xuICB2YXIgc3RhcnREaWZmID0gcG9wcGVyT2Zmc2V0c1theGlzXSAtIHN0YXRlLnJlY3RzLnJlZmVyZW5jZVtheGlzXTtcbiAgdmFyIGFycm93T2Zmc2V0UGFyZW50ID0gZ2V0T2Zmc2V0UGFyZW50KGFycm93RWxlbWVudCk7XG4gIHZhciBjbGllbnRTaXplID0gYXJyb3dPZmZzZXRQYXJlbnQgPyBheGlzID09PSAneScgPyBhcnJvd09mZnNldFBhcmVudC5jbGllbnRIZWlnaHQgfHwgMCA6IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudFdpZHRoIHx8IDAgOiAwO1xuICB2YXIgY2VudGVyVG9SZWZlcmVuY2UgPSBlbmREaWZmIC8gMiAtIHN0YXJ0RGlmZiAvIDI7IC8vIE1ha2Ugc3VyZSB0aGUgYXJyb3cgZG9lc24ndCBvdmVyZmxvdyB0aGUgcG9wcGVyIGlmIHRoZSBjZW50ZXIgcG9pbnQgaXNcbiAgLy8gb3V0c2lkZSBvZiB0aGUgcG9wcGVyIGJvdW5kc1xuXG4gIHZhciBtaW4gPSBwYWRkaW5nT2JqZWN0W21pblByb3BdO1xuICB2YXIgbWF4ID0gY2xpZW50U2l6ZSAtIGFycm93UmVjdFtsZW5dIC0gcGFkZGluZ09iamVjdFttYXhQcm9wXTtcbiAgdmFyIGNlbnRlciA9IGNsaWVudFNpemUgLyAyIC0gYXJyb3dSZWN0W2xlbl0gLyAyICsgY2VudGVyVG9SZWZlcmVuY2U7XG4gIHZhciBvZmZzZXQgPSB3aXRoaW4obWluLCBjZW50ZXIsIG1heCk7IC8vIFByZXZlbnRzIGJyZWFraW5nIHN5bnRheCBoaWdobGlnaHRpbmcuLi5cblxuICB2YXIgYXhpc1Byb3AgPSBheGlzO1xuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gKF9zdGF0ZSRtb2RpZmllcnNEYXRhJCA9IHt9LCBfc3RhdGUkbW9kaWZpZXJzRGF0YSRbYXhpc1Byb3BdID0gb2Zmc2V0LCBfc3RhdGUkbW9kaWZpZXJzRGF0YSQuY2VudGVyT2Zmc2V0ID0gb2Zmc2V0IC0gY2VudGVyLCBfc3RhdGUkbW9kaWZpZXJzRGF0YSQpO1xufVxuXG5mdW5jdGlvbiBlZmZlY3QoX3JlZjIpIHtcbiAgdmFyIHN0YXRlID0gX3JlZjIuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZjIub3B0aW9ucztcbiAgdmFyIF9vcHRpb25zJGVsZW1lbnQgPSBvcHRpb25zLmVsZW1lbnQsXG4gICAgICBhcnJvd0VsZW1lbnQgPSBfb3B0aW9ucyRlbGVtZW50ID09PSB2b2lkIDAgPyAnW2RhdGEtcG9wcGVyLWFycm93XScgOiBfb3B0aW9ucyRlbGVtZW50O1xuXG4gIGlmIChhcnJvd0VsZW1lbnQgPT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfSAvLyBDU1Mgc2VsZWN0b3JcblxuXG4gIGlmICh0eXBlb2YgYXJyb3dFbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgIGFycm93RWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzLnBvcHBlci5xdWVyeVNlbGVjdG9yKGFycm93RWxlbWVudCk7XG5cbiAgICBpZiAoIWFycm93RWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY29udGFpbnMoc3RhdGUuZWxlbWVudHMucG9wcGVyLCBhcnJvd0VsZW1lbnQpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgc3RhdGUuZWxlbWVudHMuYXJyb3cgPSBhcnJvd0VsZW1lbnQ7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdhcnJvdycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIGZuOiBhcnJvdyxcbiAgZWZmZWN0OiBlZmZlY3QsXG4gIHJlcXVpcmVzOiBbJ3BvcHBlck9mZnNldHMnXSxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydwcmV2ZW50T3ZlcmZsb3cnXVxufTsiLCJpbXBvcnQgeyB0b3AsIGxlZnQsIHJpZ2h0LCBib3R0b20sIGVuZCB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldFdpbmRvdy5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XG5pbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldFZhcmlhdGlvbiBmcm9tIFwiLi4vdXRpbHMvZ2V0VmFyaWF0aW9uLmpzXCI7XG5pbXBvcnQgeyByb3VuZCB9IGZyb20gXCIuLi91dGlscy9tYXRoLmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxudmFyIHVuc2V0U2lkZXMgPSB7XG4gIHRvcDogJ2F1dG8nLFxuICByaWdodDogJ2F1dG8nLFxuICBib3R0b206ICdhdXRvJyxcbiAgbGVmdDogJ2F1dG8nXG59OyAvLyBSb3VuZCB0aGUgb2Zmc2V0cyB0byB0aGUgbmVhcmVzdCBzdWl0YWJsZSBzdWJwaXhlbCBiYXNlZCBvbiB0aGUgRFBSLlxuLy8gWm9vbWluZyBjYW4gY2hhbmdlIHRoZSBEUFIsIGJ1dCBpdCBzZWVtcyB0byByZXBvcnQgYSB2YWx1ZSB0aGF0IHdpbGxcbi8vIGNsZWFubHkgZGl2aWRlIHRoZSB2YWx1ZXMgaW50byB0aGUgYXBwcm9wcmlhdGUgc3VicGl4ZWxzLlxuXG5mdW5jdGlvbiByb3VuZE9mZnNldHNCeURQUihfcmVmLCB3aW4pIHtcbiAgdmFyIHggPSBfcmVmLngsXG4gICAgICB5ID0gX3JlZi55O1xuICB2YXIgZHByID0gd2luLmRldmljZVBpeGVsUmF0aW8gfHwgMTtcbiAgcmV0dXJuIHtcbiAgICB4OiByb3VuZCh4ICogZHByKSAvIGRwciB8fCAwLFxuICAgIHk6IHJvdW5kKHkgKiBkcHIpIC8gZHByIHx8IDBcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcFRvU3R5bGVzKF9yZWYyKSB7XG4gIHZhciBfT2JqZWN0JGFzc2lnbjI7XG5cbiAgdmFyIHBvcHBlciA9IF9yZWYyLnBvcHBlcixcbiAgICAgIHBvcHBlclJlY3QgPSBfcmVmMi5wb3BwZXJSZWN0LFxuICAgICAgcGxhY2VtZW50ID0gX3JlZjIucGxhY2VtZW50LFxuICAgICAgdmFyaWF0aW9uID0gX3JlZjIudmFyaWF0aW9uLFxuICAgICAgb2Zmc2V0cyA9IF9yZWYyLm9mZnNldHMsXG4gICAgICBwb3NpdGlvbiA9IF9yZWYyLnBvc2l0aW9uLFxuICAgICAgZ3B1QWNjZWxlcmF0aW9uID0gX3JlZjIuZ3B1QWNjZWxlcmF0aW9uLFxuICAgICAgYWRhcHRpdmUgPSBfcmVmMi5hZGFwdGl2ZSxcbiAgICAgIHJvdW5kT2Zmc2V0cyA9IF9yZWYyLnJvdW5kT2Zmc2V0cyxcbiAgICAgIGlzRml4ZWQgPSBfcmVmMi5pc0ZpeGVkO1xuICB2YXIgX29mZnNldHMkeCA9IG9mZnNldHMueCxcbiAgICAgIHggPSBfb2Zmc2V0cyR4ID09PSB2b2lkIDAgPyAwIDogX29mZnNldHMkeCxcbiAgICAgIF9vZmZzZXRzJHkgPSBvZmZzZXRzLnksXG4gICAgICB5ID0gX29mZnNldHMkeSA9PT0gdm9pZCAwID8gMCA6IF9vZmZzZXRzJHk7XG5cbiAgdmFyIF9yZWYzID0gdHlwZW9mIHJvdW5kT2Zmc2V0cyA9PT0gJ2Z1bmN0aW9uJyA/IHJvdW5kT2Zmc2V0cyh7XG4gICAgeDogeCxcbiAgICB5OiB5XG4gIH0pIDoge1xuICAgIHg6IHgsXG4gICAgeTogeVxuICB9O1xuXG4gIHggPSBfcmVmMy54O1xuICB5ID0gX3JlZjMueTtcbiAgdmFyIGhhc1ggPSBvZmZzZXRzLmhhc093blByb3BlcnR5KCd4Jyk7XG4gIHZhciBoYXNZID0gb2Zmc2V0cy5oYXNPd25Qcm9wZXJ0eSgneScpO1xuICB2YXIgc2lkZVggPSBsZWZ0O1xuICB2YXIgc2lkZVkgPSB0b3A7XG4gIHZhciB3aW4gPSB3aW5kb3c7XG5cbiAgaWYgKGFkYXB0aXZlKSB7XG4gICAgdmFyIG9mZnNldFBhcmVudCA9IGdldE9mZnNldFBhcmVudChwb3BwZXIpO1xuICAgIHZhciBoZWlnaHRQcm9wID0gJ2NsaWVudEhlaWdodCc7XG4gICAgdmFyIHdpZHRoUHJvcCA9ICdjbGllbnRXaWR0aCc7XG5cbiAgICBpZiAob2Zmc2V0UGFyZW50ID09PSBnZXRXaW5kb3cocG9wcGVyKSkge1xuICAgICAgb2Zmc2V0UGFyZW50ID0gZ2V0RG9jdW1lbnRFbGVtZW50KHBvcHBlcik7XG5cbiAgICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKG9mZnNldFBhcmVudCkucG9zaXRpb24gIT09ICdzdGF0aWMnICYmIHBvc2l0aW9uID09PSAnYWJzb2x1dGUnKSB7XG4gICAgICAgIGhlaWdodFByb3AgPSAnc2Nyb2xsSGVpZ2h0JztcbiAgICAgICAgd2lkdGhQcm9wID0gJ3Njcm9sbFdpZHRoJztcbiAgICAgIH1cbiAgICB9IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLWNhc3RdOiBmb3JjZSB0eXBlIHJlZmluZW1lbnQsIHdlIGNvbXBhcmUgb2Zmc2V0UGFyZW50IHdpdGggd2luZG93IGFib3ZlLCBidXQgRmxvdyBkb2Vzbid0IGRldGVjdCBpdFxuXG5cbiAgICBvZmZzZXRQYXJlbnQgPSBvZmZzZXRQYXJlbnQ7XG5cbiAgICBpZiAocGxhY2VtZW50ID09PSB0b3AgfHwgKHBsYWNlbWVudCA9PT0gbGVmdCB8fCBwbGFjZW1lbnQgPT09IHJpZ2h0KSAmJiB2YXJpYXRpb24gPT09IGVuZCkge1xuICAgICAgc2lkZVkgPSBib3R0b207XG4gICAgICB2YXIgb2Zmc2V0WSA9IGlzRml4ZWQgJiYgb2Zmc2V0UGFyZW50ID09PSB3aW4gJiYgd2luLnZpc3VhbFZpZXdwb3J0ID8gd2luLnZpc3VhbFZpZXdwb3J0LmhlaWdodCA6IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuICAgICAgb2Zmc2V0UGFyZW50W2hlaWdodFByb3BdO1xuICAgICAgeSAtPSBvZmZzZXRZIC0gcG9wcGVyUmVjdC5oZWlnaHQ7XG4gICAgICB5ICo9IGdwdUFjY2VsZXJhdGlvbiA/IDEgOiAtMTtcbiAgICB9XG5cbiAgICBpZiAocGxhY2VtZW50ID09PSBsZWZ0IHx8IChwbGFjZW1lbnQgPT09IHRvcCB8fCBwbGFjZW1lbnQgPT09IGJvdHRvbSkgJiYgdmFyaWF0aW9uID09PSBlbmQpIHtcbiAgICAgIHNpZGVYID0gcmlnaHQ7XG4gICAgICB2YXIgb2Zmc2V0WCA9IGlzRml4ZWQgJiYgb2Zmc2V0UGFyZW50ID09PSB3aW4gJiYgd2luLnZpc3VhbFZpZXdwb3J0ID8gd2luLnZpc3VhbFZpZXdwb3J0LndpZHRoIDogLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG4gICAgICBvZmZzZXRQYXJlbnRbd2lkdGhQcm9wXTtcbiAgICAgIHggLT0gb2Zmc2V0WCAtIHBvcHBlclJlY3Qud2lkdGg7XG4gICAgICB4ICo9IGdwdUFjY2VsZXJhdGlvbiA/IDEgOiAtMTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29tbW9uU3R5bGVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgcG9zaXRpb246IHBvc2l0aW9uXG4gIH0sIGFkYXB0aXZlICYmIHVuc2V0U2lkZXMpO1xuXG4gIHZhciBfcmVmNCA9IHJvdW5kT2Zmc2V0cyA9PT0gdHJ1ZSA/IHJvdW5kT2Zmc2V0c0J5RFBSKHtcbiAgICB4OiB4LFxuICAgIHk6IHlcbiAgfSwgZ2V0V2luZG93KHBvcHBlcikpIDoge1xuICAgIHg6IHgsXG4gICAgeTogeVxuICB9O1xuXG4gIHggPSBfcmVmNC54O1xuICB5ID0gX3JlZjQueTtcblxuICBpZiAoZ3B1QWNjZWxlcmF0aW9uKSB7XG4gICAgdmFyIF9PYmplY3QkYXNzaWduO1xuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywgKF9PYmplY3QkYXNzaWduID0ge30sIF9PYmplY3QkYXNzaWduW3NpZGVZXSA9IGhhc1kgPyAnMCcgOiAnJywgX09iamVjdCRhc3NpZ25bc2lkZVhdID0gaGFzWCA/ICcwJyA6ICcnLCBfT2JqZWN0JGFzc2lnbi50cmFuc2Zvcm0gPSAod2luLmRldmljZVBpeGVsUmF0aW8gfHwgMSkgPD0gMSA/IFwidHJhbnNsYXRlKFwiICsgeCArIFwicHgsIFwiICsgeSArIFwicHgpXCIgOiBcInRyYW5zbGF0ZTNkKFwiICsgeCArIFwicHgsIFwiICsgeSArIFwicHgsIDApXCIsIF9PYmplY3QkYXNzaWduKSk7XG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCAoX09iamVjdCRhc3NpZ24yID0ge30sIF9PYmplY3QkYXNzaWduMltzaWRlWV0gPSBoYXNZID8geSArIFwicHhcIiA6ICcnLCBfT2JqZWN0JGFzc2lnbjJbc2lkZVhdID0gaGFzWCA/IHggKyBcInB4XCIgOiAnJywgX09iamVjdCRhc3NpZ24yLnRyYW5zZm9ybSA9ICcnLCBfT2JqZWN0JGFzc2lnbjIpKTtcbn1cblxuZnVuY3Rpb24gY29tcHV0ZVN0eWxlcyhfcmVmNSkge1xuICB2YXIgc3RhdGUgPSBfcmVmNS5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmNS5vcHRpb25zO1xuICB2YXIgX29wdGlvbnMkZ3B1QWNjZWxlcmF0ID0gb3B0aW9ucy5ncHVBY2NlbGVyYXRpb24sXG4gICAgICBncHVBY2NlbGVyYXRpb24gPSBfb3B0aW9ucyRncHVBY2NlbGVyYXQgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRncHVBY2NlbGVyYXQsXG4gICAgICBfb3B0aW9ucyRhZGFwdGl2ZSA9IG9wdGlvbnMuYWRhcHRpdmUsXG4gICAgICBhZGFwdGl2ZSA9IF9vcHRpb25zJGFkYXB0aXZlID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkYWRhcHRpdmUsXG4gICAgICBfb3B0aW9ucyRyb3VuZE9mZnNldHMgPSBvcHRpb25zLnJvdW5kT2Zmc2V0cyxcbiAgICAgIHJvdW5kT2Zmc2V0cyA9IF9vcHRpb25zJHJvdW5kT2Zmc2V0cyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHJvdW5kT2Zmc2V0cztcbiAgdmFyIGNvbW1vblN0eWxlcyA9IHtcbiAgICBwbGFjZW1lbnQ6IGdldEJhc2VQbGFjZW1lbnQoc3RhdGUucGxhY2VtZW50KSxcbiAgICB2YXJpYXRpb246IGdldFZhcmlhdGlvbihzdGF0ZS5wbGFjZW1lbnQpLFxuICAgIHBvcHBlcjogc3RhdGUuZWxlbWVudHMucG9wcGVyLFxuICAgIHBvcHBlclJlY3Q6IHN0YXRlLnJlY3RzLnBvcHBlcixcbiAgICBncHVBY2NlbGVyYXRpb246IGdwdUFjY2VsZXJhdGlvbixcbiAgICBpc0ZpeGVkOiBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5ID09PSAnZml4ZWQnXG4gIH07XG5cbiAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyAhPSBudWxsKSB7XG4gICAgc3RhdGUuc3R5bGVzLnBvcHBlciA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnN0eWxlcy5wb3BwZXIsIG1hcFRvU3R5bGVzKE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywge1xuICAgICAgb2Zmc2V0czogc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLFxuICAgICAgcG9zaXRpb246IHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3ksXG4gICAgICBhZGFwdGl2ZTogYWRhcHRpdmUsXG4gICAgICByb3VuZE9mZnNldHM6IHJvdW5kT2Zmc2V0c1xuICAgIH0pKSk7XG4gIH1cblxuICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YS5hcnJvdyAhPSBudWxsKSB7XG4gICAgc3RhdGUuc3R5bGVzLmFycm93ID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuc3R5bGVzLmFycm93LCBtYXBUb1N0eWxlcyhPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIHtcbiAgICAgIG9mZnNldHM6IHN0YXRlLm1vZGlmaWVyc0RhdGEuYXJyb3csXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGFkYXB0aXZlOiBmYWxzZSxcbiAgICAgIHJvdW5kT2Zmc2V0czogcm91bmRPZmZzZXRzXG4gICAgfSkpKTtcbiAgfVxuXG4gIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIsIHtcbiAgICAnZGF0YS1wb3BwZXItcGxhY2VtZW50Jzogc3RhdGUucGxhY2VtZW50XG4gIH0pO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnY29tcHV0ZVN0eWxlcycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnYmVmb3JlV3JpdGUnLFxuICBmbjogY29tcHV0ZVN0eWxlcyxcbiAgZGF0YToge31cbn07IiwiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldFdpbmRvdy5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbnZhciBwYXNzaXZlID0ge1xuICBwYXNzaXZlOiB0cnVlXG59O1xuXG5mdW5jdGlvbiBlZmZlY3QoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgaW5zdGFuY2UgPSBfcmVmLmluc3RhbmNlLFxuICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucztcbiAgdmFyIF9vcHRpb25zJHNjcm9sbCA9IG9wdGlvbnMuc2Nyb2xsLFxuICAgICAgc2Nyb2xsID0gX29wdGlvbnMkc2Nyb2xsID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkc2Nyb2xsLFxuICAgICAgX29wdGlvbnMkcmVzaXplID0gb3B0aW9ucy5yZXNpemUsXG4gICAgICByZXNpemUgPSBfb3B0aW9ucyRyZXNpemUgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRyZXNpemU7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coc3RhdGUuZWxlbWVudHMucG9wcGVyKTtcbiAgdmFyIHNjcm9sbFBhcmVudHMgPSBbXS5jb25jYXQoc3RhdGUuc2Nyb2xsUGFyZW50cy5yZWZlcmVuY2UsIHN0YXRlLnNjcm9sbFBhcmVudHMucG9wcGVyKTtcblxuICBpZiAoc2Nyb2xsKSB7XG4gICAgc2Nyb2xsUGFyZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChzY3JvbGxQYXJlbnQpIHtcbiAgICAgIHNjcm9sbFBhcmVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKHJlc2l6ZSkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICBzY3JvbGxQYXJlbnRzLmZvckVhY2goZnVuY3Rpb24gKHNjcm9sbFBhcmVudCkge1xuICAgICAgICBzY3JvbGxQYXJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChyZXNpemUpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuICAgIH1cbiAgfTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2V2ZW50TGlzdGVuZXJzJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICd3cml0ZScsXG4gIGZuOiBmdW5jdGlvbiBmbigpIHt9LFxuICBlZmZlY3Q6IGVmZmVjdCxcbiAgZGF0YToge31cbn07IiwiaW1wb3J0IGdldE9wcG9zaXRlUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRPcHBvc2l0ZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQuanNcIjtcbmltcG9ydCBkZXRlY3RPdmVyZmxvdyBmcm9tIFwiLi4vdXRpbHMvZGV0ZWN0T3ZlcmZsb3cuanNcIjtcbmltcG9ydCBjb21wdXRlQXV0b1BsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvY29tcHV0ZUF1dG9QbGFjZW1lbnQuanNcIjtcbmltcG9ydCB7IGJvdHRvbSwgdG9wLCBzdGFydCwgcmlnaHQsIGxlZnQsIGF1dG8gfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBnZXRWYXJpYXRpb24gZnJvbSBcIi4uL3V0aWxzL2dldFZhcmlhdGlvbi5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmZ1bmN0aW9uIGdldEV4cGFuZGVkRmFsbGJhY2tQbGFjZW1lbnRzKHBsYWNlbWVudCkge1xuICBpZiAoZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpID09PSBhdXRvKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgdmFyIG9wcG9zaXRlUGxhY2VtZW50ID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgcmV0dXJuIFtnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudChwbGFjZW1lbnQpLCBvcHBvc2l0ZVBsYWNlbWVudCwgZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQob3Bwb3NpdGVQbGFjZW1lbnQpXTtcbn1cblxuZnVuY3Rpb24gZmxpcChfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZTtcblxuICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXS5fc2tpcCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBfb3B0aW9ucyRtYWluQXhpcyA9IG9wdGlvbnMubWFpbkF4aXMsXG4gICAgICBjaGVja01haW5BeGlzID0gX29wdGlvbnMkbWFpbkF4aXMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRtYWluQXhpcyxcbiAgICAgIF9vcHRpb25zJGFsdEF4aXMgPSBvcHRpb25zLmFsdEF4aXMsXG4gICAgICBjaGVja0FsdEF4aXMgPSBfb3B0aW9ucyRhbHRBeGlzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkYWx0QXhpcyxcbiAgICAgIHNwZWNpZmllZEZhbGxiYWNrUGxhY2VtZW50cyA9IG9wdGlvbnMuZmFsbGJhY2tQbGFjZW1lbnRzLFxuICAgICAgcGFkZGluZyA9IG9wdGlvbnMucGFkZGluZyxcbiAgICAgIGJvdW5kYXJ5ID0gb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeSA9IG9wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgYWx0Qm91bmRhcnkgPSBvcHRpb25zLmFsdEJvdW5kYXJ5LFxuICAgICAgX29wdGlvbnMkZmxpcFZhcmlhdGlvID0gb3B0aW9ucy5mbGlwVmFyaWF0aW9ucyxcbiAgICAgIGZsaXBWYXJpYXRpb25zID0gX29wdGlvbnMkZmxpcFZhcmlhdGlvID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkZmxpcFZhcmlhdGlvLFxuICAgICAgYWxsb3dlZEF1dG9QbGFjZW1lbnRzID0gb3B0aW9ucy5hbGxvd2VkQXV0b1BsYWNlbWVudHM7XG4gIHZhciBwcmVmZXJyZWRQbGFjZW1lbnQgPSBzdGF0ZS5vcHRpb25zLnBsYWNlbWVudDtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHByZWZlcnJlZFBsYWNlbWVudCk7XG4gIHZhciBpc0Jhc2VQbGFjZW1lbnQgPSBiYXNlUGxhY2VtZW50ID09PSBwcmVmZXJyZWRQbGFjZW1lbnQ7XG4gIHZhciBmYWxsYmFja1BsYWNlbWVudHMgPSBzcGVjaWZpZWRGYWxsYmFja1BsYWNlbWVudHMgfHwgKGlzQmFzZVBsYWNlbWVudCB8fCAhZmxpcFZhcmlhdGlvbnMgPyBbZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocHJlZmVycmVkUGxhY2VtZW50KV0gOiBnZXRFeHBhbmRlZEZhbGxiYWNrUGxhY2VtZW50cyhwcmVmZXJyZWRQbGFjZW1lbnQpKTtcbiAgdmFyIHBsYWNlbWVudHMgPSBbcHJlZmVycmVkUGxhY2VtZW50XS5jb25jYXQoZmFsbGJhY2tQbGFjZW1lbnRzKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIGFjYy5jb25jYXQoZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpID09PSBhdXRvID8gY29tcHV0ZUF1dG9QbGFjZW1lbnQoc3RhdGUsIHtcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgICBwYWRkaW5nOiBwYWRkaW5nLFxuICAgICAgZmxpcFZhcmlhdGlvbnM6IGZsaXBWYXJpYXRpb25zLFxuICAgICAgYWxsb3dlZEF1dG9QbGFjZW1lbnRzOiBhbGxvd2VkQXV0b1BsYWNlbWVudHNcbiAgICB9KSA6IHBsYWNlbWVudCk7XG4gIH0sIFtdKTtcbiAgdmFyIHJlZmVyZW5jZVJlY3QgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2U7XG4gIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICB2YXIgY2hlY2tzTWFwID0gbmV3IE1hcCgpO1xuICB2YXIgbWFrZUZhbGxiYWNrQ2hlY2tzID0gdHJ1ZTtcbiAgdmFyIGZpcnN0Rml0dGluZ1BsYWNlbWVudCA9IHBsYWNlbWVudHNbMF07XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwbGFjZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHBsYWNlbWVudCA9IHBsYWNlbWVudHNbaV07XG5cbiAgICB2YXIgX2Jhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCk7XG5cbiAgICB2YXIgaXNTdGFydFZhcmlhdGlvbiA9IGdldFZhcmlhdGlvbihwbGFjZW1lbnQpID09PSBzdGFydDtcbiAgICB2YXIgaXNWZXJ0aWNhbCA9IFt0b3AsIGJvdHRvbV0uaW5kZXhPZihfYmFzZVBsYWNlbWVudCkgPj0gMDtcbiAgICB2YXIgbGVuID0gaXNWZXJ0aWNhbCA/ICd3aWR0aCcgOiAnaGVpZ2h0JztcbiAgICB2YXIgb3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICAgIGFsdEJvdW5kYXJ5OiBhbHRCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmc6IHBhZGRpbmdcbiAgICB9KTtcbiAgICB2YXIgbWFpblZhcmlhdGlvblNpZGUgPSBpc1ZlcnRpY2FsID8gaXNTdGFydFZhcmlhdGlvbiA/IHJpZ2h0IDogbGVmdCA6IGlzU3RhcnRWYXJpYXRpb24gPyBib3R0b20gOiB0b3A7XG5cbiAgICBpZiAocmVmZXJlbmNlUmVjdFtsZW5dID4gcG9wcGVyUmVjdFtsZW5dKSB7XG4gICAgICBtYWluVmFyaWF0aW9uU2lkZSA9IGdldE9wcG9zaXRlUGxhY2VtZW50KG1haW5WYXJpYXRpb25TaWRlKTtcbiAgICB9XG5cbiAgICB2YXIgYWx0VmFyaWF0aW9uU2lkZSA9IGdldE9wcG9zaXRlUGxhY2VtZW50KG1haW5WYXJpYXRpb25TaWRlKTtcbiAgICB2YXIgY2hlY2tzID0gW107XG5cbiAgICBpZiAoY2hlY2tNYWluQXhpcykge1xuICAgICAgY2hlY2tzLnB1c2gob3ZlcmZsb3dbX2Jhc2VQbGFjZW1lbnRdIDw9IDApO1xuICAgIH1cblxuICAgIGlmIChjaGVja0FsdEF4aXMpIHtcbiAgICAgIGNoZWNrcy5wdXNoKG92ZXJmbG93W21haW5WYXJpYXRpb25TaWRlXSA8PSAwLCBvdmVyZmxvd1thbHRWYXJpYXRpb25TaWRlXSA8PSAwKTtcbiAgICB9XG5cbiAgICBpZiAoY2hlY2tzLmV2ZXJ5KGZ1bmN0aW9uIChjaGVjaykge1xuICAgICAgcmV0dXJuIGNoZWNrO1xuICAgIH0pKSB7XG4gICAgICBmaXJzdEZpdHRpbmdQbGFjZW1lbnQgPSBwbGFjZW1lbnQ7XG4gICAgICBtYWtlRmFsbGJhY2tDaGVja3MgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNoZWNrc01hcC5zZXQocGxhY2VtZW50LCBjaGVja3MpO1xuICB9XG5cbiAgaWYgKG1ha2VGYWxsYmFja0NoZWNrcykge1xuICAgIC8vIGAyYCBtYXkgYmUgZGVzaXJlZCBpbiBzb21lIGNhc2VzIOKAkyByZXNlYXJjaCBsYXRlclxuICAgIHZhciBudW1iZXJPZkNoZWNrcyA9IGZsaXBWYXJpYXRpb25zID8gMyA6IDE7XG5cbiAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChfaSkge1xuICAgICAgdmFyIGZpdHRpbmdQbGFjZW1lbnQgPSBwbGFjZW1lbnRzLmZpbmQoZnVuY3Rpb24gKHBsYWNlbWVudCkge1xuICAgICAgICB2YXIgY2hlY2tzID0gY2hlY2tzTWFwLmdldChwbGFjZW1lbnQpO1xuXG4gICAgICAgIGlmIChjaGVja3MpIHtcbiAgICAgICAgICByZXR1cm4gY2hlY2tzLnNsaWNlKDAsIF9pKS5ldmVyeShmdW5jdGlvbiAoY2hlY2spIHtcbiAgICAgICAgICAgIHJldHVybiBjaGVjaztcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChmaXR0aW5nUGxhY2VtZW50KSB7XG4gICAgICAgIGZpcnN0Rml0dGluZ1BsYWNlbWVudCA9IGZpdHRpbmdQbGFjZW1lbnQ7XG4gICAgICAgIHJldHVybiBcImJyZWFrXCI7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZvciAodmFyIF9pID0gbnVtYmVyT2ZDaGVja3M7IF9pID4gMDsgX2ktLSkge1xuICAgICAgdmFyIF9yZXQgPSBfbG9vcChfaSk7XG5cbiAgICAgIGlmIChfcmV0ID09PSBcImJyZWFrXCIpIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzdGF0ZS5wbGFjZW1lbnQgIT09IGZpcnN0Rml0dGluZ1BsYWNlbWVudCkge1xuICAgIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0uX3NraXAgPSB0cnVlO1xuICAgIHN0YXRlLnBsYWNlbWVudCA9IGZpcnN0Rml0dGluZ1BsYWNlbWVudDtcbiAgICBzdGF0ZS5yZXNldCA9IHRydWU7XG4gIH1cbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2ZsaXAnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICBmbjogZmxpcCxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydvZmZzZXQnXSxcbiAgZGF0YToge1xuICAgIF9za2lwOiBmYWxzZVxuICB9XG59OyIsImltcG9ydCB7IHRvcCwgYm90dG9tLCBsZWZ0LCByaWdodCB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IGRldGVjdE92ZXJmbG93IGZyb20gXCIuLi91dGlscy9kZXRlY3RPdmVyZmxvdy5qc1wiO1xuXG5mdW5jdGlvbiBnZXRTaWRlT2Zmc2V0cyhvdmVyZmxvdywgcmVjdCwgcHJldmVudGVkT2Zmc2V0cykge1xuICBpZiAocHJldmVudGVkT2Zmc2V0cyA9PT0gdm9pZCAwKSB7XG4gICAgcHJldmVudGVkT2Zmc2V0cyA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdG9wOiBvdmVyZmxvdy50b3AgLSByZWN0LmhlaWdodCAtIHByZXZlbnRlZE9mZnNldHMueSxcbiAgICByaWdodDogb3ZlcmZsb3cucmlnaHQgLSByZWN0LndpZHRoICsgcHJldmVudGVkT2Zmc2V0cy54LFxuICAgIGJvdHRvbTogb3ZlcmZsb3cuYm90dG9tIC0gcmVjdC5oZWlnaHQgKyBwcmV2ZW50ZWRPZmZzZXRzLnksXG4gICAgbGVmdDogb3ZlcmZsb3cubGVmdCAtIHJlY3Qud2lkdGggLSBwcmV2ZW50ZWRPZmZzZXRzLnhcbiAgfTtcbn1cblxuZnVuY3Rpb24gaXNBbnlTaWRlRnVsbHlDbGlwcGVkKG92ZXJmbG93KSB7XG4gIHJldHVybiBbdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0XS5zb21lKGZ1bmN0aW9uIChzaWRlKSB7XG4gICAgcmV0dXJuIG92ZXJmbG93W3NpZGVdID49IDA7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBoaWRlKF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWU7XG4gIHZhciByZWZlcmVuY2VSZWN0ID0gc3RhdGUucmVjdHMucmVmZXJlbmNlO1xuICB2YXIgcG9wcGVyUmVjdCA9IHN0YXRlLnJlY3RzLnBvcHBlcjtcbiAgdmFyIHByZXZlbnRlZE9mZnNldHMgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLnByZXZlbnRPdmVyZmxvdztcbiAgdmFyIHJlZmVyZW5jZU92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICBlbGVtZW50Q29udGV4dDogJ3JlZmVyZW5jZSdcbiAgfSk7XG4gIHZhciBwb3BwZXJBbHRPdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgYWx0Qm91bmRhcnk6IHRydWVcbiAgfSk7XG4gIHZhciByZWZlcmVuY2VDbGlwcGluZ09mZnNldHMgPSBnZXRTaWRlT2Zmc2V0cyhyZWZlcmVuY2VPdmVyZmxvdywgcmVmZXJlbmNlUmVjdCk7XG4gIHZhciBwb3BwZXJFc2NhcGVPZmZzZXRzID0gZ2V0U2lkZU9mZnNldHMocG9wcGVyQWx0T3ZlcmZsb3csIHBvcHBlclJlY3QsIHByZXZlbnRlZE9mZnNldHMpO1xuICB2YXIgaXNSZWZlcmVuY2VIaWRkZW4gPSBpc0FueVNpZGVGdWxseUNsaXBwZWQocmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzKTtcbiAgdmFyIGhhc1BvcHBlckVzY2FwZWQgPSBpc0FueVNpZGVGdWxseUNsaXBwZWQocG9wcGVyRXNjYXBlT2Zmc2V0cyk7XG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSB7XG4gICAgcmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzOiByZWZlcmVuY2VDbGlwcGluZ09mZnNldHMsXG4gICAgcG9wcGVyRXNjYXBlT2Zmc2V0czogcG9wcGVyRXNjYXBlT2Zmc2V0cyxcbiAgICBpc1JlZmVyZW5jZUhpZGRlbjogaXNSZWZlcmVuY2VIaWRkZW4sXG4gICAgaGFzUG9wcGVyRXNjYXBlZDogaGFzUG9wcGVyRXNjYXBlZFxuICB9O1xuICBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyLCB7XG4gICAgJ2RhdGEtcG9wcGVyLXJlZmVyZW5jZS1oaWRkZW4nOiBpc1JlZmVyZW5jZUhpZGRlbixcbiAgICAnZGF0YS1wb3BwZXItZXNjYXBlZCc6IGhhc1BvcHBlckVzY2FwZWRcbiAgfSk7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdoaWRlJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydwcmV2ZW50T3ZlcmZsb3cnXSxcbiAgZm46IGhpZGVcbn07IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBhcHBseVN0eWxlcyB9IGZyb20gXCIuL2FwcGx5U3R5bGVzLmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFycm93IH0gZnJvbSBcIi4vYXJyb3cuanNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY29tcHV0ZVN0eWxlcyB9IGZyb20gXCIuL2NvbXB1dGVTdHlsZXMuanNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZXZlbnRMaXN0ZW5lcnMgfSBmcm9tIFwiLi9ldmVudExpc3RlbmVycy5qc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBmbGlwIH0gZnJvbSBcIi4vZmxpcC5qc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBoaWRlIH0gZnJvbSBcIi4vaGlkZS5qc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBvZmZzZXQgfSBmcm9tIFwiLi9vZmZzZXQuanNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcG9wcGVyT2Zmc2V0cyB9IGZyb20gXCIuL3BvcHBlck9mZnNldHMuanNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcHJldmVudE92ZXJmbG93IH0gZnJvbSBcIi4vcHJldmVudE92ZXJmbG93LmpzXCI7IiwiaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCB7IHRvcCwgbGVmdCwgcmlnaHQsIHBsYWNlbWVudHMgfSBmcm9tIFwiLi4vZW51bXMuanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgZnVuY3Rpb24gZGlzdGFuY2VBbmRTa2lkZGluZ1RvWFkocGxhY2VtZW50LCByZWN0cywgb2Zmc2V0KSB7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuICB2YXIgaW52ZXJ0RGlzdGFuY2UgPSBbbGVmdCwgdG9wXS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpID49IDAgPyAtMSA6IDE7XG5cbiAgdmFyIF9yZWYgPSB0eXBlb2Ygb2Zmc2V0ID09PSAnZnVuY3Rpb24nID8gb2Zmc2V0KE9iamVjdC5hc3NpZ24oe30sIHJlY3RzLCB7XG4gICAgcGxhY2VtZW50OiBwbGFjZW1lbnRcbiAgfSkpIDogb2Zmc2V0LFxuICAgICAgc2tpZGRpbmcgPSBfcmVmWzBdLFxuICAgICAgZGlzdGFuY2UgPSBfcmVmWzFdO1xuXG4gIHNraWRkaW5nID0gc2tpZGRpbmcgfHwgMDtcbiAgZGlzdGFuY2UgPSAoZGlzdGFuY2UgfHwgMCkgKiBpbnZlcnREaXN0YW5jZTtcbiAgcmV0dXJuIFtsZWZ0LCByaWdodF0uaW5kZXhPZihiYXNlUGxhY2VtZW50KSA+PSAwID8ge1xuICAgIHg6IGRpc3RhbmNlLFxuICAgIHk6IHNraWRkaW5nXG4gIH0gOiB7XG4gICAgeDogc2tpZGRpbmcsXG4gICAgeTogZGlzdGFuY2VcbiAgfTtcbn1cblxuZnVuY3Rpb24gb2Zmc2V0KF9yZWYyKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYyLnN0YXRlLFxuICAgICAgb3B0aW9ucyA9IF9yZWYyLm9wdGlvbnMsXG4gICAgICBuYW1lID0gX3JlZjIubmFtZTtcbiAgdmFyIF9vcHRpb25zJG9mZnNldCA9IG9wdGlvbnMub2Zmc2V0LFxuICAgICAgb2Zmc2V0ID0gX29wdGlvbnMkb2Zmc2V0ID09PSB2b2lkIDAgPyBbMCwgMF0gOiBfb3B0aW9ucyRvZmZzZXQ7XG4gIHZhciBkYXRhID0gcGxhY2VtZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gICAgYWNjW3BsYWNlbWVudF0gPSBkaXN0YW5jZUFuZFNraWRkaW5nVG9YWShwbGFjZW1lbnQsIHN0YXRlLnJlY3RzLCBvZmZzZXQpO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbiAgdmFyIF9kYXRhJHN0YXRlJHBsYWNlbWVudCA9IGRhdGFbc3RhdGUucGxhY2VtZW50XSxcbiAgICAgIHggPSBfZGF0YSRzdGF0ZSRwbGFjZW1lbnQueCxcbiAgICAgIHkgPSBfZGF0YSRzdGF0ZSRwbGFjZW1lbnQueTtcblxuICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzICE9IG51bGwpIHtcbiAgICBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMueCArPSB4O1xuICAgIHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cy55ICs9IHk7XG4gIH1cblxuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gZGF0YTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ29mZnNldCcsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIHJlcXVpcmVzOiBbJ3BvcHBlck9mZnNldHMnXSxcbiAgZm46IG9mZnNldFxufTsiLCJpbXBvcnQgY29tcHV0ZU9mZnNldHMgZnJvbSBcIi4uL3V0aWxzL2NvbXB1dGVPZmZzZXRzLmpzXCI7XG5cbmZ1bmN0aW9uIHBvcHBlck9mZnNldHMoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZTtcbiAgLy8gT2Zmc2V0cyBhcmUgdGhlIGFjdHVhbCBwb3NpdGlvbiB0aGUgcG9wcGVyIG5lZWRzIHRvIGhhdmUgdG8gYmVcbiAgLy8gcHJvcGVybHkgcG9zaXRpb25lZCBuZWFyIGl0cyByZWZlcmVuY2UgZWxlbWVudFxuICAvLyBUaGlzIGlzIHRoZSBtb3N0IGJhc2ljIHBsYWNlbWVudCwgYW5kIHdpbGwgYmUgYWRqdXN0ZWQgYnlcbiAgLy8gdGhlIG1vZGlmaWVycyBpbiB0aGUgbmV4dCBzdGVwXG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSBjb21wdXRlT2Zmc2V0cyh7XG4gICAgcmVmZXJlbmNlOiBzdGF0ZS5yZWN0cy5yZWZlcmVuY2UsXG4gICAgZWxlbWVudDogc3RhdGUucmVjdHMucG9wcGVyLFxuICAgIHN0cmF0ZWd5OiAnYWJzb2x1dGUnLFxuICAgIHBsYWNlbWVudDogc3RhdGUucGxhY2VtZW50XG4gIH0pO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAncG9wcGVyT2Zmc2V0cycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAncmVhZCcsXG4gIGZuOiBwb3BwZXJPZmZzZXRzLFxuICBkYXRhOiB7fVxufTsiLCJpbXBvcnQgeyB0b3AsIGxlZnQsIHJpZ2h0LCBib3R0b20sIHN0YXJ0IH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZ2V0QWx0QXhpcyBmcm9tIFwiLi4vdXRpbHMvZ2V0QWx0QXhpcy5qc1wiO1xuaW1wb3J0IHsgd2l0aGluLCB3aXRoaW5NYXhDbGFtcCB9IGZyb20gXCIuLi91dGlscy93aXRoaW4uanNcIjtcbmltcG9ydCBnZXRMYXlvdXRSZWN0IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0TGF5b3V0UmVjdC5qc1wiO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qc1wiO1xuaW1wb3J0IGRldGVjdE92ZXJmbG93IGZyb20gXCIuLi91dGlscy9kZXRlY3RPdmVyZmxvdy5qc1wiO1xuaW1wb3J0IGdldFZhcmlhdGlvbiBmcm9tIFwiLi4vdXRpbHMvZ2V0VmFyaWF0aW9uLmpzXCI7XG5pbXBvcnQgZ2V0RnJlc2hTaWRlT2JqZWN0IGZyb20gXCIuLi91dGlscy9nZXRGcmVzaFNpZGVPYmplY3QuanNcIjtcbmltcG9ydCB7IG1pbiBhcyBtYXRoTWluLCBtYXggYXMgbWF0aE1heCB9IGZyb20gXCIuLi91dGlscy9tYXRoLmpzXCI7XG5cbmZ1bmN0aW9uIHByZXZlbnRPdmVyZmxvdyhfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZTtcbiAgdmFyIF9vcHRpb25zJG1haW5BeGlzID0gb3B0aW9ucy5tYWluQXhpcyxcbiAgICAgIGNoZWNrTWFpbkF4aXMgPSBfb3B0aW9ucyRtYWluQXhpcyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJG1haW5BeGlzLFxuICAgICAgX29wdGlvbnMkYWx0QXhpcyA9IG9wdGlvbnMuYWx0QXhpcyxcbiAgICAgIGNoZWNrQWx0QXhpcyA9IF9vcHRpb25zJGFsdEF4aXMgPT09IHZvaWQgMCA/IGZhbHNlIDogX29wdGlvbnMkYWx0QXhpcyxcbiAgICAgIGJvdW5kYXJ5ID0gb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeSA9IG9wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgYWx0Qm91bmRhcnkgPSBvcHRpb25zLmFsdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZyA9IG9wdGlvbnMucGFkZGluZyxcbiAgICAgIF9vcHRpb25zJHRldGhlciA9IG9wdGlvbnMudGV0aGVyLFxuICAgICAgdGV0aGVyID0gX29wdGlvbnMkdGV0aGVyID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkdGV0aGVyLFxuICAgICAgX29wdGlvbnMkdGV0aGVyT2Zmc2V0ID0gb3B0aW9ucy50ZXRoZXJPZmZzZXQsXG4gICAgICB0ZXRoZXJPZmZzZXQgPSBfb3B0aW9ucyR0ZXRoZXJPZmZzZXQgPT09IHZvaWQgMCA/IDAgOiBfb3B0aW9ucyR0ZXRoZXJPZmZzZXQ7XG4gIHZhciBvdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgIHJvb3RCb3VuZGFyeTogcm9vdEJvdW5kYXJ5LFxuICAgIHBhZGRpbmc6IHBhZGRpbmcsXG4gICAgYWx0Qm91bmRhcnk6IGFsdEJvdW5kYXJ5XG4gIH0pO1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQoc3RhdGUucGxhY2VtZW50KTtcbiAgdmFyIHZhcmlhdGlvbiA9IGdldFZhcmlhdGlvbihzdGF0ZS5wbGFjZW1lbnQpO1xuICB2YXIgaXNCYXNlUGxhY2VtZW50ID0gIXZhcmlhdGlvbjtcbiAgdmFyIG1haW5BeGlzID0gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KGJhc2VQbGFjZW1lbnQpO1xuICB2YXIgYWx0QXhpcyA9IGdldEFsdEF4aXMobWFpbkF4aXMpO1xuICB2YXIgcG9wcGVyT2Zmc2V0cyA9IHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cztcbiAgdmFyIHJlZmVyZW5jZVJlY3QgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2U7XG4gIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICB2YXIgdGV0aGVyT2Zmc2V0VmFsdWUgPSB0eXBlb2YgdGV0aGVyT2Zmc2V0ID09PSAnZnVuY3Rpb24nID8gdGV0aGVyT2Zmc2V0KE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnJlY3RzLCB7XG4gICAgcGxhY2VtZW50OiBzdGF0ZS5wbGFjZW1lbnRcbiAgfSkpIDogdGV0aGVyT2Zmc2V0O1xuICB2YXIgbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlID0gdHlwZW9mIHRldGhlck9mZnNldFZhbHVlID09PSAnbnVtYmVyJyA/IHtcbiAgICBtYWluQXhpczogdGV0aGVyT2Zmc2V0VmFsdWUsXG4gICAgYWx0QXhpczogdGV0aGVyT2Zmc2V0VmFsdWVcbiAgfSA6IE9iamVjdC5hc3NpZ24oe1xuICAgIG1haW5BeGlzOiAwLFxuICAgIGFsdEF4aXM6IDBcbiAgfSwgdGV0aGVyT2Zmc2V0VmFsdWUpO1xuICB2YXIgb2Zmc2V0TW9kaWZpZXJTdGF0ZSA9IHN0YXRlLm1vZGlmaWVyc0RhdGEub2Zmc2V0ID8gc3RhdGUubW9kaWZpZXJzRGF0YS5vZmZzZXRbc3RhdGUucGxhY2VtZW50XSA6IG51bGw7XG4gIHZhciBkYXRhID0ge1xuICAgIHg6IDAsXG4gICAgeTogMFxuICB9O1xuXG4gIGlmICghcG9wcGVyT2Zmc2V0cykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChjaGVja01haW5BeGlzKSB7XG4gICAgdmFyIF9vZmZzZXRNb2RpZmllclN0YXRlJDtcblxuICAgIHZhciBtYWluU2lkZSA9IG1haW5BeGlzID09PSAneScgPyB0b3AgOiBsZWZ0O1xuICAgIHZhciBhbHRTaWRlID0gbWFpbkF4aXMgPT09ICd5JyA/IGJvdHRvbSA6IHJpZ2h0O1xuICAgIHZhciBsZW4gPSBtYWluQXhpcyA9PT0gJ3knID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuICAgIHZhciBvZmZzZXQgPSBwb3BwZXJPZmZzZXRzW21haW5BeGlzXTtcbiAgICB2YXIgbWluID0gb2Zmc2V0ICsgb3ZlcmZsb3dbbWFpblNpZGVdO1xuICAgIHZhciBtYXggPSBvZmZzZXQgLSBvdmVyZmxvd1thbHRTaWRlXTtcbiAgICB2YXIgYWRkaXRpdmUgPSB0ZXRoZXIgPyAtcG9wcGVyUmVjdFtsZW5dIC8gMiA6IDA7XG4gICAgdmFyIG1pbkxlbiA9IHZhcmlhdGlvbiA9PT0gc3RhcnQgPyByZWZlcmVuY2VSZWN0W2xlbl0gOiBwb3BwZXJSZWN0W2xlbl07XG4gICAgdmFyIG1heExlbiA9IHZhcmlhdGlvbiA9PT0gc3RhcnQgPyAtcG9wcGVyUmVjdFtsZW5dIDogLXJlZmVyZW5jZVJlY3RbbGVuXTsgLy8gV2UgbmVlZCB0byBpbmNsdWRlIHRoZSBhcnJvdyBpbiB0aGUgY2FsY3VsYXRpb24gc28gdGhlIGFycm93IGRvZXNuJ3QgZ29cbiAgICAvLyBvdXRzaWRlIHRoZSByZWZlcmVuY2UgYm91bmRzXG5cbiAgICB2YXIgYXJyb3dFbGVtZW50ID0gc3RhdGUuZWxlbWVudHMuYXJyb3c7XG4gICAgdmFyIGFycm93UmVjdCA9IHRldGhlciAmJiBhcnJvd0VsZW1lbnQgPyBnZXRMYXlvdXRSZWN0KGFycm93RWxlbWVudCkgOiB7XG4gICAgICB3aWR0aDogMCxcbiAgICAgIGhlaWdodDogMFxuICAgIH07XG4gICAgdmFyIGFycm93UGFkZGluZ09iamVjdCA9IHN0YXRlLm1vZGlmaWVyc0RhdGFbJ2Fycm93I3BlcnNpc3RlbnQnXSA/IHN0YXRlLm1vZGlmaWVyc0RhdGFbJ2Fycm93I3BlcnNpc3RlbnQnXS5wYWRkaW5nIDogZ2V0RnJlc2hTaWRlT2JqZWN0KCk7XG4gICAgdmFyIGFycm93UGFkZGluZ01pbiA9IGFycm93UGFkZGluZ09iamVjdFttYWluU2lkZV07XG4gICAgdmFyIGFycm93UGFkZGluZ01heCA9IGFycm93UGFkZGluZ09iamVjdFthbHRTaWRlXTsgLy8gSWYgdGhlIHJlZmVyZW5jZSBsZW5ndGggaXMgc21hbGxlciB0aGFuIHRoZSBhcnJvdyBsZW5ndGgsIHdlIGRvbid0IHdhbnRcbiAgICAvLyB0byBpbmNsdWRlIGl0cyBmdWxsIHNpemUgaW4gdGhlIGNhbGN1bGF0aW9uLiBJZiB0aGUgcmVmZXJlbmNlIGlzIHNtYWxsXG4gICAgLy8gYW5kIG5lYXIgdGhlIGVkZ2Ugb2YgYSBib3VuZGFyeSwgdGhlIHBvcHBlciBjYW4gb3ZlcmZsb3cgZXZlbiBpZiB0aGVcbiAgICAvLyByZWZlcmVuY2UgaXMgbm90IG92ZXJmbG93aW5nIGFzIHdlbGwgKGUuZy4gdmlydHVhbCBlbGVtZW50cyB3aXRoIG5vXG4gICAgLy8gd2lkdGggb3IgaGVpZ2h0KVxuXG4gICAgdmFyIGFycm93TGVuID0gd2l0aGluKDAsIHJlZmVyZW5jZVJlY3RbbGVuXSwgYXJyb3dSZWN0W2xlbl0pO1xuICAgIHZhciBtaW5PZmZzZXQgPSBpc0Jhc2VQbGFjZW1lbnQgPyByZWZlcmVuY2VSZWN0W2xlbl0gLyAyIC0gYWRkaXRpdmUgLSBhcnJvd0xlbiAtIGFycm93UGFkZGluZ01pbiAtIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZS5tYWluQXhpcyA6IG1pbkxlbiAtIGFycm93TGVuIC0gYXJyb3dQYWRkaW5nTWluIC0gbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLm1haW5BeGlzO1xuICAgIHZhciBtYXhPZmZzZXQgPSBpc0Jhc2VQbGFjZW1lbnQgPyAtcmVmZXJlbmNlUmVjdFtsZW5dIC8gMiArIGFkZGl0aXZlICsgYXJyb3dMZW4gKyBhcnJvd1BhZGRpbmdNYXggKyBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUubWFpbkF4aXMgOiBtYXhMZW4gKyBhcnJvd0xlbiArIGFycm93UGFkZGluZ01heCArIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZS5tYWluQXhpcztcbiAgICB2YXIgYXJyb3dPZmZzZXRQYXJlbnQgPSBzdGF0ZS5lbGVtZW50cy5hcnJvdyAmJiBnZXRPZmZzZXRQYXJlbnQoc3RhdGUuZWxlbWVudHMuYXJyb3cpO1xuICAgIHZhciBjbGllbnRPZmZzZXQgPSBhcnJvd09mZnNldFBhcmVudCA/IG1haW5BeGlzID09PSAneScgPyBhcnJvd09mZnNldFBhcmVudC5jbGllbnRUb3AgfHwgMCA6IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudExlZnQgfHwgMCA6IDA7XG4gICAgdmFyIG9mZnNldE1vZGlmaWVyVmFsdWUgPSAoX29mZnNldE1vZGlmaWVyU3RhdGUkID0gb2Zmc2V0TW9kaWZpZXJTdGF0ZSA9PSBudWxsID8gdm9pZCAwIDogb2Zmc2V0TW9kaWZpZXJTdGF0ZVttYWluQXhpc10pICE9IG51bGwgPyBfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQgOiAwO1xuICAgIHZhciB0ZXRoZXJNaW4gPSBvZmZzZXQgKyBtaW5PZmZzZXQgLSBvZmZzZXRNb2RpZmllclZhbHVlIC0gY2xpZW50T2Zmc2V0O1xuICAgIHZhciB0ZXRoZXJNYXggPSBvZmZzZXQgKyBtYXhPZmZzZXQgLSBvZmZzZXRNb2RpZmllclZhbHVlO1xuICAgIHZhciBwcmV2ZW50ZWRPZmZzZXQgPSB3aXRoaW4odGV0aGVyID8gbWF0aE1pbihtaW4sIHRldGhlck1pbikgOiBtaW4sIG9mZnNldCwgdGV0aGVyID8gbWF0aE1heChtYXgsIHRldGhlck1heCkgOiBtYXgpO1xuICAgIHBvcHBlck9mZnNldHNbbWFpbkF4aXNdID0gcHJldmVudGVkT2Zmc2V0O1xuICAgIGRhdGFbbWFpbkF4aXNdID0gcHJldmVudGVkT2Zmc2V0IC0gb2Zmc2V0O1xuICB9XG5cbiAgaWYgKGNoZWNrQWx0QXhpcykge1xuICAgIHZhciBfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQyO1xuXG4gICAgdmFyIF9tYWluU2lkZSA9IG1haW5BeGlzID09PSAneCcgPyB0b3AgOiBsZWZ0O1xuXG4gICAgdmFyIF9hbHRTaWRlID0gbWFpbkF4aXMgPT09ICd4JyA/IGJvdHRvbSA6IHJpZ2h0O1xuXG4gICAgdmFyIF9vZmZzZXQgPSBwb3BwZXJPZmZzZXRzW2FsdEF4aXNdO1xuXG4gICAgdmFyIF9sZW4gPSBhbHRBeGlzID09PSAneScgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG5cbiAgICB2YXIgX21pbiA9IF9vZmZzZXQgKyBvdmVyZmxvd1tfbWFpblNpZGVdO1xuXG4gICAgdmFyIF9tYXggPSBfb2Zmc2V0IC0gb3ZlcmZsb3dbX2FsdFNpZGVdO1xuXG4gICAgdmFyIGlzT3JpZ2luU2lkZSA9IFt0b3AsIGxlZnRdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgIT09IC0xO1xuXG4gICAgdmFyIF9vZmZzZXRNb2RpZmllclZhbHVlID0gKF9vZmZzZXRNb2RpZmllclN0YXRlJDIgPSBvZmZzZXRNb2RpZmllclN0YXRlID09IG51bGwgPyB2b2lkIDAgOiBvZmZzZXRNb2RpZmllclN0YXRlW2FsdEF4aXNdKSAhPSBudWxsID8gX29mZnNldE1vZGlmaWVyU3RhdGUkMiA6IDA7XG5cbiAgICB2YXIgX3RldGhlck1pbiA9IGlzT3JpZ2luU2lkZSA/IF9taW4gOiBfb2Zmc2V0IC0gcmVmZXJlbmNlUmVjdFtfbGVuXSAtIHBvcHBlclJlY3RbX2xlbl0gLSBfb2Zmc2V0TW9kaWZpZXJWYWx1ZSArIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZS5hbHRBeGlzO1xuXG4gICAgdmFyIF90ZXRoZXJNYXggPSBpc09yaWdpblNpZGUgPyBfb2Zmc2V0ICsgcmVmZXJlbmNlUmVjdFtfbGVuXSArIHBvcHBlclJlY3RbX2xlbl0gLSBfb2Zmc2V0TW9kaWZpZXJWYWx1ZSAtIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZS5hbHRBeGlzIDogX21heDtcblxuICAgIHZhciBfcHJldmVudGVkT2Zmc2V0ID0gdGV0aGVyICYmIGlzT3JpZ2luU2lkZSA/IHdpdGhpbk1heENsYW1wKF90ZXRoZXJNaW4sIF9vZmZzZXQsIF90ZXRoZXJNYXgpIDogd2l0aGluKHRldGhlciA/IF90ZXRoZXJNaW4gOiBfbWluLCBfb2Zmc2V0LCB0ZXRoZXIgPyBfdGV0aGVyTWF4IDogX21heCk7XG5cbiAgICBwb3BwZXJPZmZzZXRzW2FsdEF4aXNdID0gX3ByZXZlbnRlZE9mZnNldDtcbiAgICBkYXRhW2FsdEF4aXNdID0gX3ByZXZlbnRlZE9mZnNldCAtIF9vZmZzZXQ7XG4gIH1cblxuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gZGF0YTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ3ByZXZlbnRPdmVyZmxvdycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIGZuOiBwcmV2ZW50T3ZlcmZsb3csXG4gIHJlcXVpcmVzSWZFeGlzdHM6IFsnb2Zmc2V0J11cbn07IiwiaW1wb3J0IHsgcG9wcGVyR2VuZXJhdG9yLCBkZXRlY3RPdmVyZmxvdyB9IGZyb20gXCIuL2NyZWF0ZVBvcHBlci5qc1wiO1xuaW1wb3J0IGV2ZW50TGlzdGVuZXJzIGZyb20gXCIuL21vZGlmaWVycy9ldmVudExpc3RlbmVycy5qc1wiO1xuaW1wb3J0IHBvcHBlck9mZnNldHMgZnJvbSBcIi4vbW9kaWZpZXJzL3BvcHBlck9mZnNldHMuanNcIjtcbmltcG9ydCBjb21wdXRlU3R5bGVzIGZyb20gXCIuL21vZGlmaWVycy9jb21wdXRlU3R5bGVzLmpzXCI7XG5pbXBvcnQgYXBwbHlTdHlsZXMgZnJvbSBcIi4vbW9kaWZpZXJzL2FwcGx5U3R5bGVzLmpzXCI7XG52YXIgZGVmYXVsdE1vZGlmaWVycyA9IFtldmVudExpc3RlbmVycywgcG9wcGVyT2Zmc2V0cywgY29tcHV0ZVN0eWxlcywgYXBwbHlTdHlsZXNdO1xudmFyIGNyZWF0ZVBvcHBlciA9IC8qI19fUFVSRV9fKi9wb3BwZXJHZW5lcmF0b3Ioe1xuICBkZWZhdWx0TW9kaWZpZXJzOiBkZWZhdWx0TW9kaWZpZXJzXG59KTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgeyBjcmVhdGVQb3BwZXIsIHBvcHBlckdlbmVyYXRvciwgZGVmYXVsdE1vZGlmaWVycywgZGV0ZWN0T3ZlcmZsb3cgfTsiLCJpbXBvcnQgeyBwb3BwZXJHZW5lcmF0b3IsIGRldGVjdE92ZXJmbG93IH0gZnJvbSBcIi4vY3JlYXRlUG9wcGVyLmpzXCI7XG5pbXBvcnQgZXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vbW9kaWZpZXJzL2V2ZW50TGlzdGVuZXJzLmpzXCI7XG5pbXBvcnQgcG9wcGVyT2Zmc2V0cyBmcm9tIFwiLi9tb2RpZmllcnMvcG9wcGVyT2Zmc2V0cy5qc1wiO1xuaW1wb3J0IGNvbXB1dGVTdHlsZXMgZnJvbSBcIi4vbW9kaWZpZXJzL2NvbXB1dGVTdHlsZXMuanNcIjtcbmltcG9ydCBhcHBseVN0eWxlcyBmcm9tIFwiLi9tb2RpZmllcnMvYXBwbHlTdHlsZXMuanNcIjtcbmltcG9ydCBvZmZzZXQgZnJvbSBcIi4vbW9kaWZpZXJzL29mZnNldC5qc1wiO1xuaW1wb3J0IGZsaXAgZnJvbSBcIi4vbW9kaWZpZXJzL2ZsaXAuanNcIjtcbmltcG9ydCBwcmV2ZW50T3ZlcmZsb3cgZnJvbSBcIi4vbW9kaWZpZXJzL3ByZXZlbnRPdmVyZmxvdy5qc1wiO1xuaW1wb3J0IGFycm93IGZyb20gXCIuL21vZGlmaWVycy9hcnJvdy5qc1wiO1xuaW1wb3J0IGhpZGUgZnJvbSBcIi4vbW9kaWZpZXJzL2hpZGUuanNcIjtcbnZhciBkZWZhdWx0TW9kaWZpZXJzID0gW2V2ZW50TGlzdGVuZXJzLCBwb3BwZXJPZmZzZXRzLCBjb21wdXRlU3R5bGVzLCBhcHBseVN0eWxlcywgb2Zmc2V0LCBmbGlwLCBwcmV2ZW50T3ZlcmZsb3csIGFycm93LCBoaWRlXTtcbnZhciBjcmVhdGVQb3BwZXIgPSAvKiNfX1BVUkVfXyovcG9wcGVyR2VuZXJhdG9yKHtcbiAgZGVmYXVsdE1vZGlmaWVyczogZGVmYXVsdE1vZGlmaWVyc1xufSk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0IHsgY3JlYXRlUG9wcGVyLCBwb3BwZXJHZW5lcmF0b3IsIGRlZmF1bHRNb2RpZmllcnMsIGRldGVjdE92ZXJmbG93IH07IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0IHsgY3JlYXRlUG9wcGVyIGFzIGNyZWF0ZVBvcHBlckxpdGUgfSBmcm9tIFwiLi9wb3BwZXItbGl0ZS5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCAqIGZyb20gXCIuL21vZGlmaWVycy9pbmRleC5qc1wiOyIsImltcG9ydCBnZXRWYXJpYXRpb24gZnJvbSBcIi4vZ2V0VmFyaWF0aW9uLmpzXCI7XG5pbXBvcnQgeyB2YXJpYXRpb25QbGFjZW1lbnRzLCBiYXNlUGxhY2VtZW50cywgcGxhY2VtZW50cyBhcyBhbGxQbGFjZW1lbnRzIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgZGV0ZWN0T3ZlcmZsb3cgZnJvbSBcIi4vZGV0ZWN0T3ZlcmZsb3cuanNcIjtcbmltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXB1dGVBdXRvUGxhY2VtZW50KHN0YXRlLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgX29wdGlvbnMgPSBvcHRpb25zLFxuICAgICAgcGxhY2VtZW50ID0gX29wdGlvbnMucGxhY2VtZW50LFxuICAgICAgYm91bmRhcnkgPSBfb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeSA9IF9vcHRpb25zLnJvb3RCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmcgPSBfb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgZmxpcFZhcmlhdGlvbnMgPSBfb3B0aW9ucy5mbGlwVmFyaWF0aW9ucyxcbiAgICAgIF9vcHRpb25zJGFsbG93ZWRBdXRvUCA9IF9vcHRpb25zLmFsbG93ZWRBdXRvUGxhY2VtZW50cyxcbiAgICAgIGFsbG93ZWRBdXRvUGxhY2VtZW50cyA9IF9vcHRpb25zJGFsbG93ZWRBdXRvUCA9PT0gdm9pZCAwID8gYWxsUGxhY2VtZW50cyA6IF9vcHRpb25zJGFsbG93ZWRBdXRvUDtcbiAgdmFyIHZhcmlhdGlvbiA9IGdldFZhcmlhdGlvbihwbGFjZW1lbnQpO1xuICB2YXIgcGxhY2VtZW50cyA9IHZhcmlhdGlvbiA/IGZsaXBWYXJpYXRpb25zID8gdmFyaWF0aW9uUGxhY2VtZW50cyA6IHZhcmlhdGlvblBsYWNlbWVudHMuZmlsdGVyKGZ1bmN0aW9uIChwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkgPT09IHZhcmlhdGlvbjtcbiAgfSkgOiBiYXNlUGxhY2VtZW50cztcbiAgdmFyIGFsbG93ZWRQbGFjZW1lbnRzID0gcGxhY2VtZW50cy5maWx0ZXIoZnVuY3Rpb24gKHBsYWNlbWVudCkge1xuICAgIHJldHVybiBhbGxvd2VkQXV0b1BsYWNlbWVudHMuaW5kZXhPZihwbGFjZW1lbnQpID49IDA7XG4gIH0pO1xuXG4gIGlmIChhbGxvd2VkUGxhY2VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICBhbGxvd2VkUGxhY2VtZW50cyA9IHBsYWNlbWVudHM7XG4gIH0gLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtdHlwZV06IEZsb3cgc2VlbXMgdG8gaGF2ZSBwcm9ibGVtcyB3aXRoIHR3byBhcnJheSB1bmlvbnMuLi5cblxuXG4gIHZhciBvdmVyZmxvd3MgPSBhbGxvd2VkUGxhY2VtZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gICAgYWNjW3BsYWNlbWVudF0gPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmc6IHBhZGRpbmdcbiAgICB9KVtnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCldO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG92ZXJmbG93cykuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBvdmVyZmxvd3NbYV0gLSBvdmVyZmxvd3NbYl07XG4gIH0pO1xufSIsImltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRWYXJpYXRpb24gZnJvbSBcIi4vZ2V0VmFyaWF0aW9uLmpzXCI7XG5pbXBvcnQgZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50IGZyb20gXCIuL2dldE1haW5BeGlzRnJvbVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IHsgdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0LCBzdGFydCwgZW5kIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wdXRlT2Zmc2V0cyhfcmVmKSB7XG4gIHZhciByZWZlcmVuY2UgPSBfcmVmLnJlZmVyZW5jZSxcbiAgICAgIGVsZW1lbnQgPSBfcmVmLmVsZW1lbnQsXG4gICAgICBwbGFjZW1lbnQgPSBfcmVmLnBsYWNlbWVudDtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBwbGFjZW1lbnQgPyBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkgOiBudWxsO1xuICB2YXIgdmFyaWF0aW9uID0gcGxhY2VtZW50ID8gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkgOiBudWxsO1xuICB2YXIgY29tbW9uWCA9IHJlZmVyZW5jZS54ICsgcmVmZXJlbmNlLndpZHRoIC8gMiAtIGVsZW1lbnQud2lkdGggLyAyO1xuICB2YXIgY29tbW9uWSA9IHJlZmVyZW5jZS55ICsgcmVmZXJlbmNlLmhlaWdodCAvIDIgLSBlbGVtZW50LmhlaWdodCAvIDI7XG4gIHZhciBvZmZzZXRzO1xuXG4gIHN3aXRjaCAoYmFzZVBsYWNlbWVudCkge1xuICAgIGNhc2UgdG9wOlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogY29tbW9uWCxcbiAgICAgICAgeTogcmVmZXJlbmNlLnkgLSBlbGVtZW50LmhlaWdodFxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBib3R0b206XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiBjb21tb25YLFxuICAgICAgICB5OiByZWZlcmVuY2UueSArIHJlZmVyZW5jZS5oZWlnaHRcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgcmlnaHQ6XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiByZWZlcmVuY2UueCArIHJlZmVyZW5jZS53aWR0aCxcbiAgICAgICAgeTogY29tbW9uWVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBsZWZ0OlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogcmVmZXJlbmNlLnggLSBlbGVtZW50LndpZHRoLFxuICAgICAgICB5OiBjb21tb25ZXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogcmVmZXJlbmNlLngsXG4gICAgICAgIHk6IHJlZmVyZW5jZS55XG4gICAgICB9O1xuICB9XG5cbiAgdmFyIG1haW5BeGlzID0gYmFzZVBsYWNlbWVudCA/IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChiYXNlUGxhY2VtZW50KSA6IG51bGw7XG5cbiAgaWYgKG1haW5BeGlzICE9IG51bGwpIHtcbiAgICB2YXIgbGVuID0gbWFpbkF4aXMgPT09ICd5JyA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICAgIHN3aXRjaCAodmFyaWF0aW9uKSB7XG4gICAgICBjYXNlIHN0YXJ0OlxuICAgICAgICBvZmZzZXRzW21haW5BeGlzXSA9IG9mZnNldHNbbWFpbkF4aXNdIC0gKHJlZmVyZW5jZVtsZW5dIC8gMiAtIGVsZW1lbnRbbGVuXSAvIDIpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBlbmQ6XG4gICAgICAgIG9mZnNldHNbbWFpbkF4aXNdID0gb2Zmc2V0c1ttYWluQXhpc10gKyAocmVmZXJlbmNlW2xlbl0gLyAyIC0gZWxlbWVudFtsZW5dIC8gMik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvZmZzZXRzO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlYm91bmNlKGZuKSB7XG4gIHZhciBwZW5kaW5nO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmICghcGVuZGluZykge1xuICAgICAgcGVuZGluZyA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHBlbmRpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgcmVzb2x2ZShmbigpKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGVuZGluZztcbiAgfTtcbn0iLCJpbXBvcnQgZ2V0Q2xpcHBpbmdSZWN0IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0Q2xpcHBpbmdSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgY29tcHV0ZU9mZnNldHMgZnJvbSBcIi4vY29tcHV0ZU9mZnNldHMuanNcIjtcbmltcG9ydCByZWN0VG9DbGllbnRSZWN0IGZyb20gXCIuL3JlY3RUb0NsaWVudFJlY3QuanNcIjtcbmltcG9ydCB7IGNsaXBwaW5nUGFyZW50cywgcmVmZXJlbmNlLCBwb3BwZXIsIGJvdHRvbSwgdG9wLCByaWdodCwgYmFzZVBsYWNlbWVudHMsIHZpZXdwb3J0IH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgeyBpc0VsZW1lbnQgfSBmcm9tIFwiLi4vZG9tLXV0aWxzL2luc3RhbmNlT2YuanNcIjtcbmltcG9ydCBtZXJnZVBhZGRpbmdPYmplY3QgZnJvbSBcIi4vbWVyZ2VQYWRkaW5nT2JqZWN0LmpzXCI7XG5pbXBvcnQgZXhwYW5kVG9IYXNoTWFwIGZyb20gXCIuL2V4cGFuZFRvSGFzaE1hcC5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRldGVjdE92ZXJmbG93KHN0YXRlLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgX29wdGlvbnMgPSBvcHRpb25zLFxuICAgICAgX29wdGlvbnMkcGxhY2VtZW50ID0gX29wdGlvbnMucGxhY2VtZW50LFxuICAgICAgcGxhY2VtZW50ID0gX29wdGlvbnMkcGxhY2VtZW50ID09PSB2b2lkIDAgPyBzdGF0ZS5wbGFjZW1lbnQgOiBfb3B0aW9ucyRwbGFjZW1lbnQsXG4gICAgICBfb3B0aW9ucyRzdHJhdGVneSA9IF9vcHRpb25zLnN0cmF0ZWd5LFxuICAgICAgc3RyYXRlZ3kgPSBfb3B0aW9ucyRzdHJhdGVneSA9PT0gdm9pZCAwID8gc3RhdGUuc3RyYXRlZ3kgOiBfb3B0aW9ucyRzdHJhdGVneSxcbiAgICAgIF9vcHRpb25zJGJvdW5kYXJ5ID0gX29wdGlvbnMuYm91bmRhcnksXG4gICAgICBib3VuZGFyeSA9IF9vcHRpb25zJGJvdW5kYXJ5ID09PSB2b2lkIDAgPyBjbGlwcGluZ1BhcmVudHMgOiBfb3B0aW9ucyRib3VuZGFyeSxcbiAgICAgIF9vcHRpb25zJHJvb3RCb3VuZGFyeSA9IF9vcHRpb25zLnJvb3RCb3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeSA9IF9vcHRpb25zJHJvb3RCb3VuZGFyeSA9PT0gdm9pZCAwID8gdmlld3BvcnQgOiBfb3B0aW9ucyRyb290Qm91bmRhcnksXG4gICAgICBfb3B0aW9ucyRlbGVtZW50Q29udGUgPSBfb3B0aW9ucy5lbGVtZW50Q29udGV4dCxcbiAgICAgIGVsZW1lbnRDb250ZXh0ID0gX29wdGlvbnMkZWxlbWVudENvbnRlID09PSB2b2lkIDAgPyBwb3BwZXIgOiBfb3B0aW9ucyRlbGVtZW50Q29udGUsXG4gICAgICBfb3B0aW9ucyRhbHRCb3VuZGFyeSA9IF9vcHRpb25zLmFsdEJvdW5kYXJ5LFxuICAgICAgYWx0Qm91bmRhcnkgPSBfb3B0aW9ucyRhbHRCb3VuZGFyeSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfb3B0aW9ucyRhbHRCb3VuZGFyeSxcbiAgICAgIF9vcHRpb25zJHBhZGRpbmcgPSBfb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgcGFkZGluZyA9IF9vcHRpb25zJHBhZGRpbmcgPT09IHZvaWQgMCA/IDAgOiBfb3B0aW9ucyRwYWRkaW5nO1xuICB2YXIgcGFkZGluZ09iamVjdCA9IG1lcmdlUGFkZGluZ09iamVjdCh0eXBlb2YgcGFkZGluZyAhPT0gJ251bWJlcicgPyBwYWRkaW5nIDogZXhwYW5kVG9IYXNoTWFwKHBhZGRpbmcsIGJhc2VQbGFjZW1lbnRzKSk7XG4gIHZhciBhbHRDb250ZXh0ID0gZWxlbWVudENvbnRleHQgPT09IHBvcHBlciA/IHJlZmVyZW5jZSA6IHBvcHBlcjtcbiAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gIHZhciBlbGVtZW50ID0gc3RhdGUuZWxlbWVudHNbYWx0Qm91bmRhcnkgPyBhbHRDb250ZXh0IDogZWxlbWVudENvbnRleHRdO1xuICB2YXIgY2xpcHBpbmdDbGllbnRSZWN0ID0gZ2V0Q2xpcHBpbmdSZWN0KGlzRWxlbWVudChlbGVtZW50KSA/IGVsZW1lbnQgOiBlbGVtZW50LmNvbnRleHRFbGVtZW50IHx8IGdldERvY3VtZW50RWxlbWVudChzdGF0ZS5lbGVtZW50cy5wb3BwZXIpLCBib3VuZGFyeSwgcm9vdEJvdW5kYXJ5LCBzdHJhdGVneSk7XG4gIHZhciByZWZlcmVuY2VDbGllbnRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KHN0YXRlLmVsZW1lbnRzLnJlZmVyZW5jZSk7XG4gIHZhciBwb3BwZXJPZmZzZXRzID0gY29tcHV0ZU9mZnNldHMoe1xuICAgIHJlZmVyZW5jZTogcmVmZXJlbmNlQ2xpZW50UmVjdCxcbiAgICBlbGVtZW50OiBwb3BwZXJSZWN0LFxuICAgIHN0cmF0ZWd5OiAnYWJzb2x1dGUnLFxuICAgIHBsYWNlbWVudDogcGxhY2VtZW50XG4gIH0pO1xuICB2YXIgcG9wcGVyQ2xpZW50UmVjdCA9IHJlY3RUb0NsaWVudFJlY3QoT2JqZWN0LmFzc2lnbih7fSwgcG9wcGVyUmVjdCwgcG9wcGVyT2Zmc2V0cykpO1xuICB2YXIgZWxlbWVudENsaWVudFJlY3QgPSBlbGVtZW50Q29udGV4dCA9PT0gcG9wcGVyID8gcG9wcGVyQ2xpZW50UmVjdCA6IHJlZmVyZW5jZUNsaWVudFJlY3Q7IC8vIHBvc2l0aXZlID0gb3ZlcmZsb3dpbmcgdGhlIGNsaXBwaW5nIHJlY3RcbiAgLy8gMCBvciBuZWdhdGl2ZSA9IHdpdGhpbiB0aGUgY2xpcHBpbmcgcmVjdFxuXG4gIHZhciBvdmVyZmxvd09mZnNldHMgPSB7XG4gICAgdG9wOiBjbGlwcGluZ0NsaWVudFJlY3QudG9wIC0gZWxlbWVudENsaWVudFJlY3QudG9wICsgcGFkZGluZ09iamVjdC50b3AsXG4gICAgYm90dG9tOiBlbGVtZW50Q2xpZW50UmVjdC5ib3R0b20gLSBjbGlwcGluZ0NsaWVudFJlY3QuYm90dG9tICsgcGFkZGluZ09iamVjdC5ib3R0b20sXG4gICAgbGVmdDogY2xpcHBpbmdDbGllbnRSZWN0LmxlZnQgLSBlbGVtZW50Q2xpZW50UmVjdC5sZWZ0ICsgcGFkZGluZ09iamVjdC5sZWZ0LFxuICAgIHJpZ2h0OiBlbGVtZW50Q2xpZW50UmVjdC5yaWdodCAtIGNsaXBwaW5nQ2xpZW50UmVjdC5yaWdodCArIHBhZGRpbmdPYmplY3QucmlnaHRcbiAgfTtcbiAgdmFyIG9mZnNldERhdGEgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLm9mZnNldDsgLy8gT2Zmc2V0cyBjYW4gYmUgYXBwbGllZCBvbmx5IHRvIHRoZSBwb3BwZXIgZWxlbWVudFxuXG4gIGlmIChlbGVtZW50Q29udGV4dCA9PT0gcG9wcGVyICYmIG9mZnNldERhdGEpIHtcbiAgICB2YXIgb2Zmc2V0ID0gb2Zmc2V0RGF0YVtwbGFjZW1lbnRdO1xuICAgIE9iamVjdC5rZXlzKG92ZXJmbG93T2Zmc2V0cykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgbXVsdGlwbHkgPSBbcmlnaHQsIGJvdHRvbV0uaW5kZXhPZihrZXkpID49IDAgPyAxIDogLTE7XG4gICAgICB2YXIgYXhpcyA9IFt0b3AsIGJvdHRvbV0uaW5kZXhPZihrZXkpID49IDAgPyAneScgOiAneCc7XG4gICAgICBvdmVyZmxvd09mZnNldHNba2V5XSArPSBvZmZzZXRbYXhpc10gKiBtdWx0aXBseTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBvdmVyZmxvd09mZnNldHM7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXhwYW5kVG9IYXNoTWFwKHZhbHVlLCBrZXlzKSB7XG4gIHJldHVybiBrZXlzLnJlZHVjZShmdW5jdGlvbiAoaGFzaE1hcCwga2V5KSB7XG4gICAgaGFzaE1hcFtrZXldID0gdmFsdWU7XG4gICAgcmV0dXJuIGhhc2hNYXA7XG4gIH0sIHt9KTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRBbHRBeGlzKGF4aXMpIHtcbiAgcmV0dXJuIGF4aXMgPT09ICd4JyA/ICd5JyA6ICd4Jztcbn0iLCJpbXBvcnQgeyBhdXRvIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnNwbGl0KCctJylbMF07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RnJlc2hTaWRlT2JqZWN0KCkge1xuICByZXR1cm4ge1xuICAgIHRvcDogMCxcbiAgICByaWdodDogMCxcbiAgICBib3R0b206IDAsXG4gICAgbGVmdDogMFxuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIFsndG9wJywgJ2JvdHRvbSddLmluZGV4T2YocGxhY2VtZW50KSA+PSAwID8gJ3gnIDogJ3knO1xufSIsInZhciBoYXNoID0ge1xuICBsZWZ0OiAncmlnaHQnLFxuICByaWdodDogJ2xlZnQnLFxuICBib3R0b206ICd0b3AnLFxuICB0b3A6ICdib3R0b20nXG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQucmVwbGFjZSgvbGVmdHxyaWdodHxib3R0b218dG9wL2csIGZ1bmN0aW9uIChtYXRjaGVkKSB7XG4gICAgcmV0dXJuIGhhc2hbbWF0Y2hlZF07XG4gIH0pO1xufSIsInZhciBoYXNoID0ge1xuICBzdGFydDogJ2VuZCcsXG4gIGVuZDogJ3N0YXJ0J1xufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnJlcGxhY2UoL3N0YXJ0fGVuZC9nLCBmdW5jdGlvbiAobWF0Y2hlZCkge1xuICAgIHJldHVybiBoYXNoW21hdGNoZWRdO1xuICB9KTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQuc3BsaXQoJy0nKVsxXTtcbn0iLCJleHBvcnQgdmFyIG1heCA9IE1hdGgubWF4O1xuZXhwb3J0IHZhciBtaW4gPSBNYXRoLm1pbjtcbmV4cG9ydCB2YXIgcm91bmQgPSBNYXRoLnJvdW5kOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lcmdlQnlOYW1lKG1vZGlmaWVycykge1xuICB2YXIgbWVyZ2VkID0gbW9kaWZpZXJzLnJlZHVjZShmdW5jdGlvbiAobWVyZ2VkLCBjdXJyZW50KSB7XG4gICAgdmFyIGV4aXN0aW5nID0gbWVyZ2VkW2N1cnJlbnQubmFtZV07XG4gICAgbWVyZ2VkW2N1cnJlbnQubmFtZV0gPSBleGlzdGluZyA/IE9iamVjdC5hc3NpZ24oe30sIGV4aXN0aW5nLCBjdXJyZW50LCB7XG4gICAgICBvcHRpb25zOiBPYmplY3QuYXNzaWduKHt9LCBleGlzdGluZy5vcHRpb25zLCBjdXJyZW50Lm9wdGlvbnMpLFxuICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbih7fSwgZXhpc3RpbmcuZGF0YSwgY3VycmVudC5kYXRhKVxuICAgIH0pIDogY3VycmVudDtcbiAgICByZXR1cm4gbWVyZ2VkO1xuICB9LCB7fSk7IC8vIElFMTEgZG9lcyBub3Qgc3VwcG9ydCBPYmplY3QudmFsdWVzXG5cbiAgcmV0dXJuIE9iamVjdC5rZXlzKG1lcmdlZCkubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gbWVyZ2VkW2tleV07XG4gIH0pO1xufSIsImltcG9ydCBnZXRGcmVzaFNpZGVPYmplY3QgZnJvbSBcIi4vZ2V0RnJlc2hTaWRlT2JqZWN0LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZXJnZVBhZGRpbmdPYmplY3QocGFkZGluZ09iamVjdCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZ2V0RnJlc2hTaWRlT2JqZWN0KCksIHBhZGRpbmdPYmplY3QpO1xufSIsImltcG9ydCB7IG1vZGlmaWVyUGhhc2VzIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7IC8vIHNvdXJjZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDk4NzUyNTVcblxuZnVuY3Rpb24gb3JkZXIobW9kaWZpZXJzKSB7XG4gIHZhciBtYXAgPSBuZXcgTWFwKCk7XG4gIHZhciB2aXNpdGVkID0gbmV3IFNldCgpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIG1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgIG1hcC5zZXQobW9kaWZpZXIubmFtZSwgbW9kaWZpZXIpO1xuICB9KTsgLy8gT24gdmlzaXRpbmcgb2JqZWN0LCBjaGVjayBmb3IgaXRzIGRlcGVuZGVuY2llcyBhbmQgdmlzaXQgdGhlbSByZWN1cnNpdmVseVxuXG4gIGZ1bmN0aW9uIHNvcnQobW9kaWZpZXIpIHtcbiAgICB2aXNpdGVkLmFkZChtb2RpZmllci5uYW1lKTtcbiAgICB2YXIgcmVxdWlyZXMgPSBbXS5jb25jYXQobW9kaWZpZXIucmVxdWlyZXMgfHwgW10sIG1vZGlmaWVyLnJlcXVpcmVzSWZFeGlzdHMgfHwgW10pO1xuICAgIHJlcXVpcmVzLmZvckVhY2goZnVuY3Rpb24gKGRlcCkge1xuICAgICAgaWYgKCF2aXNpdGVkLmhhcyhkZXApKSB7XG4gICAgICAgIHZhciBkZXBNb2RpZmllciA9IG1hcC5nZXQoZGVwKTtcblxuICAgICAgICBpZiAoZGVwTW9kaWZpZXIpIHtcbiAgICAgICAgICBzb3J0KGRlcE1vZGlmaWVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJlc3VsdC5wdXNoKG1vZGlmaWVyKTtcbiAgfVxuXG4gIG1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgIGlmICghdmlzaXRlZC5oYXMobW9kaWZpZXIubmFtZSkpIHtcbiAgICAgIC8vIGNoZWNrIGZvciB2aXNpdGVkIG9iamVjdFxuICAgICAgc29ydChtb2RpZmllcik7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb3JkZXJNb2RpZmllcnMobW9kaWZpZXJzKSB7XG4gIC8vIG9yZGVyIGJhc2VkIG9uIGRlcGVuZGVuY2llc1xuICB2YXIgb3JkZXJlZE1vZGlmaWVycyA9IG9yZGVyKG1vZGlmaWVycyk7IC8vIG9yZGVyIGJhc2VkIG9uIHBoYXNlXG5cbiAgcmV0dXJuIG1vZGlmaWVyUGhhc2VzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwaGFzZSkge1xuICAgIHJldHVybiBhY2MuY29uY2F0KG9yZGVyZWRNb2RpZmllcnMuZmlsdGVyKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgICAgcmV0dXJuIG1vZGlmaWVyLnBoYXNlID09PSBwaGFzZTtcbiAgICB9KSk7XG4gIH0sIFtdKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWN0VG9DbGllbnRSZWN0KHJlY3QpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHJlY3QsIHtcbiAgICBsZWZ0OiByZWN0LngsXG4gICAgdG9wOiByZWN0LnksXG4gICAgcmlnaHQ6IHJlY3QueCArIHJlY3Qud2lkdGgsXG4gICAgYm90dG9tOiByZWN0LnkgKyByZWN0LmhlaWdodFxuICB9KTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVQVN0cmluZygpIHtcbiAgdmFyIHVhRGF0YSA9IG5hdmlnYXRvci51c2VyQWdlbnREYXRhO1xuXG4gIGlmICh1YURhdGEgIT0gbnVsbCAmJiB1YURhdGEuYnJhbmRzICYmIEFycmF5LmlzQXJyYXkodWFEYXRhLmJyYW5kcykpIHtcbiAgICByZXR1cm4gdWFEYXRhLmJyYW5kcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBpdGVtLmJyYW5kICsgXCIvXCIgKyBpdGVtLnZlcnNpb247XG4gICAgfSkuam9pbignICcpO1xuICB9XG5cbiAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQ7XG59IiwiaW1wb3J0IHsgbWF4IGFzIG1hdGhNYXgsIG1pbiBhcyBtYXRoTWluIH0gZnJvbSBcIi4vbWF0aC5qc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIHdpdGhpbihtaW4sIHZhbHVlLCBtYXgpIHtcbiAgcmV0dXJuIG1hdGhNYXgobWluLCBtYXRoTWluKHZhbHVlLCBtYXgpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB3aXRoaW5NYXhDbGFtcChtaW4sIHZhbHVlLCBtYXgpIHtcbiAgdmFyIHYgPSB3aXRoaW4obWluLCB2YWx1ZSwgbWF4KTtcbiAgcmV0dXJuIHYgPiBtYXggPyBtYXggOiB2O1xufSIsIi8qIVxuICAqIEJvb3RzdHJhcCBiYXNlLWNvbXBvbmVudC5qcyB2NS4yLjMgKGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS8pXG4gICogQ29weXJpZ2h0IDIwMTEtMjAyMiBUaGUgQm9vdHN0cmFwIEF1dGhvcnMgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ncmFwaHMvY29udHJpYnV0b3JzKVxuICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAqL1xuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoJy4vZG9tL2RhdGEnKSwgcmVxdWlyZSgnLi91dGlsL2luZGV4JyksIHJlcXVpcmUoJy4vZG9tL2V2ZW50LWhhbmRsZXInKSwgcmVxdWlyZSgnLi91dGlsL2NvbmZpZycpKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJy4vZG9tL2RhdGEnLCAnLi91dGlsL2luZGV4JywgJy4vZG9tL2V2ZW50LWhhbmRsZXInLCAnLi91dGlsL2NvbmZpZyddLCBmYWN0b3J5KSA6XG4gIChnbG9iYWwgPSB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWxUaGlzIDogZ2xvYmFsIHx8IHNlbGYsIGdsb2JhbC5CYXNlQ29tcG9uZW50ID0gZmFjdG9yeShnbG9iYWwuRGF0YSwgZ2xvYmFsLkluZGV4LCBnbG9iYWwuRXZlbnRIYW5kbGVyLCBnbG9iYWwuQ29uZmlnKSk7XG59KSh0aGlzLCAoZnVuY3Rpb24gKERhdGEsIGluZGV4LCBFdmVudEhhbmRsZXIsIENvbmZpZykgeyAndXNlIHN0cmljdCc7XG5cbiAgY29uc3QgX2ludGVyb3BEZWZhdWx0TGVnYWN5ID0gZSA9PiBlICYmIHR5cGVvZiBlID09PSAnb2JqZWN0JyAmJiAnZGVmYXVsdCcgaW4gZSA/IGUgOiB7IGRlZmF1bHQ6IGUgfTtcblxuICBjb25zdCBEYXRhX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19pbnRlcm9wRGVmYXVsdExlZ2FjeShEYXRhKTtcbiAgY29uc3QgRXZlbnRIYW5kbGVyX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19pbnRlcm9wRGVmYXVsdExlZ2FjeShFdmVudEhhbmRsZXIpO1xuICBjb25zdCBDb25maWdfX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX2ludGVyb3BEZWZhdWx0TGVnYWN5KENvbmZpZyk7XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCAodjUuMi4zKTogYmFzZS1jb21wb25lbnQuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqL1xuXG4gIGNvbnN0IFZFUlNJT04gPSAnNS4yLjMnO1xuICAvKipcbiAgICogQ2xhc3MgZGVmaW5pdGlvblxuICAgKi9cblxuICBjbGFzcyBCYXNlQ29tcG9uZW50IGV4dGVuZHMgQ29uZmlnX19kZWZhdWx0LmRlZmF1bHQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIGVsZW1lbnQgPSBpbmRleC5nZXRFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpO1xuICAgICAgRGF0YV9fZGVmYXVsdC5kZWZhdWx0LnNldCh0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZLCB0aGlzKTtcbiAgICB9IC8vIFB1YmxpY1xuXG5cbiAgICBkaXNwb3NlKCkge1xuICAgICAgRGF0YV9fZGVmYXVsdC5kZWZhdWx0LnJlbW92ZSh0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZKTtcbiAgICAgIEV2ZW50SGFuZGxlcl9fZGVmYXVsdC5kZWZhdWx0Lm9mZih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkVWRU5UX0tFWSk7XG5cbiAgICAgIGZvciAoY29uc3QgcHJvcGVydHlOYW1lIG9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMpKSB7XG4gICAgICAgIHRoaXNbcHJvcGVydHlOYW1lXSA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgX3F1ZXVlQ2FsbGJhY2soY2FsbGJhY2ssIGVsZW1lbnQsIGlzQW5pbWF0ZWQgPSB0cnVlKSB7XG4gICAgICBpbmRleC5leGVjdXRlQWZ0ZXJUcmFuc2l0aW9uKGNhbGxiYWNrLCBlbGVtZW50LCBpc0FuaW1hdGVkKTtcbiAgICB9XG5cbiAgICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgICAgY29uZmlnID0gdGhpcy5fbWVyZ2VDb25maWdPYmooY29uZmlnLCB0aGlzLl9lbGVtZW50KTtcbiAgICAgIGNvbmZpZyA9IHRoaXMuX2NvbmZpZ0FmdGVyTWVyZ2UoY29uZmlnKTtcblxuICAgICAgdGhpcy5fdHlwZUNoZWNrQ29uZmlnKGNvbmZpZyk7XG5cbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfSAvLyBTdGF0aWNcblxuXG4gICAgc3RhdGljIGdldEluc3RhbmNlKGVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBEYXRhX19kZWZhdWx0LmRlZmF1bHQuZ2V0KGluZGV4LmdldEVsZW1lbnQoZWxlbWVudCksIHRoaXMuREFUQV9LRVkpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRPckNyZWF0ZUluc3RhbmNlKGVsZW1lbnQsIGNvbmZpZyA9IHt9KSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRJbnN0YW5jZShlbGVtZW50KSB8fCBuZXcgdGhpcyhlbGVtZW50LCB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IG51bGwpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgVkVSU0lPTigpIHtcbiAgICAgIHJldHVybiBWRVJTSU9OO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgREFUQV9LRVkoKSB7XG4gICAgICByZXR1cm4gYGJzLiR7dGhpcy5OQU1FfWA7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBFVkVOVF9LRVkoKSB7XG4gICAgICByZXR1cm4gYC4ke3RoaXMuREFUQV9LRVl9YDtcbiAgICB9XG5cbiAgICBzdGF0aWMgZXZlbnROYW1lKG5hbWUpIHtcbiAgICAgIHJldHVybiBgJHtuYW1lfSR7dGhpcy5FVkVOVF9LRVl9YDtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBCYXNlQ29tcG9uZW50O1xuXG59KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1iYXNlLWNvbXBvbmVudC5qcy5tYXBcbiIsIi8qIVxuICAqIEJvb3RzdHJhcCBidXR0b24uanMgdjUuMi4zIChodHRwczovL2dldGJvb3RzdHJhcC5jb20vKVxuICAqIENvcHlyaWdodCAyMDExLTIwMjIgVGhlIEJvb3RzdHJhcCBBdXRob3JzIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvZ3JhcGhzL2NvbnRyaWJ1dG9ycylcbiAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgKi9cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKCcuL3V0aWwvaW5kZXgnKSwgcmVxdWlyZSgnLi9kb20vZXZlbnQtaGFuZGxlcicpLCByZXF1aXJlKCcuL2Jhc2UtY29tcG9uZW50JykpIDpcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnLi91dGlsL2luZGV4JywgJy4vZG9tL2V2ZW50LWhhbmRsZXInLCAnLi9iYXNlLWNvbXBvbmVudCddLCBmYWN0b3J5KSA6XG4gIChnbG9iYWwgPSB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWxUaGlzIDogZ2xvYmFsIHx8IHNlbGYsIGdsb2JhbC5CdXR0b24gPSBmYWN0b3J5KGdsb2JhbC5JbmRleCwgZ2xvYmFsLkV2ZW50SGFuZGxlciwgZ2xvYmFsLkJhc2VDb21wb25lbnQpKTtcbn0pKHRoaXMsIChmdW5jdGlvbiAoaW5kZXgsIEV2ZW50SGFuZGxlciwgQmFzZUNvbXBvbmVudCkgeyAndXNlIHN0cmljdCc7XG5cbiAgY29uc3QgX2ludGVyb3BEZWZhdWx0TGVnYWN5ID0gZSA9PiBlICYmIHR5cGVvZiBlID09PSAnb2JqZWN0JyAmJiAnZGVmYXVsdCcgaW4gZSA/IGUgOiB7IGRlZmF1bHQ6IGUgfTtcblxuICBjb25zdCBFdmVudEhhbmRsZXJfX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX2ludGVyb3BEZWZhdWx0TGVnYWN5KEV2ZW50SGFuZGxlcik7XG4gIGNvbnN0IEJhc2VDb21wb25lbnRfX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX2ludGVyb3BEZWZhdWx0TGVnYWN5KEJhc2VDb21wb25lbnQpO1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgKHY1LjIuMyk6IGJ1dHRvbi5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICovXG5cbiAgY29uc3QgTkFNRSA9ICdidXR0b24nO1xuICBjb25zdCBEQVRBX0tFWSA9ICdicy5idXR0b24nO1xuICBjb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YDtcbiAgY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSc7XG4gIGNvbnN0IENMQVNTX05BTUVfQUNUSVZFID0gJ2FjdGl2ZSc7XG4gIGNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFID0gJ1tkYXRhLWJzLXRvZ2dsZT1cImJ1dHRvblwiXSc7XG4gIGNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YDtcbiAgLyoqXG4gICAqIENsYXNzIGRlZmluaXRpb25cbiAgICovXG5cbiAgY2xhc3MgQnV0dG9uIGV4dGVuZHMgQmFzZUNvbXBvbmVudF9fZGVmYXVsdC5kZWZhdWx0IHtcbiAgICAvLyBHZXR0ZXJzXG4gICAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgICAgcmV0dXJuIE5BTUU7XG4gICAgfSAvLyBQdWJsaWNcblxuXG4gICAgdG9nZ2xlKCkge1xuICAgICAgLy8gVG9nZ2xlIGNsYXNzIGFuZCBzeW5jIHRoZSBgYXJpYS1wcmVzc2VkYCBhdHRyaWJ1dGUgd2l0aCB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBgLnRvZ2dsZSgpYCBtZXRob2RcbiAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLXByZXNzZWQnLCB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoQ0xBU1NfTkFNRV9BQ1RJVkUpKTtcbiAgICB9IC8vIFN0YXRpY1xuXG5cbiAgICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBCdXR0b24uZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzKTtcblxuICAgICAgICBpZiAoY29uZmlnID09PSAndG9nZ2xlJykge1xuICAgICAgICAgIGRhdGFbY29uZmlnXSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgfVxuICAvKipcbiAgICogRGF0YSBBUEkgaW1wbGVtZW50YXRpb25cbiAgICovXG5cblxuICBFdmVudEhhbmRsZXJfX2RlZmF1bHQuZGVmYXVsdC5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBldmVudCA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBidXR0b24gPSBldmVudC50YXJnZXQuY2xvc2VzdChTRUxFQ1RPUl9EQVRBX1RPR0dMRSk7XG4gICAgY29uc3QgZGF0YSA9IEJ1dHRvbi5nZXRPckNyZWF0ZUluc3RhbmNlKGJ1dHRvbik7XG4gICAgZGF0YS50b2dnbGUoKTtcbiAgfSk7XG4gIC8qKlxuICAgKiBqUXVlcnlcbiAgICovXG5cbiAgaW5kZXguZGVmaW5lSlF1ZXJ5UGx1Z2luKEJ1dHRvbik7XG5cbiAgcmV0dXJuIEJ1dHRvbjtcblxufSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YnV0dG9uLmpzLm1hcFxuIiwiLyohXG4gICogQm9vdHN0cmFwIGNhcm91c2VsLmpzIHY1LjIuMyAoaHR0cHM6Ly9nZXRib290c3RyYXAuY29tLylcbiAgKiBDb3B5cmlnaHQgMjAxMS0yMDIyIFRoZSBCb290c3RyYXAgQXV0aG9ycyAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2dyYXBocy9jb250cmlidXRvcnMpXG4gICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICovXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZSgnLi91dGlsL2luZGV4JyksIHJlcXVpcmUoJy4vZG9tL2V2ZW50LWhhbmRsZXInKSwgcmVxdWlyZSgnLi9kb20vbWFuaXB1bGF0b3InKSwgcmVxdWlyZSgnLi9kb20vc2VsZWN0b3ItZW5naW5lJyksIHJlcXVpcmUoJy4vdXRpbC9zd2lwZScpLCByZXF1aXJlKCcuL2Jhc2UtY29tcG9uZW50JykpIDpcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnLi91dGlsL2luZGV4JywgJy4vZG9tL2V2ZW50LWhhbmRsZXInLCAnLi9kb20vbWFuaXB1bGF0b3InLCAnLi9kb20vc2VsZWN0b3ItZW5naW5lJywgJy4vdXRpbC9zd2lwZScsICcuL2Jhc2UtY29tcG9uZW50J10sIGZhY3RvcnkpIDpcbiAgKGdsb2JhbCA9IHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbFRoaXMgOiBnbG9iYWwgfHwgc2VsZiwgZ2xvYmFsLkNhcm91c2VsID0gZmFjdG9yeShnbG9iYWwuSW5kZXgsIGdsb2JhbC5FdmVudEhhbmRsZXIsIGdsb2JhbC5NYW5pcHVsYXRvciwgZ2xvYmFsLlNlbGVjdG9yRW5naW5lLCBnbG9iYWwuU3dpcGUsIGdsb2JhbC5CYXNlQ29tcG9uZW50KSk7XG59KSh0aGlzLCAoZnVuY3Rpb24gKGluZGV4LCBFdmVudEhhbmRsZXIsIE1hbmlwdWxhdG9yLCBTZWxlY3RvckVuZ2luZSwgU3dpcGUsIEJhc2VDb21wb25lbnQpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gIGNvbnN0IF9pbnRlcm9wRGVmYXVsdExlZ2FjeSA9IGUgPT4gZSAmJiB0eXBlb2YgZSA9PT0gJ29iamVjdCcgJiYgJ2RlZmF1bHQnIGluIGUgPyBlIDogeyBkZWZhdWx0OiBlIH07XG5cbiAgY29uc3QgRXZlbnRIYW5kbGVyX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19pbnRlcm9wRGVmYXVsdExlZ2FjeShFdmVudEhhbmRsZXIpO1xuICBjb25zdCBNYW5pcHVsYXRvcl9fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9faW50ZXJvcERlZmF1bHRMZWdhY3koTWFuaXB1bGF0b3IpO1xuICBjb25zdCBTZWxlY3RvckVuZ2luZV9fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9faW50ZXJvcERlZmF1bHRMZWdhY3koU2VsZWN0b3JFbmdpbmUpO1xuICBjb25zdCBTd2lwZV9fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9faW50ZXJvcERlZmF1bHRMZWdhY3koU3dpcGUpO1xuICBjb25zdCBCYXNlQ29tcG9uZW50X19kZWZhdWx0ID0gLyojX19QVVJFX18qL19pbnRlcm9wRGVmYXVsdExlZ2FjeShCYXNlQ29tcG9uZW50KTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwICh2NS4yLjMpOiBjYXJvdXNlbC5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICovXG5cbiAgY29uc3QgTkFNRSA9ICdjYXJvdXNlbCc7XG4gIGNvbnN0IERBVEFfS0VZID0gJ2JzLmNhcm91c2VsJztcbiAgY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWA7XG4gIGNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknO1xuICBjb25zdCBBUlJPV19MRUZUX0tFWSA9ICdBcnJvd0xlZnQnO1xuICBjb25zdCBBUlJPV19SSUdIVF9LRVkgPSAnQXJyb3dSaWdodCc7XG4gIGNvbnN0IFRPVUNIRVZFTlRfQ09NUEFUX1dBSVQgPSA1MDA7IC8vIFRpbWUgZm9yIG1vdXNlIGNvbXBhdCBldmVudHMgdG8gZmlyZSBhZnRlciB0b3VjaFxuXG4gIGNvbnN0IE9SREVSX05FWFQgPSAnbmV4dCc7XG4gIGNvbnN0IE9SREVSX1BSRVYgPSAncHJldic7XG4gIGNvbnN0IERJUkVDVElPTl9MRUZUID0gJ2xlZnQnO1xuICBjb25zdCBESVJFQ1RJT05fUklHSFQgPSAncmlnaHQnO1xuICBjb25zdCBFVkVOVF9TTElERSA9IGBzbGlkZSR7RVZFTlRfS0VZfWA7XG4gIGNvbnN0IEVWRU5UX1NMSUQgPSBgc2xpZCR7RVZFTlRfS0VZfWA7XG4gIGNvbnN0IEVWRU5UX0tFWURPV04gPSBga2V5ZG93biR7RVZFTlRfS0VZfWA7XG4gIGNvbnN0IEVWRU5UX01PVVNFRU5URVIgPSBgbW91c2VlbnRlciR7RVZFTlRfS0VZfWA7XG4gIGNvbnN0IEVWRU5UX01PVVNFTEVBVkUgPSBgbW91c2VsZWF2ZSR7RVZFTlRfS0VZfWA7XG4gIGNvbnN0IEVWRU5UX0RSQUdfU1RBUlQgPSBgZHJhZ3N0YXJ0JHtFVkVOVF9LRVl9YDtcbiAgY29uc3QgRVZFTlRfTE9BRF9EQVRBX0FQSSA9IGBsb2FkJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YDtcbiAgY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gO1xuICBjb25zdCBDTEFTU19OQU1FX0NBUk9VU0VMID0gJ2Nhcm91c2VsJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9BQ1RJVkUgPSAnYWN0aXZlJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9TTElERSA9ICdzbGlkZSc7XG4gIGNvbnN0IENMQVNTX05BTUVfRU5EID0gJ2Nhcm91c2VsLWl0ZW0tZW5kJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9TVEFSVCA9ICdjYXJvdXNlbC1pdGVtLXN0YXJ0JztcbiAgY29uc3QgQ0xBU1NfTkFNRV9ORVhUID0gJ2Nhcm91c2VsLWl0ZW0tbmV4dCc7XG4gIGNvbnN0IENMQVNTX05BTUVfUFJFViA9ICdjYXJvdXNlbC1pdGVtLXByZXYnO1xuICBjb25zdCBTRUxFQ1RPUl9BQ1RJVkUgPSAnLmFjdGl2ZSc7XG4gIGNvbnN0IFNFTEVDVE9SX0lURU0gPSAnLmNhcm91c2VsLWl0ZW0nO1xuICBjb25zdCBTRUxFQ1RPUl9BQ1RJVkVfSVRFTSA9IFNFTEVDVE9SX0FDVElWRSArIFNFTEVDVE9SX0lURU07XG4gIGNvbnN0IFNFTEVDVE9SX0lURU1fSU1HID0gJy5jYXJvdXNlbC1pdGVtIGltZyc7XG4gIGNvbnN0IFNFTEVDVE9SX0lORElDQVRPUlMgPSAnLmNhcm91c2VsLWluZGljYXRvcnMnO1xuICBjb25zdCBTRUxFQ1RPUl9EQVRBX1NMSURFID0gJ1tkYXRhLWJzLXNsaWRlXSwgW2RhdGEtYnMtc2xpZGUtdG9dJztcbiAgY29uc3QgU0VMRUNUT1JfREFUQV9SSURFID0gJ1tkYXRhLWJzLXJpZGU9XCJjYXJvdXNlbFwiXSc7XG4gIGNvbnN0IEtFWV9UT19ESVJFQ1RJT04gPSB7XG4gICAgW0FSUk9XX0xFRlRfS0VZXTogRElSRUNUSU9OX1JJR0hULFxuICAgIFtBUlJPV19SSUdIVF9LRVldOiBESVJFQ1RJT05fTEVGVFxuICB9O1xuICBjb25zdCBEZWZhdWx0ID0ge1xuICAgIGludGVydmFsOiA1MDAwLFxuICAgIGtleWJvYXJkOiB0cnVlLFxuICAgIHBhdXNlOiAnaG92ZXInLFxuICAgIHJpZGU6IGZhbHNlLFxuICAgIHRvdWNoOiB0cnVlLFxuICAgIHdyYXA6IHRydWVcbiAgfTtcbiAgY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gICAgaW50ZXJ2YWw6ICcobnVtYmVyfGJvb2xlYW4pJyxcbiAgICAvLyBUT0RPOnY2IHJlbW92ZSBib29sZWFuIHN1cHBvcnRcbiAgICBrZXlib2FyZDogJ2Jvb2xlYW4nLFxuICAgIHBhdXNlOiAnKHN0cmluZ3xib29sZWFuKScsXG4gICAgcmlkZTogJyhib29sZWFufHN0cmluZyknLFxuICAgIHRvdWNoOiAnYm9vbGVhbicsXG4gICAgd3JhcDogJ2Jvb2xlYW4nXG4gIH07XG4gIC8qKlxuICAgKiBDbGFzcyBkZWZpbml0aW9uXG4gICAqL1xuXG4gIGNsYXNzIENhcm91c2VsIGV4dGVuZHMgQmFzZUNvbXBvbmVudF9fZGVmYXVsdC5kZWZhdWx0IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICAgIHN1cGVyKGVsZW1lbnQsIGNvbmZpZyk7XG4gICAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGw7XG4gICAgICB0aGlzLl9hY3RpdmVFbGVtZW50ID0gbnVsbDtcbiAgICAgIHRoaXMuX2lzU2xpZGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy50b3VjaFRpbWVvdXQgPSBudWxsO1xuICAgICAgdGhpcy5fc3dpcGVIZWxwZXIgPSBudWxsO1xuICAgICAgdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQgPSBTZWxlY3RvckVuZ2luZV9fZGVmYXVsdC5kZWZhdWx0LmZpbmRPbmUoU0VMRUNUT1JfSU5ESUNBVE9SUywgdGhpcy5fZWxlbWVudCk7XG5cbiAgICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcucmlkZSA9PT0gQ0xBU1NfTkFNRV9DQVJPVVNFTCkge1xuICAgICAgICB0aGlzLmN5Y2xlKCk7XG4gICAgICB9XG4gICAgfSAvLyBHZXR0ZXJzXG5cblxuICAgIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0O1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdFR5cGU7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgICAgcmV0dXJuIE5BTUU7XG4gICAgfSAvLyBQdWJsaWNcblxuXG4gICAgbmV4dCgpIHtcbiAgICAgIHRoaXMuX3NsaWRlKE9SREVSX05FWFQpO1xuICAgIH1cblxuICAgIG5leHRXaGVuVmlzaWJsZSgpIHtcbiAgICAgIC8vIEZJWE1FIFRPRE8gdXNlIGBkb2N1bWVudC52aXNpYmlsaXR5U3RhdGVgXG4gICAgICAvLyBEb24ndCBjYWxsIG5leHQgd2hlbiB0aGUgcGFnZSBpc24ndCB2aXNpYmxlXG4gICAgICAvLyBvciB0aGUgY2Fyb3VzZWwgb3IgaXRzIHBhcmVudCBpc24ndCB2aXNpYmxlXG4gICAgICBpZiAoIWRvY3VtZW50LmhpZGRlbiAmJiBpbmRleC5pc1Zpc2libGUodGhpcy5fZWxlbWVudCkpIHtcbiAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJldigpIHtcbiAgICAgIHRoaXMuX3NsaWRlKE9SREVSX1BSRVYpO1xuICAgIH1cblxuICAgIHBhdXNlKCkge1xuICAgICAgaWYgKHRoaXMuX2lzU2xpZGluZykge1xuICAgICAgICBpbmRleC50cmlnZ2VyVHJhbnNpdGlvbkVuZCh0aGlzLl9lbGVtZW50KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fY2xlYXJJbnRlcnZhbCgpO1xuICAgIH1cblxuICAgIGN5Y2xlKCkge1xuICAgICAgdGhpcy5fY2xlYXJJbnRlcnZhbCgpO1xuXG4gICAgICB0aGlzLl91cGRhdGVJbnRlcnZhbCgpO1xuXG4gICAgICB0aGlzLl9pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHRoaXMubmV4dFdoZW5WaXNpYmxlKCksIHRoaXMuX2NvbmZpZy5pbnRlcnZhbCk7XG4gICAgfVxuXG4gICAgX21heWJlRW5hYmxlQ3ljbGUoKSB7XG4gICAgICBpZiAoIXRoaXMuX2NvbmZpZy5yaWRlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2lzU2xpZGluZykge1xuICAgICAgICBFdmVudEhhbmRsZXJfX2RlZmF1bHQuZGVmYXVsdC5vbmUodGhpcy5fZWxlbWVudCwgRVZFTlRfU0xJRCwgKCkgPT4gdGhpcy5jeWNsZSgpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmN5Y2xlKCk7XG4gICAgfVxuXG4gICAgdG8oaW5kZXgpIHtcbiAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5fZ2V0SXRlbXMoKTtcblxuICAgICAgaWYgKGluZGV4ID4gaXRlbXMubGVuZ3RoIC0gMSB8fCBpbmRleCA8IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5faXNTbGlkaW5nKSB7XG4gICAgICAgIEV2ZW50SGFuZGxlcl9fZGVmYXVsdC5kZWZhdWx0Lm9uZSh0aGlzLl9lbGVtZW50LCBFVkVOVF9TTElELCAoKSA9PiB0aGlzLnRvKGluZGV4KSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYWN0aXZlSW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgodGhpcy5fZ2V0QWN0aXZlKCkpO1xuXG4gICAgICBpZiAoYWN0aXZlSW5kZXggPT09IGluZGV4KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgb3JkZXIgPSBpbmRleCA+IGFjdGl2ZUluZGV4ID8gT1JERVJfTkVYVCA6IE9SREVSX1BSRVY7XG5cbiAgICAgIHRoaXMuX3NsaWRlKG9yZGVyLCBpdGVtc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGRpc3Bvc2UoKSB7XG4gICAgICBpZiAodGhpcy5fc3dpcGVIZWxwZXIpIHtcbiAgICAgICAgdGhpcy5fc3dpcGVIZWxwZXIuZGlzcG9zZSgpO1xuICAgICAgfVxuXG4gICAgICBzdXBlci5kaXNwb3NlKCk7XG4gICAgfSAvLyBQcml2YXRlXG5cblxuICAgIF9jb25maWdBZnRlck1lcmdlKGNvbmZpZykge1xuICAgICAgY29uZmlnLmRlZmF1bHRJbnRlcnZhbCA9IGNvbmZpZy5pbnRlcnZhbDtcbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuXG4gICAgX2FkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5rZXlib2FyZCkge1xuICAgICAgICBFdmVudEhhbmRsZXJfX2RlZmF1bHQuZGVmYXVsdC5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9LRVlET1dOLCBldmVudCA9PiB0aGlzLl9rZXlkb3duKGV2ZW50KSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcucGF1c2UgPT09ICdob3ZlcicpIHtcbiAgICAgICAgRXZlbnRIYW5kbGVyX19kZWZhdWx0LmRlZmF1bHQub24odGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VFTlRFUiwgKCkgPT4gdGhpcy5wYXVzZSgpKTtcbiAgICAgICAgRXZlbnRIYW5kbGVyX19kZWZhdWx0LmRlZmF1bHQub24odGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VMRUFWRSwgKCkgPT4gdGhpcy5fbWF5YmVFbmFibGVDeWNsZSgpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy50b3VjaCAmJiBTd2lwZV9fZGVmYXVsdC5kZWZhdWx0LmlzU3VwcG9ydGVkKCkpIHtcbiAgICAgICAgdGhpcy5fYWRkVG91Y2hFdmVudExpc3RlbmVycygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIF9hZGRUb3VjaEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgZm9yIChjb25zdCBpbWcgb2YgU2VsZWN0b3JFbmdpbmVfX2RlZmF1bHQuZGVmYXVsdC5maW5kKFNFTEVDVE9SX0lURU1fSU1HLCB0aGlzLl9lbGVtZW50KSkge1xuICAgICAgICBFdmVudEhhbmRsZXJfX2RlZmF1bHQuZGVmYXVsdC5vbihpbWcsIEVWRU5UX0RSQUdfU1RBUlQsIGV2ZW50ID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCkpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBlbmRDYWxsQmFjayA9ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5wYXVzZSAhPT0gJ2hvdmVyJykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSAvLyBJZiBpdCdzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2UsIG1vdXNlZW50ZXIvbGVhdmUgYXJlIGZpcmVkIGFzXG4gICAgICAgIC8vIHBhcnQgb2YgdGhlIG1vdXNlIGNvbXBhdGliaWxpdHkgZXZlbnRzIG9uIGZpcnN0IHRhcCAtIHRoZSBjYXJvdXNlbFxuICAgICAgICAvLyB3b3VsZCBzdG9wIGN5Y2xpbmcgdW50aWwgdXNlciB0YXBwZWQgb3V0IG9mIGl0O1xuICAgICAgICAvLyBoZXJlLCB3ZSBsaXN0ZW4gZm9yIHRvdWNoZW5kLCBleHBsaWNpdGx5IHBhdXNlIHRoZSBjYXJvdXNlbFxuICAgICAgICAvLyAoYXMgaWYgaXQncyB0aGUgc2Vjb25kIHRpbWUgd2UgdGFwIG9uIGl0LCBtb3VzZWVudGVyIGNvbXBhdCBldmVudFxuICAgICAgICAvLyBpcyBOT1QgZmlyZWQpIGFuZCBhZnRlciBhIHRpbWVvdXQgKHRvIGFsbG93IGZvciBtb3VzZSBjb21wYXRpYmlsaXR5XG4gICAgICAgIC8vIGV2ZW50cyB0byBmaXJlKSB3ZSBleHBsaWNpdGx5IHJlc3RhcnQgY3ljbGluZ1xuXG5cbiAgICAgICAgdGhpcy5wYXVzZSgpO1xuXG4gICAgICAgIGlmICh0aGlzLnRvdWNoVGltZW91dCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRvdWNoVGltZW91dCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRvdWNoVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5fbWF5YmVFbmFibGVDeWNsZSgpLCBUT1VDSEVWRU5UX0NPTVBBVF9XQUlUICsgdGhpcy5fY29uZmlnLmludGVydmFsKTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHN3aXBlQ29uZmlnID0ge1xuICAgICAgICBsZWZ0Q2FsbGJhY2s6ICgpID0+IHRoaXMuX3NsaWRlKHRoaXMuX2RpcmVjdGlvblRvT3JkZXIoRElSRUNUSU9OX0xFRlQpKSxcbiAgICAgICAgcmlnaHRDYWxsYmFjazogKCkgPT4gdGhpcy5fc2xpZGUodGhpcy5fZGlyZWN0aW9uVG9PcmRlcihESVJFQ1RJT05fUklHSFQpKSxcbiAgICAgICAgZW5kQ2FsbGJhY2s6IGVuZENhbGxCYWNrXG4gICAgICB9O1xuICAgICAgdGhpcy5fc3dpcGVIZWxwZXIgPSBuZXcgU3dpcGVfX2RlZmF1bHQuZGVmYXVsdCh0aGlzLl9lbGVtZW50LCBzd2lwZUNvbmZpZyk7XG4gICAgfVxuXG4gICAgX2tleWRvd24oZXZlbnQpIHtcbiAgICAgIGlmICgvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IEtFWV9UT19ESVJFQ1RJT05bZXZlbnQua2V5XTtcblxuICAgICAgaWYgKGRpcmVjdGlvbikge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHRoaXMuX3NsaWRlKHRoaXMuX2RpcmVjdGlvblRvT3JkZXIoZGlyZWN0aW9uKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgX2dldEl0ZW1JbmRleChlbGVtZW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5fZ2V0SXRlbXMoKS5pbmRleE9mKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIF9zZXRBY3RpdmVJbmRpY2F0b3JFbGVtZW50KGluZGV4KSB7XG4gICAgICBpZiAoIXRoaXMuX2luZGljYXRvcnNFbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYWN0aXZlSW5kaWNhdG9yID0gU2VsZWN0b3JFbmdpbmVfX2RlZmF1bHQuZGVmYXVsdC5maW5kT25lKFNFTEVDVE9SX0FDVElWRSwgdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQpO1xuICAgICAgYWN0aXZlSW5kaWNhdG9yLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUpO1xuICAgICAgYWN0aXZlSW5kaWNhdG9yLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50Jyk7XG4gICAgICBjb25zdCBuZXdBY3RpdmVJbmRpY2F0b3IgPSBTZWxlY3RvckVuZ2luZV9fZGVmYXVsdC5kZWZhdWx0LmZpbmRPbmUoYFtkYXRhLWJzLXNsaWRlLXRvPVwiJHtpbmRleH1cIl1gLCB0aGlzLl9pbmRpY2F0b3JzRWxlbWVudCk7XG5cbiAgICAgIGlmIChuZXdBY3RpdmVJbmRpY2F0b3IpIHtcbiAgICAgICAgbmV3QWN0aXZlSW5kaWNhdG9yLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpO1xuICAgICAgICBuZXdBY3RpdmVJbmRpY2F0b3Iuc2V0QXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnLCAndHJ1ZScpO1xuICAgICAgfVxuICAgIH1cblxuICAgIF91cGRhdGVJbnRlcnZhbCgpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9hY3RpdmVFbGVtZW50IHx8IHRoaXMuX2dldEFjdGl2ZSgpO1xuXG4gICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBlbGVtZW50SW50ZXJ2YWwgPSBOdW1iZXIucGFyc2VJbnQoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtaW50ZXJ2YWwnKSwgMTApO1xuICAgICAgdGhpcy5fY29uZmlnLmludGVydmFsID0gZWxlbWVudEludGVydmFsIHx8IHRoaXMuX2NvbmZpZy5kZWZhdWx0SW50ZXJ2YWw7XG4gICAgfVxuXG4gICAgX3NsaWRlKG9yZGVyLCBlbGVtZW50ID0gbnVsbCkge1xuICAgICAgaWYgKHRoaXMuX2lzU2xpZGluZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFjdGl2ZUVsZW1lbnQgPSB0aGlzLl9nZXRBY3RpdmUoKTtcblxuICAgICAgY29uc3QgaXNOZXh0ID0gb3JkZXIgPT09IE9SREVSX05FWFQ7XG4gICAgICBjb25zdCBuZXh0RWxlbWVudCA9IGVsZW1lbnQgfHwgaW5kZXguZ2V0TmV4dEFjdGl2ZUVsZW1lbnQodGhpcy5fZ2V0SXRlbXMoKSwgYWN0aXZlRWxlbWVudCwgaXNOZXh0LCB0aGlzLl9jb25maWcud3JhcCk7XG5cbiAgICAgIGlmIChuZXh0RWxlbWVudCA9PT0gYWN0aXZlRWxlbWVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5leHRFbGVtZW50SW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgobmV4dEVsZW1lbnQpO1xuXG4gICAgICBjb25zdCB0cmlnZ2VyRXZlbnQgPSBldmVudE5hbWUgPT4ge1xuICAgICAgICByZXR1cm4gRXZlbnRIYW5kbGVyX19kZWZhdWx0LmRlZmF1bHQudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBldmVudE5hbWUsIHtcbiAgICAgICAgICByZWxhdGVkVGFyZ2V0OiBuZXh0RWxlbWVudCxcbiAgICAgICAgICBkaXJlY3Rpb246IHRoaXMuX29yZGVyVG9EaXJlY3Rpb24ob3JkZXIpLFxuICAgICAgICAgIGZyb206IHRoaXMuX2dldEl0ZW1JbmRleChhY3RpdmVFbGVtZW50KSxcbiAgICAgICAgICB0bzogbmV4dEVsZW1lbnRJbmRleFxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHNsaWRlRXZlbnQgPSB0cmlnZ2VyRXZlbnQoRVZFTlRfU0xJREUpO1xuXG4gICAgICBpZiAoc2xpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCFhY3RpdmVFbGVtZW50IHx8ICFuZXh0RWxlbWVudCkge1xuICAgICAgICAvLyBTb21lIHdlaXJkbmVzcyBpcyBoYXBwZW5pbmcsIHNvIHdlIGJhaWxcbiAgICAgICAgLy8gdG9kbzogY2hhbmdlIHRlc3RzIHRoYXQgdXNlIGVtcHR5IGRpdnMgdG8gYXZvaWQgdGhpcyBjaGVja1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlzQ3ljbGluZyA9IEJvb2xlYW4odGhpcy5faW50ZXJ2YWwpO1xuICAgICAgdGhpcy5wYXVzZSgpO1xuICAgICAgdGhpcy5faXNTbGlkaW5nID0gdHJ1ZTtcblxuICAgICAgdGhpcy5fc2V0QWN0aXZlSW5kaWNhdG9yRWxlbWVudChuZXh0RWxlbWVudEluZGV4KTtcblxuICAgICAgdGhpcy5fYWN0aXZlRWxlbWVudCA9IG5leHRFbGVtZW50O1xuICAgICAgY29uc3QgZGlyZWN0aW9uYWxDbGFzc05hbWUgPSBpc05leHQgPyBDTEFTU19OQU1FX1NUQVJUIDogQ0xBU1NfTkFNRV9FTkQ7XG4gICAgICBjb25zdCBvcmRlckNsYXNzTmFtZSA9IGlzTmV4dCA/IENMQVNTX05BTUVfTkVYVCA6IENMQVNTX05BTUVfUFJFVjtcbiAgICAgIG5leHRFbGVtZW50LmNsYXNzTGlzdC5hZGQob3JkZXJDbGFzc05hbWUpO1xuICAgICAgaW5kZXgucmVmbG93KG5leHRFbGVtZW50KTtcbiAgICAgIGFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChkaXJlY3Rpb25hbENsYXNzTmFtZSk7XG4gICAgICBuZXh0RWxlbWVudC5jbGFzc0xpc3QuYWRkKGRpcmVjdGlvbmFsQ2xhc3NOYW1lKTtcblxuICAgICAgY29uc3QgY29tcGxldGVDYWxsQmFjayA9ICgpID0+IHtcbiAgICAgICAgbmV4dEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShkaXJlY3Rpb25hbENsYXNzTmFtZSwgb3JkZXJDbGFzc05hbWUpO1xuICAgICAgICBuZXh0RWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKTtcbiAgICAgICAgYWN0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFLCBvcmRlckNsYXNzTmFtZSwgZGlyZWN0aW9uYWxDbGFzc05hbWUpO1xuICAgICAgICB0aGlzLl9pc1NsaWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdHJpZ2dlckV2ZW50KEVWRU5UX1NMSUQpO1xuICAgICAgfTtcblxuICAgICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZUNhbGxCYWNrLCBhY3RpdmVFbGVtZW50LCB0aGlzLl9pc0FuaW1hdGVkKCkpO1xuXG4gICAgICBpZiAoaXNDeWNsaW5nKSB7XG4gICAgICAgIHRoaXMuY3ljbGUoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfaXNBbmltYXRlZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NMSURFKTtcbiAgICB9XG5cbiAgICBfZ2V0QWN0aXZlKCkge1xuICAgICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lX19kZWZhdWx0LmRlZmF1bHQuZmluZE9uZShTRUxFQ1RPUl9BQ1RJVkVfSVRFTSwgdGhpcy5fZWxlbWVudCk7XG4gICAgfVxuXG4gICAgX2dldEl0ZW1zKCkge1xuICAgICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lX19kZWZhdWx0LmRlZmF1bHQuZmluZChTRUxFQ1RPUl9JVEVNLCB0aGlzLl9lbGVtZW50KTtcbiAgICB9XG5cbiAgICBfY2xlYXJJbnRlcnZhbCgpIHtcbiAgICAgIGlmICh0aGlzLl9pbnRlcnZhbCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsKTtcbiAgICAgICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIF9kaXJlY3Rpb25Ub09yZGVyKGRpcmVjdGlvbikge1xuICAgICAgaWYgKGluZGV4LmlzUlRMKCkpIHtcbiAgICAgICAgcmV0dXJuIGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OX0xFRlQgPyBPUkRFUl9QUkVWIDogT1JERVJfTkVYVDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OX0xFRlQgPyBPUkRFUl9ORVhUIDogT1JERVJfUFJFVjtcbiAgICB9XG5cbiAgICBfb3JkZXJUb0RpcmVjdGlvbihvcmRlcikge1xuICAgICAgaWYgKGluZGV4LmlzUlRMKCkpIHtcbiAgICAgICAgcmV0dXJuIG9yZGVyID09PSBPUkRFUl9QUkVWID8gRElSRUNUSU9OX0xFRlQgOiBESVJFQ1RJT05fUklHSFQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvcmRlciA9PT0gT1JERVJfUFJFViA/IERJUkVDVElPTl9SSUdIVCA6IERJUkVDVElPTl9MRUZUO1xuICAgIH0gLy8gU3RhdGljXG5cblxuICAgIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IENhcm91c2VsLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcywgY29uZmlnKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICBkYXRhLnRvKGNvbmZpZyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgaWYgKGRhdGFbY29uZmlnXSA9PT0gdW5kZWZpbmVkIHx8IGNvbmZpZy5zdGFydHNXaXRoKCdfJykgfHwgY29uZmlnID09PSAnY29uc3RydWN0b3InKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRhdGFbY29uZmlnXSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgfVxuICAvKipcbiAgICogRGF0YSBBUEkgaW1wbGVtZW50YXRpb25cbiAgICovXG5cblxuICBFdmVudEhhbmRsZXJfX2RlZmF1bHQuZGVmYXVsdC5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfU0xJREUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGNvbnN0IHRhcmdldCA9IGluZGV4LmdldEVsZW1lbnRGcm9tU2VsZWN0b3IodGhpcyk7XG5cbiAgICBpZiAoIXRhcmdldCB8fCAhdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0NBUk9VU0VMKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgY2Fyb3VzZWwgPSBDYXJvdXNlbC5nZXRPckNyZWF0ZUluc3RhbmNlKHRhcmdldCk7XG4gICAgY29uc3Qgc2xpZGVJbmRleCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLWJzLXNsaWRlLXRvJyk7XG5cbiAgICBpZiAoc2xpZGVJbmRleCkge1xuICAgICAgY2Fyb3VzZWwudG8oc2xpZGVJbmRleCk7XG5cbiAgICAgIGNhcm91c2VsLl9tYXliZUVuYWJsZUN5Y2xlKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoTWFuaXB1bGF0b3JfX2RlZmF1bHQuZGVmYXVsdC5nZXREYXRhQXR0cmlidXRlKHRoaXMsICdzbGlkZScpID09PSAnbmV4dCcpIHtcbiAgICAgIGNhcm91c2VsLm5leHQoKTtcblxuICAgICAgY2Fyb3VzZWwuX21heWJlRW5hYmxlQ3ljbGUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNhcm91c2VsLnByZXYoKTtcblxuICAgIGNhcm91c2VsLl9tYXliZUVuYWJsZUN5Y2xlKCk7XG4gIH0pO1xuICBFdmVudEhhbmRsZXJfX2RlZmF1bHQuZGVmYXVsdC5vbih3aW5kb3csIEVWRU5UX0xPQURfREFUQV9BUEksICgpID0+IHtcbiAgICBjb25zdCBjYXJvdXNlbHMgPSBTZWxlY3RvckVuZ2luZV9fZGVmYXVsdC5kZWZhdWx0LmZpbmQoU0VMRUNUT1JfREFUQV9SSURFKTtcblxuICAgIGZvciAoY29uc3QgY2Fyb3VzZWwgb2YgY2Fyb3VzZWxzKSB7XG4gICAgICBDYXJvdXNlbC5nZXRPckNyZWF0ZUluc3RhbmNlKGNhcm91c2VsKTtcbiAgICB9XG4gIH0pO1xuICAvKipcbiAgICogalF1ZXJ5XG4gICAqL1xuXG4gIGluZGV4LmRlZmluZUpRdWVyeVBsdWdpbihDYXJvdXNlbCk7XG5cbiAgcmV0dXJuIENhcm91c2VsO1xuXG59KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jYXJvdXNlbC5qcy5tYXBcbiIsIi8qIVxuICAqIEJvb3RzdHJhcCBjb2xsYXBzZS5qcyB2NS4yLjMgKGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS8pXG4gICogQ29weXJpZ2h0IDIwMTEtMjAyMiBUaGUgQm9vdHN0cmFwIEF1dGhvcnMgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ncmFwaHMvY29udHJpYnV0b3JzKVxuICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAqL1xuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoJy4vdXRpbC9pbmRleCcpLCByZXF1aXJlKCcuL2RvbS9ldmVudC1oYW5kbGVyJyksIHJlcXVpcmUoJy4vZG9tL3NlbGVjdG9yLWVuZ2luZScpLCByZXF1aXJlKCcuL2Jhc2UtY29tcG9uZW50JykpIDpcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnLi91dGlsL2luZGV4JywgJy4vZG9tL2V2ZW50LWhhbmRsZXInLCAnLi9kb20vc2VsZWN0b3ItZW5naW5lJywgJy4vYmFzZS1jb21wb25lbnQnXSwgZmFjdG9yeSkgOlxuICAoZ2xvYmFsID0gdHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsVGhpcyA6IGdsb2JhbCB8fCBzZWxmLCBnbG9iYWwuQ29sbGFwc2UgPSBmYWN0b3J5KGdsb2JhbC5JbmRleCwgZ2xvYmFsLkV2ZW50SGFuZGxlciwgZ2xvYmFsLlNlbGVjdG9yRW5naW5lLCBnbG9iYWwuQmFzZUNvbXBvbmVudCkpO1xufSkodGhpcywgKGZ1bmN0aW9uIChpbmRleCwgRXZlbnRIYW5kbGVyLCBTZWxlY3RvckVuZ2luZSwgQmFzZUNvbXBvbmVudCkgeyAndXNlIHN0cmljdCc7XG5cbiAgY29uc3QgX2ludGVyb3BEZWZhdWx0TGVnYWN5ID0gZSA9PiBlICYmIHR5cGVvZiBlID09PSAnb2JqZWN0JyAmJiAnZGVmYXVsdCcgaW4gZSA/IGUgOiB7IGRlZmF1bHQ6IGUgfTtcblxuICBjb25zdCBFdmVudEhhbmRsZXJfX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX2ludGVyb3BEZWZhdWx0TGVnYWN5KEV2ZW50SGFuZGxlcik7XG4gIGNvbnN0IFNlbGVjdG9yRW5naW5lX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19pbnRlcm9wRGVmYXVsdExlZ2FjeShTZWxlY3RvckVuZ2luZSk7XG4gIGNvbnN0IEJhc2VDb21wb25lbnRfX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX2ludGVyb3BEZWZhdWx0TGVnYWN5KEJhc2VDb21wb25lbnQpO1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgKHY1LjIuMyk6IGNvbGxhcHNlLmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cbiAgLyoqXG4gICAqIENvbnN0YW50c1xuICAgKi9cblxuICBjb25zdCBOQU1FID0gJ2NvbGxhcHNlJztcbiAgY29uc3QgREFUQV9LRVkgPSAnYnMuY29sbGFwc2UnO1xuICBjb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YDtcbiAgY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSc7XG4gIGNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWA7XG4gIGNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YDtcbiAgY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YDtcbiAgY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWA7XG4gIGNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YDtcbiAgY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnO1xuICBjb25zdCBDTEFTU19OQU1FX0NPTExBUFNFID0gJ2NvbGxhcHNlJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9DT0xMQVBTSU5HID0gJ2NvbGxhcHNpbmcnO1xuICBjb25zdCBDTEFTU19OQU1FX0NPTExBUFNFRCA9ICdjb2xsYXBzZWQnO1xuICBjb25zdCBDTEFTU19OQU1FX0RFRVBFUl9DSElMRFJFTiA9IGA6c2NvcGUgLiR7Q0xBU1NfTkFNRV9DT0xMQVBTRX0gLiR7Q0xBU1NfTkFNRV9DT0xMQVBTRX1gO1xuICBjb25zdCBDTEFTU19OQU1FX0hPUklaT05UQUwgPSAnY29sbGFwc2UtaG9yaXpvbnRhbCc7XG4gIGNvbnN0IFdJRFRIID0gJ3dpZHRoJztcbiAgY29uc3QgSEVJR0hUID0gJ2hlaWdodCc7XG4gIGNvbnN0IFNFTEVDVE9SX0FDVElWRVMgPSAnLmNvbGxhcHNlLnNob3csIC5jb2xsYXBzZS5jb2xsYXBzaW5nJztcbiAgY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIl0nO1xuICBjb25zdCBEZWZhdWx0ID0ge1xuICAgIHBhcmVudDogbnVsbCxcbiAgICB0b2dnbGU6IHRydWVcbiAgfTtcbiAgY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gICAgcGFyZW50OiAnKG51bGx8ZWxlbWVudCknLFxuICAgIHRvZ2dsZTogJ2Jvb2xlYW4nXG4gIH07XG4gIC8qKlxuICAgKiBDbGFzcyBkZWZpbml0aW9uXG4gICAqL1xuXG4gIGNsYXNzIENvbGxhcHNlIGV4dGVuZHMgQmFzZUNvbXBvbmVudF9fZGVmYXVsdC5kZWZhdWx0IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICAgIHN1cGVyKGVsZW1lbnQsIGNvbmZpZyk7XG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3RyaWdnZXJBcnJheSA9IFtdO1xuICAgICAgY29uc3QgdG9nZ2xlTGlzdCA9IFNlbGVjdG9yRW5naW5lX19kZWZhdWx0LmRlZmF1bHQuZmluZChTRUxFQ1RPUl9EQVRBX1RPR0dMRSk7XG5cbiAgICAgIGZvciAoY29uc3QgZWxlbSBvZiB0b2dnbGVMaXN0KSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdG9yID0gaW5kZXguZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtKTtcbiAgICAgICAgY29uc3QgZmlsdGVyRWxlbWVudCA9IFNlbGVjdG9yRW5naW5lX19kZWZhdWx0LmRlZmF1bHQuZmluZChzZWxlY3RvcikuZmlsdGVyKGZvdW5kRWxlbWVudCA9PiBmb3VuZEVsZW1lbnQgPT09IHRoaXMuX2VsZW1lbnQpO1xuXG4gICAgICAgIGlmIChzZWxlY3RvciAhPT0gbnVsbCAmJiBmaWx0ZXJFbGVtZW50Lmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMuX3RyaWdnZXJBcnJheS5wdXNoKGVsZW0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2luaXRpYWxpemVDaGlsZHJlbigpO1xuXG4gICAgICBpZiAoIXRoaXMuX2NvbmZpZy5wYXJlbnQpIHtcbiAgICAgICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKHRoaXMuX3RyaWdnZXJBcnJheSwgdGhpcy5faXNTaG93bigpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy50b2dnbGUpIHtcbiAgICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICAgIH1cbiAgICB9IC8vIEdldHRlcnNcblxuXG4gICAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgICAgcmV0dXJuIERlZmF1bHQ7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0VHlwZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgICByZXR1cm4gTkFNRTtcbiAgICB9IC8vIFB1YmxpY1xuXG5cbiAgICB0b2dnbGUoKSB7XG4gICAgICBpZiAodGhpcy5faXNTaG93bigpKSB7XG4gICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2hvdygpIHtcbiAgICAgIGlmICh0aGlzLl9pc1RyYW5zaXRpb25pbmcgfHwgdGhpcy5faXNTaG93bigpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IGFjdGl2ZUNoaWxkcmVuID0gW107IC8vIGZpbmQgYWN0aXZlIGNoaWxkcmVuXG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcucGFyZW50KSB7XG4gICAgICAgIGFjdGl2ZUNoaWxkcmVuID0gdGhpcy5fZ2V0Rmlyc3RMZXZlbENoaWxkcmVuKFNFTEVDVE9SX0FDVElWRVMpLmZpbHRlcihlbGVtZW50ID0+IGVsZW1lbnQgIT09IHRoaXMuX2VsZW1lbnQpLm1hcChlbGVtZW50ID0+IENvbGxhcHNlLmdldE9yQ3JlYXRlSW5zdGFuY2UoZWxlbWVudCwge1xuICAgICAgICAgIHRvZ2dsZTogZmFsc2VcbiAgICAgICAgfSkpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYWN0aXZlQ2hpbGRyZW4ubGVuZ3RoICYmIGFjdGl2ZUNoaWxkcmVuWzBdLl9pc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzdGFydEV2ZW50ID0gRXZlbnRIYW5kbGVyX19kZWZhdWx0LmRlZmF1bHQudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XKTtcblxuICAgICAgaWYgKHN0YXJ0RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGZvciAoY29uc3QgYWN0aXZlSW5zdGFuY2Ugb2YgYWN0aXZlQ2hpbGRyZW4pIHtcbiAgICAgICAgYWN0aXZlSW5zdGFuY2UuaGlkZSgpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkaW1lbnNpb24gPSB0aGlzLl9nZXREaW1lbnNpb24oKTtcblxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQ09MTEFQU0UpO1xuXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKTtcblxuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gMDtcblxuICAgICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKHRoaXMuX3RyaWdnZXJBcnJheSwgdHJ1ZSk7XG5cbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IHRydWU7XG5cbiAgICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKTtcblxuICAgICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTRSwgQ0xBU1NfTkFNRV9TSE9XKTtcblxuICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAnJztcbiAgICAgICAgRXZlbnRIYW5kbGVyX19kZWZhdWx0LmRlZmF1bHQudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XTik7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBjYXBpdGFsaXplZERpbWVuc2lvbiA9IGRpbWVuc2lvblswXS50b1VwcGVyQ2FzZSgpICsgZGltZW5zaW9uLnNsaWNlKDEpO1xuICAgICAgY29uc3Qgc2Nyb2xsU2l6ZSA9IGBzY3JvbGwke2NhcGl0YWxpemVkRGltZW5zaW9ufWA7XG5cbiAgICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMuX2VsZW1lbnQsIHRydWUpO1xuXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSBgJHt0aGlzLl9lbGVtZW50W3Njcm9sbFNpemVdfXB4YDtcbiAgICB9XG5cbiAgICBoaWRlKCkge1xuICAgICAgaWYgKHRoaXMuX2lzVHJhbnNpdGlvbmluZyB8fCAhdGhpcy5faXNTaG93bigpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc3RhcnRFdmVudCA9IEV2ZW50SGFuZGxlcl9fZGVmYXVsdC5kZWZhdWx0LnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERSk7XG5cbiAgICAgIGlmIChzdGFydEV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkaW1lbnNpb24gPSB0aGlzLl9nZXREaW1lbnNpb24oKTtcblxuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gYCR7dGhpcy5fZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVtkaW1lbnNpb25dfXB4YDtcbiAgICAgIGluZGV4LnJlZmxvdyh0aGlzLl9lbGVtZW50KTtcblxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQ09MTEFQU0lORyk7XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0NPTExBUFNFLCBDTEFTU19OQU1FX1NIT1cpO1xuXG4gICAgICBmb3IgKGNvbnN0IHRyaWdnZXIgb2YgdGhpcy5fdHJpZ2dlckFycmF5KSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBpbmRleC5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKHRyaWdnZXIpO1xuXG4gICAgICAgIGlmIChlbGVtZW50ICYmICF0aGlzLl9pc1Nob3duKGVsZW1lbnQpKSB7XG4gICAgICAgICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKFt0cmlnZ2VyXSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IHRydWU7XG5cbiAgICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKTtcblxuICAgICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTRSk7XG5cbiAgICAgICAgRXZlbnRIYW5kbGVyX19kZWZhdWx0LmRlZmF1bHQudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURERU4pO1xuICAgICAgfTtcblxuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gJyc7XG5cbiAgICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMuX2VsZW1lbnQsIHRydWUpO1xuICAgIH1cblxuICAgIF9pc1Nob3duKGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50KSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKTtcbiAgICB9IC8vIFByaXZhdGVcblxuXG4gICAgX2NvbmZpZ0FmdGVyTWVyZ2UoY29uZmlnKSB7XG4gICAgICBjb25maWcudG9nZ2xlID0gQm9vbGVhbihjb25maWcudG9nZ2xlKTsgLy8gQ29lcmNlIHN0cmluZyB2YWx1ZXNcblxuICAgICAgY29uZmlnLnBhcmVudCA9IGluZGV4LmdldEVsZW1lbnQoY29uZmlnLnBhcmVudCk7XG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cblxuICAgIF9nZXREaW1lbnNpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9IT1JJWk9OVEFMKSA/IFdJRFRIIDogSEVJR0hUO1xuICAgIH1cblxuICAgIF9pbml0aWFsaXplQ2hpbGRyZW4oKSB7XG4gICAgICBpZiAoIXRoaXMuX2NvbmZpZy5wYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuX2dldEZpcnN0TGV2ZWxDaGlsZHJlbihTRUxFQ1RPUl9EQVRBX1RPR0dMRSk7XG5cbiAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBjaGlsZHJlbikge1xuICAgICAgICBjb25zdCBzZWxlY3RlZCA9IGluZGV4LmdldEVsZW1lbnRGcm9tU2VsZWN0b3IoZWxlbWVudCk7XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKFtlbGVtZW50XSwgdGhpcy5faXNTaG93bihzZWxlY3RlZCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgX2dldEZpcnN0TGV2ZWxDaGlsZHJlbihzZWxlY3Rvcikge1xuICAgICAgY29uc3QgY2hpbGRyZW4gPSBTZWxlY3RvckVuZ2luZV9fZGVmYXVsdC5kZWZhdWx0LmZpbmQoQ0xBU1NfTkFNRV9ERUVQRVJfQ0hJTERSRU4sIHRoaXMuX2NvbmZpZy5wYXJlbnQpOyAvLyByZW1vdmUgY2hpbGRyZW4gaWYgZ3JlYXRlciBkZXB0aFxuXG4gICAgICByZXR1cm4gU2VsZWN0b3JFbmdpbmVfX2RlZmF1bHQuZGVmYXVsdC5maW5kKHNlbGVjdG9yLCB0aGlzLl9jb25maWcucGFyZW50KS5maWx0ZXIoZWxlbWVudCA9PiAhY2hpbGRyZW4uaW5jbHVkZXMoZWxlbWVudCkpO1xuICAgIH1cblxuICAgIF9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3ModHJpZ2dlckFycmF5LCBpc09wZW4pIHtcbiAgICAgIGlmICghdHJpZ2dlckFycmF5Lmxlbmd0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiB0cmlnZ2VyQXJyYXkpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKENMQVNTX05BTUVfQ09MTEFQU0VELCAhaXNPcGVuKTtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBpc09wZW4pO1xuICAgICAgfVxuICAgIH0gLy8gU3RhdGljXG5cblxuICAgIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICBjb25zdCBfY29uZmlnID0ge307XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJyAmJiAvc2hvd3xoaWRlLy50ZXN0KGNvbmZpZykpIHtcbiAgICAgICAgX2NvbmZpZy50b2dnbGUgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBDb2xsYXBzZS5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIF9jb25maWcpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkYXRhW2NvbmZpZ10oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gIH1cbiAgLyoqXG4gICAqIERhdGEgQVBJIGltcGxlbWVudGF0aW9uXG4gICAqL1xuXG5cbiAgRXZlbnRIYW5kbGVyX19kZWZhdWx0LmRlZmF1bHQub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgLy8gcHJldmVudERlZmF1bHQgb25seSBmb3IgPGE+IGVsZW1lbnRzICh3aGljaCBjaGFuZ2UgdGhlIFVSTCkgbm90IGluc2lkZSB0aGUgY29sbGFwc2libGUgZWxlbWVudFxuICAgIGlmIChldmVudC50YXJnZXQudGFnTmFtZSA9PT0gJ0EnIHx8IGV2ZW50LmRlbGVnYXRlVGFyZ2V0ICYmIGV2ZW50LmRlbGVnYXRlVGFyZ2V0LnRhZ05hbWUgPT09ICdBJykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZWxlY3RvciA9IGluZGV4LmdldFNlbGVjdG9yRnJvbUVsZW1lbnQodGhpcyk7XG4gICAgY29uc3Qgc2VsZWN0b3JFbGVtZW50cyA9IFNlbGVjdG9yRW5naW5lX19kZWZhdWx0LmRlZmF1bHQuZmluZChzZWxlY3Rvcik7XG5cbiAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2Ygc2VsZWN0b3JFbGVtZW50cykge1xuICAgICAgQ29sbGFwc2UuZ2V0T3JDcmVhdGVJbnN0YW5jZShlbGVtZW50LCB7XG4gICAgICAgIHRvZ2dsZTogZmFsc2VcbiAgICAgIH0pLnRvZ2dsZSgpO1xuICAgIH1cbiAgfSk7XG4gIC8qKlxuICAgKiBqUXVlcnlcbiAgICovXG5cbiAgaW5kZXguZGVmaW5lSlF1ZXJ5UGx1Z2luKENvbGxhcHNlKTtcblxuICByZXR1cm4gQ29sbGFwc2U7XG5cbn0pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbGxhcHNlLmpzLm1hcFxuIiwiLyohXG4gICogQm9vdHN0cmFwIGRhdGEuanMgdjUuMi4zIChodHRwczovL2dldGJvb3RzdHJhcC5jb20vKVxuICAqIENvcHlyaWdodCAyMDExLTIwMjIgVGhlIEJvb3RzdHJhcCBBdXRob3JzIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvZ3JhcGhzL2NvbnRyaWJ1dG9ycylcbiAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgKi9cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcbiAgKGdsb2JhbCA9IHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbFRoaXMgOiBnbG9iYWwgfHwgc2VsZiwgZ2xvYmFsLkRhdGEgPSBmYWN0b3J5KCkpO1xufSkodGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgKHY1LjIuMyk6IGRvbS9kYXRhLmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqL1xuICBjb25zdCBlbGVtZW50TWFwID0gbmV3IE1hcCgpO1xuICBjb25zdCBkYXRhID0ge1xuICAgIHNldChlbGVtZW50LCBrZXksIGluc3RhbmNlKSB7XG4gICAgICBpZiAoIWVsZW1lbnRNYXAuaGFzKGVsZW1lbnQpKSB7XG4gICAgICAgIGVsZW1lbnRNYXAuc2V0KGVsZW1lbnQsIG5ldyBNYXAoKSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGluc3RhbmNlTWFwID0gZWxlbWVudE1hcC5nZXQoZWxlbWVudCk7IC8vIG1ha2UgaXQgY2xlYXIgd2Ugb25seSB3YW50IG9uZSBpbnN0YW5jZSBwZXIgZWxlbWVudFxuICAgICAgLy8gY2FuIGJlIHJlbW92ZWQgbGF0ZXIgd2hlbiBtdWx0aXBsZSBrZXkvaW5zdGFuY2VzIGFyZSBmaW5lIHRvIGJlIHVzZWRcblxuICAgICAgaWYgKCFpbnN0YW5jZU1hcC5oYXMoa2V5KSAmJiBpbnN0YW5jZU1hcC5zaXplICE9PSAwKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEJvb3RzdHJhcCBkb2Vzbid0IGFsbG93IG1vcmUgdGhhbiBvbmUgaW5zdGFuY2UgcGVyIGVsZW1lbnQuIEJvdW5kIGluc3RhbmNlOiAke0FycmF5LmZyb20oaW5zdGFuY2VNYXAua2V5cygpKVswXX0uYCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaW5zdGFuY2VNYXAuc2V0KGtleSwgaW5zdGFuY2UpO1xuICAgIH0sXG5cbiAgICBnZXQoZWxlbWVudCwga2V5KSB7XG4gICAgICBpZiAoZWxlbWVudE1hcC5oYXMoZWxlbWVudCkpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRNYXAuZ2V0KGVsZW1lbnQpLmdldChrZXkpIHx8IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG5cbiAgICByZW1vdmUoZWxlbWVudCwga2V5KSB7XG4gICAgICBpZiAoIWVsZW1lbnRNYXAuaGFzKGVsZW1lbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgaW5zdGFuY2VNYXAgPSBlbGVtZW50TWFwLmdldChlbGVtZW50KTtcbiAgICAgIGluc3RhbmNlTWFwLmRlbGV0ZShrZXkpOyAvLyBmcmVlIHVwIGVsZW1lbnQgcmVmZXJlbmNlcyBpZiB0aGVyZSBhcmUgbm8gaW5zdGFuY2VzIGxlZnQgZm9yIGFuIGVsZW1lbnRcblxuICAgICAgaWYgKGluc3RhbmNlTWFwLnNpemUgPT09IDApIHtcbiAgICAgICAgZWxlbWVudE1hcC5kZWxldGUoZWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuXG4gIH07XG5cbiAgcmV0dXJuIGRhdGE7XG5cbn0pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGEuanMubWFwXG4iLCIvKiFcbiAgKiBCb290c3RyYXAgZXZlbnQtaGFuZGxlci5qcyB2NS4yLjMgKGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS8pXG4gICogQ29weXJpZ2h0IDIwMTEtMjAyMiBUaGUgQm9vdHN0cmFwIEF1dGhvcnMgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ncmFwaHMvY29udHJpYnV0b3JzKVxuICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAqL1xuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoJy4uL3V0aWwvaW5kZXgnKSkgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWycuLi91dGlsL2luZGV4J10sIGZhY3RvcnkpIDpcbiAgKGdsb2JhbCA9IHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbFRoaXMgOiBnbG9iYWwgfHwgc2VsZiwgZ2xvYmFsLkV2ZW50SGFuZGxlciA9IGZhY3RvcnkoZ2xvYmFsLkluZGV4KSk7XG59KSh0aGlzLCAoZnVuY3Rpb24gKGluZGV4KSB7ICd1c2Ugc3RyaWN0JztcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwICh2NS4yLjMpOiBkb20vZXZlbnQtaGFuZGxlci5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICovXG5cbiAgY29uc3QgbmFtZXNwYWNlUmVnZXggPSAvW14uXSooPz1cXC4uKilcXC58LiovO1xuICBjb25zdCBzdHJpcE5hbWVSZWdleCA9IC9cXC4uKi87XG4gIGNvbnN0IHN0cmlwVWlkUmVnZXggPSAvOjpcXGQrJC87XG4gIGNvbnN0IGV2ZW50UmVnaXN0cnkgPSB7fTsgLy8gRXZlbnRzIHN0b3JhZ2VcblxuICBsZXQgdWlkRXZlbnQgPSAxO1xuICBjb25zdCBjdXN0b21FdmVudHMgPSB7XG4gICAgbW91c2VlbnRlcjogJ21vdXNlb3ZlcicsXG4gICAgbW91c2VsZWF2ZTogJ21vdXNlb3V0J1xuICB9O1xuICBjb25zdCBuYXRpdmVFdmVudHMgPSBuZXcgU2V0KFsnY2xpY2snLCAnZGJsY2xpY2snLCAnbW91c2V1cCcsICdtb3VzZWRvd24nLCAnY29udGV4dG1lbnUnLCAnbW91c2V3aGVlbCcsICdET01Nb3VzZVNjcm9sbCcsICdtb3VzZW92ZXInLCAnbW91c2VvdXQnLCAnbW91c2Vtb3ZlJywgJ3NlbGVjdHN0YXJ0JywgJ3NlbGVjdGVuZCcsICdrZXlkb3duJywgJ2tleXByZXNzJywgJ2tleXVwJywgJ29yaWVudGF0aW9uY2hhbmdlJywgJ3RvdWNoc3RhcnQnLCAndG91Y2htb3ZlJywgJ3RvdWNoZW5kJywgJ3RvdWNoY2FuY2VsJywgJ3BvaW50ZXJkb3duJywgJ3BvaW50ZXJtb3ZlJywgJ3BvaW50ZXJ1cCcsICdwb2ludGVybGVhdmUnLCAncG9pbnRlcmNhbmNlbCcsICdnZXN0dXJlc3RhcnQnLCAnZ2VzdHVyZWNoYW5nZScsICdnZXN0dXJlZW5kJywgJ2ZvY3VzJywgJ2JsdXInLCAnY2hhbmdlJywgJ3Jlc2V0JywgJ3NlbGVjdCcsICdzdWJtaXQnLCAnZm9jdXNpbicsICdmb2N1c291dCcsICdsb2FkJywgJ3VubG9hZCcsICdiZWZvcmV1bmxvYWQnLCAncmVzaXplJywgJ21vdmUnLCAnRE9NQ29udGVudExvYWRlZCcsICdyZWFkeXN0YXRlY2hhbmdlJywgJ2Vycm9yJywgJ2Fib3J0JywgJ3Njcm9sbCddKTtcbiAgLyoqXG4gICAqIFByaXZhdGUgbWV0aG9kc1xuICAgKi9cblxuICBmdW5jdGlvbiBtYWtlRXZlbnRVaWQoZWxlbWVudCwgdWlkKSB7XG4gICAgcmV0dXJuIHVpZCAmJiBgJHt1aWR9Ojoke3VpZEV2ZW50Kyt9YCB8fCBlbGVtZW50LnVpZEV2ZW50IHx8IHVpZEV2ZW50Kys7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRFbGVtZW50RXZlbnRzKGVsZW1lbnQpIHtcbiAgICBjb25zdCB1aWQgPSBtYWtlRXZlbnRVaWQoZWxlbWVudCk7XG4gICAgZWxlbWVudC51aWRFdmVudCA9IHVpZDtcbiAgICBldmVudFJlZ2lzdHJ5W3VpZF0gPSBldmVudFJlZ2lzdHJ5W3VpZF0gfHwge307XG4gICAgcmV0dXJuIGV2ZW50UmVnaXN0cnlbdWlkXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJvb3RzdHJhcEhhbmRsZXIoZWxlbWVudCwgZm4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gaGFuZGxlcihldmVudCkge1xuICAgICAgaHlkcmF0ZU9iaihldmVudCwge1xuICAgICAgICBkZWxlZ2F0ZVRhcmdldDogZWxlbWVudFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChoYW5kbGVyLm9uZU9mZikge1xuICAgICAgICBFdmVudEhhbmRsZXIub2ZmKGVsZW1lbnQsIGV2ZW50LnR5cGUsIGZuKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZuLmFwcGx5KGVsZW1lbnQsIFtldmVudF0pO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBib290c3RyYXBEZWxlZ2F0aW9uSGFuZGxlcihlbGVtZW50LCBzZWxlY3RvciwgZm4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gaGFuZGxlcihldmVudCkge1xuICAgICAgY29uc3QgZG9tRWxlbWVudHMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuXG4gICAgICBmb3IgKGxldCB7XG4gICAgICAgIHRhcmdldFxuICAgICAgfSA9IGV2ZW50OyB0YXJnZXQgJiYgdGFyZ2V0ICE9PSB0aGlzOyB0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGRvbUVsZW1lbnQgb2YgZG9tRWxlbWVudHMpIHtcbiAgICAgICAgICBpZiAoZG9tRWxlbWVudCAhPT0gdGFyZ2V0KSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoeWRyYXRlT2JqKGV2ZW50LCB7XG4gICAgICAgICAgICBkZWxlZ2F0ZVRhcmdldDogdGFyZ2V0XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAoaGFuZGxlci5vbmVPZmYpIHtcbiAgICAgICAgICAgIEV2ZW50SGFuZGxlci5vZmYoZWxlbWVudCwgZXZlbnQudHlwZSwgc2VsZWN0b3IsIGZuKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZm4uYXBwbHkodGFyZ2V0LCBbZXZlbnRdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBmaW5kSGFuZGxlcihldmVudHMsIGNhbGxhYmxlLCBkZWxlZ2F0aW9uU2VsZWN0b3IgPSBudWxsKSB7XG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoZXZlbnRzKS5maW5kKGV2ZW50ID0+IGV2ZW50LmNhbGxhYmxlID09PSBjYWxsYWJsZSAmJiBldmVudC5kZWxlZ2F0aW9uU2VsZWN0b3IgPT09IGRlbGVnYXRpb25TZWxlY3Rvcik7XG4gIH1cblxuICBmdW5jdGlvbiBub3JtYWxpemVQYXJhbWV0ZXJzKG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24pIHtcbiAgICBjb25zdCBpc0RlbGVnYXRlZCA9IHR5cGVvZiBoYW5kbGVyID09PSAnc3RyaW5nJzsgLy8gdG9kbzogdG9vbHRpcCBwYXNzZXMgYGZhbHNlYCBpbnN0ZWFkIG9mIHNlbGVjdG9yLCBzbyB3ZSBuZWVkIHRvIGNoZWNrXG5cbiAgICBjb25zdCBjYWxsYWJsZSA9IGlzRGVsZWdhdGVkID8gZGVsZWdhdGlvbkZ1bmN0aW9uIDogaGFuZGxlciB8fCBkZWxlZ2F0aW9uRnVuY3Rpb247XG4gICAgbGV0IHR5cGVFdmVudCA9IGdldFR5cGVFdmVudChvcmlnaW5hbFR5cGVFdmVudCk7XG5cbiAgICBpZiAoIW5hdGl2ZUV2ZW50cy5oYXModHlwZUV2ZW50KSkge1xuICAgICAgdHlwZUV2ZW50ID0gb3JpZ2luYWxUeXBlRXZlbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIFtpc0RlbGVnYXRlZCwgY2FsbGFibGUsIHR5cGVFdmVudF07XG4gIH1cblxuICBmdW5jdGlvbiBhZGRIYW5kbGVyKGVsZW1lbnQsIG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24sIG9uZU9mZikge1xuICAgIGlmICh0eXBlb2Ygb3JpZ2luYWxUeXBlRXZlbnQgIT09ICdzdHJpbmcnIHx8ICFlbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IFtpc0RlbGVnYXRlZCwgY2FsbGFibGUsIHR5cGVFdmVudF0gPSBub3JtYWxpemVQYXJhbWV0ZXJzKG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24pOyAvLyBpbiBjYXNlIG9mIG1vdXNlZW50ZXIgb3IgbW91c2VsZWF2ZSB3cmFwIHRoZSBoYW5kbGVyIHdpdGhpbiBhIGZ1bmN0aW9uIHRoYXQgY2hlY2tzIGZvciBpdHMgRE9NIHBvc2l0aW9uXG4gICAgLy8gdGhpcyBwcmV2ZW50cyB0aGUgaGFuZGxlciBmcm9tIGJlaW5nIGRpc3BhdGNoZWQgdGhlIHNhbWUgd2F5IGFzIG1vdXNlb3ZlciBvciBtb3VzZW91dCBkb2VzXG5cbiAgICBpZiAob3JpZ2luYWxUeXBlRXZlbnQgaW4gY3VzdG9tRXZlbnRzKSB7XG4gICAgICBjb25zdCB3cmFwRnVuY3Rpb24gPSBmbiA9PiB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBpZiAoIWV2ZW50LnJlbGF0ZWRUYXJnZXQgfHwgZXZlbnQucmVsYXRlZFRhcmdldCAhPT0gZXZlbnQuZGVsZWdhdGVUYXJnZXQgJiYgIWV2ZW50LmRlbGVnYXRlVGFyZ2V0LmNvbnRhaW5zKGV2ZW50LnJlbGF0ZWRUYXJnZXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZm4uY2FsbCh0aGlzLCBldmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfTtcblxuICAgICAgY2FsbGFibGUgPSB3cmFwRnVuY3Rpb24oY2FsbGFibGUpO1xuICAgIH1cblxuICAgIGNvbnN0IGV2ZW50cyA9IGdldEVsZW1lbnRFdmVudHMoZWxlbWVudCk7XG4gICAgY29uc3QgaGFuZGxlcnMgPSBldmVudHNbdHlwZUV2ZW50XSB8fCAoZXZlbnRzW3R5cGVFdmVudF0gPSB7fSk7XG4gICAgY29uc3QgcHJldmlvdXNGdW5jdGlvbiA9IGZpbmRIYW5kbGVyKGhhbmRsZXJzLCBjYWxsYWJsZSwgaXNEZWxlZ2F0ZWQgPyBoYW5kbGVyIDogbnVsbCk7XG5cbiAgICBpZiAocHJldmlvdXNGdW5jdGlvbikge1xuICAgICAgcHJldmlvdXNGdW5jdGlvbi5vbmVPZmYgPSBwcmV2aW91c0Z1bmN0aW9uLm9uZU9mZiAmJiBvbmVPZmY7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdWlkID0gbWFrZUV2ZW50VWlkKGNhbGxhYmxlLCBvcmlnaW5hbFR5cGVFdmVudC5yZXBsYWNlKG5hbWVzcGFjZVJlZ2V4LCAnJykpO1xuICAgIGNvbnN0IGZuID0gaXNEZWxlZ2F0ZWQgPyBib290c3RyYXBEZWxlZ2F0aW9uSGFuZGxlcihlbGVtZW50LCBoYW5kbGVyLCBjYWxsYWJsZSkgOiBib290c3RyYXBIYW5kbGVyKGVsZW1lbnQsIGNhbGxhYmxlKTtcbiAgICBmbi5kZWxlZ2F0aW9uU2VsZWN0b3IgPSBpc0RlbGVnYXRlZCA/IGhhbmRsZXIgOiBudWxsO1xuICAgIGZuLmNhbGxhYmxlID0gY2FsbGFibGU7XG4gICAgZm4ub25lT2ZmID0gb25lT2ZmO1xuICAgIGZuLnVpZEV2ZW50ID0gdWlkO1xuICAgIGhhbmRsZXJzW3VpZF0gPSBmbjtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZUV2ZW50LCBmbiwgaXNEZWxlZ2F0ZWQpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlSGFuZGxlcihlbGVtZW50LCBldmVudHMsIHR5cGVFdmVudCwgaGFuZGxlciwgZGVsZWdhdGlvblNlbGVjdG9yKSB7XG4gICAgY29uc3QgZm4gPSBmaW5kSGFuZGxlcihldmVudHNbdHlwZUV2ZW50XSwgaGFuZGxlciwgZGVsZWdhdGlvblNlbGVjdG9yKTtcblxuICAgIGlmICghZm4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZUV2ZW50LCBmbiwgQm9vbGVhbihkZWxlZ2F0aW9uU2VsZWN0b3IpKTtcbiAgICBkZWxldGUgZXZlbnRzW3R5cGVFdmVudF1bZm4udWlkRXZlbnRdO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlTmFtZXNwYWNlZEhhbmRsZXJzKGVsZW1lbnQsIGV2ZW50cywgdHlwZUV2ZW50LCBuYW1lc3BhY2UpIHtcbiAgICBjb25zdCBzdG9yZUVsZW1lbnRFdmVudCA9IGV2ZW50c1t0eXBlRXZlbnRdIHx8IHt9O1xuXG4gICAgZm9yIChjb25zdCBoYW5kbGVyS2V5IG9mIE9iamVjdC5rZXlzKHN0b3JlRWxlbWVudEV2ZW50KSkge1xuICAgICAgaWYgKGhhbmRsZXJLZXkuaW5jbHVkZXMobmFtZXNwYWNlKSkge1xuICAgICAgICBjb25zdCBldmVudCA9IHN0b3JlRWxlbWVudEV2ZW50W2hhbmRsZXJLZXldO1xuICAgICAgICByZW1vdmVIYW5kbGVyKGVsZW1lbnQsIGV2ZW50cywgdHlwZUV2ZW50LCBldmVudC5jYWxsYWJsZSwgZXZlbnQuZGVsZWdhdGlvblNlbGVjdG9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRUeXBlRXZlbnQoZXZlbnQpIHtcbiAgICAvLyBhbGxvdyB0byBnZXQgdGhlIG5hdGl2ZSBldmVudHMgZnJvbSBuYW1lc3BhY2VkIGV2ZW50cyAoJ2NsaWNrLmJzLmJ1dHRvbicgLS0+ICdjbGljaycpXG4gICAgZXZlbnQgPSBldmVudC5yZXBsYWNlKHN0cmlwTmFtZVJlZ2V4LCAnJyk7XG4gICAgcmV0dXJuIGN1c3RvbUV2ZW50c1tldmVudF0gfHwgZXZlbnQ7XG4gIH1cblxuICBjb25zdCBFdmVudEhhbmRsZXIgPSB7XG4gICAgb24oZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbikge1xuICAgICAgYWRkSGFuZGxlcihlbGVtZW50LCBldmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZ1bmN0aW9uLCBmYWxzZSk7XG4gICAgfSxcblxuICAgIG9uZShlbGVtZW50LCBldmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZ1bmN0aW9uKSB7XG4gICAgICBhZGRIYW5kbGVyKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24sIHRydWUpO1xuICAgIH0sXG5cbiAgICBvZmYoZWxlbWVudCwgb3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbikge1xuICAgICAgaWYgKHR5cGVvZiBvcmlnaW5hbFR5cGVFdmVudCAhPT0gJ3N0cmluZycgfHwgIWVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBbaXNEZWxlZ2F0ZWQsIGNhbGxhYmxlLCB0eXBlRXZlbnRdID0gbm9ybWFsaXplUGFyYW1ldGVycyhvcmlnaW5hbFR5cGVFdmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZ1bmN0aW9uKTtcbiAgICAgIGNvbnN0IGluTmFtZXNwYWNlID0gdHlwZUV2ZW50ICE9PSBvcmlnaW5hbFR5cGVFdmVudDtcbiAgICAgIGNvbnN0IGV2ZW50cyA9IGdldEVsZW1lbnRFdmVudHMoZWxlbWVudCk7XG4gICAgICBjb25zdCBzdG9yZUVsZW1lbnRFdmVudCA9IGV2ZW50c1t0eXBlRXZlbnRdIHx8IHt9O1xuICAgICAgY29uc3QgaXNOYW1lc3BhY2UgPSBvcmlnaW5hbFR5cGVFdmVudC5zdGFydHNXaXRoKCcuJyk7XG5cbiAgICAgIGlmICh0eXBlb2YgY2FsbGFibGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8vIFNpbXBsZXN0IGNhc2U6IGhhbmRsZXIgaXMgcGFzc2VkLCByZW1vdmUgdGhhdCBsaXN0ZW5lciBPTkxZLlxuICAgICAgICBpZiAoIU9iamVjdC5rZXlzKHN0b3JlRWxlbWVudEV2ZW50KS5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZW1vdmVIYW5kbGVyKGVsZW1lbnQsIGV2ZW50cywgdHlwZUV2ZW50LCBjYWxsYWJsZSwgaXNEZWxlZ2F0ZWQgPyBoYW5kbGVyIDogbnVsbCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzTmFtZXNwYWNlKSB7XG4gICAgICAgIGZvciAoY29uc3QgZWxlbWVudEV2ZW50IG9mIE9iamVjdC5rZXlzKGV2ZW50cykpIHtcbiAgICAgICAgICByZW1vdmVOYW1lc3BhY2VkSGFuZGxlcnMoZWxlbWVudCwgZXZlbnRzLCBlbGVtZW50RXZlbnQsIG9yaWdpbmFsVHlwZUV2ZW50LnNsaWNlKDEpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKGNvbnN0IGtleUhhbmRsZXJzIG9mIE9iamVjdC5rZXlzKHN0b3JlRWxlbWVudEV2ZW50KSkge1xuICAgICAgICBjb25zdCBoYW5kbGVyS2V5ID0ga2V5SGFuZGxlcnMucmVwbGFjZShzdHJpcFVpZFJlZ2V4LCAnJyk7XG5cbiAgICAgICAgaWYgKCFpbk5hbWVzcGFjZSB8fCBvcmlnaW5hbFR5cGVFdmVudC5pbmNsdWRlcyhoYW5kbGVyS2V5KSkge1xuICAgICAgICAgIGNvbnN0IGV2ZW50ID0gc3RvcmVFbGVtZW50RXZlbnRba2V5SGFuZGxlcnNdO1xuICAgICAgICAgIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIGV2ZW50LmNhbGxhYmxlLCBldmVudC5kZWxlZ2F0aW9uU2VsZWN0b3IpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHRyaWdnZXIoZWxlbWVudCwgZXZlbnQsIGFyZ3MpIHtcbiAgICAgIGlmICh0eXBlb2YgZXZlbnQgIT09ICdzdHJpbmcnIHx8ICFlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICBjb25zdCAkID0gaW5kZXguZ2V0alF1ZXJ5KCk7XG4gICAgICBjb25zdCB0eXBlRXZlbnQgPSBnZXRUeXBlRXZlbnQoZXZlbnQpO1xuICAgICAgY29uc3QgaW5OYW1lc3BhY2UgPSBldmVudCAhPT0gdHlwZUV2ZW50O1xuICAgICAgbGV0IGpRdWVyeUV2ZW50ID0gbnVsbDtcbiAgICAgIGxldCBidWJibGVzID0gdHJ1ZTtcbiAgICAgIGxldCBuYXRpdmVEaXNwYXRjaCA9IHRydWU7XG4gICAgICBsZXQgZGVmYXVsdFByZXZlbnRlZCA9IGZhbHNlO1xuXG4gICAgICBpZiAoaW5OYW1lc3BhY2UgJiYgJCkge1xuICAgICAgICBqUXVlcnlFdmVudCA9ICQuRXZlbnQoZXZlbnQsIGFyZ3MpO1xuICAgICAgICAkKGVsZW1lbnQpLnRyaWdnZXIoalF1ZXJ5RXZlbnQpO1xuICAgICAgICBidWJibGVzID0gIWpRdWVyeUV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkKCk7XG4gICAgICAgIG5hdGl2ZURpc3BhdGNoID0gIWpRdWVyeUV2ZW50LmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKCk7XG4gICAgICAgIGRlZmF1bHRQcmV2ZW50ZWQgPSBqUXVlcnlFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKTtcbiAgICAgIH1cblxuICAgICAgbGV0IGV2dCA9IG5ldyBFdmVudChldmVudCwge1xuICAgICAgICBidWJibGVzLFxuICAgICAgICBjYW5jZWxhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIGV2dCA9IGh5ZHJhdGVPYmooZXZ0LCBhcmdzKTtcblxuICAgICAgaWYgKGRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChuYXRpdmVEaXNwYXRjaCkge1xuICAgICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGV2dC5kZWZhdWx0UHJldmVudGVkICYmIGpRdWVyeUV2ZW50KSB7XG4gICAgICAgIGpRdWVyeUV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBldnQ7XG4gICAgfVxuXG4gIH07XG5cbiAgZnVuY3Rpb24gaHlkcmF0ZU9iaihvYmosIG1ldGEpIHtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhtZXRhIHx8IHt9KSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgICAgIH0gY2F0Y2ggKF91bnVzZWQpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuXG4gICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgcmV0dXJuIEV2ZW50SGFuZGxlcjtcblxufSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXZlbnQtaGFuZGxlci5qcy5tYXBcbiIsIi8qIVxuICAqIEJvb3RzdHJhcCBtYW5pcHVsYXRvci5qcyB2NS4yLjMgKGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS8pXG4gICogQ29weXJpZ2h0IDIwMTEtMjAyMiBUaGUgQm9vdHN0cmFwIEF1dGhvcnMgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ncmFwaHMvY29udHJpYnV0b3JzKVxuICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAqL1xuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuICAoZ2xvYmFsID0gdHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsVGhpcyA6IGdsb2JhbCB8fCBzZWxmLCBnbG9iYWwuTWFuaXB1bGF0b3IgPSBmYWN0b3J5KCkpO1xufSkodGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgKHY1LjIuMyk6IGRvbS9tYW5pcHVsYXRvci5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZURhdGEodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09ICd0cnVlJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlID09PSAnZmFsc2UnKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlID09PSBOdW1iZXIodmFsdWUpLnRvU3RyaW5nKCkpIHtcbiAgICAgIHJldHVybiBOdW1iZXIodmFsdWUpO1xuICAgIH1cblxuICAgIGlmICh2YWx1ZSA9PT0gJycgfHwgdmFsdWUgPT09ICdudWxsJykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XG4gICAgfSBjYXRjaCAoX3VudXNlZCkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZURhdGFLZXkoa2V5KSB7XG4gICAgcmV0dXJuIGtleS5yZXBsYWNlKC9bQS1aXS9nLCBjaHIgPT4gYC0ke2Noci50b0xvd2VyQ2FzZSgpfWApO1xuICB9XG5cbiAgY29uc3QgTWFuaXB1bGF0b3IgPSB7XG4gICAgc2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCBrZXksIHZhbHVlKSB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShgZGF0YS1icy0ke25vcm1hbGl6ZURhdGFLZXkoa2V5KX1gLCB2YWx1ZSk7XG4gICAgfSxcblxuICAgIHJlbW92ZURhdGFBdHRyaWJ1dGUoZWxlbWVudCwga2V5KSB7XG4gICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShgZGF0YS1icy0ke25vcm1hbGl6ZURhdGFLZXkoa2V5KX1gKTtcbiAgICB9LFxuXG4gICAgZ2V0RGF0YUF0dHJpYnV0ZXMoZWxlbWVudCkge1xuICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYXR0cmlidXRlcyA9IHt9O1xuICAgICAgY29uc3QgYnNLZXlzID0gT2JqZWN0LmtleXMoZWxlbWVudC5kYXRhc2V0KS5maWx0ZXIoa2V5ID0+IGtleS5zdGFydHNXaXRoKCdicycpICYmICFrZXkuc3RhcnRzV2l0aCgnYnNDb25maWcnKSk7XG5cbiAgICAgIGZvciAoY29uc3Qga2V5IG9mIGJzS2V5cykge1xuICAgICAgICBsZXQgcHVyZUtleSA9IGtleS5yZXBsYWNlKC9eYnMvLCAnJyk7XG4gICAgICAgIHB1cmVLZXkgPSBwdXJlS2V5LmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgcHVyZUtleS5zbGljZSgxLCBwdXJlS2V5Lmxlbmd0aCk7XG4gICAgICAgIGF0dHJpYnV0ZXNbcHVyZUtleV0gPSBub3JtYWxpemVEYXRhKGVsZW1lbnQuZGF0YXNldFtrZXldKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGF0dHJpYnV0ZXM7XG4gICAgfSxcblxuICAgIGdldERhdGFBdHRyaWJ1dGUoZWxlbWVudCwga2V5KSB7XG4gICAgICByZXR1cm4gbm9ybWFsaXplRGF0YShlbGVtZW50LmdldEF0dHJpYnV0ZShgZGF0YS1icy0ke25vcm1hbGl6ZURhdGFLZXkoa2V5KX1gKSk7XG4gICAgfVxuXG4gIH07XG5cbiAgcmV0dXJuIE1hbmlwdWxhdG9yO1xuXG59KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYW5pcHVsYXRvci5qcy5tYXBcbiIsIi8qIVxuICAqIEJvb3RzdHJhcCBzZWxlY3Rvci1lbmdpbmUuanMgdjUuMi4zIChodHRwczovL2dldGJvb3RzdHJhcC5jb20vKVxuICAqIENvcHlyaWdodCAyMDExLTIwMjIgVGhlIEJvb3RzdHJhcCBBdXRob3JzIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvZ3JhcGhzL2NvbnRyaWJ1dG9ycylcbiAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgKi9cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKCcuLi91dGlsL2luZGV4JykpIDpcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnLi4vdXRpbC9pbmRleCddLCBmYWN0b3J5KSA6XG4gIChnbG9iYWwgPSB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWxUaGlzIDogZ2xvYmFsIHx8IHNlbGYsIGdsb2JhbC5TZWxlY3RvckVuZ2luZSA9IGZhY3RvcnkoZ2xvYmFsLkluZGV4KSk7XG59KSh0aGlzLCAoZnVuY3Rpb24gKGluZGV4KSB7ICd1c2Ugc3RyaWN0JztcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwICh2NS4yLjMpOiBkb20vc2VsZWN0b3ItZW5naW5lLmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cbiAgLyoqXG4gICAqIENvbnN0YW50c1xuICAgKi9cblxuICBjb25zdCBTZWxlY3RvckVuZ2luZSA9IHtcbiAgICBmaW5kKHNlbGVjdG9yLCBlbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICByZXR1cm4gW10uY29uY2F0KC4uLkVsZW1lbnQucHJvdG90eXBlLnF1ZXJ5U2VsZWN0b3JBbGwuY2FsbChlbGVtZW50LCBzZWxlY3RvcikpO1xuICAgIH0sXG5cbiAgICBmaW5kT25lKHNlbGVjdG9yLCBlbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICByZXR1cm4gRWxlbWVudC5wcm90b3R5cGUucXVlcnlTZWxlY3Rvci5jYWxsKGVsZW1lbnQsIHNlbGVjdG9yKTtcbiAgICB9LFxuXG4gICAgY2hpbGRyZW4oZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICAgIHJldHVybiBbXS5jb25jYXQoLi4uZWxlbWVudC5jaGlsZHJlbikuZmlsdGVyKGNoaWxkID0+IGNoaWxkLm1hdGNoZXMoc2VsZWN0b3IpKTtcbiAgICB9LFxuXG4gICAgcGFyZW50cyhlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgICAgY29uc3QgcGFyZW50cyA9IFtdO1xuICAgICAgbGV0IGFuY2VzdG9yID0gZWxlbWVudC5wYXJlbnROb2RlLmNsb3Nlc3Qoc2VsZWN0b3IpO1xuXG4gICAgICB3aGlsZSAoYW5jZXN0b3IpIHtcbiAgICAgICAgcGFyZW50cy5wdXNoKGFuY2VzdG9yKTtcbiAgICAgICAgYW5jZXN0b3IgPSBhbmNlc3Rvci5wYXJlbnROb2RlLmNsb3Nlc3Qoc2VsZWN0b3IpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGFyZW50cztcbiAgICB9LFxuXG4gICAgcHJldihlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgICAgbGV0IHByZXZpb3VzID0gZWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuXG4gICAgICB3aGlsZSAocHJldmlvdXMpIHtcbiAgICAgICAgaWYgKHByZXZpb3VzLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgcmV0dXJuIFtwcmV2aW91c107XG4gICAgICAgIH1cblxuICAgICAgICBwcmV2aW91cyA9IHByZXZpb3VzLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBbXTtcbiAgICB9LFxuXG4gICAgLy8gVE9ETzogdGhpcyBpcyBub3cgdW51c2VkOyByZW1vdmUgbGF0ZXIgYWxvbmcgd2l0aCBwcmV2KClcbiAgICBuZXh0KGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgICBsZXQgbmV4dCA9IGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nO1xuXG4gICAgICB3aGlsZSAobmV4dCkge1xuICAgICAgICBpZiAobmV4dC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgIHJldHVybiBbbmV4dF07XG4gICAgICAgIH1cblxuICAgICAgICBuZXh0ID0gbmV4dC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBbXTtcbiAgICB9LFxuXG4gICAgZm9jdXNhYmxlQ2hpbGRyZW4oZWxlbWVudCkge1xuICAgICAgY29uc3QgZm9jdXNhYmxlcyA9IFsnYScsICdidXR0b24nLCAnaW5wdXQnLCAndGV4dGFyZWEnLCAnc2VsZWN0JywgJ2RldGFpbHMnLCAnW3RhYmluZGV4XScsICdbY29udGVudGVkaXRhYmxlPVwidHJ1ZVwiXSddLm1hcChzZWxlY3RvciA9PiBgJHtzZWxlY3Rvcn06bm90KFt0YWJpbmRleF49XCItXCJdKWApLmpvaW4oJywnKTtcbiAgICAgIHJldHVybiB0aGlzLmZpbmQoZm9jdXNhYmxlcywgZWxlbWVudCkuZmlsdGVyKGVsID0+ICFpbmRleC5pc0Rpc2FibGVkKGVsKSAmJiBpbmRleC5pc1Zpc2libGUoZWwpKTtcbiAgICB9XG5cbiAgfTtcblxuICByZXR1cm4gU2VsZWN0b3JFbmdpbmU7XG5cbn0pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNlbGVjdG9yLWVuZ2luZS5qcy5tYXBcbiIsIi8qIVxuICAqIEJvb3RzdHJhcCBkcm9wZG93bi5qcyB2NS4yLjMgKGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS8pXG4gICogQ29weXJpZ2h0IDIwMTEtMjAyMiBUaGUgQm9vdHN0cmFwIEF1dGhvcnMgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ncmFwaHMvY29udHJpYnV0b3JzKVxuICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAqL1xuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoJ0Bwb3BwZXJqcy9jb3JlJyksIHJlcXVpcmUoJy4vdXRpbC9pbmRleCcpLCByZXF1aXJlKCcuL2RvbS9ldmVudC1oYW5kbGVyJyksIHJlcXVpcmUoJy4vZG9tL21hbmlwdWxhdG9yJyksIHJlcXVpcmUoJy4vZG9tL3NlbGVjdG9yLWVuZ2luZScpLCByZXF1aXJlKCcuL2Jhc2UtY29tcG9uZW50JykpIDpcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnQHBvcHBlcmpzL2NvcmUnLCAnLi91dGlsL2luZGV4JywgJy4vZG9tL2V2ZW50LWhhbmRsZXInLCAnLi9kb20vbWFuaXB1bGF0b3InLCAnLi9kb20vc2VsZWN0b3ItZW5naW5lJywgJy4vYmFzZS1jb21wb25lbnQnXSwgZmFjdG9yeSkgOlxuICAoZ2xvYmFsID0gdHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsVGhpcyA6IGdsb2JhbCB8fCBzZWxmLCBnbG9iYWwuRHJvcGRvd24gPSBmYWN0b3J5KGdsb2JhbFtcIkBwb3BwZXJqcy9jb3JlXCJdLCBnbG9iYWwuSW5kZXgsIGdsb2JhbC5FdmVudEhhbmRsZXIsIGdsb2JhbC5NYW5pcHVsYXRvciwgZ2xvYmFsLlNlbGVjdG9yRW5naW5lLCBnbG9iYWwuQmFzZUNvbXBvbmVudCkpO1xufSkodGhpcywgKGZ1bmN0aW9uIChQb3BwZXIsIGluZGV4LCBFdmVudEhhbmRsZXIsIE1hbmlwdWxhdG9yLCBTZWxlY3RvckVuZ2luZSwgQmFzZUNvbXBvbmVudCkgeyAndXNlIHN0cmljdCc7XG5cbiAgY29uc3QgX2ludGVyb3BEZWZhdWx0TGVnYWN5ID0gZSA9PiBlICYmIHR5cGVvZiBlID09PSAnb2JqZWN0JyAmJiAnZGVmYXVsdCcgaW4gZSA/IGUgOiB7IGRlZmF1bHQ6IGUgfTtcblxuICBmdW5jdGlvbiBfaW50ZXJvcE5hbWVzcGFjZShlKSB7XG4gICAgaWYgKGUgJiYgZS5fX2VzTW9kdWxlKSByZXR1cm4gZTtcbiAgICBjb25zdCBuID0gT2JqZWN0LmNyZWF0ZShudWxsLCB7IFtTeW1ib2wudG9TdHJpbmdUYWddOiB7IHZhbHVlOiAnTW9kdWxlJyB9IH0pO1xuICAgIGlmIChlKSB7XG4gICAgICBmb3IgKGNvbnN0IGsgaW4gZSkge1xuICAgICAgICBpZiAoayAhPT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgICAgY29uc3QgZCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSwgayk7XG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG4sIGssIGQuZ2V0ID8gZCA6IHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBnZXQ6ICgpID0+IGVba11cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBuLmRlZmF1bHQgPSBlO1xuICAgIHJldHVybiBPYmplY3QuZnJlZXplKG4pO1xuICB9XG5cbiAgY29uc3QgUG9wcGVyX19uYW1lc3BhY2UgPSAvKiNfX1BVUkVfXyovX2ludGVyb3BOYW1lc3BhY2UoUG9wcGVyKTtcbiAgY29uc3QgRXZlbnRIYW5kbGVyX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19pbnRlcm9wRGVmYXVsdExlZ2FjeShFdmVudEhhbmRsZXIpO1xuICBjb25zdCBNYW5pcHVsYXRvcl9fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9faW50ZXJvcERlZmF1bHRMZWdhY3koTWFuaXB1bGF0b3IpO1xuICBjb25zdCBTZWxlY3RvckVuZ2luZV9fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9faW50ZXJvcERlZmF1bHRMZWdhY3koU2VsZWN0b3JFbmdpbmUpO1xuICBjb25zdCBCYXNlQ29tcG9uZW50X19kZWZhdWx0ID0gLyojX19QVVJFX18qL19pbnRlcm9wRGVmYXVsdExlZ2FjeShCYXNlQ29tcG9uZW50KTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwICh2NS4yLjMpOiBkcm9wZG93bi5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICovXG5cbiAgY29uc3QgTkFNRSA9ICdkcm9wZG93bic7XG4gIGNvbnN0IERBVEFfS0VZID0gJ2JzLmRyb3Bkb3duJztcbiAgY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWA7XG4gIGNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknO1xuICBjb25zdCBFU0NBUEVfS0VZID0gJ0VzY2FwZSc7XG4gIGNvbnN0IFRBQl9LRVkgPSAnVGFiJztcbiAgY29uc3QgQVJST1dfVVBfS0VZID0gJ0Fycm93VXAnO1xuICBjb25zdCBBUlJPV19ET1dOX0tFWSA9ICdBcnJvd0Rvd24nO1xuICBjb25zdCBSSUdIVF9NT1VTRV9CVVRUT04gPSAyOyAvLyBNb3VzZUV2ZW50LmJ1dHRvbiB2YWx1ZSBmb3IgdGhlIHNlY29uZGFyeSBidXR0b24sIHVzdWFsbHkgdGhlIHJpZ2h0IGJ1dHRvblxuXG4gIGNvbnN0IEVWRU5UX0hJREUgPSBgaGlkZSR7RVZFTlRfS0VZfWA7XG4gIGNvbnN0IEVWRU5UX0hJRERFTiA9IGBoaWRkZW4ke0VWRU5UX0tFWX1gO1xuICBjb25zdCBFVkVOVF9TSE9XID0gYHNob3cke0VWRU5UX0tFWX1gO1xuICBjb25zdCBFVkVOVF9TSE9XTiA9IGBzaG93biR7RVZFTlRfS0VZfWA7XG4gIGNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YDtcbiAgY29uc3QgRVZFTlRfS0VZRE9XTl9EQVRBX0FQSSA9IGBrZXlkb3duJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YDtcbiAgY29uc3QgRVZFTlRfS0VZVVBfREFUQV9BUEkgPSBga2V5dXAke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gO1xuICBjb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdyc7XG4gIGNvbnN0IENMQVNTX05BTUVfRFJPUFVQID0gJ2Ryb3B1cCc7XG4gIGNvbnN0IENMQVNTX05BTUVfRFJPUEVORCA9ICdkcm9wZW5kJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9EUk9QU1RBUlQgPSAnZHJvcHN0YXJ0JztcbiAgY29uc3QgQ0xBU1NfTkFNRV9EUk9QVVBfQ0VOVEVSID0gJ2Ryb3B1cC1jZW50ZXInO1xuICBjb25zdCBDTEFTU19OQU1FX0RST1BET1dOX0NFTlRFUiA9ICdkcm9wZG93bi1jZW50ZXInO1xuICBjb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS1icy10b2dnbGU9XCJkcm9wZG93blwiXTpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSc7XG4gIGNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFX1NIT1dOID0gYCR7U0VMRUNUT1JfREFUQV9UT0dHTEV9LiR7Q0xBU1NfTkFNRV9TSE9XfWA7XG4gIGNvbnN0IFNFTEVDVE9SX01FTlUgPSAnLmRyb3Bkb3duLW1lbnUnO1xuICBjb25zdCBTRUxFQ1RPUl9OQVZCQVIgPSAnLm5hdmJhcic7XG4gIGNvbnN0IFNFTEVDVE9SX05BVkJBUl9OQVYgPSAnLm5hdmJhci1uYXYnO1xuICBjb25zdCBTRUxFQ1RPUl9WSVNJQkxFX0lURU1TID0gJy5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpJztcbiAgY29uc3QgUExBQ0VNRU5UX1RPUCA9IGluZGV4LmlzUlRMKCkgPyAndG9wLWVuZCcgOiAndG9wLXN0YXJ0JztcbiAgY29uc3QgUExBQ0VNRU5UX1RPUEVORCA9IGluZGV4LmlzUlRMKCkgPyAndG9wLXN0YXJ0JyA6ICd0b3AtZW5kJztcbiAgY29uc3QgUExBQ0VNRU5UX0JPVFRPTSA9IGluZGV4LmlzUlRMKCkgPyAnYm90dG9tLWVuZCcgOiAnYm90dG9tLXN0YXJ0JztcbiAgY29uc3QgUExBQ0VNRU5UX0JPVFRPTUVORCA9IGluZGV4LmlzUlRMKCkgPyAnYm90dG9tLXN0YXJ0JyA6ICdib3R0b20tZW5kJztcbiAgY29uc3QgUExBQ0VNRU5UX1JJR0hUID0gaW5kZXguaXNSVEwoKSA/ICdsZWZ0LXN0YXJ0JyA6ICdyaWdodC1zdGFydCc7XG4gIGNvbnN0IFBMQUNFTUVOVF9MRUZUID0gaW5kZXguaXNSVEwoKSA/ICdyaWdodC1zdGFydCcgOiAnbGVmdC1zdGFydCc7XG4gIGNvbnN0IFBMQUNFTUVOVF9UT1BDRU5URVIgPSAndG9wJztcbiAgY29uc3QgUExBQ0VNRU5UX0JPVFRPTUNFTlRFUiA9ICdib3R0b20nO1xuICBjb25zdCBEZWZhdWx0ID0ge1xuICAgIGF1dG9DbG9zZTogdHJ1ZSxcbiAgICBib3VuZGFyeTogJ2NsaXBwaW5nUGFyZW50cycsXG4gICAgZGlzcGxheTogJ2R5bmFtaWMnLFxuICAgIG9mZnNldDogWzAsIDJdLFxuICAgIHBvcHBlckNvbmZpZzogbnVsbCxcbiAgICByZWZlcmVuY2U6ICd0b2dnbGUnXG4gIH07XG4gIGNvbnN0IERlZmF1bHRUeXBlID0ge1xuICAgIGF1dG9DbG9zZTogJyhib29sZWFufHN0cmluZyknLFxuICAgIGJvdW5kYXJ5OiAnKHN0cmluZ3xlbGVtZW50KScsXG4gICAgZGlzcGxheTogJ3N0cmluZycsXG4gICAgb2Zmc2V0OiAnKGFycmF5fHN0cmluZ3xmdW5jdGlvbiknLFxuICAgIHBvcHBlckNvbmZpZzogJyhudWxsfG9iamVjdHxmdW5jdGlvbiknLFxuICAgIHJlZmVyZW5jZTogJyhzdHJpbmd8ZWxlbWVudHxvYmplY3QpJ1xuICB9O1xuICAvKipcbiAgICogQ2xhc3MgZGVmaW5pdGlvblxuICAgKi9cblxuICBjbGFzcyBEcm9wZG93biBleHRlbmRzIEJhc2VDb21wb25lbnRfX2RlZmF1bHQuZGVmYXVsdCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgICBzdXBlcihlbGVtZW50LCBjb25maWcpO1xuICAgICAgdGhpcy5fcG9wcGVyID0gbnVsbDtcbiAgICAgIHRoaXMuX3BhcmVudCA9IHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZTsgLy8gZHJvcGRvd24gd3JhcHBlclxuICAgICAgLy8gdG9kbzogdjYgcmV2ZXJ0ICMzNzAxMSAmIGNoYW5nZSBtYXJrdXAgaHR0cHM6Ly9nZXRib290c3RyYXAuY29tL2RvY3MvNS4yL2Zvcm1zL2lucHV0LWdyb3VwL1xuXG4gICAgICB0aGlzLl9tZW51ID0gU2VsZWN0b3JFbmdpbmVfX2RlZmF1bHQuZGVmYXVsdC5uZXh0KHRoaXMuX2VsZW1lbnQsIFNFTEVDVE9SX01FTlUpWzBdIHx8IFNlbGVjdG9yRW5naW5lX19kZWZhdWx0LmRlZmF1bHQucHJldih0aGlzLl9lbGVtZW50LCBTRUxFQ1RPUl9NRU5VKVswXSB8fCBTZWxlY3RvckVuZ2luZV9fZGVmYXVsdC5kZWZhdWx0LmZpbmRPbmUoU0VMRUNUT1JfTUVOVSwgdGhpcy5fcGFyZW50KTtcbiAgICAgIHRoaXMuX2luTmF2YmFyID0gdGhpcy5fZGV0ZWN0TmF2YmFyKCk7XG4gICAgfSAvLyBHZXR0ZXJzXG5cblxuICAgIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0O1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdFR5cGU7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgICAgcmV0dXJuIE5BTUU7XG4gICAgfSAvLyBQdWJsaWNcblxuXG4gICAgdG9nZ2xlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2lzU2hvd24oKSA/IHRoaXMuaGlkZSgpIDogdGhpcy5zaG93KCk7XG4gICAgfVxuXG4gICAgc2hvdygpIHtcbiAgICAgIGlmIChpbmRleC5pc0Rpc2FibGVkKHRoaXMuX2VsZW1lbnQpIHx8IHRoaXMuX2lzU2hvd24oKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlbGF0ZWRUYXJnZXQgPSB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRoaXMuX2VsZW1lbnRcbiAgICAgIH07XG4gICAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXJfX2RlZmF1bHQuZGVmYXVsdC50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1csIHJlbGF0ZWRUYXJnZXQpO1xuXG4gICAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9jcmVhdGVQb3BwZXIoKTsgLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIGFkZCBleHRyYVxuICAgICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB0byB0aGUgYm9keSdzIGltbWVkaWF0ZSBjaGlsZHJlbjtcbiAgICAgIC8vIG9ubHkgbmVlZGVkIGJlY2F1c2Ugb2YgYnJva2VuIGV2ZW50IGRlbGVnYXRpb24gb24gaU9TXG4gICAgICAvLyBodHRwczovL3d3dy5xdWlya3Ntb2RlLm9yZy9ibG9nL2FyY2hpdmVzLzIwMTQvMDIvbW91c2VfZXZlbnRfYnViLmh0bWxcblxuXG4gICAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmICF0aGlzLl9wYXJlbnQuY2xvc2VzdChTRUxFQ1RPUl9OQVZCQVJfTkFWKSkge1xuICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgW10uY29uY2F0KC4uLmRvY3VtZW50LmJvZHkuY2hpbGRyZW4pKSB7XG4gICAgICAgICAgRXZlbnRIYW5kbGVyX19kZWZhdWx0LmRlZmF1bHQub24oZWxlbWVudCwgJ21vdXNlb3ZlcicsIGluZGV4Lm5vb3ApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuZm9jdXMoKTtcblxuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKTtcblxuICAgICAgdGhpcy5fbWVudS5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVyk7XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1cpO1xuXG4gICAgICBFdmVudEhhbmRsZXJfX2RlZmF1bHQuZGVmYXVsdC50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1dOLCByZWxhdGVkVGFyZ2V0KTtcbiAgICB9XG5cbiAgICBoaWRlKCkge1xuICAgICAgaWYgKGluZGV4LmlzRGlzYWJsZWQodGhpcy5fZWxlbWVudCkgfHwgIXRoaXMuX2lzU2hvd24oKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlbGF0ZWRUYXJnZXQgPSB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRoaXMuX2VsZW1lbnRcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuX2NvbXBsZXRlSGlkZShyZWxhdGVkVGFyZ2V0KTtcbiAgICB9XG5cbiAgICBkaXNwb3NlKCkge1xuICAgICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpO1xuICAgICAgfVxuXG4gICAgICBzdXBlci5kaXNwb3NlKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgdGhpcy5faW5OYXZiYXIgPSB0aGlzLl9kZXRlY3ROYXZiYXIoKTtcblxuICAgICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgICB0aGlzLl9wb3BwZXIudXBkYXRlKCk7XG4gICAgICB9XG4gICAgfSAvLyBQcml2YXRlXG5cblxuICAgIF9jb21wbGV0ZUhpZGUocmVsYXRlZFRhcmdldCkge1xuICAgICAgY29uc3QgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyX19kZWZhdWx0LmRlZmF1bHQudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFLCByZWxhdGVkVGFyZ2V0KTtcblxuICAgICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIHJlbW92ZSB0aGUgZXh0cmFcbiAgICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgd2UgYWRkZWQgZm9yIGlPUyBzdXBwb3J0XG5cblxuICAgICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgW10uY29uY2F0KC4uLmRvY3VtZW50LmJvZHkuY2hpbGRyZW4pKSB7XG4gICAgICAgICAgRXZlbnRIYW5kbGVyX19kZWZhdWx0LmRlZmF1bHQub2ZmKGVsZW1lbnQsICdtb3VzZW92ZXInLCBpbmRleC5ub29wKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX21lbnUuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpO1xuXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKTtcblxuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcblxuICAgICAgTWFuaXB1bGF0b3JfX2RlZmF1bHQuZGVmYXVsdC5yZW1vdmVEYXRhQXR0cmlidXRlKHRoaXMuX21lbnUsICdwb3BwZXInKTtcbiAgICAgIEV2ZW50SGFuZGxlcl9fZGVmYXVsdC5kZWZhdWx0LnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElEREVOLCByZWxhdGVkVGFyZ2V0KTtcbiAgICB9XG5cbiAgICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgICAgY29uZmlnID0gc3VwZXIuX2dldENvbmZpZyhjb25maWcpO1xuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZy5yZWZlcmVuY2UgPT09ICdvYmplY3QnICYmICFpbmRleC5pc0VsZW1lbnQoY29uZmlnLnJlZmVyZW5jZSkgJiYgdHlwZW9mIGNvbmZpZy5yZWZlcmVuY2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIFBvcHBlciB2aXJ0dWFsIGVsZW1lbnRzIHJlcXVpcmUgYSBnZXRCb3VuZGluZ0NsaWVudFJlY3QgbWV0aG9kXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYCR7TkFNRS50b1VwcGVyQ2FzZSgpfTogT3B0aW9uIFwicmVmZXJlbmNlXCIgcHJvdmlkZWQgdHlwZSBcIm9iamVjdFwiIHdpdGhvdXQgYSByZXF1aXJlZCBcImdldEJvdW5kaW5nQ2xpZW50UmVjdFwiIG1ldGhvZC5gKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG5cbiAgICBfY3JlYXRlUG9wcGVyKCkge1xuICAgICAgaWYgKHR5cGVvZiBQb3BwZXJfX25hbWVzcGFjZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9vdHN0cmFwXFwncyBkcm9wZG93bnMgcmVxdWlyZSBQb3BwZXIgKGh0dHBzOi8vcG9wcGVyLmpzLm9yZyknKTtcbiAgICAgIH1cblxuICAgICAgbGV0IHJlZmVyZW5jZUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLnJlZmVyZW5jZSA9PT0gJ3BhcmVudCcpIHtcbiAgICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX3BhcmVudDtcbiAgICAgIH0gZWxzZSBpZiAoaW5kZXguaXNFbGVtZW50KHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UpKSB7XG4gICAgICAgIHJlZmVyZW5jZUVsZW1lbnQgPSBpbmRleC5nZXRFbGVtZW50KHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdGhpcy5fY29uZmlnLnJlZmVyZW5jZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX2NvbmZpZy5yZWZlcmVuY2U7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBvcHBlckNvbmZpZyA9IHRoaXMuX2dldFBvcHBlckNvbmZpZygpO1xuXG4gICAgICB0aGlzLl9wb3BwZXIgPSBQb3BwZXJfX25hbWVzcGFjZS5jcmVhdGVQb3BwZXIocmVmZXJlbmNlRWxlbWVudCwgdGhpcy5fbWVudSwgcG9wcGVyQ29uZmlnKTtcbiAgICB9XG5cbiAgICBfaXNTaG93bigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9tZW51LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpO1xuICAgIH1cblxuICAgIF9nZXRQbGFjZW1lbnQoKSB7XG4gICAgICBjb25zdCBwYXJlbnREcm9wZG93biA9IHRoaXMuX3BhcmVudDtcblxuICAgICAgaWYgKHBhcmVudERyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BFTkQpKSB7XG4gICAgICAgIHJldHVybiBQTEFDRU1FTlRfUklHSFQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QU1RBUlQpKSB7XG4gICAgICAgIHJldHVybiBQTEFDRU1FTlRfTEVGVDtcbiAgICAgIH1cblxuICAgICAgaWYgKHBhcmVudERyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BVUF9DRU5URVIpKSB7XG4gICAgICAgIHJldHVybiBQTEFDRU1FTlRfVE9QQ0VOVEVSO1xuICAgICAgfVxuXG4gICAgICBpZiAocGFyZW50RHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRFJPUERPV05fQ0VOVEVSKSkge1xuICAgICAgICByZXR1cm4gUExBQ0VNRU5UX0JPVFRPTUNFTlRFUjtcbiAgICAgIH0gLy8gV2UgbmVlZCB0byB0cmltIHRoZSB2YWx1ZSBiZWNhdXNlIGN1c3RvbSBwcm9wZXJ0aWVzIGNhbiBhbHNvIGluY2x1ZGUgc3BhY2VzXG5cblxuICAgICAgY29uc3QgaXNFbmQgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuX21lbnUpLmdldFByb3BlcnR5VmFsdWUoJy0tYnMtcG9zaXRpb24nKS50cmltKCkgPT09ICdlbmQnO1xuXG4gICAgICBpZiAocGFyZW50RHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRFJPUFVQKSkge1xuICAgICAgICByZXR1cm4gaXNFbmQgPyBQTEFDRU1FTlRfVE9QRU5EIDogUExBQ0VNRU5UX1RPUDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGlzRW5kID8gUExBQ0VNRU5UX0JPVFRPTUVORCA6IFBMQUNFTUVOVF9CT1RUT007XG4gICAgfVxuXG4gICAgX2RldGVjdE5hdmJhcigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmNsb3Nlc3QoU0VMRUNUT1JfTkFWQkFSKSAhPT0gbnVsbDtcbiAgICB9XG5cbiAgICBfZ2V0T2Zmc2V0KCkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBvZmZzZXRcbiAgICAgIH0gPSB0aGlzLl9jb25maWc7XG5cbiAgICAgIGlmICh0eXBlb2Ygb2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gb2Zmc2V0LnNwbGl0KCcsJykubWFwKHZhbHVlID0+IE51bWJlci5wYXJzZUludCh2YWx1ZSwgMTApKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBvZmZzZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHBvcHBlckRhdGEgPT4gb2Zmc2V0KHBvcHBlckRhdGEsIHRoaXMuX2VsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gb2Zmc2V0O1xuICAgIH1cblxuICAgIF9nZXRQb3BwZXJDb25maWcoKSB7XG4gICAgICBjb25zdCBkZWZhdWx0QnNQb3BwZXJDb25maWcgPSB7XG4gICAgICAgIHBsYWNlbWVudDogdGhpcy5fZ2V0UGxhY2VtZW50KCksXG4gICAgICAgIG1vZGlmaWVyczogW3tcbiAgICAgICAgICBuYW1lOiAncHJldmVudE92ZXJmbG93JyxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBib3VuZGFyeTogdGhpcy5fY29uZmlnLmJvdW5kYXJ5XG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgbmFtZTogJ29mZnNldCcsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgb2Zmc2V0OiB0aGlzLl9nZXRPZmZzZXQoKVxuICAgICAgICAgIH1cbiAgICAgICAgfV1cbiAgICAgIH07IC8vIERpc2FibGUgUG9wcGVyIGlmIHdlIGhhdmUgYSBzdGF0aWMgZGlzcGxheSBvciBEcm9wZG93biBpcyBpbiBOYXZiYXJcblxuICAgICAgaWYgKHRoaXMuX2luTmF2YmFyIHx8IHRoaXMuX2NvbmZpZy5kaXNwbGF5ID09PSAnc3RhdGljJykge1xuICAgICAgICBNYW5pcHVsYXRvcl9fZGVmYXVsdC5kZWZhdWx0LnNldERhdGFBdHRyaWJ1dGUodGhpcy5fbWVudSwgJ3BvcHBlcicsICdzdGF0aWMnKTsgLy8gdG9kbzp2NiByZW1vdmVcblxuICAgICAgICBkZWZhdWx0QnNQb3BwZXJDb25maWcubW9kaWZpZXJzID0gW3tcbiAgICAgICAgICBuYW1lOiAnYXBwbHlTdHlsZXMnLFxuICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgIH1dO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4geyAuLi5kZWZhdWx0QnNQb3BwZXJDb25maWcsXG4gICAgICAgIC4uLih0eXBlb2YgdGhpcy5fY29uZmlnLnBvcHBlckNvbmZpZyA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuX2NvbmZpZy5wb3BwZXJDb25maWcoZGVmYXVsdEJzUG9wcGVyQ29uZmlnKSA6IHRoaXMuX2NvbmZpZy5wb3BwZXJDb25maWcpXG4gICAgICB9O1xuICAgIH1cblxuICAgIF9zZWxlY3RNZW51SXRlbSh7XG4gICAgICBrZXksXG4gICAgICB0YXJnZXRcbiAgICB9KSB7XG4gICAgICBjb25zdCBpdGVtcyA9IFNlbGVjdG9yRW5naW5lX19kZWZhdWx0LmRlZmF1bHQuZmluZChTRUxFQ1RPUl9WSVNJQkxFX0lURU1TLCB0aGlzLl9tZW51KS5maWx0ZXIoZWxlbWVudCA9PiBpbmRleC5pc1Zpc2libGUoZWxlbWVudCkpO1xuXG4gICAgICBpZiAoIWl0ZW1zLmxlbmd0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIGlmIHRhcmdldCBpc24ndCBpbmNsdWRlZCBpbiBpdGVtcyAoZS5nLiB3aGVuIGV4cGFuZGluZyB0aGUgZHJvcGRvd24pXG4gICAgICAvLyBhbGxvdyBjeWNsaW5nIHRvIGdldCB0aGUgbGFzdCBpdGVtIGluIGNhc2Uga2V5IGVxdWFscyBBUlJPV19VUF9LRVlcblxuXG4gICAgICBpbmRleC5nZXROZXh0QWN0aXZlRWxlbWVudChpdGVtcywgdGFyZ2V0LCBrZXkgPT09IEFSUk9XX0RPV05fS0VZLCAhaXRlbXMuaW5jbHVkZXModGFyZ2V0KSkuZm9jdXMoKTtcbiAgICB9IC8vIFN0YXRpY1xuXG5cbiAgICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBEcm9wZG93bi5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIGNvbmZpZyk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbY29uZmlnXSgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNsZWFyTWVudXMoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC5idXR0b24gPT09IFJJR0hUX01PVVNFX0JVVFRPTiB8fCBldmVudC50eXBlID09PSAna2V5dXAnICYmIGV2ZW50LmtleSAhPT0gVEFCX0tFWSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG9wZW5Ub2dnbGVzID0gU2VsZWN0b3JFbmdpbmVfX2RlZmF1bHQuZGVmYXVsdC5maW5kKFNFTEVDVE9SX0RBVEFfVE9HR0xFX1NIT1dOKTtcblxuICAgICAgZm9yIChjb25zdCB0b2dnbGUgb2Ygb3BlblRvZ2dsZXMpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IERyb3Bkb3duLmdldEluc3RhbmNlKHRvZ2dsZSk7XG5cbiAgICAgICAgaWYgKCFjb250ZXh0IHx8IGNvbnRleHQuX2NvbmZpZy5hdXRvQ2xvc2UgPT09IGZhbHNlKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb21wb3NlZFBhdGggPSBldmVudC5jb21wb3NlZFBhdGgoKTtcbiAgICAgICAgY29uc3QgaXNNZW51VGFyZ2V0ID0gY29tcG9zZWRQYXRoLmluY2x1ZGVzKGNvbnRleHQuX21lbnUpO1xuXG4gICAgICAgIGlmIChjb21wb3NlZFBhdGguaW5jbHVkZXMoY29udGV4dC5fZWxlbWVudCkgfHwgY29udGV4dC5fY29uZmlnLmF1dG9DbG9zZSA9PT0gJ2luc2lkZScgJiYgIWlzTWVudVRhcmdldCB8fCBjb250ZXh0Ll9jb25maWcuYXV0b0Nsb3NlID09PSAnb3V0c2lkZScgJiYgaXNNZW51VGFyZ2V0KSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH0gLy8gVGFiIG5hdmlnYXRpb24gdGhyb3VnaCB0aGUgZHJvcGRvd24gbWVudSBvciBldmVudHMgZnJvbSBjb250YWluZWQgaW5wdXRzIHNob3VsZG4ndCBjbG9zZSB0aGUgbWVudVxuXG5cbiAgICAgICAgaWYgKGNvbnRleHQuX21lbnUuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJiAoZXZlbnQudHlwZSA9PT0gJ2tleXVwJyAmJiBldmVudC5rZXkgPT09IFRBQl9LRVkgfHwgL2lucHV0fHNlbGVjdHxvcHRpb258dGV4dGFyZWF8Zm9ybS9pLnRlc3QoZXZlbnQudGFyZ2V0LnRhZ05hbWUpKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVsYXRlZFRhcmdldCA9IHtcbiAgICAgICAgICByZWxhdGVkVGFyZ2V0OiBjb250ZXh0Ll9lbGVtZW50XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICdjbGljaycpIHtcbiAgICAgICAgICByZWxhdGVkVGFyZ2V0LmNsaWNrRXZlbnQgPSBldmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQuX2NvbXBsZXRlSGlkZShyZWxhdGVkVGFyZ2V0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZGF0YUFwaUtleWRvd25IYW5kbGVyKGV2ZW50KSB7XG4gICAgICAvLyBJZiBub3QgYW4gVVAgfCBET1dOIHwgRVNDQVBFIGtleSA9PiBub3QgYSBkcm9wZG93biBjb21tYW5kXG4gICAgICAvLyBJZiBpbnB1dC90ZXh0YXJlYSAmJiBpZiBrZXkgaXMgb3RoZXIgdGhhbiBFU0NBUEUgPT4gbm90IGEgZHJvcGRvd24gY29tbWFuZFxuICAgICAgY29uc3QgaXNJbnB1dCA9IC9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoZXZlbnQudGFyZ2V0LnRhZ05hbWUpO1xuICAgICAgY29uc3QgaXNFc2NhcGVFdmVudCA9IGV2ZW50LmtleSA9PT0gRVNDQVBFX0tFWTtcbiAgICAgIGNvbnN0IGlzVXBPckRvd25FdmVudCA9IFtBUlJPV19VUF9LRVksIEFSUk9XX0RPV05fS0VZXS5pbmNsdWRlcyhldmVudC5rZXkpO1xuXG4gICAgICBpZiAoIWlzVXBPckRvd25FdmVudCAmJiAhaXNFc2NhcGVFdmVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0lucHV0ICYmICFpc0VzY2FwZUV2ZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gdG9kbzogdjYgcmV2ZXJ0ICMzNzAxMSAmIGNoYW5nZSBtYXJrdXAgaHR0cHM6Ly9nZXRib290c3RyYXAuY29tL2RvY3MvNS4yL2Zvcm1zL2lucHV0LWdyb3VwL1xuXG4gICAgICBjb25zdCBnZXRUb2dnbGVCdXR0b24gPSB0aGlzLm1hdGNoZXMoU0VMRUNUT1JfREFUQV9UT0dHTEUpID8gdGhpcyA6IFNlbGVjdG9yRW5naW5lX19kZWZhdWx0LmRlZmF1bHQucHJldih0aGlzLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSlbMF0gfHwgU2VsZWN0b3JFbmdpbmVfX2RlZmF1bHQuZGVmYXVsdC5uZXh0KHRoaXMsIFNFTEVDVE9SX0RBVEFfVE9HR0xFKVswXSB8fCBTZWxlY3RvckVuZ2luZV9fZGVmYXVsdC5kZWZhdWx0LmZpbmRPbmUoU0VMRUNUT1JfREFUQV9UT0dHTEUsIGV2ZW50LmRlbGVnYXRlVGFyZ2V0LnBhcmVudE5vZGUpO1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSBEcm9wZG93bi5nZXRPckNyZWF0ZUluc3RhbmNlKGdldFRvZ2dsZUJ1dHRvbik7XG5cbiAgICAgIGlmIChpc1VwT3JEb3duRXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGluc3RhbmNlLnNob3coKTtcblxuICAgICAgICBpbnN0YW5jZS5fc2VsZWN0TWVudUl0ZW0oZXZlbnQpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGluc3RhbmNlLl9pc1Nob3duKCkpIHtcbiAgICAgICAgLy8gZWxzZSBpcyBlc2NhcGUgYW5kIHdlIGNoZWNrIGlmIGl0IGlzIHNob3duXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBpbnN0YW5jZS5oaWRlKCk7XG4gICAgICAgIGdldFRvZ2dsZUJ1dHRvbi5mb2N1cygpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG4gIC8qKlxuICAgKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICAgKi9cblxuXG4gIEV2ZW50SGFuZGxlcl9fZGVmYXVsdC5kZWZhdWx0Lm9uKGRvY3VtZW50LCBFVkVOVF9LRVlET1dOX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgRHJvcGRvd24uZGF0YUFwaUtleWRvd25IYW5kbGVyKTtcbiAgRXZlbnRIYW5kbGVyX19kZWZhdWx0LmRlZmF1bHQub24oZG9jdW1lbnQsIEVWRU5UX0tFWURPV05fREFUQV9BUEksIFNFTEVDVE9SX01FTlUsIERyb3Bkb3duLmRhdGFBcGlLZXlkb3duSGFuZGxlcik7XG4gIEV2ZW50SGFuZGxlcl9fZGVmYXVsdC5kZWZhdWx0Lm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgRHJvcGRvd24uY2xlYXJNZW51cyk7XG4gIEV2ZW50SGFuZGxlcl9fZGVmYXVsdC5kZWZhdWx0Lm9uKGRvY3VtZW50LCBFVkVOVF9LRVlVUF9EQVRBX0FQSSwgRHJvcGRvd24uY2xlYXJNZW51cyk7XG4gIEV2ZW50SGFuZGxlcl9fZGVmYXVsdC5kZWZhdWx0Lm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgRHJvcGRvd24uZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzKS50b2dnbGUoKTtcbiAgfSk7XG4gIC8qKlxuICAgKiBqUXVlcnlcbiAgICovXG5cbiAgaW5kZXguZGVmaW5lSlF1ZXJ5UGx1Z2luKERyb3Bkb3duKTtcblxuICByZXR1cm4gRHJvcGRvd247XG5cbn0pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRyb3Bkb3duLmpzLm1hcFxuIiwiLyohXG4gICogQm9vdHN0cmFwIGNvbmZpZy5qcyB2NS4yLjMgKGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS8pXG4gICogQ29weXJpZ2h0IDIwMTEtMjAyMiBUaGUgQm9vdHN0cmFwIEF1dGhvcnMgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ncmFwaHMvY29udHJpYnV0b3JzKVxuICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAqL1xuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoJy4vaW5kZXgnKSwgcmVxdWlyZSgnLi4vZG9tL21hbmlwdWxhdG9yJykpIDpcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnLi9pbmRleCcsICcuLi9kb20vbWFuaXB1bGF0b3InXSwgZmFjdG9yeSkgOlxuICAoZ2xvYmFsID0gdHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsVGhpcyA6IGdsb2JhbCB8fCBzZWxmLCBnbG9iYWwuQ29uZmlnID0gZmFjdG9yeShnbG9iYWwuSW5kZXgsIGdsb2JhbC5NYW5pcHVsYXRvcikpO1xufSkodGhpcywgKGZ1bmN0aW9uIChpbmRleCwgTWFuaXB1bGF0b3IpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gIGNvbnN0IF9pbnRlcm9wRGVmYXVsdExlZ2FjeSA9IGUgPT4gZSAmJiB0eXBlb2YgZSA9PT0gJ29iamVjdCcgJiYgJ2RlZmF1bHQnIGluIGUgPyBlIDogeyBkZWZhdWx0OiBlIH07XG5cbiAgY29uc3QgTWFuaXB1bGF0b3JfX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX2ludGVyb3BEZWZhdWx0TGVnYWN5KE1hbmlwdWxhdG9yKTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwICh2NS4yLjMpOiB1dGlsL2NvbmZpZy5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG4gIC8qKlxuICAgKiBDbGFzcyBkZWZpbml0aW9uXG4gICAqL1xuXG4gIGNsYXNzIENvbmZpZyB7XG4gICAgLy8gR2V0dGVyc1xuICAgIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignWW91IGhhdmUgdG8gaW1wbGVtZW50IHRoZSBzdGF0aWMgbWV0aG9kIFwiTkFNRVwiLCBmb3IgZWFjaCBjb21wb25lbnQhJyk7XG4gICAgfVxuXG4gICAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICAgIGNvbmZpZyA9IHRoaXMuX21lcmdlQ29uZmlnT2JqKGNvbmZpZyk7XG4gICAgICBjb25maWcgPSB0aGlzLl9jb25maWdBZnRlck1lcmdlKGNvbmZpZyk7XG5cbiAgICAgIHRoaXMuX3R5cGVDaGVja0NvbmZpZyhjb25maWcpO1xuXG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cblxuICAgIF9jb25maWdBZnRlck1lcmdlKGNvbmZpZykge1xuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG5cbiAgICBfbWVyZ2VDb25maWdPYmooY29uZmlnLCBlbGVtZW50KSB7XG4gICAgICBjb25zdCBqc29uQ29uZmlnID0gaW5kZXguaXNFbGVtZW50KGVsZW1lbnQpID8gTWFuaXB1bGF0b3JfX2RlZmF1bHQuZGVmYXVsdC5nZXREYXRhQXR0cmlidXRlKGVsZW1lbnQsICdjb25maWcnKSA6IHt9OyAvLyB0cnkgdG8gcGFyc2VcblxuICAgICAgcmV0dXJuIHsgLi4udGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0LFxuICAgICAgICAuLi4odHlwZW9mIGpzb25Db25maWcgPT09ICdvYmplY3QnID8ganNvbkNvbmZpZyA6IHt9KSxcbiAgICAgICAgLi4uKGluZGV4LmlzRWxlbWVudChlbGVtZW50KSA/IE1hbmlwdWxhdG9yX19kZWZhdWx0LmRlZmF1bHQuZ2V0RGF0YUF0dHJpYnV0ZXMoZWxlbWVudCkgOiB7fSksXG4gICAgICAgIC4uLih0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IHt9KVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBfdHlwZUNoZWNrQ29uZmlnKGNvbmZpZywgY29uZmlnVHlwZXMgPSB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRUeXBlKSB7XG4gICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIE9iamVjdC5rZXlzKGNvbmZpZ1R5cGVzKSkge1xuICAgICAgICBjb25zdCBleHBlY3RlZFR5cGVzID0gY29uZmlnVHlwZXNbcHJvcGVydHldO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGNvbmZpZ1twcm9wZXJ0eV07XG4gICAgICAgIGNvbnN0IHZhbHVlVHlwZSA9IGluZGV4LmlzRWxlbWVudCh2YWx1ZSkgPyAnZWxlbWVudCcgOiBpbmRleC50b1R5cGUodmFsdWUpO1xuXG4gICAgICAgIGlmICghbmV3IFJlZ0V4cChleHBlY3RlZFR5cGVzKS50ZXN0KHZhbHVlVHlwZSkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGAke3RoaXMuY29uc3RydWN0b3IuTkFNRS50b1VwcGVyQ2FzZSgpfTogT3B0aW9uIFwiJHtwcm9wZXJ0eX1cIiBwcm92aWRlZCB0eXBlIFwiJHt2YWx1ZVR5cGV9XCIgYnV0IGV4cGVjdGVkIHR5cGUgXCIke2V4cGVjdGVkVHlwZXN9XCIuYCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBDb25maWc7XG5cbn0pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbmZpZy5qcy5tYXBcbiIsIi8qIVxuICAqIEJvb3RzdHJhcCBpbmRleC5qcyB2NS4yLjMgKGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS8pXG4gICogQ29weXJpZ2h0IDIwMTEtMjAyMiBUaGUgQm9vdHN0cmFwIEF1dGhvcnMgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ncmFwaHMvY29udHJpYnV0b3JzKVxuICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAqL1xuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gZmFjdG9yeShleHBvcnRzKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJ2V4cG9ydHMnXSwgZmFjdG9yeSkgOlxuICAoZ2xvYmFsID0gdHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsVGhpcyA6IGdsb2JhbCB8fCBzZWxmLCBmYWN0b3J5KGdsb2JhbC5JbmRleCA9IHt9KSk7XG59KSh0aGlzLCAoZnVuY3Rpb24gKGV4cG9ydHMpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgKHY1LjIuMyk6IHV0aWwvaW5kZXguanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuICBjb25zdCBNQVhfVUlEID0gMTAwMDAwMDtcbiAgY29uc3QgTUlMTElTRUNPTkRTX01VTFRJUExJRVIgPSAxMDAwO1xuICBjb25zdCBUUkFOU0lUSU9OX0VORCA9ICd0cmFuc2l0aW9uZW5kJzsgLy8gU2hvdXQtb3V0IEFuZ3VzIENyb2xsIChodHRwczovL2dvby5nbC9weHdRR3ApXG5cbiAgY29uc3QgdG9UeXBlID0gb2JqZWN0ID0+IHtcbiAgICBpZiAob2JqZWN0ID09PSBudWxsIHx8IG9iamVjdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gYCR7b2JqZWN0fWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmplY3QpLm1hdGNoKC9cXHMoW2Etel0rKS9pKVsxXS50b0xvd2VyQ2FzZSgpO1xuICB9O1xuICAvKipcbiAgICogUHVibGljIFV0aWwgQVBJXG4gICAqL1xuXG5cbiAgY29uc3QgZ2V0VUlEID0gcHJlZml4ID0+IHtcbiAgICBkbyB7XG4gICAgICBwcmVmaXggKz0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTUFYX1VJRCk7XG4gICAgfSB3aGlsZSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJlZml4KSk7XG5cbiAgICByZXR1cm4gcHJlZml4O1xuICB9O1xuXG4gIGNvbnN0IGdldFNlbGVjdG9yID0gZWxlbWVudCA9PiB7XG4gICAgbGV0IHNlbGVjdG9yID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtdGFyZ2V0Jyk7XG5cbiAgICBpZiAoIXNlbGVjdG9yIHx8IHNlbGVjdG9yID09PSAnIycpIHtcbiAgICAgIGxldCBocmVmQXR0cmlidXRlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTsgLy8gVGhlIG9ubHkgdmFsaWQgY29udGVudCB0aGF0IGNvdWxkIGRvdWJsZSBhcyBhIHNlbGVjdG9yIGFyZSBJRHMgb3IgY2xhc3NlcyxcbiAgICAgIC8vIHNvIGV2ZXJ5dGhpbmcgc3RhcnRpbmcgd2l0aCBgI2Agb3IgYC5gLiBJZiBhIFwicmVhbFwiIFVSTCBpcyB1c2VkIGFzIHRoZSBzZWxlY3RvcixcbiAgICAgIC8vIGBkb2N1bWVudC5xdWVyeVNlbGVjdG9yYCB3aWxsIHJpZ2h0ZnVsbHkgY29tcGxhaW4gaXQgaXMgaW52YWxpZC5cbiAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzMyMjczXG5cbiAgICAgIGlmICghaHJlZkF0dHJpYnV0ZSB8fCAhaHJlZkF0dHJpYnV0ZS5pbmNsdWRlcygnIycpICYmICFocmVmQXR0cmlidXRlLnN0YXJ0c1dpdGgoJy4nKSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gLy8gSnVzdCBpbiBjYXNlIHNvbWUgQ01TIHB1dHMgb3V0IGEgZnVsbCBVUkwgd2l0aCB0aGUgYW5jaG9yIGFwcGVuZGVkXG5cblxuICAgICAgaWYgKGhyZWZBdHRyaWJ1dGUuaW5jbHVkZXMoJyMnKSAmJiAhaHJlZkF0dHJpYnV0ZS5zdGFydHNXaXRoKCcjJykpIHtcbiAgICAgICAgaHJlZkF0dHJpYnV0ZSA9IGAjJHtocmVmQXR0cmlidXRlLnNwbGl0KCcjJylbMV19YDtcbiAgICAgIH1cblxuICAgICAgc2VsZWN0b3IgPSBocmVmQXR0cmlidXRlICYmIGhyZWZBdHRyaWJ1dGUgIT09ICcjJyA/IGhyZWZBdHRyaWJ1dGUudHJpbSgpIDogbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZWN0b3I7XG4gIH07XG5cbiAgY29uc3QgZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCA9IGVsZW1lbnQgPT4ge1xuICAgIGNvbnN0IHNlbGVjdG9yID0gZ2V0U2VsZWN0b3IoZWxlbWVudCk7XG5cbiAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSA/IHNlbGVjdG9yIDogbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICBjb25zdCBnZXRFbGVtZW50RnJvbVNlbGVjdG9yID0gZWxlbWVudCA9PiB7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBnZXRTZWxlY3RvcihlbGVtZW50KTtcbiAgICByZXR1cm4gc2VsZWN0b3IgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSA6IG51bGw7XG4gIH07XG5cbiAgY29uc3QgZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQgPSBlbGVtZW50ID0+IHtcbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH0gLy8gR2V0IHRyYW5zaXRpb24tZHVyYXRpb24gb2YgdGhlIGVsZW1lbnRcblxuXG4gICAgbGV0IHtcbiAgICAgIHRyYW5zaXRpb25EdXJhdGlvbixcbiAgICAgIHRyYW5zaXRpb25EZWxheVxuICAgIH0gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbiAgICBjb25zdCBmbG9hdFRyYW5zaXRpb25EdXJhdGlvbiA9IE51bWJlci5wYXJzZUZsb2F0KHRyYW5zaXRpb25EdXJhdGlvbik7XG4gICAgY29uc3QgZmxvYXRUcmFuc2l0aW9uRGVsYXkgPSBOdW1iZXIucGFyc2VGbG9hdCh0cmFuc2l0aW9uRGVsYXkpOyAvLyBSZXR1cm4gMCBpZiBlbGVtZW50IG9yIHRyYW5zaXRpb24gZHVyYXRpb24gaXMgbm90IGZvdW5kXG5cbiAgICBpZiAoIWZsb2F0VHJhbnNpdGlvbkR1cmF0aW9uICYmICFmbG9hdFRyYW5zaXRpb25EZWxheSkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfSAvLyBJZiBtdWx0aXBsZSBkdXJhdGlvbnMgYXJlIGRlZmluZWQsIHRha2UgdGhlIGZpcnN0XG5cblxuICAgIHRyYW5zaXRpb25EdXJhdGlvbiA9IHRyYW5zaXRpb25EdXJhdGlvbi5zcGxpdCgnLCcpWzBdO1xuICAgIHRyYW5zaXRpb25EZWxheSA9IHRyYW5zaXRpb25EZWxheS5zcGxpdCgnLCcpWzBdO1xuICAgIHJldHVybiAoTnVtYmVyLnBhcnNlRmxvYXQodHJhbnNpdGlvbkR1cmF0aW9uKSArIE51bWJlci5wYXJzZUZsb2F0KHRyYW5zaXRpb25EZWxheSkpICogTUlMTElTRUNPTkRTX01VTFRJUExJRVI7XG4gIH07XG5cbiAgY29uc3QgdHJpZ2dlclRyYW5zaXRpb25FbmQgPSBlbGVtZW50ID0+IHtcbiAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFRSQU5TSVRJT05fRU5EKSk7XG4gIH07XG5cbiAgY29uc3QgaXNFbGVtZW50ID0gb2JqZWN0ID0+IHtcbiAgICBpZiAoIW9iamVjdCB8fCB0eXBlb2Ygb2JqZWN0ICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb2JqZWN0LmpxdWVyeSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIG9iamVjdCA9IG9iamVjdFswXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdC5ub2RlVHlwZSAhPT0gJ3VuZGVmaW5lZCc7XG4gIH07XG5cbiAgY29uc3QgZ2V0RWxlbWVudCA9IG9iamVjdCA9PiB7XG4gICAgLy8gaXQncyBhIGpRdWVyeSBvYmplY3Qgb3IgYSBub2RlIGVsZW1lbnRcbiAgICBpZiAoaXNFbGVtZW50KG9iamVjdCkpIHtcbiAgICAgIHJldHVybiBvYmplY3QuanF1ZXJ5ID8gb2JqZWN0WzBdIDogb2JqZWN0O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnc3RyaW5nJyAmJiBvYmplY3QubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob2JqZWN0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICBjb25zdCBpc1Zpc2libGUgPSBlbGVtZW50ID0+IHtcbiAgICBpZiAoIWlzRWxlbWVudChlbGVtZW50KSB8fCBlbGVtZW50LmdldENsaWVudFJlY3RzKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgZWxlbWVudElzVmlzaWJsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZSgndmlzaWJpbGl0eScpID09PSAndmlzaWJsZSc7IC8vIEhhbmRsZSBgZGV0YWlsc2AgZWxlbWVudCBhcyBpdHMgY29udGVudCBtYXkgZmFsc2llIGFwcGVhciB2aXNpYmxlIHdoZW4gaXQgaXMgY2xvc2VkXG5cbiAgICBjb25zdCBjbG9zZWREZXRhaWxzID0gZWxlbWVudC5jbG9zZXN0KCdkZXRhaWxzOm5vdChbb3Blbl0pJyk7XG5cbiAgICBpZiAoIWNsb3NlZERldGFpbHMpIHtcbiAgICAgIHJldHVybiBlbGVtZW50SXNWaXNpYmxlO1xuICAgIH1cblxuICAgIGlmIChjbG9zZWREZXRhaWxzICE9PSBlbGVtZW50KSB7XG4gICAgICBjb25zdCBzdW1tYXJ5ID0gZWxlbWVudC5jbG9zZXN0KCdzdW1tYXJ5Jyk7XG5cbiAgICAgIGlmIChzdW1tYXJ5ICYmIHN1bW1hcnkucGFyZW50Tm9kZSAhPT0gY2xvc2VkRGV0YWlscykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdW1tYXJ5ID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudElzVmlzaWJsZTtcbiAgfTtcblxuICBjb25zdCBpc0Rpc2FibGVkID0gZWxlbWVudCA9PiB7XG4gICAgaWYgKCFlbGVtZW50IHx8IGVsZW1lbnQubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZWxlbWVudC5kaXNhYmxlZCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiBlbGVtZW50LmRpc2FibGVkO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSAmJiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGlzYWJsZWQnKSAhPT0gJ2ZhbHNlJztcbiAgfTtcblxuICBjb25zdCBmaW5kU2hhZG93Um9vdCA9IGVsZW1lbnQgPT4ge1xuICAgIGlmICghZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmF0dGFjaFNoYWRvdykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSAvLyBDYW4gZmluZCB0aGUgc2hhZG93IHJvb3Qgb3RoZXJ3aXNlIGl0J2xsIHJldHVybiB0aGUgZG9jdW1lbnRcblxuXG4gICAgaWYgKHR5cGVvZiBlbGVtZW50LmdldFJvb3ROb2RlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zdCByb290ID0gZWxlbWVudC5nZXRSb290Tm9kZSgpO1xuICAgICAgcmV0dXJuIHJvb3QgaW5zdGFuY2VvZiBTaGFkb3dSb290ID8gcm9vdCA6IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBTaGFkb3dSb290KSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9IC8vIHdoZW4gd2UgZG9uJ3QgZmluZCBhIHNoYWRvdyByb290XG5cblxuICAgIGlmICghZWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gZmluZFNoYWRvd1Jvb3QoZWxlbWVudC5wYXJlbnROb2RlKTtcbiAgfTtcblxuICBjb25zdCBub29wID0gKCkgPT4ge307XG4gIC8qKlxuICAgKiBUcmljayB0byByZXN0YXJ0IGFuIGVsZW1lbnQncyBhbmltYXRpb25cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKiBAcmV0dXJuIHZvaWRcbiAgICpcbiAgICogQHNlZSBodHRwczovL3d3dy5jaGFyaXN0aGVvLmlvL2Jsb2cvMjAyMS8wMi9yZXN0YXJ0LWEtY3NzLWFuaW1hdGlvbi13aXRoLWphdmFzY3JpcHQvI3Jlc3RhcnRpbmctYS1jc3MtYW5pbWF0aW9uXG4gICAqL1xuXG5cbiAgY29uc3QgcmVmbG93ID0gZWxlbWVudCA9PiB7XG4gICAgZWxlbWVudC5vZmZzZXRIZWlnaHQ7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG4gIH07XG5cbiAgY29uc3QgZ2V0alF1ZXJ5ID0gKCkgPT4ge1xuICAgIGlmICh3aW5kb3cualF1ZXJ5ICYmICFkb2N1bWVudC5ib2R5Lmhhc0F0dHJpYnV0ZSgnZGF0YS1icy1uby1qcXVlcnknKSkge1xuICAgICAgcmV0dXJuIHdpbmRvdy5qUXVlcnk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgY29uc3QgRE9NQ29udGVudExvYWRlZENhbGxiYWNrcyA9IFtdO1xuXG4gIGNvbnN0IG9uRE9NQ29udGVudExvYWRlZCA9IGNhbGxiYWNrID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRpbmcnKSB7XG4gICAgICAvLyBhZGQgbGlzdGVuZXIgb24gdGhlIGZpcnN0IGNhbGwgd2hlbiB0aGUgZG9jdW1lbnQgaXMgaW4gbG9hZGluZyBzdGF0ZVxuICAgICAgaWYgKCFET01Db250ZW50TG9hZGVkQ2FsbGJhY2tzLmxlbmd0aCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICAgIGZvciAoY29uc3QgY2FsbGJhY2sgb2YgRE9NQ29udGVudExvYWRlZENhbGxiYWNrcykge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBET01Db250ZW50TG9hZGVkQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBpc1JUTCA9ICgpID0+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kaXIgPT09ICdydGwnO1xuXG4gIGNvbnN0IGRlZmluZUpRdWVyeVBsdWdpbiA9IHBsdWdpbiA9PiB7XG4gICAgb25ET01Db250ZW50TG9hZGVkKCgpID0+IHtcbiAgICAgIGNvbnN0ICQgPSBnZXRqUXVlcnkoKTtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuXG4gICAgICBpZiAoJCkge1xuICAgICAgICBjb25zdCBuYW1lID0gcGx1Z2luLk5BTUU7XG4gICAgICAgIGNvbnN0IEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bbmFtZV07XG4gICAgICAgICQuZm5bbmFtZV0gPSBwbHVnaW4ualF1ZXJ5SW50ZXJmYWNlO1xuICAgICAgICAkLmZuW25hbWVdLkNvbnN0cnVjdG9yID0gcGx1Z2luO1xuXG4gICAgICAgICQuZm5bbmFtZV0ubm9Db25mbGljdCA9ICgpID0+IHtcbiAgICAgICAgICAkLmZuW25hbWVdID0gSlFVRVJZX05PX0NPTkZMSUNUO1xuICAgICAgICAgIHJldHVybiBwbHVnaW4ualF1ZXJ5SW50ZXJmYWNlO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGV4ZWN1dGUgPSBjYWxsYmFjayA9PiB7XG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2FsbGJhY2soKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZXhlY3V0ZUFmdGVyVHJhbnNpdGlvbiA9IChjYWxsYmFjaywgdHJhbnNpdGlvbkVsZW1lbnQsIHdhaXRGb3JUcmFuc2l0aW9uID0gdHJ1ZSkgPT4ge1xuICAgIGlmICghd2FpdEZvclRyYW5zaXRpb24pIHtcbiAgICAgIGV4ZWN1dGUoY2FsbGJhY2spO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGR1cmF0aW9uUGFkZGluZyA9IDU7XG4gICAgY29uc3QgZW11bGF0ZWREdXJhdGlvbiA9IGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRyYW5zaXRpb25FbGVtZW50KSArIGR1cmF0aW9uUGFkZGluZztcbiAgICBsZXQgY2FsbGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBoYW5kbGVyID0gKHtcbiAgICAgIHRhcmdldFxuICAgIH0pID0+IHtcbiAgICAgIGlmICh0YXJnZXQgIT09IHRyYW5zaXRpb25FbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY2FsbGVkID0gdHJ1ZTtcbiAgICAgIHRyYW5zaXRpb25FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoVFJBTlNJVElPTl9FTkQsIGhhbmRsZXIpO1xuICAgICAgZXhlY3V0ZShjYWxsYmFjayk7XG4gICAgfTtcblxuICAgIHRyYW5zaXRpb25FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoVFJBTlNJVElPTl9FTkQsIGhhbmRsZXIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgICAgdHJpZ2dlclRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkVsZW1lbnQpO1xuICAgICAgfVxuICAgIH0sIGVtdWxhdGVkRHVyYXRpb24pO1xuICB9O1xuICAvKipcbiAgICogUmV0dXJuIHRoZSBwcmV2aW91cy9uZXh0IGVsZW1lbnQgb2YgYSBsaXN0LlxuICAgKlxuICAgKiBAcGFyYW0ge2FycmF5fSBsaXN0ICAgIFRoZSBsaXN0IG9mIGVsZW1lbnRzXG4gICAqIEBwYXJhbSBhY3RpdmVFbGVtZW50ICAgVGhlIGFjdGl2ZSBlbGVtZW50XG4gICAqIEBwYXJhbSBzaG91bGRHZXROZXh0ICAgQ2hvb3NlIHRvIGdldCBuZXh0IG9yIHByZXZpb3VzIGVsZW1lbnRcbiAgICogQHBhcmFtIGlzQ3ljbGVBbGxvd2VkXG4gICAqIEByZXR1cm4ge0VsZW1lbnR8ZWxlbX0gVGhlIHByb3BlciBlbGVtZW50XG4gICAqL1xuXG5cbiAgY29uc3QgZ2V0TmV4dEFjdGl2ZUVsZW1lbnQgPSAobGlzdCwgYWN0aXZlRWxlbWVudCwgc2hvdWxkR2V0TmV4dCwgaXNDeWNsZUFsbG93ZWQpID0+IHtcbiAgICBjb25zdCBsaXN0TGVuZ3RoID0gbGlzdC5sZW5ndGg7XG4gICAgbGV0IGluZGV4ID0gbGlzdC5pbmRleE9mKGFjdGl2ZUVsZW1lbnQpOyAvLyBpZiB0aGUgZWxlbWVudCBkb2VzIG5vdCBleGlzdCBpbiB0aGUgbGlzdCByZXR1cm4gYW4gZWxlbWVudFxuICAgIC8vIGRlcGVuZGluZyBvbiB0aGUgZGlyZWN0aW9uIGFuZCBpZiBjeWNsZSBpcyBhbGxvd2VkXG5cbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm4gIXNob3VsZEdldE5leHQgJiYgaXNDeWNsZUFsbG93ZWQgPyBsaXN0W2xpc3RMZW5ndGggLSAxXSA6IGxpc3RbMF07XG4gICAgfVxuXG4gICAgaW5kZXggKz0gc2hvdWxkR2V0TmV4dCA/IDEgOiAtMTtcblxuICAgIGlmIChpc0N5Y2xlQWxsb3dlZCkge1xuICAgICAgaW5kZXggPSAoaW5kZXggKyBsaXN0TGVuZ3RoKSAlIGxpc3RMZW5ndGg7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpc3RbTWF0aC5tYXgoMCwgTWF0aC5taW4oaW5kZXgsIGxpc3RMZW5ndGggLSAxKSldO1xuICB9O1xuXG4gIGV4cG9ydHMuZGVmaW5lSlF1ZXJ5UGx1Z2luID0gZGVmaW5lSlF1ZXJ5UGx1Z2luO1xuICBleHBvcnRzLmV4ZWN1dGUgPSBleGVjdXRlO1xuICBleHBvcnRzLmV4ZWN1dGVBZnRlclRyYW5zaXRpb24gPSBleGVjdXRlQWZ0ZXJUcmFuc2l0aW9uO1xuICBleHBvcnRzLmZpbmRTaGFkb3dSb290ID0gZmluZFNoYWRvd1Jvb3Q7XG4gIGV4cG9ydHMuZ2V0RWxlbWVudCA9IGdldEVsZW1lbnQ7XG4gIGV4cG9ydHMuZ2V0RWxlbWVudEZyb21TZWxlY3RvciA9IGdldEVsZW1lbnRGcm9tU2VsZWN0b3I7XG4gIGV4cG9ydHMuZ2V0TmV4dEFjdGl2ZUVsZW1lbnQgPSBnZXROZXh0QWN0aXZlRWxlbWVudDtcbiAgZXhwb3J0cy5nZXRTZWxlY3RvckZyb21FbGVtZW50ID0gZ2V0U2VsZWN0b3JGcm9tRWxlbWVudDtcbiAgZXhwb3J0cy5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCA9IGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50O1xuICBleHBvcnRzLmdldFVJRCA9IGdldFVJRDtcbiAgZXhwb3J0cy5nZXRqUXVlcnkgPSBnZXRqUXVlcnk7XG4gIGV4cG9ydHMuaXNEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIGV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuICBleHBvcnRzLmlzUlRMID0gaXNSVEw7XG4gIGV4cG9ydHMuaXNWaXNpYmxlID0gaXNWaXNpYmxlO1xuICBleHBvcnRzLm5vb3AgPSBub29wO1xuICBleHBvcnRzLm9uRE9NQ29udGVudExvYWRlZCA9IG9uRE9NQ29udGVudExvYWRlZDtcbiAgZXhwb3J0cy5yZWZsb3cgPSByZWZsb3c7XG4gIGV4cG9ydHMudG9UeXBlID0gdG9UeXBlO1xuICBleHBvcnRzLnRyaWdnZXJUcmFuc2l0aW9uRW5kID0gdHJpZ2dlclRyYW5zaXRpb25FbmQ7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZXhwb3J0cywgeyBfX2VzTW9kdWxlOiB7IHZhbHVlOiB0cnVlIH0sIFtTeW1ib2wudG9TdHJpbmdUYWddOiB7IHZhbHVlOiAnTW9kdWxlJyB9IH0pO1xuXG59KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcbiIsIi8qIVxuICAqIEJvb3RzdHJhcCBzd2lwZS5qcyB2NS4yLjMgKGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS8pXG4gICogQ29weXJpZ2h0IDIwMTEtMjAyMiBUaGUgQm9vdHN0cmFwIEF1dGhvcnMgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ncmFwaHMvY29udHJpYnV0b3JzKVxuICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAqL1xuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoJy4vY29uZmlnJyksIHJlcXVpcmUoJy4uL2RvbS9ldmVudC1oYW5kbGVyJyksIHJlcXVpcmUoJy4vaW5kZXgnKSkgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWycuL2NvbmZpZycsICcuLi9kb20vZXZlbnQtaGFuZGxlcicsICcuL2luZGV4J10sIGZhY3RvcnkpIDpcbiAgKGdsb2JhbCA9IHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbFRoaXMgOiBnbG9iYWwgfHwgc2VsZiwgZ2xvYmFsLlN3aXBlID0gZmFjdG9yeShnbG9iYWwuQ29uZmlnLCBnbG9iYWwuRXZlbnRIYW5kbGVyLCBnbG9iYWwuSW5kZXgpKTtcbn0pKHRoaXMsIChmdW5jdGlvbiAoQ29uZmlnLCBFdmVudEhhbmRsZXIsIGluZGV4KSB7ICd1c2Ugc3RyaWN0JztcblxuICBjb25zdCBfaW50ZXJvcERlZmF1bHRMZWdhY3kgPSBlID0+IGUgJiYgdHlwZW9mIGUgPT09ICdvYmplY3QnICYmICdkZWZhdWx0JyBpbiBlID8gZSA6IHsgZGVmYXVsdDogZSB9O1xuXG4gIGNvbnN0IENvbmZpZ19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9faW50ZXJvcERlZmF1bHRMZWdhY3koQ29uZmlnKTtcbiAgY29uc3QgRXZlbnRIYW5kbGVyX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19pbnRlcm9wRGVmYXVsdExlZ2FjeShFdmVudEhhbmRsZXIpO1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgKHY1LjIuMyk6IHV0aWwvc3dpcGUuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqL1xuXG4gIGNvbnN0IE5BTUUgPSAnc3dpcGUnO1xuICBjb25zdCBFVkVOVF9LRVkgPSAnLmJzLnN3aXBlJztcbiAgY29uc3QgRVZFTlRfVE9VQ0hTVEFSVCA9IGB0b3VjaHN0YXJ0JHtFVkVOVF9LRVl9YDtcbiAgY29uc3QgRVZFTlRfVE9VQ0hNT1ZFID0gYHRvdWNobW92ZSR7RVZFTlRfS0VZfWA7XG4gIGNvbnN0IEVWRU5UX1RPVUNIRU5EID0gYHRvdWNoZW5kJHtFVkVOVF9LRVl9YDtcbiAgY29uc3QgRVZFTlRfUE9JTlRFUkRPV04gPSBgcG9pbnRlcmRvd24ke0VWRU5UX0tFWX1gO1xuICBjb25zdCBFVkVOVF9QT0lOVEVSVVAgPSBgcG9pbnRlcnVwJHtFVkVOVF9LRVl9YDtcbiAgY29uc3QgUE9JTlRFUl9UWVBFX1RPVUNIID0gJ3RvdWNoJztcbiAgY29uc3QgUE9JTlRFUl9UWVBFX1BFTiA9ICdwZW4nO1xuICBjb25zdCBDTEFTU19OQU1FX1BPSU5URVJfRVZFTlQgPSAncG9pbnRlci1ldmVudCc7XG4gIGNvbnN0IFNXSVBFX1RIUkVTSE9MRCA9IDQwO1xuICBjb25zdCBEZWZhdWx0ID0ge1xuICAgIGVuZENhbGxiYWNrOiBudWxsLFxuICAgIGxlZnRDYWxsYmFjazogbnVsbCxcbiAgICByaWdodENhbGxiYWNrOiBudWxsXG4gIH07XG4gIGNvbnN0IERlZmF1bHRUeXBlID0ge1xuICAgIGVuZENhbGxiYWNrOiAnKGZ1bmN0aW9ufG51bGwpJyxcbiAgICBsZWZ0Q2FsbGJhY2s6ICcoZnVuY3Rpb258bnVsbCknLFxuICAgIHJpZ2h0Q2FsbGJhY2s6ICcoZnVuY3Rpb258bnVsbCknXG4gIH07XG4gIC8qKlxuICAgKiBDbGFzcyBkZWZpbml0aW9uXG4gICAqL1xuXG4gIGNsYXNzIFN3aXBlIGV4dGVuZHMgQ29uZmlnX19kZWZhdWx0LmRlZmF1bHQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgICBpZiAoIWVsZW1lbnQgfHwgIVN3aXBlLmlzU3VwcG9ydGVkKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKTtcbiAgICAgIHRoaXMuX2RlbHRhWCA9IDA7XG4gICAgICB0aGlzLl9zdXBwb3J0UG9pbnRlckV2ZW50cyA9IEJvb2xlYW4od2luZG93LlBvaW50ZXJFdmVudCk7XG5cbiAgICAgIHRoaXMuX2luaXRFdmVudHMoKTtcbiAgICB9IC8vIEdldHRlcnNcblxuXG4gICAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgICAgcmV0dXJuIERlZmF1bHQ7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0VHlwZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgICByZXR1cm4gTkFNRTtcbiAgICB9IC8vIFB1YmxpY1xuXG5cbiAgICBkaXNwb3NlKCkge1xuICAgICAgRXZlbnRIYW5kbGVyX19kZWZhdWx0LmRlZmF1bHQub2ZmKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0tFWSk7XG4gICAgfSAvLyBQcml2YXRlXG5cblxuICAgIF9zdGFydChldmVudCkge1xuICAgICAgaWYgKCF0aGlzLl9zdXBwb3J0UG9pbnRlckV2ZW50cykge1xuICAgICAgICB0aGlzLl9kZWx0YVggPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2V2ZW50SXNQb2ludGVyUGVuVG91Y2goZXZlbnQpKSB7XG4gICAgICAgIHRoaXMuX2RlbHRhWCA9IGV2ZW50LmNsaWVudFg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgX2VuZChldmVudCkge1xuICAgICAgaWYgKHRoaXMuX2V2ZW50SXNQb2ludGVyUGVuVG91Y2goZXZlbnQpKSB7XG4gICAgICAgIHRoaXMuX2RlbHRhWCA9IGV2ZW50LmNsaWVudFggLSB0aGlzLl9kZWx0YVg7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2hhbmRsZVN3aXBlKCk7XG5cbiAgICAgIGluZGV4LmV4ZWN1dGUodGhpcy5fY29uZmlnLmVuZENhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBfbW92ZShldmVudCkge1xuICAgICAgdGhpcy5fZGVsdGFYID0gZXZlbnQudG91Y2hlcyAmJiBldmVudC50b3VjaGVzLmxlbmd0aCA+IDEgPyAwIDogZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIC0gdGhpcy5fZGVsdGFYO1xuICAgIH1cblxuICAgIF9oYW5kbGVTd2lwZSgpIHtcbiAgICAgIGNvbnN0IGFic0RlbHRhWCA9IE1hdGguYWJzKHRoaXMuX2RlbHRhWCk7XG5cbiAgICAgIGlmIChhYnNEZWx0YVggPD0gU1dJUEVfVEhSRVNIT0xEKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGlyZWN0aW9uID0gYWJzRGVsdGFYIC8gdGhpcy5fZGVsdGFYO1xuICAgICAgdGhpcy5fZGVsdGFYID0gMDtcblxuICAgICAgaWYgKCFkaXJlY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpbmRleC5leGVjdXRlKGRpcmVjdGlvbiA+IDAgPyB0aGlzLl9jb25maWcucmlnaHRDYWxsYmFjayA6IHRoaXMuX2NvbmZpZy5sZWZ0Q2FsbGJhY2spO1xuICAgIH1cblxuICAgIF9pbml0RXZlbnRzKCkge1xuICAgICAgaWYgKHRoaXMuX3N1cHBvcnRQb2ludGVyRXZlbnRzKSB7XG4gICAgICAgIEV2ZW50SGFuZGxlcl9fZGVmYXVsdC5kZWZhdWx0Lm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1BPSU5URVJET1dOLCBldmVudCA9PiB0aGlzLl9zdGFydChldmVudCkpO1xuICAgICAgICBFdmVudEhhbmRsZXJfX2RlZmF1bHQuZGVmYXVsdC5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9QT0lOVEVSVVAsIGV2ZW50ID0+IHRoaXMuX2VuZChldmVudCkpO1xuXG4gICAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1BPSU5URVJfRVZFTlQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgRXZlbnRIYW5kbGVyX19kZWZhdWx0LmRlZmF1bHQub24odGhpcy5fZWxlbWVudCwgRVZFTlRfVE9VQ0hTVEFSVCwgZXZlbnQgPT4gdGhpcy5fc3RhcnQoZXZlbnQpKTtcbiAgICAgICAgRXZlbnRIYW5kbGVyX19kZWZhdWx0LmRlZmF1bHQub24odGhpcy5fZWxlbWVudCwgRVZFTlRfVE9VQ0hNT1ZFLCBldmVudCA9PiB0aGlzLl9tb3ZlKGV2ZW50KSk7XG4gICAgICAgIEV2ZW50SGFuZGxlcl9fZGVmYXVsdC5kZWZhdWx0Lm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1RPVUNIRU5ELCBldmVudCA9PiB0aGlzLl9lbmQoZXZlbnQpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfZXZlbnRJc1BvaW50ZXJQZW5Ub3VjaChldmVudCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3N1cHBvcnRQb2ludGVyRXZlbnRzICYmIChldmVudC5wb2ludGVyVHlwZSA9PT0gUE9JTlRFUl9UWVBFX1BFTiB8fCBldmVudC5wb2ludGVyVHlwZSA9PT0gUE9JTlRFUl9UWVBFX1RPVUNIKTtcbiAgICB9IC8vIFN0YXRpY1xuXG5cbiAgICBzdGF0aWMgaXNTdXBwb3J0ZWQoKSB7XG4gICAgICByZXR1cm4gJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IHx8IG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+IDA7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gU3dpcGU7XG5cbn0pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN3aXBlLmpzLm1hcFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9