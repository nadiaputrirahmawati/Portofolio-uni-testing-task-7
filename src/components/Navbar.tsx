import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { NavLink, useLocation } from "react-router-dom";
import gambar from "../assets/story.png";

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const location = useLocation();

  const handleSetActive = (section: string) => {
    setActiveSection(section);
  };

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isBlogOrContact =
    location.pathname === "/blog" || location.pathname === "/contact";

  return (
    <div>
      <div
        className={`fixed top-0 left-0 w-full z-20 transition-colors duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
        data-testid="navbar"
      >
        <div className="navbar container mx-auto mt-2 mb-2">
          <div className="flex-1">
            <a className="w-40">
              <img src={gambar} alt="Logo" className="w-44 h-auto" />
            </a>
          </div>

          {/* Menu untuk Desktop */}
          <div className="hidden lg:flex">
            <ul className="flex px-1 space-x-4">
              {isBlogOrContact ? (
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `cursor-pointer w-32 text-center rounded-full border-2 border-dark text-dark font-semibold p-1 ${
                      isActive ? "bg-dark text-white" : "hover:bg-gray-100"
                    }`
                  }
                  data-testid="home-link"
                >
                  Home
                </NavLink>
              ) : (
                <ScrollLink
                  to="home"
                  smooth
                  duration={500}
                  offset={-80}
                  className={`cursor-pointer w-32 text-center rounded-full border-2 border-dark text-dark font-semibold p-1 ${
                    activeSection === "home" ? "bg-dark text-white" : ""
                  }`}
                  onClick={() => handleSetActive("home")}
                  data-testid="home-link"
                >
                  Home
                </ScrollLink>
              )}

              {!isBlogOrContact && (
                <>
                  <ScrollLink
                    to="about"
                    smooth
                    duration={500}
                    offset={-80}
                    className={`cursor-pointer w-32 text-center rounded-full border-2 border-dark text-dark font-semibold p-1 ${
                      activeSection === "about"
                        ? "bg-dark text-white"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => handleSetActive("about")}
                    data-testid="about-link"
                  >
                    About
                  </ScrollLink>

                  <ScrollLink
                    to="portfolio"
                    smooth
                    duration={500}
                    offset={-80}
                    className={`cursor-pointer w-32 text-center rounded-full border-2 border-dark text-dark font-semibold p-1 ${
                      activeSection === "portfolio"
                        ? "bg-dark text-white"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => handleSetActive("portfolio")}
                    data-testid="portfolio-link"
                  >
                    Portfolio
                  </ScrollLink>
                </>
              )}

              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `cursor-pointer w-32 text-center rounded-full border-2 border-dark text-dark font-semibold p-1 ${
                    isActive ? "bg-dark text-white" : "hover:bg-gray-100"
                  }`
                }
                data-testid="blog-link"
              >
                Blog
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `cursor-pointer w-32 text-center rounded-full border-2 border-dark text-dark font-semibold p-1 ${
                    isActive ? "bg-dark text-white" : "hover:bg-gray-100"
                  }`
                }
                data-testid="contact-link"
              >
                Contact
              </NavLink>
            </ul>
          </div>

          {/* Menu Hamburger untuk Mobile */}
          <div className="lg:hidden">
            <button
              className="btn btn-square btn-ghost"
              aria-label="Open menu"
              onClick={handleToggleModal}
              data-testid="hamburger-btn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Modal untuk menu mobile */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40"
          onClick={handleToggleModal}
          data-testid="modal-overlay"
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-64"
            onClick={(e) => e.stopPropagation()}
            data-testid="modal"
          >
            <ul className="space-y-4">
              {isBlogOrContact ? (
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `cursor-pointer block px-4 py-2 rounded-md ${
                      isActive ? "bg-dark text-white" : "hover:bg-gray-100"
                    }`
                  }
                  data-testid="home-link-mobile"
                >
                  Home
                </NavLink>
              ) : (
                <ScrollLink
                  to="home"
                  smooth
                  duration={500}
                  offset={-80}
                  className={`cursor-pointer block px-4 py-2 rounded-md ${
                    activeSection === "home"
                      ? "bg-dark text-white"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => handleSetActive("home")}
                  data-testid="home-link-mobile"
                >
                  Home
                </ScrollLink>
              )}

              {!isBlogOrContact && (
                <>
                  <ScrollLink
                    to="about"
                    smooth
                    duration={500}
                    offset={-80}
                    className={`cursor-pointer block px-4 py-2 rounded-md ${
                      activeSection === "about"
                        ? "bg-dark text-white"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => handleSetActive("about")}
                    data-testid="about-link-mobile"
                  >
                    About
                  </ScrollLink>

                  <ScrollLink
                    to="portfolio"
                    smooth
                    duration={500}
                    offset={-80}
                    className={`cursor-pointer block px-4 py-2 rounded-md ${
                      activeSection === "portfolio"
                        ? "bg-dark text-white"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => handleSetActive("portfolio")}
                    data-testid="portfolio-link-mobile"
                  >
                    Portfolio
                  </ScrollLink>
                </>
              )}

              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `cursor-pointer block px-4 py-2 rounded-md ${
                    isActive ? "bg-dark text-white" : "hover:bg-gray-100"
                  }`
                }
                data-testid="blog-link-mobile"
              >
                Blog
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `cursor-pointer block px-4 py-2 rounded-md ${
                    isActive ? "bg-dark text-white" : "hover:bg-gray-100"
                  }`
                }
                data-testid="contact-link-mobile"
              >
                Contact
              </NavLink>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
