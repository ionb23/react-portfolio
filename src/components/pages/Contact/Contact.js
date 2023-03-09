import React from 'react';
import Form from "./Form";
import './ContactStyle.css'

function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="contactCTAmain">
              <div className="text-start contactCTA">Let's chat.</div>
              <div className="text-start contactCTA">Tell me about your project.</div>
              <div className="text-start contactCTA2">Let's create something together!</div>
            </div >

            <div className="d-flex align-items-center justify-content-around iconsCustom">
              <a href="https://github.com/ionb23" target="_blank">
                <i className="fa fa-file-text fa-3x"></i>
              </a>
              <a href="https://github.com/ionb23" target="_blank">
                <i className="fa fa-github fa-3x"></i>
              </a>
              <a href="https://www.linkedin.com/in/ion-borziac/" target="_blank">
                <i className="fa fa-linkedin fa-3x"></i>
              </a>
              <a href="mailto:ion.borziac@gmail.com" target="_blank">
                <i className="fa fa-envelope fa-3x"></i>
              </a>
            </div>

          </div>
          <div className="col-6">
            <div className="text-center formHeader">Send me a message</div>

            <Form />

          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
