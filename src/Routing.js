import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './comonents/Innerpages/Home';
import Aboutus from './comonents/Innerpages/Aboutus';
import Contactus from './comonents/Innerpages/Contactus';
import Errorpage from './comonents/Innerpages/Errorpage';
import Admin from './Admin/Admin';
import AdminDashboard from './Admin/AdminDashboard';
import AddTreatment from './Admin/AddTreatment';
import DeleteTreatment from './Admin/DeleteTreatment';
import EditTreatment from './Admin/EditTreatment';
import EditTreatment1 from './Admin/EditTreatment1';
import AddDoctors from './Admin/AddDoctors';
import EditDoctor from './Admin/EditDoctor';
import DeleteDoctor from './Admin/DeleteDoctor';
import EditDoctor1 from './Admin/EditDoctor1';
import EditAppointment from './Admin/EditAppointment';
import EditAppointment1 from './Admin/EditAppointment1';
import Appointment from './comonents/Innerpages/Appointment';
import DeleteAppointment from './Admin/DeleteAppointment';
import AddOffer from './Admin/AddOffer';
import EditOffer1 from './Admin/EditOffer1';
import DeleteOffer from './Admin/DeleteOffer';
import EditOffer from './Admin/EditOffer';
import Treatments from './comonents/Innerpages/Treatments';
import TreatmentName from './comonents/Innerpages/TreatmentName';
const Routing = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/treatmentname" element={<TreatmentName />} />
        <Route path="/treatments" element={<Treatments />} />
        <Route path="appointment" element={<Appointment />} />
        <Route path="/contactus" element={<Contactus />} />
        
        <Route path="/admin" element={<Admin />} />
        <Route path="/edittreatment/:sno" element={<EditTreatment />} />
        <Route path="/editdoctor/:doc" element={<EditDoctor />} />
        <Route path="/editappointment/:app" element={<EditAppointment />} />
        <Route path="/editoffer/:off" element={<EditOffer />} />
        <Route path="/admindashboard" element={<AdminDashboard />}>
          <Route path="" element={<AddTreatment />} />
          <Route path="edittreatment1" element={<EditTreatment1 />} />
          <Route path="deletetreatment" element={<DeleteTreatment />} />
          <Route path="adddoctors" element={<AddDoctors />} />
          <Route path="editdoctor1" element={<EditDoctor1 />} />
          <Route path="deletedoctor" element={<DeleteDoctor />} />
          <Route path="editappointment1" element={<EditAppointment1 />} />
          <Route path="deleteappointment" element={<DeleteAppointment />} />
          <Route path="addoffer" element={<AddOffer />} />
          <Route path="editoffer1" element={<EditOffer1 />} />
          <Route path="deleteoffer" element={<DeleteOffer />} />
        </Route>
        <Route path="*" element={<Errorpage />} />
    </Routes>
    </>
  )
}

export default Routing