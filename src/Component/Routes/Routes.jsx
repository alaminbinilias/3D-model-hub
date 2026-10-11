import { createBrowserRouter } from "react-router";
import HomePages from "../../Pages/HomePages/HomePages";
import BannerSection from "../BannerSection/BannerSection";


const router= createBrowserRouter([
    {
        path:'/',
        Component:HomePages,
        children:[
            {
                index:true,
                Component: BannerSection
            }
        ]
    }
]);
export default router;