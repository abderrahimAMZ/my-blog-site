import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import {StaticImage} from "gatsby-plugin-image";
import {H2} from "../../components/page_elements";
import HomeLayout from "../../components/homeLayout";
import CarteBlog from "../../components/CarteBlog";

const BlogPage = ({ data }) => {
    return (
        <HomeLayout pageTitle="Series">
            <div className={"mt-20 mb-20 text-2xl"}>
                Here you can find all the series. Series are a collection of articles that are related to each other covering a specific topic like system programming or rust programming. We are soon to release a series on system programming and many more. Stay tuned!
            </div>

            <div className={"flex flex-wrap justify-center items-center"}>
                {
                    data.allMdx.nodes.map(node => (
                        <CarteBlog title={node.frontmatter.title} fluid={node.frontmatter.thumbnail.childImageSharp.gatsbyImageData} date={node.frontmatter.date} author={node.frontmatter.author} time={node.frontmatter.time} author_github={node.frontmatter.author_github} type={node.frontmatter.type} slug={node.frontmatter.slug} path={"/series"}/>
                    ))
                }
            </div>
            <div>
                <div className={"mt-20 mb-20 text-xl"}>
            <Link to={"/"} className={"back-link"}> Go Back Up  </Link>

                </div>

            </div>


        </HomeLayout>
    );
}

export const query = graphql`{
  allMdx(
    sort: {frontmatter: {date: DESC}}
    filter: {frontmatter: {type: {eq: "serie"}}}
  ) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
        slug
        type
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

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage