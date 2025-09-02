import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Routes, Route, RouterProvider } from 'react-router-dom';
import './index.css';
import Dropdown from './components/Dropdown';
import Page404 from './pages/Page404';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/dropdown',
    element: <Dropdown />
  },
  {
    path: '/*',
    element: <Page404 />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
