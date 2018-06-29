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
    <H2>Get Involved</H2>
    <ul>
      <li><a href="https://trello.com/b/RGp9NqFF/noderocket-next">Trello Board</a></li>
      <li><a href="https://trello.com/b/RGp9NqFF/noderocket-next">Old Trello Board</a></li>
      <li><a href="https://plus.google.com/108148613138826725442">Google+</a></li>
      <li><a href="https://github.com/noderockets/noderocket-rocket">Rocket Code</a></li>
      <li><a href="https://github.com/noderockets/mission-control">Mission Control Code</a></li>
      <li><a href="https://github.com/noderockets/noderockets.com">Site Code</a></li>
    </ul>
  </Wrapper>
)
