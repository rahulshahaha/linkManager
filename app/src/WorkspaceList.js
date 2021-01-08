import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from './AppContext'

const WorkspaceList = () => {

  const { workspaces } = useContext(AppContext)


  const lineHeight = {
    lineHeight: '2rem'
  }

  return ( 
    <div className="grid grid-cols-4 text-white text-center">
      { workspaces.map(workspace => {
        return (
          <Link to={"/" + workspace.name} key={workspace.name} className="card flex flex-col bg-gray-100 m-5 h-40 relative">
            <div className="cardTitle bg-gray-400 h-8">
              <h1 style={lineHeight} className="text-2xl">{workspace.name}</h1>
            </div>
            {workspace.svg}
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