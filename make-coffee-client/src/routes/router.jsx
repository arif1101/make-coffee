import {
    createBrowserRouter,
  } from "react-router-dom";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
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