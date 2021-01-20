import React, { useContext } from 'react';
import { AppContext } from './AppContext';
import { NavLink } from 'react-router-dom'


const WorkspaceToggle = () => {

  const { workspaces } = useContext(AppContext)

  return ( 
    <div className="wst h-24 flex space-x-5 mb-5">
      { workspaces.map(workspace => {
        return(
          <NavLink to={'/'+workspace.name} key={workspace.id} id={workspace.id} className="text-center text-xl text-gray-700 bg-gray-300 px-3 py-2 rounded-lg">
            <p>{workspace.id}</p>
            { workspace.svg }
          </NavLink>
        )
      })}
    </div>
   );
}
 
export default WorkspaceToggle;