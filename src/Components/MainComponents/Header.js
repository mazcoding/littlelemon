import React from 'react'
import logo from '/Users/misaghazimi/Documents/WebDevelopment/lemon/src/images/Logo.svg'
import Navigation from '../Pages/Navigation'

function Header() {
  return (
    <header>
        <img src={logo}  alt="The logo of little lemon" />
        <Navigation/>
    </header>
  )
}

export default Header;