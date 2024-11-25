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
        <Link to={`${path}/${slug}`} className={"w-[270px]  dark:bg-dark-card  bg-gray-100 rounded-md dark:shadow-black dark:shadow-sm shadow-sm shadow-gray-300 transform hover:scale-110 grid grid-rows-three mx-auto  "}>
                <div>

                    <GatsbyImage image={fluid} alt={title}  as={"div"}
                                 style={{height: "180px", width: "100%" }}
                                    imgStyle={{objectFit: "cover"}}
                />

                </div>

                <div className={"text-md font-bold mx-2 my-1 pb-auto flex align-top"}>
                    {title.length > 80 ? title.substring(0, 80) + "..." : title}
                </div>
                <div className={"text-sm  mx-2 my-1  pb-0 pt-auto "}>
                    <p className={"date"}>Posted: {date}</p>
                    Author : <Link to={author_github} alt={"author link"}>{author}</Link>
                    <p className={"read-time"}>{time} Read</p>
                </div>
        </Link>
    );

}
export default CarteBlog;