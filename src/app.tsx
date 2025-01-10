import React, { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './Components/ErrorBoundary';
import Loader from './Components/Loader';

const Header = lazy(() => import('./Components/Header'));

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <div>
          <p>App Testing</p>
          <Suspense fallback={<Loader />}>
            <Header />
          </Suspense>
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
};
export default App;
