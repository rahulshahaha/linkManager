import { updateDoc } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getUserDocRef } from '../config/fbConfig';
import { UserContext } from '../store/contexts/userContext';
import WorkspaceItem from './WorkspaceItem';

const Edit = () => {

  const { user } = useContext(UserContext)

  const [currentWorkspaces,setCurrentWorkspaces] = useState([])

  useEffect(() => {
    const workspaces = user ? user.workspaces : []
    setCurrentWorkspaces(workspaces)
  }, [user])

  const nameChange = (e) => {
    const newWorkspaces = [...currentWorkspaces]
    newWorkspaces[e.target.id].name = e.target.value
    setCurrentWorkspaces(newWorkspaces)
  }


  const fieldChange = (workspaceIndex,linkIndex,fieldName, newValue) => {
    const newWorkspaces = [...currentWorkspaces]
    newWorkspaces[workspaceIndex].links[linkIndex][fieldName] = newValue
    setCurrentWorkspaces(newWorkspaces)
  }


  const updateData = () => {
    updateDoc(getUserDocRef(),{
      workspaces: currentWorkspaces
    })
  }

  const addLink = (workspaceIndex) => {
    const newWorkspaces = [...currentWorkspaces]
    newWorkspaces[workspaceIndex].links.push({name:'New Link','url':'https://google.com'})
    setCurrentWorkspaces(newWorkspaces)
  }

  const deleteLink = (workspaceIndex,linkIndex) => {
    const newWorkspaces = [...currentWorkspaces]
    newWorkspaces[workspaceIndex].links.splice(linkIndex,1)
    setCurrentWorkspaces(newWorkspaces)
  }
  

  const fieldOrder = [
    {name:'name',displayName:'Name'},
    {name:'url',displayName:'URL'},
    {name:'logo',displayName:'Logo URL'},
    {name:'directLogo',displayName:'Direct Logo Link'},
  ]

  return ( 
    <div className=''>
      <Link to="/" className="text-center text-xl text-gray-700 bg-gray-300 px-3 py-2 rounded-lg">Home</Link>
      { currentWorkspaces && currentWorkspaces.map((ws,i) => {
        return(
          <div className='bg-gray-100 rounded-lg px-2 py-5 mb-5 mt-2' key={i}>
            <input id={i} onChange={nameChange} className="formInput" value={ws.name} />
            <p className="text-lg mt-2">Links:</p>
            { ws.links && ws.links.map((link,j) => {
              return(
                <div key={j} className="bg-gray-200 rounded-lg px-2 py-5 mt-2">
                  <div className="flex space-x-10">
                    <div className="flex flex-col">
                      { fieldOrder && fieldOrder.map((field,k) => {
                        return(
                          <div className='' key={k}>
                            <div className="flex flex-col">
                              <input id={link[field.name]+''+j} className="formInput w-48 mt-2" value={link[field.name]} onChange={(e) => fieldChange(i,j,field.name,e.target.value)}></input>
                              <label className="text-sm" htmlFor={link[field.name]+''+j}>{field.displayName}</label>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                    <WorkspaceItem link={link} />
                  </div>
                  <button className="importantBtn mt-5" onClick={() => deleteLink(i,j)}>Delete Link</button>
                </div>
              )
            })}
            <button className="btn mt-2" onClick={() => addLink(i)}>Add Link</button>
          </div>
        )
      })}
      <button className="btn" onClick={updateData}>Save</button>
    </div>
   );
}
 
export default Edit;


