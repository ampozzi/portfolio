import React from "react";
import Layout from '../components/Layout';
import './index.css'
import { Typography,Container,Box,CardMedia } from "@mui/material";
import HeroSection from "../components/HeroSection";
import SkillsSection from "../components/SkillSection";


const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <HeroSection />
      <SkillsSection/>
    </Layout>
  )
}

export default IndexPage;
