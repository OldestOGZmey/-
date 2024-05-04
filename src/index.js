import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Header from './Header/Header';
import Content from './Content/content';

import Register from './Registr/Registr';
import Tovar from './Tovar/Tovar';
import Oplata from './Oplata/Oplata';
import Final from './Final/Final';
import PostIdPage from './Oplata/Pages/PostIdPage';
const router = createBrowserRouter([


  { 
    path: '/',
    element: <Register/>
  },
  {
    path: '/header',
    element: <Header/>
  },
  {
    path: '/content',
    element: <Content/>
  },
  {
    path: '/tovar',
    element: <Tovar/>
  },
  {
    path: '/oplata',
    element: <Oplata/>
  },
  {
    path: '/final',
    element: <Final/>
  },
  {
    path : '/oplata/:id',
    element: <PostIdPage/>
  }


]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

