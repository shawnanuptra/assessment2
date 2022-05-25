import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Question1 from './pages/Question1'
import Question2 from './pages/Question2';
import Question3 from './pages/Question3'
import ErrorScreen from './pages/ErrorScreen';
import CouncilHome from './pages/CouncilHome';
import InProgress from './pages/InProgress';
import Archive from './pages/Archive';
import { FormContextProvider } from './FormContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // todo: create a ContextProvider to share auth states

  <BrowserRouter>
    <FormContextProvider>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/q1' element={<Question1 />} />
        <Route path='/q2' element={<Question2 />} />
        <Route path='/q3' element={<Question3 />} />
        <Route path='/error' element={<ErrorScreen />} />
        <Route path='/home' element={<CouncilHome />} />
        <Route path='/in-progress' element={<InProgress />} />
        <Route path='/archive' element={<Archive />} />
      </Routes>
    </FormContextProvider>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
