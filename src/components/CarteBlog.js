import {Card, CardContent, Typography} from "@mui/material";
import Img from "gatsby-image";
import {Link} from "gatsby";
import * as React from "react";
import {useState} from "react";


const CarteBlog = ({title, fluid, author, date, time, author_github}) => {
    const [state, setState] = useState({
        raised:false,
        shadow:1,
    });
    return (
        <Card style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}
              onMouseOver={()=>setState({ raised: true, shadow:6})}
              onMouseOut={()=>setState({ raised:false, shadow:1 })}
              raised={state.raised} zDepth={state.shadow} >
            <Img fluid={fluid} alt={title} />
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
        </div>
    )
}
export default CarteBlog;