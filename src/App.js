import React, { Component } from 'react'
import Header from './Component/default/Header'
import Menu from './Component/default/Menu'
import Footer from './Component/default/Footer'

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