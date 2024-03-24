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

            <div className={"flex flex-wrap justify-center items-center"}>
                {
                    data.allMdx.nodes.map(node => (
                        <CarteBlog title={node.frontmatter.title} fluid={node.frontmatter.thumbnail.childImageSharp.fluid} date={node.frontmatter.date} author={node.frontmatter.author} time={node.frontmatter.time} author_github={node.frontmatter.author_github} type={node.frontmatter.type} slug={node.frontmatter.slug}/>
                    ))
                }
            </div>
            <div>
            <Link to={"/"} className={"back-link"}> Go Back Up  </Link>

            </div>


        </HomeLayout>
    )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}, filter : {frontmatter : {type : {eq : "serie"}}}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
          type
           thumbnail {
            childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }}}
           author
           author_github
           time
           type
        }
        id
      }
    }
  }
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage