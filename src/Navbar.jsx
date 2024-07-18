import { useState, useEffect } from "react";

function Navbar() {
  const Navigation = [
    { name: "Home", href: "#Home" },
    { name: "About Me", href: "#About" },
    { name: "Services", href: "#Services" },
    { name: "Contact", href: "#Contact" },
  ];

  const [backgroundColor, setBackgroundColor] = useState("#18181B");
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 80) {
      setBackgroundColor("#202024");
    } else {
      setBackgroundColor("#18181B");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavItemClick = (index) => {
    setActiveIndex(index);
    closeMobileMenu();
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <section className="sticky top-0 z-9999" style={{ backgroundColor: backgroundColor }}>
      <nav
        style={{ backgroundColor: backgroundColor }}
        className="w-100 lg:bg-[#202024] md:bg-[#6f6ff9] shadow-md transition ease-in h-[80px] flex items-center justify-between px-5 sm:px-10"
      >
        <div className="font-extrabold text-zinc-100">IB.</div>
        {/* Responsive Burger Menu */}
        <div className="lg:hidden">
          <button
            className="text-zinc-300 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <ul className='hidden lg:flex flex-row text-base gap-6 text-zinc-300'>
          {Navigation.map((item, index) => (
            <li key={item.name}>
              <a
                className={index === activeIndex ? 'button-nav-active' : 'button-nav'}
                onClick={() => handleNavItemClick(index)}
                href={item.href}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu */}
      <ul
          className={`${isMobileMenuOpen ? "block" : "hidden"
            } lg:hidden text-base text-zinc-300 space-x-0 bg-[#202024]`}
        >
          {Navigation.map((item, index) => (
            <li key={item.name} className="px-10 py-2 bg-[#202024]">
              <a
                className={
                  index === activeIndex ? "button-nav-active" : "button-nav"
                }
                onClick={() => handleNavItemClick(index)}
                href={item.href}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
    </section>
  );
}

export default Navbar;
