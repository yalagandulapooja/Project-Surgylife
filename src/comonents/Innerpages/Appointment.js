import Axios from 'axios';
import React, { useState } from 'react';
import innerStyles from "./innerpage.module.css";


const Appointment = () => {
    const [id, setId] = useState("");
    const [yname, setyname] = useState("");
    const [email, setemail] = useState("");
    const [subject, setsubject] = useState("");
    const [phone, setphone] = useState("");
    const [treatment,settreatment] = useState("");
    const [message, setmessage] = useState("");
    const submitHandler = (e) => {
      e.preventDefault();
      Axios.post(`http://localhost:4000/appointment`, {id,yname, email, subject, phone,treatment, message})
      .then((res)=> {
          alert("New appointment Added Successfully...")
          setId("");
          setyname("");
          setemail("");
          setsubject("");
          setphone("");
          settreatment("");
          setmessage("");
      })
      .catch((err) => {
          console.log(err);
      })
    }
  return (
    <div>
      <div>
        <div className="container">
        <div className="row">
        <div className="col-lg-2"></div>
            <div className="col-lg-8">
                <form className={`${innerStyles.box_shadow} p-3`} onSubmit={submitHandler}>
                  <div className="row">
                    <div className="col-md-6">
                      <input type="text" name="id" placeholder="Patient ID" value={id} className="form-control my-4" onChange={(e)=>setId(e.target.value)} />
                    </div>
                    <div className="col-md-6">
                      <input type="text" name="yname" placeholder="Your Name" value={yname} className="form-control my-4" onChange={(e)=>setyname(e.target.value)} />
                    </div>
                    </div>
                    <div className='row'>
                    <div className="col-md-6">
                      <input type="text" name="email" placeholder="Your Email Adress" value={email} className="form-control my-4" onChange={(e)=>setemail(e.target.value)} />
                    </div>
                    <div className="col-md-6">
                      <input type="text" name="subject" placeholder="Subject" value={subject} className="form-control my-4" onChange={(e)=>setsubject(e.target.value)} />
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-6">
                      <input type="text" name="phone" placeholder="Phone Number" value={phone} className="form-control my-4" onChange={(e)=>setphone(e.target.value)} />
                    </div>
                    <div className="col-md-6">
                      <input type="text" name="treatment" placeholder="Treatment Name" value={treatment} className="form-control my-4" onChange={(e)=>settreatment(e.target.value)} />
                    </div>
                    </div>
                    <div>
                    <textarea name="message" placeholder="Message" className="form-control" value={message} onChange={(e)=>setmessage(e.target.value)}></textarea>
                    <input type="submit" value="Book Appointment" className="btn btn-warning my-3" />
                    </div>
                </form>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
};

export default Appointment;