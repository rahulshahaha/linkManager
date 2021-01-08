import React, { useContext } from 'react'
import { AppContext } from './AppContext';
import { Redirect, Link } from 'react-router-dom'


const Workspace = (props) => {
  const { workspaces } = useContext(AppContext)

  const workspaceName = props.match.params.workspace

  var workspace = workspaces.filter(ws => {return ws.name === workspaceName})
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
    <div>
      <div className="flex space-x-5">
        <Link to="/" className="text-center text-xl text-white bg-gray-400 px-3 py-2 rounded-lg">Go Back</Link>
        <p onClick={openAll} className="cursor-pointer text-center text-xl text-white bg-gray-400 px-3 py-2 rounded-lg">Open all</p>
      </div>
      <div className="grid grid-cols-4 mt-14">
        { workspace.links.map(link => {
          return (
            <a rel="noreferrer" href={link.url} target="_blank" key={link.name} className="bg-gray-400 w-60 h-60 rounded-full flex flex-col justify-center content-center transform hover:scale-105 transition ease-out duration-300">
              <p className="flex-shrink text-center text-2xl text-white font-bold">{link.name}</p>
              { link.logo ? 
                <img src={link.logo} alt="" className="self-center h-14 w-14 mt-5"></img>
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