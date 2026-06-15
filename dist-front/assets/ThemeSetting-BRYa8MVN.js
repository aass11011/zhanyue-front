import{c as h,a as $,d as C,e as T,h as s,u as et,M as At,N as oe,O as L,P as Ae,Q as G,R as K,S as Y,T as ce,U as re,V as tt,W as De,X as N,Y as Te,Z as Ee,j as U,l as M,_ as ue,$ as pe,k as Bt,q as nt,a0 as ot,a1 as ve,a2 as Ne,a3 as Oe,a4 as Fe,a5 as Pt,a6 as _t,b as Xe,a7 as Ut,a8 as zt,a9 as Rt,aa as He,ab as rt,ac as Vt,ad as Mt,ae as Dt,af as Tt,f as it,ag as Et,ah as Ze,t as Me,y as Nt,i as Ot,ai as Ke,aj as Ft,ak as ke,al as Ye,am as be,an as at,p as Ht,z as O,A as Be,B,F as he,J as S,ao as q,E as qe,ap as me,r as Se,aq as qt,ar as jt,I as j,D as ne,as as lt,at as Lt,C as I,G as st,au as Je,av as dt,w as Gt,v as Wt,H as Xt,aw as Zt,ax as Kt,L as Yt,ay as Jt}from"./index-BIpz-lxO.js";import{_ as Qt}from"./UserAvatar-DiR1JX4z.js";import{_ as en}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{b as tn,c as nn}from"./Fullscreen-BoPC4-Vu.js";import{_ as on}from"./Input-CfkE2DS5.js";import{u as rn}from"./use-locale-O2slJonS.js";const an=h("input-group",`
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`,[$(">",[h("input",[$("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),$("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]),h("button",[$("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[C("state-border, border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]),$("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[C("state-border, border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]),$("*",[$("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[$(">",[h("input",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),h("base-selection",[h("base-selection-label",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),h("base-selection-tags",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),C("box-shadow, border, state-border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]),$("&:not(:first-child)",`
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[$(">",[h("input",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),h("base-selection",[h("base-selection-label",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),h("base-selection-tags",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),C("box-shadow, border, state-border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]),ln={},sn=T({name:"InputGroup",props:ln,setup(e){const{mergedClsPrefixRef:t}=et(e);return At("-input-group",an,t),{mergedClsPrefix:t}},render(){const{mergedClsPrefix:e}=this;return s("div",{class:`${e}-input-group`},this.$slots)}});function dn(e,t){switch(e[0]){case"hex":return t?"#000000FF":"#000000";case"rgb":return t?"rgba(0, 0, 0, 1)":"rgb(0, 0, 0)";case"hsl":return t?"hsla(0, 0%, 0%, 1)":"hsl(0, 0%, 0%)";case"hsv":return t?"hsva(0, 0%, 0%, 1)":"hsv(0, 0%, 0%)"}return"#000000"}function xe(e){return e===null?null:/^ *#/.test(e)?"hex":e.includes("rgb")?"rgb":e.includes("hsl")?"hsl":e.includes("hsv")?"hsv":null}function cn(e,t=[255,255,255],n="AA"){const[o,r,a,l]=N(L(e));if(l===1){const y=Ce([o,r,a]),D=Ce(t);return(Math.max(y,D)+.05)/(Math.min(y,D)+.05)>=(n==="AA"?4.5:7)}const d=Math.round(o*l+t[0]*(1-l)),p=Math.round(r*l+t[1]*(1-l)),c=Math.round(a*l+t[2]*(1-l)),w=Ce([d,p,c]),b=Ce(t);return(Math.max(w,b)+.05)/(Math.min(w,b)+.05)>=(n==="AA"?4.5:7)}function Ce(e){const[t,n,o]=e.map(r=>(r/=255,r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4)));return .2126*t+.7152*n+.0722*o}function un(e){return e=Math.round(e),e>=360?359:e<0?0:e}function pn(e){return e=Math.round(e*100)/100,e>1?1:e<0?0:e}const hn={rgb:{hex(e){return Y(N(e))},hsl(e){const[t,n,o,r]=N(e);return L([...Ee(t,n,o),r])},hsv(e){const[t,n,o,r]=N(e);return re([...Te(t,n,o),r])}},hex:{rgb(e){return G(N(e))},hsl(e){const[t,n,o,r]=N(e);return L([...Ee(t,n,o),r])},hsv(e){const[t,n,o,r]=N(e);return re([...Te(t,n,o),r])}},hsl:{hex(e){const[t,n,o,r]=ce(e);return Y([...De(t,n,o),r])},rgb(e){const[t,n,o,r]=ce(e);return G([...De(t,n,o),r])},hsv(e){const[t,n,o,r]=ce(e);return re([...tt(t,n,o),r])}},hsv:{hex(e){const[t,n,o,r]=oe(e);return Y([...K(t,n,o),r])},rgb(e){const[t,n,o,r]=oe(e);return G([...K(t,n,o),r])},hsl(e){const[t,n,o,r]=oe(e);return L([...Ae(t,n,o),r])}}};function ct(e,t,n){return n=n||xe(e),n?n===t?e:hn[n][t](e):null}const ge="12px",fn=12,ee="6px",gn=T({name:"AlphaSlider",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},alpha:{type:Number,default:0},onUpdateAlpha:{type:Function,required:!0},onComplete:Function},setup(e){const t=M(null);function n(a){!t.value||!e.rgba||(ue("mousemove",document,o),ue("mouseup",document,r),o(a))}function o(a){const{value:l}=t;if(!l)return;const{width:d,left:p}=l.getBoundingClientRect(),c=(a.clientX-p)/(d-fn);e.onUpdateAlpha(pn(c))}function r(){var a;pe("mousemove",document,o),pe("mouseup",document,r),(a=e.onComplete)===null||a===void 0||a.call(e)}return{railRef:t,railBackgroundImage:U(()=>{const{rgba:a}=e;return a?`linear-gradient(to right, rgba(${a[0]}, ${a[1]}, ${a[2]}, 0) 0%, rgba(${a[0]}, ${a[1]}, ${a[2]}, 1) 100%)`:""}),handleMouseDown:n}},render(){const{clsPrefix:e}=this;return s("div",{class:`${e}-color-picker-slider`,ref:"railRef",style:{height:ge,borderRadius:ee},onMousedown:this.handleMouseDown},s("div",{style:{borderRadius:ee,position:"absolute",left:0,right:0,top:0,bottom:0,overflow:"hidden"}},s("div",{class:`${e}-color-picker-checkboard`}),s("div",{class:`${e}-color-picker-slider__image`,style:{backgroundImage:this.railBackgroundImage}})),this.rgba&&s("div",{style:{position:"absolute",left:ee,right:ee,top:0,bottom:0}},s("div",{class:`${e}-color-picker-handle`,style:{left:`calc(${this.alpha*100}% - ${ee})`,borderRadius:ee,width:ge,height:ge}},s("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:G(this.rgba),borderRadius:ee,width:ge,height:ge}}))))}}),je=Bt("n-color-picker");function bn(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),255)):!1}function mn(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),360)):!1}function vn(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),100)):!1}function xn(e){const t=e.trim();return/^#[0-9a-fA-F]+$/.test(t)?[4,5,7,9].includes(t.length):!1}function wn(e){return/^\d{1,3}\.?\d*%$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e)/100,100)):!1}const yn={paddingSmall:"0 4px"},Qe=T({name:"ColorInputUnit",props:{label:{type:String,required:!0},value:{type:[Number,String],default:null},showAlpha:Boolean,onUpdateValue:{type:Function,required:!0}},setup(e){const t=M(""),{themeRef:n}=nt(je,null);ot(()=>{t.value=o()});function o(){const{value:l}=e;if(l===null)return"";const{label:d}=e;return d==="HEX"?l:d==="A"?`${Math.floor(l*100)}%`:String(Math.floor(l))}function r(l){t.value=l}function a(l){let d,p;switch(e.label){case"HEX":p=xn(l),p&&e.onUpdateValue(l),t.value=o();break;case"H":d=mn(l),d===!1?t.value=o():e.onUpdateValue(d);break;case"S":case"L":case"V":d=vn(l),d===!1?t.value=o():e.onUpdateValue(d);break;case"A":d=wn(l),d===!1?t.value=o():e.onUpdateValue(d);break;case"R":case"G":case"B":d=bn(l),d===!1?t.value=o():e.onUpdateValue(d);break}}return{mergedTheme:n,inputValue:t,handleInputChange:a,handleInputUpdateValue:r}},render(){const{mergedTheme:e}=this;return s(on,{size:"small",placeholder:this.label,theme:e.peers.Input,themeOverrides:e.peerOverrides.Input,builtinThemeOverrides:yn,value:this.inputValue,onUpdateValue:this.handleInputUpdateValue,onChange:this.handleInputChange,style:this.label==="A"?"flex-grow: 1.25;":""})}}),kn=T({name:"ColorInput",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},modes:{type:Array,required:!0},showAlpha:{type:Boolean,required:!0},value:{type:String,default:null},valueArr:{type:Array,default:null},onUpdateValue:{type:Function,required:!0},onUpdateMode:{type:Function,required:!0}},setup(e){return{handleUnitUpdateValue(t,n){const{showAlpha:o}=e;if(e.mode==="hex"){e.onUpdateValue((o?Y:ve)(n));return}let r;switch(e.valueArr===null?r=[0,0,0,0]:r=Array.from(e.valueArr),e.mode){case"hsv":r[t]=n,e.onUpdateValue((o?re:Fe)(r));break;case"rgb":r[t]=n,e.onUpdateValue((o?G:Oe)(r));break;case"hsl":r[t]=n,e.onUpdateValue((o?L:Ne)(r));break}}}},render(){const{clsPrefix:e,modes:t}=this;return s("div",{class:`${e}-color-picker-input`},s("div",{class:`${e}-color-picker-input__mode`,onClick:this.onUpdateMode,style:{cursor:t.length===1?"":"pointer"}},this.mode.toUpperCase()+(this.showAlpha?"A":"")),s(sn,null,{default:()=>{const{mode:n,valueArr:o,showAlpha:r}=this;if(n==="hex"){let a=null;try{a=o===null?null:(r?Y:ve)(o)}catch{}return s(Qe,{label:"HEX",showAlpha:r,value:a,onUpdateValue:l=>{this.handleUnitUpdateValue(0,l)}})}return(n+(r?"a":"")).split("").map((a,l)=>s(Qe,{label:a.toUpperCase(),value:o===null?null:o[l],onUpdateValue:d=>{this.handleUnitUpdateValue(l,d)}}))}}))}});function Sn(e,t){if(t==="hsv"){const[n,o,r,a]=oe(e);return G([...K(n,o,r),a])}return e}function Cn(e){const t=document.createElement("canvas").getContext("2d");return t?(t.fillStyle=e,t.fillStyle):"#000000"}const $n=T({name:"ColorPickerSwatches",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},swatches:{type:Array,required:!0},onUpdateColor:{type:Function,required:!0}},setup(e){const t=U(()=>e.swatches.map(a=>{const l=xe(a);return{value:a,mode:l,legalValue:Sn(a,l)}}));function n(a){const{mode:l}=e;let{value:d,mode:p}=a;return p||(p="hex",/^[a-zA-Z]+$/.test(d)?d=Cn(d):(Pt("color-picker",`color ${d} in swatches is invalid.`),d="#000000")),p===l?d:ct(d,l,p)}function o(a){e.onUpdateColor(n(a))}function r(a,l){a.key==="Enter"&&o(l)}return{parsedSwatchesRef:t,handleSwatchSelect:o,handleSwatchKeyDown:r}},render(){const{clsPrefix:e}=this;return s("div",{class:`${e}-color-picker-swatches`},this.parsedSwatchesRef.map(t=>s("div",{class:`${e}-color-picker-swatch`,tabindex:0,onClick:()=>{this.handleSwatchSelect(t)},onKeydown:n=>{this.handleSwatchKeyDown(n,t)}},s("div",{class:`${e}-color-picker-swatch__fill`,style:{background:t.legalValue}}))))}}),In=T({name:"ColorPickerTrigger",slots:Object,props:{clsPrefix:{type:String,required:!0},value:{type:String,default:null},hsla:{type:Array,default:null},disabled:Boolean,onClick:Function},setup(e){const{colorPickerSlots:t,renderLabelRef:n}=nt(je,null);return()=>{const{hsla:o,value:r,clsPrefix:a,onClick:l,disabled:d}=e,p=t.label||n.value;return s("div",{class:[`${a}-color-picker`,d&&`${a}-color-picker--disabled`],onClick:d?void 0:l},s("div",{class:`${a}-color-picker__fill`},s("div",{class:`${a}-color-picker-checkboard`}),s("div",{style:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:o?L(o):""}}),r&&o?s("div",{class:`${a}-color-picker__value`,style:{color:cn(o)?"white":"black"}},p?p(r):r):null))}}}),An=T({name:"ColorPreview",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},color:{type:String,default:null,validator:e=>{const t=xe(e);return!!(!e||t&&t!=="hsv")}},onUpdateColor:{type:Function,required:!0}},setup(e){function t(n){var o;const r=n.target.value;(o=e.onUpdateColor)===null||o===void 0||o.call(e,ct(r.toUpperCase(),e.mode,"hex")),n.stopPropagation()}return{handleChange:t}},render(){const{clsPrefix:e}=this;return s("div",{class:`${e}-color-picker-preview__preview`},s("span",{class:`${e}-color-picker-preview__fill`,style:{background:this.color||"#000000"}}),s("input",{class:`${e}-color-picker-preview__input`,type:"color",value:this.color,onChange:this.handleChange}))}}),de="12px",Bn=12,te="6px",Pn=6,_n="linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)",Un=T({name:"HueSlider",props:{clsPrefix:{type:String,required:!0},hue:{type:Number,required:!0},onUpdateHue:{type:Function,required:!0},onComplete:Function},setup(e){const t=M(null);function n(a){t.value&&(ue("mousemove",document,o),ue("mouseup",document,r),o(a))}function o(a){const{value:l}=t;if(!l)return;const{width:d,left:p}=l.getBoundingClientRect(),c=un((a.clientX-p-Pn)/(d-Bn)*360);e.onUpdateHue(c)}function r(){var a;pe("mousemove",document,o),pe("mouseup",document,r),(a=e.onComplete)===null||a===void 0||a.call(e)}return{railRef:t,handleMouseDown:n}},render(){const{clsPrefix:e}=this;return s("div",{class:`${e}-color-picker-slider`,style:{height:de,borderRadius:te}},s("div",{ref:"railRef",style:{boxShadow:"inset 0 0 2px 0 rgba(0, 0, 0, .24)",boxSizing:"border-box",backgroundImage:_n,height:de,borderRadius:te,position:"relative"},onMousedown:this.handleMouseDown},s("div",{style:{position:"absolute",left:te,right:te,top:0,bottom:0}},s("div",{class:`${e}-color-picker-handle`,style:{left:`calc((${this.hue}%) / 359 * 100 - ${te})`,borderRadius:te,width:de,height:de}},s("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:`hsl(${this.hue}, 100%, 50%)`,borderRadius:te,width:de,height:de}})))))}}),$e="12px",Ie="6px",zn=T({name:"Pallete",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},displayedHue:{type:Number,required:!0},displayedSv:{type:Array,required:!0},onUpdateSV:{type:Function,required:!0},onComplete:Function},setup(e){const t=M(null);function n(a){t.value&&(ue("mousemove",document,o),ue("mouseup",document,r),o(a))}function o(a){const{value:l}=t;if(!l)return;const{width:d,height:p,left:c,bottom:w}=l.getBoundingClientRect(),b=(w-a.clientY)/p,x=(a.clientX-c)/d,y=100*(x>1?1:x<0?0:x),D=100*(b>1?1:b<0?0:b);e.onUpdateSV(y,D)}function r(){var a;pe("mousemove",document,o),pe("mouseup",document,r),(a=e.onComplete)===null||a===void 0||a.call(e)}return{palleteRef:t,handleColor:U(()=>{const{rgba:a}=e;return a?`rgb(${a[0]}, ${a[1]}, ${a[2]})`:""}),handleMouseDown:n}},render(){const{clsPrefix:e}=this;return s("div",{class:`${e}-color-picker-pallete`,onMousedown:this.handleMouseDown,ref:"palleteRef"},s("div",{class:`${e}-color-picker-pallete__layer`,style:{backgroundImage:`linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))`}}),s("div",{class:`${e}-color-picker-pallete__layer ${e}-color-picker-pallete__layer--shadowed`,style:{backgroundImage:"linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))"}}),this.rgba&&s("div",{class:`${e}-color-picker-handle`,style:{width:$e,height:$e,borderRadius:Ie,left:`calc(${this.displayedSv[0]}% - ${Ie})`,bottom:`calc(${this.displayedSv[1]}% - ${Ie})`}},s("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:this.handleColor,borderRadius:Ie,width:$e,height:$e}})))}}),Rn=$([h("color-picker-panel",`
 margin: 4px 0;
 width: 240px;
 font-size: var(--n-panel-font-size);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 `,[_t(),h("input",`
 text-align: center;
 `)]),h("color-picker-checkboard",`
 background: white; 
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[$("&::after",`
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 12px 12px;
 background-position: 0 0, 0 6px, 6px -6px, -6px 0px;
 background-repeat: repeat;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),h("color-picker-slider",`
 margin-bottom: 8px;
 position: relative;
 box-sizing: border-box;
 `,[C("image",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `),$("&::after",`
 content: "";
 position: absolute;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 pointer-events: none;
 `)]),h("color-picker-handle",`
 z-index: 1;
 box-shadow: 0 0 2px 0 rgba(0, 0, 0, .45);
 position: absolute;
 background-color: white;
 overflow: hidden;
 `,[C("fill",`
 box-sizing: border-box;
 border: 2px solid white;
 `)]),h("color-picker-pallete",`
 height: 180px;
 position: relative;
 margin-bottom: 8px;
 cursor: crosshair;
 `,[C("layer",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[Xe("shadowed",`
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 `)])]),h("color-picker-preview",`
 display: flex;
 `,[C("sliders",`
 flex: 1 0 auto;
 `),C("preview",`
 position: relative;
 height: 30px;
 width: 30px;
 margin: 0 0 8px 6px;
 border-radius: 50%;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 overflow: hidden;
 `),C("fill",`
 display: block;
 width: 30px;
 height: 30px;
 `),C("input",`
 position: absolute;
 top: 0;
 left: 0;
 width: 30px;
 height: 30px;
 opacity: 0;
 z-index: 1;
 `)]),h("color-picker-input",`
 display: flex;
 align-items: center;
 `,[h("input",`
 flex-grow: 1;
 flex-basis: 0;
 `),C("mode",`
 width: 72px;
 text-align: center;
 `)]),h("color-picker-control",`
 padding: 12px;
 `),h("color-picker-action",`
 display: flex;
 margin-top: -4px;
 border-top: 1px solid var(--n-divider-color);
 padding: 8px 12px;
 justify-content: flex-end;
 `,[h("button","margin-left: 8px;")]),h("color-picker",`
 display: inline-block;
 box-sizing: border-box;
 height: var(--n-height);
 font-size: var(--n-font-size);
 width: 100%;
 position: relative;
 cursor: pointer;
 border: var(--n-border);
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[Xe("disabled","cursor: not-allowed"),C("value",`
 white-space: nowrap;
 position: relative;
 `),C("fill",`
 border-radius: var(--n-border-radius);
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 left: 4px;
 right: 4px;
 top: 4px;
 bottom: 4px;
 `),h("color-picker-checkboard",`
 border-radius: var(--n-border-radius);
 `,[$("&::after",`
 --n-block-size: calc((var(--n-height) - 8px) / 3);
 background-size: calc(var(--n-block-size) * 2) calc(var(--n-block-size) * 2);
 background-position: 0 0, 0 var(--n-block-size), var(--n-block-size) calc(-1 * var(--n-block-size)), calc(-1 * var(--n-block-size)) 0px; 
 `)])]),h("color-picker-swatches",`
 display: grid;
 grid-gap: 8px;
 flex-wrap: wrap;
 position: relative;
 grid-template-columns: repeat(auto-fill, 18px);
 margin-top: 10px;
 `,[h("color-picker-swatch",`
 width: 18px;
 height: 18px;
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 8px 8px;
 background-position: 0px 0, 0px 4px, 4px -4px, -4px 0px;
 background-repeat: repeat;
 `,[C("fill",`
 position: relative;
 width: 100%;
 height: 100%;
 border-radius: 3px;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 cursor: pointer;
 `),$("&:focus",`
 outline: none;
 `,[C("fill",[$("&::after",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 background: inherit;
 filter: blur(2px);
 content: "";
 `)])])])])]),Vn=Object.assign(Object.assign({},it.props),{value:String,show:{type:Boolean,default:void 0},defaultShow:Boolean,defaultValue:String,modes:{type:Array,default:()=>["rgb","hex","hsl"]},placement:{type:String,default:"bottom-start"},to:He.propTo,showAlpha:{type:Boolean,default:!0},showPreview:Boolean,swatches:Array,disabled:{type:Boolean,default:void 0},actions:{type:Array,default:null},internalActions:Array,size:String,renderLabel:Function,onComplete:Function,onConfirm:Function,onClear:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),Mn=T({name:"ColorPicker",props:Vn,slots:Object,setup(e,{slots:t}){let n=null;function o(i){n=i}let r=null;const{mergedClsPrefixRef:a,namespaceRef:l,inlineThemeDisabled:d,mergedComponentPropsRef:p}=et(e),c=Tt(e,{mergedSize:i=>{var u,f;const{size:m}=e;if(m)return m;const{mergedSize:v}=i||{};if(v?.value)return v.value;const g=(f=(u=p?.value)===null||u===void 0?void 0:u.ColorPicker)===null||f===void 0?void 0:f.size;return g||"medium"}}),{mergedSizeRef:w,mergedDisabledRef:b}=c,{localeRef:x}=rn("global"),y=it("ColorPicker","-color-picker",Rn,Et,e,a);Ht(je,{themeRef:y,renderLabelRef:Me(e,"renderLabel"),colorPickerSlots:t});const D=M(e.defaultShow),Pe=Ze(Me(e,"show"),D);function we(i){const{onUpdateShow:u,"onUpdate:show":f}=e;u&&ke(u,i),f&&ke(f,i),D.value=i}const{defaultValue:Ge}=e,We=M(Ge===void 0?dn(e.modes,e.showAlpha):Ge),P=Ze(Me(e,"value"),We),ie=M([P.value]),F=M(0),_e=U(()=>xe(P.value)),{modes:ut}=e,E=M(xe(P.value)||ut[0]||"rgb");function pt(){const{modes:i}=e,{value:u}=E,f=i.findIndex(m=>m===u);~f?E.value=i[(f+1)%i.length]:E.value="rgb"}let z,R,ae,le,W,X,Z,V;const fe=U(()=>{const{value:i}=P;if(!i)return null;switch(_e.value){case"hsv":return oe(i);case"hsl":return[z,R,ae,V]=ce(i),[...tt(z,R,ae),V];case"rgb":case"hex":return[W,X,Z,V]=N(i),[...Te(W,X,Z),V]}}),J=U(()=>{const{value:i}=P;if(!i)return null;switch(_e.value){case"rgb":case"hex":return N(i);case"hsv":return[z,R,le,V]=oe(i),[...K(z,R,le),V];case"hsl":return[z,R,ae,V]=ce(i),[...De(z,R,ae),V]}}),Ue=U(()=>{const{value:i}=P;if(!i)return null;switch(_e.value){case"hsl":return ce(i);case"hsv":return[z,R,le,V]=oe(i),[...Ae(z,R,le),V];case"rgb":case"hex":return[W,X,Z,V]=N(i),[...Ee(W,X,Z),V]}}),ht=U(()=>{switch(E.value){case"rgb":case"hex":return J.value;case"hsv":return fe.value;case"hsl":return Ue.value}}),ye=M(0),ze=M(1),Re=M([0,0]);function ft(i,u){const{value:f}=fe,m=ye.value,v=f?f[3]:1;Re.value=[i,u];const{showAlpha:g}=e;switch(E.value){case"hsv":k((g?re:Fe)([m,i,u,v]),"cursor");break;case"hsl":k((g?L:Ne)([...Ae(m,i,u),v]),"cursor");break;case"rgb":k((g?G:Oe)([...K(m,i,u),v]),"cursor");break;case"hex":k((g?Y:ve)([...K(m,i,u),v]),"cursor");break}}function gt(i){ye.value=i;const{value:u}=fe;if(!u)return;const[,f,m,v]=u,{showAlpha:g}=e;switch(E.value){case"hsv":k((g?re:Fe)([i,f,m,v]),"cursor");break;case"rgb":k((g?G:Oe)([...K(i,f,m),v]),"cursor");break;case"hex":k((g?Y:ve)([...K(i,f,m),v]),"cursor");break;case"hsl":k((g?L:Ne)([...Ae(i,f,m),v]),"cursor");break}}function bt(i){switch(E.value){case"hsv":[z,R,le]=fe.value,k(re([z,R,le,i]),"cursor");break;case"rgb":[W,X,Z]=J.value,k(G([W,X,Z,i]),"cursor");break;case"hex":[W,X,Z]=J.value,k(Y([W,X,Z,i]),"cursor");break;case"hsl":[z,R,ae]=Ue.value,k(L([z,R,ae,i]),"cursor");break}ze.value=i}function k(i,u){u==="cursor"?r=i:r=null;const{nTriggerFormChange:f,nTriggerFormInput:m}=c,{onUpdateValue:v,"onUpdate:value":g}=e;v&&ke(v,i),g&&ke(g,i),f(),m(),We.value=i}function mt(i){k(i,"input"),at(se)}function se(i=!0){const{value:u}=P;if(u){const{nTriggerFormChange:f,nTriggerFormInput:m}=c,{onComplete:v}=e;v&&v(u);const{value:g}=ie,{value:_}=F;i&&(g.splice(_+1,g.length,u),F.value=_+1),f(),m()}}function vt(){const{value:i}=F;i-1<0||(k(ie.value[i-1],"input"),se(!1),F.value=i-1)}function xt(){const{value:i}=F;i<0||i+1>=ie.value.length||(k(ie.value[i+1],"input"),se(!1),F.value=i+1)}function wt(){k(null,"input");const{onClear:i}=e;i&&i(),we(!1)}function yt(){const{value:i}=P,{onConfirm:u}=e;u&&u(i),we(!1)}const kt=U(()=>F.value>=1),St=U(()=>{const{value:i}=ie;return i.length>1&&F.value<i.length-1});Nt(Pe,i=>{i||(ie.value=[P.value],F.value=0)}),ot(()=>{if(!(r&&r===P.value)){const{value:i}=fe;i&&(ye.value=i[0],ze.value=i[3],Re.value=[i[1],i[2]])}r=null});const Ve=U(()=>{const{value:i}=w,{common:{cubicBezierEaseInOut:u},self:{textColor:f,color:m,panelFontSize:v,boxShadow:g,border:_,borderRadius:A,dividerColor:Q,[Ye("height",i)]:$t,[Ye("fontSize",i)]:It}}=y.value;return{"--n-bezier":u,"--n-text-color":f,"--n-color":m,"--n-panel-font-size":v,"--n-font-size":It,"--n-box-shadow":g,"--n-border":_,"--n-border-radius":A,"--n-height":$t,"--n-divider-color":Q}}),H=d?Ot("color-picker",U(()=>w.value[0]),Ve,e):void 0;function Ct(){var i;const{value:u}=J,{value:f}=ye,{internalActions:m,modes:v,actions:g}=e,{value:_}=y,{value:A}=a;return s("div",{class:[`${A}-color-picker-panel`,H?.themeClass.value],onDragstart:Q=>{Q.preventDefault()},style:d?void 0:Ve.value},s("div",{class:`${A}-color-picker-control`},s(zn,{clsPrefix:A,rgba:u,displayedHue:f,displayedSv:Re.value,onUpdateSV:ft,onComplete:se}),s("div",{class:`${A}-color-picker-preview`},s("div",{class:`${A}-color-picker-preview__sliders`},s(Un,{clsPrefix:A,hue:f,onUpdateHue:gt,onComplete:se}),e.showAlpha?s(gn,{clsPrefix:A,rgba:u,alpha:ze.value,onUpdateAlpha:bt,onComplete:se}):null),e.showPreview?s(An,{clsPrefix:A,mode:E.value,color:J.value&&ve(J.value),onUpdateColor:Q=>{k(Q,"input")}}):null),s(kn,{clsPrefix:A,showAlpha:e.showAlpha,mode:E.value,modes:v,onUpdateMode:pt,value:P.value,valueArr:ht.value,onUpdateValue:mt}),((i=e.swatches)===null||i===void 0?void 0:i.length)&&s($n,{clsPrefix:A,mode:E.value,swatches:e.swatches,onUpdateColor:Q=>{k(Q,"input")}})),g?.length?s("div",{class:`${A}-color-picker-action`},g.includes("confirm")&&s(be,{size:"small",onClick:yt,theme:_.peers.Button,themeOverrides:_.peerOverrides.Button},{default:()=>x.value.confirm}),g.includes("clear")&&s(be,{size:"small",onClick:wt,disabled:!P.value,theme:_.peers.Button,themeOverrides:_.peerOverrides.Button},{default:()=>x.value.clear})):null,t.action?s("div",{class:`${A}-color-picker-action`},{default:t.action}):m?s("div",{class:`${A}-color-picker-action`},m.includes("undo")&&s(be,{size:"small",onClick:vt,disabled:!kt.value,theme:_.peers.Button,themeOverrides:_.peerOverrides.Button},{default:()=>x.value.undo}),m.includes("redo")&&s(be,{size:"small",onClick:xt,disabled:!St.value,theme:_.peers.Button,themeOverrides:_.peerOverrides.Button},{default:()=>x.value.redo})):null)}return{mergedClsPrefix:a,namespace:l,hsla:Ue,rgba:J,mergedShow:Pe,mergedDisabled:b,isMounted:Ft(),adjustedTo:He(e),mergedValue:P,handleTriggerClick(){b.value||we(!0)},setTriggerRef:o,handleClickOutside(i){if(n instanceof Element){if(n.contains(Ke(i)))return}else if(n&&n.$el.contains(Ke(i)))return;we(!1)},renderPanel:Ct,cssVars:d?void 0:Ve,themeClass:H?.themeClass,onRender:H?.onRender}},render(){const{mergedClsPrefix:e,onRender:t}=this;return t?.(),s(Dt,null,{default:()=>[s(Ut,null,{default:()=>zt(this.$slots.trigger,{value:this.mergedValue,onClick:this.handleTriggerClick,ref:this.setTriggerRef},n=>n||s(In,{clsPrefix:e,value:this.mergedValue,hsla:this.hsla,style:this.cssVars,ref:this.setTriggerRef,disabled:this.mergedDisabled,class:this.themeClass,onClick:this.mergedDisabled?void 0:this.handleTriggerClick}))}),s(Rt,{placement:this.placement,show:this.mergedShow,containerClass:this.namespace,teleportDisabled:this.adjustedTo===He.tdkey,to:this.adjustedTo},{default:()=>s(rt,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>this.mergedShow?Vt(this.renderPanel(),[[Mt,this.handleClickOutside,void 0,{capture:!0}]]):null})})]})}});var Dn=void 0;const Tn=(e,t)=>{let n=null,o=!0;return function(){if(!o)return;o=!1;for(var r=arguments.length,a=new Array(r),l=0;l<r;l++)a[l]=arguments[l];let d=a;n&&clearTimeout(n),n=setTimeout(()=>{o=!0,e.apply(Dn,d)},t)}};var Le=T({name:"Vue3IntroStep",props:{show:{type:Boolean,required:!0},config:{type:Object,required:!0}},emits:["update:show"],data(){return{originalBox:{left:250,top:250,width:200,height:100},tipBoxPosition:"bottom",currentIndex:0}},watch:{config:{deep:!0,handler(){this.currentIndex=0},immediate:!0},show(e){e?this.setBoxInfo():document.body.style.overflow="auto"}},computed:{tipBoxStyle(){if(this.tipBoxPosition==="right")return{left:`${this.originalBox.left+this.originalBox.width}px`,top:`${this.originalBox.top}px`};if(this.tipBoxPosition==="left")return{right:`${window.innerWidth-this.originalBox.left}px`,top:`${this.originalBox.top}px`};if(this.tipBoxPosition==="top")return{left:`${this.originalBox.left}px`,bottom:`${window.innerHeight-this.originalBox.top}px`};if(this.tipBoxPosition==="bottom")return{left:`${this.originalBox.left>window.innerWidth-300?window.innerWidth-300:this.originalBox.left}px`,top:`${this.originalBox.top+this.originalBox.height}px`}}},created(){this.init()},mounted(){window.onresize=Tn(()=>{this.show&&this.setBoxInfo()},100)},beforeUnmount(){window.onresize=null},methods:{async prev(){let e=!0;if(this.config.tips[this.currentIndex]&&this.config.tips[this.currentIndex].onPrev&&(e=await this.config.tips[this.currentIndex].onPrev()),!e)throw new Error("onPrev 需要 Promise.resolve(true) 才可以继续往下走");this.setBoxInfo(this.currentIndex-1)},async next(){let e=!0;if(this.config.tips[this.currentIndex]&&this.config.tips[this.currentIndex].onNext&&(e=await this.config.tips[this.currentIndex].onNext()),!e)throw new Error("onNext 需要 Promise.resolve(true) 才可以继续往下走");this.setBoxInfo(this.currentIndex+1)},done(){this.$emit("update:show",!1)},async setBoxInfo(e){try{e===void 0&&(e=this.currentIndex),this.show&&(document.body.style.overflow="hidden");let t=this.config.tips[e].el,n=document.querySelector(t);if(!n)throw new Error("没有找到相应的元素");let o=n.getBoundingClientRect();this.originalBox={left:o.left,top:o.top,width:o.width,height:o.height},this.tipBoxPosition=this.config.tips[e].tipPosition,this.currentIndex=e}catch(t){throw new Error(t.message)}},init(){const{tips:e}=this.config;let t=null;if(e&&Array.isArray(e))if(e.length>0){this.currentIndex=0;try{let n=document.querySelector(e[0].el);t=setInterval(()=>{n=document.querySelector(e[0].el),n&&(this.setBoxInfo(0),clearInterval(t))},0)}catch(n){throw new Error(n.message)}}else throw new Error("tips数组不能为空");else throw new Error("config中的tips不存在或者不是数组")}}});const En=e=>(qt("data-v-5d3b253c"),e=e(),jt(),e),Nn={key:0,id:"intro_box"},On=En(()=>S("div",{class:"round round-flicker"},null,-1)),Fn=[On],Hn={class:"tip-content"},qn={class:"action",style:{justifyContent:"center"}};function jn(e,t,n,o,r,a){return O(),Be(rt,{name:"custom-classes-transition","enter-active-class":"animate__animated animate__fadeIn animate__faster","leave-active-class":"animate__animated animate__fadeOut animate__faster"},{default:B(()=>[e.show?(O(),he("div",Nn,[S("div",{class:"top",style:q({height:`${e.originalBox.top}px`,backgroundColor:`rgba(0, 0, 0, ${e.config.backgroundOpacity?e.config.backgroundOpacity:.9})`})},null,4),S("div",{class:"content",style:q({height:`${e.originalBox.height}px`})},[S("div",{class:"left",style:q({top:`${e.originalBox.top}px`,width:`${e.originalBox.left}px`,height:`${e.originalBox.height}px`,backgroundColor:`rgba(0, 0, 0, ${e.config.backgroundOpacity?e.config.backgroundOpacity:.9})`})},null,4),S("div",{class:"original-box",style:q({top:`${e.originalBox.top}px`,left:`${e.originalBox.left}px`,width:`${e.originalBox.width}px`,height:`${e.originalBox.height}px`})},Fn,4),S("div",{class:"tip-box",style:q(e.tipBoxStyle)},[S("div",Hn,[e.config.tips[e.currentIndex].title?(O(),he("div",{key:0,class:"title",style:q({textAlign:e.config.titleStyle&&e.config.titleStyle.textAlign?e.config.titleStyle.textAlign:"center",fontSize:e.config.titleStyle&&e.config.titleStyle.fontSize?e.config.titleStyle.fontSize:"19px"})},qe(e.config.tips[e.currentIndex].title),5)):me("",!0),S("div",{class:"content",style:q({textAlign:e.config.contentStyle&&e.config.contentStyle.textAlign?e.config.contentStyle.textAlign:"center",fontSize:e.config.contentStyle&&e.config.contentStyle.fontSize?e.config.contentStyle.fontSize:"15px"})},qe(e.config.tips[e.currentIndex].content),5),S("div",qn,[e.currentIndex!==0?Se(e.$slots,"prev",{key:0,index:e.currentIndex,tipItem:e.config.tips[e.currentIndex]},()=>[S("div",{class:"item prev",onClick:t[0]||(t[0]=function(){return e.prev&&e.prev(...arguments)})},"上一步")]):me("",!0),e.currentIndex!==e.config.tips.length-1?Se(e.$slots,"next",{key:1,index:e.currentIndex,tipItem:e.config.tips[e.currentIndex]},()=>[S("div",{class:"item next",onClick:t[1]||(t[1]=function(){return e.next&&e.next(...arguments)})},"下一步")]):me("",!0),e.currentIndex===e.config.tips.length-1?Se(e.$slots,"done",{key:2,index:e.currentIndex,tipItem:e.config.tips[e.currentIndex]},()=>[S("div",{class:"item done",onClick:t[2]||(t[2]=function(){return e.done&&e.done(...arguments)})},"完成")]):Se(e.$slots,"skip",{key:3,index:e.currentIndex,tipItem:e.config.tips[e.currentIndex]},()=>[S("div",{class:"item skip",onClick:t[3]||(t[3]=function(){return e.done&&e.done(...arguments)})},"跳过")])])])],4),S("div",{class:"right",style:q({top:`${e.originalBox.top}px`,left:`${e.originalBox.left+e.originalBox.width}px`,width:`calc(100% - ${e.originalBox.left+e.originalBox.width}px)`,height:`${e.originalBox.height}px`,backgroundColor:`rgba(0, 0, 0, ${e.config.backgroundOpacity?e.config.backgroundOpacity:.9})`}),ref:"tip_box"},null,4)],4),S("div",{class:"bottom",style:q({height:`calc(100% - ${e.originalBox.top}px - ${e.originalBox.height}px)`,backgroundColor:`rgba(0, 0, 0, ${e.config.backgroundOpacity?e.config.backgroundOpacity:.9})`})},null,4)])):me("",!0)]),_:3})}function Ln(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(typeof document>"u")){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",n==="top"&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var Gn=`
#intro_box[data-v-5d3b253c] {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 99999;
}
#intro_box > .top[data-v-5d3b253c] {
  width: 100%;
}
#intro_box > .content[data-v-5d3b253c] {
  width: 100%;
}
#intro_box > .content > .left[data-v-5d3b253c] {
  position: absolute;
  left: 0;
}
#intro_box > .content > .original-box[data-v-5d3b253c] {
  position: absolute;
  background-color: transparent;
  transition: all 0.3s cubic-bezier(0, 0, 0.58, 1);
}
#intro_box > .content > .original-box .round[data-v-5d3b253c] {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  opacity: 0.65;
  background-color: #9900ff;
}
#intro_box > .content > .original-box .round-flicker[data-v-5d3b253c]:before,
#intro_box > .content > .original-box .round-flicker[data-v-5d3b253c]:after {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  left: -1px;
  top: -1px;
  box-shadow: #9900ff 0px 0px 2px 2px;
  border: 1px solid rgba(153, 0, 255, 0.5);
  border-radius: 50%;
  animation: warn-5d3b253c 2s linear 0s infinite;
}
@keyframes warn-5d3b253c {
0% {
    transform: scale(0.5);
    opacity: 1;
}
25% {
    transform: scale(1);
    opacity: 0.75;
}
50% {
    transform: scale(1.5);
    opacity: 0.5;
}
75% {
    transform: scale(2);
    opacity: 0.25;
}
100% {
    transform: scale(2.5);
    opacity: 0;
}
}
#intro_box > .content > .tip-box[data-v-5d3b253c] {
  position: absolute;
  /*宽度应为内容宽*/
  width: fit-content;
  max-width: 300px;
  box-sizing: border-box;
  /*高度应为内容高度*/
  height: fit-content;
  transition: all 0.3s;
  z-index: 99999;
  padding: 12px;
  font-size: 15px;
}
#intro_box > .content > .tip-box > .tip-content[data-v-5d3b253c] {
  border-radius: 10px;
  overflow: hidden;
  padding: 10px;
  color: #fff;
}
#intro_box > .content > .tip-box > .tip-content > .title[data-v-5d3b253c] {
  font-weight: bold;
  margin-bottom: 10px;
}
#intro_box > .content > .tip-box > .tip-content > .content[data-v-5d3b253c] {
  white-space: normal;
  overflow-wrap: break-word;
  line-height: 1.5;
}
#intro_box > .content > .tip-box > .tip-content > .action[data-v-5d3b253c] {
  margin-top: 15px;
  width: 100%;
  display: flex;
}
#intro_box > .content > .tip-box > .tip-content > .action > .item[data-v-5d3b253c] {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 15px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.3s;
  padding: 5px 15px;
  color: #fff;
  font-weight: bold;
  border: 1px solid #ccc;
  margin: 5px;
}
#intro_box > .content > .tip-box > .tip-content > .action > .item.prev[data-v-5d3b253c] {
  color: #ccc;
}
#intro_box > .content > .tip-box > .tip-content > .action > .item.next[data-v-5d3b253c] {
  color: #ccc;
}
#intro_box > .content > .tip-box > .tip-content > .action > .item.done[data-v-5d3b253c] {
  color: #ccc;
}
#intro_box > .content > .tip-box > .tip-content > .action > .item.skip[data-v-5d3b253c] {
  color: #ccc;
}
#intro_box > .content > .right[data-v-5d3b253c] {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.9);
}
#intro_box > .bottom[data-v-5d3b253c] {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.9);
}
`;Ln(Gn);Le.render=jn;Le.__scopeId="data-v-5d3b253c";var Wn=(()=>{const e=Le;return e.install=t=>{t.component("Vue3IntroStep",e)},e})();const ro={__name:"BeginnerGuide",setup(e){const t=Je(null),n=Je(!1),o={backgroundOpacity:.8,titleStyle:{textAlign:"left",fontSize:"18px"},contentStyle:{textAlign:"left",fontSize:"14px"},tips:[{el:"#toggleTheme",tipPosition:"bottom",title:"切换系统主题",content:"一键开启护眼模式"},{el:"#fullscreen",tipPosition:"bottom",title:"全屏/退出全屏",content:"一键开启全屏"},{el:"#theme-setting",tipPosition:"bottom",title:"设置主题色",content:"调整为你喜欢的主题色"},{el:"#user-dropdown",tipPosition:"bottom",title:"个人中心",content:"查看个人资料和退出系统"},{el:"#menu-collapse",tipPosition:"bottom",title:"展开/收起菜单",content:"一键展开/收起菜单"},{el:"#top-tab",tipPosition:"bottom",title:"标签栏",content:"鼠标滚轮滑动可调整至最佳视野"},{el:"#layout-setting",tipPosition:"left",title:"调整系统布局",content:"将系统布局调整为你喜欢的样子"}]};function r(){n.value=!1}function a(){n.value=!1}function l(){t.value.next()}function d(){t.value.prev()}return(p,c)=>{const w=lt,b=be;return O(),he(st,null,[j(w,{trigger:"hover"},{trigger:B(()=>[S("i",{class:"i-fe:beginner mr-16 cursor-pointer text-20",onClick:c[0]||(c[0]=x=>n.value=!0)})]),default:B(()=>[c[2]||(c[2]=ne(" 操作指引 ",-1))]),_:1}),j(I(Wn),{ref_key:"myIntroStep",ref:t,show:I(n),"onUpdate:show":c[1]||(c[1]=x=>Lt(n)?n.value=x:null),config:o},{prev:B(({tipItem:x,index:y})=>[j(b,{class:"mr-12",type:"primary",color:"#fff","text-color":"#fff",ghost:"",round:"",size:"small",onClick:D=>d(x,y)},{default:B(()=>[...c[3]||(c[3]=[ne(" 上一步 ",-1)])]),_:1},8,["onClick"])]),next:B(({tipItem:x})=>[j(b,{class:"mr-12",type:"primary",color:"#fff","text-color":"#fff",ghost:"",round:"",size:"small",onClick:y=>l(x)},{default:B(()=>[...c[4]||(c[4]=[ne(" 下一步 ",-1)])]),_:1},8,["onClick"])]),skip:B(()=>[j(b,{type:"primary",color:"#fff","text-color":"#fff",ghost:"",round:"",size:"small",onClick:r},{default:B(()=>[...c[5]||(c[5]=[ne(" 跳过 ",-1)])]),_:1})]),done:B(()=>[j(b,{type:"primary",color:"#fff","text-color":"#fff",ghost:"",round:"",size:"small",onClick:a},{default:B(()=>[...c[6]||(c[6]=[ne(" 完成 ",-1)])]),_:1})]),_:1},8,["show"])],64)}}},Xn={__name:"ContextMenu",props:{show:{type:Boolean,default:!1},currentPath:{type:String,default:""},x:{type:Number,default:0},y:{type:Number,default:0}},emits:["update:show"],setup(e,{emit:t}){const n=e,o=t,r=dt(),a=U(()=>[{label:"重新加载",key:"reload",disabled:n.currentPath!==r.activeTab,icon:()=>s("i",{class:"i-mdi:refresh text-14"})},{label:"关闭",key:"close",disabled:r.tabs.length<=1,icon:()=>s("i",{class:"i-mdi:close text-14"})},{label:"关闭其他",key:"close-other",disabled:r.tabs.length<=1,icon:()=>s("i",{class:"i-mdi:arrow-expand-horizontal text-14"})},{label:"关闭左侧",key:"close-left",disabled:r.tabs.length<=1||n.currentPath===r.tabs[0].path,icon:()=>s("i",{class:"i-mdi:arrow-expand-left text-14"})},{label:"关闭右侧",key:"close-right",disabled:r.tabs.length<=1||n.currentPath===r.tabs[r.tabs.length-1].path,icon:()=>s("i",{class:"i-mdi:arrow-expand-right text-14"})}]),l=Gt(),d=new Map([["reload",()=>{r.reloadTab(l.fullPath,l.meta?.keepAlive)}],["close",()=>{r.removeTab(n.currentPath)}],["close-other",()=>{r.removeOther(n.currentPath)}],["close-left",()=>{r.removeLeft(n.currentPath)}],["close-right",()=>{r.removeRight(n.currentPath)}]]);function p(){o("update:show",!1)}function c(w){const b=d.get(w);typeof b=="function"&&b(),p()}return(w,b)=>{const x=Qt;return O(),Be(x,{show:e.show,options:I(a),x:e.x,y:e.y,placement:"bottom-start",onClickoutside:p,onSelect:c},null,8,["show","options","x","y"])}}},Zn={id:"top-tab"},Kn={__name:"index",setup(e){const t=Wt(),n=dt(),o=Kt({show:!1,x:0,y:0,currentPath:""});function r(c){n.setActiveTab(c),t.push(c)}function a(){o.show=!0}function l(){o.show=!1}function d(c,w,b){Object.assign(o,{x:c,y:w,currentPath:b})}async function p(c,w){const{clientX:b,clientY:x}=c;l(),d(b,x,w.path),await at(),a()}return(c,w)=>{const b=tn,x=nn;return O(),he("div",Zn,[j(x,{value:I(n).activeTab,closable:I(n).tabs.length>1,type:"card",onClose:w[0]||(w[0]=y=>I(n).removeTab(y))},{default:B(()=>[(O(!0),he(st,null,Xt(I(n).tabs,y=>(O(),Be(b,{key:y.path,name:y.path,onClick:D=>r(y.path),onContextmenu:Zt(D=>p(D,y),["prevent"])},{default:B(()=>[ne(qe(y.title),1)]),_:2},1032,["name","onClick","onContextmenu"]))),128))]),_:1},8,["value","closable"]),I(o).show?(O(),Be(Xn,{key:0,show:I(o).show,"onUpdate:show":w[1]||(w[1]=y=>I(o).show=y),"current-path":I(o).currentPath,x:I(o).x,y:I(o).y},null,8,["show","current-path","x","y"])):me("",!0)])}}},io=en(Kn,[["__scopeId","data-v-871ef196"]]),Yn={class:"f-c-c"},ao={__name:"ThemeSetting",setup(e){const t=Yt(),n=Object.entries(Jt.getPresetColors()).map(([,o])=>o.primary);return(o,r)=>{const a=Mn,l=lt;return O(),he("div",Yn,[j(l,{trigger:"hover",placement:"bottom"},{trigger:B(()=>[j(a,{id:"theme-setting",class:"h-32 w-32",value:I(t).primaryColor,swatches:I(n),"on-update:value":d=>I(t).setPrimaryColor(d),"render-label":()=>""},null,8,["value","swatches","on-update:value"])]),default:B(()=>[r[0]||(r[0]=ne(" 设置主题色 ",-1))]),_:1})])}}};export{io as A,ro as _,ao as a};
