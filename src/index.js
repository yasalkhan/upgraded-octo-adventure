import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom'
import Signup from './signup';
import Login from './Login.jsx';

let browserRouter=createBrowserRouter([
  {
    path:'/',
    element:<Login/>
  },
  {
    path:'login',
    element:<Login/>,

  },
  {
    path:'register',
    element: <Signup/>
  },
  {
    path:'home',
    element:  <App/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={browserRouter}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
