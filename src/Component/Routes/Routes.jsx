import { createBrowserRouter } from "react-router";
import HomePages from "../../Pages/HomePages/HomePages";
import BannerSection from "../BannerSection/BannerSection";
import LoginSection from "../LoginSection/LoginSection";
import RegistrationSection from "../RegistrationSection/RegistrationSection";
import ProtectedRoutes from "../ProtectedRoutes/ProtectedRoutes";
import AllModelSection from "../AllModelSection/AllModelSection";
import AddModels from "../AddModels/AddModels";


const router= createBrowserRouter([
    {
        path:'/',
        Component:HomePages,
        children:[
            {
                index:true,
                Component: BannerSection
            },
            {
                path:'/all/models',
                element:<ProtectedRoutes><AllModelSection></AllModelSection></ProtectedRoutes>
            },
            {
                path:'model/add',
                element:<ProtectedRoutes><AddModels></AddModels></ProtectedRoutes>
            },
            {
                path:'login',
                Component:LoginSection
            },
            {
                path:'registration',
                Component:RegistrationSection
            }
        ]
    }
]);
export default router;