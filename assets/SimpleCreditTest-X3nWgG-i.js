import{j as t}from"./ui-BZ34e_bG.js";import{r as o}from"./vendor-DG599jyl.js";import{B as u}from"./button-Cm3qqFtR.js";const j=()=>{const[h,s]=o.useState(""),[r,c]=o.useState(!1),l=async()=>{c(!0),s(`Testing...
`);try{s(e=>e+`Step 1: Demo login...
`);const n=await(await fetch("http://localhost:5001/api/auth/demo-login",{method:"POST",headers:{"Content-Type":"application/json"},body:"{}"})).json();s(e=>e+`Login success: ${n.success}
`),s(e=>e+`User ID: ${n.data.user.id}
`);const i=n.data.token;s(e=>e+`Token: ${i.substring(0,30)}...

`),s(e=>e+`Step 2: Get credit balance...
`);const a=await(await fetch("http://localhost:5001/api/credits/balance",{headers:{Authorization:`Bearer ${i}`,"Content-Type":"application/json"}})).json();s(e=>e+`Balance API success: ${a.success}
`),s(e=>e+`Available credits: ${a.data.available_credits}
`),s(e=>e+`Total credits: ${a.data.total_credits}
`),s(e=>e+`Used credits: ${a.data.used_credits}

`),s(e=>e+`Step 3: Test with frontend proxy...
`);const p=await(await fetch("/api/credits/balance",{headers:{Authorization:`Bearer ${i}`,"Content-Type":"application/json"}})).json();s(e=>e+`Proxy API success: ${p.success}
`),s(e=>e+`Proxy available credits: ${p.data.available_credits}

`),parseFloat(a.data.available_credits)>0?(s(e=>e+`✅ SUCCESS: You have credits! Frontend issue confirmed.
`),s(e=>e+`🎯 You should see ${a.data.available_credits} credits in topbar
`)):s(e=>e+`❌ PROBLEM: API returning 0 credits
`)}catch(d){s(n=>n+`❌ ERROR: ${d.message}
`)}c(!1)};return o.useEffect(()=>{l()},[]),t.jsxs("div",{className:"p-6 max-w-4xl mx-auto",children:[t.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Simple Credit Test"}),t.jsx(u,{onClick:l,disabled:r,className:"mb-4",children:r?"Testing...":"Run Test Again"}),t.jsx("div",{className:"bg-gray-100 p-4 rounded-lg",children:t.jsx("pre",{className:"whitespace-pre-wrap text-sm font-mono",children:h})}),t.jsxs("div",{className:"mt-4 p-4 bg-blue-50 rounded-lg",children:[t.jsx("h3",{className:"font-semibold mb-2",children:"What this test does:"}),t.jsxs("ul",{className:"text-sm space-y-1",children:[t.jsx("li",{children:"1. Direct API call to login (bypassing frontend)"}),t.jsx("li",{children:"2. Direct API call to get credits (bypassing frontend)"}),t.jsx("li",{children:"3. Test with frontend proxy"}),t.jsx("li",{children:"4. Compare results"})]})]})]})};export{j as default};
//# sourceMappingURL=SimpleCreditTest-X3nWgG-i.js.map
