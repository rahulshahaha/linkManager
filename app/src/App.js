import WorkspaceList from './WorkspaceList';
import Workspace from './Workspace'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { AppProvider } from './AppContext';
import KeyListener from './KeyListener';


function App(props) {



  return (
    <div className="App md:m-20">
      <AppProvider>
        <BrowserRouter>
          <KeyListener />
          <Switch>
            <Route exact path='/linkmanager' component={WorkspaceList} />
            <Route exact path='/:workspace' component={Workspace} />
            <Route path='/linkmanager'> <Redirect to="/linkmanager" /> </Route>
          </Switch>
        </BrowserRouter>
      </AppProvider>
    </div>
  );
}

export default App;
