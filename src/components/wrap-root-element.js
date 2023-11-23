import React from "react";
import { MDXProvider } from "@mdx-js/react";
import Highlight, { defaultProps } from "prism-react-renderer";

const components = {

    pre: props => {
        const className = props.children.props.className || "";
        const code = props.children.props.children.trim();
        const language = className.replace(/language-/, "");
        const file = props.children.props.file;
        return (
            <Highlight
                {...defaultProps}
                code={code}
                language={language}
            >
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <pre className={className} style={style}>
            <div>{`Language: ${language}`}</div>
                        {<div>{file && `File: ${file}`}</div>}
                        {tokens.map((line, i) => (
                            <div {...getLineProps({ line, key: i })}>
                                {line.map((token, key) => (
                                    <span {...getTokenProps({ token, key })} />
                                ))}
                            </div>
                        ))}
          </pre>
                )}
            </Highlight>
        );
    },
    wrapper: ({ children }) => <>{children}</>,
};

export const wrapRootElement = ({ element }) => {
    return <MDXProvider components={components}>{element}</MDXProvider>;
};