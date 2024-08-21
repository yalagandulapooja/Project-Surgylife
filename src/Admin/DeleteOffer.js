import React, { useEffect, useState } from 'react';
import Axios from 'axios';
//import { NavLink } from 'react-router-dom';

const DeleteOffer = () => {
  const [offer, setoffer] = useState([]);
  useEffect(() => {
    Axios.get(`http://localhost:4000/offer`)
    .then((res) => {
      setoffer(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  });
  let deleteData=(id)=> {
    Axios.delete(`http://localhost:4000/offer/${id}`)
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
            <th>Offer</th>
          </tr>
        </thead>
        <tbody>
          {offer.map((stu) => {
            return (
            <tr key={stu.id}>
              <td className="d-flex">
                <button className="btn btn-danger" onClick={()=> {deleteData(stu.id)}}>
                  <i className="fa-solid fa-trash"></i>
                </button>
              
              </td>
              <td>{stu.id}</td>
              <td>{stu.offer}</td>
              </tr>
              )
              })}
          </tbody>
      </table>
    </div>
  )
};

export default DeleteOffer