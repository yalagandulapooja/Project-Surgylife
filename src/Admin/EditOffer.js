import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import innerStyles from '../comonents/Innerpages/innerpage.module.css';
import Axios from 'axios';

const EditOffer = () => {
  const [id, setId] = useState("");
  const [offer, setoffer] = useState("");
  const {off} = useParams();
  const navigate=useNavigate();

  useEffect(() => {
    Axios
    .get(`http://localhost:4000/offer/${off}`)
    .then((res) => {
      setId(res.data.id);
      setoffer(res.data.offer);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [off]);
  let submitHandler = (e) => {
    e.preventDefault();
    Axios.put(`http://localhost:4000/offer/${off}`, {id, offer})
    .then((res)=> {
        alert("New Treatment Updated Successfully...")
        setId("");
        setoffer("");
        navigate("/admindashboard");
      })
    .catch((err) => {
        console.log(err);
    })
}
  return (
  <div>
    <div className="container my-4">
        <div className="row">
          <div className="col-lg-3"></div>
            <div className="col-lg-6">
                <form className={`${innerStyles.box_shadow} py-5 px-3`} onSubmit={submitHandler}>
                    <div className="row">
                    <div>
                    <input type="text" name="id" placeholder="Treatment ID" value={id} className="form-control my-4" onChange={(e)=>setId(e.target.value)} />
                    </div>
                    <div className="col-lg-12">
                      <textarea name="message" placeholder="Treatment Name" className="form-control" value={offer} onChange={(e)=>setoffer(e.target.value)}></textarea>
                      <input type="submit" value="Update Offer" className="btn btn-warning my-3" />
                      </div>
                    </div>
                  </form>
            </div>
        </div>
    </div>
    
  </div>)
}

export default EditOffer;