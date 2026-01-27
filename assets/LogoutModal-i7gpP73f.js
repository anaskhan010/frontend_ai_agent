import{j as e,X as S,br as B,bj as E,bu as F}from"./ui-Bcnk-Zux.js";import{r as n}from"./vendor-D6QveUxv.js";import{a5 as O,a6 as M,a7 as U,a8 as W,a9 as Y,aa as A,m as _,B as P}from"./index-CnGOntes.js";class D extends n.Component{getSnapshotBeforeUpdate(r){const t=this.props.childRef.current;if(t&&r.isPresent&&!this.props.isPresent){const s=t.offsetParent,c=s instanceof HTMLElement&&s.offsetWidth||0,i=this.props.sizeRef.current;i.height=t.offsetHeight||0,i.width=t.offsetWidth||0,i.top=t.offsetTop,i.left=t.offsetLeft,i.right=c-i.width-i.left}return null}componentDidUpdate(){}render(){return this.props.children}}function H({children:o,isPresent:r,anchorX:t}){const s=n.useId(),c=n.useRef(null),i=n.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:m}=n.useContext(O);return n.useInsertionEffect(()=>{const{width:b,height:a,top:p,left:l,right:f}=i.current;if(r||!c.current||!b||!a)return;const u=t==="left"?`left: ${l}`:`right: ${f}`;c.current.dataset.motionPopId=s;const h=document.createElement("style");return m&&(h.nonce=m),document.head.appendChild(h),h.sheet&&h.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${b}px !important;
            height: ${a}px !important;
            ${u}px !important;
            top: ${p}px !important;
          }
        `),()=>{document.head.contains(h)&&document.head.removeChild(h)}},[r]),e.jsx(D,{isPresent:r,childRef:c,sizeRef:i,children:n.cloneElement(o,{ref:c})})}const K=({children:o,initial:r,isPresent:t,onExitComplete:s,custom:c,presenceAffectsLayout:i,mode:m,anchorX:b})=>{const a=M(T),p=n.useId();let l=!0,f=n.useMemo(()=>(l=!1,{id:p,initial:r,isPresent:t,custom:c,onExitComplete:u=>{a.set(u,!0);for(const h of a.values())if(!h)return;s&&s()},register:u=>(a.set(u,!1),()=>a.delete(u))}),[t,a,s]);return i&&l&&(f={...f}),n.useMemo(()=>{a.forEach((u,h)=>a.set(h,!1))},[t]),n.useEffect(()=>{!t&&!a.size&&s&&s()},[t]),m==="popLayout"&&(o=e.jsx(H,{isPresent:t,anchorX:b,children:o})),e.jsx(U.Provider,{value:f,children:o})};function T(){return new Map}const y=o=>o.key||"";function R(o){const r=[];return n.Children.forEach(o,t=>{n.isValidElement(t)&&r.push(t)}),r}const X=({children:o,custom:r,initial:t=!0,onExitComplete:s,presenceAffectsLayout:c=!0,mode:i="sync",propagate:m=!1,anchorX:b="left"})=>{const[a,p]=W(m),l=n.useMemo(()=>R(o),[o]),f=m&&!a?[]:l.map(y),u=n.useRef(!0),h=n.useRef(l),w=M(()=>new Map),[z,$]=n.useState(l),[g,L]=n.useState(l);Y(()=>{u.current=!1,h.current=l;for(let x=0;x<g.length;x++){const d=y(g[x]);f.includes(d)?w.delete(d):w.get(d)!==!0&&w.set(d,!1)}},[g,f.length,f.join("-")]);const v=[];if(l!==z){let x=[...l];for(let d=0;d<g.length;d++){const j=g[d],N=y(j);f.includes(N)||(x.splice(d,0,j),v.push(j))}return i==="wait"&&v.length&&(x=v),L(R(x)),$(l),null}const{forceRender:C}=n.useContext(A);return e.jsx(e.Fragment,{children:g.map(x=>{const d=y(x),j=m&&!a?!1:l===g||f.includes(d),N=()=>{if(w.has(d))w.set(d,!0);else return;let k=!0;w.forEach(I=>{I||(k=!1)}),k&&(C==null||C(),L(h.current),m&&(p==null||p()),s&&s())};return e.jsx(K,{isPresent:j,initial:!u.current||t?void 0:!1,custom:r,presenceAffectsLayout:c,mode:i,onExitComplete:j?void 0:N,anchorX:b,children:x},d)})})},J=({isOpen:o,onClose:r,onConfirm:t})=>{const[s,c]=n.useState(!1),i=async()=>{if(!s)try{c(!0),await t()}finally{c(!1)}};return e.jsx(X,{children:o&&e.jsxs(e.Fragment,{children:[e.jsx(_.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>!s&&r(),className:"fixed inset-0 z-50 bg-black/70 backdrop-blur-md"}),e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",children:e.jsxs(_.div,{initial:{opacity:0,scale:.85,y:60},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.85,y:-40},transition:{type:"spring",stiffness:280,damping:26},className:"relative w-full max-w-2xl",children:[e.jsx("div",{className:`absolute -inset-1 rounded-2xl
                bg-gradient-to-r from-yellow-400/30 via-orange-500/30 to-red-600/30
                blur-xl opacity-80`}),e.jsxs("div",{className:`relative rounded-2xl overflow-hidden
                bg-gradient-to-br from-[#0b0f19] via-[#0f172a] to-[#020617]
                border border-yellow-400/30
                shadow-[0_0_10px_rgba(255,170,0,0.25)]`,children:[e.jsxs("div",{className:"relative p-8",children:[e.jsx("button",{onClick:()=>!s&&r(),disabled:s,className:`absolute top-4 right-4 p-2 rounded-full
                      hover:bg-white/10 transition
                      disabled:opacity-40`,children:e.jsx(S,{className:"w-5 h-5 text-white"})}),e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsx("div",{className:`p-4 rounded-full
                        bg-gradient-to-br from-yellow-400 to-orange-500
                        shadow-[0_0_20px_rgba(255,170,0,0.9)]`,children:e.jsx(B,{className:"w-9 h-9 text-black"})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-lg font-extrabold tracking-wide text-white",children:"Confirm Logout"}),e.jsx("p",{className:"mt-2 text-white/70 text-md",children:"You are about to end your session"})]})]})]}),e.jsxs("div",{className:"px-8 pb-8 space-y-8",children:[e.jsxs("div",{className:`flex gap-4 p-6 rounded-xl
                      bg-black/40
                      border border-orange-500/30
                      shadow-inner`,children:[e.jsx(E,{className:"w-6 h-6 text-orange-400 mt-1"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-md font-semibold text-white",children:"You will be logged out"}),e.jsx("p",{className:"mt-1 text-white/60",children:"Unsaved progress may be lost. Please confirm."})]})]}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(P,{variant:"outline",onClick:r,disabled:s,className:`
                        flex-1 h-14
                        text-md font-medium
                        text-white
                        border-white/20
                        bg-white/10
                        hover:bg-white/20
                        disabled:opacity-40
                      `,children:"Cancel"}),e.jsx(P,{onClick:i,disabled:s,className:`
                        flex-1 h-14
                        text-md font-bold
                        text-white
                        bg-gradient-to-r
                        from-yellow-400 via-orange-500 to-red-600
                        shadow-[0_0_10px_rgba(255,140,0,0.9)]
                        hover:shadow-[0_0_14px_rgba(255,90,0,1)]
                        transition-all
                        disabled:opacity-70
                      `,children:s?e.jsxs("span",{className:"flex items-center gap-3",children:[e.jsx(F,{className:"w-5 h-5 animate-spin"}),"Logging out…"]}):e.jsxs(e.Fragment,{children:[e.jsx(E,{className:"w-6 h-6 mr-3"}),"Yes, Logout"]})})]})]}),e.jsx("div",{className:"h-[3px] bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600"})]})]})})]})})};export{J as L};
//# sourceMappingURL=LogoutModal-i7gpP73f.js.map
