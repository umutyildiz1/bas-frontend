

import SignUpPage from '../pages/SignUpPage';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import ProgressApi from '../shared/ProgressApi';
import UserPage from '../pages/UserPage';
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';
import Navibar from '../components/NaviBar';
import {connect} from 'react-redux'
import CreateAuctionPage from '../pages/CreateAuctionPage';
function App(props) {//Higher Order Component model should be use for ApiProgress but I cant find it how rfc HoC impl
  const login = <ProgressApi path="/api/auth/handle"><LoginPage/></ProgressApi>;
  const signup = <ProgressApi path="/users/createUser"><SignUpPage/></ProgressApi>
  const loginState = props.isLogin
  return (
    <div className="App">
      
      <HashRouter>
      <Navibar/>
        <Switch>
        <Route exact path="/" component={HomePage} />
          {!loginState?<Route path="/login">{login}</Route>:""}
          {!loginState?<Route path="/signup">{signup}</Route>:""}
          <Route path="/users/:id" component={UserPage}/>
          {loginState?<Route path="/createAuction">{CreateAuctionPage}</Route>:""}
          <Redirect to="/" />
        </Switch>
        
      </HashRouter>
      
      
      
        
      
    </div>
  );
}

const putStatesToProps =(storeStates) =>{
  return {
    isLogin : storeStates.isLogin,
  }
}


export default connect(putStatesToProps)(App);
