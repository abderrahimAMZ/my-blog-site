import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import {graphql, Link} from 'gatsby'
import styled from "styled-components";
import {StaticImage} from "gatsby-plugin-image";

const Toc = styled.ul`
  position: fixed;
  left: calc(50% + 400px);
  top: 110px;
  max-height: 70vh;
  width: 310px;
  display: flex;
    li {
        line-height: ${({ theme }) => theme.lineHeight.tight};
        margin-top: ${({ theme }) => theme.spacing[3]};
    }
`

const InnerScroll = styled.div`
  overflow: hidden;
  overflow-y: scroll;
`
const BlogPost = ({ data, children }) => {
    const  tableOfContents = data.mdx.tableOfContents;
    return (
        <div>
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <p>{data.mdx.frontmatter.date}</p>
            Author : <Link to={data.mdx.frontmatter.author_github} alt={"author link"}>{data.mdx.frontmatter.author}</Link>
            <p className={"read-time"}>{data.mdx.frontmatter.time} Read</p>
            {typeof tableOfContents.items === 'undefined' ? null : (
                <Toc>
                    <InnerScroll>
                        <h2>Table of contents</h2>
                        {tableOfContents.items.map(i => (
                            <li key={i.url}>
                                <a href={i.url} key={i.url}>
                                    {i.title}
                                </a>
                            </li>
                        ))}
                    </InnerScroll>
                </Toc>
            )}
            <p>{data.mdx.frontmatter.type}</p>
            {children}

        </Layout>

            <Link to={"/"} className={"back-link"}> <StaticImage src={"../../../images/icons8-arrow-pointing-left-50.png"} alt={"go back link"} />  </Link>

        </div>
    )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
           author
           author_github
           time
      }
      tableOfContents
    }
  }
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost