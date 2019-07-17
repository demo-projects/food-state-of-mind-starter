import React from 'react';
import {Router} from '@reach/router';
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Burgers from "./components/pages/Burgers";
import Header from "./components/shared/Header";
import {useAuth} from "./hooks/useAuth";

function App() {
  const {currentUser} = useAuth();

  return (
        <>
        {currentUser && <Header />}
        <Router>
          <Login path={'/'}/>
          <Register path={'/register'}/>
          <Home path={'/home'}/>
          <Burgers path={'/burgers'}/>
        </Router>
      </>
  );
}

export default App;
