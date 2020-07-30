(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{166:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return l})),n.d(e,"metadata",(function(){return s})),n.d(e,"rightToc",(function(){return f})),n.d(e,"default",(function(){return d}));var r=n(1),a=n(9),i=(n(0),n(196)),c=n(206),o=n(215),l={id:"info-lips",title:"Informational LIPs",title_toc_label:"Intro"},s={id:"info-lips",title:"Informational LIPs",description:"const types = [",source:"@site/all-docs__GENERATED/info-lips.mdx",permalink:"/info-lips",editUrl:"https://github.com/libra/lip/edit/master/all-docs__GENERATED/info-lips.mdx",sidebar:"infoLips"},u=[c.LIP_TYPE.INFORMATIONAL],f=[{value:"Draft",id:"draft",children:[]},{value:"Last Call",id:"last-call",children:[]},{value:"Accepted",id:"accepted",children:[]},{value:"Final",id:"final",children:[]},{value:"Rejected",id:"rejected",children:[]}],p={rightToc:f};function d(t){var e=t.components,n=Object(a.a)(t,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",{className:"description"},"Informational LIPs describe a Libra design issue, or provide general guidelines or information to the Libra community, but do not propose a material change or addition to the LPN. Informational LIPs do not necessarily represent Libra community consensus or a recommendation, so users and implementers are free to ignore Informational LIPs or follow their advice."),Object(i.b)("h2",{id:"draft"},"Draft"),Object(i.b)(o.a,{status:c.LIP_STATUS.DRAFT,types:u,mdxType:"LIPTable"}),Object(i.b)("h2",{id:"last-call"},"Last Call"),Object(i.b)(o.a,{status:c.LIP_STATUS.LAST_CALL,types:u,mdxType:"LIPTable"}),Object(i.b)("h2",{id:"accepted"},"Accepted"),Object(i.b)(o.a,{status:c.LIP_STATUS.ACCEPTED,types:u,mdxType:"LIPTable"}),Object(i.b)("h2",{id:"final"},"Final"),Object(i.b)(o.a,{status:c.LIP_STATUS.FINAL,types:u,mdxType:"LIPTable"}),Object(i.b)("h2",{id:"rejected"},"Rejected"),Object(i.b)(o.a,{status:c.LIP_STATUS.REJECTED,types:u,mdxType:"LIPTable"}))}d.isMDXComponent=!0},196:function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=a.a.createContext({}),u=function(t){var e=a.a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o({},e,{},t)),n},f=function(t){var e=u(t.components);return a.a.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},d=Object(r.forwardRef)((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),f=u(n),d=r,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||i;return n?a.a.createElement(m,o({ref:e},s,{components:n})):a.a.createElement(m,o({ref:e},s))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,c=new Array(i);c[0]=d;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o.mdxType="string"==typeof t?t:r,c[1]=o;for(var s=2;s<i;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},197:function(t,e,n){"use strict";var r=n(0),a=n(52);e.a=function(){return Object(r.useContext)(a.a)}},198:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n(202);var r=n(197);function a(t){var e=(Object(r.a)().siteConfig||{}).baseUrl,n=void 0===e?"/":e;if(!t)return t;return/^(https?:|\/\/)/.test(t)?t:t.startsWith("/")?n+t.slice(1):n+t}},200:function(t,e,n){var r=n(78),a=n(26);t.exports=function(t,e,n){if(r(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(a(t))}},201:function(t,e,n){var r=n(2)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,!"/./"[t](e)}catch(a){}}return!0}},202:function(t,e,n){"use strict";var r=n(12),a=n(24),i=n(200),c="".startsWith;r(r.P+r.F*n(201)("startsWith"),"String",{startsWith:function(t){var e=i(this,t,"startsWith"),n=a(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),r=String(t);return c?c.call(e,r,n):e.slice(n,n+r.length)===r}})},206:function(t,e){e.LIP_STATUS={DRAFT:"draft",LAST_CALL:"last call",ACCEPTED:"accepted",FINAL:"final",REJECTED:"rejected"},e.LIP_TYPE={CORE:"core",NETWORKING:"networking",INTERFACE:"interface",APPLICATION:"application",INFORMATIONAL:"informational",META:"meta"}},207:function(t,e,n){"use strict";var r=n(12),a=n(82)(!0);r(r.P,"Array",{includes:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),n(81)("includes")},208:function(t,e,n){"use strict";var r=n(12),a=n(200);r(r.P+r.F*n(201)("includes"),"String",{includes:function(t){return!!~a(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},209:function(t,e,n){"use strict";var r=n(8),a=n(24),i=n(53),c=n(54);n(55)("match",1,(function(t,e,n,o){return[function(n){var r=t(this),a=null==n?void 0:n[e];return void 0!==a?a.call(n,r):new RegExp(n)[e](String(r))},function(t){var e=o(n,t,this);if(e.done)return e.value;var l=r(t),s=String(this);if(!l.global)return c(l,s);var u=l.unicode;l.lastIndex=0;for(var f,p=[],d=0;null!==(f=c(l,s));){var m=String(f[0]);p[d]=m,""===m&&(l.lastIndex=i(s,a(l.lastIndex),u)),d++}return 0===d?null:p}]}))},210:function(t,e,n){"use strict";var r=n(12),a=n(28),i=n(27),c=n(14),o=[].sort,l=[1,2,3];r(r.P+r.F*(c((function(){l.sort(void 0)}))||!c((function(){l.sort(null)}))||!n(211)(o)),"Array",{sort:function(t){return void 0===t?o.call(i(this)):o.call(i(this),a(t))}})},211:function(t,e,n){"use strict";var r=n(14);t.exports=function(t,e){return!!t&&r((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},212:function(t,e,n){"use strict";(function(t){n(207),n(208),n(209),n(77);var e=/@\w+/g;t.exports={parseAuthors:function(t){return t.split(",").map((function(t){var n;return t.match(e)?n=t.match(e)[0].substring(1):t.includes(" ")||(n=t),{title:t,username:n}}))},toTitleCase:function(t){return t.split(" ").map((function(t){return""+t[0].toUpperCase()+t.substring(1)})).join("")}}}).call(this,n(213)(t))},213:function(t,e){t.exports=function(t){if(!t.webpackPolyfill){var e=Object.create(t);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},215:function(t,e,n){"use strict";n(25),n(19),n(20),n(80),n(210);var r=n(0),a=n.n(r),i=n(13),c=n.n(i),o=n(197),l=n(198),s=n(216),u=n(206),f=n(212),p=n(133),d=n.n(p),m=function(t){var e=t.index,n=t.title,r=t.username,i=(e>0?", ":"")+n;return r?a.a.createElement("a",{href:"https://github.com/"+r,target:"_blank"},i):i},b=function(t){var e=t.authors,n=t.num,r=t.title,i=(Object(o.a)().siteConfig.themeConfig,Object(f.parseAuthors)(e));return a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement("a",{href:Object(l.a)("/lip-"+n)},n)),a.a.createElement("td",null,r),a.a.createElement("td",null,i.map((function(t,e){var n=t.title,r=t.username;return a.a.createElement(m,{index:e,title:n,username:r})}))))},h=function(t){var e=t.status,n=(t.title,function(t,e){return e.reduce((function(e,n){return e.concat(s[n][t])}),[]).sort((function(t,e){return t.lip<e.lip?1:-1}))}(e,t.types));return a.a.createElement("table",{className:d.a.table},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Number"),a.a.createElement("th",{className:d.a.title},"Title"),a.a.createElement("th",null,"Author(s)"))),a.a.createElement("tbody",null,n.map((function(t){var e=t.lip,n=t.authors,r=t.title;return a.a.createElement(b,{authors:n,key:e,num:e,title:r})}))))};h.propTypes={status:c.a.oneOf(Object.values(u.LIP_STATUS)).isRequired,types:c.a.arrayOf(c.a.oneOf(Object.values(u.LIP_TYPE)))},h.defaultProps={types:Object.values(u.LIP_TYPE)},e.a=h},216:function(t){t.exports=JSON.parse('{"core":{"draft":[],"last call":[],"accepted":[],"final":[],"rejected":[]},"networking":{"draft":[],"last call":[],"accepted":[],"final":[],"rejected":[]},"interface":{"draft":[],"last call":[],"accepted":[],"final":[],"rejected":[]},"application":{"draft":[],"last call":[],"accepted":[],"final":[],"rejected":[]},"informational":{"draft":[{"lip":1,"title":"Off-chain API","authors":"Kevin Hurley (@kphfb), Dmitry Pimenov, George Danezis","status":"draft","type":"informational","created":"05/29/2020"},{"lip":2,"title":"Libra Roles and Permissions","authors":"Sam Blackshear, Tim Zakian","status":"draft","type":"informational","created":"06/26/2020"},{"lip":3,"title":"Libra Upgrade Management","authors":"Zekun Li (@zekun000)","status":"draft","type":"informational","created":"06/09/2020"},{"lip":4,"title":"Transaction Metadata Specification","authors":"Kevin Hurley (@kphfb)","status":"draft","type":"informational","created":"06/26/2020"},{"lip":5,"title":"Address formatting","authors":"Dmitry Pimenov (@dpim)","status":"draft","type":"informational","created":"07/08/2020"}],"last call":[],"accepted":[],"final":[{"lip":0,"title":"Libra Improvement Proposals","authors":"libra","status":"final","type":"informational","created":"2/26/20"}],"rejected":[]},"meta":{"draft":[],"last call":[],"accepted":[],"final":[],"rejected":[]}}')}}]);