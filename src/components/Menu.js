import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Header = styled.header`
  //background: ${props => props.theme.colors.base};
  width: 100%;
  padding-top: 20px;
`
const Nav = styled.nav`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;

  ul {
    display: flex;
  }

  li {
    display: inline-block;
    margin-left: 1em;
  }

  a {
    text-decoration: none;
    color: DarkGray;
    font-weight: 100;
    transition: all 0.2s;
    font: 12px Arial;
  }
`

const activeLinkStyle = {
  color: 'black',
}

const Menu = () => {
  return (
    <Header>
      <Nav>
        <ul>
          <li>
            <Link to="/" activeStyle={activeLinkStyle}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/avengers" activeStyle={activeLinkStyle}>
              Avengers
            </Link>
          </li>
        </ul>
      </Nav>
    </Header>
  )
}

export default Menu
