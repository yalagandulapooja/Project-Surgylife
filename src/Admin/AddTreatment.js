import Axios from 'axios';
import React, { useState } from 'react';
import innerStyles from '../comonents/Innerpages/innerpage.module.css';


const AddTreatment = () => {
    const [id, setId] = useState("");
    const [lnews, setLnews] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        Axios.post(`http://localhost:4000/lnews`, {id, lnews})
        .then((res)=> {
            alert("New Treatment Added Successfully...");
            setId("");
            setLnews("");
        })
        .catch((err) => {
          console.log(err);
        })
    }
  return (
      <div>
        <div className="container">
        <div className="row"> 
            <div className="col-lg-12">
                <form className={`${innerStyles.box_shadow} p-3`} onSubmit={submitHandler}>
                  <div className="row">
                    <div>
                      <input type="text" name="id" placeholder="Treatment ID" value={id} className="form-control my-4" onChange={(e)=>setId(e.target.value)} />
                    </div>
                    <div className="col-lg-12">
                      <textarea name="message" placeholder="Treatment Name" className="form-control" value={lnews} onChange={(e)=>setLnews(e.target.value)}></textarea>
                      <input type="submit" value="Add Treatment" className="btn btn-warning my-3" />
                    </div>
                  </div>
                </form>
            </div>
        </div>
    </div>
    </div>
  )
}

export default AddTreatment