
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { AppLayout } from "./Components/Layout/AppLayout";
import "./App.css";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Contact} from "./pages/Contact";
import { ErrorPage } from "./pages/ErrorPage";

import { Country } from "./pages/Country";
const router=createBrowserRouter([
   {
    path:"/",
    element:<AppLayout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"Country",
        element:<Country/>
      },
      {
        path:"Contact",
        element:<Contact/>
      }]




    
   }

  
])


const App=()=>{
  return <RouterProvider router={router}></RouterProvider>
}
export default App;