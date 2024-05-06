import{u as g,c as B,B as Q,d as T,j as e,a as k,r as c,b as D,e as R,f as U,g as W,L as w,h as A}from"./index-BFT2dH26.js";import{s as F,M as G}from"./selectors-DkOj0MYO.js";const H=g.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`,Y=g.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 500px;
  width: calc((100% - 40px) / 3);
  padding: 10px;
  border: 1px solid red;
  border-radius: 12px;
  overflow: hidden;
`,_=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`,J=g.img`
  width: 250px;
  height: 250px;
`,K=g.img`
  width: 50px;
  height: 50px;
`,V=g.div`
  display: flex;
  gap: 15px;
`,X=r=>r.data,S=B(X,r=>r.pizzas),$=r=>Q.success(r,{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),I=g.button`
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 40px;
  border-radius: 12px;
  font-size: 20px;
  font-weight: var(--font-weight-bold);
  /* color: var(--text-clr-black); */
  background-color: green;
  &:active {
    /* background-color: var(--btn-yellow-hover-focus); */
  }

  @media ${T.tablet} {
    height: 55px;
    /* transform: background-color var(--hover-focus-trans); */
    &:hover,
    &:focus {
      /* background-color: var(--btn-yellow-hover-focus); */
    }
  }
`,Z=({chosenPizza:r,toppings:u,chosenToppings:s,setChosenToppings:x})=>{const d=l=>{if(s.length<0)return;const i=u.findIndex(a=>a.id===l),n=u[i];if(s.findIndex(a=>a.id===n.id)!==-1){x([...s.filter(a=>a.id!==n.id)]);return}x([...s,n])};return e.jsx(e.Fragment,{children:Object.keys(r).length&&u.map(({name:l,portion:i,price:n,imageUrl:o,id:a})=>e.jsx("li",{children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",onClick:()=>d(a)}),e.jsx(K,{src:o,alt:l}),e.jsx("p",{children:l}),e.jsx("p",{children:i}),e.jsxs("p",{children:[n,"$"]})]})},`${l}${i}${n}`))})},ee=({id:r,setShow:u})=>{const s=k(S),x=k(F),[d,l]=c.useState({}),[i,n]=c.useState([]),[o,a]=c.useState(1),[f,j]=c.useState(0),p=D(),y=R(),{name:m,description:b,type:C,price:v,imageUrl:L,toppings:N}=d,O=i.length>0?i.map(t=>t.name).join(""):"",P=i.reduce((t,h)=>t+h.price,0);c.useEffect(()=>{const t=s.findIndex(h=>h.id===r);l(s[t]),j(s[t].price+P)},[P]);const E=()=>{const t={...d,toppings:i,id:`${d.name}${O}`,quantity:o,price:f},h=x.findIndex(z=>z.id===t.id);if(h!==-1){const z=x[h];debugger;p(U({index:h,quantity:z.quantity+t.quantity,price:(v+P)*(z.quantity+t.quantity)}));return}p(W({...t})),u(!1),$("Pizza successfully added")},q=()=>{a(t=>t+1),j(t=>t+f)},M=()=>{a(t=>t-1),j(t=>t-d.price)};return e.jsxs("div",{style:{width:"300px",height:"300px"},children:[e.jsx("img",{src:L,alt:m}),e.jsx("h2",{children:m}),e.jsx("p",{children:b}),e.jsx("p",{children:C}),e.jsx("p",{children:f}),e.jsx("ul",{children:e.jsx(Z,{chosenPizza:d,toppings:N,chosenToppings:i,setChosenToppings:n})}),e.jsx("button",{type:"button",onClick:M,disabled:o<=1,children:"-"}),e.jsx("p",{children:o}),e.jsx("button",{type:"button",onClick:q,disabled:o>=10,children:"+"}),e.jsx("button",{type:"button",onClick:E,children:"Add to cart"}),e.jsx("button",{type:"button",onClick:()=>{u(!1),y("/shopping-list")},children:"Go to Cart"})]})},ie=()=>{const[r,u]=c.useState([]),[s,x]=c.useState(w),[d,l]=c.useState(!1),[i,n]=c.useState(!1),o=k(S),[a,f]=c.useState(null);c.useEffect(()=>{(async()=>{u(await A(s))})()},[s]);const j=()=>{s+w>=o.length&&(l(!0),$("You rich the end of the list!")),x(p=>p+w)};return e.jsxs("section",{className:"main-container",children:[o.length>0&&e.jsx(H,{children:r.map(({name:p,description:y,type:m,price:b,imageUrl:C,id:v})=>e.jsxs(Y,{children:[e.jsxs(_,{children:[e.jsx(J,{src:C,alt:p}),e.jsx("h2",{children:p}),e.jsx("p",{children:y})]}),e.jsxs(V,{children:[e.jsx(I,{type:"button",onClick:()=>{f(v),n(!0)},children:"Order"}),e.jsxs("p",{children:[b,"$"]})]})]},`${p}${b}${m}`))}),!d&&e.jsx(I,{onClick:()=>j(),children:"Load More..."}),i&&e.jsx(G,{setShow:n,children:e.jsx(ee,{id:a,setShow:n})})]})};export{ie as default};
