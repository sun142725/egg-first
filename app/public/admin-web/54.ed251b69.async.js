(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[54],{"14J3":function(e,t,n){"use strict";n("cIOH"),n("1GLa")},AO8V:function(e,t,n){"use strict";n.r(t);n("IzEo");var r=n("bx4M"),a=(n("14J3"),n("BMrR")),i=(n("jCWc"),n("kPKH")),o=(n("Znn+"),n("ZTPi")),l=(n("iQDF"),n("+eQT")),c=n("q1tI"),s=n("ZhIB"),u=n.n(s),f=n("fWQN"),d=n("mtLc"),m=n("yKVA"),h=n("879j"),b=n("yP6+"),p=n("9/5/"),g=n.n(p),v=n("hAmf"),j=n("nKUr"),x=function(e){Object(m["a"])(n,e);var t=Object(h["a"])(n);function n(){var e;Object(f["a"])(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return e=t.call.apply(t,[this].concat(a)),e.state={autoHideXLabels:!1},e.root=void 0,e.node=void 0,e.resize=g()((function(){if(e.node&&e.node.parentNode){var t=e.node.parentNode.clientWidth,n=e.props,r=n.data,a=void 0===r?[]:r,i=n.autoLabel,o=void 0===i||i;if(o){var l=30*a.length,c=e.state.autoHideXLabels;t<=l?c||e.setState({autoHideXLabels:!0}):c&&e.setState({autoHideXLabels:!1})}}}),500),e.handleRoot=function(t){e.root=t},e.handleRef=function(t){e.node=t},e}return Object(d["a"])(n,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resize,{passive:!0})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resize)}},{key:"render",value:function(){var e=this.props,t=e.height,n=void 0===t?1:t,r=e.title,a=(e.forceFit,e.data),i=(e.color,e.padding),o=this.state.autoHideXLabels;return console.log(JSON.stringify(a)),Object(j["jsx"])("div",{style:{height:n},ref:this.handleRoot,children:Object(j["jsxs"])("div",{ref:this.handleRef,children:[r&&Object(j["jsx"])("h4",{style:{marginBottom:20},children:r}),Object(j["jsxs"])(b["Chart"],{height:r?n-41:n,forceFit:!0,data:a,padding:i||"auto",children:[Object(j["jsx"])(b["Legend"],{}),Object(j["jsx"])(b["Axis"],{name:"category",title:!0,label:o?void 0:{},tickLine:o?void 0:{}}),Object(j["jsx"])(b["Axis"],{name:"amount",min:0}),Object(j["jsx"])(b["Tooltip"],{}),Object(j["jsx"])(b["Geom"],{type:"intervalStack",position:"date*amount",color:"category",children:Object(j["jsx"])(b["Label"],{})})]})]})})}}]),n}(c["Component"]),y=Object(v["a"])()(x),O=n("4Ond"),_=n.n(O),N=n("QgGj"),k=l["a"].RangePicker,w=o["a"].TabPane,F=function(e){var t=e.rangePickerValue,n=e.salesData,l=e.isActive,c=e.handleRangePickerChange,s=e.loading,f=e.selectDate,d=e.tabChange,m=e.salesMonth;return Object(j["jsx"])(r["a"],{loading:s,bordered:!1,bodyStyle:{padding:0},children:Object(j["jsx"])("div",{className:_.a.salesCard,children:Object(j["jsxs"])(o["a"],{onChange:d,tabBarExtraContent:Object(j["jsxs"])("div",{className:_.a.salesExtraWrap,children:[Object(j["jsxs"])("div",{className:_.a.salesExtra,children:[Object(j["jsx"])("a",{className:l("today"),onClick:function(){return f("today")},children:"\u4eca\u65e5"}),Object(j["jsx"])("a",{className:l("week"),onClick:function(){return f("week")},children:"\u672c\u5468"}),Object(j["jsx"])("a",{className:l("month"),onClick:function(){return f("month")},children:"\u672c\u6708"}),Object(j["jsx"])("a",{className:l("year"),onClick:function(){return f("year")},children:"\u4eca\u5e74"})]}),Object(j["jsx"])(k,{value:t,onChange:c,style:{width:256}})]}),size:"large",tabBarStyle:{marginBottom:24},children:[Object(j["jsx"])(w,{tab:"\u652f\u51fa",children:Object(j["jsxs"])(a["a"],{children:[Object(j["jsx"])(i["a"],{xl:16,lg:12,md:12,sm:24,xs:24,children:Object(j["jsx"])("div",{className:_.a.salesBar,children:Object(j["jsx"])(y,{height:295,title:"\u652f\u51fa\u8868",data:n})})}),Object(j["jsx"])(i["a"],{xl:8,lg:12,md:12,sm:24,xs:24,children:Object(j["jsxs"])("div",{className:_.a.salesRank,children:[Object(j["jsx"])("h4",{className:_.a.rankingTitle,children:"\u6708\u5ea6\u652f\u51fa\u7edf\u8ba1"}),Object(j["jsx"])("ul",{className:_.a.rankingList,children:m.map((function(e,t){return Object(j["jsxs"])("li",{children:[Object(j["jsx"])("span",{className:"".concat(_.a.rankingItemNumber," ").concat(t<3?_.a.active:""),children:t+1}),Object(j["jsx"])("span",{className:_.a.rankingItemTitle,title:e.title,children:Object(N["c"])(N["a"],e.category)}),Object(j["jsxs"])("span",{className:_.a.rankingItemValue,children:[u()(e.amount).format("0,0"),"\u5143"]})]},e.category)}))})]})})]})},"1"),Object(j["jsx"])(w,{tab:"\u6536\u5165",children:Object(j["jsxs"])(a["a"],{children:[Object(j["jsx"])(i["a"],{xl:16,lg:12,md:12,sm:24,xs:24,children:Object(j["jsx"])("div",{className:_.a.salesBar,children:Object(j["jsx"])(y,{height:292,title:"\u6536\u5165\u7edf\u8ba1",data:n})})}),Object(j["jsx"])(i["a"],{xl:8,lg:12,md:12,sm:24,xs:24,children:Object(j["jsxs"])("div",{className:_.a.salesRank,children:[Object(j["jsx"])("h4",{className:_.a.rankingTitle,children:"\u6708\u5ea6\u6536\u5165\u7edf\u8ba1"}),Object(j["jsx"])("ul",{className:_.a.rankingList,children:m.map((function(e,t){return Object(j["jsxs"])("li",{children:[Object(j["jsx"])("span",{className:"".concat(_.a.rankingItemNumber," ").concat(t<3?_.a.active:""),children:t+1}),Object(j["jsx"])("span",{className:_.a.rankingItemTitle,title:e.title,children:Object(N["c"])(N["a"],e.category)}),Object(j["jsxs"])("span",{children:[u()(e.amount).format("0,0"),"\u5143"]})]},e.category)}))})]})})]})},"2")]})})})};t["default"]=F},BMrR:function(e,t,n){"use strict";var r=n("qrJ5");t["a"]=r["a"]},ZhIB:function(e,t,n){var r,a;(function(i,o){r=o,a="function"===typeof r?r.call(t,n,t,e):r,void 0===a||(e.exports=a)})(0,(function(){var e,t,n="2.0.6",r={},a={},i={currentLocale:"en",zeroFormat:null,nullFormat:null,defaultFormat:"0,0",scalePercentBy100:!0},o={currentLocale:i.currentLocale,zeroFormat:i.zeroFormat,nullFormat:i.nullFormat,defaultFormat:i.defaultFormat,scalePercentBy100:i.scalePercentBy100};function l(e,t){this._input=e,this._value=t}return e=function(n){var a,i,c,s;if(e.isNumeral(n))a=n.value();else if(0===n||"undefined"===typeof n)a=0;else if(null===n||t.isNaN(n))a=null;else if("string"===typeof n)if(o.zeroFormat&&n===o.zeroFormat)a=0;else if(o.nullFormat&&n===o.nullFormat||!n.replace(/[^0-9]+/g,"").length)a=null;else{for(i in r)if(s="function"===typeof r[i].regexps.unformat?r[i].regexps.unformat():r[i].regexps.unformat,s&&n.match(s)){c=r[i].unformat;break}c=c||e._.stringToNumber,a=c(n)}else a=Number(n)||null;return new l(n,a)},e.version=n,e.isNumeral=function(e){return e instanceof l},e._=t={numberToFormat:function(t,n,r){var i,o,l,c,s,u,f,d=a[e.options.currentLocale],m=!1,h=!1,b=0,p="",g=1e12,v=1e9,j=1e6,x=1e3,y="",O=!1;if(t=t||0,o=Math.abs(t),e._.includes(n,"(")?(m=!0,n=n.replace(/[\(|\)]/g,"")):(e._.includes(n,"+")||e._.includes(n,"-"))&&(s=e._.includes(n,"+")?n.indexOf("+"):t<0?n.indexOf("-"):-1,n=n.replace(/[\+|\-]/g,"")),e._.includes(n,"a")&&(i=n.match(/a(k|m|b|t)?/),i=!!i&&i[1],e._.includes(n," a")&&(p=" "),n=n.replace(new RegExp(p+"a[kmbt]?"),""),o>=g&&!i||"t"===i?(p+=d.abbreviations.trillion,t/=g):o<g&&o>=v&&!i||"b"===i?(p+=d.abbreviations.billion,t/=v):o<v&&o>=j&&!i||"m"===i?(p+=d.abbreviations.million,t/=j):(o<j&&o>=x&&!i||"k"===i)&&(p+=d.abbreviations.thousand,t/=x)),e._.includes(n,"[.]")&&(h=!0,n=n.replace("[.]",".")),l=t.toString().split(".")[0],c=n.split(".")[1],u=n.indexOf(","),b=(n.split(".")[0].split(",")[0].match(/0/g)||[]).length,c?(e._.includes(c,"[")?(c=c.replace("]",""),c=c.split("["),y=e._.toFixed(t,c[0].length+c[1].length,r,c[1].length)):y=e._.toFixed(t,c.length,r),l=y.split(".")[0],y=e._.includes(y,".")?d.delimiters.decimal+y.split(".")[1]:"",h&&0===Number(y.slice(1))&&(y="")):l=e._.toFixed(t,0,r),p&&!i&&Number(l)>=1e3&&p!==d.abbreviations.trillion)switch(l=String(Number(l)/1e3),p){case d.abbreviations.thousand:p=d.abbreviations.million;break;case d.abbreviations.million:p=d.abbreviations.billion;break;case d.abbreviations.billion:p=d.abbreviations.trillion;break}if(e._.includes(l,"-")&&(l=l.slice(1),O=!0),l.length<b)for(var _=b-l.length;_>0;_--)l="0"+l;return u>-1&&(l=l.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+d.delimiters.thousands)),0===n.indexOf(".")&&(l=""),f=l+y+(p||""),m?f=(m&&O?"(":"")+f+(m&&O?")":""):s>=0?f=0===s?(O?"-":"+")+f:f+(O?"-":"+"):O&&(f="-"+f),f},stringToNumber:function(e){var t,n,r,i=a[o.currentLocale],l=e,c={thousand:3,million:6,billion:9,trillion:12};if(o.zeroFormat&&e===o.zeroFormat)n=0;else if(o.nullFormat&&e===o.nullFormat||!e.replace(/[^0-9]+/g,"").length)n=null;else{for(t in n=1,"."!==i.delimiters.decimal&&(e=e.replace(/\./g,"").replace(i.delimiters.decimal,".")),c)if(r=new RegExp("[^a-zA-Z]"+i.abbreviations[t]+"(?:\\)|(\\"+i.currency.symbol+")?(?:\\))?)?$"),l.match(r)){n*=Math.pow(10,c[t]);break}n*=(e.split("-").length+Math.min(e.split("(").length-1,e.split(")").length-1))%2?1:-1,e=e.replace(/[^0-9\.]+/g,""),n*=Number(e)}return n},isNaN:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){return"number"===typeof e&&isNaN(e)})),includes:function(e,t){return-1!==e.indexOf(t)},insert:function(e,t,n){return e.slice(0,n)+t+e.slice(n)},reduce:function(e,t){if(null===this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!==typeof t)throw new TypeError(t+" is not a function");var n,r=Object(e),a=r.length>>>0,i=0;if(3===arguments.length)n=arguments[2];else{while(i<a&&!(i in r))i++;if(i>=a)throw new TypeError("Reduce of empty array with no initial value");n=r[i++]}for(;i<a;i++)i in r&&(n=t(n,r[i],i,r));return n},multiplier:function(e){var t=e.toString().split(".");return t.length<2?1:Math.pow(10,t[1].length)},correctionFactor:function(){var e=Array.prototype.slice.call(arguments);return e.reduce((function(e,n){var r=t.multiplier(n);return e>r?e:r}),1)},toFixed:function(e,t,n,r){var a,i,o,l,c=e.toString().split("."),s=t-(r||0);return a=2===c.length?Math.min(Math.max(c[1].length,s),t):s,o=Math.pow(10,a),l=(n(e+"e+"+a)/o).toFixed(a),r>t-a&&(i=new RegExp("\\.?0{1,"+(r-(t-a))+"}$"),l=l.replace(i,"")),l}},e.options=o,e.formats=r,e.locales=a,e.locale=function(e){return e&&(o.currentLocale=e.toLowerCase()),o.currentLocale},e.localeData=function(e){if(!e)return a[o.currentLocale];if(e=e.toLowerCase(),!a[e])throw new Error("Unknown locale : "+e);return a[e]},e.reset=function(){for(var e in i)o[e]=i[e]},e.zeroFormat=function(e){o.zeroFormat="string"===typeof e?e:null},e.nullFormat=function(e){o.nullFormat="string"===typeof e?e:null},e.defaultFormat=function(e){o.defaultFormat="string"===typeof e?e:"0.0"},e.register=function(e,t,n){if(t=t.toLowerCase(),this[e+"s"][t])throw new TypeError(t+" "+e+" already registered.");return this[e+"s"][t]=n,n},e.validate=function(t,n){var r,a,i,o,l,c,s,u;if("string"!==typeof t&&(t+="",console.warn&&console.warn("Numeral.js: Value is not string. It has been co-erced to: ",t)),t=t.trim(),t.match(/^\d+$/))return!0;if(""===t)return!1;try{s=e.localeData(n)}catch(f){s=e.localeData(e.locale())}return i=s.currency.symbol,l=s.abbreviations,r=s.delimiters.decimal,a="."===s.delimiters.thousands?"\\.":s.delimiters.thousands,u=t.match(/^[^\d]+/),(null===u||(t=t.substr(1),u[0]===i))&&(u=t.match(/[^\d]+$/),(null===u||(t=t.slice(0,-1),u[0]===l.thousand||u[0]===l.million||u[0]===l.billion||u[0]===l.trillion))&&(c=new RegExp(a+"{2}"),!t.match(/[^\d.,]/g)&&(o=t.split(r),!(o.length>2)&&(o.length<2?!!o[0].match(/^\d+.*\d$/)&&!o[0].match(c):1===o[0].length?!!o[0].match(/^\d+$/)&&!o[0].match(c)&&!!o[1].match(/^\d+$/):!!o[0].match(/^\d+.*\d$/)&&!o[0].match(c)&&!!o[1].match(/^\d+$/)))))},e.fn=l.prototype={clone:function(){return e(this)},format:function(t,n){var a,i,l,c=this._value,s=t||o.defaultFormat;if(n=n||Math.round,0===c&&null!==o.zeroFormat)i=o.zeroFormat;else if(null===c&&null!==o.nullFormat)i=o.nullFormat;else{for(a in r)if(s.match(r[a].regexps.format)){l=r[a].format;break}l=l||e._.numberToFormat,i=l(c,s,n)}return i},value:function(){return this._value},input:function(){return this._input},set:function(e){return this._value=Number(e),this},add:function(e){var n=t.correctionFactor.call(null,this._value,e);function r(e,t,r,a){return e+Math.round(n*t)}return this._value=t.reduce([this._value,e],r,0)/n,this},subtract:function(e){var n=t.correctionFactor.call(null,this._value,e);function r(e,t,r,a){return e-Math.round(n*t)}return this._value=t.reduce([e],r,Math.round(this._value*n))/n,this},multiply:function(e){function n(e,n,r,a){var i=t.correctionFactor(e,n);return Math.round(e*i)*Math.round(n*i)/Math.round(i*i)}return this._value=t.reduce([this._value,e],n,1),this},divide:function(e){function n(e,n,r,a){var i=t.correctionFactor(e,n);return Math.round(e*i)/Math.round(n*i)}return this._value=t.reduce([this._value,e],n),this},difference:function(t){return Math.abs(e(this._value).subtract(t).value())}},e.register("locale","en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(e){var t=e%10;return 1===~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th"},currency:{symbol:"$"}}),function(){e.register("format","bps",{regexps:{format:/(BPS)/,unformat:/(BPS)/},format:function(t,n,r){var a,i=e._.includes(n," BPS")?" ":"";return t*=1e4,n=n.replace(/\s?BPS/,""),a=e._.numberToFormat(t,n,r),e._.includes(a,")")?(a=a.split(""),a.splice(-1,0,i+"BPS"),a=a.join("")):a=a+i+"BPS",a},unformat:function(t){return+(1e-4*e._.stringToNumber(t)).toFixed(15)}})}(),function(){var t={base:1e3,suffixes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]},n={base:1024,suffixes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},r=t.suffixes.concat(n.suffixes.filter((function(e){return t.suffixes.indexOf(e)<0}))),a=r.join("|");a="("+a.replace("B","B(?!PS)")+")",e.register("format","bytes",{regexps:{format:/([0\s]i?b)/,unformat:new RegExp(a)},format:function(r,a,i){var o,l,c,s,u=e._.includes(a,"ib")?n:t,f=e._.includes(a," b")||e._.includes(a," ib")?" ":"";for(a=a.replace(/\s?i?b/,""),l=0;l<=u.suffixes.length;l++)if(c=Math.pow(u.base,l),s=Math.pow(u.base,l+1),null===r||0===r||r>=c&&r<s){f+=u.suffixes[l],c>0&&(r/=c);break}return o=e._.numberToFormat(r,a,i),o+f},unformat:function(r){var a,i,o=e._.stringToNumber(r);if(o){for(a=t.suffixes.length-1;a>=0;a--){if(e._.includes(r,t.suffixes[a])){i=Math.pow(t.base,a);break}if(e._.includes(r,n.suffixes[a])){i=Math.pow(n.base,a);break}}o*=i||1}return o}})}(),function(){e.register("format","currency",{regexps:{format:/(\$)/},format:function(t,n,r){var a,i,o,l=e.locales[e.options.currentLocale],c={before:n.match(/^([\+|\-|\(|\s|\$]*)/)[0],after:n.match(/([\+|\-|\)|\s|\$]*)$/)[0]};for(n=n.replace(/\s?\$\s?/,""),a=e._.numberToFormat(t,n,r),t>=0?(c.before=c.before.replace(/[\-\(]/,""),c.after=c.after.replace(/[\-\)]/,"")):t<0&&!e._.includes(c.before,"-")&&!e._.includes(c.before,"(")&&(c.before="-"+c.before),o=0;o<c.before.length;o++)switch(i=c.before[o],i){case"$":a=e._.insert(a,l.currency.symbol,o);break;case" ":a=e._.insert(a," ",o+l.currency.symbol.length-1);break}for(o=c.after.length-1;o>=0;o--)switch(i=c.after[o],i){case"$":a=o===c.after.length-1?a+l.currency.symbol:e._.insert(a,l.currency.symbol,-(c.after.length-(1+o)));break;case" ":a=o===c.after.length-1?a+" ":e._.insert(a," ",-(c.after.length-(1+o)+l.currency.symbol.length-1));break}return a}})}(),function(){e.register("format","exponential",{regexps:{format:/(e\+|e-)/,unformat:/(e\+|e-)/},format:function(t,n,r){var a,i="number"!==typeof t||e._.isNaN(t)?"0e+0":t.toExponential(),o=i.split("e");return n=n.replace(/e[\+|\-]{1}0/,""),a=e._.numberToFormat(Number(o[0]),n,r),a+"e"+o[1]},unformat:function(t){var n=e._.includes(t,"e+")?t.split("e+"):t.split("e-"),r=Number(n[0]),a=Number(n[1]);function i(t,n,r,a){var i=e._.correctionFactor(t,n),o=t*i*(n*i)/(i*i);return o}return a=e._.includes(t,"e-")?a*=-1:a,e._.reduce([r,Math.pow(10,a)],i,1)}})}(),function(){e.register("format","ordinal",{regexps:{format:/(o)/},format:function(t,n,r){var a,i=e.locales[e.options.currentLocale],o=e._.includes(n," o")?" ":"";return n=n.replace(/\s?o/,""),o+=i.ordinal(t),a=e._.numberToFormat(t,n,r),a+o}})}(),function(){e.register("format","percentage",{regexps:{format:/(%)/,unformat:/(%)/},format:function(t,n,r){var a,i=e._.includes(n," %")?" ":"";return e.options.scalePercentBy100&&(t*=100),n=n.replace(/\s?\%/,""),a=e._.numberToFormat(t,n,r),e._.includes(a,")")?(a=a.split(""),a.splice(-1,0,i+"%"),a=a.join("")):a=a+i+"%",a},unformat:function(t){var n=e._.stringToNumber(t);return e.options.scalePercentBy100?.01*n:n}})}(),function(){e.register("format","time",{regexps:{format:/(:)/,unformat:/(:)/},format:function(e,t,n){var r=Math.floor(e/60/60),a=Math.floor((e-60*r*60)/60),i=Math.round(e-60*r*60-60*a);return r+":"+(a<10?"0"+a:a)+":"+(i<10?"0"+i:i)},unformat:function(e){var t=e.split(":"),n=0;return 3===t.length?(n+=60*Number(t[0])*60,n+=60*Number(t[1]),n+=Number(t[2])):2===t.length&&(n+=60*Number(t[0]),n+=Number(t[1])),Number(n)}})}(),e}))},hAmf:function(e,t,n){"use strict";var r=n("k1fw"),a=n("fWQN"),i=n("mtLc"),o=n("yKVA"),l=n("879j"),c=n("q1tI"),s=n.n(c),u=n("nKUr");function f(e){var t=e.style;t.height="100%";var n=parseInt("".concat(getComputedStyle(e).height),10),r=parseInt("".concat(getComputedStyle(e).paddingTop),10)+parseInt("".concat(getComputedStyle(e).paddingBottom),10);return n-r}function d(e){if(!e)return 0;var t=e,n=f(t),r=t.parentNode;return r&&(n=f(r)),n}function m(){return function(e){var t=function(t){Object(o["a"])(c,t);var n=Object(l["a"])(c);function c(){var e;Object(a["a"])(this,c);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return e=n.call.apply(n,[this].concat(r)),e.state={computedHeight:0},e.root=void 0,e.handleRoot=function(t){e.root=t},e}return Object(i["a"])(c,[{key:"componentDidMount",value:function(){var e=this.props.height;if(!e){var t=d(this.root);this.setState({computedHeight:t}),t<1&&(t=d(this.root),this.setState({computedHeight:t}))}}},{key:"render",value:function(){var t=this.props.height,n=this.state.computedHeight,a=t||n;return Object(u["jsx"])("div",{ref:this.handleRoot,children:a>0&&Object(u["jsx"])(e,Object(r["a"])(Object(r["a"])({},this.props),{},{height:a}))})}}]),c}(s.a.Component);return t}}t["a"]=m},jCWc:function(e,t,n){"use strict";n("cIOH"),n("1GLa")},kPKH:function(e,t,n){"use strict";var r=n("/kpp");t["a"]=r["a"]}}]);