import styled from "styled-components";
import React from "react";

export const StyledOl = styled.ol`
    list-style-type: decimal;
    margin-left: 30px;
    margin-top: ${({ theme }) => theme.spacing[4]};
    margin-bottom: ${({ theme }) => theme.spacing[4]};
    font-family: ${({ theme }) => theme.font.sans};
    font-size: ${({ theme }) => theme.fontSize.lg};
  strong {
    font-weight: bold;
  }
  em {
    font-style: italic;
  }
`
export const Ol = props => {
    const { children, ...rest } = props
    return <StyledOl {...rest}>{children}</StyledOl>
}
