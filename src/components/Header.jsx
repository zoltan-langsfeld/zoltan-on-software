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
  };

  return (
    <div className="sticky top-0 z-10 backdrop-blur-md">
      <div className="grow mx-auto flex max-w-3xl items-center py-4 px-6 gap-x-6 md:gap-x-18">
        <div className="grow md:basis-2/3 flex items-center justify-between">
          <a
            href="/zoltan-on-software"
            className="font-sans2 text-base md:text-2xl tracking-widest font-light"
          >
            ZOLTAN ON SOFTWARE
          </a>
          {/* Mobile burger menu */}
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="flex flex-col justify-between md:hidden w-4 h-4 focus:outline-none"
          >
            <span
              className={`h-0.5 w-4 bg-secondary-text origin-center transition-all duration-200 ease-in-out
                ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`}
            />
            <span
              className={`h-0.5 w-4 bg-secondary-text origin-center transition-all duration-200 ease-in-out
                ${isOpen ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`h-0.5 w-4 bg-secondary-text origin-center transition-all duration-200 ease-in-out
                ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
            />
          </button>
        </div>

        {/* toggle for dark and light mode */}
        <div className="md:basis-1/3 flex justify-end">
          <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-secondary-text" />
        </div>
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="w-full">
          <ul className="text-right px-6">
            {NAV_LINKS.map((link) => (
              <li key={link.name} className="border-b py-2">
                <a href={link.href} className="block text-secondary-text">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
