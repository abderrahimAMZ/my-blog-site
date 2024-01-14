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
import {StaticImage} from "gatsby-plugin-image";
const Layout = ({pageTitle,children}) => {

    const [darkMode, setDarkMode] = React.useState(true);

    function toggleDarkMode() {
        setDarkMode(lightingMode => !lightingMode)
    }

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
        <div className={`dark:bg-black dark:text-white ${darkMode ? "dark" : ""}`}>

        <Navbar darkmode={darkMode} toggleDarkMode={toggleDarkMode}/>
        <div className={container}>
            <header className={siteTitle}>
            {data.site.siteMetadata.title}
            </header>
            <main className={"mb-52 font-serif "}>
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