import React from "react";
import { MDXProvider } from "@mdx-js/react";
import Code from "./code";
import ModeProvider from "./ModeProvider";
import {theme, GlobalStyle} from "../theme/global-style";
import {ThemeProvider} from "styled-components";
import {H1, H2, H3, P, A, Highlight, Ol, Ul} from "./page_elements";
import AutoLinkedHeading from "./autoLinkedHeading";
import {CssBaseline} from "@mui/material";
import Blockquote from "./Blockquote";

// i need to make H1 and H2 as  links to the heading how to do that?
//


const components = {
    pre: props => <Code {...props} />,
    //h1 : props => <h1 style={{color: theme.colors.text}} {...props} />,
    h1: props => <H1><AutoLinkedHeading  {...props} /></H1>,
    h2: props => <H2><AutoLinkedHeading  {...props} /></H2>,
    h3: props => <H3><AutoLinkedHeading  {...props} /></H3>,
    p: props => <P {...props} />,
    code: props => <span className={" bg-light-highlight-bg text-light-highlight-fg  dark:bg-dark-highlight-bg dark:text-dark-color"} {...props} />,
    ol: props => <Ol {...props} />,
    ul: props => <Ul {...props} />,
    img: props => <div onClick={()=> {}}><img {...props} /></div>,
    blockquote : props => <Blockquote {...props} />,
    a: props => <a  className={"underline"} {...props} />,

};

export const wrapRootElement = ({ element }) => {
    return <ThemeProvider theme={theme}>

        <GlobalStyle/>
     <ModeProvider>
         <MDXProvider components={components}>{element}</MDXProvider>
     </ModeProvider>
    </ThemeProvider>
};
