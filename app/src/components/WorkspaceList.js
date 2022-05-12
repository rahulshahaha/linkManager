import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../store/contexts/userContext'

const WorkspaceList = (props) => {

  const { user, workspaceSVGs } = useContext(UserContext)
  const workspaces = user ? user.workspaces : []

  const lineHeight = {
    lineHeight: '2rem'
  }



  return ( 
    <div className="wsList grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 text-white text-center">
      { workspaces.map((workspace,i) => {
        return (
          <Link to={"/" + workspace.name} key={i} className="card flex flex-col bg-gray-100 m-5 h-40 relative">
            <div className="cardTitle bg-gray-400 h-8">
              <h1 style={lineHeight} className="md:text-2xl">{workspace.name}</h1>
            </div>
            {workspaceSVGs[i]}
            <div className="moreLink bg-gray-300 h-8">
              <p style={lineHeight}>Click here for more</p>
            </div>
          </Link>
        )
      })}
    </div>
  );
}
 
export default WorkspaceList;