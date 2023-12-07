import { BrowserRouter, Routes } from 'react-router-dom';
import RootProviders from './providers';
import DashboardRoutes from './routes/dashboard';
import AuthRoutes from './routes/auth';

function App() {
  return (
    <RootProviders>
      <BrowserRouter>
        <Routes>
          {DashboardRoutes}
          {AuthRoutes}
        </Routes>
      </BrowserRouter>
    </RootProviders>
  );
}

export default App;
