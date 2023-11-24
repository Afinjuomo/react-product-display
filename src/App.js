import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';
import RootPage from './components/RootPage';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<RootPage />}
      >
        <Route index element={<Dashboard />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
