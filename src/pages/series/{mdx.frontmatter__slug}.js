import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import {graphql, Link} from 'gatsby'
import styled from "styled-components";
import {StaticImage} from "gatsby-plugin-image";

const BlogPost = ({ data, children }) => {
    const  tableOfContents = data.mdx.tableOfContents;
    return (
        <div>
            <Layout pageTitle={data.mdx.frontmatter.title}>

                <div className={"blog-post"}>
                    <p>{data.mdx.frontmatter.date}</p>
                    Author : <Link to={data.mdx.frontmatter.author_github}
                                   alt={"author link"}>{data.mdx.frontmatter.author}</Link>
                    <p className={"read-time"}>{data.mdx.frontmatter.time} Read</p>
                </div>

                {typeof tableOfContents.items === undefined ? null : (
                    <div
                        className={"table-of-content mt-10 mb-10 w-full bg-gray-200 dark:bg-gray-900 px-4 py-3 text-left light:text-gray-800 dark:text-gray-100 break-words max-w-md rounded"}>
                        <div className="mx-auto text-xl font-semibold"><strong>Table of content</strong></div>
                        {tableOfContents.items === undefined ? null :
                            <ul>
                                {
                                    tableOfContents.items.map(i => (
                                        <li className={"mt-2 list-none px-2 pl-6"} key={i.url}>
                                            <a className={" block hover:bg-gray-300 dark:hover:bg-gray-700 px-2 py-1 rounded table-of-content"} href={i.url} key={i.url}>
                                                {i.title}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        }
                    </div>
                )}
                    <p>{data.mdx.frontmatter.type}</p>
                    {children}

                    <Link to={"/"} className={"back-link"}> Go back to the Articles page </Link>
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
    }
  }
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost