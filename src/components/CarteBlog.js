import {Card, CardContent, Typography} from "@mui/material";
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
        <div className={"m-5  md:w-5/12 w-full"}>
        <Link to={`${path}/${slug}`}>
            <Card sx={{ maxWidth: 450}} style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column' , border: state.border  ? "1px solid yellow" : "none"}}
                  onMouseOver={() => setState({raised: true, shadow: 6, border: true})}
                  onMouseOut={() => setState({raised: false, shadow: 1 , border: false})}
                  raised={state.raised} zDepth={state.shadow}>
                <div className={"w-full  m-auto"}>
                <GatsbyImage image={fluid} alt={title} />
                </div>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <p className={"date"}>Posted: {date}</p>
                        Author : <Link to={author_github} alt={"author link"}>{author}</Link>
                        <p className={"read-time"}>{time} Read</p>
                    </Typography>
                </CardContent>
            </Card>

        </Link>
            </div>
    );

}
export default CarteBlog;