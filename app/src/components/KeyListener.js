import { useContext, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { UserContext } from '../store/contexts/userContext';

const KeyListener = (props) => {

  let history = useHistory();

  const { user } = useContext(UserContext)


  useEffect(() => {
    if(!user) return
    const workspaces = user ? user.workspaces : []
    document.addEventListener('keydown', (event) => {
      if(event.shiftKey === true){
        if(event.code === "Digit1"){
          console.log(workspaces)
          console.log(user)
          const redir = '/' + workspaces[0].name
          history.push(redir)
        }
        if(event.code === "Digit2"){
          const redir = '/' + workspaces[1].name
          history.push(redir)
  
        }
        if(event.code === "Digit3"){
          const redir = '/' + workspaces[2].name
          history.push(redir)
  
        }
        if(event.code === "Backquote"){
          const redir = '/'
          history.push(redir)
        }
      }
    });
  }, [history,user])
  



  return ( null );
}
 
export default KeyListener;