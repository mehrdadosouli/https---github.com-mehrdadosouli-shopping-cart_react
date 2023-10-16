import React, { Component } from 'react'
import Products from "./components/Products"
import Login from "./components/Login"
import Detail from "./components/Detail"
import { Routes ,Route, Navigate  } from 'react-router-dom'
export default class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path='/login' element={<Login />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/products/detail/:id' element={<Detail />}/>
          <Route path='/' element={<Navigate to='/login' />} />
        </Routes>
      </div>
    )
  }
}
