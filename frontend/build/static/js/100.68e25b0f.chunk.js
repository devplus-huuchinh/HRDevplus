(this.webpackJsonpisomorphic=this.webpackJsonpisomorphic||[]).push([[100],{1261:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));var r=n(12),c=n(47);function a(e){var t,n=function(n){return function(){t=null,e.apply(void 0,Object(r.a)(n))}},a=function(){if(null==t){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];t=Object(c.a)(n(r))}};return a.cancel=function(){return c.a.cancel(t)},a}function o(){return function(e,t,n){var r=n.value,c=!1;return{configurable:!0,get:function(){if(c||this===e.prototype||this.hasOwnProperty(t))return r;var n=a(r.bind(this));return c=!0,Object.defineProperty(this,t,{value:n,configurable:!0,writable:!0}),c=!1,n}}}}},1967:function(e,t,n){},1968:function(e,t,n){},2586:function(e,t,n){"use strict";n.r(t);n(130),n(1967);var r=n(5),c=n(7),a=n(10),o=n(0),i=n.n(o),l=n(66),u=n(93),s=n(79),f=n(11),m=n.n(f),v=n(55),b=n(4),d={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z"}}]},name:"vertical-align-top",theme:"outlined"},p=n(21),g=function(e,t){return o.createElement(p.a,Object(b.a)(Object(b.a)({},e),{},{ref:t,icon:d}))};g.displayName="VerticalAlignTopOutlined";var h=o.forwardRef(g),w=n(1261),E=n(92),O=n(683),j=n(691),y=n(43),C=function(e){var t=Object(s.a)(!1,{value:e.visible}),n=Object(a.a)(t,2),i=n[0],f=n[1],b=o.createRef(),d=o.useRef(),p=function(){return b.current&&b.current.ownerDocument?b.current.ownerDocument:window},g=Object(w.a)((function(t){var n=e.visibilityHeight,r=Object(O.a)(t.target,!0);f(r>n)}));o.useEffect((function(){return function(){var t=(e.target||p)();d.current=Object(u.a)(t,"scroll",(function(e){g(e)})),g({target:t})}(),function(){d.current&&d.current.remove(),g.cancel()}}),[e.target]);var C=o.useContext(E.b),N=C.getPrefixCls,k=C.direction,x=e.prefixCls,D=e.className,H=void 0===D?"":D,P=N("back-top",x),T=N(),B=m()(P,Object(c.a)({},"".concat(P,"-rtl"),"rtl"===k),H),L=Object(v.a)(e,["prefixCls","className","children","visibilityHeight","target","visible"]);return o.createElement("div",Object(r.a)({},L,{className:B,onClick:function(t){var n=e.onClick,r=e.target,c=e.duration,a=void 0===c?450:c;Object(j.a)(0,{getContainer:r||p,duration:a}),"function"===typeof n&&n(t)},ref:b}),function(t){var n=t.prefixCls,r=t.rootPrefixCls,c=e.children,a=o.createElement("div",{className:"".concat(n,"-content")},o.createElement("div",{className:"".concat(n,"-icon")},o.createElement(h,null)));return o.createElement(l.b,{visible:i,motionName:"".concat(r,"-fade")},(function(e){var t=e.className;return Object(y.a)(c||a,(function(e){var n=e.className;return{className:m()(t,n)}}))}))}({prefixCls:P,rootPrefixCls:T}))};C.defaultProps={visibilityHeight:400};var N=o.memo(C);n(1968),t.default=function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"isoContent"},i.a.createElement("h2",null,"Back to top with Gray"),i.a.createElement(N,null),"Scroll down to see the bottom-right",i.a.createElement("strong",{style:{color:"rgba(64, 64, 64, 0.6)"}}," gray "),"button."),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("div",{className:"isoContent"},i.a.createElement("h2",null,"Back to top with Blue"),i.a.createElement(N,null,i.a.createElement("div",{className:"ant-back-top-inner"},"UP")),"Scroll down to see the bottom-right",i.a.createElement("strong",{style:{color:"#1088e9"}}," blue "),"button."))}},683:function(e,t,n){"use strict";function r(e){return null!==e&&void 0!==e&&e===e.window}function c(e,t){var n;if("undefined"===typeof window)return 0;var c=t?"scrollTop":"scrollLeft",a=0;return r(e)?a=e[t?"pageYOffset":"pageXOffset"]:e instanceof Document?a=e.documentElement[c]:e&&(a=e[c]),e&&!r(e)&&"number"!==typeof a&&(a=null===(n=(e.ownerDocument||e).documentElement)||void 0===n?void 0:n[c]),a}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}))},691:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(47),c=n(683);function a(e,t,n,r){var c=n-t;return(e/=r/2)<1?c/2*e*e*e+t:c/2*((e-=2)*e*e+2)+t}function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.getContainer,o=void 0===n?function(){return window}:n,i=t.callback,l=t.duration,u=void 0===l?450:l,s=o(),f=Object(c.a)(s,!0),m=Date.now(),v=function t(){var n=Date.now()-m,o=a(n>u?u:n,f,e,u);Object(c.b)(s)?s.scrollTo(window.pageXOffset,o):s instanceof HTMLDocument||"HTMLDocument"===s.constructor.name?s.documentElement.scrollTop=o:s.scrollTop=o,n<u?Object(r.a)(t):"function"===typeof i&&i()};Object(r.a)(v)}}}]);
//# sourceMappingURL=100.68e25b0f.chunk.js.map