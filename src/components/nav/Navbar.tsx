import { NavLink } from "react-router";

function Navbar() {
  return (
    <nav className="w-full h-[110px] sticky top-0 bg-transparent text-sm tracking-tighter z-10">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-1 bg-custom-cream rounded-full space-x-4 flex justify-center items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-6 py-3 rounded-full ${isActive ? "bg-white" : ""}`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `px-6 py-3 rounded-full ${isActive ? "bg-white" : ""}`
          }
        >
          Profile
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `px-6 py-3 rounded-full ${isActive ? "bg-white" : ""}`
          }
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
