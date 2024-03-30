import * as react from "react"
import Seo from "../components/seo";
import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import {StaticImage} from "gatsby-plugin-image";
import {H2} from "../components/page_elements";
import { GatsbyImage } from "gatsby-plugin-image";
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
                <div className={"pt-4 pb-4 text-2xl"}>
                    Code4coding is a blog where you can find articles, tutorials and practice programming for the effective life. Code4coding is aiming to show the importance of programming as a skill of itself and what power it can unlock in the digital world!

                </div>
                <div className={"flex flex-wrap justify-center items-center"}>
                {
                    data.allMdx.nodes.map(node => (
                    <CarteBlog title={node.frontmatter.title} fluid={node.frontmatter.thumbnail.childImageSharp.gatsbyImageData} date={node.frontmatter.date} author={node.frontmatter.author} time={node.frontmatter.time} author_github={node.frontmatter.author_github} path={node.frontmatter.type === "blog" ? "/blogs" : "/series"} slug={node.frontmatter.slug}/>
                    ))
                }
                </div>
                <Link to={"/"} className={"back-link"}> Go Back Up  </Link>

            </HomeLayout>
        </main>
    );
}

export const query = graphql`{
  allMdx(sort: {frontmatter: {date: DESC}}) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
        slug
        author
        thumbnail {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        author_github
        time
        type
      }
      id
    }
  }
}`
// You'll learn about this in the next task, just copy it for now
export const Head = () => {

    return (
        <Seo title={"Home Page"} />
    )
}
export default IndexPage