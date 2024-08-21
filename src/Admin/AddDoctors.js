import Axios from 'axios';
import React, { useState } from 'react';
import innerStyles from '../comonents/Innerpages/innerpage.module.css';


const AddDoctors = () => {
    const [id, setId] = useState("");
    const [tname, settname] = useState("");
    const [dname, setdname] = useState("");
    const [qualification, setqualification] = useState("");
    const [cwh, setcwh] = useState("");
    const submitHandler = (e) => {
      e.preventDefault();
      Axios.post(`http://localhost:4000/Nbatch`, {id,tname, dname, qualification, cwh})
      .then((res)=> {
          alert("New Doctor Added Successfully...")
          setId("");
          settname("");
          setdname("");
          setqualification("");
          setcwh("");
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
            <div className="col-lg-9">
                <form className={`${innerStyles.box_shadow} p-3`} onSubmit={submitHandler}>
                  <div className="row">
                    <div className="col-md-6">
                      <input type="text" name="id" placeholder="Doctor ID" value={id} className="form-control my-4" onChange={(e)=>setId(e.target.value)} />
                    </div>
                    <div className="col-md-6">
                      <input type="text" name="tname" placeholder="Treatment Name" value={tname} className="form-control my-4" onChange={(e)=>settname(e.target.value)} />
                    </div>
                    </div>
                    <div className='row'>
                    <div className="col-md-6">
                      <input type="text" name="dname" placeholder="Doctor Name" value={dname} className="form-control my-4" onChange={(e)=>setdname(e.target.value)} />
                    </div>
                    <div className="col-md-6">
                      <input type="text" name="qualification" placeholder="Qualification" value={qualification} className="form-control my-4" onChange={(e)=>setqualification(e.target.value)} />
                    </div>
                    </div>
                    <div>
                      <input type="text" name="cwh" placeholder="Currenty Working Hospital" value={cwh} className="form-control my-4" onChange={(e)=>setcwh(e.target.value)} />
                    </div>
                    <div>
                    <input type="submit" value="Add Doctor" className="btn btn-warning my-3" />
                    </div>
                </form>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
};

export default AddDoctors;