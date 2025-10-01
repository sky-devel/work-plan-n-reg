import { createBrowserRouter } from "react-router-dom";
import PlanTablePage from "../pages/PlanTablePage";
import RegistrationPanelPage from "../pages/RegistrationPanelPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <PlanTablePage />
    },
    {
        path: '/registration',
        element: <RegistrationPanelPage />
    },
]);