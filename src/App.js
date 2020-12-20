/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/heading-has-content */
import {Icon, InlineIcon} from "@iconify/react"
import bxSearchAlt from "@iconify/icons-bx/bx-search-alt"

function App() {
  return (
    <div className="body-content-index">
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
      <div class="content">
        <img
          src="./images/logo-pri.png"
          alt="large logo"
          class="content__imgHeader"
        />
        <h2 className="content__sub-heading quote">
          for the best <br /> weather advice
        </h2>
        <form action="post" className="content__form form">
          <div class="form__text-enter">
            <input type="text" class="form__input" />
            <button type="submit" class="form__btn">
              <Icon icon={bxSearchAlt} style={{fontSize: "48px"}} />
            </button>
          </div>
        </form>
      </div>
      <div className="btn-cta">
        <span>
          <a href="/login" className="link-pri">
            sign up
          </a>
        </span>
        <br />&<br />
        <span>
          <a href="/" className="link-ghost">
            login
          </a>
        </span>
      </div>
    </div>
  )
}

export default App

/**<body className="body-content-index">
      <nav class="primary-nav">
          <div class="primary-navigation">
              <div class="primary-navigation__logo">
                  <img src="./images/logo.png" alt="logo for weather journal" class="primary-navigation__img" >
              </div>
                  <ul class="primary-navigation__links">
                      <li class="primary-navigation__items">
                          <a href="#" class="nav-link link-1">Home</a>
                      </li>
                      <li class="primary-navigation__items">
                          <a href="./content.html" class="nav-link link-2">Contacts</a>
                      </li>
                      <li class="primary-navigation__items">
                          <a href="#" class="nav-link link-3">About</a>
                      </li>
                  </ul>
          </div>
      </nav>
      <div class="content">
          <img src="./images/logo-pri.png" alt="large logo" class="content__imgHeader">
          <h2 class="content__sub-heading quote">for the best <br> weather advice</h2>
          <form action="post" class="content__form form">
              <div class="form__text-enter">
                  <input type="text" class="form__input">
                  <button type="submit" class="form__btn" ><span class="iconify" data-inline="false" data-icon="bx:bx-search-alt" style="font-size: 6rem;"></span></button>    
              </div>
              <label for="text" class="form__label">Enter any city</label>
          </form>
      </div>
      <div class="btn-cta">
          <span><a href="#" class="link-pri">sign up</a></span>
          <br>&<br>
          <span><a href="#" class="link-ghost">login</a></span>
      </div>
      </body> */
