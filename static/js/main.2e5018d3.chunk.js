(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{28:function(e,t,o){},29:function(e,t,o){"use strict";o.r(t);var s=o(1),r=o(0),n=o.n(r),c=o(15),i=o.n(c),l=o(8),a=o(17),d=n.a.createContext(),g=function(e){var t=e.children,o=Object(r.useState)([{name:"Help Me Do Money",links:[{name:"localhost",url:"http://localhost:3000/",logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Code.svg/1200px-Code.svg.png"},{name:"Firebase Console",url:"https://console.firebase.google.com/u/0/project/help-me-do-money-ab4b7/overview",logo:"https://firebase.google.com/downloads/brand-guidelines/SVG/logo-logomark.svg"},{name:"Tailwind",url:"https://tailwindcss.com/docs/installation#using-tailwind-without-post-css",logo:"https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"},{name:"Firebase Docs",url:"https://firebase.google.com/docs/guides",logo:"https://firebase.google.com/downloads/brand-guidelines/SVG/logo-logomark.svg"},{name:"HeroIcons",url:"https://heroicons.com/",logo:"https://i.pinimg.com/originals/5e/f4/a4/5ef4a4e7313a941dda3034594220c1c0.png"},{name:"GitHub",url:"https://github.com/rahulshahaha/helpMeDoMoney",logo:"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"}],svg:Object(s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"})})},{name:"Finance",links:[{name:"",url:"https://invest.ameritrade.com/grid/p/site#r=positions",logo:"https://upload.wikimedia.org/wikipedia/commons/c/ca/TD_Ameritrade.svg"},{name:"",url:"https://app.youneedabudget.com/",logo:"https://upload.wikimedia.org/wikipedia/commons/d/d4/YNAB_logo.svg"},{name:" ",url:"https://docs.google.com/spreadsheets/d/1rFL6bEQB9lUF8tZFK08uBcRrElndbwG2dqf5gNWjaz4/edit#gid=1081470965",logo:"https://upload.wikimedia.org/wikipedia/commons/a/ad/Logo_of_Google_Drive.svg"}],svg:Object(s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}]),n=Object(a.a)(o,1)[0];return Object(s.jsx)(d.Provider,{value:{workspaces:n},children:t})},m=function(){var e=Object(r.useContext)(d).workspaces,t={lineHeight:"2rem"};return Object(s.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 text-white text-center",children:e.map((function(e){return Object(s.jsxs)(l.b,{to:"/"+e.name,className:"card flex flex-col bg-gray-100 m-5 h-40 relative",children:[Object(s.jsx)("div",{className:"cardTitle bg-gray-400 h-8",children:Object(s.jsx)("h1",{style:t,className:"md:text-2xl",children:e.name})}),e.svg,Object(s.jsx)("div",{className:"moreLink bg-gray-300 h-8",children:Object(s.jsx)("p",{style:t,children:"Click here for more"})})]},e.name)}))})},h=o(2),p=function(e){var t=Object(r.useContext)(d).workspaces,o=e.match.params.workspace,n=t.filter((function(e){return e.name===o}));if(1!==n.length)return Object(s.jsx)(h.a,{to:"/"});n=n[0];return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"flex space-x-5",children:[Object(s.jsx)(l.b,{to:"/",className:"text-center text-xl text-white bg-gray-300 px-3 py-2 rounded-lg",children:"Go Back"}),Object(s.jsx)("p",{onClick:function(){n.links.forEach((function(e){var t=window;window.open(e.url,"_blank"),t.focus()}))},className:"cursor-pointer text-center text-xl text-white bg-gray-300 px-3 py-2 rounded-lg",children:"Open all"})]}),Object(s.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 mt-14",children:n.links.map((function(e){return Object(s.jsxs)("a",{rel:"noreferrer",href:e.url,target:"_blank",className:"mb-10 bg-gray-300 w-60 h-60 rounded-full justify-self-center flex flex-col justify-center content-center transform hover:scale-105 transition ease-out duration-300",children:[Object(s.jsx)("p",{className:"flex-shrink text-center text-2xl text-gray-700 font-bold",children:e.name}),e.logo?Object(s.jsx)("img",{src:e.logo,alt:"",className:""===e.name?"self-center mt-5 h-36 w-36":"self-center mt-5 h-14 w-14"}):null]},e.name)}))})]})};var u=function(){return Object(s.jsx)("div",{className:"App md:m-20",children:Object(s.jsx)(g,{children:Object(s.jsx)(l.a,{children:Object(s.jsxs)(h.d,{children:[Object(s.jsx)(h.b,{exact:!0,path:"/",component:m}),Object(s.jsx)(h.b,{exact:!0,path:"/:workspace",component:p}),Object(s.jsxs)(h.b,{path:"/",children:[" ",Object(s.jsx)(h.a,{to:"/"})," "]})]})})})})};o(28);i.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(u,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.2e5018d3.chunk.js.map