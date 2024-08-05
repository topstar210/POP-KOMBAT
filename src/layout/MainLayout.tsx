import { Outlet } from "react-router-dom";

import Tabbar from "@/layout/Tabbar/Tabbar";

const MainLayout = () => {
  return (
    <div>
      <main style={{ paddingBottom: "75px" }}>
        <Outlet />
      </main>
      <Tabbar />
    </div>
  );
};

export default MainLayout;
