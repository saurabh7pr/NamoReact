import React from "react";
import ReactDOM from "react-dom/client";
import About from "./components/About";
import Header from "./components/Header";
import RestaurantMenu from "./components/RestaurantMenu";
import Body from "./components/Body";
import Contact from "./components/Contact";
import { RouterProvider, createBrowserRouter,Outlet} from "react-router-dom";
//import Error from "./components/Error";

const AppLayout = () =>{
  return <div className="app">
      <Header></Header>
      <Outlet></Outlet>
      

    
  </div>
};

const appRouter = createBrowserRouter([
  {
    path : "/",
    element: <AppLayout/>,
    children:[
      {
        path : "/about",
        element: <About/>
    
      },
      {
        path : "/",
        element: <Body/>
    
      },
      {
        path : "/contact",
        element: <Contact/>
    
      },
      {
        path : "/restaurant/:resId",
        element: <RestaurantMenu/>
    
      }


    ],
    errorElement:<Error/>

  }

  
])


const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<RouterProvider router={appRouter}></RouterProvider>);  