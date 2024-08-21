import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import innerStyles from '../comonents/Innerpages/innerpage.module.css';
import Axios from 'axios';

const EditTreatment = () => {
  const [id, setId] = useState("");
  const [lnews, setLnews] = useState("");
  const {sno} = useParams();
  const navigate=useNavigate();

  useEffect(() => {
    Axios
    .get(`http://localhost:4000/lnews/${sno}`)
    .then((res) => {
      setId(res.data.id);
      setLnews(res.data.lnews);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [sno]);
  let submitHandler = (e) => {
    e.preventDefault();
    Axios.put(`http://localhost:4000/lnews/${sno}`, {id, lnews})
    .then((res)=> {
        alert("New Treatment Updated Successfully...")
        setId("");
        setLnews("");
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
                      <textarea name="message" placeholder="Treatment Name" className="form-control" value={lnews} onChange={(e)=>setLnews(e.target.value)}></textarea>
                      <input type="submit" value="Update Treatment" className="btn btn-warning my-3" />
                      </div>
                    </div>
                  </form>
            </div>
        </div>
    </div>
    
  </div>)
}

export default EditTreatment;