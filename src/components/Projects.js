import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

function Projects(props) {

  const ProjectsSection = styled.section`
    background-color: ${props.theme.primary};
  `;

  const ProjectsContainer = styled.div`
    color: ${props.theme.light};
    margin: 0 auto;
    padding: 150px 0;
    max-width: 1000px;
    position: relative;
  `;

  const ProjectList = styled.div`
    display: grid;
    position: relative;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
  `;

  const ProjectCard = styled.div`
    color: ${props.theme.white};
    box-shadow: 3px 1px 3px ${props.theme.secondary};
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 5px;
    margin: 5px;
  `;

  const ProjectTitle = styled.div`
    color: ${props.theme.light};
    font-weight: bold;
    text-align: center;
  `;

  const projectList = [
    <ProjectCard>
      <ProjectTitle>Project 1</ProjectTitle>
      Testy testerson
    </ProjectCard>,
    <ProjectCard>
      <ProjectTitle>Project 2</ProjectTitle>
      Testy testerson
    </ProjectCard>,
    <ProjectCard>
      <ProjectTitle>Project 3</ProjectTitle>
      Testy testerson
    </ProjectCard>,
    <ProjectCard>
      <ProjectTitle>Project 4</ProjectTitle>
      Testy testerson
    </ProjectCard>,
    <ProjectCard>
      <ProjectTitle>Project 5</ProjectTitle>
      Testy testerson
    </ProjectCard>
  ];

  return (
    <React.Fragment>
      <ProjectsSection>
        <ProjectsContainer id="projects">
          <h2>Projects</h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus,
            libero ac vestibulum ultrices, dolor mi rhoncus mauris, vitae dignissim diam
            arcu quis libero. Aliquam blandit purus vel libero malesuada, ut consectetur
            dui pellentesque. Mauris condimentum pellentesque congue. Morbi in turpis augue.
            Vivamus fringilla scelerisque ligula, et fermentum lectus. Maecenas eros lacus,
            volutpat vitae ultricies id, ullamcorper vitae diam. Nulla sodales tellus non
            sagittis rutrum. Duis viverra faucibus elit, in mollis libero elementum fermentum.
            Praesent fermentum, massa vulputate aliquam hendrerit, ipsum nunc venenatis orci,
            a semper lectus lectus sit amet sapien. Cras congue erat egestas malesuada scelerisque.
            Fusce id magna malesuada, scelerisque ligula at, pellentesque metus.
            Proin sed magna in urna consequat dapibus.
        <ProjectList>
            {projectList.map((project, index) => {
              return <div key={project + index}>{project}</div>
            })}
          </ProjectList>
        </ProjectsContainer>
      </ProjectsSection>
    </React.Fragment>
  );
}

Projects.propTypes = {

};


export default Projects;