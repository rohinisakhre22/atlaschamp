import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { ServicePage } from './pages/ServicePage';

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="services/:serviceId" element={<ServicePage />} />
      </Route>
    </Routes>
  );
}
