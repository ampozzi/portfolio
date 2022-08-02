import React from "react";
import Layout from '../components/Layout/layout';
import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Hi there!</p>
      <p>I'm Axel Pozzi...</p>
      <section>
        <div className="flex">
          <h3>About me</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ipsum recusandae ratione. Architecto ut nesciunt hic quam est a assumenda.</p>
        </div>
        <div className="flex">
          <div className="flex">
            <h3 className="pa3">Skills</h3>
            <div>
                <b>Languages & frameworks</b>
                <p>JavaScript (ES6+), Golang, Node.js, Express.js, React, Ruby on Rails, PHP</p>
                <b>Databases</b>
                <p>MongoDB, PostreSQL, MySQL, Oracle, BigQuery, Teradata, DB2</p>
                <b>Other</b>
                <p>Docker, Amazon Web Services (AWS), CI / CD, Microservices, API design, Agile / Scrum</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage;
