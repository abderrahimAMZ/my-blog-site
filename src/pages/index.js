import * as react from "react"
import Seo from "../components/seo";
import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import {StaticImage} from "gatsby-plugin-image";
import {H2} from "../components/page_elements";
import Img from "gatsby-image";
import {Card, CardActions, CardContent, CardMedia, Button, Typography, Grid} from "@mui/material";
import HomeLayout from "../components/homeLayout";
import {useState} from "react";
import CarteBlog from "../components/CarteBlog";

const IndexPage = ({data}) => {
    const [state, setState] = useState({
        raised:false,
        shadow:1,
    })
    return (
        <main>
            <HomeLayout pageTitle="Home page">
                <div className={"flex flex-wrap justify-center items-center"}>
                {
                    data.allMdx.nodes.map(node => (
                    <CarteBlog title={node.frontmatter.title} fluid={node.frontmatter.thumbnail.childImageSharp.fluid} date={node.frontmatter.date} author={node.frontmatter.author} time={node.frontmatter.time} author_github={node.frontmatter.author_github} />
                    ))
                }
                </div>
                <Link to={"/"} className={"back-link"}> Go Back Up  </Link>

            </HomeLayout>
        </main>
    )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
           author
           thumbnail {
            childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }}}
           author_github
           time
           type
            
        }
        id
      }
    }
  }
`
// You'll learn about this in the next task, just copy it for now
export const Head = () => {

    return (
        <Seo title={"Home Page"} />
    )
}
export default IndexPage