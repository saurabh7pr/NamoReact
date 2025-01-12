import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import About from "./components/About";
import Header from "./components/Header";
import RestaurantMenu from "./components/RestaurantMenu";
import Body from "./components/Body";
import Contact from "./components/Contact";
import { RouterProvider, createBrowserRouter,Outlet} from "react-router-dom";
import Grocery from "./components/Grocery";
//import Error from "./components/Error";
import Footer from "./components/Footer";

const Grocery = lazy(()=>{
  import("./components/Grocery")
})


const AppLayout = () =>{
  return <div className="app">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      

    
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
    
      },
      {
        path : "/grocery",
        element: <Suspense fallback={<h1>Loading.....</h1>}> <Grocery></Grocery></Suspense>
    
      }



    ],
    errorElement:<Error/>

  }

  
])


const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<RouterProvider router={appRouter}></RouterProvider>);  