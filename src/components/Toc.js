import styled from "styled-components";
import React from "react";

const Toc = (tableOfContent) => {
    return (
        <div className={"table-of-contents"}>

            <h2>Table of contents</h2>
            {tableOfContent.items === undefined ? null : tableOfContent.items.map(i => (
                <li key={i.url}>
                    <a href={i.url} key={i.url}>
                        {i.title}
                    </a>
                    {i.items && (i.items.length > 0) ? (
                        <ul>
                            {i.items.map(j => (
                                <li key={j.url}>
                                    <a href={j.url} key={j.url}>
                                        {j.title}
                                    </a>
                                </li>
                                ))}
                            </ul>
                    ) : null}
                </li>
            ))}
        </div>
    )
}
export default Toc;