import React from 'react'
import styled from 'styled-components'
import { AutoLink} from "./heading-link"
export const StyledH1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSize['4xl']};
  font-family: ${({ theme }) => theme.font.sans};
  margin-top: ${({ theme }) => theme.spacing[8]};
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  padding: ${({ theme }) => theme.spacing[1]};
    
  line-height: ${({ theme }) => theme.lineHeight.none};
`

export const H1 = props => {
    return <StyledH1 {...props}>{props.children}</StyledH1>
}