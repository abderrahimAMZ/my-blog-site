import * as react from "react"
import Seo from "../components/seo";
import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = ({data}) => {
  return (
      <main>
          <Layout pageTitle="Home page">
              {
                  data.allMdx.nodes.map(node => (
                      <article key={node.id}>
                          <h2>
                              <Link to={`/series/${node.frontmatter.slug}`}>
                                  {node.frontmatter.title}
                              </Link>
                          </h2>
                          <p>Posted: {node.frontmatter.date}</p>
                      </article>
                  ))
              }
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
