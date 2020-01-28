import React from "react"
import Layout from "./components/Layout"
import Head from "./components/Head"
const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <div style={{ display: "flex" }}>
        <h1>Hallo</h1>
        <i class="fab fa-3x fa-angellist"></i>
      </div>

      <h2>I'm Ruben. And I'm 420 Friendly!</h2>
    </Layout>
  )
}

export default IndexPage
