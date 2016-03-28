
import React, { Component } from 'react'

export default class Header extends Component {
  render () {
    return (
      <header className='w-100 dt pa3 ph5-ns bg-near-white'>
        <div className='dtc v-mid tl w-50'>
          <a href='/' className='dib f5 f4-ns fw6 mt0 mb1 link black-70 dim' title='Home'>
            Tachyons
            <small className='dib nowrap f6 ph2 black-70 fw2'>v4.0.0-beta.16</small>
          </a>
        </div>
        <nav className='db dtc v-mid w-100 tr'>
          <a title='Documentation' href='/docs'
              className='f6 fw6 dim link black-70 mr1 mr3-m mr4-l dib'>
            Docs
          </a>
          <a title='Components' href='/components'
              className='f6 fw6 dim link black-70 mr1 mr3-m mr4-l dib'>
            Components
          </a>
          <a title='Tachyons on GitHub' href='http://github.com/tachyons-css/tachyons'
              className='f6 fw6 dim link black-70 mr1 mr3-m mr4-l dn dib-ns'>
            GitHub
          </a>
        </nav>
      </header>
    )
  }
}
