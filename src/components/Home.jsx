/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/heading-has-content */
import {Icon, InlineIcon} from "@iconify/react"
import bxSearchAlt from "@iconify/icons-bx/bx-search-alt"

const Home = () => {
  return (
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
  )
}

export default Home
