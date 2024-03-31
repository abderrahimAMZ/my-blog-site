// Step 1: Import React
import * as React from 'react'
import Layout from "../components/layout";
import Seo from "../components/seo"
import HomeLayout from "../components/homeLayout";
import {useContext} from "react";
import {ModeContext} from "../components/ModeProvider";
// Step 2: Define your component
const AboutPage = () => {
    const [darkMode] = useContext(ModeContext);
    return (
            <HomeLayout pageTitle="About Me">

                <div className={"mb-32  pt-20 pb-32"}>
                <p className={"about"}>
                    Hi, my name is abderrahim amzaourou. I'm a software engineer. I love sharing technologies i think are important for developers to know about. I try to simplify, break down topics into smaller ones so they come in handy. I believe of the compounding effect, if you commit to work just for 30 mins a day. it would have a big impact in the long run. if you wish to contact me, feel free to reach out to me on my email. <a className={`${darkMode ? "text-amber-300" : "text-blue-950"} underline`} href={"mailto:abderrahim.amzaourou@gmail.com"} > abderrahim.amzaourou@gmail.com</a>.
                </p>

                </div>


            </HomeLayout>
    )
};
export const Head = () => <Seo title={"About me"} />
export default AboutPage;

// Step 3: Export your component