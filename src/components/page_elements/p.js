import React from 'react'
import styled from 'styled-components'

export const StyledP = styled.p`
  margin-top: ${({ theme }) => theme.spacing[2]};
    font-family: ${({ theme }) => theme.font.sans};
  strong {
    font-weight: bold;
  }
  em {
    font-style: italic;
  }
`

export const P = props => {
    const { children, ...rest } = props
    return <StyledP {...rest}>{children}</StyledP>
}