(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[41],{"14J3":function(e,t,a){"use strict";a("cIOH"),a("1GLa")},"1qqw":function(e,t,a){"use strict";a.r(t);a("IzEo");var n=a("bx4M"),r=(a("J+/v"),a("MoRW")),c=(a("+L6B"),a("2/Rp")),i=a("2BaD"),l=a("UESt"),s=a("9kvl"),o=a("q1tI"),d=a("FRQA"),u=a("DF+m"),m=a.n(u),b=a("nKUr"),f=Object(b["jsxs"])(o["Fragment"],{children:[Object(b["jsx"])("div",{className:m.a.title,children:Object(b["jsx"])(s["a"],{id:"resultandfail.error.hint-title",defaultMessage:"The content you submitted has the following error:"})}),Object(b["jsxs"])("div",{style:{marginBottom:16},children:[Object(b["jsx"])(i["a"],{style:{marginRight:8},className:m.a.error_icon}),Object(b["jsx"])(s["a"],{id:"resultandfail.error.hint-text1",defaultMessage:"Your account has been frozen"}),Object(b["jsxs"])("a",{style:{marginLeft:16},children:[Object(b["jsx"])(s["a"],{id:"resultandfail.error.hint-btn1",defaultMessage:"Thaw immediately"}),Object(b["jsx"])(l["a"],{})]})]}),Object(b["jsxs"])("div",{children:[Object(b["jsx"])(i["a"],{style:{marginRight:8},className:m.a.error_icon}),Object(b["jsx"])(s["a"],{id:"resultandfail.error.hint-text2",defaultMessage:"Your account is not yet eligible to apply"}),Object(b["jsxs"])("a",{style:{marginLeft:16},children:[Object(b["jsx"])(s["a"],{id:"resultandfail.error.hint-btn2",defaultMessage:"Upgrade immediately"}),Object(b["jsx"])(l["a"],{})]})]})]});t["default"]=function(){return Object(b["jsx"])(d["a"],{children:Object(b["jsx"])(n["a"],{bordered:!1,children:Object(b["jsx"])(r["a"],{status:"error",title:Object(s["d"])({id:"resultandfail.error.title"}),subTitle:Object(s["d"])({id:"resultandfail.error.description"}),extra:Object(b["jsx"])(c["a"],{type:"primary",children:Object(b["jsx"])(s["a"],{id:"resultandfail.error.btn-text",defaultMessage:"Return to modify"})}),style:{marginTop:48,marginBottom:16},children:f})})})}},ACnJ:function(e,t,a){"use strict";a.d(t,"b",(function(){return c}));var n=a("rePB"),r=a("wx14"),c=["xxl","xl","lg","md","sm","xs"],i={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},l=new Map,s=-1,o={},d={matchHandlers:{},dispatch:function(e){return o=e,l.forEach((function(e){return e(o)})),l.size>=1},subscribe:function(e){return l.size||this.register(),s+=1,l.set(s,e),e(o),s},unsubscribe:function(e){l["delete"](e),l.size||this.unregister()},unregister:function(){var e=this;Object.keys(i).forEach((function(t){var a=i[t],n=e.matchHandlers[a];null===n||void 0===n||n.mql.removeListener(null===n||void 0===n?void 0:n.listener)})),l.clear()},register:function(){var e=this;Object.keys(i).forEach((function(t){var a=i[t],c=function(a){var c=a.matches;e.dispatch(Object(r["a"])(Object(r["a"])({},o),Object(n["a"])({},t,c)))},l=window.matchMedia(a);l.addListener(c),e.matchHandlers[a]={mql:l,listener:c},c(l)}))}};t["a"]=d},BMrR:function(e,t,a){"use strict";var n=a("qrJ5");t["a"]=n["a"]},"DF+m":function(e,t,a){e.exports={error_icon:"error_icon___3tajM",title:"title___1mmDs"}},DnfT:function(e,t,a){},FRQA:function(e,t,a){"use strict";a("GNNt");var n=a("wEI+"),r=(a("DnfT"),a("q1tI")),c=a.n(r),i=a("TSYQ"),l=a.n(i),s=a("jYQm"),o=function(e){var t=Object(r["useContext"])(s["a"]),a=e.children,i=e.contentWidth,o=e.className,d=e.style,u=Object(r["useContext"])(n["b"].ConfigContext),m=u.getPrefixCls,b=e.prefixCls||m("pro"),f=i||t.contentWidth,p="".concat(b,"-grid-content");return c.a.createElement("div",{className:l()(p,o,{wide:"Fixed"===f}),style:d},c.a.createElement("div",{className:"".concat(b,"-grid-content-children")},a))};t["a"]=o},IzEo:function(e,t,a){"use strict";a("cIOH"),a("lnY3"),a("Znn+"),a("14J3"),a("jCWc")},bx4M:function(e,t,a){"use strict";var n=a("rePB"),r=a("wx14"),c=a("q1tI"),i=a("TSYQ"),l=a.n(i),s=a("bT9E"),o=a("H84U"),d=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},u=function(e){var t=e.prefixCls,a=e.className,i=e.hoverable,s=void 0===i||i,u=d(e,["prefixCls","className","hoverable"]);return c["createElement"](o["a"],null,(function(e){var i=e.getPrefixCls,o=i("card",t),d=l()("".concat(o,"-grid"),a,Object(n["a"])({},"".concat(o,"-grid-hoverable"),s));return c["createElement"]("div",Object(r["a"])({},u,{className:d}))}))},m=u,b=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},f=function(e){return c["createElement"](o["a"],null,(function(t){var a=t.getPrefixCls,n=e.prefixCls,i=e.className,s=e.avatar,o=e.title,d=e.description,u=b(e,["prefixCls","className","avatar","title","description"]),m=a("card",n),f=l()("".concat(m,"-meta"),i),p=s?c["createElement"]("div",{className:"".concat(m,"-meta-avatar")},s):null,j=o?c["createElement"]("div",{className:"".concat(m,"-meta-title")},o):null,v=d?c["createElement"]("div",{className:"".concat(m,"-meta-description")},d):null,h=j||v?c["createElement"]("div",{className:"".concat(m,"-meta-detail")},j,v):null;return c["createElement"]("div",Object(r["a"])({},u,{className:f}),p,h)}))},p=f,j=a("ZTPi"),v=a("BMrR"),h=a("kPKH"),O=a("3Nzz"),x=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};function y(e){var t=e.map((function(t,a){return c["createElement"]("li",{style:{width:"".concat(100/e.length,"%")},key:"action-".concat(a)},c["createElement"]("span",null,t))}));return t}var g=function(e){var t,a,i,d=c["useContext"](o["b"]),u=d.getPrefixCls,b=d.direction,f=c["useContext"](O["b"]),p=function(t){e.onTabChange&&e.onTabChange(t)},g=function(){var t;return c["Children"].forEach(e.children,(function(e){e&&e.type&&e.type===m&&(t=!0)})),t},E=e.prefixCls,w=e.className,N=e.extra,C=e.headStyle,P=void 0===C?{}:C,T=e.bodyStyle,M=void 0===T?{}:T,I=e.title,S=e.loading,k=e.bordered,z=void 0===k||k,B=e.size,_=e.type,q=e.cover,H=e.actions,K=e.tabList,L=e.children,R=e.activeTabKey,Y=e.defaultActiveTabKey,J=e.tabBarExtraContent,A=e.hoverable,D=e.tabProps,F=void 0===D?{}:D,Q=x(e,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),W=u("card",E),G=0===M.padding||"0px"===M.padding?{padding:24}:void 0,U=c["createElement"]("div",{className:"".concat(W,"-loading-block")}),Z=c["createElement"]("div",{className:"".concat(W,"-loading-content"),style:G},c["createElement"](v["a"],{gutter:8},c["createElement"](h["a"],{span:22},U)),c["createElement"](v["a"],{gutter:8},c["createElement"](h["a"],{span:8},U),c["createElement"](h["a"],{span:15},U)),c["createElement"](v["a"],{gutter:8},c["createElement"](h["a"],{span:6},U),c["createElement"](h["a"],{span:18},U)),c["createElement"](v["a"],{gutter:8},c["createElement"](h["a"],{span:13},U),c["createElement"](h["a"],{span:9},U)),c["createElement"](v["a"],{gutter:8},c["createElement"](h["a"],{span:4},U),c["createElement"](h["a"],{span:3},U),c["createElement"](h["a"],{span:16},U))),V=void 0!==R,X=Object(r["a"])(Object(r["a"])({},F),(t={},Object(n["a"])(t,V?"activeKey":"defaultActiveKey",V?R:Y),Object(n["a"])(t,"tabBarExtraContent",J),t)),$=K&&K.length?c["createElement"](j["a"],Object(r["a"])({size:"large"},X,{className:"".concat(W,"-head-tabs"),onChange:p}),K.map((function(e){return c["createElement"](j["a"].TabPane,{tab:e.tab,disabled:e.disabled,key:e.key})}))):null;(I||N||$)&&(i=c["createElement"]("div",{className:"".concat(W,"-head"),style:P},c["createElement"]("div",{className:"".concat(W,"-head-wrapper")},I&&c["createElement"]("div",{className:"".concat(W,"-head-title")},I),N&&c["createElement"]("div",{className:"".concat(W,"-extra")},N)),$));var ee=q?c["createElement"]("div",{className:"".concat(W,"-cover")},q):null,te=c["createElement"]("div",{className:"".concat(W,"-body"),style:M},S?Z:L),ae=H&&H.length?c["createElement"]("ul",{className:"".concat(W,"-actions")},y(H)):null,ne=Object(s["a"])(Q,["onTabChange"]),re=B||f,ce=l()(W,(a={},Object(n["a"])(a,"".concat(W,"-loading"),S),Object(n["a"])(a,"".concat(W,"-bordered"),z),Object(n["a"])(a,"".concat(W,"-hoverable"),A),Object(n["a"])(a,"".concat(W,"-contain-grid"),g()),Object(n["a"])(a,"".concat(W,"-contain-tabs"),K&&K.length),Object(n["a"])(a,"".concat(W,"-").concat(re),re),Object(n["a"])(a,"".concat(W,"-type-").concat(_),!!_),Object(n["a"])(a,"".concat(W,"-rtl"),"rtl"===b),a),w);return c["createElement"]("div",Object(r["a"])({},ne,{className:ce}),i,ee,te,ae)};g.Grid=m,g.Meta=p;t["a"]=g},jCWc:function(e,t,a){"use strict";a("cIOH"),a("1GLa")},jYQm:function(e,t,a){"use strict";var n=a("q1tI"),r=Object(n["createContext"])({});t["a"]=r},kPKH:function(e,t,a){"use strict";var n=a("/kpp");t["a"]=n["a"]},lnY3:function(e,t,a){}}]);