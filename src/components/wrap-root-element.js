import React from "react";
import { MDXProvider } from "@mdx-js/react";
import Code from "./code";
import ModeProvider from "./ModeProvider";
import {theme, GlobalStyle} from "../theme/global-style";
import {ThemeProvider} from "styled-components";
import {H1, H2, P} from "./page_elements";





const components = {
    pre: props => <Code {...props} />,
    //h1 : props => <h1 style={{color: theme.colors.text}} {...props} />,
    h1: props => <H1 {...props} />,
    h2: props => <H2 {...props} />,
    p: props => <P {...props} />,
    //wrapper: ({ children }) => <>{children}</>,
};

export const wrapRootElement = ({ element }) => {
    return <ThemeProvider theme={theme}>
        <GlobalStyle/>
     <ModeProvider>
         <MDXProvider components={components}>{element}</MDXProvider>
     </ModeProvider>
    </ThemeProvider>
};
