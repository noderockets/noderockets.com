import React from 'react'
import { Router, Link } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'

import Header from './components/header'
import Footer from './components/footer'
import Logo from './components/logo'

injectGlobal`
  @font-face {
    font-family: 'furore';
    src: url('fonts/furore/Furore-webfont.eot');
    src: url('fonts/furore/Furore-webfont.eot?#iefix') format('embedded-opentype'),
         url('fonts/furore/Furore-webfont.woff') format('woff'),
         url('fonts/furore/Furore-webfont.ttf') format('truetype'),
         url('fonts/furore/Furore-webfont.svg#furore') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  body {
    background-color: #f2f0f0;
    font-family: sans-serif;
    margin: 0;
    padding: 0;
  }
`

const App = () => (
  <Router>
    <React.Fragment>
      <Header />
      <Routes />
      <Footer />
    </React.Fragment>
  </Router>
)

export default hot(module)(App)
