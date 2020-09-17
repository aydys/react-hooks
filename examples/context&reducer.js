import React, { useState, useCallback } from 'react';
import './App.css';
import Main from "./Main";
import Alert from "../examples/Alert";
import { AlertProvider } from '../examples/AlertContext';

function App() {
  return (
    <AlertProvider>
      <div className='container pt-3'>
        <Alert />
        <Main toggle={ () => {} } />
      </div>
    </AlertProvider>
  );
}

export default App;
