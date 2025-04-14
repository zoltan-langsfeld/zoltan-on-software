import SvgIcon from "@/utils/SvgReactIcons";
import { useState, useEffect, useRef } from "react";

const NAV_LINKS = [
  { name: "home", href: import.meta.env.BASE_URL },
  { name: "blog", href: `${import.meta.env.BASE_URL}/blog` },
  { name: "about", href: `${import.meta.env.BASE_URL}/about` },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log("Menu toggled:", !isOpen);
  };

  return (
    <div className="sticky top-0 z-10 backdrop-blur-md">
      <div className="mx-auto flex max-w-3xl items-center justify-between py-4 px-6">
        <a
          href="/zoltan-on-software"
          className="font-sans2 text-base md:text-2xl tracking-widest font-light"
        >
          ZOLTAN ON SOFTWARE
        </a>
        <div className="relative flex items-center gap-x-6">
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button
            onClick={toggleMenu}
            className="block md:hidden w-6 h-6 focus:outline-none"
          >
            <SvgIcon name="menu" />
          </button>

          {/* Dropdown menu */}
          {isOpen && (
            <div className="absolute right-10 top-8 w-32 bg-white shadow-lg rounded-sm">
              <ul className="py-2 text-right">
                {NAV_LINKS.map((link) => (
                  <li key={link.name} className="px-4 py-2 hover:bg-gray-100">
                    <a href={link.href} className="block text-gray-800">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {/* toggle for dark and light mode */}
          <div className=" w-4 h-4 md:w-6 md:h-6 rounded-full transition-colors bg-primary-text" />
        </div>
      </div>
    </div>
  );
};

export default Header;
