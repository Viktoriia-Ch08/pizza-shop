import{u as g,c as T,B as D,d as H,j as e,a as k,r as s,b as R,e as U,f as W,g as A,L as w,h as F}from"./index-WyYuQKC_.js";import{s as G,M as Y}from"./selectors-4f1Fpb2A.js";const _=g.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`,J=g.li`
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
`,K=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`,V=g.img`
  width: 250px;
  height: 250px;
`,X=g.img`
  width: 50px;
  height: 50px;
`,Z=g.div`
  display: flex;
  gap: 15px;
`,ee=o=>o.data,I=T(ee,o=>o.pizzas),$=o=>D.success(o,{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),S=g.button`
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

  @media ${H.tablet} {
    height: 55px;
    /* transform: background-color var(--hover-focus-trans); */
    &:hover,
    &:focus {
      /* background-color: var(--btn-yellow-hover-focus); */
    }
  }
`,te=({chosenPizza:o,toppings:p,chosenToppings:i,setChosenToppings:h})=>{const u=d=>{if(i.length<0)return;const n=p.findIndex(r=>r.id===d),a=p[n];if(i.findIndex(r=>r.id===a.id)!==-1){h([...i.filter(r=>r.id!==a.id)]);return}h([...i,a])};return e.jsx(e.Fragment,{children:Object.keys(o).length&&p.map(({name:d,portion:n,price:a,imageUrl:c,id:r})=>e.jsx("li",{children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",onClick:()=>u(r)}),e.jsx(X,{src:c,alt:d}),e.jsx("p",{children:d}),e.jsx("p",{children:n}),e.jsxs("p",{children:[a,"$"]})]})},`${d}${n}${a}`))})},se=({id:o,setShow:p})=>{const i=k(I),h=k(G),[u,d]=s.useState({}),[n,a]=s.useState([]),[c,r]=s.useState(1),[f,y]=s.useState(0),[l,P]=s.useState(0),j=R(),z=U(),{name:m,description:C,type:E,price:L,imageUrl:N,toppings:O}=u,q=n.length>0?n.map(t=>t.name).join(""):"",v=n.reduce((t,x)=>t+x.price,0);s.useEffect(()=>{const t=i.findIndex(x=>x.id===o);d(i[t]),y(i[t].price+v)},[v]),s.useEffect(()=>{P(f*c)},[f,c]);const M=()=>{const t={...u,toppings:n,id:`${u.name}${q}`,quantity:c,price:l},x=h.findIndex(b=>b.id===t.id);if(x!==-1){const b=h[x];j(W({index:x,quantity:b.quantity+t.quantity,price:(L+v)*(b.quantity+t.quantity)}));return}j(A({...t})),p(!1),$("Pizza successfully added")},B=()=>{r(t=>t+1)},Q=()=>{r(t=>t-1)};return e.jsxs("div",{style:{width:"300px",height:"300px"},children:[e.jsx("img",{src:N,alt:m}),e.jsx("h2",{children:m}),e.jsx("p",{children:C}),e.jsx("p",{children:E}),e.jsx("p",{children:l}),e.jsx("ul",{children:e.jsx(te,{chosenPizza:u,toppings:O,chosenToppings:n,setChosenToppings:a})}),e.jsx("button",{type:"button",onClick:Q,disabled:c<=1,children:"-"}),e.jsx("p",{children:c}),e.jsx("button",{type:"button",onClick:B,disabled:c>=10,children:"+"}),e.jsx("button",{type:"button",onClick:M,children:"Add to cart"}),e.jsx("button",{type:"button",onClick:()=>{p(!1),z("/shopping-list")},children:"Go to Cart"})]})},ae=()=>{const[o,p]=s.useState([]),[i,h]=s.useState(w),[u,d]=s.useState(!1),[n,a]=s.useState(!1),c=k(I),[r,f]=s.useState(null);s.useEffect(()=>{(async()=>{p(await F(i))})()},[i]);const y=()=>{i+w>=c.length&&(d(!0),$("You rich the end of the list!")),h(l=>l+w)};return e.jsxs("section",{className:"main-container",children:[c.length>0&&e.jsx(_,{children:o.map(({name:l,description:P,type:j,price:z,imageUrl:m,id:C})=>e.jsxs(J,{children:[e.jsxs(K,{children:[e.jsx(V,{src:m,alt:l}),e.jsx("h2",{children:l}),e.jsx("p",{children:P})]}),e.jsxs(Z,{children:[e.jsx(S,{type:"button",onClick:()=>{f(C),a(!0)},children:"Order"}),e.jsxs("p",{children:[z,"$"]})]})]},`${l}${z}${j}`))}),!u&&e.jsx(S,{onClick:()=>y(),children:"Load More..."}),n&&e.jsx(Y,{setShow:a,children:e.jsx(se,{id:r,setShow:a})})]})};export{ae as default};
