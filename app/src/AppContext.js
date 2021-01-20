import React, { useState } from "react";


export const AppContext = React.createContext();


export const AppProvider = ({ children }) => {

  const [workspaces] = useState([
    {
      id: 1,
      name: 'Help Me Do Money',
      links:[
        {id:1,name:'localhost','url':'http://localhost:3000/','logo':'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Code.svg/1200px-Code.svg.png'},
        {id:2,name: 'Firebase Console', 'url':'https://console.firebase.google.com/u/0/project/help-me-do-money-ab4b7/overview', 'logo':'https://firebase.google.com/downloads/brand-guidelines/SVG/logo-logomark.svg'},
        {id:3,name: 'Tailwind', 'url':'https://tailwindcss.com/docs/installation#using-tailwind-without-post-css', 'logo':'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg'},
        {id:4,name: 'Firebase Docs', 'url':'https://firebase.google.com/docs/guides',logo:'https://firebase.google.com/downloads/brand-guidelines/SVG/logo-logomark.svg'},
        {id:5,name: 'HeroIcons', 'url':'https://heroicons.com/',logo:'https://i.pinimg.com/originals/5e/f4/a4/5ef4a4e7313a941dda3034594220c1c0.png'},
        {id:6,name: 'GitHub', url: 'https://github.com/rahulshahaha/helpMeDoMoney', logo: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'},
        {id:7,name: 'Drive', url: 'https://drive.google.com/drive/folders/13i5LxMqVEhntqi5A3MNrOYwDAmOpayI7', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Logo_of_Google_Drive.svg'}
      ],
      svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
    },
    {
      id: 2,
      name: 'Finance',
      links:[
        {id:1,name: '', 'url':'https://invest.ameritrade.com/grid/p/site#r=positions','logo':'https://upload.wikimedia.org/wikipedia/commons/c/ca/TD_Ameritrade.svg'},
        {id:2,name:'','url':'https://app.youneedabudget.com/','logo':'https://upload.wikimedia.org/wikipedia/commons/d/d4/YNAB_logo.svg'},
        {id:3,name:' ','url':'https://docs.google.com/spreadsheets/d/1rFL6bEQB9lUF8tZFK08uBcRrElndbwG2dqf5gNWjaz4/edit#gid=1081470965','logo':'https://upload.wikimedia.org/wikipedia/commons/0/08/Google_Sheets_logo.svg'},
        {id:4,name:' ',url:'https://secure03b.chase.com/web/auth/dashboard#/dashboard/overviewAccounts/overview/multiProduct',logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl0t7Bc5xMNnXt7hiFoYgeRfq9moNx82oFBQ&usqp=CAU'}
      ],
      svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    }
  ])



  return (
    <AppContext.Provider value={{ workspaces }}>{children}</AppContext.Provider>
  );
};
