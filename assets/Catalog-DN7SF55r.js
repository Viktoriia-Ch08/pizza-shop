import{u as r,B as E,d as y,r as l,j as e,a as z,b as I,c as P,n as B,L as v,g as $}from"./index-D3R2Ikyn.js";import{s as C}from"./selectors-NQ0_fCvP.js";const M=r.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`,N=r.li`
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
`,O=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`,S=r.img`
  width: 250px;
  height: 250px;
`,T=r.img`
  width: 50px;
  height: 50px;
`,R=r.div`
  display: flex;
  gap: 15px;
`,k=c=>E.success(c,{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),w=r.button`
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

  @media ${y.tablet} {
    height: 55px;
    /* transform: background-color var(--hover-focus-trans); */
    &:hover,
    &:focus {
      /* background-color: var(--btn-yellow-hover-focus); */
    }
  }
`,D=r.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10000;
  backdrop-filter: blur(7px);
  overflow: auto;
  transition: opacity 300ms linear, visibility 300ms linear;

  .modal-body {
    position: absolute;
    top: 50%;
    left: 50%;
    max-height: 90%;
    overflow-y: auto;
    transform: translate(-50%, -50%);
    border-radius: 12px;
    background-color: white;
  }
`,U=r.div`
  position: relative;
`,W=r.button`
  position: absolute;
  top: 15px;
  right: 20px;

  /* &:active,
  &:focus,
  &:hover {
    fill: var(--text-special-clr);
  } */
`,A=r.svg`
  width: 20px;
  height: 20px;

  @media ${y.tablet} {
    width: 30px;
    height: 30px;
  }
`,F=({children:c,setShow:i})=>{l.useEffect(()=>{const t=h=>{h.code==="Escape"&&i(!1)};return window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}},[i]);const s=t=>{t.currentTarget===t.target&&i(!1)};return e.jsx(D,{onClick:s,children:e.jsxs("div",{className:"modal-body",children:[e.jsx(U,{children:e.jsx(W,{onClick:()=>{i(!1)},children:e.jsx(A,{fill:"none",viewBox:"0 0 15 15",children:e.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M11.782 4.032a.575.575 0 10-.813-.814L7.5 6.687 4.032 3.218a.575.575 0 00-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 00.814.814L7.5 8.313l3.469 3.469a.575.575 0 00.813-.814L8.313 7.5l3.469-3.468z",clipRule:"evenodd"})})})}),c]})})},H=({chosenPizza:c,toppings:i,chosenToppings:s,setChosenToppings:t})=>{const h=a=>{if(s.length<0)return;const d=i.findIndex(o=>o.id===a),n=i[d];if(s.findIndex(o=>o.id===n.id)!==-1){t([...s.filter(o=>o.id!==n.id)]);return}t([...s,n])};return e.jsx(e.Fragment,{children:Object.keys(c).length&&i.map(({name:a,portion:d,price:n,imageUrl:p,id:o})=>e.jsx("li",{children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",onClick:()=>h(o)}),e.jsx(T,{src:p,alt:a}),e.jsx("p",{children:a}),e.jsx("p",{children:d}),e.jsxs("p",{children:[n,"$"]})]})},`${a}${d}${n}`))})},K=({id:c,setShow:i})=>{const s=z(C),[t,h]=l.useState({}),[a,d]=l.useState([]),n=I(),{name:p,description:o,type:f,price:g,imageUrl:x,toppings:j}=t;l.useEffect(()=>{const u=s.findIndex(b=>b.id===c);h(s[u])},[]);const m=()=>{n(P({...t,toppings:a,id:B()})),i(!1),k("Pizza successfully added")};return e.jsxs("div",{style:{width:"300px",height:"300px"},children:[e.jsx("img",{src:x,alt:p}),e.jsx("h2",{children:p}),e.jsx("p",{children:o}),e.jsx("p",{children:f}),e.jsx("p",{children:g}),e.jsx("ul",{children:e.jsx(H,{chosenPizza:t,toppings:j,chosenToppings:a,setChosenToppings:d})}),e.jsx("button",{type:"button",onClick:m,children:"Add to cart"})]})},q=()=>{const[c,i]=l.useState([]),[s,t]=l.useState(v),[h,a]=l.useState(!1),[d,n]=l.useState(!1),p=z(C),[o,f]=l.useState(null);l.useEffect(()=>{(async()=>{i(await $(s))})()},[s]);const g=()=>{s+v>=p.length&&(a(!0),k("You rich the end of the list!")),t(x=>x+v)};return e.jsxs("section",{className:"main-container",children:[p.length>0&&e.jsx(M,{children:c.map(({name:x,description:j,type:m,price:u,imageUrl:b,id:L})=>e.jsxs(N,{children:[e.jsxs(O,{children:[e.jsx(S,{src:b,alt:x}),e.jsx("h2",{children:x}),e.jsx("p",{children:j})]}),e.jsxs(R,{children:[e.jsx(w,{type:"button",onClick:()=>{f(L),n(!0)},children:"Order"}),e.jsxs("p",{children:[u,"$"]})]})]},`${x}${u}${m}`))}),!h&&e.jsx(w,{onClick:()=>g(),children:"Load More..."}),d&&e.jsx(F,{setShow:n,children:e.jsx(K,{id:o,setShow:n})})]})};export{q as default};
