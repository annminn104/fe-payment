import CanActiveGuard from '@/common/guards/CanActiveGuard';
import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';

const DashboardLayout = React.lazy(() => import('@/components/templates/DashboardLayout'));
const PaymentHistoryPage = React.lazy(() => import('@/pages/payment-history'));

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
      key='Payment history page'
      path=''
      element={
        <Suspense>
          <PaymentHistoryPage />
        </Suspense>
      }
    />
  </Route>
];

export default DashboardRoutes;
