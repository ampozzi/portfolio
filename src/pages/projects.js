import * as React from 'react'
import Layout from '../components/Layout/layout'

const ProjectsPage = () => {
  return (
    <Layout pageTitle="Projects">
      <p>Here are a few projects I've been working on lately.</p>
      <div>
        <ul>
          <li>Project #1</li>
          <li>Project #2</li>
          <li>Project #3</li>
          <li>Project #4</li>
        </ul>
      </div>
    </Layout>
  )
}

export default ProjectsPage;