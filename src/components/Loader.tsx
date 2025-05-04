import logo from "../assets/logo2.svg";
import preloadImage from "../libs/preloadImage";

export function Loader() {
  preloadImage(logo);
  return (
    <div className="flex items-center justify-center min-h-screen gap-2">
      <img src={logo} alt="logo" />
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[var(--paint-sky)]"></div>
    </div>
  );
}
