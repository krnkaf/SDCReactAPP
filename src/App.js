import React, { useState, useEffect } from 'react';
import './App.css';

import AppRoute from './AppRoute.js';
import {BrowserRouter as Router} from "react-router-dom";

export const AppContext=React.createContext();

function App() {


  return (
  
      <>
          <Router>
            <AppRoute />
          </Router>
        Hi


      </>
    
  );

}

export default App;
