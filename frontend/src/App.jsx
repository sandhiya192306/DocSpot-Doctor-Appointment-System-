import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import AdminAppointments from "./components/admin/AdminAppointments.jsx";
import AdminDoctors from "./components/admin/AdminDoctors.jsx";
import AdminHome from "./components/admin/AdminHome.jsx";
import AdminUsers from "./components/admin/AdminUsers.jsx";

import Home from "./components/common/Home.jsx";
import Login from "./components/common/Login.jsx";
import Notification from "./components/common/Notification.jsx";
import Register from "./components/common/Register.jsx";

import AddDocs from "./components/user/AddDocs.jsx";
import ApplyDoctor from "./components/user/ApplyDoctor.jsx";
import DoctorList from "./components/user/DoctorList.jsx";
import UserAppointments from "./components/user/UserAppointments.jsx";
import UserHome from "./components/user/UserHome.jsx";

import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* public / common */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/notifications" element={<Notification />} />

        {/* user routes */}
        <Route path="/userhome" element={<UserHome />} />
        <Route path="/user/appointments" element={<UserAppointments />} />
        <Route path="/user/doctors" element={<DoctorList />} />
        <Route path="/user/apply-doctor" element={<ApplyDoctor />} />
        <Route path="/user/add-docs" element={<AddDocs />} />

        {/* admin routes */}
        <Route path="/adminhome" element={<AdminHome />} />
        <Route path="/admin/adminusers" element={<AdminUsers />} />
        <Route path="/admin/admindoctors" element={<AdminDoctors />} />
        <Route path="/admin/adminappointments" element={<AdminAppointments />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
