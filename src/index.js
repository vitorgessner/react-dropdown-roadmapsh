import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Dropdown from './components/Dropdown';
import Page404 from './pages/Page404';
import Home from './pages/Home';
import TasksList from './components/TasksList/';

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
    path: '/tasks',
    element: <TasksList />
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
