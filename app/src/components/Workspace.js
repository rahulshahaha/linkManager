import React, { useContext, useEffect } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { UserContext } from '../store/contexts/userContext';
import WorkspaceItem from './WorkspaceItem';
import WorkspaceToggle from './WorkspaceToggle';

const Workspace = (props) => {

  const { user } = useContext(UserContext)
  const workspaces = user ? user.workspaces : []
  

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
      <WorkspaceToggle />
      <div className="flex space-x-5">
        <Link to="/" className="text-center text-xl text-gray-700 bg-gray-300 px-3 py-2 rounded-lg">Go Back</Link>
        <p onClick={openAll} className="cursor-pointer text-center text-xl text-gray-700 bg-gray-300 px-3 py-2 rounded-lg">Open all</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 mt-14">
        { workspace.links.map((link,i) => {
          return <WorkspaceItem key={i} link={link} />
        })}
      </div>
    </div>
   );
}
 
export default Workspace;