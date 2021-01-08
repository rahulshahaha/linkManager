import React, { useState } from "react";


export const AppContext = React.createContext();


export const AppProvider = ({ children }) => {

  const [workspaces] = useState([
    {
      name: 'Help Me Do Money',
      links:[
        {name: 'Firebase Console', 'url':'https://console.firebase.google.com/u/0/project/help-me-do-money-ab4b7/overview', 'logo':'https://firebase.google.com/downloads/brand-guidelines/SVG/logo-logomark.svg'},
        {name: 'Tailwind', 'url':'https://tailwindcss.com/docs/installation#using-tailwind-without-post-css', 'logo':'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg'},
        {name: 'Firebase Docs', 'url':'https://firebase.google.com/docs/guides'},
        {name: 'HeroIcons', 'url':'https://heroicons.com/'}
      ],
      svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
    },
    {
      name: 'Finance',
      links:[
        {name: 'TD', 'url':'https://invest.ameritrade.com/grid/p/site#r=positions'},
        {name:'YNAB','url':'https://app.youneedabudget.com/'}
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
