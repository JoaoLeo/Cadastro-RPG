(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[178],{6890:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/classes",function(){return r(6689)}])},879:function(e,s,r){"use strict";r.d(s,{Z:function(){return g}});var o=r(5893);r(4494);var n=r(5738),t=r(682),a=r(5213),c=r(2585),i=r(3990),l=r(9583),d=r(7294),u=r(5005),x=r(6212),h=r(1649),j=()=>{let[e,s]=(0,d.useState)(!1),r=()=>s(!0),[n,t]=(0,d.useState)({github:""});return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{onClick:()=>{n.github=(0,o.jsx)("a",{href:"https://github.com/JoaoLeo",target:"_blank",children:" JoaoLeo "}),t(n),r()},children:(0,o.jsxs)(u.Z,{style:{backgroundColor:"#708090",color:"black"},children:[" ",(0,o.jsx)(h.KQH,{})," Dev: Jo\xe3o Leonardo"]})}),(0,o.jsxs)(x.Z,{show:e,onHide:()=>s(!1),children:[(0,o.jsx)(x.Z.Header,{closeButton:!0,children:(0,o.jsx)(x.Z.Title,{children:"Contatos"})}),(0,o.jsxs)(x.Z.Body,{children:[(0,o.jsxs)("h5",{children:[" Github: ",n.github," "]}),(0,o.jsx)("p",{children:"Projeto final da mat\xe9ria de constru\xe7\xe3o de frontend que consiste em cruds no localstorage de registros baseados em jogos de RPG como: Classe, Jogador, Personagem, Poderes e Po\xe7\xf5es."})]})]})]})})};let f={backgroundColor:"#695757",fontSize:"25px"};var g=()=>(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(n.Z,{style:f,className:"mb-4",children:(0,o.jsxs)(t.Z,{children:[(0,o.jsxs)(n.Z.Brand,{style:f,href:"/",children:[" ",(0,o.jsx)(c.orY,{})," Cadastro-RPG "]}),(0,o.jsxs)(a.Z,{className:"me-auto",children:[(0,o.jsxs)(a.Z.Link,{href:"/classes",children:[" ",(0,o.jsx)(i.jvR,{}),"  Classes "]}),(0,o.jsxs)(a.Z.Link,{href:"/jogadores",children:[" ",(0,o.jsx)(c.XDj,{})," Jogadores"]}),(0,o.jsxs)(a.Z.Link,{href:"/personagens",children:[" ",(0,o.jsx)(l.wMM,{}),"   Personagens "]}),(0,o.jsxs)(a.Z.Link,{href:"/poderes",children:[" ",(0,o.jsx)(c.Wzo,{}),"  Poderes "]}),(0,o.jsxs)(a.Z.Link,{href:"/pocoes",children:[" ",(0,o.jsx)(c.WMy,{}),"  Po\xe7\xf5es "]})]}),(0,o.jsx)(n.Z.Toggle,{}),(0,o.jsx)(n.Z.Collapse,{className:"justify-content-end",children:(0,o.jsxs)(n.Z.Text,{children:[" ",(0,o.jsx)(j,{})," "]})})]})})})},6689:function(e,s,r){"use strict";r.r(s);var o=r(5893),n=r(879),t=r(8401),a=r(7545),c=r(3719),i=r(1664),l=r.n(i),d=r(7294),u=r(682),x=r(5005),h=r(8182),j=r(8193),f=r(7106);s.default=()=>{let[e,s]=(0,d.useState)([]);function r(){return JSON.parse(window.localStorage.getItem("classes"))||[]}return(0,d.useEffect)(()=>{s(r())},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.Z,{}),(0,o.jsx)(n.Z,{}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)(l(),{href:"/classes/form",className:"mb-2",children:(0,o.jsxs)(x.Z,{style:c.Z.buttonPlus,className:"mb-2",children:[(0,o.jsx)(j.Lfi,{}),"Criar classe"]})}),e.map((e,n)=>(0,o.jsxs)(h.Z,{style:a.Z,children:[(0,o.jsxs)(h.Z.Header,{as:"h5",children:[" ",e.nome," "]}),(0,o.jsxs)(h.Z.Body,{children:[(0,o.jsxs)(h.Z.Title,{children:["  Poder Principal: ",e.poder," "]}),(0,o.jsxs)(h.Z.Title,{children:["  Tipo de combate: ",e.combate]}),(0,o.jsx)(l(),{href:"/classes/"+n,children:(0,o.jsx)(f.BOY,{size:25,className:"text-light"})}),(0,o.jsx)(f.ZGY,{size:25,onClick:()=>(function(e){if(confirm("Deseja realmente excluir o registro?")){let o=r();o.splice(e,1),window.localStorage.setItem("classes",JSON.stringify(o)),s(o)}})(n),className:"text-danger me-2"})]})]}))]})]})}},8401:function(e,s,r){"use strict";var o=r(2729),n=r(9521);function t(){let e=(0,o._)(["\n\n  * \n    body{\n    background-image: url(\"https://i.pinimg.com/originals/7d/78/81/7d78810384bd55034d416e196c4208cc.jpg\");\n    background-size: cover;\n    font-size: 17px;\n    font-family: 'Cinzel Decorative', cursive;\n  }\n  h1 {\n    font-size: 50px;\n    color: white;\n    text-align: center;\n  }\n\n"]);return t=function(){return e},e}s.Z=(0,n.vJ)(t())},7545:function(e,s,r){"use strict";r(7294),s.Z={borderRadius:"10px",backgroundColor:"#708090",height:"100%",width:"100%",color:"black",marginBottom:"5px",buttonSave:{backgroundColor:"#228B22",color:"black"}}},3719:function(e,s,r){"use strict";r(7294),s.Z={borderRadius:"10px",backgroundColor:"#807171",height:"auto",width:"auto",color:"black",buttonSave:{backgroundColor:"#228B22",color:"black"},buttonBack:{backgroundColor:"#708090",color:"black"},buttonPlus:{backgroundColor:"#B0E0E6",color:"black",height:"auto",fontSize:"14px",width:"auto"}}},8182:function(e,s,r){"use strict";r.d(s,{Z:function(){return C}});var o=r(4184),n=r.n(o),t=r(7294),a=r(6792),c=r(6611),i=r(9602),l=r(5893);let d=t.forwardRef(({bsPrefix:e,className:s,variant:r,as:o="img",...t},c)=>{let i=(0,a.vE)(e,"card-img");return(0,l.jsx)(o,{ref:c,className:n()(r?`${i}-${r}`:i,s),...t})});d.displayName="CardImg";var u=r(9059);let x=t.forwardRef(({bsPrefix:e,className:s,as:r="div",...o},c)=>{let i=(0,a.vE)(e,"card-header"),d=(0,t.useMemo)(()=>({cardHeaderBsPrefix:i}),[i]);return(0,l.jsx)(u.Z.Provider,{value:d,children:(0,l.jsx)(r,{ref:c,...o,className:n()(s,i)})})});x.displayName="CardHeader";let h=(0,i.Z)("h5"),j=(0,i.Z)("h6"),f=(0,c.Z)("card-body"),g=(0,c.Z)("card-title",{Component:h}),m=(0,c.Z)("card-subtitle",{Component:j}),b=(0,c.Z)("card-link",{Component:"a"}),Z=(0,c.Z)("card-text",{Component:"p"}),p=(0,c.Z)("card-footer"),k=(0,c.Z)("card-img-overlay"),v=t.forwardRef(({bsPrefix:e,className:s,bg:r,text:o,border:t,body:c=!1,children:i,as:d="div",...u},x)=>{let h=(0,a.vE)(e,"card");return(0,l.jsx)(d,{ref:x,...u,className:n()(s,h,r&&`bg-${r}`,o&&`text-${o}`,t&&`border-${t}`),children:c?(0,l.jsx)(f,{children:i}):i})});v.displayName="Card";var C=Object.assign(v,{Img:d,Title:g,Subtitle:m,Body:f,Link:b,Text:Z,Header:x,Footer:p,ImgOverlay:k})}},function(e){e.O(0,[774,980,445,866,609,942,907,617,666,888,179],function(){return e(e.s=6890)}),_N_E=e.O()}]);