import { createBrowserRouter } from "react-router";
import HomePages from "../../Pages/HomePages/HomePages";
import BannerSection from "../BannerSection/BannerSection";
import AllModelSection from "../AllModelSection/AllModelSection";
import AddModels from "../AddModels/AddModels";
import LoginSection from "../LoginSection/LoginSection";


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
                Component:AllModelSection
            },
            {
                path:'model/add',
                Component:AddModels
            },
            {
                path:'login',
                Component:LoginSection
            }
        ]
    }
]);
export default router;