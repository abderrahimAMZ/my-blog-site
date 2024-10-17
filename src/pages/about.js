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

                    <div class=" mx-auto shadow-lg rounded-lg p-8 mt-8">
                        <header class="text-center ">
                            <h1 class="text-3xl font-bold">Abderrahim Amzaourou</h1>
                            <p class="text-lg">Software Engineer</p>
                            <div class="mt-4 ">
                                <a href="mailto:abderrahim.amzaourou@gmail.com">abderrahim.amzaourou@gmail.com</a>
                            </div>
                            <div class="mt-2 ">
                                <a href="https://www.linkedin.com/in/abderrahim-amzaourou-865351245/">LinkedIn</a> |
                                <a href="https://github.com/abderrahimAMZ">GitHub</a>
                            </div>
                        </header>

                        <section class="mt-8">
                            <h2 class="text-xl font-semibold py-2">Summary</h2>
                            <div className={"border-t-2 py-1"}></div>
                            <p class="mt-2">
                                Passionate software engineering student with 5 years of experience in automating tasks and building web applications. Versatile in global programming languages, data structures, and algorithms. Certified in Deep Learning and eager to collaborate with experts in high-performance software development.
                            </p>
                        </section>

                        <section class="mt-8">
                            <h2 class="text-xl font-semibold py-2">Experience</h2>
                            <div className={"border-t-2 py-1"}></div>

                            <div class="mt-4">
                                <h3 class="text-lg font-semibold">Full Stack Web Developer - 3D Smart Factory</h3>
                                <p class="text-sm">Mohammedia | July 2024 - Sept 2024</p>
                                <ul class="list-disc ml-5 mt-2">
                                    <li>Built the streaming service and notification system with high performance and
                                        efficiency.
                                    </li>
                                    <li>Integrated a recommendation system using Spring Boot for enhanced user
                                        experience.
                                    </li>
                                    <li>Developed key pages for the educational platform, ensuring user-friendly
                                        design.
                                    </li>
                                </ul>
                            </div>

                            <div class="mt-4">
                                <h3 class="text-lg font-semibold">Software Engineer Intern - DPA</h3>
                                <p class="text-sm">Meknes | July 2023 - Aug 2023</p>
                                <ul class="list-disc ml-5 mt-2">
                                    <li>Developed a desktop app for automating PDF form filling and printing, reducing
                                        manual entry errors by 30%.
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <section class="mt-8">
                            <h2 class="text-xl font-semibold py-2">Projects</h2>
                            <div className={"border-t-2 py-1"}></div>

                            <div class="mt-4">
                                <h3 class="text-lg font-semibold">Client Project - Full Stack Web App for File Upload
                                    and Instagram Automation</h3>
                                <p class="text-sm">Tools: FastAPI, React, MongoDB, Tailwind CSS</p>
                                <ul class="list-disc ml-5 mt-2">
                                    <li>Developed a web app for uploading large files and automating Instagram posts via
                                        a bot.
                                    </li>
                                    <li>Integrated a dashboard for managing and organizing files.</li>
                                </ul>
                            </div>

                            <div class="mt-4">
                                <h3 class="text-lg font-semibold">Codfee.dev - Blogging Site</h3>
                                <p class="text-sm">Tools: Gatsby, Tailwind CSS, GitHub Actions</p>
                                <ul class="list-disc ml-5 mt-2">
                                    <li>Built a blogging site with dark mode support and CI/CD pipelines for automatic
                                        blog releases.
                                    </li>
                                </ul>
                            </div>

                            <div class="mt-4">
                                <h3 class="text-lg font-semibold">Full Stack Messaging Web App</h3>
                                <p class="text-sm">Tools: Java, Spring Boot, MongoDB, Jenkins, SonarQube</p>
                                <ul class="list-disc ml-5 mt-2">
                                    <li>Developed a real-time messaging web app with CI/CD pipeline and static analysis
                                        integration.
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <section class="mt-8">
                            <h2 class="text-xl font-semibold py-2">Education</h2>
                            <div className={"border-t-2 py-1"}></div>
                            <div class="mt-4">
                                <h3 class="text-lg font-semibold">National School of Applied Sciences</h3>
                                <p class="text-sm">Bachelor in Embedded Systems | Expected Graduation: July 2025</p>
                                <p>Coursework: Object-Oriented Programming, Operating Systems, Parallel Computing,
                                    Linear Programming.</p>
                            </div>
                        </section>

                        <section class="mt-8">
                            <h2 class="text-xl font-semibold py-2">Skills</h2>
                            <div className={"border-t-2 py-1"}></div>
                            <div class="mt-4">
                                <h3 class="text-lg font-semibold">Programming Languages</h3>
                                <p>Python, Java, C++, C, JavaScript, TypeScript, Node.js, Rust</p>
                            </div>

                            <div class="mt-4">
                                <h3 class="text-lg font-semibold">Technologies</h3>
                                <p>HTML, CSS, Tailwind CSS, React, FastAPI, Django, Spring Boot, Hibernate, JUnit,
                                    Mockito, SQLite, MySQL, PostgreSQL, MongoDB</p>
                            </div>

                            <div class="mt-4">
                                <h3 class="text-lg font-semibold">Practices</h3>
                                <p>Agile (Scrum), Scripting (Bash, Python), DevOps (Jenkins, Docker, Maven, Git)</p>
                            </div>
                        </section>
                    </div>


                </div>


            </HomeLayout>
    )
};
export const Head = () => <SEO title={"About me"} />
export default AboutPage;

// Step 3: Export your component