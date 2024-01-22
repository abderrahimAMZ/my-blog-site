// Step 1: Import React
import * as React from 'react'
import Layout from "../components/layout";
import Seo from "../components/seo"
// Step 2: Define your component
const AboutPage = () => {
    return (
        <main>
            <Layout pageTitle={"About Me"}>
    <p>I'm Abderrahim Amzaourou, a software developer with a keen interest in low-level and system programming. My primary coding languages are C, C++, and Rust, but I also have extensive experience with Java, JavaScript, and Python. I'm passionate about sharing knowledge and fostering a community of computer science enthusiasts. Feel free to reach out to me at <a href="mailto:abderrahim.amzaourou@gmail.com">abderrahim.amzaourou@gmail.com</a>.
</p>
            </Layout>
        </main>
    )
};
export const Head = () => <Seo title={"About me"} />
export default AboutPage;

// Step 3: Export your component