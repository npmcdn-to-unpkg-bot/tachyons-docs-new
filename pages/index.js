
import React, { Component } from 'react'
import Hero from './Home/Hero.jsx'
import GettingStarted from './Home/GettingStarted.jsx'

export default class HomePage extends Component {
  render() {
    return (
      <section className='w-100 pv5 pv6-ns bt b--black-10 bg-black-0125'>
        <Hero />
        <GettingStarted />
      </section>
    )
  }
}
