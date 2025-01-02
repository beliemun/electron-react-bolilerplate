import { FoundationLayout } from '@components/organasims';
import { privateRoutes, publicRoutes } from '@routes';
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
      <FoundationLayout>
        <Routes>
          {/* Public Routes */}
          <Route element={<PublicGuard />}>
            {publicRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Route>

          {/* Private Routes */}
          <Route element={<PrivateGuard />}>
            {privateRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Route>
        </Routes>
      </FoundationLayout>
    </Router>
  );
}
