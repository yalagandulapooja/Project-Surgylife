import Axios from 'axios';
import React, { useState } from 'react';
import innerStyles from '../comonents/Innerpages/innerpage.module.css';


const AddOffer = () => {
    const [id, setId] = useState("");
    const [offer, setoffer] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        Axios.post(`http://localhost:40000/offer`, {id, offer})
        .then((res)=> {
            alert("New Treatment Added Successfully...");
            setId("");
            setoffer("");
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
                      <textarea name="message" placeholder="Treatment Name" className="form-control" value={offer} onChange={(e)=>setoffer(e.target.value)}></textarea>
                      <input type="submit" value="Add Offer" className="btn btn-warning my-3" />
                    </div>
                  </div>
                </form>
            </div>
        </div>
    </div>
    </div>
  )
}

export default AddOffer