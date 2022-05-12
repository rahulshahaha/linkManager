import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import { UserContext } from '../store/contexts/userContext';


const WorkspaceToggle = () => {

  const { user, workspaceSVGs } = useContext(UserContext)
  const workspaces = user ? user.workspaces : []

  return ( 
    <div className="wst h-24 flex space-x-5 mb-5">
      { workspaces.map((workspace,i) => {
        return(
          <NavLink to={'/'+workspace.name} key={i} id={workspace.id} className="text-center text-xl text-gray-700 bg-gray-300 px-3 py-2 rounded-lg">
            <p>{1+i}</p>
            { workspaceSVGs[i] }
          </NavLink>
        )
      })}
    </div>
   );
}
 
export default WorkspaceToggle;