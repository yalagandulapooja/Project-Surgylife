import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { NavLink } from 'react-router-dom';

const EditOffer1 = () => {
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
                
              <NavLink to={`/edittreatment/${stu.id}`}>
                <button className="btn btn-info">
                  <i className="fa-solid fa-pen"></i>
                </button>
              </NavLink>
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

export default EditOffer1