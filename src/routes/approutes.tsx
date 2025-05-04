import { RouteObject } from "react-router";
import { AuthLayout, DashboardLayout } from "../layouts";
import {
  Register,
  Login,
  ForgotPassword,
  ResetLinkSuccess,
  ResetPassword,
  ReactivateAccount,
  ReactivateAccountSuccess,
  VerifyEmail,
  Home,
} from "../pages";
import { Suspense } from "react";
import { Loader } from "../components";

const routes: RouteObject[] = [
  {
    path: "/account",
    element: (
      <Suspense fallback={<Loader />}>
        <AuthLayout />
      </Suspense>
    ),
    children: [
      {
        path: "register",
        element: (
          <Suspense fallback={<Loader />}>
            <Register />
          </Suspense>
        ),
      },
      {
        path: "login",
        element: (
          <Suspense fallback={<Loader />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "verify-email",
        element: (
          <Suspense fallback={<Loader />}>
            <VerifyEmail />
          </Suspense>
        ),
      },
      {
        path: "forgot-password",
        element: (
          <Suspense fallback={<Loader />}>
            <ForgotPassword />
          </Suspense>
        ),
      },
      {
        path: "reactivate",
        element: (
          <Suspense fallback={<Loader />}>
            <ReactivateAccount />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "reset-link-success",
    element: (
      <Suspense fallback={<Loader />}>
        <ResetLinkSuccess />
      </Suspense>
    ),
  },
  {
    path: "reactivate-success",
    element: (
      <Suspense fallback={<Loader />}>
        <ReactivateAccountSuccess />
      </Suspense>
    ),
  },
  {
    path: "reset-password",
    element: (
      <Suspense fallback={<Loader />}>
        <ResetPassword />
      </Suspense>
    ),
  },
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <DashboardLayout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        ),
      },
    ],
  },
];

export default routes;
