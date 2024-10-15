import * as React from 'react'
import Layout from '../../components/layout'
import Seo, {SEO} from '../../components/seo'
import {graphql, Link} from 'gatsby'
import styled from "styled-components";
import {StaticImage} from "gatsby-plugin-image";

import Toc from "../../components/Toc";
import {AnchorLink} from "gatsby-plugin-anchor-links";
import CoolBear from "../../components/CoolBear";

const BlogPost = ({ data, location, children }) => {
    var tableOfContents = data.mdx.tableOfContents;


    return (
        <div>
            <Layout pageTitle={data.mdx.frontmatter.title} location={location}>

                <div className={"blog-post"}>

                <p id={"#"}>{data.mdx.frontmatter.date}</p>
                Author : <Link to={data.mdx.frontmatter.author_github} alt={"author link"}>{data.mdx.frontmatter.author}</Link>
                <p className={"read-time"}>{data.mdx.frontmatter.time} Read</p>
                </div>

                {typeof tableOfContents.items === undefined ? null : (
                    <div
                        className={"table-of-content mt-10 mb-10 w-full bg-gray-200 dark:bg-table-content-color px-4 py-3 text-left light:text-gray-800 dark:text-dark-color break-words max-w-md rounded"}>
                        <div className="mx-auto text-xl font-semibold font-sans"><strong>Table of content</strong></div>
                        {tableOfContents.items === undefined ? null :
                            <ul>
                                {
                            tableOfContents.items.map(i => (
                            <li className={"mt-2 list-none px-2 pl-6 font-sans text-lg"} key={i.url}>
                                <AnchorLink className={" block hover:bg-gray-300 dark:hover:bg-gray-700 px-2 py-1 rounded table-of-content"} to={i.url} key={i.url} > {i.title} </AnchorLink>
                            </li>
                       ))
                                }
                            </ul>
                        }
                    </div>
                )}

                {children}
            </Layout>


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
      excerpt
    }
  }
`

export const Head = ({ data }) => <SEO title={data.mdx.frontmatter.title} description={data.mdx.excerpt}/>

export default BlogPost