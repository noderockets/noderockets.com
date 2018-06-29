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
    <H2>Javascript powered missiles</H2>
    <Tagline>What could possibly go wrong?</Tagline>
    <P>NodeRockets is a full day event where JavaScript developers team up to build and launch JavaScript powered rockets!</P>
    <P>Each team builds a pressurized water rocket that runs Node.js on an on-board microcomputer. The on-board JavaScript reads the sensor data, deploys the parachute, and communicates position and orientation with the launch platform.</P>
    <P>The launch platform is JavaScript controlled too. It uses its own microcomputer to pressurize and launch the rocket.</P>
    <H2>Upcoming events</H2>
    <ul>
      <li><a href="https://2018.jsconf.us/schedule/#noderockets">JSConf US 2018</a></li>
    </ul>
    <H2>Check out our progress</H2>
    <ul>
      <li><a href="https://trello.com/b/RGp9NqFF/noderocket-next">Trello Board</a></li>
      <li><a href="https://plus.google.com/108148613138826725442">Google+</a></li>
    </ul>
    <H2>Rocket launches</H2>
    <iframe width="560" height="315" src="//www.youtube.com/embed/UlA_GWx6by0" frameborder="0" allowfullscreen></iframe>
    <iframe width="560" height="315" src="//www.youtube.com/embed/M7s5crwjrmQ" frameborder="0" allowfullscreen></iframe>
    <iframe width="560" height="315" src="//www.youtube.com/embed/UTOthJN3cIk" frameborder="0" allowfullscreen></iframe>
  </Wrapper>
)
