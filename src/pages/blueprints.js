import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: white;
  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  margin: 0 auto;
  padding: 50px;
`

const H2 = styled.h2`
  font-family: 'furore';
  font-size: 35px;
  font-weight: normal;
  margin: 0;
  text-transform: uppercase;
`

const Tagline = styled.p`
  font-size: 14px;
  font-weight: bold;
`

const P = styled.p``

export default () => (
  <Wrapper>
    <H2>How to build a Rocket</H2>
    <Tagline>
      <a href="https://old.noderockets.com/hack.html">Looking for the old instructions?</a>
    </Tagline>
    <P>details go here</P>
  </Wrapper>
)
