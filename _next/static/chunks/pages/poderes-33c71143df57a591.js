(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[74],{4638:function(e,r,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/poderes",function(){return s(5961)}])},879:function(e,r,s){"use strict";s.d(r,{Z:function(){return g}});var o=s(5893);s(4494);var n=s(5738),t=s(682),a=s(5213),i=s(2585),c=s(3990),l=s(9583),d=s(7294),u=s(5005),x=s(6212),h=s(1649),j=()=>{let[e,r]=(0,d.useState)(!1),s=()=>r(!0),[n,t]=(0,d.useState)({github:""});return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{onClick:()=>{n.github=(0,o.jsx)("a",{href:"https://github.com/JoaoLeo",target:"_blank",children:" JoaoLeo "}),t(n),s()},children:(0,o.jsxs)(u.Z,{style:{backgroundColor:"#708090",color:"black"},children:[" ",(0,o.jsx)(h.KQH,{})," Dev: Jo\xe3o Leonardo"]})}),(0,o.jsxs)(x.Z,{show:e,onHide:()=>r(!1),children:[(0,o.jsx)(x.Z.Header,{closeButton:!0,children:(0,o.jsx)(x.Z.Title,{children:"Contatos"})}),(0,o.jsxs)(x.Z.Body,{children:[(0,o.jsxs)("h5",{children:[" Github: ",n.github," "]}),(0,o.jsx)("p",{children:"Projeto final da mat\xe9ria de constru\xe7\xe3o de frontend que consiste em cruds no localstorage de registros baseados em jogos de RPG como: Classe, Jogador, Personagem, Poderes e Po\xe7\xf5es."})]})]})]})})};let f={backgroundColor:"#695757",fontSize:"25px"};var g=()=>(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(n.Z,{style:f,className:"mb-4",children:(0,o.jsxs)(t.Z,{children:[(0,o.jsxs)(n.Z.Brand,{style:f,href:"/",children:[" ",(0,o.jsx)(i.orY,{})," Cadastro-RPG "]}),(0,o.jsxs)(a.Z,{className:"me-auto",children:[(0,o.jsxs)(a.Z.Link,{href:"/classes",children:[" ",(0,o.jsx)(c.jvR,{}),"  Classes "]}),(0,o.jsxs)(a.Z.Link,{href:"/jogadores",children:[" ",(0,o.jsx)(i.XDj,{})," Jogadores"]}),(0,o.jsxs)(a.Z.Link,{href:"/personagens",children:[" ",(0,o.jsx)(l.wMM,{}),"   Personagens "]}),(0,o.jsxs)(a.Z.Link,{href:"/poderes",children:[" ",(0,o.jsx)(i.Wzo,{}),"  Poderes "]}),(0,o.jsxs)(a.Z.Link,{href:"/pocoes",children:[" ",(0,o.jsx)(i.WMy,{}),"  Po\xe7\xf5es "]})]}),(0,o.jsx)(n.Z.Toggle,{}),(0,o.jsx)(n.Z.Collapse,{className:"justify-content-end",children:(0,o.jsxs)(n.Z.Text,{children:[" ",(0,o.jsx)(j,{})," "]})})]})})})},5961:function(e,r,s){"use strict";s.r(r);var o=s(5893),n=s(879),t=s(8401),a=s(7545),i=s(3719),c=s(1664),l=s.n(c),d=s(7294),u=s(682),x=s(5005),h=s(8182),j=s(8193),f=s(7106);r.default=()=>{let[e,r]=(0,d.useState)([]);function s(){return JSON.parse(window.localStorage.getItem("poderes"))||[]}return(0,d.useEffect)(()=>{r(s())},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.Z,{}),(0,o.jsx)(n.Z,{}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)(l(),{href:"/poderes/form",className:"mb-2",children:(0,o.jsxs)(x.Z,{style:i.Z.buttonPlus,className:"mb-2",children:[(0,o.jsx)(j.Lfi,{}),"Criar poder"]})}),e.map((e,n)=>(0,o.jsxs)(h.Z,{style:a.Z,children:[(0,o.jsxs)(h.Z.Header,{as:"h5",children:[" ",e.descricao]}),(0,o.jsxs)(h.Z.Body,{children:[(0,o.jsxs)(h.Z.Title,{children:[" Elemento: ",e.elemento," "]}),(0,o.jsxs)(h.Z.Title,{children:[" Dano: ",e.dano," "]}),(0,o.jsx)(l(),{href:"/poderes/"+n,children:(0,o.jsx)(f.BOY,{size:25,className:"text-light"})}),(0,o.jsx)(f.ZGY,{size:25,onClick:()=>(function(e){if(confirm("Deseja realmente excluir o registro?")){let o=s();o.splice(e,1),window.localStorage.setItem("poderes",JSON.stringify(o)),r(o)}})(n),className:"text-danger me-2"})]})]}))]})]})}},8401:function(e,r,s){"use strict";var o=s(2729),n=s(9521);function t(){let e=(0,o._)(["\n\n  * \n    body{\n    background-image: url(\"https://i.pinimg.com/originals/7d/78/81/7d78810384bd55034d416e196c4208cc.jpg\");\n    background-size: cover;\n    font-size: 17px;\n    font-family: 'Cinzel Decorative', cursive;\n  }\n  h1 {\n    font-size: 50px;\n    color: white;\n    text-align: center;\n  }\n\n"]);return t=function(){return e},e}r.Z=(0,n.vJ)(t())},7545:function(e,r,s){"use strict";s(7294),r.Z={borderRadius:"10px",backgroundColor:"#708090",height:"100%",width:"100%",color:"black",marginBottom:"5px",buttonSave:{backgroundColor:"#228B22",color:"black"}}},3719:function(e,r,s){"use strict";s(7294),r.Z={borderRadius:"10px",backgroundColor:"#807171",height:"auto",width:"auto",color:"black",buttonSave:{backgroundColor:"#228B22",color:"black"},buttonBack:{backgroundColor:"#708090",color:"black"},buttonPlus:{backgroundColor:"#B0E0E6",color:"black",height:"auto",fontSize:"14px",width:"auto"}}},8182:function(e,r,s){"use strict";s.d(r,{Z:function(){return C}});var o=s(4184),n=s.n(o),t=s(7294),a=s(6792),i=s(6611),c=s(9602),l=s(5893);let d=t.forwardRef(({bsPrefix:e,className:r,variant:s,as:o="img",...t},i)=>{let c=(0,a.vE)(e,"card-img");return(0,l.jsx)(o,{ref:i,className:n()(s?`${c}-${s}`:c,r),...t})});d.displayName="CardImg";var u=s(9059);let x=t.forwardRef(({bsPrefix:e,className:r,as:s="div",...o},i)=>{let c=(0,a.vE)(e,"card-header"),d=(0,t.useMemo)(()=>({cardHeaderBsPrefix:c}),[c]);return(0,l.jsx)(u.Z.Provider,{value:d,children:(0,l.jsx)(s,{ref:i,...o,className:n()(r,c)})})});x.displayName="CardHeader";let h=(0,c.Z)("h5"),j=(0,c.Z)("h6"),f=(0,i.Z)("card-body"),g=(0,i.Z)("card-title",{Component:h}),m=(0,i.Z)("card-subtitle",{Component:j}),b=(0,i.Z)("card-link",{Component:"a"}),Z=(0,i.Z)("card-text",{Component:"p"}),p=(0,i.Z)("card-footer"),k=(0,i.Z)("card-img-overlay"),v=t.forwardRef(({bsPrefix:e,className:r,bg:s,text:o,border:t,body:i=!1,children:c,as:d="div",...u},x)=>{let h=(0,a.vE)(e,"card");return(0,l.jsx)(d,{ref:x,...u,className:n()(r,h,s&&`bg-${s}`,o&&`text-${o}`,t&&`border-${t}`),children:i?(0,l.jsx)(f,{children:c}):c})});v.displayName="Card";var C=Object.assign(v,{Img:d,Title:g,Subtitle:m,Body:f,Link:b,Text:Z,Header:x,Footer:p,ImgOverlay:k})}},function(e){e.O(0,[774,980,445,866,609,942,907,617,666,888,179],function(){return e(e.s=4638)}),_N_E=e.O()}]);