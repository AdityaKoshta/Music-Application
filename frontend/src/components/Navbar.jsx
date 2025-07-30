import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".remix-dropdown")) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="/assets/logo.png" alt="Logo" className="h-20 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 text-lg font-medium">
          <li className="hover:scale-105 transition">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:scale-105 transition">
            <Link to="/allPost">All Posts</Link>
          </li>

          {/* Remixes Dropdown */}
          <li className="relative remix-dropdown">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="hover:scale-105 transition flex items-center gap-1"
            >
              Remixes ▾
            </button>
            {showDropdown && (
              <ul className="absolute top-full mt-2 bg-black text-white border border-white rounded shadow-lg w-44 z-50">
                <li className="px-4 py-2 hover:bg-white hover:text-black transition">
                  <Link to="/remixes/single" onClick={() => setShowDropdown(false)}>
                    Single Remix
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-white hover:text-black transition">
                  <Link to="/remixes/album" onClick={() => setShowDropdown(false)}>
                    Album Remix
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="hover:scale-105 transition">
            <Link to="/gfxWork">GFX Work</Link>
          </li>
          <li className="hover:scale-105 transition">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:scale-105 transition">
            <Link to="/store">🛒</Link>
          </li>
          <li className="hover:scale-105 transition">
            <button>🌐</button>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <span className="text-3xl">{isOpen ? "✖" : "☰"}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden px-6 pb-4 bg-black text-base font-medium space-y-4">
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/allPost" onClick={() => setIsOpen(false)}>
              All Posts
            </Link>
          </li>

          {/* Mobile Dropdown */}
          <li>
            <div className="font-medium">Remixes</div>
            <ul className="pl-4 space-y-2">
              <li>
                <Link to="/remixes/single" onClick={() => setIsOpen(false)}>
                  • Single Remix
                </Link>
              </li>
              <li>
                <Link to="/remixes/album" onClick={() => setIsOpen(false)}>
                  • Album Remix
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/gfxWork" onClick={() => setIsOpen(false)}>
              GFX Work
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/store" onClick={() => setIsOpen(false)}>
              Store 🛒
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
