
import React, { Component } from 'react'
import _ from 'lodash'

export default class WrapItem extends Component {
  render() {
    let bodyClassName = 'f5 measure lh-copy mt0'
    let author = false
    if (this.props.data.author) {
      bodyClassName = 'f6 f5-ns measure lh-copy pr1 pr0-l i'
      author = _.split(this.props.data.author, ' - ')
    }
    return (
      <article className='dib pv2 w-100 w-50-ns pr3-ns'>
        {this.props.data.title ?
          <h2 className='f4 f3-ns fw6 mb0'>{this.props.data.title}</h2>
        : null}
        <p className={bodyClassName}>{this.props.data.body}</p>
        {author ?
          <footer>
            <span className='b'>{author[0]} </span>
            <i>- {author[1]}</i>
          </footer>
        : null}
      </article>
    )
  }
}
