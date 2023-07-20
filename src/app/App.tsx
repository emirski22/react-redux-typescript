import { AppRouter } from 'app/providers/router';
import { Suspense } from 'react';

export const App = () => {
     return (
        <div className={'app'}>
            <Suspense fallback={'loading.'}>
                <AppRouter />
            </Suspense>
        </div>
    );
};
