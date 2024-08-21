import React, { Component } from 'react';
import innerStyles from "./innerpage.module.css";

export default class Contactus extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       uname:"",
       phno:"",
       email:"",
    }
  }
  changeName=(e)=> {
    this.setState({
      uname:e.target.value,
    })
  }
  changeEmail=(e)=> {
      this.setState({
        email:e.target.value,
    })
  }
  changePhno=(e)=> {
    this.setState({
      phno:e.target.value,
    })
  }
  submitHandler=(e)=>{
    e.preventDefault();
    let {uname,phno,email} = this.state;
    let alphaExp = /^[a-zA-Z]+$/;
    let numExp = /^[0-9]+$/;
    let emaiExp = /^[a-zA-Z0-9]+@[a-zA-Z]+.[a-zA-Z]+$/;
    if (uname=== "") {
      document.getElementById("unameNote").innerHTML = "Please Enter Uname";
    } else {
      if (uname.match(alphaExp)){
        document.getElementById("unameNote").innerHTML = "";
      }
      else {
        document.getElementById("unameNote").innerHTML = " Please Enter Characters Only";
      }
    }
    if (phno=== "") {
      document.getElementById("phnoNote").innerHTML = "Please Enter phno";
    } else {
      if (phno.match(numExp)){
        document.getElementById("phnoNote").innerHTML = "";
      }
      else {
        document.getElementById("phnoNote").innerHTML = " Please Enter Digits Only";
      }
    }
    if (email=== "") {
      document.getElementById("emailNote").innerHTML = "Please Enter email";
    } else {
      if (email.match(emaiExp)){
        document.getElementById("emailNote").innerHTML = "";
      }
      else {
        document.getElementById("emailNote").innerHTML = " Please Enter Valid Email ID";
      }
    }
  }
  render() {
    return (
      <main>
      <div className={innerStyles.contactus}>
        <section>
      <div className={innerStyles.breadcrumb}>
        <h3>Contact Us</h3>
      </div>
      </section>
      <section className="py-3">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                  <div className={`${innerStyles.box} py-2`}>
                  <form onSubmit={this.submitHandler}>
                    <div className="row">
                      <div className="col-md-6">
                        <input type="text" name="uname" placeholder="Name" className="form-control" value={this.state.uname} onChange={this.changeName}/>
                        <div id="unameNote" className={innerStyles.errmsg}></div>
                      </div>
                      <div className="col-md-6">
                        <input type="text" name="email" placeholder="Email" className="form-control" value={this.state.email} onChange={this.changeEmail}/>
                        <div id="emailNote" className={innerStyles.errmsg}></div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <input type="text" name="phno" placeholder="PhNo" className="form-control" value={this.state.phno} onChange={this.changePhno}/>
                        <div id="phnoNote" className={innerStyles.errmsg}></div>
                      </div>
                      <div className="col-md-6">
                        <input type="text" name="subject" placeholder="Subject" className="form-control" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                      <textarea name="message" placeholder="Message" className="form-control"></textarea>
                      <input type="submit" value="Send Message" className="btn btn-warning my-3" />
                      </div>
                    </div>
                  </form>
                  </div>
                  </div>
                <div className="col-lg-4">
                  <h2>address:</h2>
                  <p>	Plot Number 40, Second Floor,</p>
                  <p> Vittal Rao Nagar,</p>
                  <p> Madhapur, Hyderabad</p>
                  <p> Telangana 500081.</p>
                  <p> ph.no: 9876543210</p>
                  <p> Email: poojayalagandula2.o@gmail.com</p>
                </div>
                </div>
                </div>
                </section>
                <section className='py-2'>
                <div>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15225.29680194095!2d78.3844917!3d17.4441903!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91ed2dea4c17%3A0xd49a55db035ba737!2sElearn%20Infotech%20-%20MERN%20Java%20Python%20Fullstack%20%7C%20UI%20Development%20React%20JS%20%7C%20PHP%20Web%20Development%20UI%20UX%20Courses%20Training%20Hyderabad!5e0!3m2!1sen!2sin!4v1707137685090!5m2!1sen!2sin" width="100%" height="450" title="Elearn Infotech Map"></iframe>
                </div>
                </section>
                </div>
    </main>
    )
  }
}
