import React, { useEffect, useState } from 'react';
import Axios from 'axios';
//import { NavLink } from 'react-router-dom';

const DeleteTreatment = () => {
  const [lnews, setLnews] = useState([]);
  useEffect(() => {
    Axios.get(`http://localhost:4000/lnews`)
    .then((res) => {
      setLnews(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  });
  let deleteData=(id)=> {
    Axios.delete(`http://localhost:4000/lnews/${id}`)
    .then((res) => {
        alert("Treatment Deleted Succussfully...")
    })
    .catch((err) => {
        console.log(err);
    });
};
  return (
    <div>
      <table id="example" className="table table-bordered display">
        <thead>
          <tr>
            <th></th>
            <th>S.NO.</th>
            <th>Treatment Name</th>
          </tr>
        </thead>
        <tbody>
          {lnews.map((stu) => {
            return (
            <tr key={stu.id}>
              <td className="d-flex">
                <button className="btn btn-danger" onClick={()=> {deleteData(stu.id)}}>
                  <i className="fa-solid fa-trash"></i>
                </button>
              
              </td>
              <td>{stu.id}</td>
              <td>{stu.lnews}</td>
              </tr>
              )
              })}
          </tbody>
      </table>
    </div>
  )
};

export default DeleteTreatment