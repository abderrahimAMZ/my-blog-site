import {Card, CardContent, Grid, Typography} from "@mui/material";
import { GatsbyImage } from "gatsby-plugin-image";
import {Link} from "gatsby";
import * as React from "react";
import {useState} from "react";
import {darkMode} from "../../tailwind.config";


const CarteBlog = ({title, fluid, author, date, time, author_github, slug, path}) => {
    const [state, setState] = useState({
        raised:false,
        shadow:1,
        border: false
    });
    return (
        <div className={"w-[270px] h-[360px] dark:bg-dark-card mx-5 my-2 bg-gray-100 rounded-md dark:shadow-black dark:shadow-sm shadow-sm shadow-gray-300 transform hover:scale-110"}>
        <Link to={`${path}/${slug}`}>
            <div className={"grid grid-rows-layout "}>
                <div>

                    <GatsbyImage image={fluid} alt={title}  as={"div"}
                                 style={{height: "180px", width: "100%" }}
                                    imgStyle={{objectFit: "cover"}}
                />

                </div>

                <div className={"text-md font-bold mx-2 my-1 pb-auto"}>
                    {title}
                </div>
                <div className={"text-sm  mx-2 my-1 pt-auto"}>
                    <p className={"date"}>Posted: {date}</p>
                    Author : <Link to={author_github} alt={"author link"}>{author}</Link>
                    <p className={"read-time"}>{time} Read</p>
                </div>
            </div>


        </Link>
        </div>
    );

}
export default CarteBlog;