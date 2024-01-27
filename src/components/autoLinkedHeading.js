import React from "react"
import { GoLink as LinkIcon } from "react-icons/go"
import SluggerContext from "./SluggerContext"

const AutoLinkedHeading = ( {children, ...props }) => (
    <div className={"header-link"}>
        <div>
        {children}
            </div>
        <div>

        <SluggerContext.Consumer>
            {slugger => {
                const slug = slugger.slug(children)
                return (
                    <a
                        id={slug}
                        href={`#${slug}`}
                    >
                        <LinkIcon size="16" />
                    </a>
                )
            }}
        </SluggerContext.Consumer>
        </div>
    </div>
)

export default AutoLinkedHeading