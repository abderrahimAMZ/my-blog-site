// Step 1: Import React
import * as React from 'react'
import Layout from "../components/layout";
import Seo, {SEO} from "../components/seo"
import HomeLayout from "../components/homeLayout";
import {useContext} from "react";
import {ModeContext} from "../components/ModeProvider";
// Step 2: Define your component
const AboutPage = ({location}) => {
    const [darkMode] = useContext(ModeContext);
    return (
            <HomeLayout pageTitle="About Me" location={location}>

                <div className={"mb-32  pt-20 pb-32"}>

                    <p>Hi, my name is abderrahim amzaourou. firmware engineering student with deep interest in low level programming and automotive software</p>
                    <p>i operate mainly with the C programming language as well as a little bit of rust. i am certified deep learning by coursera and have different other interestes, such as IOT, IA, DevOps and Testting</p>
                    <p>I'm an active member of diverse discord communities as well as i push projects i work on on github frequently.</p>
                    <p className={"pt-2 font-light"}> final year student at ENSAF under the specialization name - embedded systems and industrial informatics</p>

                </div>


            </HomeLayout>
    )
};
export const Head = () => <SEO title={"About me"} />
export default AboutPage;

// Step 3: Export your component