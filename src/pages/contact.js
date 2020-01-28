import React from "react"
import Layout from "../pages/components/Layout"
import Head from "./components/Head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <div style={{ display: "flex" }}>
        <h1>Hit Me Up</h1>
        <i class="fas fa-2x fa-joint" style={{ marginLeft: "15px" }}></i>
      </div>
      <p>Got some interesting conversation topics?</p>
      <p>021 345 6789</p>
      <p>info@rubenverster.com</p>
    </Layout>
  )
}

export default ContactPage
