import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/home/home/Home";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import AC from "./../pages/home/secondaryHome/ac/AC"
import Phone from "../pages/home/secondaryHome/phone/Phone";
import Refrigerator from "../pages/home/secondaryHome/refrigerator/Refrigerator";
import KitchenGadgets from "../pages/home/secondaryHome/kitchenGadgets/KitchenGadgets";
import Laptop from "../pages/home/secondaryHome/laptop/Laptop";
import MonitorTV from "../pages/home/secondaryHome/monitorTV/MonitorTV";
import Carts from "../pages/Cart/Carts";
import CheckOut from "../pages/checkOut/CheckOut";
import PaymentSuccess from "../pages/paymentSuccess/PaymentSuccess";
import PrivateRoute from "./PrivateRoute";
import PaymentCancel from "../pages/paymentCancel/PaymentCancel";


const router = createBrowserRouter([{
    path:"/",
    element:<MainLayouts/>,
    children:[
        {
            path: "/",
            element:<Home/>,
            children:[
                {
                    path:"/ac",
                    element:<AC/>
                },
                {
                    path:"/phone",
                    element:<Phone/>
                },
                {
                    path:"/tv",
                    element:<MonitorTV/>
                },
                {
                    path:"/refrigerator",
                    element:<Refrigerator/>
                },
                {
                    path:"/kitchen",
                    element:<KitchenGadgets/>
                },
                {
                    path:"/laptop",
                    element:<Laptop/>
                }
            ]
        },

        {
            path:"/register",
            element:<Register/>
        },
        {
            path:"/login",
            element:<Login/>
        },
        {
            path:"/cart",
            element:<Carts/>
        },
        {
            path:"/check_out",
            element:<PrivateRoute><CheckOut/></PrivateRoute>
        },
        {
            path:"/success",
            element:<PrivateRoute><PaymentSuccess/></PrivateRoute>
        },
        {
            path:"/cancel",
            element:<PaymentCancel/>
        }
    ]
}])

export default router