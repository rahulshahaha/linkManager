import WorkspaceList from './components/WorkspaceList';
import Workspace from './components/Workspace'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import KeyListener from './components/KeyListener';
import WorkspaceToggle from './components/WorkspaceToggle';
import { UserProvider } from './store/contexts/userContext'


function App(props) {



  return (
    <div className="App md:m-20">
      <UserProvider>
        <HashRouter basename="/">
          <KeyListener />
          <WorkspaceToggle />
          <Switch>
            <Route exact path='/' component={WorkspaceList} />
            <Route exact path='/:workspace' component={Workspace} />
            <Route path='/'> <Redirect to="/" /> </Route>
          </Switch>
        </HashRouter>
      </UserProvider>
    </div>
  );
}

export default App;
