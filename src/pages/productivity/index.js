import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo, {SEO} from '../../components/seo'
import {StaticImage} from "gatsby-plugin-image";
import {H2} from "../../components/page_elements";
import HomeLayout from "../../components/homeLayout";
import CarteBlog from "../../components/CarteBlog";
import {Grid} from "@mui/material";

const BlogPage = ({location, data }) => {
    return (
        <HomeLayout pageTitle="Productivity" location={location} >

            <div className={"mt-4 mb-4 text-2xl"}>
                here, will talk about productivity boosters, such as time management, tools, and tips to improve your productivity.
            </div>
            <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 grid-rows-layout"}>
                {
                            data.allMdx.nodes.map(node => (
                                <CarteBlog title={node.frontmatter.title}
                                           fluid={node.frontmatter.thumbnail.childImageSharp.gatsbyImageData} date={node.frontmatter.date}
                                           author={node.frontmatter.author} time={node.frontmatter.time}
                                           author_github={node.frontmatter.author_github} type={node.frontmatter.type}
                                           slug={node.frontmatter.slug} path={"/productivity"}/>
                            ))

                }
            </div>

        </HomeLayout>
    );
}

export const query = graphql`{
  allMdx(
    sort: {frontmatter: {date: DESC}}
    filter: {frontmatter: {type: {eq: "prod"}}}
  ) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
        slug
        thumbnail {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        author
        author_github
        time
        type
      }
      id
    }
  }
}`

export const Head = () => <SEO title="My Blog Posts" description={"5 minutes productivity blog to save 50 minutes of your day"}/>

export default BlogPage