/* eslint-disable @typescript-eslint/no-explicit-any */
import AdminActiveGuard from '@/common/guards/AdminActiveGuard';
import CanActiveGuard from '@/common/guards/CanActiveGuard';
import React, { ElementType, Suspense } from 'react';
import { Route } from 'react-router-dom';

const SuspenseLoadable = (Component: ElementType) => (props: any) => (
  <Suspense>
    <Component {...props} />
  </Suspense>
);

const DashboardLayout = SuspenseLoadable(React.lazy(() => import('@/components/templates/DashboardLayout')));
const PaymentHistoryPage = SuspenseLoadable(React.lazy(() => import('@/pages/payment-history')));
const PaymentPage = SuspenseLoadable(React.lazy(() => import('@/pages/payment')));
const PaymentCompletionPage = SuspenseLoadable(React.lazy(() => import('@/pages/payment-completion')));
const ProductsPage = SuspenseLoadable(React.lazy(() => import('@/pages/products')));
const UserManagementPage = SuspenseLoadable(React.lazy(() => import('@/pages/user-management')));
const ProductManagementPage = SuspenseLoadable(React.lazy(() => import('@/pages/product-management')));

const DashboardRoutes = [
  <Route key='Dashboard' path='/' handle={{ crumb: 'Dashboard' }} element={<CanActiveGuard component={<DashboardLayout />} />}>
    {/* User route */}
    <Route key='Payment history' handle={{ crumb: 'Payment history' }} path='' element={<PaymentHistoryPage />} />
    <Route key='Payment' handle={{ crumb: 'Payment: Transfer money' }} path='payment' element={<PaymentPage />} />
    <Route key='Payment Completion' handle={{ crumb: 'Payment: Completion' }} path='completion' element={<PaymentCompletionPage />} />
    <Route key='Products' handle={{ crumb: 'Products' }} path='products' element={<ProductsPage />} />
    {/* Admin route */}
    <Route
      key='User management'
      path='user-management'
      handle={{ crumb: 'User management' }}
      element={<AdminActiveGuard component={<UserManagementPage />} />}
    />
    <Route
      key='Product management'
      path='product-management'
      handle={{ crumb: 'Product management' }}
      element={<AdminActiveGuard component={<ProductManagementPage />} />}
    />
  </Route>
];

export default DashboardRoutes;
