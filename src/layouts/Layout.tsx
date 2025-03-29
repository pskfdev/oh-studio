import { Outlet } from "react-router";
//Components
import Navbar from "../components/nav/Navbar";
import Footer from "../components/footer/Footer";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar />

      <div className="flex-grow">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default Layout;
