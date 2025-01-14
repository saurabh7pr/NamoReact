import React,{lazy,Suspense,useState,useEffect} from "react";
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
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Grocery = lazy(()=>{
  import("./components/Grocery")
})


const AppLayout = () =>{

const[userName,setUserName] = useState()
useEffect(()=>{
  const data={
    name:"Aniket G"
  }
  setUserName(data.name)

},[])




  return <Provider store={appStore}>
     <UserContext.Provider value={{loggedInUser: userName , setUserName}}>
   <div className="app">
   <ToastContainer
            position="bottom-center"
            autoClose={3000}
            hideProgressBar={false}
            closeOnClick
            pauseOnHover
            draggable
          />

      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      

    
  </div>
  </UserContext.Provider>

  </Provider>
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
        path : "/cart",
        element: <Cart/>
    
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