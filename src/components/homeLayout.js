import * as React from "react";
import {graphql, Link, useStaticQuery} from 'gatsby';
import {ModeContext} from "./ModeProvider";
import { WiderContainer,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle

}
    from "./layout.module.css";

import Navbar from "./navbar";
import Footer from "./footer";
import {GatsbyImage, StaticImage} from "gatsby-plugin-image";
import {useContext} from "react";
import {H1} from "./page_elements";
import CoolBear from "./CoolBear";
import {Image} from "react-bootstrap";
const Layout = ({pageTitle,ImgSrc, ImgAlt, location, children}) => {

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
    console.log(ImgSrc);
    return (
        <div className={`dark:bg-black dark:text-white ${darkMode ? "dark" : "light"}`}>


            <Navbar location={location}/>
            <div>
                {
                    /*
                    location.pathname.length ===1 ?
                    <StaticImage src={"../../images/layout-images/blogs.png"} alt={ImgAlt} className={"w-full"}/>
                        : location.pathname.includes("blogs") ?
                            <StaticImage src={"../../images/layout-images/blogs.png"} alt={ImgAlt} className={"w-full"}/>
                        :
                            <StaticImage src={"../../images/layout-images/blogs.png"} alt={ImgAlt} className={"w-full"}/>

                     */


                }
            </div>
            <div className={WiderContainer}>
                <header className={siteTitle}>
                </header>
                <main className={"mb-52  main"}>
                    <H1>
                        <h1 className={heading}>
                            {pageTitle}

                        </h1></H1>
                    {children}
                </main>

            </div>
            <Footer/>
        </div>
    )
}

export default Layout;
