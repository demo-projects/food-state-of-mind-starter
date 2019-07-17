import 'milligram';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthContextProvider from "./providers/AuthContextProvider";

ReactDOM.render(
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
    ,
    document.getElementById('root'));
