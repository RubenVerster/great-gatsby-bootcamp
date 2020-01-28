import React from "react"
import { Link } from "gatsby"
import Layout from "../pages/components/Layout"
import Head from "./components/Head"

const Four0Four = () => {
  return (
    <Layout>
      <Head title="404 D:" />

      <h1>Page Not Found</h1>
      <p>
        <Link to="/">Head back home?</Link>
      </p>
    </Layout>
  )
}

export default Four0Four
