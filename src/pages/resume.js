import React from "react";
import NewResume from "../components/NewResume";
import Layout from '../components/Layout';
import './index.css'


const ResumePage = () => {
  return (
    <Layout pageTitle="Resume">
        <NewResume />
    </Layout>
  )
}

export default ResumePage;