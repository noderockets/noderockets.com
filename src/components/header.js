import React from 'react'
import { Router, Link } from 'react-static'
import styled from 'styled-components'

import Logo from './logo'

const Wrapper = styled.div`
  background: #222;
`

const Title = styled.h1`
  color: #7b7b7b;
  font-family: 'furore';
  font-size: 48px;
  font-weight: normal;
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6d941b;
`

const StyledLink = styled(Link)`
  padding: 20px 30px;
  color: #6d941b;
  font-family: 'furore';
  font-size: 20px;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`

const Hero = styled(StyledLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`

export default () => (
  <Wrapper>
    <Hero to="/">
      <Logo />
      <Title>Node Rockets</Title>
    </Hero>
    <Nav>
      <StyledLink to="/get-involved">Get Involved</StyledLink>
      <StyledLink to="/blueprints">Blueprints</StyledLink>
    </Nav>
  </Wrapper>
)
