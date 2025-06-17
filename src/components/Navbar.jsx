import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="w-full bg-green-800 fixed top-0 text-white shadow-md z-50">
      <div className="flex justify-between items-center w-full mx-auto p-10 !important">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <img src="/logo.png" alt="Logo" className="h-10" />
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-6 font-medium">
          <li>
            <Link to="/about" className="hover:text-gray-300">About</Link>
          </li>
          <li>
            <Link to="/" className="hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link to="/review" className="hover:text-gray-300">Review</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
