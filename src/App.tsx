import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import HomePage from './pages/IndexPage';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index element={<HomePage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
