
import { MapPin, Bus, Menu } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-green-600 via-blue-600 to-orange-500 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2">
          <Bus size={26} className="text-white" />
          <span className="font-bold text-xl tracking-wide">Easymove</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-yellow-200 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-yellow-200 transition">
            About
          </Link>
          <Link to="/routes" className="hover:text-yellow-200 transition">
            All Routes
          </Link>
          <Link to="/contact" className="hover:text-yellow-200 transition">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu (icon only for now) */}
        <button className="md:hidden p-2 hover:bg-white/10 rounded-lg transition">
          <Menu size={22} />
        </button>
      </div>

      {/* Optional Tagline Banner */}
      <div className="bg-black/20 text-center text-xs py-1">
        <MapPin size={12} className="inline mr-1" />
        Connecting every Lagos stop — Ikorodu to Ajah, Mile 2 to Yaba, effortlessly 🚌
      </div>
    </header>
  );
}
