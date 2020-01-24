import React from 'react'
import { Provider } from 'react-redux';

import { store } from './_helpers/store';
import { configureFakeBackend } from './_helpers/fakeBackend'

import { SignIn } from './Components/Signin/SignIn'
import './App.css'

configureFakeBackend();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <SignIn />
      </div>
    </Provider>
  );
}

export default App;
