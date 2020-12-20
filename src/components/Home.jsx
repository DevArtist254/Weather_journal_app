/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/heading-has-content */

import Search from "./Search"

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
      <Search />
    </div>
  )
}

export default Home
