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
      <div className="mx-auto grid grid-cols-[11fr_1fr] md:grid-cols-[4fr_1fr] w-full max-w-3xl px-6 items-center py-4 gap-x-2 md:gap-x-14">
        <div className="flex min-w-0 grow md:basis-2/3 items-center justify-between">
          <a
            href={`${import.meta.env.BASE_URL}`}
            className="main-title text-secondary-text text-base md:text-2xl tracking-widest font-light md:font-thin"
          >
            ZOLTAN ON SOFTWARE
          </a>
          {/* Mobile burger menu */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="flex flex-col justify-between md:hidden w-4 h-4 focus-visible:ring-2 focus-visible:ring-accent"
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
          <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-primary-text" />
        </div>
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <nav className="w-full" id="mobile-menu" class="mobile-menu md:hidden">
          <ul className="text-right px-6">
            {NAV_LINKS.map((link) => (
              <li
                key={link.name}
                className="border-b py-2 active:scale-105 active:font-medium active:border-b-2"
              >
                <a href={link.href} className="block">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Header;
