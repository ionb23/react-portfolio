import React from "react";
import "./ProjectStyle.css";

function ProjectCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.demoImg} />
      </div>
      <div className="content">
        <ul>
          <li className="d-flex align-items-center justify-content-around">
            <strong>{props.title}</strong> 
          </li>
          <li className="d-flex align-items-center justify-content-around">
            <a class="btn btn-primary" href={props.appLink} role="button"> <strong>App Link</strong> </a>
            <a class="btn btn-primary" href={props.repoLink} role="button"> <strong>Repo Link</strong> </a>
          </li>
        </ul>
      </div>
      {/* <span className="remove" onClick={props.doRemove}>𝘅</span> */}
    </div>
  );
}

export default ProjectCard;