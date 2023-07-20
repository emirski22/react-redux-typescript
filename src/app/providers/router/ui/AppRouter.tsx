import { routeConfig } from 'app/providers/router';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

export const AppRouter = (): JSX.Element => {
    return (
        <Suspense fallback={'page loading ...'}>
            <Routes>
                {routeConfig.map(({ path, element }) => (
                    <Route key={path} path={path} element={<div className={'page-wrapper'}>{element}</div>} />
                ))}
            </Routes>
        </Suspense>
    );
};
