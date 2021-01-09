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
            <Route exact path='/linkmanager/:workspace' component={Workspace} />
            <Route path='/'> <Redirect to="/linkmanager" /> </Route>
          </Switch>
        </BrowserRouter>
      </AppProvider>
    </div>
  );
}

export default App;
