import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/App.scss';
import App from './App';
import Pokemon from './pages/Pokemon';
import Favorites from './pages/Favorites';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js";  
import 'bootstrap-icons/font/bootstrap-icons.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { MyProvider } from './utils/MyContext'; // Importer le Provider
import Error from './pages/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/pokemon/:pokemonId",
    element: <Pokemon />
  },
  {
    path: "/favorites",
    element: <Favorites />
  },
  {
    path: "*", // Chemin pour les erreurs 404
    element: <Error />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <MyProvider>
      <RouterProvider router={router} />
    </MyProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
