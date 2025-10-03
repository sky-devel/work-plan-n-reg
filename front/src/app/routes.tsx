import { createBrowserRouter } from "react-router-dom";
import PlanTablePage from "../pages/PlanTablePage/index";
import RegistrationPanelPage from "../pages/RegistrationPanelPage/index";
import Layout from "../components/Layout.js";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        middleware: [loggingMiddeleware],
        children: [
            {
                index: true,
                Component: PlanTablePage,
            },
            {
                path: '/registration',
                Component: RegistrationPanelPage,
            },
        ],
    },
]);

type MiddlewareContext = {request: Request}

type NextFunction = () => Promise<unknown>


async function loggingMiddeleware({ request }: MiddlewareContext, next: NextFunction) {
    let url = new URL(request.url);
    console.log(`Переход на страницу: ${url.pathname}${url.search}`);
    const start = performance.now();
    await next(); // Зачем он нужен?
    const duration = performance.now() - start;
    console.log(`Переход завершен за ${Math.round((duration * 10)) / 10} сек.`)
}