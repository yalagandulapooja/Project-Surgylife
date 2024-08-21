import React from 'react';
import { NavLink } from 'react-router-dom';
import innerStyles from '../comonents/Innerpages/innerpage.module.css';

const AdminSidebar = () => {
  return (
    <div>
        <h4 className='text-center'>Elearn InfoTech Admin Panel</h4>

        <ul className={innerStyles.navigation}>
            <li>
                <NavLink to="">Add Treatment</NavLink>
            </li>
            <li>
                <NavLink to="edittreatment1">Edit Treatment</NavLink>
            </li>
            <li>
                <NavLink to="deletetreatment">Delete Treatment</NavLink>
            </li>
            <li>
                <NavLink to="adddoctors">Add Doctor</NavLink>
            </li>
            <li>
                <NavLink to="editdoctor1">Edit Doctor</NavLink>
            </li>
            <li>
                <NavLink to="deletedoctor">Delete Doctor</NavLink>
            </li>
            <li>
                <NavLink to="appointment">Appointment Data</NavLink>
            </li>
            <li>
                <NavLink to="editappointment1">Edit Appointment Data</NavLink>
            </li>
            <li>
                <NavLink to="deleteappointment">Delete Appointment Data</NavLink>
            </li>
            <li>
                <NavLink to="addoffer">Add Offer</NavLink>
            </li>
            <li>
                <NavLink to="editoffer1">Edit Offer</NavLink>
            </li>
            <li>
                <NavLink to="deleteoffer">Delete Offer</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default AdminSidebar