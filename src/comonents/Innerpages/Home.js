import React, { useEffect, useState } from 'react';
import innerStyles from "./innerpage.module.css";
import banner from "./banner.png";
import course from "./contact.jpg";
import Axios from 'axios';
import Appointment from './Appointment'
import { NavLink } from 'react-router-dom';

const Home = () => {
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
  const [lnews1, setLnews1] = useState([]);
  useEffect(() => {
    Axios.get(`http://localhost:4000/lnews1`)
    .then((res) => {
      setLnews1(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
  })
  return (
    <main className={innerStyles}>
      <section>
        <div>
          <img src={banner} alt="banner" className="w-100" />
        </div>
      </section>
      <section className="py-3">
      <div className="container my-4">
            <div className="row">
                <div className="col-lg-12">
                  <h1 className={innerStyles.title}>Our <span>Treatments</span></h1>
                </div>
            </div>
      </div>
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
      <section className="container-fluid p-2 bg-info">
      <div>
        <marquee>
          {lnews1.map((lnews1) => {
              return lnews1.lnews1;
            })}
          </marquee>
        </div>
      </section>
      <section className={`${innerStyles.bg_main} py-4`}>
      <div className="container my-4">
            <div className="row">
                <div className="col-lg-12">
                  <h1 className={innerStyles.title}>Contact <span>Us</span></h1>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <div className={`${innerStyles.box_shadow}`}>
                    <img src={course} alt="contact" />
                    </div>
                </div>
                <div className="col-lg-8">
                    <Appointment />
                    </div>
            </div>
      </div>
      </section>
    </main>
  )
}

export default Home