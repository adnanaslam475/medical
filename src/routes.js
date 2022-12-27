import React, { Fragment, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useUser from "./components/Authentication/firebaseAuth/useUser";
import Loader from "./Layouts/Loader/Loader.js";

const Auth = lazy(() => import("./components/Authentication/firebaseAuth/auth.js"));
const App = lazy(() => import("./components/app.jsx"));
const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard.jsx"));
const FirstPage = lazy(() => import("./pages/FirstNav/First.jsx"));
const SecondInnerPage = lazy(() => import("./pages/SecondNav/SecondNav.jsx"));
const Error500 = lazy(() => import("./pages/ErrorPages/Error500.jsx"));
const AuthLogin = lazy(() => import("./pages/AuthLogin/AuthLogin.jsx"));

const RoutesMain = () => {
  const { user } = useUser();
  // console.log('useUser', user);

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
                  <Route index path={`/first`} element={<FirstPage />} />
                  <Route path={`/second/first`} element={<SecondInnerPage />} />
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
