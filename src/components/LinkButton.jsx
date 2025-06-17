import { Link } from "react-router-dom";

function LinkButton({ to, children }) {
  return (
    <Link
      to={to}
      className="w-48 flex items-center justify-center bg-red-500 text-white py-2 rounded-md mt-4 hover:bg-red-600 transition"
    >
      {children}
    </Link>
  );
}

export default LinkButton;
