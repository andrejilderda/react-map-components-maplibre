"use strict";(self.webpackChunk_mapcomponents_react_maplibre=self.webpackChunk_mapcomponents_react_maplibre||[]).push([[3686],{84475:(e,t,n)=>{n.d(t,{x:()=>a});var r=n(96540),o=n(54871),l=n(66111),i=n(86249),s=n(74848);function u(e){return e.substring(2).toLowerCase()}function a(e){const{children:t,disableReactTree:n=!1,mouseEvent:a="onClick",onClickAway:c,touchEvent:d="onTouchEnd"}=e,f=r.useRef(!1),p=r.useRef(null),v=r.useRef(!1),h=r.useRef(!1);r.useEffect((()=>(setTimeout((()=>{v.current=!0}),0),()=>{v.current=!1})),[]);const m=(0,o.A)(t.ref,p),g=(0,l.A)((e=>{const t=h.current;h.current=!1;const r=(0,i.A)(p.current);if(!v.current||!p.current||"clientX"in e&&function(e,t){return t.documentElement.clientWidth<e.clientX||t.documentElement.clientHeight<e.clientY}(e,r))return;if(f.current)return void(f.current=!1);let o;o=e.composedPath?e.composedPath().indexOf(p.current)>-1:!r.documentElement.contains(e.target)||p.current.contains(e.target),o||!n&&t||c(e)})),b=e=>n=>{h.current=!0;const r=t.props[e];r&&r(n)},y={ref:m};return!1!==d&&(y[d]=b(d)),r.useEffect((()=>{if(!1!==d){const e=u(d),t=(0,i.A)(p.current),n=()=>{f.current=!0};return t.addEventListener(e,g),t.addEventListener("touchmove",n),()=>{t.removeEventListener(e,g),t.removeEventListener("touchmove",n)}}}),[g,d]),!1!==a&&(y[a]=b(a)),r.useEffect((()=>{if(!1!==a){const e=u(a),t=(0,i.A)(p.current);return t.addEventListener(e,g),()=>{t.removeEventListener(e,g)}}}),[g,a]),(0,s.jsx)(r.Fragment,{children:r.cloneElement(t,y)})}},35487:(e,t,n)=>{n.d(t,{s:()=>c});var r=n(96540),o=n(54871),l=n(86249),i=n(74848);const s=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function u(e){const t=[],n=[];return Array.from(e.querySelectorAll(s)).forEach(((e,r)=>{const o=function(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?"true"===e.contentEditable||("AUDIO"===e.nodeName||"VIDEO"===e.nodeName||"DETAILS"===e.nodeName)&&null===e.getAttribute("tabindex")?0:e.tabIndex:t}(e);-1!==o&&function(e){return!(e.disabled||"INPUT"===e.tagName&&"hidden"===e.type||function(e){if("INPUT"!==e.tagName||"radio"!==e.type)return!1;if(!e.name)return!1;const t=t=>e.ownerDocument.querySelector(`input[type="radio"]${t}`);let n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}(e))}(e)&&(0===o?t.push(e):n.push({documentOrder:r,tabIndex:o,node:e}))})),n.sort(((e,t)=>e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex)).map((e=>e.node)).concat(t)}function a(){return!0}function c(e){const{children:t,disableAutoFocus:n=!1,disableEnforceFocus:s=!1,disableRestoreFocus:c=!1,getTabbable:d=u,isEnabled:f=a,open:p}=e,v=r.useRef(!1),h=r.useRef(null),m=r.useRef(null),g=r.useRef(null),b=r.useRef(null),y=r.useRef(!1),A=r.useRef(null),x=(0,o.A)(t.ref,A),E=r.useRef(null);r.useEffect((()=>{p&&A.current&&(y.current=!n)}),[n,p]),r.useEffect((()=>{if(!p||!A.current)return;const e=(0,l.A)(A.current);return A.current.contains(e.activeElement)||(A.current.hasAttribute("tabIndex")||A.current.setAttribute("tabIndex","-1"),y.current&&A.current.focus()),()=>{c||(g.current&&g.current.focus&&(v.current=!0,g.current.focus()),g.current=null)}}),[p]),r.useEffect((()=>{if(!p||!A.current)return;const e=(0,l.A)(A.current),t=t=>{E.current=t,!s&&f()&&"Tab"===t.key&&e.activeElement===A.current&&t.shiftKey&&(v.current=!0,m.current&&m.current.focus())},n=()=>{const t=A.current;if(null===t)return;if(!e.hasFocus()||!f()||v.current)return void(v.current=!1);if(t.contains(e.activeElement))return;if(s&&e.activeElement!==h.current&&e.activeElement!==m.current)return;if(e.activeElement!==b.current)b.current=null;else if(null!==b.current)return;if(!y.current)return;let n=[];if(e.activeElement!==h.current&&e.activeElement!==m.current||(n=d(A.current)),n.length>0){var r,o;const e=Boolean((null==(r=E.current)?void 0:r.shiftKey)&&"Tab"===(null==(o=E.current)?void 0:o.key)),t=n[0],l=n[n.length-1];"string"!=typeof t&&"string"!=typeof l&&(e?l.focus():t.focus())}else t.focus()};e.addEventListener("focusin",n),e.addEventListener("keydown",t,!0);const r=setInterval((()=>{e.activeElement&&"BODY"===e.activeElement.tagName&&n()}),50);return()=>{clearInterval(r),e.removeEventListener("focusin",n),e.removeEventListener("keydown",t,!0)}}),[n,s,c,f,p,d]);const w=e=>{null===g.current&&(g.current=e.relatedTarget),y.current=!0};return(0,i.jsxs)(r.Fragment,{children:[(0,i.jsx)("div",{tabIndex:p?0:-1,onFocus:w,ref:h,"data-testid":"sentinelStart"}),r.cloneElement(t,{ref:x,onFocus:e=>{null===g.current&&(g.current=e.relatedTarget),y.current=!0,b.current=e.target;const n=t.props.onFocus;n&&n(e)}}),(0,i.jsx)("div",{tabIndex:p?0:-1,onFocus:w,ref:m,"data-testid":"sentinelEnd"})]})}},81163:(e,t,n)=>{n.d(t,{i:()=>i});var r=n(96540),o=n(50173),l=n(74848);function i(e){const{children:t,defer:n=!1,fallback:i=null}=e,[s,u]=r.useState(!1);return(0,o.A)((()=>{n||u(!0)}),[n]),r.useEffect((()=>{n&&u(!0)}),[n]),(0,l.jsx)(r.Fragment,{children:s?t:i})}},29877:(e,t,n)=>{n.d(t,{N:()=>k});var r=n(55285),o=n(40644),l=n(96540),i=n(54871),s=n(50173),u=n(86249),a=n(5316),c=n(64111),d=n(63493),f=n(17245);const p="base";function v(e,t){const n=f.li[t];return n?`${p}--${n}`:function(e,t){return`${p}-${e}-${t}`}(e,t)}const h="Popper";function m(e){return v(h,e)}!function(e,t){const n={};["root"].forEach((t=>{n[t]=v(e,t)}))}(h);var g=n(71611),b=n(74848);const y={disableDefaultClasses:!1},A=l.createContext(y),x=["anchorEl","children","direction","disablePortal","modifiers","open","placement","popperOptions","popperRef","slotProps","slots","TransitionProps","ownerState"],E=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition","slotProps","slots"];function w(e){return"function"==typeof e?e():e}const R={},S=l.forwardRef((function(e,t){var n;const{anchorEl:u,children:d,direction:f,disablePortal:p,modifiers:v,open:h,placement:y,popperOptions:E,popperRef:R,slotProps:S={},slots:k={},TransitionProps:O}=e,P=(0,o.A)(e,x),T=l.useRef(null),C=(0,i.A)(T,t),L=l.useRef(null),I=(0,i.A)(L,R),D=l.useRef(I);(0,s.A)((()=>{D.current=I}),[I]),l.useImperativeHandle(R,(()=>L.current),[]);const N=function(e,t){if("ltr"===t)return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}(y,f),[M,$]=l.useState(N),[F,H]=l.useState(w(u));l.useEffect((()=>{L.current&&L.current.forceUpdate()})),l.useEffect((()=>{u&&H(w(u))}),[u]),(0,s.A)((()=>{if(!F||!h)return;let e=[{name:"preventOverflow",options:{altBoundary:p}},{name:"flip",options:{altBoundary:p}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:e})=>{$(e.placement)}}];null!=v&&(e=e.concat(v)),E&&null!=E.modifiers&&(e=e.concat(E.modifiers));const t=(0,a.n4)(F,T.current,(0,r.A)({placement:N},E,{modifiers:e}));return D.current(t),()=>{t.destroy(),D.current(null)}}),[F,p,v,h,E,N]);const V={placement:M};null!==O&&(V.TransitionProps=O);const j=(0,c.A)({root:["root"]},function(e){const{disableDefaultClasses:t}=l.useContext(A);return n=>t?"":e(n)}(m)),K=null!=(n=k.root)?n:"div",B=(0,g.Q)({elementType:K,externalSlotProps:S.root,externalForwardedProps:P,additionalProps:{role:"tooltip",ref:C},ownerState:e,className:j.root});return(0,b.jsx)(K,(0,r.A)({},B,{children:"function"==typeof d?d(V):d}))})),k=l.forwardRef((function(e,t){const{anchorEl:n,children:i,container:s,direction:a="ltr",disablePortal:c=!1,keepMounted:f=!1,modifiers:p,open:v,placement:h="bottom",popperOptions:m=R,popperRef:g,style:y,transition:A=!1,slotProps:x={},slots:k={}}=e,O=(0,o.A)(e,E),[P,T]=l.useState(!0);if(!f&&!v&&(!A||P))return null;let C;if(s)C=s;else if(n){const e=w(n);C=e&&void 0!==e.nodeType?(0,u.A)(e).body:(0,u.A)(null).body}const L=v||!f||A&&!P?void 0:"none",I=A?{in:v,onEnter:()=>{T(!1)},onExited:()=>{T(!0)}}:void 0;return(0,b.jsx)(d.Z,{disablePortal:c,container:C,children:(0,b.jsx)(S,(0,r.A)({anchorEl:n,direction:a,disablePortal:c,modifiers:p,ref:t,open:A?!P:v,placement:h,popperOptions:m,popperRef:g,slotProps:x,slots:k},O,{style:(0,r.A)({position:"fixed",top:0,left:0,display:L},y),TransitionProps:I,children:i}))})}))},63493:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(96540),o=n(40961),l=n(54871),i=n(50173),s=n(13721),u=n(74848);const a=r.forwardRef((function(e,t){const{children:n,container:a,disablePortal:c=!1}=e,[d,f]=r.useState(null),p=(0,l.A)(r.isValidElement(n)?n.ref:null,t);if((0,i.A)((()=>{c||f(function(e){return"function"==typeof e?e():e}(a)||document.body)}),[a,c]),(0,i.A)((()=>{if(d&&!c)return(0,s.A)(t,d),()=>{(0,s.A)(t,null)}}),[t,d,c]),c){if(r.isValidElement(n)){const e={ref:p};return r.cloneElement(n,e)}return(0,u.jsx)(r.Fragment,{children:n})}return(0,u.jsx)(r.Fragment,{children:d?o.createPortal(n,d):d})}))},53705:(e,t,n)=>{n.d(t,{h:()=>m});var r=n(55285),o=n(40644),l=n(96540),i=n(40961),s=n(54871),u=n(61489),a=n(50173),c=n(84965),d=n(74848);const f=["onChange","maxRows","minRows","style","value"];function p(e){return parseInt(e,10)||0}const v={visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"};function h(e){return null==e||0===Object.keys(e).length||0===e.outerHeightStyle&&!e.overflow}const m=l.forwardRef((function(e,t){const{onChange:n,maxRows:m,minRows:g=1,style:b,value:y}=e,A=(0,o.A)(e,f),{current:x}=l.useRef(null!=y),E=l.useRef(null),w=(0,s.A)(t,E),R=l.useRef(null),S=l.useRef(0),[k,O]=l.useState({outerHeightStyle:0}),P=l.useCallback((()=>{const t=E.current,n=(0,u.A)(t).getComputedStyle(t);if("0px"===n.width)return{outerHeightStyle:0};const r=R.current;r.style.width=n.width,r.value=t.value||e.placeholder||"x","\n"===r.value.slice(-1)&&(r.value+=" ");const o=n.boxSizing,l=p(n.paddingBottom)+p(n.paddingTop),i=p(n.borderBottomWidth)+p(n.borderTopWidth),s=r.scrollHeight;r.value="x";const a=r.scrollHeight;let c=s;return g&&(c=Math.max(Number(g)*a,c)),m&&(c=Math.min(Number(m)*a,c)),c=Math.max(c,a),{outerHeightStyle:c+("border-box"===o?l+i:0),overflow:Math.abs(c-s)<=1}}),[m,g,e.placeholder]),T=(e,t)=>{const{outerHeightStyle:n,overflow:r}=t;return S.current<20&&(n>0&&Math.abs((e.outerHeightStyle||0)-n)>1||e.overflow!==r)?(S.current+=1,{overflow:r,outerHeightStyle:n}):e},C=l.useCallback((()=>{const e=P();h(e)||O((t=>T(t,e)))}),[P]);return(0,a.A)((()=>{const e=()=>{S.current=0,(()=>{const e=P();h(e)||i.flushSync((()=>{O((t=>T(t,e)))}))})()};const t=(0,c.A)(e),n=E.current,r=(0,u.A)(n);let o;return r.addEventListener("resize",t),"undefined"!=typeof ResizeObserver&&(o=new ResizeObserver(e),o.observe(n)),()=>{t.clear(),cancelAnimationFrame(undefined),r.removeEventListener("resize",t),o&&o.disconnect()}}),[P]),(0,a.A)((()=>{C()})),l.useEffect((()=>{S.current=0}),[y]),(0,d.jsxs)(l.Fragment,{children:[(0,d.jsx)("textarea",(0,r.A)({value:y,onChange:e=>{S.current=0,x||C(),n&&n(e)},ref:w,rows:g,style:(0,r.A)({height:k.outerHeightStyle,overflow:k.overflow?"hidden":void 0},b)},A)),(0,d.jsx)("textarea",{"aria-hidden":!0,className:e.className,readOnly:!0,ref:R,tabIndex:-1,style:(0,r.A)({},v,b,{paddingTop:0,paddingBottom:0})})]})}))},30895:(e,t,n)=>{n.d(t,{h:()=>g});var r=n(55285),o=n(96540),l=n(54871),i=n(86249),s=n(66111),u=n(9941),a=n(34718),c=n(61489),d=n(36809);function f(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function p(e){return parseInt((0,c.A)(e).getComputedStyle(e).paddingRight,10)||0}function v(e,t,n,r,o){const l=[t,n,...r];[].forEach.call(e.children,(e=>{const t=-1===l.indexOf(e),n=!function(e){const t=-1!==["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName),n="INPUT"===e.tagName&&"hidden"===e.getAttribute("type");return t||n}(e);t&&n&&f(e,o)}))}function h(e,t){let n=-1;return e.some(((e,r)=>!!t(e)&&(n=r,!0))),n}const m=new class{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(e,t){let n=this.modals.indexOf(e);if(-1!==n)return n;n=this.modals.length,this.modals.push(e),e.modalRef&&f(e.modalRef,!1);const r=function(e){const t=[];return[].forEach.call(e.children,(e=>{"true"===e.getAttribute("aria-hidden")&&t.push(e)})),t}(t);v(t,e.mount,e.modalRef,r,!0);const o=h(this.containers,(e=>e.container===t));return-1!==o?(this.containers[o].modals.push(e),n):(this.containers.push({modals:[e],container:t,restore:null,hiddenSiblings:r}),n)}mount(e,t){const n=h(this.containers,(t=>-1!==t.modals.indexOf(e))),r=this.containers[n];r.restore||(r.restore=function(e,t){const n=[],r=e.container;if(!t.disableScrollLock){if(function(e){const t=(0,i.A)(e);return t.body===e?(0,c.A)(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}(r)){const e=(0,d.A)((0,i.A)(r));n.push({value:r.style.paddingRight,property:"padding-right",el:r}),r.style.paddingRight=`${p(r)+e}px`;const t=(0,i.A)(r).querySelectorAll(".mui-fixed");[].forEach.call(t,(t=>{n.push({value:t.style.paddingRight,property:"padding-right",el:t}),t.style.paddingRight=`${p(t)+e}px`}))}let e;if(r.parentNode instanceof DocumentFragment)e=(0,i.A)(r).body;else{const t=r.parentElement,n=(0,c.A)(r);e="HTML"===(null==t?void 0:t.nodeName)&&"scroll"===n.getComputedStyle(t).overflowY?t:r}n.push({value:e.style.overflow,property:"overflow",el:e},{value:e.style.overflowX,property:"overflow-x",el:e},{value:e.style.overflowY,property:"overflow-y",el:e}),e.style.overflow="hidden"}return()=>{n.forEach((({value:e,el:t,property:n})=>{e?t.style.setProperty(n,e):t.style.removeProperty(n)}))}}(r,t))}remove(e,t=!0){const n=this.modals.indexOf(e);if(-1===n)return n;const r=h(this.containers,(t=>-1!==t.modals.indexOf(e))),o=this.containers[r];if(o.modals.splice(o.modals.indexOf(e),1),this.modals.splice(n,1),0===o.modals.length)o.restore&&o.restore(),e.modalRef&&f(e.modalRef,t),v(o.container,e.mount,e.modalRef,o.hiddenSiblings,!1),this.containers.splice(r,1);else{const e=o.modals[o.modals.length-1];e.modalRef&&f(e.modalRef,!1)}return n}isTopModal(e){return this.modals.length>0&&this.modals[this.modals.length-1]===e}};function g(e){const{container:t,disableEscapeKeyDown:n=!1,disableScrollLock:c=!1,manager:d=m,closeAfterTransition:p=!1,onTransitionEnter:v,onTransitionExited:h,children:g,onClose:b,open:y,rootRef:A}=e,x=o.useRef({}),E=o.useRef(null),w=o.useRef(null),R=(0,l.A)(w,A),[S,k]=o.useState(!y),O=function(e){return!!e&&e.props.hasOwnProperty("in")}(g);let P=!0;"false"!==e["aria-hidden"]&&!1!==e["aria-hidden"]||(P=!1);const T=()=>(x.current.modalRef=w.current,x.current.mount=E.current,x.current),C=()=>{d.mount(T(),{disableScrollLock:c}),w.current&&(w.current.scrollTop=0)},L=(0,s.A)((()=>{const e=function(e){return"function"==typeof e?e():e}(t)||(0,i.A)(E.current).body;d.add(T(),e),w.current&&C()})),I=o.useCallback((()=>d.isTopModal(T())),[d]),D=(0,s.A)((e=>{E.current=e,e&&(y&&I()?C():w.current&&f(w.current,P))})),N=o.useCallback((()=>{d.remove(T(),P)}),[P,d]);o.useEffect((()=>()=>{N()}),[N]),o.useEffect((()=>{y?L():O&&p||N()}),[y,N,O,p,L]);const M=e=>t=>{var r;null==(r=e.onKeyDown)||r.call(e,t),"Escape"===t.key&&229!==t.which&&I()&&(n||(t.stopPropagation(),b&&b(t,"escapeKeyDown")))},$=e=>t=>{var n;null==(n=e.onClick)||n.call(e,t),t.target===t.currentTarget&&b&&b(t,"backdropClick")};return{getRootProps:(t={})=>{const n=(0,a.h)(e);delete n.onTransitionEnter,delete n.onTransitionExited;const o=(0,r.A)({},n,t);return(0,r.A)({role:"presentation"},o,{onKeyDown:M(o),ref:R})},getBackdropProps:(e={})=>{const t=e;return(0,r.A)({"aria-hidden":!0},t,{onClick:$(t),open:y})},getTransitionProps:()=>({onEnter:(0,u.A)((()=>{k(!1),v&&v()}),null==g?void 0:g.props.onEnter),onExited:(0,u.A)((()=>{k(!0),h&&h(),p&&N()}),null==g?void 0:g.props.onExited)}),rootRef:R,portalRef:D,isTopModal:I,exited:S,hasTransition:O}}},65167:(e,t,n)=>{n.d(t,{m:()=>h});var r=n(55285),o=n(96540),l=n(14953),i=n(93833),s=n(98591),u=n(66111),a=n(13721);function c(e){return void 0!==e.normalize?e.normalize("NFD").replace(/[\u0300-\u036f]/g,""):e}function d(e,t){for(let n=0;n<e.length;n+=1)if(t(e[n]))return n;return-1}const f=function(e={}){const{ignoreAccents:t=!0,ignoreCase:n=!0,limit:r,matchFrom:o="any",stringify:l,trim:i=!1}=e;return(e,{inputValue:s,getOptionLabel:u})=>{let a=i?s.trim():s;n&&(a=a.toLowerCase()),t&&(a=c(a));const d=a?e.filter((e=>{let r=(l||u)(e);return n&&(r=r.toLowerCase()),t&&(r=c(r)),"start"===o?0===r.indexOf(a):r.indexOf(a)>-1})):e;return"number"==typeof r?d.slice(0,r):d}}(),p=5,v=e=>{var t;return null!==e.current&&(null==(t=e.current.parentElement)?void 0:t.contains(document.activeElement))};function h(e){const{unstable_isActiveElementInListbox:t=v,unstable_classNamePrefix:n="Mui",autoComplete:c=!1,autoHighlight:h=!1,autoSelect:m=!1,blurOnSelect:g=!1,clearOnBlur:b=!e.freeSolo,clearOnEscape:y=!1,componentName:A="useAutocomplete",defaultValue:x=(e.multiple?[]:null),disableClearable:E=!1,disableCloseOnSelect:w=!1,disabled:R,disabledItemsFocusable:S=!1,disableListWrap:k=!1,filterOptions:O=f,filterSelectedOptions:P=!1,freeSolo:T=!1,getOptionDisabled:C,getOptionKey:L,getOptionLabel:I=(e=>{var t;return null!=(t=e.label)?t:e}),groupBy:D,handleHomeEndKeys:N=!e.freeSolo,id:M,includeInputInList:$=!1,inputValue:F,isOptionEqualToValue:H=((e,t)=>e===t),multiple:V=!1,onChange:j,onClose:K,onHighlightChange:B,onInputChange:U,onOpen:z,open:q,openOnFocus:Y=!1,options:W,readOnly:_=!1,selectOnFocus:X=!e.freeSolo,value:Z}=e,Q=(0,l.A)(M);let G=I;G=e=>{const t=I(e);return"string"!=typeof t?String(t):t};const J=o.useRef(!1),ee=o.useRef(!0),te=o.useRef(null),ne=o.useRef(null),[re,oe]=o.useState(null),[le,ie]=o.useState(-1),se=h?0:-1,ue=o.useRef(se),[ae,ce]=(0,i.A)({controlled:Z,default:x,name:A}),[de,fe]=(0,i.A)({controlled:F,default:"",name:A,state:"inputValue"}),[pe,ve]=o.useState(!1),he=o.useCallback(((e,t)=>{if(!(V?ae.length<t.length:null!==t)&&!b)return;let n;if(V)n="";else if(null==t)n="";else{const e=G(t);n="string"==typeof e?e:""}de!==n&&(fe(n),U&&U(e,n,"reset"))}),[G,de,V,U,fe,b,ae]),[me,ge]=(0,i.A)({controlled:q,default:!1,name:A,state:"open"}),[be,ye]=o.useState(!0),Ae=!V&&null!=ae&&de===G(ae),xe=me&&!_,Ee=xe?O(W.filter((e=>!P||!(V?ae:[ae]).some((t=>null!==t&&H(e,t))))),{inputValue:Ae&&be?"":de,getOptionLabel:G}):[],we=(0,s.A)({filteredOptions:Ee,value:ae,inputValue:de});o.useEffect((()=>{const e=ae!==we.value;pe&&!e||T&&!e||he(null,ae)}),[ae,he,pe,we.value,T]);const Re=me&&Ee.length>0&&!_,Se=(0,u.A)((e=>{-1===e?te.current.focus():re.querySelector(`[data-tag-index="${e}"]`).focus()}));o.useEffect((()=>{V&&le>ae.length-1&&(ie(-1),Se(-1))}),[ae,V,le,Se]);const ke=(0,u.A)((({event:e,index:t,reason:r="auto"})=>{if(ue.current=t,-1===t?te.current.removeAttribute("aria-activedescendant"):te.current.setAttribute("aria-activedescendant",`${Q}-option-${t}`),B&&B(e,-1===t?null:Ee[t],r),!ne.current)return;const o=ne.current.querySelector(`[role="option"].${n}-focused`);o&&(o.classList.remove(`${n}-focused`),o.classList.remove(`${n}-focusVisible`));let l=ne.current;if("listbox"!==ne.current.getAttribute("role")&&(l=ne.current.parentElement.querySelector('[role="listbox"]')),!l)return;if(-1===t)return void(l.scrollTop=0);const i=ne.current.querySelector(`[data-option-index="${t}"]`);if(i&&(i.classList.add(`${n}-focused`),"keyboard"===r&&i.classList.add(`${n}-focusVisible`),l.scrollHeight>l.clientHeight&&"mouse"!==r&&"touch"!==r)){const e=i,t=l.clientHeight+l.scrollTop,n=e.offsetTop+e.offsetHeight;n>t?l.scrollTop=n-l.clientHeight:e.offsetTop-e.offsetHeight*(D?1.3:0)<l.scrollTop&&(l.scrollTop=e.offsetTop-e.offsetHeight*(D?1.3:0))}})),Oe=(0,u.A)((({event:e,diff:t,direction:n="next",reason:r="auto"})=>{if(!xe)return;const o=function(e,t){if(!ne.current||e<0||e>=Ee.length)return-1;let n=e;for(;;){const r=ne.current.querySelector(`[data-option-index="${n}"]`),o=!S&&(!r||r.disabled||"true"===r.getAttribute("aria-disabled"));if(r&&r.hasAttribute("tabindex")&&!o)return n;if(n="next"===t?(n+1)%Ee.length:(n-1+Ee.length)%Ee.length,n===e)return-1}}((()=>{const e=Ee.length-1;if("reset"===t)return se;if("start"===t)return 0;if("end"===t)return e;const n=ue.current+t;return n<0?-1===n&&$?-1:k&&-1!==ue.current||Math.abs(t)>1?0:e:n>e?n===e+1&&$?-1:k||Math.abs(t)>1?e:0:n})(),n);if(ke({index:o,reason:r,event:e}),c&&"reset"!==t)if(-1===o)te.current.value=de;else{const e=G(Ee[o]);te.current.value=e,0===e.toLowerCase().indexOf(de.toLowerCase())&&de.length>0&&te.current.setSelectionRange(de.length,e.length)}})),Pe=o.useCallback((()=>{if(!xe)return;if((()=>{if(-1!==ue.current&&we.filteredOptions&&we.filteredOptions.length!==Ee.length&&we.inputValue===de&&(V?ae.length===we.value.length&&we.value.every(((e,t)=>G(ae[t])===G(e))):(e=we.value,t=ae,(e?G(e):"")===(t?G(t):"")))){const e=we.filteredOptions[ue.current];if(e&&Ee.some((t=>G(t)===G(e))))return!0}var e,t;return!1})())return;const e=V?ae[0]:ae;if(0!==Ee.length&&null!=e){if(ne.current)if(null==e)ue.current>=Ee.length-1?ke({index:Ee.length-1}):ke({index:ue.current});else{const t=Ee[ue.current];if(V&&t&&-1!==d(ae,(e=>H(t,e))))return;const n=d(Ee,(t=>H(t,e)));-1===n?Oe({diff:"reset"}):ke({index:n})}}else Oe({diff:"reset"})}),[Ee.length,!V&&ae,P,Oe,ke,xe,de,V]),Te=(0,u.A)((e=>{(0,a.A)(ne,e),e&&Pe()}));o.useEffect((()=>{Pe()}),[Pe]);const Ce=e=>{me||(ge(!0),ye(!0),z&&z(e))},Le=(e,t)=>{me&&(ge(!1),K&&K(e,t))},Ie=(e,t,n,r)=>{if(V){if(ae.length===t.length&&ae.every(((e,n)=>e===t[n])))return}else if(ae===t)return;j&&j(e,t,n,r),ce(t)},De=o.useRef(!1),Ne=(e,t,n="selectOption",r="options")=>{let o=n,l=t;if(V){l=Array.isArray(ae)?ae.slice():[];const e=d(l,(e=>H(t,e)));-1===e?l.push(t):"freeSolo"!==r&&(l.splice(e,1),o="removeOption")}he(e,l),Ie(e,l,o,{option:t}),w||e&&(e.ctrlKey||e.metaKey)||Le(e,o),(!0===g||"touch"===g&&De.current||"mouse"===g&&!De.current)&&te.current.blur()},Me=(e,t)=>{if(!V)return;""===de&&Le(e,"toggleInput");let n=le;-1===le?""===de&&"previous"===t&&(n=ae.length-1):(n+="next"===t?1:-1,n<0&&(n=0),n===ae.length&&(n=-1)),n=function(e,t){if(-1===e)return-1;let n=e;for(;;){if("next"===t&&n===ae.length||"previous"===t&&-1===n)return-1;const e=re.querySelector(`[data-tag-index="${n}"]`);if(e&&e.hasAttribute("tabindex")&&!e.disabled&&"true"!==e.getAttribute("aria-disabled"))return n;n+="next"===t?1:-1}}(n,t),ie(n),Se(n)},$e=e=>{J.current=!0,fe(""),U&&U(e,"","clear"),Ie(e,V?[]:null,"clear")},Fe=e=>t=>{if(e.onKeyDown&&e.onKeyDown(t),!t.defaultMuiPrevented&&(-1!==le&&-1===["ArrowLeft","ArrowRight"].indexOf(t.key)&&(ie(-1),Se(-1)),229!==t.which))switch(t.key){case"Home":xe&&N&&(t.preventDefault(),Oe({diff:"start",direction:"next",reason:"keyboard",event:t}));break;case"End":xe&&N&&(t.preventDefault(),Oe({diff:"end",direction:"previous",reason:"keyboard",event:t}));break;case"PageUp":t.preventDefault(),Oe({diff:-p,direction:"previous",reason:"keyboard",event:t}),Ce(t);break;case"PageDown":t.preventDefault(),Oe({diff:p,direction:"next",reason:"keyboard",event:t}),Ce(t);break;case"ArrowDown":t.preventDefault(),Oe({diff:1,direction:"next",reason:"keyboard",event:t}),Ce(t);break;case"ArrowUp":t.preventDefault(),Oe({diff:-1,direction:"previous",reason:"keyboard",event:t}),Ce(t);break;case"ArrowLeft":Me(t,"previous");break;case"ArrowRight":Me(t,"next");break;case"Enter":if(-1!==ue.current&&xe){const e=Ee[ue.current],n=!!C&&C(e);if(t.preventDefault(),n)return;Ne(t,e,"selectOption"),c&&te.current.setSelectionRange(te.current.value.length,te.current.value.length)}else T&&""!==de&&!1===Ae&&(V&&t.preventDefault(),Ne(t,de,"createOption","freeSolo"));break;case"Escape":xe?(t.preventDefault(),t.stopPropagation(),Le(t,"escape")):y&&(""!==de||V&&ae.length>0)&&(t.preventDefault(),t.stopPropagation(),$e(t));break;case"Backspace":if(V&&!_&&""===de&&ae.length>0){const e=-1===le?ae.length-1:le,n=ae.slice();n.splice(e,1),Ie(t,n,"removeOption",{option:ae[e]})}break;case"Delete":if(V&&!_&&""===de&&ae.length>0&&-1!==le){const e=le,n=ae.slice();n.splice(e,1),Ie(t,n,"removeOption",{option:ae[e]})}}},He=e=>{ve(!0),Y&&!J.current&&Ce(e)},Ve=e=>{t(ne)?te.current.focus():(ve(!1),ee.current=!0,J.current=!1,m&&-1!==ue.current&&xe?Ne(e,Ee[ue.current],"blur"):m&&T&&""!==de?Ne(e,de,"blur","freeSolo"):b&&he(e,ae),Le(e,"blur"))},je=e=>{const t=e.target.value;de!==t&&(fe(t),ye(!1),U&&U(e,t,"input")),""===t?E||V||Ie(e,null,"clear"):Ce(e)},Ke=e=>{const t=Number(e.currentTarget.getAttribute("data-option-index"));ue.current!==t&&ke({event:e,index:t,reason:"mouse"})},Be=e=>{ke({event:e,index:Number(e.currentTarget.getAttribute("data-option-index")),reason:"touch"}),De.current=!0},Ue=e=>{const t=Number(e.currentTarget.getAttribute("data-option-index"));Ne(e,Ee[t],"selectOption"),De.current=!1},ze=e=>t=>{const n=ae.slice();n.splice(e,1),Ie(t,n,"removeOption",{option:ae[e]})},qe=e=>{me?Le(e,"toggleInput"):Ce(e)},Ye=e=>{e.currentTarget.contains(e.target)&&e.target.getAttribute("id")!==Q&&e.preventDefault()},We=e=>{e.currentTarget.contains(e.target)&&(te.current.focus(),X&&ee.current&&te.current.selectionEnd-te.current.selectionStart==0&&te.current.select(),ee.current=!1)},_e=e=>{R||""!==de&&me||qe(e)};let Xe=T&&de.length>0;Xe=Xe||(V?ae.length>0:null!==ae);let Ze=Ee;return D&&(new Map,Ze=Ee.reduce(((e,t,n)=>{const r=D(t);return e.length>0&&e[e.length-1].group===r?e[e.length-1].options.push(t):e.push({key:n,index:n,group:r,options:[t]}),e}),[])),R&&pe&&Ve(),{getRootProps:(e={})=>(0,r.A)({"aria-owns":Re?`${Q}-listbox`:null},e,{onKeyDown:Fe(e),onMouseDown:Ye,onClick:We}),getInputLabelProps:()=>({id:`${Q}-label`,htmlFor:Q}),getInputProps:()=>({id:Q,value:de,onBlur:Ve,onFocus:He,onChange:je,onMouseDown:_e,"aria-activedescendant":xe?"":null,"aria-autocomplete":c?"both":"list","aria-controls":Re?`${Q}-listbox`:void 0,"aria-expanded":Re,autoComplete:"off",ref:te,autoCapitalize:"none",spellCheck:"false",role:"combobox",disabled:R}),getClearProps:()=>({tabIndex:-1,type:"button",onClick:$e}),getPopupIndicatorProps:()=>({tabIndex:-1,type:"button",onClick:qe}),getTagProps:({index:e})=>(0,r.A)({key:e,"data-tag-index":e,tabIndex:-1},!_&&{onDelete:ze(e)}),getListboxProps:()=>({role:"listbox",id:`${Q}-listbox`,"aria-labelledby":`${Q}-label`,ref:Te,onMouseDown:e=>{e.preventDefault()}}),getOptionProps:({index:e,option:t})=>{var n;const r=(V?ae:[ae]).some((e=>null!=e&&H(t,e))),o=!!C&&C(t);return{key:null!=(n=null==L?void 0:L(t))?n:G(t),tabIndex:-1,role:"option",id:`${Q}-option-${e}`,onMouseMove:Ke,onClick:Ue,onTouchStart:Be,"data-option-index":e,"aria-disabled":o,"aria-selected":r}},id:Q,inputValue:de,value:ae,dirty:Xe,expanded:xe&&re,popupOpen:xe,focused:pe||-1!==le,anchorEl:re,setAnchorEl:oe,focusedTag:le,groupedOptions:Ze}}},82550:(e,t,n)=>{n.d(t,{PF:()=>k,w5:()=>b});var r=n(55285),o=n(96540),l=n(86249),i=n(93833),s=n(76937),u=n(67749),a=n(54871),c=n(50173),d=n(66111),f=n(21297),p=n(34718);const v=2;function h(e,t){return e-t}function m(e,t){var n;const{index:r}=null!=(n=e.reduce(((e,n,r)=>{const o=Math.abs(t-n);return null===e||o<e.distance||o===e.distance?{distance:o,index:r}:e}),null))?n:{};return r}function g(e,t){if(void 0!==t.current&&e.changedTouches){const n=e;for(let e=0;e<n.changedTouches.length;e+=1){const r=n.changedTouches[e];if(r.identifier===t.current)return{x:r.clientX,y:r.clientY}}return!1}return{x:e.clientX,y:e.clientY}}function b(e,t,n){return 100*(e-t)/(n-t)}function y({values:e,newValue:t,index:n}){const r=e.slice();return r[n]=t,r.sort(h)}function A({sliderRef:e,activeIndex:t,setActive:n}){var r,o;const i=(0,l.A)(e.current);var s;null!=(r=e.current)&&r.contains(i.activeElement)&&Number(null==i||null==(o=i.activeElement)?void 0:o.getAttribute("data-index"))===t||null==(s=e.current)||s.querySelector(`[type="range"][data-index="${t}"]`).focus(),n&&n(t)}function x(e,t){return"number"==typeof e&&"number"==typeof t?e===t:"object"==typeof e&&"object"==typeof t&&function(e,t,n=((e,t)=>e===t)){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}(e,t)}const E={horizontal:{offset:e=>({left:`${e}%`}),leap:e=>({width:`${e}%`})},"horizontal-reverse":{offset:e=>({right:`${e}%`}),leap:e=>({width:`${e}%`})},vertical:{offset:e=>({bottom:`${e}%`}),leap:e=>({height:`${e}%`})}},w=e=>e;let R;function S(){return void 0===R&&(R="undefined"==typeof CSS||"function"!=typeof CSS.supports||CSS.supports("touch-action","none")),R}function k(e){const{"aria-labelledby":t,defaultValue:n,disabled:R=!1,disableSwap:k=!1,isRtl:O=!1,marks:P=!1,max:T=100,min:C=0,name:L,onChange:I,onChangeCommitted:D,orientation:N="horizontal",rootRef:M,scale:$=w,step:F=1,shiftStep:H=10,tabIndex:V,value:j}=e,K=o.useRef(),[B,U]=o.useState(-1),[z,q]=o.useState(-1),[Y,W]=o.useState(!1),_=o.useRef(0),[X,Z]=(0,i.A)({controlled:j,default:null!=n?n:C,name:"Slider"}),Q=I&&((e,t,n)=>{const r=e.nativeEvent||e,o=new r.constructor(r.type,r);Object.defineProperty(o,"target",{writable:!0,value:{value:t,name:L}}),I(o,t,n)}),G=Array.isArray(X);let J=G?X.slice().sort(h):[X];J=J.map((e=>null==e?C:(0,s.A)(e,C,T)));const ee=!0===P&&null!==F?[...Array(Math.floor((T-C)/F)+1)].map(((e,t)=>({value:C+F*t}))):P||[],te=ee.map((e=>e.value)),{isFocusVisibleRef:ne,onBlur:re,onFocus:oe,ref:le}=(0,u.A)(),[ie,se]=o.useState(-1),ue=o.useRef(),ae=(0,a.A)(le,ue),ce=(0,a.A)(M,ae),de=e=>t=>{var n;const r=Number(t.currentTarget.getAttribute("data-index"));oe(t),!0===ne.current&&se(r),q(r),null==e||null==(n=e.onFocus)||n.call(e,t)},fe=e=>t=>{var n;re(t),!1===ne.current&&se(-1),q(-1),null==e||null==(n=e.onBlur)||n.call(e,t)},pe=(e,t)=>{const n=Number(e.currentTarget.getAttribute("data-index")),r=J[n],o=te.indexOf(r);let l=t;if(ee&&null==F){const e=te[te.length-1];l=l>e?e:l<te[0]?te[0]:l<r?te[o-1]:te[o+1]}if(l=(0,s.A)(l,C,T),G){k&&(l=(0,s.A)(l,J[n-1]||-1/0,J[n+1]||1/0));const e=l;l=y({values:J,newValue:l,index:n});let t=n;k||(t=l.indexOf(e)),A({sliderRef:ue,activeIndex:t})}Z(l),se(n),Q&&!x(l,X)&&Q(e,l,n),D&&D(e,l)},ve=e=>t=>{var n;if(null!==F){const e=Number(t.currentTarget.getAttribute("data-index")),n=J[e];let r=null;("ArrowLeft"===t.key||"ArrowDown"===t.key)&&t.shiftKey||"PageDown"===t.key?r=Math.max(n-H,C):(("ArrowRight"===t.key||"ArrowUp"===t.key)&&t.shiftKey||"PageUp"===t.key)&&(r=Math.min(n+H,T)),null!==r&&(pe(t,r),t.preventDefault())}null==e||null==(n=e.onKeyDown)||n.call(e,t)};(0,c.A)((()=>{var e;R&&ue.current.contains(document.activeElement)&&(null==(e=document.activeElement)||e.blur())}),[R]),R&&-1!==B&&U(-1),R&&-1!==ie&&se(-1);const he=o.useRef();let me=N;O&&"horizontal"===N&&(me+="-reverse");const ge=({finger:e,move:t=!1})=>{const{current:n}=ue,{width:r,height:o,bottom:l,left:i}=n.getBoundingClientRect();let u,a;if(u=0===me.indexOf("vertical")?(l-e.y)/o:(e.x-i)/r,-1!==me.indexOf("-reverse")&&(u=1-u),a=function(e,t,n){return(n-t)*e+t}(u,C,T),F)a=function(e,t,n){const r=Math.round((e-n)/t)*t+n;return Number(r.toFixed(function(e){if(Math.abs(e)<1){const t=e.toExponential().split("e-"),n=t[0].split(".")[1];return(n?n.length:0)+parseInt(t[1],10)}const t=e.toString().split(".")[1];return t?t.length:0}(t)))}(a,F,C);else{const e=m(te,a);a=te[e]}a=(0,s.A)(a,C,T);let c=0;if(G){c=t?he.current:m(J,a),k&&(a=(0,s.A)(a,J[c-1]||-1/0,J[c+1]||1/0));const e=a;a=y({values:J,newValue:a,index:c}),k&&t||(c=a.indexOf(e),he.current=c)}return{newValue:a,activeIndex:c}},be=(0,d.A)((e=>{const t=g(e,K);if(!t)return;if(_.current+=1,"mousemove"===e.type&&0===e.buttons)return void ye(e);const{newValue:n,activeIndex:r}=ge({finger:t,move:!0});A({sliderRef:ue,activeIndex:r,setActive:U}),Z(n),!Y&&_.current>v&&W(!0),Q&&!x(n,X)&&Q(e,n,r)})),ye=(0,d.A)((e=>{const t=g(e,K);if(W(!1),!t)return;const{newValue:n}=ge({finger:t,move:!0});U(-1),"touchend"===e.type&&q(-1),D&&D(e,n),K.current=void 0,xe()})),Ae=(0,d.A)((e=>{if(R)return;S()||e.preventDefault();const t=e.changedTouches[0];null!=t&&(K.current=t.identifier);const n=g(e,K);if(!1!==n){const{newValue:t,activeIndex:r}=ge({finger:n});A({sliderRef:ue,activeIndex:r,setActive:U}),Z(t),Q&&!x(t,X)&&Q(e,t,r)}_.current=0;const r=(0,l.A)(ue.current);r.addEventListener("touchmove",be,{passive:!0}),r.addEventListener("touchend",ye,{passive:!0})})),xe=o.useCallback((()=>{const e=(0,l.A)(ue.current);e.removeEventListener("mousemove",be),e.removeEventListener("mouseup",ye),e.removeEventListener("touchmove",be),e.removeEventListener("touchend",ye)}),[ye,be]);o.useEffect((()=>{const{current:e}=ue;return e.addEventListener("touchstart",Ae,{passive:S()}),()=>{e.removeEventListener("touchstart",Ae),xe()}}),[xe,Ae]),o.useEffect((()=>{R&&xe()}),[R,xe]);const Ee=b(G?J[0]:C,C,T),we=b(J[J.length-1],C,T)-Ee,Re=e=>t=>{var n;null==(n=e.onMouseLeave)||n.call(e,t),q(-1)};return{active:B,axis:me,axisProps:E,dragging:Y,focusedThumbIndex:ie,getHiddenInputProps:(n={})=>{var o;const l=(0,p.h)(n),i={onChange:(s=l||{},e=>{var t;null==(t=s.onChange)||t.call(s,e),pe(e,e.target.valueAsNumber)}),onFocus:de(l||{}),onBlur:fe(l||{}),onKeyDown:ve(l||{})};var s;const u=(0,r.A)({},l,i);return(0,r.A)({tabIndex:V,"aria-labelledby":t,"aria-orientation":N,"aria-valuemax":$(T),"aria-valuemin":$(C),name:L,type:"range",min:e.min,max:e.max,step:null===e.step&&e.marks?"any":null!=(o=e.step)?o:void 0,disabled:R},n,u,{style:(0,r.A)({},f.A,{direction:O?"rtl":"ltr",width:"100%",height:"100%"})})},getRootProps:(e={})=>{const t=(0,p.h)(e),n={onMouseDown:(o=t||{},e=>{var t;if(null==(t=o.onMouseDown)||t.call(o,e),R)return;if(e.defaultPrevented)return;if(0!==e.button)return;e.preventDefault();const n=g(e,K);if(!1!==n){const{newValue:t,activeIndex:r}=ge({finger:n});A({sliderRef:ue,activeIndex:r,setActive:U}),Z(t),Q&&!x(t,X)&&Q(e,t,r)}_.current=0;const r=(0,l.A)(ue.current);r.addEventListener("mousemove",be,{passive:!0}),r.addEventListener("mouseup",ye)})};var o;const i=(0,r.A)({},t,n);return(0,r.A)({},e,{ref:ce},i)},getThumbProps:(e={})=>{const t=(0,p.h)(e),n={onMouseOver:(o=t||{},e=>{var t;null==(t=o.onMouseOver)||t.call(o,e);const n=Number(e.currentTarget.getAttribute("data-index"));q(n)}),onMouseLeave:Re(t||{})};var o;return(0,r.A)({},e,t,n)},marks:ee,open:z,range:G,rootRef:ce,trackLeap:we,trackOffset:Ee,values:J,getThumbStyle:e=>({pointerEvents:-1!==B&&B!==e?"none":void 0})}}},27471:(e,t,n)=>{n.d(t,{d:()=>u});var r=n(55285),o=n(96540),l=n(42640),i=n(66111),s=n(34718);function u(e={}){const{autoHideDuration:t=null,disableWindowBlurListener:n=!1,onClose:u,open:a,resumeHideDuration:c}=e,d=(0,l.A)();o.useEffect((()=>{if(a)return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)};function e(e){e.defaultPrevented||"Escape"!==e.key&&"Esc"!==e.key||null==u||u(e,"escapeKeyDown")}}),[a,u]);const f=(0,i.A)(((e,t)=>{null==u||u(e,t)})),p=(0,i.A)((e=>{u&&null!=e&&d.start(e,(()=>{f(null,"timeout")}))}));o.useEffect((()=>(a&&p(t),d.clear)),[a,t,p,d]);const v=d.clear,h=o.useCallback((()=>{null!=t&&p(null!=c?c:.5*t)}),[t,c,p]),m=e=>t=>{const n=e.onFocus;null==n||n(t),v()},g=e=>t=>{const n=e.onMouseEnter;null==n||n(t),v()},b=e=>t=>{const n=e.onMouseLeave;null==n||n(t),h()};return o.useEffect((()=>{if(!n&&a)return window.addEventListener("focus",h),window.addEventListener("blur",v),()=>{window.removeEventListener("focus",h),window.removeEventListener("blur",v)}}),[n,a,h,v]),{getRootProps:(t={})=>{const n=(0,r.A)({},(0,s.h)(e),(0,s.h)(t));return(0,r.A)({role:"presentation"},t,n,{onBlur:(o=n,e=>{const t=o.onBlur;null==t||t(e),h()}),onFocus:m(n),onMouseEnter:g(n),onMouseLeave:b(n)});var o},onClickAway:e=>{null==u||u(e,"clickaway")}}}},54856:(e,t,n)=>{n.d(t,{X:()=>l});var r=n(55285),o=n(25419);function l(e,t,n){return void 0===e||(0,o.g)(e)?t:(0,r.A)({},t,{ownerState:(0,r.A)({},t.ownerState,n)})}},34718:(e,t,n)=>{function r(e,t=[]){if(void 0===e)return{};const n={};return Object.keys(e).filter((n=>n.match(/^on[A-Z]/)&&"function"==typeof e[n]&&!t.includes(n))).forEach((t=>{n[t]=e[t]})),n}n.d(t,{h:()=>r})},25419:(e,t,n)=>{function r(e){return"string"==typeof e}n.d(t,{g:()=>r})},93551:(e,t,n)=>{n.d(t,{p:()=>s});var r=n(55285),o=n(28919),l=n(34718);function i(e){if(void 0===e)return{};const t={};return Object.keys(e).filter((t=>!(t.match(/^on[A-Z]/)&&"function"==typeof e[t]))).forEach((n=>{t[n]=e[n]})),t}function s(e){const{getSlotProps:t,additionalProps:n,externalSlotProps:s,externalForwardedProps:u,className:a}=e;if(!t){const e=(0,o.A)(null==n?void 0:n.className,a,null==u?void 0:u.className,null==s?void 0:s.className),t=(0,r.A)({},null==n?void 0:n.style,null==u?void 0:u.style,null==s?void 0:s.style),l=(0,r.A)({},n,u,s);return e.length>0&&(l.className=e),Object.keys(t).length>0&&(l.style=t),{props:l,internalRef:void 0}}const c=(0,l.h)((0,r.A)({},u,s)),d=i(s),f=i(u),p=t(c),v=(0,o.A)(null==p?void 0:p.className,null==n?void 0:n.className,a,null==u?void 0:u.className,null==s?void 0:s.className),h=(0,r.A)({},null==p?void 0:p.style,null==n?void 0:n.style,null==u?void 0:u.style,null==s?void 0:s.style),m=(0,r.A)({},p,n,f,d);return v.length>0&&(m.className=v),Object.keys(h).length>0&&(m.style=h),{props:m,internalRef:p.ref}}},45489:(e,t,n)=>{function r(e,t,n){return"function"==typeof e?e(t,n):e}n.d(t,{Y:()=>r})},71611:(e,t,n)=>{n.d(t,{Q:()=>c});var r=n(55285),o=n(40644),l=n(54871),i=n(54856),s=n(93551),u=n(45489);const a=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function c(e){var t;const{elementType:n,externalSlotProps:c,ownerState:d,skipResolvingSlotProps:f=!1}=e,p=(0,o.A)(e,a),v=f?{}:(0,u.Y)(c,d),{props:h,internalRef:m}=(0,s.p)((0,r.A)({},p,{externalSlotProps:v})),g=(0,l.A)(m,null==v?void 0:v.ref,null==(t=e.additionalProps)?void 0:t.ref);return(0,i.X)(n,(0,r.A)({},h,{ref:g}),d)}}}]);