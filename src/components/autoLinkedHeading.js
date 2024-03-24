import React from "react"
import { GoLink as LinkIcon } from "react-icons/go"
import SluggerContext from "./SluggerContext"

const AutoLinkedHeading = ( {children, ...props }) =>  {
    const [hover, setHover] = React.useState(false);
    return (
    <div className={"header-link flex flex-row"}
         onMouseEnter={() => setHover(true)}
         onMouseLeave={() => setHover(false)}
    >
        <div>
        {children}
            </div>
        <div>

        <SluggerContext.Consumer>
            {slugger => {
                const slug = slugger.slug(children)
                return (
                    <div className={hover ? "" : "hidden"}>
                    <a
                        id={slug}
                        href={`#${slug}`}
                    >
                        <LinkIcon size="16" />
                    </a>
                    </div>
                )
            }}
        </SluggerContext.Consumer>
        </div>
    </div>
)}

export default AutoLinkedHeading;