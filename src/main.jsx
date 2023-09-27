import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./Pages/index"
import SingleCocktail from './Pages/SingleCocktail';
import './index.css'
const router = createBrowserRouter([
  {
    path: "/",
    // element: (
    //   <div>
    //     <h1>Hello World</h1>
    //     <Link to="about">About Us</Link>
    //   </div>
    // ),
    element : <Home/>
  },
  {
    path: "/cocktail/:id",
    element: <SingleCocktail/>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
