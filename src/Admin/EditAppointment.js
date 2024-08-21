import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import innerStyles from '../comonents/Innerpages/innerpage.module.css';
import Axios from 'axios';

const EditAppointment = () => {
  const [id, setId] = useState("");
    const [yname, setyname] = useState("");
    const [email, setemail] = useState("");
    const [subject, setsubject] = useState("");
    const [phone, setphone] = useState("");
    const [treatment,settreatment] = useState("");
    const [message, setmessage] = useState("");
    const [status, setstatus] = useState("");
  const {app} = useParams();
  const navigate=useNavigate();

  useEffect(() => {
    Axios
    .get(`http://localhost:4000/appointment/${app}`)
    .then((res) => {
      setId(res.data.id);
      setyname(res.data.yname);
      setemail(res.data.email);
      setsubject(res.data.subject);
      setphone(res.data.phone);
      settreatment(res.data.treatment);
      setmessage(res.data.message);
      setstatus(res.data.status);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [app]);
  let submitHandler = (e) => {
    e.preventDefault();
      Axios.post(`http://localhost:4000/appointment`, {id,yname, email, subject, phone, message,treatment, status})
      .then((res)=> {
          alert("New Appointment...")
          setId("");
          setyname("");
          setemail("");
          setsubject("");
          setphone("");
          settreatment("");
          setmessage("");
          setstatus("");
          navigate("/admindashboard");
      })
      .catch((err) => {
          console.log(err);
      })
    }

return (
    <div>
        <div className="container">
        <div className="row">
            <div className="col-lg-9">
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
                    <div>
                      <input type="text" name="phone" placeholder="Phone Number" value={phone} className="form-control my-4" onChange={(e)=>setphone(e.target.value)} />
                    </div>
                    <div>
                      <input type="text" name="treatment" placeholder="Treatment Name" value={treatment} className="form-control my-4" onChange={(e)=>settreatment(e.target.value)} />
                    </div>
                    </div>
                    <div>
                    <textarea name="message" placeholder="Message" className="form-control" value={message} onChange={(e)=>setmessage(e.target.value)}></textarea>
                    <input type="submit" value="Send Appointment" className="btn btn-warning my-3" />
                    </div>
                    <div>
                    <input type="text" name="status" placeholder="Appiontment Status" value={status} className="form-control my-4" onChange={(e)=>setstatus(e.target.value)} />
                    </div>
                </form>
            </div>
        </div>
    </div>
    </div>)
}
export default EditAppointment;