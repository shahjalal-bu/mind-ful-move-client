import React from "react";
import { Outlet, useNavigation } from "react-router-dom";

import GlobalSpinner from "../pages/Shared/GlobalSpinner/GlobalSpinner";
import SideNavigation from "./SideNavigation";

const Dashboard = () => {
  //loading stage handle
  const navigation = useNavigation();
  return (
    <div className="px-2">
      {navigation.state === "loading" && <GlobalSpinner />}
      <div className="container mx-auto px-5 sm:px-20 my-4">
        <div className="flex gap-x-5">
          <SideNavigation />
          <div className="flex-1">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
