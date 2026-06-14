import{_ as ve}from"./TheFooter-HvtnmFps.js";import{k as ke,h as b,a as m,c as r,b as B,d as $,bv as me,ba as ge,bb as pe,e as xe,aX as we,bw as ye,_ as Ce,q as _e,u as ze,l as F,ah as Re,aE as Se,af as $e,f as G,bx as De,i as Be,aJ as Te,j as H,ak as q,by as Ie,al as A,t as Me,bo as E,bq as Ve,v as Ke,w as Ue,bz as j,bA as Fe,z as O,F as J,J as g,D as L,E as Ne,C as i,I as T,B as U,bB as W,ap as qe,am as Ee}from"./index-BIpz-lxO.js";import{_ as je}from"./Input-CfkE2DS5.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./use-locale-O2slJonS.js";import"./Suffix-BOLnsLY8.js";const Le=ke("n-checkbox-group"),Pe=()=>b("svg",{viewBox:"0 0 64 64",class:"check-icon"},b("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),He=()=>b("svg",{viewBox:"0 0 100 100",class:"line-icon"},b("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"})),Ae=m([r("checkbox",`
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 line-height: var(--n-size);
 --n-merged-color-table: var(--n-color-table);
 `,[B("show-label","line-height: var(--n-label-line-height);"),m("&:hover",[r("checkbox-box",[$("border","border: var(--n-border-checked);")])]),m("&:focus:not(:active)",[r("checkbox-box",[$("border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),B("inside-table",[r("checkbox-box",`
 background-color: var(--n-merged-color-table);
 `)]),B("checked",[r("checkbox-box",`
 background-color: var(--n-color-checked);
 `,[r("checkbox-icon",[m(".check-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),B("indeterminate",[r("checkbox-box",[r("checkbox-icon",[m(".check-icon",`
 opacity: 0;
 transform: scale(.5);
 `),m(".line-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),B("checked, indeterminate",[m("&:focus:not(:active)",[r("checkbox-box",[$("border",`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),r("checkbox-box",`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[$("border",{border:"var(--n-border-checked)"})])]),B("disabled",{cursor:"not-allowed"},[B("checked",[r("checkbox-box",`
 background-color: var(--n-color-disabled-checked);
 `,[$("border",{border:"var(--n-border-disabled-checked)"}),r("checkbox-icon",[m(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled-checked)"})])])]),r("checkbox-box",`
 background-color: var(--n-color-disabled);
 `,[$("border",`
 border: var(--n-border-disabled);
 `),r("checkbox-icon",[m(".check-icon, .line-icon",`
 fill: var(--n-check-mark-color-disabled);
 `)])]),$("label",`
 color: var(--n-text-color-disabled);
 `)]),r("checkbox-box-wrapper",`
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `),r("checkbox-box",`
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 height: var(--n-size);
 width: var(--n-size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color 0.3s var(--n-bezier);
 `,[$("border",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--n-border);
 `),r("checkbox-icon",`
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `,[m(".check-icon, .line-icon",`
 width: 100%;
 fill: var(--n-check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--n-bezier),
 transform 0.3s var(--n-bezier),
 opacity 0.3s var(--n-bezier),
 border-color 0.3s var(--n-bezier);
 `),me({left:"1px",top:"1px"})])]),$("label",`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `,[m("&:empty",{display:"none"})])]),ge(r("checkbox",`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),pe(r("checkbox",`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]),Oe=Object.assign(Object.assign({},G.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]}),Je=xe({name:"Checkbox",props:Oe,setup(n){const l=_e(Le,null),d=F(null),{mergedClsPrefixRef:s,inlineThemeDisabled:p,mergedRtlRef:a,mergedComponentPropsRef:u}=ze(n),x=F(n.defaultChecked),D=Me(n,"checked"),t=Re(D,x),h=Se(()=>{if(l){const o=l.valueSetRef.value;return o&&n.value!==void 0?o.has(n.value):!1}else return t.value===n.checkedValue}),C=$e(n,{mergedSize(o){var v,k;const{size:y}=n;if(y!==void 0)return y;if(l){const{value:S}=l.mergedSizeRef;if(S!==void 0)return S}if(o){const{mergedSize:S}=o;if(S!==void 0)return S.value}const R=(k=(v=u?.value)===null||v===void 0?void 0:v.Checkbox)===null||k===void 0?void 0:k.size;return R||"medium"},mergedDisabled(o){const{disabled:v}=n;if(v!==void 0)return v;if(l){if(l.disabledRef.value)return!0;const{maxRef:{value:k},checkedCountRef:y}=l;if(k!==void 0&&y.value>=k&&!h.value)return!0;const{minRef:{value:R}}=l;if(R!==void 0&&y.value<=R&&h.value)return!0}return o?o.disabled.value:!1}}),{mergedDisabledRef:w,mergedSizeRef:I}=C,f=G("Checkbox","-checkbox",Ae,Ie,n,s);function e(o){if(l&&n.value!==void 0)l.toggleCheckbox(!h.value,n.value);else{const{onChange:v,"onUpdate:checked":k,onUpdateChecked:y}=n,{nTriggerFormInput:R,nTriggerFormChange:S}=C,K=h.value?n.uncheckedValue:n.checkedValue;k&&q(k,K,o),y&&q(y,K,o),v&&q(v,K,o),R(),S(),x.value=K}}function _(o){w.value||e(o)}function M(o){if(!w.value)switch(o.key){case" ":case"Enter":e(o)}}function z(o){o.key===" "&&o.preventDefault()}const N={focus:()=>{var o;(o=d.value)===null||o===void 0||o.focus()},blur:()=>{var o;(o=d.value)===null||o===void 0||o.blur()}},c=De("Checkbox",a,s),P=H(()=>{const{value:o}=I,{common:{cubicBezierEaseInOut:v},self:{borderRadius:k,color:y,colorChecked:R,colorDisabled:S,colorTableHeader:K,colorTableHeaderModal:X,colorTableHeaderPopover:Y,checkMarkColor:Z,checkMarkColorDisabled:Q,border:ee,borderFocus:oe,borderDisabled:ne,borderChecked:re,boxShadowFocus:ae,textColor:te,textColorDisabled:le,checkMarkColorDisabledChecked:ce,colorDisabledChecked:se,borderDisabledChecked:ie,labelPadding:de,labelLineHeight:ue,labelFontWeight:be,[A("fontSize",o)]:he,[A("size",o)]:fe}}=f.value;return{"--n-label-line-height":ue,"--n-label-font-weight":be,"--n-size":fe,"--n-bezier":v,"--n-border-radius":k,"--n-border":ee,"--n-border-checked":re,"--n-border-focus":oe,"--n-border-disabled":ne,"--n-border-disabled-checked":ie,"--n-box-shadow-focus":ae,"--n-color":y,"--n-color-checked":R,"--n-color-table":K,"--n-color-table-modal":X,"--n-color-table-popover":Y,"--n-color-disabled":S,"--n-color-disabled-checked":se,"--n-text-color":te,"--n-text-color-disabled":le,"--n-check-mark-color":Z,"--n-check-mark-color-disabled":Q,"--n-check-mark-color-disabled-checked":ce,"--n-font-size":he,"--n-label-padding":de}}),V=p?Be("checkbox",H(()=>I.value[0]),P,n):void 0;return Object.assign(C,N,{rtlEnabled:c,selfRef:d,mergedClsPrefix:s,mergedDisabled:w,renderedChecked:h,mergedTheme:f,labelId:Te(),handleClick:_,handleKeyUp:M,handleKeyDown:z,cssVars:p?void 0:P,themeClass:V?.themeClass,onRender:V?.onRender})},render(){var n;const{$slots:l,renderedChecked:d,mergedDisabled:s,indeterminate:p,privateInsideTable:a,cssVars:u,labelId:x,label:D,mergedClsPrefix:t,focusable:h,handleKeyUp:C,handleKeyDown:w,handleClick:I}=this;(n=this.onRender)===null||n===void 0||n.call(this);const f=we(l.default,e=>D||e?b("span",{class:`${t}-checkbox__label`,id:x},D||e):null);return b("div",{ref:"selfRef",class:[`${t}-checkbox`,this.themeClass,this.rtlEnabled&&`${t}-checkbox--rtl`,d&&`${t}-checkbox--checked`,s&&`${t}-checkbox--disabled`,p&&`${t}-checkbox--indeterminate`,a&&`${t}-checkbox--inside-table`,f&&`${t}-checkbox--show-label`],tabindex:s||!h?void 0:0,role:"checkbox","aria-checked":p?"mixed":d,"aria-labelledby":x,style:u,onKeyup:C,onKeydown:w,onClick:I,onMousedown:()=>{Ce("selectstart",window,e=>{e.preventDefault()},{once:!0})}},b("div",{class:`${t}-checkbox-box-wrapper`}," ",b("div",{class:`${t}-checkbox-box`},b(ye,null,{default:()=>this.indeterminate?b("div",{key:"indeterminate",class:`${t}-checkbox-icon`},He()):b("div",{key:"check",class:`${t}-checkbox-icon`},Pe())}),b("div",{class:`${t}-checkbox-box__border`}))),f)}});function We(n,l){let d,s,p=0;return function(...a){const u=+new Date;d=this,s=a,u-p>l&&(n.apply(d,s),p=u)}}const Ge="/assets/login_banner-BD2eW0TC.webp",Xe="/assets/logo-Bw3FJMyu.png",Ye={toggleRole:n=>E.post("/auth/role/toggle",n),login:n=>E.post("/auth/login",n,{needToken:!1}),getUser:()=>E.get("/user/detail")},Ze={class:"wh-full flex-col bg-[url(@/assets/images/login_bg.webp)] bg-cover"},Qe={class:"m-auto max-w-700 min-w-345 f-c-c rounded-8 auto-bg bg-opacity-20 bg-cover p-12 card-shadow"},eo={class:"w-320 flex-col px-20 py-32"},oo={class:"f-c-c text-24 text-#6a6a6a font-normal"},no={class:"mt-20 flex items-center"},ro=["src"],ao={class:"mt-20 flex items-center"},bo={__name:"index",setup(n){const l=Ve(),d=Ke(),s=Ue(),p="占月明",a=F({username:"",password:""}),u=F(""),x=We(()=>{u.value=`/portal-api/auth/captcha?${Date.now()}`},500),D=j.get("loginInfo");D&&(a.value.username=D.username||"",a.value.password=D.password||""),x();function t(){a.value.username="admin",a.value.password="123456",w(!0)}const h=Fe("isRemember",!0),C=F(!1);async function w(f){const{username:e,password:_,captcha:M}=a.value;if(!e||!_)return $message.warning("请输入用户名和密码");if(!f&&!M)return $message.warning("请输入验证码");try{C.value=!0,$message.loading("正在验证，请稍后...",{key:"login"});const{data:z}=await Ye.login({username:e,password:_.toString(),captcha:M,isQuick:f});h.value?j.set("loginInfo",{username:e,password:_}):j.remove("loginInfo"),I(z)}catch(z){z?.code===10003&&x(),$message.destroy("login"),console.error(z)}C.value=!1}async function I(f={}){l.setToken(f),$message.loading("登录中...",{key:"login"});try{if($message.success("登录成功",{key:"login"}),s.query.redirect){const e=s.query.redirect;delete s.query.redirect,d.push({path:e,query:s.query})}else d.push("/")}catch(e){console.error(e),$message.destroy("login")}}return(f,e)=>{const _=je,M=Je,z=Ee,N=ve;return O(),J("div",Ze,[g("div",Qe,[e[14]||(e[14]=g("div",{class:"hidden w-380 px-20 py-35 md:block"},[g("img",{src:Ge,class:"w-full",alt:"login_banner"})],-1)),g("div",eo,[g("h2",oo,[e[8]||(e[8]=g("img",{src:Xe,class:"mr-12 h-50"},null,-1)),L(" "+Ne(i(p)),1)]),T(_,{value:i(a).username,"onUpdate:value":e[0]||(e[0]=c=>i(a).username=c),autofocus:"",class:"mt-32 h-40 items-center",placeholder:"请输入用户名",maxlength:20},{prefix:U(()=>[...e[9]||(e[9]=[g("i",{class:"i-fe:user mr-12 opacity-20"},null,-1)])]),_:1},8,["value"]),T(_,{value:i(a).password,"onUpdate:value":e[1]||(e[1]=c=>i(a).password=c),class:"mt-20 h-40 items-center",type:"password","show-password-on":"mousedown",placeholder:"请输入密码",maxlength:20,onKeydown:e[2]||(e[2]=W(c=>w(),["enter"]))},{prefix:U(()=>[...e[10]||(e[10]=[g("i",{class:"i-fe:lock mr-12 opacity-20"},null,-1)])]),_:1},8,["value"]),g("div",no,[T(_,{value:i(a).captcha,"onUpdate:value":e[3]||(e[3]=c=>i(a).captcha=c),class:"h-40 items-center",palceholder:"请输入验证码",maxlength:4,onKeydown:e[4]||(e[4]=W(c=>w(),["enter"]))},{prefix:U(()=>[...e[11]||(e[11]=[g("i",{class:"i-fe:key mr-12 opacity-20"},null,-1)])]),_:1},8,["value"]),i(u)?(O(),J("img",{key:0,src:i(u),alt:"验证码",height:"40",class:"ml-12 w-80 cursor-pointer",onClick:e[5]||(e[5]=(...c)=>i(x)&&i(x)(...c))},null,8,ro)):qe("",!0)]),T(M,{class:"mt-20",checked:i(h),label:"记住我","on-update:checked":c=>h.value=c},null,8,["checked","on-update:checked"]),g("div",ao,[T(z,{class:"h-40 flex-1 rounded-5 text-16",type:"primary",ghost:"",onClick:e[6]||(e[6]=c=>t())},{default:U(()=>[...e[12]||(e[12]=[L(" 一键体验 ",-1)])]),_:1}),T(z,{class:"ml-32 h-40 flex-1 rounded-5 text-16",type:"primary",loading:i(C),onClick:e[7]||(e[7]=c=>w())},{default:U(()=>[...e[13]||(e[13]=[L(" 登录 ",-1)])]),_:1},8,["loading"])])])]),T(N,{class:"py-12"})])}}};export{bo as default};
