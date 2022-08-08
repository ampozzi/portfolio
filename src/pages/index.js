import React from "react";
import Layout from '../components/Layout/Layout';
import './index.css'
import { Typography,Container,Box } from "@mui/material";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <Container sx={{padding: '1rem'}}>
        <Typography variant='h5'>
          Hi there!
        </Typography>
        <Typography variant='h4'>
          I'm Axel Pozzi...
        </Typography>
        <Typography variant='h4'>
          About me
        </Typography>
        <Typography variant='body1'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ipsum recusandae ratione. Architecto ut nesciunt hic quam est a assumenda.
        </Typography>
      </Container>
      <Container>
        <Box sx={{display: 'flex'}}>
          <Typography variant='h5' sx={{padding: '1rem'}}>
            Skills
          </Typography>
            <Box >
                <Box sx={{padding: '1rem'}}>
                  <Typography variant='h6'>Languages & frameworks</Typography>
                  <Typography variant='body1'>JavaScript (ES6+), Golang, Node.js, Express.js, React, Ruby on Rails, PHP</Typography>
                </Box>
                <Box sx={{padding: '1rem'}}>
                  <Typography variant='h6'>Databases</Typography>
                  <Typography variant='body1'>MongoDB, PostreSQL, MySQL, Oracle, BigQuery, Teradata, DB2</Typography>
                </Box>
                <Box sx={{padding: '1rem'}}>
                  <Typography variant='h6'>Other</Typography>
                  <Typography variant='body1'>Docker, Amazon Web Services (AWS), CI / CD, Microservices, API design, Agile / Scrum</Typography>
                </Box>
          </Box>
        </Box>
      </Container>

    </Layout>
  )
}

export default IndexPage;
