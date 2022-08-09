import React from "react";
import Layout from '../components/Layout';
import './index.css'
import { Typography,Container,Box,CardMedia } from "@mui/material";
import HeroSection from "../components/HeroSection";


const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <HeroSection />
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
