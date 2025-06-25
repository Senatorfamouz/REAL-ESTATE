/** @format */

import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import DashboardLayout from "../Routes/DashboardLayout";
import Analytics from "../../Dashboards/SuperAdmins/Analytics";
import AddProperty from "../../Dashboards/SuperAdmins/AddProperty";
import PropertyDetails from "../../Dashboards/SuperAdmins/PropertyDetails";
import PropertyList from "../../Dashboards/SuperAdmins/PropertyList";
import AddAdmin from "../../Dashboards/SuperAdmins/AddAgent";
import ListViews from "../../Dashboards/SuperAdmins/ListViews";
import AdminProfile from "../../Dashboards/SuperAdmins/AdminProfile";
import AllOrderList from "../../Dashboards/SuperAdmins/AllOrderList";
import Transact from "../../Dashboards/SuperAdmins/Transact";
import Setting from "../../Dashboards/SuperAdmins/Setting";
import AgentGrid from "../../Dashboards/SuperAdmins/AgentGrid";
import Error   from "../Routes/Error"
import SignUp from "../../Auth/SignUp";
import LogIn from "../../Auth/LogIn";
import CreateAgent from "../../Dashboards/SuperAdmins/CreateAgent";

const AllRoutes = () => {
  return (
    <div>
     
        <Routes>



          {/* auth routes */}
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/login' element={<LogIn />} />

          {/* Dashboard */}
          <Route path='/' element={<DashboardLayout />}>
            <Route index element={<Analytics />} />
            <Route path='analytics' element={<Analytics />} />
            <Route path='add-property' element={<AddProperty />} />
            <Route path='PropertyDetails' element={<PropertyDetails />} />
            <Route path='propertyList' element={<PropertyList />} />
            <Route path='add-admin' element={<AddAdmin />} />
            <Route path='listViews' element={<ListViews />} />
            <Route path='admin-details' element={<AdminProfile />} />
            <Route path='allOrderList' element={<AllOrderList />} />
            <Route path='transact' element={<Transact />} />
            <Route path='setting' element={<Setting />} />
            <Route path='create-agent' element={<CreateAgent />} />
            <Route path='agent-grid' element={<AgentGrid />} />
          </Route>
-
          {/* Error Route */}
          <Route path='*' element={<Error />} />
        </Routes>
      
      
    </div>
    
  );
};

export default AllRoutes;
