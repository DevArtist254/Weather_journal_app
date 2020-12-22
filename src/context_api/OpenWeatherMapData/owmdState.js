//here we are going to init our state and connect it to our reducer
import React, {useReducer} from "react"
import axios from "axios"
import OwmdContext from "./owmdContext"
import OwmdReducer from "./owmdReducer"
import {SEARCH_DATA, SET_LOADING} from "../types"

const OwmdState = (props) => {
  const initState = {
    //subject to change
    loading: false,
    data: [],
  }

  //Connect to our reducer
  const [state, dispatch] = useReducer(OwmdReducer, initState)

  //Set our action and dispatch them with type

  const searchData = async (text) => {
    setLoading()

    const native = `https://`
    const city = `${text}`
    const key = `88a402f88eaeec4299cadea2b0c0dce6`
    const Url = `${native}api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`

    const res = await axios.get(`${Url}`)
    console.log(res.data)

    //if their is any data it should sent with as payload
    dispatch({
      type: SEARCH_DATA,
      payload: res.data,
    })
  }

  const setLoading = () =>
    dispatch({
      type: SET_LOADING,
    })

  return (
    <OwmdContext.Provider
      value={{
        data: state.data,
        loading: state.loading,
        searchData,
      }}
    >
      {props.children}
    </OwmdContext.Provider>
  )
}

export default OwmdState

/**
 * user: state.user,
        loading: state.loading,
        searchUsers,
 * 
 */
