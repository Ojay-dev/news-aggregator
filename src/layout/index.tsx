import { useState } from 'react';
import { NavLink } from 'react-router'; // Use `react-router-dom` instead of `react-router`
import NewsLogo from '../assets/images/news1-logo.png';
import HamburgerIcon from '../assets/svgs/dashboard-square-edit.svg';
import CloseIcon from '../assets/svgs/cancel-icon.svg';

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation items
  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/category/news', label: 'News' },
    { to: '/category/politics', label: 'Politics' },
    { to: '/category/sports', label: 'Sports' },
    { to: '/category/business', label: 'Business' },
    { to: '/category/entertainment', label: 'Entertainment' },
    { to: '/category/technology', label: 'Technology' },
  ];

  // Toggle menu function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="px-5">
      <header>
        <div className="relative mx-auto max-w-xl lg:max-w-[1440px]">
          <div className="relative flex items-center justify-center py-12">
            <NavLink
              to="/"
              className="absolute left-1/2 flex -translate-x-1/2 transform justify-center pt-6"
            >
              <img src={NewsLogo} alt="Logo" className="object-cover lg:w-1/2" />
            </NavLink>

            {/* Right-aligned Buttons (Visible on screens >= 1024px) */}
            <div className="ml-auto hidden items-center gap-x-20 lg:flex">
              <button className="font-inter text-base text-[#0307E4]">Sign in</button>
              <button className="font-inter rounded-3xl border border-[#0307E4] px-6 py-3 text-base text-[#0307E4]">
                Subscribe $0.50/mo
              </button>
            </div>
          </div>

          {/* Navigation (Visible on screens >= 1024px) */}
          <nav className="mb-16 hidden border-b border-b-[#A6A6A6] py-3 lg:block">
            <ul className="flex justify-center gap-x-10">
              {navItems.map((item, index) => (
                <li key={index}>
                  {item.to === '/' ? (
                    // Allow navigation only for the home route
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `font-inter m-2.5 block text-center text-base font-medium ${
                          isActive ? 'text-[#0307E4]' : 'text-[#A6A6A6]'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  ) : (
                    // Disable navigation for other routes
                    <span
                      className={`font-inter m-2.5 block cursor-not-allowed text-center text-base font-medium text-[#A6A6A6]`}
                    >
                      {item.label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Hamburger Icon (Visible on screens < 1024px) */}
        <button
          className="absolute top-12 right-5 z-50 lg:hidden"
          onClick={toggleMenu} // Toggle menu on click
        >
          <img
            src={isMenuOpen ? CloseIcon : HamburgerIcon} // Toggle between Hamburger and Close icons
            alt="Menu"
            className="h-6 w-6"
          />
        </button>

        {/* Mobile Menu (Visible on screens < 1024px) */}
        <div
          className={`fixed inset-0 z-40 bg-white transition-transform duration-300 ease-in-out lg:hidden ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="mt-24 flex flex-col items-center gap-y-6">
            {navItems.map((item, index) => (
              <div key={index}>
                {item.to === '/' ? (
                  // Allow navigation only for the home route
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `font-inter text-center text-base font-medium ${
                        isActive ? 'text-[#0307E4]' : 'text-[#A6A6A6]'
                      }`
                    }
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </NavLink>
                ) : (
                  // Disable navigation for other routes
                  <span className={`font-inter text-center text-base font-medium text-[#A6A6A6]`}>
                    {item.label}
                  </span>
                )}
              </div>
            ))}

            <div className="mt-10 flex flex-col items-center gap-y-6">
              <button className="font-inter text-base text-[#0307E4]">Sign in</button>
              <button className="font-inter rounded-3xl border border-[#0307E4] px-6 py-3 text-base text-[#0307E4]">
                Subscribe $0.50/mo
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Page Content */}
      <div className="mx-auto max-w-xl lg:max-w-[1440px]">{children}</div>
    </div>
  );
};

export default DefaultLayout;
