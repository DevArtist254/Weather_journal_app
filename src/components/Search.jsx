/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/heading-has-content */
import {Icon, InlineIcon} from "@iconify/react"
import bxSearchAlt from "@iconify/icons-bx/bx-search-alt"

const Search = () => {
  return (
    <form action="post" className="content__form form">
      <div class="form__text-enter">
        <input type="text" class="form__input" />
        <button type="submit" class="form__btn">
          <Icon icon={bxSearchAlt} style={{fontSize: "48px"}} />
        </button>
      </div>
    </form>
  )
}

export default Search
