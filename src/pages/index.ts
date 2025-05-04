import { lazy } from "react";

export const Register = lazy(() => import("./auth/register"));
export const Login = lazy(() => import("./auth/login"));
export const ForgotPassword = lazy(() => import("./auth/forgotPassword"));
export const ResetLinkSuccess = lazy(
  () => import("./auth/forgotPassword/ResetLinkSuccess")
);
export const ResetPassword = lazy(
  () => import("./auth/forgotPassword/ResetPassword")
);
export const ReactivateAccount = lazy(() => import("./auth/reactivate"));
export const ReactivateAccountSuccess = lazy(
  () => import("./auth/reactivate/ReactivateAccountSuccess")
);
export const VerifyEmail = lazy(() => import("./auth/verifyEmail"));
export const Home = lazy(() => import("./dashboard"));
