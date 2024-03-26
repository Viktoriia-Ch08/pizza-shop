import{u as t,c as j,B as y,d as u,r as a,j as e,L as c,a as C,g as k}from"./index-TKmVO1Sz.js";const L=t.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`,z=t.li`
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
`,B=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`,E=t.img`
  width: 250px;
  height: 250px;
`;t.img`
  width: 50px;
  height: 50px;
`;const N=t.div`
  display: flex;
  gap: 15px;
`,M=s=>s.data,$=j(M,s=>s.pizzas),I=s=>y.success(s,{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),x=t.button`
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

  @media ${u.tablet} {
    height: 55px;
    /* transform: background-color var(--hover-focus-trans); */
    &:hover,
    &:focus {
      /* background-color: var(--btn-yellow-hover-focus); */
    }
  }
`,P=t.div`
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
`,S=t.div`
  position: relative;
`,O=t.button`
  position: absolute;
  top: 15px;
  right: 20px;

  /* &:active,
  &:focus,
  &:hover {
    fill: var(--text-special-clr);
  } */
`,T=t.svg`
  width: 20px;
  height: 20px;

  @media ${u.tablet} {
    width: 30px;
    height: 30px;
  }
`,D=({children:s,setShow:i})=>{a.useEffect(()=>{const o=l=>{l.code==="Escape"&&i(!1)};return window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)}},[i]);const n=o=>{o.currentTarget===o.target&&i(!1)};return e.jsx(P,{onClick:n,children:e.jsxs("div",{className:"modal-body",children:[e.jsx(S,{children:e.jsx(O,{onClick:()=>{i(!1)},children:e.jsx(T,{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"close-btn",children:e.jsx("path",{d:"M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12 5.293 6.707a1 1 0 0 1 0-1.414z"})})})}),s]})})},R=()=>{const[s,i]=a.useState([]),[n,o]=a.useState(c),[l,f]=a.useState(!1),[g,d]=a.useState(!1),p=C($);a.useEffect(()=>{(async()=>{i(await k(n))})()},[n]);const m=()=>{n+c>=p.length&&(f(!0),I("You rich the end of the list!")),o(r=>r+c)};return e.jsxs("section",{className:"main-container",children:[p.length>0&&e.jsx(L,{children:s.map(({name:r,description:b,type:v,price:h,imageUrl:w})=>e.jsxs(z,{children:[e.jsxs(B,{children:[e.jsx(E,{src:w,alt:r}),e.jsx("p",{children:r}),e.jsx("p",{children:b})]}),e.jsxs(N,{children:[e.jsx(x,{type:"button",onClick:()=>d(!0),children:"Order"}),e.jsxs("p",{children:[h,"$"]})]})]},`${r}${h}${v}`))}),!l&&e.jsx(x,{onClick:()=>m(),children:"Load More..."}),g&&e.jsx(D,{setShow:d,children:e.jsx("div",{children:"Hello"})})]})};export{R as default};
