import React from "react";
import {Highlight,themes, defaultProps } from "prism-react-renderer";
import rangeParser from "parse-numeric-range";

const calculateLinesToHighlight = raw => {
    const lineNumbers = rangeParser(raw);
    if (lineNumbers) {
        return index => lineNumbers.includes(index + 1);
    } else {
        return () => false;
    }
};

const copyToClipboard = str => {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(str).then(
            function () {
                console.log("Copying to clipboard was successful!");
            },
            function (err) {
                console.error("Could not copy text: ", err);
            }
        );
    } else if (window.clipboardData) {
        // Internet Explorer
        window.clipboardData.setData("Text", str);
    }
};

const Code = props => {
    const [isCopied, setIsCopied] = React.useState(false);
    const className = props.children.props.className || "";
    const code = props.children.props.children.trim();
    const language = className.replace(/language-/, "");
    const file = props.children.props.file;
    const highlights = calculateLinesToHighlight(
        props.children.props.highlights || ""
    );

    return (
        <div className={"dark:bg-dark-code-bg bg-light-code-bg rounded-md"}>
        <div
            style={{
                borderRadius: "0.5rem",
                marginTop: "2rem",
                marginBottom: "2rem",
                paddingLeft: "1.5rem",
            }}
        >
            <div style={{ display: "flex", position: "relative" }}>
                <div
                    style={{
                        textTransform: "uppercase",
                        fontFamily: "Montserrat",
                        fontWeight: "bold",
                        textAlign: "center",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                ></div>
                <div
                    style={{
                        color: "#9d9d9d",
                        fontFamily: "Montserrat",
                        fontStyle: "italic",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    {file && `${file}`}
                </div>
                <div style={{ flexGrow: "1" }}></div>
                <button
                    onClick={() => {
                        copyToClipboard(code);
                        setIsCopied(true);
                        setTimeout(() => setIsCopied(false), 1000);
                    }}
                    style={{
                        marginRight: "1.5rem",
                        marginTop: "0.5rem",
                        padding: "8px 12px",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                        color: "#E2E8F0",
                        fontSize: "14px",
                        fontFamily: "sans-serif",
                        lineHeight: "1",
                    }}
                >
                    {isCopied ? "🎉 Copied!" : "Copy"}
                </button>
            </div>
            <div
                style={{
                    overflow: "auto",
                    borderRadius: "0.5rem",
                    paddingBottom: "1rem",

                }}
            >
                <Highlight
                    {...defaultProps}
                    code={code}
                    language={language}
                    theme={themes.nightOwl}
                >
                    {({ className, style, tokens, getLineProps, getTokenProps }) => (
                        <pre
                            className={className}
                            style={{
                                ...style,
                                backgroundColor: "transparent",
                                float: "left",
                                minWidth: "100%",
                            }}
                        >
              {tokens.map((line, i) => (
                  <div
                      {...getLineProps({ line, key: i })}
                      style={{
                          background: highlights(i) ? "#00f5c426" : "transparent",
                          display: "block",
                      }}
                  >
                      {line.map((token, key) => (
                          <span key={key} {...getTokenProps({ token, key })} />
                      ))}
                  </div>
              ))}
            </pre>
                    )}
                </Highlight>
            </div>
        </div>
        </div>
    );
};

export default Code;