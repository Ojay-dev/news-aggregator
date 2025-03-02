import { Suspense } from 'react';
import { Route, Routes } from 'react-router';
import HomePage from '../pages/IndexPage';
import SingleNewsPage from '../pages/SingleNewsPage';

const RouterConfig: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/article/:id" element={<SingleNewsPage />} />
      </Routes>
    </Suspense>
  );
};

export default RouterConfig;
