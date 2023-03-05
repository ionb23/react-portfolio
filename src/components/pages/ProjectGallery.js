import React, { useState } from 'react';
import ProjectCard from './Project';
import Wrapper from '../Wrapper/Wrapper';
// import Title from './components/Title';
import projectList from './projects.json';

function ProjectGallery() {
  const [projects, setProject] = useState(projectList);

  return (
    <div>
      <Wrapper>
      {/* <Title>Friends List</Title> */}
      {projects.map(p => {
        return <ProjectCard
          key={p.id}
          title={p.title}
          appLink={p.appLink}
          repoLink={p.repoLink}
          demoImg={p.demoImg}
        // doRemove={function() { removeFriend(f.id)} }
        />
      })}
      </Wrapper>
    </div>
  );
}

export default ProjectGallery;
