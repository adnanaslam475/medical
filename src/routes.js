import React, { Fragment, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import useUser from "./components/Authentication/firebaseAuth/useUser.js";
import Loader from "./Layouts/Loader/Loader.js";

const Auth = lazy(() => import("./components/Authentication/firebaseAuth/auth.js"));
const App = lazy(() => import("./components/app.jsx"));
const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard.jsx"));
const Error500 = lazy(() => import("./pages/ErrorPages/Error500.jsx"));
const AuthLogin = lazy(() => import("./pages/AuthLogin/AuthLogin.jsx"));

const RoutesMain = () => {
  const user = { accessToken: true }

  return (
    <Fragment>
      <BrowserRouter>
        <React.Suspense fallback={<Loader />}>
          <Routes>
            {!user.accessToken ? (
              <Route path={``} element={<App />}>
                <Route>
                  <Route path={`/`} element={<Dashboard />} />
                  <Route path={`/dashboard`} element={<Dashboard />} />
                </Route>
              </Route>
            ) : (
              <Route path={`/`} element={<Auth />}>
                <Route index element={<AuthLogin />} />
                <Route path={`/login`} element={<AuthLogin />} />
              </Route>
            )}

            <Route path="*" element={<Error500 />} />
          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </Fragment>
  );
};
export default RoutesMain;
