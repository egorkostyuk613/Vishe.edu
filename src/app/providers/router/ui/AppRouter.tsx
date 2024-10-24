import { Routes, Route } from "react-router-dom";

import { Suspense } from "react";
import { routeConfig } from "shared/config";

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading....</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path, children }: any) => (
          <Route key={path} element={element} path={path}>
            {children && children.map((childRoute: any) => (
              <Route
                key={childRoute.path}
                path={childRoute.path}
                element={childRoute.element}
              />
            ))}
          </Route>
        ))}
      </Routes>
    </Suspense>
  );
};
