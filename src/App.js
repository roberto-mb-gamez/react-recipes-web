import './App.css';
import React from 'react';
import Routers from './routes';
import { setAuthToken } from './helpers/setAuthToken';

class App extends React.Component {

  render() {

    // Check JWT Token
    const token = localStorage.getItem("token");
    if (token) {
      setAuthToken(token);
    }

    return (<div className='container'>
      <Routers />
    </div>);
  }
}

export default App;
