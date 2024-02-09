import * as react from "react"
import Seo from "../components/seo";
import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import {StaticImage} from "gatsby-plugin-image";
import {H2} from "../components/page_elements";

const IndexPage = ({data}) => {
    return (
        <main>
            <Layout pageTitle="Home page">
                {
                    data.allMdx.nodes.map(node => (
                        <article key={node.id}>
                            {
                                node.frontmatter.type === "blog" ?
                                    <H2>
                                        <Link to={`/blogs/${node.frontmatter.slug}`}>
                                            {node.frontmatter.title}
                                        </Link>
                                    </H2>
                                    : <H2>
                                        <Link to={`/series/${node.frontmatter.slug}`}>
                                            {node.frontmatter.title}
                                        </Link>
                                    </H2>

                            }
                            <p className={"date"}>Posted: {node.frontmatter.date}</p>
                            Author : <Link to={node.frontmatter.author_github}
                                           alt={"author link"}>{node.frontmatter.author}</Link>
                            <p className={"read-time"}>{node.frontmatter.time} Read</p>

                        </article>
                    ))


                }
                <Link to={"/"} className={"back-link"}> Go Back Up  </Link>

            </Layout>
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