/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/heading-has-content */
import {useState, useContext} from "react"
import {Icon, InlineIcon} from "@iconify/react"
import bxSearchAlt from "@iconify/icons-bx/bx-search-alt"
import OwmdContext from "../context_api/OpenWeatherMapData/owmdContext"

const Search = () => {
  const owmdContext = useContext(OwmdContext)

  const [text, setText] = useState("")

  function onSubmit(e) {
    e.preventDefault()

    owmdContext.searchData(text)
  }

  function saveText(e) {
    setText(e.target.value)
  }

  return (
    <form action="post" onSubmit={onSubmit} className="content__form form">
      <div class="form__text-enter">
        <input
          type="text"
          name="text"
          class="form__input"
          onChange={saveText}
          value={text}
        />
        <button type="submit" class="form__btn">
          <Icon icon={bxSearchAlt} style={{fontSize: "48px"}} />
        </button>
      </div>
    </form>
  )
}

export default Search
