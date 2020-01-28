import React from "react"
import { Link } from "gatsby"
import Layout from "../pages/components/Layout"
import Head from "./components/Head"
import unicorn from "../img/unicorn.png"

const Four0Four = () => {
  return (
    <Layout>
      <Head title="404 D:" />

      <h1>Page Not Found</h1>
      <img
        alt="unicorn"
        src={unicorn}
        width="300px"
        style={{ marginLeft: "auto" }}
      />

      <div style={{ display: "flex", fontSize: "2rem" }}>
        <i class="fas fa-home fa-5"></i>
        <Link style={{ color: "#222" }} to="/">
          Head back home?
        </Link>
      </div>
    </Layout>
  )
}

export default Four0Four
