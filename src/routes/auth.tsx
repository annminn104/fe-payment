/* eslint-disable @typescript-eslint/no-explicit-any */
import NonActiveGuard from '@/common/guards/NonActiveGuard';
import React, { ElementType, Suspense } from 'react';
import { Route } from 'react-router-dom';

const SuspenseLoadable = (Component: ElementType) => (props: any) => (
  <Suspense>
    <Component {...props} />
  </Suspense>
);

const LoginPage = SuspenseLoadable(React.lazy(() => import('@/pages/login')));

const AuthRoutes = [
  <Route key='Auth Login' path='/auth/login' handle={{ crumb: 'Auth' }} element={<NonActiveGuard component={<LoginPage />} />}></Route>
];

export default AuthRoutes;
