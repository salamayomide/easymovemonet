
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-700 via-blue-700 to-orange-600 text-white mt-10">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1 */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Easymove</h3>
          <p className="text-sm text-gray-100 leading-relaxed">
            Your trusted Lagos public transport companion. Find Danfo, BRT, and Korope routes — 
            from Ikorodu to Ajah, CMS to Mile 2 — faster, cheaper, and smarter.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-100">
            <li><a href="/" className="hover:text-yellow-300 transition">Home</a></li>
            <li><a href="/routes" className="hover:text-yellow-300 transition">All Routes</a></li>
            <li><a href="/about" className="hover:text-yellow-300 transition">About</a></li>
            <li><a href="/contact" className="hover:text-yellow-300 transition">Contact:+2347083279077</a></li>
            <li><a href="/contact" className="hover:text-yellow-300 transition">Email:Salamayomide63@gmail.com</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Connect With Us</h4>
          <div className="flex gap-4">
            <a href="#" className="hover:text-yellow-300 transition"><Facebook size={20} /></a>
            <a href="#" className="hover:text-yellow-300 transition"><Twitter size={20} /></a>
            <a href="#" className="hover:text-yellow-300 transition"><Instagram size={20} /></a>
            <a href="mailto:salamayomide63@gmail.com" className="hover:text-yellow-300 transition">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs py-3 bg-black/20">
        © {new Date().getFullYear()} Easymove. Built with ❤️ in Lagos.
      </div>
    </footer>
  );
}
