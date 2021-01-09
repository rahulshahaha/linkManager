import React, { useContext, useEffect } from 'react'
import { AppContext } from './AppContext';
import { Redirect, Link } from 'react-router-dom'


const Workspace = (props) => {

  const { workspaces } = useContext(AppContext)

  const workspaceName = props.match.params.workspace

  var workspace = workspaces.filter(ws => {return ws.name === workspaceName})

  const handleEvent = (event) => {
    console.log(event)
    if(event.metaKey === true){
      if(event.code.substring(0,5) === "Digit"){
        const index = parseInt(event.code.substring(5,6)) - 1;
        const newURL = workspace.links[index].url
        window.open(newURL,'_blank');
      }
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleEvent);

    return () => {
      document.removeEventListener('keydown', handleEvent);
    }
  })

  if(workspace.length !== 1){
    return <Redirect to="/" />
  }else{
    workspace = workspace[0]
  }


  const openAll = () => {
    workspace.links.forEach(link => {
      var currentWin = window
      window.open(link.url,'_blank');
      currentWin.focus()
    })
  }

  return ( 
    <div className="ws">
      <div className='h-24'></div>
      <div className="fixed top-10 h-24 flex space-x-5">
        { workspaces.map(workspace => {
          return(
            <div key={workspace.id} className="text-center text-xl text-gray-700 bg-gray-300 px-3 py-2 rounded-lg">
              <p>{workspace.id}</p>
              { workspace.svg }
            </div>
          )
        })}
      </div>
      <div className="flex space-x-5">
        <Link to="/" className="text-center text-xl text-gray-700 bg-gray-300 px-3 py-2 rounded-lg">Go Back</Link>
        <p onClick={openAll} className="cursor-pointer text-center text-xl text-gray-700 bg-gray-300 px-3 py-2 rounded-lg">Open all</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 mt-14">
        { workspace.links.map(link => {
          return (
            <a rel="noreferrer" href={link.url} target="_blank" key={link.id} className="mb-10 bg-gray-300 w-60 h-60 rounded-full justify-self-center flex flex-col justify-center content-center transform hover:scale-105 transition ease-out duration-300">
              <p className="flex-shrink text-center text-md text-gray-700 font-bold">{link.id}</p>
              <p className="flex-shrink text-center text-2xl text-gray-700 font-bold">{link.name}</p>
              { link.logo ? 
                <img src={link.logo} alt="" className={link.name === '' ? 'self-center mt-5 h-36 w-36' : 'self-center mt-5 h-14 w-14'}></img>
              :
              null
              }
            </a>
          )
        })}
      </div>
    </div>
   );
}
 
export default Workspace;