import{u as g,B,d as Q,j as e,a as k,r as a,b as T,c as D,e as R,f as U,L as w,g as W}from"./index-BIBtqKXy.js";import{s as S,a as A,M as F}from"./Modal-BCXa5TG8.js";const G=g.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`,H=g.li`
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
`,Y=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`,_=g.img`
  width: 250px;
  height: 250px;
`,J=g.img`
  width: 50px;
  height: 50px;
`,K=g.div`
  display: flex;
  gap: 15px;
`,$=u=>B.success(u,{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),I=g.button`
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

  @media ${Q.tablet} {
    height: 55px;
    /* transform: background-color var(--hover-focus-trans); */
    &:hover,
    &:focus {
      /* background-color: var(--btn-yellow-hover-focus); */
    }
  }
`,V=({chosenPizza:u,toppings:p,chosenToppings:s,setChosenToppings:x})=>{const o=d=>{if(s.length<0)return;const i=p.findIndex(r=>r.id===d),n=p[i];if(s.findIndex(r=>r.id===n.id)!==-1){x([...s.filter(r=>r.id!==n.id)]);return}x([...s,n])};return e.jsx(e.Fragment,{children:Object.keys(u).length&&p.map(({name:d,portion:i,price:n,imageUrl:c,id:r})=>e.jsx("li",{children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",onClick:()=>o(r)}),e.jsx(J,{src:c,alt:d}),e.jsx("p",{children:d}),e.jsx("p",{children:i}),e.jsxs("p",{children:[n,"$"]})]})},`${d}${i}${n}`))})},X=({id:u,setShow:p})=>{const s=k(S),x=k(A),[o,d]=a.useState({}),[i,n]=a.useState([]),[c,r]=a.useState(1),[f,j]=a.useState(0),l=T(),y=D(),{name:m,description:b,type:C,price:v,imageUrl:L,toppings:N}=o,O=i.length>0?i.map(t=>t.name).join(""):"",P=i.reduce((t,h)=>t+h.price,0);a.useEffect(()=>{const t=s.findIndex(h=>h.id===u);d(s[t]),j(s[t].price+P)},[P]);const E=()=>{const t={...o,toppings:i,id:`${o.name}${O}`,quantity:c,price:f},h=x.findIndex(z=>z.id===t.id);if(h!==-1){const z=x[h];debugger;l(R({index:h,quantity:z.quantity+t.quantity,price:(v+P)*(z.quantity+t.quantity)}));return}l(U({...t})),p(!1),$("Pizza successfully added")},q=()=>{r(t=>t+1),j(t=>t+f)},M=()=>{r(t=>t-1),j(t=>t-o.price)};return e.jsxs("div",{style:{width:"300px",height:"300px"},children:[e.jsx("img",{src:L,alt:m}),e.jsx("h2",{children:m}),e.jsx("p",{children:b}),e.jsx("p",{children:C}),e.jsx("p",{children:f}),e.jsx("ul",{children:e.jsx(V,{chosenPizza:o,toppings:N,chosenToppings:i,setChosenToppings:n})}),e.jsx("button",{type:"button",onClick:M,disabled:c<=1,children:"-"}),e.jsx("p",{children:c}),e.jsx("button",{type:"button",onClick:q,disabled:c>=10,children:"+"}),e.jsx("button",{type:"button",onClick:E,children:"Add to cart"}),e.jsx("button",{type:"button",onClick:()=>{p(!1),y("/shopping-list")},children:"Go to Cart"})]})},te=()=>{const[u,p]=a.useState([]),[s,x]=a.useState(w),[o,d]=a.useState(!1),[i,n]=a.useState(!1),c=k(S),[r,f]=a.useState(null);a.useEffect(()=>{(async()=>{p(await W(s))})()},[s]);const j=()=>{s+w>=c.length&&(d(!0),$("You rich the end of the list!")),x(l=>l+w)};return e.jsxs("section",{className:"main-container",children:[c.length>0&&e.jsx(G,{children:u.map(({name:l,description:y,type:m,price:b,imageUrl:C,id:v})=>e.jsxs(H,{children:[e.jsxs(Y,{children:[e.jsx(_,{src:C,alt:l}),e.jsx("h2",{children:l}),e.jsx("p",{children:y})]}),e.jsxs(K,{children:[e.jsx(I,{type:"button",onClick:()=>{f(v),n(!0)},children:"Order"}),e.jsxs("p",{children:[b,"$"]})]})]},`${l}${b}${m}`))}),!o&&e.jsx(I,{onClick:()=>j(),children:"Load More..."}),i&&e.jsx(F,{setShow:n,children:e.jsx(X,{id:r,setShow:n})})]})};export{te as default};
