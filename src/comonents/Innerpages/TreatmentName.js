import React, { useEffect, useState } from 'react';
import innerStyles from "./innerpage.module.css";
import  Axios  from 'axios';
import { NavLink } from 'react-router-dom';

const TreatmentName = () => {
  const [doctor,setdoctor]=useState([]);
  const [id, setId] = useState([]);
  const [tname,settname]=useState([]);
  const [dname,setdname]=useState([]);
  const [qualification,setqualification]=useState([]);
  const [cwh,setcwh]=useState([]);
  useEffect(()=>{
    Axios
    .get('http://localhost:4000/Nbatch')
    .then((res)=>{
        setdoctor(res.data);
        })
        .catch((err)=>{
            console.log(err)
        })
})
  return (
    <main>
        <section>
      <div className={innerStyles.breadcrumb}>
        <h3>Treatment Name</h3>
      </div>
      </section>
      <section>
      <div className='container'>     
         <div className={innerStyles}>
         <div className='row'>
         { doctor.map((id)=>{
              return(
                <div className='col-lg-6 p-2'>
                <div className={`${innerStyles.box_shadow} p-2`}>
                <div className='container'>
                  <div className='row'>
                  <div className='col-lg-6'>
                  <h5>{id.dname}.</h5>
                  <p>{id.tname}</p>
                  <h6 className='text-start'>Qualification:</h6>
                  <p>{id.qualification}</p>
                  <h6 className='text-start'>Currently Working Hospital:</h6>
                  <p>{id.cwh}</p>
                  </div>
                  <div className='col-lg-6'><NavLink className="nav-link" to="/appointment">
                    <button className="btn btn-warning mt-1 float-end">
                      <h6>Book Appointment</h6>
                      </button></NavLink></div>
                  </div>
                  </div>
               </div>
               </div>
              )
            })}
          </div>
          </div>
          </div>
      </section>
    </main>
  )
}

export default TreatmentName