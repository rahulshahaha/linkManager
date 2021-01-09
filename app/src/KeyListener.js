import { useContext } from 'react'
import { AppContext } from './AppContext';
import { useHistory } from "react-router-dom";

const KeyListener = (props) => {

  let history = useHistory();

  const {workspaces} = useContext(AppContext)

  document.addEventListener('keydown', (event) => {
    if(event.shiftKey === true){
      if(event.code === "Digit1"){
        const redir = '/' + workspaces[0].name
        history.push(redir)
      }
      if(event.code === "Digit2"){
        const redir = '/' + workspaces[1].name
        history.push(redir)

      }
      if(event.code === "Backquote"){
        const redir = '/'
        history.push(redir)
      }
    }
  });

  return ( null );
}
 
export default KeyListener;