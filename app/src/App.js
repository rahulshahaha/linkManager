import WorkspaceList from './components/WorkspaceList';
import Workspace from './components/Workspace'
import { HashRouter, Switch, Route, Redirect, Link } from 'react-router-dom'
import KeyListener from './components/KeyListener';
import { UserProvider } from './store/contexts/userContext'
import Edit from './components/Edit';


function App() {

  return (
    <div className="App md:m-20">
      <UserProvider>
        <HashRouter basename="/">
          <KeyListener />
          <Link to="/edit" className="btn fixed top-0 left-0">Edit</Link>
          <Switch>
            <Route exact path='/edit' component={Edit} />
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
