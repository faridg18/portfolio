import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <section>
      <h1>Projects</h1>
      <section>
        <h2>first</h2>
        <p>
          jdfnbsijfngbsijn
        </p>
      </section>
      <section>
        <h2>second</h2>
        <p>
          erignerivnr
        </p>
      </section>
    </section>
  </Layout>
)

export default IndexPage
