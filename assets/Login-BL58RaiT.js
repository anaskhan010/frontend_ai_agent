import{j as e,H as y,I as j}from"./ui-CZ40mCLE.js";import{t as v,z as o,F as _,a as c,b as d,c as m,d as x,e as u}from"./index-n8xAcpER.js";import{a as N,t as i,u as k,I as h,B as S}from"./index-BXZmpi2n.js";import{A as F}from"./AuthCard-B2nox7UY.js";import{u as I}from"./resolvers-BzctgYTE.js";import{u as E,L}from"./router-BnJytTjr.js";import{r as p}from"./vendor-DG599jyl.js";import"./query-Dkjx6fBT.js";const z=async a=>{try{const r=await N.post("/api/users/login",a);if(r.status===200)return i.success(r.data.message),r.data.data;throw new Error("Login failed")}catch(r){throw r.response&&r.response.data&&r.response.data.message?i.error(r.response.data.message):i.error("An unexpected error occurred."),r}},W=o.object({email:o.string().email({message:"Invalid email address"}),password:o.string().min(4,{message:"Password must be at least 6 characters"}).max(100)}),R=()=>{const[a,r]=p.useState(!1),[l,f]=p.useState(!1),g=E(),{login:w}=k(),n=I({resolver:v(W),defaultValues:{email:"",password:""}}),b=async t=>{r(!0);try{const s=await z(t);console.log("Token:",s),s&&(w(s),g("/"))}catch(s){console.error("Login failed:",s)}finally{r(!1)}};return e.jsx(F,{children:e.jsxs(_,{...n,children:[e.jsx("h1",{className:`\r
      text-3xl font-bold tracking-wide mb-2\r
      text-white\r
      drop-shadow-[0_0_12px_rgba(255,200,0,0.6)]\r
    `,children:"Welcome Back"}),e.jsx("p",{className:`\r
      mb-6 text-sm\r
      text-white/70\r
    `,children:"Sign in to your account to continue"}),e.jsxs("form",{onSubmit:n.handleSubmit(b),className:"space-y-6",children:[e.jsx(c,{control:n.control,name:"email",render:({field:t})=>e.jsxs(d,{children:[e.jsx(m,{className:`\r
              text-sm font-medium\r
              text-white/80\r
            `,children:"Email"}),e.jsx(x,{children:e.jsx(h,{placeholder:"Enter your email",...t,className:`\r
                 pr-12\r
        bg-white/10 backdrop-blur-xl\r
        border border-yellow-400/30\r
        text-white placeholder:text-white/40\r
        rounded-lg\r
        shadow-[inset_0_0_10px_rgba(255,200,0,0.15)]\r
        focus:border-yellow-400\r
        focus:ring-2 focus:ring-yellow-400/40\r
        transition-all duration-300\r
              `})}),e.jsx(u,{className:"text-red-400 text-xs"})]})}),e.jsx(c,{control:n.control,name:"password",render:({field:t})=>e.jsxs(d,{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(m,{className:`\r
                text-sm font-medium\r
                text-white/80\r
              `,children:"Password"}),e.jsx(L,{to:"/forgot-password",className:`\r
                text-xs text-yellow-300\r
                hover:text-yellow-200\r
                hover:underline\r
                transition\r
              `,children:"Forgot password?"})]}),e.jsx(x,{children:e.jsxs("div",{className:"relative",children:[e.jsx(h,{type:l?"text":"password",placeholder:"Enter your password",...t,className:`\r
        pr-12\r
        bg-white/10 backdrop-blur-xl\r
        border border-yellow-400/30\r
        text-white placeholder:text-white/40\r
        rounded-lg\r
        shadow-[inset_0_0_10px_rgba(255,200,0,0.15)]\r
        focus:border-yellow-400\r
        focus:ring-2 focus:ring-yellow-400/40\r
        transition-all duration-300\r
      `}),e.jsx("button",{type:"button",onClick:()=>f(s=>!s),className:`\r
        absolute right-3 top-1/2 -translate-y-1/2\r
        text-white/60 hover:text-yellow-400\r
        transition\r
      `,tabIndex:-1,children:l?e.jsx(y,{size:18}):e.jsx(j,{size:18})})]})}),e.jsx(u,{className:"text-red-400 text-xs"})]})}),e.jsxs(S,{type:"submit",disabled:a,className:`\r
    relative w-full mt-4 overflow-hidden rounded-xl\r
    text-white font-semibold tracking-wide\r
    backdrop-blur-xl bg-white/10\r
    border border-yellow-400/40\r
    shadow-[0_0_10px_rgba(255,160,0,0.6)]\r
    hover:shadow-[0_0_10px_rgba(255,120,0,0.9)]\r
    transition-all duration-300\r
    active:scale-[0.98]\r
  `,children:[e.jsx("span",{className:"absolute inset-0 animate-fireWave opacity-90",style:{background:`
        linear-gradient(
          120deg,
          #ffcc00,
          #ff9900,
          #ff3300,
          #ff9900,
          #ffcc00
        )
      `,backgroundSize:"300% 300%"}}),e.jsx("span",{className:"absolute inset-0 bg-gradient-to-b from-white/30 to-transparent opacity-40"}),e.jsx("span",{className:"relative z-10 py-3 block",children:a?"Signing in...":"Sign In"}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
        @keyframes fireWave {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-fireWave {
          animation: fireWave 2.5s linear infinite;
        }
      `}})]})]})]})})};export{R as default};
//# sourceMappingURL=Login-BL58RaiT.js.map
