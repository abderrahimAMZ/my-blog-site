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
import CoolBear from "./coolBear";
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
                <header >
                    <H1>
                        <div className={"page-title pt-20 "}>
                        {pageTitle}
                        </div>
                    </H1>

            </header>
            <main className={"mb-52 font-serif sm:ml-10 sm:mr-10 main "}>
                    {children}
            </main>
            </div>


            <Footer />
        </div>
    )
}

export default Layout;