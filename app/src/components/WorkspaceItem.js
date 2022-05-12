import React from 'react';


const WorkspaceItem = ({ link }) => {

  const logoPrefix = 'https://logo.clearbit.com/'
  const logoURL = link.directLogo && link.directLogo === 'y' ? link.logo : logoPrefix + link.logo


  return ( 
    <div>
      <a rel="noreferrer" href={link.url} target="_blank" className="mb-10 bg-gray-300 w-60 h-60 rounded-full justify-self-center flex flex-col justify-center content-center transform hover:scale-105 transition ease-out duration-300">
        <p className="flex-shrink text-center text-md text-gray-700 font-bold">{link.id}</p>
        <p className="flex-shrink text-center text-2xl text-gray-700 font-bold">{link.name}</p>
        { link.logo ? 
          <img src={logoURL} alt="" className={link.name === '' ? 'self-center mt-5 max-h-20' : 'self-center mt-5 h-14 w-14'}></img>
        :
        null
        }
      </a>
    </div>
   );
}
 
export default WorkspaceItem;