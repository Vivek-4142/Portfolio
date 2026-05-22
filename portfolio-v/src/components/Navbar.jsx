import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Tech Stack", href: "#techstack" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-black/90 border-b border-white/5 backdrop-blur-md py-4 shadow-[0_4px_30px_rgba(0,0,0,0.7)]" 
          : "bg-transparent py-6"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-center">
        {/* Desktop links centered */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-sans font-semibold uppercase tracking-[0.2em] text-gray-300 hover:text-white transition-all duration-300 relative group"
            >
              {link.name}
              <span className="absolute bottom-[-6px] left-0 w-0 h-[2px] bg-purple-600 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Mobile menu trigger */}
        <button
          className="md:hidden ml-auto text-2xl text-purple-400 hover:text-white transition"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Mobile menu dropdown */}
      {open && (
        <div className="md:hidden absolute top-full left-0 w-full p-6 flex flex-col gap-5 bg-black/95 border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-sans font-semibold uppercase tracking-[0.2em] text-gray-300 hover:text-purple-400 py-1 transition"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;