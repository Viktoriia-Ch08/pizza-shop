import{u as i,d,r as c,j as o,c as l}from"./index-BFT2dH26.js";const p=i.div`
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
`,x=i.div`
  position: relative;
`,f=i.button`
  position: absolute;
  top: 15px;
  right: 20px;

  /* &:active,
  &:focus,
  &:hover {
    fill: var(--text-special-clr);
  } */
`,u=i.svg`
  width: 20px;
  height: 20px;

  @media ${d.tablet} {
    width: 30px;
    height: 30px;
  }
`,v=({children:e,setShow:r})=>{c.useEffect(()=>{const t=n=>{n.code==="Escape"&&r(!1)};return window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}},[r]);const s=t=>{t.currentTarget===t.target&&r(!1)};return o.jsx(p,{onClick:s,children:o.jsxs("div",{className:"modal-body",children:[o.jsx(x,{children:o.jsx(f,{onClick:()=>{r(!1)},children:o.jsx(u,{fill:"none",viewBox:"0 0 15 15",children:o.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M11.782 4.032a.575.575 0 10-.813-.814L7.5 6.687 4.032 3.218a.575.575 0 00-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 00.814.814L7.5 8.313l3.469 3.469a.575.575 0 00.813-.814L8.313 7.5l3.469-3.468z",clipRule:"evenodd"})})})}),e]})})},a=e=>e.orders;l(a,e=>e.confirmedOrders);const m=l(a,e=>e.order);export{v as M,m as s};
