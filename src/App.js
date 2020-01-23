import React, { Component } from 'react'
import Header from './Component/Header'
import Menu from './Component/Menu'
import Footer from './Component/Footer'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Menu/>
        <Footer/>
      </div>
    )
  }
}