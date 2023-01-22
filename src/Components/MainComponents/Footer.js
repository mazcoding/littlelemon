import React from 'react'
import logo from '/Users/misaghazimi/Documents/WebDevelopment/lemon/src/images/Logo.svg'
import { chakra } from '@chakra-ui/react'

function Footer() {
  return (
    <footer>
      <img src={logo} alt="Logo" />
      <nav>
        <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/menu">Menu</a>
            </li>
            <li>
              <a href="/reservation">Reservation</a>
            </li>
            <li>
              <a href="/order">Order online</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
        </ul>
      </nav>
      <div className='Contact'>
        <ul>
          <li>2727 Farland Street <br/>
          60636 Chicago IL
          </li>
          <li>Phone: 555-3456-98734</li>
          <li>Email: info@littlelemon.com</li>
        </ul>
      </div>
      <div className='Social'>
        <ul>
        <li>
              <a href="https://www.facebook.com">Facebook</a>
            </li>
            <li>
              <a href="https://www.instagram.com">Instagram</a>
            </li>
            <li>
              <a href="https://www.twitter.com">Twitetr</a>
            </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer