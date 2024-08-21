import React, { useEffect, useState } from 'react';
import Axios from 'axios';
//import { NavLink } from 'react-router-dom';

const DeleteDoctor = () => {
  const [Nbatch, setNbatch] = useState([]);
  useEffect(() => {
    Axios.get(`http://localhost:4000/Nbatch`)
    .then((res) => {
      setNbatch(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  });
  let deleteData=(id)=> {
    Axios.delete(`http://localhost:4000/Nbatch/${id}`)
    .then((res) => {
        alert("Doctor Data Deleted Succussfully...")
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
        <th>Doctor ID</th>
        <th>Tname</th>
        <th>Dname</th> 
        <th>Qualification</th>
        <th>CWH</th>
      </tr>
    </thead>
    <tbody>
      {Nbatch.map((bat) => {
        return (
        <tr key={bat.id}>
          <td className="d-flex">
            <button className="btn btn-danger" onClick={()=> {deleteData(bat.id)}}>
              <i className="fa-solid fa-trash"></i>
            </button>
          </td>
          <td>{bat.id}</td>
          <td>{bat.tname}</td>
          <td>{bat.dname}</td>
          <td>{bat.qualification}</td>
          <td>{bat.cwh}</td>
          </tr>
          )
          })}
      </tbody>
  </table>
  </div>
  )
}
export default DeleteDoctor;