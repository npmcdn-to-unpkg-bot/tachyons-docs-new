
import React, { Component } from 'react'
import _ from 'lodash'
import Wrap from './Wrap.jsx'

const data = [
  {
    'title': 'Runs on PostCSS',
    'body': <span>A flexible plugin framework for post-processing css. <a href='https://github.com/postcss/postcss' className='link dn dim f6 db mid-gray'>View on Github</a></span>,
    'id': 1
  },
  {
    'title': 'Mobile-first architecture',
    'body': 'Base classes are mobile by default. Can be overridden by namespaced classes targeting larger breakpoints.',
    'id': 2
  },
  {
    'title': 'Layout debugging',
    'body': 'Small css modules for debugging stacking and layout issues. Can easily be turned on or off during development.',
    'id': 3
  },
  {
    'title': 'Composable classes',
    'body': 'Construct anything from complex layouts to responsive components with a series of single purpose classes.',
    'id': 4
  },
  {
    'title': 'Cohesive design system',
    'body': 'Scale based on the powers of two. Starting at .25',
    'id': 5
  },
  {
    'title': 'Responsive Grid',
    'body': 'Infinitely nestable. Fully fluid. Extremely light-weight.',
    'id': 6
  },
  {
    'title': 'Customize, or extend',
    'body': "Tachyons is meant to be edited and customized to meet the needs of your product. It's just css. It isn't precious. Don't be afraid to change: class names, media queries, breakpoints, or values.",
    'id': 7
  }
]

export default class Features extends Component {
  render() {
    return (
      <article className='ph3 ph5-ns tl tl-ns bt b--light-gray pv3 pv5-ns' id='features'>
        <h1>Features</h1>
        <Wrap data={data} />
      </article>
    )
  }
}
