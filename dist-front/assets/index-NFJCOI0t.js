import{c as g,a as _,b as D,d as C,e as T,h as k,u as H,f as P,g as O,i as N,j as y,k as F,p as K,t as M,l as E,o as q,m as G,n as J,q as U,s as Q,v as X,w as Y,x as Z,y as W,z as v,A as w,B as $,C as s,D as R,E as L,F as S,G as I,H as ee,I as l,J as h,K as j,L as re,r as te}from"./index-BIpz-lxO.js";import{_ as oe,a as ne,b as ae}from"./UserAvatar-DiR1JX4z.js";import{_ as se,a as ie,A as ce}from"./ThemeSetting-BRYa8MVN.js";import{_ as le}from"./AppCard-ga7pbbtK.js";import{_ as de,a as me}from"./Fullscreen-BoPC4-Vu.js";import{_ as ue,a as pe}from"./SideMenu-BnklmE_-.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./RadioGroup-DjFCh0Gm.js";import"./Input-CfkE2DS5.js";import"./use-locale-O2slJonS.js";import"./Suffix-BOLnsLY8.js";import"./index-C9IDdVPy.js";const fe=g("breadcrumb",`
 white-space: nowrap;
 cursor: default;
 line-height: var(--n-item-line-height);
`,[_("ul",`
 list-style: none;
 padding: 0;
 margin: 0;
 `),_("a",`
 color: inherit;
 text-decoration: inherit;
 `),g("breadcrumb-item",`
 font-size: var(--n-font-size);
 transition: color .3s var(--n-bezier);
 display: inline-flex;
 align-items: center;
 `,[g("icon",`
 font-size: 18px;
 vertical-align: -.2em;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `),_("&:not(:last-child)",[D("clickable",[C("link",`
 cursor: pointer;
 `,[_("&:hover",`
 background-color: var(--n-item-color-hover);
 `),_("&:active",`
 background-color: var(--n-item-color-pressed); 
 `)])])]),C("link",`
 padding: 4px;
 border-radius: var(--n-item-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 position: relative;
 `,[_("&:hover",`
 color: var(--n-item-text-color-hover);
 `,[g("icon",`
 color: var(--n-item-text-color-hover);
 `)]),_("&:active",`
 color: var(--n-item-text-color-pressed);
 `,[g("icon",`
 color: var(--n-item-text-color-pressed);
 `)])]),C("separator",`
 margin: 0 8px;
 color: var(--n-separator-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 `),_("&:last-child",[C("link",`
 font-weight: var(--n-font-weight-active);
 cursor: unset;
 color: var(--n-item-text-color-active);
 `,[g("icon",`
 color: var(--n-item-text-color-active);
 `)]),C("separator",`
 display: none;
 `)])])]),A=F("n-breadcrumb"),_e=Object.assign(Object.assign({},P.props),{separator:{type:String,default:"/"}}),he=T({name:"Breadcrumb",props:_e,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=H(e),n=P("Breadcrumb","-breadcrumb",fe,O,e,o);K(A,{separatorRef:M(e,"separator"),mergedClsPrefixRef:o});const i=y(()=>{const{common:{cubicBezierEaseInOut:u},self:{separatorColor:b,itemTextColor:m,itemTextColorHover:r,itemTextColorPressed:c,itemTextColorActive:p,fontSize:d,fontWeightActive:x,itemBorderRadius:f,itemColorHover:B,itemColorPressed:z,itemLineHeight:V}}=n.value;return{"--n-font-size":d,"--n-bezier":u,"--n-item-text-color":m,"--n-item-text-color-hover":r,"--n-item-text-color-pressed":c,"--n-item-text-color-active":p,"--n-separator-color":b,"--n-item-color-hover":B,"--n-item-color-pressed":z,"--n-item-border-radius":f,"--n-font-weight-active":x,"--n-item-line-height":V}}),a=t?N("breadcrumb",void 0,i,e):void 0;return{mergedClsPrefix:o,cssVars:t?void 0:i,themeClass:a?.themeClass,onRender:a?.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),k("nav",{class:[`${this.mergedClsPrefix}-breadcrumb`,this.themeClass],style:this.cssVars,"aria-label":"Breadcrumb"},k("ul",null,this.$slots))}});function be(e=J?window:null){const o=()=>{const{hash:i,host:a,hostname:u,href:b,origin:m,pathname:r,port:c,protocol:p,search:d}=e?.location||{};return{hash:i,host:a,hostname:u,href:b,origin:m,pathname:r,port:c,protocol:p,search:d}},t=E(o()),n=()=>{t.value=o()};return q(()=>{e&&(e.addEventListener("popstate",n),e.addEventListener("hashchange",n))}),G(()=>{e&&(e.removeEventListener("popstate",n),e.removeEventListener("hashchange",n))}),t}const ve={separator:String,href:String,clickable:{type:Boolean,default:!0},showSeparator:{type:Boolean,default:!0},onClick:Function},xe=T({name:"BreadcrumbItem",props:ve,slots:Object,setup(e,{slots:o}){const t=U(A,null);if(!t)return()=>null;const{separatorRef:n,mergedClsPrefixRef:i}=t,a=be(),u=y(()=>e.href?"a":"span"),b=y(()=>a.value.href===e.href?"location":null);return()=>{const{value:m}=i;return k("li",{class:[`${m}-breadcrumb-item`,e.clickable&&`${m}-breadcrumb-item--clickable`]},k(u.value,{class:`${m}-breadcrumb-item__link`,"aria-current":b.value,href:e.href,onClick:e.onClick},o),e.showSeparator&&k("span",{class:`${m}-breadcrumb-item__separator`,"aria-hidden":"true"},Q(o.separator,()=>{var r;return[(r=e.separator)!==null&&r!==void 0?r:n.value]})))}}}),ge={class:"flex items-center"},ke={__name:"BreadCrumb",setup(e){const o=X(),t=Y(),n=Z(),i=E([]);W(()=>t.name,r=>{i.value=a(n.permissions,r)},{immediate:!0});function a(r,c,p=[]){for(const d of r){if(d.code===c)return[...p,d];if(d.children?.length){const x=a(d.children,c,[...p,d]);if(x)return x}}return null}function u(r){r.path&&r.code!==t.name&&o.push(r.path)}function b(r=[]){return r.filter(c=>c.show).map(c=>({label:c.name,key:c.code,icon:()=>k("i",{class:c.icon})}))}function m(r){r&&r!==t.name&&o.push({name:r})}return(r,c)=>{const p=xe,d=oe,x=he;return v(),w(x,null,{default:$(()=>[s(i)?.length?(v(!0),S(I,{key:1},ee(s(i),(f,B)=>(v(),w(p,{key:f.code,clickable:!!f.path,onClick:z=>u(f)},{default:$(()=>[l(d,{options:B<s(i).length-1?b(f.children):[],onSelect:m},{default:$(()=>[h("div",ge,[h("i",{class:j([f.icon,"mr-8"])},null,2),R(" "+L(f.name),1)])]),_:2},1032,["options"])]),_:2},1032,["clickable","onClick"]))),128)):(v(),w(p,{key:0,clickable:!1},{default:$(()=>[R(L(s(t).meta.title),1)]),_:1}))]),_:1})}}},Ce={class:"ml-auto flex flex-shrink-0 items-center px-12 text-18"},$e={__name:"index",setup(e){function o(t){window.open(t)}return(t,n)=>{const i=ie,a=le;return v(),w(a,{class:"flex items-center px-12","border-b":"1px solid light_border dark:dark_border"},{default:$(()=>[l(s(ue)),l(s(ke)),h("div",Ce,[l(s(se)),l(s(de)),l(s(me)),h("i",{class:"i-fe:github mr-16 cursor-pointer",onClick:n[0]||(n[0]=u=>o("https://github.com/zclzone/vue-naive-admin/tree/2.x"))}),h("i",{class:"i-me:gitee mr-16 cursor-pointer",onClick:n[1]||(n[1]=u=>o("https://gitee.com/isme-admin/vue-naive-admin/tree/2.x"))}),l(i,{class:"mr-16"}),l(s(ne))])]),_:1})}}},we={__name:"index",setup(e){return(o,t)=>(v(),S(I,null,[l(s(ae),{"border-b":"1px solid light_border dark:dark_border"}),l(s(pe),{class:"cus-scroll-y mt-4 h-0 flex-1"})],64))}},Be={class:"wh-full flex"},ye={class:"w-0 flex-col flex-1"},Se={class:"p-12","border-b":"1px solid light_border dark:dark_border"},Oe={__name:"index",setup(e){const o=re();return(t,n)=>(v(),S("div",Be,[h("aside",{class:j(["flex-col flex-shrink-0 transition-width-300",s(o).collapsed?"w-64":"w-220"]),"border-r":"1px solid light_border dark:dark_border"},[l(we)],2),h("article",ye,[l($e,{class:"h-60 flex-shrink-0"}),h("div",Se,[l(s(ce),{class:"flex-shrink-0"})]),te(t.$slots,"default")])]))}};export{Oe as default};
