import React from "react";
import "./HomeStyle.css";


function Home() {
  return (

    <section className="home">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1 className="text-center">Welcome.</h1>
            <p>
              My name is Ion Borziac, I'm a front-end developer based in London, UK. I like to craft solid and scalable front-end products with great user experience.
            </p>
          </div>
          <div className="col-6">
            <div>
              <img className="avatar" src="https://github.com/ionb23/react-portfolio/blob/main/src/assets/avatar.jpeg?raw=true" alt="Picture of myself" />
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Home;

// className="d-block align-items-center justify-content-center"

