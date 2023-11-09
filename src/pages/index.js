import * as react from "react"
// Step 1: Import React
import * as React from 'react'
import Layout from "../components/layout";
import { Link } from 'gatsby'
import {StaticImage} from "gatsby-plugin-image";
// Step 2: Define your component
const IndexPage = () => {
  return (
      <main>
         <Layout pageTitle={"Home Page"}>
             <h1>Welcome to my Gatsby site!</h1>
             <p>I'm making this by following the Gatsby Tutorial.</p>
             <StaticImage src={"https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"} alt={"Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"} />
             <StaticImage src="../images/bootloader.png" alt={"a bootloader loaded in memory image"} />
         </Layout>
      </main>
  )
}

// You'll learn about this in the next task, just copy it for now
export default IndexPage
export const Head = () => {

    return <>

        <title>Home Page</title>
        <meta name="about page" content=" this page is about me "/>

        </>

        }
