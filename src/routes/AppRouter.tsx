import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth/pages/LoginPage';
import { NavBar } from '../components/NavBar';
import { HomePage } from '../pages/HomePage';
import { Panel } from '../panel/Panel';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <HomePage />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRoute>
              <Panel />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};
