import * as React from 'react';
import Layout from '../components/Layout/Layout';
import ProjectCard from '../components/projects/projectCard';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import projectData from '../assets/Projects.json';

const ProjectsPage = () => {
  return (
    <Layout pageTitle="Projects">
      <Typography variant="body1" color="text.primary">
          Here are a few projects I've been working on lately.
      </Typography>
      <div>
      <Container maxWidth="sm" sx={{display: 'flex'}}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </Container>
      </div>
    </Layout>
  )
}

export default ProjectsPage;