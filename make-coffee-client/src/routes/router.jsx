import {
    createBrowserRouter,
  } from "react-router-dom";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";
import App from "../App";

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      loader: ()=> fetch('http://localhost:5000/coffee')
    },
    {
        path: "/addCoffee",
        element: <AddCoffee/>
    },
    {
        path: "/updateCoffee",
        element: <UpdateCoffee/>
    }
  ]);

export default router