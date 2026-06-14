import{e as K,h as b,aN as yt,aO as wt,l as E,aP as we,aQ as St,aR as te,aS as Ct,k as Rt,q as Pe,aT as Tt,aK as $t,G as zt,aC as _t,aB as Pt,aU as Wt,j as G,aV as kt,c as r,b as l,a as m,d as $,az as Et,aW as oe,aX as Se,aH as ie,u as Lt,f as We,aY as Bt,ah as At,y as se,an as le,o as jt,aZ as Ht,a0 as It,i as Ot,aL as Ce,a_ as Ft,al as j,a$ as Q,ac as Mt,b0 as Dt,b1 as Vt,b2 as Nt,p as Ut,t as H,ak as Z,L as Xt,b3 as Gt,z as ke,F as Ee,K as Le,C as ee,b4 as Kt,b5 as qt}from"./index-BIpz-lxO.js";const Yt=we(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[we("&::-webkit-scrollbar",{width:0,height:0})]),Jt=K({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=E(null);function n(s){!(s.currentTarget.offsetWidth<s.currentTarget.scrollWidth)||s.deltaY===0||(s.currentTarget.scrollLeft+=s.deltaY+s.deltaX,s.preventDefault())}const i=yt();return Yt.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:wt,ssr:i}),Object.assign({selfRef:e,handleWheel:n},{scrollTo(...s){var u;(u=e.value)===null||u===void 0||u.scrollTo(...s)}})},render(){return b("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}});var Qt=/\s/;function Zt(e){for(var n=e.length;n--&&Qt.test(e.charAt(n)););return n}var ea=/^\s+/;function ta(e){return e&&e.slice(0,Zt(e)+1).replace(ea,"")}var Re=NaN,aa=/^[-+]0x[0-9a-f]+$/i,ra=/^0b[01]+$/i,na=/^0o[0-7]+$/i,oa=parseInt;function Te(e){if(typeof e=="number")return e;if(St(e))return Re;if(te(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=te(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=ta(e);var i=ra.test(e);return i||na.test(e)?oa(e.slice(2),i?2:8):aa.test(e)?Re:+e}var de=function(){return Ct.Date.now()},ia="Expected a function",sa=Math.max,la=Math.min;function da(e,n,i){var p,s,u,v,f,g,x=0,y=!1,T=!1,k=!0;if(typeof e!="function")throw new TypeError(ia);n=Te(n)||0,te(i)&&(y=!!i.leading,T="maxWait"in i,u=T?sa(Te(i.maxWait)||0,n):u,k="trailing"in i?!!i.trailing:k);function C(d){var W=p,F=s;return p=s=void 0,x=d,v=e.apply(F,W),v}function S(d){return x=d,f=setTimeout(P,n),y?C(d):v}function R(d){var W=d-g,F=d-x,M=n-W;return T?la(M,u-F):M}function _(d){var W=d-g,F=d-x;return g===void 0||W>=n||W<0||T&&F>=u}function P(){var d=de();if(_(d))return z(d);f=setTimeout(P,R(d))}function z(d){return f=void 0,k&&p?C(d):(p=s=void 0,v)}function I(){f!==void 0&&clearTimeout(f),x=0,p=g=s=f=void 0}function A(){return f===void 0?v:z(de())}function h(){var d=de(),W=_(d);if(p=arguments,s=this,g=d,W){if(f===void 0)return S(g);if(T)return clearTimeout(f),f=setTimeout(P,n),C(g)}return f===void 0&&(f=setTimeout(P,n)),v}return h.cancel=I,h.flush=A,h}var ca="Expected a function";function ba(e,n,i){var p=!0,s=!0;if(typeof e!="function")throw new TypeError(ca);return te(i)&&(p="leading"in i?!!i.leading:p,s="trailing"in i?!!i.trailing:s),da(e,n,{leading:p,maxWait:n,trailing:s})}const fa=K({name:"Add",render(){return b("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},b("path",{d:"M256 112V400M400 256H112",stroke:"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}))}}),pe=Rt("n-tabs"),Be={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},ga=K({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:Be,slots:Object,setup(e){const n=Pe(pe,null);return n||Tt("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:n.paneStyleRef,class:n.paneClassRef,mergedClsPrefix:n.mergedClsPrefixRef}},render(){return b("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),pa=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},kt(Be,["displayDirective"])),fe=K({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:pa,setup(e){const{mergedClsPrefixRef:n,valueRef:i,typeRef:p,closableRef:s,tabStyleRef:u,addTabStyleRef:v,tabClassRef:f,addTabClassRef:g,tabChangeIdRef:x,onBeforeLeaveRef:y,triggerRef:T,handleAdd:k,activateTab:C,handleClose:S}=Pe(pe);return{trigger:T,mergedClosable:G(()=>{if(e.internalAddable)return!1;const{closable:R}=e;return R===void 0?s.value:R}),style:u,addStyle:v,tabClass:f,addTabClass:g,clsPrefix:n,value:i,type:p,handleClose(R){R.stopPropagation(),!e.disabled&&S(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){k();return}const{name:R}=e,_=++x.id;if(R!==i.value){const{value:P}=y;P?Promise.resolve(P(e.name,i.value)).then(z=>{z&&x.id===_&&C(R)}):C(R)}}}},render(){const{internalAddable:e,clsPrefix:n,name:i,disabled:p,label:s,tab:u,value:v,mergedClosable:f,trigger:g,$slots:{default:x}}=this,y=s??u;return b("div",{class:`${n}-tabs-tab-wrapper`},this.internalLeftPadded?b("div",{class:`${n}-tabs-tab-pad`}):null,b("div",Object.assign({key:i,"data-name":i,"data-disabled":p?!0:void 0},$t({class:[`${n}-tabs-tab`,v===i&&`${n}-tabs-tab--active`,p&&`${n}-tabs-tab--disabled`,f&&`${n}-tabs-tab--closable`,e&&`${n}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:g==="click"?this.activateTab:void 0,onMouseenter:g==="hover"?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),b("span",{class:`${n}-tabs-tab__label`},e?b(zt,null,b("div",{class:`${n}-tabs-tab__height-placeholder`}," "),b(_t,{clsPrefix:n},{default:()=>b(fa,null)})):x?x():typeof y=="object"?y:Pt(y??i)),f&&this.type==="card"?b(Wt,{clsPrefix:n,class:`${n}-tabs-tab__close`,onClick:this.handleClose,disabled:p}):null))}}),ua=r("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[l("segment-type",[r("tabs-rail",[m("&.transition-disabled",[r("tabs-capsule",`
 transition: none;
 `)])])]),l("top",[r("tab-pane",`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),l("left",[r("tab-pane",`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),l("left, right",`
 flex-direction: row;
 `,[r("tabs-bar",`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),r("tabs-tab",`
 padding: var(--n-tab-padding-vertical); 
 `)]),l("right",`
 flex-direction: row-reverse;
 `,[r("tab-pane",`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),r("tabs-bar",`
 left: 0;
 `)]),l("bottom",`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[r("tab-pane",`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),r("tabs-bar",`
 top: 0;
 `)]),r("tabs-rail",`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[r("tabs-capsule",`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),r("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[r("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[l("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),m("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),l("flex",[r("tabs-nav",`
 width: 100%;
 position: relative;
 `,[r("tabs-wrapper",`
 width: 100%;
 `,[r("tabs-tab",`
 margin-right: 0;
 `)])])]),r("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[$("prefix, suffix",`
 display: flex;
 align-items: center;
 `),$("prefix","padding-right: 16px;"),$("suffix","padding-left: 16px;")]),l("top, bottom",[m(">",[r("tabs-nav",[r("tabs-nav-scroll-wrapper",[m("&::before",`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),m("&::after",`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),l("shadow-start",[m("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),l("shadow-end",[m("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),l("left, right",[r("tabs-nav-scroll-content",`
 flex-direction: column;
 `),m(">",[r("tabs-nav",[r("tabs-nav-scroll-wrapper",[m("&::before",`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),m("&::after",`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),l("shadow-start",[m("&::before",`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),l("shadow-end",[m("&::after",`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),r("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[r("tabs-nav-y-scroll",`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[m("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `)]),m("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),r("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),r("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),r("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),r("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[l("disabled",{cursor:"not-allowed"}),$("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),$("label",`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),r("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[m("&.transition-disabled",`
 transition: none;
 `),l("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),r("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),r("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[m("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),m("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),m("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),m("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),m("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),r("tabs-tab-pad",`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),l("line-type, bar-type",[r("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[m("&:hover",{color:"var(--n-tab-text-color-hover)"}),l("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),l("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),r("tabs-nav",[l("line-type",[l("top",[$("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 bottom: -1px;
 `)]),l("left",[$("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 right: -1px;
 `)]),l("right",[$("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 left: -1px;
 `)]),l("bottom",[$("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 top: -1px;
 `)]),$("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-bar",`
 border-radius: 0;
 `)]),l("card-type",[$("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[l("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 justify-content: center;
 `,[$("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),Et("disabled",[m("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),l("closable","padding-right: 8px;"),l("active",`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),l("disabled","color: var(--n-tab-text-color-disabled);")])]),l("left, right",`
 flex-direction: column; 
 `,[$("prefix, suffix",`
 padding: var(--n-tab-padding-vertical);
 `),r("tabs-wrapper",`
 flex-direction: column;
 `),r("tabs-tab-wrapper",`
 flex-direction: column;
 `,[r("tabs-tab-pad",`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),l("top",[l("card-type",[r("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);"),$("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[l("active",`
 border-bottom: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),l("left",[l("card-type",[r("tabs-scroll-padding","border-right: 1px solid var(--n-tab-border-color);"),$("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[l("active",`
 border-right: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),l("right",[l("card-type",[r("tabs-scroll-padding","border-left: 1px solid var(--n-tab-border-color);"),$("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-tab",`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[l("active",`
 border-left: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),l("bottom",[l("card-type",[r("tabs-scroll-padding","border-top: 1px solid var(--n-tab-border-color);"),$("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),r("tabs-tab",`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[l("active",`
 border-top: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),ce=ba,va=Object.assign(Object.assign({},We.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:String,placement:{type:String,default:"top"},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),ma=K({name:"Tabs",props:va,slots:Object,setup(e,{slots:n}){var i,p,s,u;const{mergedClsPrefixRef:v,inlineThemeDisabled:f,mergedComponentPropsRef:g}=Lt(e),x=We("Tabs","-tabs",ua,Bt,e,v),y=E(null),T=E(null),k=E(null),C=E(null),S=E(null),R=E(null),_=E(!0),P=E(!0),z=Ce(e,["labelSize","size"]),I=G(()=>{var t,a;if(z.value)return z.value;const o=(a=(t=g?.value)===null||t===void 0?void 0:t.Tabs)===null||a===void 0?void 0:a.size;return o||"medium"}),A=Ce(e,["activeName","value"]),h=E((p=(i=A.value)!==null&&i!==void 0?i:e.defaultValue)!==null&&p!==void 0?p:n.default?(u=(s=oe(n.default())[0])===null||s===void 0?void 0:s.props)===null||u===void 0?void 0:u.name:null),d=At(A,h),W={id:0},F=G(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});se(d,()=>{W.id=0,q(),ve()});function M(){var t;const{value:a}=d;return a===null?null:(t=y.value)===null||t===void 0?void 0:t.querySelector(`[data-name="${a}"]`)}function Ae(t){if(e.type==="card")return;const{value:a}=T;if(!a)return;const o=a.style.opacity==="0";if(t){const c=`${v.value}-tabs-bar--disabled`,{barWidth:w,placement:L}=e;if(t.dataset.disabled==="true"?a.classList.add(c):a.classList.remove(c),["top","bottom"].includes(L)){if(ue(["top","maxHeight","height"]),typeof w=="number"&&t.offsetWidth>=w){const B=Math.floor((t.offsetWidth-w)/2)+t.offsetLeft;a.style.left=`${B}px`,a.style.maxWidth=`${w}px`}else a.style.left=`${t.offsetLeft}px`,a.style.maxWidth=`${t.offsetWidth}px`;a.style.width="8192px",o&&(a.style.transition="none"),a.offsetWidth,o&&(a.style.transition="",a.style.opacity="1")}else{if(ue(["left","maxWidth","width"]),typeof w=="number"&&t.offsetHeight>=w){const B=Math.floor((t.offsetHeight-w)/2)+t.offsetTop;a.style.top=`${B}px`,a.style.maxHeight=`${w}px`}else a.style.top=`${t.offsetTop}px`,a.style.maxHeight=`${t.offsetHeight}px`;a.style.height="8192px",o&&(a.style.transition="none"),a.offsetHeight,o&&(a.style.transition="",a.style.opacity="1")}}}function je(){if(e.type==="card")return;const{value:t}=T;t&&(t.style.opacity="0")}function ue(t){const{value:a}=T;if(a)for(const o of t)a.style[o]=""}function q(){if(e.type==="card")return;const t=M();t?Ae(t):je()}function ve(){var t;const a=(t=S.value)===null||t===void 0?void 0:t.$el;if(!a)return;const o=M();if(!o)return;const{scrollLeft:c,offsetWidth:w}=a,{offsetLeft:L,offsetWidth:B}=o;c>L?a.scrollTo({top:0,left:L,behavior:"smooth"}):L+B>c+w&&a.scrollTo({top:0,left:L+B-w,behavior:"smooth"})}const Y=E(null);let ae=0,O=null;function He(t){const a=Y.value;if(a){ae=t.getBoundingClientRect().height;const o=`${ae}px`,c=()=>{a.style.height=o,a.style.maxHeight=o};O?(c(),O(),O=null):O=c}}function Ie(t){const a=Y.value;if(a){const o=t.getBoundingClientRect().height,c=()=>{document.body.offsetHeight,a.style.maxHeight=`${o}px`,a.style.height=`${Math.max(ae,o)}px`};O?(O(),O=null,c()):O=c}}function Oe(){const t=Y.value;if(t){t.style.maxHeight="",t.style.height="";const{paneWrapperStyle:a}=e;if(typeof a=="string")t.style.cssText=a;else if(a){const{maxHeight:o,height:c}=a;o!==void 0&&(t.style.maxHeight=o),c!==void 0&&(t.style.height=c)}}}const he={value:[]},ge=E("next");function Fe(t){const a=d.value;let o="next";for(const c of he.value){if(c===a)break;if(c===t){o="prev";break}}ge.value=o,Me(t)}function Me(t){const{onActiveNameChange:a,onUpdateValue:o,"onUpdate:value":c}=e;a&&Z(a,t),o&&Z(o,t),c&&Z(c,t),h.value=t}function De(t){const{onClose:a}=e;a&&Z(a,t)}function me(){const{value:t}=T;if(!t)return;const a="transition-disabled";t.classList.add(a),q(),t.classList.remove(a)}const D=E(null);function re({transitionDisabled:t}){const a=y.value;if(!a)return;t&&a.classList.add("transition-disabled");const o=M();o&&D.value&&(D.value.style.width=`${o.offsetWidth}px`,D.value.style.height=`${o.offsetHeight}px`,D.value.style.transform=`translateX(${o.offsetLeft-Ft(getComputedStyle(a).paddingLeft)}px)`,t&&D.value.offsetWidth),t&&a.classList.remove("transition-disabled")}se([d],()=>{e.type==="segment"&&le(()=>{re({transitionDisabled:!1})})}),jt(()=>{e.type==="segment"&&re({transitionDisabled:!0})});let xe=0;function Ve(t){var a;if(t.contentRect.width===0&&t.contentRect.height===0||xe===t.contentRect.width)return;xe=t.contentRect.width;const{type:o}=e;if((o==="line"||o==="bar")&&me(),o!=="segment"){const{placement:c}=e;ne((c==="top"||c==="bottom"?(a=S.value)===null||a===void 0?void 0:a.$el:R.value)||null)}}const Ne=ce(Ve,64);se([()=>e.justifyContent,()=>e.size],()=>{le(()=>{const{type:t}=e;(t==="line"||t==="bar")&&me()})});const V=E(!1);function Ue(t){var a;const{target:o,contentRect:{width:c,height:w}}=t,L=o.parentElement.parentElement.offsetWidth,B=o.parentElement.parentElement.offsetHeight,{placement:U}=e;if(!V.value)U==="top"||U==="bottom"?L<c&&(V.value=!0):B<w&&(V.value=!0);else{const{value:X}=C;if(!X)return;U==="top"||U==="bottom"?L-c>X.$el.offsetWidth&&(V.value=!1):B-w>X.$el.offsetHeight&&(V.value=!1)}ne(((a=S.value)===null||a===void 0?void 0:a.$el)||null)}const Xe=ce(Ue,64);function Ge(){const{onAdd:t}=e;t&&t(),le(()=>{const a=M(),{value:o}=S;!a||!o||o.scrollTo({left:a.offsetLeft,top:0,behavior:"smooth"})})}function ne(t){if(!t)return;const{placement:a}=e;if(a==="top"||a==="bottom"){const{scrollLeft:o,scrollWidth:c,offsetWidth:w}=t;_.value=o<=0,P.value=o+w>=c}else{const{scrollTop:o,scrollHeight:c,offsetHeight:w}=t;_.value=o<=0,P.value=o+w>=c}}const Ke=ce(t=>{ne(t.target)},64);Ut(pe,{triggerRef:H(e,"trigger"),tabStyleRef:H(e,"tabStyle"),tabClassRef:H(e,"tabClass"),addTabStyleRef:H(e,"addTabStyle"),addTabClassRef:H(e,"addTabClass"),paneClassRef:H(e,"paneClass"),paneStyleRef:H(e,"paneStyle"),mergedClsPrefixRef:v,typeRef:H(e,"type"),closableRef:H(e,"closable"),valueRef:d,tabChangeIdRef:W,onBeforeLeaveRef:H(e,"onBeforeLeave"),activateTab:Fe,handleClose:De,handleAdd:Ge}),Ht(()=>{q(),ve()}),It(()=>{const{value:t}=k;if(!t)return;const{value:a}=v,o=`${a}-tabs-nav-scroll-wrapper--shadow-start`,c=`${a}-tabs-nav-scroll-wrapper--shadow-end`;_.value?t.classList.remove(o):t.classList.add(o),P.value?t.classList.remove(c):t.classList.add(c)});const qe={syncBarPosition:()=>{q()}},Ye=()=>{re({transitionDisabled:!0})},ye=G(()=>{const{value:t}=I,{type:a}=e,o={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[a],c=`${t}${o}`,{self:{barColor:w,closeIconColor:L,closeIconColorHover:B,closeIconColorPressed:U,tabColor:X,tabBorderColor:Je,paneTextColor:Qe,tabFontWeight:Ze,tabBorderRadius:et,tabFontWeightActive:tt,colorSegment:at,fontWeightStrong:rt,tabColorSegment:nt,closeSize:ot,closeIconSize:it,closeColorHover:st,closeColorPressed:lt,closeBorderRadius:dt,[j("panePadding",t)]:J,[j("tabPadding",c)]:ct,[j("tabPaddingVertical",c)]:bt,[j("tabGap",c)]:ft,[j("tabGap",`${c}Vertical`)]:pt,[j("tabTextColor",a)]:ut,[j("tabTextColorActive",a)]:vt,[j("tabTextColorHover",a)]:ht,[j("tabTextColorDisabled",a)]:gt,[j("tabFontSize",t)]:mt},common:{cubicBezierEaseInOut:xt}}=x.value;return{"--n-bezier":xt,"--n-color-segment":at,"--n-bar-color":w,"--n-tab-font-size":mt,"--n-tab-text-color":ut,"--n-tab-text-color-active":vt,"--n-tab-text-color-disabled":gt,"--n-tab-text-color-hover":ht,"--n-pane-text-color":Qe,"--n-tab-border-color":Je,"--n-tab-border-radius":et,"--n-close-size":ot,"--n-close-icon-size":it,"--n-close-color-hover":st,"--n-close-color-pressed":lt,"--n-close-border-radius":dt,"--n-close-icon-color":L,"--n-close-icon-color-hover":B,"--n-close-icon-color-pressed":U,"--n-tab-color":X,"--n-tab-font-weight":Ze,"--n-tab-font-weight-active":tt,"--n-tab-padding":ct,"--n-tab-padding-vertical":bt,"--n-tab-gap":ft,"--n-tab-gap-vertical":pt,"--n-pane-padding-left":Q(J,"left"),"--n-pane-padding-right":Q(J,"right"),"--n-pane-padding-top":Q(J,"top"),"--n-pane-padding-bottom":Q(J,"bottom"),"--n-font-weight-strong":rt,"--n-tab-color-segment":nt}}),N=f?Ot("tabs",G(()=>`${I.value[0]}${e.type[0]}`),ye,e):void 0;return Object.assign({mergedClsPrefix:v,mergedValue:d,renderedNames:new Set,segmentCapsuleElRef:D,tabsPaneWrapperRef:Y,tabsElRef:y,barElRef:T,addTabInstRef:C,xScrollInstRef:S,scrollWrapperElRef:k,addTabFixed:V,tabWrapperStyle:F,handleNavResize:Ne,mergedSize:I,handleScroll:Ke,handleTabsResize:Xe,cssVars:f?void 0:ye,themeClass:N?.themeClass,animationDirection:ge,renderNameListRef:he,yScrollElRef:R,handleSegmentResize:Ye,onAnimationBeforeLeave:He,onAnimationEnter:Ie,onAnimationAfterEnter:Oe,onRender:N?.onRender},qe)},render(){const{mergedClsPrefix:e,type:n,placement:i,addTabFixed:p,addable:s,mergedSize:u,renderNameListRef:v,onRender:f,paneWrapperClass:g,paneWrapperStyle:x,$slots:{default:y,prefix:T,suffix:k}}=this;f?.();const C=y?oe(y()).filter(h=>h.type.__TAB_PANE__===!0):[],S=y?oe(y()).filter(h=>h.type.__TAB__===!0):[],R=!S.length,_=n==="card",P=n==="segment",z=!_&&!P&&this.justifyContent;v.value=[];const I=()=>{const h=b("div",{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},z?null:b("div",{class:`${e}-tabs-scroll-padding`,style:i==="top"||i==="bottom"?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`}}),R?C.map((d,W)=>(v.value.push(d.props.name),be(b(fe,Object.assign({},d.props,{internalCreatedByPane:!0,internalLeftPadded:W!==0&&(!z||z==="center"||z==="start"||z==="end")}),d.children?{default:d.children.tab}:void 0)))):S.map((d,W)=>(v.value.push(d.props.name),be(W!==0&&!z?_e(d):d))),!p&&s&&_?ze(s,(R?C.length:S.length)!==0):null,z?null:b("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return b("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},_&&s?b(ie,{onResize:this.handleTabsResize},{default:()=>h}):h,_?b("div",{class:`${e}-tabs-pad`}):null,_?null:b("div",{ref:"barElRef",class:`${e}-tabs-bar`}))},A=P?"top":i;return b("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${n}-type`,`${e}-tabs--${u}-size`,z&&`${e}-tabs--flex`,`${e}-tabs--${A}`],style:this.cssVars},b("div",{class:[`${e}-tabs-nav--${n}-type`,`${e}-tabs-nav--${A}`,`${e}-tabs-nav`]},Se(T,h=>h&&b("div",{class:`${e}-tabs-nav__prefix`},h)),P?b(ie,{onResize:this.handleSegmentResize},{default:()=>b("div",{class:`${e}-tabs-rail`,ref:"tabsElRef"},b("div",{class:`${e}-tabs-capsule`,ref:"segmentCapsuleElRef"},b("div",{class:`${e}-tabs-wrapper`},b("div",{class:`${e}-tabs-tab`}))),R?C.map((h,d)=>(v.value.push(h.props.name),b(fe,Object.assign({},h.props,{internalCreatedByPane:!0,internalLeftPadded:d!==0}),h.children?{default:h.children.tab}:void 0))):S.map((h,d)=>(v.value.push(h.props.name),d===0?h:_e(h))))}):b(ie,{onResize:this.handleNavResize},{default:()=>b("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(A)?b(Jt,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:I}):b("div",{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:"yScrollElRef"},I()))}),p&&s&&_?ze(s,!0):null,Se(k,h=>h&&b("div",{class:`${e}-tabs-nav__suffix`},h))),R&&(this.animated&&(A==="top"||A==="bottom")?b("div",{ref:"tabsPaneWrapperRef",style:x,class:[`${e}-tabs-pane-wrapper`,g]},$e(C,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):$e(C,this.mergedValue,this.renderedNames)))}});function $e(e,n,i,p,s,u,v){const f=[];return e.forEach(g=>{const{name:x,displayDirective:y,"display-directive":T}=g.props,k=S=>y===S||T===S,C=n===x;if(g.key!==void 0&&(g.key=x),C||k("show")||k("show:lazy")&&i.has(x)){i.has(x)||i.add(x);const S=!k("if");f.push(S?Mt(g,[[Dt,C]]):g)}}),v?b(Vt,{name:`${v}-transition`,onBeforeLeave:p,onEnter:s,onAfterEnter:u},{default:()=>f}):f}function ze(e,n){return b(fe,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:n,disabled:typeof e=="object"&&e.disabled})}function _e(e){const n=Nt(e);return n.props?n.props.internalLeftPadded=!0:n.props={internalLeftPadded:!0},n}function be(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}const xa={__name:"ToggleTheme",setup(e){const n=Xt(),i=Gt();async function p({clientX:s,clientY:u}){function v(){n.toggleDark(),Kt(i)()}if(!document.startViewTransition)return v();const f=[`circle(0px at ${s}px ${u}px)`,`circle(${Math.hypot(Math.max(s,window.innerWidth-s),Math.max(u,window.innerHeight-u))}px at ${s}px ${u}px)`];await document.startViewTransition(v).ready,document.documentElement.animate({clipPath:i.value?f.reverse():f},{duration:500,easing:"ease-in",pseudoElement:`::view-transition-${i.value?"old":"new"}(root)`,fill:"both"})}return(s,u)=>(ke(),Ee("i",{id:"toggleTheme",class:Le(["mr-16 cursor-pointer",ee(i)?"i-fe:moon":"i-fe:sun"]),onClick:p},null,2))}},ya={__name:"Fullscreen",setup(e){const{isFullscreen:n,toggle:i}=qt();return(p,s)=>(ke(),Ee("i",{id:"fullscreen",class:Le(["mr-16 cursor-pointer",ee(n)?"i-fe:minimize":"i-fe:maximize"]),onClick:s[0]||(s[0]=(...u)=>ee(i)&&ee(i)(...u))},null,2))}};export{xa as _,ya as a,fe as b,ma as c,ga as d};
