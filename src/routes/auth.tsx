import NonActiveGuard from '@/common/guards/NonActiveGuard';
import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';

const LoginPage = React.lazy(() => import('@/pages/login'));

const AuthRoutes = [
  <Route
    key='Auth Login'
    path='/auth/login'
    element={
      <NonActiveGuard
        component={
          <Suspense>
            <LoginPage />
          </Suspense>
        }
      />
    }
  ></Route>
];

export default AuthRoutes;
