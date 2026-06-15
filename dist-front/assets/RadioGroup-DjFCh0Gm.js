import{bU as he,c1 as Ee,c2 as C,c as L,b as B,d as $,az as N,a as A,e as te,aX as oe,h as _,aU as Ae,u as ne,f as U,bx as fe,i as be,l as T,ak as K,j as M,al as I,a$ as Te,bd as se,k as ge,p as ve,t as G,c3 as Ne,q as Ke,af as pe,ah as Ce,aE as ce,aW as He,c4 as Fe}from"./index-BIpz-lxO.js";function So(e,r){let{target:o}=e;for(;o;){if(o.dataset&&o.dataset[r]!==void 0)return!0;o=o.parentElement}return!1}function de(e){return Array.isArray(e)?e:[e]}const re={STOP:"STOP"};function me(e,r){const o=r(e);e.children!==void 0&&o!==re.STOP&&e.children.forEach(n=>me(n,r))}function Le(e,r={}){const{preserveGroup:o=!1}=r,n=[],a=o?t=>{t.isLeaf||(n.push(t.key),c(t.children))}:t=>{t.isLeaf||(t.isGroup||n.push(t.key),c(t.children))};function c(t){t.forEach(a)}return c(e),n}function Me(e,r){const{isLeaf:o}=e;return o!==void 0?o:!r(e)}function Oe(e){return e.children}function Ge(e){return e.key}function De(){return!1}function Ue(e,r){const{isLeaf:o}=e;return!(o===!1&&!Array.isArray(r(e)))}function Ve(e){return e.disabled===!0}function je(e,r){return e.isLeaf===!1&&!Array.isArray(r(e))}function Q(e){var r;return e==null?[]:Array.isArray(e)?e:(r=e.checkedKeys)!==null&&r!==void 0?r:[]}function Y(e){var r;return e==null||Array.isArray(e)?[]:(r=e.indeterminateKeys)!==null&&r!==void 0?r:[]}function We(e,r){const o=new Set(e);return r.forEach(n=>{o.has(n)||o.add(n)}),Array.from(o)}function qe(e,r){const o=new Set(e);return r.forEach(n=>{o.has(n)&&o.delete(n)}),Array.from(o)}function Xe(e){return e?.type==="group"}function Ro(e){const r=new Map;return e.forEach((o,n)=>{r.set(o.key,n)}),o=>{var n;return(n=r.get(o))!==null&&n!==void 0?n:null}}class Ze extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function Je(e,r,o,n){return D(r.concat(e),o,n,!1)}function Qe(e,r){const o=new Set;return e.forEach(n=>{const a=r.treeNodeMap.get(n);if(a!==void 0){let c=a.parent;for(;c!==null&&!(c.disabled||o.has(c.key));)o.add(c.key),c=c.parent}}),o}function Ye(e,r,o,n){const a=D(r,o,n,!1),c=D(e,o,n,!0),t=Qe(e,o),s=[];return a.forEach(d=>{(c.has(d)||t.has(d))&&s.push(d)}),s.forEach(d=>a.delete(d)),a}function ee(e,r){const{checkedKeys:o,keysToCheck:n,keysToUncheck:a,indeterminateKeys:c,cascade:t,leafOnly:s,checkStrategy:d,allowNotLoaded:u}=e;if(!t)return n!==void 0?{checkedKeys:We(o,n),indeterminateKeys:Array.from(c)}:a!==void 0?{checkedKeys:qe(o,a),indeterminateKeys:Array.from(c)}:{checkedKeys:Array.from(o),indeterminateKeys:Array.from(c)};const{levelTreeNodeMap:b}=r;let h;a!==void 0?h=Ye(a,o,r,u):n!==void 0?h=Je(n,o,r,u):h=D(o,r,u,!1);const m=d==="parent",P=d==="child"||s,g=h,f=new Set,p=Math.max.apply(null,Array.from(b.keys()));for(let y=p;y>=0;y-=1){const x=y===0,z=b.get(y);for(const l of z){if(l.isLeaf)continue;const{key:i,shallowLoaded:v}=l;if(P&&v&&l.children.forEach(S=>{!S.disabled&&!S.isLeaf&&S.shallowLoaded&&g.has(S.key)&&g.delete(S.key)}),l.disabled||!v)continue;let k=!0,R=!1,w=!0;for(const S of l.children){const E=S.key;if(!S.disabled){if(w&&(w=!1),g.has(E))R=!0;else if(f.has(E)){R=!0,k=!1;break}else if(k=!1,R)break}}k&&!w?(m&&l.children.forEach(S=>{!S.disabled&&g.has(S.key)&&g.delete(S.key)}),g.add(i)):R&&f.add(i),x&&P&&g.has(i)&&g.delete(i)}}return{checkedKeys:Array.from(g),indeterminateKeys:Array.from(f)}}function D(e,r,o,n){const{treeNodeMap:a,getChildren:c}=r,t=new Set,s=new Set(e);return e.forEach(d=>{const u=a.get(d);u!==void 0&&me(u,b=>{if(b.disabled)return re.STOP;const{key:h}=b;if(!t.has(h)&&(t.add(h),s.add(h),je(b.rawNode,c))){if(n)return re.STOP;if(!o)throw new Ze}})}),s}function eo(e,{includeGroup:r=!1,includeSelf:o=!0},n){var a;const c=n.treeNodeMap;let t=e==null?null:(a=c.get(e))!==null&&a!==void 0?a:null;const s={keyPath:[],treeNodePath:[],treeNode:t};if(t?.ignored)return s.treeNode=null,s;for(;t;)!t.ignored&&(r||!t.isGroup)&&s.treeNodePath.push(t),t=t.parent;return s.treeNodePath.reverse(),o||s.treeNodePath.pop(),s.keyPath=s.treeNodePath.map(d=>d.key),s}function oo(e){if(e.length===0)return null;const r=e[0];return r.isGroup||r.ignored||r.disabled?r.getNext():r}function ro(e,r){const o=e.siblings,n=o.length,{index:a}=e;return r?o[(a+1)%n]:a===o.length-1?null:o[a+1]}function ue(e,r,{loop:o=!1,includeDisabled:n=!1}={}){const a=r==="prev"?to:ro,c={reverse:r==="prev"};let t=!1,s=null;function d(u){if(u!==null){if(u===e){if(!t)t=!0;else if(!e.disabled&&!e.isGroup){s=e;return}}else if((!u.disabled||n)&&!u.ignored&&!u.isGroup){s=u;return}if(u.isGroup){const b=ae(u,c);b!==null?s=b:d(a(u,o))}else{const b=a(u,!1);if(b!==null)d(b);else{const h=no(u);h?.isGroup?d(a(h,o)):o&&d(a(u,!0))}}}}return d(e),s}function to(e,r){const o=e.siblings,n=o.length,{index:a}=e;return r?o[(a-1+n)%n]:a===0?null:o[a-1]}function no(e){return e.parent}function ae(e,r={}){const{reverse:o=!1}=r,{children:n}=e;if(n){const{length:a}=n,c=o?a-1:0,t=o?-1:a,s=o?-1:1;for(let d=c;d!==t;d+=s){const u=n[d];if(!u.disabled&&!u.ignored)if(u.isGroup){const b=ae(u,r);if(b!==null)return b}else return u}}return null}const ao={getChild(){return this.ignored?null:ae(this)},getParent(){const{parent:e}=this;return e?.isGroup?e.getParent():e},getNext(e={}){return ue(this,"next",e)},getPrev(e={}){return ue(this,"prev",e)}};function lo(e,r){const o=r?new Set(r):void 0,n=[];function a(c){c.forEach(t=>{n.push(t),!(t.isLeaf||!t.children||t.ignored)&&(t.isGroup||o===void 0||o.has(t.key))&&a(t.children)})}return a(e),n}function io(e,r){const o=e.key;for(;r;){if(r.key===o)return!0;r=r.parent}return!1}function ke(e,r,o,n,a,c=null,t=0){const s=[];return e.forEach((d,u)=>{var b;const h=Object.create(n);if(h.rawNode=d,h.siblings=s,h.level=t,h.index=u,h.isFirstChild=u===0,h.isLastChild=u+1===e.length,h.parent=c,!h.ignored){const m=a(d);Array.isArray(m)&&(h.children=ke(m,r,o,n,a,h,t+1))}s.push(h),r.set(h.key,h),o.has(t)||o.set(t,[]),(b=o.get(t))===null||b===void 0||b.push(h)}),s}function Po(e,r={}){var o;const n=new Map,a=new Map,{getDisabled:c=Ve,getIgnored:t=De,getIsGroup:s=Xe,getKey:d=Ge}=r,u=(o=r.getChildren)!==null&&o!==void 0?o:Oe,b=r.ignoreEmptyChildren?l=>{const i=u(l);return Array.isArray(i)?i.length?i:null:i}:u,h=Object.assign({get key(){return d(this.rawNode)},get disabled(){return c(this.rawNode)},get isGroup(){return s(this.rawNode)},get isLeaf(){return Me(this.rawNode,b)},get shallowLoaded(){return Ue(this.rawNode,b)},get ignored(){return t(this.rawNode)},contains(l){return io(this,l)}},ao),m=ke(e,n,a,h,b);function P(l){if(l==null)return null;const i=n.get(l);return i&&!i.isGroup&&!i.ignored?i:null}function g(l){if(l==null)return null;const i=n.get(l);return i&&!i.ignored?i:null}function f(l,i){const v=g(l);return v?v.getPrev(i):null}function p(l,i){const v=g(l);return v?v.getNext(i):null}function y(l){const i=g(l);return i?i.getParent():null}function x(l){const i=g(l);return i?i.getChild():null}const z={treeNodes:m,treeNodeMap:n,levelTreeNodeMap:a,maxLevel:Math.max(...a.keys()),getChildren:b,getFlattenedNodes(l){return lo(m,l)},getNode:P,getPrev:f,getNext:p,getParent:y,getChild:x,getFirstAvailableNode(){return oo(m)},getPath(l,i={}){return eo(l,i,z)},getCheckedKeys(l,i={}){const{cascade:v=!0,leafOnly:k=!1,checkStrategy:R="all",allowNotLoaded:w=!1}=i;return ee({checkedKeys:Q(l),indeterminateKeys:Y(l),cascade:v,leafOnly:k,checkStrategy:R,allowNotLoaded:w},z)},check(l,i,v={}){const{cascade:k=!0,leafOnly:R=!1,checkStrategy:w="all",allowNotLoaded:S=!1}=v;return ee({checkedKeys:Q(i),indeterminateKeys:Y(i),keysToCheck:l==null?[]:de(l),cascade:k,leafOnly:R,checkStrategy:w,allowNotLoaded:S},z)},uncheck(l,i,v={}){const{cascade:k=!0,leafOnly:R=!1,checkStrategy:w="all",allowNotLoaded:S=!1}=v;return ee({checkedKeys:Q(i),indeterminateKeys:Y(i),keysToUncheck:l==null?[]:de(l),cascade:k,leafOnly:R,checkStrategy:w,allowNotLoaded:S},z)},getNonLeafKeys(l={}){return Le(m,l)}};return z}function so(e){const{textColor2:r,primaryColorHover:o,primaryColorPressed:n,primaryColor:a,infoColor:c,successColor:t,warningColor:s,errorColor:d,baseColor:u,borderColor:b,opacityDisabled:h,tagColor:m,closeIconColor:P,closeIconColorHover:g,closeIconColorPressed:f,borderRadiusSmall:p,fontSizeMini:y,fontSizeTiny:x,fontSizeSmall:z,fontSizeMedium:l,heightMini:i,heightTiny:v,heightSmall:k,heightMedium:R,closeColorHover:w,closeColorPressed:S,buttonColor2Hover:E,buttonColor2Pressed:H,fontWeightStrong:F}=e;return Object.assign(Object.assign({},Ee),{closeBorderRadius:p,heightTiny:i,heightSmall:v,heightMedium:k,heightLarge:R,borderRadius:p,opacityDisabled:h,fontSizeTiny:y,fontSizeSmall:x,fontSizeMedium:z,fontSizeLarge:l,fontWeightStrong:F,textColorCheckable:r,textColorHoverCheckable:r,textColorPressedCheckable:r,textColorChecked:u,colorCheckable:"#0000",colorHoverCheckable:E,colorPressedCheckable:H,colorChecked:a,colorCheckedHover:o,colorCheckedPressed:n,border:`1px solid ${b}`,textColor:r,color:m,colorBordered:"rgb(250, 250, 252)",closeIconColor:P,closeIconColorHover:g,closeIconColorPressed:f,closeColorHover:w,closeColorPressed:S,borderPrimary:`1px solid ${C(a,{alpha:.3})}`,textColorPrimary:a,colorPrimary:C(a,{alpha:.12}),colorBorderedPrimary:C(a,{alpha:.1}),closeIconColorPrimary:a,closeIconColorHoverPrimary:a,closeIconColorPressedPrimary:a,closeColorHoverPrimary:C(a,{alpha:.12}),closeColorPressedPrimary:C(a,{alpha:.18}),borderInfo:`1px solid ${C(c,{alpha:.3})}`,textColorInfo:c,colorInfo:C(c,{alpha:.12}),colorBorderedInfo:C(c,{alpha:.1}),closeIconColorInfo:c,closeIconColorHoverInfo:c,closeIconColorPressedInfo:c,closeColorHoverInfo:C(c,{alpha:.12}),closeColorPressedInfo:C(c,{alpha:.18}),borderSuccess:`1px solid ${C(t,{alpha:.3})}`,textColorSuccess:t,colorSuccess:C(t,{alpha:.12}),colorBorderedSuccess:C(t,{alpha:.1}),closeIconColorSuccess:t,closeIconColorHoverSuccess:t,closeIconColorPressedSuccess:t,closeColorHoverSuccess:C(t,{alpha:.12}),closeColorPressedSuccess:C(t,{alpha:.18}),borderWarning:`1px solid ${C(s,{alpha:.35})}`,textColorWarning:s,colorWarning:C(s,{alpha:.15}),colorBorderedWarning:C(s,{alpha:.12}),closeIconColorWarning:s,closeIconColorHoverWarning:s,closeIconColorPressedWarning:s,closeColorHoverWarning:C(s,{alpha:.12}),closeColorPressedWarning:C(s,{alpha:.18}),borderError:`1px solid ${C(d,{alpha:.23})}`,textColorError:d,colorError:C(d,{alpha:.1}),colorBorderedError:C(d,{alpha:.08}),closeIconColorError:d,closeIconColorHoverError:d,closeIconColorPressedError:d,closeColorHoverError:C(d,{alpha:.12}),closeColorPressedError:C(d,{alpha:.18})})}const co={common:he,self:so},uo={color:Object,type:{type:String,default:"default"},round:Boolean,size:String,closable:Boolean,disabled:{type:Boolean,default:void 0}},ho=L("tag",`
 --n-close-margin: var(--n-close-margin-top) var(--n-close-margin-right) var(--n-close-margin-bottom) var(--n-close-margin-left);
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[B("strong",`
 font-weight: var(--n-font-weight-strong);
 `),$("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),$("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),$("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),$("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),B("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[$("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),$("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),B("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),B("icon, avatar",[B("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),B("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),B("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[N("disabled",[A("&:hover","background-color: var(--n-color-hover-checkable);",[N("checked","color: var(--n-text-color-hover-checkable);")]),A("&:active","background-color: var(--n-color-pressed-checkable);",[N("checked","color: var(--n-text-color-pressed-checkable);")])]),B("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[N("disabled",[A("&:hover","background-color: var(--n-color-checked-hover);"),A("&:active","background-color: var(--n-color-checked-pressed);")])])])]),fo=Object.assign(Object.assign(Object.assign({},U.props),uo),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),bo=ge("n-tag"),zo=te({name:"Tag",props:fo,slots:Object,setup(e){const r=T(null),{mergedBorderedRef:o,mergedClsPrefixRef:n,inlineThemeDisabled:a,mergedRtlRef:c,mergedComponentPropsRef:t}=ne(e),s=M(()=>{var f,p;return e.size||((p=(f=t?.value)===null||f===void 0?void 0:f.Tag)===null||p===void 0?void 0:p.size)||"medium"}),d=U("Tag","-tag",ho,co,e,n);ve(bo,{roundRef:G(e,"round")});function u(){if(!e.disabled&&e.checkable){const{checked:f,onCheckedChange:p,onUpdateChecked:y,"onUpdate:checked":x}=e;y&&y(!f),x&&x(!f),p&&p(!f)}}function b(f){if(e.triggerClickOnClose||f.stopPropagation(),!e.disabled){const{onClose:p}=e;p&&K(p,f)}}const h={setTextContent(f){const{value:p}=r;p&&(p.textContent=f)}},m=fe("Tag",c,n),P=M(()=>{const{type:f,color:{color:p,textColor:y}={}}=e,x=s.value,{common:{cubicBezierEaseInOut:z},self:{padding:l,closeMargin:i,borderRadius:v,opacityDisabled:k,textColorCheckable:R,textColorHoverCheckable:w,textColorPressedCheckable:S,textColorChecked:E,colorCheckable:H,colorHoverCheckable:F,colorPressedCheckable:V,colorChecked:j,colorCheckedHover:W,colorCheckedPressed:q,closeBorderRadius:X,fontWeightStrong:Z,[I("colorBordered",f)]:J,[I("closeSize",x)]:xe,[I("closeIconSize",x)]:Se,[I("fontSize",x)]:Re,[I("height",x)]:le,[I("color",f)]:Pe,[I("textColor",f)]:ze,[I("border",f)]:we,[I("closeIconColor",f)]:ie,[I("closeIconColorHover",f)]:Ie,[I("closeIconColorPressed",f)]:Be,[I("closeColorHover",f)]:$e,[I("closeColorPressed",f)]:_e}}=d.value,O=Te(i);return{"--n-font-weight-strong":Z,"--n-avatar-size-override":`calc(${le} - 8px)`,"--n-bezier":z,"--n-border-radius":v,"--n-border":we,"--n-close-icon-size":Se,"--n-close-color-pressed":_e,"--n-close-color-hover":$e,"--n-close-border-radius":X,"--n-close-icon-color":ie,"--n-close-icon-color-hover":Ie,"--n-close-icon-color-pressed":Be,"--n-close-icon-color-disabled":ie,"--n-close-margin-top":O.top,"--n-close-margin-right":O.right,"--n-close-margin-bottom":O.bottom,"--n-close-margin-left":O.left,"--n-close-size":xe,"--n-color":p||(o.value?J:Pe),"--n-color-checkable":H,"--n-color-checked":j,"--n-color-checked-hover":W,"--n-color-checked-pressed":q,"--n-color-hover-checkable":F,"--n-color-pressed-checkable":V,"--n-font-size":Re,"--n-height":le,"--n-opacity-disabled":k,"--n-padding":l,"--n-text-color":y||ze,"--n-text-color-checkable":R,"--n-text-color-checked":E,"--n-text-color-hover-checkable":w,"--n-text-color-pressed-checkable":S}}),g=a?be("tag",M(()=>{let f="";const{type:p,color:{color:y,textColor:x}={}}=e;return f+=p[0],f+=s.value[0],y&&(f+=`a${se(y)}`),x&&(f+=`b${se(x)}`),o.value&&(f+="c"),f}),P,e):void 0;return Object.assign(Object.assign({},h),{rtlEnabled:m,mergedClsPrefix:n,contentRef:r,mergedBordered:o,handleClick:u,handleCloseClick:b,cssVars:a?void 0:P,themeClass:g?.themeClass,onRender:g?.onRender})},render(){var e,r;const{mergedClsPrefix:o,rtlEnabled:n,closable:a,color:{borderColor:c}={},round:t,onRender:s,$slots:d}=this;s?.();const u=oe(d.avatar,h=>h&&_("div",{class:`${o}-tag__avatar`},h)),b=oe(d.icon,h=>h&&_("div",{class:`${o}-tag__icon`},h));return _("div",{class:[`${o}-tag`,this.themeClass,{[`${o}-tag--rtl`]:n,[`${o}-tag--strong`]:this.strong,[`${o}-tag--disabled`]:this.disabled,[`${o}-tag--checkable`]:this.checkable,[`${o}-tag--checked`]:this.checkable&&this.checked,[`${o}-tag--round`]:t,[`${o}-tag--avatar`]:u,[`${o}-tag--icon`]:b,[`${o}-tag--closable`]:a}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},b||u,_("span",{class:`${o}-tag__content`,ref:"contentRef"},(r=(e=this.$slots).default)===null||r===void 0?void 0:r.call(e)),!this.checkable&&a?_(Ae,{clsPrefix:o,class:`${o}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:t,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?_("div",{class:`${o}-tag__border`,style:{borderColor:c}}):null)}});function go(e){const{borderColor:r,primaryColor:o,baseColor:n,textColorDisabled:a,inputColorDisabled:c,textColor2:t,opacityDisabled:s,borderRadius:d,fontSizeSmall:u,fontSizeMedium:b,fontSizeLarge:h,heightSmall:m,heightMedium:P,heightLarge:g,lineHeight:f}=e;return Object.assign(Object.assign({},Ne),{labelLineHeight:f,buttonHeightSmall:m,buttonHeightMedium:P,buttonHeightLarge:g,fontSizeSmall:u,fontSizeMedium:b,fontSizeLarge:h,boxShadow:`inset 0 0 0 1px ${r}`,boxShadowActive:`inset 0 0 0 1px ${o}`,boxShadowFocus:`inset 0 0 0 1px ${o}, 0 0 0 2px ${C(o,{alpha:.2})}`,boxShadowHover:`inset 0 0 0 1px ${o}`,boxShadowDisabled:`inset 0 0 0 1px ${r}`,color:n,colorDisabled:c,colorActive:"#0000",textColor:t,textColorDisabled:a,dotColorActive:o,dotColorDisabled:r,buttonBorderColor:r,buttonBorderColorActive:o,buttonBorderColorHover:r,buttonColor:n,buttonColorActive:n,buttonTextColor:t,buttonTextColorActive:o,buttonTextColorHover:o,opacityDisabled:s,buttonBoxShadowFocus:`inset 0 0 0 1px ${o}, 0 0 0 2px ${C(o,{alpha:.3})}`,buttonBoxShadowHover:"inset 0 0 0 1px #0000",buttonBoxShadow:"inset 0 0 0 1px #0000",buttonBorderRadius:d})}const vo={common:he,self:go},po={name:String,value:{type:[String,Number,Boolean],default:"on"},checked:{type:Boolean,default:void 0},defaultChecked:Boolean,disabled:{type:Boolean,default:void 0},label:String,size:String,onUpdateChecked:[Function,Array],"onUpdate:checked":[Function,Array],checkedValue:{type:Boolean,default:void 0}},ye=ge("n-radio-group");function Co(e){const r=Ke(ye,null),{mergedClsPrefixRef:o,mergedComponentPropsRef:n}=ne(e),a=pe(e,{mergedSize(l){var i,v;const{size:k}=e;if(k!==void 0)return k;if(r){const{mergedSizeRef:{value:w}}=r;if(w!==void 0)return w}if(l)return l.mergedSize.value;const R=(v=(i=n?.value)===null||i===void 0?void 0:i.Radio)===null||v===void 0?void 0:v.size;return R||"medium"},mergedDisabled(l){return!!(e.disabled||r?.disabledRef.value||l?.disabled.value)}}),{mergedSizeRef:c,mergedDisabledRef:t}=a,s=T(null),d=T(null),u=T(e.defaultChecked),b=G(e,"checked"),h=Ce(b,u),m=ce(()=>r?r.valueRef.value===e.value:h.value),P=ce(()=>{const{name:l}=e;if(l!==void 0)return l;if(r)return r.nameRef.value}),g=T(!1);function f(){if(r){const{doUpdateValue:l}=r,{value:i}=e;K(l,i)}else{const{onUpdateChecked:l,"onUpdate:checked":i}=e,{nTriggerFormInput:v,nTriggerFormChange:k}=a;l&&K(l,!0),i&&K(i,!0),v(),k(),u.value=!0}}function p(){t.value||m.value||f()}function y(){p(),s.value&&(s.value.checked=m.value)}function x(){g.value=!1}function z(){g.value=!0}return{mergedClsPrefix:r?r.mergedClsPrefixRef:o,inputRef:s,labelRef:d,mergedName:P,mergedDisabled:t,renderSafeChecked:m,focus:g,mergedSize:c,handleRadioInputChange:y,handleRadioInputBlur:x,handleRadioInputFocus:z}}const wo=te({name:"RadioButton",props:po,setup:Co,render(){const{mergedClsPrefix:e}=this;return _("label",{class:[`${e}-radio-button`,this.mergedDisabled&&`${e}-radio-button--disabled`,this.renderSafeChecked&&`${e}-radio-button--checked`,this.focus&&[`${e}-radio-button--focus`]]},_("input",{ref:"inputRef",type:"radio",class:`${e}-radio-input`,value:this.value,name:this.mergedName,checked:this.renderSafeChecked,disabled:this.mergedDisabled,onChange:this.handleRadioInputChange,onFocus:this.handleRadioInputFocus,onBlur:this.handleRadioInputBlur}),_("div",{class:`${e}-radio-button__state-border`}),oe(this.$slots.default,r=>!r&&!this.label?null:_("div",{ref:"labelRef",class:`${e}-radio__label`},r||this.label)))}}),mo=L("radio-group",`
 display: inline-block;
 font-size: var(--n-font-size);
`,[$("splitor",`
 display: inline-block;
 vertical-align: bottom;
 width: 1px;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 background: var(--n-button-border-color);
 `,[B("checked",{backgroundColor:"var(--n-button-border-color-active)"}),B("disabled",{opacity:"var(--n-opacity-disabled)"})]),B("button-group",`
 white-space: nowrap;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[L("radio-button",{height:"var(--n-height)",lineHeight:"var(--n-height)"}),$("splitor",{height:"var(--n-height)"})]),L("radio-button",`
 vertical-align: bottom;
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-block;
 box-sizing: border-box;
 padding-left: 14px;
 padding-right: 14px;
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background: var(--n-button-color);
 color: var(--n-button-text-color);
 border-top: 1px solid var(--n-button-border-color);
 border-bottom: 1px solid var(--n-button-border-color);
 `,[L("radio-input",`
 pointer-events: none;
 position: absolute;
 border: 0;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 `),$("state-border",`
 z-index: 1;
 pointer-events: none;
 position: absolute;
 box-shadow: var(--n-button-box-shadow);
 transition: box-shadow .3s var(--n-bezier);
 left: -1px;
 bottom: -1px;
 right: -1px;
 top: -1px;
 `),A("&:first-child",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 border-left: 1px solid var(--n-button-border-color);
 `,[$("state-border",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `)]),A("&:last-child",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `,[$("state-border",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `)]),N("disabled",`
 cursor: pointer;
 `,[A("&:hover",[$("state-border",`
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `),N("checked",{color:"var(--n-button-text-color-hover)"})]),B("focus",[A("&:not(:active)",[$("state-border",{boxShadow:"var(--n-button-box-shadow-focus)"})])])]),B("checked",`
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `),B("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)])]);function ko(e,r,o){var n;const a=[];let c=!1;for(let t=0;t<e.length;++t){const s=e[t],d=(n=s.type)===null||n===void 0?void 0:n.name;d==="RadioButton"&&(c=!0);const u=s.props;if(d!=="RadioButton"){a.push(s);continue}if(t===0)a.push(s);else{const b=a[a.length-1].props,h=r===b.value,m=b.disabled,P=r===u.value,g=u.disabled,f=(h?2:0)+(m?0:1),p=(P?2:0)+(g?0:1),y={[`${o}-radio-group__splitor--disabled`]:m,[`${o}-radio-group__splitor--checked`]:h},x={[`${o}-radio-group__splitor--disabled`]:g,[`${o}-radio-group__splitor--checked`]:P},z=f<p?x:y;a.push(_("div",{class:[`${o}-radio-group__splitor`,z]}),s)}}return{children:a,isButtonGroup:c}}const yo=Object.assign(Object.assign({},U.props),{name:String,value:[String,Number,Boolean],defaultValue:{type:[String,Number,Boolean],default:null},size:String,disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),Io=te({name:"RadioGroup",props:yo,setup(e){const r=T(null),{mergedSizeRef:o,mergedDisabledRef:n,nTriggerFormChange:a,nTriggerFormInput:c,nTriggerFormBlur:t,nTriggerFormFocus:s}=pe(e),{mergedClsPrefixRef:d,inlineThemeDisabled:u,mergedRtlRef:b}=ne(e),h=U("Radio","-radio-group",mo,vo,e,d),m=T(e.defaultValue),P=G(e,"value"),g=Ce(P,m);function f(i){const{onUpdateValue:v,"onUpdate:value":k}=e;v&&K(v,i),k&&K(k,i),m.value=i,a(),c()}function p(i){const{value:v}=r;v&&(v.contains(i.relatedTarget)||s())}function y(i){const{value:v}=r;v&&(v.contains(i.relatedTarget)||t())}ve(ye,{mergedClsPrefixRef:d,nameRef:G(e,"name"),valueRef:g,disabledRef:n,mergedSizeRef:o,doUpdateValue:f});const x=fe("Radio",b,d),z=M(()=>{const{value:i}=o,{common:{cubicBezierEaseInOut:v},self:{buttonBorderColor:k,buttonBorderColorActive:R,buttonBorderRadius:w,buttonBoxShadow:S,buttonBoxShadowFocus:E,buttonBoxShadowHover:H,buttonColor:F,buttonColorActive:V,buttonTextColor:j,buttonTextColorActive:W,buttonTextColorHover:q,opacityDisabled:X,[I("buttonHeight",i)]:Z,[I("fontSize",i)]:J}}=h.value;return{"--n-font-size":J,"--n-bezier":v,"--n-button-border-color":k,"--n-button-border-color-active":R,"--n-button-border-radius":w,"--n-button-box-shadow":S,"--n-button-box-shadow-focus":E,"--n-button-box-shadow-hover":H,"--n-button-color":F,"--n-button-color-active":V,"--n-button-text-color":j,"--n-button-text-color-hover":q,"--n-button-text-color-active":W,"--n-height":Z,"--n-opacity-disabled":X}}),l=u?be("radio-group",M(()=>o.value[0]),z,e):void 0;return{selfElRef:r,rtlEnabled:x,mergedClsPrefix:d,mergedValue:g,handleFocusout:y,handleFocusin:p,cssVars:u?void 0:z,themeClass:l?.themeClass,onRender:l?.onRender}},render(){var e;const{mergedValue:r,mergedClsPrefix:o,handleFocusin:n,handleFocusout:a}=this,{children:c,isButtonGroup:t}=ko(He(Fe(this)),r,o);return(e=this.onRender)===null||e===void 0||e.call(this),_("div",{onFocusin:n,onFocusout:a,ref:"selfElRef",class:[`${o}-radio-group`,this.rtlEnabled&&`${o}-radio-group--rtl`,this.themeClass,t&&`${o}-radio-group--button-group`],style:this.cssVars},c)}});export{zo as N,Io as _,wo as a,Ro as b,Po as c,So as h,bo as t};
