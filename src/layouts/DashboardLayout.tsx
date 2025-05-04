import { ActionButton, Logo } from "../components";
import { Outlet } from "react-router";
import logoutIcon from "../assets/emergency-exit.svg";

export default function DashboardLayout() {
  return (
    <main className="container mx-auto py-6 px-4">
      <div className="flex justify-between items-center mb-8">
        <Logo />
        <ActionButton
          text={
            <>
              <img src={logoutIcon} alt="" />
              Sign out
            </>
          }
          type="button"
          classname="btn-outline text-[var(--paint-red)]"
        />
      </div>
      <Outlet />
    </main>
  );
}
