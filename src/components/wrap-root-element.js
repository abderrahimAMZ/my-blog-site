import React from "react";
import { MDXProvider } from "@mdx-js/react";
import Code from "./code";
import ModeProvider from "./ModeProvider";

const components = {
    pre: props => <Code {...props} />,
    wrapper: ({ children }) => <>{children}</>,
};

export const wrapRootElement = ({ element }) => {
    return <ModeProvider><MDXProvider components={components}>{element}</MDXProvider></ModeProvider>;
};
