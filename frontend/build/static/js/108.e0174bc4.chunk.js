(this.webpackJsonpisomorphic=this.webpackJsonpisomorphic||[]).push([[108],{2671:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return A}));t(812);var a,o,r=t(814),i=t(0),l=t.n(i),c=t(89),d=t(62),s=t(131),p=t(123),u=t(214),f=t(134),x=t(49),h=t(42),m=t(9),g=t(51),b=t(78),N=h.d.div(a||(a=Object(x.a)(["\n  padding: 50px 35px;\n  display: flex;\n  height: 100%;\n  min-height: 300px;\n  background: none;\n\n  @media only screen and (max-width: 767px) {\n    padding: 40px 20px;\n    height: auto;\n    flex-direction: column;\n\n    &.ant-layout.ant-layout-has-sider {\n      flex-direction: column;\n    }\n  }\n\n  @media only screen and (min-width: 767px) and (max-width: 990px) {\n    padding: 50px 20px;\n  }\n\n  .isoNoteListSidebar {\n    display: flex;\n    flex-direction: column;\n    flex-shrink: 0;\n    "," background: #ffffff;\n    border-right: ","px solid\n      ",";\n    border-left: ","px solid\n      ",";\n\n    @media only screen and (min-width: 767px) and (max-width: 990px) {\n      width: 260px !important;\n      flex: 0 0 260px !important;\n      max-width: none !important;\n      min-width: 0 !important;\n    }\n    @media only screen and (max-width: 767px) {\n      width: auto !important;\n      max-width: 100% !important;\n      min-width: 0 !important;\n      margin-bottom: 30px;\n      flex: 0 !important;\n      overflow: hidden;\n      overflow-y: auto;\n    }\n  }\n\n  .isoNotepadWrapper {\n    background: #ffffff;\n\n    .isoHeader {\n      height: auto;\n      line-height: inherit;\n      padding: 20px 30px;\n      display: flex;\n      align-items: center;\n      justify-content: flex-start;\n      flex-wrap: wrap;\n      flex-direction: row;\n      background-color: #ffffff;\n      border-bottom: 1px solid ",";\n\n      @media only screen and (max-width: 480px) {\n        padding: 20px;\n      }\n\n      @media only screen and (max-width: 400px) {\n        flex-direction: column;\n        justify-content: center;\n        align-items: flex-start;\n      }\n\n      .isoColorChooseWrapper {\n        display: flex;\n        align-items: center;\n        justify-content: flex-start;\n        flex-direction: row;\n        margin-right: ",";\n        margin-left: ",";\n\n        span {\n          font-size: 13px;\n          color: ",";\n        }\n\n        .isoColorChooser {\n          width: 20px;\n          height: 20px;\n          cursor: pointer;\n          border: 0;\n          margin: ",";\n          padding: 0;\n          ",";\n\n          &:empty {\n            visibility: visible;\n          }\n        }\n      }\n\n      .isoAddNoteBtn {\n        background-color: ",";\n        border: 0;\n        padding: 5px 15px;\n        margin-left: ",";\n        margin-right: ",";\n        ",";\n        ",";\n\n        @media only screen and (max-width: 400px) {\n          margin: ",";\n        }\n\n        span {\n          font-size: 12px;\n          font-weight: 400;\n          padding: 0;\n          text-transform: uppercase;\n          color: #ffffff;\n        }\n\n        &:hover {\n          background-color: ",";\n        }\n      }\n    }\n\n    .isoNoteEditingArea {\n      display: flex;\n      height: 100%;\n\n      @media (max-width: 800px) {\n        height: 300px;\n      }\n\n      .isoNoteTextbox {\n        font-size: 14px;\n        color: ",";\n        line-height: 24px;\n        width: 100%;\n        height: calc(100% - 30px);\n        border: 0;\n        outline: 0;\n        padding: 20px 30px;\n        resize: none;\n\n        &:focus {\n          box-shadow: none;\n        }\n\n        @media only screen and (max-width: 480px) {\n          padding: 20px;\n        }\n      }\n    }\n\n    @media (max-width: 767px) {\n      .isoNoteListSidebar.ant-layout-sider {\n        width: auto !important;\n        margin-bottom: 30px;\n        flex: 0 0 450px !important;\n      }\n    }\n  }\n"])),"",(function(n){return"rtl"===n["data-rtl"]?0:1}),Object(m.palette)("border",0),(function(n){return"rtl"===n["data-rtl"]?1:0}),Object(m.palette)("border",0),Object(m.palette)("border",0),(function(n){return"rtl"===n["data-rtl"]?"inherit":"auto"}),(function(n){return"rtl"===n["data-rtl"]?"auto":"inherit"}),Object(m.palette)("grayscale",0),(function(n){return"rtl"===n["data-rtl"]?"0 0 0 15px":"0 15px 0 0"}),Object(g.a)("3px"),Object(m.palette)("primary",0),(function(n){return"rtl"===n["data-rtl"]?"inherit":"auto"}),(function(n){return"rtl"===n["data-rtl"]?"auto":"inherit"}),Object(g.a)("3px"),Object(g.c)(),(function(n){return n["data-rtl"],"15px 0 0 0"}),Object(m.palette)("primary",1),Object(m.palette)("text",2)),w=h.d.div(o||(o=Object(x.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  max-height: calc(100vh - 160px);\n\n  @media only screen and (max-width: 767px) {\n    max-height: 60vh;\n  }\n\n  .isoSearchNotes {\n    flex-shrink: 0;\n    max-height: none;\n    width: 100%;\n    height: 77px;\n    padding: 0 15px;\n    padding-left: ",";\n    padding-right: ",";\n    border: 0;\n    border-bottom: 1px solid rgba(230, 230, 230, 0.7);\n    outline: 0 !important;\n    /* overflow: hidden; */\n    background-color: #ffffff;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n    border-radius: 0;\n    box-shadow: none;\n    ",";\n\n    @media only screen and (max-width: 767px) {\n      height: 50px;\n    }\n\n    .ant-input-group {\n      height: 100%;\n    }\n\n    &.ant-input-affix-wrapper:focus,\n    &.ant-input-affix-wrapper-focused {\n      border-color: rgba(230, 230, 230, 0.7);\n    }\n\n    .ant-input {\n      font-size: 14px;\n      font-weight: 400;\n      color: ",";\n      line-height: inherit;\n      padding: 0;\n      border: 0;\n      height: 100%;\n\n      &:focus {\n        box-shadow: none;\n        outline: none;\n      }\n    }\n\n    &:hover,\n    &:focus {\n      .ant-input {\n        border-color: rgba(230, 230, 230, 0.7) !important;\n      }\n    }\n\n    .ant-input-group-addon {\n      background: transparent;\n\n      button {\n        border: 0;\n      }\n    }\n  }\n\n  .ant-input-suffix {\n    left: ",";\n    right: ",";\n    color: ",";\n\n    .ant-input-search-icon {\n      &:before {\n        display: none;\n      }\n    }\n  }\n\n  .isoNoteList {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    max-height: 100%;\n    overflow: hidden;\n    overflow-y: auto;\n\n    .isoList {\n      width: 100%;\n      margin: 0;\n      display: flex;\n      justify-content: flex-start;\n      flex-shrink: 0;\n      padding: 0;\n      border-bottom: 1px solid ",";\n      text-align: ",";\n      position: relative;\n\n      &.active {\n        background-color: ",";\n      }\n\n      .isoNoteBGColor {\n        width: 5px;\n        display: flex;\n        margin: ",";\n        flex-shrink: 0;\n      }\n\n      .isoNoteText {\n        width: calc(100% - 60px);\n        margin: ",";\n        padding: 20px 0;\n        cursor: pointer;\n\n        h3 {\n          width: 100%;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          overflow: hidden;\n          color: ",";\n          font-weight: 500;\n        }\n\n        .isoNoteCreatedDate {\n          font-size: 13px;\n          color: ",";\n        }\n      }\n\n      .isoDeleteBtn {\n        width: 24px;\n        height: 24px;\n        background-color: transparent;\n        flex-shrink: 0;\n        position: absolute;\n        top: 5px;\n        right: ",";\n        left: ",";\n        padding: 0;\n        border: 0;\n        font-size: 14px;\n        color: ",";\n        ",";\n\n        &:hover {\n          color: ",";\n        }\n      }\n    }\n\n    .isoNotlistNotice {\n      font-size: 14px;\n      font-weight: 400;\n      color: ",";\n      line-height: inherit;\n      padding: 30px 20px;\n    }\n\n    .isoNoResultMsg {\n      padding: 15px 20px;\n      text-align: center;\n      color: ",";\n      font-weight: 500;\n      font-size: 14px;\n    }\n  }\n"])),(function(n){return"rtl"===n["data-rtl"]?"15px":"35px"}),(function(n){return"rtl"===n["data-rtl"]?"35px":"15px"}),Object(g.c)(),Object(m.palette)("text",0),(function(n){return"rtl"===n["data-rtl"]?"auto":"10px"}),(function(n){return"rtl"===n["data-rtl"]?"10px":"auto"}),Object(m.palette)("grayscale",0),Object(m.palette)("border",0),(function(n){return"rtl"===n["data-rtl"]?"right":"left"}),Object(m.palette)("secondary",1),(function(n){return"rtl"===n["data-rtl"]?"0 0 0 15px":"0 15px 0 0"}),(function(n){return"rtl"===n["data-rtl"]?"0 0 0 20px":"0 20px 0 0"}),Object(m.palette)("secondary",2),Object(m.palette)("grayscale",0),(function(n){return"rtl"===n["data-rtl"]?"inherit":"5px"}),(function(n){return"rtl"===n["data-rtl"]?"5px":"inherit"}),Object(m.palette)("grayscale",0),Object(g.c)(),Object(m.palette)("primary",0),Object(m.palette)("grayscale",0),Object(m.palette)("secondary",2)),v=Object(b.a)(N),y=Object(b.a)(w),j=t(919),O=t(213);var E=function(n){var e=l.a.useState(""),t=Object(s.a)(e,2),a=t[0],o=t[1];var r=function(n,e){return(e=e.toUpperCase())?n.filter((function(n){return n.note.toUpperCase().includes(e)})):n}(n.notes,a);return l.a.createElement(y,{className:"isoNoteListWrapper"},l.a.createElement(f.b,{placeholder:"Search Notes",className:"isoSearchNotes",value:a,onChange:function(n){o(n.target.value)}}),l.a.createElement("div",{className:"isoNoteList"},r&&r.length>0?l.a.createElement(j.a,{style:{height:"calc(100vh - 70px)"}},r.map((function(e){return function(e){var t=n.selectedId,a=n.deleteNote,o=n.changeNote,r=n.colors,i=t===e.id?"active":"";return l.a.createElement("div",{className:"isoList ".concat(i),key:e.id},l.a.createElement("div",{className:"isoNoteBGColor",style:{width:"5px",background:r[e.color]}}),l.a.createElement("div",{className:"isoNoteText",onClick:function(){return o(e.id)}},l.a.createElement("h3",null,e.note),l.a.createElement("span",{className:"isoNoteCreatedDate"},Object(p.e)(e.createTime))),l.a.createElement(u.b,{className:"isoDeleteBtn",icon:l.a.createElement(O.a,null),type:"default",onClick:function(){return a(e.id)}}))}(e)}))):l.a.createElement("span",{className:"isoNoResultMsg"},"No note found")))},C=t(693),k=t(555),z=d.a.changeNote,S=d.a.addNote,L=d.a.editNote,W=d.a.deleteNote,B=d.a.changeColor,T=r.a.Header,I=r.a.Content;function A(){var n=Object(c.d)((function(n){return n.Notes})),e=n.notes,t=n.selectedId,a=n.colors,o=n.seectedColor,i=Object(c.c)();var d=void 0!==t?e.filter((function(n){return n.id===t}))[0]:null;return l.a.createElement(v,{className:"isomorphicNoteComponent"},l.a.createElement("div",{style:{width:"340px"},className:"isoNoteListSidebar"},l.a.createElement(E,{notes:e,selectedId:t,changeNote:function(n){return i(z(n))},deleteNote:function(n){return i(W(n))},colors:a})),l.a.createElement(r.a,{className:"isoNotepadWrapper"},l.a.createElement(T,{className:"isoHeader"},void 0!==t?l.a.createElement("div",{className:"isoColorChooseWrapper"},l.a.createElement(C.a,{colors:a,changeColor:function(n){return i(B(n))},seectedColor:o}),l.a.createElement("span",null,l.a.createElement(k.a,{id:"notes.ChoseColor"}))):"",l.a.createElement(u.b,{type:"primary",className:"isoAddNoteBtn",onClick:function(){return i(S())}},l.a.createElement(k.a,{id:"notes.addNote"}))),l.a.createElement(I,{className:"isoNoteEditingArea"},void 0!==t?l.a.createElement(f.c,{className:"isoNoteTextbox",value:d.note,onChange:function(n){i(L(t,n.target.value))},autoFocus:!0}):"")))}},582:function(n,e,t){"use strict";t(603);var a=t(221);e.a=function(n,e,t){a.a[n]({message:e,description:t})}},603:function(n,e,t){"use strict";t(130),t(627)},627:function(n,e,t){},693:function(n,e,t){"use strict";t.d(e,"c",(function(){return o.a})),t.d(e,"a",(function(){return m})),t.d(e,"b",(function(){return v}));var a,o=t(582),r=(t(173),t(73)),i=t(131),l=t(0),c=t.n(l),d=t(695),s=t(49),p=t(42),u=t(51),f=t(78),x=p.d.div(a||(a=Object(s.a)(["\n  display: flex;\n  flex-flow: row wrap;\n  max-width: 160px;\n\n  .ant-btn {\n    width: 20px;\n    height: 20px;\n    border: 0;\n    outline: 0;\n    padding: 0;\n    margin: ",";\n    ",";\n\n    &:empty {\n      visibility: visible;\n    }\n\n    &:last-child {\n      margin: 0;\n    }\n\n    &:nth-child(n + 6) {\n      margin-top: 15px;\n    }\n\n    &:nth-child(5n) {\n      margin-right: 0;\n      margin-left: 0;\n    }\n  }\n"])),(function(n){return"rtl"===n["data-rtl"]?"0 0 0 15px":"0 15px 0 0"}),Object(u.a)("3px")),h=Object(f.a)(x),m=function(n){var e=n.colors,t=n.seectedColor,a=n.changeColor,o=c.a.useState(!1),l=Object(i.a)(o,2),s=l[0],p=l[1];return c.a.createElement(d.a,{content:c.a.createElement(h,{className:"isoColorOptions"},e.map((function(n,e){var t={background:n};return c.a.createElement(r.a,{key:e,onClick:function(){p(!1),a(e)},style:t})}))),trigger:"click",visible:s,onVisibleChange:function(){p((function(n){return!n}))}},c.a.createElement(r.a,{style:{backgroundColor:e[t]},className:"isoColorChooser"}))},g=t(1),b=t(538),N=t(541),w=t(134);function v(n){var e=c.a.useState({value:n.value,editable:!1}),t=Object(i.a)(e,2),a=t[0],o=t[1];function r(){o(Object(g.a)(Object(g.a)({},a),{},{editable:!1})),n.onChange&&n.onChange(n.itemKey,a.value)}var l=a.value,d=a.editable;return c.a.createElement("div",{className:"isoNoteContent"},d?c.a.createElement("div",{className:"isoNoteEditWrapper"},c.a.createElement(w.c,{rows:3,value:l,onChange:function(n){var e=n.target.value;o(Object(g.a)(Object(g.a)({},a),{},{value:e}))},onPressEnter:r}),c.a.createElement(b.a,{className:"isoNoteEditIcon",onClick:r})):c.a.createElement("p",{className:"isoNoteTextWrapper",onClick:function(){o(Object(g.a)(Object(g.a)({},a),{},{editable:!0}))}},l||" ",c.a.createElement(N.a,{className:"isoNoteEditIcon"})))}}}]);
//# sourceMappingURL=108.e0174bc4.chunk.js.map