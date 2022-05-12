import React, { useState } from "react";


export const AppContext = React.createContext();


export const AppProvider = ({ children }) => {

  const [workspaces] = useState([
    {
      id: 1,
      name: 'Help Me Do Money',
      links:[
        {id:1,name:'localhost','url':'http://localhost:3000/','logo':'reactjs.org'},
        {id:2,name: 'Firebase Console', 'url':'https://console.firebase.google.com/u/0/project/help-me-do-money-ab4b7/overview', 'logo':'firebase.com'},
        {id:3,name: 'Tailwind', 'url':'https://tailwindcss.com/docs/installation#using-tailwind-without-post-css', 'logo':'tailwindcss.com'},
        {id:4,name: 'Firebase Docs', 'url':'https://firebase.google.com/docs/guides',logo:'firebase.com'},
        {id:5,name: 'HeroIcons', 'url':'https://heroicons.com/',logo:'heroicons.com'},
        {id:6,name: 'GitHub', url: 'https://github.com/rahulshahaha/helpMeDoMoney', logo: 'github.com'},
        {id:7,name: 'Drive', url: 'https://drive.google.com/drive/folders/13i5LxMqVEhntqi5A3MNrOYwDAmOpayI7', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/512px-Google_Drive_icon_%282020%29.svg.png?20201021201920',directLogo:true}
      ],
      svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
    },
    {
      id: 2,
      name: 'Finance',
      links:[
        {id:1,name: '', 'url':'https://auth.tdameritrade.com/auth?response_type=code&client_id=TDARETAILWEB%40AMER.OAUTHAP&redirect_uri=https%3A%2F%2Finvest.ameritrade.com%2Fgrid%2Fm%2Fcafelogin&cv=default&lang=en-us&state=ldl%253Dmain%253Apositions&code_challenge=b9PRiWuCp8r3XsqwBlAADBYa6fk_DpmQN10vWtJJ8eM&code_challenge_method=S256&exp=1626201128056','logo':'tdameritrade.com'},
        {id:2,name:'','url':'https://app.youneedabudget.com/','logo':'youneedabudget.com'},
        {id:3,name:' ','url':'https://docs.google.com/spreadsheets/d/1rFL6bEQB9lUF8tZFK08uBcRrElndbwG2dqf5gNWjaz4/edit#gid=1081470965','logo':'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Google_Sheets_2020_Logo.svg/440px-Google_Sheets_2020_Logo.svg.png',directLogo:true},
        {id:4,name:' ',url:'https://secure03b.chase.com/web/auth/dashboard#/dashboard/overviewAccounts/overview/multiProduct',logo:'chase.com'},
        {id:5,name:' ',url:'https://portal.discover.com/customersvcs/portal/summary',logo:'discover.com'}
      ],
      svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    },
    {
      id: 3,
      name: 'Berbix',
      links:[
        {id:1,name: '', 'url':'https://calendar.google.com/','logo':'https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg',directLogo:true},
        {id:2,name: '', 'url':'https://gmail.com/','logo':'https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg',directLogo:true},
        {id:3,name: '', 'url':'app.asana.com','logo':'asana.com'},
        {id:4,name: '', 'url':'berbix.looker.com','logo':'looker.com'},
        {id:5,name: '', 'url':'figma.com','logo':'figma.com'},
        {id:6,name: '', 'url':'https://console.cloud.google.com/bigquery','logo':'https://cdn.worldvectorlogo.com/logos/google-bigquery-logo-1.svg',directLogo:true},
        {id:7,name: '', 'url':'app.compt.io','logo':'compt.io'},
        {id:8,name: '', 'url':'https://berbix.latticehq.com/','logo':'latticehq.com'},
        {id:9,name: '', 'url':'https://todo-8303f.web.app/#/planning','logo':'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Harp_%28887849%29_-_The_Noun_Project.svg/640px-Harp_%28887849%29_-_The_Noun_Project.svg.png',directLogo:true},
      ],
      svg: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
    }
  ])



  return (
    <AppContext.Provider value={{ workspaces }}>{children}</AppContext.Provider>
  );
};