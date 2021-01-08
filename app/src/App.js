import WorkspaceList from './WorkspaceList';
import Workspace from './Workspace'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { AppProvider } from './AppContext';


function App() {



  return (
    <div className="App m-20">
      <AppProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={WorkspaceList} />
            <Route exact path='/:workspace' component={Workspace} />
            <Route path='/'> <Redirect to="/" /> </Route>
          </Switch>
        </BrowserRouter>
      </AppProvider>
    </div>
  );
}

export default App;
