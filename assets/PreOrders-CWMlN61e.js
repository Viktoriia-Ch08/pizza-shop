import{a as $,s as m,j as r,n as s,i as b}from"./index-WyYuQKC_.js";const g=()=>{const n=$(m);return r.jsx(r.Fragment,{children:n?r.jsx("ul",{children:n.map(({data:l,id:i,phoneNumber:j,order:h})=>r.jsx("li",{children:r.jsxs("div",{children:[r.jsx("p",{children:i}),r.jsx("p",{children:l}),r.jsx("p",{children:j}),r.jsx("ul",{children:h.map(({name:e,description:t,type:c,price:o,imageUrl:a,toppings:d,id:u,quantity:p})=>r.jsxs("li",{children:[r.jsx("img",{src:a,alt:e}),r.jsx("h2",{children:e}),r.jsx("p",{children:t}),r.jsx("p",{children:c}),r.jsx("p",{children:o}),r.jsx("p",{children:p}),r.jsx("ul",{children:d&&d.map(x=>r.jsx("li",{children:r.jsx("p",{children:x.name})},`${u}${s()}${x.name}`))})]},`${e}${c}${s()}`))})]})},`${i}${l}${s()}`))}):r.jsxs("div",{children:[r.jsx("p",{children:"You didn't order pizza before. You can look at our catalog by clicking on the button below:"}),r.jsx("button",{children:r.jsx(b,{to:"/",children:"Catalog"})})]})})};export{g as default};
