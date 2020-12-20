import React from "react"

const Navbar = () => {
  return (
    <nav className="primary-nav">
      <div class="primary-navigation">
        <div class="primary-navigation__logo">
          <img
            src="./images/logo.png"
            alt="logo for weather journal"
            class="primary-navigation__img"
          />
        </div>
        <ul className="primary-navigation__links">
          <li class="primary-navigation__items">
            <a href="/" className="nav-link link-1">
              Home
            </a>
          </li>
          <li class="primary-navigation__items">
            <a href="/contact" className="nav-link link-1">
              Contacts
            </a>
          </li>
          <li class="primary-navigation__items">
            <a href="./about" className="nav-link link-1">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
