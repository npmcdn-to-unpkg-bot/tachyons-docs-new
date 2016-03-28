
import React, { Component } from 'react'

export default class Principle extends Component {
  render() {
    return (
      <article className='dib pv2 w-100 w-50-ns pr0 pr2-ns'>
        <h2 className='f4 f3-ns fw6 mb0'>{this.props.data.title}</h2>
        <p className='f5 measure lh-copy mt0'>{this.props.data.body}</p>
      </article>
    )
  }
}
