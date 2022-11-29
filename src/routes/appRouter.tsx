import HomePage from "../pages/home/HomePage";
import DashBoardPageLayout from "../pages/dashboard/DashBoardPageLayout";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import {RouteType} from "./config";
import DefaultPage from "../pages/dashboard/DefaultPage";
import DashboardIndex from "../pages/dashboard/DashboardIndex";
import ChangelogPage from "../pages/changelog/ChangelogPage";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AnalyticsPage from "../pages/dashboard/AnalyticsPage";
import SaasPage from "../pages/dashboard/SaasPage";

const appRoutes: RouteType[] = [
    {
        index: true,
        element: <HomePage/>,
        state: "home"
    },
    {
        path: "/dashboard",
        element: <DashBoardPageLayout/>,
        state: "dashboard",
        sidebarProps: {
            displayText: "Dashboard",
            icon: <DashboardOutlinedIcon/>
        },
        child:[
            {
                index:true,
                element: <DashboardIndex/>,
                state: "dashboard.index",
            },
            {
                path:"/dashboard/default",
                element: <DefaultPage/>,
                state: "dashboard.default",
                sidebarProps:{
                    displayText: "Default"
                }
            },
            {
                path:"/dashboard/analytics",
                element: <AnalyticsPage/>,
                state: "dashboard.analytics",
                sidebarProps:{
                    displayText: "Analytics"
                }
            },
            {
                path:"/dashboard/saas",
                element: <SaasPage/>,
                state: "dashboard.saas",
                sidebarProps:{
                    displayText: "Saas"
                }
            }
        ]
    },
    {
        path:"/changelog",
        element: <ChangelogPage/>,
        state: "changelog",
        sidebarProps:{
            displayText: "Changelog",
            icon:<FormatListBulletedIcon/>
        }
    }
]

export default appRoutes