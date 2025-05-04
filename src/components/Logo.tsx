import { Link } from "react-router";
import preloadImage from "../libs/preloadImage";
import logo from "../assets/logo2.svg";

export default function Logo() {
  preloadImage(logo);
  return (
    <Link to="/">
      <img src={logo} alt="logo" />
    </Link>
  );
}
