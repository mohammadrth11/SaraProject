// import MainBtn from "../atoms/Buttoms";

// import { SheetDemo } from "../molecule/SheetDemo";
// import MainBtn from "../atoms/Buttoms";
import { Link } from "react-router-dom";
import MobileButtom from "../atoms/MobileButtom";
import { navLinks } from "../utls";

export default function Navbar() {
  return (
    <header className="absolute top-12  z-10 w-full">
      <div className="container flex items-center">
        <a href="#" className="block ">
          <img src="/logo.svg" alt="Logo" />
        </a>
        <div className="flex flex-1 items-center justify-between pl-50">
          <nav aria-label="Global" className="hidden md:block ">
            <ul className="flex items-center gap-6 text-sm">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    to={href}
                    className="text-white transition hover:text-blue-400 pl-5"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="gap-4">
            <div className="sm:flex sm:gap-4 hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li className="text-white transition hover:text-blue-300 cursor-pointer ">
                  Login
                </li>
                <li className="cursor-pointer">
                  <img src="../../../public/cartIcon (2).svg" alt="" />
                </li>
              </ul>
            </div>

            <MobileButtom />
          </div>
        </div>
      </div>
    </header>
  );
}
