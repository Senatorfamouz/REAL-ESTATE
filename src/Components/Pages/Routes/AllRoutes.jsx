/** @format */

import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import DashboardLayout from "../Routes/DashboardLayout";
import Analytics from "../../Dashboards/SuperAdmins/Analytics";
import AddProperty from "../../Dashboards/SuperAdmins/AddProperty";
import PropertyDetails from "../../Dashboards/SuperAdmins/PropertyDetails";
import PropertyList from "../../Dashboards/SuperAdmins/PropertyList";
import AddAgent from "../../Dashboards/SuperAdmins/AddAgent";
import ListViews from "../../Dashboards/SuperAdmins/ListViews";
import AgentDetail from "../../Dashboards/SuperAdmins/AgentDetail";
import AllOrderList from "../../Dashboards/SuperAdmins/AllOrderList";
import Transact from "../../Dashboards/SuperAdmins/Transact";
import Setting from "../../Dashboards/SuperAdmins/Setting";
import Error   from "../Routes/Error"

const AllRoutes = () => {
  return (
    <div>
      {/* <BrowserRouter> */}
        <Routes>


          {/* Dashboard */}
          <Route path='/' element={<DashboardLayout />}>
            <Route index element={<Analytics />} />
            <Route path='analytics' element={<Analytics />} />
            <Route path='add-property' element={<AddProperty />} />
            <Route path='PropertyDetails' element={<PropertyDetails />} />
            <Route path='propertyList' element={<PropertyList />} />
            <Route path='add-agent' element={<AddAgent />} />
            <Route path='listViews' element={<ListViews />} />
            <Route path='agent-details' element={<AgentDetail />} />
            <Route path='allOrderList' element={<AllOrderList />} />
            <Route path='transact' element={<Transact />} />
            <Route path='setting' element={<Setting />} />
          </Route>


          {/* Error Route */}
          <Route path='*' element={<Error />} />
        </Routes>
      {/* </BrowserRouter> */}
      
    </div>
    
  );
};

export default AllRoutes;
