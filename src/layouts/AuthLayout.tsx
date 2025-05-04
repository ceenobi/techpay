import { Outlet } from "react-router";
import authImage from "../assets/Group.svg";
import preloadImage from "../libs/preloadImage";

export default function AuthLayout() {
  preloadImage(authImage);
  return (
    <main className="auth-bg min-h-screen items-center justify-center grid grid-cols-12">
      <div className="mt-[58px] col-span-12 lg:col-span-6">
        <Outlet />
      </div>
      <div className="hidden lg:block col-span-6 mx-auto space-y-10">
        <img src={authImage} alt="authImage" />
        <article className="flex flex-col gap-2 text-center">
          <h1 className="text-[2rem] font-bold text-black">
            Fast, Easy & Endless <br />{" "}
            <span className="text-[var(--paint-sky)] text-[2rem]">
              Transactions
            </span>
          </h1>
        </article>
      </div>
    </main>
  );
}
