import * as React from "react";
import {graphql, Link, useStaticQuery} from 'gatsby';
import { container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle

} from "./layout.module.css";
import Navbar from "./navbar";
import Footer from "./footer";
const Layout = ({pageTitle,children}) => {
    const data = useStaticQuery(graphql`query {
    site {
    siteMetadata {
      title
    }
  }
    siteBuildMetadata {
        buildTime
    }
  }
`)

    return (
        <div>

        <Navbar />
        <div className={container}>
            <header className={siteTitle}>
            {data.site.siteMetadata.title}
            </header>
            <main className={"mb-52"}>
                <h1 className={heading}>
                    {pageTitle}

                </h1>
                {children}
            </main>
        </div>
            <Footer />
        </div>
    )
}

export default Layout;