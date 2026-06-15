import{e as k,h,k as G,a as C,c as g,b as y,d as p,az as L,aA as Me,aB as F,aC as Te,q as T,j as b,aD as oe,as as ke,aE as X,G as Fe,p as U,aF as Z,aG as Ke,l as M,aH as Oe,u as Le,f as he,aI as $e,a0 as de,ah as se,i as Be,aJ as je,aK as De,t as ue,aL as Ve,ak as _,L as pe,z as fe,F as Ue,J as Ge,K as qe,C as K,v as We,w as Je,x as Ze,y as Qe,an as Xe,A as Ye,aM as eo}from"./index-BIpz-lxO.js";import{_ as oo}from"./UserAvatar-DiR1JX4z.js";import{V as to}from"./index-C9IDdVPy.js";import{c as Q}from"./RadioGroup-DjFCh0Gm.js";const no=k({name:"ChevronDownFilled",render(){return h("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),ro=G("n-layout-sider"),$=G("n-menu"),ge=G("n-submenu"),te=G("n-menu-item-group"),ve=[C("&::before","background-color: var(--n-item-color-hover);"),p("arrow",`
 color: var(--n-arrow-color-hover);
 `),p("icon",`
 color: var(--n-item-icon-color-hover);
 `),g("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[C("a",`
 color: var(--n-item-text-color-hover);
 `),p("extra",`
 color: var(--n-item-text-color-hover);
 `)])],me=[p("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),g("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[C("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),p("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],io=C([g("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[y("horizontal",`
 max-width: 100%;
 width: 100%;
 display: flex;
 overflow: hidden;
 padding-bottom: 0;
 `,[g("submenu","margin: 0;"),g("menu-item","margin: 0;"),g("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[C("&::before","display: none;"),y("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),g("menu-item-content",[y("selected",[p("icon","color: var(--n-item-icon-color-active-horizontal);"),g("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[C("a","color: var(--n-item-text-color-active-horizontal);"),p("extra","color: var(--n-item-text-color-active-horizontal);")])]),y("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[g("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[C("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),p("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),p("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),L("disabled",[L("selected, child-active",[C("&:focus-within",me)]),y("selected",[E(null,[p("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),g("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[C("a","color: var(--n-item-text-color-active-hover-horizontal);"),p("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),y("child-active",[E(null,[p("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),g("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[C("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),p("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),E("border-bottom: 2px solid var(--n-border-color-horizontal);",me)]),g("menu-item-content-header",[C("a","color: var(--n-item-text-color-horizontal);")])])]),L("responsive",[g("menu-item-content-header",`
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),y("collapsed",[g("menu-item-content",[y("selected",[C("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),g("menu-item-content-header","opacity: 0;"),p("arrow","opacity: 0;"),p("icon","color: var(--n-item-icon-color-collapsed);")])]),g("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),g("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[C("> *","z-index: 1;"),C("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),y("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),y("collapsed",[p("arrow","transform: rotate(0);")]),y("selected",[C("&::before","background-color: var(--n-item-color-active);"),p("arrow","color: var(--n-arrow-color-active);"),p("icon","color: var(--n-item-icon-color-active);"),g("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[C("a","color: var(--n-item-text-color-active);"),p("extra","color: var(--n-item-text-color-active);")])]),y("child-active",[g("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[C("a",`
 color: var(--n-item-text-color-child-active);
 `),p("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),p("arrow",`
 color: var(--n-arrow-color-child-active);
 `),p("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),L("disabled",[L("selected, child-active",[C("&:focus-within",ve)]),y("selected",[E(null,[p("arrow","color: var(--n-arrow-color-active-hover);"),p("icon","color: var(--n-item-icon-color-active-hover);"),g("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[C("a","color: var(--n-item-text-color-active-hover);"),p("extra","color: var(--n-item-text-color-active-hover);")])])]),y("child-active",[E(null,[p("arrow","color: var(--n-arrow-color-child-active-hover);"),p("icon","color: var(--n-item-icon-color-child-active-hover);"),g("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[C("a","color: var(--n-item-text-color-child-active-hover);"),p("extra","color: var(--n-item-text-color-child-active-hover);")])])]),y("selected",[E(null,[C("&::before","background-color: var(--n-item-color-active-hover);")])]),E(null,ve)]),p("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),p("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),g("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 color: var(--n-item-text-color);
 `,[C("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[C("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),p("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),g("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[g("menu-item-content",`
 height: var(--n-item-height);
 `),g("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[Me({duration:".2s"})])]),g("menu-item-group",[g("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),g("menu-tooltip",[C("a",`
 color: inherit;
 text-decoration: none;
 `)]),g("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function E(e,r){return[y("hover",e,r),C("&:hover",e,r)]}const xe=k({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0},isEllipsisPlaceholder:Boolean},setup(e){const{props:r}=T($);return{menuProps:r,style:b(()=>{const{paddingLeft:n}=e;return{paddingLeft:n&&`${n}px`}}),iconStyle:b(()=>{const{maxIconSize:n,activeIconSize:l,iconMarginRight:a}=e;return{width:`${n}px`,height:`${n}px`,fontSize:`${l}px`,marginRight:`${a}px`}})}},render(){const{clsPrefix:e,tmNode:r,menuProps:{renderIcon:n,renderLabel:l,renderExtra:a,expandIcon:d}}=this,s=n?n(r.rawNode):F(this.icon);return h("div",{onClick:x=>{var u;(u=this.onClick)===null||u===void 0||u.call(this,x)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},s&&h("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[s]),h("div",{class:`${e}-menu-item-content-header`,role:"none"},this.isEllipsisPlaceholder?this.title:l?l(r.rawNode):F(this.title),this.extra||a?h("span",{class:`${e}-menu-item-content-header__extra`}," ",a?a(r.rawNode):F(this.extra)):null),this.showArrow?h(Te,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>d?d(r.rawNode):h(no,null)}):null)}}),V=8;function ne(e){const r=T($),{props:n,mergedCollapsedRef:l}=r,a=T(ge,null),d=T(te,null),s=b(()=>n.mode==="horizontal"),x=b(()=>s.value?n.dropdownPlacement:"tmNodes"in e?"right-start":"right"),u=b(()=>{var v;return Math.max((v=n.collapsedIconSize)!==null&&v!==void 0?v:n.iconSize,n.iconSize)}),f=b(()=>{var v;return!s.value&&e.root&&l.value&&(v=n.collapsedIconSize)!==null&&v!==void 0?v:n.iconSize}),w=b(()=>{if(s.value)return;const{collapsedWidth:v,indent:I,rootIndent:N}=n,{root:S,isGroup:P}=e,H=N===void 0?I:N;return S?l.value?v/2-u.value/2:H:d&&typeof d.paddingLeftRef.value=="number"?I/2+d.paddingLeftRef.value:a&&typeof a.paddingLeftRef.value=="number"?(P?I/2:I)+a.paddingLeftRef.value:0}),R=b(()=>{const{collapsedWidth:v,indent:I,rootIndent:N}=n,{value:S}=u,{root:P}=e;return s.value||!P||!l.value?V:(N===void 0?I:N)+S+V-(v+S)/2});return{dropdownPlacement:x,activeIconSize:f,maxIconSize:u,paddingLeft:w,iconMarginRight:R,NMenu:r,NSubmenu:a,NMenuOptionGroup:d}}const re={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},lo=k({name:"MenuDivider",setup(){const e=T($),{mergedClsPrefixRef:r,isHorizontalRef:n}=e;return()=>n.value?null:h("div",{class:`${r.value}-menu-divider`})}}),Ce=Object.assign(Object.assign({},re),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),ao=oe(Ce),co=k({name:"MenuOption",props:Ce,setup(e){const r=ne(e),{NSubmenu:n,NMenu:l,NMenuOptionGroup:a}=r,{props:d,mergedClsPrefixRef:s,mergedCollapsedRef:x}=l,u=n?n.mergedDisabledRef:a?a.mergedDisabledRef:{value:!1},f=b(()=>u.value||e.disabled);function w(v){const{onClick:I}=e;I&&I(v)}function R(v){f.value||(l.doSelect(e.internalKey,e.tmNode.rawNode),w(v))}return{mergedClsPrefix:s,dropdownPlacement:r.dropdownPlacement,paddingLeft:r.paddingLeft,iconMarginRight:r.iconMarginRight,maxIconSize:r.maxIconSize,activeIconSize:r.activeIconSize,mergedTheme:l.mergedThemeRef,menuProps:d,dropdownEnabled:X(()=>e.root&&x.value&&d.mode!=="horizontal"&&!f.value),selected:X(()=>l.mergedValueRef.value===e.internalKey),mergedDisabled:f,handleClick:R}},render(){const{mergedClsPrefix:e,mergedTheme:r,tmNode:n,menuProps:{renderLabel:l,nodeProps:a}}=this,d=a?.(n.rawNode);return h("div",Object.assign({},d,{role:"menuitem",class:[`${e}-menu-item`,d?.class]}),h(ke,{theme:r.peers.Tooltip,themeOverrides:r.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>l?l(n.rawNode):F(this.title),trigger:()=>h(xe,{tmNode:n,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),be=Object.assign(Object.assign({},re),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),so=oe(be),uo=k({name:"MenuOptionGroup",props:be,setup(e){const r=ne(e),{NSubmenu:n}=r,l=b(()=>n?.mergedDisabledRef.value?!0:e.tmNode.disabled);U(te,{paddingLeftRef:r.paddingLeft,mergedDisabledRef:l});const{mergedClsPrefixRef:a,props:d}=T($);return function(){const{value:s}=a,x=r.paddingLeft.value,{nodeProps:u}=d,f=u?.(e.tmNode.rawNode);return h("div",{class:`${s}-menu-item-group`,role:"group"},h("div",Object.assign({},f,{class:[`${s}-menu-item-group-title`,f?.class],style:[f?.style||"",x!==void 0?`padding-left: ${x}px;`:""]}),F(e.title),e.extra?h(Fe,null," ",F(e.extra)):null),h("div",null,e.tmNodes.map(w=>ie(w,d))))}}});function Y(e){return e.type==="divider"||e.type==="render"}function vo(e){return e.type==="divider"}function ie(e,r){const{rawNode:n}=e,{show:l}=n;if(l===!1)return null;if(Y(n))return vo(n)?h(lo,Object.assign({key:e.key},n.props)):null;const{labelField:a}=r,{key:d,level:s,isGroup:x}=e,u=Object.assign(Object.assign({},n),{title:n.title||n[a],extra:n.titleExtra||n.extra,key:d,internalKey:d,level:s,root:s===0,isGroup:x});return e.children?e.isGroup?h(uo,Z(u,so,{tmNode:e,tmNodes:e.children,key:d})):h(ee,Z(u,mo,{key:d,rawNodes:n[r.childrenField],tmNodes:e.children,tmNode:e})):h(co,Z(u,ao,{key:d,tmNode:e}))}const ze=Object.assign(Object.assign({},re),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function,domId:String,virtualChildActive:{type:Boolean,default:void 0},isEllipsisPlaceholder:Boolean}),mo=oe(ze),ee=k({name:"Submenu",props:ze,setup(e){const r=ne(e),{NMenu:n,NSubmenu:l}=r,{props:a,mergedCollapsedRef:d,mergedThemeRef:s}=n,x=b(()=>{const{disabled:v}=e;return l?.mergedDisabledRef.value||a.disabled?!0:v}),u=M(!1);U(ge,{paddingLeftRef:r.paddingLeft,mergedDisabledRef:x}),U(te,null);function f(){const{onClick:v}=e;v&&v()}function w(){x.value||(d.value||n.toggleExpand(e.internalKey),f())}function R(v){u.value=v}return{menuProps:a,mergedTheme:s,doSelect:n.doSelect,inverted:n.invertedRef,isHorizontal:n.isHorizontalRef,mergedClsPrefix:n.mergedClsPrefixRef,maxIconSize:r.maxIconSize,activeIconSize:r.activeIconSize,iconMarginRight:r.iconMarginRight,dropdownPlacement:r.dropdownPlacement,dropdownShow:u,paddingLeft:r.paddingLeft,mergedDisabled:x,mergedValue:n.mergedValueRef,childActive:X(()=>{var v;return(v=e.virtualChildActive)!==null&&v!==void 0?v:n.activePathRef.value.includes(e.internalKey)}),collapsed:b(()=>a.mode==="horizontal"?!1:d.value?!0:!n.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:b(()=>!x.value&&(a.mode==="horizontal"||d.value)),handlePopoverShowChange:R,handleClick:w}},render(){var e;const{mergedClsPrefix:r,menuProps:{renderIcon:n,renderLabel:l}}=this,a=()=>{const{isHorizontal:s,paddingLeft:x,collapsed:u,mergedDisabled:f,maxIconSize:w,activeIconSize:R,title:v,childActive:I,icon:N,handleClick:S,menuProps:{nodeProps:P},dropdownShow:H,iconMarginRight:q,tmNode:O,mergedClsPrefix:B,isEllipsisPlaceholder:W,extra:j}=this,A=P?.(O.rawNode);return h("div",Object.assign({},A,{class:[`${B}-menu-item`,A?.class],role:"menuitem"}),h(xe,{tmNode:O,paddingLeft:x,collapsed:u,disabled:f,iconMarginRight:q,maxIconSize:w,activeIconSize:R,title:v,extra:j,showArrow:!s,childActive:I,clsPrefix:B,icon:N,hover:H,onClick:S,isEllipsisPlaceholder:W}))},d=()=>h(Ke,null,{default:()=>{const{tmNodes:s,collapsed:x}=this;return x?null:h("div",{class:`${r}-submenu-children`,role:"menu"},s.map(u=>ie(u,this.menuProps)))}});return this.root?h(oo,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:n,renderLabel:l}),{default:()=>h("div",{class:`${r}-submenu`,role:"menu","aria-expanded":!this.collapsed,id:this.domId},a(),this.isHorizontal?null:d())}):h("div",{class:`${r}-submenu`,role:"menu","aria-expanded":!this.collapsed,id:this.domId},a(),d())}}),ho=Object.assign(Object.assign({},he.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,default:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,dropdownPlacement:{type:String,default:"bottom"},responsive:Boolean,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array}),po=k({name:"Menu",inheritAttrs:!1,props:ho,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:n}=Le(e),l=he("Menu","-menu",io,$e,e,r),a=T(ro,null),d=b(()=>{var i;const{collapsed:m}=e;if(m!==void 0)return m;if(a){const{collapseModeRef:o,collapsedRef:c}=a;if(o.value==="width")return(i=c.value)!==null&&i!==void 0?i:!1}return!1}),s=b(()=>{const{keyField:i,childrenField:m,disabledField:o}=e;return Q(e.items||e.options,{getIgnored(c){return Y(c)},getChildren(c){return c[m]},getDisabled(c){return c[o]},getKey(c){var z;return(z=c[i])!==null&&z!==void 0?z:c.name}})}),x=b(()=>new Set(s.value.treeNodes.map(i=>i.key))),{watchProps:u}=e,f=M(null);u?.includes("defaultValue")?de(()=>{f.value=e.defaultValue}):f.value=e.defaultValue;const w=ue(e,"value"),R=se(w,f),v=M([]),I=()=>{v.value=e.defaultExpandAll?s.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||s.value.getPath(R.value,{includeSelf:!1}).keyPath};u?.includes("defaultExpandedKeys")?de(I):I();const N=Ve(e,["expandedNames","expandedKeys"]),S=se(N,v),P=b(()=>s.value.treeNodes),H=b(()=>s.value.getPath(R.value).keyPath);U($,{props:e,mergedCollapsedRef:d,mergedThemeRef:l,mergedValueRef:R,mergedExpandedKeysRef:S,activePathRef:H,mergedClsPrefixRef:r,isHorizontalRef:b(()=>e.mode==="horizontal"),invertedRef:ue(e,"inverted"),doSelect:q,toggleExpand:B});function q(i,m){const{"onUpdate:value":o,onUpdateValue:c,onSelect:z}=e;c&&_(c,i,m),o&&_(o,i,m),z&&_(z,i,m),f.value=i}function O(i){const{"onUpdate:expandedKeys":m,onUpdateExpandedKeys:o,onExpandedNamesChange:c,onOpenNamesChange:z}=e;m&&_(m,i),o&&_(o,i),c&&_(c,i),z&&_(z,i),v.value=i}function B(i){const m=Array.from(S.value),o=m.findIndex(c=>c===i);if(~o)m.splice(o,1);else{if(e.accordion&&x.value.has(i)){const c=m.findIndex(z=>x.value.has(z));c>-1&&m.splice(c,1)}m.push(i)}O(m)}const W=i=>{const m=s.value.getPath(i??R.value,{includeSelf:!1}).keyPath;if(!m.length)return;const o=Array.from(S.value),c=new Set([...o,...m]);e.accordion&&x.value.forEach(z=>{c.has(z)&&!m.includes(z)&&c.delete(z)}),O(Array.from(c))},j=b(()=>{const{inverted:i}=e,{common:{cubicBezierEaseInOut:m},self:o}=l.value,{borderRadius:c,borderColorHorizontal:z,fontSize:He,itemHeight:_e,dividerColor:Ee}=o,t={"--n-divider-color":Ee,"--n-bezier":m,"--n-font-size":He,"--n-border-color-horizontal":z,"--n-border-radius":c,"--n-item-height":_e};return i?(t["--n-group-text-color"]=o.groupTextColorInverted,t["--n-color"]=o.colorInverted,t["--n-item-text-color"]=o.itemTextColorInverted,t["--n-item-text-color-hover"]=o.itemTextColorHoverInverted,t["--n-item-text-color-active"]=o.itemTextColorActiveInverted,t["--n-item-text-color-child-active"]=o.itemTextColorChildActiveInverted,t["--n-item-text-color-child-active-hover"]=o.itemTextColorChildActiveInverted,t["--n-item-text-color-active-hover"]=o.itemTextColorActiveHoverInverted,t["--n-item-icon-color"]=o.itemIconColorInverted,t["--n-item-icon-color-hover"]=o.itemIconColorHoverInverted,t["--n-item-icon-color-active"]=o.itemIconColorActiveInverted,t["--n-item-icon-color-active-hover"]=o.itemIconColorActiveHoverInverted,t["--n-item-icon-color-child-active"]=o.itemIconColorChildActiveInverted,t["--n-item-icon-color-child-active-hover"]=o.itemIconColorChildActiveHoverInverted,t["--n-item-icon-color-collapsed"]=o.itemIconColorCollapsedInverted,t["--n-item-text-color-horizontal"]=o.itemTextColorHorizontalInverted,t["--n-item-text-color-hover-horizontal"]=o.itemTextColorHoverHorizontalInverted,t["--n-item-text-color-active-horizontal"]=o.itemTextColorActiveHorizontalInverted,t["--n-item-text-color-child-active-horizontal"]=o.itemTextColorChildActiveHorizontalInverted,t["--n-item-text-color-child-active-hover-horizontal"]=o.itemTextColorChildActiveHoverHorizontalInverted,t["--n-item-text-color-active-hover-horizontal"]=o.itemTextColorActiveHoverHorizontalInverted,t["--n-item-icon-color-horizontal"]=o.itemIconColorHorizontalInverted,t["--n-item-icon-color-hover-horizontal"]=o.itemIconColorHoverHorizontalInverted,t["--n-item-icon-color-active-horizontal"]=o.itemIconColorActiveHorizontalInverted,t["--n-item-icon-color-active-hover-horizontal"]=o.itemIconColorActiveHoverHorizontalInverted,t["--n-item-icon-color-child-active-horizontal"]=o.itemIconColorChildActiveHorizontalInverted,t["--n-item-icon-color-child-active-hover-horizontal"]=o.itemIconColorChildActiveHoverHorizontalInverted,t["--n-arrow-color"]=o.arrowColorInverted,t["--n-arrow-color-hover"]=o.arrowColorHoverInverted,t["--n-arrow-color-active"]=o.arrowColorActiveInverted,t["--n-arrow-color-active-hover"]=o.arrowColorActiveHoverInverted,t["--n-arrow-color-child-active"]=o.arrowColorChildActiveInverted,t["--n-arrow-color-child-active-hover"]=o.arrowColorChildActiveHoverInverted,t["--n-item-color-hover"]=o.itemColorHoverInverted,t["--n-item-color-active"]=o.itemColorActiveInverted,t["--n-item-color-active-hover"]=o.itemColorActiveHoverInverted,t["--n-item-color-active-collapsed"]=o.itemColorActiveCollapsedInverted):(t["--n-group-text-color"]=o.groupTextColor,t["--n-color"]=o.color,t["--n-item-text-color"]=o.itemTextColor,t["--n-item-text-color-hover"]=o.itemTextColorHover,t["--n-item-text-color-active"]=o.itemTextColorActive,t["--n-item-text-color-child-active"]=o.itemTextColorChildActive,t["--n-item-text-color-child-active-hover"]=o.itemTextColorChildActiveHover,t["--n-item-text-color-active-hover"]=o.itemTextColorActiveHover,t["--n-item-icon-color"]=o.itemIconColor,t["--n-item-icon-color-hover"]=o.itemIconColorHover,t["--n-item-icon-color-active"]=o.itemIconColorActive,t["--n-item-icon-color-active-hover"]=o.itemIconColorActiveHover,t["--n-item-icon-color-child-active"]=o.itemIconColorChildActive,t["--n-item-icon-color-child-active-hover"]=o.itemIconColorChildActiveHover,t["--n-item-icon-color-collapsed"]=o.itemIconColorCollapsed,t["--n-item-text-color-horizontal"]=o.itemTextColorHorizontal,t["--n-item-text-color-hover-horizontal"]=o.itemTextColorHoverHorizontal,t["--n-item-text-color-active-horizontal"]=o.itemTextColorActiveHorizontal,t["--n-item-text-color-child-active-horizontal"]=o.itemTextColorChildActiveHorizontal,t["--n-item-text-color-child-active-hover-horizontal"]=o.itemTextColorChildActiveHoverHorizontal,t["--n-item-text-color-active-hover-horizontal"]=o.itemTextColorActiveHoverHorizontal,t["--n-item-icon-color-horizontal"]=o.itemIconColorHorizontal,t["--n-item-icon-color-hover-horizontal"]=o.itemIconColorHoverHorizontal,t["--n-item-icon-color-active-horizontal"]=o.itemIconColorActiveHorizontal,t["--n-item-icon-color-active-hover-horizontal"]=o.itemIconColorActiveHoverHorizontal,t["--n-item-icon-color-child-active-horizontal"]=o.itemIconColorChildActiveHorizontal,t["--n-item-icon-color-child-active-hover-horizontal"]=o.itemIconColorChildActiveHoverHorizontal,t["--n-arrow-color"]=o.arrowColor,t["--n-arrow-color-hover"]=o.arrowColorHover,t["--n-arrow-color-active"]=o.arrowColorActive,t["--n-arrow-color-active-hover"]=o.arrowColorActiveHover,t["--n-arrow-color-child-active"]=o.arrowColorChildActive,t["--n-arrow-color-child-active-hover"]=o.arrowColorChildActiveHover,t["--n-item-color-hover"]=o.itemColorHover,t["--n-item-color-active"]=o.itemColorActive,t["--n-item-color-active-hover"]=o.itemColorActiveHover,t["--n-item-color-active-collapsed"]=o.itemColorActiveCollapsed),t}),A=n?Be("menu",b(()=>e.inverted?"a":"b"),j,e):void 0,J=je(),le=M(null),ye=M(null);let ae=!0;const ce=()=>{var i;ae?ae=!1:(i=le.value)===null||i===void 0||i.sync({showAllItemsBeforeCalculate:!0})};function Ie(){return document.getElementById(J)}const D=M(-1);function we(i){D.value=e.options.length-i}function Re(i){i||(D.value=-1)}const Se=b(()=>{const i=D.value;return{children:i===-1?[]:e.options.slice(i)}}),Ae=b(()=>{const{childrenField:i,disabledField:m,keyField:o}=e;return Q([Se.value],{getIgnored(c){return Y(c)},getChildren(c){return c[i]},getDisabled(c){return c[m]},getKey(c){var z;return(z=c[o])!==null&&z!==void 0?z:c.name}})}),Ne=b(()=>Q([{}]).treeNodes[0]);function Pe(){var i;if(D.value===-1)return h(ee,{root:!0,level:0,key:"__ellpisisGroupPlaceholder__",internalKey:"__ellpisisGroupPlaceholder__",title:"···",tmNode:Ne.value,domId:J,isEllipsisPlaceholder:!0});const m=Ae.value.treeNodes[0],o=H.value,c=!!(!((i=m.children)===null||i===void 0)&&i.some(z=>o.includes(z.key)));return h(ee,{level:0,root:!0,key:"__ellpisisGroup__",internalKey:"__ellpisisGroup__",title:"···",virtualChildActive:c,tmNode:m,domId:J,rawNodes:m.rawNode.children||[],tmNodes:m.children||[],isEllipsisPlaceholder:!0})}return{mergedClsPrefix:r,controlledExpandedKeys:N,uncontrolledExpanededKeys:v,mergedExpandedKeys:S,uncontrolledValue:f,mergedValue:R,activePath:H,tmNodes:P,mergedTheme:l,mergedCollapsed:d,cssVars:n?void 0:j,themeClass:A?.themeClass,overflowRef:le,counterRef:ye,updateCounter:()=>{},onResize:ce,onUpdateOverflow:Re,onUpdateCount:we,renderCounter:Pe,getCounter:Ie,onRender:A?.onRender,showOption:W,deriveResponsiveState:ce}},render(){const{mergedClsPrefix:e,mode:r,themeClass:n,onRender:l}=this;l?.();const a=()=>this.tmNodes.map(u=>ie(u,this.$props)),s=r==="horizontal"&&this.responsive,x=()=>h("div",De(this.$attrs,{role:r==="horizontal"?"menubar":"menu",class:[`${e}-menu`,n,`${e}-menu--${r}`,s&&`${e}-menu--responsive`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars}),s?h(to,{ref:"overflowRef",onUpdateOverflow:this.onUpdateOverflow,getCounter:this.getCounter,onUpdateCount:this.onUpdateCount,updateCounter:this.updateCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:a,counter:this.renderCounter}):a());return s?h(Oe,{onResize:this.onResize},{default:x}):x()}}),bo={__name:"MenuCollapse",setup(e){const r=pe();return(n,l)=>(fe(),Ue("div",{id:"menu-collapse",class:"f-c-c cursor-pointer rounded-4 auto-bg-hover p-6 text-22 transition-all-300",onClick:l[0]||(l[0]=(...a)=>K(r).switchCollapsed&&K(r).switchCollapsed(...a))},[Ge("i",{class:qe(K(r).collapsed?"i-line-md-menu-unfold-left":"i-line-md-menu-fold-left")},null,2)]))}},zo={__name:"SideMenu",setup(e){const r=We(),n=Je(),l=pe(),a=Ze(),d=b(()=>n.meta?.parentKey||n.name),s=M(null);Qe(n,async()=>{await Xe(),s.value?.showOption()});function x(u,f){if(eo(f.originPath))$dialog.confirm({type:"info",title:"请选择打开方式",positiveText:"外链打开",negativeText:"在本站内嵌打开",confirm(){window.open(f.originPath)},cancel:()=>{r.push(f.path)}});else{if(!f.path)return;r.push(f.path)}}return(u,f)=>{const w=po;return fe(),Ye(w,{ref_key:"menu",ref:s,class:"side-menu",accordion:"",indent:18,"collapsed-icon-size":22,"collapsed-width":64,collapsed:K(l).collapsed,options:K(a).menus,value:K(d),"onUpdate:value":x},null,8,["collapsed","options","value"])}}};export{bo as _,zo as a};
