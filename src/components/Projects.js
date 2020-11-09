import React, { useContext } from "react";
import { UserContext } from './userContext';
import PropTypes from "prop-types";
import styled from 'styled-components';


function Projects(props) {
  const { value } = useContext(UserContext);
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
    color: ${props.theme.primary};
    box-shadow: 3px 1px 3px ${props.theme.white};
    border-radius: 10px;
    height: 200px;
    background-color: ${props.theme.light};
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin: 5px;
    text-align: center;
  `;

  const ProjectTitle = styled.div`
    color: ${props.theme.primary};
    font-weight: bold;
    text-align: center;
  `;


  const ProjectImage = styled.img`
  max-width: 150%;
  max-height: 60%;
  padding: 5%;

  
  `;




  const projectList = [
    <ProjectCard>
      <ProjectTitle>Collab-a-Lab React App</ProjectTitle>
      <a href={value.p1}><ProjectImage src="https://firebasestorage.googleapis.com/v0/b/portfolio-template-e927a.appspot.com/o/projects%2Fproject1.png?alt=media&token=8510e287-976c-40f3-8797-e44f8b4494f5" ></ProjectImage></a>
    </ProjectCard>,
    <ProjectCard>
      <ProjectTitle>Booch Town React App</ProjectTitle>
      <a href={value.p2}><ProjectImage src="https://firebasestorage.googleapis.com/v0/b/portfolio-template-e927a.appspot.com/o/projects%2Fproject2.png?alt=media&token=04741a4b-5a35-4761-a183-6d99e6ebc7d1" ></ProjectImage></a>
    </ProjectCard>,
    <ProjectCard>
      <ProjectTitle>Local Business Lookup API</ProjectTitle>
      <a href={value.p3}><ProjectImage src="https://firebasestorage.googleapis.com/v0/b/portfolio-template-e927a.appspot.com/o/projects%2Fproject3.png?alt=media&token=5917fa6d-3193-4478-8bcc-0cbd2e6c8fc8" ></ProjectImage></a>
    </ProjectCard>,
    <ProjectCard>
      <ProjectTitle>Pokegotchi Javascript Game</ProjectTitle>
      <a href={value.p4}><ProjectImage src="https://firebasestorage.googleapis.com/v0/b/portfolio-template-e927a.appspot.com/o/projects%2Fproject4.png?alt=media&token=762f79c0-9e5d-4b9b-b5b0-83bb288bb3db" ></ProjectImage></a>
    </ProjectCard>,
    <ProjectCard>
      <ProjectTitle>I Fell in love with a Postcard</ProjectTitle>
      <a href={value.p5}><ProjectImage src="https://firebasestorage.googleapis.com/v0/b/portfolio-template-e927a.appspot.com/o/projects%2Fproject5.png?alt=media&token=30f2f1c8-6448-45c3-b0b7-298239080ddf" ></ProjectImage></a>
    </ProjectCard>,
    <ProjectCard>
      <ProjectTitle>Record U</ProjectTitle>
      <a href={value.p6}><ProjectImage src="https://firebasestorage.googleapis.com/v0/b/portfolio-template-e927a.appspot.com/o/projects%2Fproject6.png?alt=media&token=1a318d82-8a31-4bb9-becb-4144e6f25257" ></ProjectImage></a>
    </ProjectCard>
  ];

  return (
    <React.Fragment>
      <ProjectsSection>
        <ProjectsContainer id="projects">
          <h2>Projects</h2>
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus,
            libero ac vestibulum ultrices, dolor mi rhoncus mauris, vitae dignissim diam
            arcu quis libero. Aliquam blandit purus vel libero malesuada, ut consectetur
            dui pellentesque. Mauris condimentum pellentesque congue. Morbi in turpis augue.
            Vivamus fringilla scelerisque ligula, et fermentum lectus. Maecenas eros lacus,
            volutpat vitae ultricies id, ullamcorper vitae diam. Nulla sodales tellus non
            sagittis rutrum. Duis viverra faucibus elit, in mollis libero elementum fermentum.
            Praesent fermentum, massa vulputate aliquam hendrerit, ipsum nunc venenatis orci,
            a semper lectus lectus sit amet sapien. Cras congue erat egestas malesuada scelerisque.
            Fusce id magna malesuada, scelerisque ligula at, pellentesque metus.
            Proin sed magna in urna consequat dapibus. */}
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