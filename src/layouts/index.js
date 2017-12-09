import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { Container, Menu } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.css'

const Header = () => (
  <Menu fixed='top' inverted>
    <Container>
        <Menu.Item as={Link} to='/' header>
          Hale Movie Library
        </Menu.Item>
    </Container>
  </Menu>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Hale Movie Library"
    />
    <Header />
    <Container style={{marginTop: '4rem'}}>
      {children()}
    </Container>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
