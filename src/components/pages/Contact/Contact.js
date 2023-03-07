import React from 'react';
import Form from "./Form";

function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1 className="text-center">Contact Me</h1>
            <h1 className="text-center">https://github.com/ionb23</h1>
            <h1 className="text-center">https://www.linkedin.com/in/ion-borziac/</h1>
            <h1 className="text-center">href="mailto:ion.borziac@gmail.com</h1>
          </div>
          <div className="col-6">
            <h1 className="text-center">Contact Me Form</h1>

            <Form />;


          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
