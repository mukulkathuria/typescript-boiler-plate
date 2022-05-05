import React, { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MyDiv } from './app.style';
import ErrorBoundary from './Components/ErrorBoundary';
import Loader from './Components/Loader';

const Header = lazy(() => import('./Components/Header'));

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <MyDiv>
          <p>App Testing</p>
          <Suspense fallback={<Loader />}>
            <Header />
          </Suspense>
        </MyDiv>
      </BrowserRouter>
    </ErrorBoundary>
  );
};
export default App;
