import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo, {SEO} from '../../components/seo'
import {StaticImage} from "gatsby-plugin-image";
import {H2} from "../../components/page_elements";
import HomeLayout from "../../components/homeLayout";
import CarteBlog from "../../components/CarteBlog";
import {Grid} from "@mui/material";

const BlogPage = ({ data }) => {
    return (
        <HomeLayout pageTitle="Blogs">

            <div className={"mt-4 mb-4 text-2xl"}>
                here you can find blogs, most of the them are a 15 minutes read.
            </div>
            <div className={"flex flex-wrap justify-center items-center"}>
                {
                            data.allMdx.nodes.map(node => (
                                <CarteBlog title={node.frontmatter.title}
                                           fluid={node.frontmatter.thumbnail.childImageSharp.gatsbyImageData} date={node.frontmatter.date}
                                           author={node.frontmatter.author} time={node.frontmatter.time}
                                           author_github={node.frontmatter.author_github} type={node.frontmatter.type}
                                           slug={node.frontmatter.slug} path={"/blogs"}/>
                            ))

                }
            </div>

        </HomeLayout>
    );
}

export const query = graphql`{
  allMdx(
    sort: {frontmatter: {date: DESC}}
    filter: {frontmatter: {type: {eq: "blog"}}}
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

export const Head = () => <SEO title="My Blog Posts" description={"30 minutes blogs to explain a topic"}/>

export default BlogPage