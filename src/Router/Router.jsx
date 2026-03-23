import { createBrowserRouter } from "react-router";
import Root from "../components/Root";
import Error from "../components/Error";
import Home from "../components/Home";
import AllApp from "../components/AllApp";
import Installation from "../components/Installation";
import { Suspense } from "react";

import AppDetails from "../components/AppDetails";

const allAppPromise = fetch("/heroData.json").then((res) => res.json());
// const trendingPromise = fetch("/herodata8.json").then((res) => res.json());

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      { index: true, path: "/", Component: Home },
      {
        path: "/allApp",
        // loader:()=>fetch('/heroData.json'),
        // Component: AllApp

        element: (
          <Suspense
            fallback={
              <span className="loading loading-bars loading-xl text-primary "></span>
            }
          >
            <AllApp allAppPromise={allAppPromise}></AllApp>
          </Suspense>
        ),
      },
      {
        path: "/allApp/:id",
        element: (
          <Suspense
            fallback={
              <span className="loading loading-bars loading-xl text-primary "></span>
            }
          >
            <AppDetails allAppPromise={allAppPromise}></AppDetails>
          </Suspense>
        ),
      },
      {
        path: "/installation",
        element: (
          <Suspense
            fallback={
              <span className="loading loading-bars loading-xl text-primary "></span>
            }
          >
            <Installation allAppPromise={allAppPromise}></Installation>
          </Suspense>
        ),
      },
    ],
  },
]);
