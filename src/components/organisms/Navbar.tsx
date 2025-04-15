// import MainBtn from "../atoms/Buttoms";
// import { SheetDemo } from "../molecule/SheetDemo";

// import MainBtn from "../atoms/Buttoms";
import MobileButtom from "../atoms/MobileButtom";
import { navLinks } from "../utls";

export default function Navbar() {
  return (
    <header className="fixed top-12 w-full">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-2 sm:px-6 lg:px-4">
        <a href="#" className="block text-teal-600">
          <img src="/logo.svg" alt="Logo" />
        </a>
        <div className="flex flex-1 items-center justify-end md:justify-around">
          <nav aria-label="Global" className="hidden md:block ">
            <ul className="flex items-center gap-6 text-sm">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-white transition hover:text-blue-600"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {
              <div className="sm:flex sm:gap-4">
                <ul className="flex items-center gap-6 text-sm">
                  <li className="text-white transition hover:text-blue-600 cursor-pointer">
                    Login
                  </li>
                  <li className="cursor-pointer">
                    <img src="../../../public/cartIcon (2).svg" alt="" />
                  </li>
                </ul>
              </div>
            }

            <MobileButtom />
          </div>
        </div>
      </div>
    </header>
  );
}
