import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import NavbarDropdown from "./NavbarDropdown";
import { digitalMarketingDropdown, filmMakingDropdown } from "../../utils/data";
import './styles/scrollbar.css';

gsap.registerPlugin(useGSAP);

function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [filmMakingMenu, setFilmMakingMenu] = useState(false);
  const [digitalMarketingMenu, setDigitalMarketingMenu] = useState(false);
  const container = useRef();
  const menu = useRef();

  Navbar.propTypes = {
    darkMode: PropTypes.bool.isRequired,
    setDarkMode: PropTypes.func.isRequired,
  };

  useEffect(() => {
    gsap.set(menu.current, {
      display: "none",
      y: "-120%",
    });
  }, []);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          duration: 0.5,
          ease: "power2.inOut",
        },
      });

      if (isOpen) {
        gsap.set(menu.current, {
          display: "block",
          y: "-120%",
        });

        tl.to(menu.current, {
          y: "0%",
        });
      } else {
        if (menu.current.style.display !== "none") {
          tl.to(menu.current, {
            y: "-120%",
          }).set(
            menu.current,
            {
              delay: 0.4,
              display: "none",
            },
            ">"
          );
        }
      }
    },
    { dependencies: [isOpen], scope: container }
  );

  const formatToTitleCase = (str) => {
    return str
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  return (
    <div
      className="sticky top-0 flex justify-between items-center w-full px-10 py-4 z-50 bg-light-navbar dark:bg-dark-navbar text-light-foreground dark:text-dark-foreground backdrop-blur-2xl"
      ref={container}
    >
      <div className="hidden lg:flex items-center gap-2">
        <Link
          to="/"
          className="px-3 py-1 border rounded-3xl border-light-foreground hover:bg-light-hover-background dark:border-dark-foreground dark:hover:bg-dark-hover-background transition-all duration-300"
        >
          Home
        </Link>
        <div
          className="relative group"
          onMouseEnter={() => setActiveDropdown("film")}
        >
          <Link
            to="/film-making"
            onClick={() => setActiveDropdown(null)}
            className="px-3 py-1 border rounded-3xl border-light-foreground hover:bg-light-hover-background dark:border-dark-foreground dark:hover:bg-dark-hover-background transition-all duration-300"
          >
            Film Making
          </Link>
          <div
            className="absolute top-full pt-2"
            onMouseLeave={() => setActiveDropdown(null)}
          >
            {activeDropdown === "film" && (
              <NavbarDropdown
                menu="film-making"
                dropdownVisible={true}
                setDropdownVisible={() => {}}
              />
            )}
          </div>
        </div>
        <div
          className="relative group"
          onMouseEnter={() => setActiveDropdown("digital")}
        >
          <Link
            to="/digital-marketing"
            onClick={() => setActiveDropdown(null)}
            className="px-3 py-1 border rounded-3xl border-light-foreground hover:bg-light-hover-background dark:border-dark-foreground dark:hover:bg-dark-hover-background transition-all duration-300"
          >
            Digital Marketing
          </Link>
          <div
            className="absolute top-full pt-2"
            onMouseLeave={() => setActiveDropdown(null)}
          >
            {activeDropdown === "digital" && (
              <NavbarDropdown
                menu="digital-marketing"
                dropdownVisible={true}
                setDropdownVisible={() => {}}
              />
            )}
          </div>
        </div>
      </div>
      <div className="h-[50px] w-auto">
        <img
          src="/logoNameCropped.webp"
          className="w-full h-full object-cover"
          alt="Logo"
        />
      </div>
      <div className="hidden lg:flex items-center gap-2">
        <Link
          to="/about"
          className="px-3 py-1 border rounded-3xl border-light-foreground hover:bg-light-hover-background dark:border-dark-foreground dark:hover:bg-dark-hover-background transition-all duration-300"
          onMouseEnter={() => setActiveDropdown(null)}
        >
          About Us
        </Link>
        <Link
          to="/contact"
          className="px-3 py-1 border rounded-3xl border-light-foreground hover:bg-light-hover-background dark:border-dark-foreground dark:hover:bg-dark-hover-background transition-all duration-300"
          onMouseEnter={() => setActiveDropdown(null)}
        >
          Contact Us
        </Link>
        <button
          className="px-3 py-1 border rounded-3xl border-light-foreground hover:bg-light-hover-background dark:border-dark-foreground dark:hover:bg-dark-hover-background transition-all duration-300"
          onClick={() => setDarkMode(!darkMode)}
          onMouseEnter={() => setActiveDropdown(null)}
        >
          {darkMode ? "Light" : "Dark"}
        </button>
      </div>
      <div className="flex lg:hidden items-center gap-2">
        <button
          className="px-3 py-1 border rounded-3xl border-light-foreground hover:bg-light-hover-background dark:border-dark-foreground dark:hover:bg-dark-hover-background transition-all duration-300"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "Light" : "Dark"}
        </button>
        <button
          className="px-3 py-1 border rounded-3xl border-light-foreground hover:bg-light-hover-background dark:border-dark-foreground dark:hover:bg-dark-hover-background transition-all duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>
      <div
        className="absolute top-[80px] left-1/2 transform -translate-x-1/2 w-[90%] h-[400px] overflow-y-scroll px-2 py-6 transition z-10 bg-white dark:bg-black rounded-3xl custom-scrollbar scroll-my-4"
        role="dialog"
        aria-modal="true"
        ref={menu}
      >
        <div className="flex flex-col items-center w-full">
          <Link
            to="/"
            className="px-3 py-2 text-[33px] hover:bg-light-hover-background dark:hover:bg-dark-hover-background rounded-md"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <div className="px-3 py-2 text-[33px] hover:bg-light-hover-background dark:hover:bg-dark-hover-background rounded-md">
            <div
              className="flex gap-2 justify-center items-baseline mb-3"
              onClick={() => setFilmMakingMenu(!filmMakingMenu)}
            >
              <span>Film Making</span>
              <img
                src={`/${darkMode ? "dark" : "light"}/chevron-up-${
                  darkMode ? "dark" : "light"
                }.svg`}
                className={`${
                  !filmMakingMenu ? "rotate-180" : "rotate-0"
                } w-[24px]`}
              />
            </div>
          </div>

          {filmMakingMenu && (
            <>
              <Link
                to="/film-making"
                onClick={() => {
                  setIsOpen(false);
                  filmMakingMenu(false);
                }}
                className="px-3 py-2 text-[30px] text-center hover:bg-light-hover-background dark:hover:bg-dark-hover-background rounded-md"
              >
                Visit Page
              </Link>
              {filmMakingDropdown.map((item, index) => (
                <Link
                  key={index}
                  to={`/film-making/${item.toLowerCase().replace(/ /g, "-")}`}
                  onClick={() => {
                    setIsOpen(false);
                    setFilmMakingMenu(false);
                  }}
                  className="px-3 py-2 text-[30px] text-center hover:bg-light-hover-background dark:hover:bg-dark-hover-background rounded-md"
                >
                  {formatToTitleCase(item)}
                </Link>
              ))}
            </>
          )}

          <div className="px-3 py-2 text-[33px] hover:bg-light-hover-background dark:hover:bg-dark-hover-background rounded-md">
            <div
              className="flex gap-2 justify-center items-center mb-3"
              onClick={() => setDigitalMarketingMenu(!digitalMarketingMenu)}
            >
              <span>Digital Marketing</span>
              <img
                src={`/${darkMode ? "dark" : "light"}/chevron-up-${
                  darkMode ? "dark" : "light"
                }.svg`}
                className={`${
                  !digitalMarketingMenu ? "rotate-180" : "rotate-0"
                } w-[24px]`}
              />
            </div>
          </div>
          {digitalMarketingMenu && (
            <>
              <Link
                to="/digital-marketing"
                onClick={() => {
                  setIsOpen(false);
                  setDigitalMarketingMenu(false);
                }}
                className="px-3 py-2 text-[30px] text-center hover:bg-light-hover-background dark:hover:bg-dark-hover-background rounded-md"
              >
                Visit Page
              </Link>
              {digitalMarketingDropdown.map((item, index) => (
                <Link
                  key={index}
                  to={`/digital-marketing/${item
                    .toLowerCase()
                    .replace(/ /g, "-")}`}
                  onClick={() => {
                    setIsOpen(false);
                    setDigitalMarketingMenu(false);
                  }}
                  className="px-3 py-2 text-[30px] text-center hover:bg-light-hover-background dark:hover:bg-dark-hover-background rounded-md"
                >
                  {formatToTitleCase(item)}
                </Link>
              ))}
            </>
          )}
          <Link
            to="/about"
            className="px-3 py-2 text-[33px] hover:bg-light-hover-background dark:hover:bg-dark-hover-background rounded-md"
            onClick={() => setIsOpen(false)}
          >
            About us
          </Link>
          <Link
            to="/contact"
            className="px-3 py-2 text-[33px] hover:bg-light-hover-background dark:hover:bg-dark-hover-background rounded-md"
            onClick={() => setIsOpen(false)}
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
