

import SignUpPage from '../pages/SignUpPage';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import ProgressApi from '../shared/ProgressApi';
import UserPage from '../pages/UserPage';

import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';
import Navibar from '../components/NaviBar';

function App() {//Higher Order Component model should be use for ApiProgress but I cant find it how rfc HoC impl
  const login = <ProgressApi path="/api/auth/handle"><LoginPage/></ProgressApi>;
  const signup = <ProgressApi path="/users/createUser"><SignUpPage/></ProgressApi>
  return (
    <div className="App">
      
      <HashRouter>
      <Navibar/>
        <Switch>
        <Route exact path="/" component={HomePage} />
          <Route path="/login">{login}</Route>
          <Route path="/signup">{signup}</Route>
          <Route path="/users/:id" component={UserPage}/>
          <Redirect to="/" />
        </Switch>
        
      </HashRouter>
      
      
      
        
      
    </div>
  );
}

export default App;
