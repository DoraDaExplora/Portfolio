import React from 'react'
import { Provider } from 'react-redux';

//react-router-dom
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

//helpers
import { store } from './_helpers/store';
import { configureFakeBackend } from './_helpers/fakeBackend';

//components
import { SignIn } from './Components/Signin/SignIn';
import Home from './Components/Home/Home';

import './App.css'

configureFakeBackend();

const isUserLoggedIn = () => {
  if (localStorage.getItem('savedUser')) {
    console.log('user is logged in');
    return true;
  }
}

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <Router>
        { isUserLoggedIn()
            ? <Redirect from='/' to='/loggedIn'/>
            : '' 
          }
          <Switch>
            <Route exact path="/">
              <SignIn/>
            </Route>
            <Route exact path="/loggedIn">
              <Home/>
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
