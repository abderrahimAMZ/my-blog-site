// Step 1: Import React
import * as React from 'react'
import Layout from "../components/layout";
import Seo from "../components/seo"
// Step 2: Define your component
const AboutPage = () => {
    return (
        <main>
            <Layout pageTitle={"About Me"}>
                <p>am a beginner software developer with experience in web development using Django and React, as well as proficiency in using Vim and JetBrains products. I built a desktop application in Java and contributed to developing IoT solutions. Currently, I am focused on embedded development using C and C++ and i am highly motivated to create innovative software solutions that meet client requirements. I am seeking a maket initiation internship</p>
            </Layout>
        </main>
    )
};
export const Head = () => <Seo title={"About me"} />
export default AboutPage;

// Step 3: Export your component