import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

type Props = {};

export const AppRouter = (props: Props) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
            <Route
                key={path}
                path={path}
                element={(
                  <div className='page-wrapper'>{element}</div>
                )}
            />
        ))}
      </Routes>
    </Suspense>
  );
};