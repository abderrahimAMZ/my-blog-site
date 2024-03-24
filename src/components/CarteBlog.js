import {Card, CardContent, Typography} from "@mui/material";
import Img from "gatsby-image";
import {Link} from "gatsby";
import * as React from "react";
import {useState} from "react";
import {darkMode} from "../../tailwind.config";


const CarteBlog = ({title, fluid, author, date, time, author_github, type, slug}) => {
    const [state, setState] = useState({
        raised:false,
        shadow:1,
        border: false
    });
    return (
            <div className={"m-5  md:w-5/12 w-full"}>
                {
            type === "blog" ?

            <Link to={`/blogs/${slug}`}>
                <Card style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column' , border: state.border  ? "2px solid yellow" : "none"}}
                      onMouseOver={() => setState({raised: true, shadow: 6, border: true})}
                      onMouseOut={() => setState({raised: false, shadow: 1 , border: false})}
                      raised={state.raised} zDepth={state.shadow}>
                    <Img fluid={fluid} alt={title}/>
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
            : type === 'serie' ?
            <Link to={`/series/${slug}`}>
                <Card style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column' , border: state.border ? "2px solid yellow" : "none"}}
                      onMouseOver={() => setState({raised: true, shadow: 6, border: true})}
                      onMouseOut={() => setState({raised: false, shadow: 1 , border: false})}
                      raised={state.raised} zDepth={state.shadow}>
                    <Img fluid={fluid} alt={title}/>
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
            </Link> : null
                }
                </div>
                )

}
export default CarteBlog;