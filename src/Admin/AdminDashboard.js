import React from 'react'
//import { useNavigate } from 'react-router-dom';
import innerStyles from '../comonents/Innerpages/innerpage.module.css';
import AdminSidebar from './AdminSidebar';
import { NavLink } from "react-router-dom";
import { Outlet } from 'react-router-dom';

const AdminDashboard = () => {
  
    
  return (
    <div className={innerStyles}>
      <div className="container my-4">
            <div className="row">
            <div className="col-lg-4 bg-secondary text-white">
                <AdminSidebar />
            </div>
                <div className="col-lg-8 ">
                    <div className="border-bottom">
                    <NavLink className="nav-link text-end" to="/Admin"><h5>Log OUt</h5></NavLink>
                    </div>
                    <h4>Dashboard</h4>
                    <div>
                    <Outlet />
                    </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default AdminDashboard