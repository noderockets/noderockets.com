import React from 'react'
import { Router, Link } from 'react-static'
import styled from 'styled-components'

const Wrapper = styled.div`
  background: #222;
  color: #7b7b7b;
  font-family: 'furore';
  font-size: 16px;
  padding: 20px 60px;
`

const StyledLink = styled(Link)`
  color: #6d941b;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`

export default () => (
  <Wrapper>
    Brought to you by the <StyledLink>@NodeRockets</StyledLink> Core <StyledLink>Team</StyledLink>
  </Wrapper>
)
