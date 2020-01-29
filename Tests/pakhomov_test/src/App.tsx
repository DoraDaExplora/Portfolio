import React from 'react'
import { Provider } from 'react-redux';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { store } from './_helpers/store';
import { configureFakeBackend } from './_helpers/fakeBackend';

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

isUserLoggedIn();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <Router>
          <Switch>
            { localStorage.getItem('savedUser')
            ? <Redirect to={{pathname: '/loggedIn'}}/>
            : <SignIn/>  
          }
            <Route exact path="/">
              <SignIn/>
            </Route>
            <Route path="/loggedIn">
              <Home/>
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
