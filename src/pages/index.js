import * as react from "react"
// Step 1: Import React
import * as React from 'react'
import Layout from "../components/layout";
import { Link } from 'gatsby'
import {StaticImage} from "gatsby-plugin-image";
import { useStaticQuery, graphql} from "gatsby";

import Seo from "../components/seo";
// Step 2: Define your component
const IndexPage = () => {
  return (
      <main>
         <Layout pageTitle={"Home Page"}>
             <p>I'm making this by following the Gatsby Tutorial.</p>
             <StaticImage src={"https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"} alt={"Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"} />
             <StaticImage src="../images/bootloader.png" alt={"a bootloader loaded in memory image"} />
         </Layout>
      </main>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => {

    return (
        <Seo title={"Home Page"} />
    )
}
export default IndexPage
