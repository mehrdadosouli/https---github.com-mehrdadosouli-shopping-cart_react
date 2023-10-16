import React, { Component } from 'react'
import Products from "./components/Products"
import Login from "./components/Login"
import { Routes ,Route, Navigate } from 'react-router-dom'
export default class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path='/' element={<Navigate to='/login' />} />
          <Route path='/login' element={<Login />}/>
          <Route path='/products' element={<Products />}/>
        </Routes>
      </div>
    )
  }
}
