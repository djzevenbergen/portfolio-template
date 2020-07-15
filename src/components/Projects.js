import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

const ProjectsContainer = styled.div`
`;

const ProjectCard = styled.div`
  box-shadow: 3px 1px 3px black;
  width: 20%;
`;

function Projects(props) {
  return (
    <React.Fragment>
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
          <ProjectCard>
          Test
          </ProjectCard>
      </ProjectsContainer>
    </React.Fragment>
  );
}

Projects.propTypes = {

};


export default Projects;