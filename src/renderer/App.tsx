import { FoundationLayout } from '@components/tamplates';
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
        <Route element={<FoundationLayout />}>
          {foundationRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>

        <Route element={<PublicGuard />}>
          {publicRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>

        <Route element={<PrivateGuard />}>
          {privateRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>
      </Routes>
    </Router>
  );
}
