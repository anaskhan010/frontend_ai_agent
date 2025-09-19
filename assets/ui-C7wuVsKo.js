import{r as i,a as Kt,R as Pe,b as he,c as er}from"./vendor-DG599jyl.js";var tr={exports:{}},yt={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ms=i,vs=Symbol.for("react.element"),gs=Symbol.for("react.fragment"),xs=Object.prototype.hasOwnProperty,ws=ms.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ks={key:!0,ref:!0,__self:!0,__source:!0};function nr(e,t,n){var r,o={},s=null,c=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(c=t.ref);for(r in t)xs.call(t,r)&&!ks.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:vs,type:e,key:s,ref:c,props:o,_owner:ws.current}}yt.Fragment=gs;yt.jsx=nr;yt.jsxs=nr;tr.exports=yt;var x=tr.exports;/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bs=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),rr=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Cs={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ms=i.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:s,iconNode:c,...a},l)=>i.createElement("svg",{ref:l,...Cs,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:rr("lucide",o),...a},[...c.map(([u,f])=>i.createElement(u,f)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=(e,t)=>{const n=i.forwardRef(({className:r,...o},s)=>i.createElement(Ms,{ref:s,iconNode:t,className:rr(`lucide-${bs(e)}`,r),...o}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rd=m("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const od=m("Archive",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sd=m("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ad=m("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const id=m("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cd=m("ArrowUpDown",[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ld=m("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud=m("Battery",[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dd=m("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd=m("Bluetooth",[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17",key:"1q5490"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pd=m("BookMarked",[["path",{d:"M10 2v8l3-3 3 3V2",key:"sqw3rj"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd=m("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yd=m("Book",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const md=m("Bookmark",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vd=m("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gd=m("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xd=m("Brush",[["path",{d:"m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08",key:"1styjt"}],["path",{d:"M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z",key:"z0l1mu"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd=m("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kd=m("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bd=m("CassetteTape",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["circle",{cx:"8",cy:"10",r:"2",key:"1xl4ub"}],["path",{d:"M8 12h8",key:"1wcyev"}],["circle",{cx:"16",cy:"10",r:"2",key:"r14t7q"}],["path",{d:"m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3",key:"l01ucn"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cd=m("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=m("ChartNoAxesColumn",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ed=m("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sd=m("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rd=m("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pd=m("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad=m("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od=m("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _d=m("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=m("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=m("CirclePause",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"10",x2:"10",y1:"15",y2:"9",key:"c1nkhi"}],["line",{x1:"14",x2:"14",y1:"15",y2:"9",key:"h65svq"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nd=m("CirclePlay",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"10 8 16 12 10 16 10 8",key:"1cimsy"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id=m("CircleStop",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["rect",{x:"9",y:"9",width:"6",height:"6",rx:"1",key:"1ssd4o"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ld=m("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=m("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jd=m("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fd=m("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=m("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=m("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=m("Contact",[["path",{d:"M16 2v2",key:"scm5qe"}],["path",{d:"M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2",key:"1waht3"}],["path",{d:"M8 2v2",key:"pbkmx"}],["circle",{cx:"12",cy:"11",r:"3",key:"itu57m"}],["rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",key:"12vinp"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bd=m("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud=m("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=m("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=m("Crown",[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=m("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd=m("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=m("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=m("EllipsisVertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=m("Ellipsis",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=m("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=m("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=m("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tf=m("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nf=m("FileAudio",[["path",{d:"M17.5 22h.5a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"rslqgf"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M2 19a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 1 1-4 0v-1a2 2 0 1 1 4 0",key:"9f7x3i"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=m("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const of=m("File",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf=m("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const af=m("Flag",[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cf=m("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lf=m("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uf=m("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const df=m("Grid3x3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ff=m("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pf=m("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hf=m("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yf=m("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mf=m("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=m("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gf=m("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xf=m("Infinity",[["path",{d:"M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z",key:"1z0uae"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wf=m("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kf=m("Key",[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf=m("Laptop",[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",key:"tarvll"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cf=m("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mf=m("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ef=m("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=m("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rf=m("ListChecks",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pf=m("ListFilter",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M7 12h10",key:"b7w52i"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Af=m("ListTree",[["path",{d:"M21 12h-8",key:"1bmf0i"}],["path",{d:"M21 6H8",key:"1pqkrb"}],["path",{d:"M21 18h-8",key:"1tm79t"}],["path",{d:"M3 6v4c0 1.1.9 2 2 2h3",key:"1ywdgy"}],["path",{d:"M3 10v6c0 1.1.9 2 2 2h3",key:"2wc746"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Of=m("List",[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _f=m("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Df=m("Loader",[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tf=m("LockOpen",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nf=m("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const If=m("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lf=m("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=m("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jf=m("Maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ff=m("Megaphone",[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wf=m("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vf=m("MessageCircleQuestion",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zf=m("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bf=m("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uf=m("MicOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2",key:"80xlxr"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5",key:"p2k8kg"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=m("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qf=m("Minimize2",[["polyline",{points:"4 14 10 14 10 20",key:"11kfnr"}],["polyline",{points:"20 10 14 10 14 4",key:"rlmsce"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3",key:"o5lafz"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=m("Minimize",[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf=m("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xf=m("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yf=m("Move",[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m19 9 3 3-3 3",key:"1mg7y2"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf=m("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf=m("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jf=m("PanelsTopLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=m("Paperclip",[["path",{d:"m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",key:"1u3ebp"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=m("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=m("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=m("PenTool",[["path",{d:"M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",key:"nt11vn"}],["path",{d:"m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",key:"15qc1e"}],["path",{d:"m2.3 2.3 7.286 7.286",key:"1wuzzi"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=m("PhoneCall",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94",key:"vmijpz"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10",key:"13nbpp"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=m("PhoneOff",[["path",{d:"M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91",key:"z86iuo"}],["line",{x1:"22",x2:"2",y1:"2",y2:"22",key:"11kh81"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=m("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=m("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=m("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=m("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1=m("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=m("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1=m("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=m("RotateCw",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=m("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=m("Scissors",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=m("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=m("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=m("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=m("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=m("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=m("ShieldX",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m14.5 9.5-5 5",key:"17q4r4"}],["path",{d:"m9.5 9.5 5 5",key:"18nt4w"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=m("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1=m("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=m("SkipBack",[["polygon",{points:"19 20 9 12 19 4 19 20",key:"o2sva"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5",key:"1ocqjk"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E1=m("SkipForward",[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1=m("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1=m("SlidersVertical",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P1=m("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1=m("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=m("Speaker",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["circle",{cx:"12",cy:"14",r:"4",key:"1jruaj"}],["path",{d:"M12 14h.01",key:"1etili"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _1=m("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=m("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T1=m("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1=m("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I1=m("Tablet",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["line",{x1:"12",x2:"12.01",y1:"18",y2:"18",key:"1dp563"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=m("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=m("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1=m("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1=m("Trash",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W1=m("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=m("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1=m("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1=m("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=m("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1=m("UserCog",[["circle",{cx:"18",cy:"15",r:"3",key:"gjjjvw"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M10 15H6a4 4 0 0 0-4 4v2",key:"1nfge6"}],["path",{d:"m21.7 16.4-.9-.3",key:"12j9ji"}],["path",{d:"m15.2 13.9-.9-.3",key:"1fdjdi"}],["path",{d:"m16.6 18.7.3-.9",key:"heedtr"}],["path",{d:"m19.1 12.2.3-.9",key:"1af3ki"}],["path",{d:"m19.6 18.7-.4-1",key:"1x9vze"}],["path",{d:"m16.8 12.3-.4-1",key:"vqeiwj"}],["path",{d:"m14.3 16.6 1-.4",key:"1qlj63"}],["path",{d:"m20.7 13.8 1-.4",key:"1v5t8k"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q1=m("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K1=m("UserX",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"17",x2:"22",y1:"8",y2:"13",key:"3nzzx3"}],["line",{x1:"22",x2:"17",y1:"8",y2:"13",key:"1swrse"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=m("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X1=m("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y1=m("Variable",[["path",{d:"M8 21s-4-3-4-9 4-9 4-9",key:"uto9ud"}],["path",{d:"M16 3s4 3 4 9-4 9-4 9",key:"4w2vsq"}],["line",{x1:"15",x2:"9",y1:"9",y2:"15",key:"f7djnv"}],["line",{x1:"9",x2:"15",y1:"9",y2:"15",key:"1shsy8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z1=m("Video",[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1=m("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J1=m("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=m("WandSparkles",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=m("Waypoints",[["circle",{cx:"12",cy:"4.5",r:"2.5",key:"r5ysbb"}],["path",{d:"m10.2 6.3-3.9 3.9",key:"1nzqf6"}],["circle",{cx:"4.5",cy:"12",r:"2.5",key:"jydg6v"}],["path",{d:"M7 12h10",key:"b7w52i"}],["circle",{cx:"19.5",cy:"12",r:"2.5",key:"1piiel"}],["path",{d:"m13.8 17.7 3.9-3.9",key:"1wyg1y"}],["circle",{cx:"12",cy:"19.5",r:"2.5",key:"13o1pw"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=m("Webhook",[["path",{d:"M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2",key:"q3hayz"}],["path",{d:"m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06",key:"1go1hn"}],["path",{d:"m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8",key:"qlwsc0"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=m("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=m("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=m("Workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=m("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=m("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=m("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Es=["top","right","bottom","left"],ue=Math.min,B=Math.max,it=Math.round,Ze=Math.floor,ee=e=>({x:e,y:e}),Ss={left:"right",right:"left",bottom:"top",top:"bottom"},Rs={start:"end",end:"start"};function jt(e,t,n){return B(e,ue(t,n))}function oe(e,t){return typeof e=="function"?e(t):e}function se(e){return e.split("-")[0]}function Ae(e){return e.split("-")[1]}function Gt(e){return e==="x"?"y":"x"}function Xt(e){return e==="y"?"height":"width"}function de(e){return["top","bottom"].includes(se(e))?"y":"x"}function Yt(e){return Gt(de(e))}function Ps(e,t,n){n===void 0&&(n=!1);const r=Ae(e),o=Yt(e),s=Xt(o);let c=o==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[s]>t.floating[s]&&(c=ct(c)),[c,ct(c)]}function As(e){const t=ct(e);return[Ft(e),t,Ft(t)]}function Ft(e){return e.replace(/start|end/g,t=>Rs[t])}function Os(e,t,n){const r=["left","right"],o=["right","left"],s=["top","bottom"],c=["bottom","top"];switch(e){case"top":case"bottom":return n?t?o:r:t?r:o;case"left":case"right":return t?s:c;default:return[]}}function _s(e,t,n,r){const o=Ae(e);let s=Os(se(e),n==="start",r);return o&&(s=s.map(c=>c+"-"+o),t&&(s=s.concat(s.map(Ft)))),s}function ct(e){return e.replace(/left|right|bottom|top/g,t=>Ss[t])}function Ds(e){return{top:0,right:0,bottom:0,left:0,...e}}function or(e){return typeof e!="number"?Ds(e):{top:e,right:e,bottom:e,left:e}}function lt(e){const{x:t,y:n,width:r,height:o}=e;return{width:r,height:o,top:n,left:t,right:t+r,bottom:n+o,x:t,y:n}}function gn(e,t,n){let{reference:r,floating:o}=e;const s=de(t),c=Yt(t),a=Xt(c),l=se(t),u=s==="y",f=r.x+r.width/2-o.width/2,d=r.y+r.height/2-o.height/2,p=r[a]/2-o[a]/2;let y;switch(l){case"top":y={x:f,y:r.y-o.height};break;case"bottom":y={x:f,y:r.y+r.height};break;case"right":y={x:r.x+r.width,y:d};break;case"left":y={x:r.x-o.width,y:d};break;default:y={x:r.x,y:r.y}}switch(Ae(t)){case"start":y[c]-=p*(n&&u?-1:1);break;case"end":y[c]+=p*(n&&u?-1:1);break}return y}const Ts=async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:s=[],platform:c}=n,a=s.filter(Boolean),l=await(c.isRTL==null?void 0:c.isRTL(t));let u=await c.getElementRects({reference:e,floating:t,strategy:o}),{x:f,y:d}=gn(u,r,l),p=r,y={},v=0;for(let h=0;h<a.length;h++){const{name:g,fn:w}=a[h],{x:C,y:k,data:b,reset:E}=await w({x:f,y:d,initialPlacement:r,placement:p,strategy:o,middlewareData:y,rects:u,platform:c,elements:{reference:e,floating:t}});f=C??f,d=k??d,y={...y,[g]:{...y[g],...b}},E&&v<=50&&(v++,typeof E=="object"&&(E.placement&&(p=E.placement),E.rects&&(u=E.rects===!0?await c.getElementRects({reference:e,floating:t,strategy:o}):E.rects),{x:f,y:d}=gn(u,p,l)),h=-1)}return{x:f,y:d,placement:p,strategy:o,middlewareData:y}};async function je(e,t){var n;t===void 0&&(t={});const{x:r,y:o,platform:s,rects:c,elements:a,strategy:l}=e,{boundary:u="clippingAncestors",rootBoundary:f="viewport",elementContext:d="floating",altBoundary:p=!1,padding:y=0}=oe(t,e),v=or(y),g=a[p?d==="floating"?"reference":"floating":d],w=lt(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(g)))==null||n?g:g.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(a.floating)),boundary:u,rootBoundary:f,strategy:l})),C=d==="floating"?{x:r,y:o,width:c.floating.width,height:c.floating.height}:c.reference,k=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a.floating)),b=await(s.isElement==null?void 0:s.isElement(k))?await(s.getScale==null?void 0:s.getScale(k))||{x:1,y:1}:{x:1,y:1},E=lt(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:C,offsetParent:k,strategy:l}):C);return{top:(w.top-E.top+v.top)/b.y,bottom:(E.bottom-w.bottom+v.bottom)/b.y,left:(w.left-E.left+v.left)/b.x,right:(E.right-w.right+v.right)/b.x}}const Ns=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:o,rects:s,platform:c,elements:a,middlewareData:l}=t,{element:u,padding:f=0}=oe(e,t)||{};if(u==null)return{};const d=or(f),p={x:n,y:r},y=Yt(o),v=Xt(y),h=await c.getDimensions(u),g=y==="y",w=g?"top":"left",C=g?"bottom":"right",k=g?"clientHeight":"clientWidth",b=s.reference[v]+s.reference[y]-p[y]-s.floating[v],E=p[y]-s.reference[y],R=await(c.getOffsetParent==null?void 0:c.getOffsetParent(u));let M=R?R[k]:0;(!M||!await(c.isElement==null?void 0:c.isElement(R)))&&(M=a.floating[k]||s.floating[v]);const P=b/2-E/2,_=M/2-h[v]/2-1,O=ue(d[w],_),$=ue(d[C],_),j=O,N=M-h[v]-$,T=M/2-h[v]/2+P,W=jt(j,T,N),D=!l.arrow&&Ae(o)!=null&&T!==W&&s.reference[v]/2-(T<j?O:$)-h[v]/2<0,F=D?T<j?T-j:T-N:0;return{[y]:p[y]+F,data:{[y]:W,centerOffset:T-W-F,...D&&{alignmentOffset:F}},reset:D}}}),Is=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:o,middlewareData:s,rects:c,initialPlacement:a,platform:l,elements:u}=t,{mainAxis:f=!0,crossAxis:d=!0,fallbackPlacements:p,fallbackStrategy:y="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:h=!0,...g}=oe(e,t);if((n=s.arrow)!=null&&n.alignmentOffset)return{};const w=se(o),C=de(a),k=se(a)===a,b=await(l.isRTL==null?void 0:l.isRTL(u.floating)),E=p||(k||!h?[ct(a)]:As(a)),R=v!=="none";!p&&R&&E.push(..._s(a,h,v,b));const M=[a,...E],P=await je(t,g),_=[];let O=((r=s.flip)==null?void 0:r.overflows)||[];if(f&&_.push(P[w]),d){const T=Ps(o,c,b);_.push(P[T[0]],P[T[1]])}if(O=[...O,{placement:o,overflows:_}],!_.every(T=>T<=0)){var $,j;const T=((($=s.flip)==null?void 0:$.index)||0)+1,W=M[T];if(W)return{data:{index:T,overflows:O},reset:{placement:W}};let D=(j=O.filter(F=>F.overflows[0]<=0).sort((F,A)=>F.overflows[1]-A.overflows[1])[0])==null?void 0:j.placement;if(!D)switch(y){case"bestFit":{var N;const F=(N=O.filter(A=>{if(R){const S=de(A.placement);return S===C||S==="y"}return!0}).map(A=>[A.placement,A.overflows.filter(S=>S>0).reduce((S,L)=>S+L,0)]).sort((A,S)=>A[1]-S[1])[0])==null?void 0:N[0];F&&(D=F);break}case"initialPlacement":D=a;break}if(o!==D)return{reset:{placement:D}}}return{}}}};function xn(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function wn(e){return Es.some(t=>e[t]>=0)}const Ls=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:r="referenceHidden",...o}=oe(e,t);switch(r){case"referenceHidden":{const s=await je(t,{...o,elementContext:"reference"}),c=xn(s,n.reference);return{data:{referenceHiddenOffsets:c,referenceHidden:wn(c)}}}case"escaped":{const s=await je(t,{...o,altBoundary:!0}),c=xn(s,n.floating);return{data:{escapedOffsets:c,escaped:wn(c)}}}default:return{}}}}};async function $s(e,t){const{placement:n,platform:r,elements:o}=e,s=await(r.isRTL==null?void 0:r.isRTL(o.floating)),c=se(n),a=Ae(n),l=de(n)==="y",u=["left","top"].includes(c)?-1:1,f=s&&l?-1:1,d=oe(t,e);let{mainAxis:p,crossAxis:y,alignmentAxis:v}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return a&&typeof v=="number"&&(y=a==="end"?v*-1:v),l?{x:y*f,y:p*u}:{x:p*u,y:y*f}}const js=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:o,y:s,placement:c,middlewareData:a}=t,l=await $s(t,e);return c===((n=a.offset)==null?void 0:n.placement)&&(r=a.arrow)!=null&&r.alignmentOffset?{}:{x:o+l.x,y:s+l.y,data:{...l,placement:c}}}}},Fs=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:o}=t,{mainAxis:s=!0,crossAxis:c=!1,limiter:a={fn:g=>{let{x:w,y:C}=g;return{x:w,y:C}}},...l}=oe(e,t),u={x:n,y:r},f=await je(t,l),d=de(se(o)),p=Gt(d);let y=u[p],v=u[d];if(s){const g=p==="y"?"top":"left",w=p==="y"?"bottom":"right",C=y+f[g],k=y-f[w];y=jt(C,y,k)}if(c){const g=d==="y"?"top":"left",w=d==="y"?"bottom":"right",C=v+f[g],k=v-f[w];v=jt(C,v,k)}const h=a.fn({...t,[p]:y,[d]:v});return{...h,data:{x:h.x-n,y:h.y-r,enabled:{[p]:s,[d]:c}}}}}},Ws=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:r,placement:o,rects:s,middlewareData:c}=t,{offset:a=0,mainAxis:l=!0,crossAxis:u=!0}=oe(e,t),f={x:n,y:r},d=de(o),p=Gt(d);let y=f[p],v=f[d];const h=oe(a,t),g=typeof h=="number"?{mainAxis:h,crossAxis:0}:{mainAxis:0,crossAxis:0,...h};if(l){const k=p==="y"?"height":"width",b=s.reference[p]-s.floating[k]+g.mainAxis,E=s.reference[p]+s.reference[k]-g.mainAxis;y<b?y=b:y>E&&(y=E)}if(u){var w,C;const k=p==="y"?"width":"height",b=["top","left"].includes(se(o)),E=s.reference[d]-s.floating[k]+(b&&((w=c.offset)==null?void 0:w[d])||0)+(b?0:g.crossAxis),R=s.reference[d]+s.reference[k]+(b?0:((C=c.offset)==null?void 0:C[d])||0)-(b?g.crossAxis:0);v<E?v=E:v>R&&(v=R)}return{[p]:y,[d]:v}}}},Vs=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var n,r;const{placement:o,rects:s,platform:c,elements:a}=t,{apply:l=()=>{},...u}=oe(e,t),f=await je(t,u),d=se(o),p=Ae(o),y=de(o)==="y",{width:v,height:h}=s.floating;let g,w;d==="top"||d==="bottom"?(g=d,w=p===(await(c.isRTL==null?void 0:c.isRTL(a.floating))?"start":"end")?"left":"right"):(w=d,g=p==="end"?"top":"bottom");const C=h-f.top-f.bottom,k=v-f.left-f.right,b=ue(h-f[g],C),E=ue(v-f[w],k),R=!t.middlewareData.shift;let M=b,P=E;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(P=k),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(M=C),R&&!p){const O=B(f.left,0),$=B(f.right,0),j=B(f.top,0),N=B(f.bottom,0);y?P=v-2*(O!==0||$!==0?O+$:B(f.left,f.right)):M=h-2*(j!==0||N!==0?j+N:B(f.top,f.bottom))}await l({...t,availableWidth:P,availableHeight:M});const _=await c.getDimensions(a.floating);return v!==_.width||h!==_.height?{reset:{rects:!0}}:{}}}};function mt(){return typeof window<"u"}function Oe(e){return sr(e)?(e.nodeName||"").toLowerCase():"#document"}function U(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function ne(e){var t;return(t=(sr(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function sr(e){return mt()?e instanceof Node||e instanceof U(e).Node:!1}function K(e){return mt()?e instanceof Element||e instanceof U(e).Element:!1}function te(e){return mt()?e instanceof HTMLElement||e instanceof U(e).HTMLElement:!1}function kn(e){return!mt()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof U(e).ShadowRoot}function Ue(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=G(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function zs(e){return["table","td","th"].includes(Oe(e))}function vt(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function Zt(e){const t=Qt(),n=K(e)?G(e):e;return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function Bs(e){let t=fe(e);for(;te(t)&&!Se(t);){if(Zt(t))return t;if(vt(t))return null;t=fe(t)}return null}function Qt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Se(e){return["html","body","#document"].includes(Oe(e))}function G(e){return U(e).getComputedStyle(e)}function gt(e){return K(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function fe(e){if(Oe(e)==="html")return e;const t=e.assignedSlot||e.parentNode||kn(e)&&e.host||ne(e);return kn(t)?t.host:t}function ar(e){const t=fe(e);return Se(t)?e.ownerDocument?e.ownerDocument.body:e.body:te(t)&&Ue(t)?t:ar(t)}function Fe(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const o=ar(e),s=o===((r=e.ownerDocument)==null?void 0:r.body),c=U(o);if(s){const a=Wt(c);return t.concat(c,c.visualViewport||[],Ue(o)?o:[],a&&n?Fe(a):[])}return t.concat(o,Fe(o,[],n))}function Wt(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function ir(e){const t=G(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=te(e),s=o?e.offsetWidth:n,c=o?e.offsetHeight:r,a=it(n)!==s||it(r)!==c;return a&&(n=s,r=c),{width:n,height:r,$:a}}function Jt(e){return K(e)?e:e.contextElement}function Ce(e){const t=Jt(e);if(!te(t))return ee(1);const n=t.getBoundingClientRect(),{width:r,height:o,$:s}=ir(t);let c=(s?it(n.width):n.width)/r,a=(s?it(n.height):n.height)/o;return(!c||!Number.isFinite(c))&&(c=1),(!a||!Number.isFinite(a))&&(a=1),{x:c,y:a}}const Us=ee(0);function cr(e){const t=U(e);return!Qt()||!t.visualViewport?Us:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Hs(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==U(e)?!1:t}function ye(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const o=e.getBoundingClientRect(),s=Jt(e);let c=ee(1);t&&(r?K(r)&&(c=Ce(r)):c=Ce(e));const a=Hs(s,n,r)?cr(s):ee(0);let l=(o.left+a.x)/c.x,u=(o.top+a.y)/c.y,f=o.width/c.x,d=o.height/c.y;if(s){const p=U(s),y=r&&K(r)?U(r):r;let v=p,h=Wt(v);for(;h&&r&&y!==v;){const g=Ce(h),w=h.getBoundingClientRect(),C=G(h),k=w.left+(h.clientLeft+parseFloat(C.paddingLeft))*g.x,b=w.top+(h.clientTop+parseFloat(C.paddingTop))*g.y;l*=g.x,u*=g.y,f*=g.x,d*=g.y,l+=k,u+=b,v=U(h),h=Wt(v)}}return lt({width:f,height:d,x:l,y:u})}function en(e,t){const n=gt(e).scrollLeft;return t?t.left+n:ye(ne(e)).left+n}function lr(e,t,n){n===void 0&&(n=!1);const r=e.getBoundingClientRect(),o=r.left+t.scrollLeft-(n?0:en(e,r)),s=r.top+t.scrollTop;return{x:o,y:s}}function qs(e){let{elements:t,rect:n,offsetParent:r,strategy:o}=e;const s=o==="fixed",c=ne(r),a=t?vt(t.floating):!1;if(r===c||a&&s)return n;let l={scrollLeft:0,scrollTop:0},u=ee(1);const f=ee(0),d=te(r);if((d||!d&&!s)&&((Oe(r)!=="body"||Ue(c))&&(l=gt(r)),te(r))){const y=ye(r);u=Ce(r),f.x=y.x+r.clientLeft,f.y=y.y+r.clientTop}const p=c&&!d&&!s?lr(c,l,!0):ee(0);return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-l.scrollLeft*u.x+f.x+p.x,y:n.y*u.y-l.scrollTop*u.y+f.y+p.y}}function Ks(e){return Array.from(e.getClientRects())}function Gs(e){const t=ne(e),n=gt(e),r=e.ownerDocument.body,o=B(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),s=B(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let c=-n.scrollLeft+en(e);const a=-n.scrollTop;return G(r).direction==="rtl"&&(c+=B(t.clientWidth,r.clientWidth)-o),{width:o,height:s,x:c,y:a}}function Xs(e,t){const n=U(e),r=ne(e),o=n.visualViewport;let s=r.clientWidth,c=r.clientHeight,a=0,l=0;if(o){s=o.width,c=o.height;const u=Qt();(!u||u&&t==="fixed")&&(a=o.offsetLeft,l=o.offsetTop)}return{width:s,height:c,x:a,y:l}}function Ys(e,t){const n=ye(e,!0,t==="fixed"),r=n.top+e.clientTop,o=n.left+e.clientLeft,s=te(e)?Ce(e):ee(1),c=e.clientWidth*s.x,a=e.clientHeight*s.y,l=o*s.x,u=r*s.y;return{width:c,height:a,x:l,y:u}}function bn(e,t,n){let r;if(t==="viewport")r=Xs(e,n);else if(t==="document")r=Gs(ne(e));else if(K(t))r=Ys(t,n);else{const o=cr(e);r={x:t.x-o.x,y:t.y-o.y,width:t.width,height:t.height}}return lt(r)}function ur(e,t){const n=fe(e);return n===t||!K(n)||Se(n)?!1:G(n).position==="fixed"||ur(n,t)}function Zs(e,t){const n=t.get(e);if(n)return n;let r=Fe(e,[],!1).filter(a=>K(a)&&Oe(a)!=="body"),o=null;const s=G(e).position==="fixed";let c=s?fe(e):e;for(;K(c)&&!Se(c);){const a=G(c),l=Zt(c);!l&&a.position==="fixed"&&(o=null),(s?!l&&!o:!l&&a.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||Ue(c)&&!l&&ur(e,c))?r=r.filter(f=>f!==c):o=a,c=fe(c)}return t.set(e,r),r}function Qs(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const c=[...n==="clippingAncestors"?vt(t)?[]:Zs(t,this._c):[].concat(n),r],a=c[0],l=c.reduce((u,f)=>{const d=bn(t,f,o);return u.top=B(d.top,u.top),u.right=ue(d.right,u.right),u.bottom=ue(d.bottom,u.bottom),u.left=B(d.left,u.left),u},bn(t,a,o));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Js(e){const{width:t,height:n}=ir(e);return{width:t,height:n}}function ea(e,t,n){const r=te(t),o=ne(t),s=n==="fixed",c=ye(e,!0,s,t);let a={scrollLeft:0,scrollTop:0};const l=ee(0);if(r||!r&&!s)if((Oe(t)!=="body"||Ue(o))&&(a=gt(t)),r){const p=ye(t,!0,s,t);l.x=p.x+t.clientLeft,l.y=p.y+t.clientTop}else o&&(l.x=en(o));const u=o&&!r&&!s?lr(o,a):ee(0),f=c.left+a.scrollLeft-l.x-u.x,d=c.top+a.scrollTop-l.y-u.y;return{x:f,y:d,width:c.width,height:c.height}}function Et(e){return G(e).position==="static"}function Cn(e,t){if(!te(e)||G(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return ne(e)===n&&(n=n.ownerDocument.body),n}function dr(e,t){const n=U(e);if(vt(e))return n;if(!te(e)){let o=fe(e);for(;o&&!Se(o);){if(K(o)&&!Et(o))return o;o=fe(o)}return n}let r=Cn(e,t);for(;r&&zs(r)&&Et(r);)r=Cn(r,t);return r&&Se(r)&&Et(r)&&!Zt(r)?n:r||Bs(e)||n}const ta=async function(e){const t=this.getOffsetParent||dr,n=this.getDimensions,r=await n(e.floating);return{reference:ea(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function na(e){return G(e).direction==="rtl"}const ra={convertOffsetParentRelativeRectToViewportRelativeRect:qs,getDocumentElement:ne,getClippingRect:Qs,getOffsetParent:dr,getElementRects:ta,getClientRects:Ks,getDimensions:Js,getScale:Ce,isElement:K,isRTL:na};function oa(e,t){let n=null,r;const o=ne(e);function s(){var a;clearTimeout(r),(a=n)==null||a.disconnect(),n=null}function c(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),s();const{left:u,top:f,width:d,height:p}=e.getBoundingClientRect();if(a||t(),!d||!p)return;const y=Ze(f),v=Ze(o.clientWidth-(u+d)),h=Ze(o.clientHeight-(f+p)),g=Ze(u),C={rootMargin:-y+"px "+-v+"px "+-h+"px "+-g+"px",threshold:B(0,ue(1,l))||1};let k=!0;function b(E){const R=E[0].intersectionRatio;if(R!==l){if(!k)return c();R?c(!1,R):r=setTimeout(()=>{c(!1,1e-7)},1e3)}k=!1}try{n=new IntersectionObserver(b,{...C,root:o.ownerDocument})}catch{n=new IntersectionObserver(b,C)}n.observe(e)}return c(!0),s}function sa(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:o=!0,ancestorResize:s=!0,elementResize:c=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=r,u=Jt(e),f=o||s?[...u?Fe(u):[],...Fe(t)]:[];f.forEach(w=>{o&&w.addEventListener("scroll",n,{passive:!0}),s&&w.addEventListener("resize",n)});const d=u&&a?oa(u,n):null;let p=-1,y=null;c&&(y=new ResizeObserver(w=>{let[C]=w;C&&C.target===u&&y&&(y.unobserve(t),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var k;(k=y)==null||k.observe(t)})),n()}),u&&!l&&y.observe(u),y.observe(t));let v,h=l?ye(e):null;l&&g();function g(){const w=ye(e);h&&(w.x!==h.x||w.y!==h.y||w.width!==h.width||w.height!==h.height)&&n(),h=w,v=requestAnimationFrame(g)}return n(),()=>{var w;f.forEach(C=>{o&&C.removeEventListener("scroll",n),s&&C.removeEventListener("resize",n)}),d==null||d(),(w=y)==null||w.disconnect(),y=null,l&&cancelAnimationFrame(v)}}const aa=js,ia=Fs,ca=Is,la=Vs,ua=Ls,Mn=Ns,da=Ws,fa=(e,t,n)=>{const r=new Map,o={platform:ra,...n},s={...o.platform,_c:r};return Ts(e,t,{...o,platform:s})};var ot=typeof document<"u"?i.useLayoutEffect:i.useEffect;function ut(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,o;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;r--!==0;)if(!ut(e[r],t[r]))return!1;return!0}if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,o[r]))return!1;for(r=n;r--!==0;){const s=o[r];if(!(s==="_owner"&&e.$$typeof)&&!ut(e[s],t[s]))return!1}return!0}return e!==e&&t!==t}function fr(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function En(e,t){const n=fr(e);return Math.round(t*n)/n}function St(e){const t=i.useRef(e);return ot(()=>{t.current=e}),t}function pa(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:o,elements:{reference:s,floating:c}={},transform:a=!0,whileElementsMounted:l,open:u}=e,[f,d]=i.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[p,y]=i.useState(r);ut(p,r)||y(r);const[v,h]=i.useState(null),[g,w]=i.useState(null),C=i.useCallback(A=>{A!==R.current&&(R.current=A,h(A))},[]),k=i.useCallback(A=>{A!==M.current&&(M.current=A,w(A))},[]),b=s||v,E=c||g,R=i.useRef(null),M=i.useRef(null),P=i.useRef(f),_=l!=null,O=St(l),$=St(o),j=St(u),N=i.useCallback(()=>{if(!R.current||!M.current)return;const A={placement:t,strategy:n,middleware:p};$.current&&(A.platform=$.current),fa(R.current,M.current,A).then(S=>{const L={...S,isPositioned:j.current!==!1};T.current&&!ut(P.current,L)&&(P.current=L,Kt.flushSync(()=>{d(L)}))})},[p,t,n,$,j]);ot(()=>{u===!1&&P.current.isPositioned&&(P.current.isPositioned=!1,d(A=>({...A,isPositioned:!1})))},[u]);const T=i.useRef(!1);ot(()=>(T.current=!0,()=>{T.current=!1}),[]),ot(()=>{if(b&&(R.current=b),E&&(M.current=E),b&&E){if(O.current)return O.current(b,E,N);N()}},[b,E,N,O,_]);const W=i.useMemo(()=>({reference:R,floating:M,setReference:C,setFloating:k}),[C,k]),D=i.useMemo(()=>({reference:b,floating:E}),[b,E]),F=i.useMemo(()=>{const A={position:n,left:0,top:0};if(!D.floating)return A;const S=En(D.floating,f.x),L=En(D.floating,f.y);return a?{...A,transform:"translate("+S+"px, "+L+"px)",...fr(D.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:S,top:L}},[n,a,D.floating,f.x,f.y]);return i.useMemo(()=>({...f,update:N,refs:W,elements:D,floatingStyles:F}),[f,N,W,D,F])}const ha=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:r,padding:o}=typeof e=="function"?e(n):e;return r&&t(r)?r.current!=null?Mn({element:r.current,padding:o}).fn(n):{}:r?Mn({element:r,padding:o}).fn(n):{}}}},ya=(e,t)=>({...aa(e),options:[e,t]}),ma=(e,t)=>({...ia(e),options:[e,t]}),va=(e,t)=>({...da(e),options:[e,t]}),ga=(e,t)=>({...ca(e),options:[e,t]}),xa=(e,t)=>({...la(e),options:[e,t]}),wa=(e,t)=>({...ua(e),options:[e,t]}),ka=(e,t)=>({...ha(e),options:[e,t]});function dt(e,t,{checkForDefaultPrevented:n=!0}={}){return function(o){if(e==null||e(o),n===!1||!o.defaultPrevented)return t==null?void 0:t(o)}}function Sn(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function pr(...e){return t=>{let n=!1;const r=e.map(o=>{const s=Sn(o,t);return!n&&typeof s=="function"&&(n=!0),s});if(n)return()=>{for(let o=0;o<r.length;o++){const s=r[o];typeof s=="function"?s():Sn(e[o],null)}}}}function ba(...e){return i.useCallback(pr(...e),e)}function Ca(e,t=[]){let n=[];function r(s,c){const a=i.createContext(c),l=n.length;n=[...n,c];const u=d=>{var w;const{scope:p,children:y,...v}=d,h=((w=p==null?void 0:p[e])==null?void 0:w[l])||a,g=i.useMemo(()=>v,Object.values(v));return x.jsx(h.Provider,{value:g,children:y})};u.displayName=s+"Provider";function f(d,p){var h;const y=((h=p==null?void 0:p[e])==null?void 0:h[l])||a,v=i.useContext(y);if(v)return v;if(c!==void 0)return c;throw new Error(`\`${d}\` must be used within \`${s}\``)}return[u,f]}const o=()=>{const s=n.map(c=>i.createContext(c));return function(a){const l=(a==null?void 0:a[e])||s;return i.useMemo(()=>({[`__scope${e}`]:{...a,[e]:l}}),[a,l])}};return o.scopeName=e,[r,Ma(o,...t)]}function Ma(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(s){const c=r.reduce((a,{useScope:l,scopeName:u})=>{const d=l(s)[`__scope${u}`];return{...a,...d}},{});return i.useMemo(()=>({[`__scope${t.scopeName}`]:c}),[c])}};return n.scopeName=t.scopeName,n}var hr=globalThis!=null&&globalThis.document?i.useLayoutEffect:()=>{},Ea=Pe[" useInsertionEffect ".trim().toString()]||hr;function Sa({prop:e,defaultProp:t,onChange:n=()=>{},caller:r}){const[o,s,c]=Ra({defaultProp:t,onChange:n}),a=e!==void 0,l=a?e:o;{const f=i.useRef(e!==void 0);i.useEffect(()=>{const d=f.current;d!==a&&console.warn(`${r} is changing from ${d?"controlled":"uncontrolled"} to ${a?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),f.current=a},[a,r])}const u=i.useCallback(f=>{var d;if(a){const p=Pa(f)?f(e):f;p!==e&&((d=c.current)==null||d.call(c,p))}else s(f)},[a,e,s,c]);return[l,u]}function Ra({defaultProp:e,onChange:t}){const[n,r]=i.useState(e),o=i.useRef(n),s=i.useRef(t);return Ea(()=>{s.current=t},[t]),i.useEffect(()=>{var c;o.current!==n&&((c=s.current)==null||c.call(s,n),o.current=n)},[n,o]),[n,r,s]}function Pa(e){return typeof e=="function"}function Aa(e){const t=Oa(e),n=i.forwardRef((r,o)=>{const{children:s,...c}=r,a=i.Children.toArray(s),l=a.find(Da);if(l){const u=l.props.children,f=a.map(d=>d===l?i.Children.count(u)>1?i.Children.only(null):i.isValidElement(u)?u.props.children:null:d);return x.jsx(t,{...c,ref:o,children:i.isValidElement(u)?i.cloneElement(u,void 0,f):null})}return x.jsx(t,{...c,ref:o,children:s})});return n.displayName=`${e}.Slot`,n}function Oa(e){const t=i.forwardRef((n,r)=>{const{children:o,...s}=n,c=i.isValidElement(o)?Na(o):void 0,a=ba(c,r);if(i.isValidElement(o)){const l=Ta(s,o.props);return o.type!==i.Fragment&&(l.ref=a),i.cloneElement(o,l)}return i.Children.count(o)>1?i.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var _a=Symbol("radix.slottable");function Da(e){return i.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===_a}function Ta(e,t){const n={...t};for(const r in t){const o=e[r],s=t[r];/^on[A-Z]/.test(r)?o&&s?n[r]=(...a)=>{const l=s(...a);return o(...a),l}:o&&(n[r]=o):r==="style"?n[r]={...o,...s}:r==="className"&&(n[r]=[o,s].filter(Boolean).join(" "))}return{...e,...n}}function Na(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var Ia=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],La=Ia.reduce((e,t)=>{const n=Aa(`Primitive.${t}`),r=i.forwardRef((o,s)=>{const{asChild:c,...a}=o,l=c?n:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),x.jsx(l,{...a,ref:s})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function I(e,t,{checkForDefaultPrevented:n=!0}={}){return function(o){if(e==null||e(o),n===!1||!o.defaultPrevented)return t==null?void 0:t(o)}}function $a(e,t=[]){let n=[];function r(s,c){const a=i.createContext(c),l=n.length;n=[...n,c];const u=d=>{var w;const{scope:p,children:y,...v}=d,h=((w=p==null?void 0:p[e])==null?void 0:w[l])||a,g=i.useMemo(()=>v,Object.values(v));return x.jsx(h.Provider,{value:g,children:y})};u.displayName=s+"Provider";function f(d,p){var h;const y=((h=p==null?void 0:p[e])==null?void 0:h[l])||a,v=i.useContext(y);if(v)return v;if(c!==void 0)return c;throw new Error(`\`${d}\` must be used within \`${s}\``)}return[u,f]}const o=()=>{const s=n.map(c=>i.createContext(c));return function(a){const l=(a==null?void 0:a[e])||s;return i.useMemo(()=>({[`__scope${e}`]:{...a,[e]:l}}),[a,l])}};return o.scopeName=e,[r,ja(o,...t)]}function ja(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(s){const c=r.reduce((a,{useScope:l,scopeName:u})=>{const d=l(s)[`__scope${u}`];return{...a,...d}},{});return i.useMemo(()=>({[`__scope${t.scopeName}`]:c}),[c])}};return n.scopeName=t.scopeName,n}function Rn(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function Fa(...e){return t=>{let n=!1;const r=e.map(o=>{const s=Rn(o,t);return!n&&typeof s=="function"&&(n=!0),s});if(n)return()=>{for(let o=0;o<r.length;o++){const s=r[o];typeof s=="function"?s():Rn(e[o],null)}}}}function Vt(...e){return i.useCallback(Fa(...e),e)}function Pn(e){const t=Wa(e),n=i.forwardRef((r,o)=>{const{children:s,...c}=r,a=i.Children.toArray(s),l=a.find(za);if(l){const u=l.props.children,f=a.map(d=>d===l?i.Children.count(u)>1?i.Children.only(null):i.isValidElement(u)?u.props.children:null:d);return x.jsx(t,{...c,ref:o,children:i.isValidElement(u)?i.cloneElement(u,void 0,f):null})}return x.jsx(t,{...c,ref:o,children:s})});return n.displayName=`${e}.Slot`,n}function Wa(e){const t=i.forwardRef((n,r)=>{const{children:o,...s}=n,c=i.isValidElement(o)?Ua(o):void 0,a=Vt(c,r);if(i.isValidElement(o)){const l=Ba(s,o.props);return o.type!==i.Fragment&&(l.ref=a),i.cloneElement(o,l)}return i.Children.count(o)>1?i.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var Va=Symbol("radix.slottable");function za(e){return i.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Va}function Ba(e,t){const n={...t};for(const r in t){const o=e[r],s=t[r];/^on[A-Z]/.test(r)?o&&s?n[r]=(...a)=>{const l=s(...a);return o(...a),l}:o&&(n[r]=o):r==="style"?n[r]={...o,...s}:r==="className"&&(n[r]=[o,s].filter(Boolean).join(" "))}return{...e,...n}}function Ua(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function yr(e){const t=e+"CollectionProvider",[n,r]=$a(t),[o,s]=n(t,{collectionRef:{current:null},itemMap:new Map}),c=h=>{const{scope:g,children:w}=h,C=he.useRef(null),k=he.useRef(new Map).current;return x.jsx(o,{scope:g,itemMap:k,collectionRef:C,children:w})};c.displayName=t;const a=e+"CollectionSlot",l=Pn(a),u=he.forwardRef((h,g)=>{const{scope:w,children:C}=h,k=s(a,w),b=Vt(g,k.collectionRef);return x.jsx(l,{ref:b,children:C})});u.displayName=a;const f=e+"CollectionItemSlot",d="data-radix-collection-item",p=Pn(f),y=he.forwardRef((h,g)=>{const{scope:w,children:C,...k}=h,b=he.useRef(null),E=Vt(g,b),R=s(f,w);return he.useEffect(()=>(R.itemMap.set(b,{ref:b,...k}),()=>void R.itemMap.delete(b))),x.jsx(p,{[d]:"",ref:E,children:C})});y.displayName=f;function v(h){const g=s(e+"CollectionConsumer",h);return he.useCallback(()=>{const C=g.collectionRef.current;if(!C)return[];const k=Array.from(C.querySelectorAll(`[${d}]`));return Array.from(g.itemMap.values()).sort((R,M)=>k.indexOf(R.ref.current)-k.indexOf(M.ref.current))},[g.collectionRef,g.itemMap])}return[{Provider:c,Slot:u,ItemSlot:y},v,r]}function An(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function mr(...e){return t=>{let n=!1;const r=e.map(o=>{const s=An(o,t);return!n&&typeof s=="function"&&(n=!0),s});if(n)return()=>{for(let o=0;o<r.length;o++){const s=r[o];typeof s=="function"?s():An(e[o],null)}}}}function X(...e){return i.useCallback(mr(...e),e)}function vr(e,t=[]){let n=[];function r(s,c){const a=i.createContext(c),l=n.length;n=[...n,c];const u=d=>{var w;const{scope:p,children:y,...v}=d,h=((w=p==null?void 0:p[e])==null?void 0:w[l])||a,g=i.useMemo(()=>v,Object.values(v));return x.jsx(h.Provider,{value:g,children:y})};u.displayName=s+"Provider";function f(d,p){var h;const y=((h=p==null?void 0:p[e])==null?void 0:h[l])||a,v=i.useContext(y);if(v)return v;if(c!==void 0)return c;throw new Error(`\`${d}\` must be used within \`${s}\``)}return[u,f]}const o=()=>{const s=n.map(c=>i.createContext(c));return function(a){const l=(a==null?void 0:a[e])||s;return i.useMemo(()=>({[`__scope${e}`]:{...a,[e]:l}}),[a,l])}};return o.scopeName=e,[r,Ha(o,...t)]}function Ha(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(s){const c=r.reduce((a,{useScope:l,scopeName:u})=>{const d=l(s)[`__scope${u}`];return{...a,...d}},{});return i.useMemo(()=>({[`__scope${t.scopeName}`]:c}),[c])}};return n.scopeName=t.scopeName,n}var qa=i.createContext(void 0);function Ka(e){const t=i.useContext(qa);return e||t||"ltr"}function gr(e){const t=Ga(e),n=i.forwardRef((r,o)=>{const{children:s,...c}=r,a=i.Children.toArray(s),l=a.find(Ya);if(l){const u=l.props.children,f=a.map(d=>d===l?i.Children.count(u)>1?i.Children.only(null):i.isValidElement(u)?u.props.children:null:d);return x.jsx(t,{...c,ref:o,children:i.isValidElement(u)?i.cloneElement(u,void 0,f):null})}return x.jsx(t,{...c,ref:o,children:s})});return n.displayName=`${e}.Slot`,n}function Ga(e){const t=i.forwardRef((n,r)=>{const{children:o,...s}=n,c=i.isValidElement(o)?Qa(o):void 0,a=X(c,r);if(i.isValidElement(o)){const l=Za(s,o.props);return o.type!==i.Fragment&&(l.ref=a),i.cloneElement(o,l)}return i.Children.count(o)>1?i.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var Xa=Symbol("radix.slottable");function Ya(e){return i.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Xa}function Za(e,t){const n={...t};for(const r in t){const o=e[r],s=t[r];/^on[A-Z]/.test(r)?o&&s?n[r]=(...a)=>{const l=s(...a);return o(...a),l}:o&&(n[r]=o):r==="style"?n[r]={...o,...s}:r==="className"&&(n[r]=[o,s].filter(Boolean).join(" "))}return{...e,...n}}function Qa(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var Ja=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Y=Ja.reduce((e,t)=>{const n=gr(`Primitive.${t}`),r=i.forwardRef((o,s)=>{const{asChild:c,...a}=o,l=c?n:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),x.jsx(l,{...a,ref:s})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function xr(e,t){e&&Kt.flushSync(()=>e.dispatchEvent(t))}function _e(e){const t=i.useRef(e);return i.useEffect(()=>{t.current=e}),i.useMemo(()=>(...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[])}function ei(e,t=globalThis==null?void 0:globalThis.document){const n=_e(e);i.useEffect(()=>{const r=o=>{o.key==="Escape"&&n(o)};return t.addEventListener("keydown",r,{capture:!0}),()=>t.removeEventListener("keydown",r,{capture:!0})},[n,t])}var ti="DismissableLayer",zt="dismissableLayer.update",ni="dismissableLayer.pointerDownOutside",ri="dismissableLayer.focusOutside",On,wr=i.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),kr=i.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:o,onFocusOutside:s,onInteractOutside:c,onDismiss:a,...l}=e,u=i.useContext(wr),[f,d]=i.useState(null),p=(f==null?void 0:f.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,y]=i.useState({}),v=X(t,M=>d(M)),h=Array.from(u.layers),[g]=[...u.layersWithOutsidePointerEventsDisabled].slice(-1),w=h.indexOf(g),C=f?h.indexOf(f):-1,k=u.layersWithOutsidePointerEventsDisabled.size>0,b=C>=w,E=ai(M=>{const P=M.target,_=[...u.branches].some(O=>O.contains(P));!b||_||(o==null||o(M),c==null||c(M),M.defaultPrevented||a==null||a())},p),R=ii(M=>{const P=M.target;[...u.branches].some(O=>O.contains(P))||(s==null||s(M),c==null||c(M),M.defaultPrevented||a==null||a())},p);return ei(M=>{C===u.layers.size-1&&(r==null||r(M),!M.defaultPrevented&&a&&(M.preventDefault(),a()))},p),i.useEffect(()=>{if(f)return n&&(u.layersWithOutsidePointerEventsDisabled.size===0&&(On=p.body.style.pointerEvents,p.body.style.pointerEvents="none"),u.layersWithOutsidePointerEventsDisabled.add(f)),u.layers.add(f),_n(),()=>{n&&u.layersWithOutsidePointerEventsDisabled.size===1&&(p.body.style.pointerEvents=On)}},[f,p,n,u]),i.useEffect(()=>()=>{f&&(u.layers.delete(f),u.layersWithOutsidePointerEventsDisabled.delete(f),_n())},[f,u]),i.useEffect(()=>{const M=()=>y({});return document.addEventListener(zt,M),()=>document.removeEventListener(zt,M)},[]),x.jsx(Y.div,{...l,ref:v,style:{pointerEvents:k?b?"auto":"none":void 0,...e.style},onFocusCapture:I(e.onFocusCapture,R.onFocusCapture),onBlurCapture:I(e.onBlurCapture,R.onBlurCapture),onPointerDownCapture:I(e.onPointerDownCapture,E.onPointerDownCapture)})});kr.displayName=ti;var oi="DismissableLayerBranch",si=i.forwardRef((e,t)=>{const n=i.useContext(wr),r=i.useRef(null),o=X(t,r);return i.useEffect(()=>{const s=r.current;if(s)return n.branches.add(s),()=>{n.branches.delete(s)}},[n.branches]),x.jsx(Y.div,{...e,ref:o})});si.displayName=oi;function ai(e,t=globalThis==null?void 0:globalThis.document){const n=_e(e),r=i.useRef(!1),o=i.useRef(()=>{});return i.useEffect(()=>{const s=a=>{if(a.target&&!r.current){let l=function(){br(ni,n,u,{discrete:!0})};const u={originalEvent:a};a.pointerType==="touch"?(t.removeEventListener("click",o.current),o.current=l,t.addEventListener("click",o.current,{once:!0})):l()}else t.removeEventListener("click",o.current);r.current=!1},c=window.setTimeout(()=>{t.addEventListener("pointerdown",s)},0);return()=>{window.clearTimeout(c),t.removeEventListener("pointerdown",s),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function ii(e,t=globalThis==null?void 0:globalThis.document){const n=_e(e),r=i.useRef(!1);return i.useEffect(()=>{const o=s=>{s.target&&!r.current&&br(ri,n,{originalEvent:s},{discrete:!1})};return t.addEventListener("focusin",o),()=>t.removeEventListener("focusin",o)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function _n(){const e=new CustomEvent(zt);document.dispatchEvent(e)}function br(e,t,n,{discrete:r}){const o=n.originalEvent.target,s=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?xr(o,s):o.dispatchEvent(s)}var Rt=0;function Cr(){i.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??Dn()),document.body.insertAdjacentElement("beforeend",e[1]??Dn()),Rt++,()=>{Rt===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),Rt--}},[])}function Dn(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}function Tn(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function ci(...e){return t=>{let n=!1;const r=e.map(o=>{const s=Tn(o,t);return!n&&typeof s=="function"&&(n=!0),s});if(n)return()=>{for(let o=0;o<r.length;o++){const s=r[o];typeof s=="function"?s():Tn(e[o],null)}}}}function Mr(...e){return i.useCallback(ci(...e),e)}function li(e){const t=ui(e),n=i.forwardRef((r,o)=>{const{children:s,...c}=r,a=i.Children.toArray(s),l=a.find(fi);if(l){const u=l.props.children,f=a.map(d=>d===l?i.Children.count(u)>1?i.Children.only(null):i.isValidElement(u)?u.props.children:null:d);return x.jsx(t,{...c,ref:o,children:i.isValidElement(u)?i.cloneElement(u,void 0,f):null})}return x.jsx(t,{...c,ref:o,children:s})});return n.displayName=`${e}.Slot`,n}function ui(e){const t=i.forwardRef((n,r)=>{const{children:o,...s}=n,c=i.isValidElement(o)?hi(o):void 0,a=Mr(c,r);if(i.isValidElement(o)){const l=pi(s,o.props);return o.type!==i.Fragment&&(l.ref=a),i.cloneElement(o,l)}return i.Children.count(o)>1?i.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var di=Symbol("radix.slottable");function fi(e){return i.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===di}function pi(e,t){const n={...t};for(const r in t){const o=e[r],s=t[r];/^on[A-Z]/.test(r)?o&&s?n[r]=(...a)=>{const l=s(...a);return o(...a),l}:o&&(n[r]=o):r==="style"?n[r]={...o,...s}:r==="className"&&(n[r]=[o,s].filter(Boolean).join(" "))}return{...e,...n}}function hi(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var yi=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],mi=yi.reduce((e,t)=>{const n=li(`Primitive.${t}`),r=i.forwardRef((o,s)=>{const{asChild:c,...a}=o,l=c?n:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),x.jsx(l,{...a,ref:s})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function Nn(e){const t=i.useRef(e);return i.useEffect(()=>{t.current=e}),i.useMemo(()=>(...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[])}var Pt="focusScope.autoFocusOnMount",At="focusScope.autoFocusOnUnmount",In={bubbles:!1,cancelable:!0},vi="FocusScope",Er=i.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:s,...c}=e,[a,l]=i.useState(null),u=Nn(o),f=Nn(s),d=i.useRef(null),p=Mr(t,h=>l(h)),y=i.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;i.useEffect(()=>{if(r){let h=function(k){if(y.paused||!a)return;const b=k.target;a.contains(b)?d.current=b:ie(d.current,{select:!0})},g=function(k){if(y.paused||!a)return;const b=k.relatedTarget;b!==null&&(a.contains(b)||ie(d.current,{select:!0}))},w=function(k){if(document.activeElement===document.body)for(const E of k)E.removedNodes.length>0&&ie(a)};document.addEventListener("focusin",h),document.addEventListener("focusout",g);const C=new MutationObserver(w);return a&&C.observe(a,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",h),document.removeEventListener("focusout",g),C.disconnect()}}},[r,a,y.paused]),i.useEffect(()=>{if(a){$n.add(y);const h=document.activeElement;if(!a.contains(h)){const w=new CustomEvent(Pt,In);a.addEventListener(Pt,u),a.dispatchEvent(w),w.defaultPrevented||(gi(Ci(Sr(a)),{select:!0}),document.activeElement===h&&ie(a))}return()=>{a.removeEventListener(Pt,u),setTimeout(()=>{const w=new CustomEvent(At,In);a.addEventListener(At,f),a.dispatchEvent(w),w.defaultPrevented||ie(h??document.body,{select:!0}),a.removeEventListener(At,f),$n.remove(y)},0)}}},[a,u,f,y]);const v=i.useCallback(h=>{if(!n&&!r||y.paused)return;const g=h.key==="Tab"&&!h.altKey&&!h.ctrlKey&&!h.metaKey,w=document.activeElement;if(g&&w){const C=h.currentTarget,[k,b]=xi(C);k&&b?!h.shiftKey&&w===b?(h.preventDefault(),n&&ie(k,{select:!0})):h.shiftKey&&w===k&&(h.preventDefault(),n&&ie(b,{select:!0})):w===C&&h.preventDefault()}},[n,r,y.paused]);return x.jsx(mi.div,{tabIndex:-1,...c,ref:p,onKeyDown:v})});Er.displayName=vi;function gi(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(ie(r,{select:t}),document.activeElement!==n)return}function xi(e){const t=Sr(e),n=Ln(t,e),r=Ln(t.reverse(),e);return[n,r]}function Sr(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function Ln(e,t){for(const n of e)if(!wi(n,{upTo:t}))return n}function wi(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function ki(e){return e instanceof HTMLInputElement&&"select"in e}function ie(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&ki(e)&&t&&e.select()}}var $n=bi();function bi(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=jn(e,t),e.unshift(t)},remove(t){var n;e=jn(e,t),(n=e[0])==null||n.resume()}}}function jn(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function Ci(e){return e.filter(t=>t.tagName!=="A")}var Re=globalThis!=null&&globalThis.document?i.useLayoutEffect:()=>{},Mi="Arrow",Rr=i.forwardRef((e,t)=>{const{children:n,width:r=10,height:o=5,...s}=e;return x.jsx(Y.svg,{...s,ref:t,width:r,height:o,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?n:x.jsx("polygon",{points:"0,0 30,0 15,10"})})});Rr.displayName=Mi;var Ei=Rr;function Si(e){const[t,n]=i.useState(void 0);return Re(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const s=o[0];let c,a;if("borderBoxSize"in s){const l=s.borderBoxSize,u=Array.isArray(l)?l[0]:l;c=u.inlineSize,a=u.blockSize}else c=e.offsetWidth,a=e.offsetHeight;n({width:c,height:a})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}var tn="Popper",[Pr,Ar]=vr(tn),[Ri,Or]=Pr(tn),_r=e=>{const{__scopePopper:t,children:n}=e,[r,o]=i.useState(null);return x.jsx(Ri,{scope:t,anchor:r,onAnchorChange:o,children:n})};_r.displayName=tn;var Dr="PopperAnchor",Tr=i.forwardRef((e,t)=>{const{__scopePopper:n,virtualRef:r,...o}=e,s=Or(Dr,n),c=i.useRef(null),a=X(t,c);return i.useEffect(()=>{s.onAnchorChange((r==null?void 0:r.current)||c.current)}),r?null:x.jsx(Y.div,{...o,ref:a})});Tr.displayName=Dr;var nn="PopperContent",[Pi,Ai]=Pr(nn),Nr=i.forwardRef((e,t)=>{var re,Ne,H,Ie,yn,mn;const{__scopePopper:n,side:r="bottom",sideOffset:o=0,align:s="center",alignOffset:c=0,arrowPadding:a=0,avoidCollisions:l=!0,collisionBoundary:u=[],collisionPadding:f=0,sticky:d="partial",hideWhenDetached:p=!1,updatePositionStrategy:y="optimized",onPlaced:v,...h}=e,g=Or(nn,n),[w,C]=i.useState(null),k=X(t,Le=>C(Le)),[b,E]=i.useState(null),R=Si(b),M=(R==null?void 0:R.width)??0,P=(R==null?void 0:R.height)??0,_=r+(s!=="center"?"-"+s:""),O=typeof f=="number"?f:{top:0,right:0,bottom:0,left:0,...f},$=Array.isArray(u)?u:[u],j=$.length>0,N={padding:O,boundary:$.filter(_i),altBoundary:j},{refs:T,floatingStyles:W,placement:D,isPositioned:F,middlewareData:A}=pa({strategy:"fixed",placement:_,whileElementsMounted:(...Le)=>sa(...Le,{animationFrame:y==="always"}),elements:{reference:g.anchor},middleware:[ya({mainAxis:o+P,alignmentAxis:c}),l&&ma({mainAxis:!0,crossAxis:!1,limiter:d==="partial"?va():void 0,...N}),l&&ga({...N}),xa({...N,apply:({elements:Le,rects:vn,availableWidth:fs,availableHeight:ps})=>{const{width:hs,height:ys}=vn.reference,Ye=Le.floating.style;Ye.setProperty("--radix-popper-available-width",`${fs}px`),Ye.setProperty("--radix-popper-available-height",`${ps}px`),Ye.setProperty("--radix-popper-anchor-width",`${hs}px`),Ye.setProperty("--radix-popper-anchor-height",`${ys}px`)}}),b&&ka({element:b,padding:a}),Di({arrowWidth:M,arrowHeight:P}),p&&wa({strategy:"referenceHidden",...N})]}),[S,L]=$r(D),V=_e(v);Re(()=>{F&&(V==null||V())},[F,V]);const Q=(re=A.arrow)==null?void 0:re.x,De=(Ne=A.arrow)==null?void 0:Ne.y,Te=((H=A.arrow)==null?void 0:H.centerOffset)!==0,[Xe,pe]=i.useState();return Re(()=>{w&&pe(window.getComputedStyle(w).zIndex)},[w]),x.jsx("div",{ref:T.setFloating,"data-radix-popper-content-wrapper":"",style:{...W,transform:F?W.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:Xe,"--radix-popper-transform-origin":[(Ie=A.transformOrigin)==null?void 0:Ie.x,(yn=A.transformOrigin)==null?void 0:yn.y].join(" "),...((mn=A.hide)==null?void 0:mn.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:x.jsx(Pi,{scope:n,placedSide:S,onArrowChange:E,arrowX:Q,arrowY:De,shouldHideArrow:Te,children:x.jsx(Y.div,{"data-side":S,"data-align":L,...h,ref:k,style:{...h.style,animation:F?void 0:"none"}})})})});Nr.displayName=nn;var Ir="PopperArrow",Oi={top:"bottom",right:"left",bottom:"top",left:"right"},Lr=i.forwardRef(function(t,n){const{__scopePopper:r,...o}=t,s=Ai(Ir,r),c=Oi[s.placedSide];return x.jsx("span",{ref:s.onArrowChange,style:{position:"absolute",left:s.arrowX,top:s.arrowY,[c]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[s.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[s.placedSide],visibility:s.shouldHideArrow?"hidden":void 0},children:x.jsx(Ei,{...o,ref:n,style:{...o.style,display:"block"}})})});Lr.displayName=Ir;function _i(e){return e!==null}var Di=e=>({name:"transformOrigin",options:e,fn(t){var g,w,C;const{placement:n,rects:r,middlewareData:o}=t,c=((g=o.arrow)==null?void 0:g.centerOffset)!==0,a=c?0:e.arrowWidth,l=c?0:e.arrowHeight,[u,f]=$r(n),d={start:"0%",center:"50%",end:"100%"}[f],p=(((w=o.arrow)==null?void 0:w.x)??0)+a/2,y=(((C=o.arrow)==null?void 0:C.y)??0)+l/2;let v="",h="";return u==="bottom"?(v=c?d:`${p}px`,h=`${-l}px`):u==="top"?(v=c?d:`${p}px`,h=`${r.floating.height+l}px`):u==="right"?(v=`${-l}px`,h=c?d:`${y}px`):u==="left"&&(v=`${r.floating.width+l}px`,h=c?d:`${y}px`),{data:{x:v,y:h}}}});function $r(e){const[t,n="center"]=e.split("-");return[t,n]}var Ti=_r,Ni=Tr,Ii=Nr,Li=Lr,$i="Portal",jr=i.forwardRef((e,t)=>{var a;const{container:n,...r}=e,[o,s]=i.useState(!1);Re(()=>s(!0),[]);const c=n||o&&((a=globalThis==null?void 0:globalThis.document)==null?void 0:a.body);return c?er.createPortal(x.jsx(Y.div,{...r,ref:t}),c):null});jr.displayName=$i;function ji(e,t){return i.useReducer((n,r)=>t[n][r]??n,e)}var He=e=>{const{present:t,children:n}=e,r=Fi(t),o=typeof n=="function"?n({present:r.isPresent}):i.Children.only(n),s=X(r.ref,Wi(o));return typeof n=="function"||r.isPresent?i.cloneElement(o,{ref:s}):null};He.displayName="Presence";function Fi(e){const[t,n]=i.useState(),r=i.useRef(null),o=i.useRef(e),s=i.useRef("none"),c=e?"mounted":"unmounted",[a,l]=ji(c,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return i.useEffect(()=>{const u=Qe(r.current);s.current=a==="mounted"?u:"none"},[a]),Re(()=>{const u=r.current,f=o.current;if(f!==e){const p=s.current,y=Qe(u);e?l("MOUNT"):y==="none"||(u==null?void 0:u.display)==="none"?l("UNMOUNT"):l(f&&p!==y?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,l]),Re(()=>{if(t){let u;const f=t.ownerDocument.defaultView??window,d=y=>{const h=Qe(r.current).includes(y.animationName);if(y.target===t&&h&&(l("ANIMATION_END"),!o.current)){const g=t.style.animationFillMode;t.style.animationFillMode="forwards",u=f.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=g)})}},p=y=>{y.target===t&&(s.current=Qe(r.current))};return t.addEventListener("animationstart",p),t.addEventListener("animationcancel",d),t.addEventListener("animationend",d),()=>{f.clearTimeout(u),t.removeEventListener("animationstart",p),t.removeEventListener("animationcancel",d),t.removeEventListener("animationend",d)}}else l("ANIMATION_END")},[t,l]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:i.useCallback(u=>{r.current=u?getComputedStyle(u):null,n(u)},[])}}function Qe(e){return(e==null?void 0:e.animationName)||"none"}function Wi(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function Me(e,t,{checkForDefaultPrevented:n=!0}={}){return function(o){if(e==null||e(o),n===!1||!o.defaultPrevented)return t==null?void 0:t(o)}}function Fn(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function Vi(...e){return t=>{let n=!1;const r=e.map(o=>{const s=Fn(o,t);return!n&&typeof s=="function"&&(n=!0),s});if(n)return()=>{for(let o=0;o<r.length;o++){const s=r[o];typeof s=="function"?s():Fn(e[o],null)}}}}function Fr(...e){return i.useCallback(Vi(...e),e)}function zi(e,t=[]){let n=[];function r(s,c){const a=i.createContext(c),l=n.length;n=[...n,c];const u=d=>{var w;const{scope:p,children:y,...v}=d,h=((w=p==null?void 0:p[e])==null?void 0:w[l])||a,g=i.useMemo(()=>v,Object.values(v));return x.jsx(h.Provider,{value:g,children:y})};u.displayName=s+"Provider";function f(d,p){var h;const y=((h=p==null?void 0:p[e])==null?void 0:h[l])||a,v=i.useContext(y);if(v)return v;if(c!==void 0)return c;throw new Error(`\`${d}\` must be used within \`${s}\``)}return[u,f]}const o=()=>{const s=n.map(c=>i.createContext(c));return function(a){const l=(a==null?void 0:a[e])||s;return i.useMemo(()=>({[`__scope${e}`]:{...a,[e]:l}}),[a,l])}};return o.scopeName=e,[r,Bi(o,...t)]}function Bi(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(s){const c=r.reduce((a,{useScope:l,scopeName:u})=>{const d=l(s)[`__scope${u}`];return{...a,...d}},{});return i.useMemo(()=>({[`__scope${t.scopeName}`]:c}),[c])}};return n.scopeName=t.scopeName,n}var Wr=globalThis!=null&&globalThis.document?i.useLayoutEffect:()=>{},Ui=Pe[" useId ".trim().toString()]||(()=>{}),Hi=0;function qi(e){const[t,n]=i.useState(Ui());return Wr(()=>{n(r=>r??String(Hi++))},[e]),t?`radix-${t}`:""}function Ki(e){const t=Gi(e),n=i.forwardRef((r,o)=>{const{children:s,...c}=r,a=i.Children.toArray(s),l=a.find(Yi);if(l){const u=l.props.children,f=a.map(d=>d===l?i.Children.count(u)>1?i.Children.only(null):i.isValidElement(u)?u.props.children:null:d);return x.jsx(t,{...c,ref:o,children:i.isValidElement(u)?i.cloneElement(u,void 0,f):null})}return x.jsx(t,{...c,ref:o,children:s})});return n.displayName=`${e}.Slot`,n}function Gi(e){const t=i.forwardRef((n,r)=>{const{children:o,...s}=n,c=i.isValidElement(o)?Qi(o):void 0,a=Fr(c,r);if(i.isValidElement(o)){const l=Zi(s,o.props);return o.type!==i.Fragment&&(l.ref=a),i.cloneElement(o,l)}return i.Children.count(o)>1?i.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var Xi=Symbol("radix.slottable");function Yi(e){return i.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Xi}function Zi(e,t){const n={...t};for(const r in t){const o=e[r],s=t[r];/^on[A-Z]/.test(r)?o&&s?n[r]=(...a)=>{const l=s(...a);return o(...a),l}:o&&(n[r]=o):r==="style"?n[r]={...o,...s}:r==="className"&&(n[r]=[o,s].filter(Boolean).join(" "))}return{...e,...n}}function Qi(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var Ji=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Vr=Ji.reduce((e,t)=>{const n=Ki(`Primitive.${t}`),r=i.forwardRef((o,s)=>{const{asChild:c,...a}=o,l=c?n:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),x.jsx(l,{...a,ref:s})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function ec(e){const t=i.useRef(e);return i.useEffect(()=>{t.current=e}),i.useMemo(()=>(...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[])}var tc=Pe[" useInsertionEffect ".trim().toString()]||Wr;function nc({prop:e,defaultProp:t,onChange:n=()=>{},caller:r}){const[o,s,c]=rc({defaultProp:t,onChange:n}),a=e!==void 0,l=a?e:o;{const f=i.useRef(e!==void 0);i.useEffect(()=>{const d=f.current;d!==a&&console.warn(`${r} is changing from ${d?"controlled":"uncontrolled"} to ${a?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),f.current=a},[a,r])}const u=i.useCallback(f=>{var d;if(a){const p=oc(f)?f(e):f;p!==e&&((d=c.current)==null||d.call(c,p))}else s(f)},[a,e,s,c]);return[l,u]}function rc({defaultProp:e,onChange:t}){const[n,r]=i.useState(e),o=i.useRef(n),s=i.useRef(t);return tc(()=>{s.current=t},[t]),i.useEffect(()=>{var c;o.current!==n&&((c=s.current)==null||c.call(s,n),o.current=n)},[n,o]),[n,r,s]}function oc(e){return typeof e=="function"}var sc=i.createContext(void 0);function ac(e){const t=i.useContext(sc);return e||t||"ltr"}var Ot="rovingFocusGroup.onEntryFocus",ic={bubbles:!1,cancelable:!0},qe="RovingFocusGroup",[Bt,zr,cc]=yr(qe),[lc,Br]=zi(qe,[cc]),[uc,dc]=lc(qe),Ur=i.forwardRef((e,t)=>x.jsx(Bt.Provider,{scope:e.__scopeRovingFocusGroup,children:x.jsx(Bt.Slot,{scope:e.__scopeRovingFocusGroup,children:x.jsx(fc,{...e,ref:t})})}));Ur.displayName=qe;var fc=i.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,orientation:r,loop:o=!1,dir:s,currentTabStopId:c,defaultCurrentTabStopId:a,onCurrentTabStopIdChange:l,onEntryFocus:u,preventScrollOnEntryFocus:f=!1,...d}=e,p=i.useRef(null),y=Fr(t,p),v=ac(s),[h,g]=nc({prop:c,defaultProp:a??null,onChange:l,caller:qe}),[w,C]=i.useState(!1),k=ec(u),b=zr(n),E=i.useRef(!1),[R,M]=i.useState(0);return i.useEffect(()=>{const P=p.current;if(P)return P.addEventListener(Ot,k),()=>P.removeEventListener(Ot,k)},[k]),x.jsx(uc,{scope:n,orientation:r,dir:v,loop:o,currentTabStopId:h,onItemFocus:i.useCallback(P=>g(P),[g]),onItemShiftTab:i.useCallback(()=>C(!0),[]),onFocusableItemAdd:i.useCallback(()=>M(P=>P+1),[]),onFocusableItemRemove:i.useCallback(()=>M(P=>P-1),[]),children:x.jsx(Vr.div,{tabIndex:w||R===0?-1:0,"data-orientation":r,...d,ref:y,style:{outline:"none",...e.style},onMouseDown:Me(e.onMouseDown,()=>{E.current=!0}),onFocus:Me(e.onFocus,P=>{const _=!E.current;if(P.target===P.currentTarget&&_&&!w){const O=new CustomEvent(Ot,ic);if(P.currentTarget.dispatchEvent(O),!O.defaultPrevented){const $=b().filter(D=>D.focusable),j=$.find(D=>D.active),N=$.find(D=>D.id===h),W=[j,N,...$].filter(Boolean).map(D=>D.ref.current);Kr(W,f)}}E.current=!1}),onBlur:Me(e.onBlur,()=>C(!1))})})}),Hr="RovingFocusGroupItem",qr=i.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,focusable:r=!0,active:o=!1,tabStopId:s,children:c,...a}=e,l=qi(),u=s||l,f=dc(Hr,n),d=f.currentTabStopId===u,p=zr(n),{onFocusableItemAdd:y,onFocusableItemRemove:v,currentTabStopId:h}=f;return i.useEffect(()=>{if(r)return y(),()=>v()},[r,y,v]),x.jsx(Bt.ItemSlot,{scope:n,id:u,focusable:r,active:o,children:x.jsx(Vr.span,{tabIndex:d?0:-1,"data-orientation":f.orientation,...a,ref:t,onMouseDown:Me(e.onMouseDown,g=>{r?f.onItemFocus(u):g.preventDefault()}),onFocus:Me(e.onFocus,()=>f.onItemFocus(u)),onKeyDown:Me(e.onKeyDown,g=>{if(g.key==="Tab"&&g.shiftKey){f.onItemShiftTab();return}if(g.target!==g.currentTarget)return;const w=yc(g,f.orientation,f.dir);if(w!==void 0){if(g.metaKey||g.ctrlKey||g.altKey||g.shiftKey)return;g.preventDefault();let k=p().filter(b=>b.focusable).map(b=>b.ref.current);if(w==="last")k.reverse();else if(w==="prev"||w==="next"){w==="prev"&&k.reverse();const b=k.indexOf(g.currentTarget);k=f.loop?mc(k,b+1):k.slice(b+1)}setTimeout(()=>Kr(k))}}),children:typeof c=="function"?c({isCurrentTabStop:d,hasTabStop:h!=null}):c})})});qr.displayName=Hr;var pc={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function hc(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function yc(e,t,n){const r=hc(e.key,n);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(r))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(r)))return pc[r]}function Kr(e,t=!1){const n=document.activeElement;for(const r of e)if(r===n||(r.focus({preventScroll:t}),document.activeElement!==n))return}function mc(e,t){return e.map((n,r)=>e[(t+r)%e.length])}var vc=Ur,gc=qr,xc=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},we=new WeakMap,Je=new WeakMap,et={},_t=0,Gr=function(e){return e&&(e.host||Gr(e.parentNode))},wc=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=Gr(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},kc=function(e,t,n,r){var o=wc(t,Array.isArray(e)?e:[e]);et[n]||(et[n]=new WeakMap);var s=et[n],c=[],a=new Set,l=new Set(o),u=function(d){!d||a.has(d)||(a.add(d),u(d.parentNode))};o.forEach(u);var f=function(d){!d||l.has(d)||Array.prototype.forEach.call(d.children,function(p){if(a.has(p))f(p);else try{var y=p.getAttribute(r),v=y!==null&&y!=="false",h=(we.get(p)||0)+1,g=(s.get(p)||0)+1;we.set(p,h),s.set(p,g),c.push(p),h===1&&v&&Je.set(p,!0),g===1&&p.setAttribute(n,"true"),v||p.setAttribute(r,"true")}catch(w){console.error("aria-hidden: cannot operate on ",p,w)}})};return f(t),a.clear(),_t++,function(){c.forEach(function(d){var p=we.get(d)-1,y=s.get(d)-1;we.set(d,p),s.set(d,y),p||(Je.has(d)||d.removeAttribute(r),Je.delete(d)),y||d.removeAttribute(n)}),_t--,_t||(we=new WeakMap,we=new WeakMap,Je=new WeakMap,et={})}},Xr=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=xc(e);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),kc(r,o,n,"aria-hidden")):function(){return null}},J=function(){return J=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},J.apply(this,arguments)};function Yr(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function bc(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,s;r<o;r++)(s||!(r in t))&&(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}var st="right-scroll-bar-position",at="width-before-scroll-bar",Cc="with-scroll-bars-hidden",Mc="--removed-body-scroll-bar-size";function Dt(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function Ec(e,t){var n=i.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var o=n.value;o!==r&&(n.value=r,n.callback(r,o))}}}})[0];return n.callback=t,n.facade}var Sc=typeof window<"u"?i.useLayoutEffect:i.useEffect,Wn=new WeakMap;function Rc(e,t){var n=Ec(null,function(r){return e.forEach(function(o){return Dt(o,r)})});return Sc(function(){var r=Wn.get(n);if(r){var o=new Set(r),s=new Set(e),c=n.current;o.forEach(function(a){s.has(a)||Dt(a,null)}),s.forEach(function(a){o.has(a)||Dt(a,c)})}Wn.set(n,e)},[e]),n}function Pc(e){return e}function Ac(e,t){t===void 0&&(t=Pc);var n=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(s){var c=t(s,r);return n.push(c),function(){n=n.filter(function(a){return a!==c})}},assignSyncMedium:function(s){for(r=!0;n.length;){var c=n;n=[],c.forEach(s)}n={push:function(a){return s(a)},filter:function(){return n}}},assignMedium:function(s){r=!0;var c=[];if(n.length){var a=n;n=[],a.forEach(s),c=n}var l=function(){var f=c;c=[],f.forEach(s)},u=function(){return Promise.resolve().then(l)};u(),n={push:function(f){c.push(f),u()},filter:function(f){return c=c.filter(f),n}}}};return o}function Oc(e){e===void 0&&(e={});var t=Ac(null);return t.options=J({async:!0,ssr:!1},e),t}var Zr=function(e){var t=e.sideCar,n=Yr(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return i.createElement(r,J({},n))};Zr.isSideCarExport=!0;function _c(e,t){return e.useMedium(t),Zr}var Qr=Oc(),Tt=function(){},xt=i.forwardRef(function(e,t){var n=i.useRef(null),r=i.useState({onScrollCapture:Tt,onWheelCapture:Tt,onTouchMoveCapture:Tt}),o=r[0],s=r[1],c=e.forwardProps,a=e.children,l=e.className,u=e.removeScrollBar,f=e.enabled,d=e.shards,p=e.sideCar,y=e.noIsolation,v=e.inert,h=e.allowPinchZoom,g=e.as,w=g===void 0?"div":g,C=e.gapMode,k=Yr(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),b=p,E=Rc([n,t]),R=J(J({},k),o);return i.createElement(i.Fragment,null,f&&i.createElement(b,{sideCar:Qr,removeScrollBar:u,shards:d,noIsolation:y,inert:v,setCallbacks:s,allowPinchZoom:!!h,lockRef:n,gapMode:C}),c?i.cloneElement(i.Children.only(a),J(J({},R),{ref:E})):i.createElement(w,J({},R,{className:l,ref:E}),a))});xt.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};xt.classNames={fullWidth:at,zeroRight:st};var Dc=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function Tc(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=Dc();return t&&e.setAttribute("nonce",t),e}function Nc(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function Ic(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var Lc=function(){var e=0,t=null;return{add:function(n){e==0&&(t=Tc())&&(Nc(t,n),Ic(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},$c=function(){var e=Lc();return function(t,n){i.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},Jr=function(){var e=$c(),t=function(n){var r=n.styles,o=n.dynamic;return e(r,o),null};return t},jc={left:0,top:0,right:0,gap:0},Nt=function(e){return parseInt(e||"",10)||0},Fc=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],o=t[e==="padding"?"paddingRight":"marginRight"];return[Nt(n),Nt(r),Nt(o)]},Wc=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return jc;var t=Fc(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},Vc=Jr(),Ee="data-scroll-locked",zc=function(e,t,n,r){var o=e.left,s=e.top,c=e.right,a=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(Cc,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(a,"px ").concat(r,`;
  }
  body[`).concat(Ee,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(o,`px;
    padding-top: `).concat(s,`px;
    padding-right: `).concat(c,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(a,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(st,` {
    right: `).concat(a,"px ").concat(r,`;
  }
  
  .`).concat(at,` {
    margin-right: `).concat(a,"px ").concat(r,`;
  }
  
  .`).concat(st," .").concat(st,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(at," .").concat(at,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(Ee,`] {
    `).concat(Mc,": ").concat(a,`px;
  }
`)},Vn=function(){var e=parseInt(document.body.getAttribute(Ee)||"0",10);return isFinite(e)?e:0},Bc=function(){i.useEffect(function(){return document.body.setAttribute(Ee,(Vn()+1).toString()),function(){var e=Vn()-1;e<=0?document.body.removeAttribute(Ee):document.body.setAttribute(Ee,e.toString())}},[])},Uc=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=r===void 0?"margin":r;Bc();var s=i.useMemo(function(){return Wc(o)},[o]);return i.createElement(Vc,{styles:zc(s,!t,o,n?"":"!important")})},Ut=!1;if(typeof window<"u")try{var tt=Object.defineProperty({},"passive",{get:function(){return Ut=!0,!0}});window.addEventListener("test",tt,tt),window.removeEventListener("test",tt,tt)}catch{Ut=!1}var ke=Ut?{}:!1,Hc=function(e){return e.tagName==="TEXTAREA"},eo=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!Hc(e)&&n[t]==="visible")},qc=function(e){return eo(e,"overflowY")},Kc=function(e){return eo(e,"overflowX")},zn=function(e,t){var n=t.ownerDocument,r=t;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var o=to(e,r);if(o){var s=no(e,r),c=s[1],a=s[2];if(c>a)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},Gc=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},Xc=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},to=function(e,t){return e==="v"?qc(t):Kc(t)},no=function(e,t){return e==="v"?Gc(t):Xc(t)},Yc=function(e,t){return e==="h"&&t==="rtl"?-1:1},Zc=function(e,t,n,r,o){var s=Yc(e,window.getComputedStyle(t).direction),c=s*r,a=n.target,l=t.contains(a),u=!1,f=c>0,d=0,p=0;do{var y=no(e,a),v=y[0],h=y[1],g=y[2],w=h-g-s*v;(v||w)&&to(e,a)&&(d+=w,p+=v),a instanceof ShadowRoot?a=a.host:a=a.parentNode}while(!l&&a!==document.body||l&&(t.contains(a)||t===a));return(f&&(Math.abs(d)<1||!o)||!f&&(Math.abs(p)<1||!o))&&(u=!0),u},nt=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Bn=function(e){return[e.deltaX,e.deltaY]},Un=function(e){return e&&"current"in e?e.current:e},Qc=function(e,t){return e[0]===t[0]&&e[1]===t[1]},Jc=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},el=0,be=[];function tl(e){var t=i.useRef([]),n=i.useRef([0,0]),r=i.useRef(),o=i.useState(el++)[0],s=i.useState(Jr)[0],c=i.useRef(e);i.useEffect(function(){c.current=e},[e]),i.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var h=bc([e.lockRef.current],(e.shards||[]).map(Un),!0).filter(Boolean);return h.forEach(function(g){return g.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),h.forEach(function(g){return g.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var a=i.useCallback(function(h,g){if("touches"in h&&h.touches.length===2||h.type==="wheel"&&h.ctrlKey)return!c.current.allowPinchZoom;var w=nt(h),C=n.current,k="deltaX"in h?h.deltaX:C[0]-w[0],b="deltaY"in h?h.deltaY:C[1]-w[1],E,R=h.target,M=Math.abs(k)>Math.abs(b)?"h":"v";if("touches"in h&&M==="h"&&R.type==="range")return!1;var P=zn(M,R);if(!P)return!0;if(P?E=M:(E=M==="v"?"h":"v",P=zn(M,R)),!P)return!1;if(!r.current&&"changedTouches"in h&&(k||b)&&(r.current=E),!E)return!0;var _=r.current||E;return Zc(_,g,h,_==="h"?k:b,!0)},[]),l=i.useCallback(function(h){var g=h;if(!(!be.length||be[be.length-1]!==s)){var w="deltaY"in g?Bn(g):nt(g),C=t.current.filter(function(E){return E.name===g.type&&(E.target===g.target||g.target===E.shadowParent)&&Qc(E.delta,w)})[0];if(C&&C.should){g.cancelable&&g.preventDefault();return}if(!C){var k=(c.current.shards||[]).map(Un).filter(Boolean).filter(function(E){return E.contains(g.target)}),b=k.length>0?a(g,k[0]):!c.current.noIsolation;b&&g.cancelable&&g.preventDefault()}}},[]),u=i.useCallback(function(h,g,w,C){var k={name:h,delta:g,target:w,should:C,shadowParent:nl(w)};t.current.push(k),setTimeout(function(){t.current=t.current.filter(function(b){return b!==k})},1)},[]),f=i.useCallback(function(h){n.current=nt(h),r.current=void 0},[]),d=i.useCallback(function(h){u(h.type,Bn(h),h.target,a(h,e.lockRef.current))},[]),p=i.useCallback(function(h){u(h.type,nt(h),h.target,a(h,e.lockRef.current))},[]);i.useEffect(function(){return be.push(s),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:p}),document.addEventListener("wheel",l,ke),document.addEventListener("touchmove",l,ke),document.addEventListener("touchstart",f,ke),function(){be=be.filter(function(h){return h!==s}),document.removeEventListener("wheel",l,ke),document.removeEventListener("touchmove",l,ke),document.removeEventListener("touchstart",f,ke)}},[]);var y=e.removeScrollBar,v=e.inert;return i.createElement(i.Fragment,null,v?i.createElement(s,{styles:Jc(o)}):null,y?i.createElement(Uc,{gapMode:e.gapMode}):null)}function nl(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const rl=_c(Qr,tl);var rn=i.forwardRef(function(e,t){return i.createElement(xt,J({},e,{ref:t,sideCar:rl}))});rn.classNames=xt.classNames;var Ht=["Enter"," "],ol=["ArrowDown","PageUp","Home"],ro=["ArrowUp","PageDown","End"],sl=[...ol,...ro],al={ltr:[...Ht,"ArrowRight"],rtl:[...Ht,"ArrowLeft"]},il={ltr:["ArrowLeft"],rtl:["ArrowRight"]},Ke="Menu",[We,cl,ll]=yr(Ke),[ve,oo]=vr(Ke,[ll,Ar,Br]),wt=Ar(),so=Br(),[ul,ge]=ve(Ke),[dl,Ge]=ve(Ke),ao=e=>{const{__scopeMenu:t,open:n=!1,children:r,dir:o,onOpenChange:s,modal:c=!0}=e,a=wt(t),[l,u]=i.useState(null),f=i.useRef(!1),d=_e(s),p=Ka(o);return i.useEffect(()=>{const y=()=>{f.current=!0,document.addEventListener("pointerdown",v,{capture:!0,once:!0}),document.addEventListener("pointermove",v,{capture:!0,once:!0})},v=()=>f.current=!1;return document.addEventListener("keydown",y,{capture:!0}),()=>{document.removeEventListener("keydown",y,{capture:!0}),document.removeEventListener("pointerdown",v,{capture:!0}),document.removeEventListener("pointermove",v,{capture:!0})}},[]),x.jsx(Ti,{...a,children:x.jsx(ul,{scope:t,open:n,onOpenChange:d,content:l,onContentChange:u,children:x.jsx(dl,{scope:t,onClose:i.useCallback(()=>d(!1),[d]),isUsingKeyboardRef:f,dir:p,modal:c,children:r})})})};ao.displayName=Ke;var fl="MenuAnchor",on=i.forwardRef((e,t)=>{const{__scopeMenu:n,...r}=e,o=wt(n);return x.jsx(Ni,{...o,...r,ref:t})});on.displayName=fl;var sn="MenuPortal",[pl,io]=ve(sn,{forceMount:void 0}),co=e=>{const{__scopeMenu:t,forceMount:n,children:r,container:o}=e,s=ge(sn,t);return x.jsx(pl,{scope:t,forceMount:n,children:x.jsx(He,{present:n||s.open,children:x.jsx(jr,{asChild:!0,container:o,children:r})})})};co.displayName=sn;var q="MenuContent",[hl,an]=ve(q),lo=i.forwardRef((e,t)=>{const n=io(q,e.__scopeMenu),{forceMount:r=n.forceMount,...o}=e,s=ge(q,e.__scopeMenu),c=Ge(q,e.__scopeMenu);return x.jsx(We.Provider,{scope:e.__scopeMenu,children:x.jsx(He,{present:r||s.open,children:x.jsx(We.Slot,{scope:e.__scopeMenu,children:c.modal?x.jsx(yl,{...o,ref:t}):x.jsx(ml,{...o,ref:t})})})})}),yl=i.forwardRef((e,t)=>{const n=ge(q,e.__scopeMenu),r=i.useRef(null),o=X(t,r);return i.useEffect(()=>{const s=r.current;if(s)return Xr(s)},[]),x.jsx(cn,{...e,ref:o,trapFocus:n.open,disableOutsidePointerEvents:n.open,disableOutsideScroll:!0,onFocusOutside:I(e.onFocusOutside,s=>s.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>n.onOpenChange(!1)})}),ml=i.forwardRef((e,t)=>{const n=ge(q,e.__scopeMenu);return x.jsx(cn,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>n.onOpenChange(!1)})}),vl=gr("MenuContent.ScrollLock"),cn=i.forwardRef((e,t)=>{const{__scopeMenu:n,loop:r=!1,trapFocus:o,onOpenAutoFocus:s,onCloseAutoFocus:c,disableOutsidePointerEvents:a,onEntryFocus:l,onEscapeKeyDown:u,onPointerDownOutside:f,onFocusOutside:d,onInteractOutside:p,onDismiss:y,disableOutsideScroll:v,...h}=e,g=ge(q,n),w=Ge(q,n),C=wt(n),k=so(n),b=cl(n),[E,R]=i.useState(null),M=i.useRef(null),P=X(t,M,g.onContentChange),_=i.useRef(0),O=i.useRef(""),$=i.useRef(0),j=i.useRef(null),N=i.useRef("right"),T=i.useRef(0),W=v?rn:i.Fragment,D=v?{as:vl,allowPinchZoom:!0}:void 0,F=S=>{var re,Ne;const L=O.current+S,V=b().filter(H=>!H.disabled),Q=document.activeElement,De=(re=V.find(H=>H.ref.current===Q))==null?void 0:re.textValue,Te=V.map(H=>H.textValue),Xe=Al(Te,L,De),pe=(Ne=V.find(H=>H.textValue===Xe))==null?void 0:Ne.ref.current;(function H(Ie){O.current=Ie,window.clearTimeout(_.current),Ie!==""&&(_.current=window.setTimeout(()=>H(""),1e3))})(L),pe&&setTimeout(()=>pe.focus())};i.useEffect(()=>()=>window.clearTimeout(_.current),[]),Cr();const A=i.useCallback(S=>{var V,Q;return N.current===((V=j.current)==null?void 0:V.side)&&_l(S,(Q=j.current)==null?void 0:Q.area)},[]);return x.jsx(hl,{scope:n,searchRef:O,onItemEnter:i.useCallback(S=>{A(S)&&S.preventDefault()},[A]),onItemLeave:i.useCallback(S=>{var L;A(S)||((L=M.current)==null||L.focus(),R(null))},[A]),onTriggerLeave:i.useCallback(S=>{A(S)&&S.preventDefault()},[A]),pointerGraceTimerRef:$,onPointerGraceIntentChange:i.useCallback(S=>{j.current=S},[]),children:x.jsx(W,{...D,children:x.jsx(Er,{asChild:!0,trapped:o,onMountAutoFocus:I(s,S=>{var L;S.preventDefault(),(L=M.current)==null||L.focus({preventScroll:!0})}),onUnmountAutoFocus:c,children:x.jsx(kr,{asChild:!0,disableOutsidePointerEvents:a,onEscapeKeyDown:u,onPointerDownOutside:f,onFocusOutside:d,onInteractOutside:p,onDismiss:y,children:x.jsx(vc,{asChild:!0,...k,dir:w.dir,orientation:"vertical",loop:r,currentTabStopId:E,onCurrentTabStopIdChange:R,onEntryFocus:I(l,S=>{w.isUsingKeyboardRef.current||S.preventDefault()}),preventScrollOnEntryFocus:!0,children:x.jsx(Ii,{role:"menu","aria-orientation":"vertical","data-state":So(g.open),"data-radix-menu-content":"",dir:w.dir,...C,...h,ref:P,style:{outline:"none",...h.style},onKeyDown:I(h.onKeyDown,S=>{const V=S.target.closest("[data-radix-menu-content]")===S.currentTarget,Q=S.ctrlKey||S.altKey||S.metaKey,De=S.key.length===1;V&&(S.key==="Tab"&&S.preventDefault(),!Q&&De&&F(S.key));const Te=M.current;if(S.target!==Te||!sl.includes(S.key))return;S.preventDefault();const pe=b().filter(re=>!re.disabled).map(re=>re.ref.current);ro.includes(S.key)&&pe.reverse(),Rl(pe)}),onBlur:I(e.onBlur,S=>{S.currentTarget.contains(S.target)||(window.clearTimeout(_.current),O.current="")}),onPointerMove:I(e.onPointerMove,Ve(S=>{const L=S.target,V=T.current!==S.clientX;if(S.currentTarget.contains(L)&&V){const Q=S.clientX>T.current?"right":"left";N.current=Q,T.current=S.clientX}}))})})})})})})});lo.displayName=q;var gl="MenuGroup",ln=i.forwardRef((e,t)=>{const{__scopeMenu:n,...r}=e;return x.jsx(Y.div,{role:"group",...r,ref:t})});ln.displayName=gl;var xl="MenuLabel",uo=i.forwardRef((e,t)=>{const{__scopeMenu:n,...r}=e;return x.jsx(Y.div,{...r,ref:t})});uo.displayName=xl;var ft="MenuItem",Hn="menu.itemSelect",kt=i.forwardRef((e,t)=>{const{disabled:n=!1,onSelect:r,...o}=e,s=i.useRef(null),c=Ge(ft,e.__scopeMenu),a=an(ft,e.__scopeMenu),l=X(t,s),u=i.useRef(!1),f=()=>{const d=s.current;if(!n&&d){const p=new CustomEvent(Hn,{bubbles:!0,cancelable:!0});d.addEventListener(Hn,y=>r==null?void 0:r(y),{once:!0}),xr(d,p),p.defaultPrevented?u.current=!1:c.onClose()}};return x.jsx(fo,{...o,ref:l,disabled:n,onClick:I(e.onClick,f),onPointerDown:d=>{var p;(p=e.onPointerDown)==null||p.call(e,d),u.current=!0},onPointerUp:I(e.onPointerUp,d=>{var p;u.current||(p=d.currentTarget)==null||p.click()}),onKeyDown:I(e.onKeyDown,d=>{const p=a.searchRef.current!=="";n||p&&d.key===" "||Ht.includes(d.key)&&(d.currentTarget.click(),d.preventDefault())})})});kt.displayName=ft;var fo=i.forwardRef((e,t)=>{const{__scopeMenu:n,disabled:r=!1,textValue:o,...s}=e,c=an(ft,n),a=so(n),l=i.useRef(null),u=X(t,l),[f,d]=i.useState(!1),[p,y]=i.useState("");return i.useEffect(()=>{const v=l.current;v&&y((v.textContent??"").trim())},[s.children]),x.jsx(We.ItemSlot,{scope:n,disabled:r,textValue:o??p,children:x.jsx(gc,{asChild:!0,...a,focusable:!r,children:x.jsx(Y.div,{role:"menuitem","data-highlighted":f?"":void 0,"aria-disabled":r||void 0,"data-disabled":r?"":void 0,...s,ref:u,onPointerMove:I(e.onPointerMove,Ve(v=>{r?c.onItemLeave(v):(c.onItemEnter(v),v.defaultPrevented||v.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:I(e.onPointerLeave,Ve(v=>c.onItemLeave(v))),onFocus:I(e.onFocus,()=>d(!0)),onBlur:I(e.onBlur,()=>d(!1))})})})}),wl="MenuCheckboxItem",po=i.forwardRef((e,t)=>{const{checked:n=!1,onCheckedChange:r,...o}=e;return x.jsx(go,{scope:e.__scopeMenu,checked:n,children:x.jsx(kt,{role:"menuitemcheckbox","aria-checked":pt(n)?"mixed":n,...o,ref:t,"data-state":dn(n),onSelect:I(o.onSelect,()=>r==null?void 0:r(pt(n)?!0:!n),{checkForDefaultPrevented:!1})})})});po.displayName=wl;var ho="MenuRadioGroup",[kl,bl]=ve(ho,{value:void 0,onValueChange:()=>{}}),yo=i.forwardRef((e,t)=>{const{value:n,onValueChange:r,...o}=e,s=_e(r);return x.jsx(kl,{scope:e.__scopeMenu,value:n,onValueChange:s,children:x.jsx(ln,{...o,ref:t})})});yo.displayName=ho;var mo="MenuRadioItem",vo=i.forwardRef((e,t)=>{const{value:n,...r}=e,o=bl(mo,e.__scopeMenu),s=n===o.value;return x.jsx(go,{scope:e.__scopeMenu,checked:s,children:x.jsx(kt,{role:"menuitemradio","aria-checked":s,...r,ref:t,"data-state":dn(s),onSelect:I(r.onSelect,()=>{var c;return(c=o.onValueChange)==null?void 0:c.call(o,n)},{checkForDefaultPrevented:!1})})})});vo.displayName=mo;var un="MenuItemIndicator",[go,Cl]=ve(un,{checked:!1}),xo=i.forwardRef((e,t)=>{const{__scopeMenu:n,forceMount:r,...o}=e,s=Cl(un,n);return x.jsx(He,{present:r||pt(s.checked)||s.checked===!0,children:x.jsx(Y.span,{...o,ref:t,"data-state":dn(s.checked)})})});xo.displayName=un;var Ml="MenuSeparator",wo=i.forwardRef((e,t)=>{const{__scopeMenu:n,...r}=e;return x.jsx(Y.div,{role:"separator","aria-orientation":"horizontal",...r,ref:t})});wo.displayName=Ml;var El="MenuArrow",ko=i.forwardRef((e,t)=>{const{__scopeMenu:n,...r}=e,o=wt(n);return x.jsx(Li,{...o,...r,ref:t})});ko.displayName=El;var Sl="MenuSub",[lp,bo]=ve(Sl),$e="MenuSubTrigger",Co=i.forwardRef((e,t)=>{const n=ge($e,e.__scopeMenu),r=Ge($e,e.__scopeMenu),o=bo($e,e.__scopeMenu),s=an($e,e.__scopeMenu),c=i.useRef(null),{pointerGraceTimerRef:a,onPointerGraceIntentChange:l}=s,u={__scopeMenu:e.__scopeMenu},f=i.useCallback(()=>{c.current&&window.clearTimeout(c.current),c.current=null},[]);return i.useEffect(()=>f,[f]),i.useEffect(()=>{const d=a.current;return()=>{window.clearTimeout(d),l(null)}},[a,l]),x.jsx(on,{asChild:!0,...u,children:x.jsx(fo,{id:o.triggerId,"aria-haspopup":"menu","aria-expanded":n.open,"aria-controls":o.contentId,"data-state":So(n.open),...e,ref:mr(t,o.onTriggerChange),onClick:d=>{var p;(p=e.onClick)==null||p.call(e,d),!(e.disabled||d.defaultPrevented)&&(d.currentTarget.focus(),n.open||n.onOpenChange(!0))},onPointerMove:I(e.onPointerMove,Ve(d=>{s.onItemEnter(d),!d.defaultPrevented&&!e.disabled&&!n.open&&!c.current&&(s.onPointerGraceIntentChange(null),c.current=window.setTimeout(()=>{n.onOpenChange(!0),f()},100))})),onPointerLeave:I(e.onPointerLeave,Ve(d=>{var y,v;f();const p=(y=n.content)==null?void 0:y.getBoundingClientRect();if(p){const h=(v=n.content)==null?void 0:v.dataset.side,g=h==="right",w=g?-5:5,C=p[g?"left":"right"],k=p[g?"right":"left"];s.onPointerGraceIntentChange({area:[{x:d.clientX+w,y:d.clientY},{x:C,y:p.top},{x:k,y:p.top},{x:k,y:p.bottom},{x:C,y:p.bottom}],side:h}),window.clearTimeout(a.current),a.current=window.setTimeout(()=>s.onPointerGraceIntentChange(null),300)}else{if(s.onTriggerLeave(d),d.defaultPrevented)return;s.onPointerGraceIntentChange(null)}})),onKeyDown:I(e.onKeyDown,d=>{var y;const p=s.searchRef.current!=="";e.disabled||p&&d.key===" "||al[r.dir].includes(d.key)&&(n.onOpenChange(!0),(y=n.content)==null||y.focus(),d.preventDefault())})})})});Co.displayName=$e;var Mo="MenuSubContent",Eo=i.forwardRef((e,t)=>{const n=io(q,e.__scopeMenu),{forceMount:r=n.forceMount,...o}=e,s=ge(q,e.__scopeMenu),c=Ge(q,e.__scopeMenu),a=bo(Mo,e.__scopeMenu),l=i.useRef(null),u=X(t,l);return x.jsx(We.Provider,{scope:e.__scopeMenu,children:x.jsx(He,{present:r||s.open,children:x.jsx(We.Slot,{scope:e.__scopeMenu,children:x.jsx(cn,{id:a.contentId,"aria-labelledby":a.triggerId,...o,ref:u,align:"start",side:c.dir==="rtl"?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:f=>{var d;c.isUsingKeyboardRef.current&&((d=l.current)==null||d.focus()),f.preventDefault()},onCloseAutoFocus:f=>f.preventDefault(),onFocusOutside:I(e.onFocusOutside,f=>{f.target!==a.trigger&&s.onOpenChange(!1)}),onEscapeKeyDown:I(e.onEscapeKeyDown,f=>{c.onClose(),f.preventDefault()}),onKeyDown:I(e.onKeyDown,f=>{var y;const d=f.currentTarget.contains(f.target),p=il[c.dir].includes(f.key);d&&p&&(s.onOpenChange(!1),(y=a.trigger)==null||y.focus(),f.preventDefault())})})})})})});Eo.displayName=Mo;function So(e){return e?"open":"closed"}function pt(e){return e==="indeterminate"}function dn(e){return pt(e)?"indeterminate":e?"checked":"unchecked"}function Rl(e){const t=document.activeElement;for(const n of e)if(n===t||(n.focus(),document.activeElement!==t))return}function Pl(e,t){return e.map((n,r)=>e[(t+r)%e.length])}function Al(e,t,n){const o=t.length>1&&Array.from(t).every(u=>u===t[0])?t[0]:t,s=n?e.indexOf(n):-1;let c=Pl(e,Math.max(s,0));o.length===1&&(c=c.filter(u=>u!==n));const l=c.find(u=>u.toLowerCase().startsWith(o.toLowerCase()));return l!==n?l:void 0}function Ol(e,t){const{x:n,y:r}=e;let o=!1;for(let s=0,c=t.length-1;s<t.length;c=s++){const a=t[s],l=t[c],u=a.x,f=a.y,d=l.x,p=l.y;f>r!=p>r&&n<(d-u)*(r-f)/(p-f)+u&&(o=!o)}return o}function _l(e,t){if(!t)return!1;const n={x:e.clientX,y:e.clientY};return Ol(n,t)}function Ve(e){return t=>t.pointerType==="mouse"?e(t):void 0}var Dl=ao,Tl=on,Nl=co,Il=lo,Ll=ln,$l=uo,jl=kt,Fl=po,Wl=yo,Vl=vo,zl=xo,Bl=wo,Ul=ko,Hl=Co,ql=Eo,Kl=Pe[" useId ".trim().toString()]||(()=>{}),Gl=0;function qn(e){const[t,n]=i.useState(Kl());return hr(()=>{e||n(r=>r??String(Gl++))},[e]),e||(t?`radix-${t}`:"")}var bt="DropdownMenu",[Xl,up]=Ca(bt,[oo]),z=oo(),[Yl,Ro]=Xl(bt),Po=e=>{const{__scopeDropdownMenu:t,children:n,dir:r,open:o,defaultOpen:s,onOpenChange:c,modal:a=!0}=e,l=z(t),u=i.useRef(null),[f,d]=Sa({prop:o,defaultProp:s??!1,onChange:c,caller:bt});return x.jsx(Yl,{scope:t,triggerId:qn(),triggerRef:u,contentId:qn(),open:f,onOpenChange:d,onOpenToggle:i.useCallback(()=>d(p=>!p),[d]),modal:a,children:x.jsx(Dl,{...l,open:f,onOpenChange:d,dir:r,modal:a,children:n})})};Po.displayName=bt;var Ao="DropdownMenuTrigger",Oo=i.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,disabled:r=!1,...o}=e,s=Ro(Ao,n),c=z(n);return x.jsx(Tl,{asChild:!0,...c,children:x.jsx(La.button,{type:"button",id:s.triggerId,"aria-haspopup":"menu","aria-expanded":s.open,"aria-controls":s.open?s.contentId:void 0,"data-state":s.open?"open":"closed","data-disabled":r?"":void 0,disabled:r,...o,ref:pr(t,s.triggerRef),onPointerDown:dt(e.onPointerDown,a=>{!r&&a.button===0&&a.ctrlKey===!1&&(s.onOpenToggle(),s.open||a.preventDefault())}),onKeyDown:dt(e.onKeyDown,a=>{r||(["Enter"," "].includes(a.key)&&s.onOpenToggle(),a.key==="ArrowDown"&&s.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(a.key)&&a.preventDefault())})})})});Oo.displayName=Ao;var Zl="DropdownMenuPortal",_o=e=>{const{__scopeDropdownMenu:t,...n}=e,r=z(t);return x.jsx(Nl,{...r,...n})};_o.displayName=Zl;var Do="DropdownMenuContent",To=i.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=Ro(Do,n),s=z(n),c=i.useRef(!1);return x.jsx(Il,{id:o.contentId,"aria-labelledby":o.triggerId,...s,...r,ref:t,onCloseAutoFocus:dt(e.onCloseAutoFocus,a=>{var l;c.current||(l=o.triggerRef.current)==null||l.focus(),c.current=!1,a.preventDefault()}),onInteractOutside:dt(e.onInteractOutside,a=>{const l=a.detail.originalEvent,u=l.button===0&&l.ctrlKey===!0,f=l.button===2||u;(!o.modal||f)&&(c.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});To.displayName=Do;var Ql="DropdownMenuGroup",Jl=i.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=z(n);return x.jsx(Ll,{...o,...r,ref:t})});Jl.displayName=Ql;var eu="DropdownMenuLabel",No=i.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=z(n);return x.jsx($l,{...o,...r,ref:t})});No.displayName=eu;var tu="DropdownMenuItem",Io=i.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=z(n);return x.jsx(jl,{...o,...r,ref:t})});Io.displayName=tu;var nu="DropdownMenuCheckboxItem",Lo=i.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=z(n);return x.jsx(Fl,{...o,...r,ref:t})});Lo.displayName=nu;var ru="DropdownMenuRadioGroup",ou=i.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=z(n);return x.jsx(Wl,{...o,...r,ref:t})});ou.displayName=ru;var su="DropdownMenuRadioItem",$o=i.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=z(n);return x.jsx(Vl,{...o,...r,ref:t})});$o.displayName=su;var au="DropdownMenuItemIndicator",jo=i.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=z(n);return x.jsx(zl,{...o,...r,ref:t})});jo.displayName=au;var iu="DropdownMenuSeparator",Fo=i.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=z(n);return x.jsx(Bl,{...o,...r,ref:t})});Fo.displayName=iu;var cu="DropdownMenuArrow",lu=i.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=z(n);return x.jsx(Ul,{...o,...r,ref:t})});lu.displayName=cu;var uu="DropdownMenuSubTrigger",Wo=i.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=z(n);return x.jsx(Hl,{...o,...r,ref:t})});Wo.displayName=uu;var du="DropdownMenuSubContent",Vo=i.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=z(n);return x.jsx(ql,{...o,...r,ref:t,style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});Vo.displayName=du;var dp=Po,fp=Oo,pp=_o,hp=To,yp=No,mp=Io,vp=Lo,gp=$o,xp=jo,wp=Fo,kp=Wo,bp=Vo;function le(e,t,{checkForDefaultPrevented:n=!0}={}){return function(o){if(e==null||e(o),n===!1||!o.defaultPrevented)return t==null?void 0:t(o)}}function Kn(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function zo(...e){return t=>{let n=!1;const r=e.map(o=>{const s=Kn(o,t);return!n&&typeof s=="function"&&(n=!0),s});if(n)return()=>{for(let o=0;o<r.length;o++){const s=r[o];typeof s=="function"?s():Kn(e[o],null)}}}}function xe(...e){return i.useCallback(zo(...e),e)}function fu(e,t){const n=i.createContext(t),r=s=>{const{children:c,...a}=s,l=i.useMemo(()=>a,Object.values(a));return x.jsx(n.Provider,{value:l,children:c})};r.displayName=e+"Provider";function o(s){const c=i.useContext(n);if(c)return c;if(t!==void 0)return t;throw new Error(`\`${s}\` must be used within \`${e}\``)}return[r,o]}function pu(e,t=[]){let n=[];function r(s,c){const a=i.createContext(c),l=n.length;n=[...n,c];const u=d=>{var w;const{scope:p,children:y,...v}=d,h=((w=p==null?void 0:p[e])==null?void 0:w[l])||a,g=i.useMemo(()=>v,Object.values(v));return x.jsx(h.Provider,{value:g,children:y})};u.displayName=s+"Provider";function f(d,p){var h;const y=((h=p==null?void 0:p[e])==null?void 0:h[l])||a,v=i.useContext(y);if(v)return v;if(c!==void 0)return c;throw new Error(`\`${d}\` must be used within \`${s}\``)}return[u,f]}const o=()=>{const s=n.map(c=>i.createContext(c));return function(a){const l=(a==null?void 0:a[e])||s;return i.useMemo(()=>({[`__scope${e}`]:{...a,[e]:l}}),[a,l])}};return o.scopeName=e,[r,hu(o,...t)]}function hu(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(s){const c=r.reduce((a,{useScope:l,scopeName:u})=>{const d=l(s)[`__scope${u}`];return{...a,...d}},{});return i.useMemo(()=>({[`__scope${t.scopeName}`]:c}),[c])}};return n.scopeName=t.scopeName,n}var ze=globalThis!=null&&globalThis.document?i.useLayoutEffect:()=>{},yu=Pe[" useId ".trim().toString()]||(()=>{}),mu=0;function It(e){const[t,n]=i.useState(yu());return ze(()=>{e||n(r=>r??String(mu++))},[e]),e||(t?`radix-${t}`:"")}var vu=Pe[" useInsertionEffect ".trim().toString()]||ze;function gu({prop:e,defaultProp:t,onChange:n=()=>{},caller:r}){const[o,s,c]=xu({defaultProp:t,onChange:n}),a=e!==void 0,l=a?e:o;{const f=i.useRef(e!==void 0);i.useEffect(()=>{const d=f.current;d!==a&&console.warn(`${r} is changing from ${d?"controlled":"uncontrolled"} to ${a?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),f.current=a},[a,r])}const u=i.useCallback(f=>{var d;if(a){const p=wu(f)?f(e):f;p!==e&&((d=c.current)==null||d.call(c,p))}else s(f)},[a,e,s,c]);return[l,u]}function xu({defaultProp:e,onChange:t}){const[n,r]=i.useState(e),o=i.useRef(n),s=i.useRef(t);return vu(()=>{s.current=t},[t]),i.useEffect(()=>{var c;o.current!==n&&((c=s.current)==null||c.call(s,n),o.current=n)},[n,o]),[n,r,s]}function wu(e){return typeof e=="function"}function Bo(e){const t=ku(e),n=i.forwardRef((r,o)=>{const{children:s,...c}=r,a=i.Children.toArray(s),l=a.find(Cu);if(l){const u=l.props.children,f=a.map(d=>d===l?i.Children.count(u)>1?i.Children.only(null):i.isValidElement(u)?u.props.children:null:d);return x.jsx(t,{...c,ref:o,children:i.isValidElement(u)?i.cloneElement(u,void 0,f):null})}return x.jsx(t,{...c,ref:o,children:s})});return n.displayName=`${e}.Slot`,n}function ku(e){const t=i.forwardRef((n,r)=>{const{children:o,...s}=n;if(i.isValidElement(o)){const c=Eu(o),a=Mu(s,o.props);return o.type!==i.Fragment&&(a.ref=r?zo(r,c):c),i.cloneElement(o,a)}return i.Children.count(o)>1?i.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var bu=Symbol("radix.slottable");function Cu(e){return i.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===bu}function Mu(e,t){const n={...t};for(const r in t){const o=e[r],s=t[r];/^on[A-Z]/.test(r)?o&&s?n[r]=(...a)=>{const l=s(...a);return o(...a),l}:o&&(n[r]=o):r==="style"?n[r]={...o,...s}:r==="className"&&(n[r]=[o,s].filter(Boolean).join(" "))}return{...e,...n}}function Eu(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var Su=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],ae=Su.reduce((e,t)=>{const n=Bo(`Primitive.${t}`),r=i.forwardRef((o,s)=>{const{asChild:c,...a}=o,l=c?n:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),x.jsx(l,{...a,ref:s})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function Ru(e,t){e&&Kt.flushSync(()=>e.dispatchEvent(t))}function Be(e){const t=i.useRef(e);return i.useEffect(()=>{t.current=e}),i.useMemo(()=>(...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[])}function Pu(e,t=globalThis==null?void 0:globalThis.document){const n=Be(e);i.useEffect(()=>{const r=o=>{o.key==="Escape"&&n(o)};return t.addEventListener("keydown",r,{capture:!0}),()=>t.removeEventListener("keydown",r,{capture:!0})},[n,t])}var Au="DismissableLayer",qt="dismissableLayer.update",Ou="dismissableLayer.pointerDownOutside",_u="dismissableLayer.focusOutside",Gn,Uo=i.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Ho=i.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:o,onFocusOutside:s,onInteractOutside:c,onDismiss:a,...l}=e,u=i.useContext(Uo),[f,d]=i.useState(null),p=(f==null?void 0:f.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,y]=i.useState({}),v=xe(t,M=>d(M)),h=Array.from(u.layers),[g]=[...u.layersWithOutsidePointerEventsDisabled].slice(-1),w=h.indexOf(g),C=f?h.indexOf(f):-1,k=u.layersWithOutsidePointerEventsDisabled.size>0,b=C>=w,E=Nu(M=>{const P=M.target,_=[...u.branches].some(O=>O.contains(P));!b||_||(o==null||o(M),c==null||c(M),M.defaultPrevented||a==null||a())},p),R=Iu(M=>{const P=M.target;[...u.branches].some(O=>O.contains(P))||(s==null||s(M),c==null||c(M),M.defaultPrevented||a==null||a())},p);return Pu(M=>{C===u.layers.size-1&&(r==null||r(M),!M.defaultPrevented&&a&&(M.preventDefault(),a()))},p),i.useEffect(()=>{if(f)return n&&(u.layersWithOutsidePointerEventsDisabled.size===0&&(Gn=p.body.style.pointerEvents,p.body.style.pointerEvents="none"),u.layersWithOutsidePointerEventsDisabled.add(f)),u.layers.add(f),Xn(),()=>{n&&u.layersWithOutsidePointerEventsDisabled.size===1&&(p.body.style.pointerEvents=Gn)}},[f,p,n,u]),i.useEffect(()=>()=>{f&&(u.layers.delete(f),u.layersWithOutsidePointerEventsDisabled.delete(f),Xn())},[f,u]),i.useEffect(()=>{const M=()=>y({});return document.addEventListener(qt,M),()=>document.removeEventListener(qt,M)},[]),x.jsx(ae.div,{...l,ref:v,style:{pointerEvents:k?b?"auto":"none":void 0,...e.style},onFocusCapture:le(e.onFocusCapture,R.onFocusCapture),onBlurCapture:le(e.onBlurCapture,R.onBlurCapture),onPointerDownCapture:le(e.onPointerDownCapture,E.onPointerDownCapture)})});Ho.displayName=Au;var Du="DismissableLayerBranch",Tu=i.forwardRef((e,t)=>{const n=i.useContext(Uo),r=i.useRef(null),o=xe(t,r);return i.useEffect(()=>{const s=r.current;if(s)return n.branches.add(s),()=>{n.branches.delete(s)}},[n.branches]),x.jsx(ae.div,{...e,ref:o})});Tu.displayName=Du;function Nu(e,t=globalThis==null?void 0:globalThis.document){const n=Be(e),r=i.useRef(!1),o=i.useRef(()=>{});return i.useEffect(()=>{const s=a=>{if(a.target&&!r.current){let l=function(){qo(Ou,n,u,{discrete:!0})};const u={originalEvent:a};a.pointerType==="touch"?(t.removeEventListener("click",o.current),o.current=l,t.addEventListener("click",o.current,{once:!0})):l()}else t.removeEventListener("click",o.current);r.current=!1},c=window.setTimeout(()=>{t.addEventListener("pointerdown",s)},0);return()=>{window.clearTimeout(c),t.removeEventListener("pointerdown",s),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function Iu(e,t=globalThis==null?void 0:globalThis.document){const n=Be(e),r=i.useRef(!1);return i.useEffect(()=>{const o=s=>{s.target&&!r.current&&qo(_u,n,{originalEvent:s},{discrete:!1})};return t.addEventListener("focusin",o),()=>t.removeEventListener("focusin",o)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function Xn(){const e=new CustomEvent(qt);document.dispatchEvent(e)}function qo(e,t,n,{discrete:r}){const o=n.originalEvent.target,s=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?Ru(o,s):o.dispatchEvent(s)}var Lt="focusScope.autoFocusOnMount",$t="focusScope.autoFocusOnUnmount",Yn={bubbles:!1,cancelable:!0},Lu="FocusScope",Ko=i.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:s,...c}=e,[a,l]=i.useState(null),u=Be(o),f=Be(s),d=i.useRef(null),p=xe(t,h=>l(h)),y=i.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;i.useEffect(()=>{if(r){let h=function(k){if(y.paused||!a)return;const b=k.target;a.contains(b)?d.current=b:ce(d.current,{select:!0})},g=function(k){if(y.paused||!a)return;const b=k.relatedTarget;b!==null&&(a.contains(b)||ce(d.current,{select:!0}))},w=function(k){if(document.activeElement===document.body)for(const E of k)E.removedNodes.length>0&&ce(a)};document.addEventListener("focusin",h),document.addEventListener("focusout",g);const C=new MutationObserver(w);return a&&C.observe(a,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",h),document.removeEventListener("focusout",g),C.disconnect()}}},[r,a,y.paused]),i.useEffect(()=>{if(a){Qn.add(y);const h=document.activeElement;if(!a.contains(h)){const w=new CustomEvent(Lt,Yn);a.addEventListener(Lt,u),a.dispatchEvent(w),w.defaultPrevented||($u(zu(Go(a)),{select:!0}),document.activeElement===h&&ce(a))}return()=>{a.removeEventListener(Lt,u),setTimeout(()=>{const w=new CustomEvent($t,Yn);a.addEventListener($t,f),a.dispatchEvent(w),w.defaultPrevented||ce(h??document.body,{select:!0}),a.removeEventListener($t,f),Qn.remove(y)},0)}}},[a,u,f,y]);const v=i.useCallback(h=>{if(!n&&!r||y.paused)return;const g=h.key==="Tab"&&!h.altKey&&!h.ctrlKey&&!h.metaKey,w=document.activeElement;if(g&&w){const C=h.currentTarget,[k,b]=ju(C);k&&b?!h.shiftKey&&w===b?(h.preventDefault(),n&&ce(k,{select:!0})):h.shiftKey&&w===k&&(h.preventDefault(),n&&ce(b,{select:!0})):w===C&&h.preventDefault()}},[n,r,y.paused]);return x.jsx(ae.div,{tabIndex:-1,...c,ref:p,onKeyDown:v})});Ko.displayName=Lu;function $u(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(ce(r,{select:t}),document.activeElement!==n)return}function ju(e){const t=Go(e),n=Zn(t,e),r=Zn(t.reverse(),e);return[n,r]}function Go(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function Zn(e,t){for(const n of e)if(!Fu(n,{upTo:t}))return n}function Fu(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function Wu(e){return e instanceof HTMLInputElement&&"select"in e}function ce(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&Wu(e)&&t&&e.select()}}var Qn=Vu();function Vu(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=Jn(e,t),e.unshift(t)},remove(t){var n;e=Jn(e,t),(n=e[0])==null||n.resume()}}}function Jn(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function zu(e){return e.filter(t=>t.tagName!=="A")}var Bu="Portal",Xo=i.forwardRef((e,t)=>{var a;const{container:n,...r}=e,[o,s]=i.useState(!1);ze(()=>s(!0),[]);const c=n||o&&((a=globalThis==null?void 0:globalThis.document)==null?void 0:a.body);return c?er.createPortal(x.jsx(ae.div,{...r,ref:t}),c):null});Xo.displayName=Bu;function Uu(e,t){return i.useReducer((n,r)=>t[n][r]??n,e)}var Ct=e=>{const{present:t,children:n}=e,r=Hu(t),o=typeof n=="function"?n({present:r.isPresent}):i.Children.only(n),s=xe(r.ref,qu(o));return typeof n=="function"||r.isPresent?i.cloneElement(o,{ref:s}):null};Ct.displayName="Presence";function Hu(e){const[t,n]=i.useState(),r=i.useRef(null),o=i.useRef(e),s=i.useRef("none"),c=e?"mounted":"unmounted",[a,l]=Uu(c,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return i.useEffect(()=>{const u=rt(r.current);s.current=a==="mounted"?u:"none"},[a]),ze(()=>{const u=r.current,f=o.current;if(f!==e){const p=s.current,y=rt(u);e?l("MOUNT"):y==="none"||(u==null?void 0:u.display)==="none"?l("UNMOUNT"):l(f&&p!==y?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,l]),ze(()=>{if(t){let u;const f=t.ownerDocument.defaultView??window,d=y=>{const h=rt(r.current).includes(y.animationName);if(y.target===t&&h&&(l("ANIMATION_END"),!o.current)){const g=t.style.animationFillMode;t.style.animationFillMode="forwards",u=f.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=g)})}},p=y=>{y.target===t&&(s.current=rt(r.current))};return t.addEventListener("animationstart",p),t.addEventListener("animationcancel",d),t.addEventListener("animationend",d),()=>{f.clearTimeout(u),t.removeEventListener("animationstart",p),t.removeEventListener("animationcancel",d),t.removeEventListener("animationend",d)}}else l("ANIMATION_END")},[t,l]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:i.useCallback(u=>{r.current=u?getComputedStyle(u):null,n(u)},[])}}function rt(e){return(e==null?void 0:e.animationName)||"none"}function qu(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var Mt="Dialog",[Yo,Cp]=pu(Mt),[Ku,Z]=Yo(Mt),Zo=e=>{const{__scopeDialog:t,children:n,open:r,defaultOpen:o,onOpenChange:s,modal:c=!0}=e,a=i.useRef(null),l=i.useRef(null),[u,f]=gu({prop:r,defaultProp:o??!1,onChange:s,caller:Mt});return x.jsx(Ku,{scope:t,triggerRef:a,contentRef:l,contentId:It(),titleId:It(),descriptionId:It(),open:u,onOpenChange:f,onOpenToggle:i.useCallback(()=>f(d=>!d),[f]),modal:c,children:n})};Zo.displayName=Mt;var Qo="DialogTrigger",Jo=i.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=Z(Qo,n),s=xe(t,o.triggerRef);return x.jsx(ae.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":hn(o.open),...r,ref:s,onClick:le(e.onClick,o.onOpenToggle)})});Jo.displayName=Qo;var fn="DialogPortal",[Gu,es]=Yo(fn,{forceMount:void 0}),ts=e=>{const{__scopeDialog:t,forceMount:n,children:r,container:o}=e,s=Z(fn,t);return x.jsx(Gu,{scope:t,forceMount:n,children:i.Children.map(r,c=>x.jsx(Ct,{present:n||s.open,children:x.jsx(Xo,{asChild:!0,container:o,children:c})}))})};ts.displayName=fn;var ht="DialogOverlay",ns=i.forwardRef((e,t)=>{const n=es(ht,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,s=Z(ht,e.__scopeDialog);return s.modal?x.jsx(Ct,{present:r||s.open,children:x.jsx(Yu,{...o,ref:t})}):null});ns.displayName=ht;var Xu=Bo("DialogOverlay.RemoveScroll"),Yu=i.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=Z(ht,n);return x.jsx(rn,{as:Xu,allowPinchZoom:!0,shards:[o.contentRef],children:x.jsx(ae.div,{"data-state":hn(o.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),me="DialogContent",rs=i.forwardRef((e,t)=>{const n=es(me,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,s=Z(me,e.__scopeDialog);return x.jsx(Ct,{present:r||s.open,children:s.modal?x.jsx(Zu,{...o,ref:t}):x.jsx(Qu,{...o,ref:t})})});rs.displayName=me;var Zu=i.forwardRef((e,t)=>{const n=Z(me,e.__scopeDialog),r=i.useRef(null),o=xe(t,n.contentRef,r);return i.useEffect(()=>{const s=r.current;if(s)return Xr(s)},[]),x.jsx(os,{...e,ref:o,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:le(e.onCloseAutoFocus,s=>{var c;s.preventDefault(),(c=n.triggerRef.current)==null||c.focus()}),onPointerDownOutside:le(e.onPointerDownOutside,s=>{const c=s.detail.originalEvent,a=c.button===0&&c.ctrlKey===!0;(c.button===2||a)&&s.preventDefault()}),onFocusOutside:le(e.onFocusOutside,s=>s.preventDefault())})}),Qu=i.forwardRef((e,t)=>{const n=Z(me,e.__scopeDialog),r=i.useRef(!1),o=i.useRef(!1);return x.jsx(os,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:s=>{var c,a;(c=e.onCloseAutoFocus)==null||c.call(e,s),s.defaultPrevented||(r.current||(a=n.triggerRef.current)==null||a.focus(),s.preventDefault()),r.current=!1,o.current=!1},onInteractOutside:s=>{var l,u;(l=e.onInteractOutside)==null||l.call(e,s),s.defaultPrevented||(r.current=!0,s.detail.originalEvent.type==="pointerdown"&&(o.current=!0));const c=s.target;((u=n.triggerRef.current)==null?void 0:u.contains(c))&&s.preventDefault(),s.detail.originalEvent.type==="focusin"&&o.current&&s.preventDefault()}})}),os=i.forwardRef((e,t)=>{const{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:s,...c}=e,a=Z(me,n),l=i.useRef(null),u=xe(t,l);return Cr(),x.jsxs(x.Fragment,{children:[x.jsx(Ko,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:s,children:x.jsx(Ho,{role:"dialog",id:a.contentId,"aria-describedby":a.descriptionId,"aria-labelledby":a.titleId,"data-state":hn(a.open),...c,ref:u,onDismiss:()=>a.onOpenChange(!1)})}),x.jsxs(x.Fragment,{children:[x.jsx(Ju,{titleId:a.titleId}),x.jsx(td,{contentRef:l,descriptionId:a.descriptionId})]})]})}),pn="DialogTitle",ss=i.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=Z(pn,n);return x.jsx(ae.h2,{id:o.titleId,...r,ref:t})});ss.displayName=pn;var as="DialogDescription",is=i.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=Z(as,n);return x.jsx(ae.p,{id:o.descriptionId,...r,ref:t})});is.displayName=as;var cs="DialogClose",ls=i.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=Z(cs,n);return x.jsx(ae.button,{type:"button",...r,ref:t,onClick:le(e.onClick,()=>o.onOpenChange(!1))})});ls.displayName=cs;function hn(e){return e?"open":"closed"}var us="DialogTitleWarning",[Mp,ds]=fu(us,{contentName:me,titleName:pn,docsSlug:"dialog"}),Ju=({titleId:e})=>{const t=ds(us),n=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return i.useEffect(()=>{e&&(document.getElementById(e)||console.error(n))},[n,e]),null},ed="DialogDescriptionWarning",td=({contentRef:e,descriptionId:t})=>{const r=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${ds(ed).contentName}}.`;return i.useEffect(()=>{var s;const o=(s=e.current)==null?void 0:s.getAttribute("aria-describedby");t&&o&&(document.getElementById(t)||console.warn(r))},[r,e,t]),null},Ep=Zo,Sp=Jo,Rp=ts,Pp=ns,Ap=rs,Op=ss,_p=is,Dp=ls;export{of as $,sd as A,gd as B,jd as C,c1 as D,Yd as E,rf as F,uf as G,_1 as H,od as I,Xd as J,sf as K,Sf as L,Hf as M,m1 as N,x1 as O,Qf as P,kd as Q,p1 as R,b1 as S,j1 as T,B1 as U,Zf as V,op as W,Z1 as X,gf as Y,cp as Z,cf as _,rp as a,Md as a$,yd as a0,l1 as a1,ud as a2,fd as a3,bf as a4,I1 as a5,P1 as a6,Xf as a7,pf as a8,Ud as a9,H1 as aA,Cf as aB,df as aC,Jf as aD,Wf as aE,vf as aF,ip as aG,If as aH,Dd as aI,nf as aJ,Af as aK,hd as aL,vd as aM,Mf as aN,N1 as aO,G1 as aP,z1 as aQ,Vd as aR,xf as aS,_f as aT,Ld as aU,_d as aV,Od as aW,d1 as aX,o1 as aY,pd as aZ,w1 as a_,Fd as aa,g1 as ab,Kd as ac,sp as ad,md as ae,yf as af,T1 as ag,af as ah,L1 as ai,Of as aj,wd as ak,rd as al,Cd as am,Ff as an,Vf as ao,dd as ap,Lf as aq,Q1 as ar,hf as as,O1 as at,a1 as au,Tf as av,Nf as aw,kf as ax,zd as ay,X1 as az,Zd as b,wp as b$,S1 as b0,F1 as b1,Wd as b2,Nd as b3,q1 as b4,Bf as b5,Pf as b6,wf as b7,Rf as b8,Td as b9,yr as bA,lf as bB,ff as bC,zf as bD,Y1 as bE,qf as bF,ap as bG,Id as bH,pa as bI,ya as bJ,ma as bK,va as bL,ga as bM,xa as bN,ka as bO,wa as bP,sa as bQ,tf as bR,np as bS,Br as bT,vc as bU,gc as bV,dp as bW,fp as bX,pp as bY,hp as bZ,yp as b_,t1 as ba,i1 as bb,Ep as bc,Rp as bd,Pp as be,Ap as bf,Ed as bg,h1 as bh,Gd as bi,e1 as bj,v1 as bk,U1 as bl,$1 as bm,V1 as bn,W1 as bo,A1 as bp,cd as bq,Uf as br,s1 as bs,u1 as bt,ep as bu,R1 as bv,C1 as bw,M1 as bx,E1 as by,J1 as bz,tp as c,mp as c0,vp as c1,xp as c2,kp as c3,bp as c4,gp as c5,Sp as c6,Dp as c7,Op as c8,_p as c9,bd as ca,Hd as cb,Ef as cc,Xr as cd,Cr as ce,rn as cf,Er as cg,Df as ch,Cp as ci,Mp as cj,qd as ck,n1 as cl,k1 as cm,K1 as cn,mf as co,$f as d,$d as e,D1 as f,Qd as g,ld as h,id as i,x as j,ad as k,Sd as l,Ad as m,Pd as n,Rd as o,Kf as p,jf as q,f1 as r,Yf as s,xd as t,r1 as u,y1 as v,Bd as w,Jd as x,ef as y,Gf as z};
//# sourceMappingURL=ui-C7wuVsKo.js.map
