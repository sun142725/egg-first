(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[54],{"1Gbu":function(t,e,n){!function(e,i){t.exports=i(n("q1tI"))}(0,(function(t){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=4)}([function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){var n={};for(var i in t)0>e.indexOf(i)&&Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);return n}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function l(t,e){if(t.onChange!==e.onChange)return!0;for(var n=0;m.length>n;n+=1){var i=m[n];if(!window.G2.Util.isEqual(t[i],e[i]))return!0}return!1}var c=Object.assign||function(t){for(var e=1;arguments.length>e;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},h=function(){function t(t,e){for(var n=0;e.length>n;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),u=n(2),d=i(u),f=n(1),p=i(f),g=n(3),v=i(g),m=["width","height","padding","xAis","yAxis","start","end","fillerStyle","backgroundStyle","scales","textStyle","handleStyle","backgroundChart"],y=function(t){function e(){a(this,e);var t=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.refHandle=function(e){t.container||(t.container=e)},t.reBuild=!1,t}return s(e,t),h(e,[{key:"componentDidMount",value:function(){this.createG2Instance().render()}},{key:"componentWillReceiveProps",value:function(t){var e=this.props,n=e.data,i=r(e,["data"]),a=t.data,o=r(t,["data"]);n!==a&&(this.slider.changeData(a),this.slider.repaint()),l(i,o)&&(this.reBuild=!0)}},{key:"componentDidUpdate",value:function(){this.reBuild&&(this.slider.destroy(),this.createG2Instance().render(),this.reBuild=!1)}},{key:"componentWillUnmount",value:function(){this.slider.destroy()}},{key:"createG2Instance",value:function(){return this.slider=new d.default(c({container:this.container},this.props))}},{key:"render",value:function(){return p.default.createElement("div",{ref:this.refHandle})}}]),e}(f.Component);e.default=function(t){function e(){return a(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return s(e,t),h(e,[{key:"render",value:function(){return p.default.createElement(v.default,null,p.default.createElement(y,this.props))}}]),e}(f.Component),t.exports=e.default},function(e,n){e.exports=t},function(t,e,n){!function(e,n){t.exports=n()}(0,(function(){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){var i=n(1);window&&!window.G2&&console.err("Please load the G2 script first!"),t.exports=i},function(t,e,n){var i=n(2),r=window&&window.G2,a=r.Chart,o=r.Util,s=r.G,l=r.Global,c=s.Canvas,h=o.DomUtil,u=function(t){return"number"==typeof t};t.exports=function(){function t(t){this._initProps(),o.deepMix(this,t);var e=this.container;if(!e)throw Error("Please specify the container for the Slider!");this.domContainer=o.isString(e)?document.getElementById(e):e,this.handleStyle=o.mix({width:this.height,height:this.height},this.handleStyle),"auto"===this.width&&window.addEventListener("resize",o.wrapBehavior(this,"_initForceFitEvent"))}var e=t.prototype;return e._initProps=function(){this.height=26,this.width="auto",this.padding=l.plotCfg.padding,this.container=null,this.xAxis=null,this.yAxis=null,this.fillerStyle={fill:"#BDCCED",fillOpacity:.3},this.backgroundStyle={stroke:"#CCD6EC",fill:"#CCD6EC",fillOpacity:.3,lineWidth:1},this.range=[0,100],this.layout="horizontal",this.textStyle={fill:"#545454"},this.handleStyle={img:"https://gw.alipayobjects.com/zos/rmsportal/QXtfhORGlDuRvLXFzpsQ.png",width:5},this.backgroundChart={type:["area"],color:"#CCD6EC"}},e._initForceFitEvent=function(){var t=setTimeout(o.wrapBehavior(this,"forceFit"),200);clearTimeout(this.resizeTimer),this.resizeTimer=t},e.forceFit=function(){if(this&&!this.destroyed){var t=h.getWidth(this.domContainer),e=this.height;if(t!==this.domWidth){var n=this.canvas;n.changeSize(t,e),this.bgChart&&this.bgChart.changeWidth(t),n.clear(),this._initWidth(),this._initSlider(),this._bindEvent(),n.draw()}}},e._initWidth=function(){var t;t="auto"===this.width?h.getWidth(this.domContainer):this.width,this.domWidth=t;var e=o.toAllPadding(this.padding);"horizontal"===this.layout?(this.plotWidth=t-e[1]-e[3],this.plotPadding=e[3],this.plotHeight=this.height):"vertical"===this.layout&&(this.plotWidth=this.width,this.plotHeight=this.height-e[0]-e[2],this.plotPadding=e[0])},e.render=function(){this._initWidth(),this._initCanvas(),this._initBackground(),this._initSlider(),this._bindEvent(),this.canvas.draw()},e.changeData=function(t){this.data=t,this.repaint()},e.destroy=function(){clearTimeout(this.resizeTimer),this.rangeElement.off("sliderchange"),this.bgChart&&this.bgChart.destroy(),this.canvas.destroy();for(var t=this.domContainer;t.hasChildNodes();)t.removeChild(t.firstChild);window.removeEventListener("resize",o.getWrapBehavior(this,"_initForceFitEvent")),this.destroyed=!0},e.clear=function(){this.canvas.clear(),this.bgChart&&this.bgChart.destroy(),this.bgChart=null,this.scale=null,this.canvas.draw()},e.repaint=function(){this.clear(),this.render()},e._initCanvas=function(){var t=this.domWidth,e=this.height,n=new c({width:t,height:e,containerDOM:this.domContainer,capture:!1}),i=n.get("el");i.style.position="absolute",i.style.top=0,i.style.left=0,i.style.zIndex=3,this.canvas=n},e._initBackground=function(){var t,e=this.data,n=this.xAxis,i=this.yAxis,r=o.deepMix((t={},t[""+n]={range:[0,1]},t),this.scales);if(!e)throw Error("Please specify the data!");if(!n)throw Error("Please specify the xAxis!");if(!i)throw Error("Please specify the yAxis!");var s=this.backgroundChart,l=s.type,c=s.color;o.isArray(l)||(l=[l]);var h=o.toAllPadding(this.padding),u=new a({container:this.container,width:this.domWidth,height:this.height,padding:[0,h[1],0,h[3]],animate:!1});u.source(e),u.scale(r),u.axis(!1),u.tooltip(!1),u.legend(!1),o.each(l,(function(t){u[t]().position(n+"*"+i).color(c).opacity(1)})),u.render(),this.bgChart=u,this.scale="horizontal"===this.layout?u.getXScale():u.getYScales()[0],"vertical"===this.layout&&u.destroy()},e._initRange=function(){var t=this.startRadio,e=this.endRadio,n=this.start,i=this.end,r=this.scale,a=0,o=1;u(t)?a=t:n&&(a=r.scale(r.translate(n))),u(e)?o=e:i&&(o=r.scale(r.translate(i)));var s=this.minSpan,l=this.maxSpan,c=0;if("time"===r.type||"timeCat"===r.type){var h=r.values;c=h[h.length-1]-h[0]}else r.isLinear&&(c=r.max-r.min);c&&s&&(this.minRange=s/c*100),c&&l&&(this.maxRange=l/c*100);var d=[100*a,100*o];return this.range=d,d},e._getHandleValue=function(t){var e=this.range,n=e[0]/100,i=e[1]/100,r=this.scale;return"min"===t?this.start?this.start:r.invert(n):this.end?this.end:r.invert(i)},e._initSlider=function(){var t=this.canvas,e=this._initRange(),n=this.scale,r=t.addGroup(i,{middleAttr:this.fillerStyle,range:e,minRange:this.minRange,maxRange:this.maxRange,layout:this.layout,width:this.plotWidth,height:this.plotHeight,backgroundStyle:this.backgroundStyle,textStyle:this.textStyle,handleStyle:this.handleStyle,minText:n.getText(this._getHandleValue("min")),maxText:n.getText(this._getHandleValue("max"))});"horizontal"===this.layout?r.translate(this.plotPadding,0):"vertical"===this.layout&&r.translate(0,this.plotPadding),this.rangeElement=r},e._bindEvent=function(){var t=this;t.rangeElement.on("sliderchange",(function(e){var n=e.range;t._updateElement(n[0]/100,n[1]/100)}))},e._updateElement=function(t,e){var n=this.scale,i=this.rangeElement,r=i.get("minTextElement"),a=i.get("maxTextElement"),o=n.invert(t),s=n.invert(e),l=n.getText(o),c=n.getText(s);r.attr("text",l),a.attr("text",c),this.start=l,this.end=c,this.onChange&&this.onChange({startText:l,endText:c,startValue:o,endValue:s,startRadio:t,endRadio:e})},t}()},function(t,e){function n(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var i=window&&window.G2,r=i.Util,a=i.G,o=a.Group,s=r.DomUtil;t.exports=function(t){function e(){return t.apply(this,arguments)||this}n(e,t);var i=e.prototype;return i.getDefaultCfg=function(){return{range:null,middleAttr:null,backgroundElement:null,minHandleElement:null,maxHandleElement:null,middleHandleElement:null,currentTarget:null,layout:"vertical",width:null,height:null,pageX:null,pageY:null}},i._initHandle=function(t){var e,n,i,a=this.addGroup(),o=this.get("layout"),s=this.get("handleStyle"),l=s.img,c=s.width,h=s.height;if("horizontal"===o){var u=s.width;i="ew-resize",n=a.addShape("Image",{attrs:{x:-u/2,y:0,width:u,height:h,img:l,cursor:i}}),e=a.addShape("Text",{attrs:r.mix({x:"min"===t?-(u/2+5):u/2+5,y:h/2,textAlign:"min"===t?"end":"start",textBaseline:"middle",text:this.get("min"===t?"minText":"maxText"),cursor:i},this.get("textStyle"))})}else i="ns-resize",n=a.addShape("Image",{attrs:{x:0,y:-h/2,width:c,height:h,img:l,cursor:i}}),e=a.addShape("Text",{attrs:r.mix({x:c/2,y:"min"===t?h/2+5:-(h/2+5),textAlign:"center",textBaseline:"middle",text:this.get("min"===t?"minText":"maxText"),cursor:i},this.get("textStyle"))});return this.set(t+"TextElement",e),this.set(t+"IconElement",n),a},i._initSliderBackground=function(){var t=this.addGroup();return t.initTransform(),t.translate(0,0),t.addShape("Rect",{attrs:r.mix({x:0,y:0,width:this.get("width"),height:this.get("height")},this.get("backgroundStyle"))}),t},i._beforeRenderUI=function(){var t=this._initSliderBackground(),e=this._initHandle("min"),n=this._initHandle("max"),i=this.addShape("rect",{attrs:this.get("middleAttr")});this.set("middleHandleElement",i),this.set("minHandleElement",e),this.set("maxHandleElement",n),this.set("backgroundElement",t),t.set("zIndex",0),i.set("zIndex",1),e.set("zIndex",2),n.set("zIndex",2),i.attr("cursor","move"),this.sort()},i._renderUI=function(){"horizontal"===this.get("layout")?this._renderHorizontal():this._renderVertical()},i._transform=function(t){var e=this.get("range"),n=e[0]/100,i=e[1]/100,r=this.get("width"),a=this.get("height"),o=this.get("minHandleElement"),s=this.get("maxHandleElement"),l=this.get("middleHandleElement");o.resetMatrix?(o.resetMatrix(),s.resetMatrix()):(o.initTransform(),s.initTransform()),"horizontal"===t?(l.attr({x:r*n,y:0,width:(i-n)*r,height:a}),o.translate(n*r,0),s.translate(i*r,0)):(l.attr({x:0,y:a*(1-i),width:r,height:(i-n)*a}),o.translate(0,(1-n)*a),s.translate(0,(1-i)*a))},i._renderHorizontal=function(){this._transform("horizontal")},i._renderVertical=function(){this._transform("vertical")},i._bindUI=function(){this.on("mousedown",r.wrapBehavior(this,"_onMouseDown"))},i._isElement=function(t,e){var n=this.get(e);return t===n||!!n.isGroup&&n.get("children").indexOf(t)>-1},i._getRange=function(t,e){var n=t+e;return n=n>100?100:n,0>n?0:n},i._limitRange=function(t,e,n){n[0]=this._getRange(t,n[0]),(n[1]=n[0]+e)>100&&(n[1]=100,n[0]=n[1]-e)},i._updateStatus=function(t,e){var n=this.get("x"===t?"width":"height");t=r.upperFirst(t);var i,a=this.get("range"),o=this.get("page"+t),s=this.get("currentTarget"),l=this.get("rangeStash"),c=this.get("layout"),h="vertical"===c?-1:1,u=e["page"+t],d=u-o,f=d/n*100*h,p=this.get("minRange"),g=this.get("maxRange");a[1]>a[0]?(this._isElement(s,"minHandleElement")&&(a[0]=this._getRange(f,a[0]),p&&(a[1]-a[0]>p||this._limitRange(f,p,a)),g&&(g>a[1]-a[0]||this._limitRange(f,g,a))),this._isElement(s,"maxHandleElement")&&(a[1]=this._getRange(f,a[1]),p&&(a[1]-a[0]>p||this._limitRange(f,p,a)),g&&(g>a[1]-a[0]||this._limitRange(f,g,a)))):(this._isElement(s,"minHandleElement")||this._isElement(s,"maxHandleElement"))&&(a[0]=this._getRange(f,a[0]),a[1]=this._getRange(f,a[0])),this._isElement(s,"middleHandleElement")&&(i=l[1]-l[0],this._limitRange(f,i,a)),this.emit("sliderchange",{range:a}),this.set("page"+t,u),this._renderUI(),this.get("canvas").draw()},i._onMouseDown=function(t){var e=t.currentTarget,n=t.event,i=this.get("range");n.stopPropagation(),n.preventDefault(),this.set("pageX",n.pageX),this.set("pageY",n.pageY),this.set("currentTarget",e),this.set("rangeStash",[i[0],i[1]]),this._bindCanvasEvents()},i._bindCanvasEvents=function(){var t=this.get("canvas").get("containerDOM");this.onMouseMoveListener=s.addEventListener(t,"mousemove",r.wrapBehavior(this,"_onCanvasMouseMove")),this.onMouseUpListener=s.addEventListener(t,"mouseup",r.wrapBehavior(this,"_onCanvasMouseUp")),this.onMouseLeaveListener=s.addEventListener(t,"mouseleave",r.wrapBehavior(this,"_onCanvasMouseUp"))},i._onCanvasMouseMove=function(t){"horizontal"===this.get("layout")?this._updateStatus("x",t):this._updateStatus("y",t)},i._onCanvasMouseUp=function(){this._removeDocumentEvents()},i._removeDocumentEvents=function(){this.onMouseMoveListener.remove(),this.onMouseUpListener.remove(),this.onMouseLeaveListener.remove()},e}(o)}])}))},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;e.length>n;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),s=n(1),l=function(t){return t&&t.__esModule?t:{default:t}}(s);e.default=function(t){function e(t){i(this,e);var n=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.state={hasError:!1},n}return a(e,t),o(e,[{key:"componentDidCatch",value:function(t,e){this.setState({hasError:!0})}},{key:"unstable_handleError",value:function(t,e){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?l.default.createElement("h1",null,"Slider error."):this.props.children}}]),e}(l.default.Component)},function(t,e,n){n(0),t.exports=n(0)}])}))},"7Kak":function(t,e,n){"use strict";n("cIOH"),n("KPFz")},"9yH6":function(t,e,n){"use strict";var i=n("rePB"),r=n("wx14"),a=n("q1tI"),o=n("x1Ya"),s=n("TSYQ"),l=n.n(s),c=n("c+Xe"),h=n("H84U"),u=a["createContext"](null),d=u.Provider,f=u,p=n("uaoM"),g=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]])}return n},v=function(t,e){var n,s=a["useContext"](f),u=a["useContext"](h["b"]),d=u.getPrefixCls,v=u.direction,m=a["useRef"](),y=Object(c["a"])(e,m);a["useEffect"]((function(){Object(p["a"])(!("optionType"in t),"Radio","`optionType` is only support in Radio.Group.")}),[]);var b=function(e){t.onChange&&t.onChange(e),(null===s||void 0===s?void 0:s.onChange)&&s.onChange(e)},x=t.prefixCls,_=t.className,w=t.children,C=t.style,E=g(t,["prefixCls","className","children","style"]),O=d("radio",x),k=Object(r["a"])({},E);s&&(k.name=s.name,k.onChange=b,k.checked=t.value===s.value,k.disabled=t.disabled||s.disabled);var S=l()("".concat(O,"-wrapper"),(n={},Object(i["a"])(n,"".concat(O,"-wrapper-checked"),k.checked),Object(i["a"])(n,"".concat(O,"-wrapper-disabled"),k.disabled),Object(i["a"])(n,"".concat(O,"-wrapper-rtl"),"rtl"===v),n),_);return a["createElement"]("label",{className:S,style:C,onMouseEnter:t.onMouseEnter,onMouseLeave:t.onMouseLeave},a["createElement"](o["a"],Object(r["a"])({},k,{prefixCls:O,ref:y})),void 0!==w?a["createElement"]("span",null,w):null)},m=a["forwardRef"](v);m.displayName="Radio",m.defaultProps={type:"radio"};var y=m,b=n("ODXe"),x=n("6cGi"),_=n("3Nzz"),w=a["forwardRef"]((function(t,e){var n=a["useContext"](h["b"]),r=n.getPrefixCls,o=n.direction,s=a["useContext"](_["b"]),c=Object(x["a"])(t.defaultValue,{value:t.value}),u=Object(b["a"])(c,2),f=u[0],p=u[1],g=function(e){var n=f,i=e.target.value;"value"in t||p(i);var r=t.onChange;r&&i!==n&&r(e)},v=function(){var n,c=t.prefixCls,h=t.className,u=void 0===h?"":h,d=t.options,p=t.optionType,g=t.buttonStyle,v=void 0===g?"outline":g,m=t.disabled,b=t.children,x=t.size,_=t.style,w=t.id,C=t.onMouseEnter,E=t.onMouseLeave,O=r("radio",c),k="".concat(O,"-group"),S=b;if(d&&d.length>0){var j="button"===p?"".concat(O,"-button"):O;S=d.map((function(t){return"string"===typeof t?a["createElement"](y,{key:t,prefixCls:j,disabled:m,value:t,checked:f===t},t):a["createElement"](y,{key:"radio-group-value-options-".concat(t.value),prefixCls:j,disabled:t.disabled||m,value:t.value,checked:f===t.value,style:t.style},t.label)}))}var P=x||s,R=l()(k,"".concat(k,"-").concat(v),(n={},Object(i["a"])(n,"".concat(k,"-").concat(P),P),Object(i["a"])(n,"".concat(k,"-rtl"),"rtl"===o),n),u);return a["createElement"]("div",{className:R,style:_,onMouseEnter:C,onMouseLeave:E,id:w,ref:e},S)};return a["createElement"](d,{value:{onChange:g,value:f,disabled:t.disabled,name:t.name}},v())})),C=a["memo"](w),E=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]])}return n},O=function(t,e){var n=a["useContext"](f),i=a["useContext"](h["b"]),o=i.getPrefixCls,s=t.prefixCls,l=E(t,["prefixCls"]),c=o("radio-button",s);return n&&(l.checked=t.value===n.value,l.disabled=t.disabled||n.disabled),a["createElement"](y,Object(r["a"])({prefixCls:c},l,{type:"radio",ref:e}))},k=a["forwardRef"](O),S=y;S.Button=k,S.Group=C;e["a"]=S},KPFz:function(t,e,n){},x1Ya:function(t,e,n){"use strict";var i=n("wx14"),r=n("rePB"),a=n("Ff2n"),o=n("VTBJ"),s=n("1OyB"),l=n("vuIU"),c=n("Ji7U"),h=n("LK+K"),u=n("q1tI"),d=n.n(u),f=n("TSYQ"),p=n.n(f),g=function(t){Object(c["a"])(n,t);var e=Object(h["a"])(n);function n(t){var i;Object(s["a"])(this,n),i=e.call(this,t),i.handleChange=function(t){var e=i.props,n=e.disabled,r=e.onChange;n||("checked"in i.props||i.setState({checked:t.target.checked}),r&&r({target:Object(o["a"])(Object(o["a"])({},i.props),{},{checked:t.target.checked}),stopPropagation:function(){t.stopPropagation()},preventDefault:function(){t.preventDefault()},nativeEvent:t.nativeEvent}))},i.saveInput=function(t){i.input=t};var r="checked"in t?t.checked:t.defaultChecked;return i.state={checked:r},i}return Object(l["a"])(n,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var t,e=this.props,n=e.prefixCls,o=e.className,s=e.style,l=e.name,c=e.id,h=e.type,u=e.disabled,f=e.readOnly,g=e.tabIndex,v=e.onClick,m=e.onFocus,y=e.onBlur,b=e.onKeyDown,x=e.onKeyPress,_=e.onKeyUp,w=e.autoFocus,C=e.value,E=e.required,O=Object(a["a"])(e,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),k=Object.keys(O).reduce((function(t,e){return"aria-"!==e.substr(0,5)&&"data-"!==e.substr(0,5)&&"role"!==e||(t[e]=O[e]),t}),{}),S=this.state.checked,j=p()(n,o,(t={},Object(r["a"])(t,"".concat(n,"-checked"),S),Object(r["a"])(t,"".concat(n,"-disabled"),u),t));return d.a.createElement("span",{className:j,style:s},d.a.createElement("input",Object(i["a"])({name:l,id:c,type:h,required:E,readOnly:f,disabled:u,tabIndex:g,className:"".concat(n,"-input"),checked:!!S,onClick:v,onFocus:m,onBlur:y,onKeyUp:_,onKeyDown:b,onKeyPress:x,onChange:this.handleChange,autoFocus:w,ref:this.saveInput,value:C},k)),d.a.createElement("span",{className:"".concat(n,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(t,e){return"checked"in t?Object(o["a"])(Object(o["a"])({},e),{},{checked:t.checked}):null}}]),n}(u["Component"]);g.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}},e["a"]=g}}]);