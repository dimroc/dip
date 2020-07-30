(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{191:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return h}));var n,i=a(1),r=a(9),o=(a(0),a(196)),s=a(236),c=a(198),l=a(235),p={id:"overview",title:"LIP Overview + Governance",sidebar_label:"Overview"},b={id:"overview",title:"LIP Overview + Governance",description:"<Section>",source:"@site/all-docs__GENERATED/overview.mdx",permalink:"/overview",editUrl:"https://github.com/libra/lip/edit/master/all-docs__GENERATED/overview.mdx",sidebar_label:"Overview",sidebar:"main"},d=[{value:"LIP types",id:"lip-types",children:[]},{value:"The LIP process",id:"the-lip-process",children:[]},{value:"What goes into a LIP",id:"what-goes-into-a-lip",children:[]}],u=(n="Section",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),m={rightToc:d};function h(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(u,{mdxType:"Section"},Object(o.b)("p",null,"  Libra Improvement Proposals (LIPs) offer the Libra developer community a way to participate in advancing the features and functioning of the Libra payment network (LPN), either by proposing a change or engaging in discussion about a proposal."),Object(o.b)("p",null,"  Soon after a full Libra specification is posted to libra.org as the root standard LIP, proposals that  address the core Libra Blockchain protocol, the Move development platform, smart contracts and systems for smart-contract verification, operating standards, APIs, and off-chain mechanisms can be addressed with a LIP. The LIP itself is the design document that describes the proposed change or new feature. As a text file maintained in a versioned repository, it serves as the historical record of decisions made during the approval process."),Object(o.b)("p",null,"  The LIP program operates under the governance of the Libra Association, with technical decisions supervised by the Association\u2019s Technical Steering Committee (TSC). Day-to-day technical decisions are made using a framework inspired by standards bodies (such as the W3C and IETF) and open source projects (such as Python, the Linux Foundation, and Apache) to coordinate the work of open source contributors."),Object(o.b)("p",null,"  This process is based on the family of approaches derived from Python\u2019s PEP process. It is supported by a team of Maintainers who are assigned individually to serve as the LIP Manager on an active LIP and who work to build consensus among Libra community members about technical decisions. Additionally, LIP matters are routinely discussed by the Lead Maintainer with the TSC.")),Object(o.b)(u,{mdxType:"Section"},Object(o.b)("h2",{id:"lip-types"},"LIP types"),Object(o.b)("p",null,"There are three types of LIP:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Standard LIPs")," describe any change or addition that affects LPN, such as a change to the Libra Blockchain protocol, a change to transaction processing, proposed application standards/conventions, or any change or addition that affects the interoperability of applications using LPN.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Process LIPs")," describe the governance procedures and tools of the Libra project, such as the LIP procedure itself, GitHub plug-ins, and other development tools and guidelines.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Informational LIPs")," describe a Libra project design issue, or provide general guidelines or information to the Libra community, but do not propose a material change or addition to LPN. Informational LIPs do not necessarily represent Libra community consensus or a recommendation, so users and implementers are free to ignore Informational LIPs or follow their advice.")))),Object(o.b)(u,{mdxType:"Section"},Object(o.b)("h2",{id:"the-lip-process"},"The LIP process"),Object(o.b)(s.a,{stages:["IDEA","DRAFT","LAST CALL","ACCEPTED","FINAL"],mdxType:"LipProcessInfographic"}),Object(o.b)("p",null,"Parties involved in the process are the ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"LIP author(s)"))," and a designated ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"LIP Manager")),". The Lead Maintainer shall act as the primary LIP Manager and can appoint at any time a delegate Manager to specific LIPs."),Object(o.b)("p",null,"The formal LIP process will typically (and advisably) begin after the champion of the proposal has already discussed and socialized it with the Libra community (see below for what goes into a LIP). It is comprised of the following steps:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Idea")," \u2013 Authors will socialize their idea with the developer community and Maintainers, possibly by writing a GitHub Issue and getting feedback. If possible (and relevant), authors should include in discussions an implementation to support their proposal."),Object(o.b)("p",{parentName:"li"},"Once the discussion reaches a mature point, the formal LIP process starts with a pull-request to the libra/lips folder. The status field of the document should be \u201cDraft\u201d at this point. A LIP Manager will review/comment/approve/deny the pull-request."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)(l.b,{type:l.a.INLINE_START,src:Object(c.a)("img/check.svg"),mdxType:"Icon"})," Draft \u2013 If agreeable, LIP Manager will assign the LIP a number (generally the issue or PR number related to the LIP, and ask to rename or move to a folder/file with that number) and approve the pull request. The LIP Manager will not unreasonably deny a LIP."),Object(o.b)("li",{parentName:"ul"},Object(o.b)(l.b,{type:l.a.INLINE_START,src:Object(c.a)("img/stop.svg"),mdxType:"Icon"})," Draft \u2013 Reasons for denying Draft status include misalignment with Libra mission or Association policy, being too unfocused, too broad, duplication of effort, being technically unjustified, not providing proper motivation, or not addressing backwards compatibility. The Authors can work to refine and resubmit their LIP Idea for review again."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Draft")," \u2013 After the draft is merged, additional changes may be submitted via pull requests. When a LIP appears to be completed and stable, Authors may ask to change the status to Last Call."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)(l.b,{type:l.a.INLINE_START,src:Object(c.a)("img/check.svg"),mdxType:"Icon"}),"  Last Call \u2013 If agreeable, the LIP Manager will approve the Last Call status and set a reasonable amount of time (usually 2-4 weeks) for a final review. Additional time can be granted by the LIP Manager if requested."),Object(o.b)("li",{parentName:"ul"},Object(o.b)(l.b,{type:l.a.INLINE_START,src:Object(c.a)("img/stop.svg"),mdxType:"Icon"}),"  Last Call \u2013 A request for Last Call will be denied if material changes are still needed for the draft. LIPs should only be promoted to Last Call once."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Last Call")," - This LIP will be listed prominently on the Libra public Discourse under the LIP category. The final status change by the LIP Manager will be either Accepted or Rejected."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)(l.b,{type:l.a.INLINE_START,src:Object(c.a)("img/check.svg"),mdxType:"Icon"})," Accepted \u2013 A successful Last Call without any material changes or unaddressed technical complaints will become Accepted. This status signals that material changes are unlikely and Libra Maintainers should support driving this LIP for inclusion."),Object(o.b)("li",{parentName:"ul"},Object(o.b)(l.b,{type:l.a.INLINE_START,src:Object(c.a)("img/stop.svg"),mdxType:"Icon"})," Rejected \u2013 The Maintainers can decide to mark this LIP as Rejected at their discretion, e.g., a major, but uncorrectable, flaw was found in the LIP."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Accepted")," - A LIP in the Accepted state means the TSC has determined it is ready for active implementation"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)(l.b,{type:l.a.INLINE_START,src:Object(c.a)("img/check.svg"),mdxType:"Icon"}),"  Final \u2013 LIP is deployed to mainnet. When the implementation is complete and deployed to mainnet the status will be changed to \u201cFinal\u201d."),Object(o.b)("li",{parentName:"ul"},Object(o.b)(l.b,{type:l.a.INLINE_START,src:Object(c.a)("img/stop.svg"),mdxType:"Icon"}),"  Draft \u2013 If new information becomes available an Accepted LIP can be moved back into Draft status for necessary changes."),Object(o.b)("li",{parentName:"ul"},Object(o.b)(l.b,{type:l.a.INLINE_START,src:Object(c.a)("img/stop.svg"),mdxType:"Icon"}),"  Deprecated \u2013 The LIP Manager or Maintainers may mark a LIP Deprecated if it is superseded by a later proposal or otherwise becomes irrelevant."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Final")," \u2013 The Final state of a LIP means the necessary implementations of the LIP are complete and deployed to the codebase. This LIP represents the current state-of-the-art. A Final LIP should only be updated to correct errata."))),Object(o.b)("p",null,"A LIP may refer to related/dependent LIPs. Every LIP will be assigned a status tag as it evolves. At every stage there can be multiple revisions/reviews until the next stage.")),Object(o.b)(u,{mdxType:"Section"},Object(o.b)("h2",{id:"what-goes-into-a-lip"},"What goes into a LIP"),Object(o.b)("p",null,"The following is a summary of what each LIP should include. For an example LIP, see ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/lip-0"}),"LIP 0"),". There is also a ",Object(o.b)("a",{href:"https://github.com/libra/lip/blob/master/lip-template.md"},"template")," to help you get started."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Preamble - RFC 822 style headers containing metadata about the LIP, including the LIP number, a short descriptive title (limited to a maximum of 44 characters), and the author details.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Simple Summary - Provide a simplified and layman-accessible explanation of the LIP.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Abstract - a short (~200 word) description of the technical issue being addressed.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Motivation (*optional) - The motivation is critical for LIPs that want to change the Libra protocol. It should clearly explain why the existing protocol specification is inadequate to address the problem that the LIP solves. LIP submissions without sufficient motivation may be rejected outright.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Specification - The technical specification should describe the syntax and semantics of any new feature. The specification should be detailed enough to allow competing, interoperable implementations of the Libra protocol or any other Libra platforms that may emerge.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Rationale - The rationale fleshes out the specification by describing what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work, e.g., how the feature is supported in other languages. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Backwards Compatibility - All LIPs that introduce backwards incompatibilities must include a section describing these incompatibilities and their severity. The LIP must explain how the author proposes to deal with these incompatibilities. LIP submissions without a sufficient backwards compatibility treatise may be rejected outright.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Test Cases - Test cases for an implementation are mandatory for LIPs that are affecting consensus changes. Other LIPs can choose to include links to test cases if applicable.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Implementations - The implementations must be completed before any LIP is given status \u201cFinal,\u201d but it need not be completed before the LIP is merged as draft. While there is merit to the approach of reaching consensus on the specification and rationale before writing code, the principle of \u201crough consensus and running code\u201d is still useful when it comes to resolving many discussions of API details.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Copyright Waiver \u2013 All LIPs must be in the public domain. Please use the copyright notice featured at the bottom of this page.")))))}h.isMDXComponent=!0},196:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s({},t,{},e)),a},b=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(a),u=n,m=b["".concat(o,".").concat(u)]||b[u]||d[u]||r;return a?i.a.createElement(m,s({ref:t},l,{components:a})):i.a.createElement(m,s({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<r;l++)o[l]=a[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},197:function(e,t,a){"use strict";var n=a(0),i=a(52);t.a=function(){return Object(n.useContext)(i.a)}},198:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));a(202);var n=a(197);function i(e){var t=(Object(n.a)().siteConfig||{}).baseUrl,a=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?a+e.slice(1):a+e}},200:function(e,t,a){var n=a(78),i=a(26);e.exports=function(e,t,a){if(n(t))throw TypeError("String#"+a+" doesn't accept regex!");return String(i(e))}},201:function(e,t,a){var n=a(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(a){try{return t[n]=!1,!"/./"[e](t)}catch(i){}}return!0}},202:function(e,t,a){"use strict";var n=a(12),i=a(24),r=a(200),o="".startsWith;n(n.P+n.F*a(201)("startsWith"),"String",{startsWith:function(e){var t=r(this,e,"startsWith"),a=i(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return o?o.call(t,n,a):t.slice(a,a+n.length)===n}})},235:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));a(25),a(19),a(20),a(80);var n=a(0),i=a.n(n),r=a(13),o=a.n(r),s=a(137),c=a.n(s),l={INLINE_START:"inline-start",DEFAULT:"defalt"},p=function(e){var t=e.src,a=e.type;return i.a.createElement("img",{className:c.a[a],src:t})};p.propTypes={type:o.a.oneOf(Object.values(l)),src:o.a.string.isRequired},p.defaultProps={type:l.DEFAULT},t.b=p},236:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(138),o=a.n(r);t.a=function(e){var t=e.stages;return i.a.createElement("div",{className:o.a.root},i.a.createElement("div",{className:o.a.stagesContainer},t.map((function(e,a){return i.a.createElement(i.a.Fragment,{key:e},i.a.createElement("div",{className:o.a.stage},i.a.createElement("span",{className:o.a.counter},"0",a+1),i.a.createElement("span",{className:o.a.stageName},e)),a+1!==t.length&&i.a.createElement("hr",{className:o.a.divider}))}))))}}}]);