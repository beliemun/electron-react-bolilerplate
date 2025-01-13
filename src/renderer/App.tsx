import { AdminDrawer, FoundationLayout } from '@components/tamplates';
import { foundationRoutes, privateRoutes, publicRoutes } from '@routes';
import { PrivateGuard, PublicGuard } from '@routes/components';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route
          element={
            <AdminDrawer>
              <FoundationLayout />
            </AdminDrawer>
          }
        >
          {foundationRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>

        <Route
          element={
            <AdminDrawer>
              <PublicGuard />
            </AdminDrawer>
          }
        >
          {publicRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>

        <Route
          element={
            <AdminDrawer>
              <PrivateGuard />
            </AdminDrawer>
          }
        >
          {privateRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>
      </Routes>
    </Router>
  );
}
