/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/heading-has-content */
import React from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Register from "./components/Register"
import NotFound from "./components/NotFound"
import OwmdState from "../src/context_api/OpenWeatherMapData/owmdState"

function App() {
  return (
    <div className="body-content-index">
      <OwmdState>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </OwmdState>
    </div>
  )
}

export default App
