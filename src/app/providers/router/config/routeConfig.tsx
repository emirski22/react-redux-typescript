import { MainPage } from 'pages/MainPage';
import { type RouteProps } from 'react-router-dom';

enum AppRoutes {
    MAIN = 'main',
}
export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
};
export const routeConfig: RouteProps[] = [
    {
        path: RoutePath.main,
        element: <MainPage />,
    },
];
