import React, { Component } from 'react'
import Products from "./components/Products"
import Login from "./components/Login"
import "./app.css"
export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Products /> */}
        <Login />
      </div>
    )
  }
}
