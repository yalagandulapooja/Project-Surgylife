import React, { useEffect, useState } from 'react';
import innerStyles from "./innerpage.module.css";
import Axios from 'axios';
import { NavLink } from 'react-router-dom';

const Treatments = () => {
    const [treatment,setTreatment]=useState([]);
    const [id, setId] = useState([]);
    const [lnews, setLnews] = useState([]);
    useEffect(()=>{
        Axios
        .get('http://localhost:4000/lnews')
        .then((res)=>{
            setTreatment(res.data);
            })
            .catch((err)=>{
                console.log(err)
            })
    })
  return (     
         <main>
            <section>
            <div className={innerStyles.breadcrumb}><h5>Treatments</h5>
            </div>
            </section>
            <section>
            <div className='container'>     
         <div className={innerStyles}>
         <div className='row'>
           { treatment.map((id)=>{
              return(
                <div className='col-lg-3 p-2'>
                <div className={`${innerStyles.box_shadow} p-2`}>
               <NavLink to={`/treatmentname`} className={innerStyles.Link}><h5>{id.lnews}</h5></NavLink>
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

export default Treatments