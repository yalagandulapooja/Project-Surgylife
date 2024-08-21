import React, { useEffect, useState } from 'react';
import Axios from 'axios';
//import { NavLink } from 'react-router-dom';

const DeleteAppointment = () => {
  const [appointment, setappointment] = useState([]);
  useEffect(() => {
    Axios.get(`http://localhost:4000/appointment`)
    .then((res) => {
      setappointment(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  });
  let deleteData=(id)=> {
    Axios.delete(`http://localhost:4000/appointment/${id}`)
    .then((res) => {
        alert("Appointment Deleted Succussfully...")
    })
    .catch((err) => {
        console.log(err);
    });
};
  return (
    <div>
      <table id="example" className="table table-bordered">
      <thead>
      <tr>
        <th>Edit Data</th>
        <th>Patient ID</th>
        <th>Patient Name</th>
        <th>Email Adress</th> 
        <th>Subject</th>
        <th>Phone Number</th>
        <th>Treatment Name</th>
        <th>Message</th>
        <th>status</th>
      </tr>
    </thead>
    <tbody>
      {appointment.map((bat) => {
        return (
        <tr key={bat.id}>
          <td className="d-flex">
            <button className="btn btn-danger" onClick={()=> {deleteData(bat.id)}}>
              <i className="fa-solid fa-trash"></i>
            </button>
          </td>
          <td>{bat.id}</td>
          <td>{bat.yname}</td>
          <td>{bat.email}</td>
          <td>{bat.subject}</td>
          <td>{bat.phone}</td>
          <td>{bat.treatment}</td>
          <td>{bat.message}</td>
          <td>{bat.status}</td>
          </tr>
          )
          })}
      </tbody>
  </table>
  </div>
  )
}
export default DeleteAppointment;