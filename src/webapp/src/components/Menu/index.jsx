import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import SideBar from "../dashboard/SideBar";

const Menu = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <Navbar onToggleSidebar={toggleSidebar} />
      <SideBar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
};

export default Menu;
