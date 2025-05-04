import { ActionButton, Logo } from "../components";
import { NavLink, Outlet } from "react-router";
import logoutIcon from "../assets/emergency-exit.svg";
import { dashboardLinks } from "../libs/constants";
import { Menu } from "lucide-react";

export default function DashboardLayout() {
  return (
    <main className="container mx-auto py-6 px-4">
      <div className="flex justify-between items-center mb-10">
        <Logo />
        <ActionButton
          text={
            <>
              <img src={logoutIcon} alt="" />
              Sign out
            </>
          }
          type="button"
          classname="hidden md:flex btn-outline text-[var(--paint-red)]"
        />
        <Menu className="md:hidden" />
      </div>
      <div className="hidden md:flex gap-8 items-center mb-10">
        {dashboardLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive, isPending }) =>
              `flex items-center gap-2 ${
                isPending
                  ? "text-[var(--paint-black-50)]"
                  : isActive
                  ? "text-[var(--paint-sky)] font-semibold border-b-[1.8px] border-[var(--paint-sky)] pb-1"
                  : "text-[var(--paint-black-60)]"
              }`
            }
          >
            <link.icon />
            {link.label}
          </NavLink>
        ))}
      </div>
      <Outlet />
    </main>
  );
}
