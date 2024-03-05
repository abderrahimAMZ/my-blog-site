import * as React from "react";
import {graphql, Link, useStaticQuery} from 'gatsby';
import {ModeContext} from "./ModeProvider";
import { container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle

}
   from "./layout.module.css";

import Navbar from "./navbar";
import Footer from "./footer";
import {StaticImage} from "gatsby-plugin-image";
import {useContext} from "react";
import {H1} from "./page_elements";
const Layout = ({pageTitle,children}) => {

    /*
    const [darkMode, setDarkMode] = React.useState(true);

    function toggleDarkMode() {
        setDarkMode(lightingMode => !lightingMode)
    }
    */

    const [darkMode] = useContext(ModeContext);
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
        <div className={`dark:bg-black dark:text-white ${darkMode ? "dark" : "light"}`}>

        <Navbar />
        <div className={container}>
            <header className={siteTitle}>
                {data.site.siteMetadata.title}
            </header>
            <main className={"mb-52 font-serif "}>
                <H1>
                <h1 className={heading}>
                    {pageTitle}

                </h1></H1>
                {children}
            </main>

        </div>
            <Footer />
        </div>
    )
}

export default Layout;