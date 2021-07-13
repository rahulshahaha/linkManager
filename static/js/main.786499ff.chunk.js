(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{28:function(e,t,o){},29:function(e,t,o){"use strict";o.r(t);var s=o(1),n=o(0),i=o.n(n),c=o(15),r=o.n(c),a=o(7),l=o(17),d=i.a.createContext(),g=function(e){var t=e.children,o=Object(n.useState)([{id:1,name:"Help Me Do Money",links:[{id:1,name:"localhost",url:"http://localhost:3000/",logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Code.svg/1200px-Code.svg.png"},{id:2,name:"Firebase Console",url:"https://console.firebase.google.com/u/0/project/help-me-do-money-ab4b7/overview",logo:"https://firebase.google.com/downloads/brand-guidelines/SVG/logo-logomark.svg"},{id:3,name:"Tailwind",url:"https://tailwindcss.com/docs/installation#using-tailwind-without-post-css",logo:"https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"},{id:4,name:"Firebase Docs",url:"https://firebase.google.com/docs/guides",logo:"https://firebase.google.com/downloads/brand-guidelines/SVG/logo-logomark.svg"},{id:5,name:"HeroIcons",url:"https://heroicons.com/",logo:"https://i.pinimg.com/originals/5e/f4/a4/5ef4a4e7313a941dda3034594220c1c0.png"},{id:6,name:"GitHub",url:"https://github.com/rahulshahaha/helpMeDoMoney",logo:"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"},{id:7,name:"Drive",url:"https://drive.google.com/drive/folders/13i5LxMqVEhntqi5A3MNrOYwDAmOpayI7",logo:"https://upload.wikimedia.org/wikipedia/commons/a/ad/Logo_of_Google_Drive.svg"}],svg:Object(s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"})})},{id:2,name:"Finance",links:[{id:1,name:"",url:"https://auth.tdameritrade.com/auth?response_type=code&client_id=TDARETAILWEB%40AMER.OAUTHAP&redirect_uri=https%3A%2F%2Finvest.ameritrade.com%2Fgrid%2Fm%2Fcafelogin&cv=default&lang=en-us&state=ldl%253Dmain%253Apositions&code_challenge=b9PRiWuCp8r3XsqwBlAADBYa6fk_DpmQN10vWtJJ8eM&code_challenge_method=S256&exp=1626201128056",logo:"https://upload.wikimedia.org/wikipedia/commons/c/ca/TD_Ameritrade.svg"},{id:2,name:"",url:"https://app.youneedabudget.com/",logo:"https://upload.wikimedia.org/wikipedia/commons/d/d4/YNAB_logo.svg"},{id:3,name:" ",url:"https://docs.google.com/spreadsheets/d/1rFL6bEQB9lUF8tZFK08uBcRrElndbwG2dqf5gNWjaz4/edit#gid=1081470965",logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Google_Sheets_2020_Logo.svg/440px-Google_Sheets_2020_Logo.svg.png"},{id:4,name:" ",url:"https://secure03b.chase.com/web/auth/dashboard#/dashboard/overviewAccounts/overview/multiProduct",logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl0t7Bc5xMNnXt7hiFoYgeRfq9moNx82oFBQ&usqp=CAU"},{id:5,name:" ",url:"https://portal.discover.com/customersvcs/portal/summary",logo:"https://iconape.com/wp-content/files/nv/181206/png/181206.png"}],svg:Object(s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}]),i=Object(l.a)(o,1)[0];return Object(s.jsx)(d.Provider,{value:{workspaces:i},children:t})},m=function(e){var t=Object(n.useContext)(d).workspaces,o={lineHeight:"2rem"};return Object(s.jsx)("div",{className:"wsList grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 text-white text-center",children:t.map((function(e){return Object(s.jsxs)(a.b,{to:"/"+e.name,className:"card flex flex-col bg-gray-100 m-5 h-40 relative",children:[Object(s.jsx)("div",{className:"cardTitle bg-gray-400 h-8",children:Object(s.jsx)("h1",{style:o,className:"md:text-2xl",children:e.name})}),e.svg,Object(s.jsx)("div",{className:"moreLink bg-gray-300 h-8",children:Object(s.jsx)("p",{style:o,children:"Click here for more"})})]},e.id)}))})},p=o(2),u=function(e){var t=Object(n.useContext)(d).workspaces,o=e.match.params.workspace,i=t.filter((function(e){return e.name===o})),c=function(e){if(console.log(e),!0===e.metaKey&&"Digit"===e.code.substring(0,5)){var t=parseInt(e.code.substring(5,6))-1,o=i.links[t].url;window.open(o,"_blank")}};if(Object(n.useEffect)((function(){return document.addEventListener("keydown",c),function(){document.removeEventListener("keydown",c)}})),1!==i.length)return Object(s.jsx)(p.a,{to:"/"});i=i[0];return Object(s.jsxs)("div",{className:"ws",children:[Object(s.jsxs)("div",{className:"flex space-x-5",children:[Object(s.jsx)(a.b,{to:"/",className:"text-center text-xl text-gray-700 bg-gray-300 px-3 py-2 rounded-lg",children:"Go Back"}),Object(s.jsx)("p",{onClick:function(){i.links.forEach((function(e){var t=window;window.open(e.url,"_blank"),t.focus()}))},className:"cursor-pointer text-center text-xl text-gray-700 bg-gray-300 px-3 py-2 rounded-lg",children:"Open all"})]}),Object(s.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 mt-14",children:i.links.map((function(e){return Object(s.jsxs)("a",{rel:"noreferrer",href:e.url,target:"_blank",className:"mb-10 bg-gray-300 w-60 h-60 rounded-full justify-self-center flex flex-col justify-center content-center transform hover:scale-105 transition ease-out duration-300",children:[Object(s.jsx)("p",{className:"flex-shrink text-center text-md text-gray-700 font-bold",children:e.id}),Object(s.jsx)("p",{className:"flex-shrink text-center text-2xl text-gray-700 font-bold",children:e.name}),e.logo?Object(s.jsx)("img",{src:e.logo,alt:"",className:""===e.name?"self-center mt-5 h-36 w-36":"self-center mt-5 h-14 w-14"}):null]},e.id)}))})]})},h=function(e){var t=Object(p.g)(),o=Object(n.useContext)(d).workspaces;return document.addEventListener("keydown",(function(e){if(!0===e.shiftKey){if("Digit1"===e.code){var s="/"+o[0].name;t.push(s)}if("Digit2"===e.code){var n="/"+o[1].name;t.push(n)}if("Backquote"===e.code){t.push("/")}}})),null},b=function(){var e=Object(n.useContext)(d).workspaces;return Object(s.jsx)("div",{className:"wst h-24 flex space-x-5 mb-5",children:e.map((function(e){return Object(s.jsxs)(a.c,{to:"/"+e.name,id:e.id,className:"text-center text-xl text-gray-700 bg-gray-300 px-3 py-2 rounded-lg",children:[Object(s.jsx)("p",{children:e.id}),e.svg]},e.id)}))})};var x=function(e){return Object(s.jsx)("div",{className:"App md:m-20",children:Object(s.jsx)(g,{children:Object(s.jsxs)(a.a,{basename:"/",children:[Object(s.jsx)(h,{}),Object(s.jsx)(b,{}),Object(s.jsxs)(p.d,{children:[Object(s.jsx)(p.b,{exact:!0,path:"/",component:m}),Object(s.jsx)(p.b,{exact:!0,path:"/:workspace",component:u}),Object(s.jsxs)(p.b,{path:"/",children:[" ",Object(s.jsx)(p.a,{to:"/"})," "]})]})]})})})};o(28);r.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(x,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.786499ff.chunk.js.map