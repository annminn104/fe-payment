import { Outlet } from 'react-router-dom';

interface IDashboardPageProps {
  children?: React.ReactNode;
}
const DashboardPage: React.FC<IDashboardPageProps> = ({ children }) => {
  return (
    <div>
      <h3>Dashboard page</h3>
      {children}
      <Outlet />
    </div>
  );
};

export default DashboardPage;
