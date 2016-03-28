
import React, { Component } from 'react'
import _ from 'lodash'
import WrapItem from './WrapItem.jsx'

export default class Wrap extends Component {
  render () {
    const data = _.sortBy(this.props.data, 'id')
    return (
      <section style={{display: 'flex', flexWrap: 'wrap'}}>
        {_.map(data, (input) => <WrapItem data={input} key={input.id} />)}
      </section>
    )
  }
}
