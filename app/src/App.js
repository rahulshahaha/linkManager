import WorkspaceList from './WorkspaceList';
import Workspace from './Workspace'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import { AppProvider } from './AppContext';
import KeyListener from './KeyListener';
import WorkspaceToggle from './WorkspaceToggle';


function App(props) {



  return (
    <div className="App md:m-20">
      <AppProvider>
        <HashRouter basename="/">
          <KeyListener />
          <WorkspaceToggle />
          <Switch>
            <Route exact path='/' component={WorkspaceList} />
            <Route exact path='/:workspace' component={Workspace} />
            <Route path='/'> <Redirect to="/" /> </Route>
          </Switch>
        </HashRouter>
      </AppProvider>
    </div>
  );
}

export default App;
