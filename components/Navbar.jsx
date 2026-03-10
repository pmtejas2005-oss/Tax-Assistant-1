import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          TaxAssist AI
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/dashboard" className="hover:underline">Dashboard</Link>
          <Link to="/upload" className="hover:underline">Upload</Link>
          <Link to="/tax-summary" className="hover:underline">Tax Summary</Link>
          <Link to="/chatbot" className="hover:underline">Chatbot</Link>
          <Link to="/profile" className="hover:underline">Profile</Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col mt-2 space-y-2 bg-blue-700 p-4 rounded-lg">
          <Link to="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link>
          <Link to="/upload" onClick={() => setIsOpen(false)}>Upload</Link>
          <Link to="/tax-summary" onClick={() => setIsOpen(false)}>Tax Summary</Link>
          <Link to="/chatbot" onClick={() => setIsOpen(false)}>Chatbot</Link>
          <Link to="/profile" onClick={() => setIsOpen(false)}>Profile</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
