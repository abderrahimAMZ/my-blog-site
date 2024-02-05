import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import {StaticImage} from "gatsby-plugin-image";
import {H2} from "../../components/page_elements";

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="My Blog Posts">
            {
                data.allMdx.nodes.map(node => (
                    <article key={node.id}>
                        <H2>

                        <h2>
                            <Link to={`/series/${node.frontmatter.slug}`}>
                                {node.frontmatter.title}
                            </Link>
                        </h2>
                        </H2>
                        <p>Posted: {node.frontmatter.date}</p>
                        Author : <Link to={node.frontmatter.author_github} alt={"author link"}>{node.frontmatter.author}</Link>
                        <p className={"read-time"}>{node.frontmatter.time} Read</p>
                    </article>
                ))
            }
            <Link to={"/series"} className={"back-link"}> Go Back Up  </Link>
        </Layout>
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
           author
           author_github
           time
        }
        id
      }
    }
  }
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage