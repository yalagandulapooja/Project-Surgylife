import React from 'react';
import innerStyles from "./innerpage.module.css";

const Aboutus = () => {
  return (
    <div className={innerStyles.Aboutus}>
      <section>
      <div className={innerStyles.breadcrumb}> <h3>About Us</h3></div>
        <div className="container my-3">
            <div className="row">
                <div className="col-lg-12">
                <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles.The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles.</p>
                <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles.The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles.</p>
                </div>
                </div>
                </div>
                </section>
                <section className="py-3">
                <div className="container my-3">
            <div className="row">
                <div className="col-lg-12">
                  <h1 className={innerStyles.title}>WHY  <span>CHOOSE US?</span></h1>
                </div>
            </div>
      </div>
                <div className='container'>
                  <div className={innerStyles}>
                    <div className='row'>
                     <div className="col-lg-3">
                <div className={`${innerStyles.box}`}>
                <h6>Patient care:</h6>
                <p>My hospital prioritize patient care by allowing for honest communication between doctors and patients, and by providing a friendly atmosphere.</p>
                </div>
                </div>
                <div className="col-lg-3">
                <div className={`${innerStyles.box}`}>
                <h6>Staff:</h6>
                <p>WE are have experienced and qualified staff, including specialized doctors and consultants.</p>
                </div>
                </div>
                <div className="col-lg-3">
                <div className={`${innerStyles.box}`}>
                <h6>Services:</h6>
                <p>WE are offer a variety of services, such as emergency assistance, perioperative care, laboratories, pharmacies, and cafeterias.</p>
                </div>
                </div>
                <div className="col-lg-3">
                <div className={`${innerStyles.box}`}>
                <h6>Cost:</h6>
                <p>WE are aim to provide quality medical care at a competitive price.</p>
                </div>
                </div>
                </div>
            </div>
        </div>
        </section>
    </div>
  )
}

export default Aboutus