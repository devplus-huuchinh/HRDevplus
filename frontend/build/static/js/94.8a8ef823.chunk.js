(this.webpackJsonpisomorphic=this.webpackJsonpisomorphic||[]).push([[94],{1038:function(t,e,c){"use strict";c(130),c(1236)},1087:function(t,e,c){"use strict";var n=c(7),a=c(16),o=c(5),r=c(0),s=c(66),l=c(11),i=c.n(l),u=c(92),f=c(43),m=c(10);function b(t){var e,c=t.prefixCls,n=t.value,a=t.current,o=t.offset,s=void 0===o?0:o;return s&&(e={position:"absolute",top:"".concat(s,"00%"),left:0}),r.createElement("span",{style:e,className:i()("".concat(c,"-only-unit"),{current:a})},n)}function p(t,e,c){for(var n=t,a=0;(n+10)%10!==e;)n+=c,a+=c;return a}function O(t){var e,c,n=t.prefixCls,a=t.count,s=t.value,l=Number(s),i=Math.abs(a),u=r.useState(l),f=Object(m.a)(u,2),O=f[0],v=f[1],d=r.useState(i),j=Object(m.a)(d,2),y=j[0],N=j[1],x=function(){v(l),N(i)};if(r.useEffect((function(){var t=setTimeout((function(){x()}),1e3);return function(){clearTimeout(t)}}),[l]),O===l||Number.isNaN(l)||Number.isNaN(O))e=[r.createElement(b,Object(o.a)({},t,{key:l,current:!0}))],c={transition:"none"};else{e=[];for(var h=l+10,C=[],g=l;g<=h;g+=1)C.push(g);var w=C.findIndex((function(t){return t%10===O}));e=C.map((function(e,c){var n=e%10;return r.createElement(b,Object(o.a)({},t,{key:e,value:n,offset:c-w,current:c===w}))})),c={transform:"translateY(".concat(-p(O,l,y<i?1:-1),"00%)")}}return r.createElement("span",{className:"".concat(n,"-only"),style:c,onTransitionEnd:x},e)}var v=function(t,e){var c={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(c[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(t);a<n.length;a++)e.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(t,n[a])&&(c[n[a]]=t[n[a]])}return c},d=function(t){var e=t.prefixCls,c=t.count,n=t.className,a=t.motionClassName,s=t.style,l=t.title,m=t.show,b=t.component,p=void 0===b?"sup":b,d=t.children,j=v(t,["prefixCls","count","className","motionClassName","style","title","show","component","children"]),y=(0,r.useContext(u.b).getPrefixCls)("scroll-number",e),N=Object(o.a)(Object(o.a)({},j),{"data-show":m,style:s,className:i()(y,n,a),title:l}),x=c;if(c&&Number(c)%1===0){var h=String(c).split("");x=h.map((function(t,e){return r.createElement(O,{prefixCls:y,count:Number(c),value:t,key:h.length-e})}))}return s&&s.borderColor&&(N.style=Object(o.a)(Object(o.a)({},s),{boxShadow:"0 0 0 1px ".concat(s.borderColor," inset")})),d?Object(f.a)(d,(function(t){return{className:i()("".concat(y,"-custom-component"),null===t||void 0===t?void 0:t.className,a)}})):r.createElement(p,N,x)},j=c(236);function y(t){return-1!==j.a.indexOf(t)}var N=function(t,e){var c={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(c[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(t);a<n.length;a++)e.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(t,n[a])&&(c[n[a]]=t[n[a]])}return c},x=function(t){var e,c,l=t.prefixCls,m=t.scrollNumberPrefixCls,b=t.children,p=t.status,O=t.text,v=t.color,j=t.count,x=void 0===j?null:j,h=t.overflowCount,C=void 0===h?99:h,g=t.dot,w=void 0!==g&&g,E=t.size,P=void 0===E?"default":E,k=t.title,S=t.offset,z=t.style,I=t.className,M=t.showZero,R=void 0!==M&&M,T=N(t,["prefixCls","scrollNumberPrefixCls","children","status","text","color","count","overflowCount","dot","size","title","offset","style","className","showZero"]),L=r.useContext(u.b),H=L.getPrefixCls,J=L.direction,V=H("badge",l),Z=x>C?"".concat(C,"+"):x,A=null!==p&&void 0!==p||null!==v&&void 0!==v,B="0"===Z||0===Z,D=w&&!B,Y=D?"":Z,q=Object(r.useMemo)((function(){return(null===Y||void 0===Y||""===Y||B&&!R)&&!D}),[Y,B,R,D]),F=Object(r.useRef)(x);q||(F.current=x);var G=F.current,K=Object(r.useRef)(Y);q||(K.current=Y);var Q=K.current,U=Object(r.useRef)(D);q||(U.current=D);var W=Object(r.useMemo)((function(){if(!S)return Object(o.a)({},z);var t={marginTop:S[1]};return"rtl"===J?t.left=parseInt(S[0],10):t.right=-parseInt(S[0],10),Object(o.a)(Object(o.a)({},t),z)}),[J,S,z]),X=null!==k&&void 0!==k?k:"string"===typeof G||"number"===typeof G?G:void 0,$=q||!O?null:r.createElement("span",{className:"".concat(V,"-status-text")},O),_=G&&"object"===Object(a.a)(G)?Object(f.a)(G,(function(t){return{style:Object(o.a)(Object(o.a)({},W),t.style)}})):void 0,tt=i()((e={},Object(n.a)(e,"".concat(V,"-status-dot"),A),Object(n.a)(e,"".concat(V,"-status-").concat(p),!!p),Object(n.a)(e,"".concat(V,"-status-").concat(v),y(v)),e)),et={};v&&!y(v)&&(et.background=v);var ct=i()(V,(c={},Object(n.a)(c,"".concat(V,"-status"),A),Object(n.a)(c,"".concat(V,"-not-a-wrapper"),!b),Object(n.a)(c,"".concat(V,"-rtl"),"rtl"===J),c),I);if(!b&&A){var nt=W.color;return r.createElement("span",Object(o.a)({},T,{className:ct,style:W}),r.createElement("span",{className:tt,style:et}),r.createElement("span",{style:{color:nt},className:"".concat(V,"-status-text")},O))}return r.createElement("span",Object(o.a)({},T,{className:ct}),b,r.createElement(s.b,{visible:!q,motionName:"".concat(V,"-zoom"),motionAppear:!1,motionDeadline:1e3},(function(t){var e,c=t.className,a=H("scroll-number",m),s=U.current,l=i()((e={},Object(n.a)(e,"".concat(V,"-dot"),s),Object(n.a)(e,"".concat(V,"-count"),!s),Object(n.a)(e,"".concat(V,"-count-sm"),"small"===P),Object(n.a)(e,"".concat(V,"-multiple-words"),!s&&Q&&Q.toString().length>1),Object(n.a)(e,"".concat(V,"-status-").concat(p),!!p),Object(n.a)(e,"".concat(V,"-status-").concat(v),y(v)),e)),u=Object(o.a)({},W);return v&&!y(v)&&((u=u||{}).background=v),r.createElement(d,{prefixCls:a,show:!q,motionClassName:c,className:l,count:Q,title:X,style:u,key:"scrollNumber"},_)})),$)};x.Ribbon=function(t){var e,c=t.className,a=t.prefixCls,s=t.style,l=t.color,f=t.children,m=t.text,b=t.placement,p=void 0===b?"end":b,O=r.useContext(u.b),v=O.getPrefixCls,d=O.direction,j=v("ribbon",a),N=y(l),x=i()(j,"".concat(j,"-placement-").concat(p),(e={},Object(n.a)(e,"".concat(j,"-rtl"),"rtl"===d),Object(n.a)(e,"".concat(j,"-color-").concat(l),N),e),c),h={},C={};return l&&!N&&(h.background=l,C.color=l),r.createElement("div",{className:"".concat(j,"-wrapper")},f,r.createElement("div",{className:x,style:Object(o.a)(Object(o.a)({},h),s)},r.createElement("span",{className:"".concat(j,"-text")},m),r.createElement("div",{className:"".concat(j,"-corner"),style:C})))};e.a=x},1236:function(t,e,c){},2631:function(t,e,c){"use strict";var n=c(4),a=c(0),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 112c-3.8 0-7.7.7-11.6 2.3L292 345.9H128c-8.8 0-16 7.4-16 16.6v299c0 9.2 7.2 16.6 16 16.6h101.7c-3.7 11.6-5.7 23.9-5.7 36.4 0 65.9 53.8 119.5 120 119.5 55.4 0 102.1-37.6 115.9-88.4l408.6 164.2c3.9 1.5 7.8 2.3 11.6 2.3 16.9 0 32-14.2 32-33.2V145.2C912 126.2 897 112 880 112zM344 762.3c-26.5 0-48-21.4-48-47.8 0-11.2 3.9-21.9 11-30.4l84.9 34.1c-2 24.6-22.7 44.1-47.9 44.1zm496 58.4L318.8 611.3l-12.9-5.2H184V417.9h121.9l12.9-5.2L840 203.3v617.4z"}}]},name:"notification",theme:"outlined"},r=c(21),s=function(t,e){return a.createElement(r.a,Object(n.a)(Object(n.a)({},t),{},{ref:e,icon:o}))};s.displayName="NotificationOutlined";e.a=a.forwardRef(s)},543:function(t,e,c){"use strict";var n=c(1022);e.a=n.a},544:function(t,e,c){"use strict";c(130),c(550)},545:function(t,e,c){"use strict";var n=c(814);e.a=n.a},546:function(t,e,c){"use strict";c(130),c(550)}}]);
//# sourceMappingURL=94.8a8ef823.chunk.js.map