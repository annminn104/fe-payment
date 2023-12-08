import { BrowserRouter, Routes } from 'react-router-dom';

import DashboardRoutes from './routes/dashboard';
import AuthRoutes from './routes/auth';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {DashboardRoutes}
        {AuthRoutes}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
