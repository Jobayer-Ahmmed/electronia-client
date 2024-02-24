import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/home/home/Home";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import AddNewProduct from "../pages/addNewProduct/AddNewProduct";


const router = createBrowserRouter([{
    path:"/",
    element:<MainLayouts/>,
    children:[
        {
            path: "/",
            element:<Home/>
        },
        {
            path:"/add-new-product",
            element:<AddNewProduct/>
        },
        {
            path:"/register",
            element:<Register/>
        },
        {
            path:"/login",
            element:<Login/>
        }
    ]
}])

export default router