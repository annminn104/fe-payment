import CanActiveGuard from '@/common/guards/CanActiveGuard';
import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';

const DashboardLayout = React.lazy(() => import('@/components/templates/DashboardLayout'));
const DashboardPage = React.lazy(() => import('@/pages/dashboard'));

const DashboardRoutes = [
  <Route
    key='Dashboard layout'
    path='/'
    element={
      <CanActiveGuard
        component={
          <Suspense>
            <DashboardLayout />
          </Suspense>
        }
      />
    }
  >
    <Route
      key='Dashboard page'
      path=''
      element={
        <Suspense>
          <DashboardPage />
        </Suspense>
      }
    ></Route>
  </Route>
];

export default DashboardRoutes;
