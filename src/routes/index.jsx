import { Suspense, lazy } from "react";
import { useRoutes, Outlet, Navigate } from "react-router-dom";

const Home = lazy(() => import("src/pages/home"));

// const NotFound = lazy(() => import("../Pages/NotFound/NotFound"));

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      element: (
        <Suspense fallback={""}>
          <Outlet />
        </Suspense>
      ),
      children: [{ path: "home", element: <Home /> }],
    },

    {
      path: "*",
      element: (
        <Navigate
          to="/404"
          replace
        />
      ),
    },
  ]);
}
