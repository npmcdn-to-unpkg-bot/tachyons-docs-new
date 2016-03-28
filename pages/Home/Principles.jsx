
import React, { Component } from 'react'
import _ from 'lodash'
import Wrap from './Wrap.jsx'

const data = [
  {
    'title': 'Responsive',
    'body': "Everything should be 100% responsive. Your website should work regardless of a users device or screensize. Don't break the functionality of HTML with CSS.",
    'id': 1
  },
  {
    'title': 'Readable',
    'body': 'No matter the lighting, or the device, font sizes should be large enough and contrast should be high enough.',
    'id': 2
  },
  {
    'title': 'Performant',
    'body': "Code isn't for making a developers life easier. It's for improving the lives of our users. If it's not doing that, why write it. A developer's time is not precious. A user's time is. Code should be optimized for performance.",
    'id': 3
  },
  {
    'title': 'Modular',
    'body': "Modules > Monoliths — Tachyons isn't a monolithic framework. It's a collection of self contained modules that can be mixed and matched or used independently. Use what you want, leave what you don't.",
    'id': 4
  },
  {
    'title': 'Reusable',
    'body': 'Doing one thing well, promotes reusability and reduces redundancy in a codebase.',
    'id': 5
  },
  {
    'title': 'Easy',
    'body': "Designing in the browser should be easy. If a computer can do it, you shouldn't have to.",
    'id': 6
  }
]

export default class Principles extends Component {
  render() {
    return (
      <article className='ph3 ph5-ns tl tl-ns bt b--light-gray pv3 pv5-ns' id='priciples'>
        <h1>Principles</h1>
        <Wrap data={data} />
      </article>
    )
  }
}
