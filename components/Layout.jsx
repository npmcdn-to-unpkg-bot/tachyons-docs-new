
import React, { Component, PropTypes } from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

export default class Layout extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
  }

  render () {
    return (
      <main>
        <Header />
        {this.props.children}
        <Footer />
      </main>
    )
  }

}
