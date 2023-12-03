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
            <nav className="text-rebeccapurple">
                <ul className="flex space-x-4">
                    <li className="inline-block">
                        <Link to={"/"} className="no-underline hover:underline">Home</Link>
                    </li>
                    <li className="inline-block">
                        <Link to={"/about"} className="no-underline hover:underline">About</Link>
                    </li>
                    <li className="inline-block">
                        <Link to={"/blog"} className="no-underline hover:underline">Blog posts</Link>
                    </li>
                </ul>
            </nav>

            <main>
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