import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import HomePage from './pages/HomePage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';

// This is the core of React Router v7: defining routes as objects
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // The 'App' component is our main layout/shell
    errorElement: <ErrorPage />, // This will show when any error occurs
    children: [
      {
        index: true, // This route matches the parent path ("/")
        element: <HomePage />,
      },
    ],
  },
]);

// Render the app using the RouterProvider
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
